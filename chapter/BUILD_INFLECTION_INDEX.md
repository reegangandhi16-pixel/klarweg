# KW_INFLECTIONS build invariant (frozen)

`window.KW_INFLECTIONS` (in `global-lexicon.js`) must always be regenerated
with the algorithm below — never hand-edited, never appended to ad hoc.

## Invariant
**KW_INFLECTIONS is a collision-free, deterministic lookup table.** Every
key maps to exactly one lemma. The runtime never guesses; it only performs
`KW_INFLECTIONS[surfaceKey]` lookups (plus the closed-set grammar tables
for articles/pronouns, which are separate and always correct).

## Build algorithm
1. **Propose candidates.** For every dictionary entry, for every authored
   field (`plural`, `compare.comparative`, `compare.superlative`,
   `conj.praesens`, `conj.praeteritum`, `conj.konjII`, `conj.perfekt`'s
   final word, the derived present-tense person paradigm, and the derived
   adjective declension paradigm — see below),
   record `(key, lemma, grammaticalClass, sourceField)`. Never propose a
   placeholder like `"—"` (meaning "not applicable") as a real key.
2. **Verb person-paradigm derivation** (build-time only, never at runtime):
   for every verb with an authored `conj.praesens` (3rd person), derive
   ich/du/wir/ihr/sie(pl) using standard, exception-free German morphology
   (wir/sie/Sie = infinitive; ich = infinitive minus final "n"; du = the
   authored 3rd-person form with trailing "t"→"st", unchanged if the stem
   already ends in a sibilant; ihr = infinitive stem + "t"/"et"). This is
   the ONLY place morphology is derived — the build system owns it, the
   runtime only consumes the resulting table.
2b. **Adjective declension derivation** (build-time only, never at runtime):
   for every entry whose class is plainly `Adjective` (or `Adjective /
   adverb`), take the positive base (`compare.positive`, else the headword),
   and index base + `-e/-en/-em/-er/-es` onto that headword. Attributive
   adjective endings are regular, so nothing is guessed — but the three
   contraction families are NOT derivable by suffixation and are excluded
   outright: bases ending in `-el` (dunkel → dunkle), bases ending in `-er`
   (teuer → teure), and `hoch` (→ hohe). Multi-word, slashed and
   non-alphabetic headwords are excluded too, as are the compound/participle/
   nominalised/chain adjective classes. A base already ending in `-e`
   (müde) takes the endings on its stem (müd-), which makes the bare
   headword form dead-redundant and dropped by step 3.
   Same as 2: the build system owns the morphology, the runtime only reads
   the table.
2c. **Normalize the authored string BEFORE deriving person forms.** Step 2
   derives the person paradigm from `conj.praesens`, but many entries author
   that field as more than a bare verb form, and the derivation must not read
   the raw string:
   - **Reflexive verbs** carry `sich` in the headword and/or the form
     ("sich beruhigen" / "beruhigt sich"). Strip a standalone `sich` from
     both before deriving.
   - **Separable verbs** author the split finite form ("macht mit"). Re-join
     it into the surface a Nebensatz actually shows — particle + finite form
     ("mitmacht") — and only when the authored infinitive literally starts
     with that particle (a data test, not a particle list). Multi-word
     infinitives ("spazieren gehen") are NOT prefix verbs and are excluded.
2d. **Mine every authored tense field, not just `praesens`.** `praeteritum`,
   `perfekt`, `konjII`, `futur` and `plusquamperfekt` are authored as literal
   word forms (string or person-keyed object). Every alphabetic word in them is
   a real form and is indexed onto the headword; auxiliaries (`hat`, `ist`,
   `war`, `wird` …) are skipped because they belong to their own headword.
2e. **Präteritum plural** is derived from the authored singular by suffix only:
   `-e` → `+n` (konnte → konnten), otherwise `+en` (ging → gingen). No umlaut
   is ever introduced, which is why Konjunktiv II (könnte, hätte, wäre) is NOT
   derived — it needs an umlauted stem, and that would be a guess.
