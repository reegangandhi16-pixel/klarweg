# Non-production environment — setup, acceptance and teardown (exam portal)

**Status:** documentation only. Nothing has been provisioned. **Every command here is an owner action** on the owner's
Cloudflare account; automation never runs them.

Unlike `RUNBOOK-EXAM-INFRA.md` §3 (staging behind the *production* Access Worker), this environment is **fully
isolated**:
- its own Access Worker and Access D1;
- its own exam Worker, D1 and R2 buckets;
- synthetic content only, no real learners.

The production site, production Access and the chapter database are not touched.

## Why it is needed
Local and CI runs execute everything in-process: in-memory D1, the exam Worker called directly, and same-origin cookies.
They cannot prove:
- the real cookie → Access proxy → service binding path, including third-party-cookie behaviour (`/auth/cookie-probe`);
- real D1/R2 behaviour and limits;
- Cron sweeps and secrets handling;
- the 2FA provisioning steps.

Open items that wait for this environment:
- `RUNBOOK-RATER-2FA.md` §2 (D9);
- the non-production D1 validation runbook (branch `docs/nonprod-d1-validation-runbook`, gate of draft PRs #71/#73);
- EX-04 and EX-05 test targets.

## 1. Before you start
- **Check the Cloudflare plan** (register §G "IMPLEMENTATION-READY" assumption 6): new D1 databases, R2 buckets, Workers,
  Cron Triggers, D1 write limits. The synthetic load is tiny. Decide whether the free tier is acceptable; nothing here
  should create a charge without your decision.
- **Names used below** (change them consistently if you prefer): `klarweg-access-nonprod`, `klarweg-exam-nonprod`, D1
  `klarweg-access-nonprod` / `klarweg-exam-nonprod`, R2 `klarweg-exam-content-nonprod` / `klarweg-exam-recordings-nonprod`.
- **Use a separate test account** in the non-prod Access database, never a learner's account.

## 2. Configuration (add as `[env.nonprod]` sections — reviewed change, not made yet)
**exam Worker** (`exam-worker/wrangler.toml`):
```toml
[env.nonprod]
name = "klarweg-exam-nonprod"
workers_dev = false
[env.nonprod.vars]
EXAM_ENABLED = "on"
EXAM_SYNTHETIC_FORMS = "on"
EXAM_MOCK_FORMS = "off"
EXAM_PRODUCTION_FORMS = "off"
[[env.nonprod.d1_databases]]
binding = "DB"
database_name = "klarweg-exam-nonprod"
database_id = "<id from step 3.1>"
migrations_dir = "migrations"
[[env.nonprod.r2_buckets]]
binding = "CONTENT"
bucket_name = "klarweg-exam-content-nonprod"
[[env.nonprod.r2_buckets]]
binding = "RECORDINGS"
bucket_name = "klarweg-exam-recordings-nonprod"
[env.nonprod.triggers]
crons = ["*/5 * * * *"]
```
**Access Worker** (`access/worker/wrangler.toml`): the same pattern.
- `name = "klarweg-access-nonprod"`.
- Its own D1 `klarweg-access-nonprod`.
- `EXAM_ROUTES = "on"`.
- `[[env.nonprod.services]] binding = "EXAM", service = "klarweg-exam-nonprod"`.
- Copy the other vars the Access Worker needs.
- Payment variables should point to the sandbox, or stay unset.

## 3. Provisioning (owner, in this order)
1. `wrangler d1 create klarweg-exam-nonprod` and `wrangler d1 create klarweg-access-nonprod`; copy the ids into §2.
2. Create both R2 buckets. Keep them **private**: no public domain, no r2.dev.
3. **Schemas:**
   - exam: `cd exam-worker && npx wrangler d1 migrations apply klarweg-exam-nonprod --env nonprod --remote`;
   - Access: `access/worker/schema.sql`, then every `access/worker/migration-*.sql` in order, **including
     `migration-011-totp.sql`**, against `klarweg-access-nonprod` with `wrangler d1 execute … --remote --file`.
4. **Content:**
   - `npm run exam:build -- --out <dir outside the repo>`, test purpose with synthetic forms. Never `--purpose learner`
     here until the release set is decided.
   - Upload `releases/…` to the content bucket with the same keys.
   - Run `registry.sql` on the exam D1.
5. **Secrets** (`wrangler secret put … --env nonprod`; generate with `openssl rand -base64 32`; keep copies offline; never
   paste them anywhere else):
   - `EXAM_PROXY_SECRET`: the **same** value on both Workers;
   - `EXAM_MEDIA_SECRET`: exam Worker;
   - `TOTP_ENC_KEY`: Access Worker; must be 32 bytes, base64;
   - `RATE_SALT`: Access Worker;
   - Google sign-in and payment secrets: only if those flows are part of the test, sandbox values only.
6. **Deploy** the exam Worker, then the Access Worker (`--env nonprod`).
7. **Test account access:** sign up a test account on the non-prod Access Worker, then:
   - grant exam access (`RUNBOOK-EXAM-INFRA.md` §3 step 8, against the non-prod exam D1);
   - grant the rater role for a second test account (§3a).
8. **Site:** serve `exam/` from a non-public origin.
   - For example a local static server, or a Pages **preview** deployment that is not on the allowlist.
   - Set `<meta name="kw-exam-api">` to the non-prod Access URL.
   - Add that origin to the non-prod Access CORS list only. The production `cors.js` list stays unchanged.

## 4. Acceptance — record date, tester and result for every line
| # | Check | Pass criterion |
|---|---|---|
| A1 | Sign-in from the non-prod site; `/exam/v1/availability` | 200 for the granted account, 403 for an account without a grant |
| A2 | Third-party cookies blocked in the browser | Screen "Cookies blockiert" (not "Bitte anmelden") |
| A3 | Full learner journey on one practice form (Lesen, Hören, Schreiben, Sprechen with a real microphone, result, history) | Completes; result and own recording visible |
| A4 | Rater journey with 2FA (`RUNBOOK-RATER-2FA.md` §2, all 11 rows) | All pass |
| A5 | Two raters finish the attempt; then a case that triggers a third rating | Final Sprechen and Schreiben scores (OD-07 half-up); with a third rating the lead's total, rounded half-up, is the result (OD-30) |
| A6 | Lease: second browser takes over; laptop sleep > 60 s mid-Lesen | Takeover screen in the first browser; after sleep, answers are saved without reload |
| A7 | Kill switch (`RUNBOOK-EXAM-INFRA.md` §2) | `EXAM_ROUTES` off → 404; `EXAM_ENABLED` off → 503 |
| A8 | Cron sweep | Expired modules are closed (`audit_log`) |
| A9 | Backup / restore rehearsal | D1 export, Time Travel restore to a point before a test change; re-check A1 |
| A10 | Non-prod D1 validation runbook | Run and recorded (gate for draft PRs #71/#73) |
| A11 | Confidentiality spot check in the browser (DevTools network tab during Lesen/Hören) | No key, explanation or script reaches the page before submission |

## 5. Teardown or reset
- **Reset data:** drop and recreate both non-prod D1 databases, then repeat §3 step 3 onward.
- **Remove everything:**
  1. Delete both Workers.
  2. Empty, then delete, the R2 buckets.
  3. Delete both D1 databases.
  4. Remove the `[env.nonprod]` sections.
- **Secrets** of the non-prod Workers disappear with the Workers. Destroy the offline copies too.
