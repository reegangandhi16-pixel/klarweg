# EX-04 handoff pack: WCAG 2.2 AA accessibility review (internal, draft)

> **Status: DRAFT, internal preparation only — 2026-10-27.** Prepared by engineering (Claude) as organiser
> (`LESEN-ONLY-OWNER-DECISIONS.md` D3 revised; `REVIEW-APPOINTMENT-PLAN.md` §10). **No reviewer has been appointed,
> no quote accepted, no audit has started, and no finding exists.** This pack prepares material for the appointed
> reviewer; it is not itself a review and clears no gate. See the handoff-packs [`README.md`](./README.md) for how
> this pack relates to the other four and to the release gates.

## 1. Scope and exclusions

**In scope:** WCAG 2.2 AA, limited to the screens a Lesen-only learner can actually reach
(`LESEN-ONLY-REVIEW-EVIDENCE.md` EX-04 section, selecting these rows of the private 18-row checklist):

| Row(s) | Screen | Applies |
|---|---|---|
| 1 | Start screen — shows "Selbstlernübung · nur Lesen …", button "Lesen üben" | yes |
| 2, 3 | Lesen items, save state | yes |
| 4 | Timer | yes (Lesen only) |
| 5 | Navigation, review step | yes |
| 9 | Result, item review | yes (one module row) |
| 12–15, 18 | Errors, visual, reflow/zoom, motion, cookie/sign-in screens | yes |
| 6, 7, 8, 10, 11, 16, 17 | Hören, Schreiben, Sprechen, recordings, rater, 2FA | **not reachable for learners — excluded** |

Required setups (`EXTERNAL-REVIEW-OUTREACH.md` §3): NVDA + Firefox, VoiceOver macOS + Safari, VoiceOver iOS,
keyboard only, 200% zoom, and 320px width.

**Specifically in scope, called out separately because it is new:** the keyboard-focus fix merged as PR #237
(commit `d3dcd84`, "keep keyboard focus clear of the sticky bar and footer") for **WCAG 2.2 SC 2.4.11 Focus Not
Obscured (Minimum), Level AA**. See §6 and §7 — this is exactly the kind of fix that needs independent re-testing,
not a status update to take on faith.

**Explicitly excluded:**
- Rows 6, 7, 8, 10, 11, 16, 17 (Hören, Schreiben, Sprechen, recording, rater, 2FA screens) — a Lesen-only learner
  cannot reach them; those routes return `404 module_not_found`.
- Production — not deployed; the audit runs against the local demo.
- Any accommodation-timing policy evaluation beyond flagging it (see §6) — that policy itself is an open owner
  decision (D5/OD-41), not something engineering has built for this reviewer to test.

## 2. Existing specifications, evidence and file references

- `EXTERNAL-REVIEW-BRIEFS.md` (EX-04 section) and `EXTERNAL-REVIEW-OUTREACH.md` §3: role profile, full scope,
  setups, effort estimate, and the e-mail draft (for context; this pack does not send it).
- `LESEN-ONLY-REVIEW-EVIDENCE.md` (EX-04 section): the row table reproduced in §1, and confirmation that the
  automated audit already runs on the Lesen-only start screen (mobile) and result screen in CI (browser scenario
  `lesen-only`, 0 findings on PR #145) — covering only accessible names, ids, `lang`, one `h1`, and visible focus.
- `SPEC-AUDIT-2026-10-22.md` §1: records fix #222 (exam text size/line-height, ENGINE §9.2/§9.3 and register OD-39
  default: now ≥ 17px desktop / 1.55 line-height) as relevant background for the visual/reflow rows.
