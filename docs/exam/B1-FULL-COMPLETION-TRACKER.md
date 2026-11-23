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
| E2 | Lease: a late request carrying the lease this tab itself replaced is not a takeover (cherry-picked 32a6ab97) | verified; **affects live M0 → needs merge + exam Worker deploy (owner)** |
| E3 | Sprechen uploads 4 chunks at a time; the sequential queue fell behind real time (cherry-picked 9ccf1970) | verified; **affects live M0 (owner deploy)** |
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

## 6. Owner decisions and approvals still required (nothing below is done by engineering)

| Id | Decision / approval | Blocks |
|---|---|---|
| O-1 | **B1 academic review**: 790 open entries (P1 → P2 → P3 → flagged → routine) | release of M1–M10 |
| O-2 | **Loudness**: 11 files slightly out of spec (7 loudness by ≤ 1.4 LU, 4 true peak −0.6…−0.9 dBTP). **Candidates ready** (private `tools/audio-relevel.py`, 11/11 in spec, durations unchanged); A/B page `authoring/b1/qa/relevel-candidates/index.html`. Approve → copy into forms + manifest update + new listening record. Listen closely to `m1-sp1-partner-4` (+3.5 dB with limiting) | AUDIO-SPEC B7 |
| O-3 | **M0 spoken instructions** for Hören Teil 1, 3, 4 (M1–M10 have all four): 3 short TTS clips; Chirp 3 HD is within the free monthly quota but any TTS call needs your approval | M0 parity |
| O-4 | **B2 = OD-14** Google TTS terms (§20(d) under-18) — inquiry drafted, not sent. Also concerns live M0 | all audio |
| O-5 | **B3 = OD-08** format formulae + "Goethe-Zertifikat" naming with counsel | all forms |
| O-6 | **Real device test**: one full journey on an iPhone (Safari) and an Android phone (Chrome), incl. microphone + Sprechen playback | launch |
| O-7 | Keep OD-50 (no learner choice of a specific Modelltest) or allow choosing M1…M10 | product |
| O-8 | Confirm the result wording "…derselben **zertifizierten** Prüfperson…" (OWN-2026-11-06-2) is accurate and provable | claims |
| O-9 | Record which commit the live exam Worker (335b45df) was built from | rollback |
| O-10 | Merge + deploy E2/E3 (lease and Sprechen upload fixes) — they change live M0 behaviour | live M0 reliability |
| O-11 | B4 originality sign-offs per form, then B5 (M10 #11), then B6 release authorisation (r002 import, `EXAM_RELEASE_FORMS`) | release |
| O-12 | Close PR #312 as landed (its three commits are on the live line `deploy/access-vocab-r8-on-085e7ab0`) | housekeeping |
| O-13 | Commercial mapping (OD-42): who gets exam access (grant only today) | sales |

## 7. Corrections to earlier notes

- 2026-11-24 strategy audit said #312 "needs a re-port onto the current live line". **Wrong**: the live line already
  contains `655eb699`, `52bd369d`, `51ccd26a` (exam proxy, `EXAM` binding, `EXAM_ROUTES = "on"`).
- Private `README.md` still says "no accepted exam content"; out of date since r001 (2026-11-09).
- M1–M10 `form.json` carried `status: "live"` while their release notes said "OWNER REVIEW PENDING — not for release".
  **Fixed 2026-11-24** (private `64fa1ed`): `tools/make-mock.mjs` now writes `live` only when both the content review
  and the originality sign-off are approved, else `review`; regenerated M1–M10 differ only in that field. Together with
  E1 there are now three independent guards: validator originality gate, `review` status, `EXAM_REVIEW_FORMS` off.
