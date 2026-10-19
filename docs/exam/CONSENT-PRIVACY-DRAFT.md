# DRAFT — Recording consent and learner privacy notice (for EX-01 review)

**Status: DRAFT, NOT IN USE, NOT APPROVED.**
- Prepared 2026-10-19 by engineering as input for the external privacy review **EX-01**. It is not legal advice.
- Text in `[square brackets]` is an open decision; the owner or reviewer must fill it in.
- The learner screen still shows the short placeholder in `exam/js/main.js` (Sprechen intro). This draft replaces it
  only after EX-01 approval, with a new consent version (for example `rec-consent@2`).

## 1. Facts the text relies on (verified in code, main 3354de7)
| Fact | Evidence |
|---|---|
| Recording starts only after an explicit consent per attempt; without consent Sprechen cannot start | `exam/js/main.js` consent checkbox; `exam-worker/src/api.js` `consent()`, chunk upload refuses without consent (`consent_required`) |
| Consent is stored with its version and time; a second identical grant is a no-op | `consents` table, `api.js` `consent()` |
| Recordings are stored only in a private bucket (`klarweg-exam-recordings`), never at a public URL | `exam-worker/wrangler.toml`, `api.js` `env.RECORDINGS.put` |
| Who can listen: the learner (own attempts, after submission) and raters/lead raters with a fresh second factor; never a rater on their own attempt | `learner-recording.test`, `rater-recording.test`, `rater-mfa.test`, `security.test` |
| Raters see a pseudonymous attempt id, not the learner's name or e-mail | `rating-ui-api.test` ("no learner identity") |
| **No AI processing of exam recordings today:** no transcription, no AI pre-rating. SPEAKING-SPEC §6 foresaw an OpenAI sub-processor; it is not implemented | No AI or transcription calls in `exam-worker/src/` |
| Retention/deletion job exists but is **off** and unmerged (PR #76) | PR #76; register OD-21, F4/P-20 |
| No withdrawal route exists | Register F4/P-19 OPEN; SPEAKING-SPEC §6 |

## 2. Short consent text on the Sprechen screen (proposal)
**Deutsch**
> **Aufnahme Ihrer Antworten im Modul Sprechen**
> Damit Ihre Leistung bewertet werden kann, nehmen wir Ihre gesprochenen Antworten auf. Die Aufnahmen werden privat
> gespeichert und nur von zwei geschulten Bewertenden von Klarweg (ohne Ihren Namen) und von Ihnen selbst angehört. Sie
> werden nicht von einer KI ausgewertet und nicht zum Training von KI verwendet. Wir löschen sie [30 Tage nach der
> endgültigen Bewertung]. Sie können Ihre Zustimmung [jederzeit über … widerrufen]. Ohne Zustimmung kann das Modul
> Sprechen nicht durchgeführt werden.
> ☐ Ich stimme der Aufnahme zu. [Datenschutzhinweis lesen]

**English**
> **Recording your answers in the Speaking module**
> To rate your performance, we record your spoken answers. The recordings are stored privately and listened to only by
> two trained Klarweg raters (without your name) and by you. They are not analysed by AI and not used to train AI. We
> delete them [30 days after the final rating]. You can withdraw your consent [at any time via …]. Without consent the
> Speaking module cannot be taken.
> ☐ I agree to the recording. [Read the privacy notice]

## 3. Privacy notice — exam area (proposal; DE is binding for learners, EN/HI as help)
1. **Who is responsible:** [controller: legal name, address, contact e-mail]. [Data protection contact, if required.]
2. **What we process:**
   - account data (e-mail, name) from your Klarweg account;
   - your answers, writing texts and timestamps;
   - recordings of your spoken answers (only after consent);
   - ratings and results;
   - technical data:
     - a device id stored in your browser;
     - request counters per attempt (abuse limits);
     - in the sign-in service, a daily-rotating pseudonymous hash of your network for sign-in and second-factor limits;
   - security and audit logs.
3. **Why:**
   - running the practice exam, saving your answers, rating Schreiben and Sprechen, and showing you your results and
     recordings;
   - preventing misuse (rate limits, single active device per attempt);
   - security.
   [Legal basis per applicable law: DPDP Act 2023 (India) consent / legitimate uses; GDPR Art. 6(1)(a)/(b) if EU learners
   are served — **EX-01 to decide**.]
4. **Recipients:**
   - Klarweg raters (pseudonymised);
   - hosting by Cloudflare (Workers, D1 database, R2 storage) as processor [region/transfer terms per Cloudflare DPA —
     EX-01 to confirm].
   - **No** AI providers process exam data.
   - **No** sale or advertising use.
5. **Retention:**
   - recordings [30 days after the final rating (register OD-21 default; F4/P-20 open)];
   - answers, ratings and results [as long as your account exists / … — **owner to decide**];
   - audit logs [… — **owner to decide**].
6. **Your rights:**
   - access, correction and deletion;
   - withdrawal of recording consent [route, effect — see §4];
   - complaint to [Data Protection Board of India / competent EU authority].
   - Contact: [e-mail].
7. **This is a practice simulation by Klarweg, not an official Goethe-Institut examination** (register OD-45; trademark
   wording subject to EX-07).

## 4. Consent withdrawal and deletion — proposed workflow (decision P-19, not implemented)
| Step | Proposal | Open question for owner / EX-01 |
|---|---|---|
| Where | "Aufnahme-Zustimmung widerrufen" on the attempt's result page, and by e-mail to [contact] | Self-service only, or also by e-mail? |
| Before rating | Withdrawal deletes all recordings of the attempt; Sprechen becomes "nicht bewertet" (no score) | Agree? |
| After rating | Recordings deleted; the score and rater notes stay (they are not the recording) | Keep the score, or void Sprechen? |
| During Sprechen | Recording stops; recorded chunks are deleted; the module is submitted without recording | Allow mid-module? |
| Technical | Mark `consents.withdrawn_at`; delete R2 objects and `recording_chunks`/`recording_turns` rows in one audited job (same mechanism as PR #76 retention) | Deletion deadline (e.g. within 24 h)? |
| Proof | Audit entry `consent_withdrawn` + `recordings_deleted` with counts, no content | – |

## 4a. Technical design for withdrawal (proposal; implement only after P-19 and EX-01)
Reuses the deletion path of PR #76: `deleteAttemptRecordings` (R2 multi-key delete; audit and row deletion in one D1 batch;
retry with backoff; `EXAM_ENABLED` kill switch respected), so there is one tested deletion code path, not two.

| Part | Design |
|---|---|
| API | `POST /exam/v1/attempts/:id/sprechen/consent/withdraw` with `{ request_id }`; owner of the attempt only (404 for anyone else, like every attempt route); idempotent via `request_log` |
| Effect | `consents.withdrawn_at = now` (the column exists); while a Sprechen module is running, its recording stops (client) and uploads are refused (`consent_required`, already enforced) |
| Deletion | Same request queues the attempt for `deleteAttemptRecordings` (deadline from EX-01, e.g. within 24 h). Recordings of a not-yet-rated attempt are deleted; per §4, the score stays or Sprechen is voided — **owner decision** |
| Rater side | `productive` / recording routes return "recording withdrawn" for that attempt; a pending rating round is closed with `rule_flags.consent_withdrawn` |
| Audit | `consent_withdrawn` (who, when, version) and `recordings_deleted` (counts, no content) |
| UI | Result page: "Aufnahme-Zustimmung widerrufen", with confirmation dialog (no browser `confirm`), live-region announcement, keyboard reachable |
| Flag | `EXAM_CONSENT_WITHDRAWAL` default `off`, like every exam capability |
| Tests | Owner-only and idempotency (API); deletion on R2 and D1 including retry (reuse of the PR #76 tests); rater refusal; browser: withdraw → own recording no longer playable → rater sees "withdrawn" |

Dependencies: P-19 (effects in §4), P-20/EX-01 (PR #76 must merge first, because withdrawal reuses its deletion code).

## 5. Questions for the EX-01 reviewer
1. Legal basis and controller details for India (DPDP Act 2023) and, if applicable, the EU (GDPR).
2. Retention for recordings (confirm 30 days after final rating, F4/P-20), for answers and results, and for audit logs.
3. Withdrawal effects (§4) and deadline.
4. Cloudflare as processor: DPA, data location, transfers.
5. Whether the device id (local storage) needs a separate notice.
6. Whether any future AI transcription or pre-rating (SPEAKING-SPEC §6) needs a new consent version (recommended: yes,
   opt-in, separate from recording).
7. Minors: is the exam open to under-18s? If yes, guardian consent rules.
