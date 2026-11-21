# Live classes: waitlist backend — engineering proposal

Status: **PROPOSAL, not approved.** Nothing in this document is implemented,
migrated or deployed. Written 2026-11-17 for the owner's review alongside
PR #344 (the live-classes page redesign).

## 1. Why

Today the waitlist form on `live-classes.html` only prepares an email in the
learner's own mail app. A learner who never presses **Send** is not on the
list, Klarweg cannot confirm anything, and leads live in one inbox. The page
is honest about this (no confirmation or reply-time promise), but it loses
learners and gives the owner no structured list.

Goal: a learner submits once, gets a confirmation that is actually sent, and
the owner sees a clean, de-duplicated list of consenting leads. Nothing is
charged and nothing is booked; the waitlist stays free and non-binding.

## 2. Scope

In scope: one public submit endpoint, email double opt-in, persistent storage,
spam and abuse controls, privacy controls (retention, withdrawal, erasure), an
owner-only admin view and CSV export, a kill switch, tests and a staged rollout.

Out of scope: payment, enrolment, consultation booking (`consultations.js`
stays separate and off), marketing email, CRM sync, analytics on lead data.

## 3. Where it runs

**Recommendation: a new module `access/worker/src/waitlist.js` in the existing
`klarweg-access` Worker**, reached at the same-origin route `klarweg.in/api/*`
that login already uses.

- Reuses what exists: D1 binding `DB`, `cors.js`, the fixed-window
  `rate_counters` table and `ratelimit.js` helpers (`networkOf`, HMAC'd IP
  buckets), the `wrangler.nonprod.toml` environment, and the guarded
  `npm run deploy:access` path.
- Isolation rules (same discipline as `consultations.js`): the module never
  imports `entitlements.js`, `products.js`, `enrolments.js` or any Cashfree
  code, and only touches its own tables.
- Its own kill switch `WAITLIST_ENABLED` (default `false`). When it is off,
  every waitlist route returns `503 {"ok":false,"code":"waitlist_off"}` and the
  page falls back to the current email hand-off.

Alternative considered: a separate small Worker with its own D1. Cleaner blast
radius, but it duplicates rate limiting, CORS and deploy tooling. The access
Worker is payment-critical, so if the owner prefers zero shared risk, this is
the fallback design; the API below does not change.

Deployment follows the standing rule: **never `deploy:access` from main
blindly** — a deploy branch from the reviewed commit, non-prod first, with the
live version id and rollback id recorded.

## 4. API

| Method | Path | Who | Purpose |
|---|---|---|---|
| `POST` | `/api/live/waitlist` | public | Submit or update a waitlist request |
| `POST` | `/api/live/waitlist/confirm` | public (token) | Confirm the email (double opt-in) |
| `POST` | `/api/live/waitlist/withdraw` | public (token) | Leave the waitlist; data erased |
| `GET` | `/api/live/admin/waitlist` | owner only | List, filter, paginate |
| `PATCH` | `/api/live/admin/waitlist/:id` | owner only | Set status / internal note |
| `GET` | `/api/live/admin/waitlist.csv` | owner only | Export (audited) |
| `DELETE` | `/api/live/admin/waitlist/:id` | owner only | Erase on request (audited) |

### Submit request (JSON, max 8 KB)

```json
{
  "name": "…", "email": "…", "phone": "…",
  "level": "Complete beginner", "goal": "Goethe exam",
  "courseId": "live-a1", "teacherId": "", "times": ["Weekday evenings"],
  "message": "…", "consent": true, "consentVersion": "2026-11-privacy-v1",
  "turnstileToken": "…", "hp": "", "startedAt": 1763380000000
}
```

### Uniform response

Always `202 {"ok":true,"next":"check_email"}` for an accepted, duplicate or
silently-dropped (honeypot) submission, so the endpoint never reveals whether
an email is already on the list. `400` only for field errors the learner can
fix (with field keys, never echoing values), `429` for rate limits, `503` when
switched off.

## 5. Data model (`migration-017-live-waitlist.sql`)

