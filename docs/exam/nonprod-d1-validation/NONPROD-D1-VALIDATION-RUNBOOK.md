# Non-production D1 validation runbook (PR #71 idempotency · PR #72 V10)

> **STATUS: NOT EXECUTED.** No Cloudflare resource has been created for this runbook, and no command in it has been run against Cloudflare. No real-D1 evidence exists for PR #71, #72 or #73. This is a **proposal for review**. A human operator and a second reviewer carry it out only after it is approved. It authorizes nothing by itself.

**Source tags.** Each claim says where it comes from:
- **[GH]** GitHub or git objects at the pinned commits;
- **[DOC]** official Cloudflare documentation, read 2026-10-13;
- **[LOCAL]** committed, reproducible tests in this directory (`test/tools.test.mjs`, run as in section 12), on in-memory SQLite. These are **never D1 evidence**;
- **[PR73]** committed tests of PR #73 at `c8f2b79` (its own CI). Also never D1 evidence;
- **[INF]** inference, not verified.

No figure here comes from an uncommitted experiment.

**Action labels.**
- **READ-ONLY:** documented as reading Cloudflare state only.
- **LOCAL-ONLY:** no Cloudflare effect.
- **STATE-CHANGING:** creates, changes or deletes a non-production Cloudflare resource or probe row. This label is **also used conservatively** for any command whose API side effects are not documented, such as `--dry-run`.

**Command status.**
- **VERIFIED-SYNTAX:** the command and every flag appear in the current official docs [DOC].
- **UNVERIFIED:** the syntax or behaviour is not confirmed. An UNVERIFIED item is **not an executable instruction** until its register entry (section 13) is resolved with the second reviewer.

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
| Commands | **section 4.1** | **section 4.2** |
| Runners | `run-idem-free.mjs` (pinned); `tools/run-idem-abort.mjs` (**proposed**, see T9) | `run-v10.mjs`, `run-v10-ambiguous.mjs` (pinned) |
| Tests the PR #71 path? | **Yes** | **No.** Same D1 batch semantics, different code |

**The tracks never share a database, a Worker, a secret, a private directory or a command table.** Run them one after the other, each from its own clean checkout, using **only its own table** in section 4. Every Track 2 command is written out in full; nothing is substituted by hand.

## 2. Safety model (layers; no single layer is proof)
1. **Account pin and credential sources (M-1).**
   - Wrangler can take account and credentials from several places: the config's `account_id`, the environment (`CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`, legacy key/email, deprecated `CF_*` aliases, an API base-URL override), and a `.env` file "in your project directory" [DOC system environment variables, Wrangler configuration]. **How they rank against each other is not documented** (U-15).
   - The runbook therefore removes the ambiguity rather than relying on any order. `account_id` is set in the local `wrangler.toml`; `CLOUDFLARE_ACCOUNT_ID` is set to the **same** value; exactly one credential source is declared (`--auth oauth` or `--auth api-token`); and every other source is refused by the gate (layer 4).
   - **Membership is not selection.** `whoami` lists every account the login can reach, and `whoami --account <id>` shows membership of one account [DOC]. Neither proves which account a command acts on. Selection is proven only by the manual check **S-08**: the database just created appears, with the same id, in the intended account's dashboard.
2. **Explicit names, never bindings.** `d1 execute <DATABASE>` accepts "the name **or binding** of the DB" [DOC]. Every database command names its track's database **literally**. The binding `DB` could resolve to production in the wrong directory. The gate refuses any other name, including the other track's.
3. **Correct directory and config.** Every Wrangler command runs **in the probe directory** with `--config wrangler.toml`. **Never** run one in `exam-worker/` or the repository root: `exam-worker/wrangler.toml` is production (`klarweg-exam` Worker and D1; R2 `klarweg-exam-content` and `klarweg-exam-recordings`) [GH].
4. **Identity gate G before every state-changing command** (exact definition in section 5). `tools/config-gate.mjs`, run in the probe directory, refuses unless **all** of these hold:
   - **Local inputs:** the environment passes, by name only (layer 1). The probe directory holds only the files tracked at the pin, plus `wrangler.toml`, plus Wrangler's own `.wrangler/` working directory, which may not contain any `.env*`, `.dev.vars*` or `wrangler.*` file (U-17); ignored files count. No `.env*` or `.dev.vars*` exists in the probe directory or any ancestor up to the repository root.
   - **Config:** it is this track's probe config, in a small TOML subset: one D1 binding, no routes, R2, KV or services, no duplicates, the switch and fault injection off.
   - **Database:** after creation, a **fresh** `d1 info --json` output (at most 10 minutes old) shows exactly one id equal to the config's `database_id` **and** a name equal to the track's database. A missing name, an ambiguous id or a stale file is refused; an id-only match is never accepted.
   - **Command:** the **exact command about to run** names this track's database and Worker, uses only allowed flags and files, and any local marker or secrets file it uses belongs to this track.
   - **Reviewer:** a second reviewer confirms that the gated command is character-for-character the one that runs.
5. **Probe qualification (fail-closed in the Worker).**
   - Every route returns `403` unless the switch var is exactly `"on"`, and `401` without the token.
   - Every route returns `412` (before any write) unless the database holds the probe schema and **exactly one** marker whose label matches and whose `nonce_sha256` equals `sha256(nonce secret)` [GH].
   - The Worker creates no tables and no marker.
6. **Cross-track refusal (backstop only).** The V10 Worker refuses a Track-1 database (`412 refusing_exam_database`); the idempotency Worker refuses a Track-2 database (`412 migrations_missing`) [LOCAL]. This does **not** prove a database is safe; layers 1–5 carry the safety.

**Limitation, stated plainly:** a Worker cannot read the physical id or name of its D1 binding at runtime [GH, probe READMEs]. Database identity is established **only** by the operator and the reviewer (layers 1–4 and S-08).

## 3. Prerequisites
- **P-1 People.** One operator and one second reviewer, both named in the evidence. The reviewer co-signs every G and S-08.
- **P-2 Account.** A Cloudflare account intended for non-production work, preferably with no production resources. If none exists, the reviewer approves the account choice in writing before S-07. Note the account id; it is private and never committed.
- **P-3 Plan and cost.**
  - Workers **Free** is enough (statement counts in T8). **Do not upgrade.**
  - Workers Logs is included on Free (200,000 events per day, 3-day retention), but "Beginning December 1, 2026, Workers Logs will use Cloudflare Observability pricing" [DOC].
  - **Gate:** on or after 2026-12-01, confirm that enabling observability costs nothing before turning it on. Otherwise leave it off and record T8-CPU as inconclusive.
