# SEO page audit — 22 November 2026 (batch 1 of the verified inventory)

Tracker: [`tracker.csv`](tracker.csv) — one row per URL with target query, evidence, intent, gap, priority, decision, fix, verification and release status.

## Inventory

Built from the files changed in PRs #361–369, #371 and #372 (Git), deduplicated, cross-checked against `sitemap.xml` and the keyword-guide metadata (`docs/seo/keyword-guides/*.json`).

| Group | URLs | Source |
|---|---|---|
| Batch-70 editorial updates (course pages, guides, Goethe, practice) | 70 | #361 (3), #362 (4), #363 (63) |
| German situation lessons `/german-situations/` | 70 | #364 |
| Resources hub | 1 | #364 |
| Keyword-led guides (5 batches of 10) | 50 | #365, #366, #369, #371, #372 (#367/#368 updated the same 20 URLs) |
| **Total unique public URLs** | **191** | |

`docs/seo/keyword-guides/*.html` are generator sources, not public URLs, and are excluded.

## Query evidence and its limits

- Keyword map: `German-Language-Keywords-India.xlsx` (Codex output folder, 2026-11-21). Its own "Start here" sheet says: *“No monthly Google searches or state demand ranks were verified.”* Keywords are **research candidates, not measured demand**.
- All 50 keyword-guide queries appear in that workbook. 33 are exact topic matches. 17 are **seeds**: the page covers a sub-topic of a broader keyword (for example, the A1 listening page maps to “German A1 exam preparation”; 3 A2 guides share “German A2 exam preparation”).
- The 70 situation lessons were chosen for teaching value; no query was researched for them. The batch-70 pages kept their existing intent; the queue has no query column.
- **Search Console:** no access from this environment (GSC verification was still pending owner action in earlier notes). No impressions, clicks, CTR or positions are reported here. Nothing below is a ranking or volume figure.
- **Public evidence used instead:** Google results with `gl=in&hl=en&pws=0` (non-personalised, India), checked in Chrome on 22 Nov 2026, plus `site:` checks. None of the 10 priority URLs, and none of `/german-situations/`, appeared in `site:` results on that date (pages are 1–2 days old; `site:` is not authoritative).

## SERP snapshot (22 Nov 2026, google.com, gl=in)

| Query | What ranks | What Klarweg can offer |
|---|---|---|
| goethe a1 mock test | Goethe-Institut practice pages, SagaDeutsch (350+ scored questions), Viobean, studygerman.io, a Play Store app; AI Overview | Original, auto-checked mini mock with audio and Hindi cues, clearly labelled as shorter than the real exam |
| german a1 pdf | LearnOutLive PDF, germanwithmax (87 worksheets), Goethe Wortliste, Scribd textbooks, telc downloads | One honest worksheet with Hindi cues. Realistic target: long-tail “German A1 worksheet PDF with answers”, not the head term |
| german a1 listening practice | Goethe audio sets, studygerman.io, YouTube (Daily Deutsch, Falk), Deutschwunder, yourgermanteacher | Instant-check exercises on A1 detail types, with Hindi-speaker explanations |
| german classes ki fees kitni hai | Delhi institutes with per-level fee tables (A1 roughly ₹9,000–₹15,000 live), Goethe MMB | Complete fee table in Hindi incl. exam fees and totals — distinctive because institutes rarely add exam fees |
| german a2 course fees | Goethe MMB online courses, Language Pantheon, iifls, bharatingermany, yastudy | Every A2 cost in one table |
| online german course with certificate fees | Goethe online courses, IGNOU CGL, institutes, Udemy, Henry Harvin list | Plain answer that a recognised certificate is an exam; real course + exam totals |
| german a1 classes online | Goethe MMB, bharatingermany, YouTube free course, DW, Lingoda | Honest self-paced vs live comparison (live batches not open yet) |
| german tutor online india | TeacherOn, Preply, MyPrivateTutor, Superprof, LinkedIn | Not competitive for directory intent (one verified teacher) |
| learn german online india | Goethe MMB ×2, Federal Foreign Office India, institutes, Reddit | Goal-based routing; head term unlikely to rank |
| free german course online | DW Learn German, Goethe, Alison, OpenLearn, Duolingo, deutsch.info | Concrete free inventory + 7-day plan |

