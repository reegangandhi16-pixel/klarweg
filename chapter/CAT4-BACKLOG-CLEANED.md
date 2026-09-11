# Category 4 backlog — cleaned and prioritised

Source: the verified 259/259 scan (195,240 spans, 10,549 popups, 0 defects).
Category 4 baseline **2,850 distinct / 5,604 occurrences**. Nothing was authored;
no entry, index key, chapter, card or resolver rule was changed.

## Bucket totals — globally deduplicated, reconciles exactly

| Bucket | Distinct | Occurrences |
| --- | --- | --- |
| **A. Genuine German needing a new entry** | **2,457** | **4,310** |
| A′. Closed-class function words (subset of A, separated) | 25 | 213 |
| **B. Existing lemma / inflection, no new vocabulary** | **18** proposed → **11 safe** | 58 → 31 |
| **C. English / UI / metalanguage** | **278** | **722** |
| **D. Proper name / place / brand** | **41** | **163** |
| **E. Tokenisation artefact** | **1** | **1** |
| **F. Ambiguous — human decision** | **7** (moved from B) | 27 |
| **G. Structural / task label** | **3** | **97** |
| **WRONG. Deliberate error-correction forms** | **27** | **40** |
| **Total** | **2,850** | **5,604** |

Distinct sums to 2,850 exactly against the capture.

## I must correct my earlier estimate

I have repeatedly said the genuine German backlog was "~1,300–1,500 distinct".
**That was too low.** Classified properly it is **~2,457 distinct / 4,310
occurrences**. The earlier figure came from eyeballing surface shape rather than
bucketing every item, and it understated the work by roughly 1,000 entries.

The 2,457 is still an **upper bound**: a residual English leak survives my
wordlist (`masc`, `every`, `common`, `distinct`, `journalism`,
`Hindi-speaker`), which I estimate at 5–10%. A realistic genuine-German figure
is **~2,200–2,450**. I would rather state that range than a false precision.

## B verified — only 11 of 18 are safe

The proposer surfaced the **same dangerous patterns as last time**, which is
itself the finding: suffix-driven lemma proposal keeps producing these.

**ACCEPT (11)** — correct lemma, class and relationship:
`Seien`×15 → `sein` · `seist`×2 → `sein` · `unterstütze`×2 → `unterstützen` ·
`umgehst`×2 → `umgehen` · `sendete`×1 → `senden` · `betrachteten`×1 →
`betrachten` · `verschachtelten`×1 → `verschachteln` · `Feinde`×1 → `Feind` ·
`fortentwickelt`×1 → `fortentwickeln` · `wiederverwendet`×1 →
`wiederverwenden` · `bekundete`×1 → `bekunden`.

**REJECT → bucket F (7):**

| Surface | Proposed | Why rejected |
| --- | --- | --- |
| `fällt`×13 | `fällen` | corpus sense is *fallen* "to fall"; *fällen* means "to fell a tree" |
| `Fälle`×6 | `fällen` | plural of **der Fall** (case), not a verb form at all |
| `fällst`×1 | `fällen` | same as `fällt` |
| `Zeuge`×5 | `Zeug` | *der Zeuge* (witness) vs *das Zeug* (stuff) — unrelated |
| `Zeugen`×3 | `Zeug` | same |
| `Kliniken`×1 | `Klinik` | **`Klinikum` has the identical plural** — genuine collision |
| `schreitet`×1 | `schreien` | *schreiten* "to stride" ≠ *schreien* "to shout". **New this pass.** |

`schreitet → schreien` is a good illustration of why the class gate alone is not
enough: both are verbs, so class compatibility passes, and only the meaning
reveals the error.

## WRONG — 27 deliberate error-correction forms, evidence-based

Determined by corpus test, not guesswork: harvested every word inside a
`wrong:` field (1,698 forms), intersected with Category 4 (145), then kept only
those that appear **nowhere outside** a `wrong:` field.

**Clearly malformed — never author:** `geteilnehmen` `gebeendet` `geöffnen`
`gewachsende` `geschlafene` `gestudiert` `geanrufen` `gebekommen`
`geverkauft` `musstete` `gutste` `Ergebniss` `Nehm` `sechszehn`
`zehntausendhundertfünfzehn` `Gesundheitsysteme` `Regierungbildung`
`risikobewusstige` `Analysierung` `Elter` `seiet` `maan` `Wolan`.

**Valid German forms that occur ONLY as errors here — do not author from this
context:** `entwickle` `entwickelter` `gemessene` `gesetzkonform`. The forms
are correct German; their only corpus use is as an error, so treating them as
authoritative would misrepresent the exercise.

## D — 41 confirmed names, down from 792

My first pass put 792 in D on a "capitalised, no entry" heuristic. That was
wrong: it swept up ordinary German nouns (`Reform`, `Kommission`, `Hypothese`,
`Stichprobe`, `Methodik`). Replaced with an evidence-based list harvested from
the corpus's own `speaker:` / `femaleSpeakers:` / `maleSpeakers:` declarations —
141 declared character names — plus surnames and place names.

