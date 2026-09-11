# Canonical Parser Role Vocabulary (frozen)

`parserSentence` may only use roles from this list. Any future new role
requires an explicit architecture decision before being introduced —
no ad hoc additions.

## Frozen role list (31 roles + `plain`)

`plain` (no highlight), `r-subject`, `r-verb`, `r-object`, `r-pronoun`,
`r-relativpronomen`, `r-akkusativ`, `r-dativ`, `r-genitiv`,
`r-preposition`, `r-place`, `r-time`, `r-article`, `r-adjective`,
`r-adverb`, `r-conjunction`, `r-connector`, `r-modalverb`, `r-question`,
`r-negation`, `r-comparative`, `r-superlative`, `r-nnoun`, `r-futur`,
`r-plusquamperfekt`, `r-temporal`, `r-purpose`, `r-brauchen`,
`r-reflexiv-akk`, `r-reflexiv-dat`, `r-prep-rel`, `r-passiv`,
`r-konjunktiv`, `r-konjunktiv1`.

## Retired — merge into an existing role during re-authoring

- `r-plusq`, `r-plusquam` → `r-plusquamperfekt`
- `r-temporal2` → `r-temporal`
- `r-konji` → `r-konjunktiv1`
- `r-reflexiv` (bare) → `r-reflexiv-akk` or `r-reflexiv-dat` (resolve per sentence)
- `r-genitiv2` → `r-genitiv`
- `r-frage` → `r-question`
- `r-wenn`, `r-weil`, `r-dass`, `r-sodass`, `r-indem`, `r-anstatt`, `r-ohnezu`, `r-konz`, `r-hierarchy` → `r-conjunction`
- `r-sowohl`, `r-weder`, `r-nichtnur`, `r-einerseits`, `r-addition`, `r-paired`, `r-dadurch`, `r-verbadverb` → `r-connector`
- `r-wechsel` → `r-preposition`
- `r-ortsangabe` → `r-place`
- `r-es`, `r-idiom`, `r-impersonal` → `r-pronoun`
- `r-erg`, `r-val`, `r-obligatorisch`, `r-verb-prep`, `r-nomen-prep`, `r-adj-prep`, `r-an` → tag each token by its real POS/case (preposition → `r-preposition`, complement → its object/case role)
- `r-trenn`, `r-praefix-praezise`, `r-praefixe`, `r-praefixfamilie` → `r-verb`
- `r-integrations-pyramide`, `r-adjektivkette`, `r-register-familie`, `r-bar-adjektiv`, `r-partizip-adjektiv`, `r-nominalisiertes-adjektiv`, `r-schwach` → `r-adjective`
- `r-nomen-verb-verbindung`, `r-fvg` → tag noun/verb by their real roles individually
- `r-partizip`, `r-partizipialattribut`, `r-partizip2-attribut`, `r-partizip1-nomen` → `r-adjective`
- `r-relativ`, `r-verschachtelt`, `r-wer-der`, `r-antecedent`, `r-verweis`, `r-referenz` → `r-relativpronomen`
- `r-vergleich`, `r-irreale` → `r-conjunction` (clause-introducing) or `r-comparative` (adjective-level) — decide per sentence
- `r-tempus`, `r-tempuswechsel`, `r-past` → `r-verb`

## Retired — remove from parserSentence entirely (not grammatical facts)

**Metaphor-named roles:** r-namensschild-metapher, r-tanzpartner-metapher,
r-berg-metapher, r-lego-metapher, r-zug-metapher, r-baum-metapher,
r-fotograf-metapher, r-anzug-metapher.

**Discourse/rhetorical/register judgments:** r-mastery, r-checkpoint,
r-revision, r-eroeffnung, r-einleitung, r-leitsatz, r-position, r-opinion,
r-counter, r-evidenz, r-academic, r-register, r-berichtsprache,
r-kollokation, r-abwaegen, r-balancierteargumentation, r-subjektiv,
r-hoch, r-topic, r-rhema.

**Epistemic-strength judgments:** r-vermutung, r-vermutungen,
r-epistemisch, r-konjunktiv-hedging. The underlying grammatical fact is
still `r-modalverb` or `r-konjunktiv`; certainty-level content moves to
Sentence Insight or a future AI Tutor layer, never to a parser role.

**Lexical/semantic idiosyncrasy notes:** r-bedeutungswechsel,
r-numerusbesonderheit, r-pluraletantum.

## Status

**Parser vocabulary is now permanently frozen at 31 roles + `plain`.**
Re-authoring existing chapters onto this vocabulary is future data-quality
work (tracked in `PARSER-COMPLETENESS-ROADMAP.md`), not a vocabulary
decision — that decision is closed.
