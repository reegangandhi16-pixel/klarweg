# Live Classes — owner decision sheet

**One review point for everything that still needs the owner.** Every value marked **PROPOSED** is a suggestion, not approved, not published and not legal advice. Nothing here is on the site.

The page shows these proposals only after the owner approves them and they are copied into `live-classes-data.js` (and, for legal text, into `terms.html` / `privacy.html`). Until then the validator and the launch gate keep the page unpublished (`npm run live:readiness`).

Already settled, so not in this sheet:
- **D1:** live classes, yes.
- **D2:** teacher profile `reegan-gandhi`, fully confirmed but still a draft.
- **Homepage FAQ:** Variant A, merged.

**How to answer:** for each item, reply "approve", or "approve with: …", or "no: …". A short reply template is at the end.

---

## D3 · First live course (PROPOSED)

The confirmed teacher teaches A1–B2 (Goethe preparation A1–B1). A beginner group is the easiest course to fill and to run first.

| Field | Proposed | Notes |
|---|---|---|
| Title | Beginner German · A1 | the `live-a1` draft entry, already linked to the teacher |
| Level | A1 (CEFR) | |
| Teacher | Reegan Gandhi | explanations in Hindi and English |
| Outcomes | Introduce yourself and talk about daily routines · build present-tense sentences with correct word order · handle simple everyday situations in speech and writing | the current draft objectives |
| Format | Group batch | |
| Batch size | up to 8 learners; runs with at least 4 | small enough that everyone speaks every class |
| Schedule | 3 classes a week, Mon · Wed · Fri, 7:30–9:00 pm IST | weekday evenings suit working learners and students |
| Session length | 90 minutes | |
| Course length | 12 weeks: 36 classes, 54 hours of live teaching | |
| Start date | **none proposed.** Set it once D4–D7 are decided, at least 3 weeks ahead so people can enrol. | no date from the old brief is reused |
| Enrolment status | "Waitlist" as soon as the fee is approved; "Open" only once a start date and the payment method exist | the validator enforces this |
| Materials | the teacher's class notes and worksheets (PDF), homework with written feedback | optional extra: Klarweg A1 self-paced access (see D6) |
| Exam | prepares for **Goethe-Zertifikat A1: Start Deutsch 1**; the exam fee is not included | the teacher's confirmed exam-prep range covers A1 |
| Fee | **₹7,999** for the full course (about ₹148 per hour of live teaching) | Not checked against competitors; no market data is in the repository. Compare before approving. For reference, Klarweg's self-paced A1 is ₹1,999. |
| Payment terms | full fee before the first class, **or** two instalments: ₹4,000 before the start and ₹3,999 before week 7 | |

*Once approved, the values go into `live-a1` and `draft` is removed at launch (D8). The validator checks that the level is taught by the teacher and that "open" has a fee, start date, schedule, length and batch size.*

## D4 · Consultation terms (PROPOSED)

| Item | Proposed |
|---|---|
| Fee | ₹100 (unchanged from the original brief) |
| Length and platform | 20 minutes on Google Meet |
| Adjustment | deducted from the course fee if the learner enrols within 7 days (unchanged) |
| Payment | by UPI after the time slot is confirmed by email; the joining link follows payment (this matches the page today) |
| Klarweg cancels | full refund, or a new slot if the learner prefers |
| Learner cancels | one free reschedule with at least 12 hours' notice; a missed consultation without notice is not refunded |

*Once approved:*
- set `durationMinutes: 20` and `platform: 'Google Meet'`;
- set `termsConfirmed: true`;
- copy the cancellation lines into the Terms draft (§4A).

## D5 · Live-class policies (PROPOSED wording)

Each text is written to go straight into `policies` in `live-classes-data.js`, where it replaces the "not published yet" answer in the page FAQ.

**Missed class (`missedClass`)**
> Group classes are not recorded, and a missed group class is not refunded or repeated individually. Your teacher shares the class notes and homework so you can catch up, and you can bring questions to the next class. One-to-one lessons can be moved free of charge with at least 24 hours' notice.

