# Gated vocabulary images — access Worker route (proposal, NOT implemented)

**Status:** design only. Needs owner approval. Then it is implemented on the
live access-Worker lineage (`deploy/access-*` branches, not `main`) and
deployed with `npm run deploy:access`.

## Why
The 8,000-odd illustrations for paid chapters must not be public:

1. **Paid-content policy.** Paid chapter content is never served by GitHub
   Pages. Paid audio is served only by `klarweg.in/api/media/` to signed-in
   buyers (`access/worker/src/media.js`). Images follow the same rule.
2. **Repository size.** About 150 MB of binaries would bloat the public git
   repository and the Pages artifact (currently 620 files) forever.

Free Chapter 1 images stay public on Pages, exactly as in the A1·01 pilot
(`public/vocab-img/`, allowlisted per file).

## Route
`GET|HEAD klarweg.in/api/media/vocab-img/<key>-<400|800>.<avif|webp>`
(the Worker sees `/media/vocab-img/...`)

- **Storage:** the private R2 bucket `klarweg-audio` (binding `MEDIA`) under the
  prefix `vocab-img/`, or a new private bucket. Objects are uploaded from
  `$VOCAB_IMG_STORE/r2/vocab-img/` (pipeline `encode`).
- **Key regex:** `^vocab-img/[a-z0-9-]{3,140}-(400|800)\.(avif|webp)$`. Today
  media.js accepts `.mp3` only.
- **Access:** same as word audio, i.e. signed in plus any active level
  (`readEntitlements`). A concept is shared across levels, so per-level gating
  would hide an A1 image from a B1-only buyer.
- **Used files only:** the key must be listed in `vocab-img/manifest.json` in
  the bucket (= `docs/visual-vocab/gated-images.json`). Otherwise 404. If the
  list cannot be read: 503 (fail closed), as for audio.
- **Headers:** `content-type: image/avif|image/webp`, `x-content-type-options: nosniff`.
- **Caching (owner decision needed):** paid audio is `private, no-store`. For
  images I recommend `private, max-age=604800, immutable`. Files never change
  under a key, it is still never edge-cached, and it avoids re-downloading
  every card image (~3–6 KB each) on every visit. With `no-store`, a 40-card
  chapter costs about 200 KB per page view.
- **Referer/origin:** the existing foreign-Referer refusal applies.

## Client
Nothing more is needed. `vocabFigure()` already takes any `src`. A paid chapter
entry carries `img.src = '/api/media/vocab-img/<key>'`; a learner without
access never sees the paid chapter, and a 403/404 removes the figure (text-only
card).

## Tests to add with the Worker change
classify() for the new prefix · used-list 404 · no-session 401 · expired
entitlement 403 · content-type · cache header · Referer refusal.
