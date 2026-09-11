# Shared inflected forms — architecture analysis

Scope: can `Studie` coexist with the existing `Studium` when both have the
plural `Studien`? Answered from the code and data only; nothing was
implemented, and the simulations below ran against live objects in the preview,
never against disk.

## 1. How the architecture handles multiple lemmas per surface

`resolveLemma()` is a **strictly ordered, first-match-wins cascade**:

| # | Step | Confidence |
| --- | --- | --- |
| 1 | Exact match against a Global Lexicon **headword** | `exact` |
| 2 | Closed-set article / pronoun declension tables | `exact` |
| 3 | `KW_INFLECTIONS` data-derived index | `high` |
| 4 | Compound split into two known lemmas | `medium` |
| 5 | Give up — returns `{lemma: null, confidence: 'unresolved'}` | — |

**`KW_INFLECTIONS` is a flat 1:1 `string → string` map.** It structurally cannot
express "this surface has two valid lemmas". There is no ambiguity list, no
disambiguation hook, and `lookupWord` never asks a second question once a lemma
resolves.

The build compensates rather than the runtime: when two lemmas claim one key it
**drops the key** (rule 3b), leaving the surface unindexed. The runtime then has
three remaining ways to produce a popup — an exact headword match, chapter-local
`WORDIDX`, and the `KW_GLOBAL_CAPS` overlay — and `mergeWordData` merges
whatever hits, richest field winning.

### Case-sensitivity
The dictionary is keyed by `normWord()` (lowercased), so `kosten`/`Kosten`
collide on one key. `KW_GLOBAL_CAPS` is the case-sensitive escape hatch,
consulted **only** for a capitalised surface, and it accepts either an object
(a real entry) or a **bare string alias** meaning "this capitalised surface is an
inflected form of that headword" — `Fällen → Fall`, `Grüßen → Gruß`. Aliases
create no duplicate entry.

### Popup selection when several sources hit
There is no "pick one lemma" decision. Sources merge. Precedence is
chapter-local vocab → caps overlay → dictionary → lemma paths → function-word
lexicon, with one documented inversion: a capitalised surface away from sentence
start lets the overlay's noun outrank a non-noun local reading. Two homograph
guards (`expectedClass` / `classesCompatible`) discard an incompatible entry
**completely** rather than merging a stray field from it.

## 2. Focused test results (current state)

| Surface | Route | Result |
| --- | --- | --- |
| `Studium` | headword, `exact` | "studies, degree course", Noun ✓ |
| `Studie` | none | **unresolved, not clickable** |
| `Studien` | index → `Studium`, `high` | lemma **Studium** ✗ |
| `Universität` | headword | "university" ✓ |
| `Universitäten` | index → `Universität` | ✓ no collision |
| `Zimmer` | headword | ✓ singular = plural needs no index entry |
| `Kosten` | headword + caps object | "costs (pl.)" ✓ |
| `Fällen` | caps **string alias** → `Fall` | ✓ alias mechanism works |

### An existing wrong popup, found by this analysis
On **C1·18**, whose text reads *"Mehrere international anerkannte
wissenschaftliche Studien bestätigen diese These"* (research studies), clicking
`Studien` currently shows **"studies, degree course"** with lemma `Studium`.
That is the wrong lexeme, and it is live today — independent of whether
`Studie` is ever added.

On C1·23 the same surface reads correctly, because that chapter authored a local
token (`{w:'Studien', en:'studies (Satzende, part of comparison)'}`) which
outranks the dictionary. So the defect is invisible in one chapter and visible
in the other.

## 3. Can the architecture support `Studie` + `Studien`?

**Yes — no code change is required.** Simulation, run three ways:

| Scenario | `Studie` | `Studien` | `Studium` |
| --- | --- | --- | --- |
| Today | not clickable | "degree course", lemma Studium ✗ | ✓ |
| Add `Studie`, leave index alone | ✓ "study" | still lemma Studium ✗ | ✓ |
| Add `Studie` + **repoint** `studien→Studie` | ✓ | ✓ lemma **Studie** | ✓ **unaffected** |
| Add `Studie` + **unindex** `studien` | ✓ | ✗ **not clickable** on C1·18 | ✓ |

