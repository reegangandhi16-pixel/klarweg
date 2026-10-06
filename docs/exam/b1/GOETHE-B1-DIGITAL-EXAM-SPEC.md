# Goethe B1: Digital Exam Behaviour Specification (Klarweg)

> **Status:** behaviour specification only. **Not implemented.** It describes how the paper exam observed in the reference (`GOETHE-B1-REFERENCE-ANALYSIS.md`) should behave as a high-quality digital exam on Klarweg.
> **Tags:** **[O]** grounded in the reference PDF (page cited) · **[K]** grounded in existing Klarweg specs or code (file cited) · **[I]** design inference · **[E]** needs official confirmation · **[D]** open **owner decision** (listed in §14).
> Requirement keywords: **MUST**, **SHOULD**, **MAY**.

---

## 1. Modes

| Mode | Purpose | Timers | Audio | Feedback |
|---|---|---|---|---|
| **Simulation** (full mock) | Mirror the real exam: all four modules, real durations, order Lesen → Hören → Schreiben → Sprechen | Hard, server-authoritative | Locked play counts, no pause or seek, 1× only | Only after module submission |
| **Module simulation** | One module under exam conditions (modules can be taken separately [O] p. 3) | Hard | Locked | After submission |
| **Practice** (per Teil) | Learn a part type | Optional soft timer (off by default) | Replay, Slow allowed [K OS §23.1] | Immediate per item |

Simulation MUST show the visual-system **Goethe Mode** signature: double-line top rule, mono eyebrow `GOETHE B1 · LESEN · TEIL 3`, timer as large mono numerals in `--ink-primary` on `--canvas` [K visual-system §7.7, §11.16]. The surface is in-app, so it is **teal-accented only** (no coral) [K CLAUDE.md]. No celebration motion on completion [K].

---

## 2. Section transitions

1. **Pre-exam check (Simulation):** audio check (play a test tone; the learner confirms they hear it), microphone check (for Sprechen), keyboard check (umlaut entry), browser support check, and a statement of the rules (timing, play counts, no reveal). Then an explicit "Start Lesen" action.
2. **Between modules:** an interstitial "Lesen submitted · 30 / 30 answered" with the next module's rules. The next module starts **only on an explicit action**. An optional break is allowed **[D1]**.
3. **Between parts inside a module:**
   - **Lesen and Schreiben:** parts are **tabs within one module timer**. Free movement (the paper exam lets candidates move freely within a module booklet [I]).
   - **Hören:** strictly linear. The engine moves to the next part automatically after the final play plus answer time. There is no going back to a finished part (on paper the audio cannot be rewound) [I].
   - **Sprechen:** linear: preparation → Teil 1 → Teil 2 (A, then B) → Teil 3.
4. Every transition MUST be announced to assistive technology (live region) and MUST move focus to the new part heading.

---

## 3. Timers

| Module | Timer model | Display | Expiry behaviour |
|---|---|---|---|
| Lesen | **One 65-min module timer** [O] p. 3. Per-part working times (10/20/10/15/10) are shown as **advisory** guidance next to each tab [O]. | Module remaining (mono); a part's advisory time turns from ink to secondary when exceeded. Never red flashing [K]. | At 0: autosave, lock inputs, **auto-submit** the module, show the submitted state |
| Hören | **Audio-paced**: fixed pre-read windows (H1 example 10 s [O]; H2/H3/H4 **60 s** [O]); playback; answer windows after each text/part (**[E]**: durations from official audio); **5 min transfer time** at the end [O] p. 3 | A per-phase indicator ("Lesezeit 0:42", "Wiedergabe 2/2") | Phases advance automatically. Answers remain editable until the end of the transfer window [I]. Then auto-submit. |
| Schreiben | **One 60-min module timer** with advisory 20/25/15 per Aufgabe [O] | Module remaining + advisory per task | At 0: autosave + auto-submit all three texts as-is |
| Sprechen | Preparation **15 min** [O] p. 3; Teil 1 **3 min**; Teil 2 **3 min** per candidate; Teil 3 **2 min** per candidate [O] | Countdown per phase | Recording stops at the limit and the next phase begins |

