# Paid content release: readiness review (2 November 2026)

Status: **ready for owner review. Nothing uploaded, deployed, merged, purged or made private.**
Every production step below needs the owner's explicit approval, given one step at a time.
This release does **not** complete the paid-content fix: see §8.

## 1. Branches, PRs and order

| # | Branch (local, unpushed) | Base | Ships | Becomes |
|---|---|---|---|---|
| W | `deploy/access-chapter-r3-on-fe2ab01` @194331f2 | fe2ab01 (= live de8aea72) | Worker config `CHAPTER_RELEASE = "r3"` | not a PR; `wrangler versions upload` + `versions deploy` |
| S1 | `security/paid-lock-1-serve` | main 1aa897f6 | paid pages load `klarweg.in/api/chapters/<id>.js`; audio split; progress-sync guard; cache-busters | new PR → main |
| S2 | `security/paid-lock-2-unpublish` | S1 | stop publishing paid data, full manifest, paid timing; deploy-workflow assertions | new PR → main, opened after S1 merges |

- **Order:** R2 upload → W → S1 → wait ≥10 min → S2 → Cloudflare cache purge.
- **#252 / #253** (draft; updated by another session to d6fc2797 / 51e67bf4) are superseded by S1/S2, which add the audio split, the progress-sync guard and cache-busters. Recommendation: close both with a link to the new PRs (owner's call). Do not merge both sets.
- **SEO PR stack** stays separate and local until this release is verified and the guides pass fluent review. The two must never share a PR: the live-classes SCOPE tests fail on any branch touching both live-classes pages and audio files.

## 2. Worker diff
`git diff fe2ab010 194331f2`: one line, `access/worker/wrangler.toml`: `CHAPTER_RELEASE = "r1"` → `"r3"`.
- `access/worker/src/`: 0 lines changed. `canAccessChapterResources`, `readEntitlements` (2-year expiry + Lifetime), sessions, CORS and Referer checks are byte-identical to live.
- Live de8aea72 vs branch, all 31 vars (`wrangler versions view`): only `CHAPTER_RELEASE` differs. Bindings: same D1, R2 `klarweg-resources`, service `klarweg-tutor`; same 4 secrets.
- Pre-deploy guard passes (`--allow-speech=entitled --allow-speech-scope=all --allow-ai-enabled`); Worker tests 161/161.
- Deploy with `npx wrangler versions upload` → `wrangler versions view <new>` (check that only CHAPTER_RELEASE differs) → `npx wrangler versions deploy <new>@100%`. **Not** `npm run deploy:access` (`wrangler deploy`): the `klarweg.in/api/*` route lives in the dashboard, not in `wrangler.toml`.

## 3. R2 release r3
- `chapters/r3/` is empty today (probed). `chapters/r2/` holds another session's partial upload: never used, not touched, not deleted.
- Inventory with sha256 per object: `docs/security/R2-RELEASE-r3-INVENTORY.txt`. 259 objects:
  - `index.json`: the 258 chapter ids and titles only.
  - 6 free chapters: byte-identical to their data files.
  - 252 paid chapters: their data file, then `window.KW_CHAPTER_AUDIO` with that chapter's own lines (5,490 total) and timing (3,029 total).