- **P-4 Tooling.**
  - Node 22 or 24, and git.
  - Wrangler pinned as **`npx --yes wrangler@4.150.0`**: the npm `latest` on 2026-10-13, when the docs were read. The repository itself does not pin Wrangler.
  - **Gate:** before the first use of a flag, the operator runs the LOCAL-ONLY `npx --yes wrangler@4.150.0 <subcommand> --help` and confirms the flag is listed (U-0).
- **P-5 Checkouts.** Three **fresh** clones or worktrees, never a working copy with other changes:
  - Track 1 at `c8f2b79…`;
  - Track 2 at `a34aca0…`;
  - this runbook's branch, for `tools/`, which use only Node built-ins.

  Check each with `git rev-parse HEAD`.
- **P-6 Private directory.** One per track, **outside every git work tree**, mode `0700`. It holds the secrets, saved Wrangler outputs and raw reports; `tools/prepare-probe-secrets.mjs` refuses any other kind of directory.
- **P-7 Local preflight (LOCAL-ONLY).**
  - In each pinned checkout: `npm run test:exam` must pass. Then, **in the probe directory**, `git status --porcelain --ignored -- .` must list nothing at all; `wrangler.toml` doesn't exist yet at this point. The check is scoped to the probe directory because the repository's own tests may leave ignored build outputs elsewhere; the gate checks the probe directory and its ancestors.
  - In this directory: the tool tests (section 12).
- **P-8 Shell.**
  - Unset every variable the gate refuses (section 2, layer 1), using `unset NAME` rather than printing values.
  - `export CLOUDFLARE_ACCOUNT_ID=<ACCOUNT_ID>`.
  - Choose `<AUTH>`: `oauth` if Wrangler is logged in and `CLOUDFLARE_API_TOKEN` is unset; `api-token` if exactly that variable carries a token scoped to the non-production account. Never echo the token.

**Placeholders:** `<PRIVATE>` private dir · `<TOOLS>` path to this directory's `tools/` · `<ACCOUNT_ID>` 32-hex account id · `<AUTH>` `oauth` or `api-token` · `<SUBDOMAIN>` your workers.dev subdomain · `<UTC>` timestamp · `<exact command>` the full command from the same table, word for word.

## 4. Command inventory
All commands run **in the track's probe directory**. Wrangler is always called as `npx --yes wrangler@4.150.0`, written out in full. **Use only your track's table.** Every command passes `tools/tracks.mjs → checkCommand` for its track; `tools/runbook-lint.mjs` enforces this.

The status column, verified against [DOC] 2026-10-13, applies to the same ID in both tables:

| ID | Status |
|---|---|
| C-01 | VERIFIED-SYNTAX (global `--version`) |
| C-02 | VERIFIED-SYNTAX. "Exits with a non-zero status if not authenticated". Lists memberships only |
| C-03 | VERIFIED-SYNTAX (`--account`: "Show membership information for the given account"). Membership, not selection |
| C-04 | VERIFIED-SYNTAX |
| C-05 | VERIFIED-SYNTAX. **UNVERIFIED** output for a Worker that does not exist (U-2) |
| C-06 | VERIFIED-SYNTAX. **UNVERIFIED** whether `account_id` from the config is honoured (U-6), and any prompt to add the database to the config (U-16): **answer No**; never `--update-config` |
| C-07 | VERIFIED-SYNTAX. **UNVERIFIED** JSON field names (U-1): the gate needs an unambiguous id **and** name, or it refuses |
| C-08 | VERIFIED-SYNTAX. An empty database lists only `_cf_KV` [DOC] (U-12) |
| C-09, C-10, C-11 | VERIFIED-SYNTAX. The files have no `BEGIN`/`COMMIT`/`PRAGMA` [GH]. **UNVERIFIED** prompts (U-11): answer them by hand |
| C-12 | VERIFIED-SYNTAX ("Compile a project without actually deploying to live servers"). **UNVERIFIED** whether it contacts the API or prints bindings (U-4), so it is labelled and gated as STATE-CHANGING |
| C-13 | VERIFIED-SYNTAX. JSON secrets file [DOC secrets, `secret bulk`] |
| C-14, C-17 | VERIFIED-SYNTAX (`--var key:value`, last; a flag value wins over config `vars`). **UNVERIFIED** whether other config vars are kept (U-3; fails closed: `/verify` checks the label) |
| C-15 | VERIFIED-SYNTAX |
| C-16 | VERIFIED-SYNTAX |
| C-18 | VERIFIED-SYNTAX. Secrets are never deleted by a deployment [DOC] |
| C-19 | VERIFIED-SYNTAX ("Do not actually delete the Worker"). **UNVERIFIED** API side effects and the scope of "all associated … resources" (U-5): gated as STATE-CHANGING |
| C-20 | VERIFIED-SYNTAX; U-5 |
| C-21 | VERIFIED-SYNTAX. Confirm the interactive prompt by hand; never skip it |

