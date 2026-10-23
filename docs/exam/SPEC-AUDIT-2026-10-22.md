# Exam Portal: specification versus implementation audit (2026-10-22)

> **Scope:** the canonical exam specifications (`B1-EXAM-ENGINE-SPEC.md`, `b1/GOETHE-B1-DIGITAL-EXAM-SPEC.md`,
> `B1-SCORING-SPEC.md`, `B1-AUDIO-SPEC.md`, `B1-SPEAKING-SPEC.md`, `B1-CALIBRATION-PLAN.md`, `SELF-PRACTICE-SCOPE.md`,
> `LESEN-ONLY-BLOCKERS.md`, `PRACTICE-LAUNCH-CHECKLIST.md`) read against the code and tests on main `6083e259`
> (exam suite 598 tests: 595 pass, 0 fail, 3 opt-in skips; all four main CI workflows green on the merge commits). Every row was
> checked in the code; "covered" means working code **and** an automated test. This audit records no approval and
> resolves no decision. Release gates are unchanged.

## 1. Must-fix engineering gaps for the Lesen-only release

**None open.** The two gaps this audit found are fixed by #221 and #222 (below). The remaining engineering rows of
`LESEN-ONLY-BLOCKERS.md` §C start only when their input exists:

| Item | Starts when | Status |
|---|---|---|
| Production learner release build (`release-candidate.mjs --approved …`, then `released-forms.json` PR) | EX-03 records say `lesen: approved` | Tool done and tested; refuses P3/P8/P13 today (no records) |
| Attempt-data retention / deletion job | Owner decision D7 (with EX-01) | Not built: a deletion policy cannot be invented |
| Exam privacy notice link on the exam pages | EX-01 and the owner approve the notice text (`CONSENT-PRIVACY-DRAFT.md` §3) | Not linked: the site `privacy.html` does not cover the exam yet, so a link would mislead |
| Fixes for findings of EX-03/04/05/01/07 | A finding is delivered | — |

Found and fixed during this audit:

| Spec | Gap | Fix |
|---|---|---|
| GOETHE-B1-DIGITAL §4 Global (Back) | After a module ended, the Back guard entry stayed: leaving took two presses | #221 (guard released when no module runs; `history.scrollRestoration = 'manual'`) |
| ENGINE §9.2/§9.3, register OD-39 default | Exam texts 16 px / line-height 1.6 instead of ≥ 17 px desktop / 1.55 | #222 |
| GOETHE-B1-DIGITAL §3 "At 0: autosave + auto-submit" | Unsent answers waited for the debounce at timer zero | #222 |

## 2. Covered (code + tests), Lesen-relevant

| Requirement | Evidence |
|---|---|
| Server-authoritative timer, grace 10 s, cron deadline sweep, 10/1-min warnings | `core.js` `SAVE_GRACE_MS`, `index.js` `scheduled`, `wrangler.toml` crons; lifecycle tests |
| Parts as tabs, free movement, focus to the part heading, announced (DIGITAL §2.3/§2.4/§4) | #214; `lesen-only` browser scenario |
| Item palette with answered / unanswered / flagged; flag toggle (ENGINE §9.1, DIGITAL §4) | #213, #199 |
| Split pane desktop, collapsible tablet, phone toggle (ENGINE §9.1) | #197, #201 |
| L3 used ads marked, grid / phone filter; explicit "0" option; L4 name → comment (ENGINE §9.1) | #202, #200 |
| Persistence: IndexedDB queue, debounce, part change, hidden, pagehide keepalive (ENGINE §6.1, DIGITAL §5) | #216; autosave unit tests |
| Offline banner text, recovery announcement (ENGINE §8) | #206; first network-loss browser test |
| Resume at the same part and item (DIGITAL §12) | #210, #214 |
| Lease / second tab / takeover warning (ENGINE §8) | `two-tabs`, `lease-expiry` scenarios |
| Session expiry: answers kept, timer runs, sign-in and continue (DIGITAL §12) | #186; functional equivalent of the "inline modal" (sign-in opens in a new tab) |
| Back never leaves silently (DIGITAL §4) | #215, #221 |
| Submit review: unanswered, flagged, time remaining (DIGITAL §10) | #199, #218 |
| Interstitial between modules (DIGITAL §2.2) | #219 |
| Pre-checks: storage, clock, connection incl. 1 MB download, browser features, keyboard (DIGITAL §2.1, ENGINE §10) | #184, #193, #220 |
| Scoring server-side, keys never shipped before submission, result per module, no total, disclaimer, summary (SCORING §5/§6, DIGITAL §10/§11) | `security.test`, `access-matrix.test`, #211 |
| Item review with explanations after submission (DIGITAL §11) | #79, #87 |
| Answer-change audit (`response_events`), form ids never exposed, repeat avoidance with CSPRNG (ENGINE §6.2, §7) | `api.js`, assignment tests |
| Admin: access grants, accommodations, email lookup, attempts and incidents view — audited, fresh second factor | #178, #179, #192, #209 |
| A11y: fieldset/legend per item, live regions, 44 px targets, focus ring, reduced motion, 360 × 640 reflow | automated audits in every browser scenario |

