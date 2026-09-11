# A1–C2 clickability audit — Phases 1 & 2

Method is runtime, not static: `chapter/qa-clickability-runner.html` loads every
chapter, waits for the Global Lexicon and its re-sweep, then records each word
inside a German-text container that the app did **not** wrap as `.rw` /
`.de-link`. Static field scanning was tried first and abandoned — chapter data
fields mix German, English and Hinglish under the same keys, so only the
rendered DOM shows what the app actually declined.

## Phase 1 — resolver waves (no new vocabulary)

`KW_INFLECTIONS` **10,849 → 20,607 keys**. Every key is derived from data the
curriculum already authored; `KW_GLOBAL_LEXICON` was not touched.

| Wave | Source field | What it fixes |
| --- | --- | --- |
| A | person-keyed `conj.*` objects | 131 verbs author conjugation as an object; the previous build read strings only and skipped them entirely |
| B | `conj.praesens` (string) | 3rd person, derived `du`, `ich`; separable split forms re-joined, `sich` stripped |
| C | derived from the `du` form | imperatives — `Gib`, `Vergiss`, `Beruhige`, `Stell` |
| D | separable infinitive | `zu`-infinitives — `teilzunehmen`, `anzukommen` |
| E | `compare.positive` / headword | adjective declension, incl. the contraction families `hoch → hohe`, `dunkel → dunkle`, `teuer → teure` |
| F | `plural` | noun dative plural `-n` — `Kindern`, `Worten` |
| G | `type` / article in `w` | noun genitive `-s`/`-es`, only where gender is actually stated |
| H | story lexicon | proper-name genitive — `Annas`, `Rohans`, `Webers` |
| I | existing determiner headwords | possessive/determiner paradigm |
| J | `praeteritum`, `perfekt`, `konjII`, `futur` | literal authored forms in every tense, not just present |
| K | `praeteritum` singular | Präteritum plural by suffix only — `konnten`, `wurden`, `hatten`, `gingen` |

Build guards, all documented in `BUILD_INFLECTION_INDEX.md`: 510 candidates
dropped as existing headwords, 5,319 already indexed (never overwritten), 80
dropped as genuinely ambiguous. 73 duplicate-headword pairs were recognised as
one lexical item rather than a collision.

### Two du-form derivation bugs found and fixed
- `hält` → `hälst` (wrong). A stem-final `t` absorbs the ending: `hältst`.
- `findet` → `findst` (wrong). An inserted `e` is kept: `findest`.

Both now key off the authored infinitive stem. No form with an umlaut change is
ever derived, so Konjunktiv II is deliberately absent from the index.

### Known test cases
| Word | Result |
| --- | --- |
| `mitmachst` | clickable — "to join in · शामिल होना", Verb, Conjugation, Example |
| `Beruhige` | clickable — "to calm down · शांत होना", Verb, Conjugation, Example |
| `zögert` | clickable — "to hesitate · हिचकिचाना", Verb, Conjugation, Example (authored in batch 3) |

No per-word exception was introduced. Every fix is a build rule over authored data.

## Phase 2 — complete A1–C2 corpus scan

259 chapters. 1 chapter (`chapter-a1-38-wechselpraep.html`) timed out and needs a re-run.

- **Clickable spans rendered: 190,140**
- **Distinct non-clickable surfaces: 3,348**

### Classification

| Category | Distinct | Occurrences | Meaning |
| --- | --- | --- | --- |
| **Resolvable, deliberately not linked** | 399 | 5,194 | Entry exists and the app excludes it on purpose: vocab-card article scaffolding (`die` ×2,498, `das` ×928), conjugation-table pronoun columns, function words inside English-context prose. Category G — correct as-is. |
| **English metalanguage** | 80 | 230 | `subject`, `meaning`, `adjective`, `These`. Category G. |
| **Fragments / graphemes / abbreviations** | 24 | 238 | `aa`, `ee`, `ge`, `II`, `KI`, `vs`, `pl`. Category G. |
| **Genuine German, umlaut-bearing** | 459 | 1,064 | `könnten` ×78, `Möchtest`, `Hätten`, `Wären`, `dürfte`, `müsste` — heavily Konjunktiv II. |
| **Genuine German, capitalised** | 1,241 | 2,942 | `Studie` ×129, `Rollenspiel` ×95, `Verantwortung`, `Hypothese` — plus proper names (`Timo` ×83, `Berger`, `Müller`). |
| **Genuine German, lowercase** | 1,144 | 5,710 | `der` ×1,723, `viele`, `diese`, `sowohl`, `weder`, `indem`, `dadurch`, `statt`, `worden`, `gegangen`. |

