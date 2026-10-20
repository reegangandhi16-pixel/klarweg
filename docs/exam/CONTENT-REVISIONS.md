# Content revisions: the contract (SCHEMA §2), enforced from the first learner release

> **Status:** 2026-10-20, engineering (PR #159). It implements SCHEMA §2 ("IDs are immutable; editing content creates a
> new revision"), which earlier corrections did not follow: #111, #118 and #152 edited revision-1 forms in place. That
> was harmless only because no learner release exists.

## 1. Identity across the lifecycle (verified in code)
| Stage | Keyed by | Consequence |
|---|---|---|
| Source | form id `frm:…@<rev>`; item ids `itm:…`; task and asset ids | — |
| Build / package (R2 `releases/<rel>/forms/<form>/module-*.json`) | form + release path; package SHA-256 depends only on content | A revision gets its own packages |
| Registry (D1) | `forms.id`, `form_modules (form_id, module)`, `form_assets (form_id, asset_id)` are per form; **`items_index.item_id` and `item_keys.item_id` are global** | Two revisions cannot share an item id |
| Attempt | `attempts.form_id`, immutable once assigned | An attempt always reads its own revision |
| Answers, events, writing, recordings, ratings, scores, results, audit | `(attempt_id, item_id)` or `attempt_id`; no foreign key to the content tables | Untouched by any import |
| Reads (package, answers, scoring, item review, feedback, media) | always `WHERE form_id = attempt.form_id` | History reads exactly the revision it used |

## 2. The contract
1. **Released content is immutable.**
   - A form in `exam-content/released-forms.json` must keep its released fingerprint, and it is never removed.
   - Enforced by `released-forms.test` in CI, and by `release-candidate.mjs`, which refuses to build such a form with
     different content.
2. **A correction is a new revision with new item ids.**
   - `node exam-content/tools/revise-form.mjs <form-dir> <new-dir>` creates `…@N+1` with `supersedes: …@N`.
   - Every item id becomes `…-r<N+1>`, with `rev: N+1` and `supersedes: <old id>`.
   - Task and asset ids stay; they are scoped to the form.
   - Only then is the correction applied to the copy.
   - The validator enforces this (`revision_ids`): suffix, `rev` and `supersedes` must agree, and a revision-1 form
     never has a suffix.
3. **Imports never overwrite (PR #157).**
   - A learner `registry.sql` is insert-only.
   - `registry-preflight.mjs` must say OK: every form new, no item id owned by another form, no level-config drift.
   - A duplicate or conflicting import aborts as a whole and changes nothing.
4. **Switching learners to a revision** means changing `EXAM_RELEASE_FORMS` to the new id.
   - No new attempt is assigned to the old revision.
   - An *open* attempt on it is refused with `form_not_in_release` (PR #150).
   - Completed history stays readable.
5. **Review records follow the revision.** The revision has different fingerprints, so it needs fresh EX-03 records.
   No approval carries forward (EX-03/O6).

## 3. Proven by `exam-worker/test/revision.test.mjs` (in-memory D1, real migrations)
1. P3@1 is imported as a learner release, and a learner completes a Lesen attempt on it (100/100).
2. P3@2 is imported next to it: produced by `revise-form`, with one corrected explanation. The preflight says `new`.
3. **Every attempt table is byte-identical** before and after the import, and so are all of P3@1's content rows.
4. The original attempt's **result, item review (old explanation) and history are identical**, before and after
   P3@2 is in use.
5. With the release set switched to P3@2, a new attempt gets P3@2: the corrected explanation and `-r2` ids. The old
   attempt still reads P3@1.
6. A duplicate import of P3@2 is `identical` in the preflight, its import fails, and the database is unchanged.
7. An in-place edit of P3@1 is a `conflict` in the preflight, its import fails, the database is unchanged, and the old
   attempt's review is unchanged.
8. A "revision" that changes only the form id is refused by the builder (`revision_ids`). Its rows would be a conflict
   for the preflight (`registry-preflight.test`).

## 4. Still to do, only when a released practice form actually needs a correction
- The 15 practice forms are generated (`make-practice-form-pN.mjs`, `PRACTICE_FORMS`). A revision must be added to that
  registry as its own entry, next to the superseded one, which stays unchanged.
- The library tests that compare forms with each other (originality, shared stems) then need to treat a revision and
  its predecessor as one lineage.
- Nothing is needed before the first release: no form has been released, so `released-forms.json` is empty, and the
  current corrections remain part of revision 1.

## 5. EX-03
This change alters no form content and no id. The fingerprints of P3, P8 and P13 are unchanged, so the review packet
`EX-03-LESEN-RC-2026-10-20` is still current and does not need regenerating.
