# Klarweg PRODUCTION GATE

2026-09-10. **No TTS called. No MP3 generated. No CDN upload. No production manifest deployed.
No chapter, grammar, vocabulary or curriculum data modified.** Dry-run only.

## Final arithmetic

```
A — already resolving:            11,018
B — recovered without synthesis:   6,275
C — NEW synthesis required:       21,805
D — human review (frozen):           635
                                 ───────
                                  39,733 canonical audio identities
E — not required:                  2,016   (outside the required total)
```

The **40,022** figure counted *asset rows*. Deduplicating on true rendering identity collapsed
3,033 of them onto shared files, so **39,733 files** now cover the same 40,022 rows. Nothing was
dropped — the mapping is in `audit/audio-scan/_alias-map.json`.

```
Final C count:                    21,805
Unreachable assets:                    0
Duplicate manifest keys:               0
Missing metadata:                      0
Null speaking rates:                   0
Runtime lookup failures:               0
Browser decode failures:               0
```

## 1 · The 29 collisions — resolved, resolver untouched

I traced the runtime before changing anything, and it had already solved both halves:

- **Voice selection** — `resolveInfo(text, gender)` (line 234) consults the `{female, male}` entry
  map *first* whenever a gender is passed, and `chapter-app.js:1121` shows story playback calls
  `fn(c.text, { gender: c.gender, rate })`. **Gender is already passed.**
- **Rate** — `playUrl` (line 590) sets `a.playbackRate = opts.rate`. **Rate is a playback
  parameter, not a synthesis parameter.**

So the 18 rate collisions were never a manifest problem: one file per text+voice serves every
level. That is *fewer* files, not a schema change. The 11 voice collisions use the entry shape the
vocabulary manifest already uses. **`resolverRewriteRequired: false`.**

### Fixture results — real resolver, unmodified

`audit/_variant-fixture.html` loads the shipped engine source, appends **one entry to the
`VOCAB_SOURCES` data array** (38,475 → 38,705 bytes; zero lines of resolver logic altered) and runs
the genuine code path.

| Case | Result |
|---|---|
| **Male + female variants** (`Ja bitte`) | Two **distinct** URLs selected correctly; both HTTP 200; both decoded (0.91 s / 0.82 s) ✓ |
| **Rate variants** (`Und danach`) | Same single asset for both rates; `playbackRate` 0.85 and 0.95 applied independently; decoded 0.79 s ✓ |
| **Ordinary single-asset text** (`das Experiment`) | Resolves unchanged; male request does not mis-serve the female file ✓ |
| **No overwrite** | Fixture reported `added: 4, alreadyCovered: 1` — the merge **skipped** the key that already existed and `das Experiment` still resolved from its original source ✓ |
| **No regression** | 5/5 pre-existing probes resolve, both layouts, `exact` match ✓ |

`alreadyCovered: 1` is the important line: a later manifest can only **add** coverage, never
repoint a working asset. That is the last-writer-wins guarantee, demonstrated rather than asserted.

## 2 · C validated — two real defects found

Regenerated from the live shards; the stale file was not used. Every check passes:
no item already resolves · no item belongs to D · zero duplicate asset identities · zero duplicate
manifest keys · every row has voice, rate, deterministic assetId, deterministic path, and a
runtime-reachable manifest mapping. Simulated publish of all 36,274 canonical rows: **0 unreachable
assets, 0 path collisions.**

**Defect 1 — 3,021 files would have been rendered twice.** The two ID schemes
(`sha256(text)+_F` for vocabulary, `sha256(text::voice::rate)` for everything else) generate
different IDs for *identical audio*, so a word that is both a vocabulary headword and a clickable
word was planned twice. The voice policy already forbids this ("do not render a second file for
it") — the C set was not honouring it. Now aliased to the vocabulary asset.

**Defect 2 — story/reading rows would have been synthesized without punctuation.** The UI strips
punctuation tokens, so the lookup text is `Herzlich willkommen Ich bin Frau Weber`. Sending *that*
to TTS yields punctuation-free prosody. C rows now carry a separate **`renderText`** (the authored
punctuated line) alongside `manifestKey` (the lookup key): 3,961 sentence rows recovered their
authored text from the frozen manifests.

**767 sentence rows still fall back to the stripped text** — no authored punctuated source exists
for them. They will synthesize with flat prosody unless sourced. Not a blocker for the other
21,038, but worth a decision.

### C delta 22,083 → 22,094 → 21,805

| Step | C | Cause |
|---|---|---|
| Previous estimate | 22,083 | D estimated at 646 from an assumed 84 already-resolving rows |
| Measured | **22,094** (+11) | D measured at 635. Exactly: 730 listed − 80 actually resolving − 15 speaker rows that are *occurrence*-level (no asset identity until a voice is chosen, so they cannot be an asset row in either C or D). `(80 − 84) + 15 = 11` |
| Deduped | **21,805** (−289) | 289 rows that needed synthesis turned out to be cross-family or rate duplicates of a canonical file. Of the 3,033 total aliases, 2,744 were already-resolving rows; 289 were in C |

## 3 · D — frozen, 635 rows, nothing synthesized

`HUMAN_REVIEW`, untouched. Every row preserves displayed term, chapter/page, context, alternates,
article and the reason automatic synthesis is unsafe.

```
slash-alternation       364 rows / 222 terms   NEEDS_AUTHOR_DECISION
symbolic                191                    NEEDS_AUTHOR_DECISION
single-letter            32                    NEEDS_AUTHOR_DECISION
parenthetical-qualifier  24                    NEEDS_AUTHOR_DECISION
no-speaker-metadata      15                    NEEDS_AUTHOR_DECISION
phoneme-or-interjection  14                    NEEDS_AUTHOR_DECISION
numeral                   6                    NEEDS_AUTHOR_DECISION
spelled-out               2                    NEEDS_AUTHOR_DECISION
ampersand                 2                    NEEDS_AUTHOR_DECISION
```

The 222 slash-alternation terms remain explicitly marked as requiring an author decision, with
per-term alternates and article in `audit/audio-inventory/slash-alternation-review.json`. They are
a display convention rather than an utterance, their alternates are not separate inventory terms,
and three readings are all defensible with nothing in the data to choose between them.

## 4 · Dry-run — complete pipeline simulated

Synthesis → path assignment → manifest publish → runtime resolution, all simulated. Every C asset
proved reachable through the real runtime after a simulated publish. No TTS, no MP3, no upload, no
deployment.

**Preflight is step 0:** re-run `KW_resolveInfo` against live manifests and synthesize only rows
that still fail. `audio-inputs-C.json` ships all 36,274 canonical rows so it cannot go stale.

## What I still need before GO

1. **Approve `voice-policy.json` v3** — `approvedOn` is still `null`. I have not set it.
2. **Confirm C = 21,805.**
3. **Decide the 767 rows with no authored punctuated source** — synthesize with flat prosody, or
   source the punctuated text first.
4. **Decide the 635 D items**, or approve generating C without them.

Nothing will be generated until you give the explicit production GO.

## Files

`audio-inputs-C.json` (36,274 canonical rows, `renderText` / `manifestKey` / `outputPath`,
preflight contract) · `audit/audio-scan/_alias-map.json` (3,033 shares) ·
`audit/audio-scan/_dedupe-final.json` · `audit/_variant-fixture.html` +
`audit/fixtures/variant-manifest.fixture.json` (test-only, never published) ·
`audit/_architecture-proof.html` · `audit/audio-inventory/human-review-D.json` ·
`audit/audio-inventory/slash-alternation-review.json`.
