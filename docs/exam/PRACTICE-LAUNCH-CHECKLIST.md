# B1 practice library — launch checklist

> **Status:** 2026-10-14. It records evidence and decisions and makes no decisions. Test names refer to
> `npm run test:exam` (Node built-ins only) unless the browser suite is named.

## 1. Implemented and tested

| Area | Evidence |
|---|---|
| Attempt lifecycle: create (idempotent), module order, submission, completion replay | `security.test` SESSION, `retry-overlap.test`, `lifecycle-concurrency.test`, `e2e-flow.test` |
| Server timer, grace, auto-submit on close/disconnect, clock skew, accommodations | `e2e-flow.test` TIMER, `timer-recovery.test`, `frontend.test` TIMER (client) |
| Autosave, lease/second tab, reload recovery, network retry with the same request id | `frontend.test` AUTOSAVE/API client, `timer-recovery.test` RECOVERY, `security.test` lease |
| Navigation, review step before submit, progress per part | `frontend.test` NAVIGATION + REVIEW, SUBMIT, PROGRESS |
| Scoring (official tables), item review after submission, rated feedback, results with OD-45 wording | `scoring.golden.test`, `item-review.test`, `rated-feedback.test`, `frontend.test` RESULTS |
| Writing and speaking rating: two independent raters, round 3 lead, no own attempts | `rating-ui-api.test`, `security.test` rating rules, browser E2E rater flow |
| Recordings: consent before storage, chunk idempotency, learner-own playback, rater playback rules | `speaking.test`, `learner-recording.test`, `rater-recording.test` |
| Practice history | `attempt-history.test`, `frontend.test` HISTORY |
| Least-attempted assignment across P1–P15; idempotent replays keep the form | `assignment.test` |
| Learner release lists forms explicitly; S0 refused; the whole library builds as a learner release | `release-purpose.test` |
| Confidentiality: keys, rules, scripts, explanations never in a package; review only after submission, owner only | `security.test`, `practice-form.test` (every form), `item-review.test` |
| Authorization boundaries: entitlement, roles, media tokens, expired session | `security.test`, `listening-media.test` |
| 15 forms: validator, originality between forms, balanced keys, length band, explanations that explain and agree with the key, instruction numbering, word targets | `validate.mjs`, `practice-library.test` |
| Every script recordable as written; Teil 4 speakers = answer options | `audio-plan.test` (`tools/audio-plan.mjs`) |
| Sprechen Teil 3 (OD-32): the partner presents the topic the learner did not choose; the examiner asks about the learner's own topic; raters see the chosen topic | validator `topic_partner` rules (`content.test`), `sprechen-topic.test` (all 15 forms, both choices, driver), `practice-form.test` rater data, `practice-library.test` mapping check |
| Browser journey per form (Lesen autosave, Hören, Schreiben, Sprechen recording, result, history, two raters, mobile 390 px) | `KX_E2E_ONLY=practice KX_E2E_FORM=pN npm run test:exam:browser`: PASS on all 15 forms (2026-10-14) |
| Accessibility and responsive basics: labelled controls, legends, skip link, focus ring, 44 px targets, reduced motion, no horizontal scroll on mobile | `frontend.test` ACCESSIBILITY / RESPONSIVE, browser E2E mobile checks |
| Automated accessibility audit in the real browser: every interactive element in Chrome's accessibility tree has a name; no duplicate ids; `lang` set; one h1; real Tab key presses show a visible focus indicator. Covers Lesen, Schreiben, Sprechen preparation, result + item review, rater forms, start screen with history, final result | Browser practice journey (`a11y()` in `browser-e2e.mjs`), self-checked against injected defects each run; 0 findings on P3 (2026-10-14) |
| Public-repository boundary | `check-public-boundary.mjs` |

## 2. Implemented, awaiting human review

| Item | What is missing |
|---|---|
| Content of P1–P15 (texts, items, keys, explanations, partner talks) | **EX-03** (panel not formed): review by native B1 item writers. Machine checks are not native-speaker validation. Plan per register §C.1: reviewers A and B (teachers) rate every item independently (verdict, ambiguity_risk, inference_demand, distractor_strength); C (native linguist) signs off key and distractors, originality and item accessibility; disagreements are revised or withdrawn (EX-03/O7), with no carry-forward (O6). Sheets: `node exam-content/tools/review-sheet.mjs <dir outside the repo> [p3 …]` (HTML to fill in plus a JSON record per form; each record carries the form's content fingerprint). Status of returned records: `node exam-content/tools/review-status.mjs <returned dir> [--out <dir outside the repo>]` applies O1, O4, O6, O7, O10 and SCHEMA §8.3 and reports not started / in review / needs revision / approved per form; it approves nothing itself, and records of an older revision count as stale. Suggested start: P3, P8, P13, then the rest. |
| Accessibility | **EX-04** manual audit (WCAG 2.2 AA, screen readers, full keyboard pass incl. Hören and Sprechen during playback/recording). The automated audit covers only names, ids, lang, headings and focus visibility, and does not replace it |
| Sprechen Teil 3 partner talks (two per form, one per topic) | About 1.5 min each; OD-32 describes about 3 min for the mock. The owner/reviewers must accept the length for practice or ask for longer talks. |

## 3. Blocked by owner or external decisions

| Decision | Blocks |
|---|---|
| **OD-14a–e** vendor, licence (EX-06), voice cast, 10 raters, disclosure (see `OD-14-AUDIO-VENDOR-RESEARCH.md` §7) | Real Hören and Sprechen partner audio |
| **Learner release set** (which forms) | Building a learner release |
| **EX-01** privacy review; **P-19** consent withdrawal; **P-20** retention (PR #76 stays unmerged, retention off) | Real recordings |
| **OD-19** rater/admin 2FA (method not chosen) | Pilot |
| **EX-02** rater recruitment and training | Rated Schreiben/Sprechen results for learners |
| **OD-20** same-site domain | Pilot |

## 4. Not implemented

| Item | Note |
|---|---|
| Real audio files | Waits for OD-14; files would live in the private content repository |
| Rater/admin second factor | Needs an Access auth method (OD-19) |
| Consent withdrawal flow | Policy P-19 open |

## 5. Not deployed
Exam Worker flags all `off` (`exam-worker/wrangler.toml`); `EXAM_ROUTES` off in klarweg-access; no `exam/` path in
`.github/pages-allowlist.txt`; engineering ran no remote D1, R2, Wrangler or secrets operations; no learner release built.
