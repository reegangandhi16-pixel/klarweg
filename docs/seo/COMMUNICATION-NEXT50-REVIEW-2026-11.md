# Further communication practice batch — 14 November 2026

Base: `39cef604bca28bc590531997bdf7ccdc0cb6f20c` (merged PR #336).

## Scope and editorial status

Exactly **50 new communication lessons**: A1 10, A2 16, B1 14, B2 10. Proposed library: **400 lessons plus the existing hub**, with 100 each in grammar, word choice, communication and vocabulary. Combined levels: A1 90, A2 122, B1 114, B2 74.

Each lesson has a communication purpose, usage guidance, a mistake/limitation note, four newly written German models with English meanings and four contextual self-check questions with explanations. A word bank contains the four intended answers, each used once. Cues identify the intended meaning or verb form; standard alternatives such as gern/gerne are noted where relevant.

A1 covers languages, age/birthdays, locations, preferences, thanks, time, basic needs, plans and street addresses. A2 adds practical requests and clarifications. B1 covers paraphrasing, summaries, sources, viewpoints, recommendations, boundaries, goals and presentations. B2 covers assumptions, causation, scope, interests, bounded trials, claim revision and conditional agreement. Spoken-use labels describe phrase practice; no audio or pronunciation assessment is added.

**AI-assisted editorial review only. Native German linguistic/pedagogic review remains pending; no human linguistic review is claimed.** CEFR labels identify intended practice rather than certification. Some supporting structures stretch the stated level; English translations and cues provide support.

The wording distinguishes requests from completed actions, wishes from confirmed arrangements, estimates from guarantees, a source's statement from verification, and a shared trend from a demonstrated cause. The restaurant and service examples are language material, not actual transactions or statements of a provider's policies.

## Preservation and duplication

- All **ten earlier source datasets** are byte-for-byte unchanged.
- All **350 existing lesson metadata heads and teaching blocks**, from hero through revision section, are byte-for-byte identical to base. Published URLs remain stable; some peer links change to connect this batch.
- All 400 titles, explanations and mistake notes are distinct by exact-string checks. All **1,600 model sentences and 1,600 prompts** are distinct after case/punctuation/spacing normalization, enforced in tests.
- The 200 new model sentences were compared with text on the **496 previously sitemap-listed pages**. No complete normalized sentence matches were found. This is local overlap checking, not external originality verification or proof of pedagogic quality.
- Related themes are acknowledged. Preferences build on gern/gut; lending requests complement lending vocabulary; source attribution overlaps earlier fact/opinion language; a bounded pilot develops an earlier short-test suggestion; conditional agreement broadens an existing workload example. The new pages use different contextual models and tasks with a narrower or different communicative focus. Short common phrases and the reusable layout naturally recur.

## SEO, links and design

New pages have descriptive topic/level titles, bespoke descriptions, one H1, self-canonical, matching social metadata, LearningResource and BreadcrumbList. Titles including brand fit within 70 characters; descriptions are 100–170 characters. Source `.html` references follow the repository convention; artifact validation checks clean canonical, sitemap, schema and link URLs after the build rewrite.

The existing hub lists all 400 lessons under level/type groups, with CollectionPage ItemList order matching visible order. All 16 category shortcuts resolve. All 50 new pages have explicit allowlist and sitemap entries; sitemap grows from 496 to **546 URLs**. The existing communication card on resources now links to the new languages lesson, preserving the six-card layout. The previous feedback lesson remains discoverable through the hub and peers.

Every new lesson links to same-level practice peers, an accurately labelled grammar foundation and the free Chapter 1 at its level. A pilot proposal links to temporal subordinate clauses for bevor; conditional agreement links to general sentence structure. These are grammar foundations, not claims that each reference contains the exact communication scenario.

Generator, templates, CSS, dependencies, domains and deployment workflows are unchanged. New pages reuse navy `#0f172a` and brand green `#1fa84b`; no orange, scripts, tracking, fonts, images or dependencies are added. Existing focus indicators, reduced-motion support, 44px answer targets and native keyboard disclosures remain in use.

Titles describe learner topics and intent. No live keyword-volume/competition research, Search Console validation, ranking promise or indexing outcome is claimed. Learner usefulness and actual indexing/performance data should guide further expansion.

## Maintainability

The eighth manifest batch registers `communication-expansion-20261114.json`, expected count 50 and its level distribution. It reuses the communication kind and answer-bank validation without a new rendering path. Tests cover 400 outputs, original batches, normalized content uniqueness, bank integrity, metadata/schema, publication wiring, local links and hub anchors. Browser inventory stays manifest-driven; four new representatives are included for optional screenshots.

## Validation

| Check | Result |
| --- | --- |
| `npm test` | 808 tests: 807 passed, 1 skipped, 0 failed; generated verification also passed |
| Independent `npm run check:generated` | Passed; 400 lessons + hub, no drift |
| `npm run test:exam` | 632 tests: 628 passed, 4 skipped, 0 failed |
| Targeted practice/static/resources tests | 25 passed, 0 failed |
| Public artifact build and leak checks | Passed; 1,022 explicitly allowed files, no private-content findings |
| Practice artifact SEO/link audit | Passed; 546 sitemap URLs, 401 practice pages, 802 JSON-LD blocks, 9,233 local links/assets |
| Clean URL check | Passed; no further changes required |
| Chromium responsive/interaction sweep | All 1,604 combinations passed: 401 pages × 320/390/768/1440px; zero page errors, failed requests or external requests; native answers work without JavaScript |
| Resources browser check | Passed at 390/1440px; six cards, no overflow/errors, revised communication link opens the intended lesson |
| Screenshot inspection | Inspected A1/A2 mobile, B1/B2 desktop, hub mobile/desktop and resources mobile/desktop; readable wrapping and navy/green practice styling |
| Preservation/scope/whitespace | Ten prior datasets and 350 existing lesson heads/teaching blocks unchanged; exactly 50 new lesson HTMLs; protected paths unchanged; `git diff --cached --check` passed |

Skipped tests are reported separately. Browser coverage uses Chromium at the stated widths, not cross-browser or human accessibility certification. Remote CI results will be recorded on the PR.

## Protected scope and publication gate

Payments, auth, checkout/enrolment, Access/Tutor Workers, paid chapter/audio content and payloads, exam content/engine, domains and publication workflows are unchanged. Public additions are exactly 50 lesson HTML files. Datasets, manifest, scripts, tests and this audit remain outside the public artifact. Existing private-content boundary and leak guards remain intact.

This creation task does not merge, deploy or enable auto-merge. Publication requires passing checks and a separate owner instruction approving this batch.

## Maintenance commands

Edit the JSON source and regenerate; do not hand-edit generated HTML. Keep four distinct bank answers, clear contextual cues and notes for natural alternatives. Register dataset paths, sitemap URLs and public allowlist entries explicitly.

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

These commands build/test locally without publishing. Browser checks require Node 22+ and Chrome/Chromium; use `CHROME_PATH` if needed and `PRACTICE_SCREENSHOTS=/path/out` for captures.

## New lesson inventory

| Level | Purpose | File |
| --- | --- | --- |
| A1 | Age and Birthdays in German: A1 Phrase Practice | `practice/a1-age-and-birthday-communication-exercises.html` |
| A1 | Talking About Languages in German: A1 Phrase Exercises | `practice/a1-talking-languages-communication-exercises.html` |
| A1 | Locating Objects in German: A1 Phrase Practice | `practice/a1-locating-everyday-objects-communication-exercises.html` |
| A1 | Likes and Dislikes in German: A1 Phrase Exercises | `practice/a1-likes-and-dislikes-communication-exercises.html` |
| A1 | Identifying Objects in German: A1 Question Practice | `practice/a1-identifying-objects-communication-exercises.html` |
| A1 | Thanking and Replying in German: A1 Phrase Practice | `practice/a1-thanking-and-replying-communication-exercises.html` |
| A1 | Asking the Time in German: A1 Phrase Exercises | `practice/a1-asking-current-time-communication-exercises.html` |
| A1 | Basic Needs in German: A1 Phrase Practice | `practice/a1-expressing-basic-needs-communication-exercises.html` |
| A1 | Weekend Plans in German: A1 Phrase Exercises | `practice/a1-weekend-plans-communication-exercises.html` |
| A1 | Giving an Address in German: A1 Phrase Practice | `practice/a1-giving-street-address-communication-exercises.html` |
| A2 | Finding the Right Counter in German: A2 Phrase Practice | `practice/a2-finding-right-counter-communication-exercises.html` |
| A2 | Asking About Ingredients in German: A2 Phrase Exercises | `practice/a2-asking-food-ingredients-communication-exercises.html` |
| A2 | Checking a Shared Bill in German: A2 Phrase Practice | `practice/a2-checking-shared-bill-communication-exercises.html` |
| A2 | Borrowing an Object in German: A2 Phrase Exercises | `practice/a2-borrowing-object-communication-exercises.html` |
| A2 | Leisure Suggestions in German: A2 Phrase Practice | `practice/a2-leisure-suggestions-communication-exercises.html` |
| A2 | Travel Duration in German: A2 Question Practice | `practice/a2-asking-travel-duration-communication-exercises.html` |
| A2 | Talking About Yesterday in German: A2 Phrase Exercises | `practice/a2-talking-about-yesterday-communication-exercises.html` |
| A2 | Correcting Details in German: A2 Phrase Practice | `practice/a2-correcting-written-details-communication-exercises.html` |
| A2 | Checking What Is Included in German: A2 Phrase Practice | `practice/a2-checking-service-inclusions-communication-exercises.html` |
| A2 | Leaving a Phone Message in German: A2 Phrase Exercises | `practice/a2-leaving-phone-message-communication-exercises.html` |
| A2 | Asking About Homework in German: A2 Phrase Practice | `practice/a2-asking-homework-instructions-communication-exercises.html` |
| A2 | Asking How to Use a Device: German A2 Phrase Practice | `practice/a2-asking-device-instructions-communication-exercises.html` |
| A2 | Requesting Quiet in German: A2 Phrase Exercises | `practice/a2-requesting-quiet-communication-exercises.html` |
| A2 | Offering a Lift in German: A2 Phrase Practice | `practice/a2-offering-lift-communication-exercises.html` |
| A2 | Asking for a Seat in German: A2 Phrase Exercises | `practice/a2-asking-about-seat-communication-exercises.html` |
| A2 | Explaining an Absence in German: A2 Phrase Practice | `practice/a2-explaining-class-absence-communication-exercises.html` |
| B1 | Asking for an Example in German: B1 Phrase Practice | `practice/b1-asking-for-example-communication-exercises.html` |
| B1 | Paraphrasing Meaning in German: B1 Phrase Exercises | `practice/b1-paraphrasing-meaning-communication-exercises.html` |
| B1 | Summarizing a Text in German: B1 Phrase Practice | `practice/b1-summarizing-article-communication-exercises.html` |
| B1 | Naming a Source in German: B1 Phrase Exercises | `practice/b1-naming-information-source-communication-exercises.html` |
| B1 | Comparing Viewpoints in German: B1 Phrase Practice | `practice/b1-comparing-viewpoints-communication-exercises.html` |
| B1 | Expectations and Reality in German: B1 Phrase Exercises | `practice/b1-expectation-and-reality-communication-exercises.html` |
| B1 | Giving a Recommendation in German: B1 Phrase Practice | `practice/b1-giving-recommendation-communication-exercises.html` |
| B1 | Reassuring Someone in German: B1 Phrase Exercises | `practice/b1-reassuring-minor-mistake-communication-exercises.html` |
| B1 | Requesting Updates in German: B1 Phrase Practice | `practice/b1-requesting-future-updates-communication-exercises.html` |
| B1 | Personal Boundaries in German: B1 Phrase Exercises | `practice/b1-personal-boundaries-communication-exercises.html` |
| B1 | Stating Goals in German: B1 Phrase Practice | `practice/b1-stating-goals-communication-exercises.html` |
| B1 | Qualifying Generalizations in German: B1 Phrase Practice | `practice/b1-qualifying-generalizations-communication-exercises.html` |
| B1 | Acknowledging Contributions in German: B1 Phrase Exercises | `practice/b1-acknowledging-contribution-communication-exercises.html` |
| B1 | Presentation Openings and Endings: German B1 Practice | `practice/b1-opening-closing-presentation-communication-exercises.html` |
| B2 | Correlation and Causation in German: B2 Phrase Practice | `practice/b2-correlation-causation-communication-exercises.html` |
| B2 | Polite Interruptions in German: B2 Phrase Exercises | `practice/b2-polite-interruption-communication-exercises.html` |
| B2 | Challenging an Assumption in German: B2 Phrase Practice | `practice/b2-challenging-assumption-communication-exercises.html` |
| B2 | Defining Scope in German: B2 Phrase Exercises | `practice/b2-defining-project-scope-communication-exercises.html` |
| B2 | Disclosing an Interest in German: B2 Phrase Practice | `practice/b2-disclosing-interest-communication-exercises.html` |
| B2 | Proposing a Pilot in German: B2 Phrase Exercises | `practice/b2-proposing-pilot-communication-exercises.html` |
| B2 | Revising a Claim in German: B2 Phrase Practice | `practice/b2-revising-claim-communication-exercises.html` |
| B2 | Explaining Trade-offs in German: B2 Phrase Exercises | `practice/b2-explaining-goal-tradeoff-communication-exercises.html` |
| B2 | Clarifying a Misunderstanding in German: B2 Practice | `practice/b2-clarifying-misunderstanding-communication-exercises.html` |
| B2 | Conditional Agreement in German: B2 Phrase Practice | `practice/b2-conditional-agreement-communication-exercises.html` |
