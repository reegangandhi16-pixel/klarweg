# Lesen-only release: readiness checklist and manual QA (internal)

> **Status 2026-10-23, verified on main `4a354acb`:** all four main CI workflows green (exam toolchain, exam browser
> end-to-end, site tests, Pages allowlist deploy). Exam Worker flags all `off`; klarweg-access has no `EXAM` binding;
> no `exam/` in `.github/pages-allowlist.txt`; the release tool refuses P3/P8/P13 ("lesen not approved … not
> started"). **Nothing here records an approval or resolves a decision.** Sources: `SPEC-AUDIT-2026-10-22.md`,
> `LESEN-ONLY-BLOCKERS.md`, `SELF-PRACTICE-SCOPE.md` §3–§4, `NONPROD-SETUP.md` §4, `PRACTICE-LAUNCH-CHECKLIST.md`.

The release is blocked until every row in §1–§4 is closed. A row closes only with the evidence named in it.

## 1. Owner decisions

| ID | Decision | Closes with | Blocks |
|---|---|---|---|
| O1 | Approve each review quote in writing (`REVIEW-APPOINTMENT-PLAN.md` §8) | Written approval per engagement | Every external review (§2) |
| O2 | D7 attempt-data retention (and D7b account deletion), with EX-01 | Written decision (periods, what is deleted) | EX-01 sign-off; retention job (§4 E3); privacy notice (O6) |
| O3 | D4 / OD-08 instruction wording (paraphrase fallback enough?) | Written decision | Release decision |
| O4 | D5 / OD-41 accommodation policy for the first release | Written decision | Release decision |
| O5 | D8 / OD-20 same-site production domain | Domain chosen and configured | Safari and other third-party-cookie-blocking browsers (Q2) |
| O6 | Exam privacy notice text (controller, legal basis, retention) — draft `CONSENT-PRIVACY-DRAFT.md` §3 | Approved text (with EX-01) | Link on the exam pages (§4 E4) |
| O7 | OD-42 who receives exam access at launch (no automatic grant to all signed-in users, no payment link while open) | Written decision | Opening access (§5) |
| O8 | Authorise a non-production deploy of the current build (last verified `bebfacb`, 2026-10-20) | Written authorisation | Q2, Q3b, Q4b and the re-run (§4 E1) |
| O9 | Accept the non-production record (`NONPROD-SETUP.md` §4, "Accepted by (owner)") | Signature after §3 is done | Release decision |
| O10 | Production provisioning and the release switch (§5) | Done by the owner | Learner access |

## 2. External reviews (appointment and every finding: owner-approved; nothing has started)

| ID | Review | Scope for Lesen-only | Closes with |
|---|---|---|---|
| R1 | EX-03 content panel (A, B teachers; C native linguist) | 90 Lesen items of P3, P8, P13 | Three valid records per form with `lesen: approved` (`review-status.mjs`); the release tool must then accept them |
| R2 | EX-05 security review / penetration test (non-production) | Learner API, Access proxy | Report with 0 high/critical, plus a re-test |
| R3 | EX-04 accessibility audit (WCAG 2.2 AA) | Start, Lesen, review, submit, result, item review | Signed report, plus a re-test |
| R4 | EX-01 privacy review | Account, answers, timings, audit log (no recordings) | Written clearance or a list of changes |
| R5 | EX-07 trademark review | "Goethe" references in exam and site copy | Written opinion and wording list |

## 3. Manual QA (procedures in §6; record results in §7 from real runs only)

| ID | Check | Where | Needs |
|---|---|---|---|
| Q1 | Safari (macOS; iOS optional): Lesen-only journey, tabs, flags, overview, submit, result | Local demo | Nothing (runs on a Mac) |
| Q2 | Safari with its default cross-site cookie blocking → "Cookies blockiert", not "Bitte anmelden" (`NONPROD-SETUP.md` A2) | Non-production site | O8 (the current build deployed) |
| Q3a | Laptop sleep > 60 s mid-Lesen: answers still save after wake, without a reload | Local demo | Nothing. **Approximated in CI** by the browser scenario `KX_E2E_ONLY=sleep-wake` (offline + frozen page + expired lease); a real OS sleep still needs the manual §6.3 run |
| Q3b | Same on the real non-production stack (`NONPROD-SETUP.md` A6) | Non-production site | O8 |
| Q4a | DevTools confidentiality: no key, explanation or evidence reaches the browser before submission (A11) | Local demo (Chrome and Safari Web Inspector) | Nothing. **Chrome is automated** by the browser scenario `KX_E2E_ONLY=confidentiality` (CI, direct and via the Access proxy); Safari still needs the manual §6.4 run |
| Q4b | Same against the non-production Worker | Non-production site | O8 |

## 4. Engineering work that is authorised once its input exists (nothing else is open; see the audit)

| ID | Work | Starts when |
|---|---|---|
| E1 | Re-run the non-production acceptance (`NONPROD-SETUP.md` §4: A1–A9, A11) on the current build | O8 |
| E2 | Production learner release build: `release-candidate.mjs --forms P3,P8,P13 --module lesen --approved <records>` (never `--internal-candidate`), registry preflight, then a PR adding its entries to `exam-content/released-forms.json` | R1 records say `lesen: approved` |
| E3 | Attempt-data retention / deletion job (off until configured) | O2 |
| E4 | Link the approved exam privacy notice from the exam pages | O6 |
| E5 | Fix every finding of R1–R5 (each through tests and CI; a revised EX-03 item is reviewed again) | A finding is delivered |

## 5. Release switch (owner only, after §1–§4; `SELF-PRACTICE-SCOPE.md` §4, `LESEN-ONLY-BLOCKERS.md` §D)

Production D1 + R2; secrets `EXAM_PROXY_SECRET`, `EXAM_MEDIA_SECRET`, `TOTP_ENC_KEY` (offline copy first); Access
migration 011; exam migrations 0001–0006 before the Worker deploy; upload the learner release from E2; deploy with
every flag off; then `EXAM_ENABLED`, `EXAM_SYNTHETIC_FORMS`, `EXAM_MODULE_ONLY=lesen` + `EXAM_RELEASE_FORMS` (from
`worker-settings.env`), `EXAM_ROUTES` + binding, `exam/` in the Pages allowlist. Kill switch: `RUNBOOK-EXAM-INFRA.md` §2.

## 6. Manual QA procedures

### 6.0 Local Lesen-only demo (no deploy, no account, synthetic content)

```sh
# from a clean checkout of main; Node ≥ 22. KX_DEV_PROXY=1 routes every call through the real klarweg-access proxy code.
KX_DEV_PROXY=1 node exam-worker/test/dev-server.mjs 8788 practice --module-only=lesen \
  --release-forms=frm:b1:synthetic-p3@1,frm:b1:synthetic-p8@1,frm:b1:synthetic-p13@1
# open http://127.0.0.1:8788/exam/dev/as/learner   (rater/admin screens: /exam/dev/as/rater1, /exam/dev/as/access)
```
Expected: the start screen offers Lesen only (full simulations answer `module_only`). Stop with Ctrl-C; nothing is
stored outside the process. Use a fresh private window per run, or reset the site data, so earlier device-local
flags, notes and positions do not carry over.

### 6.1 Q1 — Safari (macOS Safari, current version; iOS Safari optional via the Mac's IP on the same network)
1. Start the demo (§6.0), open the learner link in Safari, start Lesen.
2. **Tabs:** Teil 1 is open. Tab key reaches the tab bar; ←/→ move focus only; Enter opens the part; focus lands on
   the "Teil n" heading. In Safari's settings "Press Tab to highlight each item" must be on for keyboard tests.
3. Answer items in Teil 1 and Teil 3 (choose one ad twice: both cards and options say "verwendet bei …"). Flag one item
   ("Zur Kontrolle markieren"). Open "Übersicht": states and the flag shown; a number jumps to its item.
4. Reload: the same part and item come back ("Weiter in Teil …"); answers and the flag are still there.
5. Press the browser Back button: the dialog "Prüfung verlassen?" appears; "In der Prüfung bleiben" keeps the exam.
6. "Modul abgeben" → the review lists open and marked items and the time remaining → "Endgültig abgeben" → the result
   and the item review with explanations appear.
7. Resize to ~800 px and to a phone width (Responsive Design Mode, 360 × 640): tablet collapse control, phone
   "Text / Aufgaben" pair, no horizontal page scroll.

Pass = every step as described; record the Safari version and any difference.

### 6.2 Q2 — Safari cross-site cookies (non-production; needs O8)
Open the non-production site (`NONPROD-SETUP.md`) in Safari with default privacy settings ("Prevent cross-site
tracking" on), sign in, open the exam. Expected: the screen "Cookies blockiert" (with its explanation), never
"Bitte anmelden". Then turn the setting off temporarily, reload: the exam loads. Restore the setting. This is the
behaviour O5 (same-site domain) is meant to remove.

### 6.3 Q3a — Laptop sleep (local demo)
1. Start the demo; start Lesen in Chrome or Safari; answer one item and wait for "Gespeichert".
2. Close the lid (or Apple menu → Sleep) for **at least 2 minutes** (the device lease lasts 60 s).
3. Wake, return to the tab **without reloading**, change one answer.
Expected: within a few seconds the header reads "Gespeichert" again; no "Speichern gestoppt" or takeover screen; the
timer shows less time (the module kept running). Optional proof: in DevTools → Network, the save request answers 200
after a lease request. (The local server sleeps with the laptop, so the lease expiry is real; Q3b repeats it against
the real Workers.)

### 6.4 Q4a — DevTools confidentiality (local demo; Chrome DevTools or Safari Web Inspector)
1. Open DevTools → Network before starting Lesen; tick "Preserve log"; start Lesen; answer several items.
2. Search all responses (Chrome: Cmd-Opt-F in the Network panel) for each of: `correct_answer`, `explanation`,
   `evidence`, `explanation_de`, `key_json`, and the P3 explanation text `Mit den zwei Bussen dauert der Weg`.
   Expected: **no match** in any response while Lesen runs (the package, answers and media responses carry no key).
3. Optional: `GET /exam/v1/attempts/<id>/modules/lesen/review` from the console answers **409** while Lesen runs.
4. Submit Lesen; open the item review. Search again: the review response now contains `correct_answer` and the
   explanations (control that the search works).

## 7. Results record (fill from real runs only)

| ID | Date | Tester | Browser / OS / build | Result | Notes / evidence |
|---|---|---|---|---|---|
| Q1 | | | | | |
| Q2 | | | | | |
| Q3a (simulated) | 2026-10-27 | Claude, automated (`browser-e2e.mjs` scenario `sleep-wake`) | Chrome 156.0.8078.48 headless, macOS, branch `test/exam-q3a-sleep-wake` on main `c179fb4f`, form P1, direct and `KX_DEV_PROXY=1` | PASS | Network offline with one answer queued, page frozen 8 s (CDP `Page.setWebLifecycleState`; a 100 ms ticker shows an 8.7 s gap, so no timer ran) while the lease expired on the server; after waking, without a reload, the queued answer and a new one were stored, lease generation 1 → 2 (`lease_reacquired` audited), no incident, no takeover, no "Speichern gestoppt", timer 3899 s → 3889 s. Mutation check: a broken lease reacquire fails the scenario. Not covered: a real OS suspend (the local server sleeping too, a real 60 s TTL). |
| Q3a (real sleep) | | | | | |
| Q3b | | | | | |
| Q4a (Chrome) | 2026-10-27 | Claude, automated (`browser-e2e.mjs` scenario `confidentiality`) | Chrome 156.0.8078.48 headless, macOS, branch `test/exam-q4a-confidentiality` on main `1eac88b2`, form P1, direct and `KX_DEV_PROXY=1` | PASS | 62 response bodies captured over CDP (13 `/exam/v1`, package twice: start + reload); no `/exam/v1` JSON field in {correct, correct_answer, key, keys, key_json, explanation, explanation_de, evidence, transcript, transcripts, scoring_key}; none of the form's 68 explanation/transcript texts in any body, in Web Storage or in the DOM; review answers 409 while Lesen runs. Control: after submission the same scan finds them in the item review. Mutation checks: a leaked explanation text and a leaked `correct` field in the package both fail the scenario. |
| Q4a (Safari) | | | | | |
| Q4b | | | | | |
