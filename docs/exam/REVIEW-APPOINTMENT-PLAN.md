# Review appointment plan: coordinator and external reviewers (Lesen-only)

> **Status:** 2026-10-20, prepared by engineering after the owner's answers to D1, D2, D3 and D6 (recorded in
> `LESEN-ONLY-OWNER-DECISIONS.md`). **Nobody has been contacted, appointed or paid.** No fee, budget or contract term
> is set here. Rates and contracts are the owner's decisions. The reviewer e-mail drafts, role requirements and
> independence rules are in `EXTERNAL-REVIEW-OUTREACH.md` and are not repeated; this plan adds the coordinator, the
> order of appointments and what each engagement needs to contain.

## 1. Order of appointments
| Step | Appointment | Why first | Needs from the owner |
|---|---|---|---|
| 1 | **EX-03 coordinator** (independent; D3) | EX-03 is the longest path, and every reviewer contact and record goes through this person | C1 + C2 below |
| 2 | **EX-03 reviewers A, B, C**, recruited by the coordinator | Blocks every learner form | Fee approval for the quotes the coordinator collects |
| 3 | **EX-05 security** and **EX-04 accessibility**, in parallel | They test the current build; findings may need engineering fixes | C2; for EX-05 also the signed test authorisation (§3.4) |
| 4 | **EX-01 privacy** | Should see the final data handling, so after D7 (retention) | C2 and D7 |
| 5 | **EX-07 trademark** | Independent of the others; also covers the main site | C2 |

## 2. The EX-03 coordinator (new role, D3)
- **Task:**
  - recruits three different reviewers (two B1 teachers, one native linguist) and checks their independence
    declarations;
  - sends each reviewer the confidential packet directly;
  - makes sure A, B and C record their verdicts independently, with no discussion before all three have finished
    (EX-03/O7);
  - collects the returned records and forwards them to engineering, which runs the checks (owner answer to D3);
  - returns "not ready" findings to the reviewer concerned;
  - keeps `ASSIGNMENT.csv`.
- **Not the coordinator's task:**
  - reviewing items;
  - judging disagreements (there is no tie-break, EX-03/O7);
  - changing any record;
  - deciding fees.
- **Requirements:**
  - not part of the Klarweg team, and no author or editor of the material;
  - not one of the three reviewers;
  - reliable with confidential material (the packet contains answer keys);
  - able to correspond in German and English;
  - ideally familiar with the German-as-a-foreign-language field, which helps in finding reviewers.
- **Effort (estimate):** about 6–10 hours over the review period: recruitment, three hand-overs, follow-up and record
  collection.
- **Receives:**
  - this plan;
  - `EXTERNAL-REVIEW-OUTREACH.md` §0–§1 and §7;
  - the packet `EX-03-LESEN-RC-2026-10-20`, after the coordinator has signed the confidentiality confirmation (§7 of
    the outreach pack).
- **Contract points (owner to decide):** scope as above; confidentiality, with return or deletion of the packet
  afterwards; no review role; a fee basis (fixed or hourly with a cap); handling of the reviewers' contact data (the
  coordinator processes their personal data on Klarweg's behalf, so check the GDPR role with EX-01 or your adviser);
  the end date.

### Coordinator e-mail draft (German)
> **Betreff:** Anfrage: Koordination einer unabhängigen Fachprüfung von B1-Leseaufgaben (ca. 6–10 Stunden)
>
> Guten Tag [Anrede Name],
>
> Klarweg entwickelt eine Online-Übungsplattform für Deutschlernende (Vorbereitung auf das Goethe-Zertifikat B1).
> Bevor Lernende die ersten Leseübungen nutzen, prüfen drei unabhängige Fachleute (zwei B1-Lehrkräfte, eine
> muttersprachliche Linguistin bzw. ein Linguist) jede Aufgabe. Wir suchen eine unabhängige Person, die diese Prüfung
> koordiniert:
> - die drei Fachleute gewinnen;
> - ihnen die vertraulichen Unterlagen übergeben;
> - auf unabhängiges Arbeiten achten;
> - die ausgefüllten Prüfbögen einsammeln.
>
> Sie prüfen selbst keine Aufgaben. Aufwand nach unserer Schätzung: etwa 6–10 Stunden, verteilt auf einige Wochen.
> Voraussetzungen: keine Verbindung zu unserem Team und Vertraulichkeit.
>
> Vergütung und Zeitrahmen: [vom Absender einzusetzen]. Wenn Sie Interesse haben, sende ich Ihnen gern die
> vollständige Beschreibung.
>
> Mit freundlichen Grüßen
> [Name, Funktion, Klarweg]

