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
> Klarweg entwickelt eine Online-Übungsplattform für Deutschlernende (Prüfungsvorbereitung auf Niveau B1 des GER).
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

## 4. Owner choices C1 and C2: answered 2026-10-20
- **C1:** "Prepare the independent coordinator role description as a short, public-safe recruitment post and a separate
  direct-invitation message. I will review and publish the post through a professional channel myself. Do not publish,
  contact candidates or appoint anyone." The materials are in §5 and §6. The owner reviews and publishes them;
  engineering publishes nothing.
- **C2:** "Quotes first, with no commitment until I approve each engagement in writing. This applies to the independent
  coordinator and EX-03, EX-01, EX-04, EX-05 and EX-07." The quote request is in §7 and the approval rule in §8.
- **Owner conditions:**
  - EX-01 waits for D7 (retention);
  - EX-05 needs the owner's explicit written authorisation, limited to non-production (§9 draft, unsigned);
  - nobody begins paid work before the owner's written approval.

## 5. Recruitment post (public-safe; for the owner to review and publish)
Contains no material, answer keys, security details, internal paths or product names under trademark review.
"Goethe" is deliberately absent until EX-07 has given its opinion.

**German**
> **Unabhängige Koordination einer Fachprüfung von Deutsch-Leseaufgaben (B1, freiberuflich, ca. 6–10 Stunden)**
>
> Klarweg, eine Online-Lernplattform für Deutsch, lässt Leseübungen auf Niveau B1 (GER) von drei unabhängigen
> Fachleuten prüfen, bevor Lernende sie nutzen. Wir suchen eine unabhängige Person, die diese Prüfung koordiniert:
> - drei Fachleute gewinnen (zwei B1-Lehrkräfte, eine muttersprachliche Linguistin bzw. ein Linguist);
> - ihnen vertrauliche Unterlagen übergeben;
> - auf unabhängiges Arbeiten achten;
> - die Ergebnisse einsammeln.
>
> Sie prüfen selbst keine Aufgaben.
>
> **Sie bringen mit:** keine Verbindung zu Klarweg; Zuverlässigkeit im Umgang mit vertraulichen Unterlagen; Deutsch
> und Englisch; idealerweise Kontakte im Bereich Deutsch als Fremdsprache.
> **Umfang:** etwa 6–10 Stunden über einige Wochen, remote.
>
> Bitte senden Sie ein unverbindliches Angebot (Stundenzahl, Gesamthonorar mit Währung, Zeitraum) an
> [Kontakt, vom Owner einzusetzen]. Eine Beauftragung erfolgt erst nach schriftlicher Bestätigung.

**English**
> **Independent coordinator for an expert review of German reading exercises (B1, freelance, approx. 6–10 hours)**
>
> Klarweg, an online German-learning platform, has its B1 (CEFR) reading exercises checked by three independent
> experts before learners use them. We are looking for an independent person to coordinate that review:
> - recruit three experts (two B1 teachers, one native-speaker linguist);
> - hand them confidential material;
> - make sure they work independently;
> - collect the results.
>
> You do not review the exercises yourself.
>
> **You bring:** no connection to Klarweg; reliability with confidential material; German and English; ideally
> contacts in German-as-a-foreign-language teaching.
> **Scope:** about 6–10 hours over a few weeks, remote.
>
> Please send a non-binding quote (hours, total fee with currency, timeframe) to [contact, set by the owner]. No
> engagement exists until it is confirmed in writing.

