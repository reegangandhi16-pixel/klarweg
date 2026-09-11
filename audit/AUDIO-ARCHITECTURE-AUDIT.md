# Audio architecture audit + pilot work order

Phases 1 and 2 are complete. Phase 3 is specified and staged but **not executed** —
see "The blocker" below. No audio was generated. No dialogue, reading, speaking,
vocabulary, grammar, lexicon or resolver content was modified. No clickability scan was run.

---

## The blocker (read first)

I cannot synthesize audio. Audio in this project is produced by a build-time Node
script that calls the Google Cloud TTS REST API with `GOOGLE_TTS_API_KEY` from
`.env.local`. I have no TTS access and cannot run Node in this environment.

So the pilot is delivered as a **runnable work order** rather than as MP3 files:
every pilot unit is pinned to an exact ID, exact German text, exact voice, exact
speaking rate, exact filename and a content hash, and there is a generator that
consumes it. You run one command; the 40 files land. Everything in items 1–11 and
12 of your report list is answered below; items 13–17 (failed files, pronunciation,
pacing, naturalness, production readiness) can only be answered after that run,
because they are judgements about actual audio.

```
npx tsx scripts/generate-from-manifest.ts --pilot --dry-run   # verify the plan
npx tsx scripts/generate-from-manifest.ts --pilot             # 40 files
```

---

# PHASE 1 — Architecture audit

## Where the four chapter-level audio types live

All four live in the 258 per-chapter data files, `chapter/chapter-<id>-data.js`,
each assigning one `window.KW_CHAPTER` object.

| | Story | Listening | Reading | Speaking |
|---|---|---|---|---|
| Source field | `story.dialogue[].{speaker, tokens[].w}` | `listening.dialogue[]` | `reading.tokens[].w` | `speaking[]` |
| Per-unit ID in chapter data | no | **yes** (`A1_015_L001`) | no | no |
| German text | assembled from token `w` values | `de` field, plain string | assembled from token `w` values | `de` field (model answer) |
| Speaker metadata | `speaker` + `story.femaleSpeakers[]` | `speaker` + `gender` + `voice` per line | none (narration) | none |
| Existing manifest | `story-dialogue-manifest.json` (1775 lines) | `listening-dialogue-manifest.json` (1081 lines) | **none** | **none** |
| Frontend expects a file? | no — resolves by text | no — resolves by text | no | no |
| Generator supports it? | partially | partially | **no** | partially |

Counts: **254** chapters carry Story and Listening (the 4 B2 Goethe checkpoints
have `story: null` and no listening dialogue). **258** chapters — all of them —
carry Reading and Speaking.

### Story
- 1775 lines across 254 chapters, IDs `LEVEL_NNN_Snnn`.
- Manifest fields: `id, chapter, level, speaker, speakerId, gender, voice, de, en, hi, audioFilename, contentHash`.
- Per-line architecture, already established: `audio/story/<ID>.mp3`, one file per line.
- Voices in the manifest: female 1463 lines `de-DE-Neural2-F`, male 1393 lines `de-DE-Neural2-D`. Split is clean; no line has a gender/voice mismatch.
- **Architecture decision recorded:** per-line, not combined. A combined per-dialogue file would break the existing per-line IDs, the line-by-line replay UI and the word-timepoint highlighting. Keep per-line.

### Listening
- 1081 lines across 254 chapters, IDs `LEVEL_NNN_Lnnn`, same field set.
- Frozen and verified last phase: 0 duplicates, 0 stale, 0 missing, 0 malformed.
- The 4 checkpoint chapters carry a listening *monologue* in a different shape and are outside this manifest — they were excluded deliberately, not lost.
- Untouched in this phase.

### Reading
- One passage per chapter, 258 total. No sub-passages: `reading` is a single `{title, titleEn, tokens[], translation}` object, so there is nothing to split and no existing IDs to preserve.
- Passage text must be reassembled from `tokens[].w`, joining with spaces and attaching punctuation tokens (`plain: true`) without a leading space. Punctuation is present in the token stream, so sentence pauses come out naturally.
- Length 81–922 characters, median 318.
- Clean: 0 passages contain Devanagari, 0 contain editorial text, 0 are missing an English translation.
- No manifest existed. Created — see Phase 2.

### Speaking
- `speaking` is an array of `{task, taskEn, de, en}`. **1277 units** across 258 chapters (3–8 per chapter).
- `de` is an authored German **model answer** — every one of the 1277 units has one, so there are no production-only tasks with nothing to voice, and nothing had to be invented.
- `task` is the prompt: **1143 are German**, 134 are English instructions. `taskEn` and `en` are always English.
- **Only `de` receives audio.** `task`, `taskEn` and `en` are excluded. The German `task` prompts are a real open question, not an oversight — see "Open decisions".
- No manifest existed. Created — see Phase 2.