```sql
CREATE TABLE live_waitlist (
  id               TEXT PRIMARY KEY,            -- wl_<uuid>
  email_norm       TEXT NOT NULL,               -- lower-cased, trimmed
  course_id        TEXT NOT NULL,               -- published course id only
  name             TEXT NOT NULL,
  phone            TEXT,
  level            TEXT NOT NULL,
  goal             TEXT NOT NULL,
  teacher_id       TEXT,
  times            TEXT NOT NULL DEFAULT '[]',  -- JSON array from an allowlist
  message          TEXT,
  status           TEXT NOT NULL CHECK (status IN
                     ('pending','confirmed','contacted','enrolled','withdrawn')),
  consent_version  TEXT NOT NULL,
  consent_at       INTEGER NOT NULL,
  confirm_hash     TEXT,                        -- SHA-256 of the one-time token
  confirm_expires  INTEGER,
  withdraw_hash    TEXT,                        -- SHA-256 of the withdraw token
  confirm_sends    INTEGER NOT NULL DEFAULT 0,
  created_at       INTEGER NOT NULL,
  updated_at       INTEGER NOT NULL,
  confirmed_at     INTEGER,
  admin_note       TEXT,
  UNIQUE (email_norm, course_id)
);
CREATE INDEX live_waitlist_status ON live_waitlist (course_id, status, created_at);

CREATE TABLE live_waitlist_audit (            -- admin actions only, no lead content
  at INTEGER NOT NULL, actor TEXT NOT NULL, action TEXT NOT NULL,
  target TEXT, detail TEXT
);
```

No raw IP address, user agent or fingerprint is stored. Rate limiting uses the
existing HMAC'd network buckets, which expire with their window.

## 6. Validation (server-side; the browser's checks are a convenience only)

- `Content-Type: application/json`, body ≤ 8 KB, `Origin` must be
  `https://klarweg.in` (and the non-prod preview origin in non-prod only).
- `email`: ≤ 254 chars, one `@`, a dotted domain, no whitespace; normalised.
- `name` ≤ 100, `phone` ≤ 30 (digits, spaces, `+ - ( )` only), `message` ≤ 1000;
  control characters stripped; a name containing a URL is rejected.
- `level`, `goal`, `times[]`: exact matches against server-side allowlists
  that mirror the form options (the finder never submits anything else).
- `courseId`: must be a published, non-draft course id from a server-side
  list (`live-a1` today); `teacherId` empty or a published full profile.
- `consent` must be `true` and `consentVersion` must equal the current
  privacy-notice version; both are stored.
- Unknown fields are ignored, never stored.

## 7. Spam and abuse

1. **Cloudflare Turnstile** (managed, privacy-friendly; free), verified
   server-side with `TURNSTILE_SECRET` against the expected hostname and
   action `waitlist`. Failure → `400 {"code":"challenge"}`.
2. **Honeypot** field `hp` and a minimum fill time (`startedAt` ≥ 3 s ago):
   failures get the uniform `202`, nothing stored, nothing sent.
3. **Rate limits** (fixed windows in `rate_counters`): 5 submits / hour per IP
   network; 3 confirmation emails / day per email address; a global ceiling of
   300 submits / day that trips the kill switch logic and alerts the owner.
4. **Email bombing guard**: a confirmation is sent at most once per 10 minutes
   per address and at most 3 times in total per request.

## 8. Duplicates

`UNIQUE (email_norm, course_id)`. A repeat submission for the same course
updates the stored preferences (level, goal, times, message) and, if still
`pending`, re-sends the confirmation within the limits above. It never creates
a second row and never tells the submitter that the address was already known.

## 9. Confirmation (double opt-in), reliably

- A transactional email provider is needed; the Worker has none today.
  **Owner decision:** Postmark or Resend (both have free/low tiers and HTTPS
  APIs usable from Workers). Cloudflare Email Routing cannot send to arbitrary
  learners. The sending domain gets SPF, DKIM and DMARC on `klarweg.in`.
- The email contains a one-time link to a static page
  `live-classes-confirm.html#t=<token>`. The token is in the **fragment**, so it
  never reaches server logs, and the page confirms with a `POST` only after the
  learner presses **Confirm** — mail scanners that pre-fetch links cannot
  confirm on someone's behalf.
