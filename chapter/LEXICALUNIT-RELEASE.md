# lexicalUnit — Release Document

## 1. Scope

**What this project solved:** when a learner clicks a German word that is
only a fragment of a larger separable-verb or fixed construction (e.g.
"zurück" inside "kommt … zurück", "an" inside "ruft … an"), the Word Popup
now resolves to the correct dictionary headword (e.g. `zurückkommen`,
`anrufen`) instead of the fragment's own standalone meaning. Every
participating token in the sentence resolves to the identical popup —
same headword, meaning, grammar, audio, examples, and paradigm.

**What this intentionally does NOT solve (by design, not oversight):**
- Idioms and broader fixed expressions beyond the separable-verb/simple
  fixed-construction pattern already authored.
- Any heuristic or inferred lexical-unit detection — every link is
  authored, never guessed.
- Sentence-level features (Sentence Insight, Sentence X-Ray) — paused
  separately, unrelated to this release.
- New paradigm types beyond the six already frozen (Comparison,
  Conjugation, Number, Declension, Article, Pronoun).

## 2. Final statistics

- Chapters verified: all chapters identified as containing `lexicalUnit`
  pointers across A1–C2, individually human-verified batch by batch.
- Lexical units completed: 80 (every participating token pointed).
- Lexical units verified: all of the above, confirmed via live click-test
  (same headword/meaning/grammar/audio/paradigm from every participating
  token).
- Bugs found: 2 systemic (hero decorative-chip overlap with page title;
  hero decorative-chip overlap with the persistent "Ask Klara" button).
- Bugs fixed: 2, both fixed platform-wide (not per-chapter patches) —
  first via corner repositioning, then via a vertical-stack layout
  redesign to eliminate the collision class entirely.
- Remaining blockers: none.

## 3. Frozen architecture

- **`resolveFullEntry()`** — the single resolver entry point for every
  clicked token. Checks `t.lexicalUnit` first (Tier A, author-specified
  only); falls through to normal lemma/dictionary lookup otherwise.
- **`lexicalUnit`** — a token-level pointer field naming the canonical
  dictionary headword a fragment belongs to. Authored only, never
  inferred. Optional `t.unit` inline override exists solely as an
  exceptional fallback when no dictionary entry exists yet.
- **`KW_INFLECTIONS`** — the inflection index; unrelated in mechanism to
  `lexicalUnit` but part of the same overall resolution pipeline for
  non-separable inflected forms.
- **Dictionary as single source of truth** — `lexicalUnit` never
  duplicates meaning/translation/grammar; it only points to the existing
  dictionary entry.
- **Unknown > Guess** — if `t.lexicalUnit` points to a dictionary entry
  that doesn't exist and no inline override is given, the resolver logs a
  warning and falls back to the surface token rather than forcing a
  hollow popup.
- **Context-aware resolver** — `resolveFullEntry(t, siblingTokens)` scans
  sibling tokens in the same sentence to disambiguate tense (e.g. so that
  clicking a bare separable prefix highlights the correct Paradigm cell).
- **Existing Word Popup** — unchanged in structure; the popup always
  shows the resolved dictionary entry, with no separate
  "Sentence Form → Dictionary Form" explanatory block (removed by design
  decision — the Paradigm UI itself now carries that explanation).
- **Existing Paradigm UI** (`renderParadigmGrid()`) — the sole place the
  clicked-form-to-dictionary-form relationship is shown: active-cell
  ring + tint (primary signal) and fragment emphasis inside the cell
  (secondary signal, weight-only, no color). One shared renderer for
  Comparison, Conjugation, Number, Declension, Article, and Pronoun
  grids. Subject to the permanent release gate in
  `PARADIGM-UI-RELEASE-GATE.md`.

## 4. Release decision

**Status: Production Ready**

## 5. Future work (NOT part of this release)

- Broader fixed-expression coverage beyond separable verbs.
- Idiom support.
- Phrasal lexical units beyond the current verb-focused scope.
- Future AI integration for lexical-unit suggestion or authoring
  assistance.

These are explicitly outside the scope of this release.

---

The lexicalUnit feature is now frozen. Future changes must follow the
release gate and must not alter the frozen architecture without a new
design review.
