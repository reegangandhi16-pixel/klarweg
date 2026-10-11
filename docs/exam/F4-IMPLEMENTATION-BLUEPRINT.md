# F4 Implementation Blueprint — speaking recording grants and evidence lifecycle

> **Status:** design blueprint, **documentation only, NOT IMPLEMENTED, NOT AUTHORISED.** Prepared with AI assistance on
> 2026-10-11 against `origin/main` @ `e9d303c`. It is not a human review, not an owner decision and not an implementation
> authorisation. It changes no decision status. The formal record of every F4 decision is the decision register
> (`B1-FINAL-DECISION-REGISTER.md` §B.2, `F4/P-n`); the design source is `B1-SPEAKING-SPEC.md` (§4.2, §5, §10–§12).
> OD-53 remains **OWNER DECISION — CONDITIONAL**: no learner access, pilot, production audio, deployment or release.
>
> **Labels.**
> - **[REPO]** = observed in the repository at `e9d303c`. The exam code is unchanged since `ef64371`, so earlier `[REPO @ ef64371]` citations still apply.
> - **[DOC]** = stated in official Cloudflare documentation, read on 2026-10-11. Documentation is **not** a test result.
> - **[UNVERIFIED]** = a platform behaviour that is not established; it must be verified before anything relies on it.
> - **[PROPOSED]** = a design proposal of this blueprint.
> - **[REC]** = models a recommendation of SPEAKING §12. **Recommendation only, NOT APPROVED.**
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
| R2 `put()` with `onlyIf` returns `null` and stores nothing if the precondition fails. `R2Conditional` offers `etagMatches`, `etagDoesNotMatch`, `uploadedBefore` and `uploadedAfter` | R2 Workers API |
| R2 `put()` accepts `sha256` and other hashes "to check the received object's integrity"; a provided checksum is returned on the object; MD5 by default | R2 Workers API |
| Workers: "There is no hard limit on duration for HTTP-triggered Workers" while the client is connected. When the client disconnects, tasks may be cancelled. `ctx.waitUntil()` can extend execution up to 30 s after the response or a disconnect. CPU time on the paid plan defaults to 30 s and can be raised to 5 min. Cron Trigger duration is up to 15 min | Workers limits |

### 1.3 Platform behaviour not established [UNVERIFIED]

1. Whether R2 **rejects** a `put()` whose body does not match the provided `sha256`. The documentation does not say so.
2. Whether any `R2Conditional` can express "create only if the key does not exist". The documentation has no such condition and no wildcard.
3. Whether a partially written object can ever be visible before `put()` resolves.
4. Whether a `put()` that is in flight completes or is cancelled when the client disconnects (outside `waitUntil`).
5. Whether listing R2 objects is reliable enough for sweeps.
6. Real D1 behaviour under concurrent Worker instances for the conditional transitions below.

The documentation describes intent; tests V1–V9 (§11) must confirm behaviour.

---

## 2. Proposed logical schema [PROPOSED; subject to schema review]

All new structures are **additive**. Names and types are illustrative.

### 2.1 `recording_grants` (new)

| Column | Notes |
|---|---|
| `rgr_id` PK | `rgr_<uuid>`, server-generated |
| `attempt_id`, `user_id`, `item_id`, `part`, `turn`, `phase_id` | `part` and `phase_id` derived on the server (P-6) |
| `kind` | `live` \| `late` (server-observed facts only, P-7 [REC]) |
| `after_submission`, `submit_kind` | Set for C1 late grants (P-8) |
| `state` | `open` \| `closed` |
| `close_reason` | `stopped`, `capture_window_elapsed`, `lease_reacquired`, `lease_takeover`, `module_closed`, `consent_withdrawn` (P-19) |
| `lease_generation` | Lease generation at issue |
| `granted_at`, `capture_window_ends_at`, `upload_deadline_at` | Server times in ms; fixed at first issue |
| `max_chunks` | Nullable; computed and logged, never enforced until P-1 and P-14 are approved |
| `declared_chunks` | Device claim; required for C1 late grants under P-24 [REC] as a request-contract field |
| `evidence_state`, `evidence_reason`, `finalized_at` | Holds evidence for **zero-chunk grants**, which have no turn row |
| `mode`, `flags_json` | Effective mode at issue; flags such as `phase_rule_unresolved` (P-18) or `lease_interrupted` (P-22) |

