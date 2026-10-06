# GOETHE-B1-ADULT-REFERENCE STANDARD (Klarweg Master Standard)

> **Status:** specification only. Frozen draft v0.1, 2026-10-04. Nothing here is implemented, and **no exam questions, prompts, answer keys or audio scripts are contained or authorised.**
> **Authority:** once the owner approves it, this document becomes the authoritative specification for the Klarweg B1 Mock and Sets 01–10. It **supersedes** the five earlier analysis documents wherever they conflict (see §1.3). Those documents are **not modified**.
> **What this is not:** Klarweg is **not** an official Goethe-Institut examination. "Equivalent in design target" ≠ "statistically proven equivalent to live Goethe examinations".

### Evidence labels
| Label | Meaning |
|---|---|
| **[OFFICIAL]** | Stated in a current official Goethe-Institut source (source ID + page/section given) |
| **[REFERENCE BOOK]** | Observed in the 15-test Hueber book (`GOETHE-B1-REFERENCE-ANALYSIS.md`; `p.` = PDF page) |
| **[INFERENCE]** | Reasoned from official and/or book evidence; the reasoning is shown |
| **[KLARWEG DESIGN]** | A Klarweg product decision proposed by this standard |
| **[UNKNOWN]** | Not determinable from public official sources |
| **[OWNER DECISION]** | Needs an explicit owner choice (IDs OD-xx, §14) |

---

## 1. Scope

1.1 This standard covers **Goethe-Zertifikat B1, adult version (Erwachsene)**, all four modules (Lesen, Hören, Schreiben, Sprechen), as reproduced in a Klarweg **simulation** for Hindi-speaking adult learners.

1.2 It governs the specification, authoring constraints, scoring model, digital behaviour, difficulty targets, set balancing, Mock validation and QA gates. It does **not** authorise implementation, authoring or audio production.

1.3 **Supersession of earlier analysis (explicit, nothing overwritten).** Earlier claims corrected by official evidence:

| Earlier document · claim | Corrected by |
|---|---|
| MASTER-BLUEPRINT §5 / DIGITAL-SPEC §9: Sprechen Teil 2 topics fixed per candidate (A/B) | §6.4: **each candidate chooses 1 of 2 topics** [OFFICIAL S1 §1.2; S3 p. 25, 27–28] |
| MASTER-BLUEPRINT §1: Sprechen "3 / 3 / 2 min" | §5.4: intro ≈ 1 min (not rated); Teil 1 ≈ 2–3; Teil 2 ≈ 3–4 per candidate; Teil 3 ≈ 1–2 per candidate [OFFICIAL S1 §3] |
| DIGITAL-SPEC §3: Hören "5 min transfer" carried into digital | §9: **no answer transfer in Goethe digital format** [OFFICIAL S1 Anhang 1]; a Klarweg end-review window is OD-03 |
| DIGITAL-SPEC D1 (breaks undecided) | §5.2: official paper rule is **≥ 15 min break between written modules** [OFFICIAL S1 §2] |
| MASTER-BLUEPRINT §4 / BENCHMARK §4: Schreiben criteria "[E]" | §8.2: official criteria and point values now specified [OFFICIAL S3 p. 42–43] |
| MASTER-BLUEPRINT §5: Sprechen criteria "[E]" | §8.3 [OFFICIAL S3 p. 46–47; S1 §5] |
| MASTER-BLUEPRINT §2.1: L1 MSL target 11–13 (book) | §10: official adult L1 MSL ≈ 15–17; Klarweg target widened (Layer C) |
| MASTER-BLUEPRINT §2.3: L3 ads up to 540 w allowed | §10: official ≈ 325 w; book sets of > 420 w are **out of target** |
| MASTER-BLUEPRINT §4: A1 output "E-Mail or persönliche Nachricht"; p. 3 of the book allows "Notiz/Brief" for A3 | §6.3: official adult sets use **E-Mail** for A1 and A3 [OFFICIAL S3 p. 23–24; S4 p. 24] |
| MASTER-BLUEPRINT §5 SP1: open "…" point optional | §6.4: the open "…" point is **standard** in both official adult sets [OFFICIAL S3 p. 26; S4 p. 26] |
| BENCHMARK §3.1: speech rate "[E]" | §10 Layer B: measured from official audio |
| BENCHMARK / COMPARISON: book T12 "brochure" source flagged as outlier | Official adult Modellsatz L2 text B is "aus einer Schweizer Broschüre" [OFFICIAL S3 p. 11], so a brochure is a valid source |

---

## 2. Official source register (accessed 2026-10-04)

All files were downloaded to session scratch only (not to the repo). SHA-256 values are recorded for traceability.

