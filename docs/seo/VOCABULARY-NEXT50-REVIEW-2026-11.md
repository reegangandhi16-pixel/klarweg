# Further vocabulary practice batch — 14 November 2026

Base: `72750ea807783e8fe08450d70ec2a258a39d44c7` (merged PR #335).

## Scope and editorial status

Exactly **50 new themed vocabulary lessons**: A1 14, A2 16, B1 12, B2 8. Proposed library: **350 lessons plus the existing hub**, comprising 100 grammar, 100 word-choice, 50 communication and 100 vocabulary lessons. Combined levels: A1 80, A2 106, B1 100, B2 64.

Each page contains a distinct word group, usage guidance, a mistake/limitation note, four German models with English meanings and four contextual self-check tasks with explanations. A word bank contains the four intended answers, each used once. Noun lessons give gender and useful plural forms; verb and adjective lessons explain relevant patterns.

Themes range from clothing, school subjects and garden objects through transport, materials, education and logistics to evidence, statistics and formal text structure. New models and prompts were written for these lessons. Natural overlaps and alternative forms are noted where relevant, such as Harke/Rechen, Friseur/Frisör and versenden/verschicken. Formal discussion nouns have overlapping functions rather than rigidly exclusive meanings. Statistical vocabulary distinguishes a sample from representativeness and an outlier from an automatic error.

**AI-assisted editorial review only. Native German linguistic/pedagogic review remains pending; no human linguistic review is claimed.** CEFR labels identify intended vocabulary practice rather than certification; some supporting sentence structures are more demanding. English meanings and cues provide support. These are native-disclosure self-checks, not an automated assessment engine.

## Preservation and duplication

- All **nine earlier source datasets** are byte-for-byte unchanged.
- All **300 existing lesson metadata heads and teaching blocks**, from hero through revision section, are byte-for-byte identical to base. Existing URLs remain stable; some peer links change to connect this batch.
- All 350 titles, explanations and mistake notes are distinct by exact-string checks. All **1,400 model sentences and 1,400 prompts** are distinct after case/punctuation/spacing normalization, enforced in regression tests.
- The 200 new model sentences were compared with text on the **446 previously sitemap-listed pages**. No complete normalized sentence matches were found. This local check does not establish external originality or pedagogic quality.
- Thematic overlap is acknowledged. Transport nouns complement earlier ticket/directions phrases; textiles complement shopping phrases; wellbeing verbs complement simple feelings; evidence nouns complement research verbs; statistics terms complement trend-description phrases. Some individual words recur across contexts. The new focus is contextual vocabulary retrieval, not a claim that every theme or word has never appeared on the site.

## SEO, links and design

Each new page has a descriptive topic/level title, bespoke description, one H1, self-canonical, matching social metadata, LearningResource and BreadcrumbList. Titles including brand fit within 70 characters and descriptions within 100–170. Source `.html` conventions remain unchanged; artifact validation checks clean canonical, sitemap, schema and internal-link URLs after the build rewrite.

The hub lists all 350 lessons, grouped by level and four practice types. Its CollectionPage ItemList follows visible order, and all 16 category anchors resolve. All 50 new pages have explicit allowlist and sitemap entries. Sitemap grows from 446 to **496 URLs**. The existing vocabulary card on resources now links to the new clothing lesson, keeping the six-card layout. The prior family lesson remains linked from the hub and peers.

Each new lesson links to same-level peers, an accurately labelled grammar foundation and that level's free Chapter 1. The numbers guide linked from statistics is a foundation for numeric expressions, not a claim that the guide teaches advanced statistics.

Generator, templates, CSS, dependencies, domain and publication workflows are unchanged. New pages reuse navy `#0f172a` and brand green `#1fa84b`; no orange, page scripts, tracking, fonts or images are added. Existing focus, reduced-motion support, 44px answer targets and native keyboard disclosures remain in use.

Titles describe learner topics and intent. No live keyword-volume/competition research, Search Console validation, ranking promise or indexing outcome is claimed. Learner usefulness and actual indexing/performance data should guide subsequent expansion.

## Maintainability

The seventh manifest batch explicitly registers `vocabulary-expansion-20261114.json`, expected count 50 and its level distribution. It reuses the established vocabulary kind and answer-bank validation, without introducing another rendering path. Tests cover generation, 350-page inventory, original batches, normalized content uniqueness, metadata/schema, publication wiring, answer banks and local links. Browser inventory remains manifest-driven; four new representatives are included for optional screenshots.

## Validation

| Check | Result |
| --- | --- |
| `npm test` | PASS: 807 total, 806 passed, 1 skipped, 0 failures; generated checks included |
| Independent `npm run check:generated` | PASS: no drift, 350 lessons plus hub |
| `npm run test:exam` | PASS: 632 total, 628 passed, 4 skipped, 0 failures |
| Public artifact build | PASS: 972 explicitly allowed files |
| Artifact SEO/canonical/schema/link audit | PASS: 496 sitemap URLs, 351 practice pages, 702 JSON-LD blocks, 8,083 local links/assets checked |
| Clean URL verification | PASS: no remaining rewrites required |
| Public artifact leak check | PASS: 972 files, no prohibited private content; source files excluded |
| Chromium responsive/interaction audit | PASS: all 351 practice pages at 320/390/768/1440px, 1,404 combinations; no overflow, page errors, failed requests or external requests; keyboard disclosures and native answers without page JavaScript passed |
| Resources discovery | PASS: six cards at 390/1440px, no overflow or page errors; revised vocabulary link opens the new clothing lesson |
| Visual review | A1 clothing and A2 station objects at 390px; B1 education and B2 statistics at 1440px; hub and resources at both widths inspected |
| Preservation and duplication | PASS: nine old datasets and 300 lesson teaching blocks/metadata heads preserved; 1,400 models/prompts normalized-distinct; no complete new model matches against 446 prior sitemap pages |
| Scope and whitespace | Exactly 50 new lesson HTML files; protected paths, generator, templates and CSS unchanged; `git diff --cached --check` passed |

Skipped tests are reported separately from passes. Browser coverage is Chromium at the stated widths, not cross-browser or human accessibility certification. Remote CI results will be recorded on the PR.

## Protected scope and publication gate

Payments, auth, checkout/enrolment, Access/Tutor Workers, paid chapter/audio content and payloads, exam content/engine, domains and deployment workflows are unchanged. Public additions are exactly 50 lesson HTML files. Source datasets, manifest, scripts, tests and this audit remain outside the public artifact. Existing private-content boundary and leak guards remain intact.

This creation task does not merge, deploy or enable auto-merge. Publication requires passing checks and a separate owner instruction approving this batch.

## Maintenance commands

Edit the JSON source and regenerate; do not hand-edit generated HTML. Keep four distinct bank answers, give clear meaning cues, and document natural alternatives. Register dataset paths, sitemap URLs and public allowlist entries explicitly.

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

| Level | Topic | File |
| --- | --- | --- |
| A1 | German Clothing Vocabulary: A1 Exercises with Answers | `practice/a1-clothing-basics-vocabulary-exercises.html` |
| A1 | German Shoes and Accessories: A1 Vocabulary Practice | `practice/a1-footwear-accessories-vocabulary-exercises.html` |
| A1 | German Colour Words: A1 Vocabulary Exercises | `practice/a1-basic-colours-vocabulary-exercises.html` |
| A1 | German Shape and Alignment Words: A1 Vocabulary Practice | `practice/a1-shapes-alignment-vocabulary-exercises.html` |
| A1 | German Parts of the Day: A1 Vocabulary Exercises | `practice/a1-parts-of-day-vocabulary-exercises.html` |
| A1 | German Week and Day Types: A1 Vocabulary Practice | `practice/a1-week-and-day-types-vocabulary-exercises.html` |
| A1 | German School Subjects: A1 Vocabulary Exercises | `practice/a1-school-subjects-vocabulary-exercises.html` |
| A1 | German Animal Names: A1 Vocabulary Practice | `practice/a1-animals-vocabulary-exercises.html` |
| A1 | German Public Transport Vehicles: A1 Vocabulary Exercises | `practice/a1-public-transport-vehicles-vocabulary-exercises.html` |
| A1 | German Shopping Quantities: A1 Vocabulary Practice | `practice/a1-shopping-quantities-vocabulary-exercises.html` |
| A1 | German Light and Cleanliness Words: A1 Practice | `practice/a1-light-and-clean-adjectives-vocabulary-exercises.html` |
| A1 | German Personal Belongings: A1 Vocabulary Exercises | `practice/a1-personal-belongings-vocabulary-exercises.html` |
| A1 | German Indoor and Position Words: A1 Vocabulary Practice | `practice/a1-indoor-outdoor-position-vocabulary-exercises.html` |
| A1 | German Garden Nature Words: A1 Vocabulary Exercises | `practice/a1-garden-nature-vocabulary-exercises.html` |
| A2 | German Traffic Features: A2 Vocabulary Exercises | `practice/a2-traffic-features-vocabulary-exercises.html` |
| A2 | German Train Station Objects: A2 Vocabulary Practice | `practice/a2-train-station-objects-vocabulary-exercises.html` |
| A2 | German Airport Verbs: A2 Vocabulary Exercises | `practice/a2-airport-verbs-vocabulary-exercises.html` |
| A2 | German Seaside Vocabulary: A2 Exercises with Answers | `practice/a2-seaside-landscape-vocabulary-exercises.html` |
| A2 | German Weather Events: A2 Vocabulary Exercises | `practice/a2-weather-events-vocabulary-exercises.html` |
| A2 | German Textile Materials: A2 Vocabulary Practice | `practice/a2-textile-materials-vocabulary-exercises.html` |
| A2 | German Garden Tools: A2 Vocabulary Exercises | `practice/a2-garden-tools-vocabulary-exercises.html` |
| A2 | German Sound Verbs: A2 Vocabulary Practice | `practice/a2-sound-verbs-vocabulary-exercises.html` |
| A2 | German Messaging Vocabulary: A2 Exercises with Answers | `practice/a2-messaging-nouns-vocabulary-exercises.html` |
| A2 | German Craft Verbs: A2 Vocabulary Practice | `practice/a2-craft-actions-vocabulary-exercises.html` |
| A2 | German Moving Objects Verbs: A2 Vocabulary Exercises | `practice/a2-moving-objects-vocabulary-exercises.html` |
| A2 | German Bedding Vocabulary: A2 Exercises with Answers | `practice/a2-bedding-vocabulary-exercises.html` |
| A2 | German Condition Adjectives: A2 Vocabulary Practice | `practice/a2-condition-adjectives-vocabulary-exercises.html` |
| A2 | German Accommodation Types: A2 Vocabulary Exercises | `practice/a2-accommodation-types-vocabulary-exercises.html` |
| A2 | German Occupation Names: A2 Vocabulary Practice | `practice/a2-occupations-vocabulary-exercises.html` |
| A2 | German Sequence Words: A2 Vocabulary Exercises | `practice/a2-sequence-adverbs-vocabulary-exercises.html` |
| B1 | German Travel Disruption Vocabulary: B1 Exercises | `practice/b1-travel-disruption-vocabulary-exercises.html` |
| B1 | German Food Label Vocabulary: B1 Practice | `practice/b1-food-label-terms-vocabulary-exercises.html` |
| B1 | German Rental Terms: B1 Vocabulary Exercises | `practice/b1-rental-documents-costs-vocabulary-exercises.html` |
| B1 | German Event Organisation Vocabulary: B1 Practice | `practice/b1-event-organisation-vocabulary-exercises.html` |
| B1 | German Personal Strengths: B1 Vocabulary Exercises | `practice/b1-personal-strengths-vocabulary-exercises.html` |
| B1 | German Emotional Reactions: B1 Vocabulary Practice | `practice/b1-emotional-reactions-vocabulary-exercises.html` |
| B1 | German Social Relationships: B1 Vocabulary Exercises | `practice/b1-social-relationships-vocabulary-exercises.html` |
| B1 | German Wellbeing Verbs: B1 Vocabulary Practice | `practice/b1-wellbeing-reflexive-verbs-vocabulary-exercises.html` |
| B1 | German Education Paths: B1 Vocabulary Exercises | `practice/b1-education-paths-vocabulary-exercises.html` |
| B1 | German Logistics Verbs: B1 Vocabulary Practice | `practice/b1-logistics-verbs-vocabulary-exercises.html` |
| B1 | German Museum Vocabulary: B1 Exercises with Answers | `practice/b1-museum-exhibitions-vocabulary-exercises.html` |
| B1 | German Document Quality Words: B1 Vocabulary Practice | `practice/b1-document-quality-vocabulary-exercises.html` |
| B2 | German Conditions and Interactions: B2 Vocabulary Practice | `practice/b2-conditions-interactions-vocabulary-exercises.html` |
| B2 | German Evidence and Findings Nouns: B2 Vocabulary Practice | `practice/b2-evidence-findings-nouns-vocabulary-exercises.html` |
| B2 | German Rules and Discretion: B2 Vocabulary Practice | `practice/b2-rules-discretion-vocabulary-exercises.html` |
| B2 | German Statistics Terms: B2 Vocabulary Exercises | `practice/b2-statistics-terms-vocabulary-exercises.html` |
| B2 | German Change Nouns: B2 Vocabulary Practice | `practice/b2-change-nouns-vocabulary-exercises.html` |
| B2 | German Risk and Planning Words: B2 Vocabulary Exercises | `practice/b2-risk-planning-vocabulary-exercises.html` |
| B2 | German Text Structure Vocabulary: B2 Practice | `practice/b2-text-structure-vocabulary-exercises.html` |
| B2 | German Critical Discussion Words: B2 Vocabulary Practice | `practice/b2-critical-discussion-vocabulary-exercises.html` |
