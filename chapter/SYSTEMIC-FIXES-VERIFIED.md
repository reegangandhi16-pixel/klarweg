# Systemic fixes — complete A1–C2 verification

Zero new vocabulary was authored. No chapter text, dialogue, grammar explanation,
exercise or approved vocab card was modified.

## Complete capture — 259/259

| Measure | Value |
| --- | --- |
| Chapters merged | **259 / 259** |
| Unique chapters in `ACC.seen` | 259 |
| **Duplicate merges** | **0** |
| Chapters not merged | none |
| **Timed-out chapters** | **0** |
| Clickable spans | **195,060** |
| Popups opened and read | **10,342** |
| **Popup defects** | **0** |

Per-batch: A1+A2 83 ch / 66,280 spans · B1 35 / 35,967 · B2 69 / 52,524 ·
C1 43 / 22,030 · C2 29 / 18,259. Every batch finished with 0 timeouts and 0
defects.

## Category 3 / 4 / 5 — before → after

| Category | Before | After | Change |
| --- | --- | --- | --- |
| 1 Resolves at runtime | 947 / 1,431 | 801 / 1,496 | −146 distinct |
| 2 Correctly excluded | 5,587 / 81,902 | 5,555 / 81,860 | −32 |
| **3 Resolver gap** | 4 / 7 | **4 / 7** | unchanged |
| **4 Missing lexical data** | 3,041 / 6,079 | **2,889 / 5,768** | **−152 distinct, −311 occ** |
| **5 Ambiguous** | 0 / 0 | **0 / 0** | held at zero |

**152 distinct surfaces / 311 occurrences newly resolved, with no new vocabulary.**

Category 3's remaining 4 are the same trailing-hyphen tokenisation artefacts from
compound-splitting demonstrations — `e-` ×3, `Ja-` ×2, `Satz-` ×1, `Vor-` ×1.
No lexical or resolver defect remains at any level.

## What was applied

### 1. Existing-lemma mappings — 36 of the 63 proposals
Each pair was re-validated at apply time rather than trusted: base must be a
headword, its authored class must match the inflection kind, key must be free.

**10 were rejected by that gate** because the base is not a headword at all —
`Nachtwächters`, `Urgroßvaters`, `Passiversatzformen`, `Präfixverben`,
`Partizipialattribute`, `Appositionen`, `Kollokationen`, `Musikinteressierten`,
`Obdachlosen`, `Einheimischen`. **My verification report overstated these as
Bucket B; they are Bucket A** (genuinely missing entries) and are recorded as
such. A further 17 were already indexed.

### 2–5. Build-wave rules — 2m, 2n, 2o, 2p, 2q
Rules 2m (participial adjectives) and 2n (comparative/superlative declension)
turned out to be **already implemented** in earlier work — all 8,692 candidates
were already indexed. But testing the specific forms you named exposed **three
genuine defects those rules had left behind**:

**2o — e-elision was over-applied.** Elision is correct for `-el`
(dunkel→dunkle) and for `-er` after a **vowel** (teuer→teure, sauer→saure). It
was being applied to `-er` after a **consonant** too, which both created the
non-words `schwre`, `clevre`, `lockre`, `bittre`, `saubre`, `bessre` **and
omitted the attested forms entirely** — so `schwere`, `clevere`, `lockere`
resolved to nothing. 28 non-words purged.

**2p — compare-less adjectives were skipped.** 47 attributive adjectives with no
`compare` record were never declined: `anerkannt`, `verspätet`, `vorbereitet`,
`erholt`, `besser`, `nah`, `verhandlungssicher`.

**2q — invariable adjectives must not decline.** My own 2p pass created
`supere`, `primaer`, `lilae`. German has a small closed class of invariable
loanwords and colour words (`super`, `prima`, `klasse`, `rosa`, `lila`,
`beige`, `extra`, `egal`, `schade`) that take no endings. 28 non-words purged.

