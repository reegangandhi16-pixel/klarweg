# B1 Sprechen Specification (exam speaking architecture)

> **Status:** design only. No prompts, partner scripts, recordings or rating texts are created.
> **Sources:** Standard §5.4, §6.4, §8.3 (official: S1 §1.4, §3, §5; S3 p.25–28, 45–47). **Labels:** **[OFFICIAL]** · **[DESIGN]** · **[UNKNOWN]** · **[OD-xx]**.
> **F4 recording grants (draft, 2026-10-11):** §4.2, §5.1–§5.3 and §10 are **PROPOSED — NOT IMPLEMENTED**; §4.1 records observed implementation status and conflicts; §5.4 and §11 record open decisions. The proposals follow the owner's F4 directions F4-D1…F4-D5 (§11) and record every remaining owner decision as **[OPEN P-n]**. Additional labels: **[REPO @ ef64371]** = observed in the repository at that commit · **[PR #53]** = present only in the unmerged PR #53 · **[PROPOSED]** = design proposal, not a contract. This draft was prepared with AI assistance; it is not a human review and closes no gate.

---

## 1. Official model and Klarweg construct

| Aspect | Official [OFFICIAL] | Klarweg [DESIGN] |
|---|---|---|
| Format | Pair exam with 2 examiners; **single exam in exceptional cases** (≈ 10 min), where the examiner takes the partner role in Teil 1 and only the examiner asks questions in Teil 3 (S1 §1.4, §3.3) | Solo learner, so the closest official precedent is the **single exam** |
| Preparation | 15 min alone; notes allowed and usable during the exam; speak freely (S1 §3.2; S3 p.25) | Same |
| Introduction | ≈ 1 min, not rated (S1 §3, §5) | Short scripted examiner greeting + 1–2 questions; recorded but not rated |
| Teil 1 | Plan together, 4 points + "…"; ≈ 2–3 min | Simulated partner (examiner role) |
| Teil 2 | Choose 1 of 2 topics; 5 slides; ≈ 3–4 min per candidate | Same choice at prep start; 3:00 target, 4:00 hard stop |
| Teil 3 | Feedback + question to the partner; answer partner and examiner questions; ≈ 1–2 min per candidate | **[OD-24/OD-32]** see §1.1 |
| Rating | Two examiners, independent; mean; ≥ .5 up (S1 §5) | Two teacher raters, independent; AI advisory only (scoring spec §3.3) |

### 1.1 Teil 3 construct choice [OD-32]
The official rubric's Teil 3 Erfüllung covers giving feedback, asking a question **and** answering (S3 p.46). The single-exam model has no partner presentation [OFFICIAL S1 §3.3].

| Option | Description | Pros | Cons |
|---|---|---|---|
| (a) Single-exam model | Learner answers examiner questions only | Official precedent | Feedback/question functions are not elicited |
| **(b) Simulated pair (proposal)** | Learner hears a pre-recorded "partner" presentation (≈ 3 min, B1 level, a different topic), then gives feedback + asks a question, then answers the recorded examiner's/partner's questions about their own talk | Elicits the full Teil 3 construct; standardised | Adds ≈ 3–4 min; artificial partner |

The proposal is (b) for Mock and Sets. Time budget: ≈ 15 min, matching the official pair duration.

---

## 2. Phase plan (B1, solo simulation; values [DESIGN] unless marked)

| # | Phase | Duration | Learner action | System action |
|---|---|---|---|---|
| 0 | Consent + device check | untimed | Consent; mic level test; headphone check | Records consent version |
| 1 | **Preparation** | **15:00** [OFFICIAL] | Reads Teil 1 card, chooses the Teil 2 topic (1 of 2) [OFFICIAL], makes typed or paper notes; Teil 3 instruction visible | Topic choice locked at the end of prep (changeable during prep) |
| 2 | Introduction | ≈ 1:00 | Answers 2 greeting questions | Plays examiner audio; records (not rated) |
| 3 | **Teil 1** | target 3:00, hard 3:30 | Plans with the partner: proposes, reacts, decides | Scripted partner turns (§3); records each learner turn |
| 4 | **Teil 2** | target 3:00, hard 4:00 [OFFICIAL ≈ 3–4] | Presents along 5 slides; advances slides | Records continuously; slide-change timestamps logged |
| 5 | Partner presentation (option b) | ≈ 3:00 | Listens; may take notes | Plays the pre-recorded partner talk (5-slide structure, different topic) |
| 6 | **Teil 3** | target 2:00, hard 2:30 [OFFICIAL ≈ 1–2 per candidate] | (a) Feedback on the partner talk, (b) one question; then answers 1–2 questions about own talk | Plays the examiner/partner question prompts; records answers |
| 7 | Close | 0:20 | – | Examiner farewell; finalises the upload |

Notes typed during prep stay visible during speaking (official notes may be used [OFFICIAL S1 §3.2]). A reminder banner says "frei sprechen – nicht ablesen".

---

## 3. Simulated partner and examiner [OD-24]

