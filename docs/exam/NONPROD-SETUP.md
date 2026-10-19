# Non-production environment — setup, acceptance and teardown (exam portal)

**Status:** the configuration files and the site build tool are in the repo (§2, §3 step 8); nothing has been
provisioned. **Every command here is an owner action** on the owner's
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

## 2. Configuration (in the repo — separate files, production files untouched)
The non-prod settings live in **their own files**, deployed with `wrangler --config`. They are deliberately **not**
`[env.nonprod]` sections in `wrangler.toml`: the production deploy reads `wrangler.toml` with plain `wrangler deploy`,
and `scripts/predeploy-access-check.mjs` reads its vars with first-match patterns, so a second set of vars in that file
could be picked up by mistake. The guard now **refuses** a production `wrangler.toml` that contains an `[env.*]`
section or `CORS_EXTRA_ORIGINS`.

| File | Worker | What it sets |
|---|---|---|
| `exam-worker/wrangler.nonprod.toml` | `klarweg-exam-nonprod` | `workers_dev = false` (reachable only through the service binding); `EXAM_ENABLED` and `EXAM_SYNTHETIC_FORMS` on, mock and production forms **off**; D1 `klarweg-exam-nonprod`; private R2 `klarweg-exam-content-nonprod` / `klarweg-exam-recordings-nonprod`; Cron `*/5 * * * *` |
| `access/worker/wrangler.nonprod.toml` | `klarweg-access-nonprod` | D1 `klarweg-access-nonprod`; `EXAM_ROUTES = "on"`; service binding `EXAM` → `klarweg-exam-nonprod`; `CORS_EXTRA_ORIGINS = "http://localhost:8788"`; `AI_ENABLED = "false"`, `SPEECH_MODE = "off"`; **no** TUTOR / RESOURCES bindings, **no** Cashfree or Google vars (email sign-up only) |

Both files carry a placeholder `database_id` (`00000000-…`) until §3 step 1. `scripts/nonprod-config.test.mjs`
(part of `npm test`) fails if either file names a production Worker, database, bucket or app id, enables mock or
production forms, AI, speech, payments or Google, contains a secret-like key, or if a production `wrangler.toml`
gains non-prod settings.

**CORS for the test site.** The production allow-list in `access/worker/src/cors.js` is unchanged. The Access Worker
also accepts the origins in `CORS_EXTRA_ORIGINS` — exact origins only (`https://host[:port]` or
`http://localhost|127.0.0.1[:port]`, port 1–65535 and never the default port; no credentials, path, query or
fragment); one invalid entry makes the whole value ignored (fails closed). Production never
sets it, and the guard refuses it in `wrangler.toml`. Tests: `access/worker/test/cors-extra-origins.test.mjs`.

## 3. Provisioning (owner, in this order)
1. `wrangler d1 create klarweg-exam-nonprod` and `wrangler d1 create klarweg-access-nonprod`; copy each id into the `database_id` of the matching `wrangler.nonprod.toml` (ids are not secrets; commit them through a reviewed PR — `scripts/nonprod-config.test.mjs` rejects a production id. Never edit `wrangler.toml`).
2. Create both R2 buckets. Keep them **private**: no public domain, no r2.dev.
3. **Schemas:**
   - exam: `cd exam-worker && npx wrangler d1 migrations apply klarweg-exam-nonprod --config wrangler.nonprod.toml --remote`;
   - Access: `access/worker/schema.sql`, then every `access/worker/migration-*.sql` in order, **including
     `migration-011-totp.sql`**, against `klarweg-access-nonprod` with `npx wrangler d1 execute klarweg-access-nonprod --config wrangler.nonprod.toml --remote --file <file>` (from `access/worker`).
4. **Content:**
   - `npm run exam:build -- --out <dir outside the repo>`, test purpose with synthetic forms. Never `--purpose learner`
     here until the release set is decided.
   - Upload `releases/…` to the content bucket with the same keys.
   - Run `registry.sql` on the exam D1.
5. **Secrets** (`npx wrangler secret put <NAME> --config wrangler.nonprod.toml` in the Worker's folder; generate with `openssl rand -base64 32`; keep copies offline; never
   paste them anywhere else):
   - `EXAM_PROXY_SECRET`: the **same** value on both Workers;
   - `EXAM_MEDIA_SECRET`: exam Worker;
   - `TOTP_ENC_KEY`: Access Worker; must be 32 bytes, base64;
   - `RATE_SALT`: Access Worker;
   - no Google, Cashfree or AI secrets: those flows are off in this environment.
6. **Deploy** the exam Worker, then the Access Worker, each from its folder with
   `npx wrangler deploy --config wrangler.nonprod.toml`. Never plain `wrangler deploy` and never `npm run deploy:access`
   for this environment (those deploy production).
7. **Test account access:** sign up a test account on the non-prod Access Worker, then:
   - grant exam access (`RUNBOOK-EXAM-INFRA.md` §3 step 8, against the non-prod exam D1);
   - grant the rater role for a second test account (§3a).
