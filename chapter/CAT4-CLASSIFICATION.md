# Category-4 classification — A1–C2

Input: the globally deduplicated Category-4 output from the clean 259-chapter
capture — **2,950 distinct surfaces**. (The popup-verifying run reported 3,041;
this pass ran with popup verification off, which is the only difference. Popup
defects were already established at 0 across 10,522 popups.)

Nothing was authored. No chapter content, dictionary entry or index key changed.

## Method

- **Curriculum vocab cards are the first source of truth.** A card index was
  harvested from all 259 `*-data.js` files: **6,372 card headwords** with their
  `pos`, English gloss and source file (`chapter/_cardindex.json`).
- **Suffix patterns only PROPOSE a candidate base; they never prove anything.**
  A proposal survives only if the candidate is an actual dictionary or card
  headword **and** its authored word class matches the inflection being proposed.
- **Two or more surviving candidates → bucket F.** Never a silent pick.
- One surface key → one canonical lemma throughout. The `Studie`/`Studien`
  pinned-exception (rule 3d) is the precedent for genuine shared forms.

### A gate I had to add mid-pass
My first run accepted any single surviving candidate and produced clearly wrong
mappings: `Kritiker → Kritik` (an agent noun is not a declension of its root),
`Müller → Müll`, `lebt → Leben` (matching the **noun** *das Leben* while
proposing a verb inflection), `dat → daten`. Adding the word-class gate moved
**96 proposals out of B**, most into A. Reported numbers are post-gate.

## 1. Bucket totals

| Bucket | Distinct | Occurrences |
| --- | --- | --- |
| **A** Genuine German lexical item | **1,268** | 2,363 |
| **B** Inflected form → existing canonical lemma | **187** | 505 |
| **C** English / UI / metalanguage | **1,349** | 2,661 |
| **D** Proper name / place / brand | **33** | 89 |
| **E** Tokenisation / hyphen artefact | **106** | 157 |
| **F** Ambiguous, needs manual review | **6** | 9 |
| **G** Repeated structural label | **1** | 85 |
| | **2,950** | 5,869 |

Within bucket A: **45 already have an approved vocab card** carrying real
metadata (so no new content needs writing — only promotion into the dictionary);
**1,223 have no metadata anywhere**.

### Honest caveats on the bucket edges
- **A still contains residue that belongs in C or D.** `Timo×83` is a story
  character name (bucket D) and is the single largest entry in A — my name list
  covered places and brands but not character names. `Try×7`, `Legal×7`,
  `Political×5`, `Academic×2`, `Acknowledge`, `Agree`, `Assumptions` are
  English. `Akk×5`, `Gen×5` are case abbreviations. Realistic A after cleaning
  the character-name list and the capitalised-English residue: **≈1,150–1,200**.
- **B is a proposal list, not a verified mapping list.** Spot-checking finds
  survivors that are still wrong: `Zeuge → Zeug` (*der Zeuge* is its own noun),
  `mehreren → mehr` (should be *mehrere*), `letztes → letzte` and
  `besten → beste` (nominalisation bases, questionable), and `fällt → fällen` /
  `Fälle → fällen`, which look unambiguous to the matcher only because the umlaut
  hides *fallen*. Every B row needs eyes before use.

## 2. Top genuine German gaps by occurrence (bucket A)

Excluding the misfiled English/name residue named above.