| Approach | Description | Calibration suitability |
|---|---|---|
| **Scripted turn dialogue (proposal for Mock/Sets)** | Pre-recorded premium-voice partner turns tied to the 4 Leitpunkte (e.g. partner proposes for point 1, asks the learner's view on point 2, counter-proposes on point 3, asks for agreement on point 4, closes). Turns are written to be coherent **whatever the learner says** (open questions, proposals, generic acknowledgements). Learner turn windows 20–45 s with a visible turn indicator; "Weiter" ends a turn early | **High.** Identical stimulus for every learner |
| Live AI partner (ASR → LLM → TTS) | Real-time responsive partner | Low (non-deterministic); latency; premium-voice constraint (OS §23.5); cost. **Practice mode only, later** |

**Examiner role:** fixed recorded prompts (greeting, part transitions, Teil 3 question). Teil 3 questions about the learner's own talk are **generic but topic-aware** (selected from 3 pre-recorded variants per topic, assigned by topic choice), because a scripted system cannot react to content [DESIGN].

The official examiner moderation script (S3 p.45) is **not copied**. Klarweg writes its own moderation lines (originality rules).

---

## 4. Recording

| Aspect | Specification |
|---|---|
| Capture | `getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true}})`; `MediaRecorder` with `audio/webm;codecs=opus` (Chrome/Firefox/Edge) or `audio/mp4` (Safari); mono; target 32 kbps |
| Granularity | One recording **per learner turn** (intro, Teil 1 turns, Teil 2 continuous, Teil 3 turns) |
| Chunking | `timeslice = 5000 ms`. Chunks stored immediately in IndexedDB (`attempt/part/turn/seq`) and uploaded sequentially |
| Upload | `POST /exam/attempts/:id/sprechen/chunk?part&turn&seq` (raw bytes, `X-Chunk-SHA256`), idempotent by (attempt, part, turn, seq). The server writes R2 `attempts/<id>/speaking/<part>/<turn>/<seq>` and the D1 `recordings` row |
| Finalisation | `POST …/sprechen/turn-complete {part, turn, chunks, duration_ms}` → the server verifies the chunk set and hashes, builds the turn manifest. No transcoding needed (WebM/MP4 fragments concatenate per turn) |
| Limits | Teil 2 hard 4:30 of audio; whole module ≤ 20 min audio; ≤ 10 MB per attempt (32 kbps → ≈ 4 MB per 15 min) |
| Monitoring | Live level meter; silence detection (> 15 s silence in Teil 2 → a gentle visual hint, no audio interruption [DESIGN]) |

The table above is the design as decided. It is **not** a description of the current implementation; §4.1 lists the differences.

### 4.1 Implementation status and unresolved conflicts [REPO @ ef64371]

| Topic | This spec / decision register | Repository | Status |
|---|---|---|---|
| Chunk length | `timeslice = 5000 ms`; register **OD-09 LOCKED** ("5-s chunked upload") | `exam/js/recorder.js` `TurnRecorder.start()` calls `MediaRecorder.start(1000)` | **Conflict.** OD-09 stands. Aligning the code to OD-09, or amending OD-09, needs a separately authorised, evidence-backed change **[OPEN P-1]** |
| Capture settings | Capture row (constraints, mono, 32 kbps) | `getUserMedia({ audio: true })`; no `mimeType` and no `audioBitsPerSecond` passed to `MediaRecorder` | Mismatch; actual bitrate not measured |
| Routes | Upload and Finalisation rows use design-time names | Existing routes: `POST /exam/v1/attempts/:id/sprechen/consent`, `POST …/sprechen/chunks?lease_id&item_id&turn&seq&sha256` (raw bytes), `POST …/sprechen/turns {request_id, lease_id, item_id, turn, chunks, duration_ms}`, `GET …/sprechen/status` | These four are the only Sprechen routes. Routes in §4.2 do **not** exist |
| Phase check on upload | – | `uploadChunk` and `completeTurn` check lease, consent, module state and the upload window (`recordingWindow`), **not the speaking phase** | F4 gap; addressed by §4.2 |
| Turn-open record | – | None. `recording_turns.opened_at` is the arrival time of the first chunk | F4 gap; addressed by §4.2 |
| Repeated completion | – | `completeTurn` does not check whether a turn is already complete; a repeat with a new `request_id` rewrites `duration_ms` and `completed_at` | Defect; §4.2.5 proposes the rule |
| Local chunk key | `attempt/part/turn/seq` | `chunk:<item_id>:<turn>:<seq>`, without an attempt id | Mismatch; risk of mixing chunks across attempts or users on one browser. §4.2.4 proposes the key scope |
| Duration | `duration_ms` | Client wall-clock time between recorder start and stop (`recorder.js`). [PR #53] also estimates interrupted turns as `chunks × 1000` | Neither is decoded media duration; see §5.2 |
| Time multiplier | Engine spec, accommodations: "applied to module and phase durations" | `computeDeadline` (`speaking_phases`) multiplies the preparation only | **Conflict [OPEN P-18]** |
| Retention | §6: 90 days after the final rating | Register OD-21: 30 days after the final rating | **Unresolved discrepancy [OPEN P-20]**; neither text is changed here |
| Consent withdrawal | §6: deletion right | `consents.withdrawn_at` is checked, but no route sets it | **Unresolved requirement [OPEN P-19]** |
| Introduction | §1, §2: recorded, not rated | The level configuration has an unrated `intro` phase; the synthetic form has no intro item; nothing maps the intro phase to an item | **[OPEN P-6]** |

### 4.2 Recording grants — PROPOSED — NOT IMPLEMENTED

**Terminology.** A *recording grant* (proposed id prefix `rgr_`) is unrelated to the `exam_access` grants of OD-18 and must never share identifiers, tables or wording with them.

**Meaning.** A recording grant records that the server **authorised** one learner turn at `granted_at` (server time). It does **not** prove when the microphone captured audio, who spoke, that the speech is original, or that any score is valid. Client timestamps and device claims never authorise a recording.

#### 4.2.1 Proposed routes and fields

| Route (proposed) | Request | Response |
|---|---|---|
| `POST /exam/v1/attempts/:id/sprechen/turns/open` | Required: `request_id`, `lease_id`, `item_id`, `turn`. Optional **device claims**: `client_elapsed_ms`, `client_offline_ms`, `declared_chunks` | `rgr_id`, `item_id`, `part`, `turn`, `phase_id`, `state`, `kind` (`live` \| `late`), `granted_at`, `capture_window_ends_at`, `upload_deadline_at`, `max_chunks`, `flags[]`, `server_now`, `replayed` |
| `POST …/sprechen/turns/stop` | `request_id`, `lease_id`, `rgr_id`, optional `declared_chunks`, `reason` | the recording grant and `server_now` |
| Existing `chunks`, `turns`, `status` | gain an optional `rgr_id` (required only under `enforce`, §10) | `status` gains `recording_grants[]` |

- `capture_window_ends_at` bounds the **capture**. `upload_deadline_at` is the end of the upload window, proposed as `deadline_at + upload_grace_seconds * 1000` (milliseconds), with uploads accepted while `t ≤ upload_deadline_at` (§4.2.10, which also describes the current code's two formulas). They are different and must not be merged.
- `part` and the phase are always derived by the server from the item; the client never supplies them.
- Device claims are stored and labelled as claims. They are never evidence of capture time.
- **Unresolved fields:** the `max_chunks` formula and constants **[OPEN P-1, P-14]**, so until approved it is computed and logged but never enforced; the rule that sets `kind` **[OPEN P-7]**; the `reason` values (subject to schema review).

#### 4.2.2 Server checks for a live open [PROPOSED]

In the existing order (user → attempt ownership → request id → lease → module state → server time):
1. The attempt belongs to the user and is not voided; the `lease_id` is the current, unexpired lease.
2. Module `sprechen` is `running` and server time ≤ deadline + save grace.
3. Recording consent is active.
4. The item is a `spoken_response` of the attempt's form, and the turn exists in it.
5. The phase bound to the item's part (§4.2.3) is running in **server time**: `phase_start ≤ now < phase_end − MIN_OPEN_MS` **[OPEN P-14]**. The schedule is computed on the server from the release plan.
6. The turn has no complete evidence, and no other recording grant is active within the invariant's scope (§4.2.6).

**Dependency on P-18.** Check 5 needs one authoritative rule for how the time multiplier changes phase boundaries. Today the engine spec says the multiplier applies to module and phase durations, while the code multiplies only the preparation (§4.1). This draft does not choose between them **[OPEN P-18]**. Until P-18 is decided, and the engine spec, this spec, the deadline calculation and the client schedule all state the same rule:
- phase-boundary checking is **not implementation-ready**;
- no phase-boundary refusal may be enforced;
- observe-mode results for attempts with a multiplier other than 1.0 cannot be interpreted.

#### 4.2.3 Phase binding [PROPOSED]

Today only the client maps phases to parts (`teil<N>` → part N) [PR #53]; the server has no mapping. Proposed: an explicit, validated binding between speaking phases and parts in the level configuration. The validator would reject a spoken-response part without exactly one bound phase, and a turn id repeated within a part. The representation is subject to schema review. Whether `teil<N>` stays as a fallback, and how the intro is bound, are **[OPEN P-6]**.

#### 4.2.4 Three separate lifecycles [PROPOSED]

| Lifecycle | States | Owner of the state |
|---|---|---|
| Recording grant | `open` (active) → `closed` with a `close_reason`: `stopped`, `capture_window_elapsed`, `lease_changed`, `module_closed`, `consent_withdrawn` [P-19] | Server |
| Turn evidence | `none` → `partial` → `complete`, or `incomplete` (terminal; set by the finalization step in §4.2.10 once `t > upload_deadline_at` — **not implemented**) | Server |
| Chunk | `local` (browser only) → `accepted` or `refused(code)` | Client holds; server decides |
| Submission (existing) | module `running → submitting → submitted`; attempt `in_progress → completed` | Server |

Rules that keep these consistent:
- **Closed means no new capture, not no upload.** Chunks for a closed recording grant are still accepted until `upload_deadline_at`, within the existing checks.
- **Lease changes.** Each recording grant stores the lease generation under which it was opened. How leases work today [REPO @ ef64371]:
  - Every lease issue, including re-acquisition after plain expiry, creates a new `lease_id` and increments the generation.
  - The server audits `lease_reacquired` when the previous lease had already expired, and `lease_takeover` (plus an incident) when it was still valid. That distinction rests on server time.
  - The recorded "same device" detail rests on a client-supplied device id, so it is a device claim, not proof.
  - All uploads already require the current, unexpired `lease_id`, so a superseded or expired client cannot upload.

  Proposed:
  - When the current generation is higher than the grant's, an `open` grant is closed by the server (`lease_changed`). It may not be used for further capture. The close reason keeps `lease_reacquired` and `lease_takeover` apart.
  - **Buffered-chunk recovery.** Chunks for a grant closed this way remain uploadable under the normal rules (seq below `max_chunks` once enforced, §4.2.1 and §4.2.8; upload window; consent), but **only** with the current lease. A client whose lease was taken over by another tab or device cannot capture or upload until the learner explicitly takes the lease back. The learner's takeover is itself audited and an incident. Taking the lease back closes any grant opened under the other holder's generation.
  - **Plain expiry during capture.** A device whose lease expired (for example offline for longer than the lease lifetime) cannot tell when the server closed its grant. It may therefore have captured audio after the closure. The server cannot distinguish those chunks by time. Two policies are possible: such grants carry a `lease_interrupted` evidence flag, or a grant closed by plain expiry may be resumed by the same attempt. This is **[OPEN P-22]**, not decided here.
- **Late recording grants** (§5.1) are normally created already `closed` and never occupy the active slot. Whether a late request that arrives while the phase is still running may create an `open` grant: **[OPEN P-7]**. Late recording grants after module submission follow §4.2.10 (P-8, owner-selected option C1, pending formal approval).
- **Re-recording.** Until **[OPEN P-3]** is decided, there is one recording grant per (attempt, item, turn). A repeated open returns the existing grant, and a closed empty grant is not reopened.
- **Declared chunk count is optional.** If declared (stop or late open), completion must match it. If never declared, completion needs contiguous `0..n-1` with `n ≤ max_chunks` (once enforced), and the evidence records that the count was not declared. Loss of trailing chunks is then undetectable, and this must be shown (§5.3).
- **Evidence after module submission.** Current behaviour [REPO @ ef64371]:
  - After the Sprechen module is submitted, and **while the attempt is not completed**, the server still accepts chunks and completions inside the upload window (`recordingWindow`), with the current lease. It accepts them for **any** valid item and turn and creates the turn row on the first chunk, so it does not distinguish evidence for earlier turns from new evidence.
  - Completing the attempt deletes the attempt lease, and `lease` refuses completed attempts. From then on **no** upload can succeed.
  - Nothing marks evidence `incomplete`: turn rows can only be `open` or `complete`, and the scheduled sweep only processes modules that are running past their deadline or still being submitted.
  - Client-side re-sending after module submission is not implemented in [PR #53].

  Proposed (owner-selected P-4 option A-bounded and P-8 option C1, **pending formal approval**): §4.2.10. Recovery after attempt completion remains out of scope; no upload is possible after completion.
- **Local storage keys** are scoped to attempt + recording grant + seq. Local storage only helps recovery; it is never acceptance.

#### 4.2.5 Idempotency, retries, duplicates [PROPOSED]

- `request_id` is unique per attempt (`request_log` primary key). The existing helper runs the operation **before** recording the request, so two concurrent identical requests both execute, and a refusal is not recorded [REPO @ ef64371]. Creating a recording grant must therefore be idempotent on its own, by uniqueness on (attempt, item, turn).
- **Lost response.** Retrying with the same `request_id` replays the stored response, which can be stale. The client re-reads `status` before acting on it.
- A new `request_id` for the same turn returns the existing recording grant. `granted_at`, `capture_window_ends_at`, `upload_deadline_at` and `max_chunks` are fixed at first issue and never extended.
- **Stop:** identical values replay; a different `declared_chunks` is refused (409). **Completion:** identical values replay; different values are refused (409) and never overwrite.
- **Chunks** keep the existing rule: same seq and sha256 → `duplicate`; same seq with different bytes → `chunk_conflict`. Today the object is written to storage before the database row [REPO @ ef64371], so concurrent conflicting uploads can leave stored bytes that differ from the recorded hash. The write ordering needs implementation review.
- Gaps block completion. Out-of-order arrival is accepted. Missing chunks are never filled.

#### 4.2.6 Concurrency invariant [PROPOSED]

**At most one `open` recording grant per scope.** The scope (per attempt or per user) is **[OPEN P-17]**.

Required guarantees, without prescribing the mechanism:
1. Uniqueness is enforced by the database at write time, not by read-then-write and not by the client. The schema already uses a partial unique index elsewhere (`idx_attempts_one_open`), so one is a candidate for a per-attempt scope. A per-user scope cannot be enforced by an attempt-keyed constraint alone.
2. Closing stale open grants (capture window elapsed, or lease generation no longer current) and creating the next one happen atomically.
3. Every Worker instance makes this decision against the same serialised write path, with no stale read.

**Stale versus valid active grants.**
- A grant whose `capture_window_ends_at` has passed, or whose lease generation is no longer current, is **stale**. The server closes it (`capture_window_elapsed` / `lease_changed`) in the same atomic step that evaluates a new open (guarantee 2). Clients never close stale grants, and a stale grant never produces `recording_grant_active`.
- A grant that is still within its capture window under the current lease generation is **valid**. The server ends it on schedule or on a lease change. Otherwise it ends only through `turns/stop`, which the server accepts only when all of these hold: the request presents the current lease and the `rgr_id`, and the grant belongs to that lease holder's attempt.
- **Client behaviour on `recording_grant_active`:** re-read `status`. If the blocking grant is the client's own previous turn and that turn's capture has already ended locally (for example a lost stop response), it sends `turns/stop` for that `rgr_id`. Otherwise it **does not stop** the blocking grant, because it may be a recording still in progress.
- With a per-attempt scope only the single lease holder can hold a valid grant, so the conflict can only come from the same client's own state. With a per-user scope (P-17) the blocking grant may belong to another attempt and must never be stopped from this one. What the blocked turn does then (skip it, or capture locally and request a late grant under §5.1) is **[OPEN P-21]**.

**Not yet verified:** whether D1 batch atomicity and write serialisation hold for this path under concurrent Worker instances (the test harness uses in-process SQLite and cannot show it). A uniqueness constraint alone is not proof of concurrency correctness. Client-side locks (for example between tabs) only reduce local races and are **not** a security boundary.

#### 4.2.7 Proposed refusals

| Code | Meaning | Client action |
|---|---|---|
| `recording_grant_active` (+ the blocking grant's `rgr_id`, `item_id`, `turn`, `capture_window_ends_at`, `server_now`) | a **valid** recording grant is open in scope; stale grants never cause this refusal (§4.2.6) | re-read `status`; never stop a grant blindly (§4.2.6) |
| `phase_not_open` (+ `phase_start_at`) | early by server time | retry at `phase_start_at` |
| `phase_closed` | live open too late | no capture → skip the turn; capture already running → §5.1 |
| `turn_closed` | evidence already complete | stop; keep local chunks |
| `upload_window_closed` | after `upload_deadline_at` (existing code) | no retry; incident |
| `lease_expired` / `lease_superseded` | existing codes | expired: re-acquire without takeover, then re-read `status` (open grants of the old generation are closed, §4.2.4) / superseded: stop capture, release the microphone, keep buffered chunks, offer an explicit takeover |
| `recording_grant_required`, `recording_grant_mismatch`, `seq_beyond_cap` | under `enforce` only; `seq_beyond_cap` only once P-1 and P-14 are approved | no retry; keep the chunk; incident |

Network failures, 5xx and 429 are retried with backoff (parameters **[OPEN P-14]**).

#### 4.2.8 Thresholds — none approved (F4-D3)

The candidate values, `MIN_OPEN_MS`, `STOP_TOLERANCE_MS`, chunk slack, open-retry backoff, an open-request rate limit, a per-grant byte cap **[OPEN P-15]** and a late-classification threshold **[OPEN P-7]**, are **not** constants of this specification **[OPEN P-14]**. The client's existing 1000 ms minimum turn window is current behaviour [PR #53], not an approved server threshold.

Evidence required before any value is approved:
- measured MediaRecorder chunk counts and sizes per browser for turns of about 1–270 s;
- stop-time lag in foreground tabs, background tabs and tabs hidden for a long time;
- client-to-server clock-offset error;
- bitrate per browser;
- request counts in `observe` mode (§10).

Each value needs boundary tests just below, exactly at and just above it, plus concurrent duplicate opens, delayed responses after a phase change, reconnection near `capture_window_ends_at`, expiry with queued chunks, the rate limit across a window boundary, an exact byte cap, clock skew, and long background suspension.

#### 4.2.9 Migration and compatibility [PROPOSED]

Additive only. Older clients keep working under `off` and `observe`; `enforce` requires the updated client to be served first (§10).

**Where mode and provenance are stored.** This is a conceptual design; names, types and indexes are subject to schema review.

| Store | Contents | Written when |
|---|---|---|
| Recording-grant row (new) | `rgr_id`, attempt, item, part, turn, phase, `kind`, `granted_at`, windows, `lease_generation`, state and `close_reason`, the **effective enforcement mode at issue** | A grant is created, which happens only under `observe` or `enforce` |
| Chunk and turn rows (existing tables, new nullable columns) | `rgr_id` (or NULL), **effective enforcement mode at write**, authorisation provenance (`live`, `late`, or `none`), duration provenance on turns (§5.2) | Each accepted chunk or completion written after the migration |
| Recording-grant event rows (new) | One row per failed check: the code, the target (open, stop, chunk or completion), ids, server time, the mode | Under `observe`, a `would_refuse` for a request that was still processed. Under `enforce`, a refusal; no chunk or turn row is written, because nothing was accepted |
| `incidents` (existing) | A summary incident per event kind (§5.3) | As for event rows |

Consequences:
- Rows written **before the migration** have no mode and no grant; they are shown as "recorded before recording grants".
- Under **`off`** after the migration, **no recording-grant row exists**. Chunk and turn rows record mode `off`, `rgr_id` NULL and provenance `none`. The only exception is a chunk that names a grant created earlier under another mode. It stores that `rgr_id` and the grant's provenance, with mode `off`, which shows that no check was applied to it.
- A **`would_refuse`** is never a property of the grant alone. It is an event linked to the chunk, turn or grant it concerns, so the accepted row and the reason it would have been refused can both be shown.
- The effective mode is recorded as the value the server applied, whatever mechanism supplies it **[OPEN P-13]**.

#### 4.2.10 Upload deadline, completion gate and evidence finalization [PROPOSED — owner-selected P-4 A-bounded and P-8 C1, pending formal approval; NOT IMPLEMENTED]

**Effective upload deadline.** Current code [REPO @ ef64371]: a running module accepts uploads while `t ≤ deadline_at + SAVE_GRACE_MS + upload_grace_seconds * 1000`, and a submitting or submitted module while `t ≤ deadline_at + upload_grace_seconds * 1000`. Every lease-checked request first auto-submits a module that is past `deadline_at + SAVE_GRACE_MS`, so the longer limit cannot be reached in practice. The B1 level configuration sets `upload_grace_seconds` to 600. Proposed single definition for every F4 path, in milliseconds: `upload_deadline_at = deadline_at + upload_grace_seconds * 1000` (600 s for B1), with uploads accepted while `t ≤ upload_deadline_at`. `deadline_at` is the module deadline fixed at module start; for attempts with a time multiplier other than 1.0 it depends on **[OPEN P-18]**.

| Server time `t` | Chunk upload, turn completion, late grant (C1) | Evidence finalization | Attempt completion |
|---|---|---|---|
| `t < upload_deadline_at` | Accepted (other checks permitting) | Not run | Refused while evidence is pending |
| `t = upload_deadline_at` | Accepted | Not run | Refused while evidence is pending |
| `t > upload_deadline_at` | Refused (`upload_window_closed`) | Must run before any completion decision | Allowed once no evidence is pending |

No new numerical value is introduced; the boundary is the existing `upload_grace_seconds`.

**Eligibility time.** For a chunk upload, deadline eligibility is decided by the server time at which the request is admitted, which is when its reservation is recorded (below). It does not depend on when the storage write or the database commit finishes. For turn completion and late-grant creation, it is the server time of the atomic step that writes them.

**P-8 option C1: late recording grant after module submission.** A `turns/open` request after the Sprechen module has been submitted is accepted only when all of these server-observed conditions hold:
1. the module's server-recorded `submit_kind` is `auto_deadline` and its status is `submitted` (while it is still `submitting`, the request is refused as retryable, following the existing `finalization_pending` pattern); `manual` and `admin` submissions never qualify;
2. the attempt is `in_progress`;
3. `t ≤ upload_deadline_at`;
4. the lease, consent and item/turn checks of §4.2.2 pass, and the turn has no other recording grant (P-3).

The grant is created `closed`, with `kind: late`, the flag `after_submission` and the module's `submit_kind`. It has **no capture window**, so it never authorises capture after it is issued. It registers evidence that may already exist on the device.

**Expected count and safety cap.** `declared_chunks` is a client-reported expected count, a device claim. `max_chunks` is the separate server-side safety cap of §4.2.1 and §4.2.8; its values remain **[OPEN P-14]**, and a per-grant byte cap remains **[OPEN P-15]**. A declared count is never used as the cap and never proves what was captured. Under §4.2.5 a completion that disagrees with a declared count is refused; that check concerns the consistency of the client's own requests, not capture integrity. **Additional proposal [OPEN P-24], which needs explicit owner approval:** require `declared_chunks` on a post-submission late grant, so the expected size is fixed when the evidence is registered. Without P-24, such a grant completes under the general rule of §4.2.4 (contiguous `0..n-1`, count not declared, loss of trailing chunks undetectable).

**Limitation, not resolved by C1.** The server records `auto_deadline` whenever a module passes its deadline, whether or not the learner was online: any request after `deadline_at + SAVE_GRACE_MS`, or the scheduled sweep, auto-submits it. C1 therefore excludes only learners who submitted manually; it does **not** identify offline learners. It cannot stop a modified client from capturing new audio after the automatic submission and registering it as late evidence. A late grant records when the server received the registration. It is never evidence of offline recording, capture time, speaker identity or originality, and must not be described as verified offline recovery.

**P-4 option A-bounded: completion gate.** Evidence is **pending** when the server knows of it and it is neither `complete` nor terminally `incomplete`:

| Case | Server-visible | Blocks completion while `t ≤ upload_deadline_at` | At finalization (`t > upload_deadline_at`) |
|---|---|---|---|
| Open recording grant, zero chunks | Yes (grant row) | Cannot normally occur: completion needs the module submitted, and submission closes open grants (`module_closed`, §4.2.4). If found, it blocks | Grant closed; evidence `incomplete`, "no audio received" |
| Closed (stopped or expired) recording grant, zero chunks | Yes (grant row) | Yes: chunks may still be on the device | Evidence `incomplete`, "no audio received" |
| Chunks with a sequence gap | Yes | Yes | Evidence `incomplete`; the received seqs and the gap are recorded |
| Contiguous chunks, turn completion not received | Yes | Yes | Evidence `incomplete` |
| Closed recording grant (`stopped`, `capture_window_elapsed`, `lease_changed`) with partial chunks | Yes | Yes | As for a gap |
| Late grant registered under C1 | Yes | Yes | According to its chunk state |
| In-flight upload reservation, admitted but not yet `committed` or `failed` | Yes (reservation row) | Yes | Not finalized until the reservation is resolved |
| Audio only in the browser, no grant and no chunk | **No** | **Cannot block.** A client-reported queue is advisory only | Nothing to finalize |

**No automatic promotion to `complete`.** Evidence becomes `complete` only through a successful turn-completion request that passes the checks of §4.2.5. Finalization never promotes evidence to `complete`, whether on the basis of contiguous chunks or of a client-declared count.

Completion is refused (proposed code `recording_evidence_pending`, listing the pending turns) while any pending evidence exists and `t ≤ upload_deadline_at`. After `upload_deadline_at`, all pending evidence must first be finalized; completion is then allowed. Completion never makes a later upload possible.

**Empty grants and P-3.** An empty grant blocks completion only because chunks may still arrive; at finalization it becomes `incomplete` with no audio. Whether an empty closed grant may instead be re-recorded before the deadline is **[OPEN P-3]**. Until that is decided, an empty closed grant is not reopened (§4.2.4); finalization does not depend on the answer.

**Evidence finalization: this does not exist today.** Turn rows can only be `open` or `complete`, no code path marks evidence `incomplete`, and the scheduled sweep only selects modules that are running past their deadline or still being submitted [REPO @ ef64371]. Proposed:
- a terminal state `incomplete` with a reason, set by an idempotent conditional update that changes only evidence that is not yet terminal, only when `t > upload_deadline_at`, and only when no eligible upload reservation for that evidence is unresolved;
- it runs lazily on every request path that reads or decides on evidence (status, attempt completion, the rater view, result building), and through a **new** scheduled-sweep query for attempts with non-terminal evidence past their deadline;
- retries are safe because the update is idempotent; the sweep processes bounded batches.

**In-flight upload reservations [REQUIRED — not implemented].** Today `uploadChunk` checks the upload window (`recordingWindow`, `exam-worker/src/api.js:518`). It then writes the object to R2 under a deterministic key (`api.js:545–546`), and only afterwards inserts the D1 chunk row (`api.js:549–556`) [REPO @ ef64371]. A request that passes the check just before the deadline can therefore still be writing to R2 when the deadline passes, and nothing records that it was admitted. Required:
- Before any storage I/O, the server records a durable reservation for the chunk in one atomic database step. The reservation holds the attempt, item, turn, seq, the unique staging object key, the declared hash and size, and the server admission time `t_admit`. The step succeeds only if the attempt is `in_progress`, the grant checks pass (including the cap, once enforced), and `t_admit ≤ upload_deadline_at`. A request admitted at exactly `upload_deadline_at` is eligible.
- An admitted reservation is not refused merely because the deadline passes while its storage write is in progress. It ends in exactly one terminal state: `committed` (the chunk row is written and references its object) or `failed` (the write or commit did not happen, and the outcome is reconciled as below).
- Attempt completion treats an unresolved reservation as pending evidence. Finalization does not mark evidence terminal while an eligible reservation for it is unresolved.
- A crashed or abandoned reservation must not block completion forever. It must reach `failed` through reconciliation. Reconciliation checks whether the exact staging object exists with the reserved hash, and whether a committed row references it, and resolves the reservation accordingly. Deciding that a reservation is abandoned, rather than still in progress, needs a bound after which a still-unresolved reservation is reconciled. If the bound is too short, a write that is still in progress could be failed and its evidence lost. That bound is a numerical value that has not been approved **[OPEN P-14]**. A platform limit on request duration could provide evidence for it, but none has been verified here. **Implementation cannot start until this bound is settled by an owner decision or by evidence.**

**R2/D1 object consistency [REQUIRED — not implemented].** R2 and D1 are separate systems. A storage write and a database commit are two separate steps; they are **not** one atomic transaction. Today the object key is deterministic (`rec/<attempt>/p<part>/<turn>/<seq>`) and the object is written before the D1 decision, so a later or concurrent write to the same key can replace bytes that a committed row already describes [REPO @ ef64371]. Required:
- every upload request writes to its own immutable, unique staging object key (the key recorded in its reservation), or uses another design verified to be equally safe; no request ever writes to a shared deterministic key before the D1 acceptance decision;
- the committed D1 chunk row records the exact object key and the hash that were accepted;
- cleanup never deletes, replaces or alters an object referenced by a valid committed chunk row;
- an unreferenced staging object is removed only after reconciliation confirms that no committed row references that exact key. When the outcome is ambiguous (for example, a reservation whose commit result is unknown), it is reconciled first, not deleted.

The reservation before storage I/O and the reconciliation after it together close the gap between the two steps. Every admitted upload is either committed with its exact object, or explicitly failed and cleaned up, and no committed evidence can be overwritten. This is a requirement for future implementation review; it has not been built or tested.

**Race between acceptance and completion.** Reservation creation, turn completion and late-grant creation must each be conditional, in the same atomic database step as their write, on the attempt still being `in_progress` and on their eligibility time being `≤ upload_deadline_at`. Committing an admitted reservation is not re-checked against the deadline. It is still conditional on the reservation not having been failed by reconciliation; if it was, the late commit is refused and reconciled. Finalization is conditional on `t > upload_deadline_at` and on no unresolved eligible reservation. Attempt completion must, in one atomic step, finalize expired evidence, confirm that no pending evidence or unresolved reservation remains, and set the attempt `completed`. These are required guarantees. The mechanism needs implementation review, and whether D1 provides them under concurrent Worker instances is **not yet verified** (§4.2.6).

**Schema prerequisites.** Turn rows allow only `open` and `complete` [REPO @ ef64371], so `incomplete` needs a migration (a changed constraint, or a separate evidence-state column or table, subject to schema review). A grant with zero chunks has no turn row, so its evidence state must be held on the recording-grant row, or a turn row must be created together with the grant. Closing open grants at module submission (`module_closed`) is likewise a requirement, not existing behaviour. Upload reservations need durable storage of their own. Chunk rows already store `r2_key` and `sha256`; with unique staging keys, the key they record changes format.

**Modes: evidence safety versus grant enforcement [OPEN P-23].** The `off`/`observe`/`enforce` modes of §10 govern recording-grant and phase checks. The completion gate and finalization protect evidence the server already holds. If they followed the modes:

| Mode | Grant and phase checks | Completion gate if it follows the mode | Completion gate if it is independent of the mode |
|---|---|---|---|
| `off` | None; no grant rows | Not applied: completion deletes the lease while server-visible turns are still partial, stranding buffered chunks. **Violates A-bounded** | Applied to server-visible turn evidence (no grant rows exist) |
| `observe` | Run; failures logged as `would_refuse` | Logged only: completion still ends uploads. **Violates A-bounded** | Applied |
| `enforce` | Run; failures refused | Applied | Applied |

**Recommendation — NOT APPROVED:** keep evidence-lifecycle safety (the completion gate and finalization) independent of the modes, and let the modes govern only recording-grant and phase checks. Whether the gate needs its own rollout control, and how it applies to attempts already in progress when it is introduced, remain part of P-23.

**Implementation readiness.** Not implementation-ready until all of these are done: formal approval of P-4 and P-8; P-23; P-24 if C1 is to require a declared count; schema review of the evidence state and of upload reservations; a reviewed design for upload reservations and R2/D1 reconciliation; the reservation abandonment bound **[OPEN P-14]**; verification of the atomicity requirements on D1 (§4.2.6); and, for multipliers other than 1.0, P-18. The `max_chunks` values and any byte cap remain open (P-14, P-15).

## 5. Interruption recovery

| Event | Behaviour |
|---|---|
| Network loss | Recording continues; chunks queue in IndexedDB; upload resumes; the turn completes when all chunks are acknowledged. With recording grants [PROPOSED]: §5.1 |
| Mic permission revoked / device lost | Pause the phase clock **once** (≤ 60 s) to reconnect the mic; then continue. If it fails again: incident, part marked `unratable_technical`, offer a re-take of **that part only** in a new attempt slot (OD-33) |
| Refresh / crash during prep | Resume prep with the remaining server time (notes restored from local + server autosave) |
| Refresh / crash mid-part | Chunks already uploaded are kept; the part resumes at the next turn with the remaining part time; incident logged. With recording grants [PROPOSED]: the reloaded client stops the open recording grant (`reason: interrupted`), re-sends buffered chunks, and requests completion only for contiguous `0..n-1`; a gap is never filled; the duration is marked as estimated (§5.2) |
| Tab hidden during recording | Recording continues (desktop). iOS background suspension → incident handling as above |
| Upload incomplete at module end | Up to 10 min background upload window ("Bitte Seite geöffnet lassen"); after that, missing chunks are an incident. With recording grants [PROPOSED]: evidence still pending once `t > upload_deadline_at` is finalized as `incomplete` by the finalization step in §4.2.10, which does not exist today |
| Lease expiry / takeover [PROPOSED] | A new lease generation closes grants opened under the old one (`lease_changed`, §4.2.4). Buffered chunks for them may be uploaded only with the current lease. After a takeover the superseded tab stops capture, releases the microphone and keeps its chunks; it can upload them only after an explicit takeover back. How chunks captured after a plain expiry are treated: **[OPEN P-22]** |
| Consent withdrawal | No route exists today **[OPEN P-19]**. Its effect on open recording grants, buffered chunks and stored audio must be decided together with OD-21 retention |
| Submit with uploads pending [PROPOSED] | The submit dialog states that recordings are still uploading. While the attempt is not completed, the server already accepts uploads inside the upload window [REPO @ ef64371]. Re-sending by the client after module submission is not implemented. Proposed (owner-selected, pending formal approval): attempt completion is refused while server-visible evidence is pending, until `t > upload_deadline_at` and that evidence is finalized (P-4 A-bounded); late grants after an automatic submission only (P-8 C1); see §4.2.10 |

The phase clock is server-authoritative (engine spec §3). Interruption pauses are the only exception, capped and logged.

### 5.1 Offline recording and late recording grants [PROPOSED — owner direction F4-D2]

If the open request cannot reach the server, capture may still follow the client's copy of the server schedule and is stored locally. After reconnection, inside `upload_deadline_at`, the client sends `turns/open` with its device claims. The server records **when it received the request** and whether the bound phase was still running then. For attempts with a time multiplier, the phase boundaries depend on **[OPEN P-18]**. A late recording grant **never** establishes when, or whether inside the phase, the audio was captured.

These five facts are independent and are recorded and shown separately:

| Fact | Established by | Not implied by it |
|---|---|---|
| Captured locally | The client only | Authorisation, acceptance |
| Authorised (`live` or `late`) | A server recording grant | Capture time, originality |
| Chunks accepted | Server checks per chunk | Complete evidence |
| Evidence complete / incomplete | Server, from contiguous `0..n-1` | Ratability, valid score |
| Submission | Module / attempt state (existing) | Complete evidence |

Open policy: whether timing alone can refuse a late recording grant inside the upload window **[OPEN P-2]**; how `late` is classified, including any threshold **[OPEN P-7]**; late recording grants after module submission: owner-selected option C1, pending formal approval (§4.2.10); how long refused audio is kept in the browser, and how it is deleted **[OPEN P-9]**; how incomplete evidence is rated **[OPEN P-5]**; whether turns must be recorded in order **[OPEN P-10]**.

**Risk.** Retrospective authorisation lets a client claim to have been offline and capture outside the phase. If timing is not a refusal reason (P-2), late recording grants **detect and label** this but do not prevent it. If it is a refusal reason, less audio is accepted than §5 "Network loss" promises today. That trade-off is P-2.

### 5.2 Duration provenance (F7) [PROPOSED; scope OPEN P-11]

A duration that was not decoded from the media must not be stored or shown as if it were measured. Each completed turn carries a duration-provenance value; the exact names are subject to schema review. At minimum:
- `client_wallclock`: the client's recorder start-to-stop time (current behaviour);
- `chunk_estimate`: derived from the chunk count and the nominal chunk length [PR #53 for interrupted turns], always with the incident `recording_interrupted`.

A `decoded_media` value may be added only after a validated measuring path exists. The existing `exam-content/tools/audio-duration.mjs` is a build-time tool that the Worker does not use. It rejects WebM with unknown-size clusters or laced blocks and rejects fragmented MP4. It must not be assumed to measure MediaRecorder recordings until it has been tested against real recordings per browser.

Whether this belongs in the F4 change or a separate follow-up is **[OPEN P-11]**. The scoring engine and reviewer interface are not changed here.

### 5.3 Incidents and reviewer-visible uncertainty [PROPOSED]

Proposed incident kinds: `recording_grant_late`, `recording_grant_refused`, `recording_grant_would_refuse` (observe mode), `recording_interrupted`, `recording_incomplete`, `recording_grant_closed_by_lease_change`. Details are limited to ids, seq numbers, refusal codes, server times, the lease generation, the enforcement mode and labelled device claims. They contain no audio, transcript, IP address or user-agent string.

Raters see per turn:
- the authorisation kind, or "recorded before recording grants";
- "capture time: device claim, not verified" for late recording grants;
- the duration provenance;
- whether the chunk count was declared;
- gaps as gaps.

A missing or incomplete turn is shown as a technical incident, never as "the learner did not speak".

### 5.4 Topic-choice grace (F8) — OPEN P-12

[PR #53] accepts a Teil 2 topic change until the end of preparation + 10 s (the general save grace), which falls inside the introduction. The client shows the choice as locked at the end of preparation. Alternatives include: keep the grace as tolerance for saves already in flight; shorten it; accept only saves whose client timestamp precedes the end of preparation (a device claim); remove it. None is decided **[OPEN P-12]**. Tests needed: saves at end − 1 ms, end, end + 10 000 ms and end + 10 001 ms, for each time multiplier.

## 6. Consent, storage, retention [OD-09, OD-21]
- **Consent** before the device check: purpose (rating + feedback), raters (Klarweg teachers), AI processing (transcription and pre-rating by sub-processor OpenAI via the Tutor Worker), retention period, and the deletion right. Versioned in `consents`.
- **No consent → no recording**, and Sprechen is not available.
- **Storage:** private R2 `klarweg-exam-recordings`; no public URLs; raters stream via signed, rater-bound URLs (TTL 10 min).
- **Retention proposal:** recordings deleted 90 days after the final rating (or on learner request). Transcripts and ratings are kept with the result. Pilot recordings are kept longer **only** with a separate research consent.
  - *Note (2026-10-11):* register OD-21 states 30 days. The discrepancy is unresolved **[OPEN P-20]**; this bullet is left unchanged on purpose.
- **Consent withdrawal:** no withdrawal route exists yet **[OPEN P-19]** (§4.1). Recording grants do not resolve consent, privacy, retention or access-control requirements.
- Learners may replay their own recordings in review until deletion.

## 7. Evaluation pipeline

```
turn manifests ─► transcription (Tutor: transcribe_long, per turn ≤ 60 s chunks → joined, word timestamps if available)
             ─► AI pre-rating (Tutor: rate_speaking_b1; rubric JSON per criterion EXCEPT Aussprache; evidence quotes + timestamps; flags)
             ─► rating tasks: Teacher R1, Teacher R2 (blind, independent; audio + transcript + slides + notes; rubric UI)
             ─► aggregation (mean, ≤ .49 down / ≥ .5 up [OFFICIAL S1 §5]) ─► module score ─► result
```

- **AI scope:** Erfüllung (slide coverage, function presence), Interaktion (turn count, responses to the partner's proposals), Wortschatz/Strukturen (range and control estimates). **Never Aussprache** (a transcript cannot carry it). Advisory only.
- **Teacher console:**
  - audio player with turn markers and slide markers
  - transcript side by side (marked "maschinell, kann Fehler enthalten")
  - rubric bands with official point values
  - a mandatory evidence note for bands D/E
  - an "unratable" flag
  - time-on-task logging
- **Teil 2 Erfüllung band helper [OFFICIAL S3 p.46]:** A = all 5 slides adequately covered; B = 3–4; C = 2 or all too brief; D = 1. Slide-change timestamps assist raters.
- **Result calculation:** scoring spec §4.1.

## 8. Reuse vs rebuild (current Record & Check pipeline)

| Current component [REPO] | Exam decision |
|---|---|
| `/speech/status`, `/speech/transcribe`, `/speech/task-check` routes | **Do not reuse.** Chapter-scoped (`speech-tasks.js`), 30 s / 1 MiB caps, 3 checks per day; changing them risks production |
| `SPEECH_*` env limits and `ai_usage` speech counters | **Do not reuse.** Separate exam budget counters in exam D1 (same accounting pattern) |
| "No audio or transcript stored" policy | **Not applicable.** The exam must store recordings (consented); separate bucket and policy |
| Deterministic Word Match scorer (`chapter-app.js`, `score_reference.py`) | **Not applicable** (sentence matching ≠ rubric rating) |
| Tutor `transcribe.js` (OpenAI `gpt-transcribe` client, key isolation, no-logging discipline) | **Reuse the client code and pattern; extend** with a new `/v1/transcribe-long` route (turn-chunked, larger limits, exam-only binding) |
| Tutor provider abstraction, prompt/guard patterns, cost accounting | **Reuse; add** actions `rate_speaking_b1`, `rate_writing_b1` with strict JSON rubric schemas |
| Tutor `check_speaking` chapter action | **Do not reuse** (chapter registry, free feedback) |
| Browser MediaRecorder capture knowledge in `chapter-app.js` | **Re-implement** in the exam module (no import from the chapter engine) using the same proven MIME fallbacks |
| `speech/` faster-whisper local server | Not used (not deployed). It could become an optional self-hosted transcription backend later |

## 9. Blockers
- OD-09 (capture architecture, retention, consent text)
- OD-13 (rater staffing)
- OD-24/OD-32 (partner model, Teil 3 construct)
- Premium partner/examiner voice production (audio spec B3, OD-14)
- Legal review of voice-data processing (an OpenAI sub-processor for transcription)
- F4 recording grants: owner decisions in §11, D3 evidence (§4.2.8) and verification of the database guarantees (§4.2.6). No implementation is authorised by this draft

## 10. Rollout and rollback of recording grants [PROPOSED — mechanism OPEN P-13]

**Modes.**
- `off`: current behaviour; no recording-grant checks.
- `observe`: every check runs; a failing check writes `recording_grant_would_refuse` and the request continues as under `off`.
- `enforce`: failing checks are refused.

**Rules for every mode.**
- Changing the mode never deletes recording grants, chunks or buffered audio.
- Every recording grant, and every chunk and turn row written after the migration, records the effective mode. `would_refuse` and refusals are stored as linked event rows, and under `off` no grant row exists (storage table in §4.2.9).
- **Switching enforcement off does not make earlier questionable evidence valid**, and no mode change upgrades an evidence status or a provenance label.
- `enforce` requires the updated client to be served first.

| Aspect | Option A: Worker variable `off \| observe \| enforce` | Option B: versioned, server-controlled configuration (e.g. level configuration) |
|---|---|---|
| Default / invalid value | Like the existing flags (anything but an exact match = off) | Missing field = off; invalid values rejected at build time |
| Scope and granularity | Whole Worker | Per configuration version → per form → per attempt |
| Attempts in progress | Change at their next request | Keep their pinned setting |
| Mixed versions during a deploy | Possible for a short time (not verified) | Consistent per attempt |
| Rollback / emergency off | Fast (variable change and redeploy) | Slow (new release or forms); running attempts cannot change unless an override exists |
| Audit and reproducibility | Deploy history; mode stored per record | Through the immutable release |
| Operating cost | Low | Release build, validation and private-repository re-pin |

A combination (versioned policy with an override that can only lower it) is possible. The mechanism is not chosen **[OPEN P-13]**. The production configuration of the exam Worker has not been verified; the repository's `wrangler.toml` sets every `EXAM_*` flag to `off`.

**Staged plan (design only).**
1. Review and merge this specification with the open items recorded.
2. Implementation PR, reviewed independently; synthetic content only.
3. Baseline measurement with `off` (D3 evidence).
4. `observe` on synthetic attempts; collect `would_refuse` events by code.
5. Owner approval of D3 values and of P-18, with the multiplier rule stated consistently across specs and code. Then a separate explicit owner approval to enter `enforce`.
6. Monitoring.
7. Rollback to `off`, then verify that buffered uploads are still accepted and nothing was deleted.

Stop conditions:
- any refusal of a correctly behaving client;
- `recording_incomplete` above the baseline;
- unexplained `seq_beyond_cap` or `phase_closed` refusals.

None of this authorises learner access, a pilot, production audio, deployment or release. OD-53 remains OWNER DECISION — CONDITIONAL.

## 11. F4 owner directions and open decisions

**Directions already given (F4, 2026-10):**
- **F4-D1:** server-authorised recording grants, specification first.
- **F4-D2:** local recording when offline, then a flagged late recording grant; a grant is not proof of capture time.
- **F4-D3:** no threshold approved without evidence.
- **F4-D4:** one active recording grant at a time.
- **F4-D5:** compare rollout controls; none chosen.

These authorise design work only.

**Open decisions:**

| ID | Decision |
|---|---|
| P-1 | Chunk length: code (1 s) vs OD-09 (5 s, LOCKED) |
| P-2 | Can timing alone refuse a late recording grant? |
| P-3 | Can an empty recording grant be re-recorded? |
| P-4 | Attempt completion while evidence is partial: **owner-selected A-bounded (§4.2.10), pending formal approval** |
| P-5 | Rating of incomplete evidence |
| P-6 | Intro binding and phase-binding fallback |
| P-7 | `late` classification and any threshold |
| P-8 | Late recording grants after module submission: **owner-selected C1 (§4.2.10), pending formal approval** |
| P-9 | Browser retention and deletion of refused audio |
| P-10 | Turn order |
| P-11 | F7 scope |
| P-12 | F8 grace |
| P-13 | Rollout mechanism |
| P-14 | All D3 values |
| P-15 | Per-grant byte cap |
| P-17 | Scope of the one-active invariant |
| P-18 | Time-multiplier scope |
| P-19 | Consent withdrawal |
| P-20 | Retention period |
| P-21 | Behaviour of a turn blocked by a valid grant of another attempt (per-user scope only) |
| P-22 | Chunks captured after a plain lease expiry: evidence flag or resumption |
| P-23 | Whether the completion gate and evidence finalization follow the `off`/`observe`/`enforce` modes |
| P-24 | Whether a post-submission late grant must carry a declared chunk count (C1 dependency) |

P-16 (how known client defects relate to PR #53) is a review item outside this specification.

Recording grants do not close EX-03, Q14/M-28, OD-08, EX-01, EX-04, EX-05, OD-07/OD-30, OD-14/EX-06, or any calibration, privacy, consent, accessibility, originality, scoring or release gate.
