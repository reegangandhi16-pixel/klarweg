# B1 Sprechen Specification (exam speaking architecture)

> **Status:** design only. No prompts, partner scripts, recordings or rating texts are created.
> **Sources:** Standard §5.4, §6.4, §8.3 (official: S1 §1.4, §3, §5; S3 p.25–28, 45–47). **Labels:** **[OFFICIAL]** · **[DESIGN]** · **[UNKNOWN]** · **[OD-xx]**.
> **F4 recording grants (draft, 2026-10-11):** §4.2, §5.1–§5.3 and §10 are **PROPOSED — NOT IMPLEMENTED**; §4.2.11 is a verification plan whose tests have **not** been run; §4.1 records observed implementation status and conflicts; §5.4 and §11 record open decisions; §12 is an AI-prepared recommendation; the options marked **[OWNER-APPROVED]** there were approved by the owner's written instruction of 2026-10-11, and the rest are **not approved**. The formal record of every F4 decision status is the decision register, §B.2 (`F4/P-n`); §11 mirrors it. The proposals follow the owner's F4 directions F4-D1…F4-D5 (§11) and record every remaining owner decision as **[OPEN P-n]**. Additional labels: **[REPO @ ef64371]** = observed in the repository at that commit · **[PR #53]** = present only in the unmerged PR #53 · **[PROPOSED]** = design proposal, not a contract · **[OWNER-APPROVED]** = an option approved by the owner's written instruction of 2026-10-11 and recorded in the decision register §B.2 (v1.5). An approved option is a policy choice; it does **not** mean the design is implemented or authorised for implementation. This draft was prepared with AI assistance; it is not a human review and closes no gate.

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
| Local chunk key | `attempt/part/turn/seq` | `chunk:<item_id>:<turn>:<seq>`, without an attempt id (`exam/js/recorder.js:14`, `:19`; unchanged by PR #53) | Mismatch; risk of mixing chunks across attempts or users on one browser. §4.2.4 proposes the key scope |
| Duration | `duration_ms` | Client wall-clock time between recorder start and stop (`recorder.js`). [PR #53] also estimates interrupted turns as `chunks × 1000` | Neither is decoded media duration; see §5.2 |
| Time multiplier | Engine spec, accommodations: "applied to module and phase durations" | `computeDeadline` (`speaking_phases`) multiplies the preparation only | **Conflict.** P-18's first-version treatment is owner-approved (§4.2.2). The underlying timing policy remains open (OD-41, with EX-04 and EX-08, before any pilot or learner access) |
| Retention | §6: 90 days after the final rating | Register OD-21: 30 days after the final rating | The register already resolves this conflict: contradiction R-08 ("SPEAKING §6: 90 days") is resolved by OWN-D19, and OD-21 (LOCKED mechanism, signed v1.1) sets an admin-configurable default of **30 days**. Under the register's precedence rule OD-21 governs, and the 90-day text in §6 is superseded. P-20 stays listed as **[OPEN P-20]** only until the owner confirms its scope in the register (§12); nothing here changes OD-21 |
| Consent withdrawal | §6: deletion right | `consents.withdrawn_at` is checked, but no route sets it | **Unresolved requirement [OPEN P-19]** |
| Introduction | §1, §2: recorded, not rated | The level configuration has an unrated `intro` phase; the synthetic form has no intro item; nothing maps the intro phase to an item | **[OWNER-APPROVED P-6]**: no recording grant for the introduction until an intro item type exists |

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
- **Unresolved fields:** the `max_chunks` formula and constants **[OPEN P-1, P-14]**, so until approved it is computed and logged but never enforced; the rule that sets `kind` (owner-approved P-7: server-observed facts only; exact conditions subject to schema review); the `reason` values (subject to schema review).

#### 4.2.2 Server checks for a live open [PROPOSED]

In the existing order (user → attempt ownership → request id → lease → module state → server time):
1. The attempt belongs to the user and is not voided; the `lease_id` is the current, unexpired lease.
2. Module `sprechen` is `running` and server time ≤ deadline + save grace.
3. Recording consent is active.
4. The item is a `spoken_response` of the attempt's form, and the turn exists in it.
5. The phase bound to the item's part (§4.2.3) is running in **server time**: `phase_start ≤ now < phase_end − MIN_OPEN_MS` **[OPEN P-14]**. The schedule is computed on the server from the release plan.
6. The turn has no complete evidence, and no other recording grant is active within the invariant's scope (§4.2.6).

**Dependency on P-18.** Check 5 needs one authoritative rule for how the time multiplier changes phase boundaries. Today the engine spec says the multiplier applies to module and phase durations, while the code multiplies only the preparation (§4.1). This specification does not choose between them; that underlying timing policy remains open under OD-41. Until it is decided, and the engine spec, this spec, the deadline calculation and the client schedule all state the same rule, for attempts with a multiplier other than 1.0:
- phase-boundary checking is **not implementation-ready**;
- no phase-boundary refusal may be enforced;
- their observe-mode results cannot be interpreted.

The owner-approved first-version treatment below handles this by excluding those attempts from phase checks.

**First-version treatment of multipliers other than 1.0 [OWNER-APPROVED 2026-10-11, first-version treatment only (F4/P-18); NOT IMPLEMENTED].** This is a scoping rule. It does not decide the accommodation policy (OD-41; EX-04, EX-08). For an attempt whose `time_multiplier` is not 1.0, the first version:
- evaluates no phase-boundary check and issues no phase-based refusal, in any mode. Grant and phase records are labelled `phase_rule_unresolved`;
- still applies the evidence lifecycle of §4.2.10 (completion gate, reservations, finalization), using the attempt's stored `deadline_at` as the current code computes it;
- is excluded from D3 measurements (§4.2.8) and from synthetic acceptance tests that assess phase timing.

The owner-approved exclusion above is limited to the first version. The **broader accommodation timing policy** under P-18 remains **unresolved**: it must be decided through an OD-41 register revision, with accessibility input (EX-04, EX-08), **before any pilot or learner access**. Relying on the first-version exclusion is acceptable only while no learner uses the system (OD-53).

#### 4.2.3 Phase binding [PROPOSED]

Today only the client maps phases to parts (`teil<N>` → part N) [PR #53]; the server has no mapping. Proposed: an explicit, validated binding between speaking phases and parts in the level configuration. The validator would reject a spoken-response part without exactly one bound phase, and a turn id repeated within a part. The representation is subject to schema review. **[OWNER-APPROVED P-6]**: an explicit, validated binding, with a validated `teil<N>` fallback; no recording grant for the introduction until an intro item type exists.

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
  - **Plain expiry during capture.** A device whose lease expired (for example offline for longer than the lease lifetime) cannot tell when the server closed its grant. It may therefore have captured audio after the closure. The server cannot distinguish those chunks by time. **[OWNER-APPROVED P-22]**: such evidence carries a `lease_interrupted` flag; a grant closed by plain expiry is **not** resumed.
- **Late recording grants** (§5.1) are normally created already `closed` and never occupy the active slot. P-7 is owner-approved: `late` is classified from server-observed facts only. Whether a late request that arrives while the phase is still running may create an `open` grant is **not** settled by that approval and remains to be decided in the implementation design review. Late recording grants after module submission follow §4.2.10 (P-8, owner-approved option C1).
- **Re-recording.** Until **[OPEN P-3]** is decided, there is one recording grant per (attempt, item, turn). A repeated open returns the existing grant, and a closed empty grant is not reopened.
- **Declared chunk count is optional.** If declared (stop or late open), completion must match it. If never declared, completion needs contiguous `0..n-1` with `n ≤ max_chunks` (once enforced), and the evidence records that the count was not declared. Loss of trailing chunks is then undetectable, and this must be shown (§5.3).
- **Evidence after module submission.** Current behaviour [REPO @ ef64371]:
  - After the Sprechen module is submitted, and **while the attempt is not completed**, the server still accepts chunks and completions inside the upload window (`recordingWindow`), with the current lease. It accepts them for **any** valid item and turn and creates the turn row on the first chunk, so it does not distinguish evidence for earlier turns from new evidence.
  - Completing the attempt deletes the attempt lease, and `lease` refuses completed attempts. From then on **no** upload can succeed.
  - Nothing marks evidence `incomplete`: turn rows can only be `open` or `complete`, and the scheduled sweep only processes modules that are running past their deadline or still being submitted.
  - Client-side re-sending after module submission is not implemented in [PR #53].

  Owner-approved policy (P-4 option A-bounded and P-8 option C1, 2026-10-11), design not implemented: §4.2.10. Recovery after attempt completion remains out of scope; no upload is possible after completion.
- **Local storage keys** are scoped to attempt + recording grant + seq. Local storage only helps recovery; it is never acceptance.

#### 4.2.5 Idempotency, retries, duplicates [PROPOSED]

- `request_id` is unique per attempt (`request_log` primary key). The existing helper runs the operation **before** recording the request, so two concurrent identical requests both execute, and a refusal is not recorded [REPO @ ef64371]. Creating a recording grant must therefore be idempotent on its own, by uniqueness on (attempt, item, turn).
- **Lost response.** Retrying with the same `request_id` replays the stored response, which can be stale. The client re-reads `status` before acting on it.
- A new `request_id` for the same turn returns the existing recording grant. `granted_at`, `capture_window_ends_at`, `upload_deadline_at` and `max_chunks` are fixed at first issue and never extended.
- **Stop:** identical values replay; a different `declared_chunks` is refused (409). **Completion:** identical values replay; different values are refused (409) and never overwrite.
- **Chunks** keep the existing rule: same seq and sha256 → `duplicate`; same seq with different bytes → `chunk_conflict`. Today the object is written to storage before the database row [REPO @ ef64371], so concurrent conflicting uploads can leave stored bytes that differ from the recorded hash. The write ordering needs implementation review.
- Gaps block completion. Out-of-order arrival is accepted. Missing chunks are never filled.

#### 4.2.6 Concurrency invariant [PROPOSED]

**At most one `open` recording grant per scope.** **[OWNER-APPROVED P-17]**: the scope is **per attempt**.

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

The candidate values, `MIN_OPEN_MS`, `STOP_TOLERANCE_MS`, chunk slack, open-retry backoff, an open-request rate limit, a per-grant byte cap **[OPEN P-15]** and any late-classification threshold needed under the owner-approved P-7 rule (server-observed facts only), are **not** constants of this specification **[OPEN P-14]**. The client's existing 1000 ms minimum turn window is current behaviour [PR #53], not an approved server threshold.

Evidence required before any value is approved:
- measured MediaRecorder chunk counts and sizes per browser for turns of about 1–270 s;
- stop-time lag in foreground tabs, background tabs and tabs hidden for a long time;
- client-to-server clock-offset error;
- bitrate per browser;
- request counts in `observe` mode (§10).

**Scope of P-14, P-15 and P-25.**
- **P-14** covers the enforcement values above.
- **P-15** decides **whether** a per-grant byte cap is required at all, and **at which stage** it would be enforced (`observe` only, or `enforce`). If a cap is required, its numerical value is a P-14 value.
- The **reservation abandonment bound** of §4.2.10 is **not** a P-14 value. It is needed before implementation starts, whereas P-14 values are approved after observe-mode evidence (§10), so it is the separate item **[OPEN P-25]**.

Each value needs boundary tests just below, exactly at and just above it, plus concurrent duplicate opens, delayed responses after a phase change, reconnection near `capture_window_ends_at`, expiry with queued chunks, the rate limit across a window boundary, an exact byte cap, clock skew, and long background suspension.

#### 4.2.9 Migration and compatibility [PROPOSED]

Additive only. Under `off` and `observe`, older clients keep working for the recording-grant and phase checks; `enforce` requires the updated client to be served first (§10). **[OWNER-APPROVED P-23]**: the completion gate and evidence finalization are independent of the modes (§4.2.10). An older client can therefore receive the new completion refusal `recording_evidence_pending`, which it does not handle. The updated client must therefore be served before the gate is deployed.

**Where mode and provenance are stored.** This is a conceptual design; names, types and indexes are subject to schema review.

| Store | Contents | Written when |
|---|---|---|
| Recording-grant row (new) | `rgr_id`, attempt, item, part, turn, phase, `kind`, `granted_at`, windows, `lease_generation`, state and `close_reason`, the **effective enforcement mode at issue** | A grant is created, which happens only under `observe` or `enforce` |
| Chunk and turn rows (existing tables, new nullable columns) | `rgr_id` (or NULL), **effective enforcement mode at write**, authorisation provenance (`live`, `late`, or `none`), duration provenance on turns (§5.2) | Each accepted chunk or completion written after the migration |
| Recording-grant event rows (new) | One row per failed check: the code, the target (open, stop, chunk or completion), ids, server time, the mode | Under `observe`, a `would_refuse` for a request that was still processed. Under `enforce`, a refusal; no chunk or turn row is written, because nothing was accepted |
| Upload-reservation row (new) | Attempt, item, turn, seq, `rgr_id` (or NULL), the unique staging object key, the declared hash and size, the server admission time `t_admit`, state (`reserved` → `committed` or `failed`), the failure or reconciliation reason, the effective mode | Before any storage write for a chunk upload (§4.2.10) |
| Evidence state (new: on the recording-grant row; for turns without a grant, on the turn row or in a separate evidence table — subject to schema review) | `none` / `partial` / `complete` / `incomplete`, the terminal reason (`upload_deadline_passed`, "no audio received"), the time of finalization, the received and missing seqs | When evidence changes state; terminal states are set only by completion or by finalization (§4.2.10) |
| `incidents` (existing) | A summary incident per event kind (§5.3), including reservation and finalization outcomes | As for event rows, reservation outcomes and finalization |

Consequences:
- Rows written **before the migration** have no mode and no grant; they are shown as "recorded before recording grants".
- Under **`off`** after the migration, **no recording-grant row exists**. Chunk and turn rows record mode `off`, `rgr_id` NULL and provenance `none`. The only exception is a chunk that names a grant created earlier under another mode. It stores that `rgr_id` and the grant's provenance, with mode `off`, which shows that no check was applied to it.
- A **`would_refuse`** is never a property of the grant alone. It is an event linked to the chunk, turn or grant it concerns, so the accepted row and the reason it would have been refused can both be shown.
- The effective mode is recorded as the value the server applied, under the owner-approved mechanism for the synthetic phase (P-13 Option A, §10).

#### 4.2.10 Upload deadline, completion gate and evidence finalization [PROPOSED design — policy P-4 A-bounded and P-8 C1 owner-approved 2026-10-11; NOT IMPLEMENTED]

**Effective upload deadline.** Current code [REPO @ ef64371]: a running module accepts uploads while `t ≤ deadline_at + SAVE_GRACE_MS + upload_grace_seconds * 1000`, and a submitting or submitted module while `t ≤ deadline_at + upload_grace_seconds * 1000`. Every lease-checked request first auto-submits a module that is past `deadline_at + SAVE_GRACE_MS`, so the longer limit cannot be reached in practice. The B1 level configuration sets `upload_grace_seconds` to 600. Proposed single definition for every F4 path, in milliseconds: `upload_deadline_at = deadline_at + upload_grace_seconds * 1000` (600 s for B1), with uploads accepted while `t ≤ upload_deadline_at`. `deadline_at` is the module deadline fixed at module start; for attempts with a time multiplier other than 1.0 it depends on the underlying P-18 timing policy, which remains open (OD-41). Until then, the owner-approved first-version treatment uses the stored `deadline_at` as the current code computes it (§4.2.2).

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

**Expected count and safety cap.** `declared_chunks` is a client-reported expected count, a device claim. `max_chunks` is the separate server-side safety cap of §4.2.1 and §4.2.8; its values remain **[OPEN P-14]**, and a per-grant byte cap remains **[OPEN P-15]**. A declared count is never used as the cap and never proves what was captured. Under §4.2.5 a completion that disagrees with a declared count is refused; that check concerns the consistency of the client's own requests, not capture integrity. Three different server checks must not be confused:
- **(a) A request-contract check.** A required field must be present and well formed. A request that lacks it is malformed and is refused as such. This judges the request, not the audio.
- **(b) Using a claim as authority.** A claimed count, time or offline duration is **never** used to classify a grant, to authorise capture or upload, or as proof of capture time, originality or speaker identity (P-7). It is never the upload safety cap.
- **(c) Consistency with what actually arrived.** The server compares a declared count with the chunks it actually received. That comparison only decides whether evidence can become `complete` (§4.2.5); it says nothing about what was captured.

**[OWNER-APPROVED P-24, 2026-10-11]:** `declared_chunks` is required on a post-submission (C1) late grant, so the expected size is fixed when the evidence is registered. This is a request-contract check only (check (a)); the value is used only for the consistency check (c) and is never proof, authority or a cap (b). Other grants keep the general rule of §4.2.4 (count optional; if not declared, contiguous `0..n-1`, loss of trailing chunks undetectable).

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
- A crashed or abandoned reservation must not block completion forever. It must reach `failed` through reconciliation. Reconciliation checks whether the exact staging object exists with the reserved hash, and whether a committed row references it, and resolves the reservation accordingly. Deciding that a reservation is abandoned, rather than still in progress, needs a bound after which a still-unresolved reservation is reconciled. If the bound is too short, a write that is still in progress could be failed and its evidence lost. That bound is a numerical value that has not been approved **[OPEN P-25]**. It is not a P-14 enforcement value (§4.2.8). A platform limit on request duration could provide evidence for it, but none has been verified here; the evidence plan is in §4.2.11. **Implementation cannot start until this bound is settled by an owner decision or by evidence.**

**R2/D1 object consistency [REQUIRED — not implemented].** R2 and D1 are separate systems. A storage write and a database commit are two separate steps; they are **not** one atomic transaction. Today the object key is deterministic (`rec/<attempt>/p<part>/<turn>/<seq>`) and the object is written before the D1 decision, so a later or concurrent write to the same key can replace bytes that a committed row already describes [REPO @ ef64371]. Required:
- **Key scope.** Each reservation receives its own staging object key. The server generates the key; it is never reused by another reservation and never derived from client input alone. The key is written by at most one handler: the one that created the reservation. No request ever writes to a shared deterministic key, or to another reservation's key, before the D1 acceptance decision. An equivalent design is acceptable only if it has been verified to be equally safe;
- **One logical chunk at a time.** A logical chunk is (attempt, item, turn, seq). It has at most one unresolved reservation at a time. A second request for the same logical chunk while a reservation is unresolved does not write anything; it is answered as pending;
- **Retries.** Today's chunk-upload route carries no `request_id`; it is identified by the lease, item, turn, seq and declared hash [REPO @ ef64371]. A retry is therefore a request for the same logical chunk with the same declared hash. It is answered from the existing reservation and does not write again:
  - if the reservation is `committed` with the same hash, the answer is `duplicate`;
  - if it is unresolved, the answer is pending;
  - only after reconciliation has marked it `failed` may a later request create a **new** reservation with a **new** key.

  A request for the same logical chunk with a **different** hash is refused (`chunk_conflict`, the existing rule) while any reservation for it is unresolved or committed.

  A handler never rewrites a key whose earlier write outcome is unknown. It reconciles first;
- **Byte verification.** The server computes the SHA-256 hash and the size of the bytes it actually received, and writes exactly those bytes. Today's code already hashes and size-checks the received buffer before writing (`api.js:530–534`) [REPO @ ef64371]. A reservation is committed only if that computed hash and size equal the hash and size recorded in the reservation;
- **Stored-copy integrity (design prerequisite).** The committed row must reference an object whose stored content matches the committed hash. A mechanism to confirm this (for example, reading the object back, or a checksum returned by R2) is **not verified** (§4.2.11 V9). Until one is verified, the design must not assume it;
- the committed D1 chunk row records the exact object key, hash and size that were accepted;
- cleanup never deletes, replaces or alters an object referenced by a valid committed chunk row;
- **Ambiguous outcomes.** Where the result of a storage write or a commit is unknown, the reservation stays unresolved. Reconciliation determines the outcome before any retry, new reservation or cleanup for that logical chunk. An unreferenced staging object is removed only after reconciliation confirms that no committed row references that exact key.

The reservation before storage I/O and the reconciliation after it together close the gap between the two steps. Every admitted upload is either committed with its exact object, or explicitly failed and cleaned up, and no committed evidence can be overwritten. This is a requirement for future implementation review; it has not been built or tested.

**Required properties versus verified platform capabilities.** The requirements above do not depend on any unverified platform feature. Which platform capabilities could help is **not verified**:
- whether R2 offers a conditional write that refuses to overwrite an existing key;
- whether listing R2 objects by prefix is reliable enough for reconciliation sweeps;
- whether the Workers platform enforces a maximum request duration (which could inform P-25).

A unique key per reservation, with a single writer, makes the design safe without a conditional write. Reconciliation works from the reservation rows rather than from listing. Each capability above must be verified (§4.2.11) before an implementation relies on it.

**Race between acceptance and completion.** Reservation creation, turn completion and late-grant creation must each be conditional, in the same atomic database step as their write, on the attempt still being `in_progress` and on their eligibility time being `≤ upload_deadline_at`. Committing an admitted reservation is not re-checked against the deadline. It is still conditional on the reservation not having been failed by reconciliation; if it was, the late commit is refused and reconciled. Finalization is conditional on `t > upload_deadline_at` and on no unresolved eligible reservation. Attempt completion must, in one atomic step, finalize expired evidence, confirm that no pending evidence or unresolved reservation remains, and set the attempt `completed`. These are required guarantees. The mechanism needs implementation review, and whether D1 provides them under concurrent Worker instances is **not yet verified** (§4.2.6).

**Schema prerequisites.** Turn rows allow only `open` and `complete` [REPO @ ef64371], so `incomplete` needs a migration (a changed constraint, or a separate evidence-state column or table, subject to schema review). A grant with zero chunks has no turn row, so its evidence state must be held on the recording-grant row, or a turn row must be created together with the grant. Closing open grants at module submission (`module_closed`) is likewise a requirement, not existing behaviour. Upload reservations need durable storage of their own. Chunk rows already store `r2_key` and `sha256`; with unique staging keys, the key they record changes format.

**Modes: evidence safety versus grant enforcement [OWNER-APPROVED P-23].** The `off`/`observe`/`enforce` modes of §10 govern recording-grant and phase checks. The completion gate and finalization protect evidence the server already holds. If they followed the modes:

| Mode | Grant and phase checks | Completion gate if it follows the mode | Completion gate if it is independent of the mode |
|---|---|---|---|
| `off` | None; no grant rows | Not applied: completion deletes the lease while server-visible turns are still partial, stranding buffered chunks. **Violates A-bounded** | Applied to server-visible turn evidence (no grant rows exist) |
| `observe` | Run; failures logged as `would_refuse` | Logged only: completion still ends uploads. **Violates A-bounded** | Applied |
| `enforce` | Run; failures refused | Applied | Applied |

**Owner-approved (P-23, 2026-10-11):** evidence-lifecycle safety (the completion gate and finalization) is independent of the modes; the modes govern only recording-grant and phase checks. The updated client is served before the gate, and the gate has no separate switch. How the gate applies to attempts already in progress when it is introduced is **not** settled by this approval and remains to be decided in the implementation design review.

**Implementation readiness.** P-4, P-8, P-23 and P-24 are owner-approved (2026-10-11), but the design is still **not implementation-ready** until all of these are done: schema review of the evidence state and of upload reservations; a reviewed design for upload reservations and R2/D1 reconciliation; the reservation abandonment bound **[OPEN P-25]**; verification of the atomicity requirements on D1 (§4.2.6), following §4.2.11; the separate implementation authorisation; and, for multipliers other than 1.0, the owner-approved first-version exclusion of §4.2.2 (the underlying P-18 timing policy remains open before any pilot). Whether a per-grant byte cap is required, and at which stage, is P-15. P-15 may remain OPEN at implementation start only if the implementation contains **no** per-grant cap. It must be decided before the earlier of: any per-grant cap being evaluated in any mode, and entering `enforce`. The `max_chunks` values and any byte-cap value are P-14 enforcement values, which are not needed before implementation because nothing is enforced until `enforce` is approved.

#### 4.2.11 Technical verification plan [PROPOSED — NOT RUN]

None of these tests has been run. A passing in-process SQLite harness is **not** evidence for any item in this table. All tests use a **non-production** environment: a separate D1 database, a separate R2 bucket and a separate Worker deployment, with synthetic attempts only, no learner data and no production audio.

| # | What must be shown | Method | Pass condition | Informs |
|---|---|---|---|---|
| V1 | D1 batch atomicity and write serialisation for grant creation | Many concurrent `turns/open` requests for the same attempt, from parallel clients against the deployed non-production Worker | Exactly one `open` grant per scope; every other request receives the existing grant or `recording_grant_active`; no partial batch effects | §4.2.6; P-17 |
| V2 | Atomic attempt completion versus concurrent acceptance | Race completion against reservation creation, turn completion and late-grant creation around `upload_deadline_at` | No accepted write after `completed`; completion never succeeds while evidence or a reservation is pending; boundary `t = upload_deadline_at` behaves as specified | §4.2.10 |
| V3 | Reservation lifecycle under failure | Inject failures: R2 write error, Worker termination after the R2 write and before the D1 commit, D1 commit refused, duplicate retry | Every reservation reaches `committed` or `failed`; no committed row references a missing or mismatched object; no orphan is deleted while ambiguous | §4.2.10; P-25 |
| V4 | Reservation abandonment bound evidence | Measure end-to-end chunk upload durations (including slow and throttled networks), and verify any platform request-duration limit from authoritative documentation and a direct test | A documented distribution and verified limit from which an owner can choose the P-25 value | P-25 |
| V5 | Finalization idempotency | Run lazy finalization and the scheduled sweep concurrently and repeatedly on the same expired evidence | Exactly one terminal transition per evidence record; repeated runs change nothing; nothing is finalized while an eligible reservation is unresolved | §4.2.10 |
| V6 | Storage reconciliation safety | Seed committed objects, orphaned staging objects and ambiguous reservations; run cleanup | No object referenced by a committed row is deleted or altered; only confirmed-unreferenced staging objects are removed; ambiguous cases are reconciled first | §4.2.10 R2/D1 |
| V7 | Platform capabilities used by the design | Verify, from authoritative documentation and a direct test, any R2 conditional-write or listing behaviour that an implementation intends to rely on | Each relied-upon capability is confirmed, or the design does not depend on it | §4.2.10 |
| V8 | Retries and concurrent handlers for one logical chunk | Replay the same logical chunk with the same hash, and with a different hash; send concurrent requests for the same (attempt, item, turn, seq); retry after a timeout whose write outcome is unknown | At most one unresolved reservation per logical chunk; no key is written by two handlers; no rewrite of a key with an unknown outcome; retries answered `duplicate` or pending | §4.2.10 R2/D1 |
| V9 | Stored-copy integrity | For committed rows, confirm the stored object's bytes match the committed hash and size, using a mechanism verified from authoritative documentation and a direct test (for example a read-back) | Every committed row references an object whose content matches; the confirmation mechanism is documented | §4.2.10 R2/D1 |

The browser measurements of §4.2.8 (D3 evidence) are separate. They need the browser matrix and are informed by observe-mode runs (§10).

## 5. Interruption recovery

| Event | Behaviour |
|---|---|
| Network loss | Recording continues; chunks queue in IndexedDB; upload resumes; the turn completes when all chunks are acknowledged. With recording grants [PROPOSED]: §5.1 |
| Mic permission revoked / device lost | Pause the phase clock **once** (≤ 60 s) to reconnect the mic; then continue. If it fails again: incident, part marked `unratable_technical`, offer a re-take of **that part only** in a new attempt slot (OD-33) |
| Refresh / crash during prep | Resume prep with the remaining server time (notes restored from local + server autosave) |
| Refresh / crash mid-part | Chunks already uploaded are kept; the part resumes at the next turn with the remaining part time; incident logged. With recording grants [PROPOSED]: the reloaded client stops the open recording grant (`reason: interrupted`), re-sends buffered chunks, and requests completion only for contiguous `0..n-1`; a gap is never filled; the duration is marked as estimated (§5.2) |
| Tab hidden during recording | Recording continues (desktop). iOS background suspension → incident handling as above |
| Upload incomplete at module end | Up to 10 min background upload window ("Bitte Seite geöffnet lassen"); after that, missing chunks are an incident. With recording grants [PROPOSED]: evidence still pending once `t > upload_deadline_at` is finalized as `incomplete` by the finalization step in §4.2.10, which does not exist today |
| Lease expiry / takeover [PROPOSED] | A new lease generation closes grants opened under the old one (`lease_changed`, §4.2.4). Buffered chunks for them may be uploaded only with the current lease. After a takeover the superseded tab stops capture, releases the microphone and keeps its chunks; it can upload them only after an explicit takeover back. Chunks captured after a plain expiry: evidence flagged `lease_interrupted`, no resumption (**[OWNER-APPROVED P-22]**) |
| Consent withdrawal | No route exists today **[OPEN P-19]**. Its effect on open recording grants, buffered chunks and stored audio must be decided together with OD-21 retention |
| Submit with uploads pending [PROPOSED] | The submit dialog states that recordings are still uploading. While the attempt is not completed, the server already accepts uploads inside the upload window [REPO @ ef64371]. Re-sending by the client after module submission is not implemented. Owner-approved policy (2026-10-11), not implemented: attempt completion is refused while server-visible evidence is pending, until `t > upload_deadline_at` and that evidence is finalized (P-4 A-bounded); late grants after an automatic submission only (P-8 C1); see §4.2.10 |

The phase clock is server-authoritative (engine spec §3). Interruption pauses are the only exception, capped and logged.

### 5.1 Offline recording and late recording grants [PROPOSED — owner direction F4-D2]

If the open request cannot reach the server, capture may still follow the client's copy of the server schedule and is stored locally. After reconnection, inside `upload_deadline_at`, the client sends `turns/open` with its device claims. The server records **when it received the request** and whether the bound phase was still running then. For attempts with a time multiplier other than 1.0, the owner-approved first-version treatment (P-18) evaluates no phase boundary; the underlying timing policy remains open (OD-41). A late recording grant **never** establishes when, or whether inside the phase, the audio was captured.

These five facts are independent and are recorded and shown separately:

| Fact | Established by | Not implied by it |
|---|---|---|
| Captured locally | The client only | Authorisation, acceptance |
| Authorised (`live` or `late`) | A server recording grant | Capture time, originality |
| Chunks accepted | Server checks per chunk | Complete evidence |
| Evidence complete / incomplete | Server, from contiguous `0..n-1` | Ratability, valid score |
| Submission | Module / attempt state (existing) | Complete evidence |

Open policy: whether timing alone can refuse a late recording grant inside the upload window **[OPEN P-2]**; how `late` is classified: owner-approved P-7 (server-observed facts only; any threshold is a D3 value); late recording grants after module submission: owner-approved option C1 (§4.2.10); how long refused audio is kept in the browser, and how it is deleted **[OPEN P-9]**; how incomplete evidence is rated **[OPEN P-5]**; whether turns must be recorded in order **[OPEN P-10]**.

**Risk.** Retrospective authorisation lets a client claim to have been offline and capture outside the phase. If timing is not a refusal reason (P-2), late recording grants **detect and label** this but do not prevent it. If it is a refusal reason, less audio is accepted than §5 "Network loss" promises today. That trade-off is P-2.

### 5.2 Duration provenance (F7) [PROPOSED design; scope OWNER-APPROVED P-11]

A duration that was not decoded from the media must not be stored or shown as if it were measured. Each completed turn carries a duration-provenance value; the exact names are subject to schema review. At minimum:
- `client_wallclock`: the client's recorder start-to-stop time (current behaviour);
- `chunk_estimate`: derived from the chunk count and the nominal chunk length [PR #53 for interrupted turns], always with the incident `recording_interrupted`.

A `decoded_media` value may be added only after a validated measuring path exists. The existing `exam-content/tools/audio-duration.mjs` is a build-time tool that the Worker does not use. It rejects WebM with unknown-size clusters or laced blocks and rejects fragmented MP4. It must not be assumed to measure MediaRecorder recordings until it has been tested against real recordings per browser.

**[OWNER-APPROVED P-11]**: duration provenance and the `recording_interrupted` incident belong in the **first** migration; reviewer-interface display comes later. The scoring engine and reviewer interface are not changed here.

### 5.3 Incidents and reviewer-visible uncertainty [PROPOSED]

Proposed incident kinds: `recording_grant_late`, `recording_grant_refused`, `recording_grant_would_refuse` (observe mode), `recording_interrupted`, `recording_incomplete`, `recording_grant_closed_by_lease_change`. For the evidence lifecycle of §4.2.10:
- `recording_reservation_failed`, with the reason: `storage_write_failed`, `commit_refused`, `abandoned` (P-25) or `reconciled_failed`;
- `recording_reservation_reconciled`, with the outcome: committed object found and confirmed, or failed;
- `recording_evidence_finalized`, with the terminal reason, such as `upload_deadline_passed` or "no audio received", and the received and missing seqs;
- `recording_staging_object_removed`, recording only an unreferenced staging object removed after reconciliation.

`recording_incomplete` remains the summary shown to raters. Details are limited to ids, seq numbers, refusal codes, server times, the lease generation, the enforcement mode and labelled device claims. They contain no audio, transcript, IP address or user-agent string.

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
  - *Note (2026-10-11):* this bullet is superseded. The decision register already resolves the conflict: R-08 is resolved by OWN-D19, and OD-21 (LOCKED mechanism, signed v1.1) sets an admin-configurable default of **30 days** after the final rating. Under the register's precedence rule OD-21 governs. The bullet is left unchanged as a record of the original proposal. P-20 is listed as open only until the owner confirms its scope (§4.1, §12).
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
- F4 recording grants: owner decisions in §11 (formal record: decision register §B.2), the reservation abandonment bound (P-25), D3 evidence (§4.2.8) and the verification plan (§4.2.11). No implementation is authorised by this draft

## 10. Rollout and rollback of recording grants [PROPOSED — synthetic-phase mechanism OWNER-APPROVED (P-13 Option A)]

**Modes.**
- `off`: no recording-grant or phase checks. This is current behaviour, except for the completion gate and evidence finalization, which are independent of the modes (owner-approved P-23, §4.2.10).
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

A combination (versioned policy with an override that can only lower it) is possible. **[OWNER-APPROVED P-13]**: Option A (Worker variable) for the synthetic phase only; Option B is to be reconsidered before real forms. The production configuration of the exam Worker has not been verified; the repository's `wrangler.toml` sets every `EXAM_*` flag to `off`.

**Staged plan (design only).**
1. Review and merge this specification with the open items recorded, and record the formal owner decisions in the decision register, §B.2.
2. **Before implementation:** P-25 settled (§4.2.11 V4), the schema and reservation design reviewed, and the decisions listed in §12 as first-version prerequisites formally recorded. Then an implementation PR, reviewed independently, using synthetic content only. Deployment order: the updated client is served **before** any server change that can return a new refusal (§4.2.9).
3. Baseline measurement with `off` (D3 evidence).
4. `observe` on synthetic attempts; collect `would_refuse` events by code.
5. Owner approval of D3 values. P-18's first-version treatment is already owner-approved (§4.2.2); the broader accommodation timing policy remains open and must be decided through OD-41 (with EX-04 and EX-08 input) before any pilot or learner access, with the multiplier rule then stated consistently across specs and code. Then a separate explicit owner approval to enter `enforce`.
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

**Decisions.** The formal record of each item's status is the decision register, §B.2 (`F4/P-n`; register v1.5, based on the owner's written instruction of 2026-10-11); this table mirrors it. An approved option does not authorise implementation or close any testing, privacy, pilot, learner-access, deployment or release gate. A status changes only through a register revision with owner sign-off. Recommendations (§12) never change a status.

| ID | Decision |
|---|---|
| P-1 | Chunk length: code (1 s) vs OD-09 (5 s, LOCKED) |
| P-2 | Can timing alone refuse a late recording grant? |
| P-3 | Can an empty recording grant be re-recorded? |
| P-4 | Attempt completion while evidence is partial: **owner-approved 2026-10-11: A-bounded, no learner override in the first version (§4.2.10)** |
| P-5 | Rating of incomplete evidence |
| P-6 | Intro binding and phase-binding fallback: **owner-approved 2026-10-11: explicit validated binding with validated `teil<N>` fallback; no intro recording grant until an intro item type exists (§4.2.3)** |
| P-7 | `late` classification and any threshold: **owner-approved 2026-10-11: server-observed facts only; claim values add flags only (§4.2.4, §4.2.10)** |
| P-8 | Late recording grants after module submission: **owner-approved 2026-10-11: C1, with the limitation of §4.2.10** |
| P-9 | Browser retention and deletion of refused audio |
| P-10 | Turn order |
| P-11 | F7 scope: **owner-approved 2026-10-11: in the first migration; reviewer display later (§5.2)** |
| P-12 | F8 grace |
| P-13 | Rollout mechanism: **owner-approved 2026-10-11: Option A for the synthetic phase only; reconsider Option B before real forms (§10)** |
| P-14 | All D3 values |
| P-15 | Per-grant byte cap |
| P-17 | Scope of the one-active invariant: **owner-approved 2026-10-11: per attempt (§4.2.6)** |
| P-18 | Time-multiplier scope: **owner-approved 2026-10-11, first-version treatment only: exclude multipliers other than 1.0 from phase checks, flag `phase_rule_unresolved` (§4.2.2); timing policy open (OD-41, before any pilot)** |
| P-19 | Consent withdrawal |
| P-20 | Retention period |
| P-21 | Behaviour of a turn blocked by a valid grant of another attempt (per-user scope only) |
| P-22 | Chunks captured after a plain lease expiry: evidence flag or resumption: **owner-approved 2026-10-11: flag `lease_interrupted`, no resumption (§4.2.4)** |
| P-23 | Whether the completion gate and evidence finalization follow the `off`/`observe`/`enforce` modes: **owner-approved 2026-10-11: independent of the modes; client first; no separate gate switch (§4.2.10)** |
| P-24 | Whether a post-submission late grant must carry a declared chunk count (C1 dependency): **owner-approved 2026-10-11: required, as a request-contract check only (§4.2.10)** |
| P-25 | Reservation abandonment bound (needed before implementation; not a P-14 enforcement value) |

P-16 (how known client defects relate to PR #53) is a review item outside this specification.

Recording grants do not close EX-03, Q14/M-28, OD-08, EX-01, EX-04, EX-05, OD-07/OD-30, OD-14/EX-06, or any calibration, privacy, consent, accessibility, originality, scoring or release gate.

## 12. Recommended first-version path [AI-PREPARED RECOMMENDATIONS; owner approval recorded where marked]

This section proposes one coherent path through the open items, so the owner can review it as a single package. It was prepared with AI assistance under the owner's delegation to recommend options. The rationales are AI-prepared and are **not a human review**.

By written instruction of 2026-10-11, the owner approved the options marked **[OWNER-APPROVED]** below: P-4, P-6, P-7, P-8, P-11, P-13, P-17, P-22, P-23, P-24, and P-18's first-version treatment only. They are recorded in the decision register §B.2 (v1.5). Every other recommendation here remains **NOT APPROVED** and changes no status. No approval here is an implementation authorisation.

### 12.1 Recommended options

| Item | Recommendation | Rationale |
|---|---|---|
| P-4 | **[OWNER-APPROVED]** **A-bounded**; no learner override in the first version | Uses only server facts; protects evidence the server can see; bounded by the existing upload deadline |
| P-8 | **[OWNER-APPROVED]** **C1**, with its limitation stated verbatim (§4.2.10) | Excludes learners who submitted manually; C1 is never proof of offline capture |
| P-23 | **[OWNER-APPROVED]** The completion gate and finalization are **independent of the modes**: active in `off`, `observe` and `enforce`. Deploy order: updated client first, then the gate. No separate switch for the gate | Tying them to the modes breaks A-bounded under `off` and `observe` (§4.2.10). A switch that can turn the safety gate off recreates the stranding risk. Under OD-53 only synthetic attempts exist, so rollout risk is limited |
| P-24 | **[OWNER-APPROVED]** **Require** `declared_chunks` on C1 late grants, as a **request-contract check** (§4.2.10 check (a)). A missing or malformed value refuses the request as malformed. The value is then used only for the consistency check (c), never as authority (b) | A late registration happens after capture has ended, so the count is known. It makes loss of trailing chunks detectable. It is a device claim: it proves nothing about capture time, originality or speaker identity, is never the upload cap, and never authorises anything |
| P-25 | NOT APPROVED (OPEN): settle the bound **from evidence** (§4.2.11 V4) before implementation; no value is proposed here | Too short loses evidence that is still being written; too long delays completion. Only measured upload durations and a verified platform limit can justify a value |
| P-15 | NOT APPROVED (OPEN): the first version implements **no per-grant byte cap** and relies on the existing caps (256 KiB per chunk, 10 MiB per attempt) and on `max_chunks` once enforced. P-15 **stays OPEN** and must be decided before the earlier of: any per-grant cap being evaluated in any mode (including `observe`), and entering `enforce` (§12.3). Revisit after bitrate measurements | Avoids an unmeasured threshold. The existing caps already bound storage use. Leaving P-15 open does not permit enabling a cap |
| P-14 | NOT APPROVED (OPEN): unchanged; enforcement values are approved after observe-mode evidence (§10) | Nothing is enforced before then |
| P-18 | **[OWNER-APPROVED — first-version treatment only]** the exclusion rule of §4.2.2. The timing policy itself is **not approved**: resolve it through OD-41, with EX-04 and EX-08 input, **before any pilot or learner access** | Unblocks a synthetic first version without deciding an accommodation policy |
| P-17 | **[OWNER-APPROVED]** **Per attempt** | Matches the lease scope, so the uniqueness constraint is straightforward; P-21 then does not arise |
| P-7 | **[OWNER-APPROVED]** `late` is decided only from **server-observed** facts. The **value** of a device claim never classifies, authorises, refuses or accepts a grant or audio; it can only add flags (§4.2.10 check (b)). This does not exclude request-contract checks (a), such as P-24's required field, or the count-consistency check (c) | Claims are unverifiable; separating the three checks keeps P-7 and P-24 compatible |
| P-22 | **[OWNER-APPROVED]** **Flag** affected evidence `lease_interrupted`; no resumption | Simplest safe option; reviewers see the uncertainty |
| P-13 | **[OWNER-APPROVED]** **Option A** (Worker variable) for the synthetic phase only; reconsider Option B before real forms | Fast rollback and low cost while only synthetic attempts exist |
| P-6 | **[OWNER-APPROVED]** An explicit, validated phase-to-part binding in the level configuration, with `teil<N>` kept as a validated fallback. **No recording grants for the introduction** until an intro item type is specified | The server needs a binding to check phases; the synthetic form has no intro item |
| P-11 | **[OWNER-APPROVED]** Include duration provenance (`client_wallclock`, `chunk_estimate`) and the `recording_interrupted` incident in the **first** migration; reviewer-interface display later | Avoids a second migration; keeps estimated durations from being shown as measured |
| P-3 | NOT APPROVED: **defer**; keep the current rule (one grant per turn, an empty closed grant is not reopened) | Safe default; no first-version dependency |
| P-20 | NOT APPROVED: owner to confirm in the register that retention is governed by OD-21 (the R-08 resolution), and then retire or rescope P-20 | The register already decided the 30-day default (§4.1); a second open item invites conflict |
| P-16 / PR #53 | NOT APPROVED: **fix first** before merging PR #53 (details below) | Its client is the base for F4 client work |

### 12.2 PR #53 (recommendation only; PR #53 is not modified by this document)

Before merging PR #53:
1. Label its "preparation only" multiplier behaviour and its 10 s topic grace as **provisional**:
   - P-18's **first-version exclusion** is already owner-approved (attempts with a multiplier other than 1.0 are excluded from phase checks, §4.2.2);
   - the **broader P-18 accommodation timing policy** is still open (OD-41, with EX-04 and EX-08);
   - the **P-12 topic-choice grace** is still open.

   The multiplier behaviour stays provisional until it is consistent with the approved first-version scope and these remaining decisions. Correct the code comment that attributes the multiplier rule to SPEAKING §2, which does not state it.
2. Stop capture and release the microphone when the lease is superseded.
3. Recover from `lease_expired` without a page reload.

Two further client changes belong to the F4 client work: re-sending buffered chunks after module submission, and **attempt-scoped local chunk keys**. Today the local key on `main` is `chunk:<item_id>:<turn>:<seq>`, **without** an attempt id (`exam/js/recorder.js:14`, `:19`), and PR #53 does not change it (§4.1). Scoping the key to attempt + recording grant + seq (§4.2.4) is a **required future change**, not existing behaviour.

**Alternative:** merge as-is with the provisional labels only, and do all client fixes in the F4 client PR. **Not recommended**, because the superseded-tab recording is a privacy issue.

### 12.3 What may be deferred, and under which conditions

| Deferred until | Items | Condition |
|---|---|---|
| Before `enforce` | P-1, P-2, P-14, P-15 | No refusal is enforced before approval. P-15 must also be decided before any per-grant byte cap is evaluated in any mode, if that comes first; until then the implementation contains no per-grant cap |
| Before any pilot or learner access | P-5, P-9, P-18 (policy), P-19, P-20 | Privacy (EX-01) and accessibility (EX-04) review; OD-53 permits no learners meanwhile |
| Follow-up | P-3, P-10, P-12, P-21 | The default rules above apply; P-12 is decided together with PR #53 |

### 12.4 Owner decisions needed before implementation can be authorised

**Recorded (owner's written instruction of 2026-10-11; register §B.2, v1.5):** P-4, P-8, P-23, P-24, P-17, P-7, P-22, P-13, P-6, P-11, and the first-version treatment of P-18 (§4.2.2).

**Still outstanding before implementation can be authorised.** P-15 may stay OPEN at implementation start **only** if the implementation contains no per-grant byte cap (§12.3). In addition:
- P-25 settled from evidence (§4.2.11 V4);
- V1–V3 and V5–V7 planned on a non-production environment;
- the schema and reservation design reviewed;
- a decision on PR #53;
- a separate, explicit implementation authorisation.

OD-53 remains **OWNER DECISION — CONDITIONAL**: no learner access, pilot, production audio, deployment or release.