### 4.1 Track 1 commands (idempotency · run in `exam-worker/verification/idempotency-d1/` of the `c8f2b79` checkout)
| ID | Command | Label |
|---|---|---|
| C-01 | `npx --yes wrangler@4.150.0 --version` | READ-ONLY |
| C-02 | `npx --yes wrangler@4.150.0 whoami --json` | READ-ONLY |
| C-03 | `npx --yes wrangler@4.150.0 whoami --account <ACCOUNT_ID>` | READ-ONLY |
| C-04 | `npx --yes wrangler@4.150.0 d1 list --json --config wrangler.toml` | READ-ONLY |
| C-05 | `npx --yes wrangler@4.150.0 deployments list --name klarweg-exam-idem-probe-free --json --config wrangler.toml` | READ-ONLY |
| C-06 | `npx --yes wrangler@4.150.0 d1 create klarweg-exam-idem-probe --config wrangler.toml` | STATE-CHANGING |
| C-07 | `npx --yes wrangler@4.150.0 d1 info klarweg-exam-idem-probe --json --config wrangler.toml > <PRIVATE>/d1-info.json` | READ-ONLY |
| C-08 | `npx --yes wrangler@4.150.0 d1 execute klarweg-exam-idem-probe --remote --json --config wrangler.toml --command "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name"` | READ-ONLY |
| C-09 | `npx --yes wrangler@4.150.0 d1 execute klarweg-exam-idem-probe --remote --config wrangler.toml --file=../../migrations/0001_exam_init.sql` | STATE-CHANGING |
| C-10 | `npx --yes wrangler@4.150.0 d1 execute klarweg-exam-idem-probe --remote --config wrangler.toml --file=../../migrations/0002_idempotency_claims.sql` | STATE-CHANGING |
| C-11 | `npx --yes wrangler@4.150.0 d1 execute klarweg-exam-idem-probe --remote --config wrangler.toml --file=probe-schema.sql` | STATE-CHANGING |
| C-12 | `npx --yes wrangler@4.150.0 deploy --dry-run --outdir <PRIVATE>/dry-run --config wrangler.toml` | STATE-CHANGING |
| C-13 | `npx --yes wrangler@4.150.0 deploy --config wrangler.toml --secrets-file <PRIVATE>/secrets.json` | STATE-CHANGING |
| C-14 | `npx --yes wrangler@4.150.0 deploy --config wrangler.toml --var IDEM_PROBE:on` | STATE-CHANGING |
| C-15 | `npx --yes wrangler@4.150.0 d1 execute klarweg-exam-idem-probe --remote --config wrangler.toml --file=<PRIVATE>/marker.sql` | STATE-CHANGING |
| C-16 | `npx --yes wrangler@4.150.0 d1 execute klarweg-exam-idem-probe --remote --json --config wrangler.toml --command "SELECT (SELECT COUNT(*) FROM idem_probe_marker) AS marker, (SELECT COUNT(*) FROM idem_probe_state) AS state, (SELECT COUNT(*) FROM idem_probe_effects) AS effects, (SELECT COUNT(*) FROM request_log) AS request_log, (SELECT COUNT(*) FROM idempotency_assertions) AS assertions"` | READ-ONLY |
| C-18 | `npx --yes wrangler@4.150.0 deploy --config wrangler.toml` | STATE-CHANGING |
| C-19 | `npx --yes wrangler@4.150.0 delete --name klarweg-exam-idem-probe-free --config wrangler.toml --dry-run` | STATE-CHANGING |
| C-20 | `npx --yes wrangler@4.150.0 delete --name klarweg-exam-idem-probe-free --config wrangler.toml` | STATE-CHANGING |
| C-21 | `npx --yes wrangler@4.150.0 d1 delete klarweg-exam-idem-probe --config wrangler.toml` | STATE-CHANGING |
| L-01 | `node <TOOLS>/prepare-probe-secrets.mjs --track idem --dir <PRIVATE>` | LOCAL-ONLY |
| L-02 | `node <TOOLS>/config-gate.mjs --track idem --config wrangler.toml --stage bootstrap --auth <AUTH> -- <exact command>` | LOCAL-ONLY |
| L-03 | `node <TOOLS>/config-gate.mjs --track idem --config wrangler.toml --stage bound --auth <AUTH> --d1-info <PRIVATE>/d1-info.json -- <exact command>` | LOCAL-ONLY |
| H-01 | `node <TOOLS>/qualify-check.mjs --track idem --secrets <PRIVATE>/secrets.json --base https://klarweg-exam-idem-probe-free.<SUBDOMAIN>.workers.dev --expect <stage> > <PRIVATE>/qualify-<stage>.json` | READ-ONLY |
| H-02 | `node <TOOLS>/with-probe-env.mjs --track idem --secrets <PRIVATE>/secrets.json --base https://klarweg-exam-idem-probe-free.<SUBDOMAIN>.workers.dev -- node run-idem-free.mjs --n 30 --rounds 5 > <PRIVATE>/idem-report-<UTC>.json` | STATE-CHANGING |
| H-05 | `node <TOOLS>/with-probe-env.mjs --track idem --secrets <PRIVATE>/secrets.json --base https://klarweg-exam-idem-probe-free.<SUBDOMAIN>.workers.dev -- node <TOOLS>/run-idem-abort.mjs --intervals 5,10,25,50,100,200 --trials 3 --settle-ms 75000 > <PRIVATE>/idem-abort-<UTC>.json` | STATE-CHANGING |