**Genuine German lexical surfaces still unresolved: ~2,844 distinct / ~9,716 occurrences**
(after removing English, fragments and the deliberate exclusions; proper names are
still inside the capitalised bucket and need separating).

### What the residue actually consists of
Three distinct problems, not one:

1. **Konjunktiv II of the modals and auxiliaries** — `könnten`, `hätten`, `wären`,
   `dürfte`, `müsste`, `sollten`. High frequency, closed set (~60 forms), and
   *not derivable*: they need an umlauted stem the data does not author. This is
   a small, unambiguous authoring job with a large payoff.
2. **Function words with no dictionary entry at all** — `der` (×1,723), `des`,
   `einer`, `diese`, `sowohl`, `weder`, `indem`, `dadurch`, `statt`, `viel`.
   The app resolves their grammatical role from its own runtime article/pronoun
   tables, but there is no lexical entry behind them, so no popup content. Also
   a closed class, roughly 80–120 items.
3. **Content vocabulary with no entry** — compound and specialist nouns
   (`Wanderarbeiter`, `Kommilitonin`, `Mülltrennung`, `Kolloquium`, `Studie`,
   `Hypothese`), plus verbs like `zögern` and `analysiert`. This is the bulk:
   roughly **1,900–2,300 distinct lexical items** once names are separated out.

## Data-quality findings to decide on (not changed)

- **`waren` → `Ware`** in the pre-existing index. A learner clicking `waren` in
  running text ("they were") is shown the noun "goods". This mapping predates
  this work and is a content correction, so it is reported, not silently changed.
- **80 unresolved ambiguities** left unindexed on purpose, e.g. `fällt` →
  fallen / fällen, `vermisst` → vermissen / vermessen, `bestimmten` → bestimmt /
  bestimmen. These need a human call; guessing would show a wrong meaning.
- **Duplicate headwords** for one lexical item: `sich freuen` / `freuen (sich)`,
  `passen` / `passen (match)`, `Hinweis` / `der Hinweis`, `Beitrag` /
  `der Beitrag`, `Anlass` / `der Anlass`, and 8 more. The build treats them as
  one; the underlying duplication is still in the vocabulary data.
- **774 nouns** carry a placeholder or multi-word `plural` value (`sgn`, `pln`)
  and are correctly skipped by the plural wave.
- **Gender is not a field.** It is inferable only from an article prefix in `w`
  or a `· masc./neut./fem.` marker in `type`, which is why the genitive wave
  produced just 73 keys. A real `gender` field would unlock noun case forms
  corpus-wide.

## Status against the acceptance criteria

| Criterion | Status |
| --- | --- |
| A1–C2 complete corpus scanned | met (258/259; one chapter to re-run) |
| Genuine German words non-clickable = 0 | **not met** — ~2,844 distinct remain |
| Empty popups for supported words = 0 | met for every word the resolver reaches |
| `mitmachst`, `Beruhige` clickable | met |
| `zögert` clickable | met (batch 3) |
| No per-word hardcoding | met |
| Curriculum content unchanged | met — no chapter data file was modified |

---

# Phase 3 — authoring (in progress)

Approved scope: all remaining content items, across sessions, flagging rather than
guessing anything unverifiable. Two batches are done; the content-vocabulary
programme is not.

## Batch 1 — Konjunktiv II of the modals and auxiliaries (9 entries, 26 index keys)

`können dürfen müssen sollen wollen mögen haben sein werden` each gained a
person-keyed `conj.konjII` object. Verified rule: Präteritum stem + subjunctive
endings, with umlaut for können/dürfen/müssen/mögen; sollen and wollen are
identical to their Präteritum (CORE Languages; Elon.io; grammatisch.com).
Not derivable by the build, because the umlaut is a stem change this build never
guesses — so it is authored as data and mined by the existing tense wave.

