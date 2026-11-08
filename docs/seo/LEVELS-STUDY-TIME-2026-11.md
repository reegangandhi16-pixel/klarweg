# German levels and study-time cluster — 9 November 2026

Branch: codex/seo-levels-study-time. No exam portal files, payment settings, prices or access rules changed. Publication requires owner approval.

## Search intent and existing coverage

All opportunities are hypotheses: no Search Console or keyword-volume data is available here. No top-position guarantee.

- `german-language-levels.html`: German levels A1 A2 B1 B2 C1 C2, A1 versus A2, B1 versus B2. Compares learning targets and starting-point decisions, rather than repeating the six commercial course pages. Existing certificate requirement pages retain their specialist scope.
- `how-long-to-learn-german.html`: how long to learn German, German A1/B1/B2 study hours, weekly study-time planning. Adds a functional timetable calculator. Existing cost page briefly mentions hours; this page answers scheduling questions and links back for money-related questions. It does not rewrite that page's facts or prices.

Both pages are linked from resources and the beginner self-study guide, and link to each other and relevant existing resources. Course roadmap and free starting-chapter CTAs are factual. Sitemap, deployment allowlist and generated Article/BreadcrumbList updated.

## Sources opened 9 November 2026

- Council of Europe CEFR levels: https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions — six levels, broad groupings and descriptors.
- CEFR global scale: https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale — short orientation descriptions paraphrased, no copied table.
- Goethe course FAQ: https://www.goethe.de/ins/be/en/spr/kur/ogf.html — course subdivisions, individual factors and instruction guidelines. Selected rows: A1 60–150 clock hours / 80–200 45-minute units; B1 260–490 / 350–650; B2 450–600 / 600–800. Use its published rounded hour figures, not a claim of exact decimal equality. Guidelines are not additional per-level blocks to add together or individual completion promises.
- Goethe India B1: https://www.goethe.de/ins/in/en/spr/prf/gzb1.cfm
- Goethe India B2: https://www.goethe.de/ins/in/en/spr/prf/gzb2.cfm

No new German/Hindi example sentences, exam scoring claims or eligibility rules authored. Pages link existing requirement guides and direct learners to the receiving organisation for the actual requirement. Editorial/source review remains pending before publication.

## Calculator method and limits

`german-study-planner.js` is a small same-origin ES module. Pure arithmetic: ceiling(planned clock hours / weekly clock hours). Positive finite total up to 10,000; positive finite weekly hours up to 168. Inputs are not stored or transmitted. No cookies, API, analytics or third-party runtime. Native form validation, labelled inputs, polite live output and a no-JS worked example. Default 120/6 = 20 weeks is explicitly a planning example, not the time to complete A1. 160 × 45/60 = 120 clock hours is a separate unit-conversion example.

## Validation

- Full `npm test`: 728 tests, 727 passed, 0 failed, 1 skipped; all generated-file checks pass.
- Focused decision/resource/SEO checks: 19 passed, 0 failed.
- Chrome at 360×780 and 1280×800: both pages have no horizontal document overflow and 17px body copy; table-of-contents anchors resolve. Mobile hero and calculator screenshots visually inspected.
- Browser calculator: 120 hours at 3, 10 and 7 hours/week produces 40, 12 and 18 weeks; a zero total is rejected by native validation. Reset to the default after checks.
- Unit tests cover fractional hours, rounding up, zero/negative values, non-finite values, wrong types and upper bounds. No network/storage APIs in the calculator.
- HTML sizes: levels 23,856 bytes; timeline 24,328 bytes. Same-origin calculator module 1,117 bytes. No new fonts, images, external libraries or runtime dependencies.
- `git diff --check`: pass.

Editorial/source review and owner merge/publication approval pending. No deployment performed by this task.
