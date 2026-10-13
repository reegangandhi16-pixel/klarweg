# F4 Implementation Blueprint — speaking recording grants and evidence lifecycle

> **Status:** design blueprint, **documentation only, NOT IMPLEMENTED, NOT AUTHORISED.** Prepared with AI assistance on
> 2026-10-11 against `origin/main` @ `e9d303c`; F4 statuses synced with decision register **v1.5** (`main` @ `815d779`). It is not a human review, not an owner decision and not an implementation
> authorisation. It changes no decision status. The formal record of every F4 decision is the decision register
> (`B1-FINAL-DECISION-REGISTER.md` §B.2, `F4/P-n`); the design source is `B1-SPEAKING-SPEC.md` (§4.2, §5, §10–§12).
> OD-53 remains **OWNER DECISION — CONDITIONAL**: no learner access, pilot, production audio, deployment or release.
>
> **Labels.**
> - **[REPO]** = observed in the repository at `e9d303c`. The exam code is unchanged since `ef64371`, so earlier `[REPO @ ef64371]` citations still apply.
> - **[DOC]** = stated in official Cloudflare documentation, read on 2026-10-11. Documentation is **not** a test result.
> - **[UNVERIFIED]** = a platform behaviour that is not established; it must be verified before anything relies on it.
> - **[PROPOSED]** = a design proposal of this blueprint.
> - **[REC]** = models a recommendation of SPEAKING §12. **Recommendation only, NOT APPROVED.** **[REC — OWNER-APPROVED]** = a SPEAKING §12 recommendation the owner approved by written instruction on 2026-10-11 (register v1.5 §B.2). Approval of an option authorises no implementation.
> - **[OPEN P-n]** = an owner decision that is still open (register §B.2).

---

## 1. Purpose, scope and current state

**Purpose.** Turn the proposed F4 design into an implementable, reviewable plan without implementing it. The plan
covers server-authorised recording grants, durable upload reservations, R2/D1 consistency, evidence finalization and the
attempt-completion gate. Every value that needs evidence or an owner decision is left open and named.

**Scope.** The exam Worker (`exam-worker/`), its D1 schema and its private recordings bucket, plus the client changes
those need. This blueprint itself changes no code, schema, configuration or deployment.

### 1.1 What exists today [REPO]

| Area | Current behaviour | Evidence |
|---|---|---|
| Sprechen routes | `POST …/sprechen/consent`, `POST …/sprechen/chunks`, `POST …/sprechen/turns`, `GET …/sprechen/status`. No grant routes exist | `exam-worker/src/index.js:29–32` |
| Upload order | Window check, then body hash and size check, then quota, then **R2 write to a deterministic key**, then the D1 insert | `api.js:511–562`: `recordingWindow` `:481`, hash `:530–534`, quota `:544`, key `:545`, put `:546`, batch `:549–556` |
| Object key | `rec/<attempt>/p<part>/<turn>/<seq>`, deterministic | `api.js:545` |
| Who uses `RECORDINGS` | Only the upload handler writes; **nothing reads recordings back yet** (`media.js` reads form assets from `CONTENT`) | `api.js:546`; `media.js:47–51` |
| Received-bytes integrity | The server hashes the received buffer (SHA-256) and refuses a mismatch with the declared hash before writing; size limited by `chunk_max_bytes` (256 KiB) | `api.js:529–534`; level config line 113 |
| Upload request identity | **No `request_id`** on the chunk route; identified by lease, item, turn, seq and declared hash | `api.js:511–520` |
| Duplicates | Same seq and same hash → `duplicate`; different hash → `chunk_conflict`; the existing-row check happens **before** the R2 write | `api.js:538–541` |
| Completion | Needs contiguous `0..n-1`; no check for an already-complete turn; idempotency key `turn:<item>:<turn>` | `api.js:565–588` |
| Attempt completion | Needs every module submitted; sets `completed`; **deletes the lease** | `api.js:599–611` |
| Idempotency helper | Runs the operation, then records the request; concurrent duplicates both run | `core.js:39–54` |
| Lease | One row per attempt, 60 s lifetime, generation counter | `core.js:11`, `:57–90`; migration line 136 |
| Turn status | `CHECK (status IN ('open','complete'))`; no `incomplete` state | migration line 247 |
| Chunk primary key | `(attempt_id, part, turn, seq)`; the API addresses chunks by `item_id` | migration lines 228–239 |
| Scheduled sweep | Every 5 minutes; selects only modules running past their deadline or still `submitting` | `wrangler.toml:41–42`; `index.js:86–94` |
| Upload grace | `upload_grace_seconds = 600` (B1) | level config line 110 |

### 1.2 Platform facts from documentation [DOC]

| Fact | Source |
|---|---|
| D1 batches are SQL transactions: if a statement fails, the whole sequence is aborted or rolled back; statements execute and commit sequentially, non-concurrently | D1 Worker API, `batch()` |
| "Each individual D1 database is inherently single-threaded, and processes queries one at a time." Maximum SQL query duration 30 s | D1 limits |
| Without the Sessions API, all queries go to the primary database (the exam Worker does not use sessions) | D1 Worker API; `git grep` (no `withSession`) |
| R2 writes and deletes are strongly consistent once the Promise resolves; concurrent writers to one key: the last writer to complete wins | R2 Workers API; R2 consistency |
| R2 `onlyIf` accepts `R2Conditional` **or** `Headers`. "All conditional headers aside from `If-Range` are supported." The typed `R2Conditional` fields are `etagMatches`, `etagDoesNotMatch`, `uploadedBefore` and `uploadedAfter`. If a precondition fails, `put()` returns `null` and the object is not stored | R2 Workers API |
| R2 `put()` accepts `sha256` and other hashes "to check the received object's integrity"; a provided checksum is returned on the object; MD5 by default | R2 Workers API |
| Workers: "There is no hard limit on duration for HTTP-triggered Workers" while the client is connected. When the client disconnects, tasks may be cancelled. `ctx.waitUntil()` can extend execution up to 30 s after the response or a disconnect. CPU time on the paid plan defaults to 30 s and can be raised to 5 min. Cron Trigger duration is up to 15 min | Workers limits |

### 1.3 Platform behaviour not established [UNVERIFIED]