**Constraints.**
- `UNIQUE (attempt_id, item_id, turn)`: one grant per turn (P-3 default).
- Partial `UNIQUE (attempt_id) WHERE state = 'open'`: one active grant per attempt (P-17 per attempt [REC]). The schema already uses a partial unique index (migration line 116).

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

**Constraints.**
- Partial `UNIQUE (attempt_id, item_id, turn, seq) WHERE state = 'reserved'`: at most one unresolved reservation per logical chunk.
- `UNIQUE (staging_key)`.

**Indexes.** `(state, t_admit)` for reconciliation; `(attempt_id, state)` for the completion gate.

### 2.3 `recording_chunks` (existing; new nullable columns)

- **Keep:** `r2_key`, `sha256`, `bytes` and the primary key.
- **Add:** `reservation_id` (UNIQUE when not NULL), `rgr_id`, `mode`, `authorisation_provenance` (`live` \| `late` \| `none`).
- `r2_key` holds the **exact staging key** that was committed. Every reader must take the key from the row and never reconstruct it.

**Known latent issue.** The primary key uses `part`, while the API addresses `item_id`. The validator must reject a turn id that repeats within a part (P-6), or schema review must change the key. This must be resolved before real forms.

### 2.4 Turn evidence (existing `recording_turns`; new nullable columns)

- **Add:** `evidence_state` (`partial` \| `complete` \| `incomplete`, own CHECK), `evidence_reason`, `finalized_at`, `received_seqs_summary`, `duration_ms_basis` (`client_wallclock` \| `chunk_estimate`, P-11 [REC]).
- **Keep** the legacy `status` column and its CHECK unchanged, so the table needs no rebuild. `evidence_state` is authoritative for F4.

### 2.5 `recording_grant_events` (new) and `incidents` (existing)

- **Events:** one row per failed check (`would_refuse` under `observe`, a refusal under `enforce`), linked to the open, stop, chunk or completion it concerns.
- **Incidents:** summary rows (§10).

### 2.6 Rows before the migration

Legacy rows keep NULL in all new columns and are shown as "recorded before recording grants". No backfill invents provenance (§8).

---

## 3. API contract [PROPOSED; no route below exists except where marked REPO]

General rules:
- All mutating routes keep the existing check order: user, attempt ownership, request id, lease, module state, server time.
- Responses include `server_now`.
- Errors use the existing `{ok:false, error}` shape.

### 3.1 `POST …/sprechen/turns/open` (new)

- **Request:** `request_id`, `lease_id`, `item_id`, `turn`; optional claims `client_elapsed_ms`, `client_offline_ms`, `declared_chunks`. For a **C1 late grant**, `declared_chunks` is **required** as a request-contract field (P-24 [REC]); it is never authority, proof or a cap.
- **Response:** `rgr_id`, `item_id`, `part`, `turn`, `phase_id`, `state`, `kind`, `granted_at`, `capture_window_ends_at`, `upload_deadline_at`, `max_chunks`, `flags[]`, `replayed`.
- **Idempotency:** route key `turns/open:<item>:<turn>` in `request_log`, **plus** `UNIQUE(attempt,item,turn)`, so concurrent duplicates converge on one grant. A new `request_id` for the same turn returns the existing grant. Windows are never extended.
- **Errors:** `recording_grant_active` (with the blocking grant; the client re-reads status and never stops a grant blindly); `phase_not_open`; `phase_closed`; `turn_closed`; `upload_window_closed`; `lease_expired`; `lease_superseded`; `consent_required`; `request_contract_invalid` (for example, a C1 late grant without `declared_chunks`); `finalization_pending` (module still `submitting`; retryable).
- **Phase checks** are not evaluated for attempts with a multiplier other than 1.0 (P-18 [REC]); the grant is flagged `phase_rule_unresolved`.

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

- Refused with `recording_evidence_pending` (listing pending turns) while pending evidence or an unresolved reservation exists and `t ≤ upload_deadline_at`. After the deadline, it is also refused while a reservation is unresolved (§7).
- Then finalization, the gate and `completed` happen in one atomic step (§6).

---

## 4. Reservation lifecycle [PROPOSED]

### 4.1 Steps

1. **Receive and verify.** Run the existing checks. Read the body, compute SHA-256 and size from the **received bytes**, and refuse a mismatch with the declared hash (as `api.js:530–534` does today).
2. **Admit (one atomic database step).** Insert a `reserved` row with a new `staging_key`, `t_admit = now`, and the computed hash and size. The insert is conditional on all of these:
   - attempt `in_progress`;
   - `t_admit ≤ upload_deadline_at`;
   - grant checks (enforce only);
   - no committed chunk for the logical chunk (if one exists: same hash → `duplicate`, different hash → `chunk_conflict`);
   - no unresolved reservation for it (if one exists → `upload_pending`, or `chunk_conflict` if the hash differs);
   - quota: committed bytes **plus reserved bytes** ≤ `attempt_max_bytes`.
