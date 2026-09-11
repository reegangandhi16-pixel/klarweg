# Systemic fixes — before → after

Baseline: the runtime inventory in `CLICKABILITY-INVENTORY-FINAL.md`.
All numbers below come from the same resolver-based scanner over all 259 chapters.

## Complete A1–C2 scan totals

| | Before | After |
| --- | --- | --- |
| Chapters | 259 / 259 | **259 / 259** |
| Clickable spans | 193,327 | **193,513** |
| Popups opened and read | 10,518 | **10,506** |
| **Popup defects** | 0 | **0** |

| Category | Before | After |
| --- | --- | --- |
| 1 Resolves at runtime | 741 / 1,394 | 737 / 1,377 |
| 2 Correctly excluded | 5,577 / 81,765 | 5,553 / 81,625 |
| **3 Resolver / inflection gap** | **85 / 323** | **75 / 188** |
| 4 Genuine German, no metadata | 3,071 / 6,280 | 3,049 / 6,173 |
| **5 Genuinely ambiguous** | **5 / 13** | **0 / 0** |

Category 3 occurrences fell **42%** (323 → 188). Category 5 is **cleared**.

## 1. Modal / auxiliary du-forms — 9 verbs, complete set

Root cause **(A) resolver**: the du-form derivation requires the authored 3rd-sg
to end in `-t`. Modals have no ending at all, so nothing derived.

Fixed by authoring the full `praesens` person object (the shape `sein` already
used) on `können dürfen müssen sollen wollen mögen wissen werden möchten`, then
letting the existing person-object wave mine it. Standard Präsens paradigms;
no morphology guessed, no per-word resolver code.

**Now resolving:** `kannst` `könnt` `darfst` `musst` `sollst` `willst`
`magst` `weißt` `wirst` — plus the 28 forms that were already reachable.

## 2. Category 3 — root cause found, and it was structural

The dictionary is keyed by `normWord()`, i.e. **lowercased**. So one key cannot
hold both `kosten` (Verb, to cost) and `Kosten` (Noun, costs) — whichever is
written last wins and the other becomes **structurally unreachable**. The
orthography guard then correctly refused to link the capitalised surface rather
than show "to cost" for *die Kosten*. This is **(A) a resolver/data-structure
problem, not missing content**: the noun meanings were already approved chapter
vocabulary, just unreachable.

**Fix:** `window.KW_GLOBAL_CAPS`, a case-sensitive overlay keyed by the exact
capitalised headword, consulted only for a capitalised surface, and added to
`CASE_INDEX()`. Precedence: chapter-local vocab still wins, except that when
every other source offers only a non-noun reading the overlay's noun wins —
otherwise `Treffen` keeps reporting "to meet" purely because the chapter
teaches the verb.

**27 entries**, harvested from the curriculum's own vocab cards — no new
meanings written. 5 further candidates (`Sie`, `Ihnen`, `Argentinien`,
`Indonesien`, `Niederlande`) were excluded: the global entry already carries the
same meaning, so there was no conflict to resolve.

Verified: `Kosten` → "costs (pl.)" Noun · `Unternehmen` → "company, enterprise" ·
`Wissen` → "knowledge" · `Treffen` → "meeting" · `Essen` → "meal, food" ·
`Perfekt` → "perfect tense" · `Rennen` → "race". Lowercase verbs unchanged:
`kosten` → "to cost", `essen` → "to eat", `treffen`, `wissen`, `gefallen`.

### The remaining 75 are category (C), not (A)
`Fragen` ×37, `Regeln` ×9, `Vertrauen` ×9, `Antworten` ×6, `Schaden` ×5,
`Arbeiten` ×5, `Nutzen` ×5, `Sprechen` ×4, `Mieten` ×4, `Handeln` ×4,
`Bedenken` ×4 … Each is a real German noun with **no authored noun entry
anywhere in the curriculum** — verified individually, not assumed. `Vertrauen`
is the clearest case: it is not in any vocab card, so there is nothing to
promote. Recorded for the authoring batch; inventing glosses here would be
fabrication.

## 3. Rule-2f verb headwords — investigated, mostly not fixable without new entries