1. Whether R2 **rejects** a `put()` whose body does not match the provided `sha256`. The documentation does not say so.
2. **"Create only if absent" behaviour.** The typed `R2Conditional` fields expose no explicit create-only condition. Because `onlyIf` also accepts `Headers`, and the documentation says all conditional headers except `If-Range` are supported, a `put()` with `If-None-Match: *` **may** provide create-only semantics. The R2 Workers documentation does not describe that exact case, and its behaviour, including under concurrent writers, has **not** been verified. The design does not rely on it (§5.2); if a future design does, V7 must verify it first.
3. Whether a partially written object can ever be visible before `put()` resolves.
4. Whether a `put()` that is in flight completes or is cancelled when the client disconnects (outside `waitUntil`).
5. Whether listing R2 objects is reliable enough for sweeps.
6. Real D1 behaviour under concurrent Worker instances for the conditional transitions below.
7. **D1 rollback only covers failed statements.** The batch documentation says a failing statement rolls back the sequence. A conditional `UPDATE` or `INSERT … SELECT … WHERE` that **succeeds while changing zero rows** is not a failure, so it does **not** roll anything back. The design therefore uses a statement that **fails** when a precondition is false (§6.1). Whether that technique behaves as expected inside real D1 batches is unverified (V10).
8. Whether a `put()` still running can complete **after** the handler has given up on it, or after reconciliation has acted (§4.5). No documented upper bound on how long an R2 `put()` can be in flight was found.

The documentation describes intent; tests V1–V10 (§11) must confirm behaviour.

---

## 2. Proposed logical schema [PROPOSED; subject to schema review]

All new structures are **additive**. Names and types are illustrative.

### 2.1 `recording_grants` (new)

| Column | Notes |
|---|---|
| `rgr_id` PK | `rgr_<uuid>`, server-generated |
| `attempt_id`, `user_id`, `item_id`, `part`, `turn`, `phase_id` | `part` and `phase_id` derived on the server (P-6) |
| `kind` | `live` \| `late` (server-observed facts only, P-7 [REC — OWNER-APPROVED]) |
| `after_submission`, `submit_kind` | Set for C1 late grants (P-8) |
| `state` | `open` \| `closed` |
| `close_reason` | `stopped`, `capture_window_elapsed`, `lease_reacquired`, `lease_takeover`, `module_closed`, `consent_withdrawn` (P-19) |
| `lease_generation` | Lease generation at issue |
| `granted_at`, `capture_window_ends_at`, `upload_deadline_at` | Server times in ms; fixed at first issue |
| `max_chunks` | Nullable; computed and logged, never enforced until P-1 and P-14 are approved |
| `declared_chunks` | Device claim; required for C1 late grants under P-24 [REC — OWNER-APPROVED] as a request-contract field |
| `evidence_state`, `evidence_reason`, `finalized_at` | Holds evidence for **zero-chunk grants**, which have no turn row. A grant whose `evidence_state` is not terminal (`complete` or `incomplete`) counts as **pending evidence** for the completion gate (§6.2, §7), whether the grant is `open` or `closed` |
| `mode`, `flags_json` | Effective mode at issue; flags such as `phase_rule_unresolved` (P-18) or `lease_interrupted` (P-22) |

**Constraints.**
- `UNIQUE (attempt_id, item_id, turn)`: one grant per turn (P-3 default).
- Partial `UNIQUE (attempt_id) WHERE state = 'open'`: one active grant per attempt (P-17 per attempt [REC — OWNER-APPROVED]). The schema already uses a partial unique index (migration line 116).

**Indexes.** `(attempt_id)`; `(state, capture_window_ends_at)` for stale-grant closure.

### 2.2 `upload_reservations` (new)

| Column | Notes |
|---|---|
| `reservation_id` PK | Server-generated UUID |
| `attempt_id`, `item_id`, `part`, `turn`, `seq`, `rgr_id` | `rgr_id` NULL under `off` |
| `staging_key` | **UNIQUE**; server-generated, for example `rec/<attempt>/stg/<reservation_id>`; never derived from client input alone |
| `sha256`, `size` | Computed from the bytes actually received (§4) |
| `t_admit` | Server time of the admission step (deadline eligibility, §4) |
| `state` | `reserved` → `committed` \| `failed` (terminal) |
| `fail_reason` | `storage_write_failed`, `readback_mismatch`, `commit_refused`, `abandoned` (P-25), `reconciled_failed` |
| `resolved_at`, `mode` | |
| `last_cleanup_observation`, `cleanup_checked_at`, `cleanup_deletions` | For `failed` reservations only. `last_cleanup_observation` is what the most recent pass saw (`absent` or `present_deleted`); it is an **observation, not proof** that the key will stay absent. It never removes the reservation from future cleanup (§4.5). `cleanup_checked_at` orders revisits; `cleanup_deletions` counts deletions. Reservation rows are **never deleted**, so every staging key ever issued stays tracked |

**Constraints.**
- Partial `UNIQUE (attempt_id, item_id, turn, seq) WHERE state = 'reserved'`: at most one unresolved reservation per logical chunk.
- `UNIQUE (staging_key)`.

**Indexes.** `(state, t_admit)` for reconciliation; `(attempt_id, state)` for the completion gate; `(state, cleanup_checked_at)` for the round-robin cleanup order (§4.5).

### 2.3 `recording_chunks` (existing; new nullable columns)

- **Keep:** `r2_key`, `sha256`, `bytes` and the primary key.
- **Add:** `reservation_id` (UNIQUE when not NULL), `rgr_id`, `mode`, `authorisation_provenance` (`live` \| `late` \| `none`).
- `r2_key` holds the **exact staging key** that was committed. Every reader must take the key from the row and never reconstruct it.

**Known latent issue.** The primary key uses `part`, while the API addresses `item_id`. The validator must reject a turn id that repeats within a part (P-6), or schema review must change the key. This must be resolved before real forms.

### 2.4 Turn evidence (existing `recording_turns`; new nullable columns)

- **Add:** `evidence_state` (`partial` \| `complete` \| `incomplete`, own CHECK), `evidence_reason`, `finalized_at`, `received_seqs_summary`, `duration_ms_basis` (`client_wallclock` \| `chunk_estimate`, P-11 [REC — OWNER-APPROVED]).
- **Keep** the legacy `status` column and its CHECK unchanged, so the table needs no rebuild. `evidence_state` is authoritative for F4.

### 2.5 `recording_grant_events` (new) and `incidents` (existing)

- **Events:** one row per failed check (`would_refuse` under `observe`, a refusal under `enforce`), linked to the open, stop, chunk or completion it concerns.
- **Incidents:** summary rows (§10).

### 2.6 `transition_ledger` and `transition_assertions` (new; supports §6.1)

