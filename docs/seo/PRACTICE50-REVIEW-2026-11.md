# Practice batch audit — 14 November 2026

PR: https://github.com/reegangandhi16-pixel/klarweg/pull/330

Branch: `seo/next50-practice-20261114`

Reviewed starting commit: `ca880de54945926e006ffc69bc5022d649a51e5e`

## Scope and editorial status

Preserved the existing 50 lesson datasets, URLs and page layout; the batch was not recreated. Inventory: A1 14, A2 14, B1 12, B2 10. Each lesson retains four German examples with English meanings and four self-check questions with concealed answers and explanations. The grouped hub links to all 50 lessons. It has level shortcuts, not a search widget.

German and English content received an AI-assisted audit and targeted corrections. **Native German linguistic and pedagogic review remains pending. No human linguistic review is claimed.** CEFR labels describe the intended practice level, not an accredited assessment. These are independent Klarweg exercises, not official exam questions or scoring. Owner review and approval are required before merge or deployment.

## Findings and fixes

| Area | Finding / action |
| --- | --- |
| German usage | Replaced the misleading `Er ist ___ Arzt` / `ein` exercise with `Das ist ___ Arzt`. Explained the usual zero article when stating a profession after `sein`. |
| German mood | Corrected the hypothetical example to `Es wäre schön, wenn du kämest` and noted `kommen würdest` as an alternative. |
| Answer ambiguity | Added topic-specific instructions to all 50 datasets, verb/tense cues, singular/plural context and word banks. Explained valid alternatives for time expressions, `während` / `wohingegen`, `desto` / `umso`, and application collocations. |
| Teaching precision | Included `wie` in the question-word rule and `bleiben` in the `sein` perfect rule; clarified exact tens and modal + infinitive structure. Replaced the nominalisation item that supplied its own answer. |
| Duplication | All 50 titles, rules and common-mistake notes are distinct within this batch; all 200 model sentences and 200 prompts are also distinct within the batch. An exact-string comparison against the 145 older sitemap pages found 25 model sentences also used elsewhere, such as `Ich lerne Deutsch` and `Wo wohnst du?`. Those conventional examples are retained. This is not a claim of site-wide sentence originality or an external plagiarism check. Shared layout/instructions are intentional; removed the repeated rule from each hero. |
| SEO intent | Pages provide short, topic-specific self-check exercises alongside existing explanatory grammar guides. Related-guide labels now distinguish a related foundation (e.g. Konjunktiv II) from the topic actually practised (Konjunktiv I). Monitor usefulness and indexing before expanding the batch. |
| Metadata and schema | Unique titles/descriptions; one H1; self-canonicals; matching OG URLs; Twitter metadata on hub and lessons. LearningResource and BreadcrumbList match each lesson. CollectionPage now includes the 50 visible lessons in an ItemList. |
| URL consistency | Source `.html` URLs intentionally follow repository conventions. The public artifact rewrites canonicals, OG, JSON-LD, sitemap and page links to clean URLs. Hub source canonical/schema/breadcrumb now agree on `practice/index.html`, published as `/practice/`. |
| Internal links | Resources → hub → all lessons; each lesson links to its level on the hub, related exercises, a relevant grammar guide and the **same level's** free Chapter 1. Every lesson receives a contextual link from a peer. |
| Brand / access | Shared navy `#0f172a` and brand green `#1fa84b` stylesheet; removed amber/gold warning styling. Navy text on the green CTA gives 5.75:1 contrast. Added skip links, uniquely named native disclosures and 44px answer targets. |
| Responsive layout | Single-column mobile and two-column desktop layout; wrapping/min-width guards, reduced-motion support. Tested 320, 390, 768 and 1440px widths. |
| Generation | Extracted the existing layout into checked-in templates and shared CSS; deterministic generator reads the existing datasets. `check:generated` now detects practice page drift. Tests reject unsafe paths, duplicate records, malformed gaps, missing answers, stale/orphaned output, broken fragments and unpublished links. |
| CI coverage | Removed `docs/**` from the site workflow's ignore list so dataset-only JSON changes run the site suite. Markdown-only changes remain ignored. |
| Existing test failures | Scoped the Resources discovery-card assertion to its original section; the added practice cards no longer break it. The PDF font fixture now uses a narrowly scoped loopback server because managed Chromium blocks `file://`; font assertions and all production PDF/course code remain unchanged. |

