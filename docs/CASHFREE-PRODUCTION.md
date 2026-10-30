# Cashfree production (live payments)

Self-paced course checkout (A1–C2, Lifetime) moved from Cashfree Sandbox to
Production on 2026-10-30. Live classes (`ENROL_PAYMENTS`) and the ₹100
consultation (`CONSULT_BOOKING`) stay `off`; they have their own go-live.

## Configuration

| Where | Name | Value |
|---|---|---|
| `wrangler.toml` `[vars]` | `CASHFREE_ENV` | `production` → API `https://api.cashfree.com/pg`, browser SDK `mode: "production"` (sent by the Worker; `kw-checkout.js` never guesses) |
| `wrangler.toml` `[vars]` | `CASHFREE_APP_ID` | production App ID (not a secret; no `TEST` prefix) |
| Worker secret | `CASHFREE_SECRET_KEY` | production secret key (`cfsk_ma_prod_…`); also signs webhooks |
| (unset) | `CASHFREE_WEBHOOK_SECRET` | not needed: Cashfree signs with the client secret |
| (default) | `notify_url` | `https://klarweg-access.klarweg-issue-reports-2026.workers.dev/webhooks/cashfree` |
| `[vars]` | `SITE_BASE_URL` | `https://klarweg.in` → return `https://klarweg.in/account/index.html?order_id={order_id}` |

Cashfree dashboard (Production): klarweg.in whitelisted (Approved); webhook
endpoint "NOTIFY_URL" (per-order `notify_url`), version 2023-08-01, success
payment — matching `CASHFREE_API_VERSION`.

`src/cashfree-config.js` refuses checkout and webhooks if the mode, the App ID
prefix and the secret key prefix disagree, so a half-applied change fails
closed (503) rather than charging in the wrong environment.

Sandbox keys stay usable for development through
`wrangler.payments-sandbox.toml` (its own Worker and database, secrets only).

## Code drift: do not `npm run deploy:access` from main blindly

On 2026-10-30 the live Worker ran code built from `31ce4f8` (verified by
downloading the deployed bundle and diffing it against a `wrangler deploy
--dry-run` build of that commit). Main carried 15 undeployed Worker commits
(exam proxy, staff MFA, consultations, enrolments, D1 migrations 013/014).
The course-payment path (`orders.js`, `entitlements.js`, `products.js`,
`webhooks-cashfree.js` signature/verification, `cashfree-config.js`) is
functionally identical in both.

Go-live was therefore a **configuration-only** change on the existing live
code: Cloudflare dashboard → Workers → `klarweg-access` → Settings →
Variables and Secrets — set `CASHFREE_SECRET_KEY` (Secret), then
`CASHFREE_ENV` and `CASHFREE_APP_ID` (Text) to the values in `wrangler.toml`,
and deploy. No other variable changes. This file and `wrangler.toml` record
that state so the next reviewed code deploy keeps it.

## Verification (no payment)

- `GET https://klarweg-access.klarweg-issue-reports-2026.workers.dev/` →
  `"environment":"production"`.
- `npx wrangler versions view <id> --name klarweg-access` shows only the two
  vars and the secret changed versus the previous version.
- A `POST /webhooks/cashfree` with a bogus signature → 401 `bad-signature`
  (proves the production secret is configured and checked; a 503
  `not-configured` means the mode/App ID/secret disagree).

A first real low-value transaction needs separate owner approval.

## Rollback

Cloudflare dashboard → `klarweg-access` → Deployments → roll back to the
previous version, or `npx wrangler rollback <previous-version-id> --name
klarweg-access`. That restores sandbox mode instantly. Then revert the
`wrangler.toml` commit so the repo matches.
