# B1 practice library — launch checklist

> **Status:** 2026-10-14; §0 reconciled 2026-10-20. It records evidence and decisions and makes no decisions. Test names refer to
> `npm run test:exam` (Node built-ins only) unless the browser suite is named.

## 0. Launch readiness at a glance (reconciled 2026-10-20 against the signed register v1.5, main `70d3962`)

Source of truth for gate IDs and decision statuses: `B1-FINAL-DECISION-REGISTER.md` **v1.5 (signed)**. External gates
(register §C): **EX-01** privacy · **EX-02** rater recruitment, training and certification · **EX-03** native-speaker
content panel · **EX-04** accessibility audit · **EX-05** security review / penetration test · **EX-06** voice-talent
or neural-voice licences · **EX-07** trademark review · **EX-08** accommodation evidence process. Nothing below records
an approval that has not been given.

**A. Completed and automatically verified** (CI green on `70d3962`: exam toolchain tests, 16 browser jobs, site tests)
- Attempt lifecycle, server timers, autosave, lease and second-tab recovery, idempotent retries (§1 below).
- Answer-key and scoring-rule protection, cross-learner isolation on all attempt routes (`security.test`, `access-matrix.test`).
- Scoring per the configured rules, golden-tested, including the OD-07/OD-30 configuration (`scoring.golden.test`).
- Rater/admin second factor enforced on every staff route and on staff reads of another learner's result (`rater-mfa.test`); Access side: enrolment, replay, limits, recovery codes, header attestation (`mfa.test`).
- Access proxy: identity headers stripped, body cap enforced while streaming (`exam-proxy.test`); cookie pre-flight; CSP on the exam pages.
- All 8 browser scenarios run directly and through the in-process klarweg-access proxy (`exam-browser.yml`).
- Practice library P1–P15: structure, validation and content regression tests. Internal checks only, not EX-03.