- Audit found no unexpected keys, no foreign entries, no secret-like strings, no email addresses.
- Vs r1: only b2-20, b2-28, c2-25 changed (#263), plus the appendices.
- Upload: `node scripts/chapter-lock.mjs release --release r3 --upload` (index.json last).
- Verify: `node scripts/chapter-release-verify.mjs --release r3` must print `259 identical, 0 problem(s)`.

## 4. Rollback (reverse-safe order)

| Live state | Undo, in this order |
|---|---|
| After cache purge / S2 | 1. Revert the S2 merge PR (republishes data, manifest, timing). 2. Wait for the Pages deploy |
| After S1 | 3. Revert the S1 merge PR (pages load static data again). **Never revert S1 while S2 is live** |
| After W | 4. `npx wrangler versions deploy de8aea72-5479-4621-8231-470b332487d5@100%` (back to r1) |
| After R2 upload | 5. Nothing: r3 objects are inert while no Worker points at them |

r1 rollback target verified today: `chapter-release-verify.mjs --release r1` against its source af61b170 gave **259 identical, 0 problem(s)**. The live Worker serves r1 now (free a1-1 → 56,411 B full data).

## 5. Live verification

**After W** (pages unchanged; Worker reads r3):

| Request | Expected |
|---|---|
| `curl -s -o /dev/null -w '%{http_code} %{size_download}' https://klarweg.in/api/chapters/a1-2-vokale.js` | 200, ~409 B, body has `"kwLocked":"signed_out"` |
| `…/api/chapters/a1-1-alphabet.js` | 200, 56,411 B (= `chapter/chapter-a1-1-data.js`) |
| `…/api/chapters/a1-2-nope.js` | 404 |
| `curl -H 'Referer: https://evil.example/' …/api/chapters/a1-2-vokale.js` | 200 stub, `"kwLocked":"unavailable"` |
| `curl -H 'Cookie: kw_session=<owner token>' …/api/chapters/<owned paid id>.js` | 200, full data + `window.KW_CHAPTER_AUDIO` |
| same cookie, chapter of a level **not** owned | 200 stub, `"kwLocked":"not_entitled"` |

The owner's token comes from their own browser (DevTools → Application → Cookies → `kw_session`, Path `/api`). Never paste it into git or chat; the browser checks below need no token.

**After S1** (browser, owner's account):
- **Signed out:** open `https://klarweg.in/chapter/chapter-a1-2-vokale.html` → "Chapter Locked". DevTools → Network: `api/chapters/a1-2-vokale.js` 200 (stub); no `chapter-a1-2-data.js`.
- **Signed in, level owned:** chapter renders. Play a story line: audio plays with word highlighting. Network: no `/audio-timing/` request for that chapter; one `/api/progress` request.
- **Signed in, level not owned:** "Chapter Locked"; no `/api/progress` request.
- **Free:** `chapter-a1-1-alphabet.html` renders signed out; story audio and highlighting work; `/audio-timing/*.json` requests 200.
- **iOS Safari:** sign in with Google on klarweg.in, open an owned paid chapter: it renders (first-party cookie, `Path=/api; SameSite=Lax`).

**After S2 + purge:**

| URL | Expected |
|---|---|
| `https://klarweg.in/chapter/chapter-a1-2-data.js` | 404 |
| `https://klarweg.in/chapter/chapter-a1-1-data.js` | 200 |
| `https://klarweg.in/public/audio/manifest.json` | 404 |
| `https://klarweg.in/public/audio/manifest-public.json` | 200 |
| `https://klarweg.in/audio-timing/00079b7fc5026954.json` (A1·17, paid) | 404 |
| `https://klarweg.in/audio-timing/19132597c1eed08a.json` (A1·1, free) | 200 |
| `https://klarweg-audio.klarweg-issue-reports-2026.workers.dev/story/A1_017_S003.mp3` | **still 200: open risk (§8)** |

## 6. Non-breakage evidence

| Area | Evidence |
|---|---|
| iOS login | Pages call `klarweg.in/api` (same-origin, the iOS fix); no Worker auth code changed |
| Paid access | Headless Chrome, `/api` intercepted: owners of A1·17, B2·20 (mobile), C1·43, C2·25 get the full chapter, no JS errors, audio resolves. Live check by the owner still required (§5) |
| Audio | Engine loads `manifest-public.json` + the chapter's own lines; free/homepage unchanged; `kw-audio-engine.js?v=2` so no stale engine reads the removed manifest; S1 keeps the old files published during the 10-minute HTML cache |
| Progress sync | Owners sync as before (1 request); locked stubs no longer start sync (fix + test); account merge keeps best quiz / highest XP |
| Free chapters | Static files unchanged; R2 free objects byte-identical; A1·1 renders signed out with 10 public timing files |
| Tests | S1 664 pass / 0 fail / 1 skip; S2 667 / 0 / 1 (skip = PRIVATE ROSTER, needs `KW_CANDIDATE_ROSTER`, never in CI); Worker 161/161 |

## 7. Owner gates (relayed via goodluck-5a)

| Gate | Evidence status |
|---|---|
| 1. r3 content exact | Done: §3 inventory + audit |
| 2. Upload read back 259/259 | After upload (verifier ready) |
| 3. Worker points at a complete r3 | After `versions upload`: show `versions view`, r3/index.json present with 258 chapters |
| 4. Rollback available | Done: r1 259/259 verified; command in §4 |
| 5. Signed-out gets no paid content **or audio** | **Cannot pass yet**: chapter data, lines and timing are closed; MP3s and lexicons stay open (§8) |
| 6. Paying students keep access | Simulated; owner's own account check after W/S1 |

## 8. Unresolved: the paid-content fix is NOT complete

| Exposure | After this release |
|---|---|
| (a) Paid MP3s from the `klarweg-audio` Worker (no auth) | **Open** |
| (b) Paid MP3s via the public `klarweg-audio` repo (jsDelivr) and `klarweg-audio-cdn` (GitHub Pages) | **Open** |
| (c) Paid `audio-timing/*.json` on Pages | Closed by S2 |
| (d) `chapter/story-lexicon.js`, `chapter/global-lexicon.js` (word glosses from all chapters) | **Open**: low value, but needs an explicit accept-or-fix |
| Public `klarweg` repo + history (data, manifest, timing, `audit/`, `audio-manifests/`, `audio-inputs*.json`) | **Open**: options in `PAID-CONTENT-REMEDIATION.md` §7 (recommended: GitHub Pro + private) |
| `chapters/r2/` partial objects in private R2 | Not exposed; cleanup needs owner approval |
