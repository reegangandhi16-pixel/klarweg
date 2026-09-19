# Klarweg — issue reporting ("Found something wrong?")

A learner-facing report affordance on major chapter sections, a Cloudflare
Worker API, D1 persistence, private R2 screenshot storage, and a Worker-served
admin dashboard.

**Nothing in this folder is required for a lesson to work.** `chapter-app.js`
loads `kw-report.js` lazily inside a try/catch and calls it through optional
chaining. If the script 404s, throws, or the API is down, chapters render and
behave exactly as they do today.

## Layout

| Path | What it is |
|---|---|
| `kw-report.js` | Learner module: affordance, modal, context collection, API client. Published to GitHub Pages. |
| `kw-report.css` | Scoped styles (`.kw-report-*`). Published to GitHub Pages. |
| `build-section-refs.mjs` | **Read-only** generator. Parses `chapter/*-data.js` → the section allowlist. Never writes to `chapter/`. |
| `section-refs.json` | Generated. 3,100 sections across 259 chapters. |
| `worker/` | Cloudflare Worker. **Not** published to GitHub Pages. |
| `worker/src/` | `index` router · `cors` · `ids` · `refs` · `ratelimit` · `turnstile` · `images` · `auth` · `reports` · `admin` |
| `worker/tools/hash-passphrase.mjs` | Generates `ADMIN_PASSPHRASE_SALT` / `ADMIN_PASSPHRASE_HASH`. |
| `_dev-*.html`, `_dev-mocks.js` | Dev harnesses. Not deployed, not referenced by any shipped page. |
| `worker/public/reports.html` | Admin dashboard, served by the Worker at `/admin`. |
| `worker/public/admin.css` / `admin-api.js` / `admin-app.js` | Dashboard styles, isolated API client, dashboard logic. Worker-only — never published to Pages. |

## Section refs

`klarweg:<level>/<chapter-id>/<section-id>` — e.g.
`klarweg:a2/a2-1-genitiv/vocabulary`. Deterministic from data the page
already holds (`CHAPTER.id`, `section.id`), stable across content edits, and
the **only** location field the client sends. The Worker looks it up in
`section_refs` and derives level, chapter, section and page path from that
row, so a forged payload cannot invent a location.

Regenerate after adding a chapter:

```sh
node report/build-section-refs.mjs
cd report/worker
wrangler d1 execute klarweg-reports --file=./section-refs.sql --remote
```

## Screenshots — how re-encoding is split

The Workers runtime has **no canvas, `createImageBitmap` or `OffscreenCanvas`**,
so a Worker cannot decode and re-encode pixels. The work is split:

- **Browser** (`kw-report.js`, wired in stage 5): downscale to ≤1600px on the
  long edge and export WebP before upload. This is the pixel re-encode.
- **Worker** (`images.js`): reject anything whose **magic bytes** are not
  PNG/JPEG/WebP (the declared MIME type is ignored), reject animated WebP,
  read real dimensions from the header, and **strip every metadata container
  chunk** — PNG `tEXt`/`iTXt`/`zTXt`/`eXIf`, JPEG `APP0–APP15` (EXIF, XMP,
  ICC) and comments, WebP `EXIF`/`XMP` — by rewriting the container. EXIF GPS
  cannot survive this.

The bucket has no public access and no custom domain. The only read path is
`GET /api/admin/reports/:id/screenshot`, session-gated, streamed through the
Worker with `no-store, private`, `nosniff` and a `sandbox` CSP.

## Rate limits

| Bucket | Budget |
|---|---|
| per reporter | 5 / hour, 20 / day |
| per reporter, Turnstile configured but unverified | 2 / hour |
| global circuit breaker | 300 / day → 503 |
| admin login | 5 attempts / 15 min per IP hash |

The reporter key is `HMAC(IP + UTC day, RATE_SALT)`. Raw IPs are never stored
or logged.

## Prerequisites and authentication

Everything below assumes a local shell in the repository. Nothing here is
run by the site; these are one-time operator steps.

**Required**

| Tool | Why | Check |
|---|---|---|
| Node 18+ | runs `build-section-refs.mjs` and `tools/hash-passphrase.mjs` (both use `node:` built-ins and top-level `await`) | `node --version` |
| npm | ships with Node; used to obtain wrangler | `npm --version` |
| wrangler | every D1, R2, secret and deploy command | `wrangler --version` |

If `wrangler --version` is not found, install it (`npm install -g wrangler`, or
use `npx wrangler …` in place of `wrangler …` throughout). No wrangler version
is pinned in this repository.

**Cloudflare authentication**

wrangler must be authenticated against the Cloudflare account that will own
the Worker, the `klarweg-reports` D1 database and the
`klarweg-report-screenshots` R2 bucket. Verify with `wrangler whoami`; if it
reports no account, authenticate with `wrangler login` (browser OAuth) before
continuing.

**Authentication must come first.** `wrangler d1 create`, `wrangler r2 bucket
create`, every `wrangler secret put` and `wrangler deploy` all act on a live
account and fail without it. Only `node tools/hash-passphrase.mjs` and
`node report/build-section-refs.mjs` work unauthenticated — they touch no
Cloudflare resource.