| ID | Title (as published) | URL | Version / date | Status | SHA-256 (prefix) |
|---|---|---|---|---|---|
| **S1** | *Durchführungsbestimmungen zur Prüfung GOETHE-ZERTIFIKAT B1 für Erwachsene und Jugendliche* (DE/EN), 17 pp. | https://www.goethe.de/pro/relaunch/prf/de/Durchfuehrungsbestimmungen_B1.pdf (identical file at `/prf/en/…`) | "Stand: 1. September 2025"; in force for exams after 1 Sep 2025 (§8) | **Current** | `18b8338b19633df0` |
| S1-old | Same, DE/FR edition | https://www.goethe.de/resources/files/pdf325/durchfuehrungsbestimmungen_b1-1.pdf | 1 Sep 2023 (per search index; not downloaded) | **Superseded** by S1 | – |
| **S2** | *Die Prüfungen des Goethe-Instituts – Prüfungsordnung*, 21 pp. | https://www.goethe.de/pro/relaunch/prf/de/Pruefungsordnung.pdf | "Stand: 1. September 2025" | **Current** | `2029144f034aeaea` |
| **S3** | *Zertifikat B1 – Modellsatz Erwachsene* (Kandidatenblätter + Prüferblätter), 52 pp. | https://www.goethe.de/pro/relaunch/prf/materialien/B1/b1_modellsatz_erwachsene.pdf | 2nd rev. ed. Jan 2015 (`Vs_11_070115`), file updated 2025-09-04 | **Current** (S2 §1.4: latest published version is valid) | `9eed7caad7c61a8a` |
| S3-old | Older copy of the Modellsatz | https://www.goethe.de/resources/files/pdf124/b1_modellsatz_erwachsene_11_web311111811111111.pdf | – | Duplicate/older location; not used | – |
| **S4** | *Goethe-Zertifikat B1 – Übungssatz Erwachsene*, 49 pp. | https://www.goethe.de/pro/relaunch/prf/materialien/B1/B1_Uebungssatz_Erwachsene.pdf | "ÜS_01 Oktober 2017", file updated 2025-09-04 | **Current** | `db5644128ddf3c5d` |
| S5 | *Übungssatz Jugendliche*, 49 pp. | https://www.goethe.de/pro/relaunch/prf/materialien/B1/B1_Uebungssatz_Jugendliche.pdf | "ÜS j_02 Januar 2018" | Current (youth; comparison only) | `850edc8268223e70` |
| S6 | *Modellsatz Jugendliche*, 52 pp. | https://www.goethe.de/pro/relaunch/prf/materialien/B1/b1_modellsatz_jugend.pdf | `Vs_04_070115`, file updated 2025-09-04 | Current (youth; comparison only) | – |
| **S7** | Official accessible online training *Goethe-Zertifikat B1 Modellsatz* (Lesen, Hören, Schreiben, Sprechen, Hilfe, Durchführungsbestimmungen) | https://bfu.goethe.de/b1_mod/ (`lesen.php`, `hoeren.php`, `schreiben.php`, `sprechen.php`, `hilfe.php`, `bedingungen.php`) | © 2022/2023; "Zertifiziert als sehr gut zugänglich" | Current (practice tool, **not** the live exam platform) | – |
| **S8** | *Ergänzungen zu den Durchführungsbestimmungen: Prüfungsteilnehmende mit spezifischem Bedarf* (published on S7 `bedingungen.php`) | https://bfu.goethe.de/b1_mod/bedingungen.php | "Stand: 1. September 2025" | **Current** | – |
| **S9** | Official adult Modellsatz Hören audio, one file per text/part (single play): `audio0.mp4` (example) … `audio8.mp4` (Teil 4) | https://bfu.goethe.de/medien/b1_m/audio0.mp4 … `audio8.mp4` | Measured 2026-10-04 (durations §10) | Current | – |
| S10 | Übungsmaterialien pages (Modellsatz and Übungssatz audio as MP4, speaking video) | e.g. https://www.goethe.de/ins/de/de/prf/prf/gzb1/ueb.html | – | **HTTP 403 to automated access.** Facts reported only via search-index snippets: Modellsatz Hören 37:21 min / MP4 36 MB; Übungssatz Hören 39:13 min / MP4 38 MB; Sprechen video 12:55 min. **[UNVERIFIED]**: re-check manually in a browser. | – |

**Publicly unavailable or not inspected [UNKNOWN]:**
- *Materialien zur Prüfung Goethe-Zertifikat B1 – Prüfungsziele, Testbeschreibung* (ISBN 978-3-19-031868-1, referenced in S4 p. 2; a commercial publication, not inspected).
- Live exam forms and their item statistics.
- Rater-training material.
- The specification of the live digital test platform UI.
- The full-length official Hören timeline with pauses (S10 blocked).
- The official speaking sample video (S10, not inspected).

---

## 3. Adult-vs-youth decision

### 3.1 Evidence
| Aspect | Adult (Erwachsene) | Youth (Jugendliche) | Evidence |
|---|---|---|---|
| Regulations | One set of Durchführungsbestimmungen covers **both** | same | [OFFICIAL] S1 p. 2 title, §1.1 |
| Recommended age | **from 16** | from 12 | [OFFICIAL] S2 §3.1; S3 p. 5 |
| Structure, items, times, scoring | Identical overview table | Identical | [OFFICIAL] S3 p. 6 vs S5/S6 p. 6; S1 §§1–6 |
| Answer and rating sheets | Same forms with an "Erw./Jug." checkbox | same | [OFFICIAL] S3 p. 30, 43, 47 |
| Candidate address | **Sie** ("Lesen Sie…", "Sie hören…", "Stellen Sie Ihr Thema vor") | **du** ("Lies…", "Du hörst…", "Stell dein Thema vor") | [OFFICIAL] S3 p. 7–28 vs S5 p. 7–28 |
| Contexts | German course, workplace (Bewerbungsgespräch), Berufsbildungszentrum, fitness studio, flat-share for students, motorway speed limit, family/work balance | School, school website, class trip, holiday camps, school sport | [OFFICIAL] S3 p. 8–28; S4 p. 8–28; S5 p. 26–36; S6 p. 12, 26 |
| Listening density | Transcript words per part ≈ 570 / 450–480 / 515–545 / 850–900 | ≈ 570 / 435–445 / 515–530 / 860–870 | [OFFICIAL] S3 p. 34–37; S4 p. 35–38; S5 p. 35–38; S6 p. 34–37 (word counts by this analysis) |
| Age relevance | – | Appeals on grounds of "nicht altersgerechter Themen" are excluded when a candidate takes the version outside the recommended age | [OFFICIAL] S2 §3.2 |

### 3.2 How the reference book relates
- [REFERENCE BOOK] It uses **adult-style "Sie" instructions** throughout but **youth-skewed contexts** (school, class trips, pocket money) plus Greek-edition artefacts (p. 66, 72, 94, 113, 116).
- [INFERENCE] The book is a hybrid. Its **format** matches the official materials, but its **topic profile** is not a valid adult benchmark.

### 3.3 Decision
**[KLARWEG DESIGN] The primary benchmark is the OFFICIAL ADULT version (S3, S4).** The youth materials (S5, S6) are used only to confirm the structural identity. The reference book remains a secondary benchmark for **format variation and distractor craft** (§10 Layer A), never for topic selection. This fits the Klarweg audience (Hindi-speaking adults aged 16–40, OS l. 42) and the official adult age floor of 16.

---

## 4. Exam structure (official adult) [OFFICIAL S3 p. 6 unless stated]

