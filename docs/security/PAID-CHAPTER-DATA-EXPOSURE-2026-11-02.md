# Paid chapter data exposure: moved

Superseded on 2 November 2026 by `docs/security/PAID-CONTENT-REMEDIATION.md` on the
local branches `security/paid-lock-1-serve` and `security/paid-lock-2-unpublish`.

Corrections to this note's first version:
- The Worker route `/api/chapters/<id>.js` is already live (de8aea72, R2 release r1).
- Paid lesson text was also public in `public/audio/manifest.json` and 3,029 `audio-timing` files.
- Paid MP3s are public through the audio Worker and the public `klarweg-audio` repo (jsDelivr).
