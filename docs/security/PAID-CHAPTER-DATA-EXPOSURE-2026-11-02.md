# Paid chapter data exposure (#252 / #253): findings and proposed fix

Date: 2 November 2026. Status: **investigation only. Nothing was deleted, moved, changed or deployed.**
This is separate from the SEO work.

## 1. What is public (verified 2 Nov 2026)

| Surface | Evidence | Exposed? |
|---|---|---|
| `https://klarweg.in/chapter/chapter-*-data.js`, all 258 (252 paid) | `.github/pages-allowlist.txt:142` `GLOB:chapter/chapter-*-data.js`; `chapter-a1-2-data.js` → 200, 57,117 B; `chapter-b2-10-haeufige-b2-verben-data.js` byte-identical to the repo | **Yes, full content** |
| Paid chapter HTML | Static `<script src="chapter-a1-2-data.js?v=7">`: the browser downloads the full data *before* `kw-access.js` decides to show the lock screen | **Yes**. Any visitor, no sign-in |
| GitHub repo `reegangandhi16-pixel/klarweg` | Visibility `PUBLIC` (0 forks); all data files and their history are readable | **Yes** |
| `https://klarweg.in/audio-timing/*.json` (3,113 files) | allowlist line 122; sample file → 200 | **Partly**: word-level transcripts of story lines, including paid chapters, with audio file names (`audio/story/A1_017_S003.mp3`) |
| MP3 audio | Served from the separate audio CDN / TTS Worker; an earlier audit noted no entitlement check there | Likely; not re-tested today |
| Homework / resource PDFs | Access Worker `resources.js` `canAccessChapterResources` + 5-minute signed URLs | **No**. Correctly gated on the server |
| AI tutor | Worker checks session + entitlement | **No** |

## 2. What the paid data files contain

Each `chapter-*-data.js` holds the complete lesson: story, vocabulary, grammar explanations, reading, listening scripts, speaking and writing tasks, exercises, the quiz **with answer indices and explanations**, takeaways, revision tips, the writing-tutor prompt, and resource entries (PDF links are placeholders; the PDFs themselves are gated). A copy of the files is the whole paid course, without the PDFs, AI and progress sync.

## 3. Are access controls on the data or only the UI?

**Only the UI.** `kw-access.js` hides paid chapters in the browser. The data is a public static file; GitHub Pages cannot check entitlement. The server enforces access only for PDFs, the AI tutor and progress sync.

Search engines: paid chapter pages are `noindex, follow`, and the data files are JavaScript, not pages, so they are not indexed as content. This is a paywall-bypass risk, not an SEO-indexing problem.

## 4. Proposed fix (already prepared, not merged)

**#252 `feat/server-side-chapter-lock`** (draft, CONFLICTING with main since 30 Oct): the Access Worker gets `GET /chapters/<id>.js`. It reads the data from private R2 (`klarweg-resources`, prefix `chapters/<CHAPTER_RELEASE>/`), returns full data only when `canAccessChapterResources` passes (the same check the PDFs already use), otherwise a small stub that shows the lock screen. `Cache-Control: no-store`, Referer check. The 252 paid pages load the Worker URL instead of the static file. Free Chapter 1 files stay static. Runbook: `docs/PAID-CHAPTER-LOCK.md`.

**#253 `feat/drop-paid-chapter-data`** (draft, mergeable onto #252): the allowlist names only the 6 free data files, and the deploy workflow fails if a paid data file would be published.

This keeps paid access for buyers (same entitlement as PDFs) and needs no change to prices, checkout or durations.

### Safe order (each step needs your approval)
1. Rebase #252 onto current main; port its Worker changes onto the **live deploy branch** (`deploy/access-progress-on-cf2d1c8` / Worker de8aea72), not main, so progress sync and the security fixes aren't lost.
2. Upload the current chapter data to R2 `chapters/<release>/` and spot-check it.
3. Deploy the Worker; test an owned paid chapter (full data), a non-owned one (stub), signed-out (stub), and Lifetime.
4. Merge #252 (pages now load the Worker URL). Wait ≥10 minutes for Pages + CDN.
5. Merge #253. Verify `chapter-a1-2-data.js` → 404, `chapter-a1-1-*-data.js` → 200.
6. Rollback: revert #253 then #252; the previous Worker version stays available.

Conflicts to expect: #252 touches `scripts/build-grammar-index.mjs` and chapter HTML, so it must be rebased after (or before) the SEO branches; whichever lands second needs a rebase.

## 5. Do the exposed files need removal, relocation or replacement?

| Item | Recommendation |
|---|---|
| Paid `chapter-*-data.js` on the website | **Relocate** to private R2 (#252) and **remove from the deploy** (#253). Keep the files in the repo as the source of truth. |
| Paid data in the public GitHub repo | Not fixed by #252/#253. Options: (a) make the repo private, which requires GitHub Pro for Pages or moving hosting to Cloudflare Pages first (decide hosting before flipping); (b) move paid data into a private repo/R2-only source. Rewriting git history is disruptive and does not recall existing copies; not recommended. |
| `audio-timing/*.json` for paid chapters | Restrict the deploy to free-chapter timing files, or serve them through the same Worker check. Lower value than the lesson data; do after #252. |
| MP3 audio | Add an entitlement or signed-URL check on the audio Worker; separate task. |
| Copies already downloaded | Cannot be recalled. Close the channels and accept prior exposure. |

## 6. Decisions needed from you
1. Approve the order in §4 (start with rebasing #252 and porting to the deploy branch).
2. Repo visibility: keep public for now, or plan the hosting move so the repo can go private.
3. Whether to include `audio-timing` and audio in this fix or as a follow-up.
