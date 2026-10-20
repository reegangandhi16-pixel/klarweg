# External review outreach pack — Lesen-only self-practice release

> **Status:** 2026-10-20, prepared by engineering, **nothing sent**. No reviewer has been contacted, appointed or paid,
> and no review has taken place. The drafts below name no person and promise no fee: the owner (or the organiser named
> in decision D3/D6) fills in the brackets, decides on terms and sends them. This file is public, so it contains no
> answer keys. The confidential EX-03 material is shared only directly with appointed reviewers.

Scope of every review: the **proposed** Lesen-only first release (`SELF-PRACTICE-SCOPE.md`). The owner has not yet
adopted it (D1). Evidence per review: `LESEN-ONLY-REVIEW-EVIDENCE.md`. Full-portal briefs: `EXTERNAL-REVIEW-BRIEFS.md`.
Effort figures are engineering estimates for planning, not quotes.

## 0. Common rules for every external reviewer
- **Independence:**
  - Not part of the Klarweg team.
  - Did not write or edit the reviewed material.
  - No financial interest in the outcome beyond the agreed engagement.
  - Declares any conflict in writing before starting (template in §7).
- **Own judgement:** the deliverable records the reviewer's own professional judgement. An AI tool's output is never a
  review (register §B.1). Reviewers may use tools for spelling or formatting only, and must say so.
- **Confidentiality:** no copying, uploading or sharing of the material or results. No use of the material in other
  work. Return or delete confidential files after delivery.
- **Data:** synthetic content and test accounts only. No real learner data exists or is provided.
- **No approval by implication:**
  - Only a signed written deliverable counts. A call, an e-mail "looks fine" or a partly filled record does not.
  - Engineering records the outcome. It never turns a finding into a pass.
- **Production:** none. Testing happens locally or in the isolated non-production environment.

## 1. EX-03 — content review of 90 Lesen items (three people: slots A, B, C)
| | Slot A and slot B | Slot C |
|---|---|---|
| **Profile** | Experienced B1 German teacher (A and B are two different people) | Native German linguist |
| **Requirements** | Teaches or examines at B1 level; familiar with the public Goethe-Zertifikat B1 format | Native speaker; linguistics or professional item-writing/editing background |
| **Records** | Verdict per item; `ambiguity_risk`, `inference_demand`, `distractor_strength` | Verdict per item; item accessibility; per-form originality sign-off |

- **Scope:** Lesen Teil 1–5 of the candidate forms P3, P8, P13 (30 scored items each).
- **Effort:** about 45–75 min per form per reviewer, so roughly 2–4 h each for three forms.
- **Material** (private, only directly to the appointed person): packet `EX-03-LESEN-RC-2026-10-20`. It contains the
  fillable forms, the sheets, the response templates and the README with the full rules.
- **Deliverable:** one returned record per form (`P3-A.json`, …), plus a short signed confirmation (§7).
- **Rules** (register §C.1, locked):
  - Three different people.
  - Independent verdicts before any discussion.
  - No vote, no override and no carry-forward to a changed version.
  - **No use of the commercial reference book in any form.**
- **Additional COI rule:** the reviewer did not tutor, author or advise on Klarweg exam content before.

### Reviewer steps (also in the packet README §3–§5)
1. Open `Pn-review-form-lesen.html` in a browser. It works offline and needs no installation.
2. Choose your slot (A, B or C). Enter a pseudonym as reviewer id, the date, and whether you are a native speaker.
3. For each of the 30 items, read the text, the item, the marked key, the explanation and the evidence quote. Then record:
   - **verdict:** `approve`, `revise` or `reject`;
   - **A and B:** the three ratings;
   - **C:** the accessibility verdict;
   - **a note:** required for every `revise`, `reject`, or ambiguity of 1 or more. Quote the words you mean.
4. Slot C: record the originality sign-off for the whole form.
5. When the counter at the top says **"Complete: 30 of 30"**, click **Download record**, which saves `Pn-<slot>.json`.
   Entries are kept in the browser in the meantime, and **Resume from a record** continues from a downloaded file.
