# B1 Sprechen Specification (exam speaking architecture)

> **Status:** design only. No prompts, partner scripts, recordings or rating texts are created.
> **Sources:** Standard §5.4, §6.4, §8.3 (official: S1 §1.4, §3, §5; S3 p.25–28, 45–47). **Labels:** **[OFFICIAL]** · **[DESIGN]** · **[UNKNOWN]** · **[OD-xx]**.

---

## 1. Official model and Klarweg construct

| Aspect | Official [OFFICIAL] | Klarweg [DESIGN] |
|---|---|---|
| Format | Pair exam with 2 examiners; **single exam in exceptional cases** (≈ 10 min), where the examiner takes the partner role in Teil 1 and only the examiner asks questions in Teil 3 (S1 §1.4, §3.3) | Solo learner, so the closest official precedent is the **single exam** |
| Preparation | 15 min alone; notes allowed and usable during the exam; speak freely (S1 §3.2; S3 p.25) | Same |
| Introduction | ≈ 1 min, not rated (S1 §3, §5) | Short scripted examiner greeting + 1–2 questions; recorded but not rated |
| Teil 1 | Plan together, 4 points + "…"; ≈ 2–3 min | Simulated partner (examiner role) |
| Teil 2 | Choose 1 of 2 topics; 5 slides; ≈ 3–4 min per candidate | Same choice at prep start; 3:00 target, 4:00 hard stop |
| Teil 3 | Feedback + question to the partner; answer partner and examiner questions; ≈ 1–2 min per candidate | **[OD-24/OD-32]** see §1.1 |
| Rating | Two examiners, independent; mean; ≥ .5 up (S1 §5) | Two teacher raters, independent; AI advisory only (scoring spec §3.3) |

### 1.1 Teil 3 construct choice [OD-32]
The official rubric's Teil 3 Erfüllung covers giving feedback, asking a question **and** answering (S3 p.46). The single-exam model has no partner presentation [OFFICIAL S1 §3.3].

| Option | Description | Pros | Cons |
|---|---|---|---|
| (a) Single-exam model | Learner answers examiner questions only | Official precedent | Feedback/question functions are not elicited |
| **(b) Simulated pair (proposal)** | Learner hears a pre-recorded "partner" presentation (≈ 3 min, B1 level, a different topic), then gives feedback + asks a question, then answers the recorded examiner's/partner's questions about their own talk | Elicits the full Teil 3 construct; standardised | Adds ≈ 3–4 min; artificial partner |

The proposal is (b) for Mock and Sets. Time budget: ≈ 15 min, matching the official pair duration.

---

## 2. Phase plan (B1, solo simulation; values [DESIGN] unless marked)

| # | Phase | Duration | Learner action | System action |
|---|---|---|---|---|
| 0 | Consent + device check | untimed | Consent; mic level test; headphone check | Records consent version |
| 1 | **Preparation** | **15:00** [OFFICIAL] | Reads Teil 1 card, chooses the Teil 2 topic (1 of 2) [OFFICIAL], makes typed or paper notes; Teil 3 instruction visible | Topic choice locked at the end of prep (changeable during prep) |
| 2 | Introduction | ≈ 1:00 | Answers 2 greeting questions | Plays examiner audio; records (not rated) |
| 3 | **Teil 1** | target 3:00, hard 3:30 | Plans with the partner: proposes, reacts, decides | Scripted partner turns (§3); records each learner turn |
| 4 | **Teil 2** | target 3:00, hard 4:00 [OFFICIAL ≈ 3–4] | Presents along 5 slides; advances slides | Records continuously; slide-change timestamps logged |
| 5 | Partner presentation (option b) | ≈ 3:00 | Listens; may take notes | Plays the pre-recorded partner talk (5-slide structure, different topic) |
| 6 | **Teil 3** | target 2:00, hard 2:30 [OFFICIAL ≈ 1–2 per candidate] | (a) Feedback on the partner talk, (b) one question; then answers 1–2 questions about own talk | Plays the examiner/partner question prompts; records answers |
| 7 | Close | 0:20 | – | Examiner farewell; finalises the upload |

