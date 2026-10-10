# Real-audio duration validation (`exam-content/tools/audio-duration.mjs`)

Tooling documentation (not a specification). It implements owner decisions T-1 and T-2 (2026-10-10). Real audio
durations are **measured from the media in the file**: the sample tables of an MP4, the Opus packets of a WebM, the
PCM data of a WAV. Neither editable container fields nor the declared `duration_ms` are trusted on their own. This
changes no timing value, no OD-43 provisional value, no 36–42 min gate, and no `lc:b1@1` setting
(`instruction_seconds` stays 0).

**Asset fields** (form `assets.json`, real audio):
- `audio.file`: a path relative to the form directory.
- `audio.duration_ms`: the declared duration in milliseconds. It must be within 50 ms of the measured value. The
  phase plan always uses the measured value.

Generated test tones (`audio.generator`) are unchanged. The formal asset schema (EXAM-ITEM-SCHEMA §7) is not changed by
this tooling note.

## What is checked

For every audio asset with `audio.file` (real audio; generated test tones are unchanged), `validate.mjs`:

1. **Resolves the file** relative to the form directory. Absolute paths, `..` escapes and symlinks (files or
   directories) that resolve outside the form directory are rejected. The file is opened once; size, type and bytes
   come from that descriptor.
2. **Measures the duration** from the container (no decoding, no external tools):

   | Container | Source of the duration | Rejected |
   |---|---|---|
   | WAV / RIFF, integer PCM | data-chunk bytes ÷ byte rate (the byte rate must equal sample rate × block align) | float or other non-PCM formats; inconsistent headers; truncated or streaming WAV; RF64 |
   | MP4 / M4A (ISO), exactly one **AAC-LC** sound track (`mp4a`, object type 2, no SBR/PS) | the audio track's edit list (`elst`, movie timescale), else `iTunSMPB` valid samples ÷ sample rate. **Backed by the sample tables:** the claimed media must fit in `stts` (sample durations), `stsz` must agree on the sample count, and the sample bytes must fit in the file | header-only files (`mvhd`/`mdhd` include AAC priming and padding, about 45–70 ms too long); edit list or `iTunSMPB` claiming more media than `stts` holds; **HE-AAC / HE-AAC v2** (explicit or implicit SBR/PS); ALAC, Opus-in-MP4 and other codecs; QuickTime sound descriptions (`.mov`); fragmented MP4 (`moof`/`mvex`); edit rates other than 1.0; video tracks; several sound tracks |
   | WebM (DocType `webm`), exactly one **Opus** track (`A_OPUS`) | the **actual packets**: end of the last Opus packet (cluster timecode + block timecode + packet duration from the Opus TOC byte), minus that block's `DiscardPadding` and the track's `CodecDelay` (pre-skip). `Info/Duration` must be present and may not claim more than the packets contain | `Duration` claiming more than the packets; missing `Duration`; unknown-size clusters (pipe-written or live-recorded files); laced blocks; non-Opus codecs; `matroska` DocType; video tracks |

3. **Compares** the measurement with the declared `audio.duration_ms`. A difference of more than **50 ms**
   (`DURATION_TOLERANCE_MS`) is an error. Declare the value produced by this tool (or a sample-accurate tool), never a
   container-header or `ffprobe` format duration for AAC.
4. **Plans with the measured value.** The Hören phase plan and the `timing_total` gate use the measured duration, so an
   optimistic declaration cannot make a form pass.
5. **Records** each measurement (`measured_audio`: file, container, mime, duration, bytes, SHA-256) in the validation
   result. `build-release.mjs` ships a real file only if its SHA-256 and duration still equal what validation measured.

In non-synthetic forms, WAV is rejected (`audio_format`): AUDIO-SPEC B5 makes WAV the master format and Opus/WebM or
AAC/MP4 the delivery formats. Synthetic test forms may use WAV.

## Error codes

`audio_source` (no file, or both generator and file) · `audio_path` · `audio_file_missing` · `audio_too_large`
(> 200 MB) · `audio_empty` · `audio_unsupported` · `audio_corrupt` · `audio_no_duration` · `audio_inexact_duration` ·
`audio_duration_missing` · `audio_duration_mismatch` · `audio_format`. When a measurement fails, no derived Hören timing
error is added; the Sprechen plan is still checked.

## Verified accuracy (2026-10-10, synthetic sine fixtures, not committed)

