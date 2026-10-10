# Real-audio duration validation (`exam-content/tools/audio-duration.mjs`)

Tooling documentation (not a specification). It implements owner decisions T-1 and T-2 (2026-10-10): real audio durations are **measured from
the file**, not trusted from metadata. It changes no timing value, no OD-43 provisional value, no 36–42 min gate, and
no `lc:b1@1` setting (`instruction_seconds` stays 0).

## What is checked

For every audio asset with `audio.file` (real audio; generated test tones are unchanged), `validate.mjs`:

1. **Resolves the file** relative to the form directory. Absolute paths, `..` escapes and symlinks (files or
   directories) that resolve outside the form directory are rejected. The file is opened once; size, type and bytes
   come from that descriptor.
2. **Measures the duration** from the container (no decoding, no external tools):

   | Container | Source of the duration | Rejected |
   |---|---|---|
   | WAV / RIFF, integer PCM | data-chunk bytes ÷ byte rate (the byte rate must equal sample rate × block align) | float or other non-PCM formats; inconsistent headers; truncated or streaming WAV; RF64 |
   | MP4 / M4A, exactly one sound track | the audio track's edit list (`elst`, movie timescale), else `iTunSMPB` valid samples ÷ sample rate | header-only files (`mvhd`/`mdhd` include AAC priming and padding, about 45–70 ms too long); fragmented MP4; dwell or speed edits; video tracks; several sound tracks |
   | WebM (DocType `webm`), exactly one audio track | `Info/Duration × TimecodeScale − CodecDelay` (Opus pre-skip) | missing `Duration` (pipe-written or live-recorded files); `matroska` DocType; video tracks |

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

Reference values come from the decoded sample count (ffmpeg 6.0), ffprobe 4.4 and macOS `afinfo`.

| File | Parser | Decoded | Notes |
|---|---|---|---|
| WAV 48 kHz / 24-bit, 37.25 s | 37250 ms | 37250 ms | exact |
| ffmpeg AAC/M4A (edit list), 45.05 s | 45050 | 45056 | = ffprobe, = afinfo |
| ffmpeg AAC/M4A, 2.345 s | 2345 | 2347 | |
| afconvert AAC/M4A (`iTunSMPB`), 4.2 s | 4200 | 4201 | = afinfo; ffprobe 4.4 reports 4245 (priming not applied) |
| ffmpeg Opus/WebM, 31.5 s | 31502 | 31500 | `CodecDelay` subtracted |
| ffmpeg Opus/WebM, 7.777 s | 7779 | 7777 | |
| ffmpeg fragmented M4A | rejected (`audio_inexact_duration`) | 12523 | not supported |
| ffmpeg Opus/WebM written to a pipe | rejected (`audio_no_duration`) | 9000 | no `Duration` element |

## Limitations

- These are container durations. Decoded length can differ by a few milliseconds (the last AAC frame's padding, Opus
  end trimming). All observed differences were ≤ 6 ms, well inside the tolerance.
- Fragmented MP4, Ogg/Opus, MP3, FLAC and multi-track files are not supported.
- This tool does not implement the other AUDIO-SPEC B7 (Q11) checks: loudness, speech rate from alignment,
  duration-within-B2 targets, sample rate and channels. It does not create both delivery codecs per asset (AUDIO-SPEC
  B6). A real file is shipped as one delivery file.
- A measured duration is evidence only for the file measured. It does not approve audio, voices or licences (OD-14,
  EX-06), and it does not decide any form's timing until real, approved recordings exist.

## Tests

`exam-content/test/audio-duration.test.mjs` (part of `npm run test:exam`) uses fixtures generated in temp directories
(tones and hand-built container structures). No audio binaries are committed. Two optional real-encoder tests:

- `KW_FFMPEG=/path/to/ffmpeg`: encodes WAV, AAC/M4A, Opus/WebM, fragmented MP4 and piped WebM, and compares each
  result with the decoded length (≤ 10 ms) or the expected rejection. The CI workflow `exam-tests.yml` sets this on
  Linux.
- macOS `afconvert`/`afinfo` (auto-detected): an Apple AAC file with `iTunSMPB`, compared with `afinfo`.
