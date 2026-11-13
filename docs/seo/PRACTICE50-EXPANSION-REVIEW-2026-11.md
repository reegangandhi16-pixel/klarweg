# Second practice batch — 14 November 2026

Base: `918ce1b836b1054307a948de34be6a76f444a965` (merged PR #330).

## Scope and status

Adds exactly **50 additional A1–B2 practice pages**, bringing the library to **100 lessons plus its existing hub**. New lessons: A1 10, A2 14, B1 14, B2 12. Combined level totals: A1 24, A2 28, B1 26, B2 22.

Each new lesson contains a topic-specific rule, common mistake, four German model sentences with English meanings, four gap-fill questions with explained answers, revision guidance, links to related practice/grammar and the same level's free Chapter 1. The shared navy/brand-green design is reused; no orange styling, new runtime scripts, tracking, images or dependencies are introduced.

This is a reviewable draft. **Native German linguistic and pedagogic review remains pending.** Content received an AI-assisted review; no human linguistic review, accredited CEFR assessment or official exam status is claimed. Publication of the previous batch does not imply approval to merge or deploy this batch.

## Content and duplication review

- The original four source datasets are unchanged. A direct comparison against the base commit confirmed that the original 50 generated pages' hero, rule, examples, questions, explanations and revision sections remain byte-for-byte identical. Their generated comments and some related links change as the library expands; all original URLs are preserved.
- The new 50 topics fill grammar-practice gaps rather than create city, country or synonym variants of existing pages. Examples include plural formation, imperatives, fixed prepositions, adjective endings, time sequencing, conditional clauses, dative/genitive relative pronouns and additional passive constructions.
- All 100 titles, rules and mistake notes are distinct across the combined library. All **400 model sentences and 400 question prompts** are distinct across the two batches. This is a mechanical exact-string check, not proof of external originality or pedagogic quality.
- Comparing the 200 new model sentences against the text of the 196 previously indexed pages found one conventional sentence also used on an existing grammar guide: `Er trinkt weder Kaffee noch Tee.` It is retained as a clear standard example. No site-wide originality or external plagiarism-check claim is made.
- Every new page has a bespoke 100–170 character description and explicit task instructions. Verb/tense cues constrain ambiguous gaps. Notes distinguish valid alternatives, including `backt` / `bäckt`, `sodass` / `so dass`, and relative `wo` versus a formal preposition + relative pronoun.
- Open conditions and concessions do not pretend that a single connector is always mandatory; the tasks supply a connector or meaning cue. Object-order questions explicitly request neutral, unstressed order. Modal meanings of `sein + zu` are explained as context-dependent.
- Where the linked grammar guide is a related foundation rather than the exact topic, the link label says so (for example, causative `lassen` links to modal verb brackets).

## SEO and publication wiring

- All 50 new HTML paths are explicit allowlist entries and sitemap entries. The sitemap grows from **196 to 246 URLs**.
- The hub and Resources page show the correct 100-lesson count. The hub contains a link to each lesson and a matching 100-item structured-data list.
- Every lesson has one H1, a self-canonical, unique title/description, matching OG metadata, Twitter metadata, LearningResource and BreadcrumbList. English explanation pages mark the German examples and answers with `lang="de"`.
- Source `.html` URLs follow repository conventions. Artifact checks verify that sitemap, canonical, OG, JSON-LD and internal links consistently advertise the clean URLs after publication-time rewriting.
- Each lesson has same-level peer links; every lesson receives at least one contextual link from another practice page, in addition to the hub link. Original lessons bridge into the new batch without losing their destinations or teaching content.
- No traffic, keyword-volume, indexing or ranking results are claimed. This content is designed for learners to complete actual exercises, not to guarantee search inclusion. Review usefulness and indexing before further bulk expansion.

## Generation and regression coverage

`docs/seo/practice-batches.json` registers the original datasets and the new `practice-expansion-20261114.json`. Each batch declares its lesson and level counts. The generator rejects repeated batch IDs, repeated/unsafe source paths, invalid counts and malformed/duplicate learning content. It reads only explicit JSON source paths under `docs/seo/`.

The existing template, stylesheet, public origin and generator remain the shared implementation. New descriptions are per-topic; the hub description/counts come from the registered inventory. `npm run check:generated` verifies all 101 HTML outputs, and tests reject missing/orphaned pages, broken links/fragments and unpublished destinations.

Artifact and browser audits now derive their expected inventory from the registered datasets. The site CI workflow also builds the public artifact and runs the artifact SEO, clean-URL and mobile/desktop browser audits after the full test suite; it publishes nothing.

## Validation

| Check | Result |
| --- | --- |
| `npm test` | 801 tests: 800 passed, 0 failed, 1 private-roster skip; generated checks passed. |
| `npm run check:generated` | Passed independently; all 101 practice HTML files current. |
| `npm run test:exam` | 632 tests: 628 passed, 0 failed, 4 existing optional encoder skips. |
| Public artifact build and independent content leak check | Passed: 722 public files; no prohibited paths or private content detected. |
| Artifact SEO audit | Passed: 246 distinct sitemap URLs with matching canonicals, 101 practice pages, 202 JSON-LD blocks, 2,317 local link/asset references. Source datasets/manifest/templates excluded. |
| Clean-URL check | Passed; no further rewrites needed. |
| Chromium browser audit | 404/404 combinations passed: 101 pages at 320, 390, 768 and 1440px. No horizontal overflow, page errors, failed HTTP responses or external requests. CSS, H1/IDs/canonical, CTA contrast, 44px answer targets and every keyboard disclosure tested; native answers work with page scripts disabled. |
| Visual spot checks | New A1–B2 pages and the expanded hub inspected on mobile/desktop screenshots; navy/green styling, line wrapping and readability checked. |
| Original batch preservation | Original four datasets unchanged; all 50 teaching-content blocks match the base commit exactly. |
| `git diff --check` | Passed. |

The browser audit is a Chromium check, not a cross-browser or human accessibility certification. The private-roster test requires owner-only input; optional encoder skips are reported rather than counted as passes. Remote CI results are recorded in the PR conversation after push.

## Protected areas

Diff against the base contains no changes to payments, authentication, checkout/enrolment production code, Access/Tutor Workers, chapter source/payloads, audio, exam content or the exam engine. No production deployment workflow is changed. New public paths contain only the 50 HTML lesson pages; datasets, templates, generators and review records stay outside the public artifact. The existing allowlist and content-level leak checks remain in force.

## Maintenance

Edit lesson content in `docs/seo/practice-expansion-20261114.json`; edit shared markup in `scripts/seo-practice/` and shared styling in `practice/practice.css`. Register a deliberately reviewed batch in `practice-batches.json` and update explicit sitemap/allowlist entries when changing inventory. Do not hand-edit generated HTML or rename published URLs casually.

```sh
npm run generate:practice
npm test
npm run check:generated
npm run test:exam
bash scripts/site-artifact.sh _site
node scripts/seo-practice-artifact.mjs _site
node scripts/clean-urls.mjs _site --check
node scripts/site-leak-check.mjs _site
npm run test:practice:browser
```

These commands build and test locally; they do not deploy. Chrome/Chromium and Node 22+ are required for the browser command; set `CHROME_PATH` when needed. `PRACTICE_SCREENSHOTS=/path/out` captures representative screenshots.

## New lesson inventory

| Level | Topic | File |
| --- | --- | --- |
| A1 | German Modal Verbs: A1 Present-Tense Practice | `practice/a1-modal-verbs-present-exercises.html` |
| A1 | Separable Verbs: German A1 Present-Tense Exercises | `practice/a1-separable-verbs-present-exercises.html` |
| A1 | German Stem-Vowel Changes: A1 Verb Exercises | `practice/a1-stem-vowel-change-verbs-exercises.html` |
| A1 | German Noun Plurals: A1 Exercises with Answers | `practice/a1-noun-plurals-exercises.html` |
| A1 | German Imperatives: Du, Ihr and Sie A1 Practice | `practice/a1-imperative-forms-exercises.html` |
| A1 | Es Gibt + Akkusativ: German A1 Exercises | `practice/a1-es-gibt-exercises.html` |
| A1 | German Dates and Ordinals: A1 Practice | `practice/a1-dates-and-ordinals-exercises.html` |
| A1 | Am, Im or Um? German A1 Time Exercises | `practice/a1-am-im-um-time-exercises.html` |
| A1 | German Verb-Second Order: A1 Sentence Practice | `practice/a1-verb-second-time-phrases-exercises.html` |
| A1 | Doch in Negative Questions: German A1 Practice | `practice/a1-doch-negative-questions-exercises.html` |
| A2 | German Dative Prepositions: A2 Practice | `practice/a2-dative-prepositions-exercises.html` |
| A2 | German Accusative Prepositions: A2 Exercises | `practice/a2-accusative-prepositions-exercises.html` |
| A2 | Im, Ins, Zum, Zur: German A2 Contractions | `practice/a2-preposition-article-contractions-exercises.html` |
| A2 | Nach, Zu or In? German A2 Destination Practice | `practice/a2-nach-zu-in-destinations-exercises.html` |
| A2 | Seit or Vor? German A2 Time Expressions | `practice/a2-seit-vor-time-exercises.html` |
| A2 | Adjectives After Der, Die, Das: German A2 Practice | `practice/a2-adjective-endings-definite-exercises.html` |
| A2 | Adjectives After Ein and Eine: German A2 Practice | `practice/a2-adjective-endings-indefinite-exercises.html` |
| A2 | Als or Wie? German A2 Comparison Exercises | `practice/a2-als-wie-comparisons-exercises.html` |
| A2 | Denn and Deshalb: German A2 Reason Clauses | `practice/a2-denn-deshalb-reasons-exercises.html` |
| A2 | Als or Wenn? German A2 Time-Clause Exercises | `practice/a2-als-wenn-past-events-exercises.html` |
| A2 | Sein or Ihr? German A2 Possessive Exercises | `practice/a2-possessives-sein-ihr-exercises.html` |
| A2 | Man or Es? German A2 Impersonal Sentences | `practice/a2-man-and-es-exercises.html` |
| A2 | Welcher, Welche, Welches: German A2 Practice | `practice/a2-welcher-question-words-exercises.html` |
| A2 | Etwas, Nichts, Jemand, Niemand: A2 Exercises | `practice/a2-etwas-nichts-jemand-niemand-exercises.html` |
| B1 | Futur I with Werden: German B1 Exercises | `practice/b1-futur-werden-infinitive-exercises.html` |
| B1 | Plusquamperfekt: German B1 Past-Perfect Practice | `practice/b1-plusquamperfekt-forms-exercises.html` |
| B1 | Nachdem: German B1 Past-Sequence Exercises | `practice/b1-nachdem-past-sequence-exercises.html` |
| B1 | Bevor and Während: German B1 Time-Clause Practice | `practice/b1-bevor-waehrend-time-exercises.html` |
| B1 | Bis and Seitdem: German B1 Time Clauses | `practice/b1-bis-seitdem-time-exercises.html` |
| B1 | Wenn and Falls: German B1 Conditional Practice | `practice/b1-wenn-falls-conditions-exercises.html` |
| B1 | Unreal Conditions: German B1 Konjunktiv II Practice | `practice/b1-unreal-conditions-konjunktiv-ii-exercises.html` |
| B1 | Ohne Zu and Statt Zu: German B1 Infinitive Practice | `practice/b1-ohne-zu-statt-zu-exercises.html` |
| B1 | Zu with Separable Verbs: German B1 Exercises | `practice/b1-zu-with-separable-verbs-exercises.html` |
| B1 | German Object Order: B1 Dative and Accusative Practice | `practice/b1-accusative-dative-object-order-exercises.html` |
| B1 | Verbs with Fixed Prepositions: German B1 Practice | `practice/b1-fixed-verb-prepositions-exercises.html` |
| B1 | Darauf, Dafür, Daran: German B1 Da-Compound Practice | `practice/b1-da-compounds-exercises.html` |
| B1 | Dative Relative Pronouns: German B1 Exercises | `practice/b1-relative-clauses-dative-exercises.html` |
| B1 | Adjectives as Nouns: German B1 Ending Practice | `practice/b1-adjectives-as-nouns-exercises.html` |
| B2 | German Passive in Perfekt: B2 Exercises | `practice/b2-passive-perfect-tense-exercises.html` |
| B2 | German Passive with Modal Verbs: B2 Practice | `practice/b2-modal-passive-exercises.html` |
| B2 | Zustandspassiv with Sein: German B2 Exercises | `practice/b2-state-passive-sein-exercises.html` |
| B2 | Sein + Zu + Infinitive: German B2 Practice | `practice/b2-sein-zu-infinitive-exercises.html` |
| B2 | Auch Wenn and Selbst Wenn: German B2 Exercises | `practice/b2-auch-wenn-selbst-wenn-exercises.html` |
| B2 | Indem and Dadurch Dass: German B2 Method Clauses | `practice/b2-indem-dadurch-dass-method-exercises.html` |
| B2 | Sodass and So ... Dass: German B2 Result Clauses | `practice/b2-sodass-consequences-exercises.html` |
| B2 | Dessen and Deren: German B2 Relative Clauses | `practice/b2-relative-clauses-genitive-exercises.html` |
| B2 | Was and Wo in Relative Clauses: German B2 Practice | `practice/b2-relative-clauses-was-wo-exercises.html` |
| B2 | Entweder ... Oder and Weder ... Noch: B2 Practice | `practice/b2-entweder-oder-weder-noch-exercises.html` |
| B2 | Sowohl ... Als Auch: German B2 Additive Connectors | `practice/b2-additive-paired-connectors-exercises.html` |
| B2 | Causative Lassen in Perfekt: German B2 Exercises | `practice/b2-causative-lassen-perfect-exercises.html` |
