# Gender pass + full re-scan — results

## Phase 1 — gender completion

Gender was never a populated field in the global lexicon, which is why the
genitive derivation had reached only 73 keys. The curriculum, however, already
carries the data: approved vocab cards have explicit `art:` and `gender:`
fields. **3,945 gender-bearing card headwords** were harvested and applied.

| | |
| --- | --- |
| Noun entries inspected | **4,347** |
| Already had gender | 2,468 (57%) |
| **Newly populated from cards** | **1,597** |
| Plural also filled (was absent) | 293 |
| Skipped — card conflict | 2 |
| No curriculum evidence | 280 |
| **Coverage after** | **4,063 / 4,347 = 93%** |

The 2 skipped are genuine homographs where two chapters legitimately disagree
(`See` der/die, `Steuer` das/die). Left unset rather than guessed.

The 280 unverifiable are nouns with no vocab card anywhere. **No gender was
invented for any of them.**

### A pre-existing data defect found and corrected

Validating the result against the cards exposed something the pass itself did
not cause: **127 noun entries carried a gender contradicting their own approved
vocab card, 122 of them wrongly `m`**. Examples: `Freizeit` m→f, `Bühne` m→f,
`Universität` m→f, `Küche` m→f, `Studium` m→n, `Zimmer` m→n, `Team` m→n,
`Hobby` m→n. Every card checked is correct; the lexicon values were wrong.

Left alone, this was actively harmful: the genitive wave read those `m` values
and generated **182 forms that do not exist in German** — `universitätes`,
`bühnees`, `freizeits`, `mensaes`. Corrected from the approved cards and the
bogus keys purged. Gender-vs-card clashes are now **0**.

I also ran a suffix-rule validator (-ung/-heit/-ion → f, -chen/-um → n, …). It
flagged 95 items, but on inspection **the validator was wrong, not the data** —
`Ei`, `Kuchen`, `Baum`, `Raum`, `Traum`, `Friseur`, `Labor`, `Tor`, `Abitur`,
`Erlaubnis` are all correctly typed; the suffixes only look decisive. Used for
flagging only; nothing was written from it.

### Index

`KW_INFLECTIONS` 22,092 → **23,757**. Genitive keys now derive corpus-wide:
`Gebäudes→Gebäude`, `Antrags→Antrag`, `Tages→Tag`, `Themas→Thema`,
`Praktikums→Praktikum`, `Romans→Roman`, `Landes→Land`, `Studiums→Studium`.

### Integrity — all clean

| Check | Result |
| --- | --- |
| Dangling index targets | **0** |
| Dangling overlay aliases | **0** |
| Duplicate canonical entries | **0** |
| Feminine genitive -s errors | **0** |
| Gender vs approved card clashes | **0** |

## A scanner defect that invalidated my first re-scan

The runner waited a fixed 600 ms after the Global Lexicon appeared before
sampling. That was adequate at 2.3 MB and is not at 2.7 MB, so the scan began
measuring half-linkified pages: C1 came back at 18,121 spans, and a 4-chapter
probe returned **0**. The numbers were measurement error, not regression.

Replaced with readiness-by-stability: poll the actual `.rw`/`.de-link` count and
scan only once it has stopped changing for three consecutive polls. The same
4-chapter probe then returned 2,105 spans. **All batches were re-run.** Four
heavy chapters exceeded the 60 s cap and were re-run individually.

## Phase 2 — complete A1–C2 re-scan

| Level | Ch | Clickable | Popups | Defects | Cat 3 | Cat 5 |
| --- | --- | --- | --- | --- | --- | --- |
| A1+A2 | 83 | 66,256 | 3,373 | 0 | 2 | 0 |
| B1 | 35 | 35,863 | 1,420 | 0 | **0** | 0 |
| B2 | 69 | 52,442 | 2,777 | 0 | 2 | 0 |
| C1 | 43 | 21,921 | 1,776 | 0 | **0** | 0 |
| C2 | 29 | 18,114 | 1,183 | 0 | **0** | 0 |
| **Total** | **259** | **194,596** | **10,529** | **0** | **4** | **0** |

