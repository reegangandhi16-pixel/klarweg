# B1 Sprechen — virtual oral-examination room: feasibility audit

Status: audit + local PoC, 2026-11-09. Branch `poc/sprechen-virtual-room`. **Nothing deployed or merged, no paid API activated, no new cost incurred.**
M1–M10 production stays on hold until the owner has reviewed this.

## 0. Conflict that needs an owner decision first

`CLAUDE.md` (from the Klarweg OS / visual system) says two things that conflict with this request:

- "no mascots/avatars"
- Klarweg AI identity is "never 'Klara'/avatar"

A realistic examiner and partner simulate *people in an exam room*; they are not a brand mascot. Even so, this is a rule exception, and the owner must approve it explicitly before any production work. Under the CLAUDE.md rule, I have changed nothing on the shipped site.

## 1. Official format the room must respect

Source: the repo standard `docs/exam/b1/GOETHE-B1-ADULT-MASTER-STANDARD.md` §4/§5.4/§6.4. It is built from the Goethe Durchführungsbestimmungen, Stand 1 Sep 2025; the PDF was re-downloaded and matches the repo's source record, sha256 prefix `18b8338b19633df0`.

**General rules**

- Pair exam; a single exam only in exceptional cases.
- 15 min preparation with notes.
- Introduction of about 1 min, not rated.

**The three parts**

| Part | Task | Time | Points |
|---|---|---|---|
| Teil 1 | Plan something together: 4 Leitpunkte plus an open point | about 2–3 min | 28 |
| Teil 2 | Presentation: choose 1 of 2 topics, 5 slides | about 3–4 min per candidate | 40 |
| Teil 3 | Feedback plus one question each, then the examiner gives feedback and asks a question | about 1–2 min | 16 |

- Aussprache is rated separately: 16 points.
- Two examiners rate independently; Klarweg uses one rater by design (OD-10 / EXAM_SINGLE_EXAMINER).
- In a single exam the examiner plays the partner in Teil 1, and only the examiner asks in Teil 3.

**Consequences for the room**

- The examiner and the partner are different roles with different behaviour:
  - The examiner leads, keeps time, asks questions and never helps with content.
  - The partner negotiates as an equal, at B1 level.
- AI output is **never** called a Goethe result. Results always carry "Simulation – keine offizielle Bewertung".
- In rated mock attempts, every candidate must get the same partner prompts (fairness and comparability). Dynamic AI therefore belongs in a *practice* mode first.

## 2. Recommendation: the single best approach

**A browser-rendered 3-D room with scripted prompts first, then a constrained, cascaded AI partner on existing Klarweg rails.**

| Layer | Choice | Why |
|---|---|---|
| Rendering | three.js + **TalkingHead** (MIT) in the browser, CSS 2.5-D room behind a transparent canvas, 2-D portrait fallback | No per-minute avatar fee, works offline once loaded, same code on desktop and mobile; PoC proves it |
| Avatars | Our own avatars built in **MPFB/Blender** (CC0/CC-BY assets): 1 examiner, 2–3 partners matching the existing Chirp 3 HD voices; Draco/meshopt to < 10 MB | Ready Player Me shut down its public services on 31 Jan 2026. Avaturn/AvatarSDK/VRoid samples are non-commercial or anime. RocketBox is MIT but needs re-rigging |
| Lip-sync | Pre-recorded prompts: word timings from TTS/forced alignment, then lipsync-de visemes. Dynamic speech: TTS text plus timings, or the HeadAudio worklet (MIT) on streamed audio | Text-driven visemes are robust in German. HeadAudio's model is English-trained, so its German accuracy is untested |
| Conversation | **Cascaded** pipeline: browser VAD → utterance upload → Access Worker (session, quota, kill switch) → tutor Worker: STT → task-state LLM → Google TTS (Chirp 3 HD, existing project) → client plays audio with lip-sync | Reuses the existing AI rails (no provider keys in the browser), keeps text transcripts for audit and rating, and allows hard per-turn guardrails and caps. Voices stay consistent with M0 |
| Not chosen | Speech-to-speech realtime (OpenAI Realtime, Gemini Live) | Lower latency, but per-turn context re-billing makes cost hard to cap, guardrails are harder, and the voice catalogue differs from M0. Keep it as a later option if latency tests fail |
| Not chosen | Hosted avatar video (HeyGen LiveAvatar, Tavus, Simli) | Photoreal, but $2–5 per session for the full pipeline, a vendor lock-in risk, and video streaming on weak mobile networks |