6. Return the three files to the organiser. Never change the fingerprints in a file; a record of another version does
   not count.
7. The organiser, or engineering on the organiser's behalf, checks each file with
   `node exam-content/tools/review-status.mjs --check <file> --module lesen`. The answer is "READY TO RETURN", or a list
   of what must be fixed and what is still empty. Any problem goes back to the reviewer, who corrects it in the form
   (Resume from a record).

### E-mail draft (German; adapt for slot C)
> **Betreff:** Anfrage: unabhängige Fachprüfung von B1-Leseaufgaben (ca. 2–4 Stunden)
>
> Guten Tag [Anrede Name],
>
> wir entwickeln bei Klarweg eine Online-Übungsplattform für Deutschlernende, die sich auf das Goethe-Zertifikat B1
> vorbereiten. Bevor Lernende die ersten Leseübungen nutzen, sollen drei unabhängige Fachleute jede Aufgabe prüfen. Wir
> suchen dafür [eine erfahrene B1-Lehrkraft / eine muttersprachliche Linguistin bzw. einen muttersprachlichen Linguisten].
>
> - **Umfang:** 90 Leseaufgaben (drei Übungssätze, Lesen Teil 1–5). Pro Aufgabe ein Urteil (freigeben /
>   überarbeiten / ablehnen), dazu kurze Einschätzungen und bei Bedarf eine Anmerkung.
> - **Aufwand:** etwa 2–4 Stunden, frei einteilbar, mit einem Offline-Formular im Browser.
> - **Unabhängigkeit:** Sie haben an den Aufgaben nicht mitgearbeitet und prüfen unabhängig von den anderen beiden
>   Fachleuten. Vor Beginn bitten wir um eine kurze Erklärung zu möglichen Interessenkonflikten und um
>   Vertraulichkeit.
> - **Ergebnis:** Ihre ausgefüllten Prüfbögen und eine kurze unterschriebene Bestätigung.
> - **Vergütung und Zeitrahmen:** [vom Absender einzusetzen].
>
> Wenn Sie grundsätzlich Interesse haben, sende ich Ihnen gern die vollständige Beschreibung. Die Unterlagen selbst
> erhalten Sie nach Ihrer Zusage.
>
> Mit freundlichen Grüßen
> [Name, Funktion, Klarweg]

## 2. EX-01 — privacy review (no recordings in this scope)
- **Profile:** data-protection lawyer or certified DPO with GDPR experience in online education or consumer apps.
- **Scope:**
  - the processing for the Lesen-only release: account (existing klarweg-access), exam attempts, answers with
    timestamps, results, audit log, Worker logs;
  - storage location (Cloudflare);
  - retention (decision D7);
  - the privacy notice;
  - whether the existing site privacy notice covers the exam area.

  Recording and consent texts are **out of scope** for Lesen-only.
- **Material:** `LESEN-ONLY-REVIEW-EVIDENCE.md` §EX-01 (data inventory checked against the code);
  `CONSENT-PRIVACY-DRAFT.md` §3 (draft notice, written for the full portal); the controller's details (owner).
- **Effort:** about 1–2 days.
- **Deliverable:** a written opinion: cleared, or the list of required changes (notice text, legal basis, retention,
  processors).
- **Additional COI rule:** not the author of Klarweg's existing privacy documents, unless the owner explicitly accepts
  that.

### E-mail draft (English; German on request)
> **Subject:** Request: GDPR review of a small online practice-exam feature (est. 1–2 days)
>
> Dear [name],
>
> Klarweg is preparing a self-practice reading module for German learners. Learners sign in, answer 30 reading items
> on a server timer and see their result and explanations. There are no audio recordings and no third-party analytics
> in this feature. Before any learner uses it, we would like an independent GDPR review covering:
> - the data processed;
> - the retention period;
> - the privacy notice;
> - whether our existing site notice covers the feature.
>
> We would provide a code-verified data inventory and a draft notice. The deliverable would be a written opinion or a
> list of required changes.
>
> Could you let us know whether this is within your practice, your availability, and your terms? [Timeline/fee:
> to be set by the sender.]
>
> Kind regards,
> [name, role, Klarweg]