| Category | Distinct | Occurrences |
| --- | --- | --- |
| 1 Resolves at runtime | 947 | 1,431 |
| 2 Correctly excluded | 10,222 | 80,732 |
| **3 Resolver gap** | **4** | **7** |
| 4 Missing lexical data | 3,681 | 5,989 |
| **5 Ambiguous** | **0** | **0** |

**Category 3 is 4 surfaces, all tokenisation artefacts** — `e-`, `Ja-`, `Satz-`,
`Vor-`: trailing hyphens from compound-splitting demonstrations. No lexical or
resolver defect remains at any level.

### Honest note on the gender pass's effect

Category 4 moved 3,783 → 3,681 distinct: **~100 fewer**, against 1,665 new index
keys. The genitives it unlocked are real but individually low-frequency, so the
headline count barely moved. The value is correctness (182 non-words removed,
127 genders fixed), not backlog reduction. I over-sold this as "the cheapest
win" earlier — it was cheap and worth doing, but it was not a big dent.

### New genuine German Category 4 estimate

Unchanged in substance: **~1,400–1,600 distinct**. The 3,681 raw figure still
contains heavy English-metalanguage leak (`translations`, `memorize`,
`always`), proper names (`Timo` ~80 occurrences, `Müller`, `Leipzig`) and ~76
hyphen artefacts.

## Phase 3 — the two highest-frequency gaps, verified not authored

Both confirmed **absent from the lexicon, the caps overlay, and every vocab card
in the corpus**. Neither was authored, per instruction.

### `Studie` (~90 occurrences) — genuine learner-facing vocabulary
Canonical `die Studie`, Noun, feminine, plural `Studien`, "study".
Contexts are real academic German being taught, not labels:
- C2·01 grammar example: "Die Studie zeigt, dass frühere Untersuchungen andere Ergebnisse ergaben."
- C1·26: "Die Studie wurde durchgeführt." (passive)
- C1·05: "Nicht nur bestätigt die Studie die Hypothese …"
- C1·23 error-correction item; C2·01 writing starter; inside the `umfangreich` vocab example.

**Blocker to flag before authoring:** the existing `Studium` entry has plural
`Studien`, so the surface `Studien` is genuinely ambiguous between *die Studien*
(plural of Studie) and *die Studien* (plural of Studium). Authoring `Studie`
without a decision on `Studien` would create a collision.

### `Rollenspiel` (~89 occurrences) — real word, but a task label
Canonical `das Rollenspiel`, Noun, neuter, plural `Rollenspiele`, "role-play".
**Every single occurrence is the task-type prefix** in a speaking exercise —
`task: "Rollenspiel: Ihr klärt ein Missverständnis…"` — and each carries an
English gloss in the adjacent `taskEn: "Role-play: …"`.

So its high count comes from one repeated structural label, not from 89 teaching
contexts. It is a genuine German noun in learner-facing text and by your rule
should be clickable; I am flagging the distinction because it changes the
priority — this is one entry that fixes a label, whereas `Studie` is one entry
that fixes real academic vocabulary at C1/C2.

## Files changed

- `chapter/global-lexicon.js` — 1,597 genders populated, 293 plurals, 127
  genders corrected, 182 bogus keys purged, index 22,092 → 23,757. No meaning
  altered, no entry created.
- `chapter/qa-clickability-runner.html` — readiness-by-stability fix.
- `chapter/CAPS-SOURCE-RECORD.md` — source record for the 97 overlay entries.

No chapter text, dialogue, grammar content or vocabulary teaching content was
touched.

## Decisions needed before authoring starts

1. `Studien` — plural of `Studie` or of `Studium`? Blocks authoring `Studie`.
2. The 280 nouns with no curriculum gender evidence — leave unset, or source
   them externally?
3. `Rollenspiel` — author it as vocabulary, or treat task-type labels as UI?
4. The 4 flagged overlay entries (`Kraft`, `Bedenken`, `Geschehen`, `Handeln`)
   still need a reference check.
