# Further word-choice practice batch — 14 November 2026

Base: `2b1e0157e7783b1cbb607c72d3dbc31dcff514e8` (merged PR #334).

## Scope and editorial status

Exactly **50 new word-choice lessons**: A1 8, A2 16, B1 16, B2 10. The proposed library becomes **300 lessons plus the existing hub**, including 100 grammar, 100 word-choice, 50 communication and 50 vocabulary lessons. Combined level totals: A1 66, A2 90, B1 88, B2 56.

Each lesson has a distinct contrast, a usage explanation, a mistake/limitation note, four original German model sentences with English meanings and four contextual self-check tasks with answers and explanations. Everyday contrasts include viel/sehr, gern/gut and schon/schön. Later topics cover object patterns, reflexive changes, agreement/voting, evidence and nuanced evaluative language.

**AI-assisted editorial review only. Native German linguistic/pedagogic review remains pending; no human linguistic review is claimed.** CEFR levels indicate intended practice rather than certification. Supporting structures can be more demanding than the target vocabulary; English cues and explanations support the task.

Natural overlap is stated explicitly. For example, rechtzeitig/pünktlich can both fit some contexts; frei/kostenlos overlap for admission; ausleihen can also mean lending. The new ausleihen/verleihen tasks use reflexive borrowing versus awarding to avoid treating the verbs as universal opposites. Polysemous verbs are taught through specified combinations rather than absolute rules. Standard alternatives such as gern/gerne and verwechsle/verwechsele are noted. Answers are native disclosures, not an automated grading engine.

## Preservation and duplication

- All **eight existing source datasets** are byte-for-byte unchanged.
- All **250 existing lesson metadata heads and teaching blocks**, from hero through revision section, are byte-for-byte identical to base. Published URLs remain stable; some related links connect the new batch.
- All 300 titles, explanations and mistake notes are distinct by exact-string checks. All **1,200 model sentences and 1,200 task prompts** are distinct after case/punctuation/spacing normalization; this is also enforced by the regression suite.
- The 200 new German model sentences were compared with text on the **396 previously sitemap-listed pages**. No complete normalized sentence matches were found. This is local overlap checking, not external originality verification.
- Broad topics and short expressions naturally overlap with existing grammar, vocabulary and communication lessons. The new pages focus on specified contrasts and contextual selection; shared layout and revision instructions are retained.

## SEO, links and design

All new pages have bespoke topic/level titles and descriptions, one H1, self-canonical, matching social metadata, LearningResource and BreadcrumbList. Titles including brand fit within 70 characters; descriptions are 100–170 characters. Source `.html` references follow the repository convention; artifact validation checks clean canonical, sitemap, schema and link URLs after the build rewrite.

The existing hub lists all 300 lessons under four practice types per level. Its CollectionPage ItemList follows visible inventory order. All 50 new files have explicit sitemap and allowlist entries; sitemap grows from 396 to **446 URLs**. Resources links directly to the new viel/sehr lesson. Each new lesson links to same-level peers, a labelled related grammar foundation and that level's free Chapter 1.

The generator, templates and stylesheet are unchanged. New pages reuse navy `#0f172a` and brand green `#1fa84b`; no orange, scripts, tracking, fonts, images or dependencies are added. Existing focus styles, reduced-motion support, 44px answer targets and native keyboard disclosures remain in use.

Titles reflect topic and learner intent. No live keyword-volume/competition research, Search Console validation, ranking promise or indexing outcome is claimed. Learner usefulness and real indexing/performance data should inform subsequent expansion.

## Maintainability

The sixth manifest batch explicitly registers `word-choice-expansion-20261114.json` with its expected 50 rows and level counts. It reuses the established `word-choice` kind; there is no parallel generator or manually maintained page template. Tests cover 300 outputs, distinct content, original batches, publication wiring, metadata/schema, valid internal links and hub anchors. The browser audit discovers every lesson from the manifest and includes four new representatives for screenshots.

## Validation

| Check | Result |
| --- | --- |
| `npm test` | PASS: 806 total, 805 passed, 1 skipped, 0 failures; generated checks included |
| Independent `npm run check:generated` | PASS: no drift, 300 lessons plus hub |
| `npm run test:exam` | PASS: 632 total, 628 passed, 4 skipped, 0 failures |
| Public artifact build | PASS: 922 explicitly allowed files |
| Artifact SEO/canonical/schema/link audit | PASS: 446 sitemap URLs, 301 practice pages, 602 JSON-LD blocks, 6,933 local links/assets checked |
| Clean URL verification | PASS: no remaining rewrites required |
| Public artifact leak check | PASS: 922 files, no prohibited private content; source files excluded |
| Chromium responsive/interaction audit | PASS: all 301 practice pages at 320/390/768/1440px, 1,204 combinations; no overflow, page errors, failed requests or external requests; keyboard disclosures and native answers without page JavaScript passed |
| Resources discovery | PASS: six cards at 390/1440px, no overflow, no page errors, new word-choice link opens its lesson |
| Visual review | A1 viel/sehr and A2 antworten/beantworten at 390px; B1 rechtzeitig/pünktlich and B2 fördern/fordern at 1440px; hub and resources at both widths inspected |
| Preservation and duplication | PASS: eight old datasets and 250 lesson teaching blocks/metadata heads preserved; 1,200 models/prompts normalized-distinct; no new complete model matches against 396 prior sitemap pages |
| Scope and whitespace | Exactly 50 new lesson HTML files; protected paths, generator, templates and CSS unchanged; `git diff --cached --check` passed |

Skips are reported separately. Browser checks use Chromium, not cross-browser or human accessibility certification. Remote CI results will be recorded on the PR.

## Protected scope and publication gate

Payments, auth, checkout/enrolment, Access/Tutor Workers, paid chapter/audio content and payloads, exam content/engine, domains and deployment workflows are unchanged. Public additions are exactly the 50 lesson HTML files. Source datasets, manifest, scripts, tests and this audit remain outside the public artifact. Existing private-content boundary and leak guards remain intact.

This creation task does not merge, deploy or enable auto-merge. Publication requires passing checks and a separate owner instruction approving this batch.

## Maintenance commands

Edit the new JSON source and regenerate; do not hand-edit generated HTML. Keep prompts contextual, name the intended meaning, and document natural alternatives. Add new dataset paths, allowlist entries and sitemap URLs explicitly.

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

These commands build/test locally without publishing. Browser checks require Node 22+ and Chrome/Chromium; use `CHROME_PATH` if needed and `PRACTICE_SCREENSHOTS=/path/out` for captures.

## New page inventory

| Level | Contrast | File |
| --- | --- | --- |
| A1 | Viel or Sehr? German A1 Word-Choice Exercises | `practice/a1-viel-sehr-word-choice-exercises.html` |
| A1 | Gern or Gut? German A1 Preference and Ability Practice | `practice/a1-gern-gut-word-choice-exercises.html` |
| A1 | Auch or Wieder? German A1 Meaning Exercises | `practice/a1-auch-wieder-word-choice-exercises.html` |
| A1 | Hier or Dort? German A1 Place-Word Practice | `practice/a1-hier-dort-word-choice-exercises.html` |
| A1 | Heute or Morgen? German A1 Day-Word Exercises | `practice/a1-heute-morgen-word-choice-exercises.html` |
| A1 | Groß or Lang? German A1 Size and Length Practice | `practice/a1-gross-lang-word-choice-exercises.html` |
| A1 | Schon or Schön? German A1 Umlaut Word Practice | `practice/a1-schon-schoen-word-choice-exercises.html` |
| A1 | Alle or Alles? German A1 Word-Choice Practice | `practice/a1-alle-alles-word-choice-exercises.html` |
| A2 | Wissen or Glauben? German A2 Knowledge and Belief Practice | `practice/a2-wissen-glauben-word-choice-exercises.html` |
| A2 | Kennen or Erkennen? German A2 Recognition Exercises | `practice/a2-kennen-erkennen-word-choice-exercises.html` |
| A2 | Sagen or Erzählen? German A2 Speaking Verb Practice | `practice/a2-sagen-erzaehlen-word-choice-exercises.html` |
| A2 | Sprechen or Besprechen? German A2 Verb-Pattern Practice | `practice/a2-sprechen-besprechen-word-choice-exercises.html` |
| A2 | Anrufen or Zurückrufen? German A2 Phone Verb Practice | `practice/a2-anrufen-zurueckrufen-word-choice-exercises.html` |
| A2 | Fragen or Bitten? German A2 Request Word Choice | `practice/a2-fragen-bitten-word-choice-exercises.html` |
| A2 | Antworten or Beantworten? German A2 Object Practice | `practice/a2-antworten-beantworten-word-choice-exercises.html` |
| A2 | Erklären or Beschreiben? German A2 Meaning Exercises | `practice/a2-erklaeren-beschreiben-word-choice-exercises.html` |
| A2 | Anfangen or Aufhören? German A2 Activity Verb Practice | `practice/a2-anfangen-aufhoeren-word-choice-exercises.html` |
| A2 | Stehen or Aufstehen? German A2 Posture and Action Practice | `practice/a2-stehen-aufstehen-word-choice-exercises.html` |
| A2 | Aufwachen or Aufwecken? German A2 Wake-Up Verb Practice | `practice/a2-aufwachen-aufwecken-word-choice-exercises.html` |
| A2 | Lernen or Unterrichten? German A2 Learning and Teaching | `practice/a2-lernen-unterrichten-word-choice-exercises.html` |
| A2 | Bestellen or Reservieren? German A2 Service Word Choice | `practice/a2-bestellen-reservieren-word-choice-exercises.html` |
| A2 | Sparen or Ausgeben? German A2 Money Verb Practice | `practice/a2-sparen-ausgeben-word-choice-exercises.html` |
| A2 | Verlieren or Vergessen? German A2 Lost and Forgotten | `practice/a2-verlieren-vergessen-word-choice-exercises.html` |
| A2 | Dürfen or Müssen? German A2 Permission and Necessity | `practice/a2-duerfen-muessen-word-choice-exercises.html` |
| B1 | Behalten or Erhalten? German B1 Word-Choice Practice | `practice/b1-behalten-erhalten-word-choice-exercises.html` |
| B1 | Erfahren or Erleben? German B1 Experience Word Choice | `practice/b1-erfahren-erleben-word-choice-exercises.html` |
| B1 | Erfinden or Entdecken? German B1 Creation and Discovery | `practice/b1-erfinden-entdecken-word-choice-exercises.html` |
| B1 | Vergleichen or Verwechseln? German B1 Verb Practice | `practice/b1-vergleichen-verwechseln-word-choice-exercises.html` |
| B1 | Ersetzen or Ergänzen? German B1 Change Word Choice | `practice/b1-ersetzen-ergaenzen-word-choice-exercises.html` |
| B1 | Ändern or Sich Ändern? German B1 Verb-Pattern Practice | `practice/b1-aendern-sich-aendern-word-choice-exercises.html` |
| B1 | Beantragen or Beauftragen? German B1 Formal Verb Practice | `practice/b1-beantragen-beauftragen-word-choice-exercises.html` |
| B1 | Annehmen or Aufnehmen? German B1 Prefix Verb Practice | `practice/b1-annehmen-aufnehmen-word-choice-exercises.html` |
| B1 | Mitteilen or Teilen? German B1 Sharing Word Practice | `practice/b1-mitteilen-teilen-word-choice-exercises.html` |
| B1 | Verlangen or Verlängern? German B1 Spelling and Meaning | `practice/b1-verlangen-verlaengern-word-choice-exercises.html` |
| B1 | Sich Kümmern or Sich Sorgen? German B1 Meaning Practice | `practice/b1-kuemmern-sorgen-word-choice-exercises.html` |
| B1 | Zustimmen or Abstimmen? German B1 Discussion Verbs | `practice/b1-zustimmen-abstimmen-word-choice-exercises.html` |
| B1 | Frei or Kostenlos? German B1 Meaning Exercises | `practice/b1-frei-kostenlos-word-choice-exercises.html` |
| B1 | Rechtzeitig or Pünktlich? German B1 Time Word Practice | `practice/b1-rechtzeitig-puenktlich-word-choice-exercises.html` |
| B1 | Einladen or Ausladen? German B1 Prefix Meaning Practice | `practice/b1-einladen-ausladen-word-choice-exercises.html` |
| B1 | Ausleihen or Verleihen? German B1 Word-Choice Practice | `practice/b1-ausleihen-verleihen-word-choice-exercises.html` |
| B2 | Fördern or Fordern? German B2 Umlaut Meaning Practice | `practice/b2-foerdern-fordern-word-choice-exercises.html` |
| B2 | Gewähren or Gewährleisten? German B2 Usage Exercises | `practice/b2-gewaehren-gewaehrleisten-word-choice-exercises.html` |
| B2 | Nachweisen or Hinweisen? German B2 Evidence Word Choice | `practice/b2-nachweisen-hinweisen-word-choice-exercises.html` |
| B2 | Beurteilen or Verurteilen? German B2 Judgment Practice | `practice/b2-beurteilen-verurteilen-word-choice-exercises.html` |
| B2 | Wahrnehmen or Wahrmachen? German B2 Prefix Verb Practice | `practice/b2-wahrnehmen-wahrmachen-word-choice-exercises.html` |
| B2 | Angemessen or Anmaßend? German B2 Adjective Practice | `practice/b2-angemessen-anmassend-word-choice-exercises.html` |
| B2 | Wesentlich or Hauptsächlich? German B2 Meaning Practice | `practice/b2-wesentlich-hauptsaechlich-word-choice-exercises.html` |
| B2 | Ökonomisch or Ökologisch? German B2 Word Choice | `practice/b2-oekonomisch-oekologisch-word-choice-exercises.html` |
| B2 | Grundsätzlich or Gründlich? German B2 Adverb Practice | `practice/b2-grundsaetzlich-gruendlich-word-choice-exercises.html` |
| B2 | Vermutlich or Vermeintlich? German B2 Nuance Exercises | `practice/b2-vermutlich-vermeintlich-word-choice-exercises.html` |
