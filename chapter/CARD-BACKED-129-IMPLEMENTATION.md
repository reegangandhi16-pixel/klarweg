# 129 card-backed headwords — implementation

Only the card-backed set was touched. No entry from the 1,459 external-verification
list, none of the 685 unresolved surfaces, and none of the pending manual cases
(`deren`, `denen`, `dessen`, `Kurzem`, `meiste`) was added. No chapter content,
dialogue, grammar, exercise or vocabulary card was modified.

## Pre-write guards — 2 genuine conflicts found and NOT overwritten

Ten guards ran before anything was written. Results:

| Guard | Result |
| --- | --- |
| Already a lexicon headword | 0 |
| Already in the caps overlay | 0 |
| Bare key already an index target | 0 |
| Cards missing `en` or `hi` | 0 |
| Duplicates within the set | 0 |
| Non-simple headword key | 0 |
| Card-internal gender/article conflict | **2** |
| Noun invariant breach | **1** |
| Gender not derivable | 0 (see note) |
| Plural present | 93 of 129 |

**On the noun invariant:** you asked me to verify it. It does *not* fully hold —
`die Festgenommenen` is typed *"nominalized participle (Partizip II, plural,
journalism/legal)"*, not a plain noun. Reported rather than forced.

**On gender:** my first check reported 25 undeterminable. That was my error — the
check only read `art`/`gender`, ignoring the article carried in `de`
(`"die Tempuswahl"`). Re-derived from all three sources, gender resolves for
**129/129**. A further 71 cards use the project's own `fem.`/`masc.`/`neut.`
notation, which maps cleanly.

### 3 headwords held — plural-only cards

| Card | Problem |
| --- | --- |
| `die Funktionsverbgefüge` | `gender: 'plural'`, `plural: '— (Pl.)'` — the card teaches the plural; the singular is *das Funktionsverbgefüge* (neuter). Writing it as a feminine singular headword would be wrong. |
| `die Festgenommenen` | `gender: 'pl'` — plural nominalized participle, not a singular noun headword. |
| `die Klimaschutzmaßnahmen` | `gender: 'fem. (pl.)'`, `plural: 'die Klimaschutzmaßnahmen'` — headword is itself the plural. |

All three need a curriculum decision: either the card should teach the singular,
or the dictionary needs a plural-only entry type. **Not authored.**

## Written

| | Count |
| --- | --- |
| **Canonical entries added** | **126** |
| Index keys added (plural, dative plural, genitive) | 68 |
| Held for review | 3 |
| Lexicon | 7,851 → **7,977** |

Each entry carries exactly the approved card data: headword, gender, English,
Hindi, plural where present, example where present, level. **No meaning was
altered, improved or invented, and no external source was consulted.**

### Adjectival nouns handled separately
`der Datenschutzbeauftragte`, `die Vorsitzende`, `der Bevollmächtigte` are
nominalized adjectives: they decline *des Bevollmächtigten*, not
*\*Bevollmächtigtes*. Flagged `adjectivalNoun: true` so the noun genitive wave
skips them, and given adjectival `-en/-em/-er` keys from their authored plural
instead.

## A pre-existing defect this exposed — 103 malformed index keys

While guarding the new genitives I found that the genitive wave from the earlier
gender pass had been appending `-es` to stems already ending in `-e`, producing
**103 keys that are not German forms**: `gebäudees`, `namees`, `endees`,
`augees`, `gedankees`, `kundees`, `wochenendees` and so on.

**My integrity checks had never caught these**, because every one pointed at a
valid headword — the defect was in the key's own well-formedness, not its target.
That is a real gap in how I was verifying, and it is now covered by a
doubled-vowel-at-the-join check.

**I also over-corrected once and had to undo it.** My first sweep deleted
everything ending `-ees`, which removed ~8 *correct* genitives — `kaffees`,
`schnees`, `sees`, `tees`, `klischees`, `resümees`, `badesees` — where the
headword genuinely ends in `-ee` (*des Kaffees* is right). Restored, and the
malformed ones replaced with the correct `-s` form. `armes` was also removed:
*die Armee* is feminine and *der Arme* is adjectival, so neither takes a noun
genitive `-s`.

Net effect on the index: 31,762 → **31,671**, i.e. 68 new correct keys and 104
bogus ones removed.

## Verification

**A. All 126 entries verified present** — 126/126.
**B. Index keys** — dangling targets **0**; doubled-vowel malformations **0**;
adjectival-noun genitive keys **0**.
**C. Integrity** — dangling overlay aliases 0 · duplicate canonical entries 0 ·
entries without usable content 0 · feminine genitive `-s` errors 0.

Spot-checked resolution: `Hypothese` "hypothesis" · `hypothesen → die Hypothese` ·
`Register` "register (linguistic)" · `Verantwortung` "responsibility" ·
`Überarbeitung` "revision" · `Einwand` "objection" · `einwände → der Einwand` ·
`Gegenargument` "counterargument" · `gegenarguments → das Gegenargument` ·
`Nobelpreisträger` "Nobel laureate" · `Rechtsprechung` "case law, jurisprudence".

## D. Full A1–C2 scan

**259/259 unique chapters · 0 timeouts · 195,491 clickable spans ·
10,541 popups read · 0 popup defects.**

| Category | Before | After | Δ |
| --- | --- | --- | --- |
| 1 Resolves at runtime | 804 / 1,501 | 811 / 1,510 | +7 |
| 2 Correctly excluded | 5,549 / 81,840 | 5,542 / 81,917 | −7 |
| **3 Resolver gap** | 4 / 7 | **4 / 7** | — |
| **4 Missing lexical data** | 2,850 / 5,604 | **2,805 / 5,455** | **−45 / −149** |
| **5 Ambiguous** | 0 / 0 | **0 / 0** | — |

Category 3 remains the same 4 hyphen artefacts (`Ja-`, `e-`, `Satz-`, `Vor-`).

**Occurrences newly resolved: 149.** All 17 spot-checked card-backed words are
out of the backlog (17/17).

The 45-distinct reduction is slightly below the 47 card-backed candidates
predicted, because 2 of those 47 fall inside the 3 held plural-only cards.

## Regressions and collisions
**None.** No existing entry was overwritten, no key reassigned, no bare form
changed meaning or class, and the span count is stable at ~195.5k.

## A process note
My batch chaining silently skipped B1 on the first pass — a guard returned early
and the next call advanced to B2, so 35 chapters went unscanned and the totals
were short by ~36k spans. I caught it from the file arithmetic (83 → 152 is 69,
not 104) and re-ran B1. Worth knowing that the run needs the per-batch file count
checked, not just the final "done".

## Remaining
- **3 held plural-only cards** — need a curriculum decision.
- **1,459 candidates with no card evidence** — external verification required.
- **685 unresolved surfaces** — manual lemma decisions.
- **82 of the 129** were dictionary-only gaps that never appeared in the
  clickability backlog; they are now entries, so the vocabulary list and the
  dictionary agree for them.
