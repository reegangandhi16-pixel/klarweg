# Canonical-lexeme authoring map

Grouping of the 2,457 genuine-German Category-4 surfaces by canonical lemma.
No file was modified; no entry was authored.

## The direct answer

**How many NEW canonical dictionary headwords do we actually need?**

**1,506 reliably identified, with a realistic total of 1,500–1,900.**

| | Distinct | Occurrences |
| --- | --- | --- |
| A surfaces classified as genuine German | 2,457 | 4,310 |
| → reliably grouped into lemmas | 1,618 | 2,798 |
| → **distinct lemmas** | **1,561** | |
| → of those, lemma already exists | 55 | |
| → **NEW headwords required** | **1,506** | 2,798 |
| Unresolved — need a manual lemma decision | 685 | 1,191 |
| Residual English/Hinglish still in the set | 88 | 161 |
| Verified manual hold (homographs, spurious stems) | 6 | 33 |

The 685 unresolved are the reason for a range rather than a single number. Most
will be their own lemma, some will collapse into one of the 1,506, and a portion
is more English leak. **Upper bound 2,191, realistic 1,500–1,900.**

## I must correct my previous claim

Last turn I wrote that "the real entry count is materially below 2,457". Two
things about that:

- **My first grouping pass gave 2,285** — a 7% reduction, which is *not*
  material. My claim was wrong as stated.
- The 1,506 figure comes only from **tightening the rules until they were
  defensible**, which moved 685 surfaces out of the map and into manual review.
  So the drop from 2,457 to 1,506 is mostly **honesty about what cannot be
  grouped automatically**, not genuine consolidation.

Only **93 lemmas cover more than one surface**. The leverage I implied is real
but small.

## Why the first pass was not usable

Spot-checking exposed systematic errors, all from suffix-driven derivation:

| Surface | Pass 1 gave | Correct |
| --- | --- | --- |
| `dritten` | `dritten` [Verb] | `dritt` — ordinal adjective |
| `gefällt` | → `fällen` | `gefallen`; `fällen` = "to fell a tree" — the homograph I had already rejected |
| `kürzer` | `kürzer` [own lemma] | comparative of `kurz`, which now exists |
| `schwiegst` | → `schwiegen` | `schweigen` — lemma given as a past form |
| `receiv` | `receiv` ← receives, receiver | English |
| `fangen` | `fangen` ← fangen, fange | the spurious stem I established must not be authored |

Pass 2 fixed these by refusing to derive a verb lemma unless the infinitive
already exists, adding an ordinal rule, extending the hold list, and filtering
English. **Collision risks against existing entries: 0.**

## Residual defect I did not fix

The map is still **not authoring-ready**. The `-en → infinitive` rule misfires
on declined participles and quantifiers, so the 158-item Verb bucket contains
wrong classes:

`erhobenen` [Verb] → should be `erheben` (participial adjective of it) ·
`präzisen` [Verb] → `präzise` [Adjective] · `besten` [Verb] → superlative of
`gut` · `mehreren` [Verb] → `mehrere` [quantifier] · `bisschen` [Verb] →
quantifier · `erfordert` [Adjective] → `erfordern` [Verb].

I estimate **30–60 of the 158 verb-bucket lemmas are mis-derived**. The 1,105
noun bucket is far more reliable, because a nominative noun is its own lemma and
no derivation is involved.

## Class distribution of the 1,506

| Class | Lemmas |
| --- | --- |
| Noun | **1,105** |
| Adjective | 237 |
| Verb | 158 *(30–60 suspect)* |
| Adjective (ordinal) | 6 |

## D. Top 40 new lemmas by occurrence coverage

`Reform` Noun 29/2surf · `wissenschaftlich` Adj 21/4 · `Betreuerin` Noun 21 ·
`zweit` Ord 18/4 · `Kommission` Noun 18 · `Gutachter` Noun 18 ·
`System` Noun 17/3 · `beeindruckend` Adj 16 · `Software` Noun 16 ·
`Hypothese` Noun 15 · `Stichprobe` Noun 15/2 · `Verantwortung` Noun 14 ·
`wirksam` Adj 14/2 · `Register` Noun 14/2 · `Methodik` Noun 14 ·
`sorgfältig` Adj 13 · `förmlich` Adj 13/2 · `Überarbeitung` Noun 12 ·
`Kritiker` Noun 12 · `überraschend` Adj 11/3 · `Debatte` Noun 11/2 ·
`Anstieg` Noun 11 · `Lektorin` Noun 11 · `Forschungsprojekt` Noun 10/3 ·
`stützen` Verb 10/4 · `Gremium` Noun 10 · `statistisch` Adj 9/4 ·
`Fachzeitschrift` Noun 9 · `unvollständig` Adj 8 · `Ministerium` Noun 8/2 ·
`Vorjahr` Noun 8 · `Fachartikel` Noun 8 · `Fachjournal` Noun 8 ·
`Unterstützung` Noun 7 · `künstlich` Adj 7 · `vorherig` Adj 7/2 ·
`Argumentation` Noun 7 · `Saal` Noun 7 · `Zukunft` Noun 7 · `Anfänger` Noun 7

