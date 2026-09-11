# Klarweg MASTER AUDIO AUDIT

Generated 2026-09-09. **Inventory + audit only — no audio was generated, no chapter data was modified.**

Source of truth: the current project. Every number below comes from `chapter/chapter-*-data.js`
rendered through `chapter/chapter-app.js`, cross-checked against the **live rendered DOM of all
259 chapter pages** (`chapter/_audio-scan-harness.html`) and **2,801 real word popups** opened by
clicking words on 30 pages across all six levels (`chapter/_popup-probe-harness.html`).

## Headline

```
Pages scanned                        259   (0 load errors)
Chapters / data sets scanned         258
Clickable German spans observed   195,661   → 16,131 unique surfaces
Word popups opened and read         2,801   → 6,286 paradigm form controls read

Unique audio assets required       40,095
  chapter audio                    20,322
  word-popup layer                 19,773
Audio-control occurrences          32,759   (chapter sections)
                                  195,661   (clickable-word popups, one .wp-audio each)

Existing valid assets               8,867   assets the runtime can actually serve today:
                                             8,850 vocabulary files (4,425 terms × 2 voices) on the live CDN
                                                17 of the 126 text-keyed pilot clips match a required text
Recoverable without synthesis       4,970   2,485 required A1/A2 terms × 2 voices that EXIST but are
                                             stranded on manifests the engine no longer loads (finding 6)
Missing assets                     26,258   required, and nothing exists anywhere
Unreferenced / obsolete assets     10,367   9,956 CDN vocabulary files (4,978 terms not in current data)
                                           +   109 pilot text clips no control requests
                                           +   302 stranded files for terms not in current data
Duplicate assets                        0   after canonical dedupe (2,697 assets are shared by >1 occurrence)
Assets in data with NO control       1,963   1,277 speaking task prompts + 1,081 authored listening lines (dedupes to 1,963)
```

### Assets by type

```
Vocabulary (headword, F+M)         15,590      7,795 terms × 2 voices
Vocabulary form/conjugation             0      the vocab CARD exposes no form buttons —
                                               forms live in the word popup (below)
Vocabulary example sentences            0      no sentence control; each word is individually clickable
Story dialogue lines                1,773      from 1,775 occurrences
Grammar example lines                 114      from 115 occurrences (only A1 ×3, B1 ×112 author `example`)
Reading passages                      258      one whole-passage request per chapter
Listening sentences                 1,358      from 1,387 transcript-sentence requests
Speaking model answers              1,229      from 1,277 occurrences
Clickable-word popup headwords     15,903
Paradigm form buttons (net new)     3,870      of 14,452 form targets, 10,582 are already covered
Exercises                               0      verified: zero audio controls on all 259 pages
Quiz                                    0      verified: zero audio controls
```

### By level

| Level | Chapters | Vocab headwords | Vocab forms | Vocab examples | Story | Grammar | Reading | Listening | Speaking | Exercises | Quiz | Unique assets | Control occurrences |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A1 | 47 | 1,931 | 0 | 0 | 437 | 3 | 47 | 327 | 141 | 0 | 0 | 4,802 | 6,962 |
| A2 | 35 | 1,525 | 0 | 0 | 276 | 0 | 35 | 180 | 181 | 0 | 0 | 3,722 | 5,530 |
| B1 | 35 | 2,014 | 0 | 0 | 239 | 111 | 35 | 211 | 237 | 0 | 0 | 4,856 | 7,259 |
| B2 | 69 | 2,542 | 0 | 0 | 381 | 0 | 69 | 326 | 363 | 0 | 0 | 6,215 | 8,917 |
| C1 | 43 | 211 | 0 | 0 | 259 | 0 | 43 | 192 | 209 | 0 | 0 | 1,125 | 1,440 |
| C2 | 29 | 671 | 0 | 0 | 181 | 0 | 29 | 130 | 146 | 0 | 0 | 1,828 | 2,651 |
| **ALL** | **258** | **8,894** | **0** | **0** | **1,773** | **114** | **258** | **1,366** | **1,277** | **0** | **0** | **20,322** | **32,759** |

Level rows count each level separately; the ALL row is the cross-level canonical dedupe
(e.g. 8,894 per-level vocabulary headwords collapse to 7,795 unique terms, 15,590 assets with both voices).
The word-popup layer (19,773 assets) is global and level-independent, so it is not split by level.

## The nine findings that matter

**1 · Story audio can never resolve as generated.** The play button requests
`tokens.filter(!plain).join(' ')` — punctuation tokens are dropped, so the runtime asks for
`"Herzlich willkommen Ich bin Frau Weber"`. `story-dialogue-manifest.json` stores
`"Herzlich willkommen! Ich bin Frau Weber."`. **0 of 1,767 required story texts match the manifest.**

