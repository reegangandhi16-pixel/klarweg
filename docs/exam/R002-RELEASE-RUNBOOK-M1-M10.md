# Release r002: B1 Modelltests M1–M10 (owner-run runbook, prepared 2026-11-24)

**Do not start.** Every step marked 🔒 changes production and needs the owner's explicit approval at the time.
Engineering evidence (rehearsal 11/11, browser journeys 22/22, audio checks) is **not** a release approval.
Steps follow `M0-LAUNCH-RUNBOOK.md` §5 and §7. The infrastructure is already live from M0.

## 0. Gates (all must be closed and recorded first; the tracker lists them)

| Gate | Record |
|---|---|
| B1: academic review of each form, with no open entries | private `authoring/b1/release/RELEASE-CHECKLIST-PER-FORM-2026-11-11.md` |
| B2: OD-14 TTS terms decision (or re-voicing) | private `authoring/b1/release/` |
| B3: OD-08 format and trademark wording (counsel) | private `authoring/b1/release/` |
| B4: originality sign-off: `content.originality` approved for each form | private `authoring/b1/mock-mN/content.mjs` |
| B5: M10 #11 | private checklist |
| O-2: loudness decision. Either the approved re-levelled files are in `forms/` with a new listening record, or the owner accepts the originals | private `authoring/b1/reviews/` |
| O-6: real-phone test, iPhone and Android | `STAGING-PREVIEW-DEVICE-TEST.md` checklist, filled in |
| B6: release authorisation, naming the exact forms | owner message, stored in the private repo |

A form can be released alone (for example only M1–M3), once its own gates are closed.

## 1. Regenerate and verify (local, no cost)
1. In the private repo, `node tools/make-mock.mjs --all`. A form becomes `status: "live"` **only** when both
   `content.review` and `content.originality` are approved. Check this with `git diff forms/`: only `status` and
   `release_note` / `reviewed_by` should change.
2. `node <klarweg>/exam-content/tools/validate.mjs forms/b1/mock-mN` must pass with **0 errors**, including no
   `originality` error. A form that still has any error is not released.
3. `python3 tools/audio-release-check.py mN…` must show 0 failures, and `python3 tools/audio-loudness.py forms/b1/mock-mN` must pass.
4. `node tools/rehearse-all.mjs <klarweg> forms/b1/mock-mN…` must PASS, built as a **normal** (not review-staging) release.
5. `node exam-worker/test/modelltest-browser.mjs <form dirs> --viewports=desktop,mobile` must PASS, with the accessibility scan included.

## 2. Build and preflight
1. `node exam-content/tools/build-release.mjs --release r002 --purpose learner --out <empty dir outside repos> <form dirs…>`.
   The builder refuses a learner release with open originality checks. `--review-staging` is refused for learners.
2. Preflight (read-only) against prod, as in M0 runbook §5.2. Expect `frm:b1:mock-mN@1: new` for each form, then
   **PREFLIGHT OK**. Continue only on OK.

## 3. 🔒 Import (production data, no learner exposure yet)
1. Upload `<out>/releases/**` to R2 `klarweg-exam-content` under the same keys.
2. `wrangler d1 execute klarweg-exam --remote --file <out>/registry.sql`. The forms are now in the registry, but
   nobody is assigned them, because `EXAM_RELEASE_FORMS` still names only M0.
3. PR: add `released_forms_entries` to `exam-content/released-forms.json`, so CI keeps them immutable.

## 4. 🔒 Owner-only exposure first
1. Exam Worker var `EXAM_RELEASE_FORMS="frm:b1:mock-m0@1,frm:b1:mock-m1@1,…"` (the released forms only). Redeploy.
   `EXAM_REVIEW_FORMS` stays **unset** (a test forbids it in any wrangler config).
2. Using the second (test) account: start Modelltests until each new form has been assigned once. Assignment is
   least-attempted first (OD-50). Check that the history shows "n von N Modelltests".
3. Run one full attempt on a phone and rate it on `/exam/rater.html`. The result must show the disclaimer, the
   non-affiliation note and "Bewertung durch eine Lehrkraft von Klarweg".

## 5. 🔒 Learners
Only after §4, with OD-42 (who gets access) decided: grant access in `/exam/admin.html` (`EXAM_GRANT_POLICY`
applies to new grants if it is deployed).

## Rollback
| Problem | Action | Effect |
|---|---|---|
| One new form is wrong | Remove it from `EXAM_RELEASE_FORMS` and redeploy the exam Worker | No new attempts get it. **Running attempts on that form are blocked as well** (`requireReleased` fails closed: they can neither start a module nor load content). Completed results stay. Pick a quiet time and check the running attempts first |
| All new forms | `EXAM_RELEASE_FORMS="frm:b1:mock-m0@1"` and redeploy | Back to M0 only |
| Whole exam area | `EXAM_ROUTES` off and redeploy Access | `/exam/*` returns 404 at once |
| Registry rows | Leave them: releases are append-only and unassigned rows are inert. Use D1 Time Travel only for a real data incident (`RUNBOOK-EXAM-INFRA.md` §6) | n/a |
