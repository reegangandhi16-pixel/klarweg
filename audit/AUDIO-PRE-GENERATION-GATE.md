# Klarweg PRE-GENERATION GATE

2026-09-10. **No MP3s generated. No TTS called. No CDN change. No chapter content modified.**
Changes this pass: inventory files only, plus one JSON syntax repair in `voice-policy.json`.

## Final pre-generation inventory

```
A — already resolving:            11,018
B — recovered without synthesis:   6,275
C — NEW synthesis required:       22,083
D — human review remaining:          646
                                 ───────
Total unique required assets:     40,022   ✓ A + B + C + D = 40,022

E — not required:                  2,016   (sits outside the required total by definition)
Total inventory including E:      42,038
```

`C = 22,083` is the number to synthesize. It moved by +9 from 22,074, not by the −82 you might
expect: the 82 reconciled assets came out of D, and the 9 new ones came from a chapter the first
scan never read.

**Pages scanned: 259 · Data sets: 259** — not 258. That correction is finding 1.

## 1 · The 22-surface delta, reconciled

It was not render variance and not a reuse. **No data set is loaded by more than one page.**

| | |
|---|---|
| Page | `chapter/chapter-a1-3-nominativ.html` |
| Data set | `chapter/chapter-data.js` — the **legacy** filename |
| Chapter | `a1-3-nominativ` · A1 · "Der Nominativ" |

The first pass globbed `chapter-<id>-data.js` and this file does not match that pattern, so its
chapter was scanned in the *runtime* pass (which is why the surfaces appeared) but never in the
*data* pass (which is why the inventory lacked its assets). It is a genuinely distinct chapter, and
it collides on number with `chapter-a1-3-zahlen-data.js` — both are A1 chapter 3.

**The 22 surfaces: all already represented. 0 missing, 0 to add.** Its clickable words and paradigm
forms resolve to word-popup assets that already exist in `audio-inventory-words.json`
(`newClickableWords: 0`, `newParadigmForms: 0`) — expected, since A1 nominative vocabulary is shared
with other A1 chapters. **No change needed to the word layer.**

**But its authored sections were missing 9 assets**, now merged: 2 grammar, 1 reading, 4 listening,
2 speaking (e.g. `Der Hund schläft.`, `Die Frau trinkt Kaffee.`). Shards updated — grammar
114→116, reading 258→259, listening 1,358→1,362, speaking 1,229→1,231.

**One real defect caught and fixed.** Because both chapters are "A1 chapter 3", **32 occurrence IDs
collided** — `A1_003_VF001` would have been claimed by two different chapters, exactly the
non-deterministic ID risk you warned about. Fixed with a pinned override
(`a1-3-nominativ → 003B`), so the already-inventoried chapter keeps its IDs and no existing ID
churns. Collisions now **0**; new IDs read `A1_003B_VF001`. Pinned explicitly rather than derived,
so the mapping cannot drift with file order. **No duplicate or incorrect audio IDs would be
generated** — asset IDs are content hashes and were never at risk; only occurrence IDs were.

## 2 · Human review: 728 → 646

**D before: 728 · D resolved: 82 · D remaining: 646**

Resolved deterministically from existing data: **41 vocabulary terms** written as head + a
parenthetical sense gloss (`geben (Unterricht)`, `frei (Termin)`, `haben (Perfekt)`) whose **bare
head is already its own inventory term**. The gloss disambiguates a sense for the reader; it is not
spoken. Those cards share the bare-head asset — 41 terms × 2 voices = **82 assets left D and left
the required count as reusable**, with no synthesis.

Retained in D, grouped by reason — complete list in `audit/audio-inventory/human-review-D.json`
(730 flagged rows with stable ID, chapter, section, text, type, reason, proposed voice, proposed
source and uncertainty class; 84 of those rows already resolve to existing audio and need no
action, giving the 646):

| Reason | Rows | Uncertainty | Why it cannot be resolved from data |
|---|---|---|---|
| slash-alternation | 444 | lexical | 222 terms (`der/die/das`, `ein/eine`). Alternates are **not** separate inventory terms, so there is no asset to share and no way to know whether the card speaks one alternate, all of them, or a merged phrase. Needs an authoring decision. |
| symbolic | 191 | pronunciation | popup surfaces containing slashes, ampersands or parentheses |
| single-letter | 32 | pronunciation | alphabet-chapter letters — letter name vs phoneme is a teaching decision |
| parenthetical-qualifier | 24 | lexical | 12 terms whose bare head is not itself a term (`orientieren (sich)`, `qm (Quadratmeter)`) |
| no-speaker-metadata | 15 | speaker | 4 B2 Goethe checkpoints author no speaker field. **Gender was not inferred from the German text.** |
| phoneme-or-interjection | 14 | pronunciation | `ts`, `sch`, `Hmm`, `TSAIT` — none in the dictionary, no pron/IPA anywhere |
| numeral | 6 | pronunciation | bare years/postcodes (`1961`, `10115`) — digit-by-digit vs cardinal |
| spelled-out | 2 | pronunciation | `B-U-C-H`, `K-Ä-S-E` |
| ampersand | 2 | lexical | `& Co` |

