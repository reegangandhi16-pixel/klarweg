# Live Classes — real Cashfree SANDBOX verification

**Status (2026-10-21): prepared, not yet run.** No Cashfree sandbox app id or secret key is available on this machine or in this repository, and the dedicated sandbox database and Worker have not been created. Every result so far comes from local mocks and a local rehearsal. **No real sandbox transaction has been made yet.**

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

**Synthetic data only.** The A1 batch `2099-01-05` exists only in the sandbox config, so the Worker treats the course as open. It is not a start date. The consultation availability row is a fixture written into the sandbox database by the verifier (`confirmed_by = 'sandbox-verification-fixture'`); it is not real availability. Joining links are optional and must be a throwaway Meet link the owner creates for testing.

## 2. Missing prerequisites (owner)

1. **Cashfree sandbox credentials.** In the Cashfree merchant dashboard, switch to **Test** mode, then go to *Developers → API Keys*. You need the **app id** (it starts with `TEST`) and the **secret key**. Never paste them into chat, a file or a commit.
2. **Authorisation to create two free-tier Cloudflare resources** on the owner's account: the D1 database `klarweg-access-payments-nonprod` and the Worker `klarweg-access-payments-nonprod`. wrangler is already logged in on this machine.
3. *Optional:* a throwaway Google Meet link for the joining-link check.

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

```sh
# Terminal 1: watch the Worker. Verified webhooks log "cashfree-webhook: signature verified <TYPE> <cons|enrp>".
cd access/worker && npx wrangler tail --config wrangler.payments-sandbox.toml

# Terminal 2: credentials into the environment without echo or history, then run.
read -r  CASHFREE_SANDBOX_APP_ID
read -rs CASHFREE_SANDBOX_SECRET_KEY
export CASHFREE_SANDBOX_APP_ID CASHFREE_SANDBOX_SECRET_KEY
export SANDBOX_WORKER_URL=https://klarweg-access-payments-nonprod.klarweg-issue-reports-2026.workers.dev
node scripts/cashfree-sandbox-verify.mjs --out=/tmp/kw-sandbox-report.json
# at least 31 minutes later (the A1 seat hold is 30 minutes):
node scripts/cashfree-sandbox-verify.mjs --check-expired
unset CASHFREE_SANDBOX_APP_ID CASHFREE_SANDBOX_SECRET_KEY
```

What `scripts/cashfree-sandbox-verify.mjs` checks. Each check is made through the Worker, then read back from the sandbox database, then independently from Cashfree's API:

- **₹100 consultation:**
  - The server creates the order for exactly ₹100.00; a browser-sent amount is ignored.
  - Payment uses Cashfree's test UPI `testsuccess@gocash` (Order Pay API).
  - The slot is confirmed by the signed success webhook: the database changes before any status call.
  - Cashfree's payments API shows one SUCCESS payment of ₹100.
  - The joining details go only to the signed-in owner of the booking (another learner gets 404, signed out gets 401).
  - Webhooks: a duplicate is acknowledged; a wrong signature or a stale timestamp gets 401.
  - A `testfailure@gocash` payment stays unconfirmed, and Cashfree shows it as FAILED.
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

**Manual checks** (the script marks them MANUAL), done on the local test page:

```sh
SANDBOX_WORKER_URL=https://klarweg-access-payments-nonprod.klarweg-issue-reports-2026.workers.dev node scripts/payments-sandbox-site.mjs
# open http://localhost:8789/live-classes.html (banner: SANDBOX TEST PAGE)
```

- **User dropped:** start a booking, close Cashfree's checkout without paying. `wrangler tail` should show `signature verified PAYMENT_USER_DROPPED_WEBHOOK cons`, and the booking should stay pending.
- **Failed and dropped webhook deliveries:** the Cashfree sandbox dashboard, under *Developers → Webhooks → Logs*, should show 200 responses.
- **Hosted checkout and return:** pay with one of Cashfree's published sandbox test cards or UPI ids. Cashfree should send you back to `http://localhost:8789/live-classes.html?...`, and the page should show the Worker-verified status.
- **Joining link:** only if `CONSULT_JOIN_LINKS` is set.

**What counts as proof:** a real run with **0 FAIL**, the `--check-expired` result, and the manual checks above. Record the date, the counts and the references (never a key) in §6 below. `--rehearse` runs the same checks locally against the real Worker code and an emulation of Cashfree. It shows that the script and the Worker agree; it is **not** proof of the sandbox.

**Unverified assumptions, which the real run will settle:**

- Cashfree's sandbox accepts an `http://localhost:8789` return URL. Only the browser check depends on this; the scripted run does not use the redirect.
- The Order Pay API (`POST /pg/orders/sessions`, UPI collect) settles `testsuccess@gocash` and `testfailure@gocash` automatically in the sandbox.

If either is refused, the scripted run reports it as FAIL with Cashfree's message. Complete those payments by hand on the test page instead.

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
| — | **real sandbox** | — | — | — | Not run: no sandbox credentials or sandbox resources yet. |
