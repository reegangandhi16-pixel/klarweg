# Non-production D1 validation runbook (PR #71 idempotency · PR #72 V10)

> **STATUS: NOT EXECUTED.** No Cloudflare resource has been created for this runbook, and no command in it has been run against Cloudflare. No real-D1 evidence exists for PR #71, #72 or #73. This is a **proposal for review**. A human operator and a second reviewer carry it out only after it is approved. It authorizes nothing by itself.

**Source tags.** Each claim says where it comes from:
- **[GH]** GitHub or git objects at the pinned commits;
- **[DOC]** official Cloudflare documentation, read 2026-10-13;
- **[LOCAL]** local tests in this directory, on in-memory SQLite. These are **never D1 evidence**;
- **[INF]** inference, not verified.

**Action labels.**
- **READ-ONLY:** reads Cloudflare state, changes nothing.
- **LOCAL-ONLY:** no Cloudflare effect.
- **STATE-CHANGING:** creates, changes or deletes a non-production Cloudflare resource or probe row.

**Command status.**
- **VERIFIED-SYNTAX:** the command and every flag appear in the current official docs [DOC].
- **UNVERIFIED:** the syntax or behaviour is not confirmed. An UNVERIFIED command is **not an executable instruction**: resolve its register item (section 13) with the second reviewer first.

---

## 1. Purpose and boundaries

