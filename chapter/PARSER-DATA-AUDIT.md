# parserSentence Data Quality Audit (full curriculum, 259 chapters)

Scope: mechanical + spot-check audit of the `parserSentence` field only (the
single source of truth for Live Parser, Grammar Breakdown, and Sentence
Insight). No fixes applied — report only, per instruction.

## Finding 1 — Missing color/label definitions for 148 of 259 chapters (highest severity)

`chapter-app.js`'s `ROLE_NAMES` table (the only lookup Grammar Breakdown /
Live Parser use for a token's short label) defines **13 roles**: r-subject,
r-pronoun, r-verb, r-object, r-time, r-place, r-article, r-preposition,
r-akkusativ, r-dativ, r-question, r-adjective, r-adverb. The renderer also
paints each token's background from `var(--g-<role-without-prefix>)`.

148 chapters' `parserSentence` use custom, chapter-specific role names
instead (e.g. `r-idiom`, `r-doch`, `r-diskursmarker`, `r-vergleich`,
`r-konji`, `r-passiversatz`, `r-namensschild-metapher` — full list of 120+
distinct custom roles saved separately). None of these have a `--g-*` CSS
variable defined, and none are in `ROLE_NAMES`.

**Current output:** for every token using one of these roles, the label
span renders empty (`ROLE_NAMES[t.role] || ''`) and the background color
resolves to nothing (undefined CSS var) — the token displays with no
label and no highlight color, i.e. the Live Parser's core "see the
structure in color" mechanic is silently broken for the majority of the
curriculum, not just for Sentence Insight.

**Correct output:** either (a) every custom role needs a matching entry in
`ROLE_NAMES` + a `--g-<role>` CSS variable, or (b) each chapter-specific
role should be remapped onto the closest one of the ~13 canonical roles
(plus perhaps a small, fixed extension set) so the whole curriculum shares
one consistent, finite vocabulary — consistent with the "same parser
conventions across A1–C2" requirement.

**Reason:** this predates the Sentence Architecture freeze — these
`parserSentence` arrays were authored per-chapter for the original Live
Parser (spec 4.3), which apparently allowed free-form custom labels for
whatever that chapter's specific concept was, without a shared palette.
That approach cannot support "one consistent parser vocabulary across
A1–C2," which the frozen architecture now requires of Grammar Breakdown.

Representative examples (pattern repeats ~120+ times):
- b2-06-es-in-festen-ausdruecken: `r-idiom` on "Es tut mir leid" — no color/label defined.
- b1-25 uses `r-negation` (defined, fine) but neighbouring b2-55 uses `r-doch` (undefined).
- c2-25-appositionen: `r-namensschild-metapher` — undefined.
- c2-28-praepositionen-der-schriftsprache: `r-anzug-metapher` — undefined.
- c1-05: `r-addition` — undefined.

## Finding 2 — Contraction tokens mislabeled with the noun's semantic role (2 confirmed instances)

Same bug class as the "zur" issue already fixed in the a2-13 example.

1. **chapter-b1-13-goethe-mini-2**
   Sentence: "Die Wohnung wird uns am Morgen gezeigt"
   Current: `{ w: 'am', role: 'r-time' }`
   Correct: `{ w: 'am', role: 'r-preposition' }`, with `Morgen` (already present) carrying `r-time`.
   Reason: "am" = an + dem, a preposition+article contraction. Per the frozen rule, it must be tagged as its own POS (preposition), never inherit the following noun's semantic role.

2. **chapter-b2-51-erweiterte-partizipialattribute**
   Sentence: "Der im Labor arbeitende Student"
   Current: `{ w: 'im', role: 'r-partizip' }`
   Correct: `{ w: 'im', role: 'r-preposition' }` (Labor would carry the place/participle-phrase role as appropriate).
   Reason: same contraction rule; "im" (in + dem) is being used to mark the participial-phrase span rather than its own preposition identity.

No other contraction words (ans, aufs, beim, durchs, fürs, ins, vom, zum,
zur) were found mistagged elsewhere in the curriculum — this pattern is
otherwise contained to these 2 chapters.

## Finding 3 — Systemic completeness gap: most `parserSentence` entries are partial highlights, not full parses

Median token count across all 258 populated `parserSentence` arrays is
**5 tokens** (min 3, max 12; 70 of 258 chapters tag 2 or fewer non-plain
tokens on a 5-word-or-shorter fragment). Examples:
- c2-01: `1939 beginnt der Krieg` — only "1939" and "beginnt" tagged; "der"/"Krieg" absent from role coverage.
- c1-18: `die neue Studie` — 3 tokens total, no verb, not a full sentence.
- c1-23: `Die neue Version ist überzeugender` — only "Die"/"neue" tagged; "Version"/"ist"/"überzeugender" all `plain`.

**Reason:** these arrays were authored for the original Live Parser design
— spotlighting just the one concept a chapter teaches, not decomposing the
whole sentence. That's a reasonable design for "point at this one thing,"
but it is fundamentally incompatible with the frozen Grammar Breakdown
invariant that it "reveals the complete grammatical structure of the
sentence" — Grammar Breakdown can only be as complete as the data it
reads. Right now, only chapter-a2-13 (the one built as the Sentence
Insight pilot) has a `parserSentence` that is a genuinely complete,
token-by-token parse of its whole sentence.

**This is the actual blocker for "Grammar Breakdown as the world's best
Sentence X-Ray"** — more so than Findings 1–2. Turning `parserSentence`
into a complete-parse dataset means re-authoring the majority of these 258
arrays, not just recoloring or renaming roles.

## Finding 4 — Consistency check on "mit dem Bus"-style dative-preposition phrases

Spot-checked chapters using aus/bei/mit/nach/seit/von/zu + dative article
(a2-13, a2-14, a1-45, a1-22, a2-1, b1-3): all tag the preposition itself as
`r-preposition` and both the article and noun as `r-dativ`, matching the
a2-13 convention. No inconsistency found in this specific construction
across the sample checked. A full pairwise consistency sweep across every
repeated construction type (all V2 sentences, all modal-verb brackets, all
subordinate clauses, etc.) was not performed at this scale — flag if you
want that expanded.

## Not fully audited at this scale (flagging honestly, not claiming coverage)

Items 4, 6, 8, 9, 10 from the original 12-point list — deep semantic
correctness of every individual case assignment, clause boundary, V2
marking, and dependency relation for all 259 hand-authored sentences —
were not exhaustively verified; that requires sentence-by-sentence
linguistic reading at a scale beyond what a single pass here covered.
Findings 1–4 above are the mechanically/systematically verifiable results.
Say the word if you want a full manual close-read pass next (it would be
slow — best done in batches by level).
