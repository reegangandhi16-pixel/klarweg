# Parser Completeness Roadmap

Goal: bring every chapter's `parserSentence` to the a2-13 standard —
every word in the sentence present as a token, every token given its own
correct grammatical role (not just the one concept word highlighted).
This is a data-authoring project, not a code project.

## 1. Chapters already complete (a2-13 standard)

**54 of 259** — mostly A1 (15) and A2 (32), plus 7 scattered B1/B2. Full
list in the audit script output; concentrated early in the curriculum
because those chapters' `parserSentence` happen to already be short,
simple, fully-tagged sentences (the original authoring style matched the
standard by coincidence, not by a deliberate "complete parse" rule).

## 2. Chapters with only concept-level `parserSentence`

**204 of 259** — the large majority, spanning every level, but heaviest
in B1/B2/C1/C2 where sentences are longer and only 2–3 words tied to that
chapter's specific grammar point are tagged; the rest are absent or
`plain`.

## 3. Chapters with no `parserSentence` at all

**1 of 259** — chapter-a1-1. (Likely the very first chapter, predates the
field being adopted.)

## 4. Effort estimate

Re-authoring ~204 chapters + 1 missing one, each requiring:
- Reading the full concept sentence already in that chapter's story/reading/grammar content.
- Tokenizing every word (including contractions per Finding 2 of the prior audit, and function words currently skipped).
- Assigning each token a role from a single shared, finite vocabulary (see Q5 — this depends on Finding 1 being resolved first, otherwise we're just repeating the same undefined-role mistake 204 more times).

This is inherently linguistic authoring — matching German case, POS, and
clause structure isn't optional-detail work, it's the entire point of the
dataset. Rough sizing: a2-13's 7-token sentence took real back-and-forth to
get right (the "zur" bug survived one full review pass before being
caught). At a similar率 of care, this is a few-hundred-sentence authoring
project, not a find-and-replace — budget for iteration, not a single pass.

## 5. Semi-automation vs. human authoring

Split by sub-task:
- **Safe to semi-automate:** tokenization (splitting the sentence into
  words/punctuation) and a first-pass role guess for closed-class,
  unambiguous words (articles, pronouns, common prepositions) — these have
  small, rule-governed vocabularies.
- **Requires human (or careful model) linguistic judgment, chapter by
  chapter:** case assignment on ambiguous nouns, clause-boundary/V2/verb-
  final marking, dependency relations, and — critically — deciding what
  the *chapter-specific* concept role should be vs. reusing a canonical
  one. Auto-generating this from surface form alone risks silently
  reintroducing exactly the "zur = Place" class of error the last audit
  caught, at 200x scale, with no reviewer per-sentence.
- Recommended shape: semi-automated first-pass token+role suggestions,
  human/reviewed confirmation per sentence before it's considered
  "complete" — not a blind batch script.

## 6. Reusability beyond Grammar Breakdown

Yes, clearly — a complete, consistent `parserSentence` per chapter is
exactly the kind of structured linguistic ground truth that adaptive
features need and currently don't have:
- **AI Tutor** could reference exact roles/cases to explain a specific
  learner mistake instead of guessing from raw text.
- **Adaptive hints/exercises** could generate fill-in-the-blank or
  reorder drills directly from tagged tokens, no separate authoring.
- **Future Sentence X-Ray tooling** (whatever form it takes) inherits
  correctness for free instead of re-deriving it.

This is the strongest argument for treating dataset completeness as the
real foundation, ahead of any UI work — it's leverage that compounds.

## Before any authoring starts

Finding 1 from the prior audit (148 chapters' custom roles have no
defined label/color) must be resolved first — deciding the final finite
role vocabulary. Otherwise every newly-authored "complete" sentence still
risks using an undefined role, and the 204-chapter effort has to be
redone once the vocabulary is fixed. Recommend: freeze the canonical role
list, then start authoring against it.
