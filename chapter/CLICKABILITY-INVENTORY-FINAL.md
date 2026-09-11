# Final A1–C2 runtime clickability inventory

**Method.** The scanner no longer re-implements resolution. `chapter-app.js` now
exposes a read-only QA seam (`window.KW_resolve`) holding the REAL closure
functions — `normWord`, `resolveLemma`, `lookupWord`, `resolveClickableWord`,
`hasMeaningfulEntry`. Every rendered German surface is put through
`KW_resolve.probe()`, so chapter-local vocab, the article/pronoun declension
tables, the inflection index, compound splitting and the story lexicon are all
consulted exactly as they are for a real learner click. The scanner also OPENS
popups and reads what renders, so "clickable" is never accepted as a proxy for
"useful".

Three scanner defects were found and fixed before the numbers below were trusted:

1. `closest('[lang="en"]')` in the skip rule matched every element through
   `<html lang="en">` and rejected the whole document — the first run reported
   zero surfaces.
2. A hand-written container selector list matched nothing on real pages. Replaced
   with a self-calibrating rule: a German container is any element that already
   contains a linked German word.
3. Host language matters. `.story-line` / `.reading-passage` / `.vword-ex` are
   pure German, but `.grammar-text` / `.mistake-why` / `.lede` are **English
   sentences with German terms linked inside them**. Counting their unlinked
   words as German gaps is what filled the earlier estimate with "different",
   "clauses", "subjects" and "performs". Hosts are now classified by composition,
   and a word also seen in English prose elsewhere on the page is not counted
   as German.

## Headline numbers — complete corpus

| Measure | Value |
| --- | --- |
| Chapters scanned | **259 / 259** (A1–C2, no timeouts) |
| Clickable spans rendered | **193,327** |
| German surface occurrences examined (unlinked, in German hosts) | **9,141** |
| Distinct unlinked surfaces classified | **9,479** |
| Popups opened and read | **10,518** |
| **Popup defects** | **0** |

Popup verification found **no** case of the no-data fallback appearing for a word
the resolver has data for, and **no** popup rendering with neither meaning nor
fallback.

## Classification

| # | Category | Distinct | Occurrences |
| --- | --- | --- | --- |
| 1 | Already resolves through the app's runtime lookup | **741** | 1,394 |
| 2 | Correctly excluded (non-lexical / UI / English / Hindi / fragments) | **5,577** | 81,765 |
| 3 | Existing entry but resolver/inflection gap | **85** | 323 |
| 4 | Genuine German lexical item, no usable metadata | **3,071** | 6,280 |
| 5 | Genuinely ambiguous surface | **5** | 13 |

**Category 4 is an upper bound, not a work list.** By surface shape only ~1,481
of the 3,071 are plausibly German; the remainder is residual English
metalanguage the composition test did not catch. The German subset is the real
authoring backlog.

### 1 — Already resolves at runtime (741)
Not linked in the swept prose, but the resolver returns usable data: the app
excludes them deliberately (vocab-card scaffolding, conjugation-table pronoun
columns). Examples: `Die` ×28 (Article, plural), `eine` ×26, `er` ×24,
`auf` ×18, `dass` ×18, `einen` ×13 (Article · masc. acc.), `den` ×10.
**This is the category that invalidated the earlier estimate** — these were
previously counted as gaps.

### 2 — Correctly excluded (5,577)
`the` ×4,346, `and` ×1,944, `is` ×1,295, `to` ×812 (English explanation prose);
`Pl` ×3,861 and `B` ×1,327 (table abbreviations); plus the orthography-guard
cases where a lowercase English word collides with a capitalised German noun —
`not`/Not, `person`/Person, `kind`/Kind, `plan`/Plan, `test`/Test. Refusing
those is the guard working correctly: linking English "not" to *die Not* would
show a learner "need, distress".

### 3 — Resolver gaps (85 distinct, 323 occurrences)
Almost entirely **capitalised nominalised infinitives whose noun entry is
missing** while the verb entry exists:

| Surface | × | Lexicon has | Learner needs |
| --- | --- | --- | --- |
| `Kosten` | 78 | Verb "to cost" | *die Kosten* — costs |
| `Unternehmen` | 38 | Verb "to undertake" | *das Unternehmen* — company |
| `Fragen` | 32 | Verb "to ask" | *die Fragen* — questions |
| `Regeln` | 9 | Verb "to regulate" | *die Regeln* — rules |
| `Vertrauen` | 9 | Verb "to trust" | *das Vertrauen* — trust |
| `Antworten` | 6 | Verb "to answer" | *die Antworten* — answers |
| `Schaden`, `Arbeiten`, `Nutzen`, `Sprechen`, `Vorhaben` | 5 each | Verb | the noun |

