# German lip-sync: test sample, sync.so free-tier steps, alternatives (2026-11-10)

Nothing has been uploaded, installed or bought. No sync.so account exists.

## Test sample (local, $0)

The files are in `~/klarweg-work/klarweg-photoreal-pilot/lipsync-test/`, outside the repo:

| File | What |
|---|---|
| `lead-face-input.mp4` | 10.5 s, 720×720, 30 fps, no audio: the lead examiner cropped from `room-loop-v1a-1080p.mp4` (frontal, eye contact, closed mouth) |
| `lead-face-frame.jpg` | still from that clip |
| `lead-line.wav` | 10.1 s, 48 kHz mono, macOS voice "Anna" (de_DE): *"Guten Tag. Willkommen zur mündlichen Prüfung. Möchten Sie sich bitte zuerst kurz vorstellen? Erzählen Sie uns, woher Sie kommen und was Sie beruflich machen."* (ü, ö, ch, r, w/v, pf-like closures) |
| `partner-line.wav` | 7.1 s, macOS voice "Eddy": *"Ich würde vorschlagen, dass wir zuerst über das Geschenk sprechen. Was hältst du davon?"* (for a later partner test, v6 face) |

The macOS voices are only for this internal lip-sync test: Apple's licence does not cover publishing them. The final
voices would come from Google Cloud TTS de-DE in the billed project already used for M0 audio (a few cents per test,
but that is still a spend that needs approval).

## sync.so free tier: exact steps (owner, after reading the terms)

Free plan: 3 generations per month, ≤15 s each, watermarked, no card.

1. Read https://sync.so/terms and the privacy policy. Key point: uploaded content is licensed to Sync Labs "to develop
   and improve the Service" (sublicensable). Our faces are synthetic (Veo) and the voice is a TTS test voice, so no
   real person's likeness is involved. Decide whether that is acceptable.
2. Create the account at https://sync.so with the Klarweg owner e-mail. Choose **Free** and do not enter a card.
3. In the Studio (web app, no API key needed), start a new lip-sync generation:
   - Video: `lead-face-input.mp4`.
   - Audio: `lead-line.wav`.
   - Model: `lipsync-2-pro` if the free plan offers it, otherwise `lipsync-2`.
   - Sync mode: `cut_off` (the video is longer than the audio).
   - Leave every other setting at its default.
4. Download the result as `sync-lead-v1.mp4` into the same `lipsync-test/` folder. Uses 1 of 3 free generations.
5. Optional second run: the same input with `sync-3`, if the free plan allows it (comparison). Keep the third
   generation in reserve.
6. Tell Claude when the file is there. Claude then checks it locally:
   - mouth shapes on ü/ö/sch/f/m/b;
   - teeth and inner mouth;
   - seams at the crop edge;
   - drift against the audio;
   - first and last frame vs. the idle loop.
   Everything is compared side by side with the source clip.

Watermarked output is for evaluation only, never for the site.

## Alternatives without another subscription

| Option | Cost | German | Quality and fit | Limitations |
|---|---|---|---|---|
| **A. Veo 3.1 Fast with native audio** (Vertex, same project and billing as the room). Image-to-video from our own room frame, German line in quotes in the prompt | $0.12/s ≈ **$0.96 per 8 s clip**. Needs new spend approval | Not officially listed for Veo dialogue; must be tested | Best fit with the room: same pixels, the same person and real head and face motion, with no compositing | Veo invents the voice: the exact wording, voice timbre and consistency between clips are not guaranteed, and our TTS audio cannot be used (lips would not match). Max 8 s per clip, so longer turns need several clips. Each clip must be checked for wording errors |
| **B. MuseTalk (local, open source)** | $0, about 5–8 GB downloads | Audio-driven (Whisper features), so language-agnostic | Re-renders only the mouth area (256 px face crop). Good on frontal faces such as the lead examiner; weaker on the partner's three-quarter view | Licence: code MIT, the README allows commercial use of the weights, but the Hugging Face card says OpenRAIL-M. Bundled parts (Whisper, VAE, DWPose, S3FD) each need a check. Built for CUDA: on this Mac (M2, 16 GB) it runs on CPU or MPS, slowly. Needs Python 3.10 next to the system Python 3.14. **Installing third-party model code needs owner approval** |
| **C. LatentSync 1.6 (local)** | $0 | Language-agnostic | Sharper than MuseTalk on paper | Needs about 18 GB of GPU memory (CUDA). Not feasible on this Mac; only an unverified macOS fork exists. Weights licence unclear (Apache code, OpenRAIL weights mentioned). Not recommended |
| Wav2Lip, LivePortrait, SadTalker | $0 | Language-agnostic | Low resolution (Wav2Lip) or still-image animation (SadTalker) | **Excluded**: Wav2Lip weights are non-commercial, and LivePortrait depends on InsightFace (non-commercial) |