- **`transition_ledger`:** `op_key` PRIMARY KEY (for example `commit:<reservation_id>`, `complete_attempt:<attempt_id>`, `finalize:<evidence id>`), `attempt_id`, `applied_at`. One row is written inside each multi-statement transition. Re-applying the same transition violates the primary key, which **fails** the statement and rolls back the batch. A reader can also use it to establish whether an ambiguous transition was applied.
- **`transition_assertions`:** a single column `ok INTEGER NOT NULL CHECK (ok = 1)`. A transition's first statement inserts the value of its full precondition (`1` or `0`). A false precondition violates the CHECK and **fails** the batch (§6.1). Rows are never read; they may be removed by a maintenance job.
- Both are subject to schema review. Whether they behave as intended in real D1 batches is **[UNVERIFIED]** (V10).

### 2.7 Rows before the migration

Legacy rows keep NULL in all new columns and are shown as "recorded before recording grants". No backfill invents provenance (§8).

---

## 3. API contract [PROPOSED; no route below exists except where marked REPO]

General rules:
- All mutating routes keep the existing check order: user, attempt ownership, request id, lease, module state, server time.
- Responses include `server_now`.
- Errors use the existing `{ok:false, error}` shape.

### 3.1 `POST …/sprechen/turns/open` (new)

- **Request:** `request_id`, `lease_id`, `item_id`, `turn`; optional claims `client_elapsed_ms`, `client_offline_ms`, `declared_chunks`. For a **C1 late grant**, `declared_chunks` is **required** as a request-contract field (P-24 [REC — OWNER-APPROVED]); it is never authority, proof or a cap.
- **Response:** `rgr_id`, `item_id`, `part`, `turn`, `phase_id`, `state`, `kind`, `granted_at`, `capture_window_ends_at`, `upload_deadline_at`, `max_chunks`, `flags[]`, `replayed`.
- **Idempotency:** route key `turns/open:<item>:<turn>` in `request_log`, **plus** `UNIQUE(attempt,item,turn)`, so concurrent duplicates converge on one grant. A new `request_id` for the same turn returns the existing grant. Windows are never extended.
- **Errors:** `recording_grant_active` (with the blocking grant; the client re-reads status and never stops a grant blindly); `phase_not_open`; `phase_closed`; `turn_closed`; `upload_window_closed`; `lease_expired`; `lease_superseded`; `consent_required`; `request_contract_invalid` (for example, a C1 late grant without `declared_chunks`); `finalization_pending` (module still `submitting`; retryable).
- **Phase checks for multipliers other than 1.0.** Under P-18's first-version treatment (**owner-approved, first-version treatment only**; register v1.5), phase checks are not evaluated for such attempts, and the grant is flagged `phase_rule_unresolved`. The broader accommodation timing policy is **not** approved (OD-41, with EX-04/EX-08, before any pilot or learner access). The behaviour is still subject to the separate implementation authorisation (§13).

### 3.2 `POST …/sprechen/turns/stop` (new)

- **Request:** `request_id`, `lease_id`, `rgr_id`, optional `declared_chunks`, `reason`.
- **Rules:** accepted only from the current lease holder of the grant's attempt. Identical values replay; a different `declared_chunks` → 409 `grant_stop_conflict`.

### 3.3 `POST …/sprechen/chunks` (existing route, extended)

- **Existing parameters [REPO]:** `lease_id`, `item_id`, `turn`, `seq`, `sha256`, raw body.
- **Proposed addition:** `rgr_id`, optional under `off` and `observe` and required under `enforce`.
- **No `request_id` is proposed.** A retry is identified as the same **logical chunk** (attempt, item, turn, seq) with the **same hash**. Combined with "one unresolved reservation per logical chunk", this needs no new field.

**Responses:**

| Result | Meaning | Client action |
|---|---|---|
| 200 `{committed:true, seq}` | Stored and committed | Delete the local copy |
| 200 `{duplicate:true, seq}` | Already committed with the same hash | Delete the local copy |
| 409 `upload_pending` | A reservation for this logical chunk is unresolved | Keep the local copy; retry later |
| 503 `upload_outcome_unknown` | The handler could not establish the outcome; the reservation stays `reserved` | Keep the local copy; retry later (answered by `duplicate` or `upload_pending`) |
| 409 `chunk_conflict` | Different bytes for a committed or unresolved logical chunk | Keep the local copy; incident |
| 409 `upload_window_closed` / 413 / 415 / 422 `checksum_mismatch` / `consent_required` / lease codes | As today | As today |

The client keeps every local chunk until it receives `committed` or `duplicate`.

### 3.4 `POST …/sprechen/turns` (existing completion, extended)

- **Adds:** `rgr_id` and `duration_ms_basis`.
- **Rules:**
  - completion is refused with `upload_pending` while any reservation for `seq < n` is unresolved;
  - an identical repeat replays; a different `chunks` or `duration_ms` → 409 `turn_complete_conflict`, which fixes the current overwrite (`api.js:584`);
  - evidence becomes `complete` **only** through this route; nothing promotes it automatically.

### 3.5 `GET …/sprechen/status` (existing, extended)

- **Adds:** `recording_grants[]` and evidence states, plus reservation **counts** by state.
- **Never returns** staging keys or object metadata.
- May run lazy finalization (§7), as the existing `settle` already writes during reads [REPO `api.js:161–165`].

### 3.6 Attempt completion (existing route, extended)

- **Pending** for the gate means any of these:
  - non-terminal **turn** evidence;
  - **any recording grant** that is `open`, or whose grant-level `evidence_state` is not terminal (this includes **zero-chunk grants**, which have no turn row);
  - any `reserved` upload reservation.
- Refused with `recording_evidence_pending` (listing pending turns and grants) while anything is pending and `t ≤ upload_deadline_at`. After the deadline it stays refused while a reservation is unresolved (§4.5, §7).
- Once no reservation is unresolved, finalization (§7) runs. It closes any still-`open` grant of the submitted module (`module_closed`) and finalizes grant and turn evidence. The gate check and `completed` then happen in one transition under the §6.1 invariant (§6.2).

---

## 4. Reservation lifecycle [PROPOSED]

### 4.1 Steps