## 3. EX-04 — accessibility audit (WCAG 2.2 AA, Lesen screens)
- **Profile:** accessibility auditor with hands-on screen-reader testing (NVDA, VoiceOver macOS and iOS) and WCAG 2.2
  reporting experience; ideally includes a tester who uses assistive technology daily.
- **Scope:** checklist rows 1–5, 9, 12–15 and 18:
  - start screen;
  - Lesen items and save state;
  - timer and navigation;
  - review step;
  - result and item review;
  - error, cookie and sign-in screens;
  - visual, reflow/zoom, motion.

  Setups: NVDA + Firefox, VoiceOver macOS + Safari, VoiceOver iOS, keyboard only, 200 % zoom and 320 px.
- **Material:**
  - the private checklist `EX-04-manual-accessibility-checklist.md` (setup, rows, the Lesen-only section);
  - the local demo `npm run exam:demo -- <port> practice --module-only=lesen`. Engineering can run it for a remote
    session on request.
- **Effort:** about 1–2 days, plus a re-test of fixed rows.
- **Deliverable:** a signed report listing findings with severity and the WCAG criterion, plus the re-test result.
- **Already done internally (not a substitute):** an automated audit of names, ids, `lang`, one h1 and visible focus,
  with 0 findings.

### E-mail draft
> **Subject:** Request: WCAG 2.2 AA audit of a small web exam module (est. 1–2 days)
>
> Dear [name],
>
> we would like an independent accessibility audit of a German-language reading-practice module: start screen, 30
> timed reading items, a review step, and the result with item explanations. Please test with NVDA, VoiceOver
> (macOS/iOS), keyboard only, and 200 % zoom / 320 px. We provide a checklist with setup steps and a local demo build.
> The deliverable would be a signed report with findings, severity and WCAG references, and a re-test after our fixes.
>
> Are you available, and what are your terms? [Timeline/fee: to be set by the sender.]
>
> Kind regards,
> [name, role, Klarweg]

## 4. EX-05 — security review / penetration test (non-production only)
- **Profile:** penetration tester or firm with web-API experience (session cookies, authorization, IDOR), ideally with
  Cloudflare Workers. A certification such as OSCP/OSWE, or equivalent references, is helpful.
- **Scope:**
  - the learner API through the klarweg-access proxy, in the **isolated non-production environment only**;
  - attempt ownership (IDOR), lease replay, forged sequence numbers, media tokens, CSRF, and leakage of keys or
    explanations before submission;
  - the Lesen-only switches: full or other-module attempts, invalid `EXAM_MODULE_ONLY` / `EXAM_RELEASE_FORMS`, open
    attempts on unlisted forms;
  - staff 2FA (replay, limits, lockout, recovery codes, header injection);
  - the cookie probe, CSP, upload limits.

  Out of scope: production, Cloudflare's platform, payments, chapter pages.
- **Rules of engagement** (owner signs before testing):
  - written authorization naming the tester, the non-production hosts and the time window;
  - no denial-of-service and no social engineering;
  - findings reported privately.
- **Material and access:** `EXTERNAL-REVIEW-BRIEFS.md` §EX-05 (checklist), `LESEN-ONLY-REVIEW-EVIDENCE.md` §EX-05, read
  access to the repository. Engineering creates the synthetic non-production test accounts (learner, rater with TOTP
  enrolment, no-role) once the owner names the tester.
- **Effort:** about 3–5 days, plus a re-test.
- **Deliverable:** a report with severity per finding. Pass = 0 high or critical (MOCK M-23). Then a re-test report.

