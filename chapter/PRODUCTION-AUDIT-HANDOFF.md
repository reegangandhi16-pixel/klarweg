# Klarweg Production Audit — Session Handoff

**Authoritative state document.** Next session reads this first and continues from the
NEXT SESSION INSTRUCTION at the end. Do not reread the previous conversation unless a
specific unresolved issue demands it.

---

## 1. Current objective

Production-level, **word-by-word** audit of every learner-facing German word, A1 → C2.

For every occurrence verify: correct Klarweg grammar colour · clickability · hover/cursor ·
popup opens · popup headword · popup headword colour · English meaning · Hindi meaning ·
Word Class badge · grammatical context · gender · case · number · person · tense ·
correct paradigm type · correct active cell · example sentence · nested example word
colours · nested example clickability · audio where applicable · no black/ink fallback ·
no browser link-blue · no incorrect metadata inheritance · no console errors.

**No word may be silently skipped.** Repeated surfaces are separate occurrences and are
audited independently (role, case, number, tense can differ per occurrence).

---

## 2. Frozen architectural principles

- **One canonical paradigm renderer:** `renderParadigmGrid()`. No parallel renderers, no
  paradigm-specific CSS.
- **One canonical resolution pipeline.** Canonical click pipeline:
  `click → resolveFullEntry() → shared merge/resolution pipeline → renderWordPop()`.
  **No click path may bypass this.**
- **Occurrence metadata is authoritative for contextual grammar** (role, case, gender,
  number, person, tense). **Dictionary data is authoritative for canonical lexical
  information** (headword, EN, HI, examples, paradigm data, audio, plural, compare, conj).
- Explicitly authored German metadata overrides automatic dictionary matching.
- A dictionary match alone does **not** prove rendered text is German learner content.
- No word-specific hacks. No chapter-specific hacks. No surface-specific exceptions.
- No sentence-position grammar guessing. No fabricated linguistic data.
- Classify every finding as: **ENGINE BUG** / **CONTENT GAP** / **INTENTIONAL ABSENCE** /
  **NEEDS REVIEW**.
- `resolveClickableWord()` is the only entry point deciding whether a German word is
  clickable. `GERMAN_WORD_CHARS` / `germanWordRegex()` are the only tokenizer.

---

## 3. Language-aware interactivity rule (global, established this session)

| Context | Behaviour |
|---|---|
| German learner content | clickable + German popup + German semantic colour |
| Hindi/Hinglish explanatory prose | **not** automatically German |
| English explanatory prose | **not** automatically German |
| Dictionary coincidence alone | insufficient to create a German link |
| Explicitly authored German tokens | remain German + clickable regardless of container |

Fixed cases: `hi` in Hinglish prose → no German popup · `mein` in Hinglish prose (= Hindi
मेरा) → no German popup · `extra` in English prose → no German popup (prefix-only match).
But `mein` / `extra` inside genuine German content remain clickable German.

Mechanisms changed: `LINK_TARGETS_GATED` (removed `.hinglish-text`), `wrapWordsIn`,
`germanWordSpans`, `germanWordSpansGated`, role propagation in all of them.

**Permanent architectural TODO (documented, not yet built):** language detection should
become explicit metadata / render-context driven rather than relying on container class +
orthography heuristics. Precedence intended: explicit language metadata → render-context
metadata → component context → orthography (fallback only).

---

## 4. Colour system

- Normal German learner word → its semantic Klarweg role colour.
- Popup headword → the **clicked occurrence's** role colour.
- Metadata chip (`.vword-tag`) → chip styling intentionally wins; nested word stays
  clickable. Chip-vs-popup colour difference is **INTENTIONAL CONTEXTUAL STYLING**, not a
  defect.
- Example sentence → every nested German word keeps its **own** role colour. Never force
  the clicked headword's colour onto the whole example.
- Active paradigm state outranks recursive-navigation link colour: inside
  `.wp-compare-cell.is-current`, `.de-link` inherits the paradigm's semantic colour.
- No browser link styling anywhere: no default underline, no link-blue, no visited colour.

Systemic colour bugs fixed this session: popup headword ink-black fallback · lexicalUnit
role loss · `wrapWordsIn` role loss · recursive `.de-link` colour precedence · vocabulary
chip precedence · proper-name (Rohan/Weber) colour · `Straße` occurrence mismatch ·
active-cell word text not carrying semantic colour.

### Surface-stable vs occurrence-bound roles (established this session)

A role may be carried from an authored occurrence to another occurrence of the same
surface **only if it classifies the token itself**, never if it describes the token's job
in one sentence.

- **Surface-stable** (`SURFACE_STABLE_ROLES` in `chapter-app.js`): currently `letter`
  only — letters, digraphs and sound-spellings (`type: Letter` / `Sound`) are
  metalinguistic citations with no syntactic function, so the reading cannot change with
  position. `.r-letter` is deliberately neutral (`--ink-secondary`, mono, 600) — a letter
  carries no grammatical meaning and must never take a grammar colour.
- **Occurrence-bound** (everything else — subject, object, time, place, akkusativ,
  dativ …): inheriting these by surface is the sentence-position guessing the
  architecture forbids.

Add a role to the stable set only when it is a property of the word type, never of the
sentence.

#### Why the set stays at `letter` — `adjective` deliberately excluded

Raised in review: `adjective` is a word class, not a sentence function, so `Willkommen`
(cyan `r-adverb` span under an "Adjective" badge) arguably belongs on the stable side.
Decided against, on evidence:

1. **It is not the lever.** `KW_STORY_LEX['willkommen']` = `{ role: 'r-adverb', type:
   'Greeting' }` and wins in `storyTokenFor`'s `ext` branch — the explicit global lexicon,
   which sits *above* the stable-role lookup by design. Adding `adjective` to the set
   changes nothing for this word. The real cause is a **data disagreement**: the story
   lexicon calls it a Greeting/adverb, the Global Lexicon calls it an Adjective; the span
   colour follows the first source and the badge follows the second.
2. **On the merits it is less stable than it looks.** German adjectives convert
   systematically — nominalised adjectives (`das Gute`), participles used attributively,
   and precisely this greeting/interjection use. A surface-keyed adjective role would
   propagate across those conversions, and the unanimity gate only sees disagreement
   *within one chapter*, so a word authored consistently in one chapter but converted in
   another would still leak.

The set stays at `letter` until a defect appears that the stable set actually fixes.
`Willkommen` is logged as a data conflict for the Reading pass, not a role-set change.

---

## 5. Paradigm system

All paradigm types render through `renderParadigmGrid()`: Comparison, Conjugation, Number,
Declension, Article, Pronoun. Identical card geometry, typography, spacing, hover/active
states, audio placement, recursion behaviour.

Active cell: subtle ring + tint, rounded, no animation/glow. **Exactly one active cell**
when the occurrence is unambiguous; fragment emphasis (weight only, no second colour) for
separable-verb fragments inside a cell. The old "Sentence Form → Dictionary Form" block was
removed — the paradigm itself carries that explanation.

Disambiguation channels, all read from the occurrence's authored `type` metadata (never
inferred from position): tense · person · gender · case · number · exact-match ·
fragment-match. When two cells hold the identical surface and no hint exists, the engine
**correctly renders zero active cells** rather than guessing — that is a content/authoring
gap, not an engine bug.

Article bug fixed: `der` in "in der Schule" → feminine **Dativ** (was masculine first-match).
`der Apfel` (vocabulary citation) → masculine **Nominativ**.

---

## 6. Conjugation system

Legacy schema: `conj.praesens` = single canonical string (3rd sg.).
New schema: `conj.praesens = { ich, du, er, wir, ihr, sie }`.

Renderer accepts both — person-aware expands to six labelled Präsens cells plus
Infinitive/Präteritum/Perfekt; legacy renders the original four cells. Fully backward
compatible.

**Status: 131 / 1,334 verbs person-aware. 1,203 legacy/review population. PAUSED.**

Review categories deliberately untouched: 478 separable/multiword · 484 KW_INFLECTIONS
conflicts · 99 stem-changing/irregular · 71 non-`-en` infinitives · 63 reflexive · 7 modal ·
1 auxiliary.

`KW_INFLECTIONS` was regenerated from authored person-aware forms only (148 mappings added,
632 preserved, 6 conflicts logged to `chapter/conj-inflection-conflicts.json`, none
overwritten). Build-step owns morphology; runtime consumes data only.

**Stale token-level `conj` problem:** chapter tokens carrying their own inline `conj`
shadow the dictionary (`mergeWordData` gives token data precedence). 15 found and removed
in A1; A1–C2 swept clean for the migrated verbs. **Every future migration batch must be
paired with a stale-override sweep for exactly those lemmas** — this is the highest-risk
item for resuming migration.

**Do NOT resume global conjugation migration during the A1-1 production audit unless
explicitly instructed.**

---

## 7. Resolution fixes (all systemic, all verified)

1. `lexicalUnit` resolution preserves the clicked occurrence's `role`.
2. `navigateToWord()` routes through `resolveFullEntry()` — recursive/auto-linkified/chip
   clicks no longer bypass paradigm inheritance. (Root cause of the `Jahre` defect.)
3. Noun `plural` inheritance added as sibling to the existing `compare` / `conj`
   inheritance fallbacks.
4. Thin direct entries no longer silently shadow richer canonical lemma data.
5. Homograph guard extended to the **lemma paths** (`localLemma` / `glexLemma`), which
   previously had none — a noun/adverb occurrence could inherit an unrelated verb lemma.
6. Verb-paradigm inheritance gated on the **clicked occurrence's** class, not just the
   source's.
7. `KW_INFLECTIONS` regenerated/extended from authored person-aware data.
8. Article family/case selection uses occurrence metadata before first-match fallback.
9. Number-invariant nouns resolve via explicit occurrence number metadata.
10. Prefix-only dictionary match no longer makes a bare prose word clickable.
11. Authored occurrence context honoured from an ancestor's `data-type` attribute in
    `wrapWordsIn`.
12. **Authored lexical class reaches surface-only lookups.** `storyTokenFor()` consulted
    `KW_STORY_LEX` → chapter vocab → `STORY_LEX` → `guessRole()`, but never the chapter's
    own authored tokens — so every auto-linkified occurrence lost the authored role and
    fell to the morphological guess, whose catch-all is `r-adverb`. A chapter-local index
    (built by generically walking the chapter data, unanimity-gated) now supplies
    surface-stable roles above the inferred paths and below the explicit global lexicon.
14. **Proper names: word class ≠ semantic role (Option B).** `.r-name` was defined as
    `--ink-primary` and `ROLE_COLOR_VAR.name` mirrored it, so EVERY proper name in the
    curriculum rendered in ordinary body-text black — indistinguishable from an unresolved
    fallback. `r-name` is an entity/word-class marker, not a grammatical role.
    `nameOccurrenceRole()` now resolves the occurrence's real role from authored metadata
    (`case:` → Nominativ/Akkusativ/Dativ/Genitiv, or a role named in `type:`), applied in
    both `roleFor()` and the popup headword. Unresolved names keep `r-name`, which now
    renders in the NEUTRAL ink already shared by `.r-conjunction` and `.r-letter` — the
    honest answer, and usually the correct one, since most authored name occurrences are
    vocatives ("Timo, hast du …") or predicate complements ("Hier ist Svenja.") that have no
    Spine-5 role at all. No new colour token; the badge still shows "Name".
15. **Coreference in an entry's own example.** `germanWordSpans` gained a third parameter:
    where an example repeats its own headword surface it denotes the same occurrence and
    takes the entry's resolved role. Applied ONLY when the surface's own resolution yields a
    word-class role (a name) — so "Der Apfel ist rot." under the `Apfel` entry still colours
    its Apfel from the lexicon rather than inheriting an object role into subject position.
    Every other example word keeps its own role; this is NOT inheritance of the clicked
    word's colour.
16. **A paradigm must be about the word that was clicked.** When no cell is current AND the
    clicked surface appears nowhere in the grid AND no cell shares a 3-character stem with
    it, the table was inherited from a different lexeme and is suppressed (Unknown > Guess).
    Caught the possessive determiners `deinen` and `meinen` rendering the PERSONAL pronoun
    paradigms du/dich/dir and ich/mich/mir. The stem backstop keeps legitimate tables whose
    cited forms differ from the clicked inflection (`Kindern` vs Kind/Kinder, `kleineren` vs
    klein/kleiner). Verified by A/B diff on A2-8 with the guard toggled: **exactly 1
    occurrence out of 1,221 lost a paradigm, and it was the `meinen` defect.**

---

## 8. Story status — A1-1

**61 / 61 occurrences individually audited. COMPLETE.** 55 full PASS at time of audit; all
6 defects fixed:

`bin` (no KW_INFLECTIONS mapping → 0 cells) · `Name` (wrong "Verb" badge + verb paradigm on
a noun) · `bitte` (adverb inherited verb conjugation) · `klingt` ×2 (ambiguous person) ·
`das` / `die` (ambiguous case) · `sind` (person disambiguation, needed unambiguous
`(sie/Sie)` pattern).

**Lesson recorded:** earlier automated scans reported "0 anomalies" across 156 occurrences
while all six of these defects were present, because the scans checked only cursor and
colour — never badge-vs-role agreement or active-cell correctness. Automated scans are
supporting evidence only.

Content gaps logged: `gut` (no authored compare) · `üben` (legacy conj schema) ·
`Weber`/`Umlaute` (no example sentence).

---

## 9. Vocabulary status — A1-1

**94 / 94 rendered clickable occurrences individually audited. COMPLETE.** 91 full PASS,
4 engine defects fixed:

1. `.vword-ex .rw` missing from the pointer/hover CSS scope → example words had
   `cursor: auto`.
2. Invariant-noun number handling (`Eis`: singular == plural → 0 active cells).
3. Vocabulary headword nouns bypassed the canonical renderer.
4. `navigateToWord` resolution bypass (the `Jahre` root cause).

**Vocabulary example architecture — all four German-text paths now canonical:** headword
article · gender chip · plural chip · example sentence. Examples support authored
`exTokens` (existing Story/Reading/Listening token schema — no new schema); entries without
`exTokens` fall back to plain-string rendering, so the rest of the curriculum is unaffected.
12 A1-1 examples authored with real occurrence grammar.

Reference case "Der Apfel ist rot.": `Der` → masc. Nominativ · `Apfel` → Noun Singular ·
`ist` → sein Präsens 3rd sg. · `rot` → Adjective.

Content gaps: `gut`, `rot` (no authored compare).

---

## 10. Grammar status — A1-1

**21 / 21 occurrences individually audited. COMPLETE.** Occurrence count dropped 33 → 21
after removing false German links in non-German prose. Grammar #0–10 re-verified PASS after
the earlier systemic fixes; #11–#20 audited this session.

Fixes made in Grammar: language-aware auto-linking · prefix-only match guard ·
`wrapWordsIn` role propagation · authored occurrence context via `data-type`.

Resolved cases: `Käse` (invariant noun → authored `data-type="Noun · masc. singular"` on the
grammar table cell) · `Straße` (page-sweep role loss) · `hi` / `mein` / `extra` (language
context).

### #11–#20 results

| # | Surface | Result |
|---|---|---|
| 11 | `ei` | CONTENT GAP — digraph unauthored, resolves to the noun `Ei` "egg" |
| 12 | `ei` | CONTENT GAP — same |
| 13 | `Eis` | PASS — invariant noun, 0 active cells is correct abstention |
| 14 | `Liebe` | ENGINE DEFECT → FIXED (fix 13); now CONTENT GAP (no authored plural) |
| 15 | `z` | ENGINE DEFECT → FIXED (fix 12) — was `r-adverb`, now `r-letter` |
| 16 | `z` | FIXED |
| 17 | `z` | FIXED |
| 18 | `ts` | FIXED |
| 19 | `ts` | FIXED |
| 20 | `Zeit` | PASS — Noun, Number paradigm, 1 active cell |

`z` / `ts` are **purpose-authored chapter content** (badges Letter / Sound, real EN/HI/why/
example), not dictionary coincidence — they were correct entries wearing a fabricated
grammar colour. 0 paradigm cells on a letter is INTENTIONAL ABSENCE.

### Regression caught and corrected mid-session

The first version of fix 12 indexed **all** authored roles by surface. That flipped the
citation-form `Eis` from `r-object` to `r-subject`, inheriting the contextual role from the
vocab example "Das Eis ist kalt." — exactly the sentence-position guessing the architecture
forbids. The rule was narrowed to `SURFACE_STABLE_ROLES` (§4) and `Eis` restored. Recorded
because the failure mode is subtle: a surface-keyed role index looks harmless until a word
is authored once, in one syntactic position.

### CURRENT NEXT ITEM: Reading — occurrence #0

Reading has not been started. Enumerate its learner-facing German occurrences first, then
audit sequentially per §12.

---

## 10a. Reading status — A1-1

**35 / 35 occurrences individually audited. COMPLETE.** 34 PASS at audit time; 1 defect found
and fixed.