2f. **A bare finite token from a split form belongs to the SIMPLE verb, never to
   the separable one.** A separable verb authors its finite tenses split:
   `hinauszögern` → `praeteritum: "zögerte hinaus"`. Mining that string
   word-by-word (rule 2d) yields the bare token `zögerte`, which is NOT a form of
   `hinauszögern` — the particle is obligatory in the separable reading. Indexing
   it there makes a learner clicking plain "zögerte" read "to delay/postpone"
   instead of "to hesitate".
   Therefore, for every authored two-token value where the SECOND token is a
   particle that prefixes the infinitive:
   - index the re-joined form (`zögertehinaus` → no; the real joined surface is
     handled by the `.joined` rule in 2d) onto the separable lemma;
   - **re-point the bare finite token to the simple verb headword** obtained by
     stripping the particle from the infinitive (`hinauszögern` − `hinaus` →
     `zögern`), when that headword exists;
   - if no simple headword exists, **drop the bare token entirely** rather than
     leaving it on the separable lemma. A non-clickable word is better than a
     wrong meaning.
   Verified clean after this rule: 2,384 prefixed-lemma keys legitimately carry
   their prefix, 0 bare finite tokens remain misattributed.

2g. **Modal and auxiliary present tense must be authored as a person object.**
   The du-form derivation (2b) needs the 3rd-sg to end in `-t`. Modals have no
   ending at all (`kann`, `will`, `muss`, `darf`, `soll`, `mag`, `weiß`,
   `wird`), so a bare-string `praesens` yields nothing for them. These nine
   verbs therefore carry a full `praesens` person object; the build mines it
   like any other authored paradigm and never guesses an umlaut or an ending.
2h. **Every index target must be backed by a real headword.** A lemma string
   that is not itself a dictionary entry produces a popup naming a word the
   dictionary does not know (`Preises` → "Preise", which has no entry). Verify
   each target, repointing a genitive to its singular headword where one exists
   and dropping the key otherwise. The backing test MUST canonicalise the way
   the resolver does — headword keys may omit `sich` and any article the
   display form `w` carries — or it will wrongly condemn every reflexive verb.
2i. **The lowercase key cannot hold a capitalised noun homograph.** `normWord()`
   lowercases, so `kosten` (Verb) and `Kosten` (Noun) collide on one key and one
   becomes unreachable. Such nouns live in `window.KW_GLOBAL_CAPS`, a
   case-sensitive overlay keyed by the exact capitalised headword, consulted
   only for capitalised surfaces. It is populated from authored chapter vocab —
   never with invented meanings.

2j. **A separable verb's split finite token belongs to the verb it was authored
   under when the simple stem has no entry.** `fängt an` (anfangen) yields the
   bare token `fängt`; rule 2f attributes such a token to the SIMPLE verb, which
   is right when that verb exists and is common (`macht` → machen). When it does
   not exist, do NOT author it to make 2f fire: in this curriculum `fängt` only
   ever occurs as part of `anfangen`, so `fangen` "to catch" would be wrong
   nearly every time. Several such stems are also pure suffix artefacts
   (`beschreiben` ends in "reiben" but is be+schreiben; `schauen` in "hauen";
   `bloggen` in "loggen"). Attribute to the separable parent; leave ambiguous
   where several parents share a token (`lädt` ← einladen/hochladen/…).
2k. **Gender comes from the curriculum, never from a suffix rule.** Approved
   vocab cards carry explicit `art:`/`gender:` fields; harvest those. Suffix
   patterns (-ung → f, -um → n) may be used ONLY to FLAG contradictions for
   review, never to write a value: `Ei`, `Kuchen`, `Baum`, `Friseur`, `Labor`,
   `Tor`, `Abitur` and `Erlaubnis` all violate the "obvious" rule and are
   correctly typed. Where a card is missing, leave gender unset.
2l. **Validate gender against the cards after every build.** A stored gender that
   contradicts its approved card is a defect: 127 entries were wrongly `m`, and
   the genitive wave turned that into 182 non-existent forms (`universitätes`,
   `bühnees`). Feminine nouns must never receive a genitive -s key unless that
   key is the noun's own authored -s plural (`App`/`Apps`).