| Surface | × | Level | Card? |
| --- | --- | --- | --- |
| `Welche` | 37 | A1 | — |
| `Reform` | 27 | B2 | — |
| `Betreuerin` | 21 | B2 | — |
| `Kommission` | 18 | C1 | — |
| `Gutachter` | 18 | C1 | — |
| `Zuerst` | 16 | A2 | — |
| `Seien` | 15 | A1 | — |
| `Hypothese` | 15 | B2 | **yes** |
| `gefällt` | 14 | A2 | — |
| `Verantwortung` | 14 | B1 | **yes** |
| `Stichprobe` | 14 | C1 | — |
| `Methodik` | 14 | C1 | — |
| `Register` | 13 | B2 | **yes** |
| `sorgfältig` | 12 | B1 | — |
| `förmlich` | 12 | B1 | — |
| `Überarbeitung` | 12 | C1 | **yes** |
| `Welches` | 11 | A1 | — |
| `präzise` | 11 | B2 | — |
| `Anstieg` | 11 | B2 | — |
| `Lektorin` | 11 | C1 | — |
| `Gremium` | 10 | C1 | — |
| `überraschend` | 9 | B1 | — |
| `Debatte` | 9 | B2 | — |
| `Fachzeitschrift` | 9 | C1 | — |
| `unvollständig` | 8 | B2 | — |
| `Wissenschaftlicher` | 8 | B2 | — |
| `Vorjahr` | 8 | C1 | — |
| `Fachartikel` | 8 | C1 | — |
| `Fachjournal` | 8 | C1 | — |
| `Zukunft` | 7 | A2 | — |
| `Anfänger` | 7 | A2 | — |
| `Unterstützung` | 7 | B1 | — |
| `künstliche` | 7 | B2 | — |
| `Intelligenz` | 7 | B2 | — |
| `Argumentation` | 7 | B2 | — |
| `Vereinbarung` | 7 | B2 | **yes** |
| `Ministerium` | 7 | B2 | — |
| `Gutachten` | 7 | C1 | — |
| `Lerngruppe` | 6 | A1 | — |
| `näher` | 6 | A2 | — |
| `Saal` | 6 | A2 | — |
| `Personal` | 6 | B2 | **yes** |
| `Wissenschaftler` | 6 | B2 | — |
| `Forschungsprojekt` | 6 | B2 | — |
| `Protokoll` | 6 | B2 | — |
| `Erhebung` | 6 | C1 | — |
| `Einwand` | 6 | C1 | **yes** |
| `hierfür` | 6 | C1 | — |
| `Leitung` | 5 | A1 | — |
| `Berufsmesse` | 5 | A2 | — |
| `kürzer` | 5 | A2 | — |
| `öfter` | 5 | A2 | — |
| `Geschäftsführer` | 5 | B2 | — |
| `Zeitungsbericht` | 5 | B2 | — |
| `Entdeckung` | 5 | B2 | — |
| `Berater` | 5 | B2 | — |
| `stärksten` | 5 | B2 | — |
| `Datenlage` | 5 | C1 | — |
| `Aussagekraft` | 5 | C1 | **yes** |
| `Forschungsartikels` | 5 | C1 | — |
| `stützt` | 5 | C1 | — |
| `Standard` | 5 | C1 | — |
| `Einreichung` | 5 | C1 | **yes** |
| `Kolloquium` | 5 | C1 | — |
| `Finanzierung` | 5 | C1 | — |
| `Fragestellung` | 5 | C2 | **yes** |
| `Vorstand` | 5 | C2 | — |
| `älteren` | 4 | A2 | — |
| `höhere` | 4 | B1 | — |
| `Leistung` | 4 | B2 | — |
| `Abteilungsleiterin` | 4 | B2 | — |
| `Produktivität` | 4 | B2 | — |
| `Agentur` | 4 | B2 | — |
| `Abteilung` | 4 | B2 | — |
| `Effizienz` | 4 | B2 | — |
| `verkündet` | 4 | B2 | — |
| `spürbar` | 4 | B2 | — |
| `Passiversatz` | 4 | B2 | — |
| `Kern` | 4 | B2 | — |
| `Quartal` | 4 | B2 | — |
| `Jubiläums` | 4 | B2 | — |
| `Mittel` | 4 | B2 | — |
| `Forschungspräsentation` | 4 | B2 | — |
| `Abweichung` | 4 | C1 | — |
| `Ansatz` | 4 | C1 | — |
| `Schlussfolgerung` | 4 | C1 | **yes** |
| `Veröffentlichung` | 4 | C1 | **yes** |
| `Einhaltung` | 4 | C1 | — |
| `Handelnde` | 4 | C1 | — |
| `Annahme` | 4 | C2 | — |
| `Aufsatz` | 4 | C2 | — |

