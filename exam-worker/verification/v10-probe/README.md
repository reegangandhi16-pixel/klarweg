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

## Safety
- **Disabled by default:** the Worker refuses unless `V10_PROBE` is exactly `"on"` and the request carries the secret `V10_PROBE_TOKEN` (32 or more characters).
- **Own tables only:** it uses `v10_*` tables and **refuses any database that contains exam tables** (`attempts`, `recording_chunks`, …).
- **Never bind it to `klarweg-exam`** or to any production resource.

## Running it
Running it requires owner provisioning, which has **not** been done. The steps below are the plan, not a record of anything executed.
1. Create a separate D1 database, for example `klarweg-exam-v10-probe`.
2. Copy `wrangler.example.toml` to `wrangler.toml` (do not commit it) and set the probe database id.
3. Deploy the probe Worker from this directory; set the secret `V10_PROBE_TOKEN`; set `V10_PROBE = "on"` for the run.
4. Run `V10_BASE_URL=https://… V10_TOKEN=… node run-v10.mjs --n 50 --rounds 5`, and keep the JSON report.
5. Set `V10_PROBE = "off"` again, or delete the probe Worker and its database.

A complete V10 also needs an **ambiguous-result** check (blueprint §6.1, rule 6). For that, abort a client mid-request and use `GET /v10/ledger?run=…&op=…` to decide whether the transition applied. This is a manual step; the runner does not automate it.
