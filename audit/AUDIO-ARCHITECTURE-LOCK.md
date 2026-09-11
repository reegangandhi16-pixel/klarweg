# Klarweg PRODUCTION ARCHITECTURE LOCK

2026-09-10. **No MP3s generated. No TTS called. No CDN upload. No manifest deployed. No chapter,
grammar, vocabulary or curriculum data modified.** Dry-run only.

## Final gate

```
A — already resolving:            11,018
B — recovered without synthesis:   6,275
C — NEW synthesis required:       22,094
D — human review remaining:          635
                                 ───────
Total required:                   40,022   ✓ A + B + C + D = 40,022
E — not required:                  2,016   (outside the required total)
```

A + B = 17,293, measured live — the same figure the independent resolution run produced, which is
the arithmetic's cross-check.

**One decision blocks publishing.** See §5: the text-keyed manifest is single-valued, but 29 texts
legitimately need more than one asset. Everything else is locked.

## 1 · Manifest architecture — the runtime already answered this

I followed the resolver instead of choosing. `resolveVocabUrl()` (engine line 361) branches on the
path shape and each merged entry carries its **own** `_base`:

```
root-relative "/audio/words/…"  → that manifest's base   (hash layout)
CDN-relative  "audio/female/…"  → the vocab CDN base     (readable layout)
```

**The disagreement is not a conflict — it is a supported feature.** The manifest key is the
**text**; the filename is opaque payload. Both layouts coexist correctly today, proven end to end
(`audit/_architecture-proof.html`):

| Term | Layout | URL | HTTP | Decoded |
|---|---|---|---|---|
| der Apfel (F) | hash | `…/audio/words/female/ffb93ae3703c904b.mp3` | 200 | ✓ 1.06 s |
| der Apfel (M) | hash | `…/audio/words/male/ffb93ae3703c904b.mp3` | 200 | ✓ 0.91 s |
| das Buch (F) | hash | `…/audio/words/female/fa8e985dfea42293.mp3` | 200 | ✓ 1.03 s |
| führen (F/M) | readable | `…/audio/female/fuehren.mp3` | 200 | ✓ 0.86 / 0.79 s |
| die Chancengleichheit | readable | `…/audio/female/die_Chancengleichheit.mp3` | 200 | ✓ 1.63 s |
| machen (M), jedoch (F) | readable | `…/audio/{male,female}/*.mp3` | 200 | ✓ |

All four claims hold: text key → manifest entry ✓ · entry → CDN asset ✓ · **browser decodes it**
(real `decodeAudioData`, not just a 200) ✓ · **8/8 chains, 8/8 decodable**.

**Sweep:** 4,438 required terms resolve via readable layout, 2,491 via hash, 866 unresolved.
120 HEAD probes across both layouts: **120 × 200, zero entries pointing at nonexistent files.**
Unreachable published assets: 5,107 terms are published but requested by no current control — the
obsolete corpus, retained not deleted, and unreachable only in the sense that nothing asks for them.

**Canonical decision — new synthesis only:** `audio/v3/<family>/<assetId>.mp3`, vocabulary
`audio/v3/vocab/<female|male>/<assetId>.mp3`. Chosen because `assetId` is the content hash, making
the path self-verifying and collision-free (39,307 rows → 39,307 unique paths, 0 collisions).
**Neither existing layout migrates** — migration would invalidate 18,806 working files to buy
nothing the resolver needs.

## 2 · Audio identity model — frozen

| Identifier | Form | Authoritative for |
|---|---|---|
| **Text key** | `normalize(text)`: collapse whitespace, straighten quotes, trim | **A) runtime lookup** — the only key the resolver reads |
| **Content hash** | `sha256(text + "::" + voice + "::" + rate)[0:16]`; vocabulary `sha256(text)[0:16]` | asset dedupe + integrity |
| **Asset ID** | the content hash; vocabulary appends `_F` / `_M` | **C) physical filename** — `audio/v3/<family>/<assetId>.mp3` |
| **Manifest key** | the text key (vocabulary: text + voice dimension) | **B) manifest key** |
| **Occurrence ID** | `<LEVEL>_<chapter#3>_<KIND><seq3>`, e.g. `A1_003B_VF001` | traceability to a specific control; never a filename |

- **Duplicates share one asset** on exact `text + voice + rate`. 2,697 assets serve >1 occurrence.
  Similar-looking text is never merged.
- **Case variants:** the resolver tries exact → lowercase → canonical, in that order. A case variant
  therefore *resolves* to the existing asset and never earns its own file.
- **Parenthetical terms:** the gloss is a reader disambiguator, not speech. When the bare head is
  its own inventory term, the card **shares** that asset (41 terms / 82 assets, excluded from C).
  When it is not, it is a D decision.
- **Slash alternatives:** never auto-resolved. No asset, no synthesis, no guess — §3.

## 3 · D finalized — all 730 rows opened and classified

Measured live, not guessed. `audit/audio-inventory/human-review-D.json`.

```
RESOLVE_EXISTING          80
SHARE_EXISTING_ASSET       0   (the 41 shareable terms left D last pass)
NEEDS_AUTHOR_DECISION    650
NOT_REQUIRED               0
```