**Never put credentials in the repository or on a command line.** API tokens,
the admin passphrase and the Turnstile secret key belong in wrangler's own
credential store or in the interactive `wrangler secret put` prompt, which
reads the value from stdin rather than from `argv`. Do not add them to
`wrangler.toml`, `.env*`, or any file in `report/`. The one exception to the
argv rule is `node tools/hash-passphrase.mjs '<passphrase>'`, which only
prints a salt and a hash and stores nothing — clear it from your shell history
afterwards if your shell records it.

## First-time deploy

```sh
cd report/worker
wrangler d1 create klarweg-reports          # paste database_id into wrangler.toml
wrangler r2 bucket create klarweg-report-screenshots
wrangler d1 execute klarweg-reports --file=./schema.sql --remote
wrangler d1 execute klarweg-reports --file=./section-refs.sql --remote

wrangler secret put TURNSTILE_SECRET_KEY
node tools/hash-passphrase.mjs 'your admin passphrase'   # prints the two values
wrangler secret put ADMIN_PASSPHRASE_HASH
wrangler secret put ADMIN_PASSPHRASE_SALT
wrangler secret put RATE_SALT                 # 32+ random bytes, hex
wrangler secret put SESSION_PEPPER            # 32+ random bytes, hex

wrangler deploy
```

Then set `TURNSTILE_SITE_KEY` in `[vars]` (the **site** key is public; the
secret key never leaves the Worker) and point `KW_REPORT_ENDPOINT` /
`ENDPOINT` in `kw-report.js` at the deployed `*.workers.dev` host.

The R2 bucket must have **no public access and no custom domain**. The only
read path is `GET /api/admin/reports/:id/screenshot`, behind an admin session.

## ALLOWED_ORIGINS

`ALLOWED_ORIGINS` is a plain `[vars]` entry in `report/worker/wrangler.toml` —
a comma-separated list read by `src/cors.js`. There is no separate
configuration mechanism and no dashboard step; edit the file and re-deploy.

```toml
[vars]
ALLOWED_ORIGINS = "https://klarweg.com,https://www.klarweg.com,https://reegangandhi16-pixel.github.io"
```

**Learner origin vs. Worker endpoint — these are different things.**

- The **learner origin** is where the chapter page is served from: the
  GitHub Pages production origin, and the custom domain(s) in front of it.
  This is what the browser puts in the `Origin` header, and this is what
  belongs in `ALLOWED_ORIGINS`.
- The **Worker endpoint** is where the request goes: the `*.workers.dev` host
  in `ENDPOINT` / `KW_REPORT_ENDPOINT`. It is the destination, not a caller.

So the production GitHub Pages origin **must** be listed. The deployed
`*.workers.dev` origin should **not** be added: no learner page is served from
it, and the admin dashboard it serves is same-origin, which `src/index.js`
handles by refusing any `/api/admin/*` request whose `Origin` differs from the
Worker's own — admin routes never receive CORS headers at all. Add it only if
something in the code specifically requires it, which today nothing does.

Apply this **before or with the deployment that is meant to accept learner
reports**. `ALLOWED_ORIGINS` is baked in at deploy time, so a deploy carrying
the wrong list will answer real learners with `403 origin_not_allowed` until
the next deploy. An empty list is not a safe default either — with no `Origin`
allowlisted, a browser request carrying an unknown `Origin` is refused.

## Post-deployment verification

A smoke test to run once, in order, against the freshly deployed Worker.

**These are verification procedures, not repository commands.** This project
ships no smoke-test script and no CLI for the HTTP checks; the routes below
are the ones declared in `worker/src/index.js`. Run them with whatever you
prefer — `curl`, a REST client, or the real UI — substituting `$WORKER` for
the deployed `*.workers.dev` host. Items marked *UI* are easiest to do in a
browser because they depend on cookies.

