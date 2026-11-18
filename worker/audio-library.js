/**
 * AUDIOCORE / TEKKNO MILIEU RADIO — R2 Audio Library API
 * Cloudflare Worker binding: AUDIO_BUCKET (R2 bucket)
 * Secret: ADMIN_TOKEN (random secret; never commit it)
 */
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Authorization, Content-Type, X-File-Name, X-Title, X-Artist, X-Category",
  "Access-Control-Expose-Headers": "Content-Length, Content-Range, Accept-Ranges",
  "Access-Control-Max-Age": "86400"
};
const TYPES = new Set([
  "audio/mpeg","audio/mp3","audio/wav","audio/wave","audio/x-wav","audio/flac",
  "audio/aac","audio/mp4","audio/x-m4a","audio/alac","audio/wavpack","audio/ogg","audio/opus","audio/webm",
  "audio/aiff","audio/x-aiff","audio/x-ms-wma","audio/ape","application/octet-stream"
]);
const json = (data, status=200, headers={}) => new Response(JSON.stringify(data), {
  status, headers: {...CORS, "Content-Type":"application/json; charset=utf-8", ...headers}
});
function safeName(value) {
  return String(value || "audio").normalize("NFKD").replace(/[^\w. -]/g,"").trim().replace(/[ .]+/g,"-").slice(0,120) || "audio";
}
function authorized(request, env) {
  const supplied = request.headers.get("Authorization") || "";
  const expected = "Bearer " + (env.ADMIN_TOKEN || "");
  if (!env.ADMIN_TOKEN || supplied.length !== expected.length) return false;
  let diff = 0;
  for (let i=0;i<supplied.length;i++) diff |= supplied.charCodeAt(i) ^ expected.charCodeAt(i);
  return diff === 0;
}
function authError(request, env) {
  return authorized(request, env) ? null : json({error:"Nicht autorisiert."}, 401);
}
async function listTracks(env, origin, prefix="tracks/") {
  const items = [];
  let cursor;
  do {
    const page = await env.AUDIO_BUCKET.list({prefix, cursor, limit:1000, include:["httpMetadata","customMetadata"]});
    for (const obj of page.objects) {
      const meta = obj.customMetadata || {};
      items.push({
        id: obj.key,
        title: meta.title || obj.key.split("/").pop(),
        artist: meta.artist || "",
        category: meta.category || "Unsortiert",
        contentType: obj.httpMetadata?.contentType || "application/octet-stream",
        size: obj.size,
        uploaded: obj.uploaded?.toISOString?.() || null,
        url: origin + "/media/" + obj.key.split("/").map(encodeURIComponent).join("/")
      });
    }
    cursor = page.truncated ? page.cursor : undefined;
  } while (cursor);
  items.sort((a,b)=>(a.title||"").localeCompare(b.title||"","de"));
  return items;
}
function mimeFor(name, supplied) {
  if (supplied && TYPES.has(supplied.toLowerCase())) return supplied.toLowerCase();
  const ext = (name.split(".").pop() || "").toLowerCase();
  return ({mp3:"audio/mpeg",wav:"audio/wav",flac:"audio/flac",aac:"audio/aac",m4a:"audio/mp4",mp4:"audio/mp4",ogg:"audio/ogg",opus:"audio/opus",oga:"audio/ogg",webm:"audio/webm",aif:"audio/aiff",aiff:"audio/aiff",wma:"audio/x-ms-wma",ape:"audio/ape",wv:"audio/wavpack",alac:"audio/alac"})[ext] || "application/octet-stream";
}
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") return new Response(null,{status:204,headers:CORS});
    try {
      if (url.pathname === "/health" && request.method === "GET") {
        return json({ok:true,service:"AUDIOCORE R2 Audio Library",bucketReady:!!env.AUDIO_BUCKET});
      }
      if (url.pathname === "/playlist.json" && request.method === "GET") {
        const tracks = await listTracks(env, url.origin);
        return json({tracks},200,{"Cache-Control":"public, max-age=30"});
      }
      if (url.pathname.startsWith("/media/") && request.method === "GET") {
        const key = url.pathname.slice("/media/".length).split("/").map(decodeURIComponent).join("/");
        if (!key.startsWith("tracks/")) return json({error:"Ungültiger Medienpfad."},404);
        const range = request.headers.get("Range");
        let object, status=200, headers={...CORS,"Cache-Control":"public, max-age=3600","Accept-Ranges":"bytes"};
        if (range) {
          const match = /^bytes=(\d+)-(\d*)$/.exec(range);
          if (!match) return new Response(null,{status:416,headers:CORS});
          const start = Number(match[1]), end = match[2] ? Number(match[2]) : undefined;
          if (end !== undefined && end < start) return new Response(null,{status:416,headers:CORS});
          object = await env.AUDIO_BUCKET.get(key,{range:{offset:start,...(end!==undefined?{length:end-start+1}:{})}});
          if (!object) return json({error:"Datei nicht gefunden."},404);
          const total = object.size;
          const last = end === undefined ? total-1 : Math.min(end,total-1);
          status=206;
          headers["Content-Range"] = `bytes ${start}-${last}/${total}`;
          headers["Content-Length"] = String(last-start+1);
        } else {
          object = await env.AUDIO_BUCKET.get(key);
          if (!object) return json({error:"Datei nicht gefunden."},404);
          headers["Content-Length"] = String(object.size);
        }
        headers["Content-Type"] = object.httpMetadata?.contentType || "application/octet-stream";
        headers["Content-Disposition"] = "inline";
        return new Response(object.body,{status,headers});
      }
      if (url.pathname.startsWith("/admin/")) {
        const denied = authError(request,env); if (denied) return denied;
        if (url.pathname === "/admin/tracks" && request.method === "GET") {
          const playable = await listTracks(env,url.origin,"tracks/");
          const originals = await listTracks(env,url.origin,"originals/");
          return json({tracks:[...playable,...originals]});
        }
        if (url.pathname === "/admin/multipart/start" && request.method === "POST") {
          const meta = await request.json();
          const filename = safeName(meta.filename || "audio-file");
          const type = mimeFor(filename,meta.contentType || "application/octet-stream");
          const prefix = meta.storageType === "original" ? "originals/" : "tracks/";
          const key = prefix + Date.now() + "-" + crypto.randomUUID().slice(0,8) + "-" + filename;
          const upload = await env.AUDIO_BUCKET.createMultipartUpload(key,{
            httpMetadata:{contentType:type,cacheControl:"public, max-age=3600"},
            customMetadata:{
              title:String(meta.title || filename.replace(/\.[^.]+$/,"")).slice(0,180),
              artist:String(meta.artist || "").slice(0,120),
              category:String(meta.category || "Unsortiert").slice(0,80),
              originalName:String(meta.filename || filename).slice(0,180)
            }
          });
          return json({ok:true,key:upload.key,uploadId:upload.uploadId});
        }
        if (url.pathname === "/admin/multipart/part" && request.method === "PUT") {
          const key=url.searchParams.get("key") || "", uploadId=url.searchParams.get("uploadId") || "";
          const partNumber=Number(url.searchParams.get("partNumber"));
          if (!(key.startsWith("tracks/") || key.startsWith("originals/")) || key.includes("..") || !uploadId || !Number.isInteger(partNumber) || partNumber<1 || partNumber>10000) return json({error:"Ungültige Multipart-Daten."},400);
          const upload=env.AUDIO_BUCKET.resumeMultipartUpload(key,uploadId);
          const part=await upload.uploadPart(partNumber,request.body);
          return json(part);
        }
        if (url.pathname === "/admin/multipart/complete" && request.method === "POST") {
          const key=url.searchParams.get("key") || "", uploadId=url.searchParams.get("uploadId") || "";
          if (!(key.startsWith("tracks/") || key.startsWith("originals/")) || key.includes("..") || !uploadId) return json({error:"Ungültige Multipart-Daten."},400);
          const body=await request.json();
          const upload=env.AUDIO_BUCKET.resumeMultipartUpload(key,uploadId);
          const object=await upload.complete(body.parts || []);
          return json({ok:true,key:object.key,size:object.size});
        }
        if (url.pathname === "/admin/multipart/abort" && request.method === "DELETE") {
          const key=url.searchParams.get("key") || "", uploadId=url.searchParams.get("uploadId") || "";
          if (!(key.startsWith("tracks/") || key.startsWith("originals/")) || key.includes("..") || !uploadId) return json({error:"Ungültige Multipart-Daten."},400);
          await env.AUDIO_BUCKET.resumeMultipartUpload(key,uploadId).abort();
          return json({ok:true});
        }
        if (url.pathname === "/admin/upload" && request.method === "PUT") {
          const original = request.headers.get("X-File-Name") || "audio-file";
          const filename = safeName(original);
          const type = mimeFor(filename,request.headers.get("Content-Type"));
          if (!type.startsWith("audio/") && type !== "application/octet-stream") return json({error:"Dateityp nicht unterstützt."},415);
          const prefix = request.headers.get("X-Storage-Type") === "original" ? "originals/" : "tracks/";
          const key = prefix + Date.now() + "-" + crypto.randomUUID().slice(0,8) + "-" + filename;
          await env.AUDIO_BUCKET.put(key,request.body,{
            httpMetadata:{contentType:type,cacheControl:"public, max-age=3600"},
            customMetadata:{
              title:(request.headers.get("X-Title") || filename.replace(/\.[^.]+$/,"")).slice(0,180),
              artist:(request.headers.get("X-Artist") || "").slice(0,120),
              category:(request.headers.get("X-Category") || "Unsortiert").slice(0,80),
              originalName:original.slice(0,180)
            }
          });
          return json({ok:true,key,title:request.headers.get("X-Title") || filename});
        }
        if (url.pathname === "/admin/tracks" && request.method === "DELETE") {
          const key = url.searchParams.get("id") || "";
          if (!(key.startsWith("tracks/") || key.startsWith("originals/")) || key.includes("..")) return json({error:"Ungültige Datei-ID."},400);
          await env.AUDIO_BUCKET.delete(key);
          return json({ok:true});
        }
        return json({error:"Admin-Endpunkt nicht gefunden."},404);
      }
      return json({error:"Nicht gefunden."},404);
    } catch (error) {
      return json({error:"Serverfehler",detail:String(error?.message || error)},500);
    }
  }
};
