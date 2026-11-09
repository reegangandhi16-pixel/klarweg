# Photoreal Sprechen exam room — design reset (2026-11-10)

Status: PROTOTYPE on `proto/exam-room-photoreal` (branched from PR #325 head 4c3fd0f8). Not merged, not deployed,
no paid API. Media in this branch are labelled placeholders (engine test only).

## Decision

The real-time 3D renderer of PR #325 (three.js + TalkingHead + MakeHuman GLB figures) cannot reach "looks like real
people" in a phone browser. Better 3D humans (MetaHuman-class) need far more GPU, memory and download than iPhone
Safari can give. They also still need hand-tuned skin, hair and eyes to get past the uncanny valley. We stop polishing
that renderer.

Stage 1 is a room with **recorded prompts**: every line is known in advance. Video of real-looking people is
therefore the most realistic option, and also the cheapest one to run. The new renderer is a **2.5D cinematic plate
with video patches and a virtual camera**:

- **Plate**: one wide, high-resolution still of the whole room (partner on the left, two examiners at the table in
  front, a second table behind them, the candidate's own table edge in the foreground).
- **Patches**: per person, muted H.264 videos cut from exactly the same camera frame:
  - an idle/listening loop (blinks, small head movement, the assessor writing notes);
  - a lip-synced take for each prompt segment they speak.
  The patches sit over the person's own pixels with feathered edges, so there are no seams. If video is blocked
  (iOS Low Power Mode, decode error), the plate still shows everyone.
- **Camera**: an eased CSS transform of the plate, GPU-composited, with no WebGL. It leans toward whoever speaks, and
  toward the addressee while the candidate speaks (partner in Teil 1/3, examiners in Teil 2). The tested moves take
  1.4–2.2 s, with no shake and no cuts. Phones in portrait get tighter shots. `prefers-reduced-motion` gives one fixed
  framing.
- **Sync**: speech audio stays the exam's own `<audio>`. The speaking take is slaved to its clock (resync when the
  drift is above 120 ms).

### What PR #325 contributes (kept)

The room contract `createRoom → { prepare, attachAudio, phase, recording, destroy }`, `bridge.js`, `config.js`
(`ROOM_PRODUCTION=false`, preview hosts only), `cast.js` (who speaks when per asset), the `main.js` hooks, the classic
fallback, the preview build/check tooling and the tests.

### What is replaced

`stage.js`, `visemes.js`, `analyse.js`, `exam-room/vendor/*` and the GLB avatars.

## Layout and behaviour (authentic B1 oral exam)

- **One partner on the left** for all three Teile, the same person throughout as in the real exam. This also removes
  the M0 inconsistency (Teil 1 male ≠ Teil 3 Julia). It needs one consistent partner per Modelltest in the content;
  coordinate with the M1–M10 terminal, don't edit the content here.
- **Two female examiners**:
  - Prüferin 1 (Leitung) speaks the instructions and questions, and looks into the lens, which gives eye contact
    with the candidate.
  - Prüferin 2 (Beisitz) mostly listens, writes notes and nods. She never speaks.
- **Eye contact** is filmed, not simulated:
  - the examiners look into the lens when they address the candidate;
  - the partner looks toward the candidate's seat when talking to them, and at the examiners otherwise.

## Media sources (owner decision needed)

| Source | Realism | Cost | Notes |
|---|---|---|---|
| A. Filmed actors, locked-off 4K camera in a real room | Highest; real voices too | One shoot day + actors + room (quote needed) | Script all Modelltest lines first, record in one session; model releases; every new test needs new recordings |
| B. Generated photoreal people (paid image/video + lip-sync services) | High, varies per clip | Per-second credits (quote needed); NOT activated | Consistency is controlled by cutting every clip from the same start frame; licence terms must allow commercial use; disclose as simulated |
| C. Free local open-weight models (image, image-to-video, lip-sync) on the Mac | Medium, uncertain | $0, slow | Installing and running third-party model code needs owner approval (safety conditions); every licence must be checked; good for a $0 pilot of one person |

Recommendation: pilot one examiner with **A or B** (a 10–20 s idle loop plus one prompt). Judge realism on an iPhone
before producing a whole test.

## Media spec (drop-in, same names as the placeholders)

- `media/plate.png` (or `.jpg`/`.avif`): 3840×2160 master, served at 1920×1080 (about 300–500 KB).
- `media/<person>-idle.mp4`: 8–12 s seamless loop, H.264 Main, 30 fps, the patch crop only. For listening variety,
  use 2–3 variants.
- `clips["<asset_id>#<segment>"]`: lip-synced take of exactly that segment. It starts and ends on the idle loop's first
  frame, so switching to and from the loop is invisible.
- Budget per Modelltest: about 6–10 speaking takes plus 3 loops, roughly 8–20 MB at 1.0–1.5 Mbps on face-sized
  patches. That is similar to the 14 MB of GLBs today.

## Limitations

- People can only say recorded lines. The room cannot react to what the candidate actually says. That is true of
  Stage 1 today; Stage 2 (real-time AI partner) would need a paid streaming-avatar service and is not part of this.
- The viewpoint is fixed: camera moves are reframes of one frame, with no free look and no true parallax. Small moves
  hide this.
- Every new Modelltest needs new takes for the partner and the examiner.
- Loops must not visibly repeat during the 3-minute Teil 2. Mitigation: several variants played in random order, and
  long natural loops.

## Performance risks

- Concurrent video decoding on low-end Android: three patches at once. Mitigation: small patches, low bitrate, and
  pausing the idle loops of off-screen people.
- iOS Low Power Mode blocks video autoplay. The still plate remains, and the start tap unlocks playback where
  allowed.
- First load: plate plus loops of about 2–4 MB before the room appears; the takes stream just in time
  (`prepare()` prefetch).

## Next steps

1. Owner: choose the media source (A, B or C) and the casting (age, look, clothing for 2 examiners + 1 partner).
2. Pilot: one plate plus one examiner's idle loop and one lip-synced take. Check on iPhone Safari and desktop
   (non-production preview, same isolation as the PR #325 preview).
3. If the pilot is approved: full cast for the demo test, then M0. Coordinate a single partner per test with the
   content branch.
4. Then: idle variants, the assessor's note-taking loop, a polished portrait framing, real-device performance pass,
   and an accessibility review (captions of the prompts already exist in the classic view).