### 4.2 Track 2 commands (V10 · run in `exam-worker/verification/v10-probe/` of the `a34aca0` checkout)
| ID | Command | Label |
|---|---|---|
| C-01 | `npx --yes wrangler@4.150.0 --version` | READ-ONLY |
| C-02 | `npx --yes wrangler@4.150.0 whoami --json` | READ-ONLY |
| C-03 | `npx --yes wrangler@4.150.0 whoami --account <ACCOUNT_ID>` | READ-ONLY |
| C-04 | `npx --yes wrangler@4.150.0 d1 list --json --config wrangler.toml` | READ-ONLY |
| C-05 | `npx --yes wrangler@4.150.0 deployments list --name klarweg-exam-v10-probe --json --config wrangler.toml` | READ-ONLY |
| C-06 | `npx --yes wrangler@4.150.0 d1 create klarweg-exam-v10-probe --config wrangler.toml` | STATE-CHANGING |
| C-07 | `npx --yes wrangler@4.150.0 d1 info klarweg-exam-v10-probe --json --config wrangler.toml > <PRIVATE>/d1-info.json` | READ-ONLY |
| C-08 | `npx --yes wrangler@4.150.0 d1 execute klarweg-exam-v10-probe --remote --json --config wrangler.toml --command "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name"` | READ-ONLY |
| C-11 | `npx --yes wrangler@4.150.0 d1 execute klarweg-exam-v10-probe --remote --config wrangler.toml --file=probe-schema.sql` | STATE-CHANGING |
| C-12 | `npx --yes wrangler@4.150.0 deploy --dry-run --outdir <PRIVATE>/dry-run --config wrangler.toml` | STATE-CHANGING |
| C-13 | `npx --yes wrangler@4.150.0 deploy --config wrangler.toml --secrets-file <PRIVATE>/secrets.json` | STATE-CHANGING |
| C-14 | `npx --yes wrangler@4.150.0 deploy --config wrangler.toml --var V10_PROBE:on` | STATE-CHANGING |
| C-15 | `npx --yes wrangler@4.150.0 d1 execute klarweg-exam-v10-probe --remote --config wrangler.toml --file=<PRIVATE>/marker.sql` | STATE-CHANGING |
| C-16 | `npx --yes wrangler@4.150.0 d1 execute klarweg-exam-v10-probe --remote --json --config wrangler.toml --command "SELECT (SELECT COUNT(*) FROM v10_probe_marker) AS marker, (SELECT COUNT(*) FROM v10_assertions) AS assertions, (SELECT COUNT(*) FROM v10_ledger) AS ledger, (SELECT COUNT(*) FROM v10_state) AS state, (SELECT COUNT(*) FROM v10_rows) AS row_count"` | READ-ONLY |
| C-17 | `npx --yes wrangler@4.150.0 deploy --config wrangler.toml --var V10_PROBE:on V10_FAULT_INJECTION:on` | STATE-CHANGING |
| C-18 | `npx --yes wrangler@4.150.0 deploy --config wrangler.toml` | STATE-CHANGING |
| C-19 | `npx --yes wrangler@4.150.0 delete --name klarweg-exam-v10-probe --config wrangler.toml --dry-run` | STATE-CHANGING |
| C-20 | `npx --yes wrangler@4.150.0 delete --name klarweg-exam-v10-probe --config wrangler.toml` | STATE-CHANGING |
| C-21 | `npx --yes wrangler@4.150.0 d1 delete klarweg-exam-v10-probe --config wrangler.toml` | STATE-CHANGING |
| L-01 | `node <TOOLS>/prepare-probe-secrets.mjs --track v10 --dir <PRIVATE>` | LOCAL-ONLY |
| L-02 | `node <TOOLS>/config-gate.mjs --track v10 --config wrangler.toml --stage bootstrap --auth <AUTH> -- <exact command>` | LOCAL-ONLY |
| L-03 | `node <TOOLS>/config-gate.mjs --track v10 --config wrangler.toml --stage bound --auth <AUTH> --d1-info <PRIVATE>/d1-info.json -- <exact command>` | LOCAL-ONLY |
| H-01 | `node <TOOLS>/qualify-check.mjs --track v10 --secrets <PRIVATE>/secrets.json --base https://klarweg-exam-v10-probe.<SUBDOMAIN>.workers.dev --expect <stage> > <PRIVATE>/qualify-<stage>.json` | READ-ONLY |
| H-02 | `node <TOOLS>/with-probe-env.mjs --track v10 --secrets <PRIVATE>/secrets.json --base https://klarweg-exam-v10-probe.<SUBDOMAIN>.workers.dev -- node run-v10.mjs --n 50 --rounds 5 > <PRIVATE>/v10-report-<UTC>.json` | STATE-CHANGING |
| H-03 | `node <TOOLS>/with-probe-env.mjs --track v10 --secrets <PRIVATE>/secrets.json --base https://klarweg-exam-v10-probe.<SUBDOMAIN>.workers.dev -- node run-v10-ambiguous.mjs --intervals 1,5,10,25,50,100,200 --trials 5 > <PRIVATE>/v10-ambiguous-natural-<UTC>.json` | STATE-CHANGING |
| H-04 | `node <TOOLS>/with-probe-env.mjs --track v10 --secrets <PRIVATE>/secrets.json --base https://klarweg-exam-v10-probe.<SUBDOMAIN>.workers.dev -- node run-v10-ambiguous.mjs --post-commit-delay 2000 --abort-after 500 --trials 10 > <PRIVATE>/v10-ambiguous-forced-<UTC>.json` | STATE-CHANGING |

**Exit codes:**
- `run-idem-free.mjs`, `run-v10.mjs`: 0 = all pass.
- `run-v10-ambiguous.mjs`: 0 pass, 1 fail, 3 inconclusive, 2 refused [GH].
- `run-idem-abort.mjs`: 0 pass, 1 fail (**violation only**), 3 inconclusive (including transport and setup problems), 2 refused [LOCAL].
- `qualify-check.mjs`: 0 = all expectations met.
- `config-gate.mjs`: 0 = pass.

**Never** use `--update-config`, `--skip-confirmation`, `-y` or `--yes` after the subcommand, `--binding`, `--route`/`--domain`, `--env`/`--env-file`, `--cwd`, `--profile`, or `--local`/`--preview`. The gate refuses them.

## 5. Procedure
The steps are the same for each track; take every command from **your track's table** (4.1 or 4.2).

**G, exactly.** G stands for one of two gate invocations. Run it in the probe directory; it must exit 0, and the second reviewer then confirms both points below.
- **Bootstrap G** (only for S-06 and S-07, before the database exists): run **L-02**, with `-- <exact command>` set to the next command (C-04, C-05 or C-06).
- **Bound G** (every later state-changing command, in this order):
  1. Run **C-07** to refresh `<PRIVATE>/d1-info.json` (READ-ONLY).
  2. Run **L-03** with `-- <exact command>` set to the next command, word for word. L-03 refuses if `d1-info.json` is more than 10 minutes old, lacks a unique id **and** name matching the config, or if the command names anything but this track's database, Worker or files.
  3. Run that same command. The reviewer confirms that the command run is character-for-character the command gated, and that the **name and id** in `d1-info.json` match S-08.

STOP means: do nothing further, keep the evidence, go to section 9.