**Cancellation and refunds (`cancellationRefund`)**
> If you cancel at least 48 hours before the first class, your course fee is refunded in full. If you cancel during the first two weeks of the course, we refund the classes still to come; after that, course fees are not refunded. If Klarweg cancels or postpones a course and the new dates don't suit you, we refund everything not yet delivered. The 7-day guarantee in our Refund Policy covers self-paced purchases only, not live classes.

**Scheduling (`scheduling`)**
> Group batches run on a fixed timetable in Indian Standard Time, shown on the course before you enrol. If a class has to move, we tell you at least 24 hours in advance and schedule a replacement class. One-to-one lessons are scheduled directly with your teacher.

**What the fee includes (`feeIncludes`)**
> The course fee covers every live class in the course, the teacher's class notes and worksheets, and written feedback on your homework. Goethe exam fees are not included.

The last sentence ends differently if a live course includes self-paced access (D6).

*Decision behind "not recorded":* recording would need consent, storage and a retention rule in the Privacy Policy. Not recording keeps the Privacy text simple.

## D6 · Terms of Service and Privacy Policy

The full proposed wording is in [`live-classes-review-drafts.md`](live-classes-review-drafts.md), updated to the page as built. The choices needed:
- [ ] Does a live course include self-paced access to its level? *Proposed: no*, so the products stay separate and nothing changes in the access system.
- [ ] Teachers: Klarweg itself, or independent tutors? *Today the only teacher is the owner*, so the Klarweg wording applies.
- [ ] How long consultation and interest emails are kept. *Proposed:* 12 months after the last contact, deleted by hand from the inbox. The site has no automatic deletion, so this is a manual commitment.
- [ ] Removal for disruption: no refund for the classes already held, a pro-rata refund for the rest. *Proposed.*
- [ ] Approve the Terms/Privacy drafts as written, with edits, or after a lawyer's review.

## D7 · How live fees are collected

What the repository shows:
- The Cashfree checkout (`access/worker/src/orders.js`) only sells the self-paced products in `products.js`.
- Every paid order is fulfilled by `webhooks-cashfree.js` calling `grantProduct()`, which **unlocks self-paced course content**.
- A live course added to that catalogue would be fulfilled the same way, which is wrong. It would need its own fulfilment path, database changes and tests in the payment backend.

| Option | Work | Fit for the first batch |
|---|---|---|
| **A. Manual UPI / bank transfer.** The payment request is sent by email after the consultation, and the receipt is confirmed by email. | none in code; keep a simple payments record | **Proposed** for the first batch |
| **B. A Cashfree payment link** created in the Cashfree dashboard per learner or per batch | none in code; only if the merchant account offers payment links (not verified here) | good once there are more learners |
| C. A live-course product in the Klarweg checkout | backend changes, new fulfilment, tests | not before demand is proven |

The page already promises only what A and B deliver: "We confirm your place and payment by email. Nothing is charged until you agree." Invoicing and tax treatment are a question for an accountant, not something decided here.

## D8 · Launch go-ahead

After D3–D7, launching is mechanical. The checklist is at the top of `live-classes.html`:
1. Copy the approved values into `live-classes-data.js`.
2. Remove `draft: true` from `reegan-gandhi` and `live-a1`.
3. Apply the approved Terms and Privacy text.
4. `npm run live:readiness` must show no blockers.
5. Add the three files to `.github/pages-allowlist.txt`, add the nav and footer links and the sitemap entry, remove `noindex`, and add a canonical link.
6. Swap the homepage FAQ to Variant B.

Merging that PR deploys the page.

Optional: a teacher photo (4:3, at least 800×600) and an availability line.

---

## Reply template

```
D3 first course: approve / approve with: … / no: …
   fee ₹7,999 and instalments: approve / change to: …
D4 consultation (₹100, 20 min, Google Meet, UPI, refund if we cancel): approve / with: …
D5 policies as written: approve / with: …
D6 self-paced access included in live course: no / yes
   email retention 12 months: approve / change to: …
   Terms/Privacy drafts: approve / with edits / lawyer first
D7 payment: A manual UPI / B Cashfree link / C build checkout
D8 launch: not yet / go (after the above)
Photo / availability (optional):
```