Now resolving: `könnten` (×78 corpus-wide), `könntest`, `hätten` (×23),
`wären` (×18), `würden` (×16), `dürfte` (×18), `müsste`, `sollten`.

## Batch 2 — closed-class function words (26 entries)

`der des ein eine einen einem einer eines dieser diese dieses diesen diesem
viel viele sowohl weder indem dadurch statt zur zum vom beim ins ans`

Style follows the existing `die`/`den`/`dem` entries exactly: the English gloss
carries the grammatical qualifier, Hindi carries the grammar note. These are
standard-grammar facts (definite/indefinite article and correlative-conjunction
paradigms), not semantic judgements.

**Honest caveat on this batch.** Spot-testing showed `der` and `viele` already
produced correct popups *before* these entries existed — the app resolves
articles and indefinite pronouns from chapter-local vocab and its own runtime
tables, which the Phase 2 scanner did not consult (it checked only
`KW_GLOBAL_LEXICON` and `KW_INFLECTIONS`). So the function-word share of the
Phase 2 residue was **overstated**, and this batch is complementary rather than
corrective: it gives those words a canonical global entry, but it did not unlock
1,723 occurrences of `der`. Those are non-clickable because of the app's
deliberate exclusion rules (vocab-card scaffolding), which is correct behaviour.

The Phase 2 numbers should therefore be read as an **upper bound** on the gap.
A corrected scan needs the scanner to ask the app's own resolver
(`lookupWord`) per surface rather than checking the two global tables.

## Batch 3 — the named test case and its page-mates (3 entries, 11 index keys)

Source: verbformen.com / Netzverb Dictionary.

| Entry | Verified facts | Source note |
| --- | --- | --- |
| `zögern` | regular; principal parts *zögert / zögerte / hat gezögert*; auxiliary **haben**; "hesitate, procrastinate" | verbformen.com/conjugation/zo3gern |
| `binden` | irregular, i–a–u ablaut; *bindet / band / hat gebunden*; auxiliary **haben**; present *ich binde, du bindest, er bindet* ("e" inserted because the stem ends in -d) | verbformen.com/conjugation/binden |
| `Bindung` | noun, **feminine** (-ung nouns are invariably feminine), plural *Bindungen*; "bond, attachment" | standard morphology |

`zögert` now opens "to hesitate · हिचकिचाना" with a Verb badge, Conjugation grid,
Example and working audio — the acceptance criterion is met. `gezögert`,
`gebunden` and `Bindung` resolve too, all previously landing on the no-data
fallback. `Antke` (proper name) and `Carsharing` (loanword) correctly keep the
fallback.


## Build-rule correction — split-form finite tokens (found in review)

`hinauszögern` authors its finite tenses split: `praeteritum: "zögerte hinaus"`.
The tense-mining rule (2d) reads such values word-by-word, so the bare token
`zögerte` was indexed onto **`hinauszögern`** — meaning a learner clicking plain
"zögerte" in running text was shown *"to delay, to postpone"* instead of
*"to hesitate"*. The particle is obligatory in the separable reading, so the bare
finite token is simply not a form of the separable verb.

Fixed at the build layer, not per word (new rule **2f** in
`BUILD_INFLECTION_INDEX.md`): for any authored two-token value whose second
token prefixes the infinitive, the bare finite token is **re-pointed to the simple
verb headword** obtained by stripping the particle (`hinauszögern` − `hinaus` →
`zögern`); where no simple headword exists it is **dropped entirely**, because a
non-clickable word beats a wrong meaning.

Corpus sweep after the fix, generalised to any surface indexed onto a prefixed
lemma while a simple verb headword exists:

| Effect of rule 2f over the 925 authored split-form values | Distinct surfaces |
| --- | --- |
| Re-pointed to the correct simple verb | **276** (`fiel`→fallen, `ordnet`→ordnen, `gehört`→gehören, `kommt`→kommen) |
| **Dropped** — no simple headword exists to re-point to | **86** (`fängt`, `fing`, `räumt`, `lädt`, `lud`, `schaltet`, `biegt`, `kreuzt` …) |
| Bare finite tokens still misattributed to a separable lemma | **0** |
| Prefixed-lemma keys legitimately carrying their prefix | 2,384 |

