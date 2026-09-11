# Shared Sentence Component — Rollout Plan

Goal: every surface that renders a human-readable German sentence calls
`renderInteractiveSentence(toks, si)` (or its future per-surface equivalent)
instead of hand-rendering text. Grammar Examples is the reference
implementation (done). This plan sequences the remaining surfaces by real
engineering dependencies, not arbitrary order.

## What actually gates each surface

Two independent readiness axes per surface:
- **Data**: does token-level role data exist or is it cheap to derive, or
  does it require full manual authoring per sentence?
- **Renderer**: does the surface already render one sentence as one unit,
  or does it render freeform paragraphs/blocks that must first be split
  into sentence units before the component can attach to them?

## Phase 0 — Foundation (done)
Grammar Examples reference implementation: `renderInteractiveSentence`,
`buildGrammarBreakdownBody`, `buildSentenceInsightBody`, interaction
invariants (word-click precedence, inert-when-no-data). No further work
here until a real limitation surfaces.

## Phase 1 — Story (next)
**Why first:** lowest incremental data cost. `storyTokenFor` already
derives a per-word role for every Story word today (lexicon hit → chapter
adjective stems → morphological heuristic fallback) — that's the same
`{w, role}` shape `renderInteractiveSentence` already consumes. Story is
also the highest-reach surface (present in every chapter, read first).

**Work:**
1. Renderer: Story dialogue is currently rendered line-by-line already
   (each line is one speaker turn) — group each line's existing per-word
   role lookups into a `toks` array instead of streaming spans directly,
   then hand that array to `renderInteractiveSentence`.
2. Data: no new authoring required for Grammar Breakdown (heuristic roles
   already exist). Sentence Insight stays absent by default — only added
   where a chapter author later decides a Story line earns a Notice.
3. Testing: verify word-click still opens Word Popup unchanged (regression
   risk — Story is the most heavily used word-click surface); verify
   sentence click opens X-Ray with the same heuristic roles already shown
   today; spot-check across A1/A2 (heaviest Story usage) and one B2/C1
   chapter (longer, more complex Story lines).

## Phase 2 — Reading
**Why second:** same heuristic role source (`storyTokenFor`/`roleFor`) as
Story is already available generically — Reading currently uses
`wrapWordsIn`/`germanWordSpansGated`, not `storyTokenFor`, so this phase's
real work is switching Reading's role source to the same heuristic
pipeline Story uses, then splitting Reading's paragraph blocks into
sentence units (new — Reading is currently one flowing block, not
pre-split by sentence).

**Work:**
1. Renderer: split Reading paragraphs into sentences (sentence-boundary
   split on `.`/`!`/`?`, respecting existing German-word tokenization
   rules) — new logic, doesn't exist today.
2. Data: reuse the heuristic role pipeline; no manual authoring required
   to ship Grammar Breakdown.
3. Testing: verify sentence-splitting doesn't break mid-abbreviation or
   inside quoted dialogue; verify word-click regression as in Phase 1;
   check a long-form C1/C2 Reading passage for split correctness
   specifically (longest, most complex sentences in the curriculum).

## Phase 3 — Listening Transcript
**Why third:** structurally identical problem to Reading (flowing
transcript text, needs sentence-splitting) but lower reach (fewer chapters
have long transcripts than have Reading). Reuses the sentence-splitting
logic built in Phase 2 directly — should be a thin adaptation, not new
engineering.

**Work:** apply Phase 2's splitting + heuristic-role pipeline to
transcript rendering; test against transcripts containing speaker labels
and interjections (structurally noisier than Reading prose).

## Phase 4 — Dialogue (if distinct from Story)
Confirm first whether "Dialogue" is a separate renderer from Story's
dialogue lines or the same code path. If the same path, Phase 1 already
covers it — no separate phase needed. If a distinct exam-dialogue-style
renderer exists elsewhere, treat it as a thin clone of Phase 1.

## Phase 5 — Writing Examples & Exam Examples
**Why later:** lower sentence volume per chapter than Story/Reading, and
example sentences here are frequently used as fill-in-the-blank or
model-answer prompts rather than pure prose — needs a check that
X-Ray-wrapping a sentence with a blank in it doesn't corrupt the blank
interaction. Do this only after Phases 1–3 prove the component handles
real curriculum text robustly.

**Work:** audit whether these surfaces render complete sentences or
sentence fragments with blanks; for complete-sentence cases, same pipeline
as Reading; for blank/fragment cases, this may hit the frozen
architecture's boundary (a fragment isn't a full parseable sentence) —
flag rather than force a fit.

## Phase 6 — Exercises / Quiz / Speaking prompts
**Why last:** these are predominantly short prompts, fill-blanks, and
multiple-choice stems — structurally the least like "a sentence to
inspect," and most likely to need an explicit exemption decision (per the
frozen architecture: don't force the interaction where it doesn't fit)
rather than a forced rollout. Revisit after Phase 5's blank-handling
findings; may end up partially out of scope by design, not oversight.

## Cross-cutting, done once (not per-phase)
- **Sentence-boundary splitter**: built once in Phase 2, reused by Phases
  3 and 5. Don't rebuild per surface.
- **Regression suite for word-click precedence**: same check every phase
  (word click never also opens/closes the X-ray panel) — reuse the same
  test procedure from the Phase 1 rollout every time, don't reinvent it.
- **No-data inertness**: every phase must re-verify a sentence lacking
  role data stays fully inert (no panel, no click handler) — this is the
  one invariant most likely to regress silently when a new surface is
  wired in.

## Explicitly not yet scheduled
Full manual Sentence Insight authoring (Notices) across all these
surfaces is separate downstream work, gated by the frozen rule that
Insight is optional and must be earned per sentence — rollout of the
*component* does not imply mass-authoring Notices everywhere at once.
