# Live Classes: same-day ₹100 consultation booking

**Status (2026-10-20): built, tested in sandbox, switched OFF.** Nothing changes on the public site: the Live Classes page still offers the email request only, and Cashfree is still in sandbox. No learner can pay for a consultation online.

Turning it on is a set of owner decisions, listed in §4. Don't publish the legal changes in §3 or turn on live payments before those decisions are made and the wording is reviewed.

## 1. How it works

| Step | What happens | Where |
|---|---|---|
| Availability | You confirm a teacher for a date (see §5). Without that, the teacher shows "Currently unavailable". | `consult_availability` table |
| Booking window | 09:00–12:00 IST, same day only. Outside it the page says "Same-day booking is closed". | `access/worker/src/consultations.js` |
| Slots | 15:00, 15:20, 15:40 IST: three non-overlapping 20-minute slots in the 15:00–16:00 window. Past and held slots are never offered. | same |
| Who is bookable | Only `reegan-gandhi` and `candidate-01`, and only when listed in `CONSULT_TEACHERS`, published on the page, and confirmed for the date. | `ELIGIBLE_TEACHERS`, `wrangler.toml`, predeploy check |
| Sign-in | The learner signs in (existing Klarweg account) and adds a phone number, which Cashfree requires. | `kw-consult.js` |
| Hold | Picking a slot holds it for 20 minutes. The database allows one pending or confirmed booking per teacher, date and slot, so two learners can't book the same time. One pending hold per learner; at most 6 attempts a day. **Changing slot never loses the current hold:** the new Cashfree order is created first, then the old hold is released and the new slot held in one database transaction. If the new slot was taken meanwhile, or the gateway fails, the old hold (and its own order) stays exactly as it was, and the learner is told which time they still hold and until when. An order for the same slot is resumed, never reused for another slot. | `migration-013-consultations.sql`, `createConsultBooking()` |
| Payment | A Cashfree order for exactly ₹100.00, fixed by the server. `order_expiry_time` is sent as ISO 8601 in IST (`2026-10-21T10:16:00+05:30`), 16 minutes ahead; the expiry Cashfree returns must be readable, in the future and no later than the hold, or the order is not used. | `consultations.js` |
| Confirmation | Only when Cashfree's own order API says PAID for ₹100.00 INR (webhook, or the learner's status check). The return redirect proves nothing. | `settle()` |
| Reference | The page shows the booking reference (`KWC-XXXXXXXX`), teacher, date and time. The learner can see it again whenever they are signed in. | `GET /consult/bookings` |
| Joining link | Shown only to the signed-in learner who owns a **confirmed** booking, from `GET /consult/bookings/:ref/join`. The links are a Worker secret (`CONSULT_JOIN_LINKS`), never in the page, its data, the repository or the database. Without a configured link the page says it "has not been set up yet" and asks the learner to email the reference. | `getConsultJoin()`, `kw-consult.js` |
| Separate from courses | Consultation orders start `cons_`, live in their own table and never call `grantProduct()`. A consultation never unlocks a self-paced course. | tests |
| No emails | The booking flow sends no email or message. Cashfree's own payment receipt is unaffected. | tests |

**Recovery:**
- An unpaid hold lapses after 20 minutes and the slot is offered again.
- A payment that lands after the hold lapsed is confirmed if the slot is still free. If someone else has the slot, or it has passed, the booking is marked `review`.
- A wrong amount or currency at the gateway also becomes `review`; it is never confirmed.
- `review` bookings need a person: check the payment in the Cashfree dashboard and refund by hand. List them with:
  `wrangler d1 execute klarweg-access --remote --command "SELECT ref, teacher_id, date, slot_start, review_reason FROM consult_bookings WHERE status = 'review'"`

## 2. Switches (all off)

