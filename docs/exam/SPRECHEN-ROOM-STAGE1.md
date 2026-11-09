# Sprechen exam room — Stage 1 (simulated exam room, recorded prompts)

Status: **review branch, not merged, not deployed.** Off on klarweg.in (`ROOM_PRODUCTION = false`).
Owner decision 2026-11-09: narrowly scoped exception to the CLAUDE.md no-avatar rule, **for the B1 Sprechen
virtual examination room only**. It does not permit mascots or avatars anywhere else on Klarweg.

## What Stage 1 is, and what it is not

Stage 1 is a **simulated oral-examination room with recorded prompts**. The examiner and the partner are 3-D
figures who speak the *same pre-recorded Sprechen audio* the classic Sprechen view already plays, with lip
movement derived from that audio. They do not listen, understand or answer; nothing the candidate says changes
what they say. The room states this on screen:

> Simulierter Prüfungsraum mit aufgezeichneten Gesprächsimpulsen. Keine KI, keine offizielle Goethe-Prüfung.

It is **not** a conversational AI partner. No AI, speech recognition, or paid API is used or called. Stage 2
(conversational partner) stays on hold.

## Guarantees (and where they are tested)

| Guarantee | How | Test |
|---|---|---|
| Timing, playback, recording, uploads, human rating, scoring and M0 unchanged | The room is a presentation layer behind four observe-only hooks (`prepare`, `attachAudio`, `phase`, `recording`) via `exam/js/room/bridge.js`. `sprechen-driver.js`, `speaking-audio.js`, `recorder.js`, `sprechen.js` are untouched; the classic UI handlers run first and unchanged (`withRoom` in `main.js`). | `room.test.mjs` MAIN, `level.test.mjs` (unchanged lines), `room-e2e.mjs` (chunks keep arriving), existing `browser-e2e.mjs` |
| Reliable fallback to the classic Sprechen view | The classic view stays in the page throughout. Any failure (no WebGL, Save-Data, missing cast, avatar download error, timeout 30 s desktop / 45 s mobile, any runtime exception) removes the room and the classic view carries on. "Klassische Ansicht" is always one tap away and is remembered per device. | `room-e2e.mjs` fallback (avatars blocked → room gone, recording continues), BRIDGE unit test |
| Correct turn-taking | Speaker per moment = the playing clip + a text-free cast (`exam-room/casts/*.json`) with exact segment boundaries computed from the TTS segments (`scripts/exam-room-cast.mjs`). Scene per phase: Teil 1 partner opposite, Teil 2 examiner, Teil 3 presenter opposite; the examiner is always present. During the candidate's turn the figures listen (no mouth movement). | CAST unit tests, `room-e2e.mjs` (partner speaks only during his clip; examiner → Julia switch at the cast boundary) |
| No answer data or prompt text in public files | Casts hold only asset ids, ms boundaries and person ids; lip-sync is computed in the browser from the audio itself. | CAST "text-free" test, `check-public-boundary.mjs` |
| CSP unchanged in spirit | All libraries self-hosted under `exam-room/vendor/` (pinned npm tarballs, sha512-verified, sha256-listed). No eval, no WebAssembly, no import map; only `img-src blob:` added (GLB textures). | VENDOR + CSP tests, `scripts/exam-room-vendor.mjs --check` |
| Off in production until approved | `ROOM_PRODUCTION = false`; `?room=on` works only on localhost and `*.klarweg-site.pages.dev`. | ROOM gate test |

## Architecture

- `exam/js/room/config.js` — gate (production flag, preview hosts, stored view).
- `exam/js/room/bridge.js` — queues hook calls until the room is ready, never throws into the caller, stays off after a failure.
- `exam/js/room/room.js` — loads casts, builds the UI, drives speaker/visemes/gaze/status each frame from `audio.currentTime`.
- `exam/js/room/stage.js` — one WebGL renderer and one scene for all figures (mobile memory); procedural bright room (no texture downloads); framing fitted to the figures' real eye positions; 30 fps desktop / 24 fps mobile cap; pauses when off-screen, collapsed or the tab is hidden; respects reduced motion.
- `exam/js/room/analyse.js` — per clip, offline: decode → HeadAudio viseme classifier (MIT, in-browser) → viseme timeline; energy (jaw-only) fallback.
- `exam/js/room/visemes.js`, `cast.js` — pure, unit-tested.
- Libraries: three.js 0.186.1, TalkingHead 1.8.2, HeadAudio 1.0.0 (all MIT), 2.9 MB uncompressed, loaded only when the room is on.

## Figures