| # | What to test | Expected | Changes data? | Safe to repeat? |
|---|---|---|---|---|
| 1 | `GET $WORKER/api/health` | `200` and exactly `{"ok":true}` — no version, binding or region detail | No | Yes |
| 2 | Admin login: `POST $WORKER/api/admin/login` with the wrong passphrase, then the right one | `401 invalid_credentials`, then `200` with a `csrf` value and `Set-Cookie: kw_admin=… HttpOnly; Secure; SameSite=Strict` | Yes — writes an `admin_sessions` row on success; failures increment the login counter | Yes, but 5 failures in 15 min trips the login throttle |
| 3 | Admin session: `GET $WORKER/api/admin/me` with the cookie, and again without it | `200` with the cookie, `401 unauthorized` without | No | Yes |
| 4 | Learner submission: open a real chapter section on the production origin, use “Found something wrong?” and send a report *(UI — this also proves `ALLOWED_ORIGINS`, Turnstile and the endpoint in one go)* | `201` and a `KW-XXXXXX` reference in the success state | **Yes** — inserts a report | Yes, but it counts against 5/hour per reporter; use throwaway text |
| 5 | Invalid section ref: `POST $WORKER/api/reports` with `section_ref=klarweg:a2/not-a-chapter/vocabulary` | `400 invalid_section`, nothing stored | No | Yes |
| 6 | Rate limit: repeat a valid submission past the per-reporter budget (5/hour, or 2/hour when Turnstile is configured and unverified) | `429 rate_limited` with a `Retry-After` header; the modal shows the “try again later” copy | Yes for the accepted ones | Yes, but it burns your hourly budget — do this last |
| 7 | Duplicate suppression: send the same section + category + wording twice from the same client within 24 h | Second call returns `200` with `duplicate: true` and the **same** id; no second row | First call yes, second no | Yes |
| 8 | Screenshot upload: attach a large PNG to a report | `201` with `screenshot: "stored"`; the stored object is WebP and ≤1600 px on the long edge | **Yes** — writes to R2 | Yes |
| 9 | Protected retrieval: open that report in the dashboard *(UI)*, then request `GET $WORKER/api/admin/reports/:id/screenshot` **without** the session cookie | Image renders in the drawer; the cookie-less request returns `401` | No | Yes |
| 10 | Status update: change a report's status in the drawer *(UI)* | `200`; the row and the counts update. A `PATCH` with no CSRF header returns `403 csrf`; an unknown status returns `400 invalid_status` | **Yes** — updates the report | Yes |
| 11 | Internal notes: save notes in the drawer *(UI)* | `200`; notes persist and appear only in `admin_notes`, never in the learner-facing description | **Yes** | Yes |
| 12 | Logout: sign out, then reuse the old cookie on `GET /api/admin/reports` | `200` on logout with cleared cookies; the reused cookie gives `401` | **Yes** — deletes the `admin_sessions` row | Yes (log in again first) |
| 13 | CORS / origin: `POST $WORKER/api/reports` with `Origin: https://evil.test`; then with the production origin; then `OPTIONS` preflight from each | Unknown origin `403 origin_not_allowed`; allowed origin `201` with `Access-Control-Allow-Origin` echoing that exact origin (never `*`) and `Vary: Origin`; preflight `204` vs `403`. Also confirm `/api/admin/*` returns **no** `Access-Control-Allow-Origin` | Only the successful one | Yes |
| 14 | No public R2: in the Cloudflare dashboard confirm `klarweg-report-screenshots` has public access disabled and no custom domain; confirm no `r2.dev` URL appears in any response body | Bucket unreachable except through the admin route | No | Yes |
| 15 | Cookies in a real browser *(UI)*: after signing in at `$WORKER/admin`, confirm `kw_admin` is `HttpOnly` + `Secure` + `SameSite=Strict`, `kw_admin_csrf` is readable by the page, and that the dashboard survives a reload but not an 8-hour gap | Session persists across reloads; expiry drops to the login screen with the “session expired” message | No | Yes |

**Cleanup.** Items 4, 6, 7, 8, 10 and 11 leave real rows behind. Either mark
those reports `dismissed` in the dashboard, or delete them directly with
`wrangler d1 execute klarweg-reports --command "DELETE FROM reports WHERE id IN ('KW-…')" --remote`
before opening the feature to learners. Do **not** clear `section_refs` while
tidying — an empty allowlist rejects every report.

## Rollback

Remove the two hooks in `chapter/chapter-app.js` (the loader in `init()` and
the `KW_Report?.attach(...)` line in `sectionShell()`). No other production
file is touched, so that is the complete rollback.

## Status

- [x] Stage 1 — foundation: schema, router skeleton, ref generator, learner module skeleton
- [x] Stage 2 — learner modal UI (submission still disabled)
- [x] Stage 3 — Worker backend: validation, Turnstile, rate limits, dedupe, R2, admin API
- [x] Stage 4 — admin dashboard (`worker/public/`)
- [x] Stage 5 — wired into `chapter-app.js`, client-side screenshot re-encode, Turnstile mount, `SUBMIT_ENABLED = true`

### Before this can go live

1. Provision Cloudflare (see "First-time deploy") and note the real
   `*.workers.dev` host.
2. Set `ENDPOINT` in `kw-report.js` to that host (it currently points at
   `https://klarweg-reports.workers.dev`).
3. Optionally set `KW_REPORT_TURNSTILE_SITE_KEY` (public site key). Until then
   reports are accepted on the Worker's unverified path.
4. Add the deployed origin to `ALLOWED_ORIGINS` — see the **ALLOWED_ORIGINS**
   section: the learner origin is the GitHub Pages / custom-domain host, not
   the Worker's own `*.workers.dev` endpoint.
5. Work through **Post-deployment verification** and clean up the test rows
   it leaves behind.

### Requires real Cloudflare provisioning

Everything in `_dev-worker-tests.html` runs against in-memory D1/R2 doubles.
These still need a live environment: D1 `CHECK` constraint enforcement,
`ON CONFLICT ... RETURNING` semantics, real R2 round-trips, a real Turnstile
`siteverify` exchange, and browser cookie behaviour on the deployed origin.
