# Visual Vocabulary A1→C2 — release package

**Nothing here is deployed.** Every step below needs the owner's final
approval. Run them in this order: each one is inert or reversible until the
next one.

| Part | Where | PR / source |
|---|---|---|
| Site: renderer, Images on/off, probe, `?v=24/38`, free Chapter 1 images, chapter data with `img` | GitHub Pages (merge to `main`) | #327 `feat/visual-vocab-all-levels` |
| Paid images + `levels.json` | R2 `klarweg-audio` (private), prefix `vocab-img/` | `$VOCAB_IMG_STORE/r2/vocab-img/` via `scripts/vocab-images/release-r2.mjs` |
| Image route `/api/media/vocab-img/` | access Worker `klarweg-access` | #328 `deploy/access-vocab-images-on-51ccd26a` (on top of live 51ccd26a) |
| Paid chapter data with `img` | R2 `klarweg-resources` chapter release `rN` | `scripts/chapter-lock.mjs release` from `main` after the merge |

Live today: Worker version **2691428b** (source `deploy/access-exam-on-bf0737f4`
@ 51ccd26a, `CHAPTER_RELEASE = "r4"`). Kill switch version **7cc1e826**.

## Preflight (no changes)
1. `npm test` on the merge candidate, plus `node --test access/worker/test/*.test.mjs` on #328.
2. `bash scripts/site-artifact.sh /tmp/kw-site`: the leak check passes, and only
   free-chapter images are in the artifact.
3. `node scripts/vocab-images/release-r2.mjs` checks that every gated id has
   its 4 files and that `levels.json` = `docs/visual-vocab/gated-images.json`.
4. `npx wrangler deployments list --name klarweg-access` shows 2691428b at
   100% (if not, stop: the base moved).
5. Do **not** open any `?v=24` / `?v=38` URL on klarweg.in before the Pages
   deploy (edge cache, see cache-bust preflight).

## Steps
1. **Upload private images (inert).**
   `node scripts/vocab-images/release-r2.mjs --upload` (needs `wrangler login`).
   It uploads avif/webp first and `vocab-img/levels.json` last. Nothing
   references these objects yet, and the live Worker has no route to them.
2. **Merge #327 → Pages** (`deploy-pages.yml`). This ships:
   - the new renderer and the Images control;
   - free Chapter 1 images;
   - every page on `chapter.css?v=24` / `chapter-app.js?v=38`.

   Paid chapters keep serving release r4 (no `img`), so nothing gated is
   requested yet. Check one free chapter and one paid chapter as a buyer.
3. **Build the paid chapter release from the merged `main`:**
   `node scripts/chapter-lock.mjs release --release r5 --upload`
   (immutable prefix `chapters/r5/`; r4 stays untouched).
4. **Worker cutover (atomic).** On the #328 branch, set `CHAPTER_RELEASE = "r5"`
   in `access/worker/wrangler.toml` and commit. Then:
   `npx wrangler versions upload` → diff the new version against 2691428b
   (expect only `media-images.js`, `media.js` and the var) →
   `npx wrangler versions deploy <new>@100%`.
   From this moment, paid chapters carry `img` and the route serves them.
5. **Smoke tests (production):**
   - signed out: `curl -sI https://klarweg.in/api/media/vocab-img/<id>-400.avif`
     → 401;
   - malformed key: `…/vocab-img/x-400.png` → 404;
   - buyer of the image's level: 200, `cache-control: private, no-store`,
     `content-type: image/avif`;
   - buyer of another level only: 403;
   - a paid chapter as a buyer: pictures appear; Images Off → no requests;
   - word audio and chapter loading unchanged (`/api/media/*.mp3`,
     `/api/chapters/<id>.js`).

## Rollback
| Problem | Action | Effect |
|---|---|---|
| Image route or paid data wrong | `npx wrangler versions deploy 2691428b@100%` | back to r4 data (no `img`), no image route; buyers see text-only cards |
| Worker emergency | kill-switch version 7cc1e826 (unchanged) | as before this project |
| Site problem | revert the #327 merge commit on `main` → Pages redeploys | old renderer, A1·01 pilot only |
| Stray private objects | leave them (private, unreferenced), or delete prefix `vocab-img/` in `klarweg-audio` | none for users |

Order for a full rollback: Worker first, then Pages.

## Why this order is safe
- Step 1 adds private objects that nothing points to.
- Step 2 changes only public pages. Paid data still comes from r4, which has
  no `img`.
- Step 4 switches route and data in one Worker version. If `levels.json` were
  missing, the route answers 503, the page probe fails closed, and cards stay
  text-only with no layout shift.