| Module | Part | Official exam objective (Prüfungsziel) | Task type | Items | Points |
|---|---|---|---|---|---|
| **Lesen** (65 min) | 1 | Korrespondenz lesen | Richtig/Falsch | 6 | 1 per item |
| | 2 | Information und Argumentation verstehen | Multiple choice (3 options) | 6 | 1 |
| | 3 | Zur Orientierung lesen | Matching (a–j or 0) | 7 | 1 |
| | 4 | Information und Argumentation verstehen | Ja/Nein | 7 | 1 |
| | 5 | Schriftliche Anweisung verstehen | Multiple choice (3 options) | 4 | 1 |
| **Hören** (≈ 40 min) | 1 | Ankündigungen, Durchsagen und Anweisungen verstehen | R/F + MC (3) | 10 | 1 |
| | 2 | Als Zuschauer/Zuhörer im Publikum verstehen | MC (3) | 5 | 1 |
| | 3 | Gespräche zwischen Muttersprachlern verstehen | R/F | 7 | 1 |
| | 4 | Radiosendungen und Tonaufnahmen verstehen | Matching (speaker a/b/c) | 8 | 1 |
| **Schreiben** (60 min) | 1 | Interaktion: persönliche Mitteilung zur Kontaktpflege | Free writing (beschreiben, begründen, einen Vorschlag machen) | – | 40 |
| | 2 | Produktion: persönliche Meinung zu einem Thema äußern | Free writing (beschreiben, begründen, erläutern, vergleichen, Meinung äußern …) | – | 40 |
| | 3 | Interaktion: persönliche Mitteilung zur Handlungsregulierung | Free writing (sich entschuldigen, um etwas bitten …) | – | 20 |
| **Sprechen** (≈ 15 min per pair) | 1 | Interaktion: gemeinsam etwas planen und aushandeln | Plan along 4 Leitpunkte | – | 28 |
| | 2 | Produktion: in einem Monolog ein Thema präsentieren | Presentation along 5 given slides | – | 40 |
| | 3 | Interaktion: situationsadäquat reagieren | Feedback + one question each; respond | – | 16 |
| | 1–3 | Aussprache (pronunciation) | – | – | 16 |

Point values for Schreiben and Sprechen: [OFFICIAL] S3 p. 43, 47 (rating forms).
Lesen and Hören: 30 items each → 100 Ergebnispunkte [OFFICIAL] S1 §4.1–4.2.

**Book vs official:** all items, formats and times [REFERENCE BOOK p. 3] **match** the official structure. Differences are in timing details, Sprechen mechanics and scoring procedure (§5–§9).

---

## 5. Timing

### 5.1 Written modules [OFFICIAL S1 §1.4, §2.2]
| Module | Time | Notes |
|---|---|---|
| Lesen | **65 min** | Paper: answers transferred to the answer sheet **within** the 65 min ("circa 5 Minuten innerhalb der Prüfungszeit"). Part times 10/20/10/15/10 printed as "Arbeitszeit" [OFFICIAL S3 p. 8–15]. Parts can be done in any order ("Sie können mit jeder Aufgabe beginnen", S3 p. 7). |
| Hören | **ca. 40 min** | Audio started by the supervisor. Transfer ≈ 5 min **within** exam time (S1 §2.2.2); candidate sheet: "nach dem Hörverstehen fünf Minuten Zeit" (S3 p. 17). |
| Schreiben | **60 min** | Advisory 20/25/15 per task [OFFICIAL S3 p. 24]. Any order (S3 p. 23). |
| Total | **ca. 165 min without breaks** | – |

### 5.2 Breaks [OFFICIAL S1 §2]
Recommended order Lesen → Hören → Schreiben (a centre may change it), with **at least 15 minutes' break between each written module**. When all four modules are taken on one day, the written modules normally come before Sprechen (S1 §1.4).

### 5.3 Hören internal timing
- [OFFICIAL] Teil 1: each text played **twice**; 10 s to read the example.
- [OFFICIAL] Teil 2: played **once**, 60 s to pre-read items 11–15.
- [OFFICIAL] Teil 3: played **once**, 60 s pre-read.
- [OFFICIAL] Teil 4: played **twice**, 60 s pre-read. (All from S3 p. 18–21.)
- [UNKNOWN] Pause lengths between texts and plays, and the per-text reading time in Teil 1. **[UNVERIFIED]** The full module recording lasts 37:21 (Modellsatz) and 39:13 (Übungssatz) (S10).
- **[OFFICIAL, measured]** Single-play durations (S9): see §10 Layer B.

### 5.4 Sprechen [OFFICIAL S1 §1.4, §3]
| Phase | Paper candidate sheet (S3 p. 25) | Durchführungsbestimmungen (S1 §3) |
|---|---|---|
| Preparation | 15 min, alone, notes allowed | 15 min (pair and single) |
| Introduction | – | ≈ 1 min, **not rated** (S1 §5) |
| Teil 1 | ≈ 3 min | ≈ 2–3 min |
| Teil 2 | ≈ 3 min | ≈ 3–4 min per candidate |
| Teil 3 | ≈ 2 min | ≈ 1–2 min per candidate |
| Total | 15 min for two | ≈ 15 min (pair) / **≈ 10 min (single exam)** |

[KLARWEG DESIGN] Design targets:
- Teil 1 at **3:00** (hard stop at 3:30)
- Teil 2 at **3:00** (soft at 3:00, hard stop at 4:00)
- Teil 3 at **2:00** (hard stop at 2:30)

### 5.5 Extended time [OFFICIAL S8]
Candidates with specific needs can get **25–100 % extra time** (speech impairment 25–50 %), plus other modifications. These must be requested at registration with evidence, and **content may not change**. Modifications do not appear on the certificate.

---

## 6. Task architecture (authoring contract; no content here)

### 6.1 Lesen
| Part | Official adult pattern [OFFICIAL] | Klarweg rule [KLARWEG DESIGN] |
|---|---|---|
| 1 | Personal blog or e-mail (S3 p. 8: blog; S4 p. 8: e-mail), first person, everyday adult life; Austrian/Swiss variant words glossed by footnote (S4 p. 8 "Stiege") | Blog, e-mail or forum post. **Adult** life domains. 6 R/F items in text order + a pre-solved example. |
| 2 | Two press texts with source line: newspaper, magazine or **brochure** (S3 p. 10–11; S4 p. 10–11); the first item is a gist item ("In diesem Text geht es…") | Same. One DE source + one AT or CH source per set. |
| 3 | Shared adult frame (German-course classmates who want to keep learning; young adults looking for holiday jobs); 7 situations, 10 ads, one "0", each ad used at most once (S3 p. 12–13; S4 p. 12–13) | Same. Exactly one "0". 3 unused ads. |
| 4 | Forum/reader comments on a public-policy question (violent games ban; motorway speed limit) with DE/AT/CH commenters; "Ist die Person für …?" (S3 p. 14; S4 p. 14) | Same: a societal question with adult stakes |
| 5 | House rules of an adult institution (vocational centre, fitness studio) with a one-line context of why you are reading them (S3 p. 15; S4 p. 15) | Same: adult institutions (course provider, workplace, housing, services) |

