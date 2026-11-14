# Netzwerk A1–B1 answer-resource guide review

Base: `e2e2ad10a342b37f624ae1616b045b50d87e83a7` (published PR #339). Branch: `seo/netzwerk-answer-guides-20261115`. Prepared 15 November 2026, Asia/Calcutta; the live source audit timestamp is 14 November 2026 UTC.

## Scope

Adds twelve canonical book/level pages and `netzwerk-answer-keys.html`: Netzwerk A1/A2/B1 × Kursbuch/Arbeitsbuch, and Netzwerk neu A1/A2/B1 × Kursbuch/Übungsbuch. Half-volume resources are grouped by chapter range on the corresponding book page rather than creating duplicate .1/.2 landing pages. Three existing discovery pages link to the hub.

This is a draft creation change. No merge or deployment is performed. Publication requires passing checks and owner approval for this change.

## Publisher access and distribution

Free availability does not establish redistribution permission. No PDF copies, answer text, textbook scans, book covers, teacher manuals or restricted payloads are added to the repository or public artifact. The pages link to first-party publisher resources. Third-party mirrors at thelanguageoffice.com are not used as evidence of distribution rights or as substitutes for the publisher's current access conditions.

Live guest access was checked using the publisher's normal public level selector endpoint and publicly linked PDF endpoints. No account, login bypass or cached direct-file fallback was used. The source audit records only resource labels, chapter coverage, URLs, HTTP/MIME/PDF-header results and observed access status in `netzwerk-source-checks-20261115.json`.

| Series | Level | Coursebook | Workbook |
| --- | --- | --- | --- |
| Netzwerk | A1 | Public PDF, Kapitel 1–12 | Two public PDFs, Kapitel 1–6 / 7–12 |
| Netzwerk | A2 | Public PDF, Kapitel 1–12 | Two public PDFs, Kapitel 1–6 / 7–12 |
| Netzwerk | B1 | Public PDF, Kapitel 1–12 | Two public PDFs, Kapitel 1–6 / 7–12 |
| Netzwerk neu | A1 | Two registered-customer entries, Kapitel 1–6 / 7–12 | Two registered-customer entries, Kapitel 1–6 / 7–12 |
| Netzwerk neu | A2 | Two registered-customer entries, Kapitel 1–6 / 7–12 | Two registered-customer entries, Kapitel 1–6 / 7–12 |
| Netzwerk neu | B1 | Two registered-customer entries, Kapitel 1–6 / 7–12 | Two registered-customer entries, Kapitel 1–6 / 7–12 |

All nine public endpoints returned HTTP 200, PDF MIME and `%PDF-` headers in the successful audit. All twelve Netzwerk neu entries displayed “Dieser Inhalt ist nur für registrierte Kunden und Kundinnen sichtbar.” Their buttons explicitly open the publisher catalogue, not a direct PDF. Publisher eligibility and future access changes remain outside Klarweg's control. An early repeat audit encountered endpoint timeout/503/404 responses; the final audit using ordinary browser request headers and sequential PDF probes passed. This remains a point-in-time availability check, not an uptime promise.

The original Netzwerk full-volume ISBN references were checked against the live catalogue. Netzwerk neu pages ask readers to compare their own ISBN/format and exercise, avoiding an unverified claim that every new hybrid or digital format shares identical pagination and answers.

## Content and SEO

Each book has original edition-matching guidance, three study steps, troubleshooting and two book-specific questions. The twelve editorial records contain 324–359 words each before shared navigation, source/access explanations and related links. The highest pairwise five-word-shingle Jaccard similarity across the editorial fields was 0.88%; this narrow automated measure is not an assessment of pedagogic value or whole-page originality.

Correct German component names and umlauts are retained: Kursbuch, Arbeitsbuch, Übungsbuch, Lösungen, Kapitel. English is the declared main page language, with German headings/terms marked where appropriate. “Arbeitsbuch neu” and “Übung neu” are explained as potentially ambiguous searches, not invented separate editions. Advice distinguishes objective solutions from open-task examples and avoids converting workbook accuracy into an examination score.

**AI-assisted editorial and source checks only. No human/native linguistic review, ranking guarantee or AI-detection outcome is claimed.**

- Unique titles, descriptions and matching OG/Twitter metadata; one H1 and self canonical per route.
- Article + BreadcrumbList for the free editorial guides; CollectionPage + ordered twelve-item list for the hub. The schema's free-access flag refers to Klarweg guidance, not publisher keys. No fake publisher affiliation, Person, review, rating or FAQ rich-result claim.
- External source links remain visible HTML; structured-data identity URLs follow the site's existing origin policy.
- Explicit allowlist entries and thirteen sitemap additions; related-book, counterpart-edition, practice and exam links. Three inbound discovery sections preserve existing resource-card counts and dates.
- Navy `#0f172a` and green `#1fa84b`, no orange, no copied covers, external scripts or fonts on new pages. Native anchors work without page JavaScript.

## Maintainability

`docs/seo/netzwerk-answer-guides-20261115.json` is the editorial/resource registry. `npm run generate:book-guides` rebuilds only the twelve book routes and their hub. `npm run check:generated` includes deterministic book-page verification. The generator validates the complete matrix, terminology, safe routes, chapter coverage, metadata and first-party access URLs, and escapes editorial text before HTML rendering.

`npm run check:book-sources` is an optional live check of the current guest catalogue and PDF headers, separate from deterministic offline CI. Run it after changing a source URL or publishing an access-status claim. It fails on changed labels, access requirements, links or non-PDF responses, and stores no PDF copies. In a proxy-managed environment, use `NODE_USE_ENV_PROXY=1`.

Static tests protect source selection, gated access labels, canonical/schema/link output and no-script public guidance. Separate artifact and Chromium audits check the actual cleaned public build. No dependencies or workflow changes are needed.

## Validation

| Check | Result |
| --- | --- |
| `npm test` | 821 tests: 820 passed, 1 skipped, 0 failed; generated verification also passed |
| Independent `npm run check:generated` | Passed; all generated outputs current, including 13 book pages |
| `npm run test:exam` | 632 tests: 628 passed, 4 skipped, 0 failed |
| Targeted SEO/content/resources/origin and book tests | 26 passed, 0 failed |
| Live publisher audit | 6 guest catalogues, 9 public PDF headers and 12 registration-gated entries passed; no PDF copies stored |
| Public artifact and content/path leak checks | Passed; 1,044 explicitly allowed files, no private-content findings |
| Book artifact audit | Passed; 12 guides + hub, 26 JSON-LD blocks, 415 local links/assets, source files excluded |
| Existing practice artifact audit | Passed; 566 sitemap URLs, 401 practice pages, 802 JSON-LD blocks, 10,832 local links/assets |
| Existing exam-guide artifact audit | Passed; 12 guides + hub, 26 JSON-LD blocks, 517 local links/assets |
| Clean URLs | Passed; zero further rewrites needed |
| Chromium responsive/navigation audit | 52 passed: 13 pages × 320/390/768/1440px; zero page errors, failed responses or unexpected external requests |
| Discovery and no-script navigation | 8 flows passed at 390/1440px; source-section links work with scripts disabled; 6 legacy font requests counted separately |
| Screenshot inspection | Desktop hub and B1 Kursbuch, mobile Netzwerk neu Übungsbuch access cards inspected; readable wrapping and visible publisher-access status |
| Preservation/scope/whitespace | Protected paths, practice and exam guidance, dependencies and workflows unchanged; staged whitespace check passed |

Skipped tests are reported separately. Exact-head GitHub workflow results are recorded in the PR; this document records local validation.

## Protected scope

The 400 practice lessons, practice hub/CSS and their datasets/generator are unchanged. Existing exam guidance and engine/content, payments, auth, checkout/enrolment, Workers, paid chapters/audio, dependencies and deployment workflows are unchanged. The only existing application pages edited are the three static discovery pages; their existing scripts and controls are preserved.

```sh
npm run generate:book-guides
npm test
npm run check:generated
npm run test:exam
NODE_USE_ENV_PROXY=1 npm run check:book-sources
bash scripts/site-artifact.sh _site
node scripts/site-leak-check.mjs _site
node scripts/clean-urls.mjs _site --check
node scripts/seo-book-guides-artifact.mjs _site
node scripts/seo-practice-artifact.mjs _site
node scripts/seo-exam-guides-artifact.mjs _site
npm run test:book-guides:browser -- _site
```

Set `CHROME_PATH`/`CHROME_ARGS` for the local Chromium installation and `BOOK_GUIDE_SCREENSHOTS=/path/out` for captures. The browser audit covers 320/390/768/1440px, source-section navigation, displayed access status and discovery flows. Legacy Google Fonts requests on the existing discovery pages are counted separately; their scripts are disabled during navigation testing to avoid invoking auth/payment integrations. Chromium checks do not constitute cross-browser testing or human accessibility certification.