No other Google lip-sync product was found on Vertex AI besides Veo's own speech.

### Recommendation

Test all three on the same 10 s lead-examiner clip and pick by eye:
1. sync.so free: $0, once the owner accepts the terms.
2. **One** Veo-with-audio clip of the same line: $0.96, needs approval. It shows whether German speech is believable.
3. MuseTalk locally: $0, needs approval to install.

If Veo's German is clean, it is the simplest no-subscription route. Each line becomes one clip generated from the
room frame. If wording or voice control matters more, choose sync.so (paid plan later) or MuseTalk.

## Result: Veo 3.1 Fast audio test (owner-approved single run, 2026-11-10)

**Run**
- `lead-speaks-v6-audio.mp4`: image-to-video from `room-still-v6.png`, 8 s at 1080p with audio. **$0.96**, one
  request, no retries.
- Prompt key `lead_speaks_v6_audio`, negative `negative_audio_v1`.
- Sentence: *"Guten Tag. Willkommen zur mündlichen Prüfung. Möchten Sie sich bitte kurz vorstellen?"*
- Review clip: `eval/veo-audio-review.mp4` (wide shot plus a 3× face zoom, with audio).

**Audio–word alignment**
- One female voice, three phrases: 0.5–1.3 s, 1.5–3.1 s and 3.7–5.8 s. That matches the three sentences.
- Total 5.3 s, the same pacing as the macOS TTS reference (5.3 s). Silent after 5.9 s.
- Word accuracy is NOT machine-verified. There is no local German speech recognition on this Mac: Apple's on-device
  model is not installed, and a cloud ASR would upload the audio. **The owner must listen.**

**Mouth synchronisation**
- Measured on a mouth crop: the lips move about 3× more per frame during speech than in silence (0.029 vs 0.010) and
  rest after the last word. Teeth and inner mouth are visible on open vowels.
- Frame-accurate sync cannot be proven with this crude metric (the correlation of loudness and opening is weak:
  r ≈ 0.1). Judge it by eye in the review clip.

**Facial naturalness**
- At room scale she looks natural: smile on "Guten Tag", eye contact, small head motion.
- Her face is only about 110 px wide in 1080p. Veo's sharpening gives haloed, slightly painterly edges when zoomed 2×
  or more, which matters for close shots on large screens.

**Character consistency**
- Frame 0 equals the v6 still, and the identity, clothing and room are unchanged through the clip.
- The second examiner keeps writing silently.
- The partner stays turned toward the speaking examiner, which is natural behaviour.
- The camera pans ≈11 px over 8 s (≤5 px during the speech). Compositing into the room needs a short crossfade or a
  stabilised patch.

**Comparison status**
- The sync.so arm has NOT been run: it waits for the owner's acceptance of the terms.
- Its inputs use the same sentence and the same character: `lipsync-test/v6-lead-face-input.mp4` (v6 lead, 8 s,
  720×720) and `lipsync-test/lead-line-short.wav` (5.6 s).
- MuseTalk is not installed (weights licence unresolved).
