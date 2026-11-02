# Paid content remediation: findings, plan, rollback (2 November 2026)

Status: **prepared locally. Nothing pushed, uploaded, deployed or merged.**
Supersedes the ordering in `docs/PAID-CHAPTER-LOCK.md` (written before the API moved to `klarweg.in/api`).

## 1. Exposure found (all verified 2 Nov 2026, anonymous requests)

| # | Channel | What it exposes | Fixed by |
|---|---|---|---|
| 1 | `klarweg.in/chapter/chapter-*-data.js`: 252 paid files, 200 OK, byte-identical to repo | Complete lessons incl. quiz answers + explanations | Step 1 + 2 below |
| 2 | `klarweg.in/public/audio/manifest.json` (2.0 MB) | Text of 5,490 paid story, listening, reading and speaking lines | Step 1 + 2 |
| 3 | `klarweg.in/audio-timing/*.json`: 3,029 of 3,113 files | Word-by-word transcripts of paid story, listening and reading lines | Step 1 + 2 |
| 4 | `klarweg-audio` Worker (workers.dev), no auth | Paid MP3s (e.g. `story/A1_017_S003.mp3` → 200) | **Not fixed**: §6 proposal |
| 5 | Public GitHub repos `klarweg-audio` (via jsDelivr) and `klarweg-audio-cdn` (GitHub Pages) | Paid MP3s + manifests (jsDelivr `…/klarweg-audio@main/public/audio/story/A1_017_S003.mp3` → 200) | **Not fixed**: §6 |
| 6 | Public GitHub repo `klarweg` (HEAD + 713 commits since Sept 2026) | Everything in 1–3, plus repo-only copies: `audit/` (491 files), `audio-manifests/`, `audio-inputs*.json`. These are **not** on the website (404) | **Not fixed**: §7 options |

Already correct: homework PDFs (signed 5-minute links + entitlement), AI tutor, progress sync.

**Already live:** the Worker half of #252. `GET https://klarweg.in/api/chapters/<id>.js` (live Worker de8aea72, R2 release `chapters/r1/`) returns a 409-byte stub to an anonymous visitor for a paid chapter, and full data for free Chapter 1. Pages simply don't use it yet.

## 2. How the fix works
- **Chapter content:** paid chapter pages load `https://klarweg.in/api/chapters/<id>.js` (same-origin, first-party cookie). The Worker returns content only if the chapter is free or the signed-in user holds the level (`canAccessChapterResources` → `readEntitlements`, which honours the 2-year expiry and Lifetime). Otherwise it returns a metadata-only stub and the page shows the lock screen. **No entitlement check was changed or weakened.**
- **Audio text and timing:** each paid chapter's R2 object is its data file followed by `window.KW_CHAPTER_AUDIO = { entries, timing }` (that chapter's lines only). The engine loads `manifest-public.json` (free Chapter 1, homepage, legacy: 257 entries) and merges the chapter's own lines. Word-sync uses the chapter's own timing. Free chapters are byte-identical to before. **No Worker code change** is needed; only the release var.

## 3. What is prepared

| Branch (local) | Base | Content | Tests |
|---|---|---|---|
| `deploy/access-chapter-r2-on-fe2ab01` @0dfc0336 | live line fe2ab01 (= de8aea72) | `CHAPTER_RELEASE = "r1"` → `"r2"`. One line, config only | Worker 161/161 |
| `security/paid-lock-1-serve` | main 1aa897f6 | #252 pages (regenerated for `klarweg.in/api`), `kw-access.js` v=3, audio split, engine/word-sync merge, cache-busters (`kw-audio-engine.js?v=2`, `kw-word-sync.js?v=3`). **Still publishes the old files (transition).** | 663 pass / 0 fail / 1 skip |
| `security/paid-lock-2-unpublish` | step 1 | #253 (only 6 free data files published) + stop publishing `manifest.json` and paid timing; deploy workflow fails if they reappear | 666 pass / 0 fail / 1 skip |

R2 release r2 (built locally, not uploaded): 259 objects, 17 MB. Largest paid payload 113 KB; previously every page also downloaded the 2 MB manifest.

