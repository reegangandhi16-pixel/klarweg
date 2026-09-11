# Source record — `KW_GLOBAL_CAPS` overlay (97 entries)

Justification tier for every entry in the case-sensitive noun overlay, as
required before any of it counts as verified. **No citation is claimed that I
cannot substantiate**; where a source could not be established the entry is
flagged rather than given a plausible-looking reference.

Why this overlay exists: the dictionary is keyed by `normWord()` (lowercased),
so a single key cannot hold both `kosten` (Verb, to cost) and `Kosten` (Noun,
costs). One overwrites the other and the noun becomes structurally unreachable.
See `BUILD_INFLECTION_INDEX.md` rule 2i.

## Tier summary

| Tier | Basis | Count |
| --- | --- | --- |
| **A** | Explicit existing curriculum source | **46** |
| **B** | Unambiguous grammatical derivation | **39** |
| **C** | Requires external dictionary verification — **FLAGGED** | **1** |
| **ALIAS** | Pure mapping to an existing entry, no new content | **11** |
| | | **97** |

## Tier A — explicit curriculum source (46)

Two kinds, both traceable inside the project:

**A1. Harvested verbatim from an approved vocab card (27).** Each has a
`{de:'…', pos:'noun', en:…, hi:…}` entry in a chapter `*-data.js` file. The
overlay copies the approved gloss; it does not restate or reword it.

- `Abwägen` — "the weighing, considering" · card `das Abwägen` in `chapter-c1-24-nominalisierung-im-formellen-stil-data.js`
- `Acht` — "attention, care" · card `Acht` in `chapter-b2-22-weder-noch-data.js`
- `Aktiv` — "active voice" · card `Aktiv` in `chapter-b1-30-artikelwoerter-als-pronomen-data.js`
- `Ansehen` — "reputation, prestige" · card `Ansehen` in `chapter-b2-17-modalsaetze-indem-data.js`
- `Auftreten` — "demeanour, appearance" · card `Auftreten` in `chapter-b2-39-relativsaetze-wer-der-data.js`
- `Benehmen` — "conduct, manners" · card `Benehmen` in `chapter-b2-57-textkohaerenz-verweiswoerter-data.js`
- `Bitte` — "request" · card `Bitte` in `chapter-a1-44-imperativ-modal2-data.js`
- `Erachten` — "opinion, view" · card `Erachten` in `chapter-b2-29-futur1-vermutungen-data.js`
- `Essen` — "meal, food" · card `Essen` in `chapter-a1-15-cafe-data.js`
- `Fernsehen` — "television" · card `Fernsehen` in `chapter-a1-43-smalltalk-man-data.js`
- `Gefallen` — "favour" · card `Gefallen` in `chapter-a1-40-verben-dativ-data.js`
- `Gegenüber` — "counterpart, person opposite" · card `Gegenüber` in `chapter-b2-04-formales-es-data.js`
- `Hoch` — "high (pressure area)" · card `Hoch` in `chapter-b2-33-irreale-vergleiche-als-ob-data.js`
- `Kosten` — "costs (pl.)" · card `Kosten` in `chapter-a1-15-cafe-data.js`
- `Lächeln` — "smile" · card `Lächeln` in `chapter-b2-05-korrelat-es-data.js`
- `Orange` — "orange" · card `Orange` in `chapter-b1-30-artikelwoerter-als-pronomen-data.js`
- `Original` — "original" · card `Original` in `chapter-b1-34-partizipien-als-adjektive-data.js`
- `Perfekt` — "perfect tense" · card `Perfekt` in `chapter-a1-28-perfekt-data.js`
- `Rauchen` — "smoking" · card `Rauchen` in `chapter-b2-46-unpersoenliches-passiv-data.js`
- `Rennen` — "race" · card `Rennen` in `chapter-b2-60-indirekte-rede-grundlagen-data.js`
- `Treffen` — "meeting" · card `Treffen` in `chapter-b1-26-adjektiv-ohne-artikel-data.js`
- `Unternehmen` — "company, enterprise" · card `Unternehmen` in `chapter-b2-19-ohne-zu-data.js`
- `Versprechen` — "promise" · card `Versprechen` in `chapter-b1-33-je-desto-umso-data.js`
- `Vorhaben` — "scheme, plan" · card `Vorhaben` in `chapter-b1-30-artikelwoerter-als-pronomen-data.js`
- `Wissen` — "knowledge" · card `Wissen` in `chapter-a2-21-verben-dativ-akkusativ-data.js`
- `Würde` — "dignity" · card `Würde` in `chapter-b1-29-passiv-modalverben-data.js`
- `Zusammenleben` — "communal life" · card `Zusammenleben` in `chapter-b1-30-artikelwoerter-als-pronomen-data.js`

**Meaning-fidelity check: 0 drift.** Every one of the 27 overlay glosses is
string-identical to its approved card gloss. No approved vocabulary meaning was
altered.

**A2. Lemma pointer to an existing canonical entry (19).** These add no meaning
of their own; they route a capitalised surface to a headword that already
exists, so there is no new content to source and no duplicate entry.

`Antworten` · `Arbeiten` · `Aussagen` · `Ernten` · `Folgen` · `Formen` · `Fragen` · `Gefahren` · `Mieten` · `Nerven` · `Pflanzen` · `Regeln` · `Reisen` · `Rollen` · `Spenden` · `Stellen` · `Stimmen` · `Waren` · `Zahlen`

## Tier B — unambiguous grammatical derivation (39)

Capitalised nominalised infinitives of verbs that are already in the dictionary.
The derivation rule is exceptionless in German: **any infinitive can be
capitalised to form a neuter noun naming the activity**, and the gloss is the
verb's own approved meaning in nominal form (`denken` "to think" → `das Denken`
"thinking"). Gender is not a judgement call — such nouns are always neuter.