8. **Site:** build a copy of `exam/` that talks to the non-prod Access Worker only, and serve it locally:
   ```sh
   node exam-content/tools/build-nonprod-site.mjs --api https://klarweg-access-nonprod.<subdomain>.workers.dev --out <empty dir outside the repo>
   python3 -m http.server 8788 -d <that dir>        # or: npx http-server <that dir> -p 8788
   ```
   - The tool sets `<meta name="kw-exam-api">` and rewrites the CSP `connect-src` to `'self' blob: <api>` (production
     hosts removed). It refuses the production Access Worker or klarweg.in, an output inside the repo, or a non-empty
     output directory. The repository's `exam/` is never modified (`exam-content/test/nonprod-site.test.mjs`).
   - Open `http://localhost:8788/index.html` (learner) and `/rater.html` (rater). The page (localhost) and the API
     (workers.dev) are different sites, so the session cookie is the same cross-site `SameSite=None; Secure` cookie the
     production site uses — this is the path A1–A4 must prove.
   - To serve from a different origin, change `CORS_EXTRA_ORIGINS` in `access/worker/wrangler.nonprod.toml` and
     redeploy the non-prod Access Worker. Do not put the test site on the Pages allowlist.

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

### Acceptance record (filled from real runs only; full evidence in the comment on PR #131)
Environment build: commit `bebfacb` (= main `b1cdb72` for `access/`, `exam-worker/`, `exam/`) · deployed Access first ·
Access Worker version `b7fa8c2d` · exam Worker version `8b2392cb` (both from `bebfacb`, standard non-prod config)
Browser(s) and version(s): headless Google Chrome on macOS (version not captured at run time; 156.0.8078.35 installed on
2026-10-20) on the built non-prod site; API checks with Node 24
Tester: engineering session (Claude), with the owner's authorization for non-production only. Synthetic `@example.com`
accounts. `TOTP_ENC_KEY` source of record: the owner's macOS Keychain (`klarweg-nonprod-TOTP_ENC_KEY`), never in the repo.

| # | Date | Tester | Result (pass / fail / not run) | Evidence (screenshot, log, audit_log row) | Notes |
|---|---|---|---|---|---|
| A1 | 2026-10-19 | engineering (Claude) | pass | API + real browser: no grant → `no_access`/403; sign-in on the non-prod site sets the cross-site cookie | — |
| A2 | 2026-10-19 | engineering (Claude) | pass (Chrome only) | Chrome `--test-third-party-cookie-phaseout`: "Cookies blockiert", not "Bitte anmelden" | **Safari / real user settings: manual, not run** |
| A3 | 2026-10-19 | engineering (Claude) | pass, except Sprechen with a real microphone | Lesen 30, Hören real time (16 plays, 30 answers, signed media `private, no-store`), Schreiben 3 texts frozen, Sprechen synthetic chunks, result, history, own playback. Essay fix #134 in a real browser: server rows hold the text (checked in D1, not the UI label) | **Real microphone: manual, not run** |
| A4 | 2026-10-19/20 | engineering (Claude) | pass (rows 1–11) | RUNBOOK-RATER-2FA §2 incl. row 5 lock, row 10 on the corrected code (staff 503, no state change), rollback rehearsal (exam back first → 401), row 11 reset; key lifecycle 2026-10-20 (§5 rotation, re-enrol, remove → 503, restore same key → verifies) | — |
| A5 | 2026-10-19 | engineering (Claude) | pass | Sprechen 75/50 → 63 half-up; Schreiben 75/25 → third rating; lead 75 replaces (OD-30); lead read audited | — |
| A6 | 2026-10-19 | engineering (Claude) | pass (API level) | takeover: `lease_held` / `lease_superseded`; idle > 60 s: `lease_expired`, reacquired, save lands | **Real laptop sleep: manual, not run** |
| A7 | 2026-10-19 | engineering (Claude) | pass | `EXAM_ROUTES` off → 404; `EXAM_ENABLED` off → 503 `exam_disabled`; restored → 200 | — |
| A8 | 2026-10-19 | engineering (Claude) | pass | expired Lesen closed by the cron alone after 239 s (`module_submitted`) | — |
| A9 | 2026-10-19 | engineering (Claude) | pass | both D1 exported (private); Time Travel restore to a bookmark removed a marker change; A1 re-checked | — |
| A10 | — | engineering (Claude) | not run | — | Gate for the protected draft PRs #71/#73; needs their documented approval first |
| A11 | 2026-10-19 | engineering (Claude) | pass (API level) | no key, explanation, evidence or script in any response before submission; control: present after submission | DevTools spot check in a browser: manual equivalent |

Accepted by (owner): `________` Date: `________` — **unsigned**: A10 is not run, and A2 (Safari), A3 (real microphone) and A6
(real sleep) still need their manual checks. Invalid runs (test-side mistakes, each diagnosed and re-run) are listed in the PR #131 record.

## 5. Teardown or reset
- **Reset data:** drop and recreate both non-prod D1 databases, then repeat §3 step 3 onward.
- **Remove everything:**
  1. Delete both Workers.
  2. Empty, then delete, the R2 buckets.
  3. Delete both D1 databases.
  4. Optionally reset the `database_id` values in both `wrangler.nonprod.toml` files to the placeholder.
- **Secrets** of the non-prod Workers disappear with the Workers. Destroy the offline copies too.