## 3. Is true lip-sync achievable?

**Yes, at the viseme level, and the PoC demonstrates it.**

- Headless Chrome, SwiftShader, desktop and 390 px mobile layout:
  - Julia's mouth visemes were active in **74 %** of frames while she spoke (peak 0.9).
  - They were 0 % while the examiner spoke and during silence.
  - About 27–30 fps.
- German lip-sync works from text: lipsync-de turns "Urlaub" into U-RR-nn-aa-U-PP.

Limits:

- Visemes plus a 3-D head are convincing, not photoreal.
- The CC0 sample avatar has visible hair-edge artefacts.
- Word timings in the PoC are estimated; production needs exact TTS timings.
- Photoreal lip-sync needs commercial video avatars (see cost).

## 4. Can an AI partner sustain a natural B1 conversation?

**Within Teil 1 (planning) and the Teil 3 Q&A: yes, if it is tightly constrained. As a free conversation: not reliably.**

Required constraints:

- A task state machine: the Leitpunkte still open, decisions made, and turn count.
- A partner persona with a B1 register: short sentences, B1 vocabulary, 1–3 sentences per turn.
- Rules for the partner:
  - It must make its own proposals and sometimes disagree (the official task needs real negotiation).
  - It must hand the turn back.
  - It must never correct or teach.
- When the speech recogniser is unsure, it gives a neutral clarification ("Wie meinst du das?") instead of guessing.
- Total partner speaking share ≤ 50 %.

Main failure modes, each to be measured in Stage 2:

- Language above B1.
- The partner dominating the conversation.
- Answering misrecognised content.
- A slow turn gap.

## 5. Complexity and cost per 15-minute session

Assumptions for one solo session: about 6 min of candidate speech, about 5 min of AI speech, about 20 turns. Preparation time uses no AI.

| Option | Calculation | Per session | Price status |
|---|---|---|---|
| Scripted room (PoC / Stage 1) | Client rendering; prompts pre-generated once | **≈ $0** (bandwidth only) | — |
| Cascaded (recommended Stage 2): STT | gpt-transcribe $0.0045/min × 6 | $0.03 | Rate from the Klarweg AI budget audit |
| Cascaded: LLM | About 40k input + 2k output tokens | ≈ $0.01–0.05 | **Assumption**; check the tutor model price |
| Cascaded: TTS | Chirp 3 HD $30 / 1M chars × ~1–4.5k dynamic chars | $0.03–0.14 | Google price page; re-check before approval |
| **Cascaded total** | | **≈ $0.07–0.22** | |
| Gemini Live (gemini-3.8-live) | Audio in $3 / out $12 per 1M tokens: ≈ $0.03 in + $0.09 out, plus history re-billed each turn | **≈ $0.15–0.60** | Rates verified on the official AI Studio pricing page; context share is an estimate |
| OpenAI gpt-realtime-mini | In $10 / out $20 per 1M; user ≈ 600 tok/min, assistant ≈ 1,200 tok/min ⇒ $0.04 + $0.12, plus history replay (cached $0.30/1M) | **≈ $0.20–1.40** | Secondary sources; official page returned 403 — **unverified** |
| HeyGen LiveAvatar (full) | ≈ $0.18/min × 12 | ≈ $2.2 + plan fee ($99/month Essential) | Vendor page; unverified |
| Tavus CVI | ≈ $0.32–0.37/min | ≈ $4–4.5 | **Unverified** |
| Simli (avatar only) | from $0.009/min; free 50 min/month | ≈ $0.11 + LLM/TTS | Vendor page |

Budget conflict:

