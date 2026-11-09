# Photoreal room: Phase 1 pilot report (2026-11-10)

**Approved cap:** $10. **Spent:** $5.60, entered in the ledger. **Left:** $4.40.

Generation stopped after 7 Veo 3.1 Fast requests. Spend was checked before every batch; the ledger is
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

1. The partner shows his back. Veo places a partner "beside the candidate" facing the examiners, which is physically
   realistic, but he needs a visible face when he talks to the candidate. Options:
   - a separate partner take that turns toward the camera;
   - a composition with the partner at the left table corner (v2a style) with a locked camera.
   Each try is $0.80.
2. Portrait phones cannot frame both examiners at once (16:9 source). The camera frames the speaker.

## Lip-sync (sync.so free tier)

**Not started:** it needs a sync.so account in the owner's name.

**Free tier:** 3 clips a month, ≤15 s each, watermarked, no card.

**Terms (sync.so/terms):**
- They don't state who owns outputs; only the help centre promises commercial rights on paid plans.
- Uploaded content is licensed to Sync Labs "to develop and improve the Service" (sublicensable).
- The user must hold the necessary consents and publicity rights.

The pilot examiners are synthetic and the voice would be TTS, so the risk is low. It must be accepted knowingly.