## 3. Other release-critical technical gaps (not Lesen-only blockers)

| Item | Why it matters | Status |
|---|---|---|
| Non-production re-verification of the current build | Non-prod last verified on `bebfacb` (2026-10-20), before #197–#222 | Needs authorisation to deploy to non-production; not done |
| Manual non-prod checks A2 (Safari), A6 (real laptop sleep), A11 (DevTools) | Real devices / browsers | Open; reproducible procedures in `LESEN-ONLY-RELEASE-READINESS.md` §6 (local parts need no deploy) |
| Admin form registry / analytics views (ENGINE §7.6, §12) | Operational visibility of form use | **Done 2026-10-23: #227** (per-form assignment counts, release-set / pool marks; exam_admin, audited) |

## 4. External reviews, owner/policy decisions, other non-engineering blockers (Lesen-only)

| Blocker | Who | Source |
|---|---|---|
| EX-03 content review of the 90 Lesen items (P3/P8/P13): three records per form, `lesen: approved` | External reviewers (owner approves quotes) | `LESEN-ONLY-BLOCKERS.md` §B |
| EX-05 security review, EX-04 accessibility audit (Lesen screens), EX-01 privacy review, EX-07 trademark review | External | §B |
| D7 attempt-data retention (and D7b account deletion) | Owner (with EX-01) | §A |
| D4 OD-08 wording, D5 OD-41 accommodation policy | Owner | §A |
| D8 OD-20 same-site production domain (Safari / third-party cookies) | Owner | §A |
| OD-42 who gets access at launch (no automatic grant, no payment link while open) | Owner | register |
| Exam privacy notice text (controller, legal basis, retention) | Owner + EX-01 | `CONSENT-PRIVACY-DRAFT.md` §3 |
| Production provisioning and the release switch (D1, R2, secrets, migrations 0001–0006, Access 011, flags, Pages allowlist) | Owner | `LESEN-ONLY-BLOCKERS.md` §D |

## 5. Optional / postponed (not needed for Lesen-only; some need decisions)

| Item | Note |
|---|---|
| ENGINE §9.1 L3 "re-assignment moves them" | Deliberately not implemented: moving an ad would silently clear another answer. Used ads are marked instead (#202) |
| ENGINE §3.1 `attempt_history`, `expires_at`; `auto_abandon` (OD-28) | Covered in parts by `audit_log`, `incidents`, `response_events`; OD-28 deferred |
| ENGINE §6.3 / DIGITAL §5 Schreiben version snapshots | Schreiben is outside the Lesen-only release |
| Sprechen slide-change timestamps (SPEAKING §2), server-side notes (SPEAKING §5/§7) | New stored learner data: waits on D7 |
| Admin incident time extension (ENGINE §8 invariant) | No policy (caps, modules, reasons); Hören timing open |
| Hören items (audio OD-14, F4/P-18 timing), Sprechen recording grants (F4) | Outside Lesen-only; decision-gated |
| D11 German-only instructions in Simulation, D12/OD-39 typeface | Owner (brand) decisions |
