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

- **Klarweg prices** — `access/worker/src/products.js` (identical on `deploy/access-marketplace-on-73417bc5`, the source of live access Worker 5852e9de) == live `https://klarweg.in/kw-products.js`: A1 ₹1,999, A2 ₹2,999, B1 ₹3,999, B2 ₹4,999, C1 ₹7,999, C2 ₹8,999 (2-year access), Lifetime ₹4,999 (no expiry).
- **Live classes** — live `GET /api/enrol/catalog`: `enabled:false`, every course `batches:[]`; listed fees group ₹16,000 (₹13,000 with GROUP3000), one-to-one ₹22,000 (₹15,000 with PERSONAL7000), A1–B2, one teacher. Live `GET /api/demo/availability`: `enabled:true`, `testMode:false`, ₹100, 20 min, Fri/Sun after 16:20 IST; slots were shown only for 22 Nov.
- **Goethe India exam fees** (goethe.de/ins/in exam pages, every listed date and result page checked on 22 Nov 2026): Jan 2027 dates — A1 ₹10,000, A2 ₹12,000, B1 ₹20,000 (module ₹5,000), B2 ₹22,000 (module ₹5,500). Remaining Dec 2026 dates — A1 ₹9,400, B1 ₹18,800 (₹4,700), B2 ₹21,200 (₹5,300). Klarweg’s two fee pages still showed the 5 Nov figures → fixed.
  - **Scope:** identical at every listed Goethe-Institut / Max Mueller Bhavan centre (New Delhi, Mumbai, Pune, Bangalore, Chennai, Kolkata) and listed partner venue (e.g. Trichy, Kolhapur, Jaipur, Noida, Vadodara): A1 27 dates, A2 15, B1/B2 20 module listings each. Goethe-Zentren that run their own booking are not in this listing and are not claimed.
  - **Candidate category:** these are standard prices incl. 18% GST. Detail pages (A1 New Delhi 04.01.2027, A2 Pune 13.01.2027, B1/B2 New Delhi 05.01.2027) state a 20% rebate for candidates who attended a Goethe-Institut course within 6 months of the exam: A1 ₹8,000, A2 ₹9,600, B1 ₹16,000 (module ₹4,000), B2 ₹17,600 (module ₹4,400). Pages now state the scope and the rebate.
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

## Batch 1 release (22 Nov 2026)

- PR #373 merged as `3f85d5d4` and deployed to klarweg-site `a57ce09` (Pages build 07:52–07:53 UTC). Before merging: required check `npm-test` and `live-classes` passed on the final commit `56bb6769`; no review comments; Codex review had no findings.
- **Live checks** (desktop 1280 px and a 375 px same-origin frame with a 371 px viewport):
  - all 12 pages return 200, with no horizontal overflow and every touch target at least 44 px;
  - all 70 unique internal links return 200;
  - mini mock: a real click on Check scored 3 of 6, with per-item verdicts and explanations, and focus moved to the score;
  - listening: a real click started German TTS and a second click stopped it; with no German voice the play buttons hide, the fallback message shows and the transcripts stay available;
  - the live worksheet PDF matches the repo (sha256 `fc8d352d…`, 3 pages, answer key on the last page);
  - the ₹100 demo flow showed the teacher and 16 slots on 22 Nov and stopped before payment (no booking made);
  - A1 and Lifetime checkout buttons are wired (`data-kw-buy`, `kw-checkout.js`) and were not clicked.
- **Incident:** a request made about a minute before the Pages build went live left Cloudflare serving a cached 404 for `kw-guide-check.js` and the old 6-exercise PDF (`cf-cache-status: HIT`, `max-age=14400`). Fix PR #375 versions both URLs (`?v=20261122a`). Without it, the stale entries expire by about 11:52 UTC.

## Batch 2 (22 Nov 2026): 10 manual audits

All query evidence is from `German-Language-Keywords-India.xlsx` (India keywords sheet), with no verified volumes, plus Google `gl=in&hl=en&pws=0` results from 22 Nov. Per-URL details are in the tracker (`audit_status = Manual (batch 2…)`).