1. **Receive and verify.** Run the existing checks. Read the body, compute SHA-256 and size from the **received bytes**, and refuse a mismatch with the declared hash (as `api.js:530–534` does today).
2. **Admit (one transition under §6.1).** Insert a `reserved` row with a new `staging_key`, `t_admit = now`, and the computed hash and size. The transition **fails as a whole** unless all of these hold. They are asserted in one statement, and constraint violations are errors:
   - attempt `in_progress`;
   - `t_admit ≤ upload_deadline_at`;
   - grant checks (enforce only);
   - no committed chunk for the logical chunk (if one exists: same hash → `duplicate`, different hash → `chunk_conflict`);
   - no unresolved reservation for it (if one exists → `upload_pending`, or `chunk_conflict` if the hash differs);
   - quota: committed bytes **plus reserved bytes** ≤ `attempt_max_bytes`.
3. **Write.** `put(staging_key, bytes)`. Only this handler ever writes this key.
4. **Verify the stored copy** before commit (§5.3).
5. **Commit (one transition under §6.1, ledger key `commit:<reservation_id>`).** The batch:
   1. asserts that the reservation is still `reserved` and the attempt is not `completed`;
   2. inserts the ledger row;
   3. inserts the chunk row referencing `staging_key`, hash, size and `reservation_id`;
   4. upserts the turn;
   5. sets the reservation to `committed`.

   If the reservation was already failed by reconciliation, the assertion fails and **nothing** is applied: no late commit after a terminal failure.
6. **Respond.** If any step after admission has an unknown outcome, the reservation stays `reserved`, and the response is `upload_outcome_unknown`. The outcome is later established from the ledger and reservation state (§6.1), never by blindly retrying a write.

### 4.2 Eligibility, deadline and disconnects

- **Eligibility** is decided at step 2. A request admitted at exactly `upload_deadline_at` is eligible.
- **The deadline passing during steps 3–5 does not refuse the upload.**
- **Consequence of verifying before admitting:** a request whose body finishes arriving after the deadline is **not** eligible. This is chosen deliberately so that reservations always carry a verified hash, and abandoned reservations stay rare. Chunks are at most 256 KiB [REPO]; V4 measures whether this matters.
- **Steps 3–5 run inside `ctx.waitUntil`**, so that a client disconnect does not immediately cancel the write and commit. The documented extension is at most 30 s after the response or the disconnect [DOC]. After that the task may be cancelled, possibly while its `put()` is still in flight. §4.5 defines what then happens.

### 4.3 States

| From | Event | To | Actor |
|---|---|---|---|
| – | Admission succeeds | `reserved` | Upload handler |
| `reserved` | Commit transition (§6.1) succeeds | `committed` | Upload handler, or reconciliation (§4.4) |
| `reserved` | Write fails, or read-back mismatches (definite) | `failed` (`storage_write_failed` / `readback_mismatch`) | Upload handler |
| `reserved` | Older than the abandonment bound **[OPEN P-25]**; reconciliation decides | `committed` or `failed` (`abandoned` / `reconciled_failed`) | Reconciliation (lazy or sweep) |
| `committed`, `failed` | – | terminal | – |

### 4.4 Reconciliation (lazy, plus the scheduled sweep)

For a `reserved` row older than the P-25 bound:
1. Look for the exact `staging_key`.
2. If the object exists and its content verifies against the reserved hash and size (§5.3), commit it through the same §6.1 transition (reason "reconciled committed").
3. Otherwise, set the reservation to `failed` (`abandoned`) through a §6.1 transition that asserts it is still `reserved`.

Reconciliation never retries a write, never deletes an object it cannot classify, and **never treats an absent object as proof that no writer can still create it** (§4.5).

### 4.5 In-flight writes, terminal marking and cleanup [PROPOSED]

**What cannot be established.** The documentation gives **no upper bound** on how long an R2 `put()` can stay in flight. HTTP-triggered Workers have no hard duration limit while the client is connected, and `waitUntil` adds up to 30 s after a response or disconnect [DOC]. So the server can never prove that a writer has definitively stopped. An absent object at reconciliation time is **not** proof that the object will never appear.

**How the design stays safe anyway.** Integrity does not depend on the writer having stopped:
- **A terminal reservation cannot be committed.** Every commit asserts `state = 'reserved'` (§6.1). If a `put()` completes after its reservation became `failed`, the object is unreferenced and can never be bound to evidence.
- **No untracked objects.** Every staging key is created by an admission transition **before** any write (§4.1), and reservation rows are never deleted (§2.2). Any object under the staging prefix therefore belongs to exactly one tracked reservation.
- **Every failed key stays eligible for cleanup.** No platform guarantee bounds how late a `put()` can complete (§1.3 item 8), so no finite number of absence checks proves that an object will never appear. Cleanup therefore has **no stopping rule**:
  - every `failed` reservation is revisited indefinitely, whatever its `last_cleanup_observation`;
  - each sweep takes a bounded batch, least recently checked first (`cleanup_checked_at` ascending, never-checked first), so every failed key is revisited in turn;
  - a present object is deleted, which is safe because no committed row can reference a failed reservation's key; an absent object is only recorded as `absent`.

  A pass never deletes an object whose reservation is not `failed`, nor one that a committed row references. Cleanup never touches a `committed` reservation's key. A finite stopping rule may be introduced only on a separately verified platform guarantee (V7) and an explicit owner decision.
- **Residual orphan-storage risk.** An object that appears after a pass observed `absent` remains stored until that key's next revisit. The revisit interval grows with the number of failed reservations, the sweep batch size and the 5-minute cron cadence. Eventual deletion holds only while the sweep keeps running and its batch capacity keeps up with the growth of failed reservations. Otherwise orphaned objects can accumulate. Such objects are never bound to evidence. Their storage, and their deletion under OD-21 retention, is a residual cost to monitor (§12).
- **The client keeps the bytes.** The client discards a local chunk only after `committed` or `duplicate` (§3.3). If a reservation is failed while its write was still running, the client re-uploads under a **new** reservation and key, as long as the upload window is open.

**What P-25 controls.** Integrity is safe without P-25, but **loss-free recovery** depends on it:
- If the bound is **shorter** than real write durations, reconciliation may fail a reservation whose write later succeeds. After the upload deadline the client can no longer re-upload, so that evidence is lost.
- If the bound is **longer**, completion and finalization wait longer, because they wait for unresolved reservations (§7).

The bound is the earliest point at which a still-`reserved` reservation may be reconciled and, if no verified object exists, marked `failed`. It must be set from V4 and V7 evidence: measured write durations, behaviour under disconnects and after `waitUntil` expiry, and late `put()` completion. **P-25 stays OPEN, and no value is proposed.**

**Blocking prerequisite.** Implementation of reconciliation may not start until P-25 is settled from that evidence, **and** the owner accepts the residual risk above: evidence lost when a write outlives the bound after the upload deadline.

---