| Step | Action | Label | Preconditions / stop gate |
|---|---|---|---|
| S-01 | P-1…P-8 complete; `git rev-parse HEAD` equals the pin | LOCAL-ONLY | Otherwise STOP |
| S-02 | `mkdir -m 700 <PRIVATE>`; **L-01** | LOCAL-ONLY | The tool prints no secret; it refuses a non-private or in-repo directory |
| S-03 | `cp wrangler.free.example.toml wrangler.toml` (Track 2: `cp wrangler.example.toml wrangler.toml`); add `account_id = "<ACCOUNT_ID>"` under `compatibility_date`; leave `database_id` as the placeholder. Optional for T8-CPU (P-3): `[observability]` with `enabled = true` and `head_sampling_rate = 1` | LOCAL-ONLY | In the probe directory, `git status --porcelain --ignored -- .` lists **only** `wrangler.toml` |
| S-04 | **L-02** without `-- <exact command>` (the environment and local-files gate alone); then **C-01**, **C-02**, **C-03** | READ-ONLY | L-02 exit 0. `whoami` exit 0. **C-03** shows membership of `<ACCOUNT_ID>`; that is membership only, not selection |
| S-05 | `shasum -a 256 wrangler.toml > <PRIVATE>/config-before-create.sha256` | LOCAL-ONLY | — |
| S-06 | **G** (bootstrap, with **C-04** and **C-05**); **C-04**; **C-05** | READ-ONLY | The track's database is absent from `d1 list`, and its Worker has no deployment. If either exists: STOP. Never reuse or overwrite it |
| S-07 | **G** (bootstrap, with **C-06**); **C-06**; answer **No** to any offer to change the config; then `shasum -a 256 -c <PRIVATE>/config-before-create.sha256` | STATE-CHANGING | The checksum still matches, so the config was not auto-edited (U-16). Record the printed id in `<PRIVATE>` only |
| S-08 | **Account-selection proof (manual, READ-ONLY):** the reviewer opens the intended account's dashboard (D1 section, path checked at run time, U-13) and confirms the new database is listed there with the printed id. Put that id into `database_id`; then **C-07**, and **L-03** without `-- <exact command>` | READ-ONLY + LOCAL-ONLY | The dashboard, `d1-info.json` (name **and** id) and the config agree. If the database is not in the intended account: STOP (section 9) |
| S-09 | **C-08** | READ-ONLY | Exactly `_cf_KV` or no table. Anything else: STOP |
| S-10 | Track 1: **G**, **C-09**; **G**, **C-10**; **G**, **C-11**. Track 2: **G**, **C-11** | STATE-CHANGING | Any error: STOP and recreate (section 9) |
| S-11 | **C-08** again | READ-ONLY | Track 1: the 0001/0002 tables + `idem_probe_*` (+ `sqlite_sequence`, `_cf_KV`). Track 2: `v10_*` (+ `sqlite_sequence`, `_cf_KV`). Nothing else |
| S-12 | **G**, **C-12**; inspect `<PRIVATE>/dry-run` and the output | STATE-CHANGING | If the output lists any binding other than `DB → <this track's database>`: STOP |
| S-13 | **G**, **C-13** | STATE-CHANGING | The deploy output names this track's Worker, and its only binding is `DB → <this track's database>`. Otherwise STOP (the probe is off; every route returns 403) and follow section 9 |
| S-14 | **H-01** `--expect disabled` (T7a) | READ-ONLY | Exit 0 |
| S-15 | **G**, **C-14** (probe on, **no marker yet**: every route still returns 412) | STATE-CHANGING | Deploy output as in S-13 |
| S-16 | **C-16** (save), **H-01** `--expect no-marker` (T7b/c), **C-16** again | READ-ONLY | Exit 0, **and** both C-16 outputs identical. Otherwise STOP |
| S-17 | **G**, **C-15** | STATE-CHANGING | The gate checked that `marker.sql` targets this track's marker table and label. **C-16**: `marker = 1` exactly. Never insert a second marker |
| S-18 | **H-01** `--expect verified` | READ-ONLY | Exit 0, `verified: true` with the track's label. `412 db_nonce_mismatch` or `label_*`: STOP |
| S-19 | Track 1: **H-02**, then **H-05** only if approved. Track 2: **H-02**, **H-03**; then **G**, **C-17**, **H-04**; then at once **G**, **C-14**, and **H-01** `--expect fault-off` | STATE-CHANGING (probe rows) | Record each exit code. Nothing runs while `/verify` fails. `fault-off` must exit 0 before anything else |
| S-20 | Export metrics (T8) within the 3-day Free log retention [DOC] | READ-ONLY | — |
| S-21 | **G**, **C-18** (probe off); **H-01** `--expect disabled` | STATE-CHANGING + READ-ONLY | Exit 0 |
| S-22 | Teardown (section 10) | STATE-CHANGING | Only after the evidence (section 11) is stored and reviewed |

## 6. Test cases
Verdicts are **pass**, **fail** or **inconclusive**. Inconclusive is never a pass and never waived; it means a rerun (section 9).

| ID | Property | Track · check | Expected (pass) | Fail if | Inconclusive if | Evidence |
|---|---|---|---|---|---|---|
| **T1** | Atomic rollback when an assertion fails | 1 · S2 (stolen claim), S3 (precondition false), S4 (later failing statement), S6 (resumed original). 2 · A, B, C (D = hazard control) | After each failed batch: no effect row, no completed record, state unchanged. S4: effect and `completed` record together. V10 A–C pass; D passes | Any partial write survives a failed batch | `poll_budget_exhausted`; budget trip; non-JSON/5xx platform answer | Report JSON |
| **T2** | Exactly one winner for a fresh claim | 1 · S1 (n = 12, one invocation), `R_*` (30 invocations per round), `RF_*` (4 invocations × 6 claims). 2 · `E_same_op_key_*` (n = 50) | `executed = 1`, `effects = 1`, record `completed`; all other answers are `request_in_progress` or a replay. V10: `applied = 1`, `ledger_rows = 1`, `claim_rows = 1` | `executed > 1`, `effects > 1`, unexpected status | Unanswered request; `overlapped = 0` (`no_contention_observed`). `late` is recorded only | Round `detail` |
| **T3** | Compare-and-set takeover of a stale claim | 1 · S5 (n = 6), `RS_*` (30), `RSF_*` (4 × 6), S6, S7a | Exactly **one** successful takeover, one execution, one effect. S6: the resumed original gets a replay. S7a: `request_in_progress` within the TTL, one takeover after | `takeovers > 1` (counted even from budget-tripped invocations); more than one execution; the original applies after a takeover | As T2 | `detail.takeovers` |
| **T4** | Duplicate request, saved-response replay | 1 · S7b; replays in S1/R/RF | Retry after commit: `200 replayed: true` with the saved body; no second effect | Re-execution; second effect | Budget trip; platform error | Report |
| **T5** | No duplicate side effects under concurrency | 1 · `effects` per R/RS/RF/RSF round. 2 · `E_distinct_op_keys_*` (n = 50) | `effects = 1`; V10: exactly one applies | `effects > 1` / `applied > 1` | As T2 | Round `detail` |
| **T6** | Ambiguous outcome after commit (V10 path) | 2 · `run-v10-ambiguous.mjs`, natural (H-03) and forced (H-04) | Invariant in every trial (state `committed`, 1 ledger row, 1 claim row) **and** ≥ 1 `aborted_original_applied` | Any invariant violation | No `aborted_original_applied` (exit 3) | Both reports |
| **T7** | Fail-closed qualification (both Workers) | S-14: (a) probe off → `403 probe_disabled` (with and without the token). S-16: (b) wrong token → `401 unauthorised`; (c) probe on, schema present, **no marker** → `412 marker_missing_or_ambiguous` on `/verify` **and** a write route. (d) Cross-track refusal is covered by the local test only; on Cloudflare it would need a cross-bound config, which the gate refuses | The exact status **and** code; C-16 row counts identical before and after | Any 2xx from a write route; any changed count | A platform error hides the response | `qualify-*.json`, both C-16 outputs |
| **T8** | D1 query budget and Worker CPU | Both | **Budget:** Track 1 responses `budget.used ≤ 40`; `max_budget_used` is the probe's own count, not Cloudflare's accounting. Worst-case models from PR #73's `budget.mjs` (checked by [LOCAL]): S1 37, S2 19 + polls, S3 18, S4 28, S5 38, S6 24 + polls, S7a 20 + polls, S7b 17, race single 15, fan 35. Track 2 per-invocation statements, measured by [LOCAL]: verify 2, scenarios 31, prepare-claim 6, claim 6, state 5, ledger 3. **CPU:** per-invocation CPU time from Workers Logs invocation logs [DOC: "CPU time and wall time appear in the invocation log"]; ≤ 10 ms on Free; no `exceededCpu` / 1102 | — (a measurement) | Any `exceededCpu`/1102 or `query_budget_exceeded` makes the affected checks inconclusive. The dashboard CPU chart is **not** evidence (reservoir-sampled quantiles that "may appear to exceed CPU time limits without generating invocation errors" [DOC]). No invocation logs → T8-CPU inconclusive | Report fields; log export |
| **T9** | Client abort on the **PR #71 path** (PROPOSED, H-05) | 1 · `tools/run-idem-abort.mjs`: the client aborts `race/one` **before any response header**, then the same request id is retried until settled (`--settle-ms` > `CLAIM_TTL_MS` 60 s; the tool refuses otherwise) | Every trial: `effects = 1`, record `completed`; ≥ 1 `aborted_original_applied` | **Violation only:** `effects > 1`; settled with `effects ≠ 1` or not `completed`; an application status that is not allowed (e.g. 409); a fresh run's first answer that is a replay or `request_in_progress` | Any transport error at any request (verify, prepare, first request, retry, state); a non-JSON or non-200 answer; a probe answer flagged `inconclusive` or with status ≥ 500; a trial not settled; verification not passing; no `aborted_original_applied`. An abort after the headers is `responded`, never the key branch | The report. It is always written; completed trials are kept |

**What each class of evidence shows.**
- **[LOCAL] and [PR73]** (and GitHub CI): check the tooling and probe logic on SQLite. A batch there runs in one JavaScript turn, with no network, no connection cap and no replicas.
- **Only** reports from a deployed probe bound to the dedicated non-production database, produced under section 5, are **real-D1 evidence**.

**The client-abort gap, and what T9 can and cannot add.**
- Track 1's pinned tooling has no client-abort test: S7b simulates a lost response inside one invocation. T6 covers client-visible ambiguity, but on the V10 code, not `idempotentAtomic()`.
- **T9** (PROPOSED, needs review approval) targets that gap without changing any PR. It uses only PR #73's existing endpoints, no fault injection, and natural timing.
- **Three different events, kept apart:**
  1. *Client abort:* the runner's own `AbortController` fired **before any response header**. A transport error that is not that abort is `first_request_failed`; an abort after a header is `responded`.
  2. *Worker cancellation:* Cloudflare says that when "the client disconnects … tasks associated with that request may be canceled" [DOC limits]. T9 **cannot observe this directly**.
  3. *Committed transaction:* shown only by the retry's database outcome:
     - a replay proves the original's batch committed;
     - an immediate execution proves no claim existed;
     - `503 request_in_progress` proves a claim was pending (`aborted_original_in_flight`, resolved after the 60 s TTL);
     - no usable retry answer is `aborted_unresolved`.
- **What a T9 pass would show** (real D1, ≥ 1 `aborted_original_applied`, no violation, nothing inconclusive): on the PR #71 path, an original that committed while its client had given up is resolved by the same-request-id retry, with a replay and exactly one effect.
- **What it would not show:** behaviour when an invocation is cancelled **in the middle of** its batch, and any branch that natural timing does not produce. A forced post-commit delay on the PR #71 path would need new, reviewed probe code.
- **The gap is closed only by real-D1 evidence.** Until a reviewed T9 run passes, Track 1's client-abort coverage stays open.

**Known false-failure modes (investigate; never relabel as a pass).**
- D1 "overloaded" errors [DOC limits] show up in Track 1 races as unexpected `500` statuses, which those rounds judge **fail**. T9 classifies probe answers with status ≥ 500 as inconclusive instead.
- A race-round `fail` whose only anomalies are platform or overload errors, with **no** violation (`executed`, `effects` and `takeovers` all ≤ 1), is a rerun candidate after review.
- A violation is always a real failure.

## 7. Limits and figures relied on (re-check at run time)
- D1: **50** queries per Worker invocation on Free (1,000 on Paid). Limits for individual queries apply to each statement inside a batch. "Each individual D1 database is inherently single-threaded, and processes queries one at a time." Up to **six connections (to D1)** per invocation [DOC D1 limits].
  - Whether a batch counts as one query or as one per statement against the 50 is **not stated** (U-8).
  - The Track 1 Free probe enforces a cap of 40 by counting every statement [PR73]. The V10 probe has no guard; its largest invocation is 31 statements [LOCAL].
  - No documented cap on in-flight D1 calls (U-9).
- Workers Free: 50 subrequests per request, 10 ms CPU per HTTP request, 100,000 requests per day [DOC Workers limits].
  - One full Track 1 run is about 390 requests, plus about 100 for T9.
  - Track 2 is about 700: `run-v10.mjs` ≈ 520, the ambiguous runs ≈ 180 [INF from the runner arguments].
- Batches: statements "execute and commit, sequentially, non-concurrently", and a failing statement "aborts or rolls back the entire sequence" [DOC D1 API]. **This is exactly the claim T1 and T6 test**; the docs are not evidence for it.

## 8. Secrets and qualification
- **Generation and upload.** Secrets come only from **L-01**: 32 random bytes as 64 lowercase hex characters each, written to `<PRIVATE>/secrets.json` (`0600`). **C-13** uploads them with `--secrets-file`, the JSON form [DOC]. No value passes through a shell pipe, `echo` or a command line, so no trailing newline can be added. The gate checks that the file's **key names** belong to this track; it never reads values into its output.
- **Marker.** `marker.sql` holds the label and the `sha256` of the nonce exactly as stored in `secrets.json`. The probe compares it with `sha256(secret)` [GH]; a newline or encoding mismatch fails closed with `412 db_nonce_mismatch` [LOCAL]. The gate checks that `marker.sql` targets this track's marker table and label.
- **Token in transit.** Runners and checks receive the token only through `with-probe-env.mjs` or `qualify-check.mjs` (H-01 to H-05):
  - it is read from the file and placed **in the child process's environment**;
  - it never appears on a command line, in shell history or in the tools' output;
  - processes of the **same OS user** can read a child's environment (for example `ps eww` on macOS), so run on a single-user machine and don't share the session;
  - the tools refuse a base URL that is not `https://<the track's worker>.<SUBDOMAIN>.workers.dev`. That includes `run-idem-abort.mjs` when it's called directly.
