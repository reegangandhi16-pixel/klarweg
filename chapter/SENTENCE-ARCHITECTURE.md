# Sentence-Level Architecture v1.0 (frozen)

Three systems render sentence-level German content. They must never overlap.
Each owns exactly one responsibility.

## Layer 1 — Grammar Breakdown (facts)

**Owns:** every structural fact about the sentence.

Renders directly from `parserSentence` (roles, cases, POS, clause
boundaries, verb position, separable prefixes, dependencies — whatever the
parser data already contains). It is the permanent, always-available
foundation: present on every sentence that has `parserSentence` data,
rendered identically regardless of which phenomenon is pedagogically
interesting this time.

Rules:
- Never invents information not present in `parserSentence`.
- Never duplicates or re-derives parser logic — it is a pure renderer.
- Token-based, never phrase-based: every token owns exactly its own
  grammatical label. A preposition or preposition+article contraction
  (zur, am, ins, im, zum…) is tagged as its own part of speech (e.g.
  preposition), never inherits the semantic role (Place, Time) of the
  noun it precedes. Case marking (Dativ/Akkusativ) may legitimately span
  an article+noun pair since case belongs to the whole noun phrase — but
  a semantic role like Place/Time belongs only to the noun itself.
- Never prioritizes, selects, or narrates. It is exhaustive, not curated.
- Not "opinion-free" (a case label is already a grammatical claim) but
  narrative-free: no claim about what matters or why.

This is where a learner goes to inspect. It is the true Sentence X-Ray.

**Invariant: authored data only.** Grammar Breakdown and Sentence X-Ray may
ONLY consume authored (or dictionary-derived) grammatical data — never a
heuristic or inferred role. Heuristic classification may still exist
elsewhere for UI convenience (legacy word-click coloring, search,
highlighting), but it must never surface as a grammatical fact shown to the
learner. If authored data is unavailable for a token: show plain text.
Never guessed grammar. (`authoredRoleFor` is the sanctioned function for
this; `guessRole`'s morphological heuristic must never be reachable from
Grammar Breakdown or Sentence X-Ray.)

