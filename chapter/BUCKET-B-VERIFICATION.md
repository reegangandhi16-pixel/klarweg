# Bucket B verification + accounting reconciliation

Nothing was authored, and no dictionary, index, chapter, card or content file was
modified in this pass.

---

# PART 1 — Accounting reconciliation

## First, a correction to the premise

The figures quoted as the baseline — "3,041 distinct / 5,587 occurrences" — mix
two different rows of the popup-verifying run. That run reported:

| Category | Distinct | Occurrences |
| --- | --- | --- |
| 2 Correctly excluded | **5,587** | 81,902 |
| 4 Missing lexical data | **3,041** | 6,079 |

So 5,587 is Category **2**'s distinct count, not Category 4's occurrences. The
real Category-4 baseline was **3,041 distinct / 6,079 occurrences**.

## What I could establish

**1. The classification is internally complete.** Verified directly against the
stored capture: 2,950 capture keys → 2,950 bucket rows → 2,950 distinct surfaces
in buckets, **0 unaccounted**. No surface was dropped, deduplicated away or lost
during classification. There is no classification bug.

**2. The scanner is deterministic.** Same chapter, three consecutive full runs —
two in fast mode, one with popup verification — produced **identical** surface
sets (16 / 16 / 16, zero set difference in either direction). Popup verification
does not pollute collection, and there is no run-to-run jitter from async
linkify. (An earlier version of this test appeared to show a difference; that was
my error — I sampled at 20 s and the runs had not finished. Re-run with
completion checks, they match exactly.)

**3. Coverage of the classification pass is complete.** 259/259 chapters, no
timeouts. The four chapters that timed out during the popup pass
(`b1-25`, `b1-26`, `b1-27`, `c1-14`) were re-scanned and **every one of their
28 Category-4 surfaces is already present in the stored capture** — 0 missing. So
they are not the source of the difference.

## What I could not establish, and why

**I cannot produce the exact 91-surface list.** The popup run's per-surface data
lived only in a page variable (`window.__T`), and it did not survive the preview
reload. The localStorage persistence that would have preserved it was added
**one run too late** — that is exactly the gap it was written to close, and I
added it after that run rather than before.

So the disposition is: **not data loss from the current baseline, but an
un-diffable discrepancy between two aggregation runs.** The current capture is
internally sound, deterministic and complete; I simply cannot name the 91
surfaces the earlier aggregate contained that this one does not, because the
earlier aggregate no longer exists.

Ruled out by evidence: deduplication (0 unaccounted), classification bug (0
dropped), scanner nondeterminism (identical sets), and the timed-out chapters
(all surfaces present). What remains is bookkeeping in the two different
aggregation paths — `__merge()` over page variables versus the localStorage
accumulator — and the popup run additionally merged 4 retry scans on top of 259,
which cannot add distinct surfaces but does show the two paths were not
equivalent.

**To get the list for certain** the popup-verifying pass needs one re-run with
persistence enabled (~25 min), then a set diff. I have not done that unprompted.
The alternative is to accept the current 2,950 capture as the baseline, which is
the one that is verifiably complete and reproducible.

---

# PART 2 — Bucket B verified: 187 proposals

Every proposal was checked against the authored class of the base, the surface's
actual use in its sentence, and the semantic relationship. **Suffix shape was
treated as evidence of nothing.**

## Verdict summary

| Disposition | Count |
| --- | --- |
| **ACCEPT** — correct lemma, correct class, correct relationship | **63** |
| **REJECT** — wrong class or wrong semantic relationship | **34** |
| **RECLASSIFY to the adjective gap** (Part 3) | **48** |
| **RECLASSIFY to systemic build gaps** (Part 4) | **36** |
| **REVIEW** — needs a human call | **6** |

Only the 63 ACCEPTs are safe to apply as index mappings.

## REJECT — 34 proposals

### False-friend bases (the base is an unrelated word)
| Surface | Proposed | Why rejected | Correct lemma |
| --- | --- | --- | --- |
| `Zeuge` ×5, `Zeugen` ×3 | `Zeug` | *der Zeuge* (witness) is its own noun; *das Zeug* is "stuff" — unrelated | `Zeuge` — **needs its own entry** |
| `Nichte` ×2 | `nicht` | *die Nichte* (niece) vs. the negation *nicht* — pure spelling coincidence | `Nichte` — needs its own entry |
| `Ebene` ×2 | `eben` | *die Ebene* (level, plane) is a noun, not a declension of the adverb | `Ebene` — needs its own entry |
| `hain` ×2 | `Hai` | not a German word form; *Hain* (grove) is not *Hai* + -n | fragment — bucket E |
| `stressen` | `Stress` | verb ← noun is the wrong direction for "noun case -en" | `stressen` — needs a verb entry |
| `streiten` | `Streit` | *streiten* is a verb, not a case form of *der Streit* | `streiten` — needs a verb entry |