- **Never:** `echo` a secret, pass one as an argument, set `WRANGLER_LOG=debug` (it logs API requests [DOC]; the gate refuses it), or paste output that may contain one. `secrets.json` is never part of the evidence.
- **Marker uniqueness:** `412 marker_missing_or_ambiguous` with zero **or** more than one marker [GH].

## 9. Failure handling and recovery
| Situation | Action |
|---|---|
| Any gate (**G**, S-04, S-06, S-08, S-09, S-11, S-12, S-13) fails | STOP. Make no further state change; record it; the reviewer decides |
| Database or Worker already exists (S-06) | Do not reuse, overwrite or delete it. Investigate with the reviewer; new names only through a reviewed change to this runbook |
| The checksum changed at S-07 (config auto-edited) | STOP. Restore the config from the example and S-03 edits, then re-run S-04 onwards. The database created in S-07 is torn down (section 10) before restarting |
| The database is not in the intended account (S-08) | STOP. Delete it only in the dashboard of the account where it actually is, with the reviewer, after confirming by name **and** id that it is the one just created and holds no other data. Never edit `account_id` to reach it. Find out which credential source selected that account (U-15) before any retry |
| Schema step failed or partial (S-10/S-11) | Never repair by hand. Tear down the database (section 10), reset `database_id` to the example placeholder, and restart from S-04 |
| Deploy shows an unexpected binding or name | The probe is still off (403 on every route). Delete the Worker (**G**, C-19, then **G**, C-20, with the reviewer), fix the config, and restart from S-12 |
| `/verify` fails after the marker (S-18) | Don't run tests. Check `marker = 1` (C-16). If the secrets or marker are wrong: tear down and restart with **new** secrets (new `<PRIVATE>`) |
| Secret possibly exposed | Tear down at once: new secrets, new database, new Worker |
| A test **fails** | Keep all evidence. Make no change to the database. Merges stay blocked; the failure is a review item |
| A test is **inconclusive** | Rerun the whole runner with fresh run ids, at most 3 attempts per track per session. If it persists, it is a blocker, not a pass |
| Fault injection possibly still on (Track 2) | **G**, **C-18** at once (probe and fault injection back to `"off"`); **H-01** `--expect disabled`. Resume only through S-15 → S-18 → **H-01** `--expect fault-off` |

