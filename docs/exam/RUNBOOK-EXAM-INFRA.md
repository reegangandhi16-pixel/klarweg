# Klarweg exam infrastructure: runbook (Phase 5A, synthetic only)

Status: **not deployed.** Every flag is OFF. Only synthetic test content exists:
the form `frm:b1:synthetic-s0@1` and its generated test tones. There is no real
exam content, no real audio and no learner data.

## 1. Components

| Part | Where | Production state |
|---|---|---|
| Content source + tools | `exam-content/` (level config, schema, synthetic form, validator, release builder) | repo only |
| Exam Worker `klarweg-exam` | `exam-worker/` (`workers_dev = false`; no public route) | **not created** |
| Exam DB (D1 `klarweg-exam`) | `exam-worker/migrations/0001_exam_init.sql` | **not created** (placeholder `database_id`) |
| Private R2 `klarweg-exam-content` / `klarweg-exam-recordings` | binding `CONTENT` / `RECORDINGS` | **not created** |
| Access proxy `/exam/*` | `access/worker/src/exam-proxy.js` + one hook in `index.js` | code is inert: needs `EXAM_ROUTES = "on"` **and** an `EXAM` service binding, and neither exists |
| Frontend shell | `exam/` | **not published**: not in `.github/pages-allowlist.txt` |

## 2. Feature flags (all default OFF; only the exact string `"on"` enables)

| Flag | Worker | Effect |
|---|---|---|
| `EXAM_ROUTES` | klarweg-access | `/exam/*` is proxied; otherwise it falls through to the normal 404 |
| `EXAM_ENABLED` | klarweg-exam | the Worker answers at all; otherwise `503 exam_disabled` |
| `EXAM_SYNTHETIC_FORMS` | klarweg-exam | mode `synthetic_full` may be assigned |
| `EXAM_MOCK_FORMS` | klarweg-exam | mode `mock_m0` (no forms exist yet) |
| `EXAM_PRODUCTION_FORMS` | klarweg-exam | mode `simulation_full` (no forms exist yet) |

Secrets (`wrangler secret put`), each ≥ 32 characters:
- `EXAM_PROXY_SECRET`, set on **both** Workers with the same value.
- `EXAM_MEDIA_SECRET`, set on klarweg-exam only.

### Kill switch
1. Set `EXAM_ROUTES` to anything but `"on"` and redeploy Access. All `/exam/*` requests return 404 at once.
2. Alternatively set `EXAM_ENABLED` to anything but `"on"` and redeploy klarweg-exam. Requests then return 503 and the cron sweep stops.

## 3. First enablement (staging, owner only). Every step needs explicit owner approval.

1. `wrangler d1 create klarweg-exam`, then put the id into `exam-worker/wrangler.toml`.
2. `wrangler r2 bucket create klarweg-exam-content` and `wrangler r2 bucket create klarweg-exam-recordings`. Both buckets stay private: no public domain and no r2.dev access.
3. Apply the migration: `cd exam-worker && npx wrangler d1 migrations apply klarweg-exam --remote`.
4. Build the release: `npm run exam:build -- --out /tmp/kx-r000`.
   - The release goes outside the repo.
   - Upload every file under `releases/` to `klarweg-exam-content` with the same keys.
   - Run `/tmp/kx-r000/registry.sql` against D1 (`wrangler d1 execute klarweg-exam --remote --file …`).
5. Set the secrets (section 2).
6. Deploy klarweg-exam with all flags still OFF.
7. Add the service binding to `access/worker/wrangler.toml`:
   ```toml
   [[services]]
   binding = "EXAM"
   service = "klarweg-exam"
   ```
   Keep `EXAM_ROUTES = "off"` and deploy Access through `npm run deploy:access`.
8. Grant access to the owner only:
   ```sql
   INSERT INTO exam_access (id, user_id, level, scope, source, granted_at) VALUES ('xa_owner', '<usr_…>', 'B1', 'synthetic', 'admin_grant', strftime('%s','now'));
   ```
9. Turn on `EXAM_ENABLED`, `EXAM_SYNTHETIC_FORMS` and `EXAM_ROUTES`.
10. Publishing `exam/` requires a separate, reviewed allowlist change. It is not part of Phase 5A.

**Third-party cookies:** the session cookie is cross-site (github.io → workers.dev). Browsers that block third-party cookies will get `401 auth_required`. The exam was designed for same-site `/exam/` (register D3). Resolve the domain or cookie set-up before real learners use it.

## 4. Monitoring

Every request writes one JSON log line: `svc: "klarweg-exam"`, `evt: "request"`, `method`, `path`, `status`, `ms`.
- In `path`, the attempt id is replaced by `:att` and media tokens by `:token`.
- State changes also write lines: `attempt_created`, `module_started`, `module_submitted` (`kind` = `manual` / `auto_deadline`), `lease_issued`, `chunk_stored` (size only) and `sweep`.