`Hindi-speaker` (14) sits in the noun bucket but is a hybrid English/German
coinage from instructional text — it should go to C, not be authored.

## F. Lemmas with multiple missing inflections (93; top 20)

`Reform` ← Reform, Reformen · `wissenschaftlich` ← wissenschaftlich,
wissenschaftliche, wissenschaftliches, wissenschaftlichen · `zweit` ← zweit,
zweite, zweiten, zweites · `System` ← System, Systeme, Systems ·
`Stichprobe` ← Stichprobe, Stichproben · `stützen` ← stützen, stützt, stütze,
gestützt · `statistisch` ← statistischer, statistischen, statistisch,
statistisches · `Forschungsprojekt` ← Forschungsprojekt, Forschungsprojekts,
Forschungsprojekte · `überraschend` ← überraschend, überraschendes,
überraschende · `Register` ← Register, Registern · `Debatte` ← Debatte,
Debatten · `Ministerium` ← Ministerium, Ministeriums · `vorherig` ← vorherige,
vorherigen · `akademisch` ← akademischen, akademisches, akademische ·
`Forschungsartikel` ← Forschungsartikels, Forschungsartikel · `erteilen` ←
erteilen, erteilt · `Fragestellung` ← Fragestellung, Fragestellungen ·
`wirksam` ← wirksam, wirksamer · `förmlich` ← förmlich, förmlicher ·
`Fachartikel` ← Fachartikel, Fachartikeln.

Each of these resolves 2–4 surfaces through the existing declension, plural and
conjugation waves once the base is authored.

## E. Card-backed lemmas — not determined

**I did not establish this.** It needs a full harvest of every `de:`/`pos:` vocab
card across 259 data files and an intersection against the 1,506, which is a
separate pass. I am not going to guess at it.

It matters more than it sounds: the `KW_GLOBAL_CAPS` work showed 97 items whose
meanings were **already approved curriculum content** that had simply never
reached the dictionary. If a comparable share of these 1,506 is card-backed, a
large part of the "authoring" is really **harvesting**, with no new linguistic
claims — and that changes both the cost and the verification burden. **This
should be the next step, before any authoring.**

## G. Uncertain grouping — 685 surfaces / 1,191 occurrences

The set my rules would not touch. Top items: `stabil`×19 `lebt`×13 `aller`×8
`voraus`×7 `lebte`×7 `leitet`×7 `eingereicht`×7 `näher`×6 `vorbei`×6
`trat`×6 `bestraft`×6 `berechtigter`×6 `hierfür`×6 `beruht`×6 `aufs`×5.

Three kinds mixed together:
- **finite verb forms whose infinitive is absent** (`lebt`/`lebte`, `leitet`,
  `beruht`, `trat`) — deriving the base is exactly the guess I refuse to make
  mechanically after the `fangen` lesson;
- **genuine own-lemma words** (`stabil`, `voraus`, `vorbei`, `hierfür`, `aufs`);
- **more English/Hinglish** (`plain`, `say`, `loud`, `puts`, `change`,
  `choice`, `topic`, `compare`, `helper`, `politely`, `aur`, `dat`) — proof
  the wordlist approach has hit its limit.

## H. Collision risks

**Zero** against existing entries — no proposed lemma clashes with an existing
headword of a different class. Two things to watch when authoring:
- the adjective bucket (237) will need the `<base> adjektiv` key pattern wherever
  the spelling already exists as an adverb, as with `klar`;
- `Register`, `System`, `Software`, `Drill` are English-identical German nouns —
  the English-leak filters must not later reclassify them out.

## I. Recommended authoring batches

1. **Replace the wordlist with a real English lexicon** and re-filter. Until
   then every count carries a few per cent of contamination.
2. **Harvest card-backed lemmas** (§E). This may convert a large share from
   authoring into harvesting, and it should happen before anyone writes a gloss.
3. **Noun bucket, 1,105 lemmas, in frequency batches of ~50.** Most reliable
   part of the map: a nominative noun is its own lemma, so there is no derivation
   to get wrong. Needs gender + plural per entry.
4. **Adjective bucket, 237 lemmas.** Mechanically reliable, and the declension
   wave multiplies each one across its surfaces.
5. **Verb bucket, 158 lemmas — hand-verify first.** 30–60 are mis-derived; do not
   author from this map as it stands.
6. **685 unresolved — manual, in occurrence order.**
7. Ordinals (6) as one small family: `erst` `zweit` `dritt` `viert` `letzt`.

## Standing position

The mechanical map is a **planning instrument, not an authoring instruction**.
It has been wrong twice in ways that would have produced incorrect learner-facing
data (`gefällt → fällen`, `dritten` as a verb, `schreitet → schreien`), and the
verb bucket is still wrong today. Every lemma should be confirmed against its
sentence context before an entry is written.