## 10. Teardown (after evidence is stored)
1. **G**, **C-18** (probe off); **H-01** `--expect disabled` → exit 0.
2. **G**, **C-19** (dry run). If the output names anything other than this track's Worker (for example a D1 database, R2 bucket or KV namespace), **do not run C-20**: delete the Worker manually in the dashboard with the reviewer (path checked at run time, U-13).
3. **G**, **C-20**; then **C-05**: no deployments listed (U-2).
4. **G**, **C-21** (answer the prompt by hand); then **C-04**: this track's database is gone.
5. After the evidence is reviewed: delete `<PRIVATE>/secrets.json` and `marker.sql`. Keep the evidence files.
6. **Never** run a teardown command outside the probe directory, with another config, or with a command from the other track's table. The gate refuses another track's names.

## 11. Evidence
**Private bundle** (in `<PRIVATE>`; never committed):
- the pinned commit;
- the C-01, C-02 and C-03 outputs;
- every L-02 / L-03 output;
- every `d1-info.json` used by a G, kept per step (copy or rename after use);
- the S-07 checksum check and the S-08 confirmation;
- C-08 before and after the schema step;
- the deploy outputs;
- all `qualify-*.json` files and both C-16 outputs per check;
- the full runner reports and exit codes;
- the CPU log export;
- the teardown outputs;
- operator, reviewer, and UTC start and end times.

**Shareable summary:**
- per check: pass / fail / inconclusive;
- counts: executed, effects, takeovers, overlapped, `max_budget_used`;
- CPU quantiles from invocation logs;
- the commits and Wrangler version.

