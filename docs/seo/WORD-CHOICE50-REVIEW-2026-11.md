# Word-choice practice batch — 14 November 2026

Base: `c086e6bcad2230b875c98bcafd08af14059bd234` (merged PR #331).

## Scope and review status

Adds **50 additional German word-choice practice pages** to the existing 100 grammar lessons. New pages: A1 8, A2 16, B1 20, B2 6. Combined totals: A1 32, A2 44, B1 46, B2 28; **150 lessons plus the existing hub**.

This batch addresses lexical, spelling and usage decisions rather than manufacturing more variants of the existing grammar pages. Each page gives an English explanation of the difference, a relevant mistake/limitation, four German worked examples with translations, and four self-check questions with answers and explanations. Topics include `kennen/wissen`, `bringen/holen`, `erst/nur`, memory verbs, adjective false friends and formal-writing nuances.

Content received AI-assisted review. **Native German linguistic/pedagogic review remains pending; no human linguistic review is claimed.** CEFR labels describe intended practice level, not an official assessment. The batch is prepared for owner review; it is not merged or deployed by this creation task.

## Pedagogy and duplication audit

- The original five lesson source datasets are unchanged. A direct comparison against the base commit confirmed that the hero, rule, model examples, question/answer/explanation and revision sections of all **100 existing lessons remain byte-for-byte identical**. Their URLs and metadata remain stable; some peer links change to connect the new batch.
- Across all 150 lessons, all titles, explanations/rules and mistake notes are distinct. All **600 model sentences and 600 prompts** are distinct by exact-string checks. This does not prove external originality or semantic uniqueness.
- An exact-string comparison of the 200 new model sentences against the 246 previously sitemap-listed pages found one conventional shared sentence: `Die Vase steht auf dem Regal.` It already appears on the existing position/placement guide and is retained as a clear standard example. No site-wide originality or plagiarism-check claim is made.
- Context cues distinguish intended meanings, tense, actor roles and register. Examples explicitly note valid alternatives: `ich wechsle/wechsele`, `zieh/ziehe`, `stell/stelle`, `leg/lege`, `setz/setze`, `merk/merke`, and `kennenlernen/kennen lernen`.
- Overlap is not hidden. Both `wohnen` and `leben` can describe living in a city; `Reise/Fahrt` depend on focus, not a long/short rule; `erst/nur` and `schon/noch` can change meaning in the same sentence. The answers explain the targeted cue rather than declaring every alternative ungrammatical.
- B2 pages distinguish a formal learning contrast from every conversational use. `Scheinbar` is acknowledged as overlapping with `anscheinend` in everyday use. `Effektiv/effizient` are not treated as opposites; `vermeiden/verhindern` and `überzeugen/überreden` have overlapping contexts and focus differences.
- The new lessons use headings suited to their purpose: “Understand the difference” and “Practice: choose the right word”. The original grammar headings remain unchanged. Related-guide labels name the grammar reference; they do not pretend that the reference is a dedicated lexical article.

## SEO, design and internal links

The hub now describes grammar **and word choice** and lists all 150 lessons, grouped by level, with a matching ItemList. Each new page has a bespoke 100–170 character description, one H1, self-canonical, matching OG/Twitter metadata, LearningResource and BreadcrumbList. German model/answer spans retain `lang="de"`; the surrounding explanation language is English.

All 50 new HTML paths are explicit sitemap and allowlist entries. The sitemap increases from **246 to 296 URLs**. Resources links directly to a new word-choice lesson as well as the expanded hub. Each lesson links to same-level peers, an accurately labelled related grammar reference and the same level's free Chapter 1.

The existing shared navy `#0f172a` / brand green `#1fa84b` design is reused. No orange styles, new images, external fonts, analytics, runtime scripts or dependencies are added. Native details/summary answers work without page scripts. Shared CSS retains wrapping, reduced-motion support, focus indicators, 44px disclosure targets and 5.75:1 navy-on-green CTA contrast.

Source `.html` URLs follow repository conventions. The public-artifact audit checks the rewritten clean URLs in canonicals, OG, structured data, sitemap and links. No keyword-volume, traffic, ranking, rich-result or Google-indexing outcome is claimed. Assess usefulness and indexing before further large batches.

## Generation and regression checks

`docs/seo/practice-batches.json` registers a third explicit 50-lesson source: `docs/seo/word-choice50-20261114.json`. The generator accepts a validated `word-choice` kind and supplies the appropriate headings/intro while preserving the grammar defaults. It reuses the existing template, stylesheet, URL scheme, escaping and schema generation.

Regression checks enforce 150 lesson outputs, 50 new word-choice records, the new level counts, metadata/content uniqueness, appropriate headings, safe source paths, publication wiring, peer links, source exclusion and complete hub/schema inventory. The existing CI artifact/browser step automatically audits the expanded library.

## Validation

| Check | Result |
| --- | --- |
| `npm test` | 802 tests: 801 passed, 0 failed, 1 private-roster skip; generated-file checks passed. The worktree-stability guard passed on the final frozen-worktree run. |
| `npm run check:generated` | Passed independently; all 151 practice HTML outputs current. |
| `npm run test:exam` | 632 tests: 628 passed, 0 failed, 4 existing optional encoder skips. |
| Public artifact build and independent leak check | Passed: 772 public files, no prohibited paths or private content detected. |
| Artifact SEO | Passed: 296 distinct sitemap URLs with matching canonicals, 151 practice pages, 302 JSON-LD blocks and 3,467 local link/asset references. Source datasets/manifest/templates excluded. |
| Clean URLs | Passed; no further rewrite needed. |
| Chromium browser audit | 604/604 combinations passed: 151 pages at 320, 390, 768 and 1440px. No horizontal overflow, page errors, failed HTTP responses or external requests. CSS, H1/IDs/canonical, CTA contrast, 44px answer targets and all keyboard disclosures checked; native answers work with page scripts disabled. |
| Visual spot checks | New A1–B2 lessons and the broadened hub inspected on mobile/desktop screenshots; navy/green styling, wrapping and readability checked. |
| Preservation | All 100 existing teaching-content blocks match the base commit exactly; all five previous datasets and protected production paths unchanged. |
| `git diff --check` | Passed. |

Skipped tests remain reported rather than counted as passes. Browser results cover Chromium at the stated widths; they are not cross-browser or human accessibility certification. Remote CI status is recorded on the PR after push.

## Protected areas and release gate

No changes to payments, authentication, checkout/enrolment production code, Access/Tutor Workers, chapter source/payloads, audio, exam content or the exam engine. New public paths consist only of the 50 lesson HTML files. Source JSON, manifest, templates, generator and audit notes remain outside the public artifact; path and content leak checks remain active.

No merge, deployment or auto-merge is performed for this creation task. Publication requires passing checks and a separate owner instruction approving this batch.

## Maintenance

Edit the source JSON and run `npm run generate:practice`; do not hand-edit generated HTML. The `kind` field is `word-choice` for this batch. Grammar lessons can omit it or use `grammar`; unsupported kinds are rejected. Explicitly update the sitemap/allowlist when changing inventory and preserve existing published URLs.

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

These commands build/test locally and do not publish. Browser checks require Node 22+ and Chrome/Chromium; `CHROME_PATH` can override discovery, and `PRACTICE_SCREENSHOTS=/path/out` enables representative captures.

## New page inventory

| Level | Topic | File |
| --- | --- | --- |
| A1 | Lernen or Studieren? German A1 Word-Choice Practice | `practice/a1-lernen-studieren-word-choice-exercises.html` |
| A1 | Wohnen or Leben? German A1 Meaning Exercises | `practice/a1-wohnen-leben-word-choice-exercises.html` |
| A1 | Gehen or Fahren? German A1 Travel Verb Practice | `practice/a1-gehen-fahren-word-choice-exercises.html` |
| A1 | Kommen or Gehen? German A1 Direction Exercises | `practice/a1-kommen-gehen-word-choice-exercises.html` |
| A1 | Kaufen or Verkaufen? German A1 Shopping Practice | `practice/a1-kaufen-verkaufen-word-choice-exercises.html` |
| A1 | Brauchen or Benutzen? German A1 Usage Exercises | `practice/a1-brauchen-benutzen-word-choice-exercises.html` |
| A1 | Fragen or Antworten? German A1 Conversation Practice | `practice/a1-fragen-antworten-word-choice-exercises.html` |
| A1 | Kosten or Bezahlen? German A1 Price Expressions | `practice/a1-kosten-bezahlen-word-choice-exercises.html` |
| A2 | Kennen or Wissen? German A2 Word-Choice Exercises | `practice/a2-kennen-wissen-word-choice-exercises.html` |
| A2 | Bringen or Holen? German A2 Movement Verb Practice | `practice/a2-bringen-holen-word-choice-exercises.html` |
| A2 | Suchen or Finden? German A2 Word-Choice Practice | `practice/a2-suchen-finden-word-choice-exercises.html` |
| A2 | Hören or Zuhören? German A2 Listening Verb Exercises | `practice/a2-hoeren-zuhoeren-word-choice-exercises.html` |
| A2 | Sehen or Aussehen? German A2 Meaning Practice | `practice/a2-sehen-aussehen-word-choice-exercises.html` |
| A2 | Anziehen or Tragen? German A2 Clothing Verb Practice | `practice/a2-anziehen-tragen-word-choice-exercises.html` |
| A2 | Treffen or Kennenlernen? German A2 Word Choice | `practice/a2-treffen-kennenlernen-word-choice-exercises.html` |
| A2 | Mieten or Vermieten? German A2 Housing Word Choice | `practice/a2-mieten-vermieten-word-choice-exercises.html` |
| A2 | Leihen or Schenken? German A2 Giving and Borrowing | `practice/a2-leihen-schenken-word-choice-exercises.html` |
| A2 | Zahlen or Zählen? German A2 Umlaut Word Practice | `practice/a2-zahlen-zaehlen-word-choice-exercises.html` |
| A2 | Reise or Fahrt? German A2 Travel Noun Practice | `practice/a2-reise-fahrt-word-choice-exercises.html` |
| A2 | Erst or Nur? German A2 Time and Quantity Practice | `practice/a2-erst-nur-word-choice-exercises.html` |
| A2 | Schon or Noch? German A2 Time-Meaning Exercises | `practice/a2-schon-noch-word-choice-exercises.html` |
| A2 | Seit or Seid? German A2 Spelling Practice | `practice/a2-seit-seid-word-choice-exercises.html` |
| A2 | Das or Dass? German A2 Spelling Exercises | `practice/a2-das-dass-word-choice-exercises.html` |
| A2 | Wenn or Wann? German A2 Question and Time Practice | `practice/a2-wenn-wann-word-choice-exercises.html` |
| B1 | Ob or Wenn? German B1 Clause-Choice Practice | `practice/b1-ob-wenn-word-choice-exercises.html` |
| B1 | Obwohl or Trotz? German B1 Concession Practice | `practice/b1-obwohl-trotz-word-choice-exercises.html` |
| B1 | Wechseln or Umsteigen? German B1 Travel Word Choice | `practice/b1-wechseln-umsteigen-word-choice-exercises.html` |
| B1 | Umziehen or Ausziehen? German B1 Meaning Practice | `practice/b1-umziehen-ausziehen-word-choice-exercises.html` |
| B1 | Stellen or Stehen? German B1 Position Exercises | `practice/b1-stellen-stehen-word-choice-exercises.html` |
| B1 | Legen or Liegen? German B1 Placement Practice | `practice/b1-legen-liegen-word-choice-exercises.html` |
| B1 | Setzen or Sitzen? German B1 Sitting Verb Exercises | `practice/b1-setzen-sitzen-word-choice-exercises.html` |
| B1 | Hing or Hängte? German B1 Hängen Meaning Practice | `practice/b1-haengen-hing-gehaengt-word-choice-exercises.html` |
| B1 | Sich Erinnern or Sich Merken? German B1 Word Choice | `practice/b1-erinnern-merken-word-choice-exercises.html` |
| B1 | Hoffen or Erwarten? German B1 Expectation Practice | `practice/b1-hoffen-erwarten-word-choice-exercises.html` |
| B1 | Gewinnen or Verdienen? German B1 Money and Success | `practice/b1-gewinnen-verdienen-word-choice-exercises.html` |
| B1 | Bekommen or Werden? German B1 False-Friend Practice | `practice/b1-bekommen-werden-word-choice-exercises.html` |
| B1 | Passieren or Bestehen? German B1 False-Friend Exercises | `practice/b1-passieren-bestehen-word-choice-exercises.html` |
| B1 | Teilnehmen or Besuchen? German B1 Attendance Practice | `practice/b1-teilnehmen-besuchen-word-choice-exercises.html` |
| B1 | Bewerben or Anmelden? German B1 Application Word Choice | `practice/b1-bewerben-anmelden-word-choice-exercises.html` |
| B1 | Sich Freuen Auf or Über? German B1 Word-Choice Practice | `practice/b1-freuen-auf-ueber-word-choice-exercises.html` |
| B1 | Interessiert or Interessant? German B1 Adjective Practice | `practice/b1-interessiert-interessant-word-choice-exercises.html` |
| B1 | Gelangweilt or Langweilig? German B1 Feeling Words | `practice/b1-gelangweilt-langweilig-word-choice-exercises.html` |
| B1 | Aktuell or Tatsächlich? German B1 False Friends | `practice/b1-aktuell-tatsaechlich-word-choice-exercises.html` |
| B1 | Sensibel or Vernünftig? German B1 False-Friend Practice | `practice/b1-sensibel-vernuenftig-word-choice-exercises.html` |
| B2 | Anscheinend or Scheinbar? German B2 Nuance Practice | `practice/b2-anscheinend-scheinbar-word-choice-exercises.html` |
| B2 | Schließlich or Endlich? German B2 Adverb Practice | `practice/b2-schliesslich-endlich-word-choice-exercises.html` |
| B2 | Offenbar or Öffentlich? German B2 Meaning Exercises | `practice/b2-offenbar-oeffentlich-word-choice-exercises.html` |
| B2 | Effektiv or Effizient? German B2 Word-Choice Practice | `practice/b2-effektiv-effizient-word-choice-exercises.html` |
| B2 | Vermeiden or Verhindern? German B2 Nuance Exercises | `practice/b2-vermeiden-verhindern-word-choice-exercises.html` |
| B2 | Überzeugen or Überreden? German B2 Persuasion Practice | `practice/b2-ueberzeugen-ueberreden-word-choice-exercises.html` |