- `B1-FINAL-DECISION-REGISTER.md`: the EX-04 row ("Accessibility audit (WCAG 2.2 AA, screen readers)", MOCK M-24)
  and the ACCESSIBILITY row in §H ("WCAG 2.2 AA, keyboard-only, S8 accommodations (OD-41 config); audit EX-04
  EXTERNAL").
- The private checklist **`EX-04-manual-accessibility-checklist.md`** (outside this repository, at
  `~/Downloads/klarweg-review-packets/` on the organiser's machine; 18 rows with setup steps). **This pack does not
  reproduce it** — the organiser hands it directly to the appointed reviewer, limited to the rows in §1.
- The local demo, which serves the reviewed configuration: `npm run exam:demo -- <free port> practice --module-only=lesen`,
  then open `http://127.0.0.1:<port>/exam/dev/as/learner`.
- `exam/exam.css` and `exam/js/main.js` for the focus-fix implementation itself (§6), and
  `exam-worker/test/browser-e2e.mjs` for the new automated scenario `KX_E2E_ONLY=focus-not-obscured`.

## 3. Reviewer checklist (step-by-step)

1. Start the local demo in the reviewed configuration (§2). Use a fresh private browser window, or reset site data,
   per run.
2. Walk the checklist rows in §1 only, in each required setup (NVDA+Firefox, VoiceOver macOS+Safari, VoiceOver iOS,
   keyboard-only, 200% zoom, 320px) — not the full 18-row checklist, which also covers screens Lesen-only cannot
   reach.
3. **Specifically re-test the sticky-bar/sticky-footer focus fix** (§6): Tab and Shift+Tab through every control on
   every Lesen part — including the "Zur Kontrolle markieren" buttons and the answer radios — at a desktop width
   (around 1280px) and a phone width (around 360–400px). Confirm with your own eyes and with each screen reader
   that no focused control is ever fully or partially hidden behind the sticky top bar or the sticky "Modul abgeben"
   footer, and that the screen reader announces the focused control correctly.
4. Test 200% zoom and 320px reflow on the rows that apply (no loss of content or function, no two-dimensional
   scrolling at 320px/400% equivalent per WCAG 1.4.10).
5. Test with `prefers-reduced-motion` enabled, where the scope's screens use any motion.
6. For every defect found, record it with the template in §4, including the specific WCAG 2.2 success criterion.
7. Deliver a signed report.
8. After engineering's fixes, re-test exactly the fixed rows and record the re-test result.

## 4. Findings template

| Field | Description |
|---|---|
| `id` | a stable finding id, e.g. `EX04-001` |
| `screen_or_flow` | e.g. "Lesen item navigation, Teil 3" |
| `wcag_criterion` | the specific 2.2 success criterion and level, e.g. "2.4.11 Focus Not Obscured (Minimum), AA" |
| `setup` | which AT/browser/zoom/width combination found it |
| `severity` | critical / serious / moderate / minor — **no scale is mandated in the source documents** for EX-04 (unlike EX-03's deliberately scale-free rule, register EX-03/O8); this four-level scale is this pack's recommendation, not a locked rule, and the reviewer may use their own standard scale if they state which one |
| `evidence` | screenshot, screen recording, or AT output transcript |
| `reproduction_steps` | exact steps, including viewport size and AT settings |
| `recommended_disposition` | must-fix before release / should-fix / advisory |
| `re_test_result` | pass / fail / not yet re-tested |

## 5. Acceptance criteria (from the source documents)

- A **signed report** listing findings with severity and the WCAG criterion, plus a **re-test** of the fixed rows
  (`LESEN-ONLY-RELEASE-READINESS.md` §2, row R3; register EX-04, MOCK M-24).
- The automated internal audit (names, ids, `lang`, one `h1`, visible focus — 0 findings) is explicitly **not a
  substitute** for this report (`EXTERNAL-REVIEW-BRIEFS.md` EX-04 section) and does not by itself satisfy R3.

## 6. The keyboard-focus fix now in scope (PR #237, commit `d3dcd84`)

Found while running the Safari Q1 manual-QA procedure (`LESEN-ONLY-RELEASE-READINESS.md` §6.1): with all controls
reachable by Tab, the "Zur Kontrolle markieren" flag buttons received focus while entirely behind the sticky
"Modul abgeben" footer, and answer radios were partly covered — a violation of **WCAG 2.2 SC 2.4.11 Focus Not
Obscured (Minimum), AA**, which is explicitly within this audit's scope.

**The fix:** `exam/js/main.js`'s `watchBar()` now also observes the sticky footer and publishes its height as
`--kx-foot-h` (0 while hidden); `exam/exam.css` gives every focusable control inside `#kx-main` a
`scroll-margin-top` (bar height + 8px) and `scroll-margin-bottom` (footer height + 8px), so focus scrolling stops
clear of both.

**What engineering already ran, and why it is not a substitute for this review:** a new browser scenario
(`KX_E2E_ONLY=focus-not-obscured`) that drives Tab and Shift+Tab through every Lesen part at 1280×800 and 360×640
(236 focus stops total) via Chrome DevTools Protocol, asserting no stop is entirely behind the bar or footer. It
fails on the pre-fix code (a stop behind the footer at 1280px, Teil 1) and passes with the fix. This is a geometric
check in headless Chrome only — it does not run a real screen reader, does not run Safari/VoiceOver, and does not
judge partial obscuring (only "entirely behind"), which is why §3 step 3 asks the human reviewer to re-check this
specific interaction directly, with real assistive technology, in both the setups this automated scenario cannot
reach.

## 7. Known gaps and unresolved owner decisions

- **No reviewer is appointed.** Candidates have, at most, been researched per the revised D3 process; none is
  engaged, and C2 (written approval before paid work) still applies.
- **D5 / OD-41 (accommodation policy for the first release) is open.** `LESEN-ONLY-OWNER-DECISIONS.md` notes that if
  the owner chooses "none at first," learners who need extra time cannot use the timed Lesen module fairly, and
  "the accessibility reviewer may flag this." This pack surfaces that explicitly: the reviewer should feel free to
  raise it as a finding even though no accommodation policy yet exists to test against.
- The private 18-row checklist itself is not included in this pack (see §2) and is handed over only on appointment.
- The automated audit's 0-findings result (§5) covers four narrow technical checks only; it says nothing about
  screen-reader announcement quality, logical reading order, or any row outside names/ids/lang/h1/focus.

## 8. What the reviewer must independently verify (not accept as an engineering claim)

- **The keyboard-focus fix itself (§6), under real assistive technology**, not the automated CI scenario's
  Chrome-only geometric pass/fail — the automated check cannot tell you whether VoiceOver or NVDA actually announce
  the focused control correctly once it scrolls into view, or whether the fix behaves the same in Safari, which the
  automated scenario does not drive.
- **That the Hören/Schreiben/Sprechen/rater/2FA screens are genuinely unreachable** for a Lesen-only learner (§1
  exclusion) — worth a quick independent check (e.g. attempting direct navigation) rather than assuming the scope
  table is still accurate against the current build.
- **Screen-reader announcement text and order** on every in-scope screen — the automated audit checks structural
  properties (names, ids, `lang`, one `h1`), not what a screen reader actually says or in what order.
- **Whether 200%/320px reflow genuinely preserves all content and function** — this needs direct testing; nothing
  automated in this repository currently checks it.
- **Their own judgement on the accommodation-policy gap's accessibility impact** (§7) — engineering has deliberately
  not pre-answered this.
