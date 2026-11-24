# B1 exam portal — full completion tracker (M0–M10)

Owner priority: Issue #384 (2026-11-24). Single source of status for the complete Klarweg Goethe-B1 practice portal.
Status words are strict: **verified** (a command or a check below shows it today), **partial**, **blocker** (cannot be
finished by engineering), **owner-gated** (needs an explicit owner decision or approval). Code-complete is never
"live", and an engineering PASS is never an academic, originality, legal or release approval.

This file is in the PUBLIC repository: it holds status, counts and hashes only — no item text, no keys, no scripts.
Real content and its evidence live in the private `klarweg-exam-content` repository (branch `form/mock-m1-m10`).

Last updated: 2026-11-24.

## 1. Where things are

| What | Where | State (2026-11-24) |
|---|---|---|
| Engine, Worker, client, toolchain | public `klarweg`, branch `feat/exam-b1-complete` (worktree `klarweg-exam-b1`) | draft PR, not merged |
| M0 content (released r001) | private `klarweg-exam-content` `main` + `releases/r001` | **live** in prod R2/D1 since 2026-11-09 |
| M1–M10 content, reviews, QA | private `klarweg-exam-content` `form/mock-m1-m10` @ `64fa1ed` | pushed (was 23 commits local-only until 2026-11-24); **not released** |
| M0 Sprechen one-partner fix | private PR #15 `fix/m0-sprechen-one-partner` (draft) | not released (r001 keeps the original partner audio) |
| Live Access Worker line | `deploy/access-vocab-r8-on-085e7ab0` @ `2d189d82` | contains the exam proxy + staff 2FA (`EXAM_ROUTES = "on"`, `EXAM` binding) |
| Live exam Worker | `klarweg-exam` | version 335b45df per notes; **source commit not recorded** (owner check, §6 O-9) |
| Live learner client | `klarweg.in/exam/` from `main` | M0 only, access by grant only |

Backups made 2026-11-24 (verified with `git bundle verify` / `shasum -a256 -c`): `~/klarweg-backups/2026-11-24-unpushed/`
and a second copy in `~/Documents/klarweg-unpushed-backup-2026-11-24/` — bundles of every unpushed exam branch, the app
branch and the Tavus prototype (kept local by rule); both M0 audio sets (released r001 set and the PR #15 set,
21 files each, SHA256SUMS).

## 2. Per-form status

Every row was checked on 2026-11-24 with the commands in §5.