Browser check (headless Chrome, `klarweg.in/api` intercepted):
- **Level owner** (A1·17, B2·20, C1·43 on mobile, C2·25): chapter renders, no JS errors, paid lines resolve to audio, 0 timing or full-manifest requests.
- **Signed out, or signed in without the level:** lock screen, no `KW_CHAPTER_AUDIO`, no paid data requested.
- **Free A1·1:** unchanged; loads its 10 public timing files.

## 4. Release order (each step needs your approval)
1. **Upload R2 release r2:** `node scripts/chapter-lock.mjs release --release r2 --upload` (from step-1 branch). Live is unaffected (Worker still reads r1). Verify object count 259 and sample hashes.
2. **Deploy Worker** from `deploy/access-chapter-r2-on-fe2ab01`: `wrangler versions upload`, diff bindings vs de8aea72 (only CHAPTER_RELEASE differs), `wrangler versions deploy <id>@100%`. Verify anonymous paid → stub, free a1-1 → full.
3. **Push + PR + merge step 1** (`security/paid-lock-1-serve`). Pages deploy. Verify: paid page HTML loads `/api/chapters/…`; `kw-access.js?v=3`, `kw-audio-engine.js?v=2` load; owner test (you sign in, open a paid chapter of a level you own, play a story line: word highlighting works); signed out shows lock.
4. **Wait ≥10 minutes** (Pages HTML cache), then **push + PR + merge step 2.**
5. **Purge Cloudflare cache** for `/chapter/*-data.js`, `/public/audio/manifest.json`, `/audio-timing/*` (or Purge Everything), so edge copies of the removed files are dropped.
6. **Verify closed:** `chapter-a1-2-data.js` → 404, `chapter-a1-1-data.js` → 200, `public/audio/manifest.json` → 404, a paid timing file → 404, a free timing file → 200, `/api/chapters/a1-2-vokale.js` anonymous → stub.

## 5. Rollback
| After step | Rollback |
|---|---|
| 1 (R2 upload) | Nothing to roll back; objects are inert until the var points at them |
| 2 (Worker) | `wrangler versions deploy de8aea72-5479-4621-8231-470b332487d5@100%` (r1). Pages unaffected |
| 3 (step-1 merge) | Revert the merge PR on main → Pages redeploys static loading. Worker can stay |
| 4 (step-2 merge) | Revert the step-2 PR first (republishes the files), then step 1 if needed. Never revert step 1 alone while step 2 is live (pages would load static files that are no longer published) |

## 6. Not fixed yet: paid MP3s (proposal)
Paid audio stays downloadable from the `klarweg-audio` Worker and the two public audio repos. Proposal, separate approval:
- **(a)** Serve paid clips through an entitlement check on the same origin, e.g. a `klarweg.in/media/*` route, either on the audio Worker or as a signed-URL step in the access Worker. Free and homepage clips stay open.
- **(b)** Make `klarweg-audio` and `klarweg-audio-cdn` private only after (a). The engine's jsDelivr and GitHub Pages fallbacks need public repos, so they must be removed first.

This changes the audio system, so it was left untouched here.

## 7. Public GitHub repository
- **What remains readable there after steps 1–6:** all 258 data files, `public/audio/manifest.json`, all 3,113 timing files, `audit/`, `audio-manifests/`, `audio-inputs*.json`, and the whole history since Sept 2026. Removing website files does not affect GitHub.
- **Options:**

| Option | Effect | Cost / risk |
|---|---|---|
| A. GitHub Pro + make `klarweg` private | Repo and history hidden; GitHub Pages keeps working unchanged (Pages on private repos needs Pro/Team) | ~US$4/month. Lowest-risk change; no hosting move. Existing clones can't be recalled |
| B. Move hosting to Cloudflare Pages, then make repo private (free plan) | Same privacy; deploy the same allowlist artifact with `wrangler pages deploy` from Actions | DNS cutover for `klarweg.in`, new deploy pipeline, cache/404 behaviour to re-test. `/api/*` Worker route unaffected. Bonus: `_headers` adds the missing security headers. Medium effort; test on `*.pages.dev` first |
| C. Keep public, rewrite history | Removes files from history | Breaks every clone and PR ref, doesn't recall copies, still leaves future risk. Not recommended |
| D. Keep public, move paid sources into a private repo / R2-only | Long-term clean split | Large refactor of generators and tests |

**Recommendation:** A now (cheapest, no site change), after step 6. Consider B later if you want security headers or to avoid the subscription. A history rewrite isn't needed once the repo is private.
