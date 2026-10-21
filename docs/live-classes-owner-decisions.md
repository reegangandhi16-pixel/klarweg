# Live Classes — owner decision sheet

The single record of the owner's Live Classes decisions. Part A is **settled**: approved by the owner on 2026-10-20 and implemented in `live-classes-data.js`. Part B is **still pending**.

**D8: waitlist launch, approved by the owner on 2026-10-20.** The page is public: the teacher profile `reegan-gandhi` and the course `live-a1` are published, `live-a1` as a **waitlist** (no start date; enrolment not open; no course fees accepted). Every other teacher and course stays `draft: true`. Terms §4A, Privacy §4A and the Refund Policy describe the live service. `npm run live:readiness` must show no blockers while the page is allowlisted.

**Paid course enrolment is not authorised.** It needs a real start date and complete payment arrangements; see part B.

Settled earlier:
- **D1:** live classes, yes.
- **D2:** teacher profile `reegan-gandhi`, fully confirmed.
- **Homepage FAQ:** Variant A, merged.

---

## A. Settled decisions (owner-approved 2026-10-20)

### D3 · First course: Beginner German · A1 (`live-a1`)

| Field | Approved |
|---|---|
| Teacher | Reegan Gandhi (`reegan-gandhi`); explanations in Hindi and English |
| Level and outcomes | A1. Introduce yourself and talk about daily routines · build present-tense sentences with correct word order · handle simple everyday situations in speech and writing |
| Format and batch size | Group batch: up to 8 learners, runs with at least 4 |
| Schedule | Mon · Wed · Fri, 7:30–9:00 pm IST; 90-minute classes |
| Length | 12 weeks: 36 classes, 54 hours |
| Materials | the teacher's class notes and PDF worksheets; homework with written feedback |
| Exam | prepares for Goethe-Zertifikat A1: Start Deutsch 1; exam fee not included |
| Fee | **₹7,999** for the complete course |
| Payment terms | ₹7,999 before the first class, **or** two instalments: ₹4,000 before the start and ₹3,999 before week 7 |
| Start date | **not set.** Enrolment shows "Waitlist" until a date is set; the validator refuses "open" without one. |

### D4 · Consultation

- **Price and format:** ₹100 for 20 minutes on Google Meet.
- **Payment:** by UPI, after the time is confirmed by email; the joining link follows payment.
- **Adjustment:** the fee is deducted from a live course fee if the learner enrols within 7 days.
- **Klarweg cancels:** the learner chooses a full refund or a new time.
- **Learner cancels:** one free reschedule with at least 12 hours' notice. A consultation missed without notice is not refunded.

In the data file: `termsConfirmed: true`, `durationMinutes: 20`, `platform: 'Google Meet'`, `adjustmentDays: 7`, `cancellation`.

### D5 · Live-class policies

The four texts for missed classes, cancellation and refunds, scheduling, and what the fee includes are set in `policies` and shown in the page FAQ. They cover live classes only. The self-paced Refund Policy and its 7-day guarantee are unchanged and do not apply to live classes.

### D6 · Product and privacy choices

- A live course does **not** include self-paced course access.
- Consultation and course-interest request emails are kept for 12 months after the last contact, then deleted by hand from the Gmail inbox. This is a manual commitment; the site has no automatic deletion.
- Live classes are not recorded.
- The only teacher is the owner; no other teachers are engaged.

### D7 · Payment for the first batch

Payment is by **manual UPI or bank transfer**, on a payment request sent by email; places are confirmed by email once payment is received.
- The Live Classes page takes no money.
- Live fees **do not** use the Cashfree checkout. Every paid Cashfree order is fulfilled by `grantProduct()`, which unlocks self-paced content. A static test keeps live products out of that catalogue.
- No payment backend is built for the first batch.

### D9 · A1 course fee per teacher (owner, 2026-10-21)

The fee for the A1 course with each teacher, shown on that teacher's row of the Live Classes page. It is set in one place, `coursePricing` in `live-classes-data.js`.