Of the 730 listed rows, 715 carry an assetId in the current shards; **635 of those need a decision**
— the D figure above.

| Reason | Rows | Resolve existing | Needs decision |
|---|---|---|---|
| slash-alternation | 444 | 80 | 364 |
| symbolic | 191 | 0 | 191 |
| single-letter | 32 | 0 | 32 |
| parenthetical-qualifier | 24 | 0 | 24 |
| no-speaker-metadata | 15 | 0 | 15 |
| phoneme-or-interjection | 14 | 0 | 14 |
| numeral | 6 | 0 | 6 |
| spelled-out | 2 | 0 | 2 |
| ampersand | 2 | 0 | 2 |

**The 222 slash terms** — full evidence in `audit/audio-inventory/slash-alternation-review.json`
(every term, its parsed alternates, its article, per-row status). 80 rows already resolve because an
earlier corpus rendered them; 364 do not. Why automatic resolution is unsafe:

- The term is a **display convention, not an utterance**: `der/die/das` is three articles shown
  together; `ein/eine` two; `eigene/eigener` two inflected adjective endings; `der/das Sandwich` a
  genuine gender ambiguity.
- The alternates are **not separate inventory terms**, so there is no existing asset to share.
- Three readings are all defensible and **the data does not choose**: first alternate only · every
  alternate in sequence in one file · speak the slash aloud.
- Reading the slash as a pause would **teach a false form**; silently taking the first alternate
  **drops the contrast the card exists to teach**.

That is an authoring decision, so it stays with you. Nothing in D is synthesized.

## 4 · C regenerated from current source of truth

Rebuilt from the live shards + word-layer assets. **The stale 40,095-row `audio-inputs.json` was
not used.** Output: `audio-inputs-C.json`.

```
Total C count:                    22,094
Duplicate count:                       0   (39,307 candidate rows → 0 duplicate assetIds)
Missing/invalid metadata:              0
Missing pronunciation:                 0   (all 635 pronunciation-uncertain rows are in D, not C)
Missing voice assignment:              0
Missing manifest mapping:              0
Missing CDN path:                      0
```

Excluded: 715 D rows · 82 parenthetical-shared assets · 17,213 rows that already resolve.

**One defect found and fixed during the dry-run:** 15,038 vocabulary rows carried `speakingRate:
null` in the shards. Policy sets vocabulary to 1.0 (single words, not connected speech); the field
is now explicit, because a null rate reaching a TTS call is a silent-default bug.

C by family: vocabulary 15,038 · clickable-word 15,682 · word-form 3,846 · story 1,773 ·
listening 1,362 · speaking 1,231 · reading 259 · grammar 116 — before the already-resolving filter;
`audio-inputs-C.json` carries all 39,307 rows with the preflight contract below so the 22,094 are
recomputed at run time and the file cannot go stale.

## 5 · Dry-run result — clean, with one blocker

Every row validated for source text, language, voice, stable asset ID, deterministic output path,
manifest key and runtime lookup path: **all zero failures**. Output paths: 39,307 unique, 0
collisions.

**Preflight is step 0 of the pipeline:** re-run the resolver and synthesize only rows that still
fail. Existing audio must never be regenerated, and the resolver is the only authority on what
exists.

**BLOCKER — 29 manifest keys need more than one asset.** `manifest.json` maps text → *one* path,
but the same German text legitimately needs different audio: **18 keys differ by rate** (an
identical line in an A1 chapter at 0.85 and a B1 chapter at 0.95) and **11 differ by speaker voice**
(`Ja, bitte.` spoken by a male speaker in one chapter, a female in another). `Ja bitte` needs three
files: story/F/0.85, story/F/0.95, story/D/0.95.

Publishing these naively means **last writer wins and the rest become unreachable published
files** — precisely the defect this audit exists to prevent. Options:

- **A (recommended)** — give the sentence manifest the shape the vocab manifest already has:
  `text → {female, male}` plus a rate dimension. Matches what the runtime already handles, no
  resolver rewrite, preserves speaker identity as the voice policy requires.
- **B** — one canonical rendering per text; drop the per-level rate and per-speaker distinction for
  these 29 keys.
- **C** — key the manifest on assetId, resolver maps text → assetId → path. Largest change.

Full list: `audit/audio-scan/_multi-asset-keys.json`.

## What I need from you

1. **Approve `voice-policy.json` v3** — `approvedOn` is still `null`; I have not set it.
2. **Confirm C = 22,094.**
3. **Pick a manifest option (A/B/C)** for the 29 multi-asset keys — this blocks publishing, not
   synthesis, but deciding it now avoids re-rendering later.
4. **Decide the 635 D items**, or approve generating C without them.
5. Confirm the `audio/v3/…` path scheme and that neither existing layout migrates.

## Files

`audio-inputs-C.json` (C set + preflight contract + blocker detail) ·
`audit/audio-scan/_dryrun-C.json` · `audit/audio-scan/_multi-asset-keys.json` ·
`audit/audio-inventory/human-review-D.json` (all 730 classified) ·
`audit/audio-inventory/slash-alternation-review.json` (222 terms with evidence) ·
`audit/_architecture-proof.html` (the chain proof) · `audit/_audio-resolution-check.html`.