The "source" column is the length the test tone was generated with. References: ffmpeg 6.0 decoded sample count and
macOS `afinfo`. ffmpeg's decoder does not trim AAC end padding (or, for HE-AAC, the SBR delay), so for AAC it is
**longer** than the true length. There `afinfo` and the source length are the better references.

| File | Source | Parser | ffmpeg decoded | afinfo |
|---|---|---|---|---|
| WAV 48 kHz / 24-bit mono, and 44.1 kHz / 16-bit stereo | 0.5 s / 61.3 s | 500 / 61300 ms | 500 / 61300 | 500 / 61300 |
| ffmpeg AAC-LC 48 kHz (edit list), short and stereo | 0.3 s / 180.02 s | 300 / 180020 | 320 / 180032 | 300 / 180020 |
| ffmpeg AAC-LC 44.1 kHz (edit list) | 12.345 s | 12345 | 12353 | 12345 |
| afconvert AAC-LC and HE-AAC 44.1 kHz (`iTunSMPB`) | 5.55 s | 5550 / 5550 | 5571 / 5664 | 5550 / 5550 |
| ffmpeg Opus/WebM, 20 ms frames | 0.4 s / 300.5 s | 401 / 300501 | 400 / 300500 | – |
| ffmpeg Opus/WebM, 60 ms frames | 20.013 s | 20014 | 20013 | – |
| ffmpeg MP4 without edit list, fragmented MP4, pipe-written WebM | – | rejected | – | – |

**Metadata tampering (real files, only the metadata edited to claim twice the length):** WebM `Duration` ×2, MP4
edit-list `segment_duration` ×2, and `iTunSMPB` valid samples ×2 are all **rejected** (`audio_inexact_duration`). The
measured length comes from the media, not from editable header fields.

## Limitations

- Against the true (source) length, all observed results were within 1 ms, well inside the tolerance.
- Decoders that do not trim AAC end padding (e.g. the ffmpeg decoder, and likely ffmpeg-based browser decoders) play an
  AAC file up to one AAC frame longer than its measured length: ≤ 21.3 ms at 48 kHz, ≤ 46 ms at 22.05 kHz. Prefer
  48 kHz AAC (AUDIO-SPEC B5). HE-AAC is rejected because such decoders can exceed it by 70–160 ms.
- The WebM MIME type is `audio/webm;codecs=opus` and the MP4 MIME type `audio/mp4` (EXAM-ITEM-SCHEMA §7).
- Tampering resistance means metadata cannot claim more media than the file's own sample tables or packets contain.
  It does not detect deliberately crafted media (e.g. silence appended to a recording). Content checks belong to the
  human listening QA (AUDIO-SPEC B7.7).
- Not supported, and therefore rejected rather than guessed: fragmented MP4; MP4 without an edit list or `iTunSMPB`;
  `stz2` sample tables; HE-AAC; ALAC; QuickTime `.mov`; Ogg/Opus; WebM with Vorbis or laced blocks; MP3; FLAC; RF64/W64;
  multi-track files.
- A measured duration says nothing about recording quality, loudness, voices, voice licensing (OD-14, EX-06),
  originality or exam compliance. It does not make any form's timing compliant until real, approved recordings exist.
- This tool does not implement the other AUDIO-SPEC B7 (Q11) checks: loudness, speech rate from alignment,
  duration-within-B2 targets, sample rate and channels. It does not create both delivery codecs per asset (AUDIO-SPEC
  B6). A real file is shipped as one delivery file.
- A measured duration is evidence only for the file measured. It does not approve audio, voices or licences (OD-14,
  EX-06), and it does not decide any form's timing until real, approved recordings exist.

## Tests

`exam-content/test/audio-duration.test.mjs` (part of `npm run test:exam`) uses fixtures generated in temp directories
(tones and hand-built container structures). No audio binaries are committed. Two optional real-encoder tests:

- `KW_FFMPEG=/path/to/ffmpeg`: encodes WAV, AAC/M4A, Opus/WebM (20 and 60 ms frames), fragmented MP4 and piped WebM,
  compares each result with the decoded length (≤ 10 ms) or the expected rejection, and checks that real files whose
  metadata was edited to claim more length are rejected. The CI workflow `exam-tests.yml` sets this on Linux.
- macOS `afconvert`/`afinfo` (auto-detected): an Apple AAC file with `iTunSMPB`, compared with `afinfo`.