## 5. R2/D1 integrity [PROPOSED requirements; platform support as marked]

### 5.1 Required properties

1. **Unique keys.** Each reservation has its own server-generated staging key, never reused and never written by more than one handler. No write ever targets a shared deterministic key or another reservation's key. This closes today's overwrite race (`api.js:545–546`) **without** needing a conditional write.
2. **One unresolved reservation per logical chunk.** Enforced by the partial unique index (§2.2). A second request for the same logical chunk writes nothing.
3. **Exact binding.** The committed chunk row records the exact `staging_key`, hash and size of the verified bytes, plus its `reservation_id`.
4. **No blind retries or deletes.** An ambiguous outcome is resolved only by reconciliation. A handler never rewrites a key whose write outcome is unknown.
5. **Safe cleanup.** An object is deleted only if its reservation is `failed` **and** no committed row references that exact key. Cleanup **revisits every failed key indefinitely**, in bounded batches, because a late `put()` may create or recreate the object at any time (§4.5). An `absent` observation is never treated as final. Objects referenced by committed rows are never deleted, replaced or altered.

### 5.2 Platform features: optional, not relied on

- **Conditional writes.** `onlyIf` accepts typed `R2Conditional` fields or HTTP conditional headers. All conditional headers except `If-Range` are documented as supported [DOC]. Whether `If-None-Match: *` on `put()` gives reliable create-only semantics, including under concurrent writers, is **[UNVERIFIED]** (§1.3 item 2). The primary design does not need it, because every key is unique and has a single writer. If a later design wants it as defence in depth, it must first pass V7 on real R2 (non-production).
- **Listing.** R2 listing is not needed, because reconciliation and cleanup work from reservation rows.

### 5.3 Stored-copy integrity: a blocking prerequisite

The design requires that the committed object's content equals the committed hash and size.

- **Proposed first-version mechanism:** after `put()` resolves, read the object back and hash it before commit. This relies on documented strong read-after-write consistency [DOC]. It costs one read per chunk.
- **Possible replacement:** passing `sha256` to `put()` and relying on R2 to reject mismatches. Whether R2 rejects mismatches is [UNVERIFIED] (§1.3 item 1), so this mechanism may replace the read-back **only** after V9 confirms it.
- **Implementation of the commit step may not start** until the read-back approach passes design review, or V9 confirms an alternative.

---

## 6. Atomicity boundaries [PROPOSED]

**What D1 does and does not give [DOC].**
- **Does:** a batch is a transaction, and a **failing** statement rolls back the whole sequence; each database processes queries one at a time.
- **Does not:** a conditional statement that **succeeds while changing zero rows** is not a failure. "Guarded statements" alone therefore do **not** make a multi-statement transition all-or-nothing. If the first guard matches nothing while a later statement still applies, a partial result can follow.

The existing `finalizeModule` repeats the same `EXISTS` guard on every statement and puts the state flip last (`core.js:154–183`) [REPO]. This blueprint does **not** rely on that pattern for F4 transitions.

### 6.1 Transition invariant [PROPOSED — BLOCKING until V10 passes on real D1]

Every multi-statement F4 transition is one D1 batch that satisfies all of the following:
1. **Ownership by assertion.** The batch's first statement inserts the transition's **full precondition** into `transition_assertions` (§2.6). The precondition is evaluated in that statement: for example, the reservation is still `reserved` and the attempt is still `in_progress`. If it is false, the `CHECK (ok = 1)` constraint fails the statement, and D1 rolls back the whole batch. The transition either owns the state it is about to change, or nothing happens.
2. **Single application by ledger.** The second statement inserts the transition's `op_key` into `transition_ledger`. A replay, or a concurrent duplicate, violates the primary key, fails, and rolls back.
3. **Dependent statements cannot partially apply.** All remaining statements write rows whose conditions are fixed by the assertion within the same batch. Uniqueness and CHECK constraints (the partial unique indexes of §2.1 and §2.2) fail the batch on any conflict.
4. **Unexpected row counts.** After the batch, the caller reads back the ledger row and the affected state, and compares them with the expected result. A mismatch is a defect: it is logged as an incident and stops the transition path. It is never silently accepted.
5. **Expected failures.** An assertion failure or constraint violation is an expected outcome, not an error. The caller re-reads state and answers accordingly: `duplicate`, `upload_pending`, `chunk_conflict`, `turn_closed`, `recording_evidence_pending`, or "already applied".
6. **Ambiguous results.** If the batch result is unknown (for example a network error after sending), the caller never re-sends a different transition. It reads the ledger: present means the transition applied; absent means it did not. Only then does it decide the next step. Read-only status paths report unknown states as pending.

**Status.** It is **[UNVERIFIED]** whether a failed CHECK or uniqueness constraint inside a real D1 batch rolls back all earlier statements in that batch, under concurrent Worker instances. That matches the documented semantics, but must be shown by V10. Until then, F4 transitions are **not implementation-ready**. If V10 fails, the design must be revised, for example by narrowing transitions to single statements. The in-process SQLite harness is not evidence.

### 6.2 Transitions

| Operation | Ledger key | Asserted precondition | Statements after the assertion and ledger rows |
|---|---|---|---|
| Grant creation | `open:<attempt>:<item>:<turn>` | Attempt `in_progress`; lease current; phase rules (where approved); no valid open grant | Close stale open grants; insert the grant (partial unique `(attempt) WHERE open`, `UNIQUE(attempt,item,turn)`) |
| Reservation admission | `admit:<reservation_id>` | Attempt `in_progress`; `t_admit ≤ upload_deadline_at`; quota including reserved bytes; no committed chunk for the logical chunk | Insert the reservation (partial unique per logical chunk) |
| Reservation commit | `commit:<reservation_id>` | Reservation `reserved`; attempt not `completed` | Insert the chunk row; upsert the turn; mark the reservation `committed` |
| Reservation failure | `fail:<reservation_id>` | Reservation `reserved` | Mark `failed`; `cleanup_checked_at` NULL (checked first) |
| Turn completion | `complete_turn:<attempt>:<item>:<turn>` | Contiguous committed `0..n-1`; no `reserved` reservation for `seq < n`; evidence not terminal | Mark turn (and grant) evidence `complete` |
| Grant closure at module submission | `close:<rgr_id>` | Grant `open`; module `submitted` or `submitting` | Close with `module_closed` |
| Finalization (turn or grant) | `finalize:<evidence id>` | `t > upload_deadline_at`; no `reserved` reservation for that evidence; evidence not terminal | Mark `incomplete` with reason and the received and missing seqs. A **zero-chunk grant** becomes `incomplete` ("no audio received") |
| Attempt completion | `complete_attempt:<attempt>` | Attempt `in_progress`; all modules submitted; **no** `open` grant; **no** grant or turn with non-terminal evidence (zero-chunk grants included); **no** `reserved` reservation | Set `completed`; delete the lease (as today) |
| Lease change | `lease:<attempt>:<generation>` | Lease row state as today | Issue the lease; close open grants of older generations |

