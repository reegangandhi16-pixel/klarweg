# Klarweg SEO audit, strategy and roadmap (2 November 2026)

Branch: `seo/audit-and-technical-fixes` (off `main` c85d5b0). Nothing merged or deployed.

Labels used below: **[verified]** = measured in the repo or on the live site in this session ·
**[estimate]** = judgement with no search-volume data behind it. Validate estimates in Google
Search Console (GSC) and Keyword Planner before investing in them. No search volumes or
difficulty scores are quoted, because none were available.

---

## 1. Architecture and technology [verified]

| Layer | What it is |
|---|---|
| Site | Hand-written static HTML + vanilla JS, no build step (CLAUDE.md non-negotiable) |
| Hosting | GitHub Pages behind Cloudflare, `klarweg.in`. Deploy = merge to `main` → `deploy-pages.yml`, which publishes **only** `.github/pages-allowlist.txt` |
| Public pages | 19 root pages + 3 account pages + 258 chapter pages (`chapter/chapter-*.html`, content rendered by JS from `*-data.js`) |
| Backend | Cloudflare Workers (`klarweg-access` for auth, entitlements, payments and AI; tutor; reports; exam) |
| Paywall | Chapter 1 of each level is free. The other 252 chapters show "Chapter Locked" to signed-out visitors and carry `noindex, follow` (set deliberately by `scripts/seo-chapter-meta.mjs`) |
| Generated SEO | `german-grammar.html` (258-topic syllabus) from `scripts/build-grammar-index.mjs`; chapter meta from `scripts/seo-chapter-meta.mjs`; both checked in CI by `npm run check:generated` |
| Analytics | **None.** `privacy.html` §7 promises "no analytics or advertising tracking" |

## 2. Audit findings