Result: **41 in D** (`Timo`×83, `Wien`×10, `Müller`×9, `Leipzig`×5, `Bonn`×4,
`Berger`×4), **9 capitalised English** moved to C, and **742 returned to A** as
genuine German nouns.

One data note: `Kellner` appears in the declared speaker list, but it is the
common noun "waiter", not a name. Worth a look at that chapter's data.

## A′ — 25 closed-class function words, 213 occurrences
Separated because they are a small, finite set with high frequency:
`Welche`×38 `deiner`×36 `beiden`×30 `hin`×22 `Zuerst`×20 `Dies`×14
`Welches`×12 `daraus`×9 `hinaus`×6 `welchem`×3 `dasselbe`×3 `dessen`×3
`Welcher`×3 `jener`×2 `Hiermit`×2 `beider` `keineswegs` `deren` `zwar`
`denen` `dieselbe` `sofern` `Wodurch` `Worin` `Einerseits`.

**Best value per entry in the whole backlog**: 25 entries clear 213 occurrences,
they are interrogative/demonstrative/relative paradigms rather than open
vocabulary, and they include `deren`/`denen`/`dessen` which you already
flagged as needing their own paradigm.

## Top 40 genuine German by occurrence

`Reform`27 · `Betreuerin`21 · `weniger`19 · `stabil`19 · `Kommission`18 ·
`Gutachter`18 · `beeindruckend`16 · `Software`16 · `dritten`15 · `gefällt`15 ·
`Hypothese`15 · `Verantwortung`14 · `System`14 · `Stichprobe`14 ·
`Methodik`14 · `lebt`13 · `sorgfältig`13 · `wirksam`13 · `Register`13 ·
`förmlich`12 · `Überarbeitung`12 · `Kritiker`12 · `präzise`11 · `Anstieg`11 ·
`Lektorin`11 · `zweite`10 · `lade`10 · `einzureichen`10 · `Gremium`10 ·
`bisschen`9 · `überraschend`9 · `Fachzeitschrift`9 · `Debatte`9 · `besten`8 ·
`aller`8 · `unvollständig`8 · `Wissenschaftlicher`8 · `erhobenen`8 ·
`wissenschaftlichen`8 · `Vorjahr`8

### The leverage point
Several of these are **inflected forms whose base is also absent** — `gefällt`
(gefallen), `lebt`/`lebte` (leben exists), `dritten` (dritt), `zweite` (zweit),
`erhobenen` (erheben), `wissenschaftlichen` (wissenschaftlich), `künstliche`
(künstlich), `eingereicht`/`einzureichen` (einreichen), `leitet` (leiten).
Authoring one base resolves 2–5 surfaces through the existing waves. **The
authoring unit should be the lexeme, not the surface** — which means the real
entry count is materially below 2,457, though I cannot give a firm number
without grouping all 2,457 by base.

## The 12 items you asked to keep separate — verified, not authored

| Item | Status |
| --- | --- |
| `Rollenspiel`×95 | bucket G. Real noun, but every occurrence is the task-type prefix `"Rollenspiel: …"` with an English gloss alongside. |
| `halbe`/`halben Stunde` | now resolves to the new `halb` adjective. The approved card teaches `halbe Stunde` as a noun phrase. **Conflict stands — your call.** |
| `entspannte` `erholte` `konzentrierte` `orientierte` `verspätete` | not in Category 4 (they resolve), but each resolves to the **participial adjective** when the sentence is verbal. Same defect `erkältete` had. Genuine German homographs; needs a per-occurrence decision. |
| `deren`×1 `denen`×1 `dessen`×3 | bucket A′. No entry for any of the three; need a relative-pronoun paradigm. |
| `Kurzem` | no longer in Category 4 — resolves via the new `kurz` adjective. **Closed by the adjective work.** |
| `meiste` | not in Category 4 — resolves to `viel/viele`. Unchanged, as agreed. |

## Recommended authoring order

1. **A′ closed-class, 25 entries → 213 occurrences.** Highest value per entry,
   finite, includes the `deren`/`denen`/`dessen` paradigm.
2. **B accepts, 11 index keys, zero new vocabulary.**
3. **Group the 2,457 A items by base lexeme** before authoring anything else.
   This is the step that turns a surface list into an entry list, and without it
   the backlog is overstated.
4. **Decide the 7 F items** — particularly `fällt`/`Fälle` (13+6 occurrences,
   currently unresolved and correctly so).
5. **Purge the residual English leak from A** with a proper English lexicon
   rather than my hand-built list.
6. **Then content vocabulary by frequency band**, starting with the ~40 above.
7. Your decisions on `Rollenspiel`, `halbe Stunde`, and the 5 reflexive verbs.

## Standing rules confirmed
- Deliberate wrong forms are excluded by corpus test, not judgement.
- Proper names come from the corpus's own speaker declarations.
- No lemma is proposed on suffix similarity alone; class compatibility is
  necessary but **not sufficient** (`schreitet → schreien` passed the class gate
  and is still wrong).