**Concurrency** can only be established by V1, V2, V5 and V10 on a real non-production D1 database (§11). None of them has been run.

---

## 7. Finalization and completion ordering [PROPOSED]

1. **Lazy finalization** runs on status reads, completion attempts, rater views and result building, for the attempt concerned.
2. **The sweep** (every 5 minutes [REPO]) gets **new** queries:
   - attempts with non-terminal turn or grant evidence, or `reserved` reservations, whose `upload_deadline_at` or P-25 bound has passed;
   - **all** `failed` reservations, whatever their last cleanup observation: a bounded batch per run, least recently checked first (§4.5). There is no exclusion after an `absent` observation.

   It works in bounded batches, within the documented 15-minute cron limit [DOC].
3. **Order per attempt:**
   1. reconcile reservations older than the P-25 bound (§4.4);
   2. once the module is submitted, close any still-`open` grant (`module_closed`);
   3. once `t > upload_deadline_at` and no eligible reservation is unresolved, finalize **turn evidence and grant evidence**, including zero-chunk grants;
   4. completion may then succeed.

   While a reservation admitted on or before the deadline is unresolved, finalization and completion **wait**. That wait is bounded by P-25 (§4.5).
4. **Terminal `incomplete`** records a reason and the received and missing seqs. A zero-chunk grant records "no audio received". Evidence is never promoted to `complete` by finalization.
5. **No late commit after a terminal failure.** The commit assertion (§6.1) refuses it. The orphaned object is then cleaned up, repeatedly if a late `put()` recreates it (§4.5, §5.1 item 5).
6. **No silent bypass.** Attempt completion asserts that there is no `open` grant, no non-terminal turn or grant evidence and no `reserved` reservation (§6.2). An open or non-terminal zero-chunk grant therefore blocks completion until it is closed and finalized.
7. **Concurrent workers.** Two Workers finalizing or completing the same attempt cannot produce two outcomes: the ledger lets each transition apply once, and the assertion lets it apply only from the expected state (§6.1). **Not tested;** it is to be verified by V2, V5 and V10.

---

## 8. Migration plan [PROPOSED; no migration is created or run]

1. **Migration `0002` (additive only).** New tables `recording_grants`, `upload_reservations`, `recording_grant_events`, `transition_ledger` and `transition_assertions`; new nullable columns on `recording_chunks` and `recording_turns`; partial unique and secondary indexes. **No** table rebuild, and the existing `status` CHECK is unchanged.
2. **Backfill.** None. Legacy rows keep NULL and display as "recorded before recording grants". Legacy deterministic keys stay valid because they are read from `r2_key`.
3. **Compatibility.**
   - A Worker without F4 ignores the new tables.
   - An F4 Worker treats NULL provenance as legacy.
   - Clients that predate F4 do not handle `upload_pending`, `upload_outcome_unknown` or `recording_evidence_pending`. The updated client must be served **before** any server change that can return them (P-23 [REC — OWNER-APPROVED]).
4. **Reversibility.** D1 migrations are forward-only in practice. Rollback is a **code** rollback that leaves the additive schema in place. Tables or columns that may hold evidence are **never** dropped.
5. **Rollout prerequisites.** Schema review; V1–V10 planned; V10 passed (§6.1); P-25 settled; the owner decisions in §13.

---

## 9. Failure matrix [PROPOSED behaviour]

| Failure | State left behind | Resolution | Evidence outcome |
|---|---|---|---|
| Worker terminated after the R2 write, before the D1 commit | Reservation `reserved`; object present | After the P-25 bound, reconciliation verifies the object and commits it, or fails the reservation | Committed, or failed and the client re-uploads |
| R2 write error | `reserved` | The handler marks it `failed` (`storage_write_failed`) | The client retries, creating a new reservation and key |
| D1 commit refused (assertion fails) | Reservation already `failed` | Whole commit batch rolled back (§6.1); object orphaned; removed by the indefinite round-robin cleanup (§4.5) | The client re-uploads if the window is open |
| `put()` still running when reconciliation runs | `reserved`; object absent | Reconciliation fails the reservation (absence is not proof the writer stopped, §4.5); a later `put()` can still create the object | Integrity safe: the object can never be committed. Possible loss if the window has closed (the P-25 trade-off) |
| Task cancelled after the `waitUntil` lifetime | `reserved`; object present or absent | Reconciliation after the P-25 bound | Committed if the object verifies; otherwise failed |
| Object appears after its reservation became `failed`, including after a pass observed `absent` | `failed`; last observation `absent` | That key's next round-robin revisit finds and deletes it (no committed row can reference it); revisits continue indefinitely | No evidence affected; no untracked object; the orphan is stored until that revisit (residual risk, §4.5) |
| D1 batch result unknown (network error) | Applied or not applied | Read the ledger key (§6.1); act only on the established outcome | No conflicting evidence |
| Unexpected row count after a batch | Inconsistent with the ledger | Incident; stop that transition path; investigate | Never silently accepted |
| Zero-chunk grant at attempt completion | Grant `open` or evidence not terminal | Completion refused; after submission and the deadline, the grant is closed and finalized `incomplete` ("no audio received") | Completion succeeds only afterwards |
| Lost response after commit | `committed` | Retry gets `duplicate` | Complete |
| Duplicate request while unresolved | One `reserved` | The second gets `upload_pending`; it writes nothing | – |
| Conflicting hash | Committed or `reserved` with another hash | `chunk_conflict`; incident | The first verified bytes win; no overwrite |
| Concurrent uploads of one logical chunk | One admission wins the partial unique index | The other gets `upload_pending` or `chunk_conflict` | Single writer |
| Reservation never resolves (handler gone) | `reserved` | Reconciliation after the P-25 bound | Committed or `abandoned` |
| Ambiguous commit (unknown D1 result) | `reserved` or `committed` | The handler answers `upload_outcome_unknown`; a retry learns the state; reconciliation if still `reserved` | No blind retry or delete |
| Read-back mismatch | `reserved` | `failed` (`readback_mismatch`); incident | The client re-uploads |
| Concurrent completion attempts | – | One transition wins; the other fails its ledger or assertion and re-reads state (§6.1) | Single outcome |
| Completion during an unresolved reservation | – | Refused `recording_evidence_pending` | Waits (bounded by P-25) |