## 6. Direct invitation (for a person the owner already knows)
> **Betreff:** Anfrage: unabhängige Koordination einer Fachprüfung von B1-Leseaufgaben
>
> Guten Tag [Anrede Name],
>
> ich möchte Sie fragen, ob Sie die Koordination einer unabhängigen Fachprüfung für Klarweg übernehmen würden. Drei
> Fachleute (zwei B1-Lehrkräfte, eine muttersprachliche Linguistin bzw. ein Linguist) prüfen 90 Leseaufgaben auf
> Niveau B1, jede Person unabhängig. Ihre Aufgabe wäre:
> - die drei Fachleute zu gewinnen;
> - ihnen die vertraulichen Unterlagen zu übergeben;
> - darauf zu achten, dass niemand vor Abgabe aller Urteile über die Aufgaben spricht;
> - die ausgefüllten Prüfbögen einzusammeln und an uns weiterzuleiten.
>
> Sie prüfen selbst keine Aufgaben. Wir schätzen den Aufwand auf 6–10 Stunden über einige Wochen.
>
> Voraussetzung ist, dass Sie keine Verbindung zu unserem Team haben und an den Aufgaben nicht mitgewirkt haben. Vor
> Beginn bitten wir um eine kurze Unabhängigkeits- und Vertraulichkeitserklärung.
>
> Wenn Sie grundsätzlich Interesse haben, senden Sie mir bitte ein unverbindliches Angebot (siehe unten). Eine
> Beauftragung entsteht erst mit meiner schriftlichen Bestätigung; vorher beginnt keine bezahlte Arbeit.
>
> Mit freundlichen Grüßen
> [Name, Funktion, Klarweg]
>
> *(Attach the quote request in §7.)*

## 7. Quote request (one template for all six engagements)
Send it with every e-mail draft (`EXTERNAL-REVIEW-OUTREACH.md` §1–§5) and with §5/§6.

> **Angebot / Quote — please include:**
> 1. **Scope** as you understand it, in your own words. *(Engagement: coordinator / EX-03 slot A, B or C / EX-01
>    privacy / EX-04 accessibility / EX-05 security / EX-07 trademark.)*
> 2. **Estimated hours.**
> 3. **Total fee and currency**, fixed price or hourly rate with a cap, and whether VAT is included.
> 4. **Timeline:** earliest start, duration, delivery date.
> 5. **Deliverables:** what you hand over, and in which form.
> 6. **Re-test or follow-up:** is one included, and what does an additional one cost? *(EX-03: a fresh review of a revised
>    item; EX-04/EX-05: a re-test of fixed findings; EX-01/EX-07: a review of the corrected text.)*
> 7. **Additional expenses** (travel, tools, licences), or "none".
> 8. **Conflicts of interest**, or "none".
> 9. **Validity** of the quote.
>
> This is a request for a non-binding quote. No engagement exists, and no paid work may begin, until Klarweg confirms
> in writing.

## 8. Approval rule (C2)
- Nobody starts paid work without the owner's written approval of that specific engagement.
- Engineering and the coordinator may collect and compare quotes. Neither accepts one.
- **Approval record** (written by the owner, kept with the quotes):
  > I approve [engagement] by [name/company] per quote dated [date]: total [fee, currency], timeline [..], re-test
  > terms [..]. [Date, owner.]
- Engineering keeps a status list (not contacted → quote received → approved by owner → started → delivered → accepted),
  in the private review folder, never in the public repository.
- **Order constraints set by the owner:**
  - EX-01 is requested only after D7 is answered;
  - EX-05 starts only after the §9 authorisation is signed.

## 9. EX-05 test authorisation (DRAFT, unsigned; for the owner to complete and sign before any security test)
> **Authorisation for security testing (non-production only).**
> Klarweg ([legal entity, address]) authorises [tester name / company] to perform security testing between [start date
> and time] and [end date and time] ([time zone]) on the following systems **only**: the Klarweg non-production exam
> environment (non-production sign-in Worker and exam Worker, host names given separately and privately). Production
> systems, the main website, payment systems and third-party platforms are out of scope.
> - **Not permitted:** denial-of-service or load testing, social engineering, physical access, testing outside the
>   window, and accessing or keeping data beyond the provided synthetic test accounts.
> - **Findings:** reported privately to [contact] only, and not disclosed to third parties.
> - **Afterwards:** the tester deletes the test credentials and any copied data.
> - **Stopping:** this authorisation can be withdrawn at any time in writing.
>
> [Place, date, name, signature of an authorised Klarweg representative]

Engineering gives the tester the host names and synthetic accounts only after this is signed, and only for the stated
window.
