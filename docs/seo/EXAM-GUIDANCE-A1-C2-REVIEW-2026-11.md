# Goethe and telc A1–C2 exam guidance review

Base: `3e09cf53dc120755e2006d86c7cedc15b5bcd7ed` (published PR #338). Prepared 14 November 2026. Branch: `seo/goethe-telc-a1-c2-guides-20261114`.

## Scope and publication status

Twelve provider/level guides cover A1, A2, B1, B2, C1 and C2 for both Goethe and telc. This adds **six telc guides and one comparison hub**, refreshes the **six existing Goethe routes**, and links the hub from resources, the Goethe hub, the provider comparison and the official-paper resource directory. It does not create duplicate Goethe landing pages.

The 400 practice lessons, practice hub and practice CSS (402 files) are byte-identical to base. The existing practice datasets, generation and tests are unchanged. C1/C2 exam guides link to the existing level syllabus/course sample; they do not invent C1/C2 practice-library pages.

This creation task prepares a draft PR. It does not merge, deploy, change exam access or book an examination. Publication requires passing checks and owner approval for this change.

## Source verification and editorial status

The provider pages and currently linked official material were read on **14 November 2026**. Core format/scoring checks used seven telc mock bundles (the six general levels plus C1 Hochschule) and six Goethe administration PDFs. Four additional Goethe model sets were consulted for existing A2/B1/C1/C2 writing-task guidance. Downloads and extracted text remain outside the repository and public artifact. No official exam questions, audio, answer keys or protected course/exam payloads are copied into these new guides.

The Goethe administration PDFs served at the official URLs carry the 1 September 2025 version. A source check in November 2026 does not mean the provider issued a new version that day. The official telc C1 download still names the 2016 format; it was reached from the current product page. Use the provider's current links rather than treating a filename's year as proof of obsolescence or revision.

**AI-assisted source and editorial checks only. No human/native German linguistic or independent pedagogic review is claimed.** New B2 German example phrases are original learning examples, not official questions or predictions. Existing Goethe word lists, model prose and detailed lesson material remain attributed to their existing sources; this pass does not claim a fresh external linguistic review of every historical example.

Official source text has been summarised selectively. Most preparation advice is original Klarweg guidance. Sources are linked for verification rather than mirrored. Study sequences are adaptable advice, not official timetables or guaranteed time-to-level estimates.

## Facts that must remain provider-specific

| Examination | Published task timing | Pass framework checked |
| --- | --- | --- |
| Goethe adult A1 Start Deutsch 1 | Hören about 20, Lesen 25, Schreiben 20, Sprechen about 15 minutes | 60/100 overall, all sections completed; written maximum 75, oral 25 |
| Goethe adult A2 | Lesen 30, Hören about 30, Schreiben 30, Sprechen about 15 minutes | 60/100 overall, with at least 45/75 written and 15/25 oral |
| Goethe B1 | Lesen 65, Hören about 40, Schreiben 60, Sprechen about 15 minutes plus 15 preparation | Four modules; each needs 60/100 |
| Goethe B2 | Lesen 65, Hören about 40, Schreiben 75, Sprechen about 15 minutes plus 15 preparation | Four modules; each needs 60/100 |
| Goethe C1, modular | Lesen 65, Hören about 40, Schreiben 75, Sprechen about 20 minutes plus 20 preparation | Four modules; each needs 60/100 |
| Goethe C2 GDS | Lesen 80, Hören about 35, Schreiben 80, Sprechen about 15 minutes plus 15 preparation | Four modules; each needs 60/100 |
| telc general A1 | Listening about 20; reading/writing 45 combined; speaking about 15, no preparation | Linked mock: 36/60 overall; no partial examination |
| telc general A2 | Listening about 20; reading/writing 50 combined; speaking about 15, no preparation | Linked mock: 36/60; no partial examination |
| telc general B1 | Reading/language elements 90; listening about 30; writing 30; speaking about 15 plus 20 preparation | At least 135/225 written and 45/75 oral |
| telc general B2 | Reading/language elements 90; listening about 20; writing 30; speaking about 15 plus 20 preparation | At least 135/225 written and 45/75 oral |
| telc general C1 | Reading/language elements 90; listening about 40; writing 70; speaking about 16 plus 20 preparation | Linked mock gives 99 written and 29 oral, at least 128/214 overall |
| telc general C2 | Reading 80; integrated listening/writing 60; separate writing 90; speaking about 15 plus 20 preparation | At least 72 written and 24 oral, at least 96/160 overall |

Times are standard task times, not a promise of appointment duration. The telc C1 and C2 structure tables list a 20-minute break. Centre instructions determine the booked sequence, permitted adjustments, arrival and session arrangements.

Important distinctions and source limitations:

- telc C2 exists and has an integrated listening/writing subtest. It must not inherit Goethe's four separately bookable modules.
- General telc C1 and C1 Hochschule are different named tests. The guide links the separate Hochschule product and mock; similar top-level timings do not prove identical tasks or certificate recognition.
- General, youth, dual-level and vocational variants are identified rather than merged into a single generic “B1” or “B2” pattern.
- telc's product pages and directory labels do not always agree on digital availability (including C2). The guides therefore ask the centre to confirm the available format instead of promising a mode everywhere.
- For telc C1, the guide quotes the officially linked mock's numeric minima, without deriving a new percentage-rounding rule.
- Detailed resit credit windows, prices, seats and local dates are not invented. Ask the centre for the current conditions. University/employer/authority acceptance must be confirmed with the receiving organisation; no universal admission, employment or visa outcome is promised.

## Existing Goethe corrections and preservation

- Retains all six main guide URLs and existing anchor IDs. New planning blocks identify the exact exam, compare with telc, give readiness checks and link current official format/scoring sources.
- Refreshes six titles, descriptions and matching social/Article metadata. Removes external font fetches from the touched guide pages; adds local navy/green guidance styling.
- Removes unverified national exam-fee figures from the A1/A2/B1 summaries. Course pricing, purchase controls and access remain unchanged.
- Replaces beginner-oriented B2 speaking/writing advice with presentation, argument and discussion guidance, two-task writing preparation and appropriate original examples.
- Repairs **54 pre-existing broken footer hrefs** across B2/C1/C2, using the correct parent-directory paths. No destination account, auth or payment implementation is changed.
- Qualifies overbroad visa/admission and native-equivalence statements in the touched main guide introductions. Corrects the Goethe hub's “four modules, every level” heading to “four skills”; A1/A2 are not presented as modular.
- Does not rebuild the remaining historical Goethe skill, fee, centre, legal or certificate guides. Their specialist details retain their own source dates. This audit does not certify every page they link to as newly reviewed.

## SEO, design and maintainability

- New canonical hub: `german-exam-guidance.html`; new telc routes: `telc/{a1,a2,b1,b2,c1,c2}-exam.html`. Existing Goethe routes remain canonical. Seven new sitemap URLs bring the total from 546 to **553**.
- Explicit allowlist additions cover only seven new HTMLs and `exam-guidance.css`. No directory glob is introduced for telc and no source JSON, scripts, test material or PDF archive is published.
- Unique descriptive titles fit 70 characters including brand; descriptions are 100–170 characters. New pages have one H1, matching OG/Twitter metadata, self-canonicals, Article/BreadcrumbList or a 12-item CollectionPage list matching visible guide order. No fake Person, examiner, review, rating, official affiliation or FAQ rich-result claim is added. Official citations stay in visible source links; structured-data identity URLs follow the repository’s site-origin policy.
- Provider/level cross-links, the new hub and four existing discovery pages provide inbound links. Local fragments/assets and the final clean-URL artifact are audited, including the touched footers.
- New material uses navy `#0f172a` and green `#1fa84b`. No orange is added; no shared site CSS, fonts, trackers or dependencies are introduced. Legacy page scaffolds remain in place.
- JSON records feed six complete telc pages, the hub and bounded updates in existing Goethe pages. `npm run generate:exam-guides` rebuilds them, and `npm run check:generated` now includes the exam-guide generator. Existing Goethe content outside the bounded block remains manually maintained.
- Validation rejects wrong provider/level pairs, duplicate or unsafe paths, non-provider source hosts, missing task data and invalid metadata. Text is escaped before HTML output. The browser audit uses the registry rather than a hard-coded output count.
- No keyword-volume study, Search Console indexing audit, AI-detection evasion, ranking outcome or pass guarantee is claimed.

## Validation

| Check | Result |
| --- | --- |
| `npm test` | 816 tests: 815 passed, 1 skipped, 0 failed; generated verification also passed |
| Independent `npm run check:generated` | Passed; 12 exam guides + hub and existing generated outputs have no drift |
| `npm run test:exam` | 632 tests: 628 passed, 4 skipped, 0 failed |
| Targeted guide/static/content/resources/site-origin tests | 26 passed, 0 failed |
| Public artifact and leak checks | Passed; 1,030 explicitly allowed files, no private-content findings |
| Exam-guide artifact audit | Passed; 12 guides + hub, 26 JSON-LD blocks, 517 local links/assets; source files excluded |
| Existing practice artifact audit | Passed; 553 sitemap URLs, 401 practice pages, 802 JSON-LD blocks, 10,832 local links/assets |
| Clean URLs | Passed; no further rewriting required |
| Exam-guide responsive/navigation audit | 52 passed: 13 pages × 320/390/768/1440px; zero page errors, failed or external requests; source navigation works without JavaScript |
| Discovery navigation | 8 passed: four existing discovery pages × 390/1440px; hub, level selection and C2 guide navigation work |
| Screenshot inspection | Hub mobile, telc A1 mobile/C2 desktop, Goethe B2 mobile/C1 planning desktop and telc A1/C2 mobile timing tables inspected; readable wrapping and navy/green additions |
| Preservation/scope/whitespace | 402 practice files and dependencies unchanged; 66 original Goethe anchor IDs preserved; protected-path and workflow diffs empty; `git diff --cached --check` passed |

Skipped tests are reported separately. Chromium checks are not cross-browser or human accessibility certification. Exact-head GitHub CI results will be recorded in the PR.

## Protected scope

Payments, auth, checkout/enrolment, Workers, paid chapters/audio, exam content/engine, dependencies and deployment workflows are unchanged. All public additions are static guidance. Free chapter links lead to existing public samples and do not alter entitlement. Existing private-content boundary and leak checks remain in force.

```sh
npm run generate:exam-guides
npm test
npm run check:generated
npm run test:exam
bash scripts/site-artifact.sh _site
node scripts/seo-practice-artifact.mjs _site
node scripts/seo-exam-guides-artifact.mjs _site
node scripts/clean-urls.mjs _site --check
node scripts/site-leak-check.mjs _site
npm run test:exam-guides:browser -- _site
```

Use `EXAM_GUIDE_SCREENSHOTS=/path/out` for optional captures and `CHROME_PATH` where Chromium is not auto-detected. The generator updates only registered guide paths and the hub. Never copy the downloaded research archives into the repository or public allowlist.

## Provider sources and route inventory

- `goethe/a1-exam.html` — [Goethe-Zertifikat A1: Start Deutsch 1](https://www.goethe.de/ins/de/en/prf/gzsd1.cfm); [administration rules](https://www.goethe.de/pro/relaunch/prf/en/Durchfuehrungsbestimmungen_A1_Start_Deutsch_1.pdf).
- `goethe/a2-exam.html` — [Goethe-Zertifikat A2](https://www.goethe.de/ins/de/en/prf/gzsd2.cfm); [administration rules](https://www.goethe.de/pro/relaunch/prf/en/Durchfuehrungsbestimmungen_A2.pdf).
- `goethe/b1-exam.html` — [Goethe-Zertifikat B1](https://www.goethe.de/ins/de/en/prf/gzb1.cfm); [administration rules](https://www.goethe.de/pro/relaunch/prf/en/Durchfuehrungsbestimmungen_B1.pdf).
- `goethe/b2-exam-preparation.html` — [Goethe-Zertifikat B2](https://www.goethe.de/ins/de/en/prf/gzb2.cfm); [administration rules](https://www.goethe.de/pro/relaunch/prf/en/Durchfuehrungsbestimmungen_B2.pdf).
- `goethe/c1-exam-preparation.html` — [Goethe-Zertifikat C1](https://www.goethe.de/ins/de/en/prf/gzc1.cfm); [administration rules](https://www.goethe.de/pro/relaunch/prf/en/Durchfuehrungsbestimmungen_C1.pdf).
- `goethe/c2-exam-preparation.html` — [Goethe-Zertifikat C2: Großes Deutsches Sprachdiplom](https://www.goethe.de/ins/de/en/prf/gzc2.cfm); [administration rules](https://www.goethe.de/pro/relaunch/prf/en/Durchfuehrungsbestimmungen_C2_neu.pdf).
- `telc/a1-exam.html` — [Start Deutsch 1 / telc Deutsch A1](https://www.telc.net/en/language-examinations/certificate-exams/german/start-german1-telc-german-a1/); [official mock bundle](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_a1.zip).
- `telc/a2-exam.html` — [Start Deutsch 2 / telc Deutsch A2](https://www.telc.net/en/language-examinations/certificate-exams/german/start-german-2-telc-german-a2/); [official mock bundle](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_a2_01.zip).
- `telc/b1-exam.html` — [Zertifikat Deutsch / telc Deutsch B1](https://www.telc.net/en/language-examinations/certificate-exams/german/certificate-german-telc-german-b1/); [official mock bundle](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_b1.zip).
- `telc/b2-exam.html` — [telc Deutsch B2](https://www.telc.net/en/language-examinations/certificate-exams/german/telc-german-b2/); [official mock bundle](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_b2.zip).
- `telc/c1-exam.html` — [telc Deutsch C1](https://www.telc.net/en/language-examinations/certificate-exams/german/telc-german-c1/); [official mock bundle](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_c1.zip).
- `telc/c2-exam.html` — [telc Deutsch C2](https://www.telc.net/en/language-examinations/certificate-exams/german/telc-german-c2/); [official mock bundle](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_c2.zip).

Additional variant source: [telc Deutsch C1 Hochschule](https://www.telc.net/en/language-examinations/certificate-exams/german/telc-german-c1-university/).
