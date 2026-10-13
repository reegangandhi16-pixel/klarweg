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
| S5 | A stale pending claim and `n` simultaneous takeovers → exactly one execution, exactly one **successful compare-and-set takeover** (counted from `claim_takeover`, which `idempotentAtomic` logs only when D1 reports the takeover `UPDATE` changed a row), and every other request gets `request_in_progress` or a replay |
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

## Which runner? Workers Paid vs Workers Free
Cloudflare's D1 limit is **50 queries per Worker invocation on Workers Free, 1,000 on Workers Paid** ([D1 limits](https://developers.cloudflare.com/d1/platform/limits/); Workers Free also allows 50 subrequests per invocation ([Workers limits](https://developers.cloudflare.com/workers/platform/limits/)); both checked 2026-10-13).

- **Combined runner, needs Workers Paid:** `worker.mjs` + `run-idem.mjs`. `POST /idem/scenarios` runs S1–S7 in **one** invocation. Measured on the local shim at n = 20, it uses **186 D1 calls / 227 SQL statements**. On Workers Free it would exceed the limit.
- **Split runner, for Workers Free:** `worker-free.mjs` + `run-idem-free.mjs` + `budget.mjs` (config `wrangler.free.example.toml`). It makes **one scenario or one race step per invocation**, using the **same scenario functions** as `runScenarios()`.

## Workers Free runner
**Budget (enforced, not just reported).** Every D1 call goes through a guard that counts **every statement inside a `batch()`**. The docs do not say whether a batch counts as one query, so this is the conservative reading. The guard caps each invocation at **40 statements**, including the 7 statements of the database check. A call that would exceed the cap is refused **before it reaches D1**, and the result is **inconclusive**. A definite violation that was already observed (more than one execution or successful takeover) stays a **fail**.

| Free invocation | Worst case (statements, incl. 7 for verification) | Measured max (local, 10× 0–150 ms latency) |
|---|---|---|
| S1 (n = 12 in one isolate) | 37 | 37 |
| S2 / S6 / S7a | 19 / 24 / 20 + claim-wait polls. Polling stops while the remaining work still fits (≥ 15 polls available); otherwise **inconclusive** (`poll_budget_exhausted`) | 21 / 27 / 23 (≤ 3 polls) |
| S3 / S4 / S7b | 18 / 28 / 17 | 18 / 28 / 17 |
| S5 (n = 6 stale takeovers in one isolate) | 38 | 38 |
| race prepare / one / state | 9 / 15 / 9 | 9 / 15 / 9 |

**Concurrency.**
- *In one isolate (S1, S5):* the Paid run uses n = 20, the Free run n = 12 and n = 6. D1 allows **six connections in flight per invocation**, and **each D1 database processes queries one at a time** (D1 limits page). So n = 20 never had more than six claim attempts outstanding at once, and n = 12 or 6 still reach that cap. Every attempt is still a real `idempotentAtomic()` call: the unique claim `INSERT`, and for S5 the compare-and-set `UPDATE`. The checks count **effect rows in D1** and **successful takeovers**, not just responses. A smaller n therefore cannot hide a duplicate effect or a second winner; it only offers fewer chances for one to appear.
- *Across invocations (R, RS):* by default n = 30 HTTP requests per round, over 5 rounds each. `R` uses fresh claims. **`RS`** (new) uses a stale claim with concurrent compare-and-set takeovers. Each request runs its read-only verification and then waits for a **common start time** (`at`, set on the Worker's clock from `race/prepare`), so the claims reach D1 together. The wait only paces the start. The evidence is what is observed:
  - a round **fails** if there is more than one execution, more than one effect, more than one successful takeover (or any takeover in a fresh round), or an unexpected status;
  - a round is **inconclusive** if a request was not answered with the probe's JSON (a platform error, a CPU-limit error 1102 or a budget trip), or if **no request overlapped** the winner (`no_contention_observed`: every loser arrived after the commit, so the round never raced);
  - the overall result is `pass` only if every check passes.

**Negative controls (local).** Free and Paid reach the **same verdict** under each injected defect:
- a batch that stops without rollback fails S4;
- a batch that continues past an error fails S2, S3, S4 and S6;
- an assertion that ignores the claim token fails S2 (S6 is also protected by the transition precondition);
- a takeover **without compare-and-set** fails S5, and every RS round. Before the takeover count was added, this defect passed every scenario in both runners.
- A round that never contends is inconclusive.

**What only real D1 can show (not validated here).** The local shim runs a batch synchronously in one JavaScript turn, has no network, no six-connection cap and no replicas, and serves every "concurrent" request in one Node process. Five things remain open:
- (1) whether D1 batches are really atomic: rollback on the failing assertion, and effect + completed record committed together;
- (2) whether the unique claim `INSERT` and the compare-and-set `UPDATE` report `meta.changes` exactly when they win;
- (3) whether real requests overlap enough to produce contention (the runner reports this per round; rerun if a round is inconclusive);
- (4) where requests land (one isolate or many);
- (5) whether a scenario stays within Workers Free's 10 ms CPU limit (an overrun appears as inconclusive).

Operator steps are the same as above, except: use `wrangler.free.example.toml` (`main = "worker-free.mjs"`) and run `node run-idem-free.mjs --n 30 --rounds 5`. One run makes about 330 requests; the Free daily limit is 100,000.
