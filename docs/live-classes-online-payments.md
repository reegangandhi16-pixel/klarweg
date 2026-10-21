# Live Classes: online payments (₹100 demo booking and course fees)

Status: **built and tested; every switch OFF.** No live credentials, no Worker deploy, no migration applied. Nothing on the published site takes money.

This replaces email as the way to book. A learner pays on the page, and the page confirms the booking or enrolment only after the access Worker has verified the payment with Cashfree's API. Email is never the booking mechanism. When online booking is on, the emailed "consultation request" option is removed from the form; the free "tell me when a course opens" request stays.

Related: [`live-classes-consultation-booking.md`](live-classes-consultation-booking.md) (the ₹100 booking in detail), [`live-classes-owner-decisions.md`](live-classes-owner-decisions.md) (decision sheet).

## 1. The two flows

### Demo booking: ₹100 (`kw-consult.js`, `/consult/*`, `cons_…` orders)

1. The learner chooses a teacher and one of today's slots (15:00, 15:20 or 15:40 IST; booking is open 09:00–12:00 IST). The fee, **₹100**, is shown before payment.
2. The learner signs in and adds a phone number, which Cashfree requires.
3. The Worker holds the slot for 20 minutes and creates the Cashfree order for ₹100. The amount is fixed on the server.
4. The learner pays in Cashfree's checkout and returns to `live-classes.html?consult_ref=KWC-…#book`.
5. The page asks the Worker for the status. The Worker checks the order with Cashfree. The page then shows one of:
   - **Booked**: reference, teacher, time, joining link from a Worker secret;
   - **Payment not completed yet**, with **Continue payment**, which reopens the same order;
   - **Being checked**: paid but the slot could not be confirmed, so a person refunds it;
   - **Not completed**: the hold lapsed.

### Full course payment (`kw-enrol.js`, `/enrol/*`, `enrp_…` orders)

1. The course card shows the fee (₹7,999 for Beginner German · A1) and an **Enrol and pay online** button.
2. The learner chooses the course; the list and the fee come from the Worker. The fee is paid **in full, in one payment** (₹7,999 for A1). There are no instalments (owner decision D10): the Worker refuses any other plan with `400 bad-plan` and has no route for a second payment.

   The Worker's catalogue (`LIVE_COURSES` in `access/worker/src/enrolments.js`) is a copy of the published fee. A test fails if the two differ. The Worker charges only for a course in that catalogue that is also open in `ENROL_COURSES` with a batch date; the per-teacher prices in `coursePricing` are display prices and sell nothing by themselves.
3. After sign-in and a phone number, the page shows the server's quote: course fee, any consultation adjustment, and **due now, in full**. The learner ticks that they have read the course details, the cancellation and refund terms, and the Terms, then pays.
4. The Worker holds a place for 30 minutes and creates the Cashfree order. The batch has 8 places; the last place goes to exactly one learner.
5. The learner returns to `live-classes.html?enrol_ref=KWE-…#enrol`. The page shows the Worker's verified status:
   - **You are enrolled**: reference and amount paid in full; nothing more is due;
   - **Payment not completed yet**, with **Continue payment**;
   - **Being checked**;
   - **Not completed**.
6. A signed-in learner sees "Your enrolments" on the page on any device.

A live-course payment never grants self-paced access. It never calls `grantProduct()` and never touches `orders` or `user_entitlements`. Tests check both.

## 2. Payment safety: how each rule is enforced

| Requirement | Implementation |
|---|---|
| Amount built on the server | The Worker computes every amount from `LIVE_COURSES` and `FEE_PAISE`. Any amount the browser sends is ignored. The browser sends only `expected_amount_paise` (the amount it showed); a mismatch is refused with `409 amount-changed` and a fresh quote, before any order is created. |
| Confirm only after verified payment | A booking or enrolment is confirmed only when Cashfree's **Get Order API** reports `PAID` for exactly the order's amount in INR. The return redirect and the webhook body are treated as hints only. |
| Signed webhooks | HMAC-SHA256 over `timestamp + raw body`, compared in constant time, with a 5-minute replay window. A bad or stale signature gets `401` and nothing is read. |
| Duplicate webhooks, refresh, retry, back | The same course, or the same slot, resumes the **same** Cashfree order (`x-idempotency-key` = order id). If that order has lapsed while the place is still held, the old attempt is released and a new order is opened for the same seat. A paid payment is never applied twice. Partial unique indexes allow one open or paid payment per enrolment and one active enrolment per learner and batch. |
| Duplicate charge | If a second order for the same enrolment is paid, it is recorded as `review` / `duplicate-payment` for a refund (an old order paid after the learner re-enrolled is `late-payment-already-enrolled`). It is never counted towards the fee. |
| Failed, cancelled, expired | Failure and drop webhooks change nothing; the order stays retryable until it expires. An expired hold releases the place. |
| Late payment | A payment that arrives after the hold lapsed takes a free place if one exists. If the batch filled or started, it goes to `review` for a refund. |
| Amount or currency mismatch | The payment goes to `review` and is never counted. |
| Lost webhook | The status screen and a scheduled job (`scheduled()` in `index.js`) re-check open orders with Cashfree. |
| Secrets | `CASHFREE_SECRET_KEY` and `CASHFREE_WEBHOOK_SECRET` are Worker secrets only. The browser holds only the payment session id. |
| Production interlock | `ENROL_PAYMENTS` / `CONSULT_BOOKING = "sandbox"` works only with `CASHFREE_ENV = "sandbox"` and a TEST app id. `"live"` works only with production. The predeploy guard refuses any switch turned on without its explicit flag. |