### The *fallen* / *fällen* homograph — must not be mapped
| Surface | Proposed | Why rejected |
| --- | --- | --- |
| `fällt` ×9 | `fällen` | *fällen* means "to fell (a tree)". The corpus sense is *fallen* "to fall". The matcher only sees one candidate because the umlaut hides *fallen* from suffix stripping. |
| `Fälle` ×6 | `fällen` | *Fälle* is the plural of **der Fall** (case), not a verb form at all. |
| `fällst` ×1 | `fällen` | same as `fällt`. |

All three belong in **bucket F**, not B. This is the single most dangerous group
in the list: each would have shown a learner "to fell" for an ordinary "falls".

### Deverbal nouns misread as verb inflections
The class gate passed these because it proposed a verb relationship and found a
verb — but the **surface** is a noun.

| Surface | Proposed | Actual |
| --- | --- | --- |
| `Ablauf` ×4 | `ablaufen` | *der Ablauf* (sequence) — noun |
| `Verlauf` ×4 | `verlaufen` | *der Verlauf* (course) — noun |
| `Ausfall` ×1 | `ausfallen` | *der Ausfall* (failure) — noun |
| `Schlaf` ×1 | `schlafen` | *der Schlaf* (sleep) — noun |

Each needs its own noun entry; none is an inflection.

### English surfaces matched to German bases — a classifier leak
`tone→Ton`, `marks→Mark`, `temperature→Temperatur`, `banks→Bank`,
`posts→Post`, `figures→Figur`, `alternatives→Alternative`,
`hypotheses→Hypothese`. English plurals in **-s** and words in **-e** hit the
noun-case rules. All belong in **bucket C**. This means bucket C is understated
by 8 and B overstated by 8.

### Deliberate error-correction forms — must never be mapped
| Surface | Note |
| --- | --- |
| `gutste` ×2 | deliberate wrong superlative (correct: *beste*) used in an error-correction exercise |
| `Ergebniss` ×2 | deliberate misspelling of *Ergebnis* in an error-correction item |
| `Nehm` ×1 | deliberate wrong imperative (correct: *Nimm*) |

Mapping these would make a **wrong form** look authoritative in the popup. They
should stay unresolved by design. Worth a standing rule: surfaces that appear
only inside `wrong:` fields are never index candidates.

### Nominalisation bases used attributively
`letztes` ×18 → `letzte` [Noun], `besten` ×7 → `beste` [Noun],
`deutschen` ×2 → `deutsche` [Noun]. The bases are nominalisation entries, but
the corpus uses these attributively (*letztes Jahr*, *am besten*). Class-wrong →
they belong to the adjective gap in Part 3.

### Nonsense derivation
`unserer` ×1 → `uns` labelled "comparative". Correct lemma is `unser`
(possessive determiner); the proposal is an artefact.

### A hidden collision
`Kliniken` → `Klinik` looks clean but **`Klinikum` also has the plural
`Kliniken`**. This is the exact case I previously reported as correctly
unindexed; the class gate let it through because *Klinikum* is not reachable by
suffix stripping from *Kliniken*. **Move to bucket F.** A live reminder that
"one surviving candidate" never means "unambiguous".

## REVIEW — 6

| Surface | Proposed | Question |
| --- | --- | --- |
| `deren` ×1 | `der` [Article] | *deren* is a genitive **relative pronoun**; `der` is right as lemma but the class is wrong. Needs a relative-pronoun paradigm decision. |
| `denen` ×1 | `den` [Article] | dative plural relative pronoun; same question. |
| `Kurzem` ×1 | `kurz` | only occurs in the fixed phrase *vor Kurzem*; map the phrase or the word? |
| `erkältete` ×1 | `erkältet` [Adj] | corpus use is the reflexive verb *sich erkälten*, not the adjective. |
| `vermisst` ×2 | `vermissen` | corpus sense is "to miss" so the mapping is right, but *vermessen* is a real competitor the matcher never saw. |
| `meiste` ×1 | `meist` [Adverb] | superlative of *viel*; base class is adverb. |