The shape is consistent: **A1–A2 gaps are ordinary vocabulary and determiner
forms** (`Welche`, `Zuerst`, `Seien`, `Saal`, `Anfänger`), while **B2–C2 gaps
are the academic/administrative register** (`Stichprobe`, `Methodik`,
`Gutachter`, `Kolloquium`, `Fachjournal`, `Datenlage`). That matters for
authoring order: the low-level items are high-frequency and cheap; the C-level
items are numerous and specialised.

## 3. Bucket A alphabetically (first 100 of 1,268)

- `Abbildung×1[c1]`
- `Abfahrtszeiten×1[b2]`
- `Abgabe×1[c1]`
- `Ablehnung×2[c1]`
- `Ablenkung×1[b2]`
- `Abschiedsplanung×1[a2]`
- `Abschlussarbeit×1[c1]`
- `Abschlussarbeiten×1[c1]`
- `Abteilung×4[b2]`
- `Abteilungen×2[b2]`
- `Abteilungsleiter×1[b2]`
- `Abteilungsleiterin×4[b2]`
- `Abwanderung×1[c2]`
- `Abweichung×4[c1]`
- `Abweichungen×1[c2]`
- `Adjektivdeklination×2[b1]`
- `Adler×1[c2]`
- `Adversativangaben×1[c1]`
- `Agentur×4[b2]`
- `Akk×5[b2]`
- `Alleinernährer×2[b2]`
- `Alleinerziehenden×1[c2]`
- `Allesfresser×1[b2]`
- `Ältere×1[b2]`
- `älteren×4[a2]`
- `älterer×3[c1]`
- `altersabhängig×1[c1]`
- `Amtsgericht×1[c2]`
- `Amtsinhaber×1[b2]`
- `Analysierung×1[c1]`
- `Änderung×3[b2]`
- `Anerkennung×3[b2]`
- `Anfänger×7[a2]`
- `Anfangskosten×1[c1]`
- `Angemeldeten×2[c1]`
- `Ankündigung×1[b2]`
- `Anlagestrategie×1[c2]`
- `Anmeldesystem×1[c2]`
- `annähen×1[b1]`
- `Annahme×4[c2]`
- `Anpassungsfähige×1[c2]`
- `Ansage×2[b1]`
- `Ansatz×4[c1]`
- `Anstieg×11[b2]`
- `Anstrengung×1[b1]`
- `Anstrengungen×1[b2]`
- `Antikörper×1[c2]`
- `Antragsverfahren×1[c2]`
- `Anwalt×1[b1]`
- `Anwendung×3[b2]`
- `Anwesenheitspflicht×3[c1]`
- `Anwohner×1[c1]`
- `Anzahl×1[b2]`
- `Arbeitsgewohnheiten×1[b2]`
- `Arbeitsmarktpolitik×1[c2]`
- `Arbeitsprozesse×1[b2]`
- `Arbeitsschritt×1[c2]`
- `Architekturmagazin×1[c1]`
- `Argumentation×7[b2]`
- `Argumentativer×2[b2]`
- `ärmsten×1[c2]`
- `Armut×2[b1]`
- `Artgenossen×1[b2]`
- `aßen×2[b1]`
- `Assistentin×1[b1]`
- `Astronomin×1[b2]`
- `Attribut×1[c2]`
- `Auffälligkeiten×1[c2]`
- `Aufführung×3[b1]`
- `Aufgabenbereich×1[c1]`
- `Aufsatz×4[c2]`
- `Aufsatzes×2[b2]`
- `Aufwand×3[c1]`
- `Ausfällen×1[c2]`
- `Ausfalls×1[c2]`
- `ausführlich×3[b2]`
- `ausführliche×1[b2]`
- `ausführlicher×1[b2]`
- `Ausgangslage×2[c1]`
- `ausgewählte×1[b2]`
- `Auslassung×1[c2]`
- `Aussagekraft×5[c1]`
- `aussähe×1[c1]`
- `Ausschuss×2[c2]`
- `Ausschusses×2[c2]`
- `Außenseiter×1[b2]`
- `außergerichtlich×1[c2]`
- `Aussteller×1[b2]`
- `Ausweitung×1[c1]`
- `Auszug×1[c2]`

