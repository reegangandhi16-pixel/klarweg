# Live Classes — real Cashfree SANDBOX verification

**Status (2026-10-21): infrastructure ready, no Cashfree credentials, not yet run.**

- **Created:** the D1 database `klarweg-access-payments-nonprod`, id `c86b0f00-61c4-49c9-a1ac-6047851ea09c`.
  - `schema.sql` and migrations 001–014 were applied once each, in order. The result is 16 tables, the same columns as the test schema.
- **Deployed:** the Worker `klarweg-access-payments-nonprod`, using this config only, with the 15-minute cron, at `https://klarweg-access-payments-nonprod.klarweg-issue-reports-2026.workers.dev`.
- **No secrets are set.** The Worker fails closed: booking and enrolment report `enabled: false`, and webhooks get 503 `not-configured`, until the Cashfree TEST app id and secret are entered (§3 step 4).
- Every payment result so far comes from local mocks and local rehearsals. **No real sandbox transaction has been made yet.**

This sets up an isolated test environment. It proves the ₹100 consultation and the full-payment A1 enrolment against **Cashfree's real sandbox** (test money only). It never touches production. All payment switches on the public site and the production Worker stay **off**.

## 1. What is isolated from what

| | Production | Exam/QA non-prod | **Payment sandbox (this)** |
|---|---|---|---|
| Config | `wrangler.toml` | `wrangler.nonprod.toml` | `wrangler.payments-sandbox.toml` |
| Worker | `klarweg-access` | `klarweg-access-nonprod` | `klarweg-access-payments-nonprod` |
| Database | `klarweg-access` | `klarweg-access-nonprod` | `klarweg-access-payments-nonprod` (own, created for this) |
| Cashfree | sandbox app id, switches **off** | none (payments deliberately off) | **sandbox** app id, `CONSULT_BOOKING`/`ENROL_PAYMENTS = "sandbox"` |
| Page | public site, switches off | `localhost:8788` | `localhost:8789` (`scripts/payments-sandbox-site.mjs`), in memory only |

The guard tests are in `scripts/payments-sandbox-config.test.mjs`. They check that:

- the sandbox config names only its own Worker and database, and uses Cashfree's sandbox only;
- neither switch is ever `"live"`, and the file holds no secret;
- webhooks go to its own `workers.dev` endpoint, and CORS reaches only `localhost:8789`;
- production and the exam/QA non-prod Worker are unchanged, and no production tool or public file refers to the sandbox;
- the test page refuses any Worker but the sandbox one.

The existing `scripts/nonprod-config.test.mjs` still checks that the exam/QA Worker has no payments.

**CORS, as deployed:** the Worker code always allows the two public site origins (`https://klarweg.in`, `https://reegangandhi16-pixel.github.io`; `src/cors.js`), so the sandbox Worker accepts those as well as `http://localhost:8789`. It refuses other origins, including the exam/QA page on `localhost:8788`. No public page calls it: `kw-config.js` points at the production Worker, and the guard tests fail if any public file names the sandbox Worker. Narrowing the sandbox to `localhost:8789` alone would need a Worker code change, which is deliberately not part of this setup.

**Synthetic data only.** The A1 batch `2099-01-05` exists only in the sandbox config, so the Worker treats the course as open. It is not a start date. The consultation availability row is a fixture written into the sandbox database by the verifier (`confirmed_by = 'sandbox-verification-fixture'`); it is not real availability. Joining links are optional and must be a throwaway Meet link the owner creates for testing.

## 2. Missing prerequisites (owner)

1. **Cashfree sandbox credentials (still missing).** In the Cashfree merchant dashboard, switch to **Test** mode, then go to *Developers → API Keys*. You need the **app id** (it starts with `TEST`) and the **secret key**. Never paste them into chat, a file or a commit.
2. ~~Authorisation to create the two Cloudflare resources.~~ Done 2026-10-21 (see Status). Steps 1–3 of §3 below are complete; only step 4 (secrets) remains.
3. *Optional:* a throwaway Google Meet link for the joining-link check.
4. **A person at a browser** during the run, to complete three payments in Cashfree's hosted sandbox checkout (see §4). Not needed only if Cashfree confirms the S2S flag on the TEST account (see "Payment route").

## 3. Setup commands (run from `access/worker`)