### 6.2 Hören
| Part | Official adult pattern | Klarweg rule |
|---|---|---|
| 1 | Voicemails (doctor's practice, insurance company), traffic radio, station announcement, weather (S3 p. 34); 2 items per text | Same mix: ≥ 2 voicemails, ≥ 1 public announcement, ≥ 1 radio item per set |
| 2 | Guided tour or info briefing (city museum; sports-programme intro) (S3 p. 35; S4 p. 36) | Same |
| 3 | Two adults talking informally at a bus stop (S3 p. 20, 36) | 2 adult speakers |
| 4 | Radio discussion: moderator + 2 named guests on a social question (S3 p. 21, 37; S4 p. 38) | Same; the moderator is also a column |

### 6.3 Schreiben
| Task | Official adult pattern | Klarweg rule |
|---|---|---|
| 1 | **E-Mail** ≈ 80 words to a friend; 3 bullets with operators *Beschreiben Sie / Begründen Sie / Machen Sie einen Vorschlag* (S3 p. 24; S4 p. 24) | Same operators, same order class |
| 2 | Gästebuch reply to a TV-discussion post on a social topic; "Schreiben Sie nun Ihre Meinung zum Thema (circa 80 Wörter)"; the stimulus post is ≈ 35–45 words (MS-E ≈ 35, ÜS-E ≈ 42; S3 p. 24; S4 p. 24) | Same |
| 3 | **E-Mail** ≈ 40 words to a person in a formal role (course leader); "Entschuldigen Sie sich höflich und berichten Sie, warum…" (S3 p. 24; S4 p. 24) | Formal Sie; 2 functions |

### 6.4 Sprechen
| Part | Official adult pattern | Klarweg rule |
|---|---|---|
| 1 | A shared planning scenario (visiting a classmate in hospital; a won language-course trip), **4 guiding questions + an open "– …"** (S3 p. 26; S4 p. 26) | Same, always including the open point |
| 2 | **Two topics on the candidate sheet; the candidate chooses one** (Thema 1 or Thema 2). 5 slides in the order: introduce + structure → personal situation/experience → situation in home country → pros/cons + opinion → close + thanks (S3 p. 27–28; S1 §1.2) | Each set offers **2 topics per candidate role**, balanced in difficulty |
| 3 | After your own talk: react to the partner's and examiner's feedback and questions. After the partner's talk: (a) feedback, (b) one question. **The second examiner also gives feedback and asks a question** (S1 §3.3; S3 p. 45) | Simulated partner + examiner turns |
| Format | Pair exam; single exam in exceptional cases, **where the examiner takes the partner role in Teil 1** and only the examiner asks questions in Teil 3 (S1 §3.3) | **The official single-exam format is the model for Klarweg's solo simulation** [INFERENCE] |

---

## 7. Scoring

### A. Official Goethe scoring [OFFICIAL]
| Element | Rule | Source |
|---|---|---|
| Lesen | 30 items × 1/0 point → × 3.33 → **rounded** using the published table (30→100, 29→97, 28→93, 27→90, 26→87, 25→83, 24→80, 23→77, 22→73, 21→70, 20→67, 19→63, **18→60**, 17→57, 16→53, 15→50, 14→47, 13→43, 12→40, 11→37, 10→33, 9→30, 8→27, 7→23, 6→20, 5→17, 4→13, 3→10, 2→7, 1→3, 0→0). Two raters sign the sheet. | S1 §4.1 |
| Hören | Identical table | S1 §4.2 |
| Schreiben | Two independent raters. Only the set point values are allowed (no intermediate values). Mean of both ratings, **rounded to full points**. **Third rating** if one rater is below and the other above the pass mark **and** the mean is below 60. Only the clean copy on the answer sheet is rated (digital: only the text in the text field). | S1 §4.3; S2 Anhang |
| Sprechen | Two examiners rate independently. The introduction is not rated. Mean, rounded (**≤ .49 down, ≥ .5 up**). Digital rating mask allowed. | S1 §5 |
| Module pass | **≥ 60 points (60 %) per module** | S1 §6.3 |
| Grades (Prädikate) | 100–90 sehr gut · 89–80 gut · 79–70 befriedigend · 69–60 ausreichend · 59–0 nicht bestanden | S1 §6.2 |
| Whole exam | **No combined score.** Modules are certified separately. A Gesamtzeugnis is possible when all four modules are passed (same date, or best results within one year under conditions). | S2 §14.7 |
| Repetition | Modules can be repeated any number of times | S1 §7; S2 §15 |
| Digital/online | Lesen and Hören are **scored automatically** by the test platform. Schreiben and Sprechen are rated by two raters directly on the platform with the **same criteria** as paper. Structure, content and rating are identical across print, digital and online. | S1 Anhang 2; S2 §1.3 |

**Ambiguity [UNKNOWN]:** for Schreiben, S1 §4.3 says only "auf volle Punkte auf- bzw. abgerundet". The ≥ .5-up rule is stated explicitly only for Sprechen. Klarweg applies half-up to both (OD-07).

### B. Klarweg educational feedback [KLARWEG DESIGN]
- Show raw points, converted points (official table), the Prädikat band and module pass/fail **for the Klarweg simulation**.
- Required wording: "Klarweg simulation result". **Never** "your Goethe score" and never a predicted Goethe score or confidence interval (OS §23.5).
- Item-level review with the correct answer, an explanation and a text/audio reference.
- Schreiben/Sprechen: per-criterion band (A–E) with descriptor-based feedback. Show which official criterion drove the score.

### C. What Klarweg cannot reproduce exactly [INFERENCE]
| Aspect | Why |
|---|---|
| Two trained, independent Goethe raters + third rating | Klarweg has no certified raters. An AI or teacher rating is **not** Goethe rating. |
| Pair-exam dynamics | A solo learner with a simulated partner changes the Teil 1 and Teil 3 construct |
| Rater calibration and benchmark norms | Rater training is not public. Only two Schreiben performance samples per task are public (S3 p. 44; S4 p. 45). |
| Score equivalence | Klarweg items are not statistically equated to live forms |

---

## 8. Assessment criteria (productive skills) [OFFICIAL]

### 8.1 General rules
- Bands **A–E**. Only listed values are allowed.
- **If "Erfüllung" is rated E (0), the whole task scores 0** (S3 p. 42, 46).
- Schreiben E for Erfüllung: "Textumfang weniger als 50 % der geforderten Wortanzahl oder Thema verfehlt" (S3 p. 42).

### 8.2 Schreiben: criteria and points (S3 p. 42–43; identical in S4 p. 43–44)
| Task | Erfüllung | Kohärenz | Wortschatz | Strukturen | Max |
|---|---|---|---|---|---|
| Teil 1 | 10/7.5/5/2.5/0 | 10/7.5/5/2.5/0 | 10/7.5/5/2.5/0 | 10/7.5/5/2.5/0 | **40** |
| Teil 2 | 10/7.5/5/2.5/0 | 10/7.5/5/2.5/0 | 10/7.5/5/2.5/0 | 10/7.5/5/2.5/0 | **40** |
| Teil 3 | 4/3/2/1/0 | 4/3/2/1/0 | 6/4.5/3/1.5/0 | 6/4.5/3/1.5/0 | **20** |

What each criterion covers:
- **Erfüllung:** content, length, language functions (A = all 3 functions adequate), text type, register.
- **Kohärenz:** text structure and linking.
- **Wortschatz:** range and control.
- **Strukturen:** range and control (morphology, syntax, orthography).

Teil 2 Erfüllung = expressing an opinion. Teil 3 Erfüllung = message content + socio-cultural appropriateness.

### 8.3 Sprechen: criteria and points (S3 p. 46–47; S4 p. 47–48)
| Part | Criteria (points A/B/C/D/E) | Max |
|---|---|---|
| Teil 1 | Erfüllung 8/6/4/2/0 · **Interaktion** 4/3/2/1/0 · Wortschatz (+ Register) 8/6/4/2/0 · Strukturen 8/6/4/2/0 | **28** |
| Teil 2 | Erfüllung 12/9/6/3/0 (A = all 5 slides adequate in content and length; B = 3–4; C = 2 or all too short; D = 1) · Kohärenz 4/3/2/1/0 · Wortschatz (+ Register) 12/9/6/3/0 · Strukturen 12/9/6/3/0 | **40** |
| Teil 3 | Erfüllung 16/12/8/4/0 (feedback, ask, answer) | **16** |
| Teil 1–3 | **Aussprache** 16/12/8/4/0 (intonation, word stress, individual sounds) | **16** |

### 8.4 Reuse boundary [OWNER DECISION OD-08]
These criteria are publicly documented facts about the exam. Klarweg may **implement the scoring structure** (criteria names, bands, point values) for feedback. Reproducing the **descriptor wording verbatim** and labelling it Goethe needs legal review.

---

## 9. Digital behaviour

### 9.1 What the official digital format does [OFFICIAL]
| Behaviour | Official rule | Source |
|---|---|---|
| Delivery | At the centre on the centre's laptop with a **German keyboard** (digital format), or at home on one's own computer under remote proctoring (online format: Chrome, webcam, **speakers; headphones/earbuds not allowed**, 5 Mbit/s) | S1 Anhang; S2 §1.2 |
| Content | The digital material is identical in content to paper | S1 Anhang 1; S2 §1.3 |
| Answer entry | Directly on the platform; **no answer transfer** | S1 Anhang 1 |
| Changing answers | **Allowed until the module is submitted or the time expires** | S1 Anhang 1 |
| Tutorial | Optional tutorial at the start of each module; **exam time starts after it** | S1 Anhang 1 |
| Hören | Played by the platform via **headphones** (centre) or **speakers** (online) | S1 Anhang 1 |
| Sprechen | Tasks still **on paper** with examiners (centre). Online: single or pair depending on the centre. | S1 Anhang 1, 3.10 |
| Scratch paper | Stamped scratch paper available on request | S1 Anhang 1 |
| Scoring | Lesen/Hören automatic; Schreiben/Sprechen rated by two raters on the platform | S1 Anhang 2 |
| Writing | Only text inside the text field is rated | S2 Anhang |
| Toilet break (online) | Allowed, but **the schedule continues and no time is added** | S1 Online 3.10 |
| Technical failure (online) | **Switching off or failure of webcam, speaker or microphone leads to exclusion** from the exam | S2 Online 6 |
| Abort | An exam aborted after it starts counts as **not passed** (illness needs a medical certificate) | S2 §12 |
| Practice platform UX | Goethe's accessible online training: Lesen and Hören scored instantly; Schreiben typed in a text field, printed and rated by a teacher; Sprechen = watch the example; keyboard-only operation; sign-language and lip-reading videos for Hören | S7 `hilfe.php`, `hoeren.php` |

### 9.2 Unknown official digital behaviour [UNKNOWN / NEEDS OWNER DECISION]
| Behaviour | Status | Klarweg default proposal | OD |
|---|---|---|---|
| Hören playback control (auto-play, no pause/seek), per-text pauses, whether earlier Hören parts stay editable | [UNKNOWN]: the platform plays the audio (S1); controls not documented | Auto-play, no pause/seek; answers editable until module end (consistent with "changes allowed until submission") | OD-01 |
| Navigation within Lesen/Schreiben | [INFERENCE] free order (paper "Sie können mit jeder Aufgabe beginnen", S3 p. 7, 23) | Free navigation within the module | – |
| Hören navigation between parts | [UNKNOWN] | Linear (audio-paced); answers of finished parts stay editable until submission | OD-02 |
| End-of-Hören review window (paper transfer is ≈ 5 min) | [UNKNOWN] for digital | 5-min review window, no audio | OD-03 |
| Timer display | [UNKNOWN] | Module countdown (Goethe Mode style) | – |
| Breaks between digital modules | [INFERENCE] the paper rule (≥ 15 min) is not overridden by the annex | Offer a 15-min break, skippable | OD-04 |
| Refresh/crash recovery | [UNKNOWN]; online exclusion on device failure (S2) | Klarweg is practice, not certification: resume with server-time deadline; log incidents | OD-05 |
| Writing aids | [INFERENCE] German keyboard; no aids allowed (S3 p. 23 "Hilfsmittel … nicht erlaubt") | Spellcheck/autocorrect off; umlaut key row (Indian keyboards) | OD-06 |
| Speaking recording | [OFFICIAL] centre exam is live, not recorded for rating; online exams are recorded for proctoring (S2 Online 5) | Record for feedback with consent | OD-09 |
| Speaking partner | [OFFICIAL] single-exam precedent: the examiner acts as partner (S1 §3.3) | AI/scripted examiner-partner | OD-10 |

### 9.3 Klarweg digital requirements (adopted from the DIGITAL-EXAM-SPEC, amended)
Still valid from the earlier spec:
- Server-authoritative timers
- Autosave and idempotent writes
- No answer keys sent to the client before submission
- Premium pre-rendered audio only, with TTS fallbacks disabled
- Teal Goethe Mode styling
- Accessibility (also matched by Goethe's own keyboard-only practice tool, S7)

**Amendments:**
1. No transfer windows in Lesen (official digital).
2. A tutorial before each module, outside the timed window.
3. Answers changeable until module submission or timeout.
4. Sprechen Teil 2 topic **choice** during preparation.
5. Solo format modelled on the official **Einzelprüfung**.
6. An accommodations path (25–100 % extra time) mirroring S8.
7. The speech pipeline must support **≥ 4-minute** monologue capture. The current Klarweg cap is 30 s / 1 MiB (`access/worker/wrangler.toml`), a blocker (§13).

---

## 10. Difficulty benchmark (three layers)

> "Equivalent in design target" means a Klarweg form is built to these measurable properties. It does **not** mean statistical equivalence to live Goethe examinations. That requires pilot data (§15–§17).

### Layer A: 15-Modelltest book benchmark [REFERENCE BOOK]
Medians (ranges) from `GOETHE-B1-DIFFICULTY-BENCHMARK.md` §2.1, §3.2. Metrics are defined there (Klarweg A1–B1 off-list proxy, MSL, etc.).

### Layer B: official adult benchmark [OFFICIAL texts, measured by this analysis]
Two official adult sets: Modellsatz (MS-E, S3/S7) and Übungssatz (ÜS-E, S4). The same metric code was applied as in Layer A.

| Component | MS-E | ÜS-E | Book median (range) |
|---|---|---|---|
| L1 words / MSL / sub per 100 / off-list | 337 / 16.9 / 3.6 / 0.04 | 328 / 15.0 / 3.4 / 0.03 | 341 (253–373) / 11.8 / 2.1 / 0.08 |
| L2 text A words / MSL / off | 184 / 18.8 / 0.09 | 218 / 12.8 / 0.06 | 196 / 15.4 / 0.10 |
| L2 text B words / MSL / off | 196 / 16.7 / 0.10 | 225 / 16.1 / 0.10 | 190 / 16.7 / 0.11 |
| L3 situations words | ≈ 150 (excl. frame) | ≈ 90 | ≈ 200 (incl. frame) |
| L3 ads words / off | 325 / 0.15 | 328 / 0.17 | 318 (172–534) / 0.20 |
| L4 comments words / sub / off | 439 / 4.3 / 0.09 | 431 / 3.5 / 0.11 | 459 / 3.2 / 0.07 |
| L5 rules words / off | 226 / 0.09 | 240 / 0.07 | 227 / 0.14 |

**Hören, measured from official audio (S9) and transcripts (S3 p. 34–37)**: single plays.

| Part | Transcript words | Single-play duration | Speech rate |
|---|---|---|---|
| T1 texts 1–5 | 75–87 each | 37–50 s each | ≈ 95–130 w/min (incl. framing sentence + silence) |
| T2 | ≈ 448 | 169 s | **≈ 159 w/min** |
| T3 | ≈ 545 | 211 s | **≈ 155 w/min** |
| T4 | ≈ 855 (excl. instructions) | 310 s | **≈ 165 w/min** |

- Total spoken text ≈ 2,450–2,600 words per form (MS-E ≈ 2,500; ÜS-E ≈ 2,450).
- Youth forms have the same density (S5/S6 transcripts: 570 / 435–445 / 515–530 / 860–870 words).

**Speaker configurations [OFFICIAL]:**
- T3: two adults (man + woman).
- T4: moderator (m) + two guests (f/m), e.g. parents on childcare (S3 p. 37) or a linguist (S4 p. 38).

**Corrections that follow [INFERENCE]:**
- Official L1 has **longer, more subordinated sentences** but **simpler vocabulary** than the book. The book understates L1 syntax and overstates L1 lexis.
- Official L3 ad sets are ≈ 325 words, so the book's 500+ word sets (T05, T08, T14) are heavier than official.
- Official L4 has a little more subordination.

### Layer C: KLARWEG B1 DIFFICULTY TARGET [KLARWEG DESIGN]
Centre = official (Layer B); tolerance informed by book variation (Layer A).

**LESEN**
| Property | Target (per component) | Hard limits |
|---|---|---|
| L1 length / MSL / sub / off | 320–350 w · MSL 13.5–17 · sub 2.5–4 · off ≤ 0.06 | 300–370 w · MSL ≤ 18 · off ≤ 0.09 |
| L2 length / MSL / off | 180–225 w each · MSL 13–19 · off 0.06–0.10 | 160–240 · off ≤ 0.13 |
| L3 situations / ads | 7 × 10–25 w · ads 300–350 w total · off (ads) ≤ 0.17 | Ads ≤ 400 w |
| L4 comments | 8 comments, 420–450 w total · sub 3.5–4.5 | 400–470 w |
| L5 document | 220–245 w · off ≤ 0.10 | ≤ 260 w · off ≤ 0.15 |

Qualitative targets per item (rated 1–5 per Benchmark §2.2):
- **Inference demand:** mean 3.0 ± 0.3 per part.
- **Distractor strength:** every distractor text-adjacent; ≥ 1 "near-miss" ad per matched L3 situation.
- **Information density:** L5 has 1 condition/exception per item.
- **Matching complexity:** L3 has 2 ± 1 constraints per situation.
- **Processing load:** total Lesen reading ≈ 2,050–2,250 words (official ≈ 2,200 incl. items; book median 2,350) → **32–35 words per minute**.

**HÖREN**
| Property | Target |
|---|---|
| Speech rate (single play, net of pauses) | T2 150–165 w/min; T3 145–165; T4 155–175; T1 texts 75–90 words each in 35–50 s |
| Words per part | T1 ≈ 75–90 per text · T2 430–480 · T3 500–550 · T4 830–900 |
| Relevant details | T1: 2 per text (topic + 1 detail); T2: 5 spread across the monologue (not clustered); T3: 7; T4: 8 statements, each speaker ≥ 2 |
| Distractors | Each MC option mentioned or implied in the audio (official pattern, e.g. S3 T1 text 3: Baustelle / Berufsverkehr / Unfall are all mentioned; [INFERENCE] from S3 p. 18 vs p. 34) |
| Speaker changes | T3: 2 speakers, natural turn-taking; T4: 3 voices, distinguishable (gender and/or timbre) |
| Memory demand | Single-play parts (T2, T3) answerable in item order |
| Replay rules | Exactly 2/1/1/2 plays [OFFICIAL] |
| Timing pressure | Pre-read 10 s / 60 s / 60 s / 60 s [OFFICIAL]; T4 statements ≤ 120 words to read in 60 s |

**SCHREIBEN**
| Property | Target |
|---|---|
| Task complexity | A1: 3 operator bullets (describe / justify / propose, or equivalent); A2: one stimulus post (35–50 w) on a social topic; A3: 2 functions (e.g. apologise + explain) |
| Communicative functions | Per §6.3; register switch du (A1) / forum (A2) / Sie (A3) |
| Planning demand | A2 unscaffolded (official) |
| Scoring difficulty | Rated with the official criteria (§8.2); length below 50 % → Erfüllung E |
| Time pressure | 20 / 25 / 15 min (official) |

**SPRECHEN**
| Property | Target |
|---|---|
| Planning demand | 15 min prep for all three parts; notes allowed [OFFICIAL] |
| Presentation demand | 5 slides in ≈ 3 min (Erfüllung A requires all 5 adequately covered) |
| Interaction complexity | Teil 1 negotiation over 4 + open points; Teil 3 unscripted questions |
| Spontaneity | Teil 3 questions not visible during prep |
| Functions | propose, agree/disagree, justify, decide (T1); present, compare, give opinion (T2); give feedback, ask, answer (T3) |
| Pronunciation | Rated across all parts (16 points) |
| Topic choice | The 2 Teil 2 topics per role are equal in difficulty (same abstraction level, lexis band) |

---

## 11. Set-balancing rules (Sets 01–10) [KLARWEG DESIGN]

Goal: **SET 01 ≈ SET 02 ≈ … ≈ SET 10** by design, then verified with pilot data.

### 11.1 Set Difficulty Profile (SDP)
Each set gets a profile vector of **24 measured indicators**. Each is standardised against the Layer C target (z = (value − target centre) / (target half-width)).

| Group | Indicators |
|---|---|
| Lesen text (8) | L1 words, L1 MSL, L1 off; L2 mean words, L2 mean off; L3 ads words; L4 words; L5 off |
| Lesen items (4) | Mean inference rating; mean distractor rating; L3 mean constraints per situation; Lesen total words |
| Hören (6) | T2/T3/T4 speech rates; T4 pre-read words; numeric items in T2 (0–3); voice-distinctness score in T4 (1–3) |
| Schreiben (3) | Number of functions (A1+A3); A2 stimulus words; topic abstraction rating (1–3) |
| Sprechen (3) | T1 point count; Teil 2 topic abstraction (mean of both choices); Teil 2 topic-pair difficulty gap |

### 11.2 Constraints
1. **Every indicator** lies within its Layer C hard limits.
2. **|z| ≤ 1** for at least 20 of the 24 indicators.
3. **Set composite** (mean z) between −0.25 and +0.25. **Range of composites across the 10 sets ≤ 0.30**.
4. **Module composites** (Lesen, Hören, Schreiben, Sprechen) each between −0.40 and +0.40. No set may have two modules above +0.30.
5. **Trap-mechanism quotas** (Benchmark §2.3 taxonomy): per set, L1 and L2 use ≥ 5 distinct mechanisms, and no mechanism appears > 2× in one part.
6. **Key balance:**
   - L1 3/3 (±1)
   - L4 Ja 3–4
   - H3 richtig 3–4
   - MC letters 30–40 % each per module
   - no runs > 3
   - L3 "0" position varies across sets
7. **Topic distribution** across the 10 sets: each of **work, study/training, housing, health, consumer/services, mobility/travel, media/digital, environment, social life/family, culture/leisure** appears in ≥ 3 sets and ≤ 6 sets, over all tasks. No topic is repeated within one set. Sets 01–10 avoid the topics of the official Modellsatz/Übungssatz, which are the learners' likely external practice.
8. **Listening characteristics:**
   - T1 genre mix fixed per set: ≥ 2 voicemails, ≥ 1 public announcement, ≥ 1 radio item.
   - T4 voice configurations: at least 7 sets with mixed-gender guests; the rest have explicit timbre/age contrast.
   - 1 AT/CH accent part per set, at most.
9. **Writing demands:** the A1 operator triplet varies across sets (≥ 4 distinct triplets over 10 sets), and A3 function pairs vary (≥ 5 distinct pairs).
10. **Speaking demands:** the Teil 2 topic pair is rated for equal difficulty by 2 reviewers (gap ≤ 1 on a 5-point scale).
11. **Calibration (after pilot):** set mean raw scores within **±1.5 raw points (≈ ±5 %)** of the Mock reference, per module, after equating (OD-12). Items with facility p < 0.30 or > 0.90, or point-biserial < 0.20, are revised.

---

## 12. Originality and copyright rules [KLARWEG DESIGN, subject to OD-08]

1. **No reuse** of any text, item, ad, scenario, slide topic, audio script, recording, image or layout artwork from the official Goethe materials (S3–S9; © Goethe-Institut / ÖSD / Universität Freiburg/Schweiz) or from the Hueber reference book.
2. The **format** (task types, item counts, timings, scoring structure) is reproduced as facts. **Instruction wording** is reproduced only after legal review (OD-08). Otherwise use Klarweg paraphrases that preserve the meaning.
3. No real people, brands or existing venues. No use of the Goethe logo or trademark beyond nominative reference ("prepares for the Goethe-Zertifikat B1"). Every results screen carries the disclaimer "Klarweg simulation – not an official Goethe-Institut result."
4. Similarity gate: every authored text is checked for n-gram overlap against the scratch corpora (the book OCR and the official PDFs, **kept outside the repo**). Any 8-gram match fails unless it is generic.
5. Official materials remain outside the repo. Only URLs and hashes are recorded (§2).

---

## 13. Unknowns and blockers before question authoring

| # | Blocker | Status | Needed |
|---|---|---|---|
| B1 | Owner approval of this standard (adult benchmark, Layer C targets) | Pending | OD-11 |
| B2 | Official digital Hören behaviour (pauses, controls, review window) | [UNKNOWN] | OD-01–03 decisions; optional enquiry to a Goethe-Institut centre |
| B3 | Full official Hören timeline (pauses between plays) | [UNKNOWN] (S10 blocked) | Manual browser download of the 37:21 / 39:13 MP4s for timing analysis |
| B4 | Speech pipeline limit (30 s / 1 MiB / 3 checks per day) vs ≥ 4-min Sprechen capture | Klarweg blocker | Architecture decision (OD-09) |
| B5 | Scoring authority for Schreiben/Sprechen (AI, teacher or hybrid), double-rating policy, third-rating emulation | Undecided | OD-07, OD-13 |
| B6 | Reuse boundary for the official criteria descriptors and instruction wording | Legal | OD-08 |
| B7 | Audio production: premium voices (OS §23.5), ≥ 3 distinct voices + AT/CH accent option, rate control to Layer C, studio vs neural | Undecided | OD-14 |
| B8 | Metadata schema per item (part, construct, trap mechanism, key, text/audio anchor, metrics, topic, reviewer IDs, version) | Not defined | Spec before authoring |
| B9 | Illustration policy (L2 article images, L3 ad layouts, SP1 clipboard, SP2 slide images) | Undecided | OD-15 (decorative only; licence-clean) |
| B10 | Calibration method (pilot size, anchor strategy, equating) | Undecided | OD-12 |
| B11 | Native-speaker reviewers + B1 teacher panel | Not staffed | Owner |
| B12 | Exam-content protection (served via the Access Worker, keys server-side) | Design only | Phase 3 architecture |
| B13 | The two Prüfungsziele/Testbeschreibung handbook details (ISBN 978-3-19-031868-1) | [UNKNOWN], commercial | Optional purchase for fuller construct definitions |

---

## 14. Owner decisions

| ID | Decision | Recommendation |
|---|---|---|
| OD-01 | Hören playback controls in Klarweg | Auto-play, no pause/seek, play counts enforced |
| OD-02 | Hören navigation between parts | Linear playback; earlier answers editable until submission |
| OD-03 | End-of-Hören review window | 5 min, no audio (mirrors the paper transfer time) |
| OD-04 | Breaks in full simulation | Offer 15 min between written modules (official paper rule), skippable |
| OD-05 | Recovery after crash/refresh | Resume; no extra time; one replay of an *interrupted* Hören play; log it |
| OD-06 | Writing aids / paste / umlaut row | No spellcheck; paste disabled; umlaut row shown |
| OD-07 | Rounding rule for Schreiben means | Half-up (as officially stated for Sprechen) |
| OD-08 | Use of official criteria wording and instruction formulae | Legal review; default to paraphrase + official point structure |
| OD-09 | Speaking capture architecture and retention/consent | Separate exam speech path; consent; retention ≤ 30 days |
| OD-10 | Solo Sprechen format | Official single-exam model (examiner-partner) |
| OD-11 | Adopt this standard as authoritative | Yes |
| OD-12 | Calibration design | See §15.3 |
| OD-13 | Productive-skill rating | Hybrid: AI pre-rating + teacher double rating during the pilot |
| OD-14 | Audio production route | Studio or premium neural with human QA; no browser TTS |
| OD-15 | Illustration policy | Licence-clean, decorative, never carries item information |
| OD-16 | Earlier DIGITAL-SPEC open items D1–D15 | Superseded/answered per §9; confirm |

---

## 15. Requirements for the Mock ("M0: Calibration Mock")

The Mock is **not "Set 00"**. It is the instrument that validates the engine, the UX, scoring, timing, audio, the speaking workflow and difficulty before any set is authored at scale.

### 15.1 Construction
- Built to the **centre** of Layer C on every indicator (composite z within ±0.10).
- Every part follows §6.
- It carries full item metadata (B8).
- It also includes **instrumentation hooks** (timestamps per item and phase, play events, autosave events, recording events).

### 15.2 What M0 must validate (exit criteria)
| Area | Pass criterion |
|---|---|
| Exam engine | Timers server-authoritative (drift < 1 s per 65 min); autosave loss = 0 in fault-injection tests; module submission idempotent |
| UX | ≥ 90 % of pilot learners complete each module without support; no critical accessibility failures (keyboard-only, screen reader, 200 % zoom) |
| Scoring | Lesen/Hören auto-score = 100 % agreement with hand scoring; conversion table exact; Schreiben/Sprechen double rating implemented incl. mean, rounding and third-rating trigger |
| Timing | Median completion time per Lesen part within ±20 % of official advisory times; < 10 % of learners time out in Schreiben |
| Audio workflow | 0 unintended replays/pauses; play counts logged; preload before pre-read; measured speech rates within Layer C |
| Speaking workflow | ≥ 99 % recording success; 4:00 monologue captured; topic choice works; simulated partner/examiner turns land within the official durations |
| Difficulty calibration | Pilot N ≥ 40 adult learners at about B1 (target mix: 50 % Klarweg B1 completers); item facility 0.30–0.90; point-biserial ≥ 0.20; module means within the plausible band of the official Modellsatz taken by the same learners as an external anchor (learners use the free official online training themselves; Klarweg does not host it) |
| Teacher review | ≥ 2 B1 teachers and 1 native-speaker reviewer sign off every item (validity, key, distractors, register, regional usage) |
| Rater agreement | Two raters: exact-band agreement ≥ 70 %, adjacent ≥ 95 % per criterion; AI vs teacher agreement reported |

### 15.3 Calibration method (proposal, OD-12)
- Classical item analysis on the M0 pilot.
- Revised M0 = **reference form**.
- Sets 01–10 each include a shared **anchor block** (e.g. 6 Lesen + 6 Hören items from M0, rotated) for mean or linear equating.
- No claims of Goethe equivalence.

---

## 16. Requirements for Sets 01–10

1. **Authoring starts only after** M0 passes §15.2 and the open blockers (§13 B1–B12) are resolved.
2. Each set satisfies §4–§8 exactly, the Layer C targets, and the §11 balancing constraints.
3. Each set is accompanied by:
   - item metadata
   - text and audio metrics
   - the SDP vector
   - the trap-mechanism map
   - the key-balance report
   - the topic matrix entry
   - the originality report
   - reviewer sign-offs
4. Two Teil 2 topics per candidate role, difficulty-matched.
5. Audio meets the Layer C rates (±5 %), the voice configuration rules and the premium-voice rule. Timestamped transcripts are required.
6. Each set is piloted (N ≥ 25) or equated through anchors before release. Items failing the §11.2(11) statistics are revised.

## 17. QA gates

| Gate | When | Checks | Owner |
|---|---|---|---|
| **G0 Spec freeze** | Before M0 authoring | This standard approved; OD-01…OD-16 decided | Owner |
| **G1 Blueprint conformance** | Per draft form | Structure, counts, numbering, formats, timings, instructions per §4–§6 | Author + reviewer |
| **G2 Metric conformance** | Per draft form | Layer C metrics, automated (word counts, MSL, off-list, speech rate) | Automated |
| **G3 Item validity** | Per item | Single defensible key; distractors falsifiable; text order; name/gender/number consistency (cf. book T15 error); no trivia | 2 reviewers |
| **G4 Originality** | Per form | n-gram similarity; no real brands or people; no reuse of official or book content | Automated + reviewer |
| **G5 Language** | Per form | Native-speaker review; regional words glossed; register (Sie/du) correct | Native reviewer |
| **G6 Audio** | Per track | Premium voice; rate; voice distinctness; play-count metadata; transcript timestamps | Audio QA |
| **G7 Set balance** | Per set | SDP constraints §11.2 | Automated + lead |
| **G8 Pilot statistics** | After pilot | Facility, discrimination, rater agreement, equating | Lead |
| **G9 Release** | Before publish | Disclaimers; content served server-side; keys hidden; accessibility check | Owner |