*(`Academic`, `Acknowledge`, `Acknowledging`, `Agree`, `Assumptions`, `Almut`,
`Annas`, `Antje`, `Antke`, `Angeklägte` were removed from this slice — English
residue and names, i.e. C and D. `Angeklägte` is additionally a misspelling of
*Angeklagte* in the source data.)*

The alphabetical view exposes the dominant pattern in A: **derivational and
compound noun families** — `Abteilung / Abteilungen / Abteilungsleiter /
Abteilungsleiterin`, `Abweichung / Abweichungen`, `Anstrengung / Anstrengungen`,
`ausführlich / ausführliche / ausführlicher`, `Ausschuss / Ausschusses`.
Authoring one canonical entry per family, then letting the existing plural and
declension waves derive the rest, collapses a large part of the 1,268.

## 4. Existing-lemma inflection gaps (bucket B) — 187 proposals

These need **no new vocabulary**: a canonical lemma already exists and the
surface should resolve to it. Highest-frequency, post-gate:

| Surface | × | Proposed lemma | Basis |
| --- | --- | --- | --- |
| `analysiert` | 22 | `analysieren` [Verb] | 3sg → infinitive |
| `Vielen` | 20 | `viel` [Quantifier] | declension -en |
| `weniger` | 19 | `wenig` [Adverb] | declension -er |
| `klare` | 18 | `klar` [Adverb] | declension -e |
| `vertraue` | 16 | `vertrauen` [Verb] | +n → infinitive |
| `echte` | 13 | `echt` [Adverb] | declension -e |
| `klarer` | 9 | `klar` | declension -er |
| `kurzen` | 8 | `kurz` | declension -en |
| `ehrliche` | 8 | `ehrlich` | declension -e |
| `Lass` | 8 | `lassen` [Verb] | +en → infinitive |
| `jemanden` | 7 | `jemand` [Pronoun] | declension -en |
| `vieles` | 7 | `viel` | declension -es |
| `kurze` | 7 | `kurz` | declension -e |
| `klaren` | 7 | `klar` | declension -en |
| `echter` | 6 | `echt` | declension -er |
| `unterstützt` | 6 | `unterstützen` [Verb] | 3sg → infinitive |
| `Ergänzungen` | 6 | `Ergänzung` [noun] | noun case -en |
| `direkte` | 5 | `direkt` [Adverb] | declension -e |
| `Trag` | 5 | `tragen` [Verb] | +en → infinitive |
| `Erster` | 4 | `erst` [Adverb] | declension -er |

**Why these did not already resolve.** `klar`, `echt`, `ehrlich`, `direkt`,
`kurz` are all authored as **Adverb**, so the adjective-declension wave (which
requires class `Adjective`) never fired for them. That is the same root cause I
previously mis-reported as a word-class error: the adverb entries are correct for
the sense they gloss, but the corpus also uses these words attributively, and
**no adjective lexeme exists for them**. This is a genuine data gap, not a
resolver bug — and it accounts for roughly a third of bucket B.

Rejected proposals to review before any of B is applied: `Zeuge → Zeug`,
`mehreren → mehr`, `letztes → letzte`, `besten → beste`, `fällt → fällen`,
`Fälle → fällen`.

## 5. New shared-form / collision cases (bucket F) — 6

All six are the **same structural case**, and it is a new one: a past participle
that is *also* authored as a standalone adjective, where the `-en` surface could
be either the declined adjective or the preterite plural of the verb.