---

## 10. Observability and privacy [PROPOSED]

| Event | Incident kind (SPEAKING §5.3) | Detail fields (minimised) |
|---|---|---|
| Late grant issued | `recording_grant_late` | ids, phase, `submit_kind`, server times, labelled claims |
| Refusal / would-refuse | `recording_grant_refused` / `recording_grant_would_refuse` | ids, code, mode, server time |
| Lease closed a grant | `recording_grant_closed_by_lease_change` | ids, lease generation, reacquired or takeover |
| Reservation failed | `recording_reservation_failed` | `reservation_id`, logical chunk, reason, server times |
| Reservation reconciled | `recording_reservation_reconciled` | `reservation_id`, outcome |
| Evidence finalized | `recording_evidence_finalized`, plus the summary `recording_incomplete` | ids, reason, received and missing seqs |
| Interrupted turn | `recording_interrupted` | ids, `duration_ms_basis` |
| Staging object removed | `recording_staging_object_removed` | `reservation_id` only |

**Never logged:** audio, transcripts, IP addresses, user-agent strings, raw device ids or staging keys in learner-visible
responses. Logs use the existing redacted logger (`exam-worker/src/log.js`, which already drops secrets, tokens, answer values and audio bytes) [REPO]. IP addresses and user-agent strings are simply never passed to it. Retention of incident data falls under OD-21.

---

## 11. Non-production test plan [PROPOSED — NOT RUN]

**Environment.** A separate D1 database, a separate R2 bucket and a separate Worker deployment, with synthetic attempts only, no learner data and no production audio.

**Relation to SPEAKING §4.2.11.** V1–V9 refine the spec's plan. **V10 is new in this blueprint** and is not yet listed in the spec.

**Fault injection.** Use real mechanisms where possible: client disconnects, killed requests, network throttling. Any test-only hook must be absent from production builds, and its absence must be verified. **Nothing below has been run, and no result is claimed.**

| # | Fixture | Race or fault | Pass condition |
|---|---|---|---|
| V1 | One attempt and lease; turns `t1`, `t2` | 50 parallel `turns/open` for the same and for different turns | Exactly one `open` grant per attempt; the others receive the existing grant or `recording_grant_active`; no partial rows |
| V2 | Attempt with pending evidence near `upload_deadline_at`, including an **open zero-chunk grant** and a **closed zero-chunk grant** | Completion racing admission, commit, turn completion, late-grant creation and zero-chunk grant closure, at deadline − 1 ms, at the deadline, and + 1 ms | No accepted write after `completed`; completion never succeeds while any grant is open, any turn or grant evidence is non-terminal, or any reservation is `reserved`; exactly one completion outcome |
| V3 | Reservations in each state | Kill the request after `put()` and before commit; R2 error; guard failure; duplicate retries | Every reservation ends `committed` or `failed`; no committed row references a missing or mismatched object |
| V4 | Chunks of 1 KiB–256 KiB | Upload durations on fast, slow and throttled networks; disconnect mid-write; a task that outlives the 30 s `waitUntil` extension; whether a cancelled task's `put()` still completes, and how late | Distributions of (commit time − admission time), of completion after a disconnect, and of **late `put()` completion after cancellation**, from which the owner can choose P-25 |
| V5 | Expired evidence, including **zero-chunk grants** (open and closed) | Lazy finalization and the sweep in parallel, repeated; finalization racing a late reservation commit | Exactly one terminal transition per record; repeats change nothing; nothing finalized while a reservation is unresolved; every zero-chunk grant ends `incomplete` ("no audio received") |
| V6 | Committed, orphaned and ambiguous objects; a large population of failed reservations | Cleanup sweep. **Exact sequence:** (1) a reservation is failed while its `put()` is still in flight; (2) the first cleanup pass finds the key absent and records `absent`; (3) the original `put()` then creates the object; (4) later scheduled sweeps run. Also measure the revisit interval as the number of failed reservations grows | No referenced object deleted or altered; only unreferenced objects of failed reservations removed; ambiguous cases reconciled first; in step (4) a later sweep finds and removes the object; no failed reservation is ever excluded from revisits; the revisit interval is documented as evidence for the §4.5 residual risk |
| V7 | Platform capabilities | Direct tests of the §1.3 behaviours the implementation intends to rely on; reconciliation running while a `put()` is in flight; if ever relied on, `put()` with `If-None-Match: *` against an existing key and under concurrent writers | Each relied-on behaviour confirmed, or the design does not use it; a reconciliation that fails an in-flight reservation never leads to a committed row for that key |
| V8 | One logical chunk | Same hash replayed; different hash; concurrent requests; retry after an unknown outcome | One unresolved reservation at most; one writer per key; no rewrite of an unknown-outcome key; answers `duplicate`, `upload_pending` or `chunk_conflict` |
| V9 | Committed chunks | Read-back hash for every committed row; separately, `put()` with a deliberately wrong `sha256`; read-back racing a late `put()` to a key whose reservation has failed | Every committed object matches; it is documented whether R2 rejects a wrong `sha256` (decides whether read-back can be replaced); no committed row ever binds to a failed reservation's key |
| V10 | Transition invariant (§6.1) on real D1 | Batches where the assertion is false, where the ledger key already exists, and where a later statement violates a constraint; run concurrently from several Worker instances; inject network errors after sending | A false assertion or constraint violation rolls back **every** statement of the batch; replays apply nothing; the ledger answers "applied or not" after an ambiguous result; no partial state is ever observed |

---

## 12. Rollout and rollback [PROPOSED]

**Order.**
1. Owner decisions (§13) recorded in register §B.2.
2. Migration `0002` applied to the non-production database.
3. Server changes in phases (§14), deployed to non-production only.
4. V1–V10 on non-production.
5. The updated client served.
6. The server upload path (reservations, staging keys) and the evidence gate deployed.
7. `observe` on synthetic attempts.
8. A separate owner approval to enter `enforce`.

**Controls.**
- The mode (P-13: Worker variable [REC — OWNER-APPROVED] for the synthetic phase) governs grant and phase checks only.
- The evidence-safety parts (reservations, verification, finalization, completion gate) are not mode-controlled (P-23 [REC — OWNER-APPROVED]).
- Before real forms, reconsider versioned configuration (P-13 Option B).

