# Gated vocabulary images — access Worker route

**Status:** implemented and tested on the access-Worker deploy lineage
(branch `deploy/access-vocab-images-on-51ccd26a`, based on the live source
`deploy/access-exam-on-bf0737f4` @ 51ccd26a). **Not deployed.** Deployment
and Worker cutover need the owner's final approval (see ROLLOUT.md).

## Why
Illustrations for paid chapters must not be public:

1. **Paid-content policy.** Paid chapter content is never served by GitHub
   Pages. Paid audio is served only by `klarweg.in/api/media/` to entitled
   buyers. Images follow the same rule.
2. **Repository size.** Thousands of binaries would bloat the public git
   repository and the Pages artifact forever.

Free Chapter 1 images are public on Pages (`public/vocab-img/`, allowlisted
per file). Every other image exists only in the private R2 bucket.

## Route
`GET|HEAD klarweg.in/api/media/vocab-img/<id>-<400|800>.<avif|webp>`
(`access/worker/src/media-images.js`, called from `media.js`)

- `<id>` = first 20 hex characters of sha256(concept key). Opaque: the URL
  does not name the word.
- **Storage:** private R2 bucket `klarweg-audio` (binding `MEDIA`), prefix
  `vocab-img/`, uploaded from `$VOCAB_IMG_STORE/r2/vocab-img/`.
- **Levels map:** `vocab-img/levels.json` in the bucket
  = `docs/visual-vocab/gated-images.json` = `{ "<id>": ["A1", "B1"], … }`,
  the levels of the PAID chapters that use the image. It is derived from the
  chapter data by `pipeline.mjs apply` (`syncManifests`), and
  `scripts/vocab-images.test.mjs` asserts it matches the chapters exactly.

## Authorization (fail closed at every step)
1. same origin `klarweg.in` (existing `isSameOriginApi`), key matches
   `^vocab-img/[0-9a-f]{20}-(400|800)\.(avif|webp)$` → else **404**, no bucket read
2. no foreign Referer → else **403**
3. live session → else **401**
4. entitlements read (expiry honoured; Lifetime = all levels) → error **503**
5. levels map readable and an object → else **503** (never cached on failure)
6. the user holds at least one of the image's levels → else **403**
7. object missing → **403** (same body as 6: no existence oracle)

A shared image is visible through any level that uses it, never through
others: an image used by A1 and B1 paid chapters is served to an A1 or a B1
buyer, never to a C2-only buyer.

## Headers
`Cache-Control: private, no-store` (start conservative, as requested) ·
`X-Content-Type-Options: nosniff` · `Cross-Origin-Resource-Policy: same-origin` ·
`Referrer-Policy: no-referrer` · `Content-Type: image/avif|image/webp` · ETag ·
Content-Length. HEAD returns no body.

## Client
`vocabFigure()` takes any `src`. A paid entry carries
`img.src = '/api/media/vocab-img/<id>'`. A failed load (401/403/503) removes
the figure, so the card degrades to text. With Images switched off, no
figure is built and nothing is requested.

## Tests
`access/worker/test/media-images.test.mjs` (13): key rule; malformed/levels
map → 404 without reads; signed out 401 (existing, unlisted, missing alike);
workers.dev 404 and foreign Referer 403; right level 200 with headers; wrong
level 403; shared image across levels; Lifetime; expired, revoked
entitlement, revoked session, forged cookie; no existence oracle; fail closed
on missing/unreadable/malformed map, R2 error, no binding; unknown level
names grant nothing; HEAD; audio routes untouched.