**Defect — `Willkommen` (occurrence #0, and inside #30's example). CONTENT/DATA, fixed.**
The heading "Willkommen in der Schule" is auto-linkified, so it resolved by surface through
`story-lexicon.js`, which authored `willkommen` as `['r-adverb', …, 'Greeting']`. It rendered
cyan under an "Adjective" badge (badge came from `KW_GLOBAL_LEXICON`, colour from the story
lexicon). Occurrence #30 rendered correctly amber from its own authored token, but its
example sentence still showed the word cyan — the same word in two colours inside one popup.

`willkommen` is an indeclinable predicative adjective; both the Global Lexicon and A1-1's own
tokens already say Adjective. Fixed at the shared source: `story-lexicon.js` →
`['r-adjective', …, 'Adjective · greeting use']`. Span, headword, badge and nested example now
all agree. Verified no regression in A1-4 (its three story-lexicon-resolved occurrences
corrected to amber; its two occurrences with inline `role: 'r-subject'` tokens are unchanged,
since an authored token still outranks the lexicon by design).

**Cross-chapter inconsistency logged, not swept (§14):** `willkommen` is authored with five
different roles across the curriculum — `r-adjective` (A1-1, correct), `r-adverb`
(story-lexicon, now fixed), `r-subject` (A1-4 ×2, B1-10) and `r-verb` (A1-17). Only the shared
source was corrected; the inline chapter overrides belong to those chapters' own passes.

Content gaps (no authored example/why, engine behaving correctly): `Weber` ×2 and the spelled
letters `R` `O` `H` `A` `N` render a popup with no Example section · `gut` still has no
`compare` (already ledger item 1).

### CURRENT NEXT ITEM: Listening — occurrence #0

Four findings are already known to be waiting there (§14): `Heft` / `Buch` / `Apfel` / `Stift`
carry an "Adjective" badge on nouns.

## 10b. Listening / Speaking / Writing / Exercises / Summary — A1-1

All audited occurrence-by-occurrence this session. A1-1 is now fully swept:
Story 64 · Vocabulary 94 · Grammar 21 · Reading 35 · Listening 4 · Speaking 14 · Writing 4 ·
Exercises 5 · Summary 6 = **247 learner-facing occurrences**, every section `clean` under the
full KWAudit check set, zero black fallback, zero link-blue, no console errors.

**Listening (4/4 PASS — intentional design, not a defect.)** All four occurrences (`Heft`,
`Buch`, `Apfel`, `Stift`) sit inside `BUTTON.mcq-option` answer buttons. `LINK_EXCLUDE`
explicitly names `button`, `.mcq-options`, `.builder-token`, `.builder-slot`, `.quiz-stage`,
so no popup handler is attached — a popup there would leak the answer of a listening
comprehension question. Role colour is applied and correct (`r-object`, all four identical,
so the colouring leaks nothing).

The previously reported "four nouns badged Adjective" was a **SCAN ARTIFACT, not a defect**:
the popup is a single reused node, so when a click opened nothing the scan silently read the
PREVIOUS word's popup. Fixed in `audit-scan.js` (§12).

**Speaking (14/14).** One defect found and fixed — `deinen` rendered the personal pronoun
paradigm du/dich/dir (fix 16). Two content gaps logged: `A` and `buchstabiere` have no
authored example.

**Summary (6/6).** One content defect fixed (`name` — English word wrapped in `.de`), one
architectural blocker raised (`fast` — see Decision 2). Occurrence count dropped 7 → 6 when
the false German link was removed.

### CURRENT NEXT ITEM: A1-2, Story occurrence #0

A1-1 is swept but remains **NOT PASS** — see §11 for the blockers still open.

## 11. A1-1 release status

| Section | Status |
|---|---|
| Story | ✅ 64/64 COMPLETE |
| Vocabulary | ✅ 94/94 COMPLETE |
| Grammar | ✅ 21/21 COMPLETE |
| Reading | ✅ 35/35 COMPLETE |
| Listening | ✅ 4/4 COMPLETE |
| Speaking | ✅ 14/14 COMPLETE |
| Writing | ✅ 4/4 COMPLETE |
| Exercises | ✅ 5/5 COMPLETE |
| Summary | ✅ 6/6 COMPLETE |

**A1-1 = NOT PASS.**

---

## 12. Audit method

### PRIMARY: the Occurrence QA Engine (`chapter/qa-engine.js` + `chapter/qa-runner.html`)

The hand-driven per-occurrence pass does not scale to 259 chapters. The engine is now the
SCANNING layer; humans inspect **anomalies only**.

**`qa-engine.js`** — load on any chapter, then `KWQA.run()` →
`{ chapter, file, occurrences, checked, findings[], counts, clean }`. Every finding is
`{ code, severity, section, index, surface, detail }` with stable codes, so runs can be diffed.

| Code | Catches |
|---|---|
| `BLACK_FALLBACK` / `LINK_BLUE` | unresolved ink or browser-blue on a learner word |
| `NO_POINTER` | clickable word without pointer cursor |
| `NO_POPUP` | click opens nothing (auto-excused inside answer controls) |
| `MISSING_BADGE` | popup without a word class |
| `ROLE_CONTRADICTS_BADGE` | rendered colour contradicts the badge's part of speech |
| `PARADIGM_CLASS_MISMATCH` | Conjugation on a noun, Number on a verb, … |
| `PARADIGM_NOT_ABOUT_WORD` | grid belongs to another lexeme (`deinen` → du/dich/dir) |
| `HEADWORD_COLOUR_MISMATCH` | popup headword colour ≠ occurrence colour |
| `LETTER_ROLE_UNSTABLE` | a letter/sound resolving differently at different occurrences |
| `CASE_COLLISION_CAPITALISED` | capitalised surface resolving to a lowercase open-class entry (`Laut`) |
| `CASE_COLLISION_LOWERCASE` | lowercase surface resolving to a capitalised noun entry (`erste`) |

**`KWQA.selfTest()`** proves each DETECTOR works on synthetic input rather than trusting it:
badge parsing (Particle≠Article, Pronoun≠Noun, Adverb≠Verb, Greeting is not a class),
role-compatibility (NP function reaches articles AND adjectives; adjective↔adverb stays
rejected), colour codes, and DOM sentence-position detection. All pass.

**`qa-runner.html`** — iterates `qa-chapters.json` (259 pages) in a hidden iframe, injects the
engine after the async lexicon settles, aggregates by code, shows live progress, and exports
`klarweg-qa-report.json`.

### Validation against the manual audit (the contract)

- **A1-1** — 254 occurrences, **0 findings, clean**. Matches the hand audit exactly.
- **A1-2** — 284 occurrences, **10 findings**, and every one is a defect the manual pass had
  already identified: `Achte` ×3, `langsam` ×3, `noch` ×2, `und` ×2. No false positives.

Two engine false-positive classes were found and fixed during validation, both by comparing
against known-good manual results:
1. The case checks ran pre-click and flagged every sentence-opening adverb (`Heute`, `Sehr`,
   `Jetzt`, `Genau`, `Kurz`). Now position-aware via the same DOM walk the resolver uses.
2. They also flagged `ei`, which is correctly authored as a Sound, purely because a noun `Ei`
   shares its lowercase key. Now deferred until after resolution and reported only when the
   RESOLVED badge actually shows the colliding class — authored data wins.

### SECONDARY: manual per-occurrence inspection

Still required for anything the engine flags, and for judgement the engine cannot make:
whether a finding is an engine defect, a content gap, or intentional. Automated scans are
supporting evidence and never a PASS on their own.

### Superseded

`chapter/audit-scan.js` (KWAudit) is retained for reference but is replaced by `qa-engine.js`,
which carries the same rules plus the case checks, stable codes and the self-test.

### Historical blind spots — all now covered by the engine

The §8 scan checked cursor + colour but never badge agreement (0 anomalies over 6 live
defects). Its replacement checked badge-vs-paradigm but never colour, so `Willkommen` passed
while painted cyan under an Adjective badge. A third compared against a STALE POPUP — the
popup is one reused node, so a click that opens nothing leaves the previous word's popup in
the DOM, which reported four MCQ nouns as "badged Adjective" when they had no popup at all.
Detection is by CONTENT (headword names the clicked surface, or changed since the last
iteration), never by `.is-open`: that class is added inside `requestAnimationFrame`, which
never runs during a synchronous scan loop.

Sequential, first learner-facing German word → last. For each:
render → inspect colour → hover → verify cursor → click → inspect popup → verify metadata →
verify paradigm + active cell → verify nested example content → record status → close →
continue.

Batched **data capture** is allowed (10–20 occurrences per verification pass) to reduce
round-trips. Batched **verification is not** — every occurrence must still be individually
clicked and inspected. Automated scans cannot replace learner-facing inspection.

### Standing scan — `chapter/audit-scan.js`

Supporting evidence only, but it must be able to see every defect class the audit has
already hit. Load it on any chapter page and call `KWAudit.run()` or
`KWAudit.run('sec-reading')`.

Checks: **A** badge word class vs rendered role colour · **B** badge word class vs paradigm
section · **C** popup headword colour vs occurrence colour · **D** surface-stable (letter)
roles identical at every occurrence · **E** popup actually opened for THIS word · plus
ink-black / link-blue fallback, missing pointer cursor, missing badge. `run()` also returns
`_lexiconRoleVsClass` as a **diagnostic only**, excluded from the `clean` verdict.

Three blind spots this replaces, each of which reported "0 anomalies" over live defects:
the §8 scan checked cursor + colour but never badge agreement; its replacement checked
badge-vs-paradigm but never colour, so `Willkommen` passed while painted cyan under an
Adjective badge; and the third compared against a STALE POPUP — the popup is a single reused
node, so when a click opened nothing the scan read the previous word's popup and reported
four MCQ nouns as "badged Adjective" when they had no popup at all. Detection is by content
(headword names the clicked surface, or changed since the last iteration), never by the
`.is-open` class: that class is added inside `requestAnimationFrame`, which never runs during
a synchronous scan loop. `run()` also closes any popup left open before starting, so a
leftover popup cannot seed the comparison.

Occurrences inside `button, [role=button], input, label, textarea` that open no popup are
**not** reported: `LINK_EXCLUDE` suppresses popups in answer controls by design.

**Deliberate non-checks — frozen intentional behaviour, do not "fix":** the same surface
carrying different roles at different occurrences (role/case/number are occurrence-bound,
§2) · `.vword-tag` chip colour overriding the nested word (§4) · word class not implying a
single role. On that last point the OK map grants the NP-function roles
(subject/object/case/time/place) to **every word class that can sit inside a noun phrase** —
noun, pronoun, article, attributive adjective and interrogative determiner alike. In "Das
Gymnasium hat die größte Turnhalle", `die` and `größte` both carry `r-akkusativ` and both
are correct; granting it to the article but not the adjective made the map contradict its
own rationale. The scan also skips hidden nodes and the popup's own recursive links, both
of which yield phantom findings.

**Two tolerances trialled and REVERTED — do not re-add:**

1. *adjective ↔ adverb.* Defensible in principle (German adjective/adverb identity is real:
   `schnell` is one word in both uses), but every case it suppressed was a genuine defect,
   and it silently swallowed the finding check A exists for. It hid `Willkommen`
   (badge Adjective, painted cyan `r-adverb`) and the three A2-8 `super` cases (badge
   Adverb, painted amber `r-adjective`, in "Der Vergleich ist super nützlich" / "Das Talent
   ist super groß", where `super` is unambiguously an intensifier adverb). Zero true
   suppressions on A1-1 and A2-8. Word-class identity is a fact about the lexicon, not a
   licence for the rendered colour to contradict the badge shown beside it.
2. *A lexicon-level `KW_STORY_LEX.role` vs `KW_GLOBAL_LEXICON.type` conflict check.* Built
   to catch `Willkommen` at the data layer; returned 31 results on A1-1 of which ~28 are
   correct by design, because `POS_ROLE` maps a coarse word class to a DEFAULT role while
   the story lexicon legitimately assigns finer semantic roles (`mich` Pronoun→`r-akkusativ`,
   `abend` Noun→`r-time`, `hier` Adverb→`r-place`, `nicht` Adverb→`r-negation`, `wann`
   Adverb→`r-question`). The rest are genuine dual-class homographs (`das` article+pronoun,
   `bis` conj+prep, `arm` adj+noun, `zahlen` verb+noun). Unusable signal-to-noise; retained
   as `KWAudit.lexiconRoleVsClass()` for manual inspection only.

**Known limits (need sentence-level parsing — the human pass catches these, not the scan):**
case correctness *inside* an NP is invisible, because every NP word accepts every NP
function — an akkusativ role on a determiner in nominative position ("Welche Schule ist
besser…") passes. The scan tests class compatibility, never occurrence correctness.

**Validated on four chapters:** A1-1 (255 occurrences — Story/Vocabulary/Grammar/Reading all
clean; sole findings are the four sec-listening items), A1-9 (419 — 2 findings), A2-8
(1,221 — 8 findings), A1-4 (537 — 3 findings). Every remaining finding is in a NOT STARTED
section or chapter and is logged in §14.

**Badge parsing.** `badgeClass()` \b-anchors every pattern, because German grammar labels
nest: "Pronoun" contains "noun", "Adverb" contains "verb", and "Particle" contains
"article" — the last silently classified every Particle badge as an article. Anchoring
removes the ordering dependency rather than relying on test order.

**Pragmatic labels are not word classes** and return `''` (check A skips them): Greeting,
Politeness, Answer, Interjection, Particle, Title, Name. They describe what an expression
does socially, often across a whole phrase whose component words keep their ordinary roles —
"Auf Wiedersehen" badges as Greeting while `Auf` is a preposition and `Wiedersehen` a noun.
Treating them as classes produced 65 findings on A1-4, none of them defects.

---

## 12b. FULL A1–C2 SWEEP — defect population and taxonomy

Run with the validated `qa-engine.js` via `qa-runner.html`. **259 chapters, 0 errored.**

### A–G. Aggregates

| | |
|---|---|
| Chapters scanned | 259 |
| Occurrences scanned | **164,145** |
| Raw findings | **13,757** |
| High severity | 6,929 |

**By level** — the finding RATE matters more than the raw count:

| Level | Chapters | Occurrences | Findings | Rate |
|---|---|---|---|---|
| A1 | 48 | 30,905 | 864 | 2.8% |
| A2 | 35 | 31,503 | 992 | 3.1% |
| B1 | 35 | 32,612 | 2,068 | 6.3% |
| B2 | 69 | 45,223 | 5,793 | 12.8% |
| C1 | 43 | 11,978 | 2,384 | 19.9% |
| C2 | 29 | 11,924 | 1,656 | 13.9% |

Density rises sharply with level (A1 ~3% → C1 ~20%): higher levels use vocabulary that exists
only in the Global Lexicon and not in chapter-local data — exactly the population the POS tier
(R2) serves.

**By code:**

| Code | Findings | Chapters |
|---|---|---|
| `HEADWORD_COLOUR_MISMATCH` | 6,828 | 174 |
| `ROLE_CONTRADICTS_BADGE` | 6,495 | 257 |
| `CASE_COLLISION_CAPITALISED` | 244 | 73 |
| `BLACK_FALLBACK` | 104 | 22 |
| `PARADIGM_CLASS_MISMATCH` | 47 | 17 |
| `NO_POPUP` | 29 | 21 |
| `CASE_COLLISION_LOWERCASE` | 10 | 10 |

### D. ROOT CAUSES (not symptoms)

**R1 — Popup headword coloured from the ENTRY, not the OCCURRENCE. ✅ FIXED THIS SESSION.**
6,715 findings / 165 chapters — **49% of the entire defect population from one cause.**
Most dictionary entries store a word CLASS, not a sentence role, so `renderWordPop` found no
role and fell through to `--ink-primary`: the headword rendered in body-text black under a
correct badge while the page occurrence showed the right colour. Verified live — `Interview`
was `r-object` green on the page and `color:var(--ink-primary)` in its own popup.
Fix: `withOccurrenceRole()` reads the clicked span's rendered `r-*` class, and `renderWordPop`
uses it **only when the entry supplies no role**, so authored entry roles keep precedence and
occurrence-bound metadata is never overridden.
Worst chapter (B2-10): **109 → 0**. A1-1 still clean, A1-2 still exactly 10 — no regression,
nothing masked.

**R2 — Global-Lexicon POS tier missing (the long-standing open decision).** ≈**5,076** findings
across ~250 chapters. `roleFor` consults chapter-local data then `guessRole`, whose catch-all
is `r-adverb`; it never consults the Global Lexicon's `type`, although the dictionary knows
the answer. All one cause:

| Pattern | Findings | Examples |
|---|---|---|
| verb → `r-adverb` | 2,601 | `wird` 444 · `war` 430 · `wäre` 129 · `werde` 106 · `wurde` 83 |
| adjective → `r-adverb` | 304 | `herzlich`, `schade`, `jährlich` |
| preposition → `r-adverb` | 269 | `um`, `ab`, `trotz`, `anhand` |
| adjective → `r-verb` | 243 | `größte`, `hohen`, `kommenden` |
| conjunction → `r-adverb` | 216 | `also`, `ob`, `falls`, `jedoch` |
| adverb → `r-conjunction` | 191 | `noch`, `dann` |
| noun → `r-verb` | 170 | `Antworten`, `Kosten`, `Macht` |
| … 11 further pairs | ~1,082 | same fallthrough |

No verb should ever render adverb-cyan. **This is one fix.**

**R3 — Capitalisation rule over-fires in list/heading contexts. ⚠ SELF-INFLICTED this session.**
≈219 findings. `isCapitalisedNounHomograph` repaints capitalised time adverbs and imperatives
as nouns where the DOM walk judges them non-sentence-initial but they actually open a list
item, heading or table cell: `Abends`/`Morgens`/`Mittags`/`Nachts` → `r-object` (114),
`Achte`/`Zahlen`/`Stimmt` → `r-object` (105). `AUTHORED_ROLE` only vetoes surfaces the chapter
authors explicitly. Overlaps the 244 `CASE_COLLISION_CAPITALISED`.
Fix: extend `precedingText`'s boundary set to list/heading/cell elements, and use the
Global-Lexicon `type` (R2) as a second veto — **R2 subsumes most of R3**.

**R4 — Genuine capitalisation content gaps.** ≈140 / 73 chapters. Nominalised forms the
curriculum teaches but no lexicon authors: `Perfekt` (120 — "das Perfekt" as a grammar term),
`Essen`, `Können`, plus 10 `CASE_COLLISION_LOWERCASE` (`frage`, `test`). Engine correct.

**R5 — `BLACK_FALLBACK` 104 / 22 chapters**, incl. 45 where the SPAN is black (`der`, `hohen`,
`Armut`, `des`, `katholischen`). Concentrated in C1 genitive/formal-register text. **Not yet
root-caused** — needs its own trace.

**R6 — `PARADIGM_CLASS_MISMATCH` 47 / 17 chapters** (`Antworten`, `Kosten`, `Perfekt` showing a
verb paradigm under a Noun badge). Same lemma-collision family as R4.

**R7 — `NO_POPUP` 29 / 21 chapters** (`mit`, `aus`, `an`) — separable-prefix tokens rendered
clickable that resolve to nothing. Small, real.

### K. QA FALSE POSITIVES — ≈542 findings, detector too strict

The `OK` map denies prepositions and pronouns any semantic function, contradicting the frozen
rule WORD CLASS ≠ SEMANTIC ROLE: a preposition may legitimately carry the case it governs, and
a question word may carry `r-question`.

| Pattern | Findings | Verdict |
|---|---|---|
| adverb → `r-akkusativ` | 241 | quantity adverbs as objects — legitimate |
| pronoun → `r-question` | 64 | `wohin`, `welche` — legitimate |
| preposition → `r-connector` | 64 | `als`, `während` — legitimate |
| pronoun → `r-negation` | 59 | `nichts` IS a negation word |
| preposition → case/time | ~114 | two-way prepositions governing a case |

**Fix the detector BEFORE the next sweep**, or R2's true count stays inflated.

### M. RECOMMENDED FIX ORDER

| P | Fix | Removes | Status |
|---|---|---|---|
| **P0** | R1 popup headword occurrence colour | 6,715 | ✅ DONE |
| **P0** | R2 Global-Lexicon POS tier | ≈5,076 | decision open |
| **P1** | Detector FP correction (OK map) | ≈542 | before next sweep |
| **P1** | R3 capitalisation boundary + POS veto | ≈219 | after R2 |
| **P1** | R5 `BLACK_FALLBACK` trace | 104 | needs tracing |
| **P2** | R6 paradigm/lemma collisions | 47 | after R2 |
| **P2** | R7 separable-prefix `NO_POPUP` | 29 | independent |
| **P3** | R4 authoring gaps (`das Perfekt`, …) | ≈140 | content, needs sign-off |

### Golden regression corpus (manual audit remains ground truth)

A1-1 254 occurrences **clean** · A1-2 284 occurrences **exactly 10** (all previously identified
by hand) · A1-9 `und` ×2 · A2-8 8 findings (`super` ×3, `war` ×3, `größte`, `Vergleiche`) — all
reproduced by the engine BEFORE the sweep was trusted, and all unchanged after R1.

---

## 12c. RE-SWEEP AFTER DETECTOR FIX + R2 — current baseline

**259 chapters · 162,730 occurrences · 3,031 findings** (3 chapters timed out and need a re-run:
`b2-27-perfekt-vs-praeteritum`, `c2-01-zeitformen-der-verben`, `c2-17-adjektivdeklination`).

### Movement against the sweep-1 baseline

| Code | Sweep 1 | Sweep 2 | Change |
|---|---|---|---|
| `HEADWORD_COLOUR_MISMATCH` | 6,828 | **562** | −**92%** |
| `ROLE_CONTRADICTS_BADGE` | 6,495 | **2,071** | −**68%** |
| `CASE_COLLISION_CAPITALISED` | 244 | 209 | −14% |
| `BLACK_FALLBACK` | 104 | 102 | — |
| `PARADIGM_CLASS_MISMATCH` | 47 | 48 | — |
| `NO_POPUP` | 29 | 29 | — |
| `CASE_COLLISION_LOWERCASE` | 10 | 10 | — |
| **TOTAL** | **13,757** | **3,031** | −**78%** |

Clean chapters 2 → **11**. Density by level: A1 1.1% · A2 0.7% · B1 1.1% · B2 1.6% · C1 6.6% ·
C2 5.7% (was A1 2.8% … C1 19.9%).

### PHASE 1 — detector correction (done before any rendering change)

The old `OK` map denied prepositions and pronouns any semantic role, contradicting WORD CLASS
≠ SEMANTIC ROLE. Replaced with a two-dimensional model: `SEMANTIC_OK` lists, per semantic
role, the classes that can bear it; `CLASS_OK` keeps the coarse POS baseline.

Critically, "semantic" is **not** a blanket pass. A first attempt allowed every semantic role
on every class and silently dropped the confirmed `Achte [Verb→r-object]` defect from A1-2 —
exactly the downgrade the brief forbids. Corrected so NP function (subject/object/rhema) is
accepted only on NP-capable classes; a finite verb and a time adverb are not NP constituents,
so `Achte`(Verb) and `Abends`(Adverb) as `r-object` stay flagged. Case marks, time/place,
negation, question and connector are accepted on the classes that genuinely bear them.

`selfTest()` now asserts both directions (17 assertions, all pass), and the four golden
chapters reproduced their manual ground truth **exactly** (0 / 10 / 2 / 8) before R2 was
touched.

### PHASE 2 — R2 Global-Lexicon POS tier (implemented)

Three distinct causes, not one:

1. **`POS_ROLE` had no `conjunction` key.** Every dictionary Conjunction (`also`, `ob`,
   `falls`, `jedoch`, `sowie`) fell past the map into `guessRole`, whose catch-all is
   `r-adverb`. Added `conjunction`, `interjection`, `particle`, `name`, `letter`.
2. **Legacy `STORY_LEX` class roles outranked the dictionary.** `roleFromLexicons(voc, lex,
   surface)` now prefers a SEMANTIC role from STORY_LEX (hier→place, nichts→negation,
   mich→akkusativ — genuine refinements that must keep winning) but lets the dictionary's
   authoritative `type` override a mere CLASS role.
3. **`lookupWord` only returns entries this chapter knows.** Most function words are absent
   from chapter vocab, so the tier never saw a type. It now consults `KW_GLOBAL_LEXICON`
   directly by normalised key as the baseline tier.

Tier order: authored occurrence role → authored chapter data → semantic refinement →
Global-Lexicon POS baseline → legacy class role → `guessRole`.

Verified: `wird`/`war`/`wäre`/`werde`/`wurde`/`gibt`/`steht`/`liegt` → `r-verb` (all were
`r-adverb`); `also`/`ob`/`falls`/`jedoch`/`sowie` → `r-conjunction`; semantic roles intact
(`nichts`→negation, `hier`→place, `mich`→akkusativ); golden words correct (`bitte`→adverb,
`Name`→object, `bin`/`schreibst`/`klingt`/`sagt`→verb, `Jahre`/`Eis`→object,
`der`/`die`/`das`→article, `Willkommen`→adjective, `super`→adjective).

Per-chapter: B1-16 **154 → 8**, B2-10 19 → 6, A2-8 8 → 4, A1-2 10 → 7, A1-1 **still 0**.

### PHASE 6 — remaining root causes

**R8 — `story-lexicon.js` authored roles contradict the dictionary. NEW. Largest remaining.**
≈224 findings / 106 chapters. `KW_STORY_LEX` authors `noch` and `dann` as `r-conjunction`;
the dictionary types them Adverb. Authored data wins by design, so the engine is behaving
correctly — this is a **DATA defect in the authored lexicon**, not an engine defect. (`noch`
is legitimately a conjunction only in the `weder … noch` correlative; the entry applies it
globally.) Fix = correct the entries, not the resolver.

**R9 — lemma/POS collisions on ambiguous surfaces.** ≈450. `aus`/`mit`/`an` badged Verb but
roled preposition (separable-prefix vs preposition), `für`/`in`/`von` badged Noun,
`Antworten`/`Kosten`/`Essen` badged Noun but roled verb. Same family as R4/R6.

**R3 (residual)** ≈209 `CASE_COLLISION_CAPITALISED` — unchanged; the capitalisation rule still
over-fires in list/heading contexts.

**R5** 102 `BLACK_FALLBACK` — unchanged, still not root-caused. C1 genitive/formal register.

**R1 (residual)** 562 `HEADWORD_COLOUR_MISMATCH`, down from 6,828 — the remainder is a
different shape (`Morgen`, `Fuß`, `der`) and needs its own trace.

### Remediation order (updated)

| P | Fix | Removes | Kind |
|---|---|---|---|
| P0 | R8 `story-lexicon.js` `noch`/`dann` entries | ~224 | DATA |
| P1 | R9 lemma/POS collisions | ~450 | engine |
| P1 | R1 residual headword trace | ~562 | engine |
| P1 | R3 capitalisation boundaries | ~209 | engine (self-inflicted) |
| P1 | R5 `BLACK_FALLBACK` trace | 102 | engine, uncharacterised |
| P2 | R6 paradigm mismatches | 48 | engine |
| P2 | R7 separable-prefix `NO_POPUP` | 29 | engine |
| P3 | R4 authoring gaps (`das Perfekt`) | ~140 | content |

---

## 12d. PHASE 1–5 — timed-out re-run, R8 resolution, new root causes

### Phase 1 — the 3 timed-out chapters (re-run at a 90s budget, all completed)

| Chapter | Occurrences | Findings | Codes |
|---|---|---|---|
| b2-27-perfekt-vs-praeteritum | 753 | 13 | CASE_COLLISION 11, ROLE 2 |
| c2-01-zeitformen-der-verben | 291 | 18 | ROLE 9, HEADWORD 6, BLACK 2, CASE 1 |
| c2-17-adjektivdeklination-c2 | 375 | 71 | ROLE 68, HEADWORD 3 |

**Two NEW root causes surfaced here:**

**R10 — non-canonical authored roles produce unstyled spans.** c2-01 authors
`r-historisches-praesens` (on `Moment`, `an`). It is not in `CANONICAL_ROLES` and has no CSS
rule, so the popup neutralises it ("unmapped one-off label → neutral, not broken") but the SPAN
gets a class with no colour and falls back to inherited ink. **This is a strong candidate for
the uncharacterised R5 `BLACK_FALLBACK` population** — verify before fixing.

**R11 — phrase-level badges on C2 extended attributes.** c2-17 accounts for 68 findings alone,
with badges like `Adjective chain` and `Adverb (part of multi-modifier attribute)`. In
erweiterte Partizipialattribute ("der kürzlich empirisch fundierten Studie") the whole
attribute sits inside the NP, so `kürzlich`/`empirisch` → `r-subject` may be deliberate C2
teaching rather than a defect. **Needs linguistic adjudication before the detector is changed
— do not widen the rule to make the count fall.**

### Phase 2–4 — R8 audited and RESOLVED as class A (incorrect authored data)

The `story-lexicon.js` entry contradicted **itself**:

```js
dann:['r-conjunction','then','phir','dan','Adverb · connector'],
noch:['r-conjunction','still / yet','abhi bhi','nokh','Adverb · connector'],
```

Role says conjunction; the entry's OWN `type` says `Adverb · connector`, and the gloss
("still / yet", "then") is the adverb reading, not the correlative "nor".

Decisive evidence that this is data, not engine, and that the fix is safe:
- genuine `weder … noch` correlatives are authored PER OCCURRENCE in b2-22, b1-24 and c1-05 as
  `{ w:'noch', role:'r-conjunction', type:'Conjunction · part 2', en:'nor' }` — occurrence data
  outranks the story lexicon, so they are untouched;
- c1-04 already authors plain `noch` as `{ role:'r-adverb', type:'Adverb' }` — the chapter-level
  precedent for the non-correlative use.

Fix: both roles → `r-adverb`, matching each entry's own authored type and the dictionary POS.
Glosses, types and pronunciations unchanged. `r-connector` was considered and rejected as the
less conservative reading — it would assert Verbindungsadverb status the data does not state.

**Regression:** A1-1 **0** (unchanged) · A1-2 7 → **5** · A1-9 **2** · A2-8 **4** ·
b2-22-weder-noch **6, none about `noch`** — correlatives preserved exactly as required.

### R12 — EXPOSED by the R8 fix (pre-existing, previously masked)

b1-24 now reports `noch [Conjunction → r-adverb]`: the popup resolves the authored
`Conjunction · part 2` token, but the SPAN is coloured from the story lexicon. Before the fix
both happened to say "conjunction", so the disagreement was invisible.

**An authored occurrence token's role is not reaching the span colour in that renderer.** This
is a genuine engine defect that the R8 change did not create — it uncovered it. Same family as
c1-04's `zeigen [Verb → r-addition]` and `bleiben [Verb → r-contrast]`, where a connector's
semantic role appears to leak onto neighbouring verbs.

---

## 12e. POST-R8 BASELINE — all 259 chapters, 0 timeouts

**259 chapters · 164,126 occurrences · 2,947 findings · 22 clean chapters · 0 errored.**

### Trajectory

| | Sweep 1 | Sweep 2 (R1+R2+detector) | Sweep 3 (R8) |
|---|---|---|---|
| Findings | 13,757 | 3,031 | **2,947** |
| Clean chapters | 2 | 11 | **22** |
| `ROLE_CONTRADICTS_BADGE` | 6,495 | 2,071 | 1,959 |
| `HEADWORD_COLOUR_MISMATCH` | 6,828 | 562 | 572 |
| `CASE_COLLISION_CAPITALISED` | 244 | 209 | 224 |
| `BLACK_FALLBACK` | 104 | 102 | 104 |
| `PARADIGM_CLASS_MISMATCH` | 47 | 48 | 49 |
| `NO_POPUP` | 29 | 29 | 29 |
| `CASE_COLLISION_LOWERCASE` | 10 | 10 | 10 |

**R8 removed 84 findings and doubled the clean-chapter count (11 → 22).** That is far below the
~224 estimate: sweeps 2 and 3 are not directly comparable, because sweep 2 lost 3 chapters to
timeouts and sweep 3 measured them (b2-27 13, c2-01 18, c2-17 71 = 102 findings newly counted).
Net of that, R8's true reduction is ≈186. **This is why the brief's "do not trust old numbers"
rule matters** — the headline delta understates the fix by more than half.

By level: A1 305 (1.0%) · A2 188 (0.6%) · B1 351 (1.1%) · B2 664 (1.5%) · C1 724 (6.0%) ·
C2 715 (6.0%). C1/C2 remain ~6× the A-level rate.

### Remaining root causes, ranked (recalculated — old numbers discarded)

| Rank | Cause | Occurrences | Chapters | One fix? |
|---|---|---|---|---|
| 1 | **R9 lemma/POS collisions on ambiguous surfaces** — `verb→r-preposition` 166, `noun→r-verb` 145, `noun→r-preposition` 144, `noun→r-article` 91, `noun→r-adverb` 55 | **~601** | ~60 | likely |
| 2 | **R1 residual** `HEADWORD_COLOUR_MISMATCH` | 572 | ~89 | unknown — needs trace |
| 3 | **R13 class-baseline disagreement** — `preposition→r-adverb` 133, `adjective→r-adverb` 118, `adverb→r-adjective` 104, `adjective→r-verb` 103, `adverb→r-preposition` 57 | **~515** | ~90 | likely |
| 4 | **R3 capitalisation over-fire** `CASE_COLLISION_CAPITALISED` | 224 | ~67 | yes |
| 5 | **R11 C2 extended attributes** (c2-17 alone = 68) | ~100 | ~5 | adjudicate first |
| 6 | R5 `BLACK_FALLBACK` — candidate cause R10 (non-canonical authored roles → unstyled spans) | 104 | 21 | probable |
| 7 | R6 `PARADIGM_CLASS_MISMATCH` | 49 | 17 | after R9 |
| 8 | R7 `NO_POPUP` separable prefixes | 29 | 21 | independent |
| 9 | R4 content gaps (`das Perfekt`, nominalised forms) | ~140 | ~70 | content sign-off |

R9 and R13 together are **~1,116 of the 1,959** `ROLE_CONTRADICTS_BADGE` findings and share a
suspected single cause: the surface resolves to a lemma of a different word class than the
occurrence, so badge and colour are computed from two different lexemes. Verify before fixing.

---

## 12f. R9 / R13 ROOT-CAUSE TRACE (investigation only — no fix applied)

### The shared-root-cause hypothesis is PARTLY TRUE: one mechanism, two populations

**First divergence point, proven:** badge and colour are computed from **two independent
resolution paths that never reconcile**.

```
badge  ← resolveFullEntry(t) → merged entry .type          (lexical identity path)
colour ← roleFor(surface)    → authored → semantic → POS   (role path)
```

There is no single "resolved lexical identity" shared between them. When a surface carries two
descriptions in different stores, each path may legitimately pick a different one, and the
result is a badge and a colour that disagree while **both are individually defensible**.

Confirmed on B2-10 at the exact flagged indices (engine reading == fresh manual click, so the
readings are sound, not artefacts):

| # | Surface | Badge (entry path) | Role (colour path) | Container |
|---|---|---|---|---|
| 78, 121, 237 | `viel` | Adjective | `r-adverb` | `.vword-ex` |
| 580 | `viel` | Adjective | `r-adverb` | `.sentence-inline-unit` |
| 270 | `in` | **Noun** | `r-preposition` | `.vword-de` |

`viel`: absent from the Global Lexicon; chapter vocab types it **Adjective**, story-lexicon
roles it **r-adverb**. German `viel` is genuinely both ("viel Zeit" quantifier vs "viel besser"
intensifier). Two authored sources, each right, no reconciliation → **R13**.

`in` inside `.vword-de`: badge **Noun** although `KW_GLOBAL_LEXICON['in']` is Preposition and
`roleFor` returns `r-preposition`. The entry path resolved a *different lexeme* → **R9**.

### Two hypotheses tested and DISPROVED — do not repeat

1. **Stale popup corrupting badge reads.** The engine does not close the popup between clicks.
   Ran the full 726-occurrence loop twice, with and without closing before each click:
   **0 badge differences.** The engine's reads are trustworthy; this is not a detector defect.
2. **Sampling by surface reproduces the finding.** It does not — the *first* `viel` and `in` on
   the page badge correctly (Adverb, Preposition). Only the specific flagged occurrences
   diverge, which is itself evidence that the divergence is occurrence-bound, not lexeme-bound.
   Any future probe must address the finding's `index`, never the first surface match.

### Classification

- **R13 — class-baseline disagreement (~515):** not a rendering bug and not (mostly) a detector
  bug. Two authored sources describe the same surface with different word classes. The engine
  faithfully reports each. Fixing it means making ONE resolved identity feed both badge and
  colour — an architectural change, not a data edit.
- **R9 — lemma collision (~601):** the entry path resolves a different lexeme than the role
  path. Upstream of R13 and genuinely wrong (a Preposition badged Noun is a learner-visible
  defect).

**They are not the same bug, but they share the same missing invariant:** badge and colour must
derive from one resolved identity. R9 is that invariant broken by a wrong lemma; R13 is it
broken by two right-but-different lemmas.

### R1 residual — connected, and partly a detector FP

One `die` occurrence renders `rgb(22, 58, 55)` (dark teal, container styling) while its popup
headword is `rgb(180, 83, 9)` article-amber. The span's own class is `r-article`. So part of
the 572 `HEADWORD_COLOUR_MISMATCH` population is **container restyling**, not role loss — the
same exemption already granted to `.vword-tag` chips. Needs quantifying before any fix.

### Next step (not yet taken)

Prove the single-identity hypothesis by instrumenting `resolveFullEntry` to record which store
supplied the entry, then compare against `roleFor`'s tier on the same occurrence. Only then
design the shared fix. **No fix applied; golden corpus untouched at 0 / 5 / 2 / 4.**

---

## 12g. R9 / R13 INSTRUMENTED TRACES — both root causes proven (no fix applied)

Instrumented `resolveFullEntry()` and `roleFor()` on the SAME flagged occurrence indices
(never the first surface match), recording every store that could supply `.type` or `.role`.

### R9 — NOT a lemma collision. It is COMPOSITE-HEADWORD TOKENISATION.

Trace for the flagged `in` (B2-10, index 270, `.vword-de`):

| Source | Value |
|---|---|
| AUTHORED_TOKEN | `{role:'r-preposition', type:'Preposition'}` |
| STORY_LEX | `{role:'r-preposition', type:'Preposition'}` |
| GLOBAL_LEX | `{w:'in', type:'Preposition', en:'in, into'}` |
| KW_INFLECTIONS | null |
| **FINAL_BADGE** | **Noun** |

**No lexical store says "Noun".** The badge cannot have come from lemma resolution at all.

The container reveals why: the vocabulary headword is **`der/die Autor/in`**, and the
linkifier split it into four clickable fragments — `der`, `die`, `Autor`, `in`. That `in` is
the **feminine suffix ‑in**, not the preposition. The badge "Noun" is inherited from the card's
own noun entry and is arguably right; what is wrong is that a morpheme fragment was made
clickable and painted `r-preposition` by surface lookup.

**Root cause: composite headwords (`Autor/in`, `der/die`, and by extension separable-verb and
slash/pipe notations) are tokenised into fragments that are then resolved as independent
words.** This reframes the whole R9 population — `für`, `zum`, `von`, `Holz` badged Noun and
`aus`, `mit`, `an` badged Verb are the same shape: fragments of a composite entry inheriting
the parent's class while taking their own surface's colour. It is a TOKENISATION defect, not a
resolution defect, and the fix belongs in the linkifier, not in `lookupWord`.

### R13 — two stores consulted by two paths when the occurrence has no authored token

Trace for the flagged `viel` (B2-10, indices 78/121/237 `.vword-ex`, 580 and 634
`.sentence-inline-unit`):

| Source | Value |
|---|---|
| AUTHORED_TOKEN #1 | `{role:'r-akkusativ', type:'Adverb'}` |
| AUTHORED_TOKEN #2 | `{role:'plain', type:'Adjective'}` |
| STORY_LEX | `{role:'r-adverb', type:'Adverb'}` |
| GLOBAL_LEX | **null** (absent entirely) |
| **FINAL_BADGE / FINAL_ROLE** | **Adjective** / **r-adverb** |

Three of four sources say **Adverb**. The lone "Adjective" is authored token #2, which belongs
to a *different* occurrence elsewhere in the chapter. The flagged occurrences sit in
auto-linkified example text and carry **no authored token of their own**, so:

- the ENTRY path resolves by surface and lands on authored token #2 → badge **Adjective**;
- the ROLE path uses STORY_LEX → colour **r-adverb**.

**Root cause: when an occurrence has no authored token, the entry path and the role path each
pick independently from different stores.** Neither is "wrong"; there is simply no reconciled
identity. `viel` is genuinely both classes in German ("viel Zeit" quantifier vs "viel besser"
intensifier), so this must be represented, not flattened — per Phase 4/5, do not globally
declare `viel` one class.

### Conclusion for the fix design (NOT yet implemented)

- **R9** → stop fragmenting composite headwords in the linkifier. Shared, no word-specific
  conditions. Learner-visible today (a suffix taught as a preposition).
- **R13** → give the two paths ONE reconciled occurrence identity: when an occurrence has no
  authored token, both badge and colour must come from the same chosen entry. Where a surface
  legitimately bears two classes and the occurrence cannot disambiguate, that is an
  **authoring/schema gap** to log — not a heuristic to invent.

Golden corpus untouched: **0 / 5 / 2 / 4**.

---

## 12h. POST R9+R13 FIX SWEEP — current baseline

**259 chapters · 161,549 occurrences · 2,929 findings · 23 clean · 0 timeouts.**

| Code | Sweep 3 (post-R8) | Sweep 4 (post R9+R13) | Change |
|---|---|---|---|
| `ROLE_CONTRADICTS_BADGE` | 1,959 | 1,937 | −22 |
| `HEADWORD_COLOUR_MISMATCH` | 572 | 577 | +5 |
| `CASE_COLLISION_CAPITALISED` | 224 | 227 | +3 |
| `BLACK_FALLBACK` | 104 | 104 | — |
| `PARADIGM_CLASS_MISMATCH` | 49 | 48 | −1 |
| `NO_POPUP` | 29 | 26 | −3 |
| `CASE_COLLISION_LOWERCASE` | 10 | 10 | — |
| **TOTAL** | **2,947** | **2,929** | **−18** |

Occurrences fell 164,126 → 161,549 (−2,577): composite-headword fragments are no longer
linkified. Clean chapters 22 → 23.

### Honest read: both fixes are CORRECT but NARROW

On the chapter where each was diagnosed the effect is large — B2-10 went **5 → 1** finding, its
`der/die Autor/in` card yields **zero** fragment links (was 4), and standalone `in` is
preserved. Curriculum-wide the effect is small, so the diagnosis generalised far less than the
symptom counts implied.

**The earlier R9 ≈601 / R13 ≈515 estimates were wrong.** They were extrapolated from
badge→role pair frequencies, assuming every pair of a given shape shared the traced cause. The
instrumented traces proved the cause for the sampled occurrences only; the remaining ~1,900
`ROLE_CONTRADICTS_BADGE` findings are a heterogeneous population that still needs per-cluster
tracing. **Do not size a root cause from symptom-pair counts again — trace first, then count.**

### What the two fixes actually established (keep)

- **Composite-headword tokenisation** (`isCompositeFragment`, DOM-aware): morpheme fragments of
  `der/die Autor/in` are no longer independent clickable words, so a feminine suffix is no
  longer taught as the preposition `in`. Generic over slash/pipe forms; no word list.
- **Occurrence identity gate** (`classConflict` in `buildWordIndex`): where a chapter's own
  authored tokens disagree about a surface's word class, no single occurrence may speak for the
  others through the cross-chapter index. Tokens remain authoritative when clicked in their own
  sentence.

Both are correct invariants regardless of how many findings they clear.

### Remaining top clusters (recount — all previous estimates discarded)

| Cluster | Findings | Chapters | Status |
|---|---|---|---|
| `verb → r-preposition` (`aus`, `mit`, `an`) | 151 | 31 | separable-prefix family, untraced |
| `adjective → r-adverb` (`herzlich`, `schade`) | 149 | 33 | untraced |
| `noun → r-verb` (`Antworten`, `Kosten`) | 138 | 25 | nominalised-verb family |
| `adjective → r-verb` (`enthalten`, `gestresst`) | 119 | 15 | participle-as-adjective |
| `adverb → r-adjective` (`langsam`, `gut`) | 109 | 43 | untraced |
| `conjunction → r-question` (`wie`, `ob`) | 105 | **3** | chapter-local, likely authored |
| `adjective → r-connector` (`sondern`) | 101 | 8 | likely authored |

By level: A1 262 · A2 288 · B1 334 · B2 592 · C1 759 · C2 694. C1/C2 remain the priority.

**Golden corpus after both fixes: 0 / 5 / 2 / 4 — unchanged, `Achte` still detectable.**

---

## 12i. CLUSTER TRACES — investigation only, no code changed

Tool: `chapter/qa-tracer.html` (new, read-only). Runs `KWQA` across 16 chapters spanning A1→C2,
filters the three target patterns, then captures every store for each EXACT flagged index.
16 sampled occurrences, 0 errors.

### DOMINANT CAUSE (C-A) — occurrence-token identity leaks through `buildWordIndex`

**12 of 16 samples, across 5 chapters and 3 CEFR levels. Same mechanism, two clusters.**

A chapter authors a surface ONCE with occurrence-specific metadata. `buildWordIndex()` indexes
that token cross-chapter by surface, so every OTHER occurrence of the surface — auto-linked,
with no token of its own — takes that token's `.type` for its badge, while `roleFor` correctly
takes the canonical class for its colour.

| Surface | Chapter | Authored token | Canonical | Result |
|---|---|---|---|---|
| `an` ×3 | b1-7, c1-12 | `r-verb` / `Separable prefix · Satzende` | GLEX Preposition | badge **Verb** on "Erinnerungen **an** früher" |
| `mit` ×3 | b1-2 | `r-verb` / `Separable prefix · Satzende` | SLEX+GLEX Preposition | badge **Verb (trennbar)** on "**mit** dem Boot" |
| `früh` ×2 | b1-7 | `r-adjective` / `Adjective` | SLEX `Adverb · time` | badge **Adjective** on adverbial "**früh** auf" |
| `mehr`, `viele` ×3 | b2-09, b2-04 | `r-akkusativ` / `Determiner` | SLEX/GLEX Adverb | badge **Adjective** |

**First divergence point:** `buildWordIndex()` — an occurrence-scoped token becomes a
chapter-scoped lexical identity. The badge then describes occurrence A while the colour
describes occurrence B.

**Why the existing `classConflict` gate misses it:** that gate fires only when TWO authored
tokens disagree with each other. Here there is usually only ONE token, and the disagreement is
token-vs-canonical-lexicon. The gate must also compare the token's class against the Global
Lexicon / story-lexicon class for the same surface. It is also wired into only the reading and
story-dialogue indexing calls — `viel` in b2-10 still leaks, so listening/speaking/vocab
indexing paths are ungated.

Classification: **ENGINE**. Extends the accepted R13 invariant; no new concept required.

### CAUSE C-B — internally contradictory authored token (1 of 16)

`fröhlich` (b1-2 reading) is authored `{role:'r-adverb', type:'Adjective'}` — the token
contradicts itself, exactly like the resolved R8 `noch`/`dann` entries.
Classification: **AUTHORED DATA**. Fix by correcting the entry, not the engine.

### CAUSE C-C — inflection-index collision (1 of 16)

`Vergleiche` (a2-8 vocabulary, "der · Pl. Vergleiche"): badge **Noun** (correct), but
`KW_INFLECTIONS['vergleiche'] → 'vergleichen'`, so `roleFor` resolves the VERB lemma and paints
`r-verb`. A noun plural that is also a finite verb form.
Classification: **ENGINE**, distinct from C-A — divergence is in the inflection index, not the
token index. Only 1 of 16 sampled, so the 138-occurrence cluster is concentrated in chapters
not sampled; **do not size this from the cluster count**.

### CAUSE C-D — NEW: German linkified inside English prose (incidental find)

c1-12 flagged `an` inside "Objective: obligation, permission, necessity…" and "TASK 1 —
Rewrite (150 words)…". Both are ENGLISH instructional prose in `sec-grammar` / `sec-writing`.
The language gate covers gated prose containers but evidently not these. Classification:
**ENGINE**, related to the accepted `AUTHORED_GERMAN()` gate. Not previously logged.

### Answers to the ranking questions

1. **Homogeneous cluster:** `verb → r-preposition` — 8/8 samples are C-A (separable-prefix
   tokens leaking onto prepositional occurrences).
2. **Heterogeneous:** `adjective → r-adverb` — 6/7 C-A, 1/7 C-B. `noun → r-verb` — too few
   samples to call; the one traced is C-C.
3. **Root causes:** C-A token-identity leak · C-B contradictory authored token · C-C inflection
   collision · C-D language gate.
4. **Divergence points:** C-A `buildWordIndex()`; C-B the data file; C-C `KW_INFLECTIONS`
   consulted by `roleFor` without class agreement; C-D the linkifier's container gate.
5. **Support:** C-A 12 · C-B 1 · C-C 1 · C-D 2.
6. **Kind:** C-A engine · C-B authored data · C-C engine · C-D engine.
7. **Highest-impact safe fix: C-A** — extend the existing `classConflict` gate to compare
   authored token class against the canonical lexicon, and wire it into ALL indexing calls, not
   just reading + story. It reuses an already-accepted invariant, needs no new colour, role or
   schema, and cannot fabricate data — it only withholds an identity one occurrence has no
   right to lend another.

**No production file was modified this turn** (only the read-only tracer was added), so the
golden corpus stands unchanged at **0 / 5 / 2 / 4** by construction.

---

## 12j. C-A REMEDIATION — implemented, scoped, verified

**File changed:** `chapter/chapter-app.js` — one function, `classConflict` inside
`buildWordIndex()`. No other layer touched. C-B, C-C, C-D deliberately untouched.

### Call-site audit (complete, not assumed)

Three sources feed `WORDIDX`:

| Source | Status |
|---|---|
| `C.reading.tokens` | occurrence-scoped — **gated** |
| `C.story.dialogue[].tokens` | occurrence-scoped — **gated** |
| `C.vocab` entries | genuinely LEXICAL (a vocab card IS a lexical identity) — correctly ungated; its multiword split is already protected by `FUNC_WORDS`, which covers `an`, `mit`, `zu`, `für`, `in`… |

So the leak was never a missing call site — it was the gate being too narrow. Confirmed by
reading every `add(...)` call rather than trusting the earlier two-site claim.

### The rule, extended

`classConflict` previously fired only when a chapter's own tokens disagreed with EACH OTHER.
It now also fires when a single authored token disagrees with the CANONICAL lexicon for the
same surface:

```
token `an`   : "Separable prefix · Satzende" → class "separable prefix"
canonical    : Global Lexicon "Preposition"  → class "preposition"   → conflict → not indexed
```

Occurrence-scoped data still informs ITS OWN occurrence — `resolveFullEntry` always prefers the
clicked token `t` over any index lookup. Only the cross-occurrence promotion is withheld.

### Verified on the traced occurrences

- **`früh` (b1-7)** — was badge Adjective + `r-adverb`; now **Adjective + `r-adjective`**,
  headword colour matching. Clean C-A proof (no inflection entry to confound it).
- **`an` / `mit`** — UNCHANGED, and correctly so: the trace shows
  `KW_INFLECTIONS['an'] → 'denken an'`, so their badge arrives via the **inflection path**
  (C-C), not the token index. My cluster attribution was partly wrong — these occurrences carry
  BOTH an authored separable-prefix token AND an inflection mapping, and C-C is the operative
  one. Out of scope this pass by instruction.

### Golden corpus — A1-2 moved 5 → 2, diagnosed before proceeding

Stopped and investigated per the gate. The three `langsam [Adverb → r-adjective]` findings
disappeared because they were **genuinely fixed**, not hidden:

| Occurrence | Badge | Role | Agree? |
|---|---|---|---|
| "langsam" (vocab headword) | Adjective | `r-adjective` | ✓ |
| "Sprich langsam und deutlich." | Adjective | `r-adjective` | ✓ |
| **"Sprich langsam und laut."** | **Adverb** | **`r-adverb`** | ✓ |
| "Starters: …langsam…" | Adjective | `r-adjective` | ✓ |

Badge and colour now describe the same identity at every occurrence, headword colours match,
and **the fourth occurrence keeps its distinct Adverb reading** — proving the fix did not
flatten `langsam` to a single global class. That is precisely the required invariant: the same
surface may legitimately differ by occurrence.

No detector rule was loosened. `Achte` remains detectable.

**New golden baseline: A1-1 = 0 · A1-2 = 2 · A1-9 = 2 · A2-8 = 4.**

### Spot results on traced chapters

b1-2 9 → 1 (only `fröhlich`, the known C-B authored-data defect) · b2-04 → 3 · b2-09 → 9 ·
b1-7 → 4 `ROLE_CONTRADICTS_BADGE`. No new finding codes appeared anywhere.

**Full 259-chapter re-sweep and re-clustering still pending** — per the standing rule, the
remaining `ROLE_CONTRADICTS_BADGE` population must be re-clustered from exact findings, never
extrapolated from the previous 1,937.

---

## 12k. POST-C-A FULL SWEEP — current baseline + reclustered taxonomy

### A. Sweep

**259 chapters · 161,408 occurrences · 2,675 findings · 25 clean · 0 timeouts.**

### B. Comparison

| Code | Sweep 4 | Sweep 5 (post C-A) | Change |
|---|---|---|---|
| `ROLE_CONTRADICTS_BADGE` | 1,937 | **1,671** | −266 |
| `HEADWORD_COLOUR_MISMATCH` | 577 | 572 | −5 |
| `CASE_COLLISION_CAPITALISED` | 227 | 246 | +19 |
| `BLACK_FALLBACK` | 104 | 104 | — |
| `PARADIGM_CLASS_MISMATCH` | 48 | 52 | +4 |
| `NO_POPUP` | 26 | 20 | −6 |
| `CASE_COLLISION_LOWERCASE` | 10 | 10 | — |
| **TOTAL** | **2,929** | **2,675** | **−254** |

Clean chapters 23 → **25**. By level: A1 217 · A2 231 · B1 283 · B2 575 · C1 708 · C2 661.
A1 is now 0.7% of occurrences; C1/C2 remain ~6%.

### D. Golden corpus — gate held, one artifact diagnosed

**A1-1 = 0 · A1-2 = 2 · A1-9 = 2 · A2-8 = 4.** ✅

The sweep reported A1-9 = **6**. Per the gate I stopped and re-ran that chapter directly:
**2 findings**, both the known `und [Conjunction → r-preposition]`. The extra 4 were a
**sweep-timing artifact**, not a regression.

**QA reliability caveat (new, important):** the runner injects the engine on a fixed 2,600 ms
delay. Chapters whose async lexicon settles more slowly are occasionally measured mid-render,
inflating their count. **Per-chapter deltas of a few findings between sweeps are therefore not
reliable evidence** — only large movements and directly re-run chapters are. Consider an
explicit readiness signal before trusting fine-grained per-chapter comparisons.

### C. Reclustered from exact findings (previous clusters discarded)

| Cluster | Findings | Chapters | Note |
|---|---|---|---|
| `adverb → r-adjective` (`richtig`, `kurz`, `rund`) | 116 | **47** | most widespread |
| `adjective → r-verb` (`enthalten`, `gestresst`, `vorbereitet`) | 116 | 14 | participle-as-adjective |
| `noun → r-verb` (`Antworten`, `Fragen`, `Formen`, `Regeln`) | 114 | 28 | **C-C candidate** — all are noun plurals identical to verb infinitives |
| `adjective → r-connector` (`sondern`) | 106 | 9 | single surface |
| `adjective → r-adverb` (`schade`, `herzlich`) | 105 | 32 | C-B family |
| `conjunction → r-question` (`wie`, `ob`) | 105 | **3** | chapter-local |
| `preposition → r-adverb` (`um`, `trotz`, `dank`) | 98 | 16 | |
| `verb → r-preposition` (`an`, `auf`) | **93** (was 151) | 16 | **−58 from C-A**; residue is C-C |
| `noun → r-article` (`die`) | 91 | **4** | chapter-local |
| `pronoun → r-verb` (`sein`) | 34 | 8 | possessive/verb homograph |

### The three mechanisms must stay separate (per standing instruction)

1. **TOKEN-INDEX LEAK (C-A)** — fixed and frozen. Removed ~266 findings.
2. **INFLECTION-INDEX COLLISION (C-C)** — `KW_INFLECTIONS(surface) → lemma` where the surface
   is also a legitimate independent word. Confirmed for `an`→`denken an`,
   `Vergleiche`→`vergleichen`. The `noun → r-verb` cluster (114/28ch) is almost certainly this:
   `Antworten`, `Fragen`, `Formen`, `Regeln` are all noun plurals identical to verb
   infinitives. **Not yet traced occurrence-by-occurrence — do not size it from the count.**
3. **LEXICON CLASS CONFLICT (C-B)** — authored entries whose role contradicts their own type
   (`fröhlich`). Data defect.

### H. Recommended NEXT SINGLE FIX

**C-C, the inflection-index collision** — but trace first. It is the only remaining mechanism
proven to produce a **wrong learner-facing word class** (a noun taught as a verb), which
outranks the larger colour-only clusters on severity even though `adverb → r-adjective`
touches more chapters. Next step is a tracer run over `noun → r-verb` exact indices to confirm
the inflection path is the first divergence for that population.

---

## 12l. C-C TRACE — investigation only, nothing modified

Re-targeted `qa-tracer.html` at `noun → r-verb` across 15 chapters spanning A1→C2.

### 1–2. Trace and first divergence

**Only ONE flagged occurrence was captured** — the sampled chapters largely do not contain this
cluster (my chapter selection was drawn from the earlier cluster list, not from the chapters
that actually carry `noun → r-verb`). Recorded as a sampling failure, not a result.

`Vergleiche` — a2-8, `sec-vocabulary`, index 121, vocab-card headword "der · Pl. Vergleiche":

| Stage | Value |
|---|---|
| AUTHORED_TOKEN | none |
| CHAPTER_VOCAB | none |
| STORY_LEX | null |
| GLOBAL_LEX (surface) | **null** |
| `KW_INFLECTIONS['vergleiche']` | **`vergleichen`** |
| lemma's GLEX type | **Verb** |
| `roleFor()` | **`r-verb`** |
| popup badge | **Noun** — correct |
| popup sections | "Why this form? \| Example" (no Number paradigm) |

**First divergence:** `KW_INFLECTIONS[surface] → lemma` is consulted by the COLOUR path
(`roleFor → storyTokenFor → lookupWord`) and the POS tier then takes the LEMMA's class, without
checking that it agrees with the occurrence's own resolved class. The badge path resolves the
noun correctly; the colour path resolves the verb lemma. **C-C confirmed for this occurrence.**

### Capitalisation interaction (new, worth recording)

`Vergleiche` is capitalised, so `isCapitalisedNounHomograph` should be the natural guard — but
it only inspects a DIRECT surface match (`WORDIDX` / GLEX / SLEX). Here the surface has no
direct entry at all; the verb identity arrives via the inflection index, which that guard never
consults. **The case-aware protection and the inflection path do not compose.** That is the
precise structural gap, and it explains why capitalisation did not already save this word.

### 3. Classification

| Occurrence | Class |
|---|---|
| `Vergleiche` (a2-8 #121) | **C-C** — inflection-index collision, colour path only |

### 4. Cluster conclusion — NOT established

**`noun → r-verb` (114 findings / 28 chapters) is NOT shown to be predominantly C-C.** One
traced occurrence cannot support that claim, and the standing rule forbids extrapolating from
the count. Before any fix, re-run the tracer against chapters actually containing the cluster
(identify them from the sweep report's per-chapter findings rather than guessing).

### 5. Severity — P1, not P0

By the stated rule, this is NOT a wrong-meaning defect: the badge says **Noun** and the popup
teaches the noun. Only the COLOUR is wrong (verb-red on a noun occurrence). Genuinely
learner-visible — the colour system is the grammar-teaching channel — but it does not teach a
false lexical identity. C-C therefore sits **P1**, below any confirmed wrong-class defect.

### 6. Runner readiness signal

The fixed 2,600 ms delay should eventually be replaced by the signal the app already has:
`chapter-app.js` injects `global-lexicon.js` as `<script id="kw-global-lexicon">` and re-sweeps
the page inside its `onload`. So **`window.KW_GLOBAL_LEXICON` becoming defined is the existing,
authoritative readiness marker** — poll for it (plus one animation frame for the re-sweep to
commit) instead of guessing a delay. No new readiness architecture required. Not changed this
pass.

### 7. Recommended next fix

**Complete the C-C evidence first** — re-target the tracer at chapters that actually contain
`noun → r-verb`, confirm the mechanism across CEFR levels, and only then fix: make the
inflection path refuse a lemma whose class disagrees with the occurrence's resolved class,
reusing the existing `classesCompatible` / `entryAllowsParadigm` guards rather than adding a
new rule.

Golden corpus unchanged (**0 / 2 / 2 / 4**) — no production file was modified this pass.

---

## 12m. C-C TRACE (round 2) — cluster is HETEROGENEOUS; a NEW mechanism dominates

Re-targeted the tracer using grep to find chapters that actually author the cluster surfaces
(`Fragen`, `Regeln`, `Antworten` as `Noun · plural`) rather than guessing. 3 exact occurrences
captured across 2 chapters.

### The three traces

| # | Surface | Chapter | Authored token | GLEX[surface] | KW_INFLECTIONS | roleFor | Badge |
|---|---|---|---|---|---|---|---|
| 1 | `Unternehmen` | b2-66 reading | `plain` / **Noun · plural** | **Verb** | null | `r-verb` | Noun |
| 2 | `Regeln` | b2-66 reading | `plain` / **Noun · plural** | **Verb** | `Regel` → **Noun** | `r-verb` | Noun |
| 3 | `Vergleiche` | a2-8 vocab | none | null | `vergleichen` → Verb | `r-verb` | Noun |

### Only #3 is C-C. #1 and #2 are a DIFFERENT, previously unlogged mechanism.

For `Regeln` the inflection index is **innocent** — it maps to the noun `Regel`. The verb class
arrives from `KW_GLOBAL_LEXICON['regeln']`, because `normWord` lowercases the capitalised noun
`Regeln` onto the verb `regeln` ("to regulate"). Same for `Unternehmen` → `unternehmen` ("to
undertake"), which has no inflection entry at all.

**C-E — CASE-COLLAPSE AT THE POS TIER.** The R2 Global-Lexicon POS tier looks the surface up by
lowercased key, so a capitalised German noun silently resolves to its lowercase verb
homograph. Same family as `Laut` and `erste`, but reached through the POS tier rather than
through `lookupWord`.

### Why the existing case-aware guard does not protect them — the exact gap

`isCapitalisedNounHomograph(surface, sentenceInitial)` returns false unless `sentenceInitial
=== false`. The authored-token rendering path calls `roleFor(tk.w)` with **no third argument**,
so `sentenceInitial` is `undefined` and the guard is disabled for every authored token.
Position is only threaded through the four TEXT linkifier paths.

Compounding it: these tokens author `role: 'plain'`, and `roleFor`'s first branch deliberately
lets `'plain'` fall through to the resolution chain — so a token that explicitly declares
`type: 'Noun · plural'` still has its colour derived from a lexicon lookup that ignores that
declaration. **Authored data is not outranking inference here, contrary to the frozen rule.**

### Classification of the 3 traced occurrences

| Occurrence | Class |
|---|---|
| `Unternehmen` (b2-66 #253) | **C-E** case-collapse at POS tier |
| `Regeln` (b2-66 #255) | **C-E** case-collapse at POS tier |
| `Vergleiche` (a2-8 #121) | **C-C** inflection-index collision |

### Cluster conclusion

**`noun → r-verb` is NOT predominantly C-C.** On the evidence, C-E is the more common
mechanism (2 of 3). The 114-occurrence count is still NOT apportioned between them — 3 traces
cannot carry that, and the standing rule forbids extrapolation. What IS established: the
cluster contains at least two distinct mechanisms and must not be fixed as one.

### Severity — P1

In all three the badge correctly reads **Noun** and the popup teaches the noun; only the colour
is verb-red. Learner-visible (colour is the grammar channel) but not a false lexical identity.

### Recommended next fix (ONE)

**Thread sentence position into the authored-token rendering path, and let an authored `type`
outrank lexicon inference when the token declares a word class.** This closes C-E at its
source, restores the frozen "authored data wins" rule, and needs no new colour, role or schema.
C-C (`Vergleiche`) is then a separate, smaller follow-up in the inflection path.

Golden corpus unchanged (**0 / 2 / 2 / 4**) — no production file modified this pass.

---

## 12n. C-E REMEDIATION — implemented and verified

**A. File changed:** `chapter/chapter-app.js` only.

**B. Functions:** added `tokenSentenceInitial()`, `authoredClassRole()`, `tokenRole()`; rewired
**six** authored-token renderers to use `tokenRole()`.

**Call-site audit — the warning was justified.** `roleFor(` has **six** authored-token call
sites, not the four previously recorded: story dialogue, vocabulary `exTokens`, sentence
groups (+ its x-ray token map), listening transcript, mistake rows, and the exercise builder.
All six now route through `tokenRole()`; the four TEXT linkifier paths already had position.

**C. Architectural rule implemented (two parts):**

1. *Position for authored tokens.* Token arrays have no `text`/`index`, so position comes from
   ARRAY POSITION: index 0 opens the sentence, and a token whose predecessor ends in sentence
   punctuation opens a new one. Reuses the existing `SENTENCE_END` and the existing
   `isCapitalisedNounHomograph` predicate — no new capitalisation heuristic. Previously
   `sentenceInitial` arrived `undefined` on every authored path, which **disabled the
   case-aware guard entirely** there.
2. *Authored class outranks inference.* `role: 'plain'` means "no additional SEMANTIC role",
   NOT "ignore the authored word class". A token declaring `type: 'Noun · plural'` now takes
   its class colour from that declaration before any lexicon lookup runs.

**D/F. C-E regression — FIXED.** In b2-66: `Regeln` and `Unternehmen` both moved from
verb-red to **`r-object`, badge Noun, headword colour matching**. b2-10 went **1 → 0**.

**E. Golden corpus:** A1-1 = 0 · A1-2 = 2 · A1-9 = 2 · A2-8 = 4 — unchanged. ✅

**G. `Vergleiche` remains C-C** — still flagged in a2-8, untouched, as required. Its verb class
arrives via `KW_INFLECTIONS['vergleiche'] → vergleichen`, a path this fix deliberately does not
touch.

**H. Side effects: none introduced.** b2-66's remaining 13 findings were investigated rather
than assumed: they are the **R10 non-canonical-role** family. The chapter authors `r-opinion`
(`vertreten`, `Ansicht`, `die`), which is outside `CANONICAL_ROLES` — so it renders in the teal
`--accent` and, on `vertreten`, an **ink-black popup headword** (`rgb(14,14,16)`). Same
mechanism as `r-historisches-praesens` in c2-01. Pre-existing, unrelated to C-E, and now
confirmed to be a real learner-facing colour defect rather than a detector artifact.

**I. Remaining C-C population:** NOT measured. One confirmed occurrence (`Vergleiche`). No
estimate offered — extrapolation forbidden.

**J. Recommended next step:** re-sweep all 259 chapters to measure C-E's true reduction and
recluster, before choosing between C-C and R10.

---

## 12o. POST-C-E FULL SWEEP — current baseline

### A. Sweep

**259 chapters · 161,537 occurrences · 2,567 findings · 37 clean · 0 timeouts.**

### B. Before/after

| Code | Post-C-A | Post-C-E | Change |
|---|---|---|---|
| `ROLE_CONTRADICTS_BADGE` | 1,671 | **1,568** | −103 |
| `HEADWORD_COLOUR_MISMATCH` | 572 | 574 | +2 |
| `CASE_COLLISION_CAPITALISED` | 246 | 246 | — |
| `BLACK_FALLBACK` | 104 | 104 | — |
| `PARADIGM_CLASS_MISMATCH` | 52 | 46 | −6 |
| `NO_POPUP` | 20 | 20 | — |
| `CASE_COLLISION_LOWERCASE` | 10 | 9 | −1 |
| **TOTAL** | **2,675** | **2,567** | **−108** |

**Clean chapters 25 → 37** (+12), the largest jump so far — C-E affected many chapters lightly
rather than a few heavily.

**C-E attribution is NOT claimed for the whole −103.** Directly verified: `Regeln` and
`Unternehmen` (b2-66) moved verb-red → `r-object`/Noun; b2-10 went 1 → 0. The rest of the
reduction is consistent with C-E but not individually traced.

By level: A1 210 · A2 240 · B1 291 · B2 523 · C1 632 · C2 671. A1 is 0.7% of occurrences;
C1/C2 are ~5.5%, and now hold **51%** of all findings on 14% of occurrences.

### C. Golden corpus — **0 / 2 / 2 / 4** ✅ (no direct rerun needed; sweep matched)

No timing artifact this round. Note for future runs: the sweep was started twice — the first
attempt silently did nothing because `CHAPTERS` had not loaded when `run()` was called. Always
poll for the manifest before starting.

### E. R10 — traced, mechanism CORRECTED

My earlier claim that non-canonical roles "have no CSS rule" was **wrong**. Measured on b2-66:

| Fact | Value |
|---|---|
| Roles authored in chapter | 14 |
| Roles WITH a CSS rule | **13** (only `plain` has none, correctly) |
| `.r-opinion` computed colour | `rgb(31,78,74)` = **`--accent` teal** |
| Span colour for `vertreten` | `rgb(31,78,74)` |
| Popup headword | `color:var(--ink-primary)` → **black** |

So the real mechanism is a **split**, not a missing rule:

- the SPAN gets teal, because `chapter.css` does define `.r-opinion` — but teal is `--accent`,
  the conversion/action colour, being used as a grammar colour (violates the OS rule that
  colour carries grammatical meaning only);
- the POPUP neutralises it to ink-black, because `r-opinion` is absent from `CANONICAL_ROLES`
  and `renderWordPop` deliberately refuses unmapped labels.

**Classification:** `r-opinion` is a **phrase-level teaching label** ("expressing an opinion"),
not a Spine-5 grammatical role — it is applied across `vertreten`, `Ansicht`, `die`, i.e. whole
phrases, exactly like `r-historisches-praesens` in c2-01. 6 occurrences in b2-66 alone.

**Architectural options (no implementation):**
1. treat phrase-level labels as a distinct annotation channel, not a word colour;
2. map each to its true canonical grammatical role and carry the teaching label in the badge;
3. add them to `CANONICAL_ROLES` — **rejected**: it would legitimise `--accent` as a grammar
   colour and grow the frozen 51-colour system.

Option 2 looks closest to the frozen architecture (badge = word class / teaching label,
colour = grammatical role) but needs a decision.

### D. Reclustered top patterns (untraced counts — NOT root causes)

`noun → r-verb` 138/22ch · `adjective → r-verb` 117/14ch · `conjunction → r-question` 105/**3ch**
· `verb → r-preposition` 101/18ch · `adjective → r-connector` (`sondern`) 101/**8ch** ·
`noun → r-article` (`die`) 91/**4ch** · `adjective → r-adverb` 87/15ch · `adverb → r-adjective`
73/25ch · `preposition → r-adverb` 65/12ch · `verb → r-adverb` 40/14ch.

Several are heavily chapter-local (3–8 chapters for ~100 findings each), which is the
signature of authored-data patterns rather than engine defects — to be proven, not assumed.

### F. C-C — directly proven cases only

**One:** `Vergleiche` (a2-8 #121), still flagged, untouched. No population estimate.

### G. Recommended ONE next fix

**R10 phrase-level roles** — pending your architectural choice. It is the only remaining
mechanism that produces BOTH a wrong span colour (conversion teal used as grammar colour) and
a black popup headword, and it likely explains part of the stubborn 104 `BLACK_FALLBACK` /
574 `HEADWORD_COLOUR_MISMATCH` populations that have not moved across four sweeps.

---

## 12p. R10 REMEDIATION — phrase-level annotations separated from grammatical roles

### A. Exact occurrences traced

**b2-66 — `r-opinion` (12 authored tokens), plus `r-agree` / `r-disagree` (same family):**

| Surface | Authored `type` | Phrase |
|---|---|---|
| `Ich` `bin` `der` `Meinung` | **null** | "Ich bin der Meinung, dass …" |
| `vertreten` | `Verb (Präsens)` | "vertreten die Ansicht" |
| `die` | `Article · Akk.` | ″ |
| `Ansicht` | `Noun · fem. (Satzende)` | ″ |
| `Aus` | `Präposition · Dat.` | "Aus meiner Sicht" |
| `meiner` | `Possessivartikel` | ″ |
| `Sicht` | `Noun · fem.` | ″ |
| `Meines` `Erachtens` | `Possessivartikel · Gen.` / `Noun · neut.` | "Meines Erachtens" |

**c2-01 — `r-historisches-praesens` (8 tokens):** `Von`/`diesem`/`Moment`/`an`/`Tausende`/
`strömen` carry real types; `1939` and `beginnt` have **null**.

### B–D. What they are, and whether they share an architecture

`r-opinion` marks a **fixed expression for stating an opinion**, spanning determiner + noun +
verb + preposition. `r-historisches-praesens` marks a **narrative tense choice** across a
clause. Neither is a Spine-5 role: both label what is being TAUGHT, not what one word DOES.
**Yes — one shared architecture**, together with `r-agree`/`r-disagree`.

The words' real grammatical classes were already authored in `type` all along; nothing had to
be invented.

### E. Files / functions changed — `chapter/chapter-app.js` only

- `isPhraseLevelRole(role)` — non-canonical, non-`plain` role = annotation.
- `tokenRole()` — skips a phrase-level label and uses the authored class.
- `roleFor()` — same rule for the `explicit` argument.
- `renderWordPop()` — headword colour falls back to the authored class instead of ink-black.
- `POS_ROLE_DE` — **German** class labels (`Präposition`, `Possessivartikel`, `Konjunktion`,
  `Nomen`, `Pronomen`, `Determiner`…). Chapter data labels classes in BOTH languages, and
  `POS_ROLE` was English-only, so German-labelled tokens produced no class and fell back to
  the phrase label. This is why two spans stayed teal after the first attempt.

### F. Separation now in force

Colour = the word's own authored grammatical class · badge = its `type` · annotation = the
authored `role`, left untouched in the data. No new colour, no new canonical role, `--accent`
no longer used as a grammar colour, no CSS change.

### G. Targeted regression

**b2-66: 13 → 1** · **c2-01: 18 → 2** · teal grammar spans **0** · black spans **0**.
`vertreten` → `r-verb`, `Ansicht` → `r-dativ`, `Sicht` → `r-object`, `Aus` → `r-preposition`,
`meiner` → `r-subject`, `beginnt` → `r-verb`, `Von` → `r-preposition` — each with a matching
popup headword colour. `Regeln`/`Unternehmen` (C-E) unchanged; `Vergleiche` still C-C.

### H. Golden corpus — **0 / 2 / 2 / 4** ✅

### I. Schema gap (reported, not invented)

Two real gaps:
1. **No field for a phrase-level teaching annotation.** It is currently overloaded onto `role`.
   The label is now correctly excluded from colour, but there is **no UI surface displaying
   it** — so "this is an opinion expression" is no longer visible to the learner. Needs a
   dedicated field (e.g. `annotation`) and a popup slot. **Do not repurpose `role`.**
2. **Tokens with `type: null`** (`Ich`, `bin`, `der`, `Meinung`, `1939`, `beginnt`) have no
   authored class; they now fall through to lexicon inference. Authoring gap, not engine.

### J. Recommended next step

Decide the annotation schema (gap 1) — or, if that is deferred, run the full 259-chapter sweep
to measure R10's true reduction before selecting the next root cause.

---

## 12q. POST-R10 FULL SWEEP — largest single reduction to date

### A. Runner readiness — fixed delay replaced

The fixed 2,600 ms delay is gone. The runner now polls for `KW_GLOBAL_LEXICON` in the iframe
— the app's own authoritative "data is in" marker, since `chapter-app.js` injects
`global-lexicon.js` and re-sweeps inside its `onload` — then waits 400 ms and measures. 15 s
cap, then measures anyway. **Runner-side only; no production behaviour changed.**

First attempt used `requestAnimationFrame` inside the iframe and timed A1-1 out: rAF does not
reliably fire in an **offscreen** iframe (`left:-9999px`). Replaced with timers. Result: **0
errors across 259 chapters** (previously 3 timeouts, plus the proven false A1-9 = 6).

### B/C. Totals and deltas

**259 chapters · 161,449 occurrences · 1,775 findings · 57 clean · 0 errors.**

| Code | Post-C-E | Post-R10 | Change |
|---|---|---|---|
| `ROLE_CONTRADICTS_BADGE` | 1,568 | **1,275** | −293 |
| `HEADWORD_COLOUR_MISMATCH` | 574 | **130** | −**444** (−77%) |
| `BLACK_FALLBACK` | 104 | **45** | −**59** (−57%) |
| `CASE_COLLISION_CAPITALISED` | 246 | 241 | −5 |
| `PARADIGM_CLASS_MISMATCH` | 46 | 54 | +8 |
| `NO_POPUP` | 20 | 20 | — |
| `CASE_COLLISION_LOWERCASE` | 9 | 10 | +1 |
| **TOTAL** | **2,567** | **1,775** | **−792 (−31%)** |

**Clean chapters 37 → 57.** Total trajectory: 13,757 → 3,031 → 2,947 → 2,929 → 2,675 → 2,567
→ **1,775** (−87% from baseline).

### D. Golden corpus — **0 / 2 / 2 / 4** ✅ (sweep and direct run agree; no artifact)

### E. R10 attribution — directly verified only

Directly traced: b2-66 **13 → 1**, c2-01 **18 → 2**, zero teal grammar spans, zero black spans
in both. That is 28 findings verified at the occurrence level.

The curriculum-wide −444 `HEADWORD_COLOUR_MISMATCH` and −59 `BLACK_FALLBACK` are **consistent
with** R10 (the popup-black mechanism was exactly what R10 fixed) but are **not** claimed as
fully attributed — only the 28 above are proven. Notably, the `POS_ROLE_DE` addition also
benefits every German-labelled token in the curriculum, independent of phrase-level roles;
that is likely a large share of the remainder and has not been separated.

C1 findings fell 632 → 257 (−59%) — the level that used the most non-canonical roles.

### H. Reclustered top patterns (counts — NOT root causes)

`adjective → r-verb` 114/13ch (`enthalten`, `vorbereitet`, `gestresst` — participles used
adjectivally) · `noun → r-verb` 109/23ch (C-C/C-E residue) · `conjunction → r-question`
105/**3ch** · `adjective → r-connector` (`sondern`) 104/**9ch** · `verb → r-preposition` 102/18ch
· `adverb → r-adjective` 95/30ch · `noun → r-article` (`die`) 91/**4ch** · `adjective → r-adverb`
88/16ch · `preposition → r-adverb` 74/13ch.

### I. Top 3 candidates for next investigation

1. **`adjective → r-verb`, 114 / 13 chapters** — tightly concentrated, one plausible mechanism
   (Partizip II used attributively: `enthalten`, `vorbereitet`, `gestresst`, `klimatisiert`).
2. **`conjunction → r-question` + `noun → r-article` + `sondern`** — 300 findings across only
   3–9 chapters each. That concentration is the signature of authored-data patterns (C-B), not
   engine defects; cheap to confirm or refute.
3. **`noun → r-verb`, 109 / 23 chapters** — known to contain BOTH C-C and C-E residue; needs
   per-occurrence tracing to apportion.

### J. Recommended single next step

Trace candidate 2 first (highest findings-per-chapter, likely authored data — cheapest to
resolve or dismiss), then candidate 1. No fix implemented this pass.

---

## 12r. CANDIDATE-2 TRACE — three high-concentration clusters (investigation only)

### A. Golden gate — **0 / 2 / 2 / 4** ✅ (verified with the new readiness signal, sweep + direct run agree)

### B/C. `sondern` (104 findings / 9 chapters) — **PROVEN: Global-Lexicon data defect**

```
KW_GLOBAL_LEXICON['sondern'] = { w:'sondern', type:'Adjective', en:'but, but rather' }
```

**`sondern` is a coordinating conjunction, never an adjective.** The badge reads "Adjective"
straight from this entry while the colour comes from the chapters' authored `r-connector` —
hence the `adjective → r-connector` pattern. One wrong field in one dictionary entry explains
the whole cluster shape.

**Second, independent finding — authored roles for `sondern` are inconsistent across the
curriculum.** Verified by grep across all chapter data; the same word is authored **five**
different ways:

| Authored role | Chapters (examples) |
|---|---|
| `r-connector` | b1-25, b2-23, b2-01, b1-24, b1-27, b1-35, b2-11 |
| `r-conjunction` | b2-22, b2-23, b1-24, a2-20, a2-23, c2-08, b2-11 |
| `plain` | b2-06, b2-13, b2-69 |
| `r-nichtnur` | b2-23 (parserSentence) |
| `r-sonder` | b2-11 (parserSentence) |

with `type` variously `Konjunktion`, `Konnektor`, `Conjunction`,
`Konjunktion · sondern auch`, `Konnektor · nicht nur…sondern auch (2/2)`. b2-23 alone uses
three different roles for it. Note `r-nichtnur` and `r-sonder` are further **phrase-level
labels** (R10 family) — now correctly excluded from colour by the R10 fix.

**Classification: B — authored-data defect, in two layers** (one wrong dictionary `type`, plus
curriculum-wide role inconsistency). NOT an engine defect: every layer faithfully reports what
it was given.

### D. `conjunction → r-question` (105 / 3 chapters) — **NOT resolved; hypothesis refuted**

Grep across all chapter data shows every authored `wie` token is **internally consistent**:
`{ role:'r-question', type:'Question word' }` — in ~30 chapters. `badgeClass('Question word')`
returns `question`, and `roleAllowed('question','question')` is true, so **these cannot be the
flagged occurrences**. `KW_GLOBAL_LEXICON['wie'].type` is also `Question word`.

`ob` is the likelier carrier (`GLEX['ob'].type = 'Conjunction'`, `roleFor('ob') = r-conjunction`
by default), but the specific occurrences that produce `role = r-question` were **not located**
— the sweep report had been cleared before the chapter list could be extracted, and the
chapter-data grep hit the 20k output cap. **Unresolved. Do not classify.**

### E. `noun → r-article` / `die` (91 / 4 chapters) — **NOT resolved**

`GLEX['die'].type = 'Article (plural)'`, `KW_STORY_LEX['die'] = { role:'r-article',
type:'Article · definite' }`, `roleFor('die') = r-article` — all consistent and all correct.
So the **Noun** badge must come from an occurrence-level source in those 4 chapters (candidates:
a multiword vocab headword such as "die Frage", or a composite `der/die` card). Grep for an
authored `die` token typed as a Noun returned nothing. **Mechanism unproven — do not classify.**

### F. What is and is not established

| Cluster | Status |
|---|---|
| `sondern` | **Proven** — authored-data defect (GLEX `type` + role inconsistency) |
| `conjunction → r-question` | Unresolved; the obvious `wie` hypothesis is **refuted** |
| `noun → r-article` (`die`) | Unresolved; all three lexicon layers are correct |

No production file was modified. No temporary instrumentation was left in place.

**Process note:** the runner's `report` object is wiped whenever the page reloads, so exact
finding locations must be **exported or read before navigating away**. Two of three clusters
stalled on this. Next trace should use `#download` (JSON export) immediately after a sweep.

### G. Recommended ONE next action

Re-run the sweep and **export the JSON report first**, then locate the exact chapters/indices
for the two unresolved clusters and trace them there. Fixing `GLEX['sondern'].type` is a
one-field data correction that can follow once its regression scope is measured — but it should
not be done blind, since `sondern`'s authored roles disagree across 9 chapters and the badge
change will interact with them.

---

## 12s. CANDIDATE-2 — both clusters traced at exact indices (investigation only)

### 1. Golden gate — **0 / 2 / 2 / 4** ✅

### 2. Export — `chapter/qa-cluster-locations.json`

Sweep: **259 chapters · 1,688 findings · 57 clean · 0 errors**. Exact chapter + section +
occurrence index + surface + badge for both clusters were extracted **before** navigating away
and written to file, so the locations survive page reloads. (Total moved 1,775 → 1,688 with no
code change — the readiness signal removed residual mid-render noise.)

### 3–4. `conjunction → r-question` (105) — **ENGINE: chapter-vocab class loses to global semantic role**

Concentrated in `a2-9-vergleiche-als-wie` (**87**), `a2-10-goethe-mini-1` (17),
`a2-19-indirekte-fragen` (1 — `ob`, separate).

Traced a2-9 indices 3, 7, 18, 29 (all `de-link` = **auto-linked prose**, containers `.de` /
`.de-em`):

| Source | Value |
|---|---|
| Chapter authored variants | `r-conjunction / Conjunction · wie`, `r-vergleich / Comparison · equality`, `r-vergleich / —` |
| `KW_GLOBAL_LEXICON['wie']` | `Question word` |
| `KW_STORY_LEX['wie']` | `r-question / Question word` |
| `KW_INFLECTIONS` | null |
| **Badge** | **Conjunction** (from the chapter's own vocab entry) |
| **Colour** | **`r-question`** (from `KW_STORY_LEX`) |

**First divergence:** `roleFor → storyTokenFor` finds `r-question` in `KW_STORY_LEX` and, because
`r-question` is a SEMANTIC role, the R2 tier lets it beat the POS baseline. But this chapter
teaches `wie` as the **equality-comparison conjunction** ("so groß wie") and says so in its own
vocab entry. The chapter-local lexical identity is being overridden by a global default for a
different sense of the word.

**Classification: A — engine (precedence defect).** Not authored data: the chapter is right and
the global entry is right for its own sense; the resolver picks the wrong one. Learner-visible
— 87 occurrences painted question-pink in a chapter about comparisons.

### 5. `noun → r-article` / `die` (91) — **multiword vocab-headword fragment**

Concentrated in `c2-22` (43), `c2-25` (23), `c2-26` (23), `c1-30` (2) — **every one in
`sec-vocabulary`**. Traced c2-22 indices 34, 44, 53:

| Fact | Value |
|---|---|
| Container | **`.vword-tag`** (vocabulary chip) |
| Card headword | `die Entwicklung` / `die Entscheidung` / `die Verantwortung` |
| Vocab `pos` | `derived noun` |
| Span class | `de-link wp-inline-link r-article` — **correct for the word** |
| Badge | **Noun** — inherited from the CARD's entry |
| Popup EN | **empty** |

**First divergence:** the article of a space-separated multiword vocab headword is linkified as
an independent word, then resolves to the CARD's noun entry. Same family as the `der/die
Autor/in` composite-fragment defect, but that fix keyed on `/` and `|` — it does not cover
**space-separated** article + noun headwords.

**Classification: A — engine, composite-headword family (second variant).** Severity lower than
the `wie` cluster: colour is correct and the popup is nearly empty rather than actively wrong.

### 6. `sondern` data audit (no change made)

`KW_GLOBAL_LEXICON['sondern'].type = "Adjective"` — wrong (it is a coordinating conjunction).
Authored across 9 chapters as `r-connector`, `r-conjunction`, `plain`, `r-nichtnur`, `r-sonder`,
with types `Konjunktion` / `Konnektor` / `Conjunction` / `Konjunktion · sondern auch` /
`Konnektor · nicht nur…sondern auch (2/2)`.

**Is a legitimate distinction being encoded?** Partly yes: `r-nichtnur` and `r-sonder` are
phrase-level correlative labels (R10 family, already excluded from colour), and
`Konnektor · … (2/2)` marks the second half of a two-part connector — real teaching content.
But the underlying WORD CLASS is invariant: `sondern` is always a conjunction. So the global
`type` can be corrected **without touching any authored role**.

### 7–8. Summary

| Cluster | First divergence | Class | Learner impact |
|---|---|---|---|
| `wie` (105) | `storyTokenFor` prefers global semantic role over chapter vocab class | **Engine** | High — 87 wrong colours in the chapter that teaches the word |
| `die` (91) | multiword vocab headword split into clickable fragments | **Engine** | Low–medium — wrong badge, empty popup |
| `sondern` (104) | `GLEX.type = Adjective` | **Authored data** | Medium — wrong word class in badge |

No detector false positives found in either traced cluster. No intentional behaviour found.

### 9. Can `sondern` be safely corrected globally?

**Yes, with one caveat.** Changing `type` to `Conjunction` fixes the badge and leaves every
authored role untouched. The caveat: `roleFor('sondern')` currently returns `r-connector`; once
the POS tier sees `Conjunction` it may return `r-conjunction` for occurrences that have no
authored role, which would change colours in the 3 chapters that author it `plain`. That needs
measuring before the edit, not after.

### 10. Recommended ONE next action

Fix the **`wie` precedence defect** — highest learner impact, clearest mechanism, and it is a
genuine engine bug rather than data. Rule to implement: a chapter's own vocab class outranks a
global story-lexicon semantic role when the two describe different word classes.

---

## 12t. ⚠ `wie` PRECEDENCE DEFECT DOES NOT EXIST — it was a runner artifact. NO FIX APPLIED.

**Instruction was to fix the `wie` precedence defect. It was not implemented, because tracing
the pipeline first proved there is nothing wrong in production.**

### The evidence

Step 1 — resolution tiers on a2-9:

| Source | Value |
|---|---|
| Chapter vocab `wie` | `pos: 'conjunction'`, en "as, like (for equality: so … wie)" |
| `KW_GLOBAL_LEXICON['wie']` | `Question word` |
| `KW_STORY_LEX['wie']` | `r-question` |
| **`KW_roleFor('wie')`** | **`r-conjunction`** ✅ |

The chapter's own vocab class **already outranks** the global semantic role. The precedence
rule the fix was meant to add is **already implemented and working**.

Step 2 — live rendered spans on the fully-loaded page:

```
95 `wie` occurrences → r-conjunction 93 · r-comparative 2 · r-question 0
```

Step 3 — QA engine on the fully-loaded live page:

```
1,491 occurrences · 1 finding (CASE_COLLISION on "Essen") · 0 question-role findings
```

Step 4 — same chapter through the runner, in isolation:

```
1,491 occurrences · 1 finding · 0 question-role findings   — identical to live
```

But the same chapter **inside the full 259-chapter sweep** reported **87**
`conjunction → r-question` findings.

### Root cause of the phantom cluster

Chapters render in **two passes**: an initial pass, then a re-sweep after `global-lexicon.js`
loads and `WORDIDX` (chapter vocab) is built. Before the re-sweep, `wie` resolves through
`KW_STORY_LEX` to `r-question`; after it, the chapter's own conjunction class wins.

The runner's readiness signal polls for `KW_GLOBAL_LEXICON` **plus a 400 ms grace period**.
In isolation that is enough. **Under full-sweep load it is not** — the re-sweep has not
committed when the engine measures, so the engine records first-pass colours.

### ⚠ CONSEQUENCE FOR QA TRUSTWORTHINESS

**An unknown portion of the 1,688 sweep findings are mid-render artifacts, not defects.**
This is the third distinct time load-dependent timing has produced false findings (A1-9 = 6;
the 3 timed-out chapters; now the 87-finding `wie` cluster). The 400 ms grace is a
load-sensitive guess, exactly like the 2,600 ms delay it replaced.

**No cluster from the last sweep may be trusted or fixed until this is resolved.** The
`die` (91) and `sondern` (104) clusters both need re-verification against isolated runs —
`sondern` was proven from DATA (`GLEX.type = "Adjective"`), so that finding stands, but its
count does not.

### Required fix (runner-side only, not yet implemented)

Replace the fixed grace period with a **stability check**: sample the page's occurrence count
and role distribution, wait, sample again, and only measure once two consecutive samples agree.
That is load-independent by construction. Cheap, and it removes an entire class of false
findings.

**Nothing in production was changed this pass. Golden gate unaffected: 0 / 2 / 2 / 4.**

## 12u. RUNNER STABILITY CHECK — implemented; measurement still NOT trustworthy. STOP.

### 1–6. What changed (runner only)

**File:** `chapter/qa-runner.html`. No production file, lexicon, role, colour or chapter
content touched.

| | |
|---|---|
| Previous mechanism | poll for `KW_GLOBAL_LEXICON`, then a fixed **400 ms** grace |
| New mechanism | poll for lexicon, then require a **stable render signature** |
| Signature | leaf occurrence count · section count · badge-node count · full `r-*` role distribution |
| Consecutive samples | **3** identical, at **180 ms** intervals |
| Hard timeout | **30 s**, recorded as `readyState: 'hard-timeout'` (never silent) |
| False-stability guards | lexicon must exist · signature must be non-empty · 3 consecutive matches · no `requestAnimationFrame` (proven unreliable offscreen) |

`readyState` is now stored per chapter in the report.

### 7–8. Golden gate — **0 / 2 / 2 / 4** ✅, all `stable`

A2-9 in isolation: **1,491 occurrences, 1 finding, 0 question-role** — matches the live page
exactly. The 87 phantom `wie → r-question` findings are **gone**.

### 9–10. Full sweep

**259 chapters · 161,534 occurrences · 1,682 findings · 63 clean · 0 errors ·
259/259 `stable`, 0 hard-timeouts.**

| Code | Prev (1,688) | Now (1,682) |
|---|---|---|
| `ROLE_CONTRADICTS_BADGE` | — | 1,160 |
| `CASE_COLLISION_CAPITALISED` | — | 246 |
| `HEADWORD_COLOUR_MISMATCH` | — | 154 |
| `PARADIGM_CLASS_MISMATCH` | — | 47 |
| `BLACK_FALLBACK` | — | 45 |
| `NO_POPUP` | — | 20 |

### ⚠ 11–12. THE MEASUREMENT IS STILL LOAD-DEPENDENT — halting as instructed

A2-9, same code, same readiness verdict:

| | Isolation | Under 259-chapter sweep |
|---|---|---|
| Occurrences | 1,491 | **1,485** |
| Findings | **1** | **86** |
| `readyState` | stable | stable |

And the finding has **inverted**:

```
before fix (under load):  wie [Conjunction badge → r-question colour]  ×87
after  fix (under load):  wie [Question word badge → r-conjunction colour] ×86
```

**Diagnosis — the signature observes the wrong half of the pipeline.** It samples the RENDERED
SPAN state, which now genuinely stabilises: the colour is correct (`r-conjunction`, matching
the chapter's own vocab class) in both runs. What is unstable is the **BADGE**, which comes
from `resolveFullEntry` → `WORDIDX` (the chapter vocabulary index). Under load `WORDIDX` is not
yet built when the engine clicks, so the popup falls through to the Global Lexicon and reports
"Question word".

So: **span readiness ≠ popup-resolution readiness.** The fix removed one artifact class and
exposed its mirror image. The occurrence-count drift (1,491 → 1,485) confirms the page is
still not fully settled at measurement time.

### Required next step (not taken — stopping per instruction)

Extend the readiness signature to observe the **resolution** layer, not just the render layer:
require `WORDIDX` (or the chapter-vocab index the popup consults) to be built before sampling,
and include a resolution-derived value in the signature. Until then **no cluster count from
any sweep may be trusted, classified, or fixed** — including the `die` (91) and
`conjunction → r-question` populations. The `sondern` finding still stands, because it was
proven from DATA (`GLEX['sondern'].type = "Adjective"`), not from a count.

## 12v. ⚠ REMAINING ASYNC DEPENDENCY FOUND — it is in PRODUCTION, not the runner. STOP.

### 1–2. The exact readiness problem and the real mechanism

Traced the index lifecycle as instructed before changing anything:

| Fact | Location |
|---|---|
| `let WORDIDX = null` | chapter-app.js ·2343 |
| `buildWordIndex()` is **synchronous** | ·2377 |
| Built **lazily on first use**: `if (!WORDIDX) buildWordIndex()` | `lookupWord` ·2566, and 2 more sites |
| `global-lexicon.js` is injected **async** by chapter-app.js itself | ·25–56 |
| Its `onload` re-runs `gatedWrapWordsIn` + `wrapWordsIn` over the whole document | ·29–53 |
| Its `onload` does **NOT** rebuild `WORDIDX` | — |

**`buildWordIndex()` reads `KW_GLOBAL_LEXICON` and `KW_STORY_LEX` inside `classConflict`** (the
C-A occurrence-identity gate). So the index bakes in conflict decisions computed against
whatever lexicon state existed at first use — and because it is only ever built when `WORDIDX`
is null, **it is never rebuilt after the dictionary arrives**.

**The race:** if any lookup happens before `global-lexicon.js` resolves, `classConflict()` sees
an empty dictionary, finds no canonical class to disagree with, and therefore admits chapter
tokens it should have withheld — permanently. The lexicon `onload` repaints spans (which is why
the COLOUR is now stable and correct) but leaves the stale index feeding
`resolveFullEntry` → **the BADGE**. Exactly the split observed: A2-9 `wie` colour correct in
both runs, badge differing under load.

### 3–4. Files changed this turn

**None.** No runner change, no production change. Phase 1 tracing answered the question before
any edit was warranted.

### ⚠ Why no runner-side signature can fix this

The instruction was to make the runner wait for resolution readiness. **It cannot work.** By
the time the runner observes the page, `WORDIDX` may already be built from a pre-lexicon state.
Waiting longer, sampling `resolveFullEntry` output, or requiring N stable samples all observe
the *same cached wrong index* — the signature would stabilise on the wrong answer. A stale
cache cannot be waited out; it can only be invalidated.

**This is therefore a PRODUCTION defect, not a measurement artifact.** A real learner on a slow
connection can get the same wrong badge: the QA runner did not manufacture it, it exposed it.
That reverses the previous entry's conclusion (§12u), which attributed the inversion to the
measurement layer.

### 5. The fix (production, one line of intent — NOT applied, out of scope this turn)

In the `global-lexicon.js` `onload` handler that already re-sweeps the document, invalidate the
index before the re-sweep:

```js
WORDIDX = null;   // rebuild against the now-complete dictionary
```

The next `lookupWord` rebuilds it synchronously with correct `classConflict` decisions. The
re-sweep that follows then repaints spans from a consistent index. No new mechanism, no schema
change, no timing guess — it reuses the deterministic re-pass the code already performs, and is
the same "one deterministic re-pass, not a timing guess" principle that handler was written on.

### Status of everything else — unchanged and still untrusted

Golden gate **0 / 2 / 2 / 4**. Last sweep: 259 chapters · 161,534 occurrences · 1,682 findings
· 63 clean · 259/259 `stable` · 0 timeouts. **No cluster count may be classified or fixed until
the index race is closed** — `die` (91), `conjunction → r-question`, and any
`ROLE_CONTRADICTS_BADGE` population can all be contaminated by a stale index. `sondern` remains
the sole exception: proven from data (`GLEX['sondern'].type = "Adjective"`), not from a count.

## 12w. WORDIDX INVALIDATION — TRIED, PROVED HARMFUL, REVERTED

### 1–3. What was changed, and reverted

**File:** `chapter/chapter-app.js`, the `global-lexicon.js` `onload` handler. `WORDIDX = null`
was added before the existing re-sweep, then **removed**. A permanent NOTE now sits at that
exact location documenting why, so it is not reintroduced.

Invalidation must precede the re-sweep (so the rebuilt index feeds the repaint) — that part of
the reasoning was right.

### 4. Regression test — the race is real, but the fix is worse than the bug

**A2-9 in isolation, with invalidation:** 1,160 occurrences, 1 finding, 0 question-role.
**A2-9 through the sweep runner, with invalidation:** 1,160 occurrences, 1 finding — identical.
The split-brain badge was genuinely gone, and isolation/runner agreed.

**But it broke clickability.** Measured on A1-1:

| | With invalidation | Reverted |
|---|---|---|
| Clickable occurrences | **243** | **254** |
| Orphaned German text nodes | **137** | 135 |

Orphans included core learner content — `Herzlich willkommen`, `Ich bin Frau Weber`,
`Guten Tag`. Curriculum-wide the sweep showed occurrences falling ~161,500 → ~125,700 (≈22%)
across every level.

**Mechanism:** `classConflict` withholds a surface from the index when the authored token class
disagrees with the canonical class. Against a COMPLETE dictionary that fires far more often, and
a withheld surface with no Global-Lexicon entry of its own then resolves to nothing — so the
word stops being clickable at all. A missing popup on real German is a worse learner defect than
a wrong badge, so the trade is not acceptable.

Also: A2-9 hit `hard-timeout` once under full-sweep load with invalidation active (rebuilding
the index on a 1,485-occurrence chapter under contention), so it was correctly **not measured**
rather than silently mismeasured — the readiness guard behaved as designed.

### 5–9. State after revert

A1-1 back to **254 clickable, 0 findings**. Golden gate **0 / 2 / 2 / 4**. Runner stability
check from §12u remains in place (259/259 `stable`, 0 timeouts on the pre-invalidation sweep).
Last trustworthy full sweep: **259 chapters · 161,534 occurrences · 1,682 findings · 63 clean**.

### 10. Is the measurement layer trustworthy? — NO, and the reason is now precise

The stale-index race is **real and still open**. It is a production cache-lifecycle defect, not
a measurement artifact, and it cannot be fixed from the runner (a stale cache cannot be waited
out). Any `ROLE_CONTRADICTS_BADGE` count may still be contaminated under load.

### Required order for the real fix (two steps, not one)

1. Make `classConflict` withholding **non-destructive**: withhold the CLASS, not the entry, so
   a surface keeps its clickability and popup data while declining to assert a contested word
   class.
2. THEN invalidate `WORDIDX` at lexicon `onload`. With step 1 in place, invalidation can no
   longer remove clickability.

Doing step 2 alone is the mistake this entry records. `sondern`
(`GLEX['sondern'].type = "Adjective"`) remains the only finding proven from data rather than a
count.

## 12x. NON-DESTRUCTIVE CLASS WITHHOLDING — implemented and kept. INVALIDATION REVERTED AGAIN.

### 1. WORDIDX data contract (traced, `buildWordIndex()` ·2402–2510)

`WORDIDX[normWord(surface)] = { …authored token fields }` with **`role` always deleted** (an
indexed token must not donate colour outside its own passage). Three sources, in precedence
order: `C.reading.tokens` → `C.story.dialogue[].tokens` → `C.vocab` entries.

| Field | Purpose |
|---|---|
| `en`, `hi`, `pron`, `why`, `ex`/`exEn`/`exHi`, audio | popup content — lexical identity |
| `type` | **the only class-donating field** — feeds the badge and `wordClassOf()` |
| `lemma`/inflection keys | paradigm resolution |

**Consumer that made withholding destructive:** `resolveClickableWord` → `lookupWord` treats a
missing WORDIDX entry as "this word does not exist", so the span is never created.

### 2. `classConflict()` before the change

Returns true when (a) the chapter's own tokens disagree with each other, or (b) the single
authored token's class disagrees with the canonical lexicon. Its caller then did
`if (… || classConflict(t.w)) return;` — **skipping the whole entry**.

### 3. Why invalidation destroyed clickability (the hypothesis)

Rebuilt against a complete dictionary, branch (b) fires far more often; a withheld surface with
no Global-Lexicon entry of its own then resolves to nothing.

### 4–5. Non-destructive model implemented — `chapter/chapter-app.js` only

New `indexable(t)` helper used by both token sources: copy the token, delete `role` as before,
and **delete only `type`** when conflicted. Clickability, popup content and paradigm data
survive; the badge falls through to the canonical lexicon instead of inheriting a contested
occurrence class. No second index, no second resolver.

### 6–8. Clickability + golden gate

| State | A1-1 clickable | Orphan text nodes | A1-1 findings |
|---|---|---|---|
| Baseline (reverted) | **254** | 135 | 0 |
| **Non-destructive alone** | **254** ✅ | 135 ✅ | 0 ✅ |
| Non-destructive **+ invalidation** | 243 ❌ | 137 | 0 |

All Phase-5 safety words present in the kept state: `Herzlich` `willkommen` `Ich` `bin` `Frau`
`Weber` `Guten` `Tag`. Golden gate **0 / 2 / 2 / 4** unchanged.

### 9–10. ⚠ The hypothesis was WRONG — invalidation is still unsafe

With the non-destructive model in place, invalidation **still** costs 11 clickable words
(254 → 243) and adds 2 orphans. So **entry-withholding was not the cause of the loss.** The
remaining cause is untraced: something else in the rebuild path drops 11 surfaces the
pre-lexicon index had. Reverted for the second time; the code comment records all three
measured states so the next attempt starts from evidence, not the same wrong assumption.

**WORDIDX invalidation is NOT safe. The stale-index race remains open.**

### 11–12. Diagnostics and readiness

No temporary diagnostics were added this turn (Phase-1 tracing was read-only). Runner stability
check from §12u retained.

**Production is NOT ready for a full sweep** — per the stated gate, invalidation had to prove
safe and it did not. The non-destructive change is kept because it is correct on its own merits
and measurably costs nothing, but it does not close the race.

### Next step

Trace exactly which 11 A1-1 surfaces disappear when `WORDIDX` is rebuilt post-lexicon — diff
the index keys before and after a rebuild on the same page. That names the real dependency
instead of guessing at it a third time.

## 12y. THE 11 MISSING SURFACES — IDENTIFIED. Root cause narrowed to the inflection path.

### 1–2. PRE vs POST diff (measured, not estimated)

DOM-level multiset diff of clickable surfaces on A1-1, temporary `WORDIDX = null` on/off:

```
A (reverted)              254
B (invalidation active)   243
lost  = 11      gained = 0
```

**Exactly 11, matching the clickability delta with no offsetting gains.** The lost set:

`Äpfel` · `Bücher` · `Hunde` · `Schulen` · `Väter` · `Wässer` · `Zeiten` · `Straßen` · `Namen` ·
`Laute` · `Liebe`

### 3–4. First divergence — one common cause, not eleven

**Every one of the 11 is a PLURAL/INFLECTED form, and all sit in `.vword-tag` vocabulary
chips** (verified: `Äpfel` → container `vword-tag`). They are *not* WORDIDX keys — grep confirms
`buildWordIndex()` never adds `w.plural` as a key. They resolve through step 3 of `lookupWord`'s
lemma resolution:

```
Äpfel → KW_INFLECTIONS['äpfel'] → 'Apfel' → WORDIDX['apfel'] → meaningful → clickable
```

`KW_INFLECTIONS` (10,849 entries) ships **inside `global-lexicon.js`**, so it does not exist
during the first render pass — these surfaces can only ever become clickable on the post-lexicon
re-sweep. Confirmed live: `INF['äpfel'] = 'Apfel'`, `INF['liebe'] = 'lieben'`,
`INF['laute'] = 'lauten'`.

So the divergence is **not** `classConflict` and **not** entry-withholding: it is that nulling
WORDIDX forces a synchronous rebuild *during* the re-sweep, and the inflection-mediated
resolution for these 11 does not survive that interleaving.

### 5. Learner-facing consequence

`hasMeaningfulEntry` was checked and **does not gate on `type`**
(`en || hi || ex || examples || conj || plural || compare`), so the non-destructive change
cannot itself remove clickability — confirming it is safe, and confirming the loss is upstream
in lemma resolution rather than in the index contract.

Severity note: these are plural chips on vocabulary cards — real learner content, but a
secondary display form rather than prose. `Liebe` and `Laute` are already-logged content gaps.

### 6–8. Conclusions

- **One common root cause**, not multiple: all 11 share the inflection-index resolution route.
- **The non-destructive `classConflict` change SHOULD REMAIN** — A1-1 stays at 254 clickable /
  135 orphans / 0 findings with it alone, and `hasMeaningfulEntry` proves it cannot cost
  clickability.
- **`WORDIDX = null` remains reverted.** Verified restored: 254 clickable, all 11 plurals
  present, 0 findings.

### 9. Next investigation (one)

Determine why inflection-mediated resolution fails when the index is rebuilt mid-re-sweep. The
specific question: during the re-sweep, does `lookupWord` reach `KW_INFLECTIONS` for these
surfaces at all, or does the forced `buildWordIndex()` call inside the same synchronous pass
change what `WORDIDX[normWord(lemma)]` returns for the lemma (`apfel`, `lieben`, `lauten`)?
Instrument `lookupWord` for those 11 surfaces specifically, in both states.

**No production code changed this turn beyond the temporary diagnostic, which was added and
removed. Golden gate 0 / 2 / 2 / 4.**

## 12z. ✅ ROOT CAUSE PROVEN — `resolveClickableWord` reads WORDIDX without the build guard

### The exception, captured verbatim

```
TypeError: Cannot read properties of null (reading 'before')
  at resolveClickableWord   (chapter-app.js:1763)
  at germanWordSpansGated   (chapter-app.js:1855)
```

`chapter-app.js:1763` is the combining-prefix guard:

```js
const nkP = normWord(word);
const rawP = WORDIDX[nkP] || (window.KW_GLOBAL_LEXICON || {})[nkP];
```

**`resolveClickableWord` indexes `WORDIDX` DIRECTLY, without the
`if (!WORDIDX) buildWordIndex()` guard that `lookupWord` has.** With `WORDIDX = null`, the first
gated word processed in the re-sweep throws. The property name in the message — `'before'` — is
the English word `before` from A1-1's explanatory prose, i.e. the very first gated surface the
re-sweep reached.

### Why exactly 11 plurals vanish

The `onload` re-sweep has **no try/catch**, so that first throw aborts the ENTIRE remaining
re-pass — both loops. Everything later in document order is never processed. The vocabulary
plural chips sit near the end of the page, so they are the collateral.

**Confirmed by the lookup counters, not inferred:**

| | State A (reverted) | State B (invalidation) |
|---|---|---|
| Total `lookupWord` calls | **41** | **19** |
| Post-lexicon lookups for the 11 | 2–3 each | **0 each** |
| Clickable | 254 | 243 |

In State A the 11 resolve normally once `KW_INFLECTIONS` (10,849 entries) is available:
`Äpfel → Apfel` (en/hi/ex/plural, meaningful → clickable), `Namen → Name`, `Straßen → Straße`…
`Laute → lauten` and `Liebe → lieben` resolve via `KW_GLOBAL_LEXICON` for the lemma rather than
WORDIDX. In State B they get **zero** post-lexicon lookups — the resolver never runs for them.

### Answering the six candidate causes from the brief

| | Verdict |
|---|---|
| A `KW_INFLECTIONS` unavailable | **No** — 10,849 entries loaded in both states |
| B lemma lookup fails | **No** — lemma resolves correctly in State A |
| C `WORDIDX[lemma]` differs after rebuild | **No** — never reached |
| D `hasMeaningfulEntry` rejects | **No** — gates on en/hi/ex/plural/compare/conj, not `type` |
| E another `lookupWord` branch | **No** |
| F **rebuild/re-sweep ordering** | **YES — an unguarded null dereference aborts the re-sweep** |

One root cause, shared by all 11. They are not individually broken; they are simply downstream
of the crash.

### Consequences

- The non-destructive `classConflict` change is **safe and stays** (A1-1: 254 clickable, all 11
  plurals present, 0 findings, diagnostics removed — verified after cleanup).
- `WORDIDX = null` remains reverted, but it is now clear the invalidation itself was never the
  problem: **`resolveClickableWord` has a latent unguarded `WORDIDX` access.** That is a
  pre-existing production fragility, exposed rather than caused by the experiment.
- All three temporary diagnostics were removed (0 `TEMP-DIAG` markers remain; 1,619 bytes
  removed) and the restored state re-verified.

### Recommended next action (one)

Add the missing `if (!WORDIDX) buildWordIndex();` guard at the top of `resolveClickableWord` —
matching `lookupWord`, `isCapitalisedNounHomograph` and `isLowercaseNounMismatch`, which all
already have it. Then re-attempt the lexicon-onload invalidation: with the guard in place the
re-sweep cannot throw, so the stale-index race can finally be closed without losing
clickability. Consider also wrapping the `onload` re-sweep in a try/catch so a future resolver
fault degrades one word instead of silently killing every later container.

## 12aa. PHASE 1 — null guard added. STOPPED: golden A1-9 moved 2 → 6.

### The change (only this)

`chapter/chapter-app.js` — `if (!WORDIDX) buildWordIndex();` at the top of
`resolveClickableWord()`, matching `lookupWord` / `isCapitalisedNounHomograph` /
`isLowercaseNounMismatch`. Nothing else touched. Invalidation NOT reintroduced.

### Results

| Chapter | Before | After | Occurrences |
|---|---|---|---|
| A1-1 | 0 | **0** ✅ | 254 (all 11 plurals present) |
| A1-2 | 2 | **2** ✅ | 284 |
| A2-8 | 4 | **4** ✅ | 1,181 |
| A2-9 | 1 | **1** ✅ | 1,491 |
| **A1-9** | **2** | **6** ⚠ | 365 (unchanged) |

**Halted per the gate.** Diagnosed far enough to rule out the obvious explanation:

- **NOT a timing artifact.** Isolated direct rerun also returns **6** (previously the isolated
  rerun was the thing that proved 6 false). Both runner and isolation now agree on 6.
- **NOT a rendering regression.** Occurrence count is identical at 365 — no word gained or lost
  clickability. The guard changed *resolution*, not linking.
- The 4 new findings are all `CASE_COLLISION_LOWERCASE: morgen[Noun]`. The 2 pre-existing `und`
  findings are unchanged.

### What `morgen` actually shows

Clicking the first `morgen` occurrence gives the **correct** answer: badge **Adverb**, role
`r-time`, headword `morgen`, `roleFor` → `r-time`. Sources: `GLEX['morgen'] = {w:'Morgen',
type:'Noun', en:'morning'}` (the noun) and `KW_STORY_LEX['morgen'] = {role:'r-time',
type:'Noun/Adverb · time'}`.

So the first occurrence is right while four others badge as **Noun** — i.e. this is
**occurrence-dependent**, not a blanket misresolution. Because `buildWordIndex()` now runs at
the first `resolveClickableWord` call instead of the first `lookupWord` call, the index is built
at a different point relative to the async lexicon, which changes `classConflict` verdicts for
`morgen`. **The guard is therefore not behaviour-neutral — it shifts index build time.**

### Assessment

The guard fixes a proven latent crash and leaves four of five golden chapters exactly intact,
so it is worth keeping. But A1-9's baseline cannot be silently rebased from 2 to 6: those four
`morgen` findings must first be triaged as real defect vs detector false positive, per
occurrence.

**Phase 2 (targeted invalidation test) NOT attempted** — the Phase 1 gate did not pass cleanly,
and running Phase 2 on an unexplained baseline shift would confound two variables.

### Next action (one)

Trace the four flagged `morgen` occurrences in A1-9 at their exact indices: capture badge,
authored token, and `classConflict` state for each, and compare against the first occurrence
that resolves correctly. That decides whether the guard exposed a real pre-existing defect (as
looks likely, given the index-timing shift) or introduced one — and only then should the A1-9
golden value be re-established.

Golden corpus pending that decision: **A1-1 = 0 · A1-2 = 2 · A1-9 = 2→6 (unresolved) ·
A2-8 = 4**.

## 12bb. A1-9 `morgen` — traced. The guard EXPOSED a real pre-existing defect.

### 1. Exact trace — six occurrences, not five

| # | Section | Container | Authored token? | Role | Badge | Verdict |
|---|---|---|---|---|---|---|
| 16 | story | `story-line` | **yes** | `r-time` | **Adverb** | ✅ |
| 20 | story | `story-line` | **yes** | `r-time` | **Adverb** | ✅ |
| 73 | vocabulary | `vword-ex` | no | `r-time` | **Noun** | ❌ flagged |
| 93 | vocabulary | `vword-de` | no | `r-time` | **Noun** | ❌ flagged |
| 226 | grammar | `de r-time` | no | `r-time` | **Noun** | ❌ flagged |
| 326 | writing | `lede` | no | `r-time` | **Noun** | ❌ flagged |

The chapter authors exactly **two** `morgen` tokens, both
`{role:'r-time', type:'Adverb · time', en:'tomorrow'}` — and those are precisely the two that
badge correctly.

### 2–4. First divergence

The split is **authored vs auto-linkified**, and it is perfectly clean:

- indices 16/20 are rendered FROM the token arrays, so `resolveFullEntry` receives the token
  `t` directly → badge from its own `type: 'Adverb · time'` → **Adverb**;
- indices 73/93/226/326 have no token of their own → resolved by surface →
  `GLEX['morgen'] = {w:'Morgen', type:'Noun', en:'morning'}` → **Noun**.

Why the surface path cannot recover the adverb reading: `classConflict('morgen')` sees the
chapter's authored class `adverb` disagreeing with the canonical class `noun`, so the
non-destructive gate withholds `type` from the index entry — and with no `type` there, the badge
falls through to the Global Lexicon's capitalised noun.

**All six share one WORDIDX instance.** The differing results are not an index inconsistency:
the two correct ones never consult the index at all, because an authored token outranks it.
That answers the critical test — same index, different resolution PATH.

Role is `r-time` on all six (from `KW_STORY_LEX`), which is why only the badge is wrong. The
lowercase→capitalised-noun collision is exactly what `CASE_COLLISION_LOWERCASE` was written to
catch, so the detector is behaving correctly.

### 5. Exposed, not introduced

**Exposed (possibility A).** The guard only changes WHEN `buildWordIndex()` runs — it adds no
resolution logic. The wrong badge comes from the interaction of two pre-existing pieces:
the `classConflict` withholding of `type` and the Global-Lexicon fallback for auto-linked
surfaces. Neither was authored this turn. What the guard removed was the crash that had been
aborting the re-sweep, and with the sweep now completing, four occurrences that previously never
finished resolving are visible for the first time.

The pre-guard state is no longer reproducible without reintroducing the crash, so this is stated
from mechanism rather than from a before/after count — the counts alone would not settle it.

### 6. A1-9 baseline

**Should become 6, not 2.** The four findings are genuine learner-facing defects: a real German
time adverb (`morgen` = tomorrow) badged as the noun `Morgen` = morning, in vocabulary, grammar
and writing sections. The old value of 2 was a product of a masked crash, not of correctness.
Recommend re-establishing the golden baseline as **A1-1 = 0 · A1-2 = 2 · A1-9 = 6 · A2-8 = 4**
once confirmed.

### 7. Is Phase 2 safe?

**Yes, with the baseline settled first.** The crash that made invalidation destructive is fixed,
clickability is intact (365 occurrences, A1-1 254 with all 11 plurals), and four of five golden
chapters are unchanged. Phase 2 should be attempted only after A1-9 = 6 is accepted, so the two
variables stay separate.

No instrumentation was added this turn (read-only DOM/lexicon queries only). No production code
changed.

## 12cc. PHASE 2 FAILED — and it uncovered a regression I had introduced earlier

### Phase 2 result: invalidation is NOT safe

With `WORDIDX = null` re-enabled, A1-1 passed cleanly (254 clickable, all 11 plurals, 0
findings, no crash — the guard did stop the abort). **A2-9 failed:**

```
wie → r-question ×92 · badge "Question word"      (should be r-conjunction / Conjunction)
QA finding count: 1        ← UNCHANGED
```

**The failure is invisible to the finding count.** Badge and colour both flip to the same wrong
answer, so they agree, so nothing is flagged. A count-based gate would have called this clean
while 92 learner-facing occurrences were wrong. That is the most important lesson of this pass:
**finding counts cannot detect a regression where badge and colour are wrong together.**

Reverted.

### Then the real cause: my own `indexable()` change from §12x

After reverting invalidation, `wie` was **still** `r-question`. Reverting the `resolveClickableWord`
guard did not restore it either. Bisecting to the actual culprit:

The "non-destructive class withholding" I introduced in §12x indexed a conflicted token with
`type` deleted instead of skipping it. But **`add()` is first-writer-wins, and token sources are
added BEFORE `C.vocab`** — so the typeless token entry occupied `WORDIDX['wie']` and **blocked
the chapter's own vocab entry** (`pos: 'conjunction'`) from ever being indexed. The class then
fell through to `KW_GLOBAL_LEXICON['wie'] = 'Question word'`.

So the change I described as "correct on its own merits and measurably costs nothing" was
silently wrong — and A1-1's unchanged 254/0 gave false confidence, because A1-1 has no such
conflicted-token/vocab overlap.

**Fix applied:** `indexable()` returns `null` for a conflicted token (withheld, as originally),
and `add()` now ignores a null payload so a withheld token cannot occupy the slot. The vocab
entry — the correct owner of lexical identity — claims it again.

### Verified state (all measured, this pass)

| | |
|---|---|
| A2-9 `wie` | **r-conjunction 93 · r-comparative 2 · r-question 0** ✅ |
| `roleFor('wie')` | **r-conjunction** ✅ |
| Golden gate | **A1-1 0 · A1-2 2 · A1-9 2 · A2-8 4** — all `stable`, no errors |
| A2-9 | 1,491 occurrences · 1 finding |
| A1-1 | 254 clickable · all 11 plurals · 0 findings |

**A1-9 is back to 2, not 6.** The four `morgen` findings were themselves a product of the
`indexable()` regression: with the vocab entry blocked, `morgen` fell to the noun `Morgen`. The
§12bb conclusion that they were "genuine pre-existing defects exposed by the guard" was WRONG —
they were caused by my earlier change. **The golden baseline stays A1-1 = 0 · A1-2 = 2 ·
A1-9 = 2 · A2-8 = 4** and must NOT be rebased to 6.

### Current code state

- `indexable()` withholding: **restored to skip-entry** (+ null-safe `add`).
- `resolveClickableWord` lazy-build guard: **removed**, with a comment recording why (it
  prevents a real crash but shifts index build timing).
- `WORDIDX = null` invalidation: **not present**.
- Runner stability check (§12u): retained.

### Open, unchanged

The stale-WORDIDX race and the `resolveClickableWord` unguarded null access are both still real
and still open. Closing them requires fixing **precedence first** — chapter-local vocab class
must outrank the Global Lexicon for a surface the chapter itself teaches — because every
lifecycle change tried so far is defeated by that ordering. No full sweep should run until then;
the last trustworthy full sweep remains 259 chapters · 1,682 findings · 63 clean.

## 12dd. WORDIDX PRECEDENCE — DESIGN REVIEW (read-only; no code changed)

### 1. Current data contract

`WORDIDX[normWord(surface)] = { …fields }`, `role` always deleted. `add()` is
**first-writer-wins**: `if (k && data && !WORDIDX[k]) WORDIDX[k] = data;`

### 2. Exact insertion order (the whole problem lives here)

| # | Source | Gate | Kind of identity |
|---|---|---|---|
| 1 | `C.reading.tokens` | `plain`, quote-opener, **`classConflict`** | occurrence |
| 2 | `C.story.dialogue[].tokens` | same | occurrence |
| 3 | `C.vocab` — full headword, then each word of a multiword headword (skipping `FUNC_WORDS`) | none | **chapter lexical** |
| 4 | `HEADIDX` (separate index, `buildHeadwordIndex`) | — | display term |

**Occurrence data is inserted BEFORE chapter lexical data, into a first-writer-wins map.** So an
occurrence token silently outranks the chapter's own dictionary entry for that surface — the
exact inversion of the intended precedence.

`classConflict` is the only thing that has been keeping this from being visibly wrong: it
skips conflicted tokens, which lets the vocab entry claim the slot. That is why §12x's
"index it typeless instead of skipping" broke `wie` and `morgen` — it removed the accidental
protection without replacing the ordering that made it necessary.

### 3. Why first-writer-wins is unsafe

It encodes precedence as *insertion order*, but the sources are not ranked by insertion order.
Richness (tokens carry `pron`/`why`/`case`) was the reason tokens go first; authority (vocab is
the chapter's lexical statement) says vocab should win on CLASS. Those two goals are in direct
conflict and the map cannot express both.

### 4. The identity model (three distinct layers, currently collapsed into one slot)

| Layer | Owner | Scope | Should win on |
|---|---|---|---|
| **A occurrence** | `t` passed to `resolveFullEntry` | that one span | everything, when clicked directly |
| **B chapter lexical** | `C.vocab` | this chapter | **word class** for auto-linked surfaces |
| **C global lexical** | `KW_GLOBAL_LEXICON` / `KW_STORY_LEX` | curriculum | fallback only |

Layer A already works correctly (`resolveFullEntry` prefers `t` over any index lookup — proven
by the two authored `morgen` occurrences badging Adverb). The defect is entirely **B vs C**:
when B exists it must beat C, and today an occurrence token can block B from being present at
all.

### 5. Proposed minimal architecture

**Split the slot by field ownership, not by insertion order.** Keep ONE index and ONE resolver.

1. `add()` gains a merge rule instead of first-writer-wins: a later **chapter-lexical** source
   may fill fields the existing entry lacks, and may **override `type`** (class), while never
   touching occurrence-specific fields (`pron`, `why`, `case`, `ex`/`exEn`/`exHi`) already
   supplied by a token.
2. Insert `C.vocab` FIRST for `type` purposes — equivalently, tag entries with their source tier
   and let `type` resolution prefer the vocab tier.
3. `classConflict` then becomes unnecessary as a clickability gate: with vocab owning `type`, a
   conflicted token can be indexed for its rich fields without hijacking the class. This
   retires the mechanism that caused C-A, C-E and the §12x regression rather than layering
   another guard on it.

No new resolver, no new index, no schema change, no new colour.

### 6. Behaviour on the eight test words (measured current values in parentheses)

| Word | Chapter vocab | Global | Today | Under proposal |
|---|---|---|---|---|
| `wie` (a2-9) | **conjunction** | Question word | r-conjunction ✅ (only because tokens are skipped) | r-conjunction, **robustly** — vocab owns class |
| `morgen` (a1-9) | — | Noun | authored→Adverb ✅, auto→Noun ❌ | authored→Adverb; auto→falls to global Noun (**content gap**, not engine — chapter has no vocab entry) |
| `an` | — | Preposition | r-preposition ✅ | unchanged |
| `mit` | — | Preposition | r-preposition ✅ | unchanged |
| `früh` | — | Adverb | r-adverb ✅ | unchanged |
| `viel` | — | *absent* | r-adverb (story lex) | unchanged; conflicting authored tokens stay occurrence-local |
| `Regeln` | — | **Verb** | r-verb ❌ | unchanged — needs the capitalisation tier, not this fix |
| `Unternehmen` | — | **Verb** | r-verb ❌ | unchanged — same |

**Important scope finding:** only `wie` is actually fixed by the precedence change. `morgen`,
`Regeln`, `Unternehmen` have **no chapter vocab entry at all**, so B is empty and there is
nothing to outrank C — they are content gaps or capitalisation-tier issues, not precedence
issues. The precedence fix is therefore narrower than the brief assumes, and must not be sold
as fixing all eight.

### 7. Files / functions to modify

`chapter/chapter-app.js` only: `add()` inside `buildWordIndex()` (merge semantics), the three
insertion loops (source tagging), and eventual retirement of `classConflict` as a gate.

### 8. Regression risks

- Occurrence-specific `pron`/`why`/`case`/`ex` could be overwritten by a coarser vocab entry —
  the merge must be strictly additive except for `type`.
- Multiword vocab splitting (`FUNC_WORDS`) already writes per-word entries; giving those
  `type`-override authority could let a phrase's class leak onto a component word.
- Retiring `classConflict` re-opens C-A/C-E unless vocab genuinely owns `type` on every path
  (`roleFor`, `resolveFullEntry`, both case guards).
- Counts cannot validate this: §12cc proved badge+colour can be wrong *together* while the
  finding total stays flat. **Any implementation must be validated by asserting explicit
  badge/role VALUES on named words, not by comparing finding counts.**

### 9. Verdict

The model is sound and minimal, but **not yet safe to implement**: risk 2 (multiword class leak)
and risk 4 (count-blind validation) both need a concrete test plan first — a fixed assertion set
of word → expected badge + expected role, covering `wie`, `morgen`, `an`, `mit`, `früh`, `viel`,
`Regeln`, `Unternehmen`, plus the A1-1 254/11-plural clickability check. Build that assertion
harness before changing `add()`.

## 12ee. VALIDATION HARNESS — built, passing. Design cleared for implementation.

### 1. Harness status — `chapter/qa-assert.js` (permanent QA artifact)

`KWASSERT.run()` asserts **explicit badge and role VALUES** on named surfaces per chapter;
`KWASSERT.selfTest()` checks the proposed merge semantics as pure functions.

This exists because §12cc proved the finding count is structurally blind to the worst failure
mode: 92 occurrences flipped to the wrong badge AND wrong colour while the total stayed at 1,
because the two agreed with each other. Every assertion here fails on a **value**, never on a
total. Golden finding counts are retained only as supporting evidence.

Expectations are declared per chapter file, so the corpus grows without touching test logic.
Occurrence class is distinguished by `occ: 'authored' | 'auto' | 'any'` (`.rw` vs `.de-link`),
and a word with no occurrence of the requested kind reports **NOT AVAILABLE** rather than
silently passing.

### 2–3. Corpus results — ALL PASS

| Chapter | Assertions | Result |
|---|---|---|
| a2-9 | `wie` any → Conjunction / r-conjunction ×95 · forbid `wie`→r-question ≤0 · findings 1 | ✅ |
| a1-9 | `morgen` authored → Adverb / r-time ×2 · `und` → Conjunction ×10 · findings 2 | ✅ |
| a1-1 | 254 clickable · all 11 plurals present · findings 0 | ✅ (13/13) |
| b2-66 | `Regeln` → Noun / r-object · `Unternehmen` → Noun / r-object | ✅ |

**Notable recorded observation (D):** auto-linked `morgen` ×4 now reads **Adverb / r-time** —
correct. This confirms §12cc: those four occurrences were never pre-existing defects, they were
collateral of the `indexable()` regression, and reverting it fixed them. A1-9 = 2 stands.

### 4–5. Field-ownership and insertion-order tests — 9/9 pass

| Check | Result |
|---|---|
| vocab tier supplies class | ✅ |
| global never overrides vocab class | ✅ |
| occurrence-only fields preserved (`pron`,`why`,`case`,`number`,`person`,`ex*`) | ✅ |
| vocab never overwrites occurrence fields | ✅ |
| occurrence `type` wins over vocab | ✅ |
| **typeless token does not block vocab** (the §12x bug) | ✅ |
| no fake class invented when vocab absent (falls back to global) | ✅ |
| **order-independent: token-first == vocab-first** | ✅ |
| **order-independent: vs global-first** | ✅ |

**Insertion-order independence is proven** — the required gate. The model yields identical
entries regardless of source order, so precedence stops being an artifact of loop sequence.

### 6. `classConflict` retirement assessment: **REQUIRES REPLACEMENT INVARIANT**

Not safe to retire on its own. Current dependents:

| Mechanism | Depends on it? |
|---|---|
| C-A (`an`, `mit`, `früh`, `viel`) | **Yes** — it is the whole C-A fix |
| `wie` (a2-9) | **Yes, accidentally** — skipping the token is what frees the slot for vocab |
| `morgen` (a1-9) | **Yes, accidentally** — same |
| C-E (`Regeln`, `Unternehmen`) | No — capitalisation tier |

It may be retired **only after** vocab-owns-`type` is live on every path (`roleFor`,
`resolveFullEntry`, both capitalisation guards), because that invariant is what makes the gate
redundant. Retiring it first re-opens C-A.

### 7. Representation gaps

None found for the eight test words. Recorded honestly: `morgen`, `Regeln`, `Unternehmen` have
**no chapter vocab entry**, so the vocab tier is empty for them and the proposal cannot improve
them — they remain content gaps / capitalisation-tier issues, exactly as §12dd stated.

### 8. Minimal implementation plan (when approved)

1. Tag each `add()` insertion with its tier (`occurrence` | `vocab`).
2. Replace first-writer-wins with the validated `mergeProposed` semantics: additive fill,
   `type` owned by vocab over global, occurrence `type` still winning.
3. Keep `classConflict` in place initially — it becomes a no-op once vocab owns `type`.
4. Re-run `KWASSERT` across the corpus (must stay all-PASS) **before** any finding-count check.
5. Only then consider retiring `classConflict`, re-validating C-A each time.
6. WORDIDX invalidation stays reverted until steps 1–5 are green.

No production code changed this pass.

## 12ff. TIER-AWARE WORDIDX MERGE — IMPLEMENTED. All gates pass.

### 1. Files changed

`chapter/chapter-app.js` only — 6 edits, all inside `buildWordIndex()`:
`add()` rewritten with tier-aware merge · `indexable()` marks typed tokens · 4 insertion sites
tagged (`'occurrence'` ×2, `'vocab'` ×2). No other function touched; `roleFor`,
`resolveFullEntry`, `resolveClickableWord`, the WORDIDX lifecycle, `global-lexicon` onload and
`classConflict` are all unchanged.

### 2. Exact merge semantics

```
OCC_FIELDS = pron, why, case, number, person, ex, exEn, exHi

new key            → store data, tag _tier
existing key       → additive fill only (never overwrite a more specific tier's value)
tier === 'vocab'   → may claim `type` from the global fallback,
                     but NOT from a token tagged 'occurrence-typed'
```

So: occurrence tier owns its own fields and its own declared class; the chapter vocab tier owns
word CLASS against the global fallback; the Global Lexicon stays a fallback. A typeless token
no longer blocks the vocab entry — it merges with it instead of occupying the slot. Authority is
now expressed by tier, not by loop order.

### 3. KWASSERT — ALL PASS (value assertions, not counts)

| Chapter | Result |
|---|---|
| a2-9 | `wie` ×95 → badge **Conjunction** / **r-conjunction** · `wie`→r-question **0** · findings 1 ✅ |
| a1-1 | 254 clickable · all 11 plurals · findings 0 ✅ (13/13) |
| a1-9 | `morgen` authored ×2 → Adverb/r-time · `und` ×10 → Conjunction · findings 2 ✅ |
| a1-2 | findings 2 ✅ |
| a2-8 | findings 4 ✅ |
| b2-66 | `Regeln` → Noun/r-object · `Unternehmen` → Noun/r-object ✅ |

`KWASSERT.selfTest()` still 9/9, so **insertion-order independence remains true** after the real
implementation, not just in the model.

### 4. Regression corpus — exact values, no aggregate gate

Golden **0 / 2 / 2 / 4** intact. Clickability delta **zero** (A1-1 254, all 11 plurals; a2-9
1,491; a1-9 365; a2-8 1,180 — all matching pre-change). Recorded observation unchanged:
auto-linked `morgen` ×4 = Adverb/r-time.

### 5–6. Clickability + order independence

No clickability change anywhere in the corpus. Order independence holds.

### 7. Which C-A cases the new invariant now protects

Measured on a1-2: `an` → r-preposition · `mit` → r-preposition · `früh` → r-adverb ·
`viel` → r-adverb — all correct.

But these four are protected **by `classConflict`, not by the new tier invariant**: none of these
chapters authors a vocab entry for them, so the vocab tier is empty and the merge has no class
to assert. The tier model demonstrably protects `wie` (vocab present, global disagrees); it does
NOT yet replace C-A.

### 8. Can `classConflict` be retired later?

**Not yet — unchanged from §12ee.** The tier invariant only supersedes it where a chapter vocab
entry exists. For `an`/`mit`/`früh`/`viel` there is none, so removing the gate would re-open C-A
exactly as before. Retirement requires either those vocab entries being authored, or a separate
rule preventing cross-occurrence class donation when the vocab tier is absent.

`classConflict` left in place, as instructed. WORDIDX invalidation still reverted. No 259-chapter
sweep run.

## 12gg. C-A DEPENDENCY — traced. No fix needed; `classConflict` is architecturally correct.

All four traced on **b1-7-praeteritum** (which authors tokens for three of them), both an
auto-linked and an authored occurrence each. **Zero QA findings for these surfaces in that
chapter** — every occurrence already resolves correctly.

### 1. Exact traces

| Word | Authored token | Vocab | GLEX | SLEX | INF | Auto-linked occ | Authored occ |
|---|---|---|---|---|---|---|---|
| `an` | `r-verb` / `Separable prefix · Satzende` | — | Preposition | — | `denken an` | #26 → **r-preposition / Preposition** ✅ | #54 → **r-verb / Verb** ✅ |
| `mit` | none | — | Preposition | `r-preposition` | — | #263/#459/#1019 → **r-preposition / Preposition** ✅ | n/a |
| `früh` | `r-adjective` / `Adjective` | — | Adverb | `r-adverb`/`Adverb · time` | — | #156/#1110 → **r-adverb / Adverb** ✅ | #1689 → **r-adjective / Adjective** ✅ |
| `viel` | `r-akkusativ` / `Adverb` | — | *absent* | `r-adverb`/`Adverb` | — | #291/#504 → **r-adverb / Adverb** ✅ | #46 → **r-akkusativ / Adverb** ✅ |

### 2. First divergence — there isn't one

No divergence remains for any of the four. Each authored occurrence shows its own class
(`an` Verb, `früh` Adjective) while every auto-linked occurrence of the SAME surface shows the
canonical class (`an` Preposition, `früh` Adverb). `viel` even carries a semantic role
(`r-akkusativ`) on its authored occurrence and the coarse `r-adverb` elsewhere — exactly the
intended WORD CLASS ≠ SEMANTIC ROLE separation.

### 3. Do they share one mechanism? — Yes.

**The architectural question in the brief is already answered by the existing code.** Occurrence
class is preserved per-occurrence without WORDIDX donation, because the read and write sides are
separate:

```
READ  side: resolveFullEntry(t) prefers the occurrence token `t` over ANY index lookup
            → an authored occurrence never consults WORDIDX for its class
WRITE side: classConflict() prevents a conflicted token from entering the
            cross-occurrence index
            → an unrelated occurrence can never inherit that class
```

That is mechanism **E — already present** (and it is what option A describes). Options B (separate
class channel) and C (scoped WORDIDX class field) would duplicate what `resolveFullEntry`'s
`t`-priority already provides.

### 4. Minimum architectural fix

**None.** The correct action is to stop treating `classConflict` as a wart to be retired. It is
the **write-barrier half of a two-part occurrence-identity invariant**, and the tier merge
(§12ff) is a third, complementary layer that handles the case where a chapter DOES author a
vocab entry (`wie`). The three coexist by design:

| Layer | Protects |
|---|---|
| `resolveFullEntry` `t`-priority | the authored occurrence itself |
| `classConflict` write-barrier | unrelated occurrences, when no vocab entry exists |
| tier merge, vocab owns `type` | unrelated occurrences, when a vocab entry does exist |

### 5. Regression risks of changing anything here

Removing or weakening `classConflict` re-opens C-A for every surface with no chapter vocab entry
— which is the majority. §12x already demonstrated the cost empirically (92 `wie` occurrences,
4 `morgen`), and crucially the finding total did not move, so a count-based gate would have
missed it.

### 6. Redundant invariants

None become redundant. Earlier plans to retire `classConflict` "once vocab owns type" were
based on an incomplete model: vocab-owns-type only covers surfaces that HAVE a vocab entry, and
`an`/`mit`/`früh`/`viel` do not. **Retirement is not merely premature — it is wrong.**

### 7. Proposed assertion test (to add to `qa-assert.js`)

Add a b1-7 expectation block asserting BOTH occurrence classes per surface, since a
single-occurrence assertion cannot detect leakage:

```
an   authored → badge Verb        role r-verb
an   auto     → badge Preposition role r-preposition
früh authored → badge Adjective   role r-adjective
früh auto     → badge Adverb      role r-adverb
viel authored → badge Adverb      role r-akkusativ
viel auto     → badge Adverb      role r-adverb
mit  auto     → badge Preposition role r-preposition
```

This pins the invariant directly: same surface, two occurrences, two correct answers. It would
have caught the §12x regression on the first run.

No production code changed this pass. `classConflict` in place, WORDIDX lifecycle untouched, no
sweep run.

## 12hh. PERMANENT OCCURRENCE-IDENTITY ASSERTIONS — added, all pass

**File changed:** `chapter/qa-assert.js` only. No production code touched.

### What was added

A b1-7 block that asserts each surface **twice** — once on its authored occurrence and once on an
auto-linkified one — because passing both simultaneously is the only proof that neither identity
leaked through WORDIDX. Plus two structural invariant checks that verify the MECHANISM rather
than an output, and forbidden-role population checks.

### b1-7 — 15/15 PASS (1,816 occurrences)

| Assertion | Result |
|---|---|
| `an` authored ×2 | **Verb / r-verb** ✅ |
| `an` auto ×3 | **Preposition / r-preposition** ✅ |
| `früh` authored ×1 | **Adjective / r-adjective** ✅ |
| `früh` auto ×2 | **Adverb / r-adverb** ✅ |
| `viel` authored ×1 | **Adverb / r-akkusativ** ✅ |
| `viel` auto ×5 | **Adverb / r-adverb** ✅ |
| `mit` auto ×4 | **Preposition / r-preposition** ✅ |
| invariant `classConflictActive` | PASS (auto `früh` → Adverb) |
| invariant `occurrenceOutranksIndex` | PASS (authored `an` → Verb) |
| forbid `an`→r-question, `früh`→r-verb/r-question, `mit`→r-verb, `viel`→r-verb/r-question | all 0 ✅ |

`viel` is the sharpest case: **same lexical class (Adverb) on both, different semantic role**
(`r-akkusativ` authored vs `r-adverb` auto) — WORD CLASS ≠ SEMANTIC ROLE, asserted directly.

### Extended coverage

- **A1-9 `morgen` is now asserted 6/6**, not just the 2 authored: authored ×2 and auto ×4 both
  **Adverb / r-time**, plus `forbid morgen→r-object` and `→r-verb` at 0 — the two misreadings the
  §12x regression produced. That regression would now fail on its first run.
- a2-9 `wie` ×95 → Conjunction / r-conjunction, r-question 0 (tier precedence still live).
- a1-1 13/13: 254 clickable, all 11 plurals, findings 0.

### Corpus status — all PASS, zero failures

| Chapter | Occurrences | Result |
|---|---|---|
| b1-7 | 1,816 | 15/15 ✅ |
| a1-9 | 365 | 6/6 ✅ |
| a2-9 | 1,491 | 3/3 ✅ |
| a1-1 | 254 | 13/13 ✅ |
| a1-2 | 284 | ✅ |
| a2-8 | 1,180 | ✅ |
| b2-66 | — | ✅ |

`KWASSERT.selfTest()` 9/9 (insertion-order independence holds). Golden **0 / 2 / 2 / 4** intact.
`classConflict` active, WORDIDX lifecycle untouched, no invalidation, no 259-chapter sweep.

## 12ii. FULL SWEEP after tier-aware merge — current baseline

### Preconditions (all verified before starting)

Stability check live (`STABLE_SAMPLES=3`) · **no** `WORDIDX = null` · `classConflict` active ·
tier-aware merge present · KWASSERT all-PASS + selfTest 9/9.

### A–B. Totals

**259 chapters · 159,982 occurrences · 1,687 findings · 66 clean · 0 errors · 258 `stable`,
1 `hard-timeout` (correctly not measured).**

### C. By code

| Code | Now | Prev (1,682) |
|---|---|---|
| `ROLE_CONTRADICTS_BADGE` | 1,127 | 1,160 |
| `CASE_COLLISION_CAPITALISED` | 238 | 246 |
| `HEADWORD_COLOUR_MISMATCH` | 165 | 154 |
| `PARADIGM_CLASS_MISMATCH` | 76 | 47 |
| `BLACK_FALLBACK` | 45 | 45 |
| `NO_POPUP` | 22 | 20 |
| `CASE_COLLISION_LOWERCASE` | 14 | 10 |

### D. Level density

A1 269/30,700 (0.9%) · A2 134/31,187 (**0.4%**) · B1 269/30,630 (0.9%) · B2 257/43,676 (0.6%) ·
C1 266/11,901 (2.2%) · C2 492/11,888 (**4.1%**). C2 remains the outlier.

### E–F. Top 10 clusters (exact locations recorded; NOT yet traced)

| # | Cluster | n | Ch | Examples | Sample location |
|---|---|---|---|---|---|
| 1 | `CASE_COLLISION_CAPITALISED` | 238 | 76 | Essen, Können, Abends, Perfekt | a1-13#123 Essen |
| 2 | `HEADWORD_COLOUR_MISMATCH` | 165 | 33 | Nein, deutsch, Nicht, möchte | a1-4#172 Nein |
| 3 | `adjective→r-verb` | 157 | 16 | enthalten, vorbereitet, gestresst | b1-8#73 enthalten |
| 4 | `noun→r-verb` | 140 | 21 | Antworten, Essen, Spiele | a1-5#237 Antworten |
| 5 | `verb→r-preposition` | 135 | 21 | an, An, auf | a1-25#79 an |
| 6 | `adjective→r-adverb` | 114 | 15 | schade, herzlich, jährlich | a1-20#165 schade |
| 7 | `adverb→r-adjective` | 104 | 30 | richtig, kurz, rund | a1-13#106 richtig |
| 8 | `noun→r-article` (`die`) | 91 | **4** | die | c1-30#65 die |
| 9 | `PARADIGM_CLASS_MISMATCH` | 76 | 18 | Antworten, kosten, Perfekt | a1-5#237 Antworten |
| 10 | `verb→r-adverb` | 46 | 16 | mit, fern, zurück, los | a1-16#45 mit |

**No classification offered for any of these.** Per the standing rule they are prioritisation
signals only; each needs exact-index tracing before a cause is named. Cluster 8 remains
strikingly concentrated (91 findings, 4 chapters) and cluster 5 (`an`/`auf` in a1-25-trennbar,
a separable-verb chapter) is the likeliest to be authored-data rather than engine.

### G–H. Comparison and attribution

1,682 → **1,687** (+5). Clean chapters **63 → 66**. Occurrences 161,534 → 159,982.

**The tier-aware merge is attributable for essentially none of this.** It changes behaviour only
where a chapter authors a vocab entry that disagrees with the global lexicon — verified as `wie`
in a2-9 (95 occurrences held correct) and nothing else in the corpus. The ±5 movement is within
the noise of load-dependent rendering, not a measured effect. Recording this plainly rather than
claiming credit: the merge's value is that it makes precedence *insertion-order independent*, not
that it reduces counts.

### I. Regressions

**None in the golden corpus.** A1-1 0/254 · A1-2 2 · A1-9 2 · A2-8 4 · A2-9 1/1,491 — all
`stable`, all matching.

Two items to note honestly:
- `PARADIGM_CLASS_MISMATCH` rose 47 → 76 and `CASE_COLLISION_LOWERCASE` 10 → 14. Not traced;
  could be genuine newly-visible defects or load variance. **Do not assume either.**
- **b1-7 sweep-vs-isolation check (rule 9): PASSES.** Sweep reported 1,847 occurrences /
  27 findings; isolated re-run reproduced **1,847 / 27** exactly (`Perfekt` ×3 case-collisions,
  `an`, black/headword items). The earlier 1,816 reading was a mid-render capture, not a
  discrepancy. b1-7's 15 occurrence-identity assertions still pass, so its 27 findings are
  unrelated to the identity invariant.

### J. No fixes applied.

## 12jj. EXACT-INDEX TRACES — three priority clusters

### Priority 1 — `noun → r-article` / `die` (91 / 4 chapters): **ONE mechanism, confirmed**

5 traces from 2 of the 4 chapters, at exact report indices:

| Chapter | # | Container | Card headword | Badge | Role | Popup EN |
|---|---|---|---|---|---|---|
| c1-30 | 65 | `vword-de` | `das Wort / die Wörter / die Wo…` | Noun | r-article | *(empty)* |
| c1-30 | 67 | `vword-de` | same card | Noun | r-article | *(empty)* |
| c2-22 | 34 | `vword-tag` | `die Entwicklung` | Noun | r-article | *(empty)* |
| c2-22 | 44 | `vword-tag` | `die Entscheidung` | Noun | r-article | *(empty)* |
| c2-22 | 53 | `vword-tag` | `die Verantwortung` | Noun | r-article | *(empty)* |

**First divergence:** the article of a **multiword vocabulary headword** is linkified as an
independent word, then resolves to the CARD's noun entry — so badge = Noun (the card's class)
while the span correctly carries `r-article`. Popup EN is empty because the article has no
meaning of its own on that card.

Both chapters agree, and both container variants (`vword-de` headword and `vword-tag` chip)
show it. c1-30 adds a slash-composite form (`das Wort / die Wörter`) — the existing
`isCompositeFragment` guard keys on `/`, so it protects the slash case but not the plain
**space-separated** `die Entwicklung`.

**Classification:** ENGINE — tokenisation, same family as `der/die Autor/in`, second variant.
**Confidence: high** (5/5 identical, 2 chapters, 2 container types). Not extrapolated to all 91.

### Priority 2 — `adjective → r-verb` (157 / 16 chapters): **authored-data conflict**

| Chapter | # | Surface | Authored token | GLEX | INF | Badge | Role | Sentence |
|---|---|---|---|---|---|---|---|---|
| b1-8 | 73 | `enthalten` | `r-verb` / **`Adjective`** | Verb | — | Adjective | r-verb | "Ist das Frühstück im Preis enthalten?" |
| b1-8 | 79 | `enthalten` | `r-verb` / **`Adjective`** | Verb | — | Adjective | r-verb | "sogar die Halbpension ist enthalten." |

**First divergence: inside the authored token itself.** It declares `role: 'r-verb'` and
`type: 'Adjective'` — self-contradictory. Badge comes from `type`, colour from `role`, so the two
disagree by construction. No resolver, index or lexicon step is involved; both occurrences are
`authored: true`.

Linguistically the token is describing a real ambiguity: *enthalten* in "ist enthalten" is a
Partizip II functioning predicatively — defensibly either. But the engine cannot render one word
in two classes, and **the data must pick one**.

**Classification:** AUTHORED-DATA defect (C-B family, self-contradictory token).
**Confidence: high for b1-8 — but only 2 of 157 traced, in 1 of 16 chapters.** `vorbereitet`,
`gestresst`, `klimatisiert` were NOT reached; the cluster may well be heterogeneous. Do not
assume a shared cause.

### Priority 3 — `CASE_COLLISION_CAPITALISED` (238 / 76 chapters)

| Chapter | # | Surface | Authored | GLEX head | GLEX type | INF | Badge | Role | Sentence |
|---|---|---|---|---|---|---|---|---|---|
| a1-13 | 123 | `Essen` | no | **essen** | Verb | `essen` | Verb | r-verb | "Das Essen ist super!" |

**First divergence:** `normWord('Essen') → 'essen'` hits the lowercase VERB entry; the noun
*das Essen* is unauthored anywhere. Preceded by `Das`, so it is unambiguously the noun — and the
sentence even supplies the article. The capitalisation guard cannot help: it needs a noun entry
to prefer, and none exists.

**Classification:** CONTENT GAP (missing noun entry), not an engine defect — the resolver has
only one candidate and takes it.

**Confidence: LOW as a cluster verdict.** Only 1 trace obtained; `Können`, `Abends`, `Perfekt`
were not reached. `Abends` in particular is a capitalised **adverb**, not a nominalisation, so
this cluster is almost certainly heterogeneous. **Explicitly not classified beyond this one
finding.**

### Shared fixes?

| Priority | Shared fix exists? | Minimal fix |
|---|---|---|
| 1 `die` | **Yes** | Extend the composite-headword guard to space-separated multiword vocab headwords, so an article/function word inside a headword is not linkified as an independent word. Reuses `isCompositeFragment` + the existing `FUNC_WORDS` set; no new heuristic. |
| 2 `adjective→r-verb` | Not yet — needs wider tracing | Per-token data correction once the cluster is characterised; **not** an engine change. |
| 3 `CASE_COLLISION` | No | Heterogeneous; author missing nouns where genuine (`das Essen`), and trace `Abends`/`Perfekt` separately first. |

No production code changed. Golden baseline untouched.

## 12kk. PRIORITY 1 ATTEMPT — assertions added (kept), production fix REVERTED

### Files changed

| File | State |
|---|---|
| `chapter/qa-assert.js` | **kept** — new fragment-suppression assertions + 3 new chapter blocks |
| `chapter/chapter-app.js` | **reverted** — the attempted guard is gone; codebase back to last known-good |

### Assertions added (permanent, and correctly RED)

A new `notClickableIn` assertion kind: for a container selector, assert a given surface is not
linkified inside any **multiword** host. Plus blocks for c2-22, c1-30, a1-3-nominativ (standalone
`der`/`die`/`das` must stay clickable) and b2-10 (`Autor/in` suffix regression).

**Validated as a real test by confirming it fails BEFORE any fix** — c2-22 reports
`die linked as fragment 76× in .vword-de, .vword-tag` across **87 multiword hosts**, and
`forbid die→r-article: actual 81`. An assertion that passes before the fix proves nothing, so
this red state is the useful evidence. `Entwicklung` (the component noun) already passes, which
confirms the assertion is targeting only the scaffolding.

### Why the production fix was reverted

Added `isHeadwordFragment(word, node)` — suppress a `FUNC_WORDS` member when its text node sits
inside a multiword `.vword-de`/`.vword-tag` host — and wired it into `isCompositeFragment`.
**No effect: still 76 fragments linked.**

The reason is a scope/threading gap, not a logic error: `isCompositeFragment` only receives
`node` at the two call sites that were threaded earlier (§12x). The renderer that emits
vocabulary **headword** spans does not pass `node`, so `isHeadwordFragment` received `undefined`
and returned false every time. Fixing it properly requires threading the text node through the
headword render path — which is exactly the kind of change that must be scoped and gated on its
own, not smuggled in under this one.

Rather than leave an inert guard in production, it was removed. Verified after revert:
**A1-1 254 clickable, KWASSERT pass, selfTest 9/9** — last known-good state intact.

### Status

| Item | Result |
|---|---|
| Traced examples before/after | unchanged (76 fragments) — fix not effective |
| Standalone `der`/`die`/`das` | assertions written, not yet exercised (fix reverted) |
| `Autor/in` slash behaviour | untouched — slash rule never modified |
| New findings introduced | none |
| Golden corpus | **0 / 2 / 2 / 4** intact |

### Next step (one)

Thread the text node into the vocabulary-headword linkify path so `isCompositeFragment` receives
it there, exactly as `wrapWordsIn` and `germanWordSpans` already do. Then re-apply
`isHeadwordFragment` and re-run the now-red assertions — they will turn green only if the fix
genuinely works, which is the property this pass established.

## 12ll. NODE THREADING — not possible as diagnosed. There is no node to thread.

### 1. Vocabulary-headword call sites found

| Line | Call | Renders |
|---|---|---|
| 1168 | `germanWordSpans(w.art.trim(), …)` inside `el('div', {class:'vword-de'})` | headword **article**, as its own isolated call |
| 1174 | `germanWordSpans(w.art, …)` inside `el('span', {class:'vword-tag gender-…'})` | gender chip article |
| 1175 | `germanWordSpans(w.plural, { type:'Noun · plural' })` inside `el('span', {class:'vword-tag'})` | plural chip |

### 2. What was actually missing — and why threading cannot fix it

`germanWordSpans(text, contextOverride, coreferent)` takes a **string** and returns a
`DocumentFragment`. At those three call sites the spans are built **before the `.vword-de` /
`.vword-tag` host is attached to the document**, so there is no DOM text node and no ancestor
chain to inspect. `isHeadwordFragment` did not receive `undefined` because of a plumbing
oversight — it received `undefined` because **no node exists at that point in the lifecycle**.

Threading "the existing text node" is therefore not implementable here: the premise of §12kk's
next-step recommendation was wrong, and I am correcting it rather than forcing a change that
cannot work.

### 3. What the traces reveal instead (better fix, not yet applied)

The article is passed to `germanWordSpans` **on its own** — `w.art` separately from `w.de`. So
the multiword-headword context is already known **at the call site**, and does not need to be
rediscovered from the DOM at all. `germanWordSpans` even has an existing parameter for exactly
this kind of caller-supplied context (`contextOverride`, already used at line 1175 to pass
`{ type: 'Noun · plural' }`).

So the minimal fix is a **call-site signal**, not DOM inspection: mark those three calls as
rendering headword scaffolding, and let the fragment rule read that flag. That reuses an
existing parameter and an existing set (`FUNC_WORDS`), touches no resolver, and cannot affect
standalone articles — because prose articles never go through these three call sites.

### 4. Standalone article rendering — unaffected

No production change was made this pass, so standalone `der`/`die`/`das` behaviour is unchanged
by construction. Verified: A1-1 254 clickable, KWASSERT pass, selfTest 9/9, golden
**0 / 2 / 2 / 4**.

### 5. Production behaviour change: **none**

`isHeadwordFragment` remains removed, as instructed. No instrumentation was added (the call
sites were identified by reading the source). Stopping here rather than re-adding the
suppression rule.

### Next step (one, corrected)

Pass a headword-scaffolding flag through `germanWordSpans`' existing `contextOverride` at lines
1168 / 1174, then have the fragment rule suppress a `FUNC_WORDS` member when that flag is set.
The c2-22 assertions are already red (76 fragments / 87 hosts) and will only go green if that
works.

## 12mm. CALL-SITE SCAFFOLD FLAG — also ineffective. Real mechanism identified: the RE-SWEEP.

### Red state recorded before the change

c2-22: `die linked as fragment 76× in .vword-de, .vword-tag` across 87 multiword hosts ·
`forbid die→r-article: 81` · `Entwicklung` PASS.

### What was implemented, then reverted

Added a caller-declared `scaffold: true` to `contextOverride` at the two vocabulary-headword
article call sites (`.vword-de` line 1168, `.vword-tag` gender chip), and had `germanWordSpans`
emit a plain text node for `FUNC_WORDS` members when the flag is set. No DOM inference, no global
FUNC_WORDS suppression — exactly as specified.

**Result: still 76 fragments.** Reverted (0 `scaffold` references remain).

### Why — the actual mechanism, third and now conclusive

Suppressing the link at construction time cannot work, because
**`.vword-de` and `.vword-tag` are both members of `LINK_TARGETS`**:

```
LINK_TARGETS = '.de, .de-em, .vword-ex, .vword-de, .vword-tag'
```

The lexicon-onload re-sweep runs `wrapWordsIn` over every `LINK_TARGETS` container. So making
the article a plain text node at construction merely hands it to the re-sweep, which linkifies
it a moment later. Both prior attempts failed for the same underlying reason, from opposite
directions:

| Attempt | Where | Why it failed |
|---|---|---|
| §12kk `isHeadwordFragment` | DOM ancestry in `isCompositeFragment` | no node exists at construction |
| §12mm `scaffold` flag | construction-time call site | re-sweep re-links it afterwards |

**The suppression must live in `wrapWordsIn`** — the only path that runs with a real DOM node
AND is the one actually creating these 76 spans. `isHeadwordFragment`'s logic was right; it was
placed in the wrong function. `wrapWordsIn` already receives `node` (threaded in §12x), so the
plumbing exists.

### Assertions kept, still red — by design

The c2-22 / c1-30 / a1-3 / b2-10 blocks stay in `qa-assert.js` as the standing gate. They have
now correctly rejected **two** plausible-looking fixes that did not work, which is precisely
what they were built for.

### State after revert (verified)

A1-1 254 clickable · KWASSERT pass · selfTest 9/9 · golden **0 / 2 / 2 / 4** · no production
behaviour change · `Autor/in` slash rule untouched throughout.

### Next step (one, evidence-based)

Apply the `FUNC_WORDS`-inside-multiword-headword-host check in **`wrapWordsIn`**, using the
`node` it already has, gated on `node.parentElement.closest('.vword-de, .vword-tag')` with a
multiword host test. Then re-run the red assertions — 76 → 0 is the pass condition, with
`Entwicklung`, standalone `der`/`die`/`das`, and the `Autor/in` fragment all still asserted.

## 12nn. SCAFFOLD FLAG NOW WORKS — but `wrapWordsIn` re-links. Emitter positively identified.

### Gate A: FAILS — 76 fragments, unchanged. Gates B–D not run (per protocol).

### But the fix half-worked, and the class signature proves which half

Before → after markup for the same `.vword-de`:

```
before:  <span class="de-link wp-inline-link r-article">die</span>
after:   <span class="de-link r-article">die</span>          ← wp-inline-link GONE
         <span class="de-link wp-inline-link r-object">Entwicklung</span>  ← unchanged
```

`wp-inline-link` is added **only** by `germanWordSpans`. Its disappearance on `die` — while
`Entwicklung` keeps it — proves the scaffold flag on the term/plural call sites **is firing
correctly and suppressing exactly the right word**. Requirements hold: `Entwicklung` ×6 and
`Entwicklungen` ×1 still clickable, 87 multiword hosts intact, 559 total occurrences.

### The emitter is `wrapWordsIn`, now on evidence rather than theory

A bare `de-link` with no `wp-inline-link` is `wrapWordsIn` output. `.vword-de` and `.vword-tag`
are both in `LINK_TARGETS`, so the lexicon-onload re-sweep walks them and re-links the plain
`die` text node that `germanWordSpans` deliberately left as text.

This is the same conclusion I asserted in §12mm and then withdrew as unfounded — it was the right
mechanism reached by wrong reasoning. It is now established by the class signature, not inferred
from a failed edit.

### Where the remaining fix belongs

`wrapWordsIn` — which already receives `node` (§12x). The `isHeadwordFragment(word, node)` logic
from §12kk was correct; it was placed in `isCompositeFragment`, reachable from both paths, but
only ever exercised where no node existed. Applied inside `wrapWordsIn`, gated on
`closest('.vword-de, .vword-tag')` + multiword host + `FUNC_WORDS`, it completes the pair:
construction-time suppression (done, working) plus re-sweep suppression (remaining).

Both halves are needed because both paths independently create these spans.

### State

Production: scaffold flag live on the term/plural call sites and demonstrably correct;
`w.art` flags reverted (wrong path); `headwordCtx()` helper added. Gate A still red, so the
change is **not accepted**. No golden/KWASSERT run, nothing rebaselined, `Autor/in` slash rule
untouched.

## 12oo. MULTIWORD-HEADWORD FRAGMENT FIX — COMPLETE. All gates green.

### Files / functions changed

**`chapter/chapter-app.js`**
- `headwordCtx(str, base)` — adds `scaffold: true` only when the string is genuinely multiword.
- `contextOverride.scaffold` handling in `germanWordSpans` — suppresses only `FUNC_WORDS`
  members, only when the caller declares scaffolding.
- `isHeadwordScaffold(word, node)` — the re-sweep half; four required conditions (real DOM node,
  `.vword-de`/`.vword-tag` host, multiword host, `FUNC_WORDS` member).
- Flags on the three headword render paths (`w.art`, `term.slice(…)`, `w.plural`) and the guard
  wired at the two `wrapWordsIn` call sites.

**`chapter/qa-assert.js`**
- `notClickableIn` assertion kind (fragment suppression, scoped to multiword hosts).
- Blocks for c2-22, c1-30, a1-3-nominativ, b2-10.
- Two over-broad `forbid die→r-article` assertions removed — they forbade the role
  chapter-wide, so they could only pass by breaking genuine prose articles.
- A1-1 clickability rebaselined 254 → 242 with an in-file justification.

### Why two halves were required

Both paths independently create these spans: `germanWordSpans` at construction, and
`wrapWordSpans`/`wrapWordsIn` again on the lexicon-onload re-sweep (`.vword-de` and `.vword-tag`
are in `LINK_TARGETS`). Suppressing in only one place left every fragment in place. Diagnosed
from the class signature — `wp-inline-link` present = `germanWordSpans`, absent = `wrapWordsIn`.

Three wrong turns are recorded in §12kk–12nn: DOM ancestry at construction (no node exists),
flagging `w.art` only (c2-22 cards have no `w.art`), and reverting the `w.art` flag (c1-30 cards
do). The chapters exercise **different rendering branches**, which is why all three call sites
needed flagging.

### Fragment counts

| Chapter | Before | After |
|---|---|---|
| c2-22 | 76 | **0** |
| c1-30 | 5 | **0** |
| A1-1 | 12 | **0** |

Multiword hosts preserved everywhere (87 / 10 / 24). Lexical components all still clickable
(`Entwicklung` ×6, `Entwicklungen`, `Wort` ×9, `Wörter` ×10, `Worte` ×11, and A1-1's 12 nouns).

### Final golden gate — ALL PASS

| Chapter | Occurrences | Findings | Expected | Assertions |
|---|---|---|---|---|
| A1-1 | **242** | **0** | 0 | 13/13 ✅ |
| A1-2 | 278 | **2** | 2 | ✅ |
| A1-9 | 354 | **2** | 2 | ✅ |
| A2-8 | 1,135 | **4** | 4 | ✅ |
| A2-9 | 1,436 | **1** | 1 | ✅ |
| c2-22 | — | — | — | ✅ |
| c1-30 | — | — | — | ✅ |
| selfTest | — | — | 9/9 | ✅ |

Gate C (standalone `der` 10 / `die` 15 / `das` 10 in a1-3, none inside a headword host) and
Gate D (`Autor/in` protection intact, `Autor` ×4 and prose `in` ×5 still clickable) both passed
earlier and are unaffected.

**A1-1 baseline is now 242.** Golden corpus: **A1-1 = 0 · A1-2 = 2 · A1-9 = 2 · A2-8 = 4 ·
A2-9 = 1**.

Occurrence totals fell in every chapter by exactly one article per multiword headword host — the
intended effect, not collateral.

**259-chapter sweep NOT run** — pending approval.

## 12pp. FULL SWEEP after the fragment fix — new baseline

### Totals

**259 chapters · 156,291 occurrences · 1,582 findings · 68 clean · 259/259 `stable` ·
0 timeouts · 0 errors.**

First sweep in this campaign with **no hard-timeouts and no errored chapters at all**.

### Before → after by code

| Code | Prev (1,687) | Now (1,582) | Δ |
|---|---|---|---|
| `ROLE_CONTRADICTS_BADGE` | 1,127 | **1,028** | −99 |
| `CASE_COLLISION_CAPITALISED` | 238 | 230 | −8 |
| `HEADWORD_COLOUR_MISMATCH` | 165 | 163 | −2 |
| `PARADIGM_CLASS_MISMATCH` | 76 | 80 | +4 |
| `BLACK_FALLBACK` | 45 | 45 | — |
| `NO_POPUP` | 22 | 22 | — |
| `CASE_COLLISION_LOWERCASE` | 14 | 14 | — |
| **TOTAL** | **1,687** | **1,582** | **−105** |

Clean chapters 66 → **68**. Occurrences 159,982 → 156,291 (−3,691).

### Attribution — directly caused vs merely correlated

**Directly attributable (verified at occurrence level):**
- c2-22 fragments 76 → 0; sweep confirms the chapter at **447 occurrences / 3 findings**.
- c1-30 fragments 5 → 0; sweep confirms **330 / 2**.
- A1-1 fragments 12 → 0; sweep confirms **242 / 0**.
- The −3,691 occurrence drop is the fix by construction: one suppressed article per multiword
  headword host, curriculum-wide.

**Correlated but NOT attributed:** the −99 `ROLE_CONTRADICTS_BADGE`. Suppressed fragments can no
longer be flagged, so some of that is mechanical; the rest is not traced. `noun→r-article`
(previously 91 / 4 chapters) has **left the top-10 entirely**, which is consistent with the fix
since that cluster WAS the `die` fragments — but the exact residue was not counted.

**Not explained: `PARADIGM_CLASS_MISMATCH` +4.** Small, but it moved in the wrong direction and
is untraced. Do not assume noise.

### Level density

A1 273/29,535 (0.9%) · A2 132/30,238 (0.4%) · B1 272/30,946 (0.9%) · B2 255/42,365 (0.6%) ·
C1 253/11,769 (2.2%) · C2 397/11,438 (**3.5%**). C2 still the outlier but improving (4.1% → 3.5%).

### Top clusters with exact locations (NOT classified)

| # | Cluster | n | Ch | Sample locations |
|---|---|---|---|---|
| 1 | `CASE_COLLISION_CAPITALISED` | 230 | 75 | a1-13#123 Essen · a1-15#794 Können · a1-19#473 Abends |
| 2 | `HEADWORD_COLOUR_MISMATCH` | 163 | 35 | a1-4#171 Nein · a1-7#243 Nein · a1-7#328 Nein |
| 3 | `adjective→r-verb` | 155 | 15 | b1-8#73/#79 enthalten · b1-35#38 vorbereitet |
| 4 | `noun→r-verb` | 137 | 24 | a1-5#230 Antworten · a1-15#113/#115 Essen |
| 5 | `adverb→r-adjective` | 132 | 32 | a1-13#106/#110/#235 richtig |
| 6 | `verb→r-preposition` | 131 | 21 | a1-25#79/#118/#124 an |
| 7 | `adjective→r-adverb` | 108 | 14 | a1-20#160 schade · a1-34#146 herzlich |
| 8 | `PARADIGM_CLASS_MISMATCH` | 80 | 22 | a1-5#230 Antworten · a1-15#158 kosten |
| 9 | `verb→r-adverb` | 46 | 16 | a1-16#45/#77 mit · a1-25#101 fern |
| 10 | `BLACK_FALLBACK` | 45 | **6** | b1-5#697 der · #698 hohen · #699 Armut |

`BLACK_FALLBACK` is newly informative: all 45 sit in just **6 chapters**, and the b1-5 samples are
consecutive indices (697/698/699) — a contiguous run, suggesting one container rather than 45
independent defects. That is the cheapest remaining trace.

### Golden corpus — all match

A1-1 242/0 · A1-2 278/2 · A1-9 354/2 · A2-8 1,135/4 · A2-9 1,436/1 — every one `stable`.

### Measurement issues

**None.** 259/259 stable, zero timeouts, zero errors — the stability signature plus the
WORDIDX-race avoidance held across the whole run. No readiness inconsistency observed.

No production or QA change made during the sweep.

## 12qq. BLACK_FALLBACK — static analysis finds THREE missing CSS declarations

### b1-5 (proven, 18 findings)

18 findings at indices 697–741, all `r-genitiv`. Traced four (697 `der`, 698 `hohen`, 699 `Armut`,
709 `des`): all authored tokens with correct roles (`Artikel · Genitiv`, `Adjective · Genitiv`,
`Noun · fem.`), span class correctly `rw de r-genitiv`, **span colour `rgb(14,14,16)` ink**,
popup headword correctly `rgb(160,107,44)` genitiv brown.

Divergence: `.r-genitiv` has **no CSS rule**. A bare `.r-genitiv` span computes to inherited ink;
the only matched rules are `.de {}` and `.reading-passage .rw {}`, neither setting colour. The
popup is right because it applies `--g-genitiv` as an inline style.

### Static analysis instead of chapter-by-chapter sampling

Rather than re-run the sweep to locate the other 5 chapters, diffed `chapter.css` directly —
which answers the question completely and cannot miss an occurrence:

```
.r-*  declarations : 31
--g-* colour tokens: 31
```

**Tokens that exist but have NO `.r-*` rule — exactly 3:**

| Role | `--g-*` token | CSS rule | Mechanism |
|---|---|---|---|
| `r-genitiv` | ✅ `--g-genitiv` | ❌ **missing** | ink fallback on span, correct popup |
| `r-auxiliary` | ✅ `--g-auxiliary` | ❌ **missing** | same |
| `r-possessive` | ✅ `--g-possessive` | ❌ **missing** | same |

Every other role has both a token and a rule. So the entire `BLACK_FALLBACK` population can only
come from these three roles — no other role is capable of producing this defect, and no
extrapolation from b1-5 is needed to establish that.

This is stronger than sampling: it is exhaustive over the mechanism rather than over occurrences.
What it does NOT establish is the per-role split of the remaining 27 (whether they are
`r-auxiliary`, `r-possessive`, or more `r-genitiv` in other chapters) — only that all 45 must be
one of these three.

### Classification

**B — rendering defect.** Three missing declarations. Authored data correct, resolver correct,
roles canonical, colour tokens present, popup correct. Purely the span-side CSS.

Note all three are exactly the roles a learner needs most in case/possession teaching: genitive,
auxiliary verbs, possessive articles.

### Proposed minimal fix (CSS only, 3 lines, grouped by role)

```css
.r-genitiv { color: var(--g-genitiv); }
.r-auxiliary { color: var(--g-auxiliary); }
.r-possessive { color: var(--g-possessive); }
```

No new colour token, no new role, no resolver or detector change. Placed with the existing
`.r-akkusativ` / `.r-dativ` case siblings.

NOT IMPLEMENTED — awaiting approval.

## 12rr. CASE_COLLISION_CAPITALISED — taxonomy trace (240 findings / 77 chapters)

### Historical +10: UNPROVABLE, closed

`persistRun()` was added AFTER both the 1,582 and 1,479 sweeps, so no pre-CSS artifact exists.
Only `sweep-2026-08-12T18-28-07-464Z` (the 5-chapter validation) is persisted;
`qa-cluster-locations.json` covers different clusters. **The +10 cannot be proven from available
artifacts and is closed as unprovable** — not carried forward as an open defect. From the next
full sweep onward the diff is mechanical.

### Three distinct mechanisms proven (do NOT treat as one cluster)

**M1 — Grammar-term nominalisation. `Perfekt` (~90, the single largest surface).**
Traced b1-7 #5/#7/#8: no authored token, `GLEX['perfekt'] = {w:'perfekt', type:'Adjective',
en:'perfect'}`, no inflection entry, badge **Adjective**, role `r-adjective`, popup EN empty.
First divergence: `normWord('Perfekt') → 'perfekt'` hits the lowercase ADJECTIVE. The
grammatical term **das Perfekt** (the perfect tense) is unauthored anywhere.
Learner impact: a B1 tense chapter teaches its own subject as the adjective "perfect".
**CONTENT GAP** — resolver correct, only one candidate exists.

**M2 — Nominalised infinitives. `Lesen`/`Schreiben`/`Sprechen`/`Hören` (~30), `Essen` (~25).**
Traced b1-35 #10/#11/#12/#631: `GLEX` holds the lowercase VERB (`hören`, `schreiben`,
`sprechen`), badge **Verb**, role `r-verb`; `KW_INFLECTIONS` maps the surface to the verb lemma
for two of the four. These are the four Goethe **exam skill labels** — `das Hören`, `das
Schreiben` — rendered as section headings.
First divergence: same lowercase collapse, but the target is a verb rather than an adjective,
and the inflection index reinforces it. **CONTENT GAP**, same shape as M1, different POS.

**M3 — English all-caps emphasis labels. `ORIGINAL` (4, b2-61 only).**
Traced #1/#193: context is **English prose** — "German preserves the ORIGINAL speaker's time",
"Indirect speech reports NOT when…". `GLEX['original'] = {type:'Adjective'}`, badge
"Adjective|B1", role `r-adjective`.
First divergence: the **language gate**. All-caps English emphasis inside explanatory prose is
being linkified as German because `ORIGINAL`/`NOT` are also valid German surfaces. This is the
§14 Decision-2 language-context family (`fast`, `will`, `name`), not a capitalisation defect at
all — the detector code is misleading here.
**ENGINE/ARCHITECTURE**, and the only one of the three that is not a content gap.

### Counts — measured vs estimated

| Mechanism | Measured | Basis |
|---|---|---|
| M1 `Perfekt` | **11** in b1-7 | exact trace |
| M2 skill labels | **12** in b1-35 | exact trace |
| M3 `ORIGINAL` | **4** in b2-61 | exact trace, complete for this surface |
| M1+M2 curriculum-wide | ~145 by surface name in the 240-location export | **NOT individually traced** |

The ~145 figure comes from reading surfaces in the exported location list, not from tracing each
occurrence. Stated as an estimate, deliberately.

### Unresolved population

~95 findings across long-tail surfaces (`Können`, `Abends`, `Grüßen`, `Echt`, `Wirklich`,
`Hier`, `Kosten`, `Unternehmen`, `Andererseits`, `Dennoch`, `Ferner`, `Vielleicht`, `Smart`,
`Grün`, `Lang`, `Neu`, `Heute`, `Worauf`…) are **untraced**. Several (`Abends`, `Hier`, `Heute`,
`Vielleicht`, `Dennoch`, `Ferner`) are capitalised ADVERBS, not nominalisations — likely a fourth
mechanism. Not classified.

### Regression?

**No production regression demonstrated.** All three proven mechanisms are pre-existing; two are
authoring absence, one belongs to an already-logged architectural decision. The 240 baseline
stands.

### Recommended next single fix

**M3 / the language gate**, despite being the smallest (4 findings). It is the only proven
ENGINE defect of the three, it is learner-visible (English prose rendered as clickable German),
and it belongs to a decision already documented in §14. M1 and M2 are curriculum authoring work
requiring German-language sign-off — correct to log, wrong for me to invent.

## 12ss. CORPUS-WIDE AUTHORED-LANGUAGE AUDIT (read-only)

### A. Leakage population

Grep across all 259 data files for German-typed fields (`de`/`ex`/`ex2`/`sentence`/`front`/
`answer`/`solution`) containing English markers. **~14 definite cases across ~11 B2 chapters.**
No A1/A2/B1/C1/C2 leakage found by this pattern — the population is confined to one authoring
style used in B2 `revisionTips`-like arrays.

### B. Definite leakage — all one structural shape

Every case is a `{ de: …, text: … }` pair where `de` holds an **English study-tip fragment**
instead of German:

| Chapter | Authored `de:` value |
|---|---|
| b2-61 | `'Original event time ≠ reporting time'` |
| b2-38 | `'Every relative pronoun belongs to ONE noun'` · `'Find the main clause first'` |
| b2-38 | `'Main clause → clause 1 → nested clause 2 → main clause resumes'` |
| b2-40 | `'Never learn the verb alone'` |
| b2-41 | `'Never learn the noun alone'` |
| b2-07 | `'Remove it — does the sentence still work?'` |
| b2-46 | `'Talking about WHO? vs THE ACTION?'` |
| b2-50 | `'Genitiv/von-construction for the acted-upon object'` · `'Common in reports, theses, and Goethe B2 Writing'` |
| b2-34 | `'Both connectors: verb at the end'` · `'als (one past event), wenn (repeated/future)'` |

Sibling entries in the same arrays hold genuine German (`'Ich lerne, während Rohan arbeitet.'`,
`'Heute wird gearbeitet.'`), which is what makes these detectable as anomalies rather than a
deliberate convention: the field is German-typed and mostly used correctly.

### C. Intentional / uncertain — NOT defects

- **German nouns of English origin**: `Event`, `Highlight`, `Festival`, `Basketball` (a1-16,
  b2-17, b2-18). Correctly authored German vocabulary with `art`/`gender`/`plural` — `das Event`,
  `die Events`. Must NOT be flagged.
- **Bilingual compounds**: `Reporting-Verb`, `Veranstalter/in`. Legitimate German usage.
- **Mixed technical strings**: `'während + Genitiv'`, `'wichtig → die Wichtigkeit'`. Intentional
  grammar notation.

### D. b2-61 exact correction proposal

`chapter-b2-61-indirekte-rede-zeitverschiebung-data.js` line 179:

```js
{ de: 'Original event time ≠ reporting time',
  text: 'Distinguish when the action happened from when it is being reported' },
```

The surrounding entries pair a **German example** with an **English task description** in `text`.
So the intended shape is a German string in `de` — e.g. the chapter's own
`'Ereigniszeit ≠ Berichtszeit'` — with the English staying in `text`. **The correction is
curriculum authoring, not a mechanical edit**, so the German wording needs sign-off; that is why
no change was made.

Confirmed mechanism: the harvest walk found `field: "de"` →
`"Original event time ≠ reporting time"`, which is exactly how `original` enters
`AUTHORED_GERMAN()`. All 4 `ORIGINAL` spans are `inDe: false` (auto-linkified prose, not `.de`
content), so removing that string from the German-typed field removes their only admission
route. Not verified by mutation — production data was not touched.

### E. Is `ORIGINAL` the only observed learner-facing consequence?

**No — but it is the only one currently measured.** Each leaked string injects ALL of its words
into that chapter's authored-German set: `the`, `and`, `is`, `main`, `clause`, `alone`, `first`,
`WHO`, `ACTION`… Any of those appearing in that chapter's prose becomes linkifiable. `ORIGINAL`
surfaced only because it also collides with a German adjective and is ALL-CAPS, so
`CASE_COLLISION_CAPITALISED` caught it. Lowercase English admitted the same way produces no
detector code at all — **an unmeasured population**, not a proven-empty one.

### F. Can a reusable assertion detect this safely?

**Yes, with one specific rule** — and the naive version would be wrong. "ASCII-only" or
"contains English words" both flag `Event`, `Highlight`, `Basketball`, which are correct German
nouns.

The safe signal is **English function words**, which never appear in German learner strings:
`the`, `and`, `is/are/was`, `of`, `to`, `for`, `with`, `that`, `does`, `it`. Every definite case
above contains at least one; every intentional case contains none. Proposed as a
**data-lint assertion** over chapter data (no DOM, no sweep cost), not a QA-engine detector —
this is an authoring defect, and the check belongs where the data is.

No files modified. Baselines unchanged: 1,479 findings, `CASE_COLLISION_CAPITALISED` = 240.

## 12tt. LEAK IMPACT ANALYSIS — the finding count understates it 3×

### G. b2-61 detailed impact (measured, not mutated)

Reproduced the `AUTHORED_GERMAN()` harvest with source attribution, then measured rendered
consequences.

`'Original event time ≠ reporting time'` injects **4 surfaces**: `original`, `event`, `time`,
`reporting`. **All 4 are sole-source** — no other German-typed field in the chapter contributes
them, so each exists in the German set *only* because of this leak.

Rendered consequences:

| Surface | Linkified | Inside `.de` | Class | Population |
|---|---|---|---|---|
| `original` | **12** | 0 | `de-link wp-inline-link r-adjective` | 4 = A, 8 = **B** |
| `event` | **1** | 0 | `de-link wp-inline-link r-object` | **B** |
| `time` | 0 | — | — | C |
| `reporting` | 0 | — | — | C |

**`ORIGINAL` ×4 was NOT the complete consequence — it was one visible subset of 13.**

- **Population A** (defect + QA finding): 4 — the ALL-CAPS `ORIGINAL`, caught only because it
  also collides with a German adjective and is capitalised.
- **Population B** (learner-visible, **QA reports nothing**): **9** — 8 lowercase `original` plus
  1 `Event`. English words in English prose, clickable, opening German popups. No detector code
  fires because badge and role agree; they are simply agreeing about an English word.
- **Population C** (no rendered consequence): 2.

`inDe: 0` for every one — none is authored German content; all are auto-linkified prose admitted
solely through the poisoned harvest.

### F. Silent unintended linkifications

**9 in b2-61 alone**, versus 4 QA findings. This is the third independent confirmation that
finding counts cannot bound learner-facing damage — after §12cc (92 wrong occurrences, count
unmoved) and §12nn.

### A–C. Remaining 13 leaks — NOT individually measured

Only b2-61 was traced to rendered occurrences. The other 13 strings inject an estimated ~60–80
surfaces (`the`, `and`, `is`, `main`, `clause`, `alone`, `first`, `remove`, `does`, `work`,
`talking`, `action`…). Per-surface A/B/C classification for those is **unmeasured** — stated as
unknown rather than extrapolated from b2-61's 4:9:2 ratio.

What the b2-61 trace does establish generally: **sole-source injection is the norm** (all 4 of 4
here), so each leaked string is likely the only reason its words are clickable in that chapter.

### H. Is correcting the 14 fields sufficient?

**No.** Correcting them fixes today's instances but nothing prevents recurrence, and the failure
is invisible to QA by construction — Population B produces no code. Any future English string in
a `de:` field silently re-poisons that chapter's German set. **A data-lint guard is required as
well as the corrections**, and the guard matters more than the corrections.

### I. Proposed assertion design (NOT implemented)

A **data-lint over chapter data**, not a QA-engine detector — no DOM, no sweep cost, runs in
milliseconds over the 259 data files:

```
FOR each German-typed field (w, de, ex, ex2, sentence, front, answer, solution)
  IF the value contains an English FUNCTION word
     (the|and|is|are|was|were|of|to|for|with|that|does|it|from|when|which)
  THEN report { chapter, field, value, offending word }
```

Function words are the safe discriminator, proven against both populations: every one of the 14
definite leaks contains at least one; none of the legitimate German-origin nouns (`Event`,
`Highlight`, `Festival`, `Basketball`, `Reporting-Verb`, `Veranstalter/in`) contains any. A
naive "ASCII-only" or "looks English" rule would flag all of those and be immediately abandoned.

No files modified. Baselines unchanged: 1,479 findings, `CASE_COLLISION_CAPITALISED` 240.

## 12uu. DATA-LINT IMPLEMENTED — `chapter/qa-data-lint.js`

Data-level only. No DOM, no sweep path, no production rendering code touched.

### A–B. Violations found (8 target chapters)

**17 violations · 3 review**, e.g. b2-38 `'Find the main clause first'` [the] · b2-07
`'Remove it — does the sentence still work?'` [it, does, the] · b2-50
`'Genitiv/von-construction for the acted-upon object'` [for, the] · b2-46
`'Talking about WHO? vs THE ACTION?'` [the] · b2-34 `'Both connectors: verb at the end'` [the].

More than the 14 originally grepped — the lint found additional entries in the same arrays.

### C. ⚠ KNOWN BLIND SPOT — b2-61 is NOT detected

**The approved function-word set does not catch the case that started this investigation.**
`'Original event time ≠ reporting time'` is four CONTENT words with no function word at all.

The self-test caught this before validation, and it is recorded as `knownBlindSpot_b261` rather
than patched: widening the set to catch it (adding `time`, `event`) would immediately flag the
legitimate German nouns **das Event** and Zeit-compounds — precisely the false-positive class the
function-word discriminator was chosen to avoid. **Coverage is 8 of 9 known leak strings.**

b2-61 needs a second, independent signal — proposed: a German-typed field with no German
diacritic AND no surface in the chapter's own vocab. Separate design decision, NOT implemented.

The two violations the lint *does* report in b2-61 (L387/L389, `was`) are **false positives**:
genuine German using "was" (= what). Flagged `violation` because those strings happen to carry
no diacritic. `was` is the weakest entry in the approved set.

### D. False-positive check — 10/10 clean

`Event` · `Highlight` · `Festival` · `Basketball` · `Veranstalter/in` · `Reporting-Verb` ·
`während + Genitiv` · `'Das Event ist am Samstag.'` · `'Wir spielen Basketball.'` — none
triggers.

### E. Self-test — PASS (17 assertions)

Boundary handling proven: `the` matches standalone but not inside `Theater`/`Themen`; `it` does
not match inside `mit`; `of` not inside `hoffen`; umlaut-adjacent boundaries clean;
case-insensitive `THE`/`Does` caught; post-punctuation matching works.

### F–G. No production change; golden corpus untouched

One new file. `chapter-app.js`, `chapter.css`, `qa-engine.js`, `qa-assert.js` unchanged.
Baselines frozen: 1,479 findings, `CASE_COLLISION_CAPITALISED` 240, golden 242/0 · 278/2 ·
354/2 · 1135/4 · 1436/1.

### Honest assessment

The lint is useful but **not sufficient**: it misses b2-61 entirely and produces 2 false
positives on `was`. Both are properties of the approved function-word set, surfaced by the
self-test rather than discovered later in production. Before relying on it as a gate, `was`
should be reconsidered and the b2-61 blind spot closed by a second signal.

---

## 13. Defect protocol

1. Reproduce. 2. Identify exact root cause. 3. Classify: CSS / renderer / resolver / data /
tokenization / popup metadata / content. 4. Fix the **shared** cause. 5. Re-test the original
occurrence. 6. Regression-test at least 2 other occurrences using the same mechanism.
7. Continue sequentially.

Shared-fix verification levels: current chapter → another chapter using the component
heavily → a chapter using it differently → a chapter where it does not exist ("not
applicable" is an acceptable result, not a failure).

If a schema/architecture decision is required: **STOP** before implementing a partial
workaround and report what is missing, why, the affected layer, proposed solution, and scope.

---

## 14. Content gap ledger

1. `gut` — missing authored `compare` (should be gut / besser / am besten).
2. `rot` — missing authored `compare`.
3. `üben` — still on legacy flat conjugation schema.
4. ~~`ei` / `ie` / `sch`~~ — **RESOLVED** this session via mistake-row tokens (§14).
   The A1-1 sound-rule rows teach the digraphs as orthographic units, but the chapter
   authors Letter/Sound entries only for single letters and `ts`. `ei` therefore falls
   through to the global noun `Ei` — a learner studying the *ei* spelling rule is told it
   means "egg". `ie` / `sch` have no dictionary entry so they stay unlinked (inconsistent,
   but harmless). **This is the only logged gap that produces actively wrong teaching.**
   Fix = author them exactly like the existing `ts` entry (established in-chapter pattern,
   no new schema); the chapter's own `why` text already states the facts. Not done here
   because Hindi glosses and pronunciation are curriculum content — needs sign-off.
5. `Liebe` — no authored `plural`, so the noun now renders no paradigm at all (previously
   masked by the false `lieben` conjugation, fix 13). Absence, not fabrication.
6. `Eis` (grammar citation occurrence) — invariant noun with no authored occurrence number
   metadata, so the engine correctly renders 0 active cells.
7. `Weber` · the spelled letters `R` `O` `H` `A` `N` · `A` (Speaking) — popup opens with no
   Example section (no authored `ex`). Engine correct; content absent.
8. `buchstabiere` (Speaking, imperative) — Verb badge, no conjugation and no example. Same
   imperative gap as `Frag` in A1-9: imperatives are absent from the inflection index.
9. `dein` / `deinen` / `meinen` and the possessive determiners generally — no authored
   declension data of their own. Until fix 16 they silently borrowed the PERSONAL pronoun's
   table (du/dich/dir, ich/mich/mir); they now correctly show no paradigm. Authoring a real
   possessive-determiner paradigm (4 cases × 3 genders) is a curriculum data decision.

### Content DEFECTS fixed this session (not gaps — wrong data, corrected)

- `chapter-a1-1-data.js` takeaway 1 wrapped the ENGLISH word "name" in
  `<span class="de r-question">`, marking English prose as German learner content and
  linking it as the German noun `Name`. The wrapper was removed; the sentence is unchanged.
- `story-lexicon.js` `willkommen` — see §10a.

Do not fabricate. These are **not** engine defects. Future Coverage backlog lives in
`chapter/FUTURE_COVERAGE.md` (surface form · expected lemma · reason · missing data source ·
suggested future solution).

### ⚠ ARCHITECTURAL DECISION REQUIRED — `roleFor` never consults the Global Lexicon's word class

Surfaced by the corrected scan on A2-8/A1-9. **Not implemented — stopped per §13** (schema/
architecture decision, high blast radius, and out of audit sequence).

**What is missing.** `storyTokenFor()` resolves a role through: `KW_STORY_LEX` → **chapter-
local** vocab (`lookupWord`/`WORDIDX`) → `STORY_LEX` → `guessRole()`. `KW_GLOBAL_LEXICON` —
which holds authoritative `type` (word class) for thousands of entries — is never consulted
for the role. So any word absent from *the current chapter's own* vocab falls to the
morphological guess even when the dictionary already knows its part of speech.

**Evidence (A2-8).**

| Surface | Global Lexicon `type` | Rendered role | Why the guess misfires |
|---|---|---|---|
| `war` | Verb | `r-adverb` (cyan) | 3 letters, matches no verb-ending rule → `guessRole` catch-all |
| `größte` | Adjective | `r-verb` (red) | ends in `-te` → matched as a conjugated verb |
| `und` (A1-9) | Conjunction | `r-preposition` | rendered class contradicts dictionary class |

`waren` / `warst` render `r-verb` correctly — purely because they happen to match an ending
rule. The same lemma is coloured correctly or incorrectly by accident of spelling length.

**Affected layer.** `storyTokenFor` / `roleFor` in `chapter-app.js` — the same single
resolution point as fixes 12 and 13, one tier further down.

**Proposed solution.** Insert a Global-Lexicon POS tier between the chapter-local vocab
lookup and `guessRole()`: `POS_ROLE[wordClassOf(KW_GLOBAL_LEXICON[key].type)]`. Authored
and chapter-local sources keep precedence; the morphological guess drops to true last
resort, which is what its own comment already claims it is ("Last-tier morphological
heuristic").

**Scope / risk.** Would change rendered colours in **every one of the 258 chapters** —
always from a guess toward an authored dictionary class, but it must not be done blind
mid-audit. It would also partly overlap the `Willkommen` conflict above (badge and colour
would then read from the same source). Recommend: decide explicitly, then run the full
`KWAudit` sweep before and after across a sample of chapters per level.

### ✅ DECISION 2 — language-aware rendering: RESOLVED (gate now, `.de` per chapter)

**Implemented.** `resolveClickableWord(word, gated)` now requires a gated-prose surface to
appear in `AUTHORED_GERMAN()` — the set of surfaces THIS chapter authors in German-typed
fields. The schema already carried the signal in its field names (`w`/`de`/`ex`/`ex2` are
German; `en`/`hi`/`why`/`body`/`html`/`hinglish`/`note` are explanation), so no schema change
was needed. Built once per page and memoized.

Verified on A1-1: `fast`, `will`, `an`, `name` → 0 links; `Eis`, `Zeit`, `Straße`, `Buch`,
`wie`, `ts` still linked; Hinglish card → 0 links. The orthographic lowercase-Noun safeguard
is retained behind the gate as a second line.

**Migration path (the agreed plan):** `<span class="de">` in prose is a `LINK_TARGET` and is
never gated, so it remains the explicit override. As the audit reaches each chapter, wrap
that chapter's genuine prose German in `.de` to restore it permanently. Measured backlog:
~19 distinct genuine prose words in A2-8, 1 in A1-1 (`Liebe`).

### ✅ DECISION — `ei` / `ie` / `sch`: RESOLVED (mistake-row tokens)

**Implemented.** Mistake rows accept optional `wrongTokens` / `rightTokens`, mirroring the
`exTokens` pattern already used beside example strings in the same data files. Rows without
them render exactly as before (`mistakeSide()` falls back to the old html interpolation), so
no existing chapter changes.

A1-1's sound rules now author `ei`, `ie` and `sch` as `role: 'r-letter', type: 'Sound'`, with
every value transcribed from the chapter's own text and `hi` following the established
`'"ts" ध्वनि'` formula. `ei` now reads *the "ei" sound / "ei" ध्वनि / Sound* with no paradigm —
the "egg" reading is gone. A fourth row was added for `sch`, which the section's own body text
already promised ("Learn these five") but never showed.

Per-occurrence was required rather than a shared lexicon entry: lexicon surfaces normalise to
lowercase and **`Ei` (egg) is genuine A1-14 vocabulary**, so a curriculum-wide `ei` key would
have broken it.

**Not implemented — stopped per §13.** Investigation complete; the choice below changes
learner-facing interactivity in all 258 chapters either way.

**Root cause.** `LINK_TARGETS_GATED` (`.mistake-why, .grammar-text, .grammar-table-cell,
.takeaway, .resource-desc, .lede`) sweeps whole prose containers and resolves every word
against the GLOBAL dictionary. Those containers hold English/Hinglish explanation, so every
English word that is also a German word links. The only language signal in the guard is
orthographic (reject a **Noun** entry matched against an all-lowercase surface). `fast` is an
**Adverb**, so it passes.

**`lang` is not available as a gate:** `lang="en"` exists ONLY on `<html>` — the whole
document, German included. Verified live: `document.querySelectorAll('[lang]').length === 1`.

**What the schema already provides.** Two mechanisms exist and neither needs inventing:
1. `<span class="de">…</span>` inline markup — explicit "this is German" inside prose, already
   honoured via `LINK_TARGETS` regardless of gating. Used in A1-1 for 10 of 25 prose links.
2. **Field names already encode language**: `w` / `de` / `ex` / `ex2` are German; `en` / `hi` /
   `exEn` / `exHi` / `why` / `body` / `html` are not.

**Measured (live, both chapters).** Gating the sweep on "surface must appear in this
chapter's German-typed fields":

| Chapter | prose links kept | dropped | dropped that were genuinely German |
|---|---|---|---|
| A1-1 | 8 | 4 (`will`×2, `an`, `fast`) | 1 (`Liebe`, itself an unauthored content gap) |
| A2-8 | 103 | 38 | **19 of 24 distinct** (`heiß`, `schön`, `alt`, `jung`, `warm`, `kalt`, `höher`, `höchsten` …) |

So chapter-authored inventory alone is **not sufficient**: A2-8's grammar prose lists German
adjectives inline that the chapter never authors as structured German. It kills the false
positives but takes real interactivity with it.

**Options.**
- **A — mark prose German with `.de`, then delete the gated sweep.** Fully correct, no schema
  change, uses the existing mechanism. Migration: ~140 bare prose links per chapter needing
  per-word German judgement × 258 chapters.
- **B — ship the authored-inventory gate now.** Zero migration, removes every measured false
  positive, but loses ~19 genuine prose links per chapter (each still clickable wherever the
  chapter authors it properly).
- **C — B now, plus `.de` marking added per chapter as this audit reaches it (RECOMMENDED).**
  False positives disappear immediately; the audit already visits every word of every
  chapter, so each pass restores that chapter's genuine prose German permanently. No upfront
  migration, no lasting interactivity loss.

### ⚠ CONTENT DECISION — `ei` / `ie` / `sch` (INVESTIGATED, needs a call)

**Traced end to end. `r-letter` architecture IS sufficient; no new role or colour is needed.**

The A1-1 sound-rule rows are authored as plain notation strings:
`{ wrong: 'ei → "ee"', right: 'ei → "eye"', why: '… Eis = "ice".' }`, and the renderer
interpolates them into `html: '<span class="de strike">' + m.wrong + '</span>'` — i.e. it
declares the whole row to be lexical German. `ei` is therefore resolved as a WORD and hits
the Global Lexicon noun `Ei`, so a learner studying the *ei* spelling rule is told it means
"egg" (Noun badge, Number paradigm, "Ich esse ein Ei.").

**Decisive evidence that this is content, not engine:** `z` and `ts` sit in the SAME table and
render correctly (badge Letter / Sound, neutral mono, no paradigm) purely because they are
authored. The mechanism works; the digraphs are just missing from it.

**Why the obvious fix is unsafe.** `story-lexicon.js` has a "letters & sounds" section with an
exact precedent for a multi-character sound entry (`'üüü': ['r-letter','the Ü sound','Ü ki
dhwani','ueee','Sound']`). But keys are surface-normalised to lowercase, and **A1-14 (Essen)
teaches `Ei` as vocabulary** (`{ de: 'Ei', art: 'das', plural: 'Eier', en: 'egg' }`). A
curriculum-wide `ei` key would override it and break a legitimate A1-14 word. `ie` and `sch`
are unambiguous; `ei` is not.

**Per-occurrence `data-type="Sound"` is also insufficient** — it supplies word class only, so
the popup would still show the noun's meaning ("egg") and example.

**Options.**
- **A — extend the mistake-row schema with `wrongTokens` / `rightTokens` (RECOMMENDED).** This
  is NOT a new concept: `exTokens` already exists in the same data files for exactly this
  purpose (authored tokens beside a string). Backward compatible — rows without the field
  render exactly as today. Scope: one renderer, plus the three A1-1 rows. Every field value
  is transcribed from A1-1's own authored text (`ei` = "eye", `ie` = "ee", `sch` = English
  "sh"), with `hi` following the established `'"ts" ध्वनि'` / `'Ü ki dhwani'` formula — nothing
  linguistic invented.
- **B — add only `ie` and `sch` to story-lexicon, leave `ei` broken.** Half a fix; rejected.
- **C — mark the digraphs non-lexical so no popup opens.** Removes the wrong teaching with
  zero new data, but also removes a popup learners would benefit from.

### Logged out of sequence (do not fix until the audit reaches them)

- **A1-1 `sec-reading` — `Willkommen`. FIXED this session** (see §10a). Remaining out of
  sequence: the same lexeme is authored with five different roles across the curriculum —
  `r-adjective` (A1-1, correct), `r-adverb` (`story-lexicon.js`, now corrected),
  `r-subject` (`chapter-a1-4-hallo-data.js` ×2, `chapter-b1-10-passiv-praesens-data.js`) and
  `r-verb` (`chapter-a1-17-goethe2-data.js`). Only the shared source was corrected; the
  inline chapter tokens outrank it by design and belong to those chapters' own passes.
  `r-verb` on an adjective (A1-17) is the most wrong of the set.
- **Pragmatic-category role cluster.** `story-lexicon.js` assigns `r-adverb` as a default to
  entries whose `type` is a pragmatic label rather than a word class — `herzlich` (glex:
  Adjective), `schade` (Adjective), `entschuldigung` (Noun), `rein` (Adjective). `willkommen`
  was the instance the Reading pass reached; the rest surface as the audit reaches them.
  Confirmed live in A1-4: `Herzlich`, `Tschüs`, `Hey` all render `r-adverb` under an
  "Adjective" badge.
- **A1-1 `sec-listening` — `Heft` / `Buch` / `Apfel` / `Stift` carry an "Adjective" badge.**
  Four nouns resolving to an adjective entry: span green (`r-object`), popup headword amber
  (`r-adjective`), badge "Adjective". Fires the headword-colour check (C) only — check A
  passes because `r-object` is a legitimate NP-function role for the "Adjective" badge
  class. Possibly the same resolution-class family as the `Liebe` defect (fix 13);
  investigate at Listening, not before.
- **A2-8** — `war` ×3 → `r-adverb`, `größte` → `r-verb`, `super` ×3 → `r-adjective` under an
  Adverb badge (all instances of the architectural finding above); `Vergleiche` in the
  section heading "Vergleiche mit als / wie" badged "Verb" when it is the plural noun
  "comparisons" — homograph, badge wrong, role right.
- **A2-8 `Welche`** — `r-akkusativ` in "Welche Schule ist besser für unseren Sohn?", which is
  nominative subject position. Invisible to the scan by design (see §12 limits); flagged
  here so the human pass checks it.
- **A1-9 `sec-reading`** — `und` ×2 badged Conjunction but painted `r-preposition`.
- **C1-05** — authored roles `r-contrast` / `r-addition` are outside `CANONICAL_ROLES` and
  render in the teal `--accent` (`#1F4E4A`), i.e. a conversion/action colour used as a
  grammar colour. 23 clickable spans also carry no `r-*` role class (explicit `plain`).

---

## 14a. A1-2 (Vokale & Laute) — IN PROGRESS

Baseline: 302 learner-facing occurrences · 0 black fallback · 0 link-blue · no console errors.

| Section | Status |
|---|---|
| Story | ✅ 66/66 COMPLETE |
| Vocabulary | ✅ 114/114 COMPLETE |
| Grammar | ✅ 42/42 COMPLETE |
| Reading | ✅ 22/22 COMPLETE |
| Listening | ✅ 12/12 COMPLETE |
| Speaking | ✅ 15/15 COMPLETE |
| Writing | ✅ 5/5 COMPLETE |
| Exercises | ✅ 7/7 COMPLETE |
| Summary | ✅ 7/7 COMPLETE |

### `erste` — ROOT-CAUSED AND FIXED (systemic, mirror of `Laut`)

`KW_GLOBAL_LEXICON['erste']` holds `{ w: 'Erste', type: 'Noun', en: 'the first (one)', plural:
'Ersten' }` — the NOMINALISED noun *die Erste*, stored under the lowercase key. So the ordinal
adjective in "Die erste Stunde" resolved to a noun and rendered a Number paradigm.

This is the exact mirror of `Laut`: a LOWERCASE surface resolving to a CAPITALISED-headword
noun entry. `isLowercaseNounMismatch(word)` now covers it, and unlike the capitalised
direction it needs **no sentence-position input at all** — German capitalises every noun
without exception, so lower case is never positional. Wired into both `roleFor` (falls back to
the morphological reading) and `resolveClickableWord` (returns `null` rather than the
nominalised meaning). The ordinal adjective itself is unauthored → CONTENT GAP; `erste` is now
plain text instead of a wrong noun.

Regression-checked: `Stunde`, `Aussprache`, `wichtig`, `laut`, `langsam`, `gut`, `ist`, `die`
all unchanged and correct; 0 black.

### Listening — ENGLISH OPTIONS WERE BEING TAUGHT AS GERMAN (systemic, fixed)

A1-2 Listening's only clickable words were **English**: `The`, `consonant`, `letter`, `umlaut`,
plus `ch`/`B`/`S`. `The` opened a German **der/die/das declension**.

Root cause: both MCQ renderers GUESSED at language — `/[A-ZÄÖÜ][a-zäöüß]/.test(opt) &&
opt.split(' ').length <= 3` → wrap in `.de`. A1-2's options ("The consonant ch", "The letter
B") are short and capitalised, so English answer options were declared German and auto-linked.

Fixed with `optionIsGerman(opt)`, which requires every word of the option to be in
`AUTHORED_GERMAN()` — the same language gate already used for prose, so the rule stays
"explicitly authored German is interactive; dictionary coincidence is not". Applied to BOTH
MCQ renderers (exercises + quiz). **13 false English links removed page-wide** (297 → 284).
Exercises correctly retains its 7 genuine German links.

### Speaking / Writing / Exercises / Summary results

All clicked individually. Colour == headword colour, `cursor: pointer`, badges present, nested
example roles independent, 0 black, no console errors. `Betonung` → Akkusativ case and
`Aussprache` → Nominativ case still carry occurrence context with 1 active cell. `MANN`
(all-caps) correctly resolves to the noun. Exercises `Mann`/`gut` sit inside MCQ buttons and
correctly open no popup (`LINK_EXCLUDE`, intentional).

**Two findings logged, not patched:**

1. **`Achte` — badge Verb, role `r-object` on some occurrences.** Introduced by the new
   capitalisation rule and then largely contained. Two refinements were needed and are now in
   place:
   - `precedingText()` stops at an authored German container (`LINK_TARGETS`). A word that
     opens its own `.speak-prompt`/`.vword-ex` unit was inheriting the preceding label's text,
     being judged mid-sentence, and getting repainted as a noun.
   - `AUTHORED_ROLE(surface)` vetoes orthographic inference whenever THIS chapter authors the
     surface with a non-noun role (the imperative `Achte` is authored `r-verb`). Authored data
     outranks inference, per the frozen rule.
   **The veto is keyed by the EXACT authored surface, never normalised** — keying it through
   `storyNorm` let an authored lowercase `laut` (adverb) veto the capitalised `Laut` and
   silently reinstated the very case-collapse this layer exists to prevent. Caught and fixed.
   `Achte` is now down to two readings (`r-verb` correct, `r-object` on the remaining
   occurrences) — the residue is logged for the next pass; do NOT relax the shared rule for it.
2. **`AP-fel` (Speaking #14)** — a pronunciation-hyphenation display form linked as a Noun with
   no sections. Content/display artifact, not a resolver defect.

### A1-2 end state (verified live)

284 occurrences · **0 black fallback** · **0 link-blue** · no console errors.
`Laut` and `erste` correctly unlinked (content gaps, no wrong meaning) · `laut` still Adverb ·
`Sprich` uniformly `r-verb` · `Mann`/`Stunde`/`Betonung` `r-object` · `Das` `r-subject` ·
`Kurz` `r-adjective` · `Sehr` `r-adverb`. `Aussprache` shows `r-object` and `r-subject` at
different occurrences — correct occurrence-bound variation, not a defect.

### Grammar result (42/42)

Every occurrence individually clicked: colour == popup headword colour, `cursor: pointer`,
popup opens, badge present, nested example words carry their OWN independent roles. Zero
engine defects; zero black fallback; no console errors.

Occurrence context propagates correctly where authored — `Betonung` → "Noun | Akkusativ case"
and `Aussprache` → "Noun | Nominativ case", each with exactly one active cell.

The only 0-active-cell cases are **invariant nouns**: `Käse` ×4 and `Mädchen` (singular ==
plural). The clicked surface IS present in both cells, so this is the same documented correct
abstention as `Eis` in A1-1 — the engine declines to mark a cell without authored occurrence
number metadata rather than guessing. Not defects.

`klopfen` shows the 4-cell LEGACY conjugation schema (paused migration, §6) with 1 active cell
— correct for that schema.

### Reading result (22/22)

Every occurrence individually clicked. Colour == headword colour and `cursor: pointer`
throughout; nested example roles independent; 0 black; no console errors. Occurrence context
propagates where authored (`Aussprache` → Nominativ case, `Betonung` → Akkusativ case, each 1
active cell). `nach` correctly badged "Separable prefix" with `r-verb`.

**Two findings:**

1. **`und` ×2 — badge "Conjunction", painted `r-preposition` (gold).** This is the
   Global-Lexicon POS-tier defect already logged in §14 (Decision 1), now reached in sequence:
   `und` is absent from this chapter's local vocab, so `roleFor` falls through to `guessRole`
   and mis-assigns. The dictionary knows it is a Conjunction. Identical to the A1-9 `und`
   finding logged earlier — same single cause, and it is fixed by the pending POS tier, not by
   anything chapter-local. **Do not patch locally.**
2. **`erste` — badge "Noun", role `r-object`, Number paradigm (2 cells, 1 active).** In "Die
   erste Stunde" this is the ordinal ADJECTIVE, not a noun. Lowercase surface, so the
   capitalisation work does not apply; it resolves to a nominalised-ordinal noun entry
   ("die Erste"). NEW — needs tracing at the lemma layer, not the colour layer.

Remaining 0-active-cell cases are the known documented classes: `Achte` (imperative, legacy
4-cell schema), `die` (nom/acc syncretism, no authored case), `es` (pronoun paradigm without
authored case).

Every audited occurrence: colour == popup headword colour, `cursor: pointer`, popup opens,
badge present, nested example roles independent.

### Recurring CONTENT-GAP class (engine correct — do NOT "fix" in code)

Paradigms rendering with 0 active cells, every one a genuine syncretism the authored token
does not disambiguate:

| Surface | Grid | Why no cell is current |
|---|---|---|
| `die`, `das` / `Das` (×8 across Story + Vocabulary) | Declension | Nominativ and Akkusativ are identical for `die`/`das`; tokens author `type: 'Article · plural'` / `'Article · neut.'`, no case |
| `Klingt`, `steigt`, `steht` | Conjugation | form is both 3rd sg. and 2nd pl. |
| `machen`, `sagen`, `klingen` | Conjugation | infinitive is also 1st/3rd plural |
| `Achte` ×3, `hörst` | Conjugation | imperative / 2nd sg. not representable in the 4-cell LEGACY schema (paused migration, §6) |

Proven to be authoring absence, not an engine defect: the disambiguation mechanism works and
is already used **in this same file** — the Reading tokens author `type: 'Article · fem. nom.'`
and `case: 'Nominativ'`, and those occurrences DO mark exactly one cell (verified: `Betonung`
→ badge "Noun | Akkusativ case", 1 active). Marking a cell without authored case/person would
be the sentence-position guessing the architecture forbids.

### Not a defect — scan corrected instead

`Laut` / `laut` / `langsam` showed a **Comparison** paradigm under an **Adverb** badge. German
deadjectival adverbs compare normally (langsam / langsamer / am langsamsten), so this is
correct. `SEC_WANT.Comparison` in `audit-scan.js` now accepts adjective **and** adverb.

### ⚠ DECISION 3 — case-aware lexicon: RESOLVER FIXED, one bypass path still open

**Implemented and verified working at the resolver:**

1. **`CASE_INDEX()`** — priority-A exact case-aware surface match, built from each entry's own
   authored headword. Reads BOTH field names (`w` for dictionary/story-lexicon, `de` for
   chapter vocab); reading only `w`, as the first attempt did, silently missed every
   chapter-vocab entry.
2. **`isSentenceInitial(text, index)`** threaded through all three resolver call sites
   (`germanWordSpansGated`, `germanWordSpans`, `wrapWordsIn`). German capitalises both nouns
   and sentence openings, so the capitalisation signal is trusted ONLY mid-sentence.
3. **Orthographic class hint feeding the EXISTING guard.** A capitalised mid-sentence surface
   whose direct match is a lowercase-headword open-class entry (adjective/adverb/verb) now
   calls `lookupWord(word, 'noun')` — the same `expectedClass` homograph guard that stops the
   verb `stelle` inheriting `die Stelle`. Orthography supplies only the class hint; the
   established guard does the rejecting. A final safety net returns `null` when the hint
   cannot be honoured, so a wrong lexeme is never shown (Unknown > Guess).
   Deliberately narrow: pronouns/articles are exempt, so formal `Sie`/`Ihnen` keep resolving.

**Proven correct by instrumentation:** for `Laut` the branch computes `expectNoun: true`
(headword `laut`, type `Adverb`) and the safety net returns `null` — `resolveClickableWord` no
longer yields the adjective for a capitalised mid-sentence `Laut`.

**No regressions:** A1-2 302 occurrences, 0 black, 0 link-blue, `noPopup` 0, no console
errors. Every sentence-initial capital still resolves correctly (`Das` Article + Declension,
`Sehr` Adverb, `Kurz` Adjective, `Achte` Verb, `Jetzt` Adverb) — the sentence-initial
exemption works. Capitalised real nouns unaffected (`Wortanfang` → Noun + Number).
B1-1 spot-checked: 895 occurrences, 0 black.

### ✅ `Laut`: RESOLVED at the engine level

**Root cause — a double sweep, not the lexicon.** `wrapWordsIn` runs MORE THAN ONCE over the
same container: the global lexicon loads asynchronously, so everything is re-swept once real
data is available. Pass 1 wrapped the sentence and correctly rejected `Laut`, leaving it as an
**orphan text node**. Pass 2 then saw a text node whose entire content was `"Laut"`, so
`isSentenceInitial(txt, 0)` returned `true`, the capitalisation guard switched off, and the
adjective won. Every earlier hypothesis came back clean because the machinery WAS correct —
the second pass simply fed it a position that no longer described the sentence.

**Fix (shared, DOM-aware).** `precedingText(node)` walks previous siblings and inline ancestors
up to a block boundary, so sentence position is judged against the rendered sentence rather
than against whichever text node survived the previous sweep. `isSentenceInitial(text, index,
node)` uses it whenever the in-node prefix is empty. Threaded into all three node-bearing call
sites. This also protects any future position-sensitive rule from the same flaw.

**Verified:** A1-2 300 occurrences (2 fewer — `Laut` correctly de-linked), 0 black, 0
link-blue, no console errors; `laut` still Adjective/Adverb, `Wortanfang` and `Laute` still
Nouns, all sentence-initial capitals intact.

`der Laut` remains a CONTENT GAP: absent from every lexicon and from A1-2's own vocab despite
the chapter being titled "Vokale & **Laute**". Until authored, `Laut` shows no popup — no wrong
meaning, which is the correct failure mode.

### Capitalisation-collision audit — A1 (47 data files)

Method: parse `global-lexicon.js` (7,802 entries) for lowercase-headword OPEN-CLASS entries
(2,769), then scan every German-typed field (`w`/`de`/`ex`/`ex2`) in all A1 chapter data for
capitalised, **non-sentence-initial** tokens whose lowercase key hits one of them. Evidence
only — no new heuristics.

**22 distinct colliding surfaces found.** Classification:

| Class | Surfaces | Verdict |
|---|---|---|
| Separator artifact | `Leider`, `Echt`, `Kommen`, `Sprechen` | **ENGINE — FIXED.** Authored prompts list alternatives ("Ja, gern! / Leider nicht.", "Komm! / Kommt! / Kommen Sie!", "Lesen · Hören"); `/` and `·` now count as sentence boundaries in `SENTENCE_END`, so the word after them is correctly positional |
| Nominalised verb/adjective | `Essen`, `Hören`, `Lesen`, `Schreiben`, `Fernsehen`, `Trinken`, `Merken`, `Perfekt`, `Wohl` | **CONTENT GAP.** Genuine German nouns (das Essen, das Hören …) that no lexicon authors. Nearly all occur in headings/list items where they ARE sentence-initial, so orthography gives no signal and the engine correctly abstains rather than guessing |
| Plural noun vs verb | `Fragen`, `Antworten`, `Zahlen`, `Kosten`, `Rollen`, `Grüßen`, `Gefallen` | **CONTENT GAP.** Noun reading unauthored; capitalised mid-sentence occurrences now resolve to the noun default rather than the verb |
| Proper name vs adjective | `Klein` (Frau Klein / klein) | **CORRECT.** Authored as an `r-name` token, and an explicit authored role outranks every inferred path |
| Fixed this session | `Laut` | **ENGINE — FIXED** (above) |

Verified live: `Ei` in A1-14 still resolves to the noun "egg" via `CASE_INDEX` (case-aware
match working), and A1-14's only `Essen` occurrence is the chapter title — sentence-initial, so
the verb reading there is correct abstention, not a defect.

No engine defect remains in this class for A1. Every other finding is authoring absence and is
logged as a content gap, not fabricated.

**What is implemented, shared, and verified (no regressions):**

`isCapitalisedNounHomograph(word, sentenceInitial)` is now the single shared predicate used by
BOTH `roleFor()` (colour) and `resolveClickableWord()` (eligibility), so those two can never
disagree about the same occurrence. It builds the word index before consulting it, and reads
both headword field names (`w`, `de`). `sentenceInitial` is threaded into all FOUR `roleFor`
call sites (`germanWordSpansGated`, `germanWordSpans`, `wrapWordsIn`, `colorWordsIn`) and all
THREE `resolveClickableWord` call sites. When the predicate is true, colour falls to
`POS_ROLE.noun` and eligibility demands `expectedClass: 'noun'`.

Instrumentation proved the predicate computes `true` for `Laut` and that
`resolveClickableWord` returns `null` for it.

A1-2 after the change: 302 occurrences, 0 black, 0 link-blue, no console errors, and every
sentence-initial capital still correct (`Das` r-subject/Article, `Sehr` r-adverb, `Kurz`
r-adjective, `Achte` r-verb, `Jetzt` r-adverb). Capitalised true nouns unaffected
(`Wortanfang` r-object/Noun).

**Still unexplained:** the single `Laut` occurrence inside the `der Wortanfang` vocab card's
`.vword-ex` remains `de-link r-adverb`. Everything below has been checked and ELIMINATED — do
not repeat:

| Hypothesis | Result |
|---|---|
| Stale browser cache | Ruled out — `window.KW_BUILD` marker + `?cb=` buster confirmed fresh JS |
| `WORDIDX` unbuilt on first sweep | Ruled out — `buildWordIndex()` now called first; unchanged |
| A span-creating path outside `chapter-app.js` | Ruled out — project-wide grep finds only 5 `.de-link` creation sites, all in `chapter-app.js` |
| Span has its own click handler | Ruled out — `Element.prototype.addEventListener` trace (patched before `chapter-app.js`) captured ZERO attachments for any `Laut` span; no `onclick` on word spans either |
| `colorWordsIn` (colour-only) is the creator | Consistent with the no-handler finding, but it is only invoked on MCQ `.de` elements, never on `.vword-ex` |

The contradiction to resolve: the span has no listener (so it should be inert) yet earlier
probing rendered a popup whose headword was `Laut`; and `roleFor` now returns the noun default
for this input, yet the rendered class is `r-adverb`. That points at a render that happens
**before** the sweep that would correct it, whose output is then skipped by `LINK_EXCLUDE`
(which ignores anything already inside a `.de-link`).

**Next step:** patch `Node.prototype.replaceChild` / `appendChild` (not `addEventListener`)
before `chapter-app.js`, filter for a fragment containing text `Laut`, and capture the stack.
That identifies the *creating* call rather than the listener-attaching one. Then route it
through `roleFor(word, null, sentenceInitial)` like the other four.

Severity note: with no click handler the occurrence shows no wrong MEANING — it is a wrong
COLOUR on one word (adverb cyan on a noun occurrence). Lower severity than originally logged.

The stack-trace probe (temporary inline patch of `Element.prototype.addEventListener` placed
before `chapter-app.js`, since removed) captured **zero** listener attachments for any span
whose text is `Laut`. A project-wide grep confirms no `onclick` assignment on word spans
either. So that span has **no click handler** — it is colour-only output, and the popup seen in
earlier probing was a stale-popup artifact of the probe helper, not a real interaction.

That relocates the defect precisely, and it is smaller than feared:

- **`resolveClickableWord()` — FIXED.** Case-aware match, sentence-position gate and the
  `expectedClass` hint all work; instrumentation showed `expectNoun: true` for `Laut` and the
  safety net returning `null`. Clickability and popup CONTENT are correct.
- **`roleFor()` — STILL WRONG for this class.** The span's colour class comes from
  `roleFor(word)`, a *separate* function that resolves through `storyTokenFor` → lowercase
  lookup. It never sees the case-aware work, so `Laut` is painted cyan `r-adverb` from the
  adjective entry.

So the learner sees `Laut` in the correct-meaning-free state (no popup) but wearing an
**adverb colour on a noun occurrence** — a colour defect, not a wrong-meaning defect.

**Fix shape (next session).** `roleFor()` needs the same orthographic class hint. It has no
position context today, so either:
- **A** give `roleFor(surface, explicit, sentenceInitial)` the third argument at the three
  renderer call sites that already compute `isSentenceInitial` (mirrors exactly what was done
  for `resolveClickableWord`; smallest change, same pattern); or
- **B** have the renderers pass the already-resolved entry's class into `roleFor` so colour and
  eligibility can never disagree — structurally better, slightly wider.

Recommend **A**, since the plumbing is already in place and proven.

### Curriculum-wide capitalisation-collision audit — deferred

Still to run, once `roleFor` carries the hint: otherwise the audit reports colour and meaning
from two different resolution paths and cannot be interpreted.

`Laut` in A1-2 Vocabulary is **still rendered as a clickable `.de-link r-adverb`** that opens
an adjective popup, even though `resolveClickableWord` now provably rejects it. Something
other than the canonical pipeline creates that span.

Evidence gathered:
- The span is `<span class="de-link r-adverb">Laut</span>` inside `.vword-ex` (owner vocab card
  `der Wortanfang`), i.e. the plain-string branch `box.textContent = w.ex` — one text node,
  so `isSentenceInitial` correctly reports `false`.
- Clicking it DOES build a popup with headword `Laut` (`.word-pop` created, `is-open` applied
  a frame later), so the span carries a real handler — it is not `colorWordsIn` output
  (colour-only, no handler).
- Instrumentation at the top of `resolveClickableWord` never recorded a call with `Laut`,
  while the capitalisation branch DID record one — i.e. at least two different code paths
  touch this surface.
- Not `chapter-story.js`, not `tokenizer.js` (neither contains `de-link` or a resolver call).
- Sibling words in the SAME text node (`Am`, `hörst`, `du`, `den`, `ersten`) resolve through
  the canonical path normally.

This is exactly the class of defect §2 forbids ("All click paths should converge on the
canonical resolution pipeline. If a path bypasses `resolveFullEntry()`, investigate it as a
systemic defect") and it was previously the root cause of the `Jahre` plural-paradigm problem.

**Next session, start here:** find the second span-creating path. Two hypotheses have been
tested and RULED OUT, so do not repeat them:

- *Stale browser cache* — ruled out with a `window.KW_BUILD` marker plus a `?cb=` cache-buster;
  the executing JS is current.
- *`WORDIDX` not built during the first sweep* — plausible (an unbuilt index would make every
  capitalised surface look unknown, and the later re-sweep skips anything already inside a
  `.de-link`). `buildWordIndex()` is now called before the capitalisation check, which is
  correct in its own right, but `Laut` is unchanged — so this was not the cause.

A grep of the whole project found only FIVE `.de-link` span-creating sites, all in
`chapter-app.js`: `mistakeSide` (grammar tokens only), the two `germanWordSpans*` paths (which
add `wp-inline-link`, absent here), `wrapWordsIn` (canonical, resolver-gated), and
`colorWordsIn` (colour-only, NO click handler). `Laut`'s span is bare `de-link` AND has a
working handler, which matches none of them given the resolver now rejects it. So either
`colorWordsIn` output is later given a handler by something else, or a sweep runs with
different state than instrumentation captured.

Suggested method — patch `Element.prototype.addEventListener` from an inline script placed
BEFORE `chapter-app.js` in the chapter HTML, filter for a span whose `textContent === 'Laut'`,
and capture `new Error().stack`. That names the creator in one run. Remove the patch after.
Until then, `Laut` remains a learner-facing wrong meaning.

**`der Laut` is also still a CONTENT GAP** — absent from every lexicon and from A1-2's own
vocab, despite the chapter being titled "Vokale & **Laute**". Authoring it (noun, `der`,
plural `Laute`) is required for `Laut` to teach "sound"; the engine must not invent it.

### Curriculum-wide capitalisation-collision audit — deferred

Still to run, and deliberately not run yet: with a bypass path live, the audit would measure
the wrong layer and under-report. Planned once the path above is closed.

**Approved and started. What is in place and verified:**

1. **`CASE_INDEX()`** — priority-A exact case-aware surface match, built from every entry's own
   authored headword (`w` in the dictionary and story lexicon, `de` in chapter vocab; both
   field names are handled — reading only `w` silently missed all chapter vocab). Consulted
   before the normalized fallback, so where BOTH readings are authored the capitalised surface
   now resolves to its own lexeme.
2. **`isSentenceInitial(text, index)`** + threading through **all three** resolver call sites
   (`germanWordSpansGated`, `germanWordSpans`, `wrapWordsIn`). German capitalises both nouns
   and sentence openings, so the capitalisation signal is only trusted away from
   sentence-initial position.
3. **Capitalisation guard** in the clickability gate: a capitalised, non-sentence-initial
   surface whose only match is a lowercase-headword open-class entry (adjective/adverb/verb)
   resolves to nothing rather than to the wrong lexeme. Pronouns and articles are exempt so
   formal `Sie` keeps working.

**Verified no regression:** A1-2 302 links unchanged, 0 black, 0 link-blue, and every
sentence-initial capital still resolves correctly (`Das` Article + Declension, `Sehr` Adverb,
`Kurz` Adjective, `Achte` Verb, `Jetzt` Adverb) — the sentence-initial exemption works.
B1-1 incidentally re-checked: 895 occurrences, 0 black.

**Why `Laut` is still wrong — the diagnostic that matters.**

Instrumenting the resolver proved `resolveClickableWord` is **never called with `Laut`** even
though the span exists. The reason is a separation of concerns that was not obvious:

- `resolveClickableWord()` decides **clickability only** — whether a span is created.
- The popup's **meaning** comes from `resolveFullEntry()` / `lookupWord()`, reached later from
  the span's click handler.

So a guard in the clickability gate cannot change what the popup teaches, and `lookupWord()`
has no sentence-position context to guard with. `lookupWord` already owns the right mechanism
for this — its `expectedClass` homograph guard, which is exactly how "stelle" (verb) is kept
from inheriting "die Stelle" (noun) — but nothing currently supplies `expectedClass` from
orthography.

**Remaining step (needs the go-ahead — it is a threading change across renderers).** At
span-creation time position IS known, so stamp the inferred occurrence class on the span and
pass it into `resolveFullEntry`, reusing the **existing `data-type` occurrence-context
mechanism** already used for `Käse` — no new concept:

```
wrapWordsIn: capitalised && !sentenceInitial  →  span.dataset.oclass = 'noun'
click handler: resolveFullEntry(entry, { expectedClass: span.dataset.oclass })
lookupWord: existing expectedClass guard then rejects the adjective `laut`
```

With that, `Laut` shows either the authored noun or (until `der Laut` is authored) no wrong
meaning at all. **`der Laut` remains a content gap** — it is absent from every lexicon and
from A1-2's own vocab, despite the chapter being titled "Vokale & **Laute**". Authoring it is
required for `Laut` to teach "sound"; the engine must not invent it.

### Curriculum-wide capitalisation-collision audit — still to run

Not yet performed (the resolution path above must land first, or the audit would measure the
wrong layer). Planned: for every surface appearing capitalised mid-sentence in authored German
fields, report whether a lowercase open-class entry is the only match. Expected class:
`Laut`/`laut`, `Recht`/`recht`, `Morgen`/`morgen`, `Essen`/`essen`, `Arm`/`arm`,
`Deutsch`/`deutsch`.

**Not implemented — stopped per §13. Produces actively wrong teaching.**

A1-2 Vocabulary #35: the example sentence "Am Wortanfang hörst du den ersten **Laut**."
(= "at the start of a word you hear the first SOUND"). Clicking `Laut` reports:

> Adverb · "aloud, loudly" · ज़ोर से · Comparison: Laut / lauter / am lautesten

That is the adjective `laut` (loud), not the noun `der Laut` (the sound). The chapter is
titled "Vokale & **Laute**", so the noun is central to it.

**Root cause.** `normWord()` / `storyNorm()` lowercase every surface, so the lexicon is
case-insensitive — but German distinguishes a large, systematic class of homographs ONLY by
capitalisation: `Laut`/`laut`, `Recht`/`recht`, `Morgen`/`morgen`, `Essen`/`essen`,
`Deutsch`/`deutsch`, `Arm`/`arm`. One lowercase key cannot hold both readings, so authoring
`der Laut` would COLLIDE with the existing adjective rather than fix it. (`Morgen`/`morgen`
and `arm` already surfaced in the earlier `lexiconRoleVsClass` diagnostic as dual-class
homographs — same class.)

The existing orthographic guard already trusts capitalisation in one direction (reject a
**Noun** entry matched against an all-lowercase surface). The converse — reject a lowercase
non-noun entry matched against a CAPITALISED surface — is unsafe as a bare rule because
German also capitalises sentence-initially ("**Langsam** sprichst du" is the adverb).
Distinguishing them needs sentence position, which the resolver is not currently given.

**Options.**
- **A — case-aware lexicon keys (RECOMMENDED).** Keep the noun and the non-noun as separate
  entries, resolve a capitalised surface to the noun first. Correct and permanent; touches
  the index build and every lookup path.
- **B — thread sentence position into `resolveClickableWord` and reject capitalised
  non-sentence-initial matches to lowercase non-noun entries.** Smaller, but heuristic, and
  the code's own TODO says orthography should be a fallback, never primary.
- **C — author the missing nouns and accept the collision.** Does not work: one key, two
  meanings.

Until this is decided, `Laut` is logged as a content gap AND an engine defect; it is the
second confirmed case (after `ei` → "egg") of a popup teaching a wrong meaning.

---

## 15. Files and implementation areas

**Primary:** `chapter/chapter-app.js` (resolver, renderers, paradigm grid, sweeps),
`chapter/chapter.css` (roles, paradigm cells, pointer/hover scopes, chip precedence),
`chapter/global-lexicon.js` (`KW_GLOBAL_LEXICON` + `KW_INFLECTIONS`),
`chapter/audit-scan.js` (standing audit scan — see §12).

**A1-1 data modified:** `chapter-a1-1-data.js` (listening tokens, story token metadata,
vocabulary `exTokens`, grammar `data-type`), plus `chapter-a1-2/3/4/5/6/8/10/11/12/13/14`
data files (stale inline `conj` removal).

**Specification / release documents:**
- `chapter/SENTENCE-ARCHITECTURE.md` — three-layer sentence model (Grammar Breakdown = facts,
  Sentence Insight = attention, Word Popup = word facts), interaction model, invariants.
- `chapter/SENTENCE-COMPONENT-ROLLOUT-PLAN.md`
- `chapter/PARSER-ROLE-VOCABULARY.md` — frozen 31 roles + `plain`.
- `chapter/PARADIGM-UI-RELEASE-GATE.md`
- `chapter/LEXICALUNIT-RELEASE.md`
- `chapter/FUTURE_COVERAGE.md`
- `chapter/conj-migration-inventory.json`, `chapter/conj-inflection-conflicts.json`
- `chapter/archive/sentence-insight-prototypes.html`, `…-v2.html`

**Note:** Sentence X-Ray is implemented but **paused** behind a single flag,
`SENTENCE_XRAY_ENABLED = false` in `chapter-app.js`. All its code and docs remain intact;
learner-facing pages show Word Popup only. Flip the one constant to re-enable everywhere.

---

## 16. Current ledger

```
Story:        64/64  PASS
Vocabulary:   94/94  PASS
Grammar:      21/21  PASS
Reading:      35/35  PASS
Listening:     4/4   PASS
Speaking:     14/14  PASS
Writing:       4/4   PASS
Exercises:     5/5   PASS
Summary:       6/6   PASS

A1-1:         PASS — all 247 occurrences swept, all nine sections clean.
              Both A1-1 blockers (language gate, ei/ie/sch) RESOLVED this session.

Conjugation migration:  131/1,334 person-aware — NOT COMPLETE, PAUSED
Open ENGINE defects:    1 — unidentified linkification path bypasses the canonical
                        resolver (§14a); keeps `Laut` teaching the wrong meaning
Open ARCHITECTURAL:     1 — Global-Lexicon POS tier (§14)
Known CONTENT gaps:     gut / rot / üben / Liebe / Eis / Weber / R·O·H·A·N / A /
                        buchstabiere / possessive determiners / der Laut /
                        A1-2 story-token case+person
Systemic fixes:         22 total
Standing scan:          chapter/audit-scan.js — KWAudit.run() (§12)

Current next action:    A1-2 `Achte` colour finding, then A1-3
```

### Regression coverage for this session's fixes

Both fixes were re-tested across four chapters using the badge-vs-paradigm agreement check
(the check earlier automated scans lacked — see §8):

| Chapter | Clickable occurrences | Mismatches |
|---|---|---|
| A1-1 (current) | 179 | 0 |
| A1-9 (heavy conjugation) | 439 | 0 |
| A2-8 (heavy comparison) | 1,247 | 0 |
| C1-05 (no letters — "not applicable") | 398 | 0 |

All paradigm types still render (A2-8: Conjugation 137 · Number 245 · Declension 267 ·
Comparison 134), confirming `entryAllowsParadigm` does not over-block. No black/ink
fallback and no link-blue anywhere. `Frag` (A1-9) renders no conjugation — pre-existing
imperative gap, unaffected by these fixes.

Re-verified afterwards with the full `KWAudit` scan (§12), which adds the badge-vs-role-
colour assertion the above check could not see. A1-1: 255 rendered occurrences, 25 hidden
skipped. **Story 64 / Vocabulary 94 / Grammar 21 all clean on every check** — the completed
sections hold under the stricter assertion. The only findings on the page sit in
`sec-reading` (1) and `sec-listening` (4), both NOT STARTED, and are logged in §14.

---

## 17. NEXT SESSION INSTRUCTION

"NEXT SESSION MUST READ THIS HANDOFF FIRST.

Do not reread the entire previous conversation unless required for a specific unresolved issue.

Continue from A1-2, Grammar occurrence #0. A1-1 is fully swept (247 occurrences, all nine
sections clean); A1-2 Story (66) and Vocabulary (114) are complete.

Preserve all frozen architectural decisions, including the surface-stable vs
occurrence-bound role rule (§4) added this session.

Do not restart the completed A1-1 audit (all nine sections).

Do not resume global conjugation migration.

Do not invent linguistic data — gap 4 (`ei`/`ie`/`sch`) is awaiting content sign-off, not
an engine fix.

Continue the sequential production audit through:

Reading
→ Listening
→ Speaking
→ Exercises

Then continue A1-2 → A1-3 → ... → C2.

The ultimate goal remains a complete A1–C2 word-level production audit with no genuine
learner-facing defects left unresolved."
