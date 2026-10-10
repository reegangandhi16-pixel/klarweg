# Q11 audio checks: requirements, implementation status and measurement pathway

Tooling and planning note (not a specification). It sets no threshold and changes no specification, schema, decision,
level configuration or gate. Every threshold below is quoted from an existing source. Where a source is unclear, the
point is listed as an open question (§4) instead of being interpreted. Written 2026-10-10 against public `main` @ `32b4206`.

**Sources:**
- `B1-AUDIO-SPEC.md` ("AUDIO"): B2 targets, B5 technical specification, B6 manifest, B7 validation (gate Q11).
- `ARCHITECTURE.md` §9 (automated quality gates): Q5 and Q11.
- `EXAM-ITEM-SCHEMA.md` §7: asset MIME types and `AudioAssetMeta`.
- Decision register v1.3: OD-14 (audio route, restates the B5 master/delivery/loudness values), OD-43 (provisional
  Hören timing), EX-03, EX-06, U-05/U-09.
- Standard Layer C (speech-rate targets) and its audio rule ("Audio meets the Layer C rates (±5 %)").
- `EXAM-AUDIO-DURATION-VALIDATION.md` (the file-duration check from PR #51).

A measurement from these tools is evidence about one file. It never approves recording quality, voices, voice
licensing (OD-14, EX-06), originality, accessibility or exam compliance, and it closes no gate.

## 1. Requirements-to-implementation matrix

Status key: **gate** = enforced by `validate.mjs`; **evidence** = measured and recorded by
`exam-content/tools/measure-audio.mjs`, not enforced; **open** = not implemented.

| # | Check | Specified threshold (source) | Input | Method | Error behaviour | Tests | Status · dependencies |
|---|---|---|---|---|---|---|---|
| 1 | Integrated loudness | −18 LUFS ± 1 per segment, EBU R128 measurement, master and delivery (AUDIO B5; OD-14) | Decoded PCM of each file | BS.1770-4 K-weighting, 400 ms blocks with 75 % overlap, −70 LUFS absolute and −10 LU relative gates | `fail` outside −19…−17; `not_measured` under 400 ms or silent (never `pass`) | EBU Tech 3341 cases 1–5 with synthetic sines (absolute and relative gate); exact boundaries on unrounded values; real encoders also compared with ffmpeg `ebur128` (≤ 0.15 LU) | **evidence** · as a gate: decision D-1 (decoder) |
| 2 | True peak | ≤ −1.0 dBTP, master and delivery (AUDIO B5) | Decoded PCM | 4× oversampling (BS.1770-4 Annex 2), 129-tap Kaiser-windowed sinc | `fail` above −1.0; `not_measured` on digital silence | Analytic ground truth: steady sines 997 Hz–20 kHz at 48 and 44.1 kHz, several phases, within +0.2 / −0.4 dB of the amplitude (the Tech 3341 true-peak window); inter-sample case (fs/4 at 45°); boundary on unrounded values; real encoders also compared with ffmpeg (≤ 0.3 dB) | **evidence** · D-1 |
| 3 | Channel count | Mono: master and both delivery codecs (AUDIO B5) | Decoded PCM (the decoder's output, not a header field) | Channel count after decoding | `fail` if ≠ 1 | Mono passes; stereo WAV and stereo AAC fail | **evidence** · D-1 |
| 4 | Sample rate | Master 48 kHz (AUDIO B5; OD-14). Delivery: **not specified** | Decoded PCM | Rate after decoding | Master: `fail` if ≠ 48000. Delivery: `reported` only | Master 44.1 kHz fails; delivery rate reported | **evidence** (master) · delivery: question Q-2 |
| 5 | Bit depth | Master 24-bit (AUDIO B5; OD-14) | WAV header of the master (integer PCM only) | `fmt` bits per sample | `fail` if ≠ 24 | 16-bit master fails | **evidence** |
| 6 | Container and codec | Opus in WebM, AAC-LC in MP4 (AUDIO B5); MIME types (SCHEMA §7); WAV is the master format | File bytes | Container parsing (PR #51) | `audio_unsupported`, `audio_format` | `audio-duration.test.mjs` | **gate** (PR #51) |
| 7 | Bitrate | Opus 64 kbps, AAC-LC 96 kbps (AUDIO B5; OD-14). **No tolerance or rate mode stated** | File | Average bitrate = bytes × 8 ÷ duration (not implemented) | – | – | **open** · question Q-3 |
| 8 | Both delivery codecs per asset | `codecs: { opus, aac }` per asset (AUDIO B6) | Release manifest | – | – | – | **open** · the builder ships one delivery file per asset; question Q-4 |
| 9 | Noise floor | ≤ −60 dBFS "between phrases", master (AUDIO B5) | Master PCM + where phrases are | **Not defined**: "between phrases" needs a phrase/pause segmentation | – | – | **open** · question Q-5; needs a method, or an alignment (row 12) |
| 10 | Leading/trailing silence | 300 ms ± 50 ms (AUDIO B5) | Decoded PCM | **Not defined**: no level is given below which a sample counts as silence | – | – | **open** · question Q-6 |
| 11 | File duration | Declared `duration_ms` within 50 ms of the file (tooling rule, owner decisions T-1/T-2) | File bytes | Container sample tables / Opus packets / PCM data | `audio_duration_mismatch` and others | `audio-duration.test.mjs` | **gate** (PR #51) |
| 12 | Per-part gross duration | B2 gross ranges: T1 35–50 s per text, T2 160–190 s, T3 190–225 s, T4 290–330 s; "Tolerance gate: ± 5 % of the part target" (AUDIO B2) | Measured duration (row 11) + the asset's Hören part | Comparison per stimulus | – | Mechanical once decided: synthetic tones of chosen lengths | **open** · question Q-7 (meaning of ± 5 %); question Q-8 (where the targets live: B2 is not in `lc:b1@1`); instruction files have no target |
| 13 | Net speech rate | T1 140–165, T2 150–165, T3 145–165, T4 155–175 w/min, pauses > 250 ms excluded, ± 5 % of the part target, measured from the forced-aligned transcript (AUDIO B2, B7.2; Standard Layer C) | Real speech + transcript + forced alignment | words ÷ (speech time excluding pauses > 250 ms) | – | Arithmetic testable with synthetic alignment data; meaningful only on real recordings | **open** · real recordings, transcripts, a German forced aligner (tool, model and licence to choose); Q-7 |
| 14 | Alignment coverage and anchors | ≥ 98 % of transcript words aligned; every item anchor inside its segment (AUDIO B7.3; ARCH Q11) | Alignment + item anchors | Coverage ratio; interval check | – | Synthetic alignment fixtures | **open** · aligner; real recordings |
| 15 | Speakers and overlap | Diarised speaker count = manifest speakers; no overlap > 300 ms (AUDIO B7.4, B4) | Real multi-speaker audio | Diarisation | – | Real recordings only | **open** · diarisation tool or human check; real recordings |
| 16 | Distractor mentions | Option values present in the transcript where the design says so (AUDIO B7.5) | Transcript + item design | Text match | – | Synthetic transcripts | **open** · approved scripts (EX-03) |
| 17 | Phase-plan total | 36–42 min (AUDIO B7.6; ARCH Q5; OD-43 **PROVISIONAL**) | Measured durations + `lc:b1@1` | `hoerenPlan()` | `timing_total` | Both bounds; the published gate (PR #51) | **gate** · values provisional (OD-43; U-05, U-09) |
| 18 | Human listening QA | Per form, native speaker + B1 teacher: intelligibility, naturalness, regional authenticity, no unintended cues (AUDIO B7.7) | Real audio | Human review | – | – | **open (human)** · EX-03 panel; OD-14 MOS review |
| 19 | Evidence and traceability | Manifest fields `duration_ms`, `loudness_lufs`, `true_peak_dbtp`, `sample_rate`, per-codec `bytes`/`sha256`, rates, `alignment_coverage`, `production`, `licence_ref` (AUDIO B6) | All of the above | Validation records file, container, MIME, duration, bytes and SHA-256 per asset (`measured_audio`); the builder ships a file only if hash and duration still match; `measure-audio.mjs` emits a record per file with SHA-256, values (rounded and unrounded), method, decoder path/SHA-256/version and the SHA-256 of its own sources | – | `audio-signal.test.mjs`, `audio-duration.test.mjs` | **partial** · where evidence records are stored and how they bind to a release is a design item (§3, stage 5); no schema change here |

### What can be built and tested now, and what needs real material

| Now, with synthetic fixtures | Needs a decision first | Needs real recordings, transcripts, alignment, licensed voices or people |
|---|---|---|
| Rows 1–5 (done here, as evidence); 6, 11, 17 (done, gates); the arithmetic of 12–14 against synthetic data | Gate status of 1–5 (D-1); 4 for delivery (Q-2); 7 (Q-3); 8 (Q-4); 9 (Q-5); 10 (Q-6); 12 (Q-7, Q-8); T-3 (instruction asset per Hören part) | 13, 14, 15 (aligner/diariser on real speech); 16 (approved scripts); 18 (human QA); any real measurement of 1–5 (licensed audio under OD-14/EX-06) |

## 2. The measurement tool (`measure-audio.mjs`)

```
node exam-content/tools/measure-audio.mjs [--ffmpeg PATH] FILE...      # or KW_FFMPEG=PATH
```

- **Decoding.** WAV masters (integer PCM) are read directly. AAC-LC/MP4 and Opus/WebM are decoded only by the
  executable given (`--ffmpeg PATH` or `KW_FFMPEG`; never looked up on `PATH`):
  `ffmpeg -nostdin -v error -protocol_whitelist file -f <mov|matroska> -i file:<copy> -map 0:a:0 -c:a pcm_s32le -f wav file:<out>`.
  - The decoder reads a private temporary copy of exactly the bytes that were hashed, with the demuxer forced to the
    container already identified. A replaced file, or a path that looks like an option or protocol (`-…`, `concat:…`),
    cannot change what is measured.
  - No `-ac` or `-ar`, so the measurement is of the decoder's actual output. The decoder applies the Opus header output
    gain, as a player would (a +6 dB header edit is measured as +6 dB).
  - The decoded length must match the container-measured duration within 50 ms, or the record is an error
    (`decode_length_mismatch`).
  - Decoding times out after 120 s (`decode_timeout`). A failing decoder gives `decode_failed`.
  - Without a decoder, compressed files are `not_measured`.
- **Records.** Output is a JSON array, one record per file:
  - file, bytes, SHA-256, container, MIME, file duration (`audio-duration.mjs`);
  - role (`master` = WAV, `delivery` = MP4/WebM);
  - signal: loudness, gating blocks, true peak, sample peak, channels, sample rate, samples, method, and the
    unrounded values the checks use;
  - per-check status (`pass` / `fail` / `not_measured` / `reported`);
  - provenance:
    - the decoder's resolved path, the SHA-256 of its executable and its version line;
    - the SHA-256 of the tool's own source files (`tool_sources`);
    - the tool version, Node version and timestamp.
- **Never a false pass.**
  - Every error record has `ok: false`.
  - A specified check that cannot be measured is `not_measured` and makes `ok` false.
  - Checks compare unrounded values, so rounding for display cannot turn a fail into a pass.
  - Exit code 0 only if every specified check passed or is report-only.
- **Metadata is not trusted.** Loudness tags, ReplayGain and similar fields are ignored; only decoded samples count.
- **Accuracy.** Checked against normative or analytic references first, and only then against ffmpeg:
  - EBU Tech 3341 cases 1–5 within 0.05–0.1 LU.
  - True peak of steady sines up to 20 kHz within −0.10…0.00 dB of the amplitude (the worst case is at fs/4, an
    inherent limit of 4× oversampling).
  - A sine that starts abruptly reads higher (up to about +1 dB). That is the real overshoot of the reconstructed
    waveform at the onset, not an error. B5's 300 ms lead-in silence avoids it in produced audio.
  - Real Opus and AAC encodes compared with ffmpeg `ebur128`: within 0.15 LU and 0.3 dB.
- **Performance** (330 s mono file, Node 24, Apple Silicon, ffmpeg 6.0): 4.6–5.2 s. Peak memory is about 300 MB for a
  WAV master and about 370 MB for an Opus or AAC file. Samples are held as Float32 (exact for 24-bit), with
  double-precision arithmetic. Memory grows linearly with length; the 200 MB file-size limit of `audio-duration.mjs`
  applies.
- **Versions.** ffmpeg 6.0 (static build) was used locally; CI uses the Ubuntu ffmpeg package (`exam-tests.yml` prints
  its version). Every record carries the decoder path, hash and version.

## 3. Measurement pathway for future approved recordings

| Stage | What happens | Can it happen now? | Blocked by |
|---|---|---|---|
| 1. Voice and licensing | Choose vendor and voices; voice pool; MOS ≥ 4.0 with 10 native raters (threshold PROVISIONAL); written licence for exam use, AI-training exclusion, perpetual licence | **No** | OD-14 conditions; EX-06 (external); legal review of the licence terms |
| 2. Production and human listening | Produce masters (48 kHz / 24-bit mono WAV) from **approved** scripts; produce both delivery codecs; human listening QA (B7.7) | **No** | Stage 1; approved scripts (EX-03 panel not formed; OD-08 clearance outstanding, paraphrase fallback; Q14/M-28 originality); for spoken instructions, T-3 |
| 3. File format and duration | Container/codec check and file-derived duration, declared value within 50 ms | Tooling **ready** (PR #51); real use waits for stage 2 | Stage 2 |
| 4. Q11 signal and timing | Loudness, true peak, channels, master sample rate and bit depth (`measure-audio.mjs`); per-part durations; speech rate and alignment coverage; speaker checks | Loudness/peak/format tooling **ready as evidence**; the rest **No** | Stage 2; Q-5…Q-8; an aligner and diariser; D-1 for gating |
| 5. Evidence and file hashes | Keep each record (SHA-256, values, method, decoder and tool versions) with the asset in the private content repository; bind the manifest fields (B6) to the file hash | Design **can start now**; real records wait for stage 2 | Storage location and format of evidence (engineering design; any schema change needs review) |
| 6. Validator and release builder | `validate.mjs` gates duration and the phase-plan total today; signal checks become gates only after D-1; the builder ships exactly the validated bytes | Duration/timing gates **live**; signal gates **No** | D-1; T-3; OD-43 values stay PROVISIONAL |
| 7. Human review and governance sign-off | EX-03 item review and M-27 sign-off; Q14/M-28 originality; EX-04 accessibility; EX-01 privacy (Sprechen recordings); OD-07/OD-30 scoring; calibration pilots (OD-12, OD-35); release approval | **No** | Each of those gates; no reviewer has been appointed |

At no stage does a file-duration or signal measurement stand in for stages 1, 2 or 7.

## 4. Decisions and open questions (not decided here)

| Id | Question | Why it matters | Who |
|---|---|---|---|
| D-1 | May validation depend on an external decoder (a pinned ffmpeg), or a bundled WASM decoder (a new dependency)? Or should the validator only verify stored evidence records by file hash? | Loudness, true peak and channel checks on Opus/AAC need decoding; Node has no built-in decoder. Until decided, rows 1–5 stay evidence, not gates. Options analysis: §5 | Owner (engineering policy) |
| Q-2 | Delivery sample rate | B5 states 48 kHz only for masters. Opus always decodes at 48 kHz; AAC can be any rate | AUDIO-SPEC owner / governance |
| Q-3 | Bitrate tolerance and rate mode (CBR/VBR) for "64 kbps" / "96 kbps" | Without a tolerance, a bitrate check would invent one | AUDIO-SPEC owner |
| Q-4 | Must each release asset ship both codecs (B6 `codecs`), with the client choosing? | The builder currently ships one delivery file per asset | Owner (engineering scope) |
| Q-5 | Noise-floor method: how "between phrases" is found (alignment pauses? a level-based detector with what threshold and minimum length?) | A method choice is a threshold choice | AUDIO-SPEC owner |
| Q-6 | Silence definition for leading/trailing silence (level and measurement window) | Same | AUDIO-SPEC owner |
| Q-7 | "± 5 % of the part target" (B2, B7.2; Standard): of each range bound (widening the range), of a single centre value, or of what? Does it apply to gross duration, net rate, or both? | Different readings pass different files | Governance (register entry) |
| Q-8 | Where the B2 per-part targets live for validation | They are not in `lc:b1@1`. Putting them there means a new level-config version and a register update | Governance |
| T-3 | Must non-synthetic forms provide an instruction asset for every Hören part? | Turns AUDIO A1 into a validator rule | Owner (open since the timing decision package) |

The AUDIO-SPEC A2 "≈ 2 min" for spoken instructions stays a planning illustration. It is not a configured value and
not a measurement; `instruction_seconds` stays 0 and no OD-43 value changes here.

## 5. D-1 options analysis (recommendation, not a decision)

D-1 asks how the signal checks (rows 1–5) could become validator gates. Two approaches:

| Criterion | **A. Validation invokes a pinned, version-verified decoder** | **B. Validation only verifies stored evidence records by file hash** |
|---|---|---|
| Reproducibility | Re-measured on every validation; the result depends on the pinned decoder build, which is recorded and checked | The record is reproducible only if the measuring environment is re-run; validation itself cannot re-check the numbers |
| Dependency management | Needs a pinned decoder in the validation/build environment (exact version and executable SHA-256, ideally one static build per platform) | No new runtime dependency in validation; the measuring step still needs a decoder somewhere |
| Security | Runs a large native binary on untrusted input. Mitigations: decode a private copy, `file:` protocol only, forced demuxer, timeout (all done here); sandboxing is possible | Validation parses only JSON and hashes. But the trust moves to whoever produced the record: a forged or stale record would pass unless records are produced by controlled tooling |
| Portability | Bound to platforms where the pinned build is available (CI Linux, macOS) | Validation is portable; measurement is not |
| Testability | Fully testable end to end (as in this PR, with real encoders in CI and stand-in decoders) | Validator tests are simple; correctness of the evidence depends on a separate, untested-by-validation step |
| Provenance | Strong: the gate result is computed from the exact bytes released, by a recorded decoder | Medium: a hash binds record to file, but not the record to a trusted measurement run |

**Recommendation:** A, limited to the controlled validation/build environment, with B's record as its output.
- Validation runs the decoder only when it is given explicitly and matches a pinned version and executable SHA-256.
  Otherwise the signal checks report `not_measured`, which fails the gate for real forms rather than passing them.
- Each run's evidence record is stored and bound to the file SHA-256, for audit.

This keeps the strength of A, re-measuring the exact released bytes, and the audit trail of B.

**Approvable now (owner):** the policy choice above, and the pinned decoder (which build, how it is pinned, which
platforms).

**Needs a separate implementation PR (after approval):**
- decoder pinning and verification;
- wiring rows 1–5 into `validate.mjs` for non-synthetic forms only, with the synthetic release unchanged;
- CI with the pinned build instead of the distribution package;
- an evidence-record format in the private repository.

**Still blocked on Q-2…Q-8:** delivery sample rate, bitrate, both codecs per asset, noise floor, silence, per-part
duration targets and their location. None of these becomes a gate under either option until it is decided.

## 6. Tests

`exam-content/test/audio-signal.test.mjs` (part of `npm run test:exam`): synthetic sines and silence generated in
memory or temp directories; no audio is committed. Two tests run real encoders when `KW_FFMPEG` is set (as in CI):
- Opus/WebM and AAC-LC/MP4 measured and compared with ffmpeg `ebur128`, plus a stereo AAC that must fail.
- The Opus output-gain header edit.

Decoder handling is tested with stand-in decoder scripts, so it runs everywhere:
- only the private copy is opened, with the forced demuxer and `file:` protocol;
- the decoder path and hash are recorded;
- failure, timeout, a wrong-length output, a non-WAV output and a stereo output each give a non-passing record.