3d. **PINNED EXCEPTIONS — surfaces that rule 3b must NOT drop.**
   Rule 3b drops a key claimed by two lemmas. That is right when the surface has
   another resolution route, and wrong when dropping it makes a real word
   non-clickable. The build MUST honour this table instead of recomputing it:

   | Key | Pinned lemma | Why the generic rule is wrong here |
   | --- | --- | --- |
   | `studien` | `Studie` | `die Studie` and `das Studium` genuinely share the plural `Studien`. Dropping the key leaves `Studien` with no route on most pages (verified: non-clickable on C1·18), and pointing it at `Studium` shows the wrong lexeme in every corpus occurrence. Every bare `Studien` in the curriculum is the research sense — the degree-course reading occurs only inside compounds (`Englisch-Studium`, `Studienergebnisse`, `Studienleiterin`), never as bare `Studien`. So the ambiguity is real in German but unrealised here. |

   A pinned key is written even when several lemmas claim it, and is never
   overwritten by a later wave. Add a row ONLY with corpus evidence that the
   losing reading does not occur as a bare surface; absent that evidence, rule
   3b's drop stands (see `kliniken` ← Klinik/Klinikum, `daten` ← Daten/Datum,
   which remain correctly unindexed).

2m. **Attributive participial adjectives decline like any other adjective.**
   The adjective wave excluded every class containing `partizip`. That exclusion
   was meant to keep NOMINALISED participles out, but it also blocked
   `Adjective (Partizip I/II)` and `Adjective (compound Partizip II)`, which are
   ordinary attributive adjectives (`fundiert` → fundierte/fundierten/…).
   Exclude only the nominalised classes (`nominal`, `substantiv`, `chain`,
   `phrase`, `collocation`). 51 entries, previously all unreachable.
2n. **Decline the comparative and superlative stems, not only the positive.**
   The wave declined base + `-e/-en/-em/-er/-es` and stopped, so every
   attributive comparative and superlative was unresolvable even where the
   `compare` block is fully populated (`schönere`, `günstigeren`, `wichtigste`).
   Take both stems LITERALLY from the stored block — no morphology generated.
   The superlative is stored as `"am schönsten"`, so its declinable stem is that
   string minus the `am ` prefix and its final `-en`. 844 entries.
   *Known limitation:* where the stored superlative is itself non-standard
   (generated `v1` data, e.g. `"am dringendesten"`), the derived stem does not
   match the corpus form (`dringendsten`). The build must NOT correct it —
   report the generated compare block instead.
2o. **The du-imperative uses the infinitive stem when the present tense only adds
   an umlaut.** German `a/o/u/au → ä/ö/ü/äu` verbs drop that umlaut in the
   imperative (`lassen → lass`, `tragen → trag`, `waschen → wasch`,
   `halten → halt`, `fahren → fahr`), so deriving the imperative from the
   du-form yielded non-words. Fire ONLY when reverting the umlaut in the
   authored 3rd-person form reproduces the infinitive stem exactly — that proves
   the change is a pure umlaut and nothing else. `e → i/ie` verbs
   (`geben → gib`) are untouched and keep the du-form route. 32 verbs.
3e. **WITHHELD KEYS — a correct derivation that teaches the wrong word class.**
   Rule 2o's output can be a real imperative that collides with a deverbal noun
   the corpus actually uses, while no noun entry exists yet. Such a key is
   withheld, not forced:

   | Key | Withheld from | Reason |
   | --- | --- | --- |
   | `verlauf` | `verlaufen` | corpus uses *der Verlauf* (course); no noun entry yet |
   | `schlaf` | `schlafen` | corpus uses *der Schlaf* (sleep); no noun entry yet |

   Remove a row once the noun entry exists. Add a row only with the same
   evidence standard as rule 3d: verified corpus usage, not a guess.

2m. **Attributive participial adjectives decline normally.** Exclude only the
   NOMINALISED classes (`Nominalized participle …`, `Noun (substantivized …)`,
   adjective chains and phrases). The earlier exclusion dropped every class whose
   name contained "partizip", which also removed `Adjective (Partizip I)`,
   `Adjective (Partizip II)` and the compound variants — ordinary attributive
   adjectives whose declension is fully regular (`umfassende`, `fundierte`,
   `anerkannten`).