**B. Verified on the isolated non-production environment (2026-10-19/20, `bebfacb`; record: `NONPROD-SETUP.md` §4, PR #131)**
- Real service binding Access → exam Worker, real D1 and R2, cross-site cookie from the test site (Chrome).
- A1, A3 (except a real microphone), A4 rows 1–11 incl. the fail-closed row 10 and a rollback rehearsal, A5, A6 (API level),
  A7, A8, A9 and A11 (API level) pass. OD-19 D9 (non-prod end-to-end) is met; D10 (runbook) was exercised (§2, §3, §5).
- **Still open here:** A10 not run (gate for protected #71/#73); manual checks: A2 in Safari, A3 with a real microphone,
  A6 real laptop sleep, A11 DevTools spot check. Retention jobs (PR #76, unmerged) not tested. Production: nothing.

**A2. Smallest usable release: Lesen only (proposal, 2026-10-20; owner has not chosen it).** `SELF-PRACTICE-SCOPE.md`
- Built and tested, off by default: `EXAM_MODULE_ONLY=lesen` lets learners take single-module Lesen attempts and
  refuses full attempts. Migration 0002 adds `attempts.module_scope`. The start screen is labelled
  "Selbstlernübung · nur Lesen". EX-03 sheets and status can be scoped per module (`--module lesen`, per-module status).
  Tests: `module-only.test`, frontend START SCREEN, review tooling, and the browser scenario `lesen-only` (direct and proxy).
- Removes from the critical path: EX-02, OD-14/EX-06, recording consent, F4/P-19/P-20/P-25, PR #76, v1.6 signature (OD-07/OD-30 are Schreiben-only).
- Merged in PR #145 (`0c9563b`). **Non-production run M1, 2026-10-20** (`NONPROD-SETUP.md` §4): migration 0002 applied. All checks pass with the setting unset, `lesen` and an invalid value, plus a full four-module journey afterwards; one first-run fail had a cause outside the code (S0 test fixture assigned from the `purpose=test` release). Reviewer evidence: `LESEN-ONLY-REVIEW-EVIDENCE.md`.
- Release set (PR #150): `EXAM_RELEASE_FORMS` lists the forms that may be assigned. It is required with `EXAM_MODULE_ONLY`; S0, unknown, non-live and non-practice ids fail closed, and nothing is substituted. Migration 0003 stores `forms.purpose`. Tests: `release-forms.test` (10). Non-production run M2 (2026-10-20, `NONPROD-SETUP.md` §4): passes; only listed candidate forms are assigned, and a missing set or listed S0 fails closed.
- Release candidate (PR #152): `release-candidate.mjs` builds a learner release of exactly the named forms and the matching Worker settings. It refuses S0, bad lists and forms without EX-03 Lesen approval in returned records; `--internal-candidate` builds a copy marked NOT APPROVED for non-production use only. Internal review of the 90 candidate Lesen items: no wrong key, 4 wording fixes (`INTERNAL-LESEN-REVIEW-2026-10-20.md`). Lesen EX-03 packet: `EX-03-LESEN-RC-2026-10-20` (ready, not sent).
- Self-service review (PR #154):
  - an offline fillable review form per form and module;
  - a plain-language record check (`review-status.mjs --check`);
  - a plain approved/outstanding summary;
  - the release tool refuses folders with stale, unreadable, unassigned or erroneous records.

  Owner decisions on one page: `LESEN-ONLY-OWNER-DECISIONS.md`.
- Still required: owner scope + form-set choice, EX-03 for the Lesen items of those forms, OD-08 confirmation, EX-01 (no recordings), EX-04 (Lesen screens), EX-05, EX-07, OD-41 policy, OD-20 domain, production provisioning.

**A3. One prioritized list of every remaining Lesen-only blocker:** `LESEN-ONLY-BLOCKERS.md`. Outreach drafts for all external reviews: `EXTERNAL-REVIEW-OUTREACH.md`. Owner reply template: `LESEN-ONLY-OWNER-DECISIONS.md`.

**C. Engineering work remaining (each waits for a decision listed in D, E or F)**
- Consent-withdrawal flow (F4/P-19, EX-01). Design draft: `CONSENT-PRIVACY-DRAFT.md` §4a.
- Recording retention: merge and configure PR #76 (F4/P-20, EX-01). Off until then.
- F4 reservation-abandonment bound (F4/P-25, OPEN) before the F4 recording-grant work proceeds.
- Real Hören/Sprechen audio integration (OD-14, EX-06). Audio is paused; practice forms carry test tones only.
- Learner release build for the chosen form set; production same-site routing once the OD-20 domain exists.

**D. Owner decisions and sign-offs**
- **Sign register v1.6 (draft PR #105).** OD-19 (D1–D8), OD-07 (half-up) and OD-30 (third rating replaces) are implemented on the owner's written instructions of 2026-10-19, but the signed v1.5 still lists OD-19 CONFIGURABLE and OD-07/OD-30 UNRESOLVED.
- F4/P-19 consent withdrawal, F4/P-20 retention scope, F4/P-25 abandonment bound (all OPEN in v1.5 §B.2).
- OD-41 accommodations policy (CONFIGURABLE; evidence process EX-08).
- Learner release set; acceptance of the ~1.5 min Sprechen Teil 3 partner talks (§2); OD-14a–e audio choices; OD-35 pilot sample sizes.
- OD-53 stays CONDITIONAL: AI-assisted drafts only; it authorises no acceptance or release.

**E. External review and certification (none started; no reviewer appointed)**
- EX-03 content panel for every form (P1–P15) and the M-27/M-28 sign-offs; OD-08 legal clearance.
- EX-01 privacy (incl. the consent, privacy-notice and withdrawal drafts); EX-04 accessibility; EX-05 security / penetration test; EX-02 raters (≥ 2 + a lead); EX-06 audio licences; EX-07 trademark; EX-08 accommodation evidence.

**F. Provisioning and deployment prerequisites (owner actions; none performed by engineering)**
- The isolated non-production environment is provisioned (PR #128) and accepted except A10 and the manual checks (B).
- **Production** secrets and data: `EXAM_PROXY_SECRET`, `EXAM_MEDIA_SECRET`, `TOTP_ENC_KEY` (store a copy offline first); Access migration 011; the production exam D1 database (`database_id` is still a placeholder) and the R2 buckets.
- OD-20: a production same-site domain for the site and API (register: required before the pilot).
- Production switches, all currently off: `EXAM_ROUTES` and the `EXAM` binding in klarweg-access, `EXAM_ENABLED`, `EXAM_SYNTHETIC_FORMS`, `EXAM_MOCK_FORMS` and `EXAM_PRODUCTION_FORMS` in the exam Worker, `exam/` in `.github/pages-allowlist.txt`, `EXAM_RECORDING_RETENTION_DAYS`.

## 1. Implemented and tested

| Area | Evidence |
|---|---|
| Attempt lifecycle: create (idempotent), module order, submission, completion replay | `security.test` SESSION, `retry-overlap.test`, `lifecycle-concurrency.test`, `e2e-flow.test` |
| Server timer, grace, auto-submit on close/disconnect, clock skew, accommodations | `e2e-flow.test` TIMER, `timer-recovery.test`, `frontend.test` TIMER (client) |
| Autosave, lease/second tab, reload recovery, network retry with the same request id; an EXPIRED lease (sleep, throttled tab, long outage) is reacquired like a reload and the request retried once, incl. Sprechen uploads | `frontend.test` AUTOSAVE/API client + LEASE EXPIRY, `timer-recovery.test` RECOVERY, `security.test` lease; browser `KX_E2E_ONLY=lease-expiry` (autosave, heartbeat, late stale refusal, submit, Sprechen recording) and `two-tabs` (takeover) |
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
| Browser end-to-end in CI: 8 scenarios (flagged desktop+mobile, two autoplay-policy cases, practice journey, Sprechen topics, lease expiry incl. Sprechen uploads and a late stale refusal, two-tab takeover, rater 2FA incl. a rating interrupted by 2FA expiry) on every exam PR and on main, each once directly and once through the in-process klarweg-access proxy (16 jobs, verbose logs) | `.github/workflows/exam-browser.yml`; read-only polls tolerate a navigating page; save waits use the server row, not the "Gespeichert" label |
| Content-Security-Policy on learner and rater pages (no inline script/style/eval; site, Google Fonts, `blob:` media, the API hosts only); the practice journey fails on any CSP violation | `frontend.test` CSP, browser `practice` |
| Third-party-cookie pre-flight (register §G.1 interim until OD-20): "Cookies blockiert" instead of a misleading sign-in prompt | `access/worker/test/cookie-probe.test.mjs`, `frontend.test` COOKIE PRE-FLIGHT. A real cross-site block is only testable in non-production (`NONPROD-SETUP.md` A2) |
| Production request path simulated locally: browser → klarweg-access in-process (session cookie, `/exam` proxy with header allow-list, 512 KiB cap, `X-KW-*` strip, `no-store`) → service binding → exam Worker; all 8 browser scenarios pass this way | `KX_DEV_PROXY=1` / `npm run exam:demo -- … --proxy`; CI runs all 8 browser scenarios via the proxy (`proxy: '1'` matrix leg). Still a simulation: real Cloudflare, D1, R2 and cross-site cookies need `NONPROD-SETUP.md` |
| Automated accessibility audit also on the five rater 2FA screens (0 findings) | browser `rater-2fa` (shared `makeA11y`) |
| Internal content audits (not EX-03): heuristics, key-vs-evidence, numbers, richtig/falsch polarity over P1–P15; two items with two defensible answers fixed (P14 Hören 2/12, P6 Lesen 1/3) | PR #111; `practice-library.test` group-size wording; private audit record |
| Automated accessibility audit in the real browser: every interactive element in Chrome's accessibility tree has a name; no duplicate ids; `lang` set; one h1; real Tab key presses show a visible focus indicator. Covers Lesen, Schreiben, Sprechen preparation, result + item review, rater forms, start screen with history, final result | Browser practice journey (`a11y()` in `browser-e2e.mjs`), self-checked against injected defects each run; 0 findings on P3 (2026-10-14) |
| Public-repository boundary | `check-public-boundary.mjs` |
| Rater/admin second factor (OD-19, owner instruction D1–D8 of 2026-10-19; register v1.6 DRAFT, PR #105, not yet signed): TOTP, 12 h freshness on every staff route, 5 wrong codes / 15 min, 30 min lock after 10, 10 hashed single-use recovery codes, secrets AES-GCM under `TOTP_ENC_KEY`, proxy-attested `X-KW-MFA-At` (browser cannot forge it); learners unaffected | `access/worker/test/mfa.test.mjs` (RFC 6238 vectors, enrolment, replay, limits, lock, recovery codes, freshness, forged header, missing key), `exam-worker/test/rater-mfa.test.mjs`, `rating-ui-api.test` RATER UI (OD-19); browser `KX_E2E_ONLY=rater-2fa` (real Access Worker in-process: enrolment, recovery codes, expiry, wrong code, recovery code, learner unaffected). Not provisioned; see `RUNBOOK-RATER-2FA.md` |

## 2. Implemented, awaiting human review

| Item | What is missing |
|---|---|
| Content of P1–P15 (texts, items, keys, explanations, partner talks) | **EX-03** (panel not formed): review by native B1 item writers. Machine checks are not native-speaker validation. Plan per register §C.1: reviewers A and B (teachers) rate every item independently (verdict, ambiguity_risk, inference_demand, distractor_strength); C (native linguist) signs off key and distractors, originality and item accessibility; disagreements are revised or withdrawn (EX-03/O7), with no carry-forward (O6). Sheets: `node exam-content/tools/review-sheet.mjs <dir outside the repo> [p3 …]` (HTML to fill in plus a JSON record per form; each record carries the form's content fingerprint). Status of returned records: `node exam-content/tools/review-status.mjs <returned dir> [--out <dir outside the repo>]` applies O1, O4, O6, O7, O10 and SCHEMA §8.3 and reports not started / in review / needs revision / approved per form; it approves nothing itself, and records of an older revision count as stale. Suggested start: P3, P8, P13, then the rest. |
| Accessibility | **EX-04** manual audit (WCAG 2.2 AA, screen readers, full keyboard pass incl. Hören and Sprechen during playback/recording). The automated audit covers only names, ids, lang, headings and focus visibility, and does not replace it |
| Sprechen Teil 3 partner talks (two per form, one per topic) | About 1.5 min each; OD-32 describes about 3 min for the mock. The owner/reviewers must accept the length for practice or ask for longer talks. |

## 3. Blocked by owner or external decisions
Ready-to-send briefs for every external review (scope, accounts, material, deliverable): `EXTERNAL-REVIEW-BRIEFS.md`.


| Decision | Blocks |
|---|---|
| **OD-14a–e** vendor, licence (EX-06), voice cast, 10 raters, disclosure (see `OD-14-AUDIO-VENDOR-RESEARCH.md` §7) | Real Hören and Sprechen partner audio |
| **Learner release set** (which forms) | Building a learner release |
| **EX-01** privacy review; **P-19** consent withdrawal; **P-20** retention (PR #76 stays unmerged, retention off). Draft consent text, privacy notice and withdrawal workflow for the reviewer: `CONSENT-PRIVACY-DRAFT.md` (not in use; the Sprechen screen keeps its placeholder until approval) | Real recordings |
| **OD-19** D9 met on non-production (A4 rows 1–11, 2026-10-19/20); D10 runbook exercised there; **production**: provisioning `TOTP_ENC_KEY` + Access migration 011 (owner action) | Pilot |
| **EX-02** rater recruitment and training | Rated Schreiben/Sprechen results for learners |
| **OD-20** same-site domain | Pilot |

## 4. Not implemented

| Item | Note |
|---|---|
| Real audio files | Waits for OD-14; files would live in the private content repository |
| Consent withdrawal flow | Policy P-19 open |

## 5. Not deployed
Exam Worker flags all `off` (`exam-worker/wrangler.toml`); `EXAM_ROUTES` off in klarweg-access; no `exam/` path in
`.github/pages-allowlist.txt`; no learner release built. Engineering ran remote D1, Wrangler and secret operations on
the **non-production** Workers and databases only, with the owner's authorization (2026-10-19/20); none on production.
Isolated non-production environment (setup, acceptance A1–A11, teardown): `NONPROD-SETUP.md`; config files
(`wrangler.nonprod.toml` for both Workers) and the site build tool are in the repo; provisioned 2026-10-19 (owner-authorized). Incident
response: `RUNBOOK-EXAM-INFRA.md` §5a.
