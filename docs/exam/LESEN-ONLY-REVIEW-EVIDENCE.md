# Lesen-only self-practice: evidence for the external reviews

> **Status:** 2026-10-20, prepared by engineering for the reviewers of the *proposed* Lesen-only release
> (`SELF-PRACTICE-SCOPE.md`). The owner has not chosen that scope. Nothing here is an approval. No reviewer has been
> appointed, and every result cell for a reviewer is empty. P3, P8 and P13 are **candidate** forms only.

Use this together with `EXTERNAL-REVIEW-BRIEFS.md`. That file describes the full-portal reviews. This one narrows each
review to what a Lesen-only release actually uses, and points to the evidence that already exists.

## What is switched on in the reviewed configuration
```
exam Worker: EXAM_ENABLED=on  EXAM_SYNTHETIC_FORMS=on  EXAM_MODULE_ONLY=lesen  (MOCK/PRODUCTION_FORMS off)
```
- Learners can create single-module **Lesen** attempts only. Full attempts and the other modules are refused
  (`403 mode_disabled` / `module_disabled`). Routes of modules the attempt does not contain answer `404 module_not_found`.
- No Hören media, no recording, no consent screen, no rating queue entries, no rated feedback.
- Staff routes (raters, admins) still exist and still require the second factor. In a Lesen-only release no staff
  work is planned.

## EX-03 — content (Lesen items of the candidate forms)
- **Packet, ready to send (outside the repository, because it contains keys):**
  `~/Downloads/klarweg-review-packets/EX-03-LESEN-479bd0e/`. It contains Lesen-only sheets for P3, P8 and P13
  (30 items each), the full-form JSON record templates and a README with the content fingerprints. The fingerprints
  match the full-form packet `EX-03-821cfb0`, so a Lesen review still counts if the full review follows.
- **Status after return:** `node exam-content/tools/review-status.mjs <returned dir>` reports `lesen: approved` only
  when A, B and C approved every Lesen item, C approved each item's accessibility, the ratings are resolved and C
  signed originality (register §C.1, O1–O10). This is a report, not a release decision.
- **Internal checks, which do not count as EX-03:** validator, `practice-library.test`, and the internal audit of
  2026-10-19 (P1–P15). The fixes in PRs #111 and #118 changed stems and explanations only.

## EX-04 — accessibility (Lesen screens only)
Use the manual checklist `~/Downloads/klarweg-review-packets/EX-04-manual-accessibility-checklist.md`, limited to these rows:

| Row | Screen | Applies to Lesen-only |
|---|---|---|
| 1 | Start screen | **yes**: the Lesen-only text ("Selbstlernübung · nur Lesen …", button "Lesen üben") replaces "Übung starten" |
| 2, 3 | Lesen items, save state | **yes** |
| 4 | Timer | **yes** (Lesen only) |
| 5 | Navigation, review step | **yes** |
| 6, 7, 8, 10, 11, 16, 17 | Hören, Schreiben, Sprechen, recordings, rater, 2FA | **no**: not reachable for learners |
| 9 | Result, item review | **yes** (one module row) |
| 12–15, 18 | Errors, visual, reflow/zoom, motion, cookie/sign-in screens | **yes** |

Start the demo in the reviewed configuration with `npm run exam:demo -- <free port> practice --module-only=lesen`,
then open `http://127.0.0.1:<port>/exam/dev/as/learner`.
The automated audit already runs on the Lesen-only start screen (mobile) and its result screen (browser scenario
`lesen-only`, 0 findings in CI on PR #145). That audit covers names, ids, `lang`, one h1 and visible focus only, and
does not replace the manual audit.

## EX-01 — privacy (no recordings)
Data the exam Worker stores for a Lesen-only attempt. Verified against `exam-worker/migrations/0001_exam_init.sql`,
`0002_attempt_module_scope.sql` and `exam-worker/src/` at main `0c9563b`.

| Table | What it holds | Personal reference |
|---|---|---|
| `exam_access` | which account may use the exam area (granted by entitlement or admin) | Klarweg user id |
| `attempts`, `attempt_modules` | attempt, assigned form, timings, `module_scope = lesen`, status | user id |
| `attempt_leases` | current device lease (random device id from the browser's localStorage); deleted on completion | device id |
| `responses_current`, `response_events` | each chosen option, with client and server timestamps (every save, including superseded ones) | via attempt |
| `request_log` | idempotency record of each write request and its response | via attempt |
| `module_scores`, `results` | Lesen points, pass flag, counts | via attempt |
| `audit_log` | events such as `attempt_created`, `module_started`, `module_submitted`, lease events | user id |
| `rate_counters` | per-attempt request counters | via attempt |

- **Not stored in Lesen-only:** recordings, consents, writing texts, ratings, audio plays (these tables stay empty).
- **Logs:** one JSON line per event. Answer values, texts, keys, tokens and cookies are redacted (`exam-worker/src/log.js`).
- **Deletion:** there is no automatic deletion of attempt data today. Recording retention (PR #76) is for recordings
  only. A retention period and deletion process for attempt data is a decision for the EX-01 review and the owner.
  Engineering has not set one.
- **Sign-in data** (account, session) lives in klarweg-access. The reviewer should confirm whether the existing site
  privacy notice covers its use for the exam area.
- The draft privacy notice in `CONSENT-PRIVACY-DRAFT.md` §3 was written for the full portal. Its recording parts do
  not apply to a Lesen-only release.

## EX-05 — security
- **Same request surface as the full portal**, minus the routes Lesen-only cannot reach. Target: the non-production
  environment only (`NONPROD-SETUP.md`). The tester can switch it to the reviewed configuration with a command-line
  var. That is an owner-authorised non-prod deploy: `wrangler deploy --config wrangler.nonprod.toml --var EXAM_MODULE_ONLY:lesen`.
- **New in this scope, for the tester to probe:**
  - creating full or other-module attempts while `EXAM_MODULE_ONLY=lesen`;
  - mixing `mode`/`module` values;
  - starting another module in an attempt opened before the switch;
  - malformed `EXAM_MODULE_ONLY` values (expected: everything refused).
- **Automated evidence:** `module-only.test` (6 tests), `security.test`, `access-matrix.test`, and the browser scenario
  `lesen-only` direct and via the Access proxy. The non-production run M1 is recorded in `NONPROD-SETUP.md` §4.

## EX-07, OD-08, OD-41, OD-20
These have the same scope as the full portal. They are listed in `SELF-PRACTICE-SCOPE.md` §3. No evidence is claimed here.
