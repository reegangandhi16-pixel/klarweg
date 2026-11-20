# Forgot password / reset password

Status: built and tested; **not deployed, switched off** (`PASSWORD_RESET = "off"`).
Owner-only steps are marked **OWNER**. Nothing here needs a new paid provider,
an API key or a secret.

## How it works

| Step | Where | What happens |
|---|---|---|
| 1 | `account/index.html` | "Forgot password?" link next to the Password label → `account/forgot-password.html` |
| 2 | `POST /api/auth/password/forgot {email}` | Always the same neutral 200 reply. The email is sent **after** the response (`ctx.waitUntil`), so the reply and its timing are the same for every address |
| 3 | Email (Cloudflare Email Service) | Password account → link `https://klarweg.in/account/reset-password#token=<43 chars>`, valid **30 min**, **single use**. Google-only account → an email saying to use "Sign in with Google" (no link, no password created). Unknown address → nothing |
| 4 | `account/reset-password.html` | Reads the token from the `#fragment` (never sent to a server or in a Referer), removes it from the address bar, checks it (`POST /auth/password/reset/check`), shows the form or "This link no longer works" |
| 5 | `POST /api/auth/password/reset {token,password}` | Atomic single use, new PBKDF2 hash, **every session of the account revoked**, other open links deleted, "your password was changed" email, cookie cleared. The learner signs in again (`index.html?mode=login&reset=done` shows a notice) |

Not touched: entitlements, orders, progress, saved words, `google_sub`, phone, name, email.

### Security properties
- D1 stores only `SHA-256(token)` (`password_reset_tokens`, migration 017). Tokens, email addresses and
  links are never logged; mail failures log only Cloudflare's error code.
- No email enumeration. The same 200 body is returned for unknown, password and Google-only addresses.
  While the feature is off, `/forgot` answers 503 `reset_unavailable` for **every** address.
- Rate limits use the existing `rate_counters` table with pseudonymous daily HMAC buckets under `RATE_SALT`:
  - 5 requests per network per 15 min (429).
  - 3 emails per address per hour (further requests get the same reply but send nothing).
  - `PASSWORD_RESET_DAILY_EMAILS` (200) emails per UTC day across all addresses, to protect the Email Service quota.
  - 20 failed token checks per network per 15 min.
- The reset link is always built from `SITE_BASE_URL`, which must be https and falls back to `https://klarweg.in`.
  It is never built from request input.
- The existing CSRF guard covers all three routes: a foreign `Origin` gets 403.
- Existing passwords are never emailed (they are not recoverable: PBKDF2).

## OWNER: switching it on

1. **Check the plan.** Sending to any recipient needs **Workers Paid**. On Workers Paid,
   3,000 emails a month are included, then $0.35 per 1,000 (Cloudflare pricing page, read 2026-11-20;
   Email Sending is labelled *Beta*). Cloudflare dashboard → Workers & Pages → Plans. If the account is on
   Workers Free, stop here and decide. Free only sends to *verified* addresses, which is useless for learners.
2. **Onboard the domain.** Dashboard → Compute → **Email Service** → **Email Sending** → *Onboard Domain* →
   `klarweg.in` → review records → Done. klarweg.in already uses Cloudflare DNS, so Cloudflare adds the
   records itself:
   - `MX cf-bounce.klarweg.in` → route1/2/3.mx.cloudflare.net
   - `TXT cf-bounce.klarweg.in "v=spf1 include:_spf.mx.cloudflare.net ~all"`
   - `TXT cf-bounce._domainkey.klarweg.in` (DKIM key from Cloudflare)
   - `TXT _dmarc.klarweg.in "v=DMARC1; p=reject;"`. This is added only because none exists today.
     Nothing else sends as @klarweg.in, so `p=reject` is safe. Use `p=none` if you later add
     another sender (e.g. a mailbox provider) before configuring it.

   This does **not** add MX records on klarweg.in itself and does not change the website records.
   Wait for the dashboard to show the domain as ready (DNS usually 5–15 min).
3. **Deploy the Worker change** (Claude can prepare this; it needs your go). The live Worker runs from a deploy
   branch, not main (see the access deploy runbook). The order:
   1. Apply `migration-017-password-reset.sql` to the prod D1 `klarweg-access`. Take a bookmark first.
      The migration only adds a table.
   2. In `wrangler.toml`, uncomment the `[[send_email]]` block and set `PASSWORD_RESET = "on"`.
   3. Run `npm run deploy:access -- <usual flags> --allow-password-reset`. The guard refuses `"on"` without the flag
      or without the binding.
   4. Use the versions upload → diff → deploy flow as usual.

   Rollback: deploy the previous version, or set `PASSWORD_RESET = "off"` (the kill switch; the page then shows
   the support fallback).
4. **Publish the pages.** Merge the PR. `account/forgot-password.html` and `account/reset-password.html`
   are in `.github/pages-allowlist.txt`. The pages are safe to publish before step 3: while the Worker
   doesn't know the routes or the flag is off, the forgot page shows "Reset by email is not available yet" with
   the support address.
5. **Smoke test (you, on your own account):**
   1. Request a reset for your email.
   2. Check that the email arrives, the sender is `Klarweg <no-reply@klarweg.in>`, and it isn't in spam.
   3. Open the link on your phone and set a new password.
   4. Check that other devices are signed out, that you can sign in with the new password, and that the old link now shows "no longer works".
   5. Request a reset for an address with no account and check that the page message is identical.

## While it is off
The "Forgot password?" link is visible. The forgot page explains that reset by email is not available yet and
points to klarwegofficial@gmail.com. Verify the sender owns the account email before helping, and never ask for
or send a password.

## Tests
- `node --test access/worker/test/password-reset.test.mjs`: 17 tests covering success, used, concurrent and
  expired links, newer link replaces older, unknown email, Google-only, invalid input, feature off, rate limits,
  mail failure, no logging, entitlements preserved, CSRF, link origin, and auth regression. These also run in `npm test`.
- `npm run test:password-reset:browser`: headless Chrome, desktop and phone, with the real Worker in-process.
  83 checks, plus screenshots of every state.