Watch for:
- **5xx rate.** `unhandled` events give the error class only.
- **`content_integrity` / `content_unavailable` (503).** A package's sha256 doesn't match D1, or the R2 object is missing.
- **`lease_takeover` incidents** (table `incidents`). Frequent takeovers point to tab or device problems.
- **`listening_play_interrupted` / `listening_recovery_replay` incidents.** These show playback reliability.
- **`chunks_missing` / `checksum_mismatch` (speaking uploads).** These point to network quality problems.
- **`sweep` with a large `settled` count.** Many candidates are abandoning modules.

Logs never contain answers, writing texts, keys, rubric points, audio, cookies, secrets or tokens (`src/log.js`; test `SECURITY logging`).

## 5. Failure diagnosis

| Symptom | Likely cause | Check |
|---|---|---|
| All `/exam/*` return 404 | `EXAM_ROUTES` off or `EXAM` binding missing (intended default) | Access vars and bindings |
| 503 `exam_disabled` | `EXAM_ENABLED` off | exam vars |
| 503 `exam_misconfigured` | proxy or media secret missing or too short | `wrangler secret list` |
| 401 `proxy_auth_required` | the two `EXAM_PROXY_SECRET` values differ | re-put both secrets |
| 401 `auth_required` through Access | no session, often third-party cookies blocked | browser cookie settings; same-site plan |
| 409 `lease_held` / `lease_superseded` | exam open in another tab or device | expected; learner chooses "Hier fortsetzen" |
| 409 `deadline_passed` / `module_submitted` | server deadline + 10 s grace passed | `attempt_modules.deadline_at`; this is expected behaviour |
| 409 `play_limit_reached` | reload mid-play | a recovery replay is owed only for an interrupted **last** play (OD-05), once per module; see `audio_plays` |
| module stuck in `submitting` / 503 `finalization_pending` | finalization (frozen writing, score, unlock) failed, e.g. content bucket outage | closed to saves; any retry, any later request or the 5-min cron finalizes it once the cause is fixed — nothing to repair by hand |
| 503 `content_integrity` | R2 object differs from the imported registry | re-upload the release, or re-import `registry.sql` from the same build |

Useful queries (D1 console):
```sql
SELECT module, status, deadline_at, submit_kind FROM attempt_modules WHERE attempt_id = ?;
SELECT kind, detail_json, created_at FROM incidents WHERE attempt_id = ? ORDER BY created_at;
SELECT action, detail_json, at FROM audit_log WHERE attempt_id = ? ORDER BY at;
SELECT item_id, seq, outcome, server_ts FROM response_events WHERE attempt_id = ? ORDER BY id;
```

## 6. Backup and recovery

- **D1.** Use Time Travel (`wrangler d1 time-travel restore klarweg-exam --timestamp …`) for point-in-time restore. Export before every migration: `wrangler d1 export klarweg-exam --remote --output kx-<date>.sql`.
- **Content R2.** Releases are immutable and can be rebuilt byte-for-byte: `buildRelease` is deterministic and covered by a test. Keep each release's build output archived outside the repo.
- **Recordings R2.** These are not reproducible. Retention is still a configurable decision (register OD-21). Until it is set, do not delete. Deletion must also remove the `recording_chunks` / `recording_turns` rows.
- **Lost client.** Nothing on the device is authoritative. A learner can continue on any device: lease takeover restores answers and the deadline from the server. Writing versions are in `writing_versions`, and every answer change is in `response_events`.

## 7. Migration rollback

`0001_exam_init.sql` creates only exam tables, in a separate database. To roll back before go-live:
1. Turn the flags OFF.
2. Drop the database: `wrangler d1 delete klarweg-exam`.

Later migrations must be additive. To revert one:
1. Restore with D1 Time Travel to just before the migration.
2. Redeploy the previous Worker version (`wrangler rollback`).

The chapter/Access DB is never touched by exam migrations.

## 8. Tests

- `npm run test:exam` runs validator + content, scoring golden, E2E API flow, timer/recovery, listening/media, speaking, security, frontend and Access proxy tests.
- `npm run test:exam:browser` is an opt-in headless Chrome run (about 4–6 min, real time). It uses a local dev server with the exam Worker in-process and synthetic content only.
- `npm test` is the existing suite. It also picks up `access/worker/test/exam-proxy.test.mjs`.
- `npm run exam:check-public` checks the **public-repo boundary**. It also runs first in `npm test` and `npm run test:exam`. It fails on:
  - any exam form that is not byte-identical to the synthetic generator output
  - answer-key data, exam media or symlinks
  - unexpected files in `exam-content/`

  Real forms and keys live only in the private content repo.

## 9. Unresolved, configurable rules

These are stored raw and are never guessed:
- Schreiben rounding (`rounding: "unresolved"`)
- third-rating combination (`combination: "unresolved"`)
- Hören pause and phase values (PROVISIONAL)
- recording retention
- accommodation policy

`src/scoring.js` already accepts resolved values (for example `half_up`, `third_replaces_lower`). A level-config change plus a re-score resolves them, and there is no code change.