**Redact before sharing:**
- the account id and database id;
- the workers.dev subdomain (it is in each report's `base` field).

No token or nonce may appear anywhere; if one does, treat it as an exposure (section 9).

## 12. Local verification of this runbook (LOCAL-ONLY)
In this directory:

```
IDEM_PIN_DIR=<checkout at c8f2b79> V10_PIN_DIR=<checkout at a34aca0> node --test test/*.test.mjs
node tools/runbook-lint.mjs
```

The tests run the **pinned** probe handlers in process, on SQLite. They cover:
- **Qualification:** the T7 a–c sequence, with row counts unchanged.
- **Cross-track refusal.**
- **Secrets:** the generated secrets and marker are accepted; a newline in the nonce is refused.
- **Gate (M-1, M-3):**
  - refused environment variables and credential conflicts;
  - unexpected or ignored files, and `.env*` / `.dev.vars*` in ancestors;
  - account mismatch;
  - stale, wrong-id, wrong-name, missing-name and ambiguous `d1 info` output, and the wrong track's config.
- **Commands (M-2):** every command in section 4 passes for its track. A Track 2 command naming the Track 1 database, Worker, marker or secrets is refused, along with SQL writes, forbidden flags and wrong `--var` values.
- **T9 runner:**
  - every branch;
  - transport errors at every request stage, including after earlier trials completed, are inconclusive and keep the report;
  - budget-trip and 5xx probe answers are inconclusive;
  - violations are fail;
  - the base-URL and `--settle-ms` checks in the CLI.
- **Provenance:** the T8 figures, reproduced from PR #73's models and from a statement counter around the pinned V10 handler.

The lint checks that:
- every command in both tables passes `checkCommand` for its track;
- the L-02/L-03 gate invocations and H-commands name their own track, Worker host and runners;
- every state-changing step carries **G**;
- the G definition names L-02 and L-03 with `--stage bound --d1-info`;
- the two tables carry the same IDs (except C-09/C-10 for Track 1 and C-17 for Track 2);
- the pinned commits and files exist;
- no 64-hex string appears.

**None of this is D1 evidence.**

## 13. Unverified register (each must be resolved or accepted by the reviewer before the step that needs it)
| ID | Item | Fail-closed handling |
|---|---|---|
| U-0 | The flags exist in the pinned Wrangler 4.150.0 binary (the docs describe "current" Wrangler) | Local `--help` check (P-4); a missing flag → STOP |
| U-1 | `d1 info --json` field names | The gate needs exactly one id **and** one `name` that match; otherwise STOP. The fix is a reviewed change to the gate, never an id-only acceptance |
| U-2 | `deployments list --name` output for a Worker that does not exist | Any listed deployment = exists = STOP; an error that is not clearly "not found" = STOP |
| U-3 | Whether `--var` keeps the config's other vars | `/verify` checks the label; a lost label gives `412 label_required` and nothing runs |
| U-4 | `deploy --dry-run`: API contact, printed bindings | Labelled and gated as STATE-CHANGING; S-13 rechecks the real deploy output |
| U-5 | `wrangler delete` "all associated … resources" scope; `--dry-run` side effects | Gated; dry run first; anything beyond the Worker → manual dashboard deletion |
| U-6 | Whether `d1 create` honours `account_id` from `--config` | `CLOUDFLARE_ACCOUNT_ID` set to the same value; S-08 proves selection in the dashboard |
| U-7 | Workers Logs invocation-log CPU fields on Free; pricing after 2026-12-01 | P-3 gate; otherwise T8-CPU is inconclusive |
| U-8 | How D1 counts batch statements against the 50-query limit | Track 1 caps at 40 by counting every statement; Track 2's largest invocation is 31 [LOCAL] |
| U-9 | Whether D1 calls queue behind six connections per invocation | Delays only; overlap is measured per round |
| U-10 | Workers cancellation on client abort | T6 and T9 record the observed branch; nothing is assumed |
| U-11 | Prompts from `d1 execute --file` | Answer by hand; never `--yes` |
| U-12 | `_cf_KV` is the only internal table in an empty database | Any other table → STOP and review |
| U-13 | Dashboard paths (D1 list, manual Worker deletion) | Checked at run time with the reviewer |
| U-14 | Whether Wrangler accepts the bootstrap config (placeholder `database_id`) for C-04, C-05 and C-06 | If it rejects the config, nothing changes: STOP and review. Never delete the D1 block or drop `--config` |
| U-15 | Precedence among config `account_id`, `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`, OAuth login and project `.env` files | Not relied on: all must agree or be absent (gate), and S-08 proves selection |
| U-16 | Whether `d1 create` offers to edit the config | Answer No; the S-07 checksum must match; the gate refuses a second D1 block or other keys |
| U-17 | What Wrangler writes into its `.wrangler/` working directory | Allowed only as Wrangler's own; any `.env*`, `.dev.vars*` or `wrangler.*` file inside it → gate refuses; other contents are not inspected |

## 14. Merge gates and governance
- **PR #71** may be considered for merge only after **Track 1** passes with no inconclusive check (T1–T5, T7, T8, and T9 if approved) **and** a human has reviewed the evidence. PR #73's tooling is reviewed in the same step.
- **PR #72** may be considered only after **Track 2** passes (`run-v10.mjs` exit 0 and both ambiguous runs exit 0), plus human review. Its base, PR #60, stays untouched.
- **CI being green, or this runbook being complete, does not make any PR ready.** #60, #71, #72 and #73 stay **drafts** until the owner decides.
- **Governance items stay open:**
  - OD-53 `OWNER DECISION — CONDITIONAL`;
  - F4/P-25 open;
  - OD-41 with EX-04/EX-08, an open accommodation-policy dependency.
- No `enforce` mode, learner access, pilot or production change follows from this runbook. No Goethe equivalence or endorsement is claimed.

## 15. Second-reviewer checklist
- [ ] The pinned commits match section 1. The checkouts are fresh, and in the probe directory `git status --porcelain --ignored -- .` showed nothing but `wrangler.toml` (P-5, P-7, S-03).
- [ ] `<PRIVATE>` is `0700` and outside every repository. `secrets.json` was never displayed, echoed, piped or pasted.
- [ ] Every command came from **this track's** table (4.1 or 4.2), word for word.
- [ ] Before each state-changing command, a **fresh** `d1-info.json` and **L-03** passed with that exact command after `--`. I checked the name **and** id myself.
- [ ] S-04: the environment and local-files gate passed. `<AUTH>` was declared, and no other credential source was present.
- [ ] S-07: the config checksum matched after `d1 create`, so there was no auto-edit.
- [ ] S-08: I saw the new database, with the same id, in the **intended account's** dashboard. `whoami` alone was not taken as proof.
- [ ] Before creation, the database and Worker were absent (S-06). Before the schema, the database was empty (only `_cf_KV`); after it, only the expected tables (S-09, S-11).
- [ ] Every deploy output named this track's Worker, with the only binding `DB → <this track's database>`.
- [ ] The T7 refusals had the exact codes, and the row counts were unchanged. Exactly one marker; `/verify` was `verified: true` before any runner.
- [ ] Fault injection was on only inside the H-04 window, and `--expect fault-off` passed right after.
- [ ] Every check is recorded as pass / fail / inconclusive, and nothing inconclusive was counted as a pass. T8-CPU comes from invocation logs, or is marked inconclusive.
- [ ] Teardown: the dry run named only this track's Worker. The Worker and database are gone, and the secrets files are deleted.
- [ ] The shareable summary has no account id, database id, subdomain, token or nonce. No PR status was changed, and the governance items are unchanged.
