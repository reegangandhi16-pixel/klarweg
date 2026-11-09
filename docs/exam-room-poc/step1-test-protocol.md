# Step 1 POC: test protocol (owner, iPhone, $0)

Goal: decide with real experience whether a live AI partner feels like a real person in German. If it does, step 2
(filmed room + custom partner) is worth paying for.

## Before you start

**Accounts**
- Create the free accounts yourself, after reading the terms and data-use conditions:
  - Tavus (developer portal, Free plan: 20 min/month, 5-minute conversations, stock faces);
  - HeyGen LiveAvatar (Free: 10 credits ≈ 5 min in FULL mode).
- Don't enter payment details. If a card is required, stop and tell me.
- Set up the persona exactly as in `step1-partner-persona.md`.

**Privacy**
- Only your own voice: no students, no real names, no exam content.
- Your speech is processed by the provider; that is what is being tested.

**Device and room**
- iPhone with Safari, Wi-Fi, Low Power Mode **off**, battery ≥ 50 %.
- Quiet room.
- Run the session once **with headphones**. If minutes allow, try 1 minute on the loudspeaker to check echo.

**Recording (for my analysis)**
- Start an iPhone screen recording with the **microphone on**: Control Centre → long-press Screen Recording →
  Microphone on.
- Afterwards, AirDrop the files to the Mac into `~/klarweg-work/klarweg-room-poc/recordings/`.
- From them I measure locally:
  - response latency from the audio;
  - mouth movement against the voice;
  - repetition in the listening frames.
- Nothing leaves the Mac.

**Paper**
- Print or open the task card from the persona file. You play the other candidate.

## Minute budget

| Session | Provider | Content | Approx. time |
|---|---|---|---|
| A | Tavus | Scripted turns 1–7 | 4–5 min |
| B | Tavus | Listening test + free conversation | 4–5 min |
| C | HeyGen | Scripted turns 1–7 (same as A) | 4–5 min (all free credits) |
| reserve | Tavus | Repeat whatever failed for technical reasons | ≤ 5 min |

## Session A / C: scripted turns

Open the provider's conversation link in Safari and let Lukas greet you. Then say these lines **in this order**,
naturally, at your normal speed. Wait for his full answer each time.

| # | You say | A good answer… | Tests |
|---|---|---|---|
| 1 | *"Ich schlage vor, dass wir am Samstag einen Ausflug machen."* | agrees and asks *where* or *when* (e.g. "Das klingt gut. Wohin könnten wir fahren?") | meaning, not a script |
| 2 | *"Vielleicht nach Heidelberg? Das ist nicht so weit."* | picks up **Heidelberg** specifically (Altstadt, Schloss, distance) and moves on | specific understanding |
| 3 | *"Ich denke, wir fahren mit die Zug, weil ist billiger."* (deliberate errors) | understands train + cheaper and replies normally, **no correction** (a natural "mit dem Zug" in his answer is fine) | learner grammar |
| 4 | *"Ich möchte am liebsten um sechs Uhr morgens losfahren."* | politely **disagrees with a reason** and suggests another time | own opinion and negotiation |
| 5 | *"Übrigens, hast du gestern das Fußballspiel gesehen?"* | short friendly reaction, then **back to the task** | staying on task |
| 6 | *"Und dann … äh … das Essen … vielleicht …"* (trail off) | helps: *"Meinst du, wir nehmen Essen mit oder gehen ins Restaurant?"* | unclear input |
| 7 | *"Okay, ich glaube, wir haben alles. Wollen wir zusammenfassen?"* | a short, correct **summary** of what you actually agreed | memory of the conversation |

## Session B: listening and free conversation (Tavus)

1. **Listening test (≈ 60 s).** Tell Lukas a longer story in German without stopping, e.g. your last trip: where,
   with whom, what you did. Pause briefly between sentences but keep going for about a minute. **Watch his face the
   whole time:**
   - does he look alive (blinks, small nods, eye movement);
   - does any movement visibly repeat?
2. **Free conversation (2–3 min).** Plan the trip again, but differently: another destination, a bicycle, a rainy-day
   alternative. Interrupt him once mid-sentence and see whether he stops and lets you speak.

## Score sheet

Fill in `step1-score-sheet.csv`, or simply write the values in a note; one row per turn and one per session.

Per turn:
- **understood:** yes / partly / no;
- **meaning-based answer:** yes / no;
- **B1 level:** yes / too hard / too simple;
- **too long:** yes / no;
- **latency** in seconds, from your last word to his first word (estimate; I'll measure it from the recording);
- **lips** 1–5 (5 = perfect);
- **naturalness** 1–5.

Per session:
- listening: alive yes/no, repetition seen yes/no (describe it);
- visual glitches (teeth, eyes, hands, jumps);
- voice naturalness 1–5;
- German pronunciation 1–5;
- interruption handled yes/no;
- iPhone: heat (none, warm, hot), battery used in %, echo yes/no, dropouts yes/no;
- **overall "felt like a real person" 1–10**;
- one sentence in your own words.

## Decision rule for step 2

Go ahead with step 2 (filmed room + custom partner, separate approval, about $59–99 + shoot) only if **at least one
provider** reaches all of the following:
- ≥ 6 of 7 scripted turns understood (yes or partly) and ≥ 5 of 7 meaning-based answers;
- median latency ≤ 1.5 s;
- no visibly repeating movement in the 60 s listening test;
- lips ≥ 4/5 on average, and no glitch that breaks the illusion;
- stable on the iPhone for the whole session;
- overall ≥ 7/10.

If no provider reaches this, the live-avatar route is not ready for the experience you want. We stop there; nothing has
been spent.

## After the test

- Send me the recordings and the score sheet. I'll produce the comparison:
  - measured latency per turn;
  - an analysis of the mouth and voice;
  - a listening-repetition check;
  - your scores;
  - a go/no-go recommendation.
- Delete nothing at the providers until we have decided. Afterwards you can delete the conversations and personas
  in their dashboards.
