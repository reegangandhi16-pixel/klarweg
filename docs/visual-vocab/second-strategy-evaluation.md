# Second visual strategy — evaluation (2026-11-20)

Branch `feat/visual-vocab-coverage-2` · **not merged, not deployed.**

## What was tested
48 cards rendered through the real `chapter-app.js` (local preview):
24 UI-rendered visuals (grammar sentences, maps, numbers, week and year strips) and 24 AI images
(6 two-panel connector pairs = 12 images, 12 captioned scenes). Contact sheet of all 24 AI images:
`second-strategy-evaluation-sheet.jpg`.

## Result
| Visual | Passed QA | Human verdict |
|---|---|---|
| UI visuals (24) | n/a (no image) | teach: correct German, highlight on the target, readable on phone |
| Connector pairs (6: bevor, seit, ob, als, immer wenn, diesmal) | 0 / 6 | **do not teach.** *als* = a city next to a village, *ob* = a door and a dial, *immer wenn* = a dog barking; two contain text |
| Scenes for adverbs / particles (jedenfalls, sowieso, irgendwo, nirgends …) | 0 | generic scenes (subway, gym, laboratory) a learner would mis-read |
| Scenes for content words (Juli, bluten, Geburtsort, Lieblingszimmer, Anforderung, ableiten) | 1 + fixable | concrete words work; failures were stray text, a frame, missing detail, all retryable |
| *man*, *d.h.* (scene of the example sentence) | 2 / 2 | acceptable: the picture shows the card's own sentence; kept |

## Decision
Owner rule: “Do not force an incorrect or misleading picture simply to reach 100%.”

* **Pairs (39), scenes for function words (210) and two aliases** → no AI image. They get the
  *sentence-focus* visual instead: the card's own (audited) example sentence, the word
  highlighted with the neutral `focus` style, caption `word = meaning`. File:
  `prompts/second-strategy-focus.json` (251 entries, merged after the hand-checked manual entries).
  Kept: nouns, verbs, adjectives (481 scenes) — they go to image generation with the same vision QA.
* A content-word scene that exhausts its attempts without passing QA falls back to the same
  sentence-focus visual (never a failed picture).
* Two aliases (*neulich*, *übrigens*) whose root became a sentence visual get their own.

## Already-accepted first-strategy pictures of function words
Earlier, individually reviewed pictures of some particles (e.g. *doch* — "Komm doch mit!") stay;
they were reviewed against their own example sentence and are not part of this evaluation.