**Invariant (verified in the rendering pipeline):** Grammar Breakdown is a
view, never a parser or interpreter. Data flow is always Sentence → Parser
→ Grammar Breakdown, never Sentence → Grammar Breakdown → inferred labels.
Concretely: it never guesses a role for a token the parser didn't tag; never
combines neighboring tokens into one label; never propagates a noun's
semantic role (Place/Time) onto a preposition; never invents an "educational"
label not already in `parserSentence`; never decides what's important. If
the parser knows a token's role, display it; if not, leave it absent — never
fabricate. This holds for every current renderer (`buildParser`,
`renderRoleSentence`, `buildSentenceInsight`'s breakdown section): each does
a direct 1:1 lookup from `t.role`, nothing more.

**Final invariant — data-driven only, forever:** Grammar Breakdown may only
ask two questions: (1) what tokens did the parser produce, and (2) how
should this parser role be visually displayed. No educational, pedagogical,
prioritization, or adaptive logic may ever live here — no "this is
important," no beginner/advanced branching, no confusing-for-learners
heuristics, no generated explanations, no inferred relationships or guessed
categories. That reasoning belongs to Sentence Insight (pedagogy), Word
Popup (word explanation), or a future AI Tutor (adaptive teaching) — never
to Grammar Breakdown. Audited and confirmed clean: the roles-visible/hidden
toggle is a plain user-triggered display state, and the breakdown legend
enumerates every tagged role with no filtering or ranking.

**Grammar Breakdown is now permanently frozen as a pure parser
visualization layer. Sentence Architecture v1.0 is fully frozen.**

---

# Interaction Model (frozen separately from Layer Responsibilities)

The three layers above define *what each layer is allowed to do*. This
section defines *how a learner triggers them* — a platform-wide principle,
not a per-section feature.

**The sentence is the interaction unit everywhere.** Every sentence
rendered anywhere in Klarweg — Story, Dialogue, Reading, Listening
transcript, Grammar examples, Writing examples, Exam examples, future AI
conversation turns — is an interactive sentence, with one consistent
contract:

- **Click a word** → Word Popup (already the platform-wide behavior via `.de[data-word]`).
- **Click the sentence background (not a word)** → Sentence X-Ray: Sentence
  Insight (if authored for this sentence) + Grammar Breakdown (if
  `parserSentence`-equivalent data exists for this sentence).

Same behavior, same trigger, same visual result, regardless of which
surface the sentence appears on. No section gets its own bespoke
interaction rule.

## What this requires, engineering-wise (not yet built, not yet implemented)

1. **Universal sentence data, not one slot per chapter.** Today
   `C.parserSentence` is a single authored field per chapter, covering
   exactly one concept sentence. Universal coverage means every sentence
   on every surface (Story paragraphs, dialogue lines, reading passages,
   listening transcripts, writing/exam examples) needs its own
   token-by-token parse data, or a defined "not yet parsed" fallback.
   This multiplies the data-authoring project already scoped in
   `PARSER-COMPLETENESS-ROADMAP.md` (which only covered ~259 single
   concept sentences) by however many sentences actually exist across all
   those surfaces per chapter — likely one to two orders of magnitude
   more sentences than the current roadmap accounts for.
2. **A consistent sentence-unit wrapper in markup.** Every rendered
   sentence, on every surface, needs to become one addressable DOM unit
   (not just free-flowing text) so a background click can be detected and
   tied to that sentence's own data — this touches the Story renderer,
   Dialogue renderer, Reading renderer, Listening transcript renderer,
   and wherever Grammar/Writing/Exam examples are currently rendered as
   plain text.
3. **Click-target disambiguation.** Word clicks and sentence-background
   clicks must never both fire from the same click — clicking a word
   should open only the Word Popup, not also trigger Sentence X-Ray. This
   needs explicit event handling (target checks or propagation control)
   applied consistently everywhere, not per-surface.
4. **A defined behavior for sentences with no parser data yet.** Given
   Finding 3 of the parser data audit (most sentences have no complete
   parse), universal rollout needs an explicit decision for what a
   background click does on a sentence that hasn't been authored yet —
   silently do nothing, show only Grammar Breakdown for whatever partial
   data exists, or something else. Not decided yet.
5. **One shared renderer, reused everywhere.** The existing
   `renderRoleSentence`/`buildSentenceInsight`/Grammar Breakdown code
   already is written as reusable functions independent of any one
   section — that part scales fine. What doesn't yet exist is the
   plumbing that calls it from Story/Dialogue/Reading/Listening/Writing/
   Exam content instead of only from the one dashboard call site it has
   today.

No implementation has been made. This is documentation + scope only, per
your instruction.

## Interaction invariants (frozen)

1. **If `parserSentence` (or its future per-sentence equivalent) exists**
   for a sentence: sentence background click → Sentence X-Ray.
2. **If it does not exist:** sentence background click → no action. No
   popup, no placeholder, no "Coming Soon," no empty Grammar Breakdown, no
   dead UI. The sentence remains non-interactive at the sentence level
   until parser data exists for it. (Word clicks within it are unaffected
   — Word Popup depends on its own dictionary data, not on
   `parserSentence`.)
3. **Word clicks always take precedence.** A click on a word fires Word
   Popup only; it must never also trigger Sentence X-Ray. Event handling
   must stop propagation (or equivalent target-checking) so the two never
   fire together from one click.

## Universal rendering contract

Rather than defining this surface-by-surface, one rule governs all of
them: **any component that renders human-readable German sentences must
render them through the shared Sentence component** (word-click and
sentence-click wiring, Word Popup, and Sentence X-Ray all included by
construction). Story, Dialogue, Reading, Listening transcript, Grammar
examples, Writing examples, Exam examples, and any future surface (AI
Tutor, Chat, Exam Review, Writing Feedback, Speaking Transcript) inherit
the same interaction model automatically by using this component — no
separate architecture decision required per future feature.

## Layer 2 — Sentence Insight (attention)

**Owns:** pointing the learner toward something worth noticing. Nothing more.

Consumes Layer 1 data as its only source of fact; never re-derives grammar,
never re-explains the whole sentence, never stands in for Grammar Breakdown.

Rules:
- Optional at the whole-block level. Omitted, not just short, when nothing
  in this sentence genuinely earns attention. Silence is a valid and
  expected outcome, especially at C1–C2.
- Usually 1–2 sentences of pointer text.
- Proof (a reordered/contrasted restatement) is a tool, used only when
  reordering itself is the demonstration (case-marking invariance, V2) —
  never attached by default.
- Why and Pattern are tools, not mandatory subfields. Use only what a given
  sentence actually needs; never pad to fill a template shape.
- No mandatory Hero Insight. No fabricated importance. No filler.
- Authoring test before writing anything: "does this sentence genuinely
  have something worth pointing at, beyond what Grammar Breakdown already
  shows?" If no, write nothing.
- Expected density varies by level: most A1–A2 concept sentences likely
  warrant a short pointer (first-time learners need triage). Many B2–C2
  sentences will have none (learners can read the Breakdown unaided).

## Layer 3 — Word Popup (word facts)

**Owns:** per-word lookup — the 10-field popup (word, pron, IPA, audio, EN,
HI, role badge, case badge, why, example) triggered by tapping any
`.de[data-word]`.

This is the atomic-level escape hatch: if a learner's confusion isn't the
thing Layer 2 pointed at, or isn't covered by Layer 1's sentence-wide view,
tapping the specific word always gives an objective, independent answer.
Never re-derives from Layer 1/2; reads its own dictionary data.

## Non-overlap contract

- Grammar Breakdown never narrates. Sentence Insight never re-exposes full
  structure. Word Popup never depends on either running first.
- Only one direction of dependency: Sentence Insight → parserSentence
  (read-only). Grammar Breakdown → parserSentence (read-only). Neither
  layer writes to or duplicates the other's output.
- If content seems to belong in two layers at once, that's a signal the
  content is miscategorized, not that the layers should merge.