## 3. Switches (all off today)

| Where | Switch | Today |
|---|---|---|
| `live-classes-data.js` | `consultation.onlineBooking.enabled` | `false`. The validator needs `ownerApproval`, `legalTermsUpdated`, `joinLinksConfigured`. |
| `live-classes-data.js` | `liveEnrolment.enabled` | `false`. The validator needs `ownerApproval`, `legalTermsUpdated`, a published course with `enrolment: 'open'`, and course `paymentTerms` that no longer mention an emailed payment request. |
| `wrangler.toml` | `CONSULT_BOOKING` | `"off"` |
| `wrangler.toml` | `ENROL_PAYMENTS` | `"off"` |
| `wrangler.toml` | `ENROL_COURSES` | `""`, e.g. `'{"live-a1":{"batch":"2026-11-02"}}'`. The guard checks that the course is sold by the Worker, published as `open`, and has a date. |
| `wrangler.toml` | `ENROL_CONSULT_CREDIT` | `"course-fee"` (owner decision D11, P1). It changes nothing while `ENROL_PAYMENTS` is off. |
| `wrangler.toml` | `CASHFREE_ENV` | `"sandbox"` (TEST app id) |

## 4. Owner decisions needed

- [x] **P1 · The ₹100 consultation and the course fee.** Settled by D11 (2026-10-21): `ENROL_CONSULT_CREDIT = "course-fee"` takes ₹100 off the course fee, for a confirmed consultation dated within the last 7 days, as approved in D4. Each consultation can be used once. The page shows this as a line in the quote. Still open: whether the credit is refunded after a cancellation (pending item Q5).
- [x] **P2 · Supersede D7 for live-a1.** Settled by D11: online payment only; no manual UPI, bank transfer or emailed payment request.
- [x] **P3 · Supersede D4's payment line for consultations.** Settled by D11: consultations are booked and paid online only. While booking is off, the page says "Online demo booking is not open yet" and offers only the free waitlist.
- [ ] **P4 · Open the course.** Requires:
  - a real start date (`nextBatch` and `ENROL_COURSES` batch);
  - `enrolment: 'open'`;
  - `paymentTerms` without "once enrolment opens" (today: "₹7,999 in full, in one payment, before the first class. Paid online on this page once enrolment opens.");
  - the homepage FAQ and Terms §4A updated. The readiness check flags them.
- [ ] **P5 · Legal text.** Terms §4A and Privacy §2/§4/§4A/§8/§9 were rewritten on 2026-10-21 for online-only payment (D11), with "not open yet" wording while the switches are off. The owner reviews that wording before the PR is merged; then `legalTermsUpdated` can be set. The self-paced Refund Policy is unchanged. A lawyer review is still recommended.
- [x] **P6 · Instalment rules.** Settled by D10 (2026-10-21): full payment only, so there is no instalment refund rule and no missed second instalment. The refund of "classes still to come" remains part of the legal review (P5).
- [ ] **P7 · Courses for the other teachers.** D9 shows per-teacher A1 prices, but no course record (schedule, batch, capacity) exists for them. Nothing is sold for them, and the Worker sells only `live-a1`. Each new course needs its details from the owner, then an entry in both files.
- [ ] **P8 · Receipts / GST / record retention** for online payments (accountant).

## 5. Reconciliation and refunds

**Automatic.** `scheduled()` re-checks, with Cashfree, open, expired and released consultation bookings and enrolment payments from the last 2 days. It needs a cron trigger, which is not configured today. Add it at launch:

```toml
[triggers]
crons = ["*/15 * * * *"]
```

**By hand.** These are read-only queries; run them with `wrangler d1 execute klarweg-access --remote --command "…"`.

```sql
-- anything needing a person (refund or manual confirmation)
SELECT e.ref, e.status, e.review_reason, p.id AS order_id, p.amount_paise, p.status AS pay_status, p.review_reason AS pay_reason
FROM live_enrolments e JOIN live_payments p ON p.enrolment_id = e.id
WHERE e.status = 'review' OR p.status = 'review';
SELECT ref, status, review_reason, cashfree_order_id, amount_paise FROM consult_bookings WHERE status = 'review';
-- enrolled learners and what they have paid
SELECT e.ref, e.course_id, e.batch, SUM(CASE WHEN p.status='paid' THEN p.amount_paise END) AS paid_paise
FROM live_enrolments e LEFT JOIN live_payments p ON p.enrolment_id = e.id WHERE e.status = 'enrolled' GROUP BY e.id;
```

