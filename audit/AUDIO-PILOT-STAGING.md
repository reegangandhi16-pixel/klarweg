# Pilot staging + generator architecture — post-approval state

Date: 2026-09-08 · Policy: `audio-manifests/voice-policy.json` (v2)

**No audio has been rendered.** All four approved decisions are implemented in the
manifests and the generator; the pilot is staged and integrity-verified. The render
itself needs a TTS credential and a Node run, which I cannot execute (see "How to
run the pilot"). Nothing was generated in bulk. No dialogue, reading, speaking,
vocabulary, grammar, lexicon or resolver content was modified. No clickability scan.

---

## What changed with this approval

### 1. Speaking task prompts — now voiced
Speaking is now **two audio units per activity**, exactly as approved:

| Unit | ID pattern | Text source | Purpose |
|---|---|---|---|
| Task prompt | `LEVEL_CCC_Qnnn` | `speaking[].task` | learner listens first |
| Model answer | `LEVEL_CCC_Pnnn` | `speaking[].de` | learner listens after producing their own |

Paired both ways via a `pairedWith` field, so the frontend can play prompt → pause → model answer without inferring anything from filenames.

**Correction to my earlier audit:** I reported 1143 German prompts and 134 English ones. That 134 was a false positive in my language heuristic — English function words like *an*, *die*, *the*-lookalikes matched German sentences. On strict re-inspection **all 1277 task prompts are German**, 0 contain Devanagari, 0 contain English instruction text. So the prompt count is **1277, not 1143**.

Speaking manifest: **2554 units = 1277 prompts + 1277 model answers.**
Still never synthesized: `taskEn`, `en`, `reading.translation`, every `hi` field. No learner answer was invented — every one of the 1277 `de` values was already authored.

### 2. Per-level rate — extended to all four types
`A1/A2 = 0.85 · B1/B2 = 0.95 · C1/C2 = 1.0`, applied uniformly to Story, Listening, Reading and Speaking. No per-sample overrides exist, and the generator now **refuses** any row whose rate deviates from its level policy.

### 3. Hash rule — one rule, documented
```
contentHash = sha256( de + "::" + voice + "::" + speakingRate ).hex.slice(0, 16)
```
Applies to all four chapter manifests. Voice and rate are part of artifact identity, so identical German at a different rate or in a different voice can never collide with an existing render.

- Supersedes the v1 Story/Listening rule `sha256(de + "::" + voice)`.
- All **2856** Story + Listening rows were rehashed under v2. **No German text was altered** — only the `speakingRate` field was added and the hash recomputed.
- Verified: 1775 + 1081 + 258 + 2554 rows, **0 hash mismatches** against a fresh recomputation.
- Vocabulary keeps its own `sha256(text)` scheme, untouched.

### 4. Text-keyed production manifest — held
Not generated, not published. It stays blocked until the eight pilot verification steps pass. The generator has no code path that emits it, so a partial production manifest cannot be published by accident.

### 5. Male voice conflict — fixed
`scripts/generate-audio.ts` line 35 defaulted `TTS_VOICE_MALE` to `de-DE-Neural2-B`. Changed to **`de-DE-Neural2-D`**. Both ID manifests carry D on every male line (0 mismatches, 0 B-voice rows), and the new generator hard-fails on any voice outside the approved pair, so B cannot re-enter chapter audio.

**One thing needs your ruling:** the already-generated vocabulary corpus uses **`de-DE-Neural2-B` for all 7,786 male entries** (7,786 F + 7,786 B = 15,572). Those files exist and are live on the CDN. Retiring B there means re-rendering 7,786 files and rehashing that manifest — a vocabulary-system change, which you told me not to make. I left it alone. Either the vocab male voice stays B as a documented exception, or it gets re-rendered as D for consistency with chapter audio. Your call; nothing is blocked either way.

---

## Pilot staging — v2, whole conversational units

`audio-manifests/audio-pilot-manifest.json` · **48 units → 174 files**

| Type | Units | Files | Composition |
|---|---|---|---|
| Story | 12 | 87 | 2 complete dialogues per level, all lines |
| Listening | 12 | 51 | 2 complete listening units per level, all lines |
| Reading | 12 | 12 | 2 complete passages per level |
| Speaking | 12 | 24 | 2 activities per level × (prompt + model answer) |

Every Story and Listening unit is a **whole dialogue** — nothing is excerpted, so each one can be judged as a conversation and both voices are exercised inside every unit (all 24 dialogue units carry F+D).

Selection is by coverage, not by position: for each level the richest-feature chapter plus the shortest one, so pacing contrast is inside every level. Reading takes the shortest and longest passage; Speaking takes the feature-richest activity in two chapters at different points in the level.

Feature coverage across the 174 files: **84 umlaut · 42 compound (≥13 chars) · 56 question · 33 subordinate clause · 16 ß · 8 numerals · 4 typographic quotes „ “**. Includes Goethe exam-format material at A2, B1, B2, C1 and C2.

### Pilot units

**Story (12 dialogues / 87 lines)**
A1 `a1-34-schreiben` (10) · `a1-9-verben` (7) — A2 `a2-11-wenn` (8) · `a2-15-positions-richtungsverben` (8) — B1 `b1-3-konjunktiv2-hoefliche-bitten` (9) · `b1-25-stellung-von-nicht` (7) — B2 `b2-67-argumentieren-gegenargumente` (6) · `b2-56-modalpartikeln-eben-halt` (6) — C1 `c1-20-relativsaetze-erweitern-und-variieren` (6) · `c1-33-goethe-mini-5` (6) — C2 `c2-01-zeitformen-der-verben` (8) · `c2-15-partizipien-als-adjektive` (6)

**Listening (12 units / 51 lines)**
A1 `a1-42-welcher-dieser` (6) · `a1-9-verben` (4) — A2 `a2-10-goethe-mini-1` (5) · `a2-14-wechselpraepositionen` (4) — B1 `b1-12-adjektivdeklination-wiederholung` (4) · `b1-28-passiv-praesens-praeteritum-perfekt` (4) — B2 `b2-25-verbindungsadverbien` (4) · `b2-55-modalpartikeln-doch-ja` (4) — C1 `c1-26-passiv-und-passiversatzformen` (4) · `c1-25-partizipien-und-adjektive-als-nomen` (4) — C2 `c2-03-verben-und-ihre-ergaenzungen` (4) · `c2-16-nominalisierte-adjektive-und-partizipien` (4)

**Reading (12 passages)**
`A1_044_R001` `A1_010_R001` `A2_020_R001` `A2_032_R001` `B1_006_R001` `B1_033_R001` `B2_065_R001` `B2_043_R001` `C1_002_R001` `C1_035_R001` `C2_005_R001` `C2_025_R001`

**Speaking (12 activities / 24 files — each `_Q` prompt + `_P` answer)**
`a1-18-irregular` · `a1-39-ortsangaben` · `a2-16-goethe-mini-2` · `a2-31-w-fragen-praepositionen` · `b1-16-futur1` · `b1-31-adjektive-als-nomen` · `b2-14-goethe-mini-test-1` · `b2-49-passiv-in-wissenschaft-und-beruf` · `c1-09-adjektive-mit-praepositionalergaenzungen` · `c1-31-adversativangaben-und-gegensaetze-ausdruecken` · `c2-06-konjunktiv-ii` · `c2-21-wortbildung-der-adjektive`

Every one of the 174 per-file IDs, with its exact German text, voice, rate, byte-level filename and hash, is in `audio-pilot-manifest.json`.

### Staging integrity — verified
- 174 files, **174 unique IDs**, 174 unique filenames.
- Every pilot row cross-checked against its source manifest: **0 missing, 0 text drift, 0 hash drift, 0 pilot/manifest mismatch**.
- Across all five manifests together: **21,240 entries, 21,240 unique IDs, 21,240 unique filenames.** Zero collisions, zero overwrite risk.

---

## Generator architecture

`scripts/generate-from-manifest.ts` — manifest-driven, additive. The legacy `collect-content.ts` path is not used and none of its flawed assumptions survive:

| Legacy flaw | Now |
|---|---|
| scanned only `chapter/chapter-data.js` | reads the four ID manifests; the 258 real chapter files are their source |
| gender guessed from a 20-name list | gender read from the manifest; a mismatch is a hard failure, never a guess |
| Reading passage never assembled | passages pre-assembled from `reading.tokens[].w` into the reading manifest, punctuation attached without a leading space |
| male voice defaulted to Neural2-B | approved pair enforced; unapproved voice throws |
| `speakingRate` hard-coded 1.0 | per-level rate from policy; deviation throws |

Three gates before any API call: **voice/gender check**, **rate-vs-policy check**, **hash-vs-text check** — a stale manifest row cannot become an audio file. Responses under 1 KB are rejected as failed renders. Each run writes a receipt to `audio-manifests/generation-runs/<timestamp>.json` with per-file byte size, voice, rate and status.

Text is sent verbatim as `input.text`. No SSML, no simplification, no re-punctuation, no lexicon substitution.

### How to run the pilot
```
export TTS_VOICE_MALE=de-DE-Neural2-D            # matches policy; B is retired
npx tsx scripts/generate-from-manifest.ts --pilot --dry-run
npx tsx scripts/generate-from-manifest.ts --pilot
```
Output: `public/audio/{story,listening,reading,speaking}/<ID>.mp3` — 174 files, MP3, 24 kHz, pitch 0.0.

---

## Pilot report — items answerable now

1. **Pilot IDs** — above; all 174 in `audio-pilot-manifest.json`
2. **Complete Story dialogues** — 12 (87 lines)
3. **Listening** — 12 units (51 lines)
4. **Reading** — 12 passages
5. **Speaking** — 12 activities (24 files)
6. **Speaking task prompts** — 12 in the pilot; 1277 in the full corpus
7. **Male voice** — `de-DE-Neural2-D`
8. **Female voice** — `de-DE-Neural2-F`
9. **Per-level rate** — 0.85 / 0.85 / 0.95 / 0.95 / 1.0 / 1.0
10. **Format** — MP3
11. **Sample rate** — 24000 Hz, pitch 0.0
12. **Hash rule** — `sha256(de::voice::speakingRate)` → 16 hex, all four manifests
13. **File structure** — `public/audio/<type>/<LEVEL>_<CCC>_<S|L|R|Q|P><nnn>.mp3`
14. **Generator changes** — table above; `generate-audio.ts` male default B → D
15–19. **Failed files · pronunciation · pacing · voice consistency · frontend resolution** — require rendered audio
20. **Ready for approval** — staging is ready; the audio itself is not yet rendered

## Full corpus, once the pilot is approved
Story 1775 · Listening 1081 · Reading 258 · Speaking 2554 = **5668 files**, plus the 15,572 vocabulary entries already generated.