The guard is right to refuse — showing "to cost" for *die Kosten* would be wrong.
The fix is authoring ~85 noun entries, a well-defined batch.

### 3b — Two derivation gaps found by probing (system-level, not content)

**(i) Modal du-forms are never derived — 9 verbs, closed set.** The du-form
derivation requires the authored 3rd-person singular to end in `-t`. Modals have
no ending at all (`kann`, `will`, `muss`, `darf`, `soll`, `mag`, `weiß`,
`wird`, `möchte`), so `kannst` ×19, `Willst` ×19, `musst`, `darfst`, `sollst`,
`magst`, `weißt`, `wirst`, `möchtest` resolve to **nothing** — despite
`können`/`wollen` being fully authored. These are among the most frequent verb
forms in A1–B1 speaking sections. Fix: author the full `praesens` person object
for those 9 verbs, exactly as was done for `konjII`; the existing wave then mines
them. No new rule, no morphology guessing.

**(ii) Mis-typed entries block the adjective wave.** `klar` is typed
`Adverb` and `letzte` is typed `Noun`, so `klare` ×21 and `letztes` ×20 are
never derived. `natürlich` is also `Adverb`. These are data-typing errors, not
resolver bugs — reported rather than changed, since correcting a word class is a
curriculum decision.

### 4 — Genuine German, no usable metadata (~1,481 German of 3,071)
Highest frequency first: `Rollenspiel` ×95, `Studie` ×91, `Timo` ×83 (proper
name), `Welche` ×38, `Reform` ×27, `analysiert` ×22, `Betreuerin` ×21,
`Zuerst` ×20, `Kommission` ×18, `Gutachter` ×18, `Software` ×16,
`Hypothese` ×15, `Verantwortung` ×14, `Stichprobe` ×14, `Methodik` ×14,
`sorgfältig` ×13, `förmlich` ×12. Also `vertrauen` (entry exists but carries
**no `conj`**, so `vertraue` ×17 cannot resolve) and genuinely absent entries
`stabil` ×19, `dein`.

### 5 — Genuinely ambiguous (5)
These expose a **data defect worth your attention**: the genitive resolves to a
lemma that is itself an inflected form, because the lexicon headword is stored in
plural or dative shape.

| Surface | Resolves to | Should be |
| --- | --- | --- |
| `Preises` ×6 | `Preise` (plural) | *Preis* |
| `Hauses` ×4 | `Hause` (dative) | *Haus* |
| `Jahres` ×1 | `Jahre` (plural) | *Jahr* |
| `Annas` ×1 | `Anna` | fine (proper name) |
| `meins` ×1 | `Mein` | *mein* |

Separately, **5 authored 3rd-person forms stay unindexed on collision**:
`fällt` (fallen / fällen), `vermisst` (vermissen / vermessen), and `gefällt`
(×15) which needs review — its only obvious source is `gefallen`.

## Regression tests — all passing

| Test | Result |
| --- | --- |
| `mitmachst` | clickable · "to join in · शामिल होना" · lemma `mitmachen` |
| `zögert` | clickable · "to hesitate · हिचकिचाना" · lemma `zögern` |
| `Beruhige` | clickable · "to calm down · शांत होना" · lemma `sich beruhigen` |
| `waren` → sein | "were (wir/sie · sein · Präteritum)", Verb |
| `gezögert` → `zögern` | correct |
| `gebunden` → `binden` | correct |
| `Bindung` → `Bindung` | correct, Noun |
| `der` | "the (masc.)", Article |
| `viele` | "many", Indefinitpronomen |

## Files changed this turn

- `chapter/chapter-app.js` — added the read-only `window.KW_resolve` QA seam.
  No product code path reads it; nothing mutates state.
- `chapter/qa-clickability-scan2.js` — new resolver-based, popup-verifying,
  language-aware scanner.
- `chapter/qa-clickability-runner.html` — drives the new scanner and accumulates
  the five categories.

No chapter content, dialogue, grammar, vocabulary or curriculum progression was
touched.

## Recommended order of work

1. **9 modal `praesens` objects** — closed set, verifiable, restores `kannst`,
   `willst`, `musst`, `darfst`, `sollst`, `magst`, `weißt`, `wirst`,
   `möchtest`. Highest frequency-per-entry of anything remaining.
2. **~85 nominalised noun entries** (`die Kosten`, `das Unternehmen`, `die
   Fragen` …) — clears category 3 outright.
3. **40 simple-verb headwords** from the rule-2f review (restores 86 surfaces).
4. **~1,481 content items** — the long programme.
5. Your decisions on the 425 ambiguity list, the 5 plural-shaped headwords, and
   the `klar`/`letzte`/`natürlich` word classes.