## Facts verified for this batch (22 Nov 2026)

- **Klarweg prices** — `access/worker/src/products.js` == live `https://klarweg.in/kw-products.js`: A1 ₹1,999, A2 ₹2,999, B1 ₹3,999, B2 ₹4,999, C1 ₹7,999, C2 ₹8,999 (2-year access), Lifetime ₹4,999 (no expiry).
- **Live classes** — live `GET /api/enrol/catalog`: `enabled:false`, every course `batches:[]`; listed fees group ₹16,000 (₹13,000 with GROUP3000), one-to-one ₹22,000 (₹15,000 with PERSONAL7000), A1–B2, one teacher. Live `GET /api/demo/availability`: `enabled:true`, `testMode:false`, ₹100, 20 min, Fri/Sun after 16:20 IST; slots were shown only for 22 Nov.
- **Goethe India exam fees** (goethe.de/ins/in exam pages): Jan 2027 dates — A1 ₹10,000, A2 ₹12,000, B1 ₹20,000 (module ₹5,000), B2 ₹22,000 (module ₹5,500). Remaining Dec 2026 dates — A1 ₹9,400, B1 ₹18,800 (₹4,700), B2 ₹21,200 (₹5,300). Klarweg’s two fee pages still showed the 5 Nov figures → fixed.
- **Certificates** — Klarweg issues none (claims removed in 1e90e21, Sprint 1b).

## Biggest issues found (before → after)

1. **Titles promised more than the page delivered.** “Goethe A1 Mini Mock Test” had four untimed prompts and listening required a partner. → 12 auto-checked tasks with audio and explanations, the two writing tasks and all three speaking parts, and a table showing how it differs from the real exam.
2. **Hypothetical numbers where real ones existed.** Fee pages used an “example” ₹6,000 exam fee and fictional INR offers while Klarweg already had verified Goethe fees. → Real, dated figures with totals.
3. **Stale high-stakes facts.** Goethe fees rise for 2027 dates. → Fixed on both pages that cite them.
4. **Demo vs course availability blurred.** Teacher pages did not say that no live batch is open. → Every teacher/fee page now says that course payments are not open and that only the ₹100 demo can be booked.
5. **Thin practice.** The worksheet had 6 items; the listening page had 3 clips and no answer checking. → 20 worksheet items (PDF regenerated); 6 auto-checked listening clips.
6. **Overlap.** `a1-speaking-practice-family-reunion` targets the same keyword as the much stronger `german-a1-for-spouse-visa`. Three A2 guides share one seed keyword. `learn-german-online-india` overlaps `courses.html`. → Flagged in the tracker for owner review; nothing redirected or noindexed.

## Remaining opportunities (evidence-based)

- **Fee cluster** (Hindi + A2 + certificate + cost-india + Goethe fees): commercial intent, and competitors list course fees but rarely exam fees or totals. Measure first after indexing.
- **Goethe A1 mock**: strong exam intent. The gap to SagaDeutsch is volume (350+ questions). A second and third mini mock would be the next step.
- **Real recorded audio**: listening pages depend on device voices. Chrome blocks speech without a real tap, and many Android phones lack a local German voice. Pre-rendered MP3s (Chirp 3 HD, the existing pipeline) would need owner approval for a small TTS spend.
- **Situation lessons (70)**: ~200 words each, no query evidence. Useful practice; low SEO priority. Better grouped into 10 topic hubs than optimised one by one.

## What to measure after release

Once Search Console is verified, measure per URL: indexing status, query-level impressions, clicks, CTR and average position.

Klarweg has no analytics by owner choice (privacy policy §7), so learner actions can only be counted server-side, from the Worker/D1:

- free-chapter starts are not measurable without analytics
- ₹100 demo bookings and their referring page: needs an owner decision on attribution
- self-paced purchases and live enrolments (Cashfree orders)

## Next batch (proposed order)

`german-a1-for-spouse-visa` + `a1-speaking-practice-family-reunion` (consolidation decision), `a1`, `courses`, `live-classes`, `one-to-one-german-classes-online`, `weekend-german-classes-online`, `goethe/a1-exam`, `goethe-b1-exam-preparation-plan`, `online-german-b1-classes`, `german-a2-mini-practice-test`.
