# External verification log — batch 8

Every field below was verified against an external reference. Model memory was
not used as evidence. Hindi was omitted rather than invented where no dictionary
attestation was found.

## Authored (6)

| Lemma | Gender | Plural | English | Hindi | Sources |
| --- | --- | --- | --- | --- | --- |
| Anstieg | m | Anstiege | increase, rise | वृद्धि | Duden+DWDS; Shabdkosh (increase→वृद्धि); corpus b2-52 "der starke Anstieg der Preise" |
| Intelligenz | f | Intelligenzen | intelligence | बुद्धिमत्ता | Duden; Shabdkosh (intelligence→बुद्धिमत्ता); corpus b2-58/c1-34 "künstliche Intelligenz" |
| Betreuerin | f | Betreuerinnen | supervisor | पर्यवेक्षक | Duden+DWDS (fem., pl. -innen, Goethe B1); Cambridge/Shabdkosh/Hindwi (supervisor→पर्यवेक्षक); corpus c1-26/b2-49 taskEn "Your supervisor asks" |
| Gremium | n | Gremien | committee | *pending* | Duden (Neutrum, Gen. Gremiums, Pl. Gremien); corpus c2-27 taskEn "what the committee did" |
| Kolloquium | n | Kolloquien | colloquium | *pending* | Duden (Neutrum, Gen. Kolloquiums, Pl. Kolloquien); corpus c2-11/b2-08 taskEn "in the colloquium" |
| Fachzeitschrift | f | Fachzeitschriften | specialist journal | *pending* | Duden (feminin, Pl. Fachzeitschriften); corpus c1-23/c2-11 titleEn "Journal: ..." |

## Hindi pending (3)