- Token: 32 random bytes, only its SHA-256 stored, 7-day expiry, single use.
- Sending is attempted in the request (`ctx.waitUntil`) and, on a provider
  error, retried by a scheduled handler (cron every 15 min, max 3 tries). The
  learner is told "check your inbox to confirm" only after the API accepted the
  request; the page never claims "you're on the list" before confirmation.
- Every email carries a withdraw link (`#w=<token>`, same mechanism).

## 10. Privacy safeguards

- Minimal data: only the fields the owner needs to plan a batch.
- Purpose limitation: used only to contact the learner about live courses;
  never for marketing of other products without separate consent.
- Retention: unconfirmed rows deleted after **14 days**; confirmed rows deleted
  **12 months** after the last status change, or immediately on withdrawal
  (cron job, logged as counts only).
- Rights: withdraw by link; erasure and access on request via the admin view.
- No lead data in Worker logs, analytics or error messages (structured logs
  carry ids and codes only).
- `privacy.html` needs a waitlist section (purpose, fields, retention,
  processor = email provider, withdrawal). This is legal copy: **owner/legal
  approval required**, written with India's DPDP Act 2023 in mind. Not
  implemented here.

## 11. Admin access to leads

**Recommendation: Cloudflare Access (Zero Trust, free tier) in front of the
admin paths**, allowing only the owner's Google identity, plus the Worker
verifying the `Cf-Access-Jwt-Assertion` JWT against the team's public keys
(defence in depth: a request that bypasses Access is still refused).

- A small static admin page (not in the Pages allowlist; served by the Worker
  behind Access) lists leads by course and status, with filters, status
  changes, internal notes, CSV export and erase.
- Every export, status change and erasure writes `live_waitlist_audit`.
- CSV export escapes formula prefixes (`= + - @`) to prevent spreadsheet
  injection.

Alternative: the existing session + TOTP second factor already used for exam
admins (`mfa-routes.js`), with a new `live_admin` role. Workable, but adds a
role system to a public-learner database; Access keeps admins out of it.

## 12. Frontend changes (later, separate PR)

- The form posts JSON to `/api/live/waitlist` with a Turnstile token.
- States: sending → "Check your inbox to confirm your place on the waitlist" →
  confirmed page. Field errors map to the existing `aria-invalid` +
  `aria-describedby` pattern.
- If the API returns `503` or is unreachable, the page shows the current
  email hand-off, unchanged.
- The copy promises a confirmation email only once the backend is live and
  verified; still no reply-time promise.

## 13. Tests

- Unit (`access/worker/test/waitlist.test.mjs`): validation allowlists, size
  limits, uniform responses, dedupe/update, token hashing and expiry, rate
  limits, honeypot, kill switch, admin JWT verification, CSV escaping,
  retention job.
- Non-prod integration: migration on the non-prod D1, Turnstile test keys,
  provider sandbox, full submit → email → confirm → withdraw flow.
- Browser suite: the form against a mocked endpoint (202, 400, 429, 503).

## 14. Rollout and rollback

1. Owner approves this proposal, the email provider and the privacy copy.
2. Implement on a feature branch; unit tests; code review.
3. Non-prod: migration 017, deploy, end-to-end with test keys.
4. Production: migration 017 (additive; no existing table changes), deploy
   from a deploy branch with `WAITLIST_ENABLED=false`, record version ids.
5. Enable; one real submission by the owner; check the admin view.
6. Ship the frontend PR.

Rollback: set `WAITLIST_ENABLED=false` (the page falls back to email) or roll
back to the recorded Worker version. The table is additive and can stay.

## 15. Cost

Workers, D1 and Turnstile: within the current plan / free. Cloudflare Access:
free up to 50 users. Email: provider free tier at expected volume.

## 16. Owner decisions needed

1. Approve the design (module in `klarweg-access` vs. a separate Worker).
2. Email provider (Postmark or Resend) and the sending address.
3. Admin access: Cloudflare Access (recommended) or session + TOTP role.
4. Retention periods (14 days unconfirmed / 12 months confirmed).
5. Privacy-notice wording (legal review).
6. What to do with requests already received by email (contact them manually
   to re-confirm; no automatic import without consent).