2n. **Decline the comparative and superlative stems too, not only the positive.**
   The stems are stored in `compare.comparative` and `compare.superlative`
   ("am schönsten" → stem `schönst`). Attributive comparatives and superlatives
   are regular once the stem is known, so no morphology is invented. NOTE the
   provenance split: of 844 compare records only 26 are `source: "authored"`;
   819 are `source: "generated"` (project generator v1). Declining a generated
   stem propagates any error in it — `groß: "am größten"` is the one stem whose
   shape the validator flags, and it is correct, but the generated superlatives
   have NOT been audited as a set.
2o. **e-elision applies to -el, and to -er ONLY after a vowel — never after a
   consonant.** `dunkel → dunkle`, `teuer → teure`, `sauer → saure` elide;
   `schwer → schwere`, `clever → clevere`, `locker → lockere`, `bitter →
   bittere`, `finster → finstere` keep the e. Applying elision to every -el/-er
   base (the earlier rule) produced the non-words `schwre`, `clevre`, `lockre`,
   `bittre`, `saubre`, `bessre` AND omitted the attested forms entirely, so real
   surfaces resolved to nothing. Test: the character before a final `-er` must
   match `[aeiouäöü]` for elision.
2p. **Decline compare-less adjectives.** An adjective with no `compare` record
   still declines; 47 were being skipped entirely (`anerkannt`, `verspätet`,
   `vorbereitet`, `erkältet`, `erholt`, `besser`, `nah`,
   `verhandlungssicher`). Use `compare.positive || w || key` as the base.
2q. **Invariable adjectives take no endings.** A small closed class of loanwords
   and colour words — `super`, `prima`, `klasse`, `spitze`, `rosa`, `lila`,
   `beige`, `extra`, `egal`, `schade` — is excluded from the declension wave;
   declining them yields non-words (`supere`, `primaer`, `lilae`).
3e. **Never index a surface that occurs only as a deliberate error.** Forms that
   appear solely inside `wrong:` fields of error-correction exercises
   (`gutste` for *beste*, `Ergebniss` for *Ergebnis*, `Nehm` for *Nimm*) must
   stay unresolved. Indexing them would present a wrong form to the learner with
   the authority of a dictionary popup.
3f. **A single surviving suffix candidate is not proof of identity.** Require the
   candidate's authored word class to match the inflection kind being proposed,
   and reject when the semantic relationship is wrong. Cases the class gate alone
   still let through and which must stay unmapped: `Zeuge → Zeug`,
   `Nichte → nicht`, `Ebene → eben` (unrelated words); `Ablauf → ablaufen`,
   `Verlauf → verlaufen`, `Ausfall → ausfallen`, `Schlaf → schlafen` (the
   surface is a deverbal NOUN, not a verb form); `fällt`/`Fälle`/`fällst →
   fällen` (corpus sense is *fallen* / *der Fall*, and the umlaut hides the true
   base from suffix stripping); `Kliniken → Klinik` (`Klinikum` shares that
   plural and is unreachable by stripping, so the "single candidate" is an
   illusion).

3b. **Collision policy** (in order; a key that survives none of these is dropped):
   - identical lexical item under several headword spellings ("sich freuen" /
     "freuen (sich)", "Hinweis" / "der Hinweis") is ONE lemma — prefer the
     shorter spelling;
   - a single-word lemma outranks multi-word lemmas that merely contain it
     (bare `gegangen` → `gehen`, not `spazieren gehen`);
   - a verb form outranks a noun case form on the same surface (`maßen` →
     `messen`, not `Maß`): running text is dominated by the verb reading, and a
     wrong meaning is worse than an unlinked word;
   - an attributive adjective outranks its own nominalisation (`wunderbares` →
     `wunderbar`, not `Wunderbare`), since German capitalises the nominalisation.
   Anything still ambiguous (`fällt` → fallen / fällen, `vermisst` → vermissen /
   vermessen) stays unindexed and is reported for linguistic review.