| Teacher (id in `live-classes-data.js`) | A1 course fee |
|---|---|
| `reegan-gandhi` | ₹7,999 |
| `geetika-dhawan` | ₹7,999 |
| `priyanshi-verma` | ₹15,000 |
| `sunidhi-jain` | ₹14,000 |
| `mansi-kapoor` | ₹13,000 |
| `gaurav-singhal` | ₹12,000 |
| `kanika-taneja` | ₹14,000 |
| `trisha-khanna` | ₹13,000 |
| `rashi-gupta` | ₹12,000 |
| `deepika-agarwal` | ₹13,000 |
| `sahil-arora` | ₹15,000 |

- **No crossed-out price is shown.** For `reegan-gandhi` and `geetika-dhawan` the owner also named an "original price" of 15000. The page shows only ₹7,999. A struck-through reference price is shown only once the owner confirms the course was actually sold at that price; otherwise it would be an invented discount.
- Enrolment rules are unchanged: `live-a1` is a waitlist, and no course fee is taken on the page (D7).
- The validator requires `reegan-gandhi`'s fee to equal the published `live-a1` fee.

---

## B. Still pending

- [ ] **Legal review of the published Terms, Privacy and Refund Policy wording.** The owner approved publishing the live-class wording on 2026-10-20 (D8). It is based on [`live-classes-review-drafts.md`](live-classes-review-drafts.md), with every undecided point left out rather than invented: the published Terms say these are set out in the written course terms before anyone pays, and no course fee is accepted until then. **No lawyer has reviewed it.** A review by a qualified lawyer is still recommended before paid enrolment opens; the review drafts hold the brief, questions Q1–Q15 and a copy-ready email.
  `Legal review status: owner-approved for publication on 2026-10-20; not reviewed by a lawyer`
- [ ] **Accounting follow-up for manual payments.** [`live-classes-accounting-handoff.md`](live-classes-accounting-handoff.md) is the accountant's package:
  - the facts;
  - the questions: receipts or invoices, GST, payment-record retention, instalments;
  - a draft payment register with a reconciliation procedure;
  - a copy-ready email.
  Nothing on the site claims these are settled.
- [ ] **Business rules not yet decided.** Settle these with the lawyer and the accountant; they are Q3–Q5 and Q9 in the review drafts.
  - How "the classes still to come" is refunded in the first two weeks, including for instalment payers.
  - What happens if the second instalment is not paid before week 7.
  - Which payment the ₹100 consultation deduction reduces, and whether it is refundable if the learner then cancels.
  - Whether minors may join live classes, and with what consent.
- [ ] **A1 start date.** Not set. Set it at least 3 weeks ahead. Then `nextBatch` gets the date.
- [x] **D8 launch go-ahead: waitlist launch (2026-10-20).** Done in one PR:
  1. Terms §1, §2, §4A, §5; Privacy §1, §2, §4, §4A, §8, §9, §11; Refund Policy "How it works" and "What's covered";
  2. `draft: true` removed from `reegan-gandhi` and `live-a1` only;
  3. `npm run live:readiness` shows no blockers;
  4. the three files in `.github/pages-allowlist.txt`, nav/footer links, the sitemap entry, `noindex` removed, canonical link added;
  5. the homepage FAQ names the A1 waitlist (enrolment not open, start date not announced).
- [ ] **Opening paid enrolment for `live-a1` (not authorised yet).** Needs all of:
  1. a real start date in `nextBatch`;
  2. the business rules above settled and added to the written course terms;
  3. the accounting follow-up (receipts or invoices, tax, record retention);
  4. the UPI ID or bank details to put on payment requests;
  5. `enrolment: 'open'`, then update the homepage FAQ and Terms §4A ("Enrolment … is not open yet"); the readiness check flags both if they still say it is closed or claim it is open.
- [ ] *Optional:* a teacher photo (4:3, at least 800×600) and an availability line.

## Reply template (pending items only)

```
Legal review: approved as drafted / approved with edits: … / lawyer review first
Accounting (receipts, tax, record keeping): handled by: …
Instalment refunds / missed 2nd instalment / consultation deduction / minors: …
A1 start date: …
Open paid enrolment for A1: not yet / go (start date: …)
Photo / availability (optional):
```