## Vocabulary audio (inspected, not redesigned)
- `vocabulary-manifest.json`, 15,572 entries = 7,786 headwords × 2 voices (`_F`/`_M`).
- IDs are `<textHash>_<F|M>` where the text hash is `sha256(text)` truncated to 16 hex; files at `audio/vocab/{female,male}/<ID>.mp3`.
- Already generated and live on a CDN (`klarweg-audio-cdn`, ~9.4k entries loaded by the engine as the merged vocab map).
- Left exactly as it is.

## How the frontend actually resolves audio
`public/audio/kw-audio-engine.js` resolves **by German text, not by ID**:
manifest lookup → IndexedDB cache → hosted TTS endpoint → browser speech → disabled button.
It reads a text-keyed `manifest.json` from the CDN base plus the vocab manifest.

Two consequences that matter for production:
1. The ID manifests are *production* artifacts. After generation, a text-keyed
   `manifest.json` must be emitted for the engine, or chapter pages will keep
   falling through to browser TTS even with all files present. This is a
   publishing step, not a content change.
2. Because the engine keys by text, identical German strings in different
   chapters share one clip. The ID manifests intentionally do not: they render
   per ID. That is the right call for per-line replay, but it means the corpus
   contains some duplicate audio, which is a cost question, not a defect.

## Generator gaps found
- `scripts/lib/collect-content.ts` scans exactly one legacy file, `chapter/chapter-data.js`. It never sees the 258 real chapter files, so the existing generator cannot produce this corpus.
- It guesses speaker gender from a hard-coded 20-name list, defaulting everyone else to female. Against the real cast this would misvoice a large share of male speakers. The ID manifests carry explicit `gender`/`voice`, so generation must be manifest-driven.
- It never assembles the Reading passage — it only collects individual reading tokens and per-token example sentences.
- **Voice-ID conflict:** `generate-audio.ts` defaults `TTS_VOICE_MALE` to `de-DE-Neural2-B`, while `kw-tts-config.js` and both ID manifests say `de-DE-Neural2-D`. Set `TTS_VOICE_MALE=de-DE-Neural2-D` before any run, or the male half of every dialogue comes out in the wrong voice.
- `speakingRate` is hard-coded to 1.0, so per-level pacing is not expressible.

---

# PHASE 2 — Audio types defined

New files, all additive:

| File | Purpose |
|---|---|
| `audio-manifests/voice-policy.json` | one place for voices, per-level rate, audio config, hash rules |
| `audio-manifests/reading-manifest.json` | 258 entries |
| `audio-manifests/speaking-manifest.json` | 1277 entries |
| `audio-manifests/audio-pilot-manifest.json` | the 40 pilot units |
| `scripts/generate-from-manifest.ts` | manifest-driven generator (new; nothing existing modified) |

## ID and filename convention
`LEVEL_CCC_Tnnn` — level, zero-padded chapter number, type letter, unit number.

| Type | Letter | Example | File |
|---|---|---|---|
| Story | `S` | `A1_015_S001` | `audio/story/A1_015_S001.mp3` |
| Listening | `L` | `A1_015_L001` | `audio/listening/A1_015_L001.mp3` |
| Reading | `R` | `A1_015_R001` | `audio/reading/A1_015_R001.mp3` |
| Speaking | `P` | `A1_015_P001` | `audio/speaking/A1_015_P001.mp3` |

`R001` leaves room for multi-passage Reading later without renumbering.
Filenames derive from the ID alone, so text edits never orphan or rename a file —
`contentHash` is what says "re-render this one".

Verified across all five manifests together: **19,963 entries, 19,963 unique IDs,
19,963 unique filenames.** Zero collisions, zero overwrite risk.

## Voice policy
- female `de-DE-Neural2-F` · male `de-DE-Neural2-D` · `de-DE`, MP3, 24 kHz, pitch 0.0.
- Story and Listening: voice follows the speaker's `gender` field, from the manifest, never guessed.
- Reading: single narrator, `de-DE-Neural2-F`, for all 258 chapters. No per-chapter variation.
- Speaking: `de-DE-Neural2-F` for all 1277 model answers.
- Per-level `speakingRate`: **A1/A2 0.85**, **B1/B2 0.95**, **C1/C2 1.0**. Advanced levels are not artificially slowed.