`Gremium`, `Kolloquium`, `Fachzeitschrift` are authored with verified German
(gender, genitive, plural from Duden) and verified English (cross-checked against
the curriculum's own `taskEn`/`titleEn` wording), but **no Hindi**:

- **Gremium** — three competing attestations for "committee": `कमिटी`
  (Shabdkosh), `समिति`, `आयोग` (HinKhoj). `आयोग` is already used in this
  dictionary for `Kommission`, so picking one would be a guess.
- **Kolloquium**, **Fachzeitschrift** — no Hindi attestation found.

The popup renders these cleanly without Hindi (verified at runtime).

## Held entirely (2)

- **Lektorin** — German verified (Duden: feminin, Pl. Lektorinnen), but the sense
  is **not confirmable from the corpus**: it does not occur in any chapter text I
  could find, and the word is genuinely ambiguous between "editor" (publishing)
  and "lecturer" (university). Authoring either would fail requirement 8.
- **Leitung** — polysemous (management / cable, pipe) and its German was not
  verified in the search budget. The one corpus hit (b2-49, *"Ihr gebt der
  Leitung ein Projekt-Update"*) suggests "management", but one occurrence is thin
  evidence for a headword.

## Sources used

- **Duden** (duden.de) — gender, genitive, plural, definition for all 6 plus Lektorin
- **DWDS** (dwds.de) — corroborating grammar for Betreuerin, Anstieg
- **Shabdkosh** — increase→वृद्धि, intelligence→बुद्धिमत्ता, supervisor→पर्यवेक्षक
- **Cambridge English–Hindi** — supervisor→पर्यवेक्षक
- **Hindwi Dictionary** — supervisor→पर्यवेक्षक (third corroboration)
- **Klarweg corpus** — sense-matching via each chapter's own `taskEn`/`titleEn`

Note: `Betreuerin` is feminine and Hindi `पर्यवेक्षक` is the masculine/generic
dictionary form. The feminine `पर्यवेक्षिका` was **not** attested, so the
attested form was used rather than a derived one.


---

# External verification log — batch 9

| Lemma | Gender | Plural | English | Hindi | Sources |
| --- | --- | --- | --- | --- | --- |
| Erhebung | f | Erhebungen | survey | सर्वेक्षण | Duden/heute-lernen (fem., Pl. Erhebungen); Collins+Shabdkosh+HinKhoj (survey→सर्वेक्षण); SENSE CONFIRMED c1-02 taskEn "how long the survey took" (not the hill/uprising sense) |
| Gutachten | n | Gutachten | expert report | विशेषज्ञ रिपोर्ट | Duden (Neutrum); plural unchanged (corpus "radiologische Gutachten"); Hindi from the curriculum's own c1-07 token hi:"विशेषज्ञ रिपोर्ट के" — the trailing के is the genitive postposition, a separate word, so the noun phrase itself is intact |
| Anfänger | m | Anfänger | beginner | *held* | Duden + heute-lernen ("Der Nominativ Plural ist Anfänger"); corpus a2-20 "Erwachsene Anfänger", b2-12 en:"beginners". Hindi HELD — only शुरुआती लोगों को (dative plural) is attested; reducing it to a citation form would be a morphological edit |

## Method note — the corpus as a Hindi source

Two of these got their Hindi from **inside the curriculum**, not from an external
dictionary, which is better evidence where it exists:

- **Gutachten** — c1-07 authors the token `{w:'Gutachtens', en:'expert report
  (gen.)', hi:'विशेषज्ञ रिपोर्ट के'}`. The trailing `के` is the genitive
  postposition — a separate word, not a suffix on the noun — so विशेषज्ञ रिपोर्ट
  is the intact citation phrase. This is materially different from the
  `förmlicher` case I held earlier, where ज़्यादा was a comparative marker fused
  into the adjective's meaning.
- **Erhebung** — the *sense* was confirmed from c1-02 `taskEn: "how long the
  survey took"`, which rules out Duden's other two senses (hill/elevation,
  uprising). The Hindi सर्वेक्षण then came from Collins, Shabdkosh and HinKhoj in
  agreement.

## Hindi held (1)

**Anfänger** — the only attestation is b2-12 `hi:'शुरुआती लोगों को'`, a dative
plural ("to beginners"). Reducing that to a citation form means deleting
लोगों को, which edits Hindi morphology. Authored with verified German and English;
Hindi pending.

## Still held entirely (2)

- **Lektorin** — Duden verified (feminin, Pl. Lektorinnen) but the word occurs in
  no chapter text, so the editor/lecturer ambiguity cannot be resolved from usage.
- **Leitung** — polysemous (management / cable, pipe). korrekturen.de has the
  declension but the page content did not return, and the single corpus hit
  (b2-49 *"Ihr gebt der Leitung ein Projekt-Update"*) is thin evidence.


---

# PRONOUN_LEMMA precedence fix

## Root cause

`resolveLemma()` resolves in a fixed order: (1) exact headword, (2) closed-set
article/pronoun tables, (3) `KW_INFLECTIONS`, (4) compound split. `PRONOUN_LEMMA`
sat at step 2 and contained **possessive determiners** alongside true personal
pronouns:

```
meiner:'ich', mein:'ich', meine:'ich', meinen:'ich', meinem:'ich', meines:'ich',
dein:'du',  deine:'du',  ...  sein:'er', seine:'er', ...
unser:'wir', ... euer:'ihr', ...
```

Because step 2 outranks step 3, those mappings beat the possessive index keys, so
clicking `mein` in *mein Buch* returned the **personal pronoun** "I / ich".

## Why the fix is safe — role colouring is a different table

Colour does **not** come from `PRONOUN_LEMMA`. It comes from `roleFor()`, which
reads a separate table built near the top of the file:

```
put('mein meine meinen meiner meinem', 'r-article', 'my', 'मेरा', ...)
put('dein deine deinen deiner deinem', 'r-article', 'your', ...)
put('sein seine ihr ihre unser unsere', 'r-article', ...)
```

Editing `PRONOUN_LEMMA` therefore cannot change any colour. Verified empirically
after the change (below).

## Change made

Removed **only** the possessive determiner forms from `PRONOUN_LEMMA`. Kept every
true personal pronoun: `mich mir dich dir ihn ihm sie ihr uns euch ihnen`.

**Index coverage was added first**, because 4 forms had no key and would have
become *unresolved* rather than possessive: `meinem`, `meiner`, `meines`,
`meins` → `mein/meine`. One form was **repointed**: `meine` had been pointing at
the verb `meinen` ("to think, mean"), which is worse than the pronoun reading.

## Deliberately NOT changed (genuine ambiguity)

| Surface | Resolves to | Why left alone |
| --- | --- | --- |
| `sein` | verb "to be" | dictionary headword; step 1 wins. Possessive reading is genuinely ambiguous. |
| `seiner` | verb `sein` | can be personal-pronoun genitive or possessive; no basis to choose. |
| `ihr` `ihre` `ihren` `ihrem` `ihrer` `ihres` | pronoun "you (plural)" | three-way ambiguous — personal pronoun, "her/their", and formal "your". The `ihr/ihre` possessive entry stays unreachable by design. |

## Test results — 27 of 27 possessive forms fixed

`mein meine meinem meiner meines meins` → **my · Possessive**
`dein deine deinen deinem deiner deines deins` → **your (informal) · Possessive**
`seine seinen seinem seines seins` → **his, its · Possessive**
`unser unsere unseren unserem unserer unseres` → **our · Possessive**
`euer eure euren eurem eurer eures` → **your (plural) · Possessive**

Personal pronouns unchanged: `mich` me (acc.) · `mir` · `dich` · `dir` ·
`ihn` him · `ihm` · `sie` · `uns` · `euch` · `ihnen` · `ich` · `du` · `er` · `wir`.
`meinen` still resolves to the verb "to think, mean".

## Role colouring verified intact (a2-7, 786 spans)

Possessives keep `r-article`, or the authored occurrence role where the chapter
teaches a case (`r-dativ` on *Deinem/unserem/seinem*, `r-akkusativ` on *deinen*).
Personal pronouns keep `r-subject` / `r-akkusativ` / `r-dativ`. Real popups on
that chapter now read e.g. "meinem → my (masc./neut. dat.) | मेरे | Possessive".

## Hindi status of the four pending entries

| Entry | Hindi | Basis |
| --- | --- | --- |
| **Anfänger** | **नौसिखिया** | Shabdkosh ("नौसिखिया(masc)") + OneIndia Hindi Dictionary, independently. A true citation form — **not** derived from the corpus's dative plural शुरुआती लोगों को. |
| Gremium | *empty* | "committee" has three competing attestations (कमिटी / समिति / आयोग) and आयोग already glosses `Kommission` here. |
| Kolloquium | *empty* | no Devanagari attestation found. |
| Fachzeitschrift | *empty* | no Devanagari attestation found. |