- The owner's AI budget is **$5 per year**. That covers about 25–70 cascaded sessions per year in total.
- So a dynamic AI partner can only be a **paid premium add-on with per-user caps** (for example 5 sessions per purchase), or it must stay off.
- The scripted room costs nothing per session and fits today's budget.

Engineering complexity (rough):

| Stage | Work |
|---|---|
| Stage 1 (scripted room in M0) | 2–3 weeks, including avatar creation and device QA |
| Stage 2 (dynamic partner, practice mode) | 3–5 weeks, including the guardrail eval set |
| Stage 3 (calibrated feedback) | Needs data first (see §8) |

## 6. Risks

| Risk | Notes and mitigation |
|---|---|
| Latency | The cascaded turn gap is likely 1.5–3 s: STT ~0.5–1 s + LLM ~0.5–1 s + first TTS audio ~0.3–0.6 s. A thinking partner may pause, but more than 3 s feels broken. Mitigations: stream TTS, start with a short back-channel ("Hm, gute Idee …") from a cached clip, measure p50/p95. |
| Interruptions / barge-in | The PoC is strictly turn-based: the microphone is evaluated only when no AI audio plays, which also avoids echo. Real barge-in needs echo cancellation that works (see iOS). Recommendation: no barge-in in the exam room; real exams are turn-based too. |
| Accents (Indian-accented German) | STT errors lead to wrong partner replies. Mitigations: confidence threshold, clarification line, an eval set of 50+ learner recordings before launch. |
| Noise | The PoC calibrates the noise floor (800 ms) and needs speech 12 dB above it. Noisy rooms trigger false turn ends. The "Ich bin fertig" button and the 60 s limit always work. |
| Browser support | Needs WebGL plus a 2-D fallback (done). iOS Safari: AudioContext must be unlocked inside the tap (done); M0 WebM/Opus decoding is still unverified on iPhone, so the PoC uses AAC. WebKit has open echoCancellation bugs (crackle and ducking, iOS 26.x). The Web Speech API is Chrome-only and sends audio to Google: never in the exam. |
| Mobile performance | The sample GLB is 36 MB: too heavy, must be < 10 MB. Cap the frame rate on mobile (PoC: 24 fps) and pixel ratio ≤ 2. Low-end Android is untested. |
| Audio quality | Bluetooth headsets switch to a low-quality call profile while the mic is open. Recordings for human rating must keep the existing MediaRecorder path unchanged. |
| Concurrency | Rendering is client-side, so scaling only affects the AI calls. Provider rate limits plus per-user quotas in Access. The kill switch (AI_ENABLED) falls back to the scripted room. |
| Fairness | Dynamic partners differ per candidate. Never use them in rated mock attempts until a fairness review is done. |
| Brand | §0 conflict; avatar realism ("uncanny valley") must be reviewed with real learners. |

## 7. Integration without breaking M0

- **The room is a presentation layer, not a new exam engine.**
  - `exam/js/sprechen-driver.js` already sequences phases, turn windows, prompt clips and recording upload.
  - The room subscribes to the same phase events and replaces only the audio-only UI.
  - Uploads to R2, single-examiner rating and the result flow stay untouched.
- **New flag `EXAM_SPRECHEN_ROOM`** (off by default):
  - Client side: if the room fails to load, the existing UI runs.
  - Worker side: the flag shows up in availability. No D1 schema change for Stage 1.
- Stage 1 uses only pre-generated clips.
  - It needs Teil 1 partner avatars matching the existing male partner voice (Enceladus).
  - The PoC had only a CC0 female avatar, which is why the PoC uses the Teil 3 Julia clips.
- The dynamic partner runs in a separate **practice mode** (new `mode`, own quota) through Access `/ai/sprechen-partner` → tutor Worker. No provider call ever lives in the browser.
- Existing tests stay green. The room adds:
  - a headless E2E with a fake microphone (method proven in this PoC);
  - device QA.

## 8. Limits of automated speaking and pronunciation scores

