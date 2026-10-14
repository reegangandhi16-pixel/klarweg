# B1 practice library — launch checklist

> **Status:** 2026-10-14. Tracks what is built and tested for the original Klarweg B1 practice library (P1–P15) and
> what still blocks real learner access. It records decisions; it makes none. Nothing here is deployed: the exam
> Worker flags default to `off` (`exam-worker/wrangler.toml`), `EXAM_ROUTES` is off in klarweg-access, and no `exam/`
> path is in `.github/pages-allowlist.txt`.

## Done (evidence in the repository)

| Requirement | Evidence |
|---|---|
| 15 original practice forms, full structure (Lesen 30, Hören 30, Schreiben 3, Sprechen 3) | `exam-content/tools/practice-forms.mjs`; `node exam-content/tools/validate.mjs` (all PASS) |
| Clearly labelled as Klarweg practice, not an official exam; Hören as TEST AUDIO | `exam-content/test/practice-library.test.mjs` (labels, no provider names) |
| Keys, one-sentence explanations, evidence spans verbatim in the item's own text or script | `buildPracticeForm` build-time check + library test |
| Forms distinct from each other (no shared 8-word passage, long stem, topic or prompt) | library test |
| Balanced answer keys; one length band per part across the library | library test (P1 Hören 1/2 shorter: documented exception) |
| Keys, explanations and listening scripts stay server-side until the learner submits the module | `exam-worker/test/practice-form.test.mjs` (every form) |
| Complete attempt per form: scoring, item review, two human ratings, final result with OD-45 wording | `practice-form.test.mjs` (every form) |
| Least-attempted assignment; every form once before any repeat; idempotent replays | `exam-worker/test/assignment.test.mjs` |
| Learner releases list forms explicitly; system-test form S0 refused; whole library builds as a learner release | `exam-content/test/release-purpose.test.mjs` |
| Practice history on the start screen | PR #82; browser E2E |
| Browser journey (autosave, timer, Hören playback, Schreiben, Sprechen recording, result, history, raters, mobile 390 px without horizontal scroll) | `KX_E2E_ONLY=practice KX_E2E_FORM=pN npm run test:exam:browser` (headless, muted): **PASS for all 15 forms** on 2026-10-14 (one P7 run hung with an idle browser and passed on re-run) |
| Public-repository boundary (only registered synthetic content, no media, no stray keys) | `node exam-content/tools/check-public-boundary.mjs` |

## Blockers — owner or external decisions

| Blocker | Needed before | Owner action |
|---|---|---|
| **OD-14 real Hören audio** (vendor, EX-06 licence, voice cast, MOS review) | Any learner-facing Hören | See `OD-14-AUDIO-VENDOR-RESEARCH.md` §5 (OD-14a–e) |
| **Learner release set** | Building a learner release | Choose which practice forms go into it (mechanism ready; no default chosen) |
| **Content review (EX-03 panel / native reviewers)** | Release of any form | Forms are engineering-authored and validated, but not yet reviewed by native B1 item writers |
| **EX-01 privacy review** | Real recordings | External review |
| **P-19 consent withdrawal** policy | Real recordings | Owner decision (OPEN) |
| **P-20 / OD-21 retention**; PR #76 stays unmerged | Real recordings | Owner confirms P-20 scope; EX-01 |
| **OD-19 rater/admin 2FA** | Pilot | Choose the second-factor method in klarweg-access; then enforce for rater/admin roles |
| **EX-02 raters** | Rated Schreiben/Sprechen results | Recruit and train raters |
| **D1 / Worker provisioning, flags, EXAM_ROUTES, secrets** | Any environment with learners | Owner-run operations (not done by engineering) |
| **OD-20 same-site domain** | Pilot | Owner / infrastructure |