Three figures, built from CC0 MakeHuman assets with Blender + MPFB 2.0.18 in an **isolated Blender profile**
(`BLENDER_USER_RESOURCES` under a work directory outside the repo; the global Blender install, its
preferences and extensions are not touched). Licences: `exam-room/avatars/LICENSES.md`.

| File | Person | Look | Size (gzip) |
|---|---|---|---|
| `examiner-f.glb` | Prüferin | mature woman, grey hair, dark business suit | 4.62 MB (3.17 MB) |
| `partner-m.glb` | Gesprächspartner | young man, short hair, dark suit | 4.98 MB (3.62 MB) |
| `partner-f.glb` | Julia | young woman, ponytail, camel blazer | 4.91 MB (3.60 MB) |

Each figure: root `Armature` (TalkingHead rig), 15 Oculus visemes + 52 ARKit face units as morph targets
(eye looks, blinks, brows, squints), no animation clips, `KHR_mesh_quantization`, no Draco/meshopt/KTX
(no decoder, no WebAssembly). Rebuild:

```
KX_FIG_WORK=… KX_FIG_ASSETS=… KX_FIG_RIG=… KX_FIG_PACKS=… scripts/exam-room-figures.sh
node scripts/exam-room-avatar.mjs <raw.glb> exam-room/avatars/<name>.glb --max 1024 --jpeg 82 \
  --size normal=512,body=2048,eyebrow=256,eyelash=256,teeth=512,tongue=256,high-poly=512,alpha=1024
```

Specs (phenotype, skin, hair, clothes, recolouring) are in `exam-room/figures/*.json`.

## Mobile weight

Nothing is downloaded unless the room is on and the device has WebGL and no Save-Data. A session loads the
libraries (2.9 MB uncompressed) and only the figures of its scene (examiner + one partner ≈ 6.8 MB gzip).
One WebGL renderer for all figures; MSAA + alpha-to-coverage for hair/brows/lashes; 24 fps cap on mobile.

## Validation (headless Chrome, `exam-worker/test/room-e2e.mjs`, M0)

| Check | Result |
|---|---|
| German lip-sync | partner mouth open peak ≈ 0.64–0.68 while his clip plays; examiner 0 at the same time |
| Blinking | 1–3 blinks per 7 s per figure |
| Eye movement / eye contact | gaze range 0.05–0.36 (`eyeLook*`); figures look at the speaker / the candidate |
| Facial expression | brow and cheek activity; squint peaks ≤ 0.15 (no grimace) |
| Speaker transitions | Teil 1 partner → "Sie sind dran" (partner listens, no mouth movement); Teil 3 examiner → Julia at the cast boundary |
| Framing | camera at eye level (y ≈ 1.19 m); figures hidden until seated (no visible pop) |
| Recording unchanged | chunks keep arriving throughout |
| Mobile 390×844 @2x | same checks pass (emulation) |
| Fallback | avatars blocked → room removed, classic view records |

Review images (room only, no task text): `exam-room/review/` (not published; not in the Pages allowlist).

## Open before production (owner review)

1. **Look.** MakeHuman faces are clean but stylised, not photoreal. The examiner's hair partly sweeps toward
   one eye (both eyes visible). Julia's suit includes shirt and tie. The listening pose pulls the arms back slightly.
2. **M0 partner inconsistency.** M0's Teil 1 partner (male voice) differs from the Teil 3 partner (Julia).
   In a real pair exam the same partner continues. The room shows the M0 audio as it is; M1–M10 should use
   one partner throughout.
3. **HeadAudio model is English-trained** (`model-en-mixed`). German mouth shapes look right in review; the
   energy fallback is used if the classifier fails.
4. **Avatars are not in the Pages allowlist.** Add `exam-room/avatars/*.glb` only together with `ROOM_PRODUCTION`.
5. Real-device testing (below) needs an HTTPS preview (microphone), i.e. a `*.klarweg-site.pages.dev`
   preview deploy — only with owner approval.

## Test matrix

| Platform | Status |
|---|---|
| Desktop Chrome (headless, SwiftShader WebGL), 1280×900 | Tested: `exam-worker/test/room-e2e.mjs` |
| Mobile viewport 390×844 @2x (Chrome emulation) | Tested: `room-e2e.mjs mobile` (emulation, not a real phone) |
| Fallback (avatars blocked) and form without cast | Tested |
| Real iPhone Safari | **Not tested** — no device available to the developer |
| Real Android Chrome | **Not tested** — no device available to the developer |
| Desktop Safari, Firefox | **Not tested** |

Run: `node exam-worker/test/room-e2e.mjs` (needs the private M0 content; otherwise only the no-cast scenario).
Preview locally: see the PR description. GIF capture in headless Chrome runs at 4–10 fps; motion in a real browser is smoother.