## 3. Each review: who to look for, effort, contract points
Effort figures are engineering estimates for budgeting, not quotes. Ask each candidate for a written quote against the
scope in `EXTERNAL-REVIEW-OUTREACH.md`.

### 3.1 EX-03 content (three reviewers)
- **Where to look** (the coordinator's job):
  - university departments of German as a foreign language;
  - adult-education language schools that prepare for B1;
  - professional associations of DaF/DaZ teachers;
  - for slot C: German linguists, or experienced editors of German teaching material.
- **Effort:** about 2–4 hours per reviewer for 90 items, so roughly 6–12 hours in total.
- **Contract points:** a fixed fee per reviewer for one record per form; the independence and confidentiality
  confirmation before starting; the delivery confirmation; the right to use the verdicts internally; a note that any
  item they mark "revise" may come back for a fresh review (decide whether that is included or paid extra).

### 3.2 EX-01 privacy
- **Where to look:** a data-protection lawyer, or an external DPO (for example GDD or BvD members, or a lawyer
  specialising in IT and data-protection law) with online-education or consumer-app experience.
- **Effort:** about 1–2 days.
- **Contract points:** a fixed fee for a written opinion; whether a follow-up review of the corrected notice is included;
  confidentiality; a liability clause as usual for legal advice.

### 3.3 EX-04 accessibility
- **Where to look:** an accessibility consultancy or auditor with WCAG 2.2 reporting and hands-on screen-reader testing,
  ideally including a tester who uses assistive technology.
- **Effort:** about 1–2 days, plus a re-test.
- **Contract points:** a fixed fee including one re-test of the fixed rows; a signed report with severity and WCAG
  criterion; the browsers and assistive technology covered (as listed in the outreach pack).

### 3.4 EX-05 security
- **Where to look:** a penetration-testing firm or freelancer with web-API experience (OSCP/OSWE or CREST-type
  credentials, or verifiable references).
- **Effort:** about 3–5 days, plus a re-test.
- **Contract points:**
  - a **written test authorisation** signed by the owner, naming the tester, the non-production hosts and the time
    window: non-production only, no denial-of-service, no social engineering;
  - confidential reporting;
  - a fixed fee including the re-test;
  - a liability cap;
  - deletion of the test accounts' credentials afterwards.
- **Engineering then:** switches non-production to the Lesen-only configuration and creates the synthetic test
  accounts. Both are already authorised for non-production. Afterwards it restores the default.

### 3.5 EX-07 trademark
- **Where to look:** a lawyer specialising in trademark and IP law (Fachanwalt für gewerblichen Rechtsschutz),
  ideally with education or marketing work.
- **Effort:** about 0.5–1 day.
- **Contract points:** a fixed fee for a written opinion and a list of wording changes; confidentiality.

## 4. The smallest choices needed to proceed
Engineering cannot do either of these: they need a person or a spending authorisation.

```
C1 Coordinator search: [I will approach: name / I will post the coordinator description myself via: channel]
C2 Fees: [quotes first, no commitment until I approve each one / budget cap per review: EX-03 … · EX-01 … · EX-04 … · EX-05 … · EX-07 …]
```
- **C1:** without a coordinator, no EX-03 reviewer can be approached. The owner (not engineering) sends the e-mail in
  §2 or posts the role.
- **C2:** "quotes first" commits nothing, and each quote then needs a yes/no from the owner. A cap lets the
  coordinator or reviewers proceed within it. Either way, nothing starts without the owner's written yes.

Everything else is ready: the briefs, the e-mail drafts, the packet, the checks, and the non-production environment for
EX-05.
