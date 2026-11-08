# B1 Mock M0: production launch runbook (owner-run)

Status: **prepared 2026-11-08; step 2 (Access Worker) executed 2026-11-08 with owner approval; step 1 (audio) done 2026-11-09.** Every step marked 🔒 changes production and needs the owner's
explicit "yes" for that step. Stop at the first failed check; each step lists its rollback.

Decisions this follows: `OWNER-DECISIONS-2026-11-06.md` (owner = sole reviewer and sole examiner, Google TTS, no
external reviews). General infrastructure reference: `RUNBOOK-EXAM-INFRA.md`.

## Pieces

| Piece | Where | State on 2026-11-08 |
|---|---|---|
| M0 form `frm:b1:mock-m0@1`, TTS tool (with `--tempo`), rehearsal tool | private `klarweg-exam-content` PR #13 | open; **step 1 DONE 2026-11-09**: real audio (21 files, Hören 136 wpm at tempo 0.84), owner listened and approved, validate PASS, rehearsal PASSED |
| Exam Worker `klarweg-exam` (single-examiner mode, M0 start screen, prod D1 id) | `klarweg` PR #309 | open; not deployed |
| Exam proxy + staff 2FA on the **live** Access line | `klarweg` PR #312 (draft, base `deploy/access-media-s1-on-fe2ab01`) | **step 2 DONE 2026-11-08 11:30Z**: live Access = `5d6d6b38` (routes off); rollback `597a6cc9` |
| Exam client on klarweg.in (`/api` base, closed screen, Pages allowlist) | `klarweg` PR (this branch, stacked on #309) | open |
| D1 `klarweg-exam` (APAC), migrations 0001–0006 | Cloudflare | created |
| R2 `klarweg-exam-content`, `klarweg-exam-recordings` | Cloudflare | created, private, no r2.dev, no domain |

Wrangler: `node "~/Downloads/klarweg (11)/node_modules/wrangler/bin/wrangler.js"` (account Klarwegofficial),
written `wrangler` below. Google Cloud: user `klarwegofficial@gmail.com`, project `klarweg-512108` (billed since 2026-11-09; the old `klarweg-498812` has billing off).

## 0. Owner only (no Claude action possible)
1. ~~Re-enable billing~~ DONE 2026-11-09: billed project `klarweg-512108` (the TTS tool default).
2. Review and merge `klarweg-exam-content` #13, then `klarweg` #309.

## 1. Audio (after step 0.1)
1. In `klarweg-exam-content`: run `tools/tts-google.mjs` for `forms/b1/mock-m0` (writes Opus/WebM, −18 LUFS,
   durations and checksums into the form's `assets.json`).
2. Check the tool's last line: **Hören speaking rate** must be inside 128–145 words/min. The M0 Hören plan only fits
   the validator's 2160–2520 s window at about 121–152 words/min (rehearsal 2026-11-08). If it is outside, re-run with
   the suggested `--tempo=… --force`: it re-times the cached speech with no new TTS charges.
3. `node tools/make-mock-m0.mjs` (copies the measured durations into the form).
4. Owner listens to every Hören and Sprechen file once (sole reviewer). Re-generate any file that is wrong.
5. `node exam-content/tools/validate.mjs <path-to>/forms/b1/mock-m0` reports **no errors**.
6. `node tools/rehearse-m0.mjs <klarweg checkout>` (in `klarweg-exam-content`) ends with **M0 REHEARSAL PASSED**. It
   runs the whole test through the real exam Worker with the production flag set (§7), in memory; nothing is uploaded.

## 2. Access Worker: 2FA tables, then the exam proxy (PR #312)
1. 🔒 Apply `access/worker/migration-011-totp.sql` to the production Access D1
   (`wrangler d1 execute <access-db> --remote --file access/worker/migration-011-totp.sql`).
   **Must happen before 2.3**: the new session code reads `sessions.mfa_verified_at`; without the column every
   login fails. Additive only (3 new tables, 1 nullable column); rollback = leave it, it is unused by the old code.
2. 🔒 `wrangler secret put TOTP_ENC_KEY` on klarweg-access (≥ 32 random bytes, kept in the owner's password manager).
3. 🔒 From branch `deploy/access-exam-on-bf0737f4`: `npm run deploy:access -- --allow-speech=entitled`
   (no `EXAM` binding yet, `EXAM_ROUTES` unset = off).
   - Smoke test: sign in (desktop + iPhone), `/api/auth/me`, open a paid chapter you own, start (not pay) a checkout,
     and `GET https://klarweg.in/api/exam/v1/availability` → **404** (routes off).
   - Rollback: `wrangler rollback 21557dc1` in `access/worker`.

## 3. Exam Worker (PR #309 merged)
1. 🔒 Secrets on klarweg-exam: `EXAM_PROXY_SECRET` (same value as 4.1) and `EXAM_MEDIA_SECRET` (each ≥ 32 chars).
2. 🔒 `cd exam-worker && wrangler deploy` with every flag **off** (as committed in `wrangler.toml`).
   Check: `wrangler tail klarweg-exam` shows no errors; it has no public route.

## 4. Connect Access → Exam (routes still off)
1. 🔒 `wrangler secret put EXAM_PROXY_SECRET` on klarweg-access (same value as 3.1).
2. Commit to `deploy/access-exam-on-bf0737f4`:
   ```toml
   [[services]]
   binding = "EXAM"
   service = "klarweg-exam"
   ```
3. 🔒 Redeploy Access (as 2.3). Same smoke test; availability is still **404**.

## 5. Release M0
1. Build outside the repo:
   `node exam-content/tools/build-release.mjs --release r001 --purpose learner --out <empty dir> <path-to>/klarweg-exam-content/forms/b1/mock-m0`
2. Preflight (read-only): `node exam-content/tools/registry-preflight.mjs --export-commands klarweg-exam`, run the
   printed export commands, then `node exam-content/tools/registry-preflight.mjs --form-dirs <path-to>/klarweg-exam-content/forms/b1/mock-m0 --existing <export dir>`
   (2026-11-09 against the prod D1: `frm:b1:mock-m0@1: new`, PREFLIGHT OK).
   Continue only on **PREFLIGHT OK**.
3. 🔒 Upload every file under `<out>/releases/` to R2 `klarweg-exam-content` with the same keys
   (`wrangler r2 object put klarweg-exam-content/<key> --file <file> --remote`).
4. 🔒 `wrangler d1 execute klarweg-exam --remote --file <out>/registry.sql`.
5. Add the tool's `released_forms_entries` to `exam-content/released-forms.json` in a PR, so CI keeps M0 immutable.

## 6. Owner access and 2FA
1. 🔒 Bootstrap the first admin (the only manual SQL grant):
   `INSERT INTO exam_roles (user_id, role, granted_by, granted_at) VALUES ('<owner usr_…>', 'exam_admin', 'bootstrap', strftime('%s','now'));`
   plus the `exam_rater` role for the same user (see `RUNBOOK-EXAM-INFRA.md` §3a).
2. Owner opens `https://klarweg.in/exam/admin.html` after step 7, enrols the authenticator app and stores the 10
   recovery codes offline.

## 7. Switch on for the owner only
1. 🔒 Exam Worker vars: `EXAM_ENABLED="on"`, `EXAM_MOCK_FORMS="on"`, `EXAM_RELEASE_FORMS="frm:b1:mock-m0@1"`,
   `EXAM_SINGLE_EXAMINER="on"`; every other flag stays off. Redeploy.
2. 🔒 Access var `EXAM_ROUTES="on"`. Redeploy Access.
   Kill switch at any time: `EXAM_ROUTES` off + redeploy Access → `/exam/*` is 404 at once, and learners see
   "Noch nicht geöffnet".
3. Merge the exam-client PR, so `/exam/` is published via `deploy-pages.yml` (allowlist). Until the learner has an
   access grant, the page says the area is not unlocked for their account.

## 8. Owner test run (second account)
A rater cannot rate their own attempt (`cannot_rate_own_attempt`), so:
1. Grant exam access to a **second** Google account in `/exam/admin.html` (reason: "owner test").
2. In that account: full M0 (Lesen, Hören, Schreiben, Sprechen) on desktop Chrome and on an iPhone (Safari).
   Check timers, Hören playback rules, autosave after a reload, microphone check and recordings.
3. In the owner account: `/exam/rater.html`, rate Schreiben and Sprechen twice (single-examiner mode), then check
   that the learner result page shows the single-examiner disclaimer.
4. Only after this passes: decide pricing/access for real learners (OD-42, owner decision) and grant access.

## Rollback summary
| Layer | Rollback |
|---|---|
| Learner exposure | `EXAM_ROUTES` off + redeploy Access |
| Access Worker | `wrangler rollback 21557dc1` |
| Exam Worker | `EXAM_ENABLED` off + redeploy, or `wrangler rollback` |
| Pages `/exam/` | revert the exam-client merge on `main` |
| D1 / R2 data | D1 Time Travel (`RUNBOOK-EXAM-INFRA.md` §6); learner releases are append-only |