### The 86 drops are a regression against the headline criterion — stated plainly

Those 86 surfaces are ordinary A1–B1 finite verb forms that **were clickable
before this turn and are not now**. Dropping them is correct under 2f (they were
showing the *separable* verb's meaning, which is wrong — `fängt` was reading as
"to begin" via `anfangen`), but it moves the count for
"genuine German words remaining non-clickable" **up by 86**, and that must not be
buried in a table of zeros.

They are restored by authoring the missing simple-verb headword, which the
existing repoint path then picks up automatically — **no new rule needed**.
45 headwords are implicated:

- **40 are real standalone verbs** and are the right thing to author:
  `laden fangen räumen kreuzen schalten biegen leben lehnen leiten breiten
  stoßen bewahren treten wachen fordern strecken kehren reiben trauen weichen
  grenzen reißen schämen schwächen frieren rauben schwingen wärmen frieren
  erobern beziehen vollziehen hauen…` — of these, a handful (`riegeln`,
  `mauern`, `listen`, `haken`, `hinken`, `siedeln`, `wägen`) are rare or exist
  only marginally as standalone verbs and need a linguistic call before authoring.
- **5 must NOT be authored**: `loggen`, `cremen`, `strengen`, `fügen`, `regen`
  are bound stems that exist only with their prefix (`einloggen`, `eincremen`,
  `sich anstrengen`, `hinzufügen`, `anregen`). Inventing standalone entries for
  them would be fabricating vocabulary. Their bare forms stay non-clickable, and
  that is the correct end state.
- `fällt` is deliberately **not** on this list: it is already on the 425-item
  ambiguity list (`fallen` / `fällen`) and stays unindexed pending your review.

This was a latent defect in rule 2d, exposed only once `zögern` existed as a
headword (batch 3) to expose the contrast. The rule is now in the frozen build
spec, so regenerating the index cannot reintroduce it.

## Also completed this session

- **`waren` → `sein`** (was `Ware`). Approved correction; the verb reading
  dominates running text.
- **`gender` is now a real field on noun entries.** 144 came from an existing
  article prefix or type marker; **2,323 were derived from the chapter-authored
  example sentences** ("Der Apfel ist rot." states masculine as plainly as a
  field would), with **zero conflicting cues**. Coverage 2,467 / 4,346 nouns.
  This unlocked the genitive wave: **+1,955 keys** (`Klimawandels`, `Buches`,
  `Apfels`). **1,879 nouns still have no gender signal** and need authoring.
- **425 ambiguous surfaces exported** to `AMBIGUOUS-FORMS-FOR-REVIEW.md` for your
  review, each with both candidate lemmas, their word class and gloss. 43 bare
  separable particles (`ab`, `an`, `auf` …) were excluded — they are the trailing
  token of an authored split form, not word forms.

## Index growth this session

`KW_INFLECTIONS` **10,849 → 20,607** keys. `KW_GLOBAL_LEXICON` 7,802 → 7,831
entries (26 function words + 3 source-verified content entries), plus `conj.konjII` on 9 verbs and `gender` on 2,467
nouns. No chapter data file was modified.

## Remaining work

1. ~1,900–2,300 content lexical items (compounds, specialist nouns, verbs like
   `analysiert`) — the multi-session programme.
2. **40 simple-verb headwords** (`fangen`, `räumen`, `schalten`, `biegen`,
   `laden`, `kreuzen` …) whose absence keeps 86 ordinary finite verb forms
   non-clickable after rule 2f. Highest-value batch remaining: each headword
   restores 2–4 surfaces through the existing repoint path.
3. 1,879 nouns needing a gender value.
4. 425 ambiguous surfaces awaiting your decisions.
5. Re-run the corpus scan against the app's own resolver for a true residue count.
6. `chapter-a1-38-wechselpraep.html` scan timed out; needs a re-run.