## ACCEPT — 63

Correct in class, lemma and relationship. Grouped:

**Noun case and plural forms (31).** `Herrn→Herr` (n-declension), `Worte`/`Worten→Wort`,
`Grade→Grad`, `Rande→Rand`, `Vitamins→Vitamin`, `Zustands→Zustand`,
`Abenteuers→Abenteuer`, `Nachtwächters→Nachtwächter`, `Urgroßvaters→Urgroßvater`,
`Techniken→Technik`, `Ergänzungen→Ergänzung`, `Nominalisierungen`,
`Schlussfolgerungen`, `Passiversatzformen`, `Kollokationen`, `Zeitformen`,
`Präfixverben`, `Appositionen`, `Partizipialattribute`, `Registern` and similar.

**Verb finite forms (14).** `analysiert`/`analysierte→analysieren`,
`vertraue`/`vertraust→vertrauen`, `unterstützt`/`unterstützte→unterstützen`,
`einschätzt→einschätzen`, `hinterfragt→hinterfragen`, `zuspitzt→zuspitzen`,
`herrscht→herrschen`, `abstrahiert`/`abstrahiere→abstrahieren`.

**Imperatives (5).** `Lass→lassen`, `Trag→tragen`, `Wasch→waschen`,
`hab→haben`, `halt→halten`.

**Pronouns and quantifiers (7).** `jemanden→jemand`, `niemanden`/`niemandem→niemand`,
`Vielen`/`vieles`/`vieler→viel`.

**Nominalised adjectives (6).** `Einheimischen→Einheimische`,
`Obdachlosen→Obdachlose`, `Musikinteressierten→Musikinteressierte`,
`Finstere→finster`, `Sauberes→sauber`, `Schwangere→schwanger`. Correct lemma —
the popup should present them as nominalisations rather than plain adjectives.

**None of the 63 requires new vocabulary.** Every base already exists with
sufficient metadata; each is a one-key index mapping.

---

# PART 3 — The adjective gap (48 surfaces, not authored)

These have a base that exists **only as an Adverb**, while the corpus uses the
word **attributively before a noun**. The adjective-declension wave requires
class `Adjective`, so it never fires. This is a missing sibling lexeme, not a
resolver bug and not an error in the existing adverb entry.

| Base (authored class) | Surfaces in corpus | Total × |
| --- | --- | --- |
| `klar` (Adverb) | klare 18 · klarer 9 · klaren 7 · klares 1 | **35** |
| `echt` (Adverb) | echte 13 · echter 6 · echten 4 · echtes 3 | **26** |
| `kurz` (Adverb) | kurzen 8 · kurze 7 · kurzer 2 · kurzes 1 | **18** |
| `ehrlich` (Adverb) | ehrliche 8 · ehrlicher 1 · ehrliches 1 | **10** |
| `wenig` (Adverb) | weniger 19 | **19** |
| `letzte` (Noun) | letztes 18 | **18** |
| `natürlich` (Adverb) | natürlichen 2 · natürlicher 1 | **3** |
| `gründlich` (Adverb) | gründlicher 4 · gründliche 2 | **6** |
| `ursprünglich` (Adverb) | ursprüngliche 4 · ursprünglichen 1 | **5** |
| `gemeinsam` (Adverb) | gemeinsame 4 · Gemeinsames 1 | **5** |
| `direkt` (Adverb) | direkte 5 | **5** |
| `beste` (Noun) | besten 7 | **7** |
| `erst` (Adverb) | Erster 4 | **4** |
| `früh` (Adverb) | frühen 1 · frühe 1 | **2** |
| `halb` (Adverb) | halben 2 · halbe 1 | **3** |
| `selten` (Adverb) | seltene 3 | **3** |
| `eigentlich` (Adverb) | eigentliche 2 | **2** |
| `regelmäßig` (Adverb) | regelmäßige 1 | **1** |
| `völlig` (Adverb) | völliger 1 | **1** |
| `scheinbar` (Adverb) | scheinbare 1 | **1** |
| `absolut` (Adverb) | absoluter 1 | **1** |
| `jahrelang` (Adverb) | jahrelanger 1 | **1** |
| `länger` (Adverb) | längeren 1 | **1** |
| `deutsche` (Noun) | deutschen 2 | **2** |