### E-mail draft
> **Subject:** Request: penetration test of a small Cloudflare Workers API (non-production, est. 3–5 days)
>
> Dear [name],
>
> we are looking for an independent security test of an online practice-exam API, before any learner uses it. The
> stack is Cloudflare Workers with D1 and R2, a session-cookie sign-in Worker that proxies to a private exam Worker, and
> TOTP 2FA for staff. Testing would take place only in an isolated non-production environment with synthetic accounts,
> under a written scope and authorization. We provide a test checklist, repository read access and the test accounts.
> The deliverable would be a findings report with severity, and a re-test.
>
> Could you share your availability, approach and terms? [Timeline/fee: to be set by the sender.]
>
> Kind regards,
> [name, role, Klarweg]

## 5. EX-07 — trademark review of "Goethe" references
- **Profile:** German trademark/IP lawyer (Markenrecht), ideally with experience in education or exam-preparation
  marketing.
- **Scope:**
  - **Exam portal:** "Goethe" appears only in the mandatory result disclaimer ("… kein offizielles Ergebnis des
    Goethe-Instituts"; `exam/js/render.js`, `exam-worker/src/core.js`).
  - **Main site:** 58 HTML pages mention "Goethe" (count at main `5f06359`). The most frequent forms are
    "Goethe Mini" (≈ 108), "Goethe-Zertifikat" (≈ 79), "Goethe-style" (≈ 63) and "Goethe Exam" (≈ 45).
- **Questions:**
  1. Is nominative use with the disclaimer sufficient?
  2. Are product names such as "Goethe Mini" acceptable?
  3. What marketing wording is acceptable?
  4. Is a disclaimer needed on every page?
- **Effort:** about 0.5–1 day.
- **Deliverable:** a written opinion and a list of required wording changes. Engineering applies the exam-portal
  changes; site changes need the owner's go-ahead.

### E-mail draft (German)
> **Betreff:** Anfrage: markenrechtliche Einschätzung zur Nennung „Goethe“ auf einer Lernplattform
>
> Guten Tag [Anrede Name],
>
> Klarweg ist eine Online-Lernplattform für Deutsch, die unter anderem auf das Goethe-Zertifikat B1 vorbereitet. Wir
> bitten um eine kurze schriftliche Einschätzung:
> - ob und wie wir „Goethe“ in Produktbezeichnungen und Werbetexten verwenden dürfen (z. B. „Goethe Mini“,
>   „Goethe-style“);
> - ob unser Hinweis „kein offizielles Ergebnis des Goethe-Instituts“ ausreicht;
> - welche Formulierungen Sie empfehlen.
>
> Eine Übersicht der betroffenen Stellen stellen wir bereit. Aufwand nach unserer Schätzung: etwa ein halber bis ein
> Tag.
>
> Wären Sie verfügbar, und zu welchen Konditionen? [Zeitrahmen/Honorar: vom Absender einzusetzen.]
>
> Mit freundlichen Grüßen
> [Name, Funktion, Klarweg]

## 6. Sending order (suggested; the owner decides, D6)
1. **EX-03** (all three slots at once). It is the longest path and blocks every learner form.
2. **EX-05 and EX-04** in parallel. Both work on the current build, and their findings may need engineering fixes.
3. **EX-01** after D7 (retention), so the reviewer sees the final data handling.
4. **EX-07** at any time. It also concerns the main site.

## 7. Templates for the reviewer's written confirmations
**Independence and confidentiality (before starting):**
> I, [name], confirm that I am not part of the Klarweg team, did not write or edit the material I am asked to review,
> and have no interest in the outcome beyond this engagement, except: [none / describe]. I will keep the material and
> my findings confidential, use them only for this review, and return or delete the material after delivery.
> [Place, date, signature]

**Delivery (with the deliverable):**
> I, [name], confirm that the attached [records/report] for [review ID, scope, version or fingerprints] reflect my own
> professional judgement, made independently. [Tools used, if any, for formatting or spelling only: …].
> [Place, date, signature]
