# AUDIOCORE R2 Music Library — deployment

This feature branch adds an R2-backed upload library and admin page.

## Files
- `worker/audio-library.js`: Cloudflare Worker API
- `admin.html`: browser admin UI (upload, list, preview, delete)
- `audiocore-config.js`: public Worker URL used by the player
- `index.html`: player will read the Worker playlist after the API URL is configured

## Cloudflare setup (one-time)
1. Create an R2 bucket named `audiocore-music`.
2. Create a Worker named `audiocore-library` and deploy `worker/audio-library.js`.
3. Add an R2 binding named `AUDIO_BUCKET` pointing to `audiocore-music`.
4. Add a Worker secret named `ADMIN_TOKEN` containing a long random value. Never put this value in the repository or public config.
5. Deploy the Worker and copy its `workers.dev` URL into `audiocore-config.js`.
6. Deploy the website branch. Open `admin.html`, enter the Worker URL and the secret, then upload audio.

## API
- `GET /health`
- `GET /playlist.json` — public playlist JSON
- `GET /media/tracks/<key>` — public audio delivery with byte-range support
- `GET /admin/tracks` — authenticated library list
- `PUT /admin/upload` — authenticated upload; file bytes in request body, metadata in X-File-Name/X-Title/X-Artist/X-Category
- `DELETE /admin/tracks?id=tracks/<key>` — authenticated delete

## Audio formats
Original audio files are retained. MIME types are set for MP3, WAV, FLAC, AAC, M4A, OGG, OPUS, WebM, AIFF, WMA and APE. Browser codec support varies; this initial implementation does not transcode files. A server-side FFmpeg conversion service would require a separate compute host and is not included in the Cloudflare free Worker/R2 setup.

## Limits and security
- Uploads are streamed from the browser to the Worker and then to R2.
- Cloudflare Worker request-size/plan limits apply; very large files may require multipart R2 uploads.
- The admin secret is entered at runtime and kept only in the browser session storage; it is never embedded in site source.
- The media endpoint is public so the public player can stream the uploaded library.
- Do not upload copyrighted material unless you have the rights to store and broadcast it.