Notes typed during prep stay visible during speaking (official notes may be used [OFFICIAL S1 §3.2]). A reminder banner says "frei sprechen – nicht ablesen".

---

## 3. Simulated partner and examiner [OD-24]

| Approach | Description | Calibration suitability |
|---|---|---|
| **Scripted turn dialogue (proposal for Mock/Sets)** | Pre-recorded premium-voice partner turns tied to the 4 Leitpunkte (e.g. partner proposes for point 1, asks the learner's view on point 2, counter-proposes on point 3, asks for agreement on point 4, closes). Turns are written to be coherent **whatever the learner says** (open questions, proposals, generic acknowledgements). Learner turn windows 20–45 s with a visible turn indicator; "Weiter" ends a turn early | **High.** Identical stimulus for every learner |
| Live AI partner (ASR → LLM → TTS) | Real-time responsive partner | Low (non-deterministic); latency; premium-voice constraint (OS §23.5); cost. **Practice mode only, later** |

**Examiner role:** fixed recorded prompts (greeting, part transitions, Teil 3 question). Teil 3 questions about the learner's own talk are **generic but topic-aware** (selected from 3 pre-recorded variants per topic, assigned by topic choice), because a scripted system cannot react to content [DESIGN].

The official examiner moderation script (S3 p.45) is **not copied**. Klarweg writes its own moderation lines (originality rules).

---

## 4. Recording

| Aspect | Specification |
|---|---|
| Capture | `getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true}})`; `MediaRecorder` with `audio/webm;codecs=opus` (Chrome/Firefox/Edge) or `audio/mp4` (Safari); mono; target 32 kbps |
| Granularity | One recording **per learner turn** (intro, Teil 1 turns, Teil 2 continuous, Teil 3 turns) |
| Chunking | `timeslice = 5000 ms`. Chunks stored immediately in IndexedDB (`attempt/part/turn/seq`) and uploaded sequentially |
| Upload | `POST /exam/attempts/:id/sprechen/chunk?part&turn&seq` (raw bytes, `X-Chunk-SHA256`), idempotent by (attempt, part, turn, seq). The server writes R2 `attempts/<id>/speaking/<part>/<turn>/<seq>` and the D1 `recordings` row |
| Finalisation | `POST …/sprechen/turn-complete {part, turn, chunks, duration_ms}` → the server verifies the chunk set and hashes, builds the turn manifest. No transcoding needed (WebM/MP4 fragments concatenate per turn) |
| Limits | Teil 2 hard 4:30 of audio; whole module ≤ 20 min audio; ≤ 10 MB per attempt (32 kbps → ≈ 4 MB per 15 min) |
| Monitoring | Live level meter; silence detection (> 15 s silence in Teil 2 → a gentle visual hint, no audio interruption [DESIGN]) |

## 5. Interruption recovery

| Event | Behaviour |
|---|---|
| Network loss | Recording continues; chunks queue in IndexedDB; upload resumes; the turn completes when all chunks are acknowledged |
| Mic permission revoked / device lost | Pause the phase clock **once** (≤ 60 s) to reconnect the mic; then continue. If it fails again: incident, part marked `unratable_technical`, offer a re-take of **that part only** in a new attempt slot (OD-33) |
| Refresh / crash during prep | Resume prep with the remaining server time (notes restored from local + server autosave) |
| Refresh / crash mid-part | Chunks already uploaded are kept; the part resumes at the next turn with the remaining part time; incident logged |
| Tab hidden during recording | Recording continues (desktop). iOS background suspension → incident handling as above |
| Upload incomplete at module end | Up to 10 min background upload window ("Bitte Seite geöffnet lassen"); after that, missing chunks are an incident |

The phase clock is server-authoritative (engine spec §3). Interruption pauses are the only exception, capped and logged.

## 6. Consent, storage, retention [OD-09, OD-21]
- **Consent** before the device check: purpose (rating + feedback), raters (Klarweg teachers), AI processing (transcription and pre-rating by sub-processor OpenAI via the Tutor Worker), retention period, and the deletion right. Versioned in `consents`.
- **No consent → no recording**, and Sprechen is not available.
- **Storage:** private R2 `klarweg-exam-recordings`; no public URLs; raters stream via signed, rater-bound URLs (TTL 10 min).
- **Retention proposal:** recordings deleted 90 days after the final rating (or on learner request). Transcripts and ratings are kept with the result. Pilot recordings are kept longer **only** with a separate research consent.
- Learners may replay their own recordings in review until deletion.

## 7. Evaluation pipeline

```
turn manifests ─► transcription (Tutor: transcribe_long, per turn ≤ 60 s chunks → joined, word timestamps if available)
             ─► AI pre-rating (Tutor: rate_speaking_b1; rubric JSON per criterion EXCEPT Aussprache; evidence quotes + timestamps; flags)
             ─► rating tasks: Teacher R1, Teacher R2 (blind, independent; audio + transcript + slides + notes; rubric UI)
             ─► aggregation (mean, ≤ .49 down / ≥ .5 up [OFFICIAL S1 §5]) ─► module score ─► result
```

- **AI scope:** Erfüllung (slide coverage, function presence), Interaktion (turn count, responses to the partner's proposals), Wortschatz/Strukturen (range and control estimates). **Never Aussprache** (a transcript cannot carry it). Advisory only.
- **Teacher console:**
  - audio player with turn markers and slide markers
  - transcript side by side (marked "maschinell, kann Fehler enthalten")
  - rubric bands with official point values
  - a mandatory evidence note for bands D/E
  - an "unratable" flag
  - time-on-task logging
- **Teil 2 Erfüllung band helper [OFFICIAL S3 p.46]:** A = all 5 slides adequately covered; B = 3–4; C = 2 or all too brief; D = 1. Slide-change timestamps assist raters.
- **Result calculation:** scoring spec §4.1.

## 8. Reuse vs rebuild (current Record & Check pipeline)

| Current component [REPO] | Exam decision |
|---|---|
| `/speech/status`, `/speech/transcribe`, `/speech/task-check` routes | **Do not reuse.** Chapter-scoped (`speech-tasks.js`), 30 s / 1 MiB caps, 3 checks per day; changing them risks production |
| `SPEECH_*` env limits and `ai_usage` speech counters | **Do not reuse.** Separate exam budget counters in exam D1 (same accounting pattern) |
| "No audio or transcript stored" policy | **Not applicable.** The exam must store recordings (consented); separate bucket and policy |
| Deterministic Word Match scorer (`chapter-app.js`, `score_reference.py`) | **Not applicable** (sentence matching ≠ rubric rating) |
| Tutor `transcribe.js` (OpenAI `gpt-transcribe` client, key isolation, no-logging discipline) | **Reuse the client code and pattern; extend** with a new `/v1/transcribe-long` route (turn-chunked, larger limits, exam-only binding) |
| Tutor provider abstraction, prompt/guard patterns, cost accounting | **Reuse; add** actions `rate_speaking_b1`, `rate_writing_b1` with strict JSON rubric schemas |
| Tutor `check_speaking` chapter action | **Do not reuse** (chapter registry, free feedback) |
| Browser MediaRecorder capture knowledge in `chapter-app.js` | **Re-implement** in the exam module (no import from the chapter engine) using the same proven MIME fallbacks |
| `speech/` faster-whisper local server | Not used (not deployed). It could become an optional self-hosted transcription backend later |

## 9. Blockers
- OD-09 (capture architecture, retention, consent text)
- OD-13 (rater staffing)
- OD-24/OD-32 (partner model, Teil 3 construct)
- Premium partner/examiner voice production (audio spec B3, OD-14)
- Legal review of voice-data processing (an OpenAI sub-processor for transcription)
