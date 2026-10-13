# V10 probe — F4 transition invariant

Verification tooling for test **V10** of `docs/exam/F4-IMPLEMENTATION-BLUEPRINT.md` (§6.1, §11).

**Status: not run.** No V10 evidence exists yet. This directory only contains the probe.

## What it checks
The F4 design makes every multi-statement transition one D1 batch built like this:
1. The **first statement asserts the precondition**. It inserts `1` or `0` into a table with `CHECK (ok = 1)`, so a false precondition fails the statement.
2. A **transition-ledger primary key** makes the transition apply at most once.

The design relies on D1's documented rule that a failing statement rolls back the whole batch. V10 must show that this holds in practice.

| Check | Pass condition |
|---|---|
| A | A false assertion rolls back every later statement in the batch |
| B | Replaying a ledger key fails, and nothing from the replay is applied |
| C | A constraint violation in a **later** statement rolls back the earlier ones |
| D | A zero-row guarded `UPDATE` is **not** a failure (confirms the hazard §6.1 addresses) |
| E | `n` parallel claims of one `reserved → committed` transition, using one shared op key and then distinct op keys: exactly one applies |

The self-check includes negative controls showing that the checks can fail. If a batch stops at an error but keeps earlier writes, C fails. If a batch keeps executing after an error, A, B and C all fail.

A **failure** of A, B, C or E means the §6.1 design must be revised before any F4 implementation.

## When results count as evidence
Results count only when **all** of these hold:
- the probe runs as a **deployed Worker**;
- it is bound to a **separate non-production D1 database**;
- it uses synthetic probe tables only.

The local self-check (`exam-worker/test/v10-probe-logic.test.mjs`) runs the same logic on in-process SQLite. It checks the probe's own code and is **not** V10 evidence.

## Safety (fail closed)
**Limitation, stated plainly:** a Worker cannot read the physical identity (id or name) of its D1 binding at runtime, so this probe **cannot prove** which database it is bound to. Identity is established by the **operator**, and the Worker refuses to act without evidence that only the operator's provisioning creates. A `nonprod-…` label alone proves nothing.

- **Disabled by default:** every request is refused unless `V10_PROBE` is exactly `"on"` and the request carries the secret `V10_PROBE_TOKEN` (32 or more characters) in `x-v10-token`.
- **No self-qualification:** the Worker runs no DDL and has no setup or marker endpoint. The operator applies `probe-schema.sql` to a **separate, empty** database and inserts exactly one marker row `(label, sha256(nonce))`, using a `wrangler d1 execute <name> --remote` command that names the database whose name and id they have just verified with `wrangler d1 info <name>`.
- **Verification before every route** (verify, scenarios, prepare-claim, claim, state, ledger). It is read-only. Any failure gives `412` with a code, and nothing is written. The checks:
  - no exam tables (`refusing_exam_database`);
  - all `v10_*` tables and `v10_probe_marker` present (`probe_schema_missing`);
  - exactly one marker (`marker_missing_or_ambiguous`);
  - its label equals `V10_PROBE_LABEL`, which must be `nonprod-…` (`label_mismatch`, `label_required`);
  - its hash equals `sha256(V10_PROBE_DB_NONCE)`, where the nonce is a Worker secret (`db_nonce_mismatch`, `db_nonce_required`).
- **Never bind it to `klarweg-exam`** or to any production resource.
- **Secrets** (token and nonce) are never printed, returned or written to reports. Only the nonce's SHA-256 is stored in the database.

## Running it (operator; not done — needs Cloudflare access, which the agent does not have)
1. Create a **separate, empty** D1 database, for example `klarweg-exam-v10-probe`. Verify its name and id with `wrangler d1 info <name>`, and confirm they match the `database_id` in your local, gitignored `wrangler.toml`.
2. Run `wrangler d1 execute <name> --remote --file=probe-schema.sql`. **Do not** apply the exam migrations: the probe refuses any database with exam tables.
3. Generate a nonce locally and insert **only its SHA-256**: `INSERT INTO v10_probe_marker (label, nonce_sha256, created_at) VALUES ('nonprod-v10-probe-1', '<64 hex>', <unix ms>)`.
4. Deploy the Worker with `V10_PROBE = "off"`. Pipe both secrets into `wrangler secret put` (`V10_PROBE_TOKEN`, `V10_PROBE_DB_NONCE`), then switch the probe on with `--var V10_PROBE:on`. Check:
   - deploy's binding output names the probe database;
   - `GET /v10/verify` with the token returns `verified: true`.