```sh
# 1. Its own database. Put the printed database_id into wrangler.payments-sandbox.toml (commit that change).
npx wrangler d1 create klarweg-access-payments-nonprod

# 2. Schema, then every migration in order (013 consultations and 014 enrolments included).
for f in schema.sql $(ls migration-*.sql | sort); do
  npx wrangler d1 execute klarweg-access-payments-nonprod --config wrangler.payments-sandbox.toml --remote --file "$f" || break
done

# 3. Deploy the sandbox Worker (never `npm run deploy:access`, which is production).
npx wrangler deploy --config wrangler.payments-sandbox.toml

# 4. Secrets: each one is typed at wrangler's prompt, so it never reaches the shell history or a file.
npx wrangler secret put CASHFREE_APP_ID      --config wrangler.payments-sandbox.toml   # the TEST… app id
npx wrangler secret put CASHFREE_SECRET_KEY  --config wrangler.payments-sandbox.toml   # the sandbox secret key
npx wrangler secret put RATE_SALT            --config wrangler.payments-sandbox.toml   # any random string
# optional: npx wrangler secret put CONSULT_JOIN_LINKS --config wrangler.payments-sandbox.toml
#           value: {"reegan-gandhi":"https://meet.google.com/xxx-xxxx-xxx"} (a throwaway link)
```

Each order carries its own `notify_url`, so Cashfree sends sandbox webhooks to `https://klarweg-access-payments-nonprod.klarweg-issue-reports-2026.workers.dev/webhooks/cashfree`. They are signed with the sandbox secret key.

## 4. Run the verification

Same-day consultations can be booked only between **09:00 and 12:00 IST**.

### Payment route: hosted checkout by default, because Order Pay needs S2S

Cashfree's Order Pay API reference (`POST /pg/orders/sessions`) says the API works only after Cashfree support enables the **S2S flag** for the account. It also lists extra conditions for live use (PCI DSS for cards; a GST turnover condition for other methods) and asks for `x-client-*` device headers on UPI collect. It does not say whether the sandbox is exempt. No one has confirmed S2S for the Klarweg TEST account, so:

- **Default (no S2S needed):** for each of the three test payments, the script prints a `http://localhost:8789/sandbox-checkout.html#session=…` link. That page exists only in `scripts/payments-sandbox-site.mjs`. It loads Cashfree's hosted JS checkout (`https://sdk.cashfree.com/js/v3/cashfree.js`, `Cashfree({ mode: 'sandbox' })`, `checkout({ paymentSessionId, redirectTarget: '_modal' })`). A person completes the payment with Cashfree's published **sandbox test** details: two successful payments (₹100 consultation, then ₹7,899 A1) and one deliberately failed payment. The script waits up to 15 minutes for each, then checks the result independently through Cashfree's payments API and the sandbox database, exactly as in the automated route.
- **`--order-pay` (only after Cashfree confirms S2S on the TEST account):** fully automated with `testsuccess@gocash` / `testfailure@gocash`. If Cashfree refuses the call, the check fails with Cashfree's message and a hint to rerun without `--order-pay`.

```sh
# Terminal 1: watch the Worker. Verified webhooks log "cashfree-webhook: signature verified <TYPE> <cons|enrp>".
cd access/worker && npx wrangler tail --config wrangler.payments-sandbox.toml

# Terminal 2: the local test page (needed for the hosted route).
SANDBOX_WORKER_URL=https://klarweg-access-payments-nonprod.klarweg-issue-reports-2026.workers.dev node scripts/payments-sandbox-site.mjs

# Terminal 3: credentials into the environment without echo or history, then run.
read -r  CASHFREE_SANDBOX_APP_ID
read -rs CASHFREE_SANDBOX_SECRET_KEY
export CASHFREE_SANDBOX_APP_ID CASHFREE_SANDBOX_SECRET_KEY
export SANDBOX_WORKER_URL=https://klarweg-access-payments-nonprod.klarweg-issue-reports-2026.workers.dev
node scripts/cashfree-sandbox-verify.mjs --out=/tmp/kw-sandbox-report.json   # opens each payment via a printed link
# or, only once Cashfree has confirmed S2S on the TEST account:
# node scripts/cashfree-sandbox-verify.mjs --order-pay --out=/tmp/kw-sandbox-report.json
# at least 31 minutes later (the A1 seat hold is 30 minutes):
node scripts/cashfree-sandbox-verify.mjs --check-expired
unset CASHFREE_SANDBOX_APP_ID CASHFREE_SANDBOX_SECRET_KEY
```