Net: **111 real keys added, 56 non-words removed.** Index at 31,606 keys.

### 6–9. Refusals honoured
No rejected proposal mapped. No manual-decision item touched. No adjective-gap
lexeme authored. No error-correction form indexed.

## Runtime verification

**All 14 dangerous cases correctly unmapped and non-clickable:** `fällt`,
`Fälle`, `fällst` (never point at *fällen*), `Zeuge`, `Nichte`, `Ebene`,
`Ablauf`, `Verlauf`, `Ausfall`, `Schlaf`, `Kliniken` (Klinikum collision
preserved), `gutste`, `Ergebniss`, `Nehm`.

**Comparatives/superlatives:** `schönere`/`schöneren`→schön, `wichtigste`→wichtig,
`günstigeren`→günstig, `schnellste`→schnell, `kleinere`→klein, `bessere`→besser. ✓

**Participial adjectives:** `umfassende`→umfassend (Partizip I),
`fundierte`→fundiert (Partizip II), `anerkannten`→anerkannt,
`weitreichende`→weitreichend (compound Partizip I), `personalisierte`,
`verspätete`. ✓

**Elision:** `schwere`, `clevere`, `lockere`, `saubere`, `finstere` resolve
**and** `teure`, `dunkle` still elide correctly. ✓

**No regressions.** `mitmachst`→mitmachen · `zögert`→zögern · `Beruhige`→sich
beruhigen · `waren`→sein "were (wir/sie · Präteritum)" · `Kosten`→"costs (pl.)"
Noun vs `kosten`→"to cost" Verb · `gebunden`→binden · `Preises`→Preis ·
`Hauses`→Haus · `Jahres`→Jahr · `Studien`→Studie vs `Studium`→Studium ·
`kannst`→können · `willst`→wollen · `fängt`→anfangen.

## Integrity — all clean

| Check | Result |
| --- | --- |
| Dangling index targets | **0** |
| Dangling overlay aliases | **0** |
| Duplicate canonical entries | **0** |
| Feminine genitive -s errors | **0** |
| New collisions | **0** (all refused, none forced) |
| Duplicate chapter merges | **0** |

## Files changed

- `chapter/global-lexicon.js` — 36 verified mappings, 111 declension keys added,
  56 non-words purged. No entry created, no meaning altered.
- `chapter/BUILD_INFLECTION_INDEX.md` — rules 2m, 2n, 2o, 2p, 2q, 3e, 3f.
- `chapter/qa-clickability-runner.html` — timeouts 60s/40s → **120s/90s**;
  **rehydrate-on-load** added (deferred).

## Two harness defects fixed along the way

**Timeouts.** At 2.80 MB / 31,606 keys, five consecutive A2 chapters blew the old
60s/40s budget. Raised to 120s/90s; those five now merge, and the full corpus ran
with **0 timeouts**.

**Rehydration was missing entirely.** The snapshot was written on every batch
completion but never read back, so a page reload silently reset the accumulator —
each new batch would have discarded all earlier batches. Added, keyed by
`ACC.seen`, which is what makes resuming mid-corpus provably non-duplicating
(259 unique, 0 duplicates). My first version ran synchronously during parse and
left the page unresponsive; deferring it to `setTimeout(0)` fixed that.

## Remaining

**Adjective gap — not authored:** 24 base lexemes, 48 surfaces, ~179 occurrences
(`klar` 35, `echt` 26, `wenig` 19, `letzte` 18, `kurz` 18, `ehrlich` 10 …).

**Manual-decision items — 6, untouched:** `deren`, `denen` (relative-pronoun
paradigm), `Kurzem` (fixed phrase), `erkältete`, `vermisst`, `meiste`.

**Category 4:** 2,889 distinct / 5,768 occurrences, of which ~1,400–1,600 are
genuine German after removing English metalanguage, proper names and artefacts.
Plus the 10 reclassified from B to A.