**Stop conditions:**
- any refusal of a correctly behaving client;
- `recording_incomplete` above the baseline;
- any read-back mismatch;
- any reservation older than the P-25 bound that reconciliation cannot classify;
- any committed row whose object fails verification;
- any unexpected row count or ledger mismatch after a transition (§6.1);
- a cleanup revisit interval or count of present orphaned objects that keeps growing, meaning cleanup is not keeping up (§4.5 residual risk).

**Rollback must never** delete or alter reservations, chunk rows, staging objects, grants, events or evidence states. It must never drop the additive schema, and never mark failed or incomplete evidence as valid.

- A code rollback to the pre-F4 upload path writes new chunks under deterministic legacy keys, a different key namespace, so it cannot overwrite staging objects. Its unguarded completion would, however, strand any reservation left `reserved`.
- Before rollback, therefore, reconcile all unresolved reservations. After any later re-deployment, run reconciliation again.

---

## 13. Open gates and decisions

| Dependency | Item | Status (register §B.2 or as recorded) | Needed |
|---|---|---|---|
| Completion policy | F4/P-4 | **OWNER DECISION — APPROVED** (A-bounded; register v1.5) | – (implementation authorisation still separate) |
| Late grants after submission | F4/P-8 | **OWNER DECISION — APPROVED** (C1, limitation retained; register v1.5) | – |
| Gate versus modes | F4/P-23 | **OWNER DECISION — APPROVED** (independent of modes; client first; no gate switch) | How the gate applies to attempts already in progress: implementation design review |
| Declared count for C1 | F4/P-24 | **OWNER DECISION — APPROVED** (required; request-contract check only) | – |
| Abandonment bound | F4/P-25 | OPEN | V4 and V7 evidence, then an owner decision that also accepts the residual loss risk of §4.5; **blocks implementation start** |
| One-active scope | F4/P-17 | **OWNER DECISION — APPROVED** (per attempt) | – |
| `late` classification | F4/P-7 | **OWNER DECISION — APPROVED** (server-observed facts only) | Whether a late request during a running phase may create an `open` grant: implementation design review |
| Lease-expiry audio | F4/P-22 | **OWNER DECISION — APPROVED** (flag `lease_interrupted`; no resumption) | – |
| Mode mechanism | F4/P-13 | **OWNER DECISION — APPROVED** (Option A, synthetic phase only) | Reconsider Option B before real forms |
| Phase binding and intro | F4/P-6 | **OWNER DECISION — APPROVED** (explicit validated binding, validated `teil<N>` fallback; no intro grant) | Validator rule against repeated turn ids (§2.3) |
| Duration provenance | F4/P-11 | **OWNER DECISION — APPROVED** (first migration; reviewer display later) | – |
| Multipliers other than 1.0 | F4/P-18; OD-41; EX-04; EX-08 | **OWNER DECISION — APPROVED, FIRST-VERSION TREATMENT ONLY** (register v1.5): exclusion from phase checks, `phase_rule_unresolved` | **Before any pilot or learner access:** the broader accommodation timing policy through OD-41, with EX-04 and EX-08 input (not approved) |
| Per-grant byte cap | F4/P-15 | OPEN | Before any per-grant cap is evaluated in any mode, or before `enforce` |
| Enforcement values | F4/P-1, P-2, P-14 | OPEN (OD-09 LOCKED unchanged) | Evidence, before `enforce` |
| Re-recording; turn order; F8 | F4/P-3, P-10, P-12 | OPEN | Deferred |
| Rating, privacy, consent, retention | F4/P-5, P-9, P-19, P-20; EX-01; OD-21 | OPEN (P-20: OD-21 governs per R-08; scope confirmation pending) | Before any pilot |
| Stored-copy integrity | §5.3 | Design prerequisite | Read-back reviewed, or V9 |
| D1 transition invariant | §6.1; V10 | **BLOCKING**; not verified | V10 on real non-production D1; redesign if it fails |
| D1 concurrency | V1, V2, V5 | Not verified | Non-production tests |
| In-flight writes and cleanup | §4.5; V4, V6, V7, V9 | Design requirement; not verified | Non-production tests; P-25 |
| PR #53 | P-16 (review item) | OPEN PR, untouched | Owner decision; SPEAKING §12.2 recommends fixing first |
| Implementation authorisation | – | Not given | A separate, explicit owner authorisation |
| Learner use | OD-53 | **OWNER DECISION — CONDITIONAL** | Unchanged; no learners, pilot or release |

---

## 14. Recommended implementation sequence [PROPOSED; not executed]

Each phase is a separate, independently reviewable PR. None may start before the separate implementation authorisation and the prerequisites in §13.

| Phase | Content | Depends on |
|---|---|---|
| 0 | Non-production evidence: V10 (transition invariant), V4 and V7 (write durations, cancellation, late `put()`); P-25 decision; schema review; read-back review | A provisioned non-production environment (separate D1 database, R2 bucket and Worker; none exists in the repository today); remaining owner decisions in §13 |
| 1 | Migration `0002` (additive) and schema tests | Phase 0, with V10 passed |
| 2 | Upload reservations, staging keys, read-back verification, commit under §6.1; existing route semantics preserved; new responses unused by old clients until the client is updated | Phase 1; P-25 |
| 3 | Reconciliation (lazy and sweep) and indefinite round-robin cleanup of all failed keys (§4.5) | Phase 2 |
| 4 | Evidence state, grant closure at submission, finalization of turn and grant evidence (zero-chunk grants included), completion gate (P-4, P-23) | Phases 2–3 (P-4 and P-23 owner-approved, register v1.5) |
| 5 | Grant routes (`turns/open`, `turns/stop`), stale-grant closure, lease interaction, C1 late grants (P-8, P-24) under `off` and `observe`; phase-check handling for multipliers other than 1.0 | Phase 1 (P-8, P-17, P-7, P-22, P-24, P-6, P-13 and the P-18 first-version treatment owner-approved, register v1.5); the P-7 and P-23 sub-questions settled in design review |
| 6 | Client: attempt-scoped local keys, new responses, re-send after submission, superseded-tab stop | PR #53 decision |
| 7 | V1–V10 on non-production; results documented | Phases 2–6 |
| 8 | `observe` on synthetic attempts | Phase 7; owner go-ahead |
| 9 | `enforce` | Separate owner approval; P-1, P-2, P-14, P-15 |

---

*This blueprint authorises nothing. No F4 status is changed, no owner approval or human review is claimed, and no
implementation, deployment, learner access, pilot or release gate is opened.*