| Form | Validator (structure) | Originality sign-off | Engine rehearsal (API, 4 modules) | Browser journey (desktop + mobile) | Audio technical (release check) | Loudness (AUDIO-SPEC B7) | Academic review | Released |
|---|---|---|---|---|---|---|---|---|
| M0 | verified | done (owner, 2026-11-06) | verified PASS | verified PASS ×2 | 21/21 in r001 | 21/21 in spec | owner-only review done; no panel | **live (r001)** |
| M1 | verified | **owner-gated (B4)**, 21 tasks open | verified PASS | verified PASS ×2 | 24/24 OK | 22/24 | **owner-gated (B1)** | no |
| M2 | verified | **owner-gated**, 21 open | verified PASS | verified PASS ×2 | 24/24 OK | 24/24 | owner-gated | no |
| M3 | verified | **owner-gated**, 21 open | verified PASS | verified PASS ×2 | 24/24 OK | 23/24 | owner-gated | no |
| M4 | verified | **owner-gated**, 21 open | verified PASS | verified PASS ×2 | 24/24 OK | 23/24 | owner-gated | no |
| M5 | verified | **owner-gated**, 21 open | verified PASS | verified PASS ×2 | 24/24 OK | 22/24 | owner-gated | no |
| M6 | verified | **owner-gated**, 21 open | verified PASS | verified PASS ×2 | 24/24 OK | 24/24 | owner-gated | no |
| M7 | verified | **owner-gated**, 21 open | verified PASS | verified PASS ×2 | 24/24 OK | 21/24 | owner-gated | no |
| M8 | verified | **owner-gated**, 21 open | verified PASS | verified PASS ×2 | 24/24 OK | 24/24 | owner-gated | no |
| M9 | verified | **owner-gated**, 21 open | verified PASS | verified PASS ×2 | 24/24 OK | 22/24 | owner-gated | no |
| M10 | verified | **owner-gated**, 21 open | verified PASS | verified PASS ×2 | 24/24 OK | 24/24 | owner-gated; B5 (#11 script/audio) | no |

Each form has all four modules: Lesen 30 scored items (5 parts), Hören 30 scored items (4 parts), Schreiben 3 tasks,
Sprechen 3 parts with preparation, topic choice, slide decks and a recorded partner (rating units per attempt: 7).

Rehearsal facts per form (API): Lesen + Hören all correct → 100/100 each; all wrong → 0/0; single examiner, two blind
rounds → final points with the same-examiner disclosure; single-module Lesen attempt; no `correct` key and no spoken
Hören/Sprechen sentence in any learner package before submission (2,557 lines checked across M0–M10); every audio
asset present and non-empty; every Hören play phase has a measured duration (M1–M10: 19 plays ≈ 38–40 min incl.
answer windows; M0: 16 plays ≈ 37.5 min).

Browser journeys (2026-11-24, headless Chrome, `modelltest-browser.mjs`): **22/22 PASS** — every form at desktop and
mobile width: all scored items rendered and answered through the UI, every audio asset decoded by Chrome WebAudio
(261 files, decoded length = plan, max drift 0 ms), Schreiben reload recovery, Sprechen consent + mic check + recording
in Teil 1/2/3 + partner talk without recording, result with disclaimer, single-examiner rating, rater playback of all
3 recorded turns, outsider refused, final result with the same-examiner note, no horizontal scroll, no uncaught errors.
Desktop Safari 27.2 decodes the exam WebM/Opus files (6/6 samples); a real iPhone/Android test is still open (O-6).

## 3. Engineering work in `feat/exam-b1-complete`

| # | Change | State |
|---|---|---|
| E1 | **Fail-closed review staging.** `build-release --review-staging` tolerates only the originality gate, is refused for learner releases and writes every form as status `review`. The Worker assigns `review` forms (new attempt, release set, practice pool) only with `EXAM_REVIEW_FORMS=on`; a test fails if any wrangler config sets it. | verified (8 tests) |
| E2 | Lease: a late request carrying the lease this tab itself replaced is not a takeover (cherry-picked 32a6ab97) | verified; client-only; live-M0 part in draft PR #386 (owner merge) |
| E3 | Sprechen uploads 4 chunks at a time; the sequential queue fell behind real time (cherry-picked 9ccf1970) | verified; in draft PR #386 |
| E7 | O-8/O-5 wording, non-affiliation footer (start, info and result screens), guard tests | verified |
| E8 | Rater: warning when a Sprechen unit has no recording; the "synthetisch" label only on synthetic attempts | verified (tests) |
| E9 | Accessibility: real-form scan (AX names, ids, lang, alt, WCAG AA contrast) on 286 screens of M0–M10 × 2 viewports → 0 findings after fixing the "Beispiel" label (2.80:1); the contrast check was added to the synthetic suite too | verified |
| E4 | `EXAM_GRANT_POLICY` (open / paused / adults_only) for new grants (cherry-picked e2868ae6; owner approved M-a/M-b 2026-11-11) | verified; flag unset = unchanged behaviour |
| E5 | Local real-browser journey for real forms (`exam-worker/test/modelltest-browser.mjs`, `cdp.mjs`) | verified: **22/22** journeys (M0–M10 × desktop 1280×800 + mobile 360×640) |
| E6 | Modelltest progress on the learner history: "n von N Modelltests vollständig bearbeitet" (`mock_progress`) | verified (3 tests) |

Tests on this branch: `npm run test:exam` → **648 tests, 645 pass, 0 fail, 3 skipped**. Browser group `rest`
(16 scenarios, synthetic forms, desktop + mobile, autoplay policy, lease expiry, two tabs, rater 2FA, access admin,
precheck, confidentiality, sleep/wake, focus, autosave rejection, text limit + IME) → **16/16 PASS**.

## 4. Requirement checklist (Issue #384)

| Requirement | State | Evidence / what is missing |
|---|---|---|
| All 11 forms, 4 modules each | **partial** | content built and engineering-verified for all 11; only M0 released |
| Original content, legally cleared | **blocker / owner-gated** | B4 originality sign-off (M1–M10), B2 = OD-14 (TTS terms, also M0), B3 = OD-08 (format/trademark counsel) |
| Academic review | **owner-gated** | B1: 790 open review entries (private `RELEASE-CHECKLIST-PER-FORM-2026-11-11.md`) |
| Full simulation + single module | verified | `mock_m0` / `mock_module`, rehearsal + browser |
| Learner picks a specific Modelltest | **not built by design** | OD-50 (server-side assignment, least-attempted first). Owner decision needed to change (§6 O-7) |
| Start/resume, timers, autosave, reload, offline | verified | server-authoritative deadlines; browser scenarios incl. reload, sleep/wake, lease |
| Lesen all parts, scoring, review | verified | per-item review with explanation after submission |
| Hören cast, play schedule 2/1/1/2, durations, interruption | verified (technical) | plan durations = decoded file lengths (drift 0 ms); recovery replay scenario PASS; voices: Google Chirp 3 HD (OD-14 conditional) |
| Hören loudness −18 LUFS ±1, ≤ −1 dBTP | **partial** | 250/261 in spec; 11 files slightly out (§6 O-2) |
| Hören spoken instructions in every part | **partial** | M1–M10: 4/4 parts; **M0: Teil 2 only** (§6 O-3) |
| Schreiben save, criteria rating, transparent status | verified | autosave + reload recovery; "in Bewertung" until rated |
| Sprechen prep, partner/examiner turns, consent, recording, review, retention | verified (technical) | consent gate, mic check, Teil 1–3 recording, partner talk without recording, rater playback, outsider refused; retention OD-21 PR #76 still open |
| Dashboard, history, module breakdown, feedback | verified | history with per-module points + Modelltest progress (E6); result page with item review, transcripts, own recordings |
| "Not an official Goethe certificate" notice | verified | `RESULT_DISCLAIMER` on every result (browser-checked) |
| Owner/staff dashboard, grants, 2FA, audit | verified (synthetic) | access-admin + rater-2fa scenarios PASS; staff 2FA live on the Access line |
| Keys server-only, no leaks, no IDOR | verified | containment checks above; `security`, `access-matrix`, `confidentiality` tests; outsider refused recordings |
| Unreviewed forms never reach learners | verified | E1 (two independent guards: originality validator + `review` status) |
| iPhone Safari / Android Chrome real devices | **owner-gated (device test)** | desktop Safari 27.2 decodes the exam WebM/Opus audio (6/6 sample files, 2026-11-24); Chrome mobile emulation PASS; **no real phone yet** (§6 O-6) |
| WCAG / accessibility | **partial** | automated a11y audit in browser scenarios; manual EX-04 audit not done |
| Calibration | **not started** | OD-12/OD-35: no pilot data; results must not claim equivalence (OD-51) |
| Rollback + runbook | partial | M0 runbook exists; a full-release runbook for r002 is to be written with the release PR |

## 5. How to re-verify (all local, no cost)

1. Engine tests: `npm run test:exam` (public repo, this branch).
2. Engineering rehearsal of all 11 forms (private repo):
   `node tools/rehearse-all.mjs <klarweg checkout> <exam-content>/forms/b1/mock-m0 forms/b1/mock-m{1..10} --json authoring/b1/qa/rehearsal/rehearsal-<date>.json`
   (M0's audio is not in git; run M0 from the checkout that holds the released audio.)
3. Browser journeys (public repo, needs the private forms on disk):
   `node exam-worker/test/modelltest-browser.mjs <form dirs…> --viewports=desktop,mobile --json <out>`
4. Audio: `python3 tools/audio-release-check.py m1 … m10` and `python3 tools/audio-loudness.py <form dirs…>` (private repo).

## 6. Owner decisions — status after the owner's message of 2026-11-24 (`OWNER-DECISIONS-2026-11-24.md`)

| Id | Topic | Status |
|---|---|---|
| O-1 | B1 academic review: 790 open entries | **needs owner review** |
| O-2 | Loudness: 11 files slightly out of spec | candidates ready, 11/11 in spec (private `tools/audio-relevel.py`, A/B page `authoring/b1/qa/relevel-candidates/index.html`). **Pending the owner's listening approval; not applied, never auto-approved** |
| O-3 | M0 spoken Hören instructions Teil 1/3/4 | **prepared, no TTS call.** Teil 1 and 3 are identical to the owner-approved M1 clips (0 new characters). Teil 4 needs 196 new characters, ≈ $0.006 at list price (inside the free monthly tier). Exact texts are in private `authoring/b1/mock-m0/o3-instructions/` and branch `fix/m0-hoeren-instructions` @e583859. Needs: text approval → TTS approval → listening approval → a new M0 release (live M0 is unchanged until then) |
| O-4 | OD-14 Google TTS terms | **open; explained below; owner decision** |
| O-5 | Goethe-format references + non-affiliation | **done in code** (OWN-2026-11-24-2): result disclaimer, plus a footer on the start, info and result screens. **Legal/trademark clearance (OD-08) still pending** with counsel |
| O-6 | HTTPS staging preview + real phones | preview **deployed to non-prod** with synthetic content only (exam nonprod b5279125, preview 193ba35f; prod unchanged; checks in `STAGING-PREVIEW-DEVICE-TEST.md`). **Real iPhone + Android run still needed (owner)** |
| O-7 | OD-50: learners cannot pick a specific Modelltest | kept as is (no owner change requested) |
| O-8 | "zertifizierte Prüfperson" | **done** (OWN-2026-11-24-1): "Bewertung durch eine Lehrkraft von Klarweg …"; a guard test fails on any certification claim |
| O-9 | Source commit of the live exam Worker 335b45df | **owner check** (read-only `wrangler deployments list` on prod, or your deploy notes) |
| O-10 | Live-M0 client fixes | **prepared: draft PR #386** (lease self-replacement, 4-way Sprechen upload, "Beispiel" contrast). Client-only, so no Worker deploy. Tests: exam 630/0, npm 907/0, browser suite all PASS. Security review: no server rule changed. **Merge needs owner approval** |
| O-11 | B4 originality sign-offs, B5 (M10 #11), B6 release authorisation | **needs owner**; runbook `R002-RELEASE-RUNBOOK-M1-M10.md` |
| O-12 | Close PR #312 (already on the live Access line) | owner housekeeping |
| O-13 | OD-42: who gets exam access | **owner decision** |

### O-4 / OD-14 explained (no decision taken here; not legal advice)
**The open question.** Google's Service Specific Terms §20(d) say a customer will not use a *Generative AI Service*
"as part of a website … directed towards or is likely to be accessed by individuals under the age of 18". It is
unresolved whether Cloud Text-to-Speech Chirp 3 HD counts as such a service. Google lists TTS under "Pre-Trained
APIs", but the Generative-AI definition also catches "any generative AI features or functionality of a Service".
A second open question is whether pre-rendered audio files count as "using the service as part of a website".
Klarweg has no written answer from Google; the inquiry is drafted (private
`release/OD-14-GOOGLE-SUPPORT-INQUIRY-DRAFT-2026-11-11.md`) and **not sent**.

**Why it matters.** B1 learners can be minors (there is a youth version of the exam), and klarweg.in has no age gate.

**Impact on live M0 today.** All 21 M0 audio files (Hören and the Sprechen partner/examiner) were made with Chirp 3 HD
and are served by the live exam Worker. If §20(d) applies, serving them to under-18 learners would breach the terms.
Exposure is limited because M0 is reachable only with an individual access grant. The 2026-11-11 audit found 1 grant
(the owner's test account); the current count needs an owner read of the prod D1, which this session was not allowed
to run. No age data is collected. M1–M10 (240 files) are not released, so they have no exposure.

**Options (owner):**
1. Send the Google inquiry.
2. Counsel assesses the clause.
3. Until resolved, keep grants adult-only: `EXAM_GRANT_POLICY=adults_only` (built, flag off; needs a Worker deploy) plus a confirmed-adult grant practice.
4. Re-voice with a provider whose terms clearly allow this. The audio is reproducible from `tts-plan.json`: about 182,000 characters for M1–M10, plus M0, with the cost depending on the provider.

None of these is executed.

## 7. Corrections to earlier notes

- 2026-11-24 strategy audit said #312 "needs a re-port onto the current live line". **Wrong**: the live line already
  contains `655eb699`, `52bd369d`, `51ccd26a` (exam proxy, `EXAM` binding, `EXAM_ROUTES = "on"`).
- Private `README.md` still says "no accepted exam content"; out of date since r001 (2026-11-09).
- M1–M10 `form.json` carried `status: "live"` while their release notes said "OWNER REVIEW PENDING — not for release".
  **Fixed 2026-11-24** (private `64fa1ed`): `tools/make-mock.mjs` now writes `live` only when both the content review
  and the originality sign-off are approved, else `review`; regenerated M1–M10 differ only in that field. Together with
  E1 there are now three independent guards: validator originality gate, `review` status, `EXAM_REVIEW_FORMS` off.

## 8. Launch checklist (2026-11-24)

**Fully completed and verified by engineering**
- [x] M0–M10: all four modules built; validator structure OK; API rehearsal 11/11; real-browser journeys 22/22 (desktop + mobile) with the accessibility scan (286 screens, 0 findings)
- [x] Unreviewed forms cannot reach learners: three guards (originality gate, `review` status, `EXAM_REVIEW_FORMS` off), with tests
- [x] Scoring, timers, autosave, reload/sleep recovery, Hören play rules, Sprechen recording, rater playback, outsider refusal, single-examiner disclosure
- [x] O-8 wording ("Lehrkraft von Klarweg"; no certification claim) and O-5 non-affiliation text, with guard tests
- [x] Rater warning for missing Sprechen recordings; accessibility contrast fix
- [x] Test suites: `test:exam` 650/0 (3 skipped); browser suite 24/24 scenario runs; O-10 branch exam 630/0, npm 907/0, browser 24/24
- [x] HTTPS non-prod preview with synthetic content only (isolation, cost and content checks recorded)
- [x] r002 release runbook with rollback; O-3 clips and cost prepared; O-2 candidates prepared; O-4 explained

**Needs the owner's personal review or approval**
- [ ] O-1 academic review (790 entries) · O-11/B4 originality sign-offs M1–M10 · B5 M10 #11
- [ ] O-2 listen to the 11 re-levelled candidates
- [ ] O-3 approve the 3 instruction texts, then the ≈ $0.006 TTS call, then listen
- [ ] O-6 one full run on an iPhone and on an Android phone (`STAGING-PREVIEW-DEVICE-TEST.md`)
- [ ] O-10 approve the merge of PR #386 (live M0 client fixes)
- [ ] O-9 record the source commit of the live exam Worker · O-12 close #312

**Blocked before launch (external or legal)**
- [ ] O-4 / OD-14 Google TTS terms (Google answer and/or counsel; affects live M0 audio)
- [ ] O-5 / OD-08 trademark and format clearance with counsel
- [ ] O-13 / OD-42 commercial access model
- [ ] B6 release authorisation for r002, then the owner-run import (runbook)
- [ ] Manual accessibility audit EX-04 (the automated scan does not replace it) · no calibration data (results never claim equivalence)
