# Idempotency-claim probe (non-production D1) — merge gate for the in-flight claim

Validates the `ABSENT → PENDING → COMPLETED` claim mechanism (`idempotentAtomic` in `exam-worker/src/core.js`, migration `0002_idempotency_claims.sql`) on **real Cloudflare D1**.

**Status: not run.** No D1 evidence exists yet. The local self-check (`exam-worker/test/idempotency-d1-probe-logic.test.mjs`) runs the same code on the in-memory SQLite shim. It validates only the probe's logic and is **not** evidence about D1.

## What it checks (real helper, real migrated schema, the probe's own `idem_probe_*` tables)
| ID | Pass condition |
|---|---|
| S1 | `n` simultaneous claims of one request id in one isolate → exactly one execution and one effect; every other request gets `request_in_progress` or a replay |
| S2 | The claim token changes before commit → the assertion fails and the **whole batch rolls back** (no effect, state unchanged) |
| S3 | The transition precondition is false → rollback; the claim is released |
| S4 | Success → the effect and the `completed` record are both present. A later failing statement in the batch → **neither** is present |
| S5 | A stale pending claim and `n` simultaneous takeovers → exactly one execution |
| S6 | The original resumes after a takeover → its batch rolls back, it is answered with the taker's response, one effect |
| S7 | (a) The original dies before its batch → `request_in_progress` within the TTL, one takeover execution after it. (b) It dies after commit → the retry replays |
| R  | Cross-request race: `n` HTTP requests carrying one request id, in several rounds → exactly one execution and one effect per round, record `completed` |

Negative controls (local): with a batch that **stops without rollback**, S4 fails. With a batch that **continues past an error**, S2, S3, S4 and S6 fail. So the probe can detect non-atomic batches.

## Safety
- The Worker is disabled unless `IDEM_PROBE = "on"` **and** the request carries the secret `IDEM_PROBE_TOKEN` (32 or more characters).
- `IDEM_PROBE_LABEL` must be `nonprod-…` and must match the marker that `/idem/setup` writes into the database.
- It **refuses any database that contains exam attempts.** It never touches exam tables apart from `request_log` and `idempotency_assertions`.
- Never bind it to `klarweg-exam` or to any production resource.

## Human steps required (not done; needs Cloudflare access, which the agent does not have)
1. Create a **new, separate** D1 database, for example `klarweg-exam-idem-probe`.
2. Apply `exam-worker/migrations/0001_exam_init.sql`, then `0002_idempotency_claims.sql`, to **that** database only.
3. Copy `wrangler.example.toml` to `wrangler.toml` (gitignored), set the database id, keep the `nonprod-…` label, and run `wrangler secret put IDEM_PROBE_TOKEN`.
4. Deploy the probe Worker from this directory and set `IDEM_PROBE = "on"` for the run only.
5. Run `IDEM_BASE_URL=https://… IDEM_TOKEN=… node run-idem.mjs --n 30 --rounds 5` and keep the JSON report. It exits 0 only if every check passes.
6. Set `IDEM_PROBE = "off"`, or delete the probe Worker and its database.
7. Attach the report to the PR. **The PR stays a draft and unmerged until this report passes and has been reviewed.**

Also run PR #60's V10 probe (assertion rollback, ledger, concurrent claims) on the same kind of database. It covers the batch semantics this design relies on.