3. **Write.** `put(staging_key, bytes)`. Only this handler ever writes this key.
4. **Verify the stored copy** before commit (§5.3).
5. **Commit (one atomic step, guarded on `state = 'reserved'`).** Insert the chunk row referencing `staging_key`, hash, size and `reservation_id`; upsert the turn; set the reservation to `committed`. If the guard fails, because reconciliation already failed the reservation, nothing is committed (no late commit after a terminal failure).
6. **Respond.** If any step after admission has an unknown outcome, the reservation stays `reserved`, and the response is `upload_outcome_unknown`.

### 4.2 Eligibility, deadline and disconnects

- **Eligibility** is decided at step 2. A request admitted at exactly `upload_deadline_at` is eligible.
- **The deadline passing during steps 3–5 does not refuse the upload.**
- **Consequence of verifying before admitting:** a request whose body finishes arriving after the deadline is **not** eligible. This is chosen deliberately so that reservations always carry a verified hash, and abandoned reservations stay rare. Chunks are at most 256 KiB [REPO]; V4 measures whether this matters.
- **Steps 3–5 run inside `ctx.waitUntil`** so that a client disconnect does not cancel the write and commit. The documented extension is 30 s at most [DOC]; behaviour when it is exceeded is covered by reconciliation.

### 4.3 States

| From | Event | To | Actor |
|---|---|---|---|
| – | Admission succeeds | `reserved` | Upload handler |
| `reserved` | Guarded commit succeeds | `committed` | Upload handler, or reconciliation (§4.4) |
| `reserved` | Write fails, or read-back mismatches (definite) | `failed` (`storage_write_failed` / `readback_mismatch`) | Upload handler |
| `reserved` | Older than the abandonment bound **[OPEN P-25]**; reconciliation decides | `committed` or `failed` (`abandoned` / `reconciled_failed`) | Reconciliation (lazy or sweep) |
| `committed`, `failed` | – | terminal | – |

### 4.4 Reconciliation (lazy, plus the scheduled sweep)

For a `reserved` row older than the P-25 bound:
1. Look for the exact `staging_key`.
2. If the object exists and its content verifies against the reserved hash and size (§5.3), commit it through the same guarded step (reason "reconciled committed").
3. Otherwise, set the reservation to `failed` (`abandoned`).

Reconciliation never retries a write, and never deletes an object it cannot classify.

---

## 5. R2/D1 integrity [PROPOSED requirements; platform support as marked]

### 5.1 Required properties

1. **Unique keys.** Each reservation has its own server-generated staging key, never reused and never written by more than one handler. No write ever targets a shared deterministic key or another reservation's key. This closes today's overwrite race (`api.js:545–546`) **without** needing a conditional write.
2. **One unresolved reservation per logical chunk.** Enforced by the partial unique index (§2.2). A second request for the same logical chunk writes nothing.
3. **Exact binding.** The committed chunk row records the exact `staging_key`, hash and size of the verified bytes, plus its `reservation_id`.
4. **No blind retries or deletes.** An ambiguous outcome is resolved only by reconciliation. A handler never rewrites a key whose write outcome is unknown.
5. **Safe cleanup.** An object is deleted only if its reservation is `failed` **and** no committed row references that exact key. Objects referenced by committed rows are never deleted, replaced or altered.

### 5.2 Platform features: optional, not relied on

- `onlyIf` conditional writes [DOC] are not needed, because keys are unique. "Create if absent" semantics are [UNVERIFIED].
- R2 listing is not needed, because reconciliation works from reservation rows.

### 5.3 Stored-copy integrity: a blocking prerequisite

The design requires that the committed object's content equals the committed hash and size.

- **Proposed first-version mechanism:** after `put()` resolves, read the object back and hash it before commit. This relies on documented strong read-after-write consistency [DOC]. It costs one read per chunk.
- **Possible replacement:** passing `sha256` to `put()` and relying on R2 to reject mismatches. Whether R2 rejects mismatches is [UNVERIFIED] (§1.3 item 1), so this mechanism may replace the read-back **only** after V9 confirms it.
- **Implementation of the commit step may not start** until the read-back approach passes design review, or V9 confirms an alternative.

