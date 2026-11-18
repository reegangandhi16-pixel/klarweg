# Vocabulary practice batch — 14 November 2026

Base: `a2625807b2b6a2272079d003de0c2f388ea453d2` (merged PR #333).

## Scope and editorial status

Adds exactly **50 vocabulary and collocation lessons**, bringing the proposed library to **250 lessons plus the existing hub**. New batch: A1 16, A2 16, B1 10, B2 8. Combined totals: A1 58, A2 74, B1 72, B2 46. Existing 100 grammar, 50 word-choice and 50 communication lessons stay available at stable URLs.

Each new lesson has a distinct vocabulary focus, a usage explanation, a contrast or mistake note, four newly written German models with English meanings, and four contextual self-check questions with explanations. An alphabetised word bank provides exactly the four intended answers; cues state the intended English meaning. Noun lessons teach articles and useful plural forms; verb lessons explain common partners and separable/reflexive patterns where relevant.

A1 topics cover family, home, food, activities, nature and simple descriptions. A2 covers household/study actions and themed vocabulary. B1 covers documents, work schedules, services, community and problem-solving. B2 covers research, causality, evaluation and precise abstract vocabulary. Health, housing and banking examples teach meanings without claiming to define actual service procedures or legal/financial entitlements.

**AI-assisted editorial review only. Native German linguistic and pedagogic review remains pending; no human linguistic review is claimed.** CEFR labels indicate intended vocabulary practice, not certification. Some supporting sentence structures may stretch a learner at the stated level; English meanings and cues support those tasks.

## Duplication and preservation

- All seven previous source datasets are byte-for-byte unchanged.
- All 200 existing lesson metadata heads and teaching blocks (hero through revision section) are byte-for-byte identical to base. Some peer links change to connect the new batch.
- All 250 titles, usage explanations and mistake notes are distinct by exact-string checks. All **1,000 model sentences and 1,000 prompts** are distinct even after case/punctuation/spacing normalisation.
- The 200 new model sentences were compared with text on all **346 previously sitemap-listed pages**. No complete normalised sentence matches were found. This is a local overlap check, not external plagiarism verification or proof of pedagogic originality.
- Shared short vocabulary, thematic overlap and reusable layout/instructions are expected. Broad themes such as work, travel and learning also appear elsewhere on the site; this batch's purpose is contextual vocabulary retrieval rather than duplicating a grammar rule or phrase lesson.

## SEO and navigation

Each new page has a descriptive topic/level title, bespoke description (100–170 characters), one H1, self-canonical, matching social metadata, LearningResource and BreadcrumbList. Titles including brand stay within 70 characters. The hub groups all lessons by level and four practice types; its 16 category shortcuts resolve, and CollectionPage ItemList order matches the visible inventory.

Every new lesson has an explicit sitemap and publication allowlist entry. Sitemap grows from 346 to **396 URLs**. The hub and resources page provide direct discovery links; lessons link to same-level practice peers, an accurately labelled related grammar foundation and that level's free Chapter 1. Source URLs use the repository's `.html` convention; the actual artifact rewrites advertised page URLs to clean equivalents.

Titles express lesson subjects and learner intent. **No live keyword-volume/competition research, Search Console validation, ranking promise or indexing outcome is claimed.** Useful content and subsequent indexing/performance data should guide further expansion.

## Design and generation

Reuses the existing navy `#0f172a` and brand-green `#1fa84b` design. No CSS changes, orange, fonts, images, dependencies, tracking or runtime page scripts are introduced. Native details/summary answers retain keyboard access and work without page JavaScript.

`docs/seo/practice-batches.json` explicitly registers the 50-record source. A shared practice-kind registry now supplies validation, lesson headings and hub grouping for all four kinds. Vocabulary pages require answer-matched word banks and get suitable vocabulary instructions. Existing kinds render their prior teaching copy unchanged.

Regression checks cover generation, totals, source safety, allowed paths, unique metadata/content, matching answer banks, valid schema/internal links, all 16 hub anchors, and rejected unsupported kind values. Browser audit inventory remains manifest-driven; four vocabulary representatives are added to optional screenshots.

## Validation

| Check | Result |
| --- | --- |
| `npm test`, final content | PASS: 805 total, 804 passed, 1 skipped, 0 failures; generated checks included |
| Independent `npm run check:generated` | PASS: no drift, 250 lessons plus hub |
| `npm run test:exam` | PASS: 632 total, 628 passed, 4 skipped, 0 failures |
| Public artifact build, final content | PASS: 872 explicitly allowed files |
| Artifact SEO/canonical/schema/link audit | PASS: 396 sitemap URLs, 251 practice pages, 502 JSON-LD blocks, 5,783 local links/assets checked |
| Clean URL verification | PASS: no remaining rewrites required |
| Artifact leak check | PASS: 872 files, no prohibited private content; source datasets/templates/generator excluded |
| Chromium responsive and interaction audit, final content | PASS: 251 pages at 320/390/768/1440px, 1,004 combinations; no overflow, page errors, failed requests or external requests; keyboard answers and native answers without page JavaScript passed |
| Resources discovery | PASS: 390/1440px, five resource cards, no overflow, new vocabulary link reaches its lesson; no page errors |
| Visual review | A1 family and A2 files at 390px; B1 delivery and B2 research at 1440px; hub and resource cards at both widths inspected |
| Preservation and duplicate checks | PASS: seven existing datasets and 200 existing teaching blocks/metadata heads preserved; 1,000 models/prompts normalised-distinct; no new full-sentence model matches against 346 prior sitemap pages |
| Scope and whitespace | Exactly 50 new lesson HTML files; protected paths unchanged; `git diff --cached --check` passed |

Skips are reported separately from passes. Browser coverage is Chromium at the stated widths, not cross-browser or human accessibility certification. Remote CI results will be recorded on the PR.

## Protected scope and publication gate

Payments, auth, checkout/enrolment, Access/Tutor Workers, paid chapter/audio source and payloads, exam content/engine and publication workflows are unchanged. Public additions are exactly the 50 new lesson HTML files. Datasets, manifest, templates, generator, tests and this audit remain outside the public artifact. Existing paid-content boundary and leak guards remain intact.

This creation task does not merge, deploy or enable auto-merge. Publication requires passing checks and a separate owner instruction approving this batch.

## Maintenance

Edit `docs/seo/vocabulary50-20261114.json`, then regenerate; do not hand-edit generated pages. Each `kind: vocabulary` record supplies four contextual model/translation pairs and four prompt/answer/explanation triples. The word bank must match the distinct answers. Keep new source paths explicit and add sitemap/allowlist entries deliberately.

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

These commands build and test locally, without publishing. Browser checks need Node 22+ and Chrome/Chromium; use `CHROME_PATH` if needed. `PRACTICE_SCREENSHOTS=/path/out` enables representative captures.

## New lesson inventory

| Level | Topic | File |
| --- | --- | --- |
| A1 | German Family Vocabulary: A1 Exercises with Answers | `practice/a1-family-relations-vocabulary-exercises.html` |
| A1 | German Rooms at Home: A1 Vocabulary Practice | `practice/a1-rooms-at-home-vocabulary-exercises.html` |
| A1 | German Kitchen Objects: A1 Vocabulary Exercises | `practice/a1-kitchen-objects-vocabulary-exercises.html` |
| A1 | German Classroom Objects: A1 Vocabulary Practice | `practice/a1-classroom-supplies-vocabulary-exercises.html` |
| A1 | German Food Staples: A1 Vocabulary Exercises | `practice/a1-food-staples-vocabulary-exercises.html` |
| A1 | German Fruit and Vegetables: A1 Vocabulary Practice | `practice/a1-fruit-and-vegetables-vocabulary-exercises.html` |
| A1 | German Drink Containers: A1 Vocabulary Exercises | `practice/a1-drink-containers-vocabulary-exercises.html` |
| A1 | German Morning Routine Verbs: A1 Vocabulary Practice | `practice/a1-morning-routine-verbs-vocabulary-exercises.html` |
| A1 | German Frequency Words: A1 Vocabulary Exercises | `practice/a1-frequency-words-vocabulary-exercises.html` |
| A1 | German Weather Vocabulary: A1 Exercises with Answers | `practice/a1-weather-words-vocabulary-exercises.html` |
| A1 | German Seasons Vocabulary: A1 Practice with Answers | `practice/a1-seasons-vocabulary-exercises.html` |
| A1 | German Places in Town: A1 Vocabulary Exercises | `practice/a1-city-places-vocabulary-exercises.html` |
| A1 | German Leisure Activities: A1 Vocabulary Practice | `practice/a1-leisure-activities-vocabulary-exercises.html` |
| A1 | German Body Parts: A1 Vocabulary Exercises | `practice/a1-body-parts-vocabulary-exercises.html` |
| A1 | German Feelings Vocabulary: A1 Practice with Answers | `practice/a1-feelings-vocabulary-exercises.html` |
| A1 | German Furniture Vocabulary: A1 Exercises with Answers | `practice/a1-furniture-vocabulary-exercises.html` |
| A2 | German Cooking Verbs: A2 Vocabulary Exercises | `practice/a2-cooking-verbs-vocabulary-exercises.html` |
| A2 | German Cleaning and Laundry: A2 Vocabulary Practice | `practice/a2-cleaning-and-laundry-vocabulary-exercises.html` |
| A2 | German Housing Advert Vocabulary: A2 Exercises | `practice/a2-housing-advert-words-vocabulary-exercises.html` |
| A2 | German Bicycle Parts: A2 Vocabulary Practice | `practice/a2-bicycle-parts-vocabulary-exercises.html` |
| A2 | German Landscape Vocabulary: A2 Exercises with Answers | `practice/a2-landscapes-vocabulary-exercises.html` |
| A2 | German Packaging Materials: A2 Vocabulary Exercises | `practice/a2-packaging-materials-vocabulary-exercises.html` |
| A2 | German Workplace Tools: A2 Vocabulary Practice | `practice/a2-workplace-tools-vocabulary-exercises.html` |
| A2 | German Study Verbs: A2 Vocabulary Exercises | `practice/a2-study-actions-vocabulary-exercises.html` |
| A2 | German Computer File Verbs: A2 Vocabulary Practice | `practice/a2-file-actions-vocabulary-exercises.html` |
| A2 | German Film and Story Vocabulary: A2 Exercises | `practice/a2-film-and-story-vocabulary-exercises.html` |
| A2 | German Sports Training Verbs: A2 Vocabulary Practice | `practice/a2-sports-training-vocabulary-exercises.html` |
| A2 | German Party Preparation Words: A2 Vocabulary Exercises | `practice/a2-celebration-preparations-vocabulary-exercises.html` |
| A2 | German Health Visit Vocabulary: A2 Word Exercises | `practice/a2-health-visit-nouns-vocabulary-exercises.html` |
| A2 | German Luggage Vocabulary: A2 Exercises with Answers | `practice/a2-luggage-items-vocabulary-exercises.html` |
| A2 | German Taste and Texture Words: A2 Vocabulary Practice | `practice/a2-taste-and-texture-vocabulary-exercises.html` |
| A2 | German Character Adjectives: A2 Vocabulary Exercises | `practice/a2-character-adjectives-vocabulary-exercises.html` |
| B1 | German Job Application Documents: B1 Vocabulary Practice | `practice/b1-application-documents-vocabulary-exercises.html` |
| B1 | German Work Schedule Vocabulary: B1 Exercises | `practice/b1-work-schedules-vocabulary-exercises.html` |
| B1 | German Order and Delivery Vocabulary: B1 Practice | `practice/b1-online-delivery-vocabulary-exercises.html` |
| B1 | German Banking Vocabulary: B1 Exercises with Answers | `practice/b1-everyday-banking-vocabulary-exercises.html` |
| B1 | German Course Organisation Vocabulary: B1 Practice | `practice/b1-course-organisation-vocabulary-exercises.html` |
| B1 | German Energy Collocations: B1 Vocabulary Exercises | `practice/b1-energy-collocations-vocabulary-exercises.html` |
| B1 | German Volunteering Vocabulary: B1 Practice | `practice/b1-volunteering-vocabulary-exercises.html` |
| B1 | German News and Source Vocabulary: B1 Exercises | `practice/b1-news-source-words-vocabulary-exercises.html` |
| B1 | German Problem-Solving Vocabulary: B1 Practice | `practice/b1-problem-solving-nouns-vocabulary-exercises.html` |
| B1 | German Building Maintenance Vocabulary: B1 Exercises | `practice/b1-building-maintenance-vocabulary-exercises.html` |
| B2 | German Research Verbs: B2 Vocabulary Exercises | `practice/b2-research-methods-vocabulary-exercises.html` |
| B2 | German Cause and Effect Collocations: B2 Practice | `practice/b2-cause-effect-collocations-vocabulary-exercises.html` |
| B2 | German Change and Development Verbs: B2 Exercises | `practice/b2-change-development-verbs-vocabulary-exercises.html` |
| B2 | German Evaluation Adjectives: B2 Vocabulary Practice | `practice/b2-evaluation-adjectives-vocabulary-exercises.html` |
| B2 | German Resource Use Vocabulary: B2 Exercises | `practice/b2-resource-use-vocabulary-exercises.html` |
| B2 | German Responsibility and Authority: B2 Vocabulary Practice | `practice/b2-responsibility-authority-vocabulary-exercises.html` |
| B2 | German Economic Terms: B2 Vocabulary Exercises | `practice/b2-economic-terms-vocabulary-exercises.html` |
| B2 | German Conflict Mediation Vocabulary: B2 Practice | `practice/b2-conflict-mediation-vocabulary-exercises.html` |
