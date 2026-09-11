# Klarweg AUDIO INFRASTRUCTURE REPAIR

2026-09-09. **No MP3s were generated. No chapter content was modified** — not one chapter data
file, vocabulary entry, dialogue, reading passage, listening transcript or curriculum field.
Only the audio resolution layer changed: `public/audio/kw-audio-engine.js` and
`audio-manifests/voice-policy.json`.

```
259 pages scanned:                   259   (0 load errors, re-run after the repair)
Data sets:                           258

Already resolving:                17,293   of 40,095 required assets
  ├─ resolving before repair:      11,018
  └─ recovered without synthesis:   6,275   ← existing files, zero generation
New synthesis required:           22,074
Human review required:               728
Not required:                      2,016

Story resolution:              0 / 1,773   files do not exist · 1,761/1,773 keys now match
Reading resolution:              0 / 258   files do not exist · 148/258 keys now match
Listening resolution:         10 / 1,358   files do not exist · 801/1,358 keys now match
Vocabulary resolution:    13,858 / 15,590
Popup resolution:          3,425 / 15,903
Paradigm resolution:           0 / 3,870

Voice policy gaps:                     0   all 8 surfaces defined (v3 awaiting your sign-off)
Unresolved speaker cases:             15   was 389
Broken references:                     3
CDN errors:                            5   path classes returning 404
Manifest errors:                       3

Control occurrences (re-measured):31,673   rendered audio buttons across 259 pages
Popup occurrences (re-measured):  196,643   clickable German spans → 16,153 unique
Duplicates:                            0   after canonical dedupe (2,697 assets shared)
Obsolete / unreferenced:          10,367
```

**The final number of new MP3 files to synthesize is 22,074** — not 26,258. The repair took
6,275 assets off that list without generating anything, and 728 more are held back for review.

## What was repaired

**1 · A1/A2 vocabulary resolution.** The engine loaded exactly one vocabulary manifest. It now
walks a priority chain — `klarweg-audio-cdn/manifest.json` (9,403) → `a1-words-manifest.json`
(1,902) → `a2-words-manifest.json` (1,444) → `b1-words-manifest.json` — merging in declared order
so an earlier source always wins and a later manifest can only *add* coverage, never repoint a term
that already plays. Each source keeps its own base URL, because the two CDNs store paths
differently (`audio/female/die_Chancengleichheit.mp3` vs `/audio/words/female/<sha16>.mp3`); the
old single-base assumption is what silently pointed those paths at a local folder. Verified live:
merged map **9,403 → 12,036 terms**, a1 contributed 1,586 new, a2 contributed 1,047.

Vocabulary assets resolving: **8,850 → 13,858**. That is **2,504 terms (5,008 assets) recovered
from files that already exist**. None were regenerated, none deleted; `voice-policy.json` now
carries a `strandedA1A2Corpus` protection clause naming them as never-synthesis targets.

**2 · Story and reading canonicalization.** Added `canonKey()`: a formatting-only equivalence that
collapses whitespace, line joining, typographic quotes/dashes/ellipses, punctuation and case, and
touches **no letter, digit, umlaut or ß** — so two genuinely different German sentences can never
share a key. Punctuation collapses to a *space*, never to nothing, so "Ja, wir" cannot become
"Jawir". Every canonical index is **collision-guarded**: if two different stored texts reduce to one
key, the key is poisoned and resolves to nothing rather than to a coin flip. 3 collisions were
found and refused. Against the frozen manifests: story **0 → 1,761 of 1,773**, reading
**0 → 148 of 258**.

**3 · Listening sentence↔line mapping.** The player requests transcript *sentences*; the manifest
stores dialogue *lines*. A stored line that is exactly one sentence may now answer that sentence's
request. A **multi-sentence line may not** — the player would replay the whole line once per
sentence, so those stay reported as genuinely missing rather than mapped. Result: 797 exact + 4
canonical = **801 of 1,358**; 557 remain genuinely missing, 284 manifest lines are never requested.

**4 · Voice policy v3.** All eight surfaces now have explicit entries: vocabulary headword, popup
headword, paradigm forms, grammar examples, story, listening, reading, speaking. Nothing was
invented — v2's voices, rates, hash rules and the frozen `de-DE-Neural2-B` vocabulary exception are
carried through verbatim; v3 only adds the surfaces v2 never covered and records the resolution
architecture, because voice and lookup key are the same decision. Speaker identity is preserved
per line from authored data for story and listening. **Status: PROPOSED — `approvedOn` is null and
no audio may be generated under v3 until you set it.**

**5 · Unresolved speakers: 389 → 15.** Resolved from authored `listening.dialogue[].gender` only —
never inferred from the German text. The remaining 15 are in 4 B2 Goethe checkpoint chapters
(`b2-14`, `b2-26`, `b2-36`, `b2-43`) whose listening monologues author no speaker metadata at all.
Full list: `audit/audio-inventory/unresolved-speakers.json`.

