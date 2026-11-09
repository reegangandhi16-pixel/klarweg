# Interactive B1 Sprechen room — feasibility and architecture assessment (2026-11-10)

Status: research only. Nothing has been bought, installed, deployed or merged. No account was created and no third-party
terms were accepted.

The looping-video prototype (`proto/exam-room-photoreal`, preview room-264936c4e2289143) and the 3D prototype
(PR #325) are kept as references and are no longer extended.

Prices were read on 2026-11-10 from official pages where possible (marked ✔). Third-party figures are marked ~ and
must be re-checked before any purchase.

## 1. The honest answer first

| Requirement | Feasible today? |
|---|---|
| The partner understands the student's German and answers on meaning (e.g. "Ausflug am Samstag" → "Das klingt gut. Wohin könnten wir fahren?") | **Yes, cheaply.** Speech recognition + an LLM + German TTS do this well, at about 1 s response time. The weak point is speech recognition of *learner* German (accent, wrong endings); the student must be heard correctly, not corrected |
| A photoreal person who talks live with accurate German lip-sync and does not visibly loop | **Yes, for one person in a medium close-up** (Tavus, HeyGen LiveAvatar, Anam). The face is generated live from the audio, so mouth and expressions do not repeat. Tells that remain: little hand and body movement, about 1 s pauses before answers, occasional soft teeth. Listening behaviour comes from a short silent training clip and **must be tested for repetition** |
| Three people together in one live shot, seen from a seat, looking at each other naturally | **No.** Every live-avatar API renders one person, framed as in their own training video, as one separate stream. Three streams side by side look like a video call, not a room. No provider offers a shared live scene |
| Camera attention moving between speaker and listener | **Yes, the way films do it:** shot changes between live close-ups and long recorded wide shots, not one live wide shot |
| Credible on an iPhone | **Likely.** All of them stream over WebRTC (Daily or LiveKit), which iOS Safari supports. Needs a device test: heat and battery over 15 min, echo with the loudspeaker (headphones recommended), Low Power Mode |
| Affordable | **Roughly $1.20–5.25 per 15-minute session**, depending on the provider and how many minutes are actually live (§4). Not free, but realistic for a paid exam-training product. Far above the current Klarweg AI budget, so it needs its own pricing |

**Conclusion:** the experience you describe can be built convincingly as **"one live person at a time, inside a filmed
room"**. A single live shot of all three people reacting to each other cannot be built at an affordable cost today.

## 2. Approaches compared

The ratings below assume a 15-minute full Sprechen session. Realism ratings are from vendor demos and reviews and must be
confirmed in the proof of concept (§6).

### A. Real-time conversational video avatar, all-in-one (Tavus CVI, HeyGen LiveAvatar FULL, Anam persona)

**Realism, repetition and conversation**
- **Visual realism:** high in a frontal or three-quarter medium close-up. Tavus Phoenix-4 (1080p) is widely seen as
  the most lifelike; HeyGen and Anam are close.
- **Repetition:** the face, mouth and expressions are generated live, so they do not loop. Body and background come
  from the training clip, and idle behaviour can repeat. Test it.
- **German:** Tavus lists 42 spoken languages including German, with a multilingual mode ✔. Anam lists 70+ ✔.
  HeyGen supports German via ElevenLabs voices (~).
- **Lip-sync:** real time, generated from the TTS audio, so it is accurate by construction.
- **Latency:** Tavus claims under 600 ms for the pipeline (vendor claim). Expect about 0.8–1.5 s utterance-to-answer
  in practice, plus 2–5 s to start a session.

**Framing, device and terms**
- **Camera:** fixed to the training clip's framing. A three-quarter partner is possible if the training clip is filmed
  that way and he looks into the lens (the student's eyes).
- **iPhone:** WebRTC via Daily (Tavus) or LiveKit (HeyGen), both supported on iOS Safari. Device test needed.
- **Licensing and privacy:**
  - The student's voice is streamed to the provider, which is new compared with today's "recordings stay in the
    browser".
  - Tavus says it does not train on customer data, but zero data retention is Enterprise only ✔.
  - Anam's commercial use starts at Starter ✔.
  - Custom faces of real people need recorded consent (Tavus ✔). AI-generated training videos need no consent
    (Tavus ✔).
  - A DPA is needed for EU and Indian students. These are US processors.

**Three people and production effort**
- **Three people:** no, only separate streams.
- **Without a custom shoot:** stock faces in the vendor's own settings, which are not our exam room.

### B. Streaming face only, with our own speech pipeline (Simli, Anam audio passthrough, HeyGen LITE)

- **Visual realism:** Simli is lower (head-only, trades realism for price). Anam passthrough and HeyGen LITE match their
  full versions.
- **Repetition:** same as A.
- **German:** the face follows any audio. Language quality is our choice of speech recognition, LLM and TTS (all good in
  German).
- **Lip-sync:** real time.
- **Latency:** our pipeline. About 1 s is achievable with a speech-to-speech model:
  - Gemini Live 3.x: $0.005/min audio in, $0.018/min audio out ✔;
  - OpenAI gpt-realtime-1.5: $32 per 1M audio tokens in, $64 per 1M out ✔.
- **Camera:** same as A.
- **iPhone:** our own WebRTC (LiveKit or Pipecat). More engineering.
- **Licensing and privacy:** the student's voice goes to the face provider and the model provider. Paid Gemini and
  OpenAI API tiers don't train on the data ✔.
- **Three people:** no.
- **Effort:** the most control (exam director, B1 limits, scoring hooks), and the most engineering: a realtime server.

### C. Hybrid: filmed room plus one live person at a time (recommended)

- **Visual realism:** the highest achievable.
  - Wide and listening shots are *real footage*: actors, or long generated takes, several minutes each, so nothing
    visibly repeats.
  - Whoever must react to the student is a live avatar trained on footage filmed in the same room, from the
    student's seat.
- **Repetition:** wide plates of 3–5 minutes, plus live faces.
- **German:** as A or B.
- **Lip-sync:** live for the interactive person; examiner standard lines can be pre-rendered once by the same avatar
  engine.
- **Latency:** as A or B. Cuts hide the session start.
- **Camera:** shot changes (partner close-up from the left, examiners frontal, wide). This is natural film grammar, but
  not a free-moving camera.
- **iPhone:** as A. Only one live stream at a time, which is light on the phone.
- **Licensing and privacy:** as A or B, plus actor releases.
- **Three people:** **yes in wide shots** (recorded) and in close-ups (live). Never all three live in one shot.
- **Without custom production:** partly. Stock avatars plus generated wide plates work, but they won't share one room
  convincingly. A small shoot is what makes it feel real.

### D. Video-based digital human with live speech, own render (MetaHuman, NVIDIA ACE-class, pixel streaming)

- **Visual realism:** high in game-engine terms, but still "CG human" at close range.
- **Repetition:** none (procedural).
- **German:** yes (own pipeline).
- **Lip-sync:** real time (Audio2Face-class).
- **Latency:** about 1–1.5 s.
- **Camera:** **free camera with all three people in one 3D room.** This is the only option that can do that.
- **iPhone:** only via cloud GPU pixel streaming (WebRTC): about $0.5–2 per GPU-hour plus heavy engineering ~.
- **Licensing and privacy:** Epic and NVIDIA terms. We would run it ourselves.
- **Three people:** yes.
- **Without custom production:** no: months of 3D, animation and infrastructure work. The uncanny-valley risk is the
  same one that sank PR #325's direction.

### E. Real actors only, with many recorded takes

- **Visual realism:** the best.
- **Repetition:** none if the takes are long.
- **German:** native German speakers.
- **Lip-sync:** perfect (it is real).
- **Latency:** none, but **no understanding**: answers can only come from a branching library of pre-filmed lines.
  That fails the main requirement.
- **Camera:** any, decided at the shoot.
- **iPhone:** plain video.
- **Licensing and privacy:** model releases.
- **Three people:** yes.
- **Without custom production:** no. Every Modelltest needs new footage.

**Verdict:** C is the only approach that satisfies *real understanding*, *real-looking people* and *a believable room*
at the same time. A (Tavus or HeyGen) is the fastest way to build C's live part. B is the cost and control upgrade once
the product is proven. D is too expensive and too risky. E is only useful as the filmed part of C.

## 3. Recommended architecture (C)

```
iPhone Safari ── WebRTC ── live avatar provider (one stream: the person who must react now)
      │                           ▲ text/audio of each turn
      │ HTTPS/WebSocket           │
      └──── Klarweg exam director (server; extends the klarweg-access → tutor pattern)
              • official B1 Sprechen structure: Teil 1 Gemeinsam etwas planen, Teil 2 Thema präsentieren,
                Teil 3 Fragen/Feedback zur Präsentation
              • partner persona: B1-level, cooperative but with own opinions, short turns, never corrects,
                stays on the task card, answers from the student's MEANING (LLM)
              • examiner persona: instructions + Teil 3 questions generated from the student's presentation
              • turn-taking, exam timing, "unofficial AI practice" labelling, transcript for feedback
      └──── filmed room media (CDN): establishing wide, examiners-listening wide (3–5 min takes), partner listening
```

**Shot plan**
- Teil 1: partner live (three-quarter from the left, looking at the student), with cutaways to the examiners'
  recorded listening wide.
- Teil 2: the examiners' recorded listening wide while the student presents. The lead examiner goes live only for the
  closing question.
- Teil 3: the examiner live for questions; the partner is recorded, listening.

**Rules that keep the cost down**
- **Live only when someone must react:** about 6–8 billable minutes in a 15-minute session.
- **Standard lines are pre-rendered once:** greetings and instructions use the same avatar.

## 4. Cost per session (USD, official prices ✔ unless marked ~)

Two scenarios per provider: live for the whole 15 minutes (simple) and live for about 7 minutes (shot plan in §3).

### Tavus CVI ✔
Includes speech recognition, LLM and TTS by default.

| Plan | Price | Included minutes | Extra minute | Concurrency | Max conversation | Custom faces |
|---|---|---|---|---|---|---|
| Builder | $59/mo | 175 | $0.35 | 3 | 15 min | 3 |
| Growth | $397/mo | 1,300 | $0.31 | 10 | 60 min | 7 |
| Business | $975/mo | 4,000 | $0.26 | 15 | 60 min | 15 |

- Per session: $3.90–5.25 at 15 min live; **$1.80–2.45 at 7 min live**.
- 100 sessions/month: 15 min → **≈ $460** (Growth); 7 min → ≈ $350 (Builder: $59 + 525 × $0.35).
- 1,000 sessions/month: 15 min → **≈ $3,835** (Business: $975 + 11,000 × $0.26); 7 min → ≈ $1,795 (Business).

### HeyGen LiveAvatar FULL ✔
2 credits/min; $0.095 per extra credit on Essential, $0.09 on Business. Includes ASR, LLM and TTS.

| Plan | Price | Credits included |
|---|---|---|
| Essential | $99/mo | 1,110 |
| Business | $475/mo | 6,010 |

- Per session: $2.70–2.85 at 15 min live; **$1.26–1.33 at 7 min live**.
- 100 sessions/month: 15 min → **≈ $280** (Essential); 7 min → **≈ $99–180** (Essential).
- 1,000 sessions/month: 15 min → **≈ $2,635** (Business); 7 min → **≈ $1,195** (Business).

### Anam ✔
Commercial use from Starter. Explorer's 10-min limit means Growth is needed for 15-min sessions. It is unclear whether
the LLM is billed separately: verify.

| Plan | Price | Included minutes | Extra minute | Max session |
|---|---|---|---|---|
| Growth | $299/mo | 2,000 | $0.12 | 2 h |
| Professional | $999/mo | 8,000 | $0.11 | 2 h |

- Per session: $1.65–2.40 at 15 min live; $0.80–1.10 at 7 min live.
- 100 sessions/month: **≈ $299** (Growth, both scenarios).
- 1,000 sessions/month: 15 min → **≈ $1,770** (Professional); 7 min → ≈ $999–1,300.

### Simli face plus our own Gemini Live pipeline ✔
- Face: $0.009–0.01/min. Speech pipeline: about $0.25–0.60 per session, because the conversation context is re-billed
  every turn (~ estimate).
- Server cost is extra: LiveKit Cloud or our own server.
- Per session: **≈ $0.40–0.75**.
- 100 sessions/month: **≈ $80–125**, plus hosting.
- 1,000 sessions/month: **≈ $650–1,000**, plus hosting.

### Filmed room (one-off, ~ rough estimate; quotes needed)
- 3 German-speaking actors (B1 exam look), one room, one day, a locked 4K camera at seated eye height, plus a
  three-quarter angle for the partner.
- Footage needed: 3–5 min listening takes, the replica training clips (Tavus: 30 s talking + 30 s silence ✔), and
  standard lines.
- Cost: actors with buy-out and releases about €1,000–3,000. Room, crew and kit about €500–2,000. **Total about
  €1,500–5,000.**
- A cheaper fallback: generated faces as replica training material (Tavus needs no consent for AI-generated training
  video ✔). Quality is unproven.

### Notes
- Monthly plan fees dominate at 100 sessions and per-minute rates at 1,000.
- A 5-minute single-Teil practice costs about one third of a full session.
- Tavus bills in 6-second steps with a 30-second minimum (~).

## 5. Risks and limits

**Experience**
1. **Recognition of learner German.** Accent and grammar errors can derail the partner's answer. Mitigations:
   - a German-tuned ASR with a hint vocabulary from the task card;
   - the partner asks back naturally ("Wie meinst du das?") instead of guessing.
   Test this with real learners first.
2. **Latency.** About 1 s pauses are acceptable between candidates in an exam, but noticeable.
3. **Idle repetition** of avatars trained on a short silent clip. This is exactly what the proof of concept must check.

**Product and legal**
4. **Privacy.** Live interaction streams the student's voice to US processors. This needs:
   - consent text;
   - a privacy-policy update;
   - DPAs;
   - provider data-retention settings.
   It replaces today's "recordings stay on your device" promise for this mode.
5. **Exam honesty.** Label it as "Inoffizielle KI-Übung, keine Goethe-Prüfung". The AI is not an examiner, and any
   score is an estimate.
6. **Cost control.**
   - It needs paid plans, server-side session limits, and a kill switch, like `AI_ENABLED` today.
   - The current Klarweg AI budget ($5/yr, Phase 1 proposal) cannot cover this. It needs a paid tier.
7. **Vendor lock-in and price changes.** Tavus changed its plans twice in mid-2026 (~).
8. **Brand-rule conflict (owner decision).** CLAUDE.md, derived from the OS and visual-system specs, says "no
   mascots/avatars" and "Klarweg AI … never avatar". Realistic AI humans in the exam simulation conflict with that
   wording. A possible reading: the rule targets cartoon mascots and a personified tutor, not a simulated exam
   situation. Even then, the spec text should be amended explicitly before anything ships:
   - the exam room is a simulation of an exam;
   - the AI never presents itself as "Klarweg AI" in a human face.
   Nothing has been changed in the specs.

## 6. Proof of concept: one live partner conversation (Teil 1 "Gemeinsam etwas planen")

**Goal:** answer the two decisive questions with the least money. Does a live avatar partner feel like a real person
across about 4 minutes of German conversation? Does it respond to meaning (the "Ausflug am Samstag" test)?

**Step 1 ($0, free tiers; owner creates the accounts and accepts the terms)**
- Tavus Free: 20 min/month, 5-minute conversations, stock faces, 1 session at a time ✔.
- HeyGen LiveAvatar Free: 10 credits = 5 min FULL ✔.
- Optional: Anam Free, 30 min of 3-minute sessions (evaluation only, not for commercial use) ✔.
- Claude prepares, without any account:
  - **Partner persona.** System prompt in German, B1 level: one task card (e.g. "Abschiedsfest für eine Kollegin
    planen" with four points: wann, wo, Essen, Geschenk), cooperative with own suggestions, short turns, never
    corrects the student, asks back when it doesn't understand.
  - **Test protocol**, read by the owner on an iPhone:
    - 6 fixed student turns, including the Ausflug example, one with a typical grammar error and one off-topic turn;
    - then 2 minutes of free conversation.
  - **Score sheet:**
    - recognition: was the student understood (per turn);
    - meaning-based answer (yes or no);
    - latency (stopwatch);
    - mouth sync;
    - repetition while listening (watch 60 s silent);
    - B1 language level;
    - iPhone heat, echo and stability.
- The vendor's hosted conversation link runs directly in iPhone Safari. No code, no deploy.

**Step 2 (only if step 1 convinces; ≈ $59–99 plus a small shoot; separate approval)**
- One month of Tavus Builder or HeyGen Essential.
- A custom partner replica filmed in a real room from the student's left (three-quarter view, looking at the lens).
- A non-production page that combines the live partner with a recorded examiner wide.

Step 2 is where "sitting in the exam room" is tested for real.

**What the owner must approve before step 1:** creating free accounts with Tavus and HeyGen (and optionally Anam),
after reading their terms and data-use conditions. No payment details are needed for the free plans as listed;
re-check at sign-up.

## Sources

Official pages, read 2026-11-10:
- tavus.io/pricing
- docs.tavus.io: language support, replica training, consent statement
- docs.liveavatar.com/docs/faq/credits
- simli.com/pricing
- anam.ai/pricing
- anam.ai/docs: custom LLMs, audio passthrough
- aistudio.google.com/docs/pricing (Gemini Live)
- developers.openai.com: gpt-realtime-1.5

Third-party (~): usagepricing.com (Tavus plan history), comparison blogs (Simli realism, HeyGen and Anam features).
