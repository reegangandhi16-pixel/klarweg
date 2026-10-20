# Lesen-only self-practice release: proposed scope (engineering proposal, not approved)

> **Status:** 2026-10-20, written by engineering. **Proposal only.** The owner has not chosen this scope. Writing it
> down approves nothing and closes no gate. Learner access stays off in production. Gate IDs follow the signed register
> v1.5 (`B1-FINAL-DECISION-REGISTER.md`).

## 1. Why a narrower first release

A full four-module release depends on external work that has not started: native-speaker content review (EX-03),
raters (EX-02), audio licences and voices (OD-14/EX-06), and recording privacy (EX-01, F4/P-19, P-20, P-25).
B1 is modular. Modules can be taken separately [OFFICIAL S1 §1.1; ENGINE §2 `simulation_module`], each module gets its
own result, and there is no overall result (SCORING §5). A release with **Lesen only** therefore removes Hören,
Schreiben and Sprechen from the critical path while staying inside the existing requirements:

| Capability | Lesen-only release | Why |
|---|---|---|
| Lesen, timed on the server, autosave, review before submit | **on** | No audio, no recording, no rater; machine-scored with the official 30→100 table |
| Lesen result + item review with keys and explanations after submission | **on** | Existing OD-45 wording: "kein offizielles Ergebnis"; per module, no overall result |
| Practice history | **on** | Lists only Lesen; other columns show "–" |
| Hören | **off** | Real audio blocked by OD-14/EX-06; practice forms carry test tones only |
| Schreiben | **off** | Needs two certified raters (EX-02) for a result. Unrated writing would be stored without feedback |
| Sprechen, recordings, consent, retention | **off** | EX-01, F4/P-19, P-20, P-25 open; PR #76 unmerged |
| Rater screens / rating queue | unused | Nothing rateable is created. The staff 2FA stays enforced (fail closed) |
| Full four-module simulation | **off** | `EXAM_MODULE_ONLY` refuses full attempts |

## 2. What engineering has built (this PR)

- `EXAM_MODULE_ONLY` (exam Worker var). Unset (the default): nothing changes. Set to `lesen`: learners can only
  create single-module Lesen attempts, and full attempts are refused. If the value contains any unknown module name,
  every mode is disabled (fail closed).
- API modes `synthetic_module` (practice library) and `simulation_module` (future sets) take `module` in the create
  request. The form is assigned exactly as for a full attempt. The attempt contains only the chosen module, so every
  Hören/Schreiben/Sprechen route answers `404 module_not_found`, including media and consent.
  While `EXAM_MODULE_ONLY` is set, no unlisted module can be started even in a full attempt opened before the switch
  (`403 module_disabled`).
- Migration `0002_attempt_module_scope.sql` adds the nullable column `attempts.module_scope`. It is additive and leaves
  existing rows unchanged. Apply it **before** deploying this Worker version.
- Learner page: when only Lesen is available, the start screen shows "Selbstlernübung · nur Lesen". It says that
  Hören, Schreiben and Sprechen are not available in this version, and that the result is a practice evaluation, not an
  exam result and not a prediction.
- EX-03 tooling: `review-sheet.mjs --module lesen` writes Lesen-only sheets. `review-status.mjs` reports a status
  **per module** in addition to the form status. The same locked O1–O10 rules apply to the module's items, plus the
  form-wide originality sign-off. A module status is a report, not a release approval.
- Tests: `exam-worker/test/module-only.test.mjs` (flags, refusals, fail-closed, one Lesen attempt end to end, no other
  module reachable, per-module result, no rating work); frontend start-screen tests; review tooling tests; browser
  scenario `lesen-only` (mobile start screen, refused full attempt, Lesen to result, a11y audit, no CSP violations),
  run directly and through the in-process Access proxy in CI.

Try it locally: `npm run exam:demo -- <free port> practice --module-only=lesen`, then open
`http://127.0.0.1:<port>/exam/dev/as/learner`.