A learner's status screen also re-checks an order with Cashfree every time it is opened.

**Refund runbook.** Refunds are made in the Cashfree dashboard; the Worker never refunds by itself.

1. Find the order id with the queries above, from `live_payments.id` or `consult_bookings.cashfree_order_id`.
2. Cashfree dashboard → Transactions → the order → **Refund**: full or partial, per the published cancellation policy.
3. Record it. Payment refunded:
   ```sql
   UPDATE live_payments SET status = 'refunded', review_reason = 'refund <cashfree refund id> <date>', updated_at = strftime('%s','now') WHERE id = '<order id>';
   ```
   If the learner no longer has a place:
   ```sql
   UPDATE live_enrolments SET status = 'cancelled', updated_at = strftime('%s','now') WHERE ref = '<KWE-…>';
   ```
   A consultation:
   ```sql
   UPDATE consult_bookings SET status = 'cancelled', updated_at = strftime('%s','now') WHERE ref = '<KWC-…>';
   ```
4. A `cancelled` enrolment frees its place and a `cancelled` booking frees its slot automatically. The learner's page shows "cancelled by Klarweg". A test runs these exact statements against the real schema.

## 6. Production setup checklist (not done; each needs the owner)

1. Decisions P1–P6 recorded (P1–P3 and P6 done). Legal PR reviewed by the owner and merged; `legalTermsUpdated` set in both switches' records.
2. **Sandbox verification with real Cashfree sandbox credentials** on the non-production Worker (`wrangler.nonprod.toml`, TEST app id and secret):
   - Create Order accepts `order_expiry_time` in `+05:30` form and returns it;
   - a 16-minute (consultation) and 26-minute (course) expiry are accepted;
   - real `PAYMENT_SUCCESS_WEBHOOK` / `PAYMENT_FAILED_WEBHOOK` / `PAYMENT_USER_DROPPED_WEBHOOK` payloads and signatures for `cons_` and `enrp_` orders;
   - a sandbox refund.

   Not done: the sandbox secret key is not available in this repository or on this machine. Every test uses a local mock.
3. Cashfree production:
   - account activated (KYC);
   - live app id and secret set as Worker secrets (`wrangler secret put CASHFREE_SECRET_KEY`);
   - webhook URL `https://<worker>/webhooks/cashfree` and `CASHFREE_WEBHOOK_SECRET`;
   - the site domain whitelisted for checkout.
4. Database:
   ```
   wrangler d1 execute klarweg-access --remote --file access/worker/migration-013-consultations.sql
   wrangler d1 execute klarweg-access --remote --file access/worker/migration-014-live-enrolments.sql
   ```
5. Worker config in one reviewed commit:
   - `CASHFREE_ENV = "production"` plus the live app id;
   - `CONSULT_BOOKING = "live"`, `CONSULT_TEACHERS`;
   - `ENROL_PAYMENTS = "live"`, `ENROL_COURSES`, `ENROL_CONSULT_CREDIT`;
   - the cron trigger;
   - the `CONSULT_JOIN_LINKS` secret.

   Deploy with `npm run deploy:access -- --allow-consult-booking=live --allow-enrol-payments=live --allow-cashfree-env-change=production` plus the existing flags.
6. Consultation availability rows for each confirmed day (booking doc §5.6).
7. Page switches: `onlineBooking` and `liveEnrolment` with approvals recorded.
8. One real ₹100 booking and one real course payment end to end, each refunded, before announcing.

## 7. Tests

- `access/worker/test/enrolments.test.mjs`: the real Worker, in-memory D1, Cashfree mocked at `fetch()`. It covers:
  - server amounts and `amount-changed`;
  - success via webhook and via status check;
  - failed and cancelled payments;
  - expiry;
  - refresh/retry resume;
  - duplicate webhooks;
  - bad and stale signatures;
  - amount mismatch;
  - capacity and the last-place race;
  - late payment;
  - instalments refused (`bad-plan`), a lapsed order replaced, and a duplicate charge;
  - ownership;
  - the consultation adjustment;
  - separation from self-paced access;
  - the scheduled reconcile;
  - catalogue equal to the published fee.

  `consultations.test.mjs` covers the ₹100 booking the same way.
- `scripts/live-enrol.test.mjs`: the page switch, validator interlocks, the browser-side rules (no amount, no gateway status, every outcome screen), demo-booking retry and email removal, and the predeploy guard run against temporary copies.
- `scripts/live-payments-demo.mjs --e2e`: headless Chrome through both flows with the real Worker and a **mock** Cashfree checkout (local only). It covers:
  - failure then retry;
  - cancel then retry;
  - bank delay then reconcile;
  - duplicate notification;
  - refresh;
  - tampered amounts;
  - a forged webhook;
  - 390 px mobile.

  It saves screenshots. Run `node scripts/live-payments-demo.mjs` without `--e2e` to click through it yourself.