**2 · Reading has the same defect.** 0 of 258 required passage texts match `reading-manifest.json`
for the same punctuation-dropping reason.

**3 · Listening is keyed on the wrong unit.** The player calls `speakSequence(transcript)`, which
splits on `.!?` — 1,387 sentence requests. The frozen manifest holds 1,081 *dialogue lines*.
794 match, **542 required sentences are absent**, 284 manifest lines are never requested.

**4 · Speaking is the one clean section.** All 1,229 required model answers exist verbatim in
`speaking-manifest.json`. But its 1,277 `task-prompt` rows are unreachable: the UI has no control
for `speaking[].task`.

**5 · No chapter audio exists anywhere.** Live probes of the CDN return 404 for
`audio/story/…`, `audio/listening/…`, `audio/reading/…`, `audio/speaking/…` and for the
hash-named vocabulary paths in `vocabulary-manifest.json`. The only chapter-audio the runtime can
serve today is the 126-entry pilot manifest on jsDelivr.

**6 · Root cause of the A1/A2 problem.** `kw-audio-engine.js` now loads exactly one vocabulary
manifest — `reegangandhi16-pixel.github.io/klarweg-audio-cdn/manifest.json`, 9,403 keys — and that
file does not contain `der Apfel`, `das Buch` or the rest of the A1 core. The audio *exists*:
`a1-words-manifest.json` (1,902 entries) and `a2-words-manifest.json` (1,444) are still live on the
jsDelivr CDN and their files return 200 (`der Apfel` → `audio/words/female/ffb93ae3703c904b.mp3` —
the same sha256 id the project's vocabulary manifest uses). The engine simply never fetches them.
**3,287 dual-voice entries (6,574 files) are stranded**. Of the 7,795 required vocabulary terms:
**4,425 are reachable on the live CDN, 2,485 exist only on the stranded manifests** (recoverable by
re-wiring the engine, no synthesis needed) and **885 have no audio anywhere**.

**7 · The two CDNs disagree on filenames.** The live vocabulary CDN uses readable names
(`audio/female/die_Chancengleichheit.mp3`); the project's `vocabulary-manifest.json` expects
`audio/vocab/female/<sha16>_F.mp3`. Either the manifest or the CDN layout has to move.

**8 · Broken references in the repo.** `public/audio/a1|a2|b1-words-manifest.json` (3,502 entries)
point at `/audio/words/{female,male}/…`, directories that do not exist in the project — and no page
loads those manifests any more. `public/audio/kw-audio.js` is dead code (no page loads it).

**9 · Clickability defects surfaced by the scan.** 53 clickable spans are not German lexical
content (English fragments — `opinion`, `viewpoint`, `Deadline`, `Small`, `Talk` — and
punctuation-only spans); 32 single letters, 6 numerals, 2 spelled-out strings and 156 proper names
are also clickable. The 53 non-German spans are excluded from generation and listed in
`audio-inventory-words.json → excludedFromGeneration`. One real popup defect was caught:
clicking `TSAIT` (a pronunciation hint) renders the paradigm of an unrelated lexeme (`Kurs / Kurse`).

## Policy gaps to close before generation

- Grammar example lines have no entry in `voice-policy.json` (inventoried female @ level rate).
- Word-popup and paradigm-form audio have no entry (inventoried female @ 1.0).
- 389 listening transcript sentences cannot be matched to an authored dialogue line, so speaker
  and voice are **unresolved** and were defaulted to female.

## Deliverables

| File | Contents |
|---|---|
| `audio-inventory.json` | master record: method, control-site map, identity rules, totals, per-level summary, existing-audio audit |
| `audio-inventory-words.json` | 19,773 word-popup assets + the validation evidence and exclusion list |
| `audio-inputs.json` | 40,095 flat generation rows (`id`, `text`, `voice`, `rate`, `file`, `runtimeKey`) |
| `audit/audio-inventory/*.json` | per-family asset tables (story, listening, reading, speaking, grammar, vocabulary, unreachable) |
| `audit/audio-scan/occ-<level>.json` | every control occurrence: occurrence id, asset id, chapter, section, control selector, reachability |
| `audit/audio-scan/ch/*.json` | per-chapter extract (258 files) |
| `scripts/audio-inventory-extract.js`, `scripts/audio-word-layer.js`, `scripts/build-audio-inventory.js` | the extractors, so every number is reproducible |
| `chapter/_audio-scan-harness.html`, `chapter/_popup-probe-harness.html` | the runtime scanners |

IDs are deterministic: `sha256(text::voice::rate)[0:16]` for chapter audio, `sha256(text)[0:16]_F|_M`
for vocabulary — both verified to reproduce the existing manifests' hashes byte-for-byte.