| URL | Target query (type) | User task | Concrete gap | Fix |
|---|---|---|---|---|
| german-a1-for-spouse-visa | A1 German for spouse visa (exact) | Do I need A1, which exam, how to prepare | Abstract answer: no named exams, no one-year rule, no route | Official rules quoted (mission page of 16 Feb 2026; Make it in Germany skilled-worker exemption), at-a-glance table, 5-step route |
| a1-speaking-practice-family-reunion | German A1 speaking practice (teaching-value; was a duplicate seed) | Practise spelling, numbers, appointments | 302 words, no check, same keyword as the visa guide | Retargeted to the Sprechen Teil 1 spelling and number skills (verified in Durchführungsbestimmungen §3.3); 8-item self-check; partner drill |
| a1 | German A1 course (exact) | Decide on the course and its total cost | Stale "waitlist open" FAQ; no total cost or time | FAQ corrected; ₹11,999 total and 60–150 h guideline |
| courses | online German language course India (exact) | Compare levels and prices | No prices; unsourced hours; B1 card said "the level for spouse visas" | Static fee table; cards show prices; blurbs corrected |
| live-classes | online German classes with live teacher (exact) | Book a demo or enrol | Hero did not say no batch is open | "Batch dates to be announced"; price-card footer |
| one-to-one-german-classes-online | 1 to 1 German classes online (exact) | Fee and terms | No fee, status or terms | Facts table from the live catalog, terms, unpublished lesson count stated |
| weekend-german-classes-online | weekend German classes online (exact) | Find a weekend class | Never said Klarweg has no weekend batch | Answer first: none listed; demos Fri/Sun from 16:20 IST |
| goethe/a1-exam | Goethe A1 exam (existing intent) | Format, scoring, fee | No fee figure; no links to the new practice pages | Fee in the summary; practice links |
| goethe-b1-exam-preparation-plan | Goethe B1 exam preparation online (exact) | Plan the last month | Generic plan, no format or pass rule | Module table, day-by-day plan, Lesen Teil 4 self-check |
| online-german-b1-classes | German B1 classes online (exact) | Choose a route and check readiness | No fees, no status | Self-paced vs live table, 6-item readiness check |

**Also fixed:** "Lifetime is cheaper than two levels" was wrong, because A1 + A2 cost ₹4,998. Corrected on the certificate-fees page and on courses.

**Not changed, owner decision:** the homepage FAQ still says demo booking "is not open yet" and describes an A1 waitlist. The demo has been live since 20 Nov. That wording is pinned by `scripts/live-classes-static.test.mjs` (decision D8), so changing it needs your approval of new wording and a test update.

### Spouse-visa pair: do both deserve to stay?

Yes, because they now serve different tasks:

- **german-a1-for-spouse-visa.** Primary query: “A1 German for spouse visa”; secondary: “A1 German course for family reunion visa”. It answers the requirement question (who, which exam, how recent, fee link, route). It links down to the drill, the mini mock, A1 Chapter 1 and the A1 course.
- **a1-speaking-practice-family-reunion.** Primary query: “German A1 speaking practice” (a teaching-value topic with no researched volume; the SERP is mostly exam practice and YouTube). It is a practice tool and links up to the visa guide and across to goethe/a1-sprechen.
- The URL slug still says “family-reunion”. The content keeps that audience, so no redirect is needed. Nothing was redirected, deleted or noindexed.

### Recorded audio (no spend made)

- **Clips:** 18 transcripts with `data-speak` across 5 pages: A1 listening 6, mini mock 6, A2 listening 3, pronunciation (ch) 2, B2 listening 1. That is 1,719 characters in total.
- **Estimated cost:** about $0.05 at Chirp 3 HD list price ($30 per 1M characters, the existing pipeline), or under $0.20 with three takes for review. Check the current price on the GCP billing page before approving.
- **Output:** 18 MP3s, about 2–3 minutes of audio, roughly 1–1.5 MB at 48–64 kbps. They would be served with `preload="none"` and the device voice kept as a fallback.

**Android playback test plan, before and after:**

1. **Devices:** one low-end Android 10–11 phone (2–3 GB RAM), one recent Android 14 phone, and Samsung Internet on a Galaxy device.
2. **Browsers:** Chrome stable, Samsung Internet and Firefox for Android.
3. **Baseline (today):** record whether a German voice exists (`speechSynthesis.getVoices()`), whether the play buttons appear, and whether the fallback text shows.
4. **With MP3s:** test first play on a 3G-throttled connection, pause/resume, switching clips mid-play, screen lock during playback, headphones, and media volume vs ring volume.
5. **Accessibility:** TalkBack reads the button labels and the status message; buttons are at least 44 px.
6. **Pass criteria:** audio starts within 2 s on 4G and within 5 s throttled; nothing autoplays; the transcript is available in every state; total data per page is under 1 MB.

## Next batch (proposed order)

Batch 3: `german-a2-mini-practice-test` (moved from batch 2), `learn-german-online-india` vs `courses` overlap audit, then the three A2 guides that share the “German A2 exam preparation” seed (`german-a2-listening-practice`, `german-a2-writing-practice-online`, with the mini test), `german-b2-speaking-practice-online`, `german-classes-for-working-professionals`, `a1-to-b2-german-course-duration`, `german-a1-30-day-study-plan` and `german-a1-syllabus-checklist`.
