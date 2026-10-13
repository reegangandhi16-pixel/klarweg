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

## Safety (fail closed)
**Limitation, stated plainly:** a Worker cannot read the physical identity (id or name) of its D1 binding at runtime, so the probe **cannot prove** which database it is bound to. Identity is established by the **operator**, and the probe refuses to act without evidence that only the operator's provisioning creates:

- The Worker is **disabled** unless `IDEM_PROBE = "on"` and the request carries the secret `IDEM_PROBE_TOKEN` (32 or more characters).
- The Worker **creates no tables and no marker.** The operator applies `probe-schema.sql`, then inserts exactly one marker row `(label, sha256(nonce))`, using a `wrangler d1 execute <name> --remote` command that **names the database whose name and id they have just verified** (`wrangler d1 info <name>`).
- On **every** endpoint, before any write, `verifyProbeDatabase()` requires all of the following. Any failure gives `412` with a code, and nothing is written:
  - migrations 0001 and 0002 are present;
  - the probe schema is present;
  - there is **exactly one** marker;
  - the marker's label equals `IDEM_PROBE_LABEL`, which must be `nonprod-…`;
  - the marker's hash equals `sha256(IDEM_PROBE_DB_NONCE)`, where the nonce is a Worker secret;
  - **no exam content** exists (`attempts`, `forms`, `level_configs`, `items_index`, `exam_access` are all empty). This check is defence in depth, not proof of identity.
- So a Worker that is mistakenly bound to another database finds no matching marker and refuses. Defeating the check would require someone to insert the probe's secret-derived marker into that other database, which the operator's explicit name and id check is there to prevent.
- Never bind the probe to `klarweg-exam` or to any production resource.

## Operator provisioning (human; the agent has no Cloudflare access)
Use `wrangler.example.toml`. The secrets are `IDEM_PROBE_TOKEN` and `IDEM_PROBE_DB_NONCE`.
1. Create a new D1 database. Verify its name and id with `wrangler d1 info <name>`, and confirm they match the `database_id` in your local `wrangler.toml`.
2. Run `wrangler d1 execute <name> --remote --file=…` for each of `../../migrations/0001_exam_init.sql`, `../../migrations/0002_idempotency_claims.sql` and `probe-schema.sql`.
3. Generate the nonce locally and insert **only its SHA-256**: `INSERT INTO idem_probe_marker (label, nonce_sha256, created_at) VALUES ('nonprod-…', '<64 hex>', <unix ms>)`. Set the nonce itself with `wrangler secret put IDEM_PROBE_DB_NONCE` (piped, never displayed).
4. Deploy the Worker, set `IDEM_PROBE_TOKEN`, and switch the probe on for the run only. Check that `GET /idem/verify` with the token returns `verified: true`, and that deploy's binding output names the probe database.
5. Run `IDEM_BASE_URL=… IDEM_TOKEN=… node run-idem.mjs --n 30 --rounds 5` and keep the JSON report. Its first check is `verify`, and the run aborts if verification fails.
6. Switch the probe off, then delete the Worker and the database once the report has been retained.

## Timing
Scenarios S2, S6 and S7 wait for the **observed pending claim** of the original request (bounded polling; 10 s timeout by default). They never wait a fixed time. If the claim never appears, the scenario **fails** with `original_never_claimed`; it never passes.
