# Batch 3: exam comparison, certificates and Indian centres

Status: draft. Native German and fluent Hindi/Roman review are pending. Human approval is not claimed. Official facts were checked 9 November 2026; check current provider and receiving-body guidance before publication.

## Editorial and source checks

- Provider comparison is a decision framework, not an unsupported easiest/cheapest/fastest ranking. It compares exact B1 products and does not extend the Goethe/ÖSD B1 relationship to every level.
- Certificate validity and evidence recency are separate. No fixed result turnaround or universal acceptance claim is given. The candidate’s own invitation/centre controls result access.
- City directory entries are not availability claims. India’s exam page lists additional regional venues and Kochi beyond the smaller general directory; the guide links both, with no invented addresses, dates, seat counts or per-city level coverage.
- Source HTML retains .html URLs, consistent with main. The existing artifact-only clean-URL transform publishes extensionless canonicals and links. No runtime JavaScript was added.
- No new exam portal, worker, payment or course behaviour. No measured keyword volume or ranking guarantee.

## Open review items

- [VERIFY: Native German reviewer checks every example and compound noun below.]
- [VERIFY: Fluent Hindi reviewer checks Devanagari meanings and Roman reading aids.]
- [VERIFY: Recheck official exam-location routing immediately before release; current city lists differ in scope, and no single list here is advertised as exhaustive.]
- [VERIFY: Receiving-body acceptance, certificate recency and individual result timing remain candidate-specific checks; do not fill them with guessed rules.]

## telc-vs-goethe.html

### Official sources

- Goethe B1: modules and joint development: https://www.goethe.de/ins/in/en/spr/prf/gzb1.cfm
- telc German B1: structure and mock examination: https://www.telc.net/en/language-examinations/certificate-exams/german/certificate-german-telc-german-b1/
- telc examination-centre finder: https://www.telc.net/en/language-examinations/find-a-telc-examination-centre/
- ÖSD FAQ and licensed-centre route: https://osd.at/en/faq-en/
- Goethe India FAQ: recognition and recency: https://www.goethe.de/ins/in/en/spr/prf/ogf.html
- ÖSD B1: four-module structure and practice material: https://osd.at/en/portfolio-item/osd-zertifikat-b1-zb1/

### German review

- [ ] Welche Prüfung passt zu meinem Ziel?

### Hindi and Roman review

- [ ] मेरे उद्देश्य के लिए कौन-सी परीक्षा उपयुक्त है? (mere uddeshya ke liye kaun-si pariksha upyukt hai)

## goethe/certificate-validity-result.html

### Official sources

- Goethe India FAQ: validity, result access and recognising bodies: https://www.goethe.de/ins/in/en/spr/prf/ogf.html
- Goethe India: certificate downloads and cooperation centres: https://www.goethe.de/ins/in/en/spr/prf.html

### German review

- [ ] Guten Tag, ich habe die Deutschprüfung abgelegt. Wo finde ich Informationen zu meinem Prüfungsergebnis? Vielen Dank.
- [ ] das Prüfungsergebnis
- [ ] das Zertifikat

### Hindi and Roman review

- [ ] परीक्षा का परिणाम (pariksha ka parinaam)
- [ ] प्रमाणपत्र (pramaanpatra)

## goethe/exam-centres-india.html

### Official sources

- Goethe India examination-centre directory: https://www.goethe.de/ins/in/en/sta/koo/pfz.html
- Goethe India examination page and regional location routing: https://www.goethe.de/ins/in/en/spr/prf.html
- Goethe B1: uniform conduct and grading: https://www.goethe.de/ins/in/en/spr/prf/gzb1.cfm

### German review

- [ ] Wo findet die Prüfung statt?

### Hindi and Roman review

- [ ] परीक्षा कहाँ होगी? (pariksha kahaan hogi)

## Validation

- Full `npm test`: 738 tests, 737 passed, 1 skipped, 0 failed; generated checks passed.
- After the final B1 comparison-table clarification and ÖSD source addition, reran focused metadata/content/link/clean-URL tests: 16 passed; structured-data check unchanged.
- Headless Chrome: all three pages at 360×780 and 1280×800; no viewport overflow, TOC anchors resolve, German/Hindi markup and Hindi font checks pass. Final table screenshots inspected.
- Verified clean canonical, Open Graph, Article/Breadcrumb and sitemap rewrites for all three new pages using the existing publishing transform.
- Native German and fluent Hindi review are still pending.