---

## 6. Atomicity boundaries [PROPOSED]

Each operation below must be one atomic database step: a D1 batch, with conditional statements guarded on current state. D1 documents batches as transactions and processes queries one at a time per database [DOC]. Behaviour across concurrent Worker instances is **not verified** until V1, V2 and V5 pass on a real non-production D1 database. The in-process SQLite harness proves nothing here.

| Operation | Atomic content | Guard |
|---|---|---|
| Grant creation | Close stale open grants (window elapsed or old lease generation) and insert the new grant | Partial unique `(attempt) WHERE open`; `UNIQUE(attempt,item,turn)`; attempt `in_progress` |
| Reservation admission | Insert the reservation | Partial unique per logical chunk; attempt `in_progress`; `t_admit ≤ upload_deadline_at`; quota |
| Reservation commit | Insert the chunk row, upsert the turn, mark the reservation `committed` | Reservation still `reserved` |
| Reservation failure | Mark `failed` | Reservation still `reserved` |
| Turn completion | Mark evidence `complete` | Contiguous committed `0..n-1`; no unresolved reservation for `seq < n`; not already complete with different values |
| Finalization | Mark non-terminal evidence `incomplete` | `t > upload_deadline_at`; no unresolved reservation for that evidence; evidence not terminal |
| Attempt completion | Finalize expired evidence, confirm nothing is pending or reserved, set `completed`; delete the lease (as today) | Attempt `in_progress`; `NOT EXISTS` pending evidence or reserved reservation |
| Lease change | Issue the lease; close open grants of older generations | Lease row state |

The existing `finalizeModule` already uses guarded batch statements (`core.js:154–183`) [REPO]. The same pattern applies here.

---

## 7. Finalization and completion ordering [PROPOSED]

1. **Lazy finalization** runs on status reads, completion attempts, rater views and result building, for the attempt concerned.
2. **The sweep** (every 5 minutes [REPO]) gets a **new** query: attempts with non-terminal evidence or `reserved` reservations whose `upload_deadline_at` (or P-25 bound) has passed. It works in bounded batches, within the documented 15-minute cron limit [DOC].
3. **Order per attempt:**
   1. reconcile reservations older than the P-25 bound (§4.4);
   2. finalize evidence once `t > upload_deadline_at` and no eligible reservation is unresolved;
   3. completion may then succeed.

   While a reservation admitted on or before the deadline is unresolved, finalization and completion **wait**. That wait is bounded by P-25.
4. **Terminal `incomplete`** records a reason and the received and missing seqs. Evidence is never promoted to `complete` by finalization.
5. **No late commit after a terminal failure.** The commit guard (§6) refuses it; the orphaned object is then eligible for cleanup (§5.1 item 5).
6. **Concurrent workers.** Two Workers finalizing or completing the same attempt cannot produce two outcomes. Every transition is conditional on the prior state, so the second becomes a no-op. This is to be verified by V2 and V5; it has not been tested.

---

## 8. Migration plan [PROPOSED; no migration is created or run]

1. **Migration `0002` (additive only).** New tables `recording_grants`, `upload_reservations` and `recording_grant_events`; new nullable columns on `recording_chunks` and `recording_turns`; partial unique and secondary indexes. **No** table rebuild, and the existing `status` CHECK is unchanged.
2. **Backfill.** None. Legacy rows keep NULL and display as "recorded before recording grants". Legacy deterministic keys stay valid because they are read from `r2_key`.
3. **Compatibility.**
   - A Worker without F4 ignores the new tables.
   - An F4 Worker treats NULL provenance as legacy.
   - Clients that predate F4 do not handle `upload_pending`, `upload_outcome_unknown` or `recording_evidence_pending`. The updated client must be served **before** any server change that can return them (P-23 [REC]).
4. **Reversibility.** D1 migrations are forward-only in practice. Rollback is a **code** rollback that leaves the additive schema in place. Tables or columns that may hold evidence are **never** dropped.
5. **Rollout prerequisites.** Schema review; V1–V9 planned; P-25 settled; the owner decisions in §13.

---

## 9. Failure matrix [PROPOSED behaviour]