Of the 44 simple-verb headwords whose absence keeps 86 finite forms
non-clickable, only **3 now exist** (`laden`, `leben`, `regen`) and those
already repoint correctly through the existing rule. The other **41 do not
exist as entries** (`fangen`, `räumen`, `schalten`, `biegen`, `kreuzen`,
`treten`, `stoßen` …), so there is nothing for the resolver to derive from —
category **(C)**, recorded, not authored, per your instruction. 5 of them
(`loggen`, `cremen`, `strengen`, `fügen`) remain **must-not-author** bound stems.

## 4. Word-class metadata — my earlier claim was wrong, and I am correcting it

I previously reported `klar` and `letzte` as objectively mis-typed. **That was
my error**: I inferred from the `type` field without reading the authored gloss.

- `klar` is authored as **"of course, sure"** (ज़रूर, *Klar, machen wir das!*) —
  that is the adverb/interjection sense, and `Adverb` is **correct**.
- `letzte` is authored as **"Letzte — the last one"** with plural *Letzten* —
  a genuine nominalisation, and `Noun` is **correct**.

So there were **0 word-class corrections to make**. What `klare` ×21 and
`letztes` ×20 actually need is the *adjective* lexemes `klar` (clear) and
`letzt` (last), which are different words from the authored adverb and noun.
That is category **(C) missing lexical data**, not **(B) incorrect metadata** —
reclassified accordingly. No entry was changed.

## 5. Ambiguous surfaces — 5 → 0, by structure not by frequency

None of the five was a semantic ambiguity. All five were **dangling index
targets**: the genitive pointed at a lemma string that was not a dictionary
headword at all, so the popup named a word the dictionary did not know.

| Surface | Was | Now |
| --- | --- | --- |
| `Preises` | → "Preise" (no entry) | → **Preis** |
| `Hauses` | → "Hause" (no entry) | → **Haus** |
| `Jahres` | → "Jahre" (no entry) | → **Jahr** |
| `meins` | → "Mein" (no entry) | dropped — no backing entry |
| `Annas` | → "Anna" (no entry) | dropped — proper name, no entry |

Generalised: **9 dangling genitive targets repointed** to their real singular
headword (`Arbeit`, `Besuch`, `Freund`, `Kauf`, `Koch`, `Spiel` …), and every
index target is now verified to be backed by a real entry.

**A mistake I made and repaired here.** My first dangling test used
`L[lemma.toLowerCase()]`, which does not account for headword keys stored
without `sich` or an article — so it wrongly deleted 98 valid keys including
every reflexive verb form (`auseinandergesetzt`, `bewarb`). I caught it,
rebuilt the derivation with a resolver-faithful backing test, and restored
**1,541 keys**. Index: 20,518 → **22,059**, 0 dangling targets remaining, 63
genuine collisions still correctly unindexed.

## Classification of everything found

| | Kind | Count | Action taken |
| --- | --- | --- | --- |
| **A** | Resolver / data-structure problem | 9 modal paradigms · 27 unreachable noun homographs · 9 dangling targets · 1,541 restored keys | **fixed** |
| **B** | Incorrect metadata | **0** | none needed — my earlier claim was wrong and is retracted |
| **C** | Genuinely missing lexical data | 75 nominalised nouns · 41 simple verbs · `klar`/`letzt` adjectives · ~1,481 content items | recorded, not authored |
| **D** | Legitimate non-lexical exclusion | 5,553 distinct / 81,625 occ | correctly excluded |

## Files changed

- `chapter/global-lexicon.js` — `conj.praesens` objects on 9 modals; new
  `KW_GLOBAL_CAPS` overlay (27 entries); `KW_INFLECTIONS` 20,607 → **22,059**.
- `chapter/chapter-app.js` — case-sensitive overlay consulted in `lookupWord`
  and `CASE_INDEX()`, with the noun-precedence rule. No per-word exception.
- `chapter/qa-clickability-scan2.js`, `qa-clickability-runner.html` — scanner.

No chapter wording, dialogue, grammar explanation, curriculum progression or
vocabulary teaching content was touched.

## Remaining, to reach zero

| Work | Count |
| --- | --- |
| Nominalised noun entries (clears category 3) | 75 |
| Simple-verb headwords (restores 86 finite forms) | 41 |
| Content lexical items | ~1,481 |
| Your decisions on the 425-item ambiguity list | 425 |

Genuine German learner-facing words still non-clickable: **~1,600 distinct**
(75 + 41 + ~1,481, less overlap), all category (C). Every one now has a
recorded reason; none is blocked by a resolver defect.
