# Forgot password / reset password

Status: built and tested; **not deployed, switched off** (`PASSWORD_RESET = "off"`).
Owner-only steps are marked **OWNER**. On **Workers Free**, use Resend's
free transactional-email tier (up to 100 emails/day and 3,000/month, checked
2026-11-20). It requires a verified sender domain and a **private** Worker
secret `RESEND_API_KEY`, but no Cloudflare upgrade. Never commit the API key.

## How it works

| Step | Where | What happens |
|---|---|---|
| 1 | `account/index.html` | "Forgot password?" link next to the Password label → `account/forgot-password.html` |
| 2 | `POST /api/auth/password/forgot {email}` | Always the same neutral 200 reply. The email is sent **after** the response (`ctx.waitUntil`), so the reply and its timing are the same for every address |
| 3 | Email (Resend Free via Cloudflare Worker) | Password account → link `https://klarweg.in/account/reset-password#token=<43 chars>`, valid **30 min**, **single use**. Google-only account → an email saying to use "Sign in with Google" (no link, no password created). Unknown address → nothing |
| 4 | `account/reset-password.html` | Reads the token from the `#fragment` (never sent to a server or in a Referer), removes it from the address bar, checks it (`POST /auth/password/reset/check`), shows the form or "This link no longer works" |
| 5 | `POST /api/auth/password/reset {token,password}` | Atomic single use, new PBKDF2 hash, **every session of the account revoked**, other open links deleted, "your password was changed" email, cookie cleared. The learner signs in again (`index.html?mode=login&reset=done` shows a notice) |

Not touched: entitlements, orders, progress, saved words, `google_sub`, phone, name, email.

### Security properties
- D1 stores only `SHA-256(token)` (`password_reset_tokens`, migration 017). Tokens, email addresses and
  links are never logged; mail failures log only a sanitized provider/error status code.
- No email enumeration. The same 200 body is returned for unknown, password and Google-only addresses.
  While the feature is off, `/forgot` answers 503 `reset_unavailable` for **every** address.
- Rate limits use the existing `rate_counters` table with pseudonymous daily HMAC buckets under `RATE_SALT`:
  - 5 requests per network per 15 min (429).
  - 3 emails per address per hour (further requests get the same reply but send nothing).
  - `PASSWORD_RESET_DAILY_EMAILS` (45) reset-request emails per UTC day across all addresses, to leave room under the Resend Free quota for the second (password-changed) notification.
  - 20 failed token checks per network per 15 min.
- The reset link is always built from `SITE_BASE_URL`, which must be https and falls back to `https://klarweg.in`.
  It is never built from request input.
- The existing CSRF guard covers all three routes: a foreign `Origin` gets 403.
- Existing passwords are never emailed (they are not recoverable: PBKDF2).

## OWNER: Workers Free + Resend Free setup

**Keep Cloudflare Workers Free. Do not onboard Cloudflare Email Sending or
activate a Workers Paid subscription.** Cloudflare's own Email Sending cannot
send to arbitrary learner addresses from Workers Free. Resend's free tier
supports ordinary recipients after domain verification.

1. **Create a Resend Free account** at https://resend.com and remain on the
   $0 plan. The free allowance is 100 emails per day, 3,000 per month.
   Do not enable paid overages, subscriptions or upgrades.
2. **Verify the sender domain:** Resend dashboard → Domains → Add Domain →
   `klarweg.in` (or a dedicated `send.klarweg.in` subdomain). Copy the
   **exact** DNS records displayed by Resend into the Cloudflare DNS zone.
   Do not replace the website's A, AAAA, CNAME records or existing inbound
   MX/SPF records. If using a sending subdomain, change `MAIL_FROM` to
   `no-reply@send.klarweg.in` once that subdomain is verified. Avoid
   duplicate conflicting SPF TXT records; follow Resend's verification UI.
   Confirm the domain status is **Verified** before attempting delivery.
3. **Create a Resend send-only API key**. Keep it private. In the correct
   Cloudflare Worker environment, set it with:
   `npx wrangler secret put RESEND_API_KEY --config access/worker/wrangler.toml`
   (run from the repository root and check the environment/worker carefully).
   The live access Worker is actually deployed from a separate deploy branch;
   the person deploying must set or preserve the secret there, and must not
   overwrite or expose any unrelated payment/AI secrets. Never put the key in
   wrangler.toml, GitHub, CI logs, browser JS or chat messages.
4. **Confirm configuration:** `MAIL_PROVIDER="resend"`,
   `MAIL_FROM` matches the verified sender domain, and
   `PASSWORD_RESET_DAILY_EMAILS="45"`. The provider's daily limit is **100
   total emails**, counting password-changed notifications as well.
   Application-side caps are only a safety margin, not a guarantee:
   monitor usage, errors and account suspension; reduce the cap if needed.
5. **Prepare an isolated staged Worker**, with a test D1 database (never
   the production D1), the approved API secret, and domain already verified.
   Set `PASSWORD_RESET="on"` there and send a real reset email to the
   owner's verified test account. Check inbox/spam, complete reset, verify
   single-use, expiry, sign-out and Google-only handling. Do not enable
   production based only on mock tests. A Resend API `200 OK` means provider
   accepted the email, **not** necessarily inbox delivery.
6. **Production rollout is a separate owner-approved action**, never an
   automatic PR merge or deploy. The live `klarweg-access` Worker runs from
   a separate deploy branch. Take a production D1 bookmark, apply
   `migration-017-password-reset.sql`, port the three auth routes and
   `mailer.js` to that deploy branch, ensure the Resend secret is present,
   then use the established Worker versions upload → diff → deploy process
   with `PASSWORD_RESET="on"` and `--allow-password-reset`. Publish the
   two account pages after checking deployment order. Avoid changing
   Cashfree/payment or unrelated services.
7. **Smoke-test production** with the owner's own account before declaring
   it live: request email; verify sender/inbox/spam; change password on
   phone; confirm all old sessions revoked and old link invalid; check
   neutral response for unknown email. Roll back the Worker version or set
   `PASSWORD_RESET="off"` if delivery fails. A feature-off state is safe
   and points users to support.

The predeploy guard checks the explicit owner opt-in and provider selection,
but cannot prove that a Resend API key is present or the sending domain has
been verified. That requires operator checks and a real send in staging.

## Optional alternative: Cloudflare Email Sending

Requires Workers Paid for arbitrary recipient addresses. This is **not**
selected. The `[[send_email]]` binding stays commented out; if this option
is ever chosen, set `MAIL_PROVIDER="cloudflare"`, onboard the domain, enable
the binding and follow the Cloudflare-specific predeploy guard.

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