| Switch | Now | Turns on when |
|---|---|---|
| `consultation.onlineBooking.enabled` in `live-classes-data.js` | `false`: the page loads no booking script | The validator refuses `true` until `ownerApproval`, `legalTermsUpdated: true` and `joinLinksConfigured: true` are recorded |
| `CONSULT_BOOKING` in `access/worker/wrangler.toml` | `"off"` | `"sandbox"` (test payments, needs `CASHFREE_ENV = "sandbox"`) or `"live"` (needs `CASHFREE_ENV = "production"`); deploying either needs `--allow-consult-booking=<mode>` |
| `CONSULT_TEACHERS` | `""` | Eligible, published teacher ids only; the predeploy check refuses anything else |
| `CONSULT_JOIN_LINKS` (Worker **secret**) | not set | `wrangler secret put CONSULT_JOIN_LINKS` with `{"reegan-gandhi":"https://meet.google.com/xxx-xxxx-xxx"}`. Only well-formed Meet links for eligible teachers are used. Never in `wrangler.toml` (the predeploy check refuses it) or any committed file. |
| `CASHFREE_ENV` | `"sandbox"` (TEST app id) | Going live is a separate, existing procedure (comment in `wrangler.toml`) |

The Worker refuses "live" through sandbox, and "sandbox" through production credentials.

## 3. Conflicts with what is published today

Today's published text describes email requests, UPI payment and email confirmation. Online booking contradicts it in these places. **Proposed wording only; nothing below has been published.**

| # | Where | Today | Proposed (if online booking is approved) |
|---|---|---|---|
| C1 | Terms §4A, "Consultations" | "You send a request by email; we reply with a confirmed time and UPI details, and email you the joining link once your payment is confirmed." | "You can book a consultation on the Live Classes page, on the same day, between 09:00 and 12:00 IST, for a 20-minute slot between 15:00 and 16:00 IST. You pay the ₹100 fee online through our payment partner, Cashfree. Your booking is confirmed on the page, with a booking reference, once Cashfree confirms the payment. [How you receive the Google Meet link: owner decision D-C3.] You can also still request a consultation by email." |
| C2 | Terms §4A, "Payments" | "The Klarweg website does not take live-class or consultation payments … A person at Klarweg checks each payment and confirms it to you by email." | "Consultations booked on the website are paid online through Cashfree. Live-course fees, and consultations requested by email, are paid by UPI or bank transfer on a payment request we email you …" |
| C3 | Terms §4A, cancellation | "You can move your consultation once, free of charge, with at least 12 hours’ notice" | A same-day booking is made at most 6 hours before the call, so 12 hours’ notice is impossible. Owner decision D-C4: e.g. "You can move a same-day booking once, free of charge, if you tell us at least 2 hours before it starts." |
| C4 | Privacy §2 table, "Consultation requests" | "The page itself does not send or store anything" | Add a row: "Consultation bookings: if you book online, we store your account, the teacher, date and time, the booking reference and its payment status in our database (Cloudflare D1). Cashfree processes the payment and receives your name, email and phone number." |
| C5 | Privacy §3 (Cashfree) | "Live classes and consultations are not paid through Cashfree or the website" | "Consultations booked online are paid through Cashfree; live courses are not." |
| C6 | Privacy, retention | Requests kept 12 months, then deleted by hand | Owner decision D-C6: how long booking rows are kept (accounting may need them; ask the accountant). |
| C7 | Live Classes page, "Good to know" | "Sending this form is a request, not a booking. Nothing is charged on this page." and the four email-based steps | Keep for the email form; add a separate line for online booking. The page copy changes in the same PR that sets `legalTermsUpdated: true`. |
| C8 | Decision sheet D7 | Live fees and consultations paid manually, no Cashfree product | Superseded for consultations only, if D-C1 is approved. Live-course fees stay manual. |
| C9 | Refund Policy | Covers self-paced only; points to Terms §4A | No change needed if C1–C3 are made in §4A. |

## 4. Owner decisions (checklist)