**6 · The 1,963 unreachable rows stay out.** 1,277 `speaking[].task` prompts and 1,081 authored
listening lines have German text but no learner-facing control. They are in
`audit/audio-inventory/unreachable.json`, are absent from `audio-inputs.json`, and are listed under
`neverSynthesized` in the policy.

## The distinction that matters most

Story, reading, speaking, grammar and paradigm audio resolve at **0** — and that is *not* a lookup
defect. Those MP3s **do not exist anywhere**. The canonical repair is verified against the frozen ID
manifests, which are generation *plans*, not published audio: when the files are rendered, they will
now be found. One gate remains — the engine resolves by text, so generated files must be published
into the text-keyed `manifest.json` (today: 126 pilot entries). Without that publishing step, a
perfect 22,074-file run would still fall through to browser TTS.

## A–E

| | Category | Assets |
|---|---|---|
| **A** | Already available and correctly resolving before this pass | 11,018 |
| **B** | Already available, resolver/mapping was broken — **now resolving, no synthesis** | 6,275 |
| **C** | Missing, safely generatable from existing chapter data | **22,074** |
| **D** | No safe source / needs human review | 728 |
| **E** | Not required — no learner-facing audio control exists | 2,016 |

**C by family:** vocabulary 1,264 · story 1,773 · listening 1,333 · reading 258 · speaking 1,229 ·
grammar 114 · popup headwords 12,233 · paradigm forms 3,870.

**D breakdown (728):** 468 vocabulary assets whose text cannot be spoken as authored — slash
alternations (`der/die/das`, `ein/eine`), ampersands (`& Co`), parenthetical qualifiers
(`geben (Unterricht)`); 245 word-layer assets that are bare numerals, single letters, spelled-out
strings (`B-U-C-H`) or pronunciation hints (`TSAIT`, `AP-fel`); 15 unresolved listening speakers.
84 further flagged vocabulary terms already resolve to existing audio and were left alone.

**E breakdown (2,016):** 1,963 unreachable data rows + 53 clickable spans that are not German
lexical content (English fragments — `opinion`, `viewpoint`, `Deadline`; punctuation-only spans).
Those 53 are UI clickability defects, not audio targets.

## Remaining defects (not repaired — outside the resolution layer)

- **3 broken references:** `b1-words-manifest.json` is not published on the CDN (the engine falls
  back correctly); `vocabulary-manifest.json` expects `audio/vocab/{female,male}/<sha16>_F.mp3`
  while the live CDN serves `audio/{female,male}/<readable_term>.mp3` — one of the two must move;
  `public/audio/kw-audio.js` is dead code loaded by no page.
- **5 CDN 404 path classes:** story, listening, reading, speaking and the hash-named vocabulary
  directory.
- **3 manifest errors:** 3 canonical collisions refused; no grammar manifest has ever existed
  (114 rows); 284 listening manifest lines that no control requests.

## Outstanding verification — now closed

The 259-page scanner was re-run in full after the engine change: **259/259 pages, 0 load errors**.
Rendered audio controls: 27,729 vocabulary (exactly 3 × 9,243 cards, which independently confirms
the three-controls-per-card model) · 1,775 story lines · 254 play-all · 117 grammar lines · 259
reading · 259 listening players · 1,280 hear-model · **0 in exercises, quiz and writing** —
**31,673 control occurrences**, plus **196,643** clickable-word spans over **16,153** unique
surfaces.

**No control count moved as a result of the engine change**, which is what the repair predicted:
controls are rendered from chapter data and are structurally independent of the resolver. That is
now proven rather than assumed. The span delta against the pre-repair pass (+982 spans, +22 unique
surfaces) traces to the project having 259 chapter *pages* but 258 chapter *data sets* — one page
reuses a data set and renders a second copy of its controls. One review item follows: diff those
22 surfaces into the word-popup layer before generation (at most 22 extra popup assets; it does not
move the C-set arithmetic). Detail: `audit/audio-scan/_rescan-post-repair.json`.

## Files

`audit/audio-scan/_live-resolution.json` (live per-family resolution + before/after baseline) ·
`audit/audio-scan/_rescan-post-repair.json` (the post-repair 259-page re-run) ·
`audit/audio-scan/_canon-resolvability.json` (canonical-key recovery per section) ·
`audit/audio-scan/_canon-fails.json` (every text the canonical key deliberately refused) ·
`audit/audio-scan/_ab-split.json` (before/after per family) ·
`audit/audio-inventory/unresolved-speakers.json` · `audit/_audio-resolution-check.html` ·
`audio-manifests/voice-policy.json` (v3) · `public/audio/kw-audio-engine.js`.

`audio-inputs.json` still holds all 40,095 rows and must be filtered to the C set (22,074) before
any generation run.