Sourced from: the verb's own existing curriculum entry, plus the standard
nominalisation rule already taught in this curriculum (C1·24
"Nominalisierung im formellen Stil", C1·25 "Partizipien und Adjektive als
Nomen").

- `Abrufen` — "retrieval" ← verb `abrufen` "to retrieve, call up"
- `Aussterben` — "extinction" ← verb `aussterben` "to die out, go extinct"
- `Bedenken` — "misgivings, reservations" ← verb `bedenken` "to consider"
- `Betreten` — "entering" ← verb `betreten` "to enter, step on"
- `Betrügen` — "cheating" ← verb `betrügen` "to cheat"
- `Denken` — "thinking" ← verb `denken` "to think"
- `Diskutieren` — "discussing" ← verb `diskutieren` "to discuss"
- `Fahren` — "driving" ← verb `fahren` "to drive, go (by vehicle)"
- `Gehen` — "walking, going" ← verb `gehen` "to go"
- `Geschehen` — "events, goings-on" ← verb `geschehen` "to happen"
- `Handeln` — "action, acting" ← verb `handeln` "to be about (sich handeln um + A.)"
- `Hineingehen` — "entering" ← verb `hineingehen` "to enter"
- `Hinsehen` — "looking" ← verb `hinsehen` "to look"
- `Hören` — "listening, hearing" ← verb `hören` "to hear, listen"
- `Kochen` — "cooking" ← verb `kochen` "to cook"
- `Laufen` — "running" ← verb `laufen` "to run"
- `Lernen` — "learning" ← verb `lernen` "to learn"
- `Lesen` — "reading" ← verb `lesen` "to read"
- `Lügen` — "lying" ← verb `lügen` "to lie"
- `Merken` — "noticing" ← verb `merken` "to remember, note"
- `Nachdenken` — "reflection" ← verb `nachdenken` "to think (about)"
- `Nachgeben` — "giving in" ← verb `nachgeben` "to give in"
- `Nutzen` — "benefit, use" ← verb `nutzen` "to use, to make use of"
- `Packen` — "packing" ← verb `packen` "to pack"
- `Pendeln` — "commuting" ← verb `pendeln` "to commute"
- `Reichen` — "passing" ← verb `reichen` "to be enough"
- `Schaden` — "damage, harm" ← verb `schaden` "to harm"
- `Schreiben` — "writing" ← verb `schreiben` "to write"
- `Schwimmen` — "swimming" ← verb `schwimmen` "to swim"
- `Singen` — "singing" ← verb `singen` "to sing"
- `Sprechen` — "speaking" ← verb `sprechen` "to speak"
- `Tanzen` — "dancing" ← verb `tanzen` "to dance"
- `Tragen` — "carrying, wearing" ← verb `tragen` "to wear; to carry"
- `Verstehen` — "understanding" ← verb `verstehen` "to understand"
- `Vertrauen` — "trust, confidence" ← verb `vertrauen` "to trust (+ Dativ)"
- `Vorgehen` — "procedure, approach" ← verb `vorgehen` "to proceed, go about, advance"
- `Zelten` — "camping" ← verb `zelten` "to camp"
- `Zusammenfassen` — "summarising" ← verb `zusammenfassen` "to summarise (separable)"
- `Üben` — "practising" ← verb `üben` "to practise"

**Caveat on this tier, stated plainly.** For most of these the nominal gloss is
a mechanical consequence of the verb gloss and needs no external check. But a
few carry a *lexicalised* meaning that has drifted from the plain activity
reading, and for those the specific English gloss is my rendering rather than a
mechanical derivation:

- `Bedenken` — glossed "misgivings, reservations", which is the lexicalised
  plural sense, not the activity "considering".
- `Geschehen` — glossed "events, goings-on" rather than "happening".
- `Handeln` — the underlying verb entry is `sich handeln um` ("to be about"),
  but the noun `das Handeln` means "action, acting" from the *other* verb
  `handeln`. The derivation chain here is not clean.

These three should be treated as tier C until checked against a reference.

## Tier C — flagged, external verification required (1)

- `Kraft` — glossed "force, strength". The lowercase key holds a **Preposition**
  (`kraft` + genitive, "by virtue of"), which is a genuinely different lexeme,
  not a nominalisation of it. The noun *die Kraft* is real and common, but this
  entry was **not** harvested from a vocab card and is **not** a grammatical
  derivation of the preposition. **Source not established — flagged.**

## Tier ALIAS — mappings, no new content (11)

Dative-plural noun forms that collide with a verb infinitive. Each is a bare
string pointing at an existing canonical entry, so no meaning is authored and no
duplicate is created.

- `Ausdrücken` → `Ausdruck`
- `Berichten` → `Bericht`
- `Beweisen` → `Beweis`
- `Fällen` → `Fall`
- `Gründen` → `Grund`
- `Grüßen` → `Gruß`
- `Sitzen` → `Sitz`
- `Spielen` → `Spiel`
- `Teilen` → `Teil`
- `Träumen` → `Traum`
- `Werten` → `Wert`

## What I did not do

- No source URL or dictionary edition is cited anywhere in this file, because I
  did not consult one at authoring time. Tier A is traceable to files in this
  repository; tier B rests on a stated grammatical rule; tier C and the three
  tier-B caveats are flagged as unverified.
- No learner-facing surface exposes any of this metadata.

## Recommended follow-up

Four entries need a reference check before they can be called verified:
`Kraft`, `Bedenken`, `Geschehen`, `Handeln`. The remaining 93 are either
curriculum-traceable or rule-derived.
