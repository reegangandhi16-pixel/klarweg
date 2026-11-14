# Quality and SEO pass across 400 existing practice lessons

Base: `2b91a3121217a7f0fce9ebfabf934a469c55b00c` (published PR #337). Branch: `seo/practice400-quality-20261114`. Prepared on 14 November 2026.

## Outcome and scope

This pass improves all 400 existing URLs rather than adding another batch. Every lesson gains one individually drafted contextual writing task, one German model response and a specific self-check note. These extend the four existing gap-fill questions with productive practice. The model is explicitly one possible response, not an automatic score or the only acceptable wording.

All 400 original source records are preserved except for adding 50 previously missing descriptions. Original titles, rules, mistake notes, 1,600 translated examples, 1,600 gap questions/answers/explanations, answer banks and grammar references are unchanged. No URLs are renamed, removed, redirected or consolidated. The eight source batches remain intact.

**AI-assisted editorial work only. Independent native German linguistic/pedagogic review remains pending. No human authorship, independent linguistic certification, guaranteed indexing, guaranteed ranking or AI-detector outcome is claimed.** This is a concrete editorial and technical improvement, not proof of perfect content. Model wording can have natural alternatives; intended CEFR levels are practice guides rather than certification. Supporting grammar sometimes extends beyond a beginner label.

[All 400 topics and new task purposes](PRACTICE400-CONTENT-INVENTORY-2026-11.md) are recorded separately. The maintainable source is `practice-editorial-20261114.json`; it is never published in the public site artifact.

## Findings and changes

| Finding | Change |
| --- | --- |
| 50 legacy lessons relied on a generated description fallback | Added 50 bespoke, topic-specific descriptions. All 400 now have explicit descriptions of 100–170 characters. |
| Grammar hero paragraphs repeated the same generic instruction | All 400 heroes now state the topic-specific description. Existing useful titles remain stable and fit the current 70-character guard including brand. |
| Recognition practice ended with a generic “write two sentences” instruction | Added 400 contextual tasks, 400 distinct model responses and 400 specific check notes. Retains the original 1,600 models/questions as separate work. |
| Grammar advice appeared on communication and word-choice pages | Separate model/revision advice for grammar, vocabulary, communication and word choice. |
| Every page mentioned a dash for “no word needed” | Shows that note only on lessons whose answer set actually includes the dash. |
| Related pages followed batch order, sometimes crossing unrelated skills | Added 21 explicit topic groups. Each page has an incoming link from its topic path, plus a second same-topic recommendation where available, favouring shared grammar foundations and relevant title terms. |
| English end-cues were marked as part of German question text | Trailing bracketed cues now inherit the English context separately from German sentence text; German word banks and new model responses are marked German. |
| Navigation required scrolling past the lesson before reaching questions | Added direct exercise and writing-task links in every hero and a writing-task entry in the contents. Native answer disclosures remain keyboard operable. |
| Preparation and review status were not explained to learners | Added a resources methodology/correction section, linked from every lesson and the hub. It states AI assistance, review limits, model-answer alternatives and the contact route. No invented expert bylines or review dates. |
| Future additions could omit task data or repeat copy | Generator rejects missing/unknown/duplicate editorial entries, malformed topic groups, duplicate normalized descriptions/tasks/responses/checks and responses that repeat existing worked-example text. Tests cover escaping and coverage. |

The new topic path may cross a CEFR level; the sidebar explicitly asks learners to check the level in the linked title. Topics group related subject areas, not an official learning sequence or a substitute for individual instruction.

## SEO and technical assessment

- 400 existing learner intents remain separate. Grammar-form drills, word distinctions, vocabulary contexts and communication functions can overlap thematically without being interchangeable. No consolidation is justified solely by matching a word or grammar foundation.
- Existing descriptive titles, self-canonicals, OG/Twitter metadata, H1s, LearningResource/BreadcrumbList and hub ItemList remain. LearningResource now also records the visible task purpose (`teaches`), educational use and collection membership. No fake Person, rating, review, FAQ, achievement or rich-result claims are added.
- Hub guidance now explains the four task types and how to compare open writing answers. All 400 pages remain statically linked without JavaScript.
- Canonical, sitemap, schema and internal-link URLs are checked after the public clean-URL build. All 546 sitemap URLs and the explicit 402 practice allowlist entries (401 HTML pages + CSS) remain stable. No new indexed URLs are introduced.
- Navy `#0f172a` and green `#1fa84b` remain. The small writing-model/navigation CSS additions use existing colours and fonts. No dependencies, page scripts, trackers or web fonts are added.
- Source-level overlap report finds 400 distinct normalized descriptions, task prompts, responses and check notes. There are no rule/mistake-note pairs with at least 20% shared four-word-phrase containment in the shorter text. This threshold is a review heuristic, not a search-quality threshold. Shared topic words and reusable layout recur. This is internal overlap checking, not external originality verification or proof that search cannibalisation is absent.
- No claim of having read Search Console data, measured live keyword volumes, completed a competitor study or improved ranking/traffic is made. Only Facebook organic and Instagram public accounts were connected through the available Windsor account; Search Console was not connected. Indexing/performance and real Core Web Vitals remain unmeasured in this pass.

The approach follows Google's focus on useful, reliable content and cautions about adding large amounts of low-value generated text. It does not try to disguise how the material was prepared:

- [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google Search guidance on generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)
- [Spam policies, including scaled content abuse](https://developers.google.com/search/docs/essentials/spam-policies#scaled-content)

These sources were consulted on 14 November 2026. Their guidance is not a promise that a particular URL will be indexed or rank.

## Validation

| Check | Result |
| --- | --- |
| `npm test` | 811 tests: 810 passed, 1 skipped, 0 failed; generated verification also passed |
| Independent `npm run check:generated` | Passed; 400 lessons + hub, no drift |
| `npm run test:exam` | 632 tests: 628 passed, 4 skipped, 0 failed |
| Targeted practice/static/resources tests | 28 passed, 0 failed |
| Source coverage/overlap report | 400 distinct descriptions/tasks/responses/check notes; all lessons receive topic links; no rule/trap pairs exceed the documented overlap threshold |
| Preservation check | All 400 original records identical except 50 added descriptions; original 1,600 models and 1,600 questions/answers retained; all URLs stable |
| Public artifact and leak checks | Passed; 1,022 explicitly allowed files, no private-content findings |
| Artifact SEO/link audit | Passed; 546 sitemap URLs, 401 practice pages, 802 JSON-LD blocks, 10,832 local links/assets |
| Clean URL audit | Passed; no further rewriting required |
| Chromium responsive/interaction sweep | 1,604 passed: 401 pages × 320/390/768/1440px; zero page errors, failed requests or external requests; answers work without JavaScript; contextual task present on every lesson |
| Additional writing-task/navigation flows | 8 passed: grammar, word choice, vocabulary and communication × 390/1440px; hero task links, keyboard answers and resources methodology anchor work; hub lists 400 lessons; resources preserves six discovery cards |
| Screenshot inspection | Inspected new writing tasks across all four kinds at mobile/desktop sizes, resources methodology on mobile and hub guidance on desktop; readable wrapping and navy/green styling |
| Scope and whitespace | Protected-path, dependencies, sitemap, allowlist and workflow diffs empty; `git diff --cached --check` passed |

Skipped tests are recorded separately. Chromium coverage is not cross-browser or human accessibility certification. Remote exact-head workflow results will be recorded in the PR.

## Protected scope and publication

Payments, auth, checkout/enrolment, Access/Tutor Workers, paid chapter/audio content and payloads, exam content/engine, dependencies, domains, allowlist and deployment workflows are unchanged. Existing public-boundary and leak checks remain intact. Editorial JSON, scripts, review records and source datasets stay outside the public artifact.

This task prepares a draft PR and does not merge or deploy the improvements. Publication requires successful checks and owner approval for this change.

## Maintainability and remaining review

Edit lesson metadata in its registered dataset and contextual tasks in the editorial JSON, then regenerate. Do not hand-edit generated practice HTML. A new lesson must have an explicit description, a unique editorial task and a valid topic group; its inventory must match exactly. Keep independent linguistic review separate from automated checks and record actual reviewer evidence before changing the pending status.

```sh
npm run generate:practice
node scripts/seo-practice-quality.mjs /tmp/practice-quality.json
npm test
npm run check:generated
npm run test:exam
bash scripts/site-artifact.sh _site
node scripts/seo-practice-artifact.mjs _site
node scripts/clean-urls.mjs _site --check
node scripts/site-leak-check.mjs _site
npm run test:practice:browser
```

Search Console connection is optional for completing this code change, but real page/query data is needed to prioritise further content decisions and measure results. The connector provides Search Analytics, not a guarantee of URL indexing or sitemap submission.
