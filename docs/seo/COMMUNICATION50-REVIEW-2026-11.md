# Communication practice batch — 14 November 2026

Base: `080516ec8adc11d38de0b3cf5810b8730f154d14` (merged PR #332).

## Scope and editorial status

Adds exactly **50 everyday and workplace communication practice pages**: A1 10, A2 14, B1 16, B2 10. The proposed library becomes **200 lessons plus its existing hub**: 100 grammar, 50 word-choice and 50 communication lessons. Combined level totals: A1 42, A2 58, B1 62, B2 38.

Each new page teaches a distinct practical communication function through an explanation, a mistake/limitation note, four German model phrases with English meanings, a word bank and four self-check questions with concealed answers and explanations. Functions include introductions, appointments, travel/service requests, progress updates, handovers, feedback, discussion and written summaries.

Content received AI-assisted review. **Native German linguistic/pedagogic review remains pending; no human linguistic review is claimed.** CEFR labels describe intended practice level, not official assessment. This creation task prepares a draft for owner review, without merging or deploying it.

## Content, preservation and duplication

- All six previous lesson datasets remain unchanged. A direct comparison with the base commit confirmed that the teaching blocks and metadata on all **150 existing lesson pages remain byte-for-byte identical**. Original URLs stay stable; some peer links change to connect the new batch.
- All 200 titles, teaching explanations and mistake notes are distinct across the registered library. All **800 model sentences and 800 prompts** are also distinct by exact-string checks. These mechanical checks do not prove external originality or pedagogic quality.
- Comparing the 200 new model sentences with text on the 296 previously sitemap-listed pages found **no exact full-sentence matches**. Short common expressions naturally recur. Some broad service/email topics also appear on older resource guides; these pages serve a complementary self-check-exercise purpose rather than claiming the entire subject is new.
- Each task provides explicit context/verb cues and an unordered word bank. The generator requires that every answer appears in its bank and rejects missing, duplicated or unmatched bank entries. Banks define the intended exercise vocabulary without claiming that other natural wording is universally wrong.
- Phrase explanations distinguish proposals from decisions, requests from confirmations, observations from suspected causes and estimates from guarantees. The formal-message examples are fictional language material, not actual business, ticket, legal or booking instructions.
- Accepted alternatives are noted where relevant, such as `gern/gerne` and `insgesamt/zusammen`. Direct and indirect question order, formal/informal address, preposition case and separable verbs received AI-assisted consistency checks.
- Every lesson links to an accurately labelled related grammar reference, same-level practice peers and the same level's free Chapter 1. Related grammar is a foundation, not a claim that the reference contains the exact communication lesson.

## Hub, SEO and design

The hub is grouped by level **and lesson type**, with three type shortcuts per level. All 200 lesson links remain present in the static HTML. The CollectionPage ItemList follows the same visible grouped order rather than retaining an unrelated source-file order.

All 50 new HTML files have explicit sitemap and allowlist entries. The sitemap increases from **296 to 346 URLs**. Resources points to the expanded library and a new feedback lesson. Each new lesson has one H1, bespoke metadata, self-canonical, matching OG/Twitter fields, LearningResource and BreadcrumbList. Source `.html` URLs follow the repository convention; artifact checks verify the clean-URL rewrite in sitemap, canonical, schema and links.

New pages reuse the existing navy/brand-green stylesheet, focus indicators, reduced-motion support, 44px disclosure targets and native details/summary answers. The only added CSS spaces the new hub category sections. No orange styles, tracking, external fonts, images, dependencies or runtime scripts are introduced.

No search-volume, traffic, ranking, rich-result or Google-indexing result is claimed. Evaluate learner usefulness and search indexing before further large expansions.

## Generation and regression coverage

`docs/seo/practice-batches.json` registers `communication50-20261114.json` as an explicit 50-record batch. The validated `communication` kind supplies a bespoke intro, suitable headings and an answer-matched word bank. Existing grammar and word-choice defaults remain unchanged.

Tests enforce 200 lesson outputs, the fourth batch's level counts, word-bank integrity, content/metadata uniqueness, original batch registration, publication wiring, peer links, hub category anchors and schema order. The existing CI step builds the artifact, checks SEO/clean URLs/leaks and audits every practice page at four browser widths. Browser checks now verify word-bank presence on the communication pages as well.

## Validation

| Check | Result |
| --- | --- |
| `npm test` | PASS: 804 tests, 803 passed, 1 private-roster skip, 0 failures; included generated-output checks |
| Independent `npm run check:generated` | PASS: no generated drift, 200 lessons plus hub |
| `npm run test:exam` | PASS: 632 tests, 628 passed, 4 optional encoder skips, 0 failures |
| Public artifact build | PASS: 822 explicitly allowed files |
| Practice artifact SEO/link audit | PASS: 346 sitemap URLs, 201 practice pages, 402 JSON-LD blocks, 4,629 local links/assets checked |
| Clean-URL verification | PASS: no remaining rewrites required |
| Public artifact leak check | PASS: 822 files, no prohibited private content; build sources excluded |
| Chromium responsive/interaction audit | PASS: all 201 practice pages at 320, 390, 768 and 1440px, 804 combinations; no overflow, page errors, failed requests or external requests; keyboard answers work without JavaScript |
| Visual inspection | PASS: A1 café and A2 appointment pages at 390px, B1 feedback and B2 discussion pages at 1440px, hub at both 390px and 1440px; readable navy/green layout |
| Preservation and scope | PASS: six earlier datasets and protected code unchanged; previous 150 lesson teaching blocks and metadata identical to base; exactly 50 new lesson HTML files |
| Whitespace | `git diff --cached --check` passed |

Skipped tests are reported rather than counted as passing tests. Browser results cover Chromium at the stated widths, not cross-browser or human accessibility certification. Remote CI results will be recorded on the PR after push.

## Protected areas and publication gate

No changes to payments, auth, checkout/enrolment production code, Access/Tutor Workers, chapter source/payloads, audio, exam content or the exam engine. New public paths contain only the 50 lesson HTML files. Source datasets, manifest, generator, templates and review record remain outside the public artifact. The production publication workflow and existing content-level leak protection are unchanged.

No merge, deployment or auto-merge is performed by this creation task. Publication requires passing checks and a separate owner instruction approving this batch.

## Maintenance

Edit `docs/seo/communication50-20261114.json` and regenerate; do not hand-edit generated HTML. Use `kind: communication` and provide a `wordBank` containing the distinct answers to the four tasks. Keep new source paths explicit in the batch manifest, update sitemap/allowlist entries deliberately and preserve published URLs.

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

These are local build/test commands and do not publish. Chrome/Chromium and Node 22+ are required for browser checks; `CHROME_PATH` overrides discovery and `PRACTICE_SCREENSHOTS=/path/out` enables representative captures.

## New page inventory

| Level | Topic | File |
| --- | --- | --- |
| A1 | Introducing Yourself in German: A1 Phrase Practice | `practice/a1-introducing-yourself-communication-exercises.html` |
| A1 | Spelling Your Name in German: A1 Speaking Practice | `practice/a1-spelling-your-name-communication-exercises.html` |
| A1 | German Contact Details: A1 Phrase Exercises | `practice/a1-sharing-contact-details-communication-exercises.html` |
| A1 | German Greetings and Farewells: A1 Phrase Practice | `practice/a1-greetings-and-farewells-communication-exercises.html` |
| A1 | Asking for Repetition in German: A1 Exercises | `practice/a1-asking-for-repetition-communication-exercises.html` |
| A1 | Asking Prices in German: A1 Question Practice | `practice/a1-asking-prices-communication-exercises.html` |
| A1 | Ordering in a Café: German A1 Phrase Exercises | `practice/a1-ordering-in-cafe-communication-exercises.html` |
| A1 | German Shopping Sizes and Colours: A1 Practice | `practice/a1-shopping-size-colour-communication-exercises.html` |
| A1 | Asking Opening Hours in German: A1 Exercises | `practice/a1-asking-opening-hours-communication-exercises.html` |
| A1 | Arranging a Meeting in German: A1 Phrase Practice | `practice/a1-arranging-simple-meeting-communication-exercises.html` |
| A2 | Rescheduling in German: A2 Appointment Practice | `practice/a2-rescheduling-appointment-communication-exercises.html` |
| A2 | Cancelling an Appointment: German A2 Phrase Exercises | `practice/a2-cancelling-appointment-communication-exercises.html` |
| A2 | Explaining Lateness in German: A2 Phrase Practice | `practice/a2-explaining-being-late-communication-exercises.html` |
| A2 | Apologising in German: A2 Everyday Phrase Practice | `practice/a2-apologizing-for-small-mistake-communication-exercises.html` |
| A2 | Station Directions in German: A2 Phrase Exercises | `practice/a2-asking-station-directions-communication-exercises.html` |
| A2 | Buying a Return Ticket: German A2 Phrase Practice | `practice/a2-buying-return-ticket-communication-exercises.html` |
| A2 | Hotel Check-In in German: A2 Phrase Exercises | `practice/a2-hotel-check-in-communication-exercises.html` |
| A2 | Room Problems in German: A2 Service Phrase Practice | `practice/a2-reporting-hotel-room-problem-communication-exercises.html` |
| A2 | Sending a Parcel in German: A2 Phrase Practice | `practice/a2-sending-parcel-communication-exercises.html` |
| A2 | Returning a Purchase in German: A2 Phrase Exercises | `practice/a2-returning-purchase-communication-exercises.html` |
| A2 | Asking Permission in German: A2 Phrase Practice | `practice/a2-asking-permission-communication-exercises.html` |
| A2 | Offering Help in German: A2 Phrase Exercises | `practice/a2-offering-help-communication-exercises.html` |
| A2 | German Invitation Replies: A2 Phrase Practice | `practice/a2-accepting-declining-invitations-communication-exercises.html` |
| A2 | Describing a Lost Item in German: A2 Phrase Practice | `practice/a2-describing-lost-item-communication-exercises.html` |
| B1 | Confirming Understanding in German: B1 Practice | `practice/b1-confirming-understanding-communication-exercises.html` |
| B1 | German Meeting Action Points: B1 Phrase Practice | `practice/b1-summarizing-action-points-communication-exercises.html` |
| B1 | Requesting More Time in German: B1 Phrase Practice | `practice/b1-requesting-deadline-extension-communication-exercises.html` |
| B1 | Giving a Progress Update in German: B1 Practice | `practice/b1-giving-progress-update-communication-exercises.html` |
| B1 | Explaining a Work Delay in German: B1 Practice | `practice/b1-explaining-project-delay-communication-exercises.html` |
| B1 | Handing Over a Task in German: B1 Phrase Exercises | `practice/b1-handing-over-task-communication-exercises.html` |
| B1 | Requesting Feedback in German: B1 Phrase Practice | `practice/b1-requesting-specific-feedback-communication-exercises.html` |
| B1 | Giving Feedback in German: B1 Phrase Exercises | `practice/b1-giving-constructive-feedback-communication-exercises.html` |
| B1 | Disagreeing Politely in German: B1 Phrase Practice | `practice/b1-disagreeing-politely-communication-exercises.html` |
| B1 | Proposing an Alternative in German: B1 Practice | `practice/b1-proposing-alternative-communication-exercises.html` |
| B1 | Describing a Technical Problem in German: B1 Practice | `practice/b1-describing-technical-problem-communication-exercises.html` |
| B1 | Requesting Information in German: B1 Phrase Practice | `practice/b1-requesting-information-formally-communication-exercises.html` |
| B1 | Following Up an Email in German: B1 Phrase Exercises | `practice/b1-following-up-email-communication-exercises.html` |
| B1 | Describing Trends in German: B1 Phrase Practice | `practice/b1-describing-chart-trends-communication-exercises.html` |
| B1 | Explaining a Process in German: B1 Phrase Exercises | `practice/b1-explaining-process-steps-communication-exercises.html` |
| B1 | Passing On a Message in German: B1 Phrase Practice | `practice/b1-passing-on-message-communication-exercises.html` |
| B2 | Moderating a Discussion in German: B2 Practice | `practice/b2-moderating-discussion-communication-exercises.html` |
| B2 | Setting a Meeting Agenda in German: B2 Practice | `practice/b2-setting-meeting-agenda-communication-exercises.html` |
| B2 | Weighing Options in German: B2 Phrase Practice | `practice/b2-weighing-pros-cons-communication-exercises.html` |
| B2 | Expressing Uncertainty in German: B2 Phrase Practice | `practice/b2-qualifying-uncertainty-communication-exercises.html` |
| B2 | Supporting a Claim in German: B2 Phrase Practice | `practice/b2-supporting-claim-with-evidence-communication-exercises.html` |
| B2 | Facts and Opinions in German: B2 Phrase Practice | `practice/b2-fact-and-opinion-language-communication-exercises.html` |
| B2 | Discussing Workload in German: B2 Phrase Practice | `practice/b2-negotiating-workload-communication-exercises.html` |
| B2 | Escalating an Issue in German: B2 Phrase Practice | `practice/b2-escalating-unresolved-issue-communication-exercises.html` |
| B2 | Responding to a Complaint in German: B2 Practice | `practice/b2-responding-to-complaint-communication-exercises.html` |
| B2 | Recording Agreements in German: B2 Phrase Practice | `practice/b2-documenting-agreement-communication-exercises.html` |