5. Run `V10_BASE_URL=https://… V10_TOKEN=… node run-v10.mjs --n 50 --rounds 5` and keep the JSON report. The run aborts if `verify` fails.
6. Ambiguous-result check (see below). Keep both reports:
   - `V10_BASE_URL=… V10_TOKEN=… node run-v10-ambiguous.mjs --intervals 1,5,10,25,50,100,200 --trials 5` (natural timing);
   - redeploy with `--var V10_PROBE:on --var V10_FAULT_INJECTION:on`, then `… node run-v10-ambiguous.mjs --post-commit-delay 2000 --abort-after 500 --trials 10` (forced). Redeploy **without** `V10_FAULT_INJECTION` (default `"off"`) afterwards.
7. Switch the probe off. Delete the Worker and the database once the reports have been retained.

## Ambiguous-result check (blueprint §6.1, rule 6): `run-v10-ambiguous.mjs`
Each trial does four things:
1. Prepares a fresh run.
2. Sends a claim that the **client aborts** after `interval` ms (`AbortController`).
3. Retries the same op key normally.
4. Reads `/v10/state` and `/v10/ledger`.

- **Invariant, every trial:** state `committed`, `ledger_rows` 1, `claim_rows` 1, ledger `applied: true`.
- **Branches:**
  - `aborted_original_applied`: the client aborted, and the retry answered `applied: false` because the original had already applied. **This is the branch the check exists for.**
  - `aborted_original_not_applied`: the client aborted, and the retry applied.
  - `responded`: the first answer arrived before the abort.
- **Verdict:**
  - `fail` (exit 1): any invariant violation, or verification failed;
  - `pass` (exit 0): no violation **and** at least one `aborted_original_applied` trial;
  - `inconclusive` (exit 3) otherwise. **It never claims validation without observing the key branch.**
- Which branch a given interval produces depends on real network and Worker timing, and isn't assumed. If the first run is inconclusive, widen `--intervals` and raise `--trials`.
- The local tests drive the runner against the real Worker handler, through a transport that keeps processing after a client abort. They produce each branch and each verdict on purpose. That checks the runner's logic only, **not** Cloudflare's abort or cancellation behaviour.

### Forced post-commit delay (fault injection, test tooling only)
- **What it is:** with `V10_FAULT_INJECTION = "on"`, `POST /v10/claim` accepts `post_commit_delay_ms` (an integer from 1 to 5000). The delay applies **only after the claim's D1 batch has committed** (`applied: true`), just before the response.
  - The parameter is validated **before** the claim runs. If fault injection is off you get `400 fault_injection_disabled`; if the value is out of range you get `400 invalid_delay`. In both cases nothing is written.
  - A claim that did not apply is never delayed.
  - Normal authorization and database qualification still come first.
  - It does not exist anywhere in exam code.
- **The forced run:** `run-v10-ambiguous.mjs --post-commit-delay D --abort-after A` (with `A < D`; an impossible configuration is refused before any request) sends the first claim with that delay and aborts the client at `A`. The retry uses the same op key and no delay.
- **Pass requires all of the following:**
  - state `committed`;
  - exactly one ledger row and exactly one claim row;
  - the retry answers `applied: false`, meaning it detected that the original had already applied;
  - at least one such `aborted_original_applied` trial.

  Otherwise the run is `inconclusive`, or `fail` if an invariant breaks.
- **What it proves:** the client can be left uncertain about a transition that **has** committed, and the same-key retry together with the ledger resolves that correctly, with exactly one application.
- **What it does not prove:** how Cloudflare cancels a request during an **arbitrary in-flight** database operation. The natural-timing run is the only, and possibly inconclusive, evidence for that.
- **If the commit itself takes longer than `A`,** the abort lands before the commit. That trial is recorded under its actual branch; raise `A` (still below `D`).