| Surface | × | Candidates |
| --- | --- | --- |
| `beschädigten` | 2 | `beschädigt` [Adjective] · `beschädigen` [Verb] |
| `verstärkten` | 1 | `verstärkt` [Adjective] · `verstärken` [Verb] |
| `vermehrten` | 2 | `vermehrt` [Adjective] · `vermehren` [Verb] |
| `produzierten` | 1 | `produziert` [Adjective] · `produzieren` [Verb] |
| `strukturierten` | 2 | `strukturiert` [Adjective] · `strukturieren` [Verb] |
| `späterer` | 1 | `später` [Adverb] · `spät` [Adjective] comparative |

The first five are decidable **from syntax, not frequency**: in every corpus
occurrence they sit before a noun (`die beschädigten Teile`), which is the
adjective reading. That is exactly the evidence standard rule 3d requires, so
each would qualify for a pinned mapping to the adjective — but the occurrence
counts are 1–2, so the payoff is negligible and they can stay unindexed without
harm. `späterer` is a true toss-up and should stay unindexed.

**No new plural collisions of the `Studien` kind were found.**

## 6. Suspicious metadata conflicts found

1. **`Angeklägte`** (C2) — should be *Angeklagte*. Looks like a typo in chapter
   data. Reported, not changed.
2. **`aur×6`** (C2, noted in an earlier pass) — appears to be a typo for *auf*.
3. **Attributive-only adverbs** — `klar`, `echt`, `ehrlich`, `direkt`, `kurz`,
   `erst` are authored solely as Adverb while the corpus uses them
   attributively. Not an error in the existing entry; a missing sibling lexeme.
4. **`Akk`, `Gen`, `Dat`, `Nom`** are grammatical case abbreviations sitting in
   German-classified hosts. They are metalanguage (bucket C) but are currently
   counted in A/C inconsistently depending on capitalisation.
5. **`Fachjournal` / `Fachzeitschrift` / `Fachartikel`** each occur 8–9 times at
   C1 with no card and no entry — a coherent register family that looks like it
   was authored as prose without accompanying vocabulary.

## 7. Recommended authoring order

1. **Bucket B review and apply — 187 surfaces, 505 occurrences, no new
   vocabulary.** Reject the ~6 bad proposals, then map the rest. Highest
   value-per-effort in the whole backlog.
2. **The attributive-adjective family — ~15 lexemes, ~90 occurrences.** Author
   adjective siblings for `klar`, `echt`, `ehrlich`, `direkt`, `kurz`, `erst`
   etc. so the existing declension wave fires. Small, closed, unblocks a third
   of B.
3. **The 45 bucket-A items that already have an approved card.** Pure promotion
   into the dictionary — the metadata exists and is approved, nothing to write.
   Includes `Hypothese`, `Register`, `Überarbeitung`, `Einwand`, `Aussagekraft`,
   `Einreichung`, `Fragestellung`, `Schlussfolgerung`, `Veröffentlichung`.
4. **Compound/derivational families (~200–300 canonical entries).** One entry per
   family; the plural and declension waves derive the members.
5. **The C1/C2 academic register (~400–500 items).** `Stichprobe`, `Methodik`,
   `Gutachter`, `Kolloquium`, `Datenlage` … the largest and most specialised
   block; needs source verification per entry.
6. **Long tail of single-occurrence compounds (~400).** Lowest priority.
7. **Housekeeping, no authoring:** clean the character-name list so `Timo` and
   friends classify as D; move capitalised English (`Try`, `Legal`, `Political`,
   `Academic`) and case abbreviations to C; decide on the two suspected typos.

## Reproducibility

`chapter/qa-cat4-classify.js` is deterministic and re-runnable against the
stored capture (`localStorage.kw_scan_final`), and `chapter/_cardindex.json`
holds the 6,372-headword card index it classifies against. Full per-bucket lists
are available in `window.KW_CLS` after a run.