- **Server-authoritative deadlines:** the server stores `startedAt` and `deadline` per module. The client timer is a display of `deadline − serverNow` (clock-skew corrected). A refresh or device change cannot extend time [I].
- **Warnings:** a calm, non-modal notice at 10 min and 1 min remaining. No sounds, no colour flashing [K anti-anxiety §12.4].
- **Accommodations:** an extra-time multiplier (e.g. 1.25×, 1.5×) configured per user by an admin. Never self-selected in Simulation **[D2]**.

---

## 4. Navigation

| Context | Rule |
|---|---|
| Lesen | Tab bar Teil 1–5 + item palette (1–30) showing answered, unanswered and flagged. Any item reachable at any time. A "flag for review" toggle per item. |
| Lesen layouts | **Split pane** on desktop (text left, items right, independent scroll), matching the paper spreads [O] §2.3. L3 MUST keep the situations and the ads visible together: situations stay pinned and ads scroll in a grid, and **already-used ads are marked** (not hidden: the learner may reassign). On mobile ≤ 600 px: text/items toggle with a sticky item bar. The L3 ad grid becomes a filterable list. |
| L4 | Each comment is anchored to its name. Selecting a name scrolls to its comment. |
| Hören | No navigation between parts. Within the active part the learner may move freely among its items during pre-read, playback and answer windows. |
| Schreiben | Three task tabs. The A2 tab shows the Gästebuch stimulus pinned beside the editor [O] p. 10 etc. |
| Sprechen | No free navigation. |
| Global | Browser Back MUST NOT leave the exam silently: intercept and show "Leave the exam? Time keeps running." Deep links into a running exam resume at the current phase. |

---

## 5. Answer persistence

- Every response change is saved **locally immediately** (IndexedDB, keyed by `attemptId`) and **to the server debounced** (≤ 2 s; on part change; on visibility change; on `pagehide` via `sendBeacon`).
- Server writes are **idempotent**, with a per-attempt monotonic sequence number. Last-write-wins by sequence, never by client clock.
- The connection state is shown subtly: "Saved" or "Saving…" or "Offline · answers kept on this device". The exam continues offline and reconciles when back online. **Submission requires server acknowledgement.** If offline at the deadline, the local final state is submitted on reconnect with its original local timestamp and flagged `late_sync` for review **[D3]**.
- Writing: autosave the editor text every 5 s and on blur; keep version snapshots per minute (for recovery, not for exam review).
- Speaking: recordings upload in chunks during recording. A failed upload retries from the local blob.

## 6. Unanswered-item handling

- There is no negative marking (1 point per correct item [O] p. 3). The UI SHOULD encourage answering every item without pressure: the palette shows unanswered items and the submit dialog lists them ("3 unanswered: 14, 22, 27").
- Auto-submit at the deadline scores unanswered items as 0. No blocking.
- L3: "0" is a real answer option (a button labelled "0 · keine passende Anzeige"), distinct from unanswered [O].
- Hören: unanswered items stay answerable until the transfer window closes.

---

## 7. Audio controls (Hören, Simulation)