| Failure | State left behind | Resolution | Evidence outcome |
|---|---|---|---|
| Worker terminated after the R2 write, before the D1 commit | Reservation `reserved`; object present | After the P-25 bound, reconciliation verifies the object and commits it, or fails the reservation | Committed, or failed and the client re-uploads |
| R2 write error | `reserved` | The handler marks it `failed` (`storage_write_failed`) | The client retries, creating a new reservation and key |
| D1 commit refused (guard fails) | Reservation already `failed` | Late commit refused; object orphaned; cleanup after reconciliation | The client re-uploads if it still holds the chunk |
| Lost response after commit | `committed` | Retry gets `duplicate` | Complete |
| Duplicate request while unresolved | One `reserved` | The second gets `upload_pending`; it writes nothing | – |
| Conflicting hash | Committed or `reserved` with another hash | `chunk_conflict`; incident | The first verified bytes win; no overwrite |
| Concurrent uploads of one logical chunk | One admission wins the partial unique index | The other gets `upload_pending` or `chunk_conflict` | Single writer |
| Reservation never resolves (handler gone) | `reserved` | Reconciliation after the P-25 bound | Committed or `abandoned` |
| Ambiguous commit (unknown D1 result) | `reserved` or `committed` | The handler answers `upload_outcome_unknown`; a retry learns the state; reconciliation if still `reserved` | No blind retry or delete |
| Read-back mismatch | `reserved` | `failed` (`readback_mismatch`); incident | The client re-uploads |
| Concurrent completion attempts | – | Conditional transition: one succeeds, the other is a no-op | Single outcome |
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

**Fault injection.** Use real mechanisms where possible: client disconnects, killed requests, network throttling. Any test-only hook must be absent from production builds, and its absence must be verified. **Nothing below has been run, and no result is claimed.**

| # | Fixture | Race or fault | Pass condition |
|---|---|---|---|
| V1 | One attempt and lease; turns `t1`, `t2` | 50 parallel `turns/open` for the same and for different turns | Exactly one `open` grant per attempt; the others receive the existing grant or `recording_grant_active`; no partial rows |
| V2 | Attempt with pending evidence near `upload_deadline_at` | Completion racing admission, commit, turn completion and late-grant creation at deadline − 1 ms, at the deadline, and + 1 ms | No accepted write after `completed`; completion never succeeds while anything is pending or reserved; exactly one completion outcome |
| V3 | Reservations in each state | Kill the request after `put()` and before commit; R2 error; guard failure; duplicate retries | Every reservation ends `committed` or `failed`; no committed row references a missing or mismatched object |
| V4 | Chunks of 1 KiB–256 KiB | Upload durations on fast, slow and throttled networks; disconnect mid-write; behaviour of `waitUntil` beyond 30 s | A distribution of (commit time − admission time) and of completion after a disconnect, from which the owner can choose P-25 |
| V5 | Expired evidence | Lazy finalization and the sweep in parallel, repeated | Exactly one terminal transition per record; repeats change nothing; nothing finalized while a reservation is unresolved |
| V6 | Committed, orphaned and ambiguous objects | Cleanup sweep | No referenced object deleted or altered; only confirmed unreferenced objects removed; ambiguous cases reconciled first |
| V7 | Platform capabilities | Direct tests of the behaviours in §1.3 that the implementation intends to rely on | Each relied-on behaviour confirmed, or the design does not use it |
| V8 | One logical chunk | Same hash replayed; different hash; concurrent requests; retry after an unknown outcome | One unresolved reservation at most; one writer per key; no rewrite of an unknown-outcome key; answers `duplicate`, `upload_pending` or `chunk_conflict` |
| V9 | Committed chunks | Read-back hash for every committed row; separately, `put()` with a deliberately wrong `sha256` | Every committed object matches; it is documented whether R2 rejects a wrong `sha256` (decides whether read-back can be replaced) |

---

## 12. Rollout and rollback [PROPOSED]

**Order.**
1. Owner decisions (§13) recorded in register §B.2.
2. Migration `0002` applied to the non-production database.
3. Server changes in phases (§14), deployed to non-production only.
4. V1–V9 on non-production.
5. The updated client served.
6. The server upload path (reservations, staging keys) and the evidence gate deployed.
7. `observe` on synthetic attempts.
8. A separate owner approval to enter `enforce`.

**Controls.**
- The mode (P-13: Worker variable [REC] for the synthetic phase) governs grant and phase checks only.
- The evidence-safety parts (reservations, verification, finalization, completion gate) are not mode-controlled (P-23 [REC]).
- Before real forms, reconsider versioned configuration (P-13 Option B).

**Stop conditions:**
- any refusal of a correctly behaving client;
- `recording_incomplete` above the baseline;
- any read-back mismatch;
- any reservation older than the P-25 bound that reconciliation cannot classify;
- any committed row whose object fails verification.