- [ ] **D-C1** Approve online booking and payment for consultations (supersedes D7 for consultations only).
- [ ] **D-C2** Confirm ₹100, 20 minutes, Google Meet and the 7-day course adjustment still apply to online bookings.
- [ ] **D-C3** How the learner gets the Google Meet link, given that the flow sends no email. Built: a per-teacher link in the `CONSULT_JOIN_LINKS` Worker secret, shown on the page to the confirmed booking's owner only. Decide whether a fixed per-teacher link is acceptable (anyone who once received it could reuse it), or whether a person sends a fresh link instead. Then record `joinLinksConfigured: true` once the secret is set.
- [ ] **D-C4** Reschedule and cancellation rule for same-day bookings (C3), and what happens if the teacher can't attend.
- [ ] **D-C5** Refunds: who refunds `review` bookings and how fast. Cashfree refunds are made in the Cashfree dashboard.
- [ ] **D-C6** Retention period for booking records (C6); ask the accountant about invoices/receipts for ₹100 payments.
- [ ] **D-C7** Whether a learner may book more than one slot a day (now allowed, within 6 attempts).
- [ ] **D-C8** Approve the legal wording in §3 after review (lawyer package).
- [ ] **D-C9** Whether to run a sandbox trial on the live Worker first (`CONSULT_BOOKING = "sandbox"`, shown on the page as "TEST MODE · no real payment"). This still needs the page switch, so it needs D-C1 and D-C3.

## 5. Launch checklist (before a real customer can pay)

1. Decisions D-C1 to D-C8 recorded.
2. Legal PR: Terms §4A, Privacy (C1–C6), page copy (C7), `onlineBooking.ownerApproval`, `legalTermsUpdated: true`, `joinLinksConfigured: true`. Reviewed, merged.
3. Cashfree production: account activated (KYC), live app id and secret, webhook URL `https://<worker>/webhooks/cashfree` added and webhook secret set (`wrangler secret put CASHFREE_WEBHOOK_SECRET`), the live Klarweg domain whitelisted for the checkout. Today none of this exists in the repository and the Worker runs sandbox only.
4. Database: `wrangler d1 execute klarweg-access --remote --file access/worker/migration-013-consultations.sql`.
5. Worker config: `CONSULT_BOOKING = "live"`, `CASHFREE_ENV = "production"` + live app id (one reviewed commit), `CONSULT_TEACHERS = "reegan-gandhi"` (add `candidate-01` only after their profile is published with consent, under their own id: rename it in `ELIGIBLE_TEACHERS`, `docs/live-classes-candidates.json` and the tests in the same PR). Deploy with `npm run deploy:access -- --allow-consult-booking=live --allow-cashfree-env-change=production` plus the existing flags.
6. Availability, each day the teacher has confirmed in writing:
   `wrangler d1 execute klarweg-access --remote --command "INSERT INTO consult_availability (teacher_id, date, confirmed_by, confirmed_at) VALUES ('reegan-gandhi', '2026-11-02', 'owner', strftime('%s','now'))"`
   Remove a day: `DELETE FROM consult_availability WHERE teacher_id = '…' AND date = '…'` (existing bookings stay).
7. One real ₹100 booking end to end, then a refund, before announcing it.

**Not yet verified against Cashfree itself** (no sandbox credentials were available when this was built; every test uses a local mock of the API):
- that the 2023-08-01 Create Order API accepts `order_expiry_time` in the `+05:30` form we send, and returns `order_expiry_time` in its response (the Worker refuses an order whose returned expiry is missing or later than the hold);
- that a 16-minute expiry is accepted (Cashfree's reference documents no minimum or maximum);
- the webhook signature and `PAYMENT_SUCCESS_WEBHOOK` payload for a `cons_` order.

Check these in **sandbox only** (`CONSULT_BOOKING = "sandbox"` on a non-production Worker, TEST credentials), before step 5. Never test with a live payment.

## 6. Teachers named on 2026-10-20

The owner named 11 people. They are in `docs/live-classes-candidates.json` under opaque ids: the owner (`reegan-gandhi`, published) and `candidate-01` … `candidate-10`, drafts with no facts. The names are kept in a private roster outside this public repository, together with any filled intake sheets.

No qualification, experience, certificate, language, specialism, photo, bio, review or availability was provided for any of the 10, so none is recorded. On 2026-10-21 the owner listed all 10 by name and title, with their agreement (`tier: 'listed'`, see the intake guide). A listed teacher is **never bookable**: `publishedTeacherIds()` returns full profiles only, so the predeploy check refuses a listed teacher in `CONSULT_TEACHERS`. A full profile still goes through `docs/live-classes-teacher-intake.md`. `candidate-01` is the second booking-eligible teacher; eligible does not mean bookable, and its Worker id stays `candidate-01` until a full profile is published (then rename it in `ELIGIBLE_TEACHERS`, the candidates file and the tests in one PR).
