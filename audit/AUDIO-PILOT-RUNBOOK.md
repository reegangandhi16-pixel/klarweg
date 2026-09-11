# Local pilot rendering — runbook

Date: 2026-09-08 · Policy: `audio-manifests/voice-policy.json` (v2)
Scope: **pilot only — 174 files.** No bulk corpus. No vocabulary work.

Architecture is frozen for this step. Nothing below changes a manifest, a hash, a
voice assignment, or any learner-facing text.

---

## 0. Voice policy — recorded exception

| Domain | Male voice | Female voice |
|---|---|---|
| Story · Listening · Reading · Speaking | **de-DE-Neural2-D** | de-DE-Neural2-F |
| Vocabulary (existing corpus) | **de-DE-Neural2-B** — intentional legacy exception, frozen | de-DE-Neural2-F |

The vocabulary exception is now written into `voice-policy.json` under
`legacyExceptions.vocabularyMaleVoice`, with the explicit rules: do not re-render
the 7,786 existing male vocabulary files, and do not modify vocabulary audio,
manifests, hashes or generation output as part of this rollout. Vocabulary voice
migration is logged there as a separate future project, to be opened only if we
later decide it is necessary.

`de-DE-Neural2-B` remains retired **for chapter audio only**. The generator and the
verifier both hard-fail on it there; neither script reads the vocabulary manifest at all.

---

## 1. Prerequisites

**`.env.local`** at the project root (same file `scripts/generate-audio.ts` already
uses; `dotenv` loads it — the variable does not need to be exported):

```
GOOGLE_TTS_API_KEY=<your Google Cloud TTS API key>
```

The key needs the **Cloud Text-to-Speech API** enabled on its project, and the
Neural2 voices available in `de-DE`. Nothing else is read from the environment —
voices, rates, format and sample rate all come from `voice-policy.json`, so no
`TTS_VOICE_*` variable needs to be set for this generator. (`TTS_VOICE_MALE` only
affects the legacy `generate-audio.ts`, whose default is now correctly
`de-DE-Neural2-D`.)

**Toolchain:** Node 18+ (for global `fetch`) and `tsx`. If `tsx` is not installed:

```bash
npm i -D tsx dotenv
```

**Cost sanity:** 174 files, roughly 18,000 characters total — a few cents on
Neural2 pricing. The full corpus later is a different order of magnitude, which is
exactly why the pilot comes first.

---

## 2. Exact commands

```bash
# 1 — inspect the plan; no API calls, no files written
npx tsx scripts/generate-from-manifest.ts --pilot --dry-run

# 2 — render the pilot (174 files)
npx tsx scripts/generate-from-manifest.ts --pilot

# 3 — verify what landed on disk
npx tsx scripts/verify-pilot.ts
```

The dry run prints one line per file with its ID, rate, voice and the first 60
characters of German. Read it before step 2 — if the dry run is wrong, the render
will be wrong 174 times.

Re-running step 2 is safe: existing files are skipped. To force a re-render after a
policy change, add `--force`.

Scope flags are mandatory — the generator exits rather than guess. `--pilot` is the
only one to use now; `--type=<kind>` and `--all` are for after approval.

---

## 3. Expected output

```
public/audio/story/      87 files    A1_034_S001 … C2_015_S006
public/audio/listening/  51 files    A1_042_L001 … C2_016_L004
public/audio/reading/    12 files    A1_010_R001 … C2_025_R001
public/audio/speaking/   24 files    A1_018_Q003/P003 … C2_021_Q00n/P00n
```

174 MP3s, 24 kHz, pitch 0.0. Filename is always `<ID>.mp3` in its type's directory.
Rates: A1/A2 0.85 · B1/B2 0.95 · C1/C2 1.0.

Each run also writes a receipt: `audio-manifests/generation-runs/<ISO-timestamp>.json`
— per-file byte size, voice, rate and status, plus a `suspiciouslyShort` list.

---

## 4. Verifying the generated files

`npx tsx scripts/verify-pilot.ts` (add `--json` for machine-readable output). It is
offline — no TTS calls, no network, and it writes nothing. Per file it checks:

1. file exists at the manifest's `audioFilename`
2. non-empty and above the 1 KB failed-render floor
3. decodes as MPEG Layer III, sample rate 24 kHz
4. filename matches `<ID>.mp3` in the correct directory
5. `contentHash` still equals `sha256(de :: voice :: speakingRate)` recomputed from the text
6. voice matches speaker gender; rate matches the level policy; no unapproved voice
7. duration plausible for the text length — flags clipping (>26 chars/s) and trailing silence (<5 chars/s)