3c. **Never index metadata placeholders.** The `plural` field carries markers
   like `sgn` / `pln` for uncountable and plural-only nouns, and occasionally a
   multi-word or slashed value. These are metadata, not word forms.

   Without this normalization the `du` form was never generated for any
   separable or reflexive verb (and the `ich` form never for a reflexive),
   because the raw two-word string fails the single-word morphology rules —
   that is why `mitmachst` and `beruhige` had no key while `mitmacht` and
   `beruhigt` did. Verbs with no authored `conj.praesens` are still skipped:
   deriving `du` from an infinitive alone would guess stem changes
   (fahren → fährst), which this build never does.
3. **Drop dead-redundant proposals.** If a key is already its own direct
   Global Lexicon headword AND a candidate has the SAME grammatical class
   as that headword, drop that candidate — `resolveLemma`'s exact-match
   step already gives the identical sense, so indexing it again is inert.
   Do NOT drop a candidate whose class DIFFERS from the direct headword's
   class — that is a genuine cross-class rescue (e.g. surface "stelle" is
   both the noun "Stelle" AND the 1st-person of the verb "stellen"; the
   verb candidate must survive so the conjugation fallback can find it).
4. **Try deterministic resolution before declaring a collision.** If a key
   still has candidates pointing to different lemma strings, check whether
   they share the same BASE lemma once a leading article ("die
   Möglichkeit" → "Möglichkeit") or trailing disambiguation suffix ("haben
   (Termin)" → "haben") is stripped. If so, this is a build/authoring
   inconsistency, not a real ambiguity — resolve it to the canonical
   (unprefixed, unsuffixed) form automatically. This is a build-step fix,
   never a runtime guess.
5. **Detect and eliminate true collisions.** After steps 3–4, if the
   surviving candidates for one key still resolve to more than one
   distinct base lemma, that is a genuine, irresolvable ambiguity — classify it
   (e.g. `noun ↔ verb`, `noun ↔ noun`) and DROP the key entirely. Never
   guess which sense wins.
6. Only keys with exactly one surviving lemma enter the final table.

## Regenerating
Re-run steps 1–5 (see git history / prior `run_script` calls in this
project's build log for the exact reference implementation) whenever the
Global Lexicon's source vocab changes. Always report: total candidates,
dead-redundant count, collision count + categories, and final table size —
the collision count after step 4 must always be the count actually dropped
in step 4 (i.e. every surviving key is provably single-lemma).

## Pinned exceptions (must survive a rebuild)

Each key below would be DROPPED by rule 3b as a genuine collision. Corpus
evidence decides them, so they are pinned and must be re-applied after any
rebuild.

| Key | Pinned to | Rejected reading | Evidence |
| --- | --- | --- | --- |
| `studien` | `Studie` | `Studium` (identical authored plural) | every bare `Studien` in the corpus is the research sense; the degree-course sense occurs only in compounds |
| `vermisst` | `vermissen` | `vermessen` (identical authored `praesens`) | all occurrences are "to miss" (B2·24 *"Er vermisst seine Schulzeit"*); `vermessen` never occurs as this surface |
| `erkältete` | `sich erkälten` | `erkältet` (participial adjective) | B1·7 *"Sie erkältete sich im Winter oft"* is the authored Präteritum `"erkältete sich"`, not the adjective |

## Adjective-sense entries (rule 2m)

A spelling can be legitimately both Adverb and Adjective (`klar`, `echt`,
`kurz`). Only the BARE form collides — all declined keys are free, and the bare
key is never consulted when resolving a declined surface. So the adjective sense
lives under an internal key `<base> adjektiv` with `w: '<base>'`, and the
declined keys point at `"<base> (adjektiv)"`. The key contains a space, so
`normWord()` of a real surface can never produce it.

Two consequences for the build:
- **Validate index targets against the KEY, never `w`.** Both senses share
  `w: 'klar'`, so a `w`-based backing test cannot tell them apart.
- **The Comparison grid must print `compare.positive`**, not `lemma || w`, or the
  internal qualifier leaks into learner UI. All 846 compare records carry
  `positive` and it never differs from `w`, so this is a no-op for older entries.