- **No automated score is an official Goethe result.** It can only be shown as "Klarweg-Einschätzung (Simulation)".
- Reasons automated scoring is weak here:
  - STT-based measures mix up learner errors with recognition errors; this gets worse with accents and noise.
  - Pronunciation APIs score the match to a reference text, not Goethe's criteria. Free speech has no reference.
  - Azure Pronunciation Assessment was rejected by the owner; Google STT has no German pronunciation scoring.
  - LLM ratings of B1 criteria are unvalidated. Teil 2 slides and Teil 3 reactions depend on content and interaction, which LLMs judge inconsistently.
- **Before showing any AI estimate**, run a calibration study:
  - at least 100 double-rated attempts (human vs AI);
  - target weighted κ ≥ 0.7 per criterion and mean absolute error ≤ 1 band;
  - otherwise show qualitative feedback only.
- The human rater stays authoritative for every rated attempt.

## 9. Staged prototype and test plan

| Stage | Scope | Cost | Exit test |
|---|---|---|---|
| **0 — done** | Local PoC: one room, one avatar, German lip-sync, mic turn with VAD, listening state, examiner close, 2-D and no-mic fallbacks | $0 | Headless desktop + mobile runs with a fake mic: lip-sync active only while Julia speaks; turn ended by silence 1.4 s after speech; next audio 0.6 s later; 2-D fallback complete |
| **1 — scripted room in M0** (needs §0 approval) | 3–4 own avatars (MPFB), all M0 Sprechen prompts with exact timings, room on top of sprechen-driver behind `EXAM_SPRECHEN_ROOM` | Owner time + avatar work; $0 runtime | Device matrix: Chrome/Edge desktop, Safari macOS, iPhone Safari (2 versions), Android Chrome mid/low-end; load < 5 s on 4G; ≥ 24 fps on mid-range phones; recordings identical to the current path |
| **2 — dynamic partner, practice mode** (needs paid-API approval) | Cascaded pipeline, Teil 1 planning partner, caps + budget ledger | ≈ $0.07–0.22 per session (estimate) | Eval set of 50 learner recordings: B1-register check, task coverage, ≤ 50 % partner share, p95 turn gap ≤ 3 s, zero off-task or unsafe replies |
| **3 — AI feedback** | Qualitative feedback, then calibrated estimates | API cost per session | Calibration study per §8 |
| **4 — M1–M10** | Only after the owner reviews Stages 1–2: content templates for the room | — | — |

Test plan details:

- **Automated:**
  - `poc/sprechen-room/test/align.test.mjs` (word timing).
  - Headless E2E with Chrome `--use-fake-device-for-media-stream --use-file-for-fake-audio-capture`. On macOS this also needs `--disable-features=AudioServiceSandbox,AudioServiceOutOfProcess`, otherwise the file input is silent.
- **Manual:**
  - Real voices: 5–10 learners of different accents.
  - Noise conditions: quiet room, café noise, fan.
  - Headset vs speaker.
  - Reduced motion.
  - Captions off.
- **Metrics to log:**
  - avatar load time
  - fps
  - turn-end detection delay
  - turn gap
  - false turn ends
  - fallback rate

## Sources

| Item | Source | Verified? |
|---|---|---|
| Goethe B1 structure | Durchführungsbestimmungen (Stand 1 Sep 2025), via the repo standard; sha256 match | Verified |
| TalkingHead | github.com/met4citizen/TalkingHead — MIT, v1.8.2 (2026-10-25); `mpfb.glb` CC0 per its README; other sample avatars non-commercial | Verified (repo read) |
| Ready Player Me shutdown | Public services ended 31 Jan 2026 | Secondary sources |
| Gemini Live and Gemini TTS prices | ai.google.dev pricing | Verified 2026-11-09 |
| OpenAI realtime prices | Secondary sources (official page returned 403) | **Unverified** |
| Google Chirp 3 HD | $30 / 1M characters | Re-check before approval |
| HeyGen / Tavus / Simli / Live2D / MetaHuman terms | Vendor pages via search | Re-check before any purchase |
| WebKit echoCancellation bugs | WebKit bugs 326286, 311451 | Secondary |