Exit code 0 = every automated check clean. Non-zero prints each failing ID with its
reason. A clean run reports `PASS — automated checks clean; manual listening
approval still required`, because the machine cannot judge intonation.

Quick manual spot-check of the extremes:

```bash
afplay public/audio/reading/A1_010_R001.mp3     # shortest A1 passage, rate 0.85
afplay public/audio/reading/B2_065_R001.mp3     # long compound-heavy B2 passage
afplay public/audio/story/A1_034_S001.mp3       # A1 dialogue, female line
afplay public/audio/story/C2_001_S001.mp3       # C2 dialogue, rate 1.0
afplay public/audio/speaking/A1_018_Q003.mp3    # task prompt, then its answer:
afplay public/audio/speaking/A1_018_P003.mp3
```

(Linux: `mpv` or `ffplay` in place of `afplay`.)

---

## 5. Running the pilot verification (the eight approval gates)

Gates 1–6 are covered by `verify-pilot.ts`. Gates 7 and 8 are human:

| Gate | How |
|---|---|
| 1. all files present | `verify-pilot.ts` → `missing 0` |
| 2. hashes | gate 5 above |
| 3. filenames | gate 4 above |
| 4. playback | gate 3 + the spot-check |
| 5. voice assignment | gate 6; every dialogue unit should alternate F and D |
| 6. pronunciation | **listen** — umlauts, ß, compounds, sentence stress, question intonation |
| 7. pacing | **listen** — A1/A2 slow and very clear; B1/B2 conversational; C1/C2 natural, not artificially slow |
| 8. frontend resolution | build the preview text-keyed manifest, then open a pilot chapter |

For gate 8:

```bash
npx tsx scripts/publish-text-manifest.ts --pilot-only --dry-run
npx tsx scripts/publish-text-manifest.ts --pilot-only
```

That writes `public/audio/manifest.pilot.json` — a **preview** file the live engine
does not load. Point the engine's manifest URL at it locally and open a pilot
chapter (e.g. `chapter/chapter-a1-34-schreiben.html`) to confirm Story, Listening,
Reading and Speaking all resolve to real MP3s instead of falling through to browser
speech. Because the engine keys by German text, the preview also tells you how many
identical strings collapse to one clip — recorded in
`audio-manifests/text-manifest-collisions.json`.

If a gate fails, fix the cause and re-render only the affected IDs with `--force`.
Do not proceed to production publishing on a partial pass.

---

## 6. Publishing the production text-keyed manifest — AFTER approval

The frontend depends on this file, so it is published once, complete, after
sign-off. Two guardrails make a partial publish impossible.

**Step 1 — record the approval.** Write `audio-manifests/pilot-approval.json`:

```json
{
  "approvedBy": "<name>",
  "approvedOn": "<ISO date>",
  "pilotVersion": "pilot-v2",
  "verdict": "approved",
  "notes": "manual listening pass: pronunciation, pacing, voice consistency, frontend resolution"
}
```

`--production` refuses to run without it, or with any verdict other than `approved`.

**Step 2 — render the full corpus** (a separate approved step, not part of this
pilot). The publisher also refuses to run while any in-scope row is missing or
under 1 KB, so the manifest cannot go live ahead of the audio:

```bash
npx tsx scripts/generate-from-manifest.ts --type=story
npx tsx scripts/generate-from-manifest.ts --type=listening
npx tsx scripts/generate-from-manifest.ts --type=reading
npx tsx scripts/generate-from-manifest.ts --type=speaking
npx tsx scripts/verify-pilot.ts        # gates still apply to the pilot subset
```

**Step 3 — publish.**

```bash
npx tsx scripts/publish-text-manifest.ts --production --dry-run
npx tsx scripts/publish-text-manifest.ts --production
```

Writes `public/audio/manifest.json` — the file the live site loads. Vocabulary is
not merged into it; that corpus keeps its own manifest and its `de-DE-Neural2-B`
male voice untouched.

Only after this file is published should production audio be enabled on the live site.

---

## New files in this step

- `scripts/verify-pilot.ts` — offline verification of rendered pilot audio
- `scripts/publish-text-manifest.ts` — guarded text-keyed manifest publisher
- `voice-policy.json` — gained `legacyExceptions.vocabularyMaleVoice` and `approvedMaleVoiceByDomain`

No manifest rows, hashes, voices, rates or learner-facing text were changed.
No audio was generated. No clickability scan was run.