| Requirement | Detail |
|---|---|
| Play count | H1 and H4 play **twice**, H2 and H3 **once** [O]. Enforced by the engine **and** recorded server-side (play events). |
| Controls | **No pause, no seek, no speed change, no replay** in Simulation [K OS §23.1: mock mode disables slow controls]. Volume only. A start control appears only where the learner must start a part; otherwise playback is automatic after the pre-read. |
| Preload | Each part's audio MUST be **fully downloaded and decoded before its pre-read starts**. If it isn't, pre-read waits (a "Loading audio" state that doesn't consume exam time). |
| Source | **Only pre-rendered premium audio from the manifest.** The engine fallbacks (neural TTS on demand, browser `speechSynthesis`, pitch-shifted dialogue voices) MUST be **disabled** in exam mode [K kw-audio-engine.js chain; OS §23.5 premium voices only]. |
| Interruption | If playback fails mid-track (network, device sleep): log the event and offer **one** recovery replay of the **interrupted play from the start of that text**. Record `audio_incident`. On paper an interrupted play would be repeated by the invigilator [I] **[D4]**. |
| Tab hidden | Keep audio playing (the learner may have switched apps). Record visibility changes for integrity review. Never pause automatically. |
| Accessibility | A visual playback indicator (phase + elapsed bar without a seek affordance). **No transcript during the exam.** Transcripts appear in review only. |

---

## 8. Writing input (Schreiben)

- A plain multi-line editor per Aufgabe with `spellcheck="false"`, `autocorrect="off"`, `autocapitalize="off"`, `autocomplete="off"`. No grammar tools, no word popups, no AI help in Simulation [I]. Browser extensions cannot be fully prevented; this is stated in the rules.
- A **live word count** (German token rule: hyphenated compounds count as 1). The target is shown as "ca. 80 Wörter" [O]. There is **no hard limit**. Show the count only, never "too short" warnings during the exam **[D5]**.
- **Umlaut and ß entry:** an on-screen key row `ä ö ü Ä Ö Ü ß „ "` (many Indian keyboards lack these). Typed fallbacks `ae/oe/ue/ss` are accepted but noted in feedback [I].
- Paste: allowed from the same exam's own text only, or disabled entirely **[D6]**.
- The A2 stimulus is rendered as a Gästebuch card (name, date, post) beside the editor. On mobile it collapses above the editor.
- Advisory per-task times are shown. The module timer governs.

## 9. Speaking preparation and recording (Sprechen)

**Construct note [I]:** the paper exam is a **pair exam with examiners** [O] p. 3. A solo learner online needs a **simulated partner and examiner** for Teil 1 and Teil 3. This changes the construct, so results MUST be labelled "simulation" and never presented as a Goethe score [K OS §23.5].

| Phase | Behaviour |
|---|---|
| Preparation (15 min) | Show the Teil 1 task card, the learner's Teil 2 slide sheet (5 slides with a note field each) and the Teil 3 instruction. Typed notes are allowed and **remain visible** during speaking (as paper notes are), with the reminder "frei sprechen" [O] p. 3. |
| Teil 1 (3 min) | Turn-based dialogue with an AI/scripted partner: the partner proposes, the learner responds. Each learner turn is recorded. Push-to-talk or voice-activity detection. Total time is capped at 3 min. |
| Teil 2 (3 min) | Continuous monologue recording of up to 3:00, with the slides visible and the current slide advanced by the learner. Then the partner's presentation is played (pre-recorded) so the learner can do Teil 3. |
| Teil 3 (2 min) | (a) The learner gives feedback on and asks a question about the partner's talk; (b) the AI examiner and partner ask 1–2 questions about the learner's own talk. |
| Recording tech | MediaRecorder (Opus or MP4), chunked upload, server-side storage policy **[D7]**. |
| **Platform constraint** | The current speech pipeline caps a recording at **30 s / 1 MiB** and **3 checks per task per day** [K `access/worker/wrangler.toml`: `SPEECH_MAX_SECONDS=30`, `SPEECH_MAX_BYTES=1048576`, `SPEECH_TASK_DAILY_CHECKS=3`]. A 3-minute Teil 2 needs a separate exam speech path (segmenting or a larger cap) and its own budget **[D8]**. |
| Scoring | No automatic Goethe-equivalent score. Show the transcript, coverage of the required moves (all 5 slides addressed; Teil 1 proposals and reactions present) and rubric-aligned feedback once the official criteria are adopted **[E]**. |

## 10. Submission

- Each module has an explicit **"Modul abgeben"** button and a confirmation dialog listing unanswered or flagged items and the time remaining. Submission is **final** for that attempt.
- Auto-submit happens at the deadline (§3).
- After submission the server computes the raw score, converts it with the **lookup table** (§1 of the Blueprint; p. 3 values) and shows pass or fail per module (≥ 60 %) [O].
- **Scoring MUST run server-side.** Answer keys MUST NOT ship to the client before submission. The site is public GitHub Pages and `kw-access.js` is a UI gate only [K kw-access.js header]. Exam content and keys SHOULD be served through the Access Worker from protected storage (the R2 pattern already used for chapter resources) [K].
- **Tension with Klarweg principles [K]:** visual-system §12.4 says "every interaction is reversible". Exam submission and single-play audio are deliberately irreversible. This is permitted only inside explicit Goethe Mode **[D9]**.

## 11. Review behaviour (after submission)

- Totals: per-module score (raw and converted), pass or fail, per-part breakdown [K OS §23.4].
- Item review: the learner's answer, the correct answer and a **one-sentence explanation citing the text line or the audio timestamp** [K OS §23.1]. Hören review unlocks the transcript and allows free replay and Slow.
- Distractor explanation: name the mechanism in plain words ("Die Aussage ändert den Zeitpunkt"), linked to the trap taxonomy (Benchmark §2.3).
- Writing and speaking: the submitted text or recording, word count, function coverage and feedback (when criteria exist).
- Wording rule: **never** "You will pass the Goethe exam" or a predicted score with an interval [K OS §23.5]. Use "In this Klarweg simulation you scored 21/30 (70) in Lesen." Visual-system §7.7's sample line "you would likely score X/Y on Goethe B1" conflicts with OS §23.5 (the higher tier) **[D10]**.
- No confetti, no streaks [K].

## 12. Refresh and recovery

| Event | Behaviour |
|---|---|
| Refresh or crash (Lesen/Schreiben) | Resume at the same part and item with all answers restored (server state merged with local IndexedDB by sequence). The timer continues from the server deadline. |
| Refresh during Hören | Resume at the **current phase**. A play already completed is **not** granted again. A play interrupted mid-track gets **one** restart of that text (logged) **[D4]**. |
| Refresh during Sprechen recording | Keep the chunks already uploaded. Offer to continue the remaining time of that phase. Log the incident. |
| Session expiry | Re-auth inline (modal) without losing the exam state. The exam timer keeps running. |
| Second device or tab | One active exam session per attempt. A second tab shows "This exam is open in another window" with take-over (the old tab locks). |
| Abandonment | An attempt not submitted by its deadline auto-submits server-side at expiry. |

## 13. Accessibility

- WCAG 2.2 AA: keyboard operation of all controls (R/F, a/b/c, L3 select, speaker grid), a visible focus ring, touch targets ≥ 44 × 44 px [K], contrast within the tokens, `prefers-reduced-motion` respected [K].
- Screen readers: semantic form groups per item (`fieldset` + `legend` = item number + stem); live regions for timer milestones (not every second) and phase changes; the H4 grid exposed as rows of radio groups ("Aussage 23 · Moderator / Name / Name").
- Text scaling to 200 % without loss; the split panes stack.
- Hearing impairment: Hören cannot be made accessible without changing the construct. Offer an accommodation path set by an admin, not a transcript in Simulation **[D2]**.
- Language: UI chrome may show English/Hindi helper text in Practice. **Simulation shows German instructions only**, matching the exam [I] **[D11]**.
- Fonts: German content in Fraunces only where Klarweg already uses it. Exam texts SHOULD use a highly legible UI face (Inter) at ≥ 17 px. Exam papers are plain [I]. This conflicts with "German content = Fraunces italic" [K CLAUDE.md] **[D12]**.

## 14. Open owner decisions

| ID | Decision needed |
|---|---|
| D1 | Breaks between modules in full Simulation (none / fixed 10 min / learner-controlled) |
| D2 | Accommodations policy (extra time, hearing) and who grants them |
| D3 | Policy for answers synced after the deadline (offline at expiry) |
| D4 | Recovery replay for interrupted Hören playback (allow once vs never) |
| D5 | Word-count feedback during writing (count only vs soft warnings) |
| D6 | Paste in the writing editor (allowed / own-text only / disabled) |
| D7 | Speaking recordings: storage, retention, consent (currently the speech pipeline stores nothing) |
| D8 | Exam speech path: duration and byte caps, segmentation, budget separate from the chapter speech caps |
| D9 | Confirm Goethe Mode as an explicit exception to the visual-system §12.4 "reversibility" principle |
| D10 | Score-reporting wording: OS §23.5 (no predictions) vs visual-system §7.7 ("would likely score X/Y") |
| D11 | Instruction language in Simulation (German only?) |
| D12 | Typeface for exam texts (Inter for legibility vs the Fraunces-for-German rule) |
| D13 | The visual-system §7.7 example shows a `2:00` Teil 2 timer. The reference gives **3 min** per candidate for Teil 2 [O] p. 3. Confirm 3:00. |
| D14 | Hören answer-window and per-text pause durations (needs the official specification) **[E]** |
| D15 | Route and placement: OS §16.1 reserves `/exam/b1`. The current site is file-based (`*.html`). |
