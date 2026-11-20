# Live teacher marketplace — how it works and how to switch it on

Owner brief: "Completely Redesign Klarweg Live Classes Into a Premium Teacher Booking & Course Platform" (2026-11-20).
Prices and coupons are recorded as decision **D12** in `docs/live-classes-owner-decisions.md`.

**Everything ships OFF.** Merging this PR changes the public page, but no payment can be taken until every
switch below is turned on by the owner. With the switches off, the page shows teachers, courses and prices,
"To be announced" dates, and a "Demo booking opens soon" panel. It never calls a payment route.

## 1. What is built

| Area | Files | Notes |
|---|---|---|
| Catalogue, prices, coupons (server) | `access/worker/src/live-catalog.js` | Pure module, the only price authority. Covers 11 teachers × A1–B2 × Group/One-to-One. Only teachers in `COURSE_ELIGIBILITY` can sell; today that is **only `reegan-gandhi`**. |
| Display prices (browser) | `live-marketplace-pricing.js` | Display only. A test keeps it identical to the server copy. |
| ₹100 demo booking | `access/worker/src/live-demos.js`, `consultations.js` | Friday/Sunday, 20-minute slots 4:20–9:40 PM IST. Only slots an admin opened. At least 3 h ahead and at most 60 days ahead. A unique index stops double booking. Holds expire. One free move up to 12 h before. |
| Course checkout | `access/worker/src/enrolments.js` (`/enrol/*`) | Covers each teacher × level × format and batch. Coupons `GROUP3000` / `PERSONAL7000` are checked on the server. The browser's `expected_amount_paise` must equal the server's quote. A coupon is never combined with the ₹100 demo credit. A payment is confirmed only when Cashfree GET order says PAID for the exact amount (webhook + cron reconcile). |
| Batches and dates | `live_batches` (migration 019) | A course is payable only if its batch is `open`. `open` requires start, end, schedule, capacity and the admin's approval; a database CHECK enforces it. |
| Admin | `live-admin.html`, `access/worker/src/live-admin.js` (`/live-admin/*`) | Requires `LIVE_ADMIN_EMAILS` plus a fresh 2FA. Covers slots, batches/dates, teacher pauses, coupon on/off, demo move/cancel/refund-recorded, enrolment cancel/refund-recorded. Every change is audited. There is deliberately **no** "mark paid" and **no** price or teacher-verification control (those are reviewed code changes). |
| Page | `live-classes.html`, `live-marketplace.css`, `kw-marketplace.js`, `live-classes-data.js` (`marketplace`) | Filters, teacher cards, course cards, demo stepper, checkout dialog, receipts. |
| My Account | `account/index.html` `#live`, `kw-account-live.js` | Lists demos and paid courses with status. |
| Separation | — | Order prefixes `cons_` (demo), `enrp_` (course), `ord_` (self-paced). The marketplace never grants self-paced entitlements; a test enforces this. |

## 2. Tests

- `npm test`: the full suite, including `access/worker/test/live-marketplace.test.mjs`. It covers all 88 price combinations, coupons, eligibility, Fri/Sun rules, slots, double and concurrent booking, expiry and late payment, wrong amount, gateway failure, reschedule, admin, checkout ₹13,000 / ₹15,000, no stacking, and supersede.
- `npm run test:marketplace`: the Worker tests plus the page's static tests, then `scripts/live-marketplace-demo.mjs --e2e`. The e2e runs the real Worker, an in-memory database, **mock** Cashfree and headless Chrome, and saves desktop and mobile screenshots.
- `npm run demo:marketplace`: the same local preview, to click through yourself. It uses sample dates, labelled as such.

## 3. What only the owner can do (in this order)

1. **Review and merge** this draft PR. The page goes public with payments off.
2. **Teacher facts.** Real photos need written photo consent (`photo` + `photoConsent` in `live-classes-data.js`). Re-confirm credentials before setting `showCredentials: true`. To verify another teacher (e.g. Geetika Dhawan), complete `docs/live-classes-teacher-intake.md`, then add the teacher to **both** `COURSE_ELIGIBILITY` (live-catalog.js) and `marketplace.verified` (data file). A test requires the two to match.
3. **Production database.** Prod D1 has **no** `consult_bookings` / `live_enrolments` tables yet. Apply in order: `migration-013…`, `migration-014…`, then `migration-019-live-marketplace.sql`, with `wrangler d1 execute klarweg-access --remote --file=…`. Back up first.
4. **Worker secrets and vars.** None of these go in GitHub or the frontend:
   - `CONSULT_JOIN_LINKS`: a secret, JSON `{"reegan-gandhi":"https://meet.google.com/…"}`.
   - `LIVE_ADMIN_EMAILS`: comma-separated admin emails. The admin also needs 2FA set up.
   - The Cashfree production keys already exist (`CASHFREE_APP_ID`, `CASHFREE_SECRET_KEY`, `CASHFREE_ENV=production`).
5. **Deploy the access Worker** from a release branch based on the live source (`73417bc5`), **not** blindly from main. Use `npm run deploy:access` with `--allow-demo-booking=live` / `--allow-enrol-payments=live` only when you intend to take money. The predeploy check refuses a mode that doesn't match `CASHFREE_ENV`.
6. **Open demo slots** in `/live-admin.html`, then set `DEMO_BOOKING="live"` (Worker) and `marketplace.demoBookingEnabled: true` (page). Demos can go live before courses.
7. **Courses.** For each course you want to sell: create a batch with start/end dates, schedule, capacity and the "what the learner receives" note; tick approval; set status `open`. Then set `ENROL_PAYMENTS="live"` (Worker) and `marketplace.courseCheckoutEnabled: true` (page).
8. **Refunds** are issued in the Cashfree dashboard; "Refund done" in admin only records it.

## 4. Rollback

- Page: revert the merge commit (the old page returns).
- Payments: set `DEMO_BOOKING` / `ENROL_PAYMENTS` to `off` and redeploy the Worker, or set the page switches to `false`.
- Migration 019 only adds columns and tables; leaving it applied is harmless.
