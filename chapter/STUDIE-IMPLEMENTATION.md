# Studie implementation + verification

## Files changed (3)

1. **`chapter/global-lexicon.js`** — one new canonical entry, one index key repointed.
2. **`chapter/BUILD_INFLECTION_INDEX.md`** — new rule 3d, pinned-exceptions table.
3. *(no other file touched — no chapter data, no app code)*

## Exact new lexical entry

```js
"studie": {
  w: "Studie",
  en: "study",
  hi: "अध्ययन",
  type: "Noun",
  ex: "Die Studie wurde durchgeführt.",
  exEn: "The study was carried out.",
  plural: "Studien",
  level: "C1",
  gender: "f"
}
```

Field set and order copied from the comparable C1 academic nouns already in the
lexicon (`Untersuchung`, `Forschung`, `Methode`). **The example sentence is taken
verbatim from C1·26 curriculum content** ("Die Studie wurde durchgeführt.") rather
than composed. Nothing invented: gender, plural and meaning are the standard
dictionary facts for *die Studie*.

Duplicate guards passed before writing: no `studie` headword existed, no
`Studie` caps-overlay entry existed, and no vocab card anywhere authors it.

## Exact index change

```
KW_INFLECTIONS["studien"]:  "Studium"  →  "Studie"
```

One key. No new mechanism, no alias, no overlay entry. Index size unchanged at
**23,757** (a repoint, not an addition). Lexicon 7,831 → **7,832**.

`Studium` untouched:
```js
"studium": { w:"Studium", en:"studies, degree course", hi:"अध्ययन", type:"Noun",
             ex:"Mein Studium ist interessant.", plural:"Studien", gender:"n" }
```

## Build-spec exception (rule 3d)

Rule 3b drops any key claimed by two lemmas. Left alone, the next rebuild would
have silently recreated the wrong mapping or dropped `studien` entirely. Rule 3d
adds a **pinned-exceptions table** the build must honour, with `studien → Studie`
as its only row and the corpus evidence recorded inline. The rule also states the
bar for adding a row: proof that the losing reading never occurs as a bare
surface. `kliniken` (Klinik/Klinikum) and `daten` (Daten/Datum) explicitly stay
unindexed because they do not meet it.

## Before → after

| Surface | Before | After |
| --- | --- | --- |
| `Studie` | **unresolved, not clickable** | "study", lemma `Studie`, `exact` ✓ |
| `Studien` (C1·18) | **"studies, degree course", lemma Studium** ✗ | "study", lemma `Studie`, `high` ✓ |
| `Studien` (C1·23, local token) | "studies (Satzende…)", lemma Studium | "studies (Satzende…)", lemma **Studie** ✓ |
| `Studium` | "studies, degree course" | **unchanged** ✓ |
| `Englisch-Studium` | "English degree" | **unchanged** ✓ |

The C1·23 popup **text** is deliberately unchanged: that chapter's authored local
token outranks the dictionary, so only the lemma pointer corrected. That is the
precedence rule working as designed.

Rendered popup for `Studien` on C1·18: headword *Studien*, meaning "study",
Hindi अध्ययन, badges **Noun · C1**, sections **Number · Example**, audio present,
no no-data fallback.

## Regression checks — none detected

| Surface | Result |
| --- | --- |
| `Universität` / `Universitäten` | ✓ both resolve, no collision |
| `Zimmer` (sg = pl) | ✓ exact headword |
| `Kosten` (caps object) | ✓ "costs (pl.)" |
| `Fällen` (caps string alias → Fall) | ✓ alias intact |
| `Kliniken` (Klinik/Klinikum) | ✓ still correctly unindexed |
| `Daten` | ✓ resolves to its own headword |
| `arbeiten`, `zahlen` (verb/noun-plural homographs) | ✓ verb wins via exact match |

## Integrity — all clean

| Check | Result |
| --- | --- |
| Dangling index targets | **0** |
| Dangling overlay aliases | **0** |
| Overlay/noun duplicates | **0** |
| Duplicate canonical display forms | **0** |
| Feminine genitive -s errors | **0** |
| **Popup defects** | **0** |

## Full A1–C2 scan

259 chapters, plus 4 re-run individually after exceeding the 60 s cap
(`b1-25`, `b1-26`, `b1-27`, `c1-14`) — 263 scan units, full corpus coverage.

| | |
| --- | --- |
| Clickable spans | **194,488** |
| Popups opened and read | **10,522** |
| **Popup defects** | **0** |

| Category | Distinct | Occurrences |
| --- | --- | --- |
| 1 Resolves at runtime | 787 | 1,475 |
| 2 Correctly excluded | 5,587 | 81,902 |
| **3 Resolver gap** | **4** | **7** |
| 4 Missing lexical data | **3,041** | 6,079 |
| **5 Ambiguous** | **0** | **0** |

Category 3 is unchanged and remains only the four trailing-hyphen tokenisation
artefacts: `e-` ×3, `Ja-` ×2, `Satz-` ×1, `Vor-` ×1.

`Studie` and `Studien` both moved **out of Category 4** into Category 1.

### Why Category 4 reads 3,041, not 3,681

This is a **counting correction, not an effect of the fix**. Every earlier
consolidated figure was the *sum of per-level distinct counts*, which
double-counts any surface appearing at more than one level. This run merges
buckets across batches and deduplicates globally, so 3,041 is the true
corpus-wide distinct count and 3,681 was an overcount. Category 2 moves for the
same reason (10,222 → 5,587). One entry does not remove 640 surfaces.

Genuine German estimate is correspondingly revised down to roughly
**1,200–1,400 distinct**, on the same shape analysis as before (English
metalanguage leak, proper names ≈80 `Timo` occurrences, ~76 hyphen artefacts).

## Confirmation

No learner-facing curriculum sentence, dialogue, grammar explanation, exercise or
vocabulary teaching content was changed. No chapter `*-data.js` file was
modified. No application code was modified. No per-word exception was added to
any chapter.