### Technical SEO [verified]
| Check | Result |
|---|---|
| HTTPS / host | `http://` and `www.` both 301 to `https://klarweg.in/`. The old `github.io/klarweg/` 301s to the new domain. Good. |
| Status codes | 404 page returns a real 404 with `noindex`. Good. |
| Duplicate URLs | `/index.html`, `/a1` and `/a1.html` all return 200 (GitHub Pages behaviour). Every indexable page has a self-referencing canonical, so this is handled. No action needed. |
| robots.txt | Valid. It blocks only internal directories (which aren't deployed anyway) and declares the sitemap. Nothing needed for rendering is blocked. |
| Sitemap | 26 URLs, which exactly match the canonical, indexable set (already enforced by `set-site-origin.test.mjs`). No `lastmod`. Google ignores `changefreq`/`priority`. |
| Indexability | 25 indexable pages. 252 paid chapters are `noindex, follow`, which is correct: crawlers see only a lock screen. |
| JS rendering | A free chapter is about 88 words of static HTML and **3,563 words after JS rendering** (headless Chrome with Googlebot UA). Level pages render the chapter list by JS. Google renders JS, but the free chapters depend on it entirely. |
| Internal links | `german-grammar.html`, the only indexable entry point for all 258 topics, had **2 inbound links** (courses, resources). The homepage and level pages didn't link it. **Fixed in this branch.** |
| Broken links | None among static hrefs. The 7 flagged were JS template strings (`${href}`). |
| Structured data | FAQPage on home, goethe-exam and ausbildung. Note that FAQ rich results have shown only for government/health sites since 2023, so these blocks are harmless but earn no SERP feature. There was no Organization, WebSite or BreadcrumbList markup. **Fixed in this branch.** |
| Social previews | `og:image` is the 512×512 app icon with a `summary` card on every page. There are no 1200×630 share images. |
| Images | Marketing pages use almost no `<img>` (SVG/CSS). No alt-text problems. |
| hreflang | Not justified: there is one English-language version with Hindi support. Revisit only if real Hindi-language pages are built. |
| Performance | `index.html` is 311 KB of HTML (large inline CSS/JS) and loads `chapter-app.js`, `story-lexicon.js` and `tokenizer.js` for the popup. **Not measured here.** Run PageSpeed Insights or CrUX for `/` and `/a1.html` (mobile) before optimising. |

### On-page [verified]
- Titles were brand-led ("A1 · Foundations — Klarweg", "Klarweg — See German clearly…") and didn't contain the queries learners type ("German A1 course", "learn German"). **Fixed.**
- Free B2/C1/C2 chapter descriptions were 1 to 2 thin sentences. **Fixed.**
- Every indexable page has exactly one `<h1>`, but they are editorial ("Built for the real exam.", "Talk to us."). That's fine for brand voice, and the title now carries the query.
- `C1 · Oberstufe` uses the same label as `B2 · Oberstufe` (`c1.html`). Worth an editorial decision.
- No cannibalisation found. Each level page owns its level, and `german-grammar.html` owns "German grammar A1 to C2".

### Conversion audit
- **P0, trust and consumer-law risk [verified]:** each level page's pricing card says *"One-time. Lifetime access to A1."* (`a1.html` to `c2.html`, `.price-sub`). But `terms.html:134` and the Access Worker (commit 08ce194, `expires_at = granted + 2 years`) grant single levels for **2 years**. Only the ₹4,999 Lifetime bundle never expires. This needs an owner decision on wording before any traffic push. It was **not changed in this branch** because it is pricing copy.
- No measurement: there's no analytics, so organic → purchase cannot currently be attributed. See §8.
- Free → paid path: free Chapter 1 → "Exit chapter" → level page pricing. The free chapter has no in-content "next chapter / unlock A1" link back to the level roadmap.
- Pricing is visible on every level page and the homepage. The refund guarantee is stated (7 days).
- Trust signals: no named teacher or author on the self-paced pages, and no visible "about the method" credentials on level pages (the live-classes page does have an owner profile).

## 3. Top 20 opportunities (priority order)

| # | Opportunity | Why | Benefit | Status |
|---|---|---|---|---|
| 1 | Fix "Lifetime access to A1" vs 2-year terms | Misleading claim. Harms trust and conversions, and invites refund disputes | Trust, compliance | **Owner decision** |
| 2 | Verify `klarweg.in` in GSC (DNS) and submit sitemap | No search data exists at all. Nothing else can be validated without it | Measurement | **Owner action** |
| 3 | Query-led titles/descriptions | Titles didn't contain the target queries | CTR, relevance | Done |
| 4 | Link grammar hub site-wide | 2 inbound links → ~20 | Crawl depth, topic authority | Done |
| 5 | Organization/WebSite + BreadcrumbList | Site name and breadcrumb display in SERP | SERP presentation | Done |
| 6 | SEO regression tests | Protect titles, canonicals and JSON-LD | Durability | Done |
| 7 | Free indexable grammar explainer pages (`/grammar/…`) | Paid chapters are noindex, so the site has almost no rankable topic content | Biggest traffic lever [estimate] | Plan §5 |
| 8 | Goethe exam guides per level (format, modules, scoring, India booking basics) | High-intent exam queries. `goethe-exam.html` is a single overview | Qualified traffic | Plan §5 |
| 9 | In-chapter path from the free chapter to the level roadmap / pricing | Free lesson is the main organic landing page | Conversion | Next batch |
| 10 | 1200×630 share images (home, levels, free chapters) | Better WhatsApp/social previews (key in India) | Social CTR | Design task |
| 11 | Measure Core Web Vitals for `/` and `/a1.html` | 311 KB homepage, popup runtime on home | Rankings and conversion | Measure first |
| 12 | Accurate sitemap `lastmod` | Google uses it only if accurate. Needs full git history in CI | Recrawl speed | Later |
| 13 | Publish `lesen-practice.html` (exists, not allowlisted) after review | Free practice = linkable, rankable asset | Traffic, links | Owner review |
| 14 | Vocabulary reference pages (numbers, days, months, family, jobs) | Classic beginner queries [estimate] | Top-of-funnel traffic | Plan §5 |
| 15 | Author/teacher attribution on content pages | E-E-A-T, trust | Trust, conversion | Content |
| 16 | Ausbildung content cluster (nursing, B1 requirement, timeline) | Strong India intent [estimate] | Qualified traffic | Plan §5 |
| 17 | YouTube lessons embedded on matching grammar pages | Hindi-explained German demand is served mostly by video [verified in SERP sample] | Engagement, links | §6 |
| 18 | Course structured data (Google "Course info") | Only after #1 is fixed and pricing copy is accurate | SERP feature | Later |
| 19 | Editorial H1/H2s on hub pages that state the topic once | Clearer relevance without changing voice | Relevance | Later |
| 20 | Privacy-safe conversion counting (Worker-side, first-party, with `?src=` landing tag) | Attribute organic revenue without third-party analytics | Measurement | Owner decision |

## 4. Keyword clusters and page map [estimate unless noted]

Market observation [verified, small sample]: the results for "learn German in Hindi" and
"German grammar explained in Hindi" are dominated by YouTube videos, one small Udemy course and
Goethe-Institut course pages. Written, structured Hindi-supported grammar explanations are scarce.
That gap is Klarweg's clearest differentiation. Confirm it with GSC impressions once verified.

| Cluster | Primary query (EN) | Related | Intent | Market | Klarweg page | Action |
|---|---|---|---|---|---|---|
| Learn German (brand-level) | learn German for Hindi speakers | learn German in Hindi, German course online India | Commercial | IN | `/` | Title updated |
| A1 course | German A1 course online | A1 German in Hindi, Goethe A1 preparation | Commercial | IN + global | `a1.html` | Title updated |
| A2–C2 courses | German B1 course online, etc. | Goethe B1 preparation, B2 for university | Commercial | IN + global | `a2.html` to `c2.html` | Title updated |
| Grammar syllabus | German grammar A1 to C2 | German grammar topics list | Informational | Global | `german-grammar.html` | Now linked site-wide |
| Grammar topics | Akkusativ vs Dativ (in Hindi) | der die das rules, Perfekt with haben/sein, Wechselpräpositionen, Konjunktiv II | Informational | IN + global | none indexable | **New `/grammar/<topic>.html`** |
| Goethe exam | Goethe A1 exam pattern | Goethe B1 exam format, marks, modules, fees India, Start Deutsch 1 | Informational → commercial | IN | `goethe-exam.html` | **New per-level guides** |
| Mock tests / practice | Goethe A1 mock test free | Lesen practice, Hören practice | Transactional (free) | IN + global | `lesen-practice.html` (unpublished) | Publish after review |
| Vocabulary | German numbers 1–100 | days, months, family, colours, jobs (with Hindi) | Informational | IN | none | New vocab pages (later) |
| Pronunciation | German alphabet pronunciation | umlaut pronunciation, ß | Informational | IN + global | free A1·1 chapter | Title updated |
| Ausbildung | German for Ausbildung | Ausbildung nursing German level, B1 for Ausbildung | Informational → commercial | IN | `ausbildung.html` | Cluster later |
| Live classes | online German classes with teacher India | | Commercial | IN | `live-classes.html` | No change |

**Cannibalisation rules:** one URL per primary query. Level pages own "German X course".
`/grammar/<topic>` owns "<topic> explained". Exam guides own "Goethe X exam". The grammar
syllabus owns the list query only.

## 5. Proposed architecture (before adding pages)

```
/                          brand + "learn German for Hindi speakers"
/courses.html              comparison of all levels
/a1.html … /c2.html        level course pages (commercial)
/german-grammar.html       syllabus hub (links to /grammar/* as they ship)
/grammar/<topic>.html      NEW free explainer pages, ~20–30 to start, max depth 2
/goethe-exam.html          exam hub
/goethe/<level>-exam.html  NEW per-level exam guide (6)
/practice/…                free practice (lesen-practice first)
/ausbildung.html           career hub (+ 2–4 supporting guides later)
/chapter/*                 product; free chapter 1 indexable, rest noindex (keep)
```

Each `/grammar/<topic>` page must be **original and complete on its own**: the rule in English
with Hindi support where it helps, color-coded example sentences (the grammar colour system is
the differentiator), common Hindi-speaker mistakes, 5–10 practice items with answers, and then
links to the matching chapter and level page. It must not be a teaser of the paid chapter
(thin/doorway risk) or a copy of it (duplicate). Start with the highest-demand A1/A2 topics:
der/die/das, Akkusativ, Dativ, Akkusativ vs Dativ, Wechselpräpositionen, Perfekt (haben/sein),
Modalverben, Satzstellung (verb position), trennbare Verben, Nebensätze (weil/dass),
Adjektivdeklination, Konjunktiv II. A native-level reviewer must check every page before
publishing.

Adding `/grammar/` needs: allowlist entries, sitemap entries (the existing test enforces
sitemap == canonical), and ideally a generator so pages share one shell, as
`build-grammar-index.mjs` does.

## 6. Authority and distribution
- YouTube: short Hindi-voiced lessons per grammar page, embedded on that page and linking back. This is where the Hindi demand already is [verified, SERP sample].
- Free downloadable resources (the per-chapter PDFs already exist) as linkable assets on resource pages.
- Outreach to Indian German teachers, Goethe-Zentrum/Max Mueller Bhavan student communities, university German departments and Ausbildung agencies, offering free resources, not link swaps.
- Community answers (Reddit r/German, Quora India) only where genuinely helpful, with disclosure.
- Never: paid links, link farms, automated comments, fake reviews or review schema.

## 7. Organic conversion journey
Search → free grammar page or free Chapter 1 → interactive practice → "continue in Chapter N"
(locked) → level page pricing → checkout. Changes, all calm and non-intrusive (per CLAUDE.md):
one contextual course recommendation at the end of each free page, a "next chapter / see the A1
roadmap" link at the end of free Chapter 1, and accurate access terms on pricing cards (#1).
No popups, countdowns or urgency.

## 8. Measurement
- **GSC** (owner: DNS TXT verification in Cloudflare, then submit `https://klarweg.in/sitemap.xml`). Track impressions, clicks, CTR, position, indexed pages and top landing pages. Compare titles changed in this branch over 4–6 weeks after deploy.
- **Revenue attribution without third-party analytics:** record a first-party landing-source tag at checkout in the Access Worker (orders table). This needs a privacy-policy review. GA4 would contradict `privacy.html` §7 as written, so it is the owner's decision.
- Baseline before deploy: GSC has no history yet, so verify now to get a pre-change baseline.

## 9. Roadmap
**30 days:** owner fixes access-term copy (#1). Verify GSC and submit sitemap. Merge this
branch. Measure CWV. Add free-chapter → roadmap link. Make share images. Review
`lesen-practice.html` for publishing. Write and review the first 4 `/grammar/` pages
(der/die/das, Akkusativ, Dativ, Akkusativ vs Dativ).

**90 days:** 12–15 grammar pages. 6 Goethe exam guides. Grammar hub links to them. First YouTube
lessons embedded. Re-titles based on GSC queries. Course structured data if pricing copy is
accurate. Accurate sitemap `lastmod`.

**12 months:** 30–40 grammar pages covering A1–B2 essentials. Vocabulary reference set.
Ausbildung cluster. Free practice section. Outreach programme. Quarterly content refresh driven
by GSC (pages at positions 8–20 first).

## 10. What this branch changed and how it was verified
| Commit | Change | Verification |
|---|---|---|
| 03cf5d6 | Query-led titles/descriptions: home, 6 levels, courses, goethe-exam, ausbildung, 6 free chapters (og/twitter mirrored) | `seo-static.test.mjs` uniqueness/length. Claims limited to what pages already say |
| d5b85b3 | "German Grammar" footer link on every site page (not refund-policy, see 6599158) | Rendered at 390px. Footer wraps cleanly |
| e276936 | Contextual "See every A1 grammar topic →" link on each level roadmap | Rendered at 390px. Ink underline, no new accent colour |
| 6599158 | Generated JSON-LD (Organization, WebSite, BreadcrumbList) + guard tests + check:generated | `npm test` 648 pass / 0 fail. Generators idempotent. Origin-rollback rehearsal includes the new check. No console errors on home, a1, grammar or free chapter |

After deploy: run Google Rich Results Test on `/`, `/a1.html`, `/german-grammar.html` and
`/chapter/chapter-a1-1-alphabet.html`, use URL Inspection → "Test live URL" on the same, and watch
GSC → Enhancements → Breadcrumbs.
