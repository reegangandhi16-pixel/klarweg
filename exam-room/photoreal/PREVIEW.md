# iPhone preview: ready, not published (2026-11-10)

```sh
# 1. build (demo package + local macOS demo voices + the chosen pilot room; nothing from M0/M1–M10)
node scripts/exam-room-preview.mjs --out <empty dir outside repo> --pilot ~/klarweg-work/klarweg-photoreal-pilot [--scene pilot-scene-v6.json]
# 2. local check (headless Chrome: desktop, iPhone-sized, no-video and no-scene fallbacks)
python3 -m http.server 8856 --bind 127.0.0.1 -d <dir> & node scripts/exam-room-photoreal-check.mjs http://127.0.0.1:8856
# 3. audit + dry run (default; uploads nothing)
node scripts/exam-room-preview-publish.mjs <dir>
# 4. ONLY after owner approval
node scripts/exam-room-preview-publish.mjs <dir> --confirm
```

What the guard rails enforce:

**Separation from klarweg.in**
- Target is fixed: the Cloudflare Pages direct-upload project `klarweg-site`. It is served only on
  `*.klarweg-site.pages.dev`; production klarweg.in is GitHub Pages and is never touched.
- The branch is a random `room-<16 hex>`, so it is always a preview deployment with an unguessable URL. HTTPS comes
  from Pages, which is needed for the iPhone microphone.

**What can be in the build**
- Only allowlisted paths: the exam client, the room, demo audio, the demo cast, the scene and its media.
- No server code: no `_worker.js`, `functions/`, `_redirects` or `_routes.json`.
- No stray media: every file must be referenced by `scene.json`.

**What the text scan blocks**
- Secret-like tokens.
- Personal e-mail addresses and the GCP project or account identifiers.
- Production API endpoints (code only).
- M0/M1–M10/release ids.

**Crawlers and permissions**
- `_headers` sends noindex, no-referrer, nosniff and `Permissions-Policy: microphone=(self)`.
- `robots.txt` disallows `/`.

**Runtime**
- `ROOM_PRODUCTION` must be false. The room only runs on preview hosts with `?room=on`.
- The demo page uses an in-browser memory store: recordings never leave the phone and there is no API, login or
  student data.

Access restriction: the URL is unguessable and noindex. Cloudflare Access on the preview alias would need a
dashboard change to the account, which was not made (owner decision).

Planned after approval (one choice): v1a room (`pilot-scene.json`) or v6 room (`pilot-scene-v6.json`). Both pass the
local check (47 checks) and the audit. The previous 3D preview (room-7afbc52e5bc0ff7d) stays as it is.