## Validation results

Local checks on the final implementation:

| Check | Result |
| --- | --- |
| `npm test` | 799 tests: 798 passed, 0 failed, 1 private-roster skip; includes generated-file checks. |
| `npm run check:generated` | Passed: existing generators and all 51 practice HTML outputs current. |
| `npm run test:exam` | 632 tests: 628 passed, 0 failed, 4 existing optional encoder skips. |
| `bash scripts/site-artifact.sh <artifact-dir>` | Passed: 672 public files, prohibited-path and content-leak guards passed. |
| `node scripts/site-leak-check.mjs <artifact-dir>` | Passed independently: no private content detected. |
| `node scripts/clean-urls.mjs <artifact-dir> --check` | Passed: no further rewrites needed. |
| `node scripts/seo-practice-artifact.mjs <artifact-dir>` | Passed: 196 distinct sitemap URLs with matching canonical pages; 51 practice pages, 102 JSON-LD blocks and 1,167 local link/asset references checked. Dataset/template/generator sources excluded from the artifact. |
| `node scripts/seo-practice-browser.mjs <artifact-dir>` | Passed in Chromium: 51 pages × 4 viewport widths = 204 combinations. No horizontal document overflow, page errors, failed HTTP responses or external requests on practice pages. CSS loads, H1/IDs/canonical, 44px disclosure targets, CTA contrast and keyboard opening/closing of every answer checked. Native answers also work with page scripts disabled. |
| Visual spot checks | Inspected hub and A1–B2 examples/answer layouts using mobile and desktop screenshots. Navy/green styling, legibility, wrapping and the desktop sidebar checked. |
| `git diff --check` | Passed. |

The private-roster test requires owner-only roster input. The exam suite skips three opt-in ffmpeg checks and one macOS encoder check. Skipped tests remain visibly reported; they are not counted as passing tests. The browser check is a Chromium audit, not a claim of cross-browser or human accessibility certification. Local success does not imply GitHub Actions has passed; the PR conversation records the final remote-check status.

## Protected areas

Diff against PR base `fc151e9a0b1f5238b2451deed31df8bc7ce8b19d` contains no changes to payment/auth production code, Access/Tutor Workers, paid/free chapter source or payloads, exam content, exam engine or checkout/enrolment code. The only chapter-related edit is to the PDF **test fixture transport**. No credentials, protected audio, archives, paid dictionaries or private manifests were added to the public allowlist. Added public paths are the 51 practice HTML pages and one shared stylesheet, all explicit entries.

No merge, deployment, publication workflow dispatch or auto-merge was performed.

## Maintenance and repeatable checks

Edit `docs/seo/next50-practice-{a1,a2,b1,b2}.json` for lesson content. Optional per-lesson fields are `instructions` and `guideLabel`. Edit `scripts/seo-practice/page.html` / `index.html` for markup and `practice/practice.css` for shared styling. Do not hand-edit the generated HTML. The generator imports the shared site origin and escapes HTML/JSON-LD content.

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

Browser audit: Node 22+ and installed Chrome/Chromium; set `CHROME_PATH` if discovery needs help. `PRACTICE_SCREENSHOTS=/path/out` optionally captures representative viewport screenshots. The local server binds only `127.0.0.1` and serves the built public artifact. These commands build and test locally; they do not deploy.

Sitemap and allowlist entries remain explicit and are verified by tests. When changing a URL, update both lists, remove the obsolete generated file, regenerate, and rerun the checks. Keep datasets, scripts and audit records outside the public allowlist.

## SEO references

- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/essentials/spam-policies
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide

These references inform the review; no guarantee of Google indexing, rankings or rich results is made.
