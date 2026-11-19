# TEKKNO MILIEU RADIO

Static public website prepared for Netlify deployment.

## Deploy
- Build command: none
- Publish directory: `.`
- Netlify configuration: `netlify.toml`

## Audio archive
Add public HTTPS audio URLs to `playlist.json` using this structure:

```json
{
  "tracks": [
    { "title": "DJ Name – Mix Title", "url": "https://public-audio-url.example/mix.mp3", "show": "TEKKNO MILIEU RADIO" }
  ]
}
```

The site does not claim that an empty archive, server-side AutoDJ, integrated chat, or admin studio is active. Those require an audio host and a backend/authentication service. The live button currently opens the official Listen2MyRadio listening page.
