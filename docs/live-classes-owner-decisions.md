# Live Classes — owner decision sheet

The single record of the owner's Live Classes decisions. Part A is **settled**: approved by the owner on 2026-10-20 and implemented in `live-classes-data.js`. Part B is **still pending**.

**The launch is on hold (D8).** The teacher profile and the first course stay `draft: true`, and the page stays `noindex` and off the Pages allowlist, sitemap and navigation. `npm run live:readiness` lists what still blocks it.

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

---

## B. Still pending

- [ ] **Legal review of the Terms and Privacy wording.** The drafts in [`live-classes-review-drafts.md`](live-classes-review-drafts.md) now reflect every decision above, but the wording is **not approved for publication**. A review by a qualified lawyer is recommended. Until it is approved, `terms.html`, `privacy.html` and `refund-policy.html` stay unchanged (a static test checks this while the status line below says pending).
  `Legal review status: pending`
- [ ] **Accounting follow-up for manual payments.** Decide with an accountant:
  - receipts or invoices;
  - tax treatment;
  - how long payment records are kept.
  Nothing on the site claims these are settled.
- [ ] **A1 start date.** Set it at least 3 weeks ahead once the launch is approved. Then `nextBatch` gets the date and enrolment can become "open".
- [ ] **D8 launch go-ahead (on hold).** After the legal review, launching is mechanical:
  1. apply the approved Terms/Privacy text;
  2. remove `draft: true` from `reegan-gandhi` and `live-a1`;
  3. `npm run live:readiness` must show no blockers;
  4. add the three files to `.github/pages-allowlist.txt`, add the nav/footer links and the sitemap entry, remove `noindex`, and add a canonical link;
  5. switch the homepage FAQ to Variant B.
  Merging that PR deploys the page.
- [ ] *Optional:* a teacher photo (4:3, at least 800×600) and an availability line.

## Reply template (pending items only)

```
Legal review: approved as drafted / approved with edits: … / lawyer review first
Accounting (receipts, tax, record keeping): handled by: …
A1 start date: …
D8 launch: not yet / go
Photo / availability (optional):
```