The generic collision rule (drop the key) would therefore **cause a regression
here**, because `Studien` has no other resolution route on most pages.

### Why repointing is evidence-based, not a frequency guess
Every bare `Studien` occurrence in the corpus is the research sense:
- C1·18 grammar, error-correction and writing starter — "wissenschaftliche Studien", "mehrere interessante Studien"
- C1·23 parser token, authored gloss "studies", and writing starter "frühere Studien"
- C2·06 reading comprehension

The degree-course sense appears only inside **compounds** (`Englisch-Studium`,
`Studienergebnisse`, `Studienleiterin`), never as bare `Studien`. So the
ambiguity is real in German but **not realised in this curriculum** — the losing
reading has zero occurrences.

## 4. Other plural collisions that already exist

48 authored plurals are claimed by more than one headword. Split honestly:

**~35 are not collisions at all** — the duplicate-headword artefact
(`Hinweis`/`der Hinweis`, `Möglichkeit`/`die Möglichkeit`, `Ecke`/`die Ecke`).
One lexical item under two spellings; the build canonicalises them, so picking a
winner is correct.

**~13 are genuine distinct-noun collisions**, and the architecture already
handles them the safe way — **left unindexed**:

| Key | Claimants | Indexed? |
| --- | --- | --- |
| `kliniken` | Klinik / **Klinikum** | unindexed ✓ |
| `daten` | Daten / **Datum** | unindexed ✓ |
| `chips` | Chips / Chip | unindexed ✓ |
| `sportarten` | Sport / Sportart | unindexed ✓ |
| `stockwerke` | Stock / Stockwerk | unindexed ✓ |
| `ratschläge` | Ratschlag / Rat | unindexed ✓ |
| `gefahren`, `papiere`, `nachrichten`, `zweifel`, `reiseführer`, `teilnehmende` | — | unindexed ✓ |

`kliniken` (Klinik vs Klinikum) is **structurally identical to Studien (Studie vs
Studium)** and is the existing precedent.

Two indexed cases are sense-variants of one word, not collisions: `karten`
(Karte / Karte (map) / Karte (pay)) and `plätze` (Platz / Platz (Quadrat)).

### Singular-vs-plural homographs — 52, all already safe
A noun's plural can equal an unrelated **verb** headword: `arbeiten`,
`stellen`, `zahlen`, `reisen`, `feiern`, `duschen`, `pflanzen`, `mitten`,
`aussagen`. Step 1 of the cascade (exact headword) wins, so the verb resolves;
the capitalised noun reading comes from `KW_GLOBAL_CAPS`. Working as designed.

## 5. Safest implementation plan (not executed)

1. **Add one canonical entry** `Studie` — `{w:'Studie', type:'Noun', gender:'f',
   plural:'Studien', en:'study', hi:…}`. No duplicate: no `studie` key, no caps
   entry, no vocab card exists anywhere.
2. **Repoint `studien → Studie`** in `KW_INFLECTIONS` (a one-key edit, not a new
   mechanism). Justified by zero corpus occurrences of the Studium reading.
3. **Record the exception in `BUILD_INFLECTION_INDEX.md`** so a future rebuild
   does not apply rule 3b and drop the key. This is the only part that needs
   care: without it, the next build silently regresses `Studien`.
4. Leave `Studium` untouched — verified unaffected in simulation.

### Impact on existing popups
- `Studium`: unchanged.
- `Studien`: **corrected** from "degree course" to "study" — fixes a live defect.
- C1·23's local token keeps supplying its own occurrence gloss (local outranks
  dictionary), so its popup text does not change; only the lemma pointer does.
- No other surface touched. No code change. No curriculum content change.

### What I would NOT do
Extend `KW_INFLECTIONS` to hold lemma lists and teach the popup to show two
readings. It would be the linguistically complete answer, but it is a resolver
and renderer change affecting all 23,757 keys to serve ~13 genuine collisions,
12 of which are already correctly unindexed. Not proportionate.

## Open question for you
`Studien` currently shows the wrong lexeme on C1·18 **today**. If you would
rather not add `Studie` yet, the same one-key repoint cannot be applied alone
(there would be no `Studie` to point at), so the alternatives are: leave the
wrong popup, or unindex `studien` and accept it becoming non-clickable. Adding
the entry is the only option that fixes it.
