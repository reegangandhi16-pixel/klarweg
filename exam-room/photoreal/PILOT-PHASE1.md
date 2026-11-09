# Photoreal room: Phase 1 pilot report (2026-11-10)

**Approved cap:** $10 ($5.60 Phase 1 + up to $1.60 partner correction approved = $7.20 usable).
**Spent:** $7.20, entered in the ledger, plus $0.96 for one owner-approved Veo audio lip-sync test = **$8.16**.
**Approved budget left:** $0. The remaining $2.80 under the $10 cap is not
approved and will not be used without a new decision ($1.84 under the cap after the audio test).

Generation stopped after 9 Veo 3.1 Fast requests (7 in Phase 1, 2 for the partner correction). Spend was checked before every batch; the ledger is
`pilot-manifest.json`. The ledger counts the two failed Veo requests as $0.80 each to be safe; the Gemini attempt
was refused before generating, so it is $0. Google's billing report will show the exact figure after its usual delay.

Media are stored outside the public repo in `~/klarweg-work/klarweg-photoreal-pilot/`:
- `deliverables/`: `room-still-v1a.(png|jpg)`, `room-loop-v1a-(1080p|720p).mp4`, `lead-examiner-listening-crop.mp4`,
  `comparison-grid.jpg`;
- the raw takes `room-*.mp4`;
- evaluation sheets in `eval/`;
- `manifest.json`.

## Blocker found

Every Gemini model returns 404 "project does not have access" in klarweg-512108. This includes the image models and
plain text models such as gemini-2.5-flash. Veo works in the same project. No setting was changed.

With the owner's approval, the room was made with Veo text-to-video instead of a Gemini still.

## Takes ($0.80 each, 8 s, 1080p, no audio)

Camera stability is the PSNR of the static wall, first frame against later frames. Above about 35 dB the camera is
locked.

| Take | Camera | Result |
|---|---|---|
| room-v1a | locked (37–41 dB) | **Selected.** Both examiners exactly as briefed: lead about 45 in a navy blazer with eye contact; second about 55 with glasses, a charcoal jacket, writing and glancing up. Background table, folders, clock, window. Partner seen from behind, with his profile appearing only briefly |
| room-v2a | moves (15–16 dB) | Best partner (profile visible) and the nicest room, but a slow push-in. Second examiner in a sweater with no glasses |
| room-v2b | no video | Safety-filtered |
| room-i2v-a (from v2a frame) | moves (15–16 dB) | The second examiner speaks: rejected |
| room-v3a | locked (52 dB) | Examiners perfect, but an extra person appears on the right: rejected |
| room-v4a | moves (22 dB) | Second examiner far too young: rejected |
| room-v4b | locked (44–47 dB) | A camera on a tripod appears in the shot, three women and no partner: rejected |
| room-v5-ref (refs: v1a examiners) | drifts up to 28 px | Identities kept, but two cuts and an extra man: rejected |
| room-v6-ref (refs + negative prompt) | 0 px to 4 s, ≈10 px at 8 s | **Partner candidate.** One continuous take, exactly three people, examiners match v1a. Partner on the left, face clearly visible in three-quarter view, eye contact with the viewer from ≈1.2 s to 6.5 s. Loop = 0.5–6.5 s ping-pong (12 s) |

### Partner correction: v1a vs v6 (`deliverables/comparison-partner-fix.jpg`)

| | room-v1a (current best room) | room-v6-ref (new) |
|---|---|---|
| Partner visible | No: back of head | **Yes**: three-quarter face, looks at the candidate |
| Examiners | Closest, sharpest, most detailed | Same people, further away, less detail |
| Camera | Perfectly locked | Locked for 4 s, ≈10 px slow drift after (loop avoids it) |
| Weak spots | Partner unusable for speaking turns | Partner large and slightly soft in the foreground; smiles with mouth slightly open at ≈3 s (would need lip-sync for his turns anyway) |

Neither room replaces the other automatically. v1a stays the default `pilot-scene.json`; v6 is
`pilot-scene-v6.json`. A realistic final could use v6 as the room and v1a's examiner close-ups for the examiner shots
(same identities), subject to the owner's choice.

## Realism (room-v1a)

**Faces**
- Faces read as real adults: natural skin texture, hair, eyes with catchlights, hands correct, fabric texture real.
- At 1:1 crop there is slight video smoothing and sharpening, invisible at room scale.

**Eyes and expression**
- Lead examiner: about 5 natural blinks in 8 s, steady eye contact and small head tilts.
- At about 1.7–1.9 s she briefly parts her lips. The loop uses 3–8 s to avoid it.
- Second examiner: writes, looks up at the candidate, returns to her notes. Authentic assessor behaviour.

**Identity**
- Stable within the take.
- Identity across takes is NOT preserved: every text-to-video take invents new people. A consistent cast across many
  clips needs either one master take that all speaking takes are derived from (lip-sync on crops of it), or
  reference-image conditioning (Gemini, currently blocked).

## Seams

Measured as PSNR of the patch border (16 px) against the plate:
- borders in static areas: 42–49 dB, invisible;
- borders crossing moving hands, hair or the partner's shoulder: 18–29 dB, visible.

**Decision for this footage:** play the whole frame as the room (10 s ping-pong loop of 3–8 s, 720p, 1.0 MB). There
are no seams by construction, only one video decodes, and the camera director is unchanged (`pilot-scene.json`,
`plate.video`). The local headless check passes (desktop, mobile, video blocked, scene missing).

One artefact remains: in the reversed half of the loop the assessor's pen moves backward. It is subtle at room scale.

## Open issues

1. Partner: solved by v6 at the cost of examiner detail (see above). The owner chooses v1a, v6 or a combination.
2. Portrait phones cannot frame both examiners at once (16:9 source). The camera frames the speaker.
3. Nobody speaks yet: every speaking turn needs lip-sync. See `LIPSYNC.md`.

## Lip-sync

See `LIPSYNC.md`: German test sample, the exact sync.so free-tier steps (nothing uploaded), and no-subscription
alternatives.

## Room decision (2026-11-10)

**v6 alone.**
- The owner preferred v6 plus v1a close-ups, but only if the two match. The check
  (`deliverables/identity-check-*.jpg`) found the same clothing and hair, but faces that are not identical: the v6
  lead has darker, more arched brows and a different smile.
- There were also continuity breaks. The desk props differ, and v1a shows the partner's back in the lead's
  foreground, where v6 has him at the left facing the viewer.
- A switch between them would also be a hard cut between two camera positions.
