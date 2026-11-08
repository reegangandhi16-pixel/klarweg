# Learning resources SEO — 8 November 2026

Scope: public discovery content only. Exam portal, exam engine, questions, payments and chapter access are untouched. Separate from PR #310 and Claude's development work. No merge or deploy authorised here.

## Audit and intent map

Existing resources.html describes chapter downloads and tools; it did not help a visitor choose a textbook or find official external study files. Existing grammar and Goethe guides already serve topic and exam-format searches. New pages connect those existing assets rather than duplicate them.

| URL | Search intent — hypotheses without keyword-volume data |
|---|---|
| german-books-for-beginners.html | German books for beginners, German A1 books, Netzwerk neu resources, Schritte plus Neu downloads |
| free-german-learning-pdfs.html | free German learning PDFs, German vocabulary PDF, study resources for Indian learners |
| german-exam-practice-papers.html | official German exam PDFs, Goethe A1–C2 sample papers, telc practice material |

Resources hub links the cluster. Each page cross-links the others, relevant grammar or exam overviews, free A1 Chapter 1 and the course roadmap. Sitemap, allowlist and generated Article/BreadcrumbList updated. No fake reviews, rankings or estimated search volumes. No copied textbook or exam content. Direct PDFs remain on Goethe's server; no paid resources exposed.

## Source checks

- https://www.goethe.de/en/spr/prf/ueb.html — opened; official exam-training and level directory.
- https://www.goethe.de/ins/de/en/prf/exc.html — opened; official practice materials.
- https://www.telc.net/en/language-examinations/certificate-exams/german/ — opened; provider qualification directory. No blanket claim that every linked product is free.
- https://www.hueber.de/en/reihe/schritte-plus-neu/lernen — opened; online exercises and free supplementary downloads. Some resources can require codes; pages direct readers to check conditions.
- https://www.klett-sprachen.de/netzwerk-neu/r-37/605 — current official search result retrieved, direct browser fetch unavailable. Publisher's result describes the series and supplementary material. Recheck at editorial review.
- Goethe B1 adult practice PDF, B2 adult model PDF and B1 word-list PDF linked directly; check current provider training page for matching audio and versions.

No German exercises, Hindi translations, exam scoring claims or new exam tasks authored. The exam resource directory should receive academic/editorial review before publication. Existing German/Hindi resource content was not rewritten.

## Next opportunities, prioritised hypotheses

1. Original reviewed A1 vocabulary and grammar printable packs: real useful downloads and links from matching grammar guides.
2. Original A2/B1 revision packs once the first pack is reviewed and its discovery measured.
3. Publisher-specific resource pages only with substantially deeper edition-specific assistance; avoid near-duplicate pages listing the same links.
4. Hindi-first self-study learning path joining existing chapters and grammar topics.
5. Search Console query analysis to prioritise improvements to pages already gaining impressions; measure organic clicks and course interest, not number of pages.

No promise of ranking for every query. New URLs still need owner-approved publication, index discovery and time to collect search data. No trackers added. This batch does not set up or assume Search Console access.

## Validation

- Resource, SEO-static and SEO-content tests: 12 passed, 0 failed.
- Site-origin rollback and public-artifact tests: 16 passed, 0 failed.
- All `npm run check:generated` steps pass; `git diff --check` passes.
- Headless Chrome at 360×780 and 1280×800: no horizontal document overflow on all three pages; mobile screenshot visually inspected.
- HTML bytes: books 20,253; free PDFs 20,941; exam directory 21,511. No new executable JS, images, fonts or runtime dependencies.
- Full application test suite not rerun for this static resource batch.

Human editorial/academic review: pending. Owner merge approval: pending.

## Follow-up: beginner learning path and original download

Added `/learn-german-from-hindi.html` for the distinct intent “learn German from Hindi” / “German self-study plan for beginners” (hypotheses; no volume data). It organises existing resources into a learning sequence rather than duplicating the A1 course roadmap or book/PDF directories. Linked from the resource hub and the books/PDF pages. Generated Article/BreadcrumbList, sitemap and deployment allowlist updated.

Added `downloads/german-self-study-planner.pdf`: an original, public, one-page A4 planning sheet with seven activity prompts and review space. No German/Hindi exercise answers, exam tasks or paid chapter content. Optional authoring source: `scripts/generate-study-planner.py` (ReportLab; not a website runtime dependency). Uses the repository's Fraunces and Inter fonts. The PDF points back to its HTML guide. No form fields or user-data collection.

Sources: existing A1 roadmap, grammar syllabus, and https://www.goethe.de/en/spr/ueb.html (opened 8 November 2026). The suggested schedule is editorial guidance, not a prescribed learning duration or pass guarantee. Editorial review remains pending before publication.

Follow-up validation:
- Resource and SEO checks: 13 passed, zero failures.
- Origin rollback and public artifact checks: 16 passed, zero failures; the public PDF passes the existing private-content checks.
- All generated-file checks and whitespace checks pass.
- Headless Chrome: new guide at 360×780 and 1280×800, no horizontal overflow; 17px body text. Mobile screenshot inspected. Browser helper's profile cleanup reported ENOTEMPTY after the checks and screenshots completed; no page assertion failed.
- PDF rendered with Poppler and visually inspected: no clipping or overlaps. pypdf extraction confirms one page, seven weekday prompts and review notes. PDF size 36,887 bytes.
- Full application test suite not rerun for this static guide/download follow-up.