## Content hashes
- Story and Listening keep their existing rule, `sha256(de + "::" + voice)` truncated to 16 hex. Unchanged.
- Reading and Speaking use `sha256(de + "::" + voice + "::" + speakingRate)`, because rate is part of what gets rendered.
- The generator recomputes the hash before every call and **refuses to synthesize a row whose hash disagrees with its text**. A stale manifest row can't become an audio file.

## Text handling
Text is sent verbatim as `input.text`. No SSML rewriting, no simplification, no
re-punctuation, no lexicon substitution. Umlauts, ß and compounds pass through
unchanged. Punctuation already in the source produces the pauses.

---

# PHASE 3 — Pilot work order (staged, not run)

**40 units**, which is what your own per-level numbers add up to
(4 levels × 4 types × 2, plus 2 levels × 4 types × 1). The "roughly 48" in the
brief only reaches 48 if "2 Story" means two whole dialogues rather than two lines —
say the word and I will re-cut it that way (~180 lines).

Selection is deliberate, not the first N: for each level, Story and Listening take
one female and one male line to exercise both voices; Reading takes the shortest
and longest passage in the level; Speaking takes the shortest question and the
longest statement. Every unit is tagged with the pronunciation features it covers
(umlaut, ß, compound, question, subordinate clause, short, long).

Story: 10 · Listening: 10 · Reading: 10 · Speaking: 10.

Coverage across the 40: 36 umlaut, 13 ß, 25 question, 24 compound ≥13 chars,
33 subordinate clause; 17 to 922 characters.

### Exact pilot IDs

**Story (10)** `A1_034_S007` `A1_026_S008` `A2_011_S003` `A2_022_S003` `B1_029_S005` `B1_003_S005` `B2_023_S001` `B2_068_S003` `C1_003_S002` `C2_016_S004`

**Listening (10)** `A1_042_L001` `A1_039_L001` `A2_017_L001` `A2_019_L001` `B1_012_L001` `B1_007_L001` `B2_064_L001` `B2_050_L001` `C1_019_L002` `C2_019_L002`

**Reading (10)** `A1_010_R001` `A1_044_R001` `A2_032_R001` `A2_020_R001` `B1_033_R001` `B1_001_R001` `B2_043_R001` `B2_001_R001` `C1_026_R001` `C2_024_R001`

**Speaking (10)** `A1_022_P001` `A1_047_P001` `A2_031_P006` `A2_003_P002` `B1_009_P002` `B1_033_P006` `B2_068_P003` `B2_018_P006` `C1_042_P002` `C2_022_P002`

Full text, voice, rate, features and hash per unit: `audio-manifests/audio-pilot-manifest.json`.

### What the generator does per run
Writes `public/audio/<type>/<ID>.mp3`; skips files that already exist unless
`--force`; rejects any response under 1 KB as a failed render; and writes a receipt
to `audio-manifests/generation-runs/<timestamp>.json` listing every unit with byte
size, voice, rate and status, plus any suspiciously short file. That receipt is what
answers report items 13–16.

---

## Intentionally receiving no audio

| What | Why |
|---|---|
| `speaking[].task` / `taskEn` (134 English prompts) | English instruction text — never spoken |
| `speaking[].en`, `reading.translation`, all `hi` fields | English/Hindi glosses — never spoken |
| 4 B2 Goethe checkpoints (`b2-14`, `b2-26`, `b2-36`, `b2-43`) for Story | `story: null` by design; nothing authored to voice |
| Reading/Speaking token-level `ex` example sentences | vocabulary-layer content, already served by the existing vocab pipeline |
| Vocabulary bulk | already generated and on the CDN; awaiting your approval before any re-run |

Nothing was invented to fill a gap.

## Open decisions for you

1. **The 1143 German `speaking[].task` prompts.** They are learner-facing German — often a spoken line the learner is meant to react to ("Auf einer Feier fragt jemand: Was ist dein Beruf?"). Voicing them would add ~1143 units and make Speaking feel like a real exchange. Not in this pilot; your call.
2. **Per-level rate for Story/Listening.** Applying 0.85/0.95/1.0 there too would mean extending their hash rule, and those manifests are frozen. Say so and I will do it in one pass.
3. **Text-keyed `manifest.json` publishing step.** Required for the engine to find any of these files. Mechanical, but it needs to be scheduled.
4. **Pilot size.** 40 units as specified, or ~180 if "2 Story" means whole dialogues.

## Full-corpus size, once approved
Story 1775 · Listening 1081 · Reading 258 · Speaking 1277 = **4391 new files**,
on top of the 15,572 vocabulary entries already generated.