What `scripts/cashfree-sandbox-verify.mjs` checks. Each check is made through the Worker, then read back from the sandbox database, then independently from Cashfree's API:

- **₹100 consultation:**
  - The server creates the order for exactly ₹100.00; a browser-sent amount is ignored.
  - A person pays in Cashfree's hosted sandbox checkout (or, with `--order-pay`, the Order Pay API pays with `testsuccess@gocash`).
  - The slot is confirmed by the signed success webhook: the database changes before any status call.
  - Cashfree's payments API shows one SUCCESS payment of ₹100.
  - The joining details go only to the signed-in owner of the booking (another learner gets 404, signed out gets 401).
  - Webhooks: a duplicate is acknowledged; a wrong signature or a stale timestamp gets 401.
  - A failed sandbox payment (the person picks the failure outcome; with `--order-pay`, `testfailure@gocash`) stays unconfirmed, and Cashfree shows it as FAILED.
- **A1 in full:**
  - The quote is ₹7,999 less the ₹100 credit from today's confirmed consultation, so ₹7,899.
  - `plan: instalments` gets 400.
  - A stale browser amount gets 409, with no gateway order.
  - A retry resumes the same order.
  - After the signed success webhook, the learner is enrolled, and Cashfree shows one SUCCESS payment of ₹7,899.
  - A duplicate webhook changes nothing.
  - The credit is used once.
  - No self-paced entitlement or order is created.
  - An unpaid hold expires and frees its place (`--check-expired`).

**Manual checks** (the script marks them MANUAL), done on the local test page `http://localhost:8789/live-classes.html` (banner: SANDBOX TEST PAGE), served by the command in Terminal 2:

- **User dropped:** start a booking, close Cashfree's checkout without paying. `wrangler tail` should show `signature verified PAYMENT_USER_DROPPED_WEBHOOK cons`, and the booking should stay pending.
- **Failed and dropped webhook deliveries:** the Cashfree sandbox dashboard, under *Developers → Webhooks → Logs*, should show 200 responses.
- **Hosted checkout and return:** pay with one of Cashfree's published sandbox test cards or UPI ids. Cashfree should send you back to `http://localhost:8789/live-classes.html?...`, and the page should show the Worker-verified status.
- **Joining link:** only if `CONSULT_JOIN_LINKS` is set.

**What counts as proof:** a real run (either route) with **0 FAIL**, the `--check-expired` result, and the manual checks above. Record the date, the counts and the references (never a key) in §6 below. `--rehearse` (Order Pay route) and `--rehearse --hosted` (the person is emulated) run the same checks locally against the real Worker code and an emulation of Cashfree. They show that the script and the Worker agree; they are **not** proof of the sandbox, and neither are the mocked Cashfree responses in the unit tests.

**Unverified assumptions, which the real run will settle:**

- Cashfree's hosted JS checkout opens in sandbox mode from `http://localhost:8789`. Cashfree's web-checkout guide says to whitelist your domain first. Its whitelisting page accepts only `https://` domains without custom ports, and does not say whether sandbox checks this. If the checkout refuses to open, the fallback is to serve the same two pages from an `https://` tunnel or test domain whitelisted in the **Test** dashboard. That needs the owner's approval, and the tunnel origin must be added to `CORS_EXTRA_ORIGINS` in the sandbox config only.
- Cashfree's sandbox accepts an `http://localhost:8789` return URL. Only the full-page return in the browser check depends on this; the `_modal` checkout and the scripted run do not.
- `--order-pay` only: the S2S flag is enabled on the TEST account, and Order Pay settles `testsuccess@gocash` / `testfailure@gocash` automatically. If this is not confirmed, use the default hosted route.

## 5. Clean up afterwards (optional)

```sh
npx wrangler delete --config wrangler.payments-sandbox.toml
npx wrangler d1 delete klarweg-access-payments-nonprod
```

Rotate the sandbox secret key in the Cashfree dashboard if it was ever exposed.

## 6. Results

| Date | Mode | Pass | Fail | Manual | Notes |
|---|---|---|---|---|---|
| 2026-10-21 | rehearsal (local emulation) | 37 | 0 | 1 | Not a sandbox proof. Manual: no joining link configured. |
| 2026-10-21 | rehearsal, hosted route (person emulated) | 37 | 0 | 1 | Not a sandbox proof. |
| — | **real sandbox** | — | — | — | Not run: no sandbox credentials or sandbox resources yet. |