| | **Track 1: idempotency (PR #71)** | **Track 2: V10 transition invariant (PR #72)** |
|---|---|---|
| Question | Does PR #71's `idempotentAtomic()` (claim `ABSENT → PENDING → COMPLETED`, compare-and-set takeover, atomic commit) behave correctly on **real D1**? | Does D1 roll back a whole `batch()` when its first statement fails a `CHECK`, and does a ledger key make a transition apply at most once? (F4 blueprint §6.1, V10) |
| Code under test | PR #71 `882f218d0603ad7f8e703a7ea0d72aaac304eba6`: `exam-worker/src/core.js`, migration `0002` [GH] | PR #72 `a34aca0eff1207667280f19aabbc8039e544d0a0` (stacked on PR #60 `2ad16df`): `exam-worker/verification/v10-probe/` [GH] |
| Deploy from (exact commit) | **PR #73** `c8f2b79dbd10ab797b0d913fe6b86ab91760790c`. Its `exam-worker/src`, `migrations` and `exam/` are byte-identical to `882f218`; it only adds the Workers-Free probe tooling [GH] | `a34aca0eff1207667280f19aabbc8039e544d0a0` |
| Probe directory | `exam-worker/verification/idempotency-d1/` | `exam-worker/verification/v10-probe/` |
| Worker / config example | `klarweg-exam-idem-probe-free` / `wrangler.free.example.toml` | `klarweg-exam-v10-probe` / `wrangler.example.toml` |
| D1 database | `klarweg-exam-idem-probe` | `klarweg-exam-v10-probe` |
| Schema | `0001_exam_init.sql` + `0002_idempotency_claims.sql`, then `probe-schema.sql` | `probe-schema.sql` **only** (the probe refuses exam tables) |
| Marker label / table | `nonprod-idem-probe-1` / `idem_probe_marker` | `nonprod-v10-probe-1` / `v10_probe_marker` |
| Secrets (separate, never reused) | `IDEM_PROBE_TOKEN`, `IDEM_PROBE_DB_NONCE` | `V10_PROBE_TOKEN`, `V10_PROBE_DB_NONCE` |
| Runners | `run-idem-free.mjs` (pinned); `tools/run-idem-abort.mjs` (**proposed**, see T9) | `run-v10.mjs`, `run-v10-ambiguous.mjs` (pinned) |
| Tests the PR #71 path? | **Yes** | **No.** Same D1 batch semantics, different code |

**The tracks never share a database, a Worker, a secret or a private directory.** Run them one after the other, each from its own clean checkout.

## 2. Safety model (layers; no single layer is proof)
1. **Account pin.** Set `account_id` in the local, gitignored `wrangler.toml` [DOC: Wrangler configuration] and export `CLOUDFLARE_ACCOUNT_ID` with the same value [DOC: system environment variables]. Prefer an account with no production resources. If none exists, the reviewer approves the account choice in writing before S-06, and every gate below still applies unchanged.
2. **Explicit names, never bindings.** `d1 execute <DATABASE>` accepts "the name **or binding** of the DB" [DOC]. Every D1 command names the probe database **by name**. The binding `DB` could resolve to production in the wrong directory.
3. **Correct directory and config.** Every Wrangler command runs **in the probe directory** with `--config wrangler.toml`. **Never** run one in `exam-worker/` or the repository root: `exam-worker/wrangler.toml` is production (`klarweg-exam` Worker and D1; R2 `klarweg-exam-content` and `klarweg-exam-recordings`) [GH].
4. **Identity gate before every state-changing step.**
   - `tools/config-gate.mjs` checks the local config fail-closed: only the probe's name, `main` and one D1 binding; `account_id` set; no routes, R2, KV, services or forbidden names; switch and fault injection off.
   - With `--d1-info`, it also checks that the saved `d1 info --json` output matches the config's database name and id.
   - A **second reviewer** confirms the name and id independently.
5. **Probe qualification (fail-closed in the Worker).**
   - Every route returns `403` unless the switch var is exactly `"on"`, and `401` without the token.
   - Every route returns `412` (before any write) unless the database holds the probe schema and **exactly one** marker whose label matches and whose `nonce_sha256` equals `sha256(nonce secret)` [GH].
   - The Worker creates no tables and no marker.
6. **Cross-track refusal (backstop only).** The V10 Worker refuses a Track-1 database (`412 refusing_exam_database`), and the idempotency Worker refuses a Track-2 database (`412 migrations_missing`) [LOCAL test].
   - This does **not** prove a database is safe or correct. It cannot detect a probe bound to some other database that happens to hold a matching schema and marker.
   - Layers 1–5 carry the safety.

**Limitation, stated plainly:** a Worker cannot read the physical id or name of its D1 binding at runtime [GH, probe READMEs]. Database identity is established **only** by the operator and the reviewer (layers 1–4).

## 3. Prerequisites
- **P-1 People.** One operator and one second reviewer, both named in the evidence. The reviewer signs every identity gate (G-marks in section 5).
- **P-2 Account.** A Cloudflare account intended for non-production work, preferably without production resources. Note its account id. It is private and never committed.
- **P-3 Plan and cost.** Workers **Free** is enough: per-invocation D1 statement counts are in T8 [LOCAL]. **Do not upgrade.** Workers Logs is included on Free (200,000 events per day, 3-day retention), but "Beginning December 1, 2026, Workers Logs will use Cloudflare Observability pricing" [DOC]. **Gate:** on or after 2026-12-01, confirm that enabling observability costs nothing on this account before turning it on; otherwise leave it off and record T8-CPU as inconclusive.
- **P-4 Tooling.**
  - Node 22 or 24 (the versions CI uses for the probes) and git.
  - Wrangler pinned as **`npx --yes wrangler@4.150.0`** (the npm `latest` on 2026-10-13, the date the docs were read). The repository does **not** pin Wrangler: elsewhere it calls bare `npx wrangler`, which would fetch whatever is newest.
  - **Gate:** before the first use of a flag, the operator runs the LOCAL-ONLY `npx --yes wrangler@4.150.0 <command> --help` and confirms the flag is listed. If it isn't, STOP (section 13, U-0).
- **P-5 Checkouts.** Three clean, detached checkouts, each verified with `git rev-parse HEAD`:
  - Track 1 at `c8f2b79…`;
  - Track 2 at `a34aca0…`;
  - this runbook's branch, for `tools/`. The tools use only Node built-ins.
- **P-6 Private directory.** One per track, **outside every git work tree**, mode `0700` (`mkdir -m 700 <PRIVATE>`). It holds the secrets, the saved Wrangler outputs and the raw reports. `tools/prepare-probe-secrets.mjs` refuses any other kind of directory.
- **P-7 Local preflight (LOCAL-ONLY).**
  - In each pinned checkout: `npm run test:exam`, which must pass, and `git status --porcelain`, which must be empty apart from the gitignored `wrangler.toml`.
  - In this directory: the tool tests (section 12).

**Placeholders:** `<PRIVATE>` private dir · `<TOOLS>` path to this directory's `tools/` · `<ACCOUNT_ID>` 32-hex account id · `<SUBDOMAIN>` your workers.dev subdomain · `<UTC>` timestamp. Track 1 values are shown; for Track 2, substitute the Track 2 column of section 1.

## 4. Command inventory
All Wrangler commands run in the pinned probe directory. The pinned binary is `npx --yes wrangler@4.150.0`, abbreviated **`WR`** in the table. Type it out in full; do not put it in a shell variable, because zsh does not word-split unquoted variables.

| ID | Command (Track 1 shown) | Label | Status [DOC 2026-10-13] |
|---|---|---|---|
| C-01 | `WR --version` | READ-ONLY | VERIFIED-SYNTAX (global `--v/--version`) |
| C-02 | `WR whoami --json` | READ-ONLY | VERIFIED-SYNTAX. Docs: "Exits with a non-zero status if not authenticated" |
| C-03 | `WR d1 list --json --config wrangler.toml` | READ-ONLY | VERIFIED-SYNTAX |
| C-04 | `WR deployments list --name klarweg-exam-idem-probe-free --json --config wrangler.toml` | READ-ONLY | VERIFIED-SYNTAX. **UNVERIFIED** output for a Worker that does not exist (U-2) |
| C-05 | `WR d1 create klarweg-exam-idem-probe --config wrangler.toml` | STATE-CHANGING | VERIFIED-SYNTAX. Add no other flag (the config must not be auto-edited). **UNVERIFIED** that the `account_id` in the config is honoured (U-6; `CLOUDFLARE_ACCOUNT_ID` is also set) |
| C-06 | `WR d1 info klarweg-exam-idem-probe --json --config wrangler.toml > <PRIVATE>/d1-info.json` | READ-ONLY | VERIFIED-SYNTAX. **UNVERIFIED** JSON field names (U-1; the gate fails closed) |
| C-07 | `WR d1 execute klarweg-exam-idem-probe --remote --json --config wrangler.toml --command "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name"` | READ-ONLY | VERIFIED-SYNTAX. An empty database lists only `_cf_KV` [DOC import/export] (U-12) |
| C-08 | `WR d1 execute klarweg-exam-idem-probe --remote --config wrangler.toml --file=../../migrations/0001_exam_init.sql` | STATE-CHANGING | VERIFIED-SYNTAX. The file has no `BEGIN`/`COMMIT`/`PRAGMA` [GH]. **UNVERIFIED** prompts (U-11); answer them by hand |
| C-09 | `WR d1 execute klarweg-exam-idem-probe --remote --config wrangler.toml --file=../../migrations/0002_idempotency_claims.sql` (Track 1 only) | STATE-CHANGING | VERIFIED-SYNTAX. The file has no `BEGIN`/`COMMIT`/`PRAGMA` [GH]; U-11 |
| C-10 | `WR d1 execute klarweg-exam-idem-probe --remote --config wrangler.toml --file=probe-schema.sql` (Track 2: `klarweg-exam-v10-probe`; its only schema file) | STATE-CHANGING | VERIFIED-SYNTAX. The file has no `BEGIN`/`COMMIT`/`PRAGMA` [GH]; U-11 |
| C-11 | `WR deploy --dry-run --outdir <PRIVATE>/dry-run --config wrangler.toml` | LOCAL-ONLY (docs: "without actually deploying") | VERIFIED-SYNTAX. **UNVERIFIED** whether it prints the bindings or contacts the API (U-4) |
| C-12 | `WR deploy --config wrangler.toml --secrets-file <PRIVATE>/secrets.json` (switch is `"off"` in the config) | STATE-CHANGING | VERIFIED-SYNTAX. JSON secrets form documented [DOC secrets, `secret bulk`] |
| C-13 | `WR deploy --config wrangler.toml --var IDEM_PROBE:on` (Track 2: `--var V10_PROBE:on`) | STATE-CHANGING | VERIFIED-SYNTAX (`--var key:value`; a flag value wins over config `vars`). **UNVERIFIED** whether other config vars are kept (U-3; fails closed: `/verify` checks the label) |
| C-14 | `WR d1 execute klarweg-exam-idem-probe --remote --config wrangler.toml --file=<PRIVATE>/marker.sql` | STATE-CHANGING | VERIFIED-SYNTAX |
| C-15 | `WR d1 execute klarweg-exam-idem-probe --remote --json --config wrangler.toml --command "SELECT (SELECT COUNT(*) FROM idem_probe_marker) AS marker, (SELECT COUNT(*) FROM idem_probe_state) AS state, (SELECT COUNT(*) FROM idem_probe_effects) AS effects, (SELECT COUNT(*) FROM request_log) AS request_log, (SELECT COUNT(*) FROM idempotency_assertions) AS assertions"` (Track 2: `v10_probe_marker`, `v10_assertions`, `v10_ledger`, `v10_state`, `v10_rows`) | READ-ONLY | VERIFIED-SYNTAX |
| C-16 | `WR deploy --config wrangler.toml --var V10_PROBE:on V10_FAULT_INJECTION:on` (**Track 2, forced-ambiguity window only**; `--var` last, in the documented space-separated form) | STATE-CHANGING | VERIFIED-SYNTAX; U-3 as C-13 |
| C-17 | `WR deploy --config wrangler.toml` (no `--var`: back to the config's `"off"` values) | STATE-CHANGING | VERIFIED-SYNTAX. Docs: secrets are never deleted by a deployment |
| C-18 | `WR delete --name klarweg-exam-idem-probe-free --config wrangler.toml --dry-run` | READ-ONLY (docs: "Do not actually delete") | VERIFIED-SYNTAX. **UNVERIFIED** scope: docs say `delete` removes the Worker "and all associated Cloudflare developer platform resources" (U-5) |
| C-19 | `WR delete --name klarweg-exam-idem-probe-free --config wrangler.toml` | STATE-CHANGING | VERIFIED-SYNTAX; U-5 |
| C-20 | `WR d1 delete klarweg-exam-idem-probe --config wrangler.toml` | STATE-CHANGING | VERIFIED-SYNTAX. Confirm the interactive prompt by hand; never skip it |
| L-01 | `node <TOOLS>/prepare-probe-secrets.mjs --track idem --dir <PRIVATE>` | LOCAL-ONLY | writes `secrets.json` and `marker.sql` (`0600`); prints only the hash [LOCAL test] |
| L-02 | `node <TOOLS>/config-gate.mjs --track idem --config wrangler.toml --stage bootstrap` / `--stage bound --d1-info <PRIVATE>/d1-info.json` | LOCAL-ONLY | [LOCAL test] |
| H-01 | `node <TOOLS>/qualify-check.mjs --track idem --secrets <PRIVATE>/secrets.json --base https://klarweg-exam-idem-probe-free.<SUBDOMAIN>.workers.dev --expect <stage> > <PRIVATE>/qualify-<stage>.json`. `<stage>` is `disabled`, `no-marker`, `verified`, or `fault-off` (Track 2 only) | READ-ONLY (HTTP; every expected answer is a refusal or a read) | [LOCAL test against the pinned probe handlers] |
| H-02 | `node <TOOLS>/with-probe-env.mjs --track idem --secrets <PRIVATE>/secrets.json --base https://klarweg-exam-idem-probe-free.<SUBDOMAIN>.workers.dev -- node run-idem-free.mjs --n 30 --rounds 5 > <PRIVATE>/idem-report-<UTC>.json` | STATE-CHANGING (probe rows only) | runner pinned [GH]; wrapper [LOCAL test] |
| H-03 | Track 2: `node <TOOLS>/with-probe-env.mjs --track v10 --secrets <PRIVATE>/secrets.json --base https://klarweg-exam-v10-probe.<SUBDOMAIN>.workers.dev -- node run-v10.mjs --n 50 --rounds 5 > <PRIVATE>/v10-report-<UTC>.json` (exit 0 = all pass) | STATE-CHANGING (probe rows only) | runner pinned [GH] |
| H-04 | Track 2, natural: `node <TOOLS>/with-probe-env.mjs --track v10 --secrets <PRIVATE>/secrets.json --base https://klarweg-exam-v10-probe.<SUBDOMAIN>.workers.dev -- node run-v10-ambiguous.mjs --intervals 1,5,10,25,50,100,200 --trials 5 > <PRIVATE>/v10-ambiguous-natural-<UTC>.json`. Forced, **inside the C-16 window only**: the same with `--post-commit-delay 2000 --abort-after 500 --trials 10` in place of `--intervals … --trials 5`, output `v10-ambiguous-forced-<UTC>.json`. Exit 0 pass, 1 fail, 3 inconclusive, 2 refused | STATE-CHANGING (probe rows only) | runner pinned [GH] |
| H-05 | Track 1, **PROPOSED** (review required before any use): `node <TOOLS>/with-probe-env.mjs --track idem --secrets <PRIVATE>/secrets.json --base https://klarweg-exam-idem-probe-free.<SUBDOMAIN>.workers.dev -- node <TOOLS>/run-idem-abort.mjs --intervals 5,10,25,50,100,200 --trials 3 --settle-ms 75000 > <PRIVATE>/idem-abort-<UTC>.json` (exit 0 pass, 1 fail, 3 inconclusive) | STATE-CHANGING (probe rows only) | [LOCAL test] |

Never use `--update-config`, `--skip-confirmation`/`-y`/`--yes`, `--binding`, `--route`/`--domain`, or `--local`/`--preview` with these commands.

## 5. Procedure
The order is the same for each track. **G** marks an identity gate: run `config-gate.mjs` (exit 0 required) **and** have the second reviewer confirm. STOP means: do nothing further, keep evidence, and go to section 9.

| Step | Action | Label | Preconditions / stop gate |
|---|---|---|---|
| S-01 | P-1…P-7 complete; `git rev-parse HEAD` equals the pin | LOCAL-ONLY | Otherwise STOP |
| S-02 | `mkdir -m 700 <PRIVATE>`; **L-01** | LOCAL-ONLY | The tool must print no secret; it refuses a non-private or in-repo directory |
| S-03 | `cp wrangler.free.example.toml wrangler.toml` (Track 2: `wrangler.example.toml`). Add `account_id = "<ACCOUNT_ID>"`; leave `database_id` as the placeholder. Optional for T8-CPU (P-3 gate): `[observability]` `enabled = true` and `head_sampling_rate = 1` | LOCAL-ONLY | `wrangler.toml` is gitignored in both probe dirs [GH]; `git status --porcelain` must not list it |
| S-04 | `export CLOUDFLARE_ACCOUNT_ID=<ACCOUNT_ID>`; **C-01**, **C-02** | READ-ONLY | `whoami` exit 0, and the intended account is listed. Otherwise STOP |
| S-05 | **G** `--stage bootstrap`; **C-03**; **C-04** | READ-ONLY | `klarweg-exam-idem-probe` absent from `d1 list`; no deployment of `klarweg-exam-idem-probe-free`. If either exists: STOP. Never reuse or overwrite it; decide in review |
| S-06 | **C-05** | STATE-CHANGING | Gate S-05 passed in this session. Record the printed id in `<PRIVATE>` only |
| S-07 | Put the id into `database_id`; **C-06**; **G** `--stage bound --d1-info <PRIVATE>/d1-info.json` | READ-ONLY + LOCAL-ONLY | The id and name match. If the gate cannot match unambiguously (U-1), compare by hand with the reviewer; if they don't match, STOP |
| S-08 | **C-07** | READ-ONLY | Exactly `_cf_KV` or no table. Anything else: STOP, the database is not empty |
| S-09 | **G**; **C-08**, **C-09**, **C-10** in this order (Track 2: **C-10** only) | STATE-CHANGING | Each command names `klarweg-exam-idem-probe`. Any error: STOP and recreate (section 9) |
| S-10 | **C-07** again | READ-ONLY | Track 1: the 0001/0002 tables + `idem_probe_*` (+ `sqlite_sequence`, `_cf_KV`). Track 2: `v10_*` (+ `sqlite_sequence`, `_cf_KV`). Nothing else |
| S-11 | **C-11**; inspect `<PRIVATE>/dry-run` and the printed output | LOCAL-ONLY | If the output lists any binding other than `DB → klarweg-exam-idem-probe`: STOP |
| S-12 | **G**; **C-12** | STATE-CHANGING | Read the deploy output: the Worker name is the probe's, and the only binding is `DB → klarweg-exam-idem-probe`. Otherwise STOP (the probe is off, so every route returns 403) and follow section 9 |
| S-13 | **H-01** `--expect disabled` (T7a) | READ-ONLY | Exit 0 |
| S-14 | **G**; **C-13** (probe on, **no marker yet**: every route still returns 412) | STATE-CHANGING | Deploy output as in S-12 |
| S-15 | **C-15** (save it), **H-01** `--expect no-marker` (T7b/c), **C-15** again | READ-ONLY | Exit 0 **and** both C-15 outputs identical. Otherwise STOP |
| S-16 | **G**; **C-14** | STATE-CHANGING | **C-15**: `marker = 1` exactly. Never insert a second marker; if a marker is wrong, recreate the database |
| S-17 | **H-01** `--expect verified` | READ-ONLY | Exit 0, `verified: true` with the track's label. `412 db_nonce_mismatch` or `label_*`: STOP (secrets or vars wrong) |
| S-18 | Run the tests (section 6). Track 1: **H-02**, then **H-05** only if approved. Track 2: **H-03** and **H-04** natural; then **G**, **C-16**, **H-04** forced; then at once **G**, **C-13** (fault injection back to the config's `"off"`) and **H-01** `--expect fault-off` | STATE-CHANGING (probe rows) | Record each exit code. Nothing runs while `/verify` fails. `fault-off` must exit 0 before anything else happens |
| S-19 | Export metrics (T8) within the 3-day Free log retention [DOC] | READ-ONLY | — |
| S-20 | **G**; **C-17** (probe off); **H-01** `--expect disabled` | STATE-CHANGING + READ-ONLY | Exit 0 |
| S-21 | Teardown (section 10) | STATE-CHANGING | Only after the evidence (section 11) is stored and reviewed |

## 6. Test cases
Verdict words: **pass**, **fail** or **inconclusive**. Inconclusive is never a pass and is never waived; it means a rerun (section 9).

| ID | Property | Track · check | Expected (pass) | Fail if | Inconclusive if | Evidence |
|---|---|---|---|---|---|---|
| **T1** | Atomic rollback when an assertion fails | 1 · S2 (stolen claim), S3 (precondition false), S4 (later failing statement), S6 (resumed original). 2 · A, B, C (D = hazard control) | After each failed batch: no effect row, no completed record, state unchanged. S4: effect and `completed` record appear together. V10 A–C pass; D passes (a zero-row guard is not an error) | Any partial write survives a failed batch | `poll_budget_exhausted`; budget trip; non-JSON/5xx platform answer | Report JSON (scenario `detail`) |
| **T2** | Exactly one winner for a fresh claim | 1 · S1 (n = 12, one invocation), `R_*` (30 invocations per round), `RF_*` (4 invocations × 6 claims). 2 · `E_same_op_key_*` (n = 50) | `executed = 1`, `effects = 1`, record `completed`; all other answers `request_in_progress` or a replay. V10: `applied = 1`, `ledger_rows = 1`, `claim_rows = 1` | `executed > 1`, `effects > 1`, or an unexpected status | Unanswered request; `overlapped = 0` (`no_contention_observed`). `late` is recorded only | Round `detail` |
| **T3** | Compare-and-set takeover of a stale claim | 1 · S5 (n = 6), `RS_*` (30), `RSF_*` (4 × 6), S6, S7a | Exactly **one** successful takeover (`takeovers = 1`), one execution, one effect. S6: the resumed original gets a replay. S7a: `request_in_progress` within the TTL, one takeover after it | `takeovers > 1` (counted even from budget-tripped invocations); more than one execution; the original's batch applies after a takeover | As T2 | Round `detail.takeovers` |
| **T4** | Duplicate request, saved-response replay | 1 · S7b; replays inside S1/R/RF | Retry after commit: `200 replayed: true` with the saved body; no second effect | Re-execution; second effect | Budget trip; platform error | Report |
| **T5** | No duplicate side effects under concurrency | 1 · `effects` in every R/RS/RF/RSF round. 2 · `E_distinct_op_keys_*` (n = 50) | `effects = 1` per round; V10: exactly one applies | `effects > 1` / `applied > 1` | As T2 | Round `detail` |
| **T6** | Ambiguous outcome after commit (V10 path) | 2 · `run-v10-ambiguous.mjs`, natural + forced | Invariant in every trial (state `committed`, 1 ledger row, 1 claim row) **and** ≥ 1 `aborted_original_applied` | Any invariant violation | No `aborted_original_applied` (exit 3) | Both ambiguous reports |
| **T7** | Fail-closed qualification (both Workers) | S-13: (a) probe off → `403 probe_disabled` (with and without token). S-15: (b) wrong token → `401 unauthorised`; (c) probe on, schema, **no marker** → `412 marker_missing_or_ambiguous` on `/verify` **and** a write route. (d) cross-track refusal is covered by the **local** test only. On Cloudflare it would need a cross-bound config, which the gate refuses by design, so it is not performed | Each exact status **and** code; C-15 row counts identical before and after | Any 2xx from a write route; any changed count | A platform error hides the response | `qualify-*.json`, both C-15 outputs |
| **T8** | D1 query budget and Worker CPU | Both | **Budget:** Track 1 responses `budget.used ≤ 40`; the report's `max_budget_used` is evidence of the probe's own count, not of Cloudflare's accounting. Local worst-case models [LOCAL]: S1 37, S2 19 + polls, S3 18, S4 28, S5 38, S6 24 + polls, S7a 20 + polls, S7b 17, race single 15, fan 35. Track 2 [LOCAL]: verify 2, scenarios 31, prepare 6, claim 6, state 5, ledger 3. **CPU:** per-invocation CPU time from Workers Logs invocation logs [DOC limits: "CPU time and wall time appear in the invocation log"]; ≤ 10 ms on Free; no `exceededCpu` / Error 1102 | — (a measurement) | Any `exceededCpu`/1102 or `query_budget_exceeded` makes the affected checks inconclusive. **The dashboard CPU chart is not evidence**: it is reservoir-sampled quantiles that "may appear to exceed CPU time limits without generating invocation errors" [DOC]. No invocation logs (P-3) → T8-CPU inconclusive | Report fields; log export |
| **T9** | Client abort on the **PR #71 path** (PROPOSED, H-05) | 1 · `tools/run-idem-abort.mjs`: the client aborts `race/one` **before any response header**, then the same request id is retried until settled (`--settle-ms` must exceed `CLAIM_TTL_MS` 60 s; the CLI refuses otherwise) | Every trial: `effects = 1`, record `completed`; ≥ 1 `aborted_original_applied` (the retry replays an original whose commit the client never saw) | `effects > 1`; settled with `effects ≠ 1` or not `completed`; an unexpected status, including an unexpected first answer | A platform answer hid a result (first answer or retry); `first_request_failed`; trial not settled; no `aborted_original_applied`. Aborts after the headers count as `responded`, never as the key branch | Abort report (`branches`, per-trial `first`, `retry`, `state`) |

**What each class of evidence shows.**
- **Local and CI** (this directory's tests, `npm run test:exam` at the pins, GitHub Actions) check the probes' logic on SQLite. A batch there runs in one JavaScript turn, with no network, no connection cap and no replicas.
- **Only** reports from a deployed probe bound to the dedicated non-production database, produced under section 5, are **real-D1 evidence**.

**The client-abort gap, and what T9 can and cannot add.**
- Track 1's pinned tooling has no client-abort test: S7b simulates a lost response inside one invocation. T6 covers client-visible ambiguity, but on the V10 code, not `idempotentAtomic()`.
- **T9** (PROPOSED, review approval required) targets that gap **without changing any PR**. It uses only PR #73's existing endpoints, **no fault injection**, and natural timing only.
- **Three different events, kept apart:**
  1. *Client abort:* the runner's own `AbortController` fired **before any response header**. Only this counts as aborted. A transport error that is not that abort is `first_request_failed`; an abort after the `200` headers is `responded`.
  2. *Worker cancellation:* Cloudflare says that when "the client disconnects … tasks associated with that request may be canceled" [DOC limits]. T9 **cannot observe this directly**.
  3. *Committed transaction:* shown only by the retry's database outcome. A replay proves the original's batch committed. An immediate execution proves no claim existed. A `503 request_in_progress` proves a claim was pending; that is the `aborted_original_in_flight` branch, resolved after the 60 s TTL.
- **What a T9 pass would show** (real D1, ≥ 1 `aborted_original_applied`, no violation): on the PR #71 path, an original that committed while its client had given up is resolved by the same-request-id retry with a replay and exactly one effect.
- **What it would not show:**
  - how D1 or Workers behave when an invocation is cancelled **in the middle of** its batch;
  - any branch that natural timing does not happen to produce.

  A forced post-commit delay on the PR #71 path would need new, reviewed probe code; T9 adds none.
- **The gap is closed only by real-D1 evidence.** Until a reviewed T9 run passes, Track 1's client-abort coverage stays open; an inconclusive T9 leaves it open.
- A local T9 pass (section 12) checks the runner's logic only.

**Known false-failure modes (investigate; never relabel as a pass).**
- D1 "overloaded" errors [DOC limits: requests are queued, then "overloaded"] appear in Track 1 as unexpected `500` statuses, which the round judges **fail**. In V10 `E`, they would only lower `applied` (a batch error counts as "not applied").
- A `fail` whose only anomalies are platform or overload errors, with **no** violation (`executed`, `effects` and `takeovers` all ≤ 1), is reported as fail but treated as a rerun candidate after review.
- A violation is always a real failure.

## 7. Limits and figures relied on (re-check at run time)
- D1: **50** queries per Worker invocation on Free (1,000 on Paid). Limits for individual queries apply to each statement inside a batch. "Each individual D1 database is inherently single-threaded, and processes queries one at a time." Up to **six connections (to D1)** per invocation [DOC D1 limits].
  - Whether a batch counts as one query or as one per statement against the 50 is **not stated** (U-8). The Track 1 Free probe enforces a cap of 40 by counting every statement. The V10 probe has no guard; its largest invocation measured 31 statements locally [LOCAL].
  - No documented cap on in-flight D1 calls (U-9).
- Workers Free: 50 subrequests per request, 10 ms CPU per HTTP request, 100,000 requests per day [DOC Workers limits]. One full Track 1 run is about 390 requests (plus about 100 for T9); Track 2 is about 700 (`run-v10.mjs` ≈ 520, ambiguous runs ≈ 180) [INF from the runner arguments].
- Batches: statements "execute and commit, sequentially, non-concurrently", and a failing statement "aborts or rolls back the entire sequence" [DOC D1 API]. **This is exactly the claim T1 and T6 test**; the docs are not evidence for it.

## 8. Secrets and qualification
- Secrets come only from **L-01**: 32 random bytes as 64 lowercase hex characters each. They are written to `<PRIVATE>/secrets.json` (`0600`) and uploaded by **C-12** (`--secrets-file`, the JSON form [DOC]). No value passes through a shell pipe, `echo` or the command line, so no trailing newline can be added.
- `marker.sql` holds the label and `sha256` of the nonce **exactly as stored in `secrets.json`**. The probe compares it with `sha256(secret)` [GH]. A newline or encoding mismatch fails closed with `412 db_nonce_mismatch` [LOCAL test].
- Runners and checks receive the token only through `with-probe-env.mjs` or `qualify-check.mjs` (**H-01** to **H-05**). The token is read from the file and passed only in the child's environment. These tools refuse a base URL that is not `https://<the track's worker>.<SUBDOMAIN>.workers.dev`, so the token is never sent to another Worker.
- Never: `echo` a secret, pass one as an argument, enable `WRANGLER_LOG=debug` (it logs API requests [DOC]), or paste output that may contain one. `secrets.json` is never part of the evidence.
- **Marker uniqueness:** `412 marker_missing_or_ambiguous` with zero **or** more than one marker [GH]. The marker table's primary key is the label, and the labels differ per track.

## 9. Failure handling and recovery
| Situation | Action |
|---|---|
| Any gate (**G**, S-05, S-08, S-10, S-11, S-12) fails | STOP. Make no further state change. Record it. The reviewer decides |
| Database or Worker already exists (S-05) | Do not reuse, overwrite or delete it. Investigate its origin with the reviewer; choose new names only through a reviewed change to this runbook |
| `d1 create` landed in the wrong account | STOP. Delete it only after the reviewer confirms by name **and** id that it is the database just created and that it holds no other data (C-07). If the pinned config cannot address that account, use the dashboard with the reviewer; never edit `account_id` to reach it |
| Schema step failed or partial (S-09/S-10) | Never repair by hand. Tear down the database (section 10), reset `database_id` to the example placeholder, and restart from S-05 |
| Deploy shows an unexpected binding or name | **C-17** is not enough if the binding itself is wrong: the probe is still off (403 on every route). Delete the Worker (C-18/C-19 with the reviewer) and fix the config; restart from S-11 |
| `/verify` fails after the marker (S-17) | Don't run tests. Check `marker = 1` (C-15). If the secrets or marker are wrong: tear down and restart with **new** secrets (new `<PRIVATE>`) |
| Secret possibly exposed | Tear down at once; new secrets, new database, new Worker |
| A test **fails** | Keep all evidence. Make no change to the database. Merges stay blocked; the investigation is a review item |
| A test is **inconclusive** | Rerun the whole runner with fresh run ids, at most 3 attempts per track per session. If it persists, it is a blocker, not a pass |
| Fault injection possibly still on (Track 2) | **G**, **C-17** at once (probe and fault injection both back to the config's `"off"`); **H-01** `--expect disabled`. Resume only through S-14 → S-17 → **H-01** `--expect fault-off` |

## 10. Teardown (after evidence is stored)
1. **G**; **C-17** (off); **H-01** `--expect disabled` → exit 0.
2. **G**; **C-18** (dry run).
   - If the output names anything other than the Worker `klarweg-exam-idem-probe-free` (for example a D1 database, R2 bucket or KV namespace), **do not run C-19**. Delete the Worker manually in the dashboard (Workers & Pages → the probe Worker → Settings → Delete) with the reviewer watching. The dashboard path is [INF], so check it at run time.
3. **G**; **C-19**, then **C-04**: no deployments listed (U-2).
4. **G** `--d1-info` (fresh **C-06**); **C-20** (answer the prompt by hand), then **C-03**: `klarweg-exam-idem-probe` is gone.
5. After the evidence is reviewed: delete `<PRIVATE>/secrets.json` and `marker.sql`. Keep the evidence files.
6. **Never** run teardown commands in another directory, with another config, or with a name other than the track's own. Production names in any teardown command are an immediate STOP.

## 11. Evidence
**Private bundle** (in `<PRIVATE>`; never committed):
- the pinned commit;
- `WR --version` output and the C-02 output;
- `d1-info.json`;
- C-07 before and after the schema step;
- the deploy outputs of C-12, C-13 and C-16/C-17;
- all `qualify-*.json` files and both C-15 outputs per check;
- the full runner reports and exit codes;
- the CPU log export;
- the teardown outputs;
- operator, reviewer, and UTC start and end times.

**Shareable summary** (may go into a PR comment or document):
- per check: pass / fail / inconclusive;
- counts: executed, effects, takeovers, overlapped, `max_budget_used`;
- CPU quantiles from invocation logs;
- the commits and Wrangler version.

**Redact before sharing:**
- the account id and database id;
- the workers.dev subdomain (it appears in each report's `base` field);
- any token or nonce. These must not appear at all; if one does, treat it as an exposure (section 9).

## 12. Local verification of this runbook (LOCAL-ONLY)
In this directory:

```
IDEM_PIN_DIR=<checkout at c8f2b79> V10_PIN_DIR=<checkout at a34aca0> node --test test/*.test.mjs
node tools/runbook-lint.mjs
```

The tests run the **pinned** probe handlers in process, on SQLite. They check:
- the qualification sequence (T7 a–c) and that row counts are unchanged;
- the cross-track refusals;
- that the generated secrets and marker are accepted, and that a newline in the nonce is refused;
- the config gate, against the pinned example configs and injected defects;
- the URL check;
- the T9 runner's branches and verdicts, including:
  - duplicate effects → fail;
  - an unexpected first answer → fail;
  - a non-abort transport error, an abort after the `200` headers, or a hidden (`502`) first answer → never the key branch, so never a pass, **even though the original had committed** in each case;
  - `--settle-ms` not above the 60 s TTL → refused before any request.

The lint checks:
- every Wrangler command in section 4 is pinned, labelled, uses `--config`, uses `--remote` for `d1 execute`, and names a probe database rather than a binding;
- no forbidden production name appears in any command;
- the pinned commits and the files referenced from them exist;
- no 64-hex string (secret-shaped) appears in the runbook.

**These tests are not D1 evidence.**

## 13. Unverified register (each must be resolved or accepted by the reviewer before the step that needs it)
| ID | Item | Fail-closed handling |
|---|---|---|
| U-0 | The flags exist in the pinned Wrangler 4.150.0 binary (docs describe "current" Wrangler) | Local `--help` check (P-4); missing flag → STOP |
| U-1 | `d1 info --json` field names | The gate needs an unambiguous id match; otherwise a manual check with the reviewer |
| U-2 | `deployments list --name` output for a Worker that does not exist | Any listed deployment = exists = STOP; an error that is not clearly "not found" = STOP |
| U-3 | Whether `--var` keeps the config's other vars | `/verify` checks the label; a lost label gives `412 label_required` and nothing runs |
| U-4 | `deploy --dry-run`: printed bindings / API contact | S-12 rechecks the real deploy output |
| U-5 | `wrangler delete` "all associated … resources" scope | Dry run first; anything beyond the Worker → manual dashboard deletion |
| U-6 | Whether `d1 create` honours `account_id` from `--config` | `CLOUDFLARE_ACCOUNT_ID` set too; C-03/C-06 confirm the account and the database |
| U-7 | Workers Logs invocation-log CPU fields on Free; pricing after 2026-12-01 | P-3 gate; otherwise T8-CPU is inconclusive |
| U-8 | How D1 counts batch statements against the 50-query limit | Track 1 enforces a cap of 40 by counting every statement. Track 2 has no guard (largest invocation 31 statements locally) |
| U-9 | Whether D1 calls queue behind six connections per invocation | Delays only; overlap is measured per round |
| U-10 | Workers cancellation on client abort | T6 and T9 record the observed branch; nothing is assumed |
| U-11 | Prompts from `d1 execute --file` | Answer by hand; never `--yes` |
| U-12 | `_cf_KV` is the only internal table in an empty database | Any other table → STOP and review |
| U-13 | The dashboard path for manual Worker deletion | Checked at run time with the reviewer |
| U-14 | Whether Wrangler accepts the bootstrap config (placeholder `database_id`) for C-03, C-04 and C-05 | If it rejects the config, nothing changes. STOP and review; do not delete the D1 block or drop `--config` to work around it |

## 14. Merge gates and governance
- **PR #71** may be considered for merge only after **Track 1** has passed with no inconclusive check (T1–T5, T7, T8, and T9 if it is approved), **and** a human has reviewed the evidence. PR #73's tooling is reviewed in the same step.
- **PR #72** may be considered only after **Track 2** passes (`run-v10.mjs` exit 0, and both ambiguous runs exit 0), plus human review. Its base, PR #60, stays untouched.
- **CI being green, or this runbook being complete, does not make any PR ready.** All of #60, #71, #72 and #73 stay **drafts** until the owner decides.
- **Governance items stay open, unchanged:**
  - OD-53 `OWNER DECISION — CONDITIONAL`;
  - F4/P-25 open;
  - OD-41 with EX-04/EX-08, an open accommodation-policy dependency.
- No `enforce` mode, learner access, pilot or production change follows from this runbook.
- No Goethe equivalence or endorsement is claimed.

## 15. Second-reviewer checklist
- [ ] The pinned commits match section 1; the checkouts are clean (P-5, P-7).
- [ ] `<PRIVATE>` is `0700` and outside every repository. `secrets.json` was never displayed, echoed, piped or pasted.
- [ ] The account id was confirmed (C-02). `account_id` and `CLOUDFLARE_ACCOUNT_ID` are the non-production account.
- [ ] Before creation, the database and Worker were absent (S-05).
- [ ] Every **G** passed. I compared the database **name and id** myself before C-08, C-09, C-10, C-12, C-13, C-14, C-16, C-19 and C-20.
- [ ] The database was empty (only `_cf_KV`) before the schema; after it, only the expected tables (S-08, S-10).
- [ ] Every deploy output named the probe Worker, and its only binding was `DB → <probe database>`.
- [ ] T7 refusals were observed with the exact codes, and the row counts were unchanged.
- [ ] Exactly one marker; `/verify` was `verified: true` with the right label before any runner.
- [ ] Fault injection was on only inside the forced-ambiguity window. `--expect fault-off` passed right after it, and the probe is now off.
- [ ] Every check is recorded as pass / fail / inconclusive; nothing inconclusive was counted as a pass.
- [ ] T8-CPU comes from invocation logs, not the quantile chart (or is marked inconclusive).
- [ ] The teardown dry run named only the probe Worker. The Worker and database are gone; the secrets files are deleted.
- [ ] The shareable summary contains no account id, database id, subdomain, token or nonce.
- [ ] No PR status was changed. The governance items are unchanged.
