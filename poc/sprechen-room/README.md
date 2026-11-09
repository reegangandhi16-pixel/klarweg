# Sprechen virtual room — local proof of concept

**Local only. Not in `.github/pages-allowlist.txt`, never deployed, never merged.**
It makes no paid API calls and uploads nothing. The feasibility report is in
`docs/exam/SPRECHEN-VIRTUAL-ROOM-FEASIBILITY.md`.

## What it shows

The PoC runs one shortened B1 Teil 3 scene, in the official order:

1. The examiner (off camera, beside you) introduces the part.
2. The partner **Julia** presents an excerpt.
3. Julia asks you a question.
4. **You answer through the microphone.** The room detects the end of your turn after 1.4 s of silence, once you have spoken for at least 2 s. The "Ich bin fertig" button and a 60 s limit also end the turn.
5. The examiner closes the part.

Along the way you see:

- **Lip-sync:** German viseme lip-sync on Julia (TalkingHead v1.8.2, MIT; lipsync-de).
- **Natural behaviour:** blinking, eye contact and head movement. While you speak, the avatar listens and its head reacts to your voice level.
- **State labels:** "Julia spricht", "Sie sind dran", "Julia hört zu" and "Prüferin spricht", plus a mic level meter.
- **Fallbacks:**
  - 2-D portrait whose ring follows the audio level. It is used when WebGL is missing, the avatar fails or times out (60 s), or the user chooses it.
  - No microphone: the scene continues and the turn ends by button.
  - Captions off by default (the real exam has none).
- **Your recording:** played back locally only. An optional transcript uses Chrome's speech API, which sends audio to Google; it is off by default.

## Run it

```bash
node poc/sprechen-room/tools/prepare.mjs            # slices M0 audio → media/, fetches the CC0 avatar → vendor/
python3 -m http.server 8787 -d poc/sprechen-room    # http://localhost:8787  (mic needs localhost or https)
```

Test switches:

| Switch | Effect |
|---|---|
| `?mute` | Silent playback |
| `?nomic` | Runs the no-microphone path |
| `?2d` | Uses the fallback portrait |
| `?debug` | Exposes `window.__room` |

Unit tests: `node --test poc/sprechen-room/test/align.test.mjs`.

## Sources and licences

- **Audio:** existing M0 clips (Klarweg original; Google Chirp 3 HD voices Achernar and Callirrhoe), re-cut to AAC. Nothing was newly synthesised.
- **Avatar:** `mpfb.glb` from TalkingHead v1.8.2. The README there states it is licensed **CC0**. It is a sample only; production needs our own avatars.
- **Code:** three.js 0.186.1 (MIT) and @met4citizen/talkinghead 1.8.2 (MIT), both loaded from jsDelivr with pinned versions.

## Word timings

`tools/align.mjs` spreads the known script over the voiced segments that ffmpeg `silencedetect` finds, weighted by syllables. No word may cross a pause. This is good enough for pre-recorded prompts. Production should take timings from TTS or forced alignment.