**24 base lexemes, 48 surface forms, ~179 occurrences.** A closed, verifiable
set: authoring one adjective lexeme per base lets the existing declension wave
derive every surface with no new resolver code. Not authored, per instruction.

---

# PART 4 — Two systemic build gaps found during verification

Neither is authoring work. Both are missing candidate families in the inflection
build, in the same class as the earlier modal-du-form and adjective-declension
findings.

## 4a. Comparative and superlative stems are never declined — 21 surfaces
The adjective wave declines only the **positive** stem (base + e/en/em/er/es).
It never declines the comparative or superlative stem, so every attributive
comparative is unresolvable even though the base adjective is correctly authored:

`schönere` 3 · `schöneren` 1 · `schönste` 1 · `schönstes` 1 · `günstigere` 1 ·
`günstigeren` 3 · `kleinere` 2 · `hellere` 1 · `schnellere` 1 · `schnelleres` 1 ·
`schnellste` 4 · `modernste` 1 · `wichtigste` 2 · `wichtigster` 2 ·
`dringendsten` 2 · `schlechteren` 1 · `liebster` 1 · `familienfreundlicheres` 1 ·
`verhandlungssicheres` 1 · `bessere`/`besseren`/`besseres`/`besserer` 9 ·
`nahe` 4.

Fix shape: extend the wave to decline the authored `compare.komparativ` and
`compare.superlativ` stems, exactly as it already declines the positive. Uses
only authored data — no morphology invented.

## 4b. Participial adjectives are excluded from the wave — 30 surfaces
The wave's exclusion regex drops any class containing `partizip`, so
Partizip I/II adjectives never decline, despite being fully authored:

`umfassende` 4 · `fundierte` 2 · `fundiertes` 2 · `anerkannte` 1 ·
`anerkannten` 3 · `detaillierte` 1 · `differenziertes` 1 · `grundlegende` 1 ·
`einschneidende` 1 · `bewegende` 1 · `vorherrschende` 1 · `transzendierende` 1 ·
`bahnbrechenden` 1 · `ausschlaggebende` 1 · `richtungsweisende` 1 ·
`tiefgreifende` 1 · `weitreichende` 2 · `hochentwickelte` 1 ·
`evidenzbasiert(e/er)` 3 · `gegenwartsbezogene` 1 · `cloudbasierte` 1 ·
`technologiebasierte` 1 · `klimaschonende` 1 · `ressourcenschonende` 2 ·
`personalisierte`/`personalisiertes` 3 · `marginalisierte` 1 · `privilegierte` 1 ·
`verspätete` 1 · `entspannten` 1 · `lockeres` 3 · `clevere` 3 ·
`schwere`/`schweren`/`schweres` 10.

The exclusion was written to stop *nominalised* participles being treated as
adjectives. It is too broad: an **attributive** participial adjective declines
exactly like any other adjective. Fix shape: exclude only the nominalised
classes, keep attributive Partizip I/II in.

Together these two account for **51 surfaces / ~90 occurrences** and need **zero
new vocabulary**.

---

# PART 5 — Recommended safe implementation order

1. **Apply the 63 verified ACCEPT mappings.** One index key each, all bases
   already have sufficient metadata. Zero new vocabulary, zero risk.
2. **Fix build gap 4b (participial adjectives).** Narrow one exclusion regex →
   ~30 surfaces resolve from existing authored data.
3. **Fix build gap 4a (comparative/superlative declension).** One new candidate
   family in the wave → ~21 surfaces.
4. **Add the standing rule for error-correction forms**: a surface occurring only
   in a `wrong:` field is never an index candidate. Protects `gutste`,
   `Ergebniss`, `Nehm` and any future ones.
5. **Move to bucket F and leave unindexed:** `fällt`, `Fälle`, `fällst`,
   `Kliniken`. Then re-audit F as a set.
6. **Reclassify the 8 English surfaces to C** and re-baseline the bucket counts.
7. **Decide the 6 REVIEW items** — particularly the relative-pronoun paradigm for
   `deren`/`denen`.
8. **Then, and only then, the 24-lexeme adjective gap** (Part 3) — the first step
   that authors anything.
9. Everything else in bucket A afterwards, per the order in
   `CAT4-CLASSIFICATION.md`.

Steps 1–6 resolve roughly **150 surfaces / 300+ occurrences with no new
vocabulary at all**.