**Release set (added after M1, PR #150).** Assignment uses only the forms listed in `EXAM_RELEASE_FORMS`. With
`EXAM_MODULE_ONLY` set, a missing list fails closed. A listed system-test fixture (S0), unknown, non-live or
non-practice form disables assignment altogether. Nothing is substituted. Listing a form is an operator action; it
records no approval.

Owner decisions for this scope, answerable in one pass: `LESEN-ONLY-OWNER-DECISIONS.md`.

## 3. Gates that still apply to a Lesen-only release (none is met today)

Narrowing the scope shrinks these gates. It does not remove them.

| Gate | Lesen-only scope | Who |
|---|---|---|
| **Owner: choose this scope** and the learner release set (which forms) | A product decision. This document only proposes it | Owner |
| **EX-03** content panel (A, B teachers; C native linguist), M-27 sign-off | Lesen items of the released forms only: 30 scored items per form instead of 60 items + 6 tasks; C still signs originality per form. Suggested first set: P3, P8, P13 (90 Lesen items) | External reviewers |
| **OD-08** legal clearance | Applies to descriptor/instruction wording. Owner to confirm whether the paraphrase fallback is enough for this release | Owner / counsel |
| **EX-01** privacy review | Narrower: account, answers, timings, audit log. No recordings, no rater access to learner data | External |
| **EX-04** accessibility audit (WCAG 2.2 AA) | Start, Lesen, review, submit, result and item-review screens only | External |
| **EX-05** security review / penetration test | Unchanged scope: the learner API and Access proxy are the same | External |
| **EX-07** trademark review of "Goethe" references | Unchanged (marketing and site copy) | External |
| **OD-41 / EX-08** accommodations (F4/P-18: "before any pilot or learner access") | Owner to decide the policy for the first release (for example: extra time on documented request only) | Owner |
| **OD-20** same-site production domain | Unchanged: without it, Safari and other browsers that block third-party cookies see "Cookies blockiert" | Owner (domain) |
| **Production provisioning** | D1 + migrations 0001 and 0002, R2 content bucket, `EXAM_PROXY_SECRET`, `EXAM_MEDIA_SECRET`, `TOTP_ENC_KEY` + Access migration 011 (staff routes fail closed without it), Pages allowlist `exam/` | Owner |
| **Non-production check** of this build | **Done 2026-10-20** (run M1, `NONPROD-SETUP.md` §4): 0002 applied; unset / `lesen` / invalid all as specified; full journey intact. The learner release must contain only the approved forms (S0 was live in the test release) | Engineering |

The scope **removes** from the critical path: EX-02 raters, OD-14/EX-06 audio, the recording consent text,
F4/P-19/P-20/P-25, PR #76, the ~1.5 min partner-talk question, and signing register v1.6 for OD-07/OD-30. Those two
govern Schreiben only; Lesen uses the official conversion table.

## 4. Release switch (only after every row in §3 is met)

```
exam Worker:  EXAM_ENABLED=on  EXAM_SYNTHETIC_FORMS=on  EXAM_MODULE_ONLY=lesen   (MOCK/PRODUCTION_FORMS stay off)
              EXAM_RELEASE_FORMS=<ids of the forms whose Lesen items passed EX-03, comma-separated>   (required)
              (both values are written by the release tool below; never typed by hand)
Access:       EXAM_ROUTES=on + EXAM service binding
Content:      node exam-content/tools/release-candidate.mjs --forms <names> --module lesen --release <rNNN>
                --approved <returned EX-03 records> --out <dir outside the repo>
              → a learner release of exactly those forms + worker-settings.env + candidate.json. It refuses S0,
                unknown/duplicate/empty lists and any form whose Lesen is not "approved" in the records.
                (--internal-candidate builds a NOT APPROVED copy for non-production testing only.)
Site:         exam/ in .github/pages-allowlist.txt
Kill switch:  RUNBOOK-EXAM-INFRA.md §2 (EXAM_ROUTES or EXAM_ENABLED off)
```

The packages of the other three modules are still part of each form in the release bucket (the engine requires
complete forms). They are never served: there is no attempt row for those modules, so their package, media and
answer routes return 404. That is tested.