**Rollback must never** delete or alter reservations, chunk rows, staging objects, grants, events or evidence states. It must never drop the additive schema, and never mark failed or incomplete evidence as valid.

- A code rollback to the pre-F4 upload path writes new chunks under deterministic legacy keys, a different key namespace, so it cannot overwrite staging objects. Its unguarded completion would, however, strand any reservation left `reserved`.
- Before rollback, therefore, reconcile all unresolved reservations. After any later re-deployment, run reconciliation again.

---

## 13. Open gates and decisions

| Dependency | Item | Status (register §B.2 or as recorded) | Needed |
|---|---|---|---|
| Completion policy | F4/P-4 | Owner-selected, **pending formal approval** | Formal approval |
| Late grants after submission | F4/P-8 | Owner-selected, **pending formal approval** | Formal approval (limitation retained) |
| Gate versus modes | F4/P-23 | OPEN | Owner decision |
| Declared count for C1 | F4/P-24 | OPEN | Owner decision |
| Abandonment bound | F4/P-25 | OPEN | V4 evidence, then an owner decision; **blocks implementation start** |
| One-active scope | F4/P-17 | OPEN | Owner decision |
| `late` classification | F4/P-7 | OPEN | Owner decision |
| Lease-expiry audio | F4/P-22 | OPEN | Owner decision |
| Mode mechanism | F4/P-13 | OPEN | Owner decision |
| Phase binding and intro | F4/P-6 | OPEN | Owner decision; validator rule against repeated turn ids (§2.3) |
| Duration provenance | F4/P-11 | OPEN | Owner decision |
| Multipliers other than 1.0 | F4/P-18; OD-41; EX-04; EX-08 | OPEN | Synthetic exclusion now; policy before any pilot |
| Per-grant byte cap | F4/P-15 | OPEN | Before any per-grant cap is evaluated in any mode, or before `enforce` |
| Enforcement values | F4/P-1, P-2, P-14 | OPEN (OD-09 LOCKED unchanged) | Evidence, before `enforce` |
| Re-recording; turn order; F8 | F4/P-3, P-10, P-12 | OPEN | Deferred |
| Rating, privacy, consent, retention | F4/P-5, P-9, P-19, P-20; EX-01; OD-21 | OPEN (P-20: OD-21 governs per R-08; scope confirmation pending) | Before any pilot |
| Stored-copy integrity | §5.3 | Design prerequisite | Read-back reviewed, or V9 |
| D1 concurrency | V1, V2, V5 | Not verified | Non-production tests |
| PR #53 | P-16 (review item) | OPEN PR, untouched | Owner decision; SPEAKING §12.2 recommends fixing first |
| Implementation authorisation | – | Not given | A separate, explicit owner authorisation |
| Learner use | OD-53 | **OWNER DECISION — CONDITIONAL** | Unchanged; no learners, pilot or release |

---

## 14. Recommended implementation sequence [PROPOSED; not executed]

Each phase is a separate, independently reviewable PR. None may start before the separate implementation authorisation and the prerequisites in §13.

| Phase | Content | Depends on |
|---|---|---|
| 0 | V4 measurements on non-production; P-25 decision; schema review; read-back review | Owner decisions in §13 |
| 1 | Migration `0002` (additive) and schema tests | Phase 0 |
| 2 | Upload reservations, staging keys, read-back verification, guarded commit; existing route semantics preserved; new responses unused by old clients until the client is updated | Phase 1; P-25 |
| 3 | Reconciliation (lazy and sweep) and safe cleanup | Phase 2 |
| 4 | Evidence state, finalization, completion gate (P-4, P-23) | Phases 2–3; formal approval of P-4 and P-23 (not yet given) |
| 5 | Grant routes (`turns/open`, `turns/stop`), stale-grant closure, lease interaction, C1 late grants (P-8, P-24) under `off` and `observe` | Phase 1; formal approval of P-8, P-17, P-7, P-22, P-24, P-6 and P-13 (not yet given) |
| 6 | Client: attempt-scoped local keys, new responses, re-send after submission, superseded-tab stop | PR #53 decision |
| 7 | V1–V9 on non-production; results documented | Phases 2–6 |
| 8 | `observe` on synthetic attempts | Phase 7; owner go-ahead |
| 9 | `enforce` | Separate owner approval; P-1, P-2, P-14, P-15 |

---

*This blueprint authorises nothing. No F4 status is changed, no owner approval or human review is claimed, and no
implementation, deployment, learner access, pilot or release gate is opened.*
