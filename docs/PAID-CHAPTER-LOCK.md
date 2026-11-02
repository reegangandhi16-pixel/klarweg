# Paid chapter lock — server-side

Before this change every chapter's content (`chapter/chapter-*-data.js`) was
published on GitHub Pages and the lock was only a screen drawn by
`kw-access.js`: anyone could download any chapter without paying.

Now only Chapter 1 of each level is published. Chapters 2+ are served by the
Access Worker (`access/worker/src/chapters.js`) from the private
`klarweg-resources` R2 bucket, to signed-in owners of that level only.

| Piece | Where |
|---|---|
| Worker route `GET /chapters/<id>.js` | `access/worker/src/chapters.js`, var `CHAPTER_RELEASE` |
| Page rewrite + release builder | `scripts/chapter-lock.mjs` (`pages [--check]`, `release`) |
| Lock screen for a server refusal | `kw-access.js` `guardChapterPage()` |
| Publication boundary | `.github/pages-allowlist.txt` (6 free data files), `deploy-pages.yml` assertion |
| Tests | `access/worker/test/chapters.test.mjs`; `npm run check:generated` runs `pages --check` |

The data files in `chapter/` remain the single source of truth. Editing a
paid chapter now means: edit the data file, build and upload a NEW release
(`r2`, `r3`, …), then point `CHAPTER_RELEASE` at it.

## Rollout — order matters

Pages must never point at a Worker route that isn't live yet, or every paid
chapter shows "Chapter Unavailable".

1. **Upload the release** (needs `wrangler login`):
   `npm run chapters:release -- --release r1 --upload`
   This puts 259 objects under `klarweg-resources/chapters/r1/`.
   The bucket must stay private.
2. **Deploy the Access Worker** with `chapters.js`, its route and
   `CHAPTER_RELEASE = "r1"`.
   The live Worker currently runs a deploy branch, not `main`, so port the
   change onto that branch, or reconcile first. Never deploy `main` blindly.
   Verify:
   - `curl -s <worker>/chapters/a1-9-verben.js` returns a stub
     (`kwLocked":"signed_out"`).
   - A signed-in owner gets the full chapter.
3. **Ship the pages** (the chapter HTML rewrite and the `kw-access.js` change)
   with the paid data files *still* in the allowlist. Pages caches HTML for
   10 minutes; a cached old page still asks for its static data file.
4. **At least 10 minutes later, drop the paid data files from Pages**: the
   allowlist and `deploy-pages.yml` changes.
   Verify: `curl -o /dev/null -w '%{http_code}' https://klarweg.in/chapter/chapter-a1-2-data.js` returns 404.

Rollback: revert step 3 (pages back to static files) while the files are
still published. After step 4, restore the allowlist first, then the pages.

## Known limits

- **The repository is public**, so the data files are still readable on
  GitHub. This closes the website; the repo needs to go private (audit
  finding M1).
- **Third-party cookies.** The site and Worker are different sites. A
  browser that blocks third-party cookies cannot prove ownership: the learner
  sees the lock screen, exactly as `/auth/me` already behaves. A same-site
  API domain fixes both.
- **Embedding.** A `<script>` request has no Origin. A foreign `Referer` is
  refused, but a page that strips its Referer could still embed the script
  in a paying learner's browser and read that chapter. Only course content
  is exposed this way, never account data.
- **Not covered by this change.** `global-lexicon.js`, `story-lexicon.js`
  (vocabulary across all chapters) and audio stay public.
