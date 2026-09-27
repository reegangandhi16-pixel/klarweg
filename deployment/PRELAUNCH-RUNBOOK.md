# Klarweg pre-launch runbook

Branch: `prelaunch/ai-tutor` (based on `origin/main` 25fb99f). Nothing on this
branch has been deployed. Production today: GitHub Pages site + `klarweg-access`
Worker version `0d03ad32…` (**Cashfree SANDBOX**) + `klarweg-reports` Worker.

Run `npm test` before every step (64 tests: access Worker, tutor Worker,
benchmark scorer, migration rehearsal, generated-SEO freshness).

---

## 1. Ship this branch (no behaviour change for payments; AI stays off)

Order matters: the new `kw-checkout.js` opens Cashfree only with the
`checkout.mode` the new access Worker returns, so **Workers before Pages**.

| # | Step | Command | Verify | Roll back |
|---|------|---------|--------|-----------|
| 1 | D1 migration (additive: `ai_usage`, `ai_global`) | `cd access/worker && npx wrangler d1 execute klarweg-access --remote --file=migration-012-ai-usage.sql` | `… --command "SELECT name FROM sqlite_master WHERE name LIKE 'ai_%'"` | tables are unused while AI is off; leave them |
| 2 | Deploy private tutor Worker (provider `none`) | `npm run deploy:tutor` | `wrangler deployments list` in `tutor/worker`; it has **no** public URL | `wrangler delete` is safe only after step 3 is rolled back |
| 3 | Deploy access Worker | `npm run deploy:access` (guard, then wrangler deploy) | `curl …workers.dev/` → `"environment":"sandbox"`; `curl …/ai/status` → `{"enabled":false}` | `cd access/worker && npx wrangler rollback 0d03ad32-a1ca-4582-adf8-f767c23ec91a` |
| 4 | Sandbox purchase on the live site (test account) | buy A1 with a Cashfree sandbox card/UPI | account shows A1; `orders.status='paid'`; one `user_entitlements` row | — |
| 5 | Merge to `main` → Pages workflow deploys the allowlisted site | PR review + merge | chapter pages load `chapter-app.js?v=16`, `chapter-tutor.js?v=8`; no "Ask Klara" button | `git revert` the merge commit |

Secrets needed for this release: **none new** (`CASHFREE_SECRET_KEY`, `RATE_SALT` already exist).

## 2. Cashfree LIVE (separate, explicit decision — not part of step 1)

Required values:

| Where | Name | Value |
|---|---|---|
| `access/worker/wrangler.toml` [vars] | `CASHFREE_ENV` | `production` |
| `access/worker/wrangler.toml` [vars] | `CASHFREE_APP_ID` | live app id (does **not** start with `TEST`) |
| Worker secret | `CASHFREE_SECRET_KEY` | live secret (`wrangler secret put CASHFREE_SECRET_KEY`) |
| Worker secret (optional) | `CASHFREE_WEBHOOK_SECRET` | only if Cashfree issues a separate webhook secret |
| Worker var (optional) | `CASHFREE_NOTIFY_URL` | only if the API moves off `…workers.dev` — must be `https://<host>/webhooks/cashfree` |

Cashfree dashboard (production): whitelist `https://reegangandhi16-pixel.github.io`
and `https://klarweg.in` for checkout; webhook API version `2023-08-01`
(orders send `notify_url` per order, so no static webhook URL is required).

Deploy: `npm run deploy:access -- --allow-cashfree-env-change=production`.

Built-in interlocks (the Worker refuses checkout with 503 if any fails, see
`src/cashfree-config.js`, tested):
- `CASHFREE_ENV` must be exactly `sandbox` or `production`;
- sandbox ⇔ app id starts with `TEST`;
- a `cfsk_ma_test_…` / `cfsk_ma_prod_…` secret must match the mode;
- the browser SDK mode comes only from the Worker (`checkout.mode`);
- the webhook re-verifies against the same environment's API;
- `scripts/predeploy-access-check.mjs` refuses a deploy that would silently
  change the live environment or pair a mode with the wrong app id.

After going live: one real purchase of the cheapest level on an owner account,
confirm entitlement, then refund it from the Cashfree dashboard.

## 3. Enabling Klarweg AI (after the benchmark — separate decision)

1. Obtain keys for 2–3 candidate models (see `tutor/eval/prices.json`).
2. `LLM_PROVIDER=<p> LLM_MODEL=<id> <P>_API_KEY=… npm run tutor:eval -- --price-in <in> --price-out <out> --confirm-spend`
   (≈150 model calls per run). Choose on false-correction rate first, then
   scope/CEFR adherence, JSON validity, latency, cost.
3. `tutor/worker/wrangler.toml`: set `LLM_PROVIDER`, `LLM_MODEL`, `PRICE_*`;
   `cd tutor/worker && npx wrangler secret put <P>_API_KEY`; `npm run deploy:tutor`.
4. Name the provider in `privacy.html` (§ Klarweg AI feedback).
5. `access/worker/wrangler.toml`: `AI_ENABLED = "true"`; `npm run deploy:access -- --allow-ai-enabled`.
6. Watch `SELECT * FROM ai_global ORDER BY day DESC` daily. Kill switch: set
   `AI_ENABLED="false"` and redeploy (or `LLM_PROVIDER="none"` on the tutor).

Defaults: 40 units/day, 400/month per paid learner; Chapter-1 preview 5/day,
20/month; global ceiling 3,000 requests or US$5/day.

## 4. klarweg.in migration (do NOT start before 1–2 are stable)

1. DNS for `klarweg.in` → GitHub Pages; set the Pages custom domain; enforce HTTPS.
2. `node scripts/set-site-origin.mjs --to https://klarweg.in` (dry run), then `--write`;
   commit. Rewrites canonical/OG/Twitter/JSON-LD/sitemap/robots and `404.html`;
   never touches the audio CDN (`klarweg-audio-cdn`) or Worker code.
   Rehearsed by `scripts/set-site-origin.test.mjs`.
3. Access Worker vars: `ACCOUNT_RETURN_URL=https://klarweg.in/account/index.html`,
   `SITE_BASE_URL=https://klarweg.in`; deploy. (`cors.js` already allows `https://klarweg.in`;
   add `https://www.klarweg.in` only if www serves the site.) Checkout
   `return_url` already follows the request origin.
4. `report/worker/wrangler.toml`: `ALLOWED_ORIGINS` + `SITE_BASE_URL`.
5. Google Cloud OAuth client: add `https://klarweg.in` to Authorized JavaScript origins.
6. Cashfree dashboard: whitelist `klarweg.in` (sandbox and production).
7. Search Console: verify klarweg.in, submit `/sitemap.xml`. On GitHub Pages the
   project-path `robots.txt` is ignored by crawlers; on klarweg.in it takes effect.
8. Session cookie: the site stays cross-site to `…workers.dev`, so the existing
   `SameSite=None; Secure` cookie keeps working. (Optional later: serve the API
   from `api.klarweg.in` and tighten to `SameSite=Lax`.)
9. After cut-over: remove `https://reegangandhi16-pixel.github.io` from `cors.js`.

Things that must NOT change in the migration: audio CDN URLs, audio manifests,
voice mappings, the Cashfree environment (separate decision), entitlements.