I checked the lexicon for a rescue on the pronunciation group: of the flagged items only 15 have a
lexicon entry at all and **none carry a `pron` or `ipa` field**, so there is no deterministic
reading to lift. Guessing was the alternative and I did not take it.

## 3 · Voice policy v3 — final

All nine families are explicitly assigned. Nothing was invented: v2's voices, rates, hash rules and
the frozen `de-DE-Neural2-B` vocabulary exception carry through verbatim; v3 only fills the surfaces
v2 never covered. One repair this pass: a **missing comma** in the `paradigm-forms` block that would
have made the file unparseable at pipeline start.

| Audio family | Voice | Rate | Source of decision |
|---|---|---|---|
| Vocabulary headword | F `de-DE-Neural2-F` · M `de-DE-Neural2-B` | 1.0 | v2, unchanged. Male is the frozen legacy voice — the 7,795-term corpus is already rendered in it |
| Vocabulary form / conjugation | `de-DE-Neural2-F` | 1.0 | v3. Cells call `Audio.speak()` with no gender → single-voice manifest; pinned female so a grid stays in one voice |
| Vocabulary popup word | `de-DE-Neural2-F` | 1.0 | v3. Popup calls `speakWordFemale()` unconditionally |
| Vocabulary example | — none — | — | **Not a production target.** Verified across 259 pages: no audio control. Words are individually clickable |
| Grammar examples | `de-DE-Neural2-F` | by level | v3. Explanatory narration, same register as reading; no speaker involved |
| Story / dialogue | per speaker: male → `Neural2-D`, female → `Neural2-F` | by level | v2 + authored `story.dialogue[].speaker` / `femaleSpeakers`. **Never inferred from names** |
| Reading | `de-DE-Neural2-F` | by level | v2. Single narrator, all 259 chapters |
| Listening | per speaker from authored `listening.dialogue[].gender` | by level | v2 + authored data. Unresolved → review, never guessed |
| Speaking model answer | `de-DE-Neural2-F` | by level | v2. Scope narrowed: `speaking[].task` has no control, so its 1,277 rows are not targets |

Rates: A1/A2 0.85 · B1/B2 0.95 · C1/C2 1.0. Vocabulary is rate 1.0 — single words, not connected
speech. Long-press Slow/Very-slow change `playbackRate` on the same file and must **never** be
rendered as separate assets.

**`approvedOn` is `null`. I have not marked it approved.**

## 5 · Text-keyed manifest strategy — confirm before generating

The engine resolves by **text**, not by filename. A generated file that is not published into a
text-keyed manifest is unreachable regardless of how correct it is. Today `manifest.json` holds 126
pilot entries. So the pipeline must, per family: render → upload → **write `{normalized text →
path}` into the published manifest** → re-run `audit/_audio-resolution-check.html` to confirm the
count moved. Vocabulary is the exception: it resolves through the dual-voice vocab manifests, whose
readable-filename layout disagrees with `vocabulary-manifest.json`'s hash layout — **one of those
two must move before any vocabulary run.** This is the item I most want your decision on, because
it determines the upload paths for all 22,083 files.

## What I need from you

1. **Approve `voice-policy.json` v3** — set `approvedOn`. Generation is blocked on this.
2. **Confirm `C = 22,083`** as the synthesis count.
3. **Decide the 646 D items** — or approve generating C without them (they are already excluded
   from `audio-inputs.json` filtering). The 222 slash-alternation terms are the one group that
   needs an authoring call rather than a pronunciation call.
4. **Confirm the manifest strategy**, including the vocabulary filename-layout conflict.
5. Note that `audio-inputs.json` still lists all 40,095 pre-reconciliation rows and must be
   regenerated to the C set before a run — say the word and I'll emit exactly the 22,083.

## Files

`audit/audio-scan/_final-arithmetic.json` (A–E with checksum) ·
`audit/audio-inventory/human-review-D.json` (all 730 flagged rows) ·
`audit/audio-scan/_delta-259th.json` (the reconciliation, per asset) ·
`audit/audio-scan/_d-reduction.json` · `audit/audio-scan/_page-dataset-map.json` ·
`audit/audio-scan/ch/chapter-data.json` · `audio-manifests/voice-policy.json` ·
`chapter/_surface-reconcile.html`.
