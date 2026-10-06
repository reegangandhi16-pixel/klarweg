# B1 Exam Engine Specification (generic engine + B1 configuration)

> **Status:** design only. Defines runtime behaviour of the generic Klarweg Exam Engine with the B1 level configuration. No code, schema or content is created.
> **Inputs:** Standard (`b1/GOETHE-B1-ADULT-MASTER-STANDARD.md`), `ARCHITECTURE.md`, `EXAM-ITEM-SCHEMA.md`.
> **Labels:** **[OFFICIAL]** (with Standard source ID) · **[DESIGN]** Klarweg decision · **[UNKNOWN / KLARWEG DESIGN DECISION]** where Goethe's digital behaviour is not public · **[OD-xx]**.

---

## 1. Lifecycles

### 1.1 Form lifecycle
`draft → review → pilot → live → retired`

- Only `pilot` and `live` forms are assignable.
- `pilot` forms are assignable only to the pilot cohort (flag on the user/roles).
- Retiring a form never deletes attempts or results.

### 1.2 Attempt (exam session) lifecycle
```
created ──► ready (pre-checks passed) ──► in_progress ──► completed ──► scored_partial ──► scored_final
   │                                        │   ▲             (objective     (all ratings
   │                                        ▼   │              scored)        final)
   └──► abandoned (never started; expires 24 h)   paused_break (between modules, OD-04)
                                            │
                                            └──► expired (deadline passed; auto-submitted modules) ──► completed
                                            └──► voided (admin, integrity incident)
```

### 1.3 Module lifecycle (per attempt)
`locked → available → tutorial (untimed) → running → submitted | auto_submitted → scored`

The tutorial before the clock starts mirrors the official digital rule: "Die Prüfungszeit startet erst danach" [OFFICIAL S1 Anhang 1].

### 1.4 Hören phase lifecycle
See `B1-AUDIO-SPEC.md` §A. Phases: `preread → play_k → gap → … → review_window? → closed`.

### 1.5 Sprechen phase lifecycle
See `B1-SPEAKING-SPEC.md`. Phases: `consent → device_check → prep (15 min) → intro → teil1 → teil2 → teil3 → closed`.

---

## 2. Modes and attempt types

| Mode | Modules | Timing | Assignment |
|---|---|---|---|
| `simulation_full` | All 4 in the recommended order L→H→S→Sp [OFFICIAL S1 §2] | Hard, server-authoritative | Server-assigned form (§7) |
| `simulation_module` | One module (modules can be taken separately [OFFICIAL S1 §1.1]) | Hard | Server-assigned form (module drawn from that form; the form record is kept) |
| `mock_m0` | Mock form only | Hard | Fixed: Mock M0 (never one of Sets 01–10) |
| `practice_part` | One part | Soft/none | Practice pool (never live forms) |

Accommodations: `time_multiplier ∈ {1.0, 1.25, 1.5, 1.75, 2.0}` per user per attempt, admin-granted only [OFFICIAL S8: 25–100 %], applied to module and phase durations (Hören audio itself is not slowed).

---

## 3. Server-authoritative session model

### 3.1 Records (logical; tables in §11)
- `exam_attempt`: id, user_id, mode, form_id, level_config_id, accommodation, status, created_at, started_at, completed_at, expires_at, client_request_id, assignment_reason, pilot_cohort.
- `attempt_module`: attempt_id, module, status, tutorial_started_at, started_at, deadline_at, submitted_at, submit_kind (`manual|auto_deadline|auto_abandon|admin`), content_released_at, seq_high.
- `attempt_lease`: attempt_id, lease_id, device_fingerprint_hash, issued_at, renewed_at, expires_at, revoked_reason.
- `attempt_history`: append-only events (start, lease changes, phase transitions, saves, submits, incidents) with server timestamps.

### 3.2 Trust boundary
| Datum | Authority | Client may |
|---|---|---|
| Attempt id, form id | Server (created at `POST /attempts`) | Read |
| `started_at`, `deadline_at`, phase schedule | Server clock | Display `deadline − serverNow` (offset-corrected) |
| Remaining time | Server | Never send it; the server ignores any client time |
| Responses | Client proposes, server accepts if in window + valid lease + valid seq | Write |
| Play counts | Server (play tokens) | Request tokens |
| Scores, pass/fail, keys | Server | Read final results only |

### 3.3 Clock
- Every response carries `serverNow` (ms). The client keeps `offset = serverNow − Date.now()` (median of the last 5 samples).
- The display timer is client-side for smoothness. **Expiry is decided only by the server** (the client's zero triggers a submit request; the server confirms).

---

## 4. Timer model

| Module | Duration | Deadline | Notes |
|---|---|---|---|
| Lesen | 65 min × multiplier [OFFICIAL] | `started_at + duration` | Advisory part times 10/20/10/15/10 shown, never enforced [OFFICIAL "Arbeitszeit"; any order S3 p.7]. **No transfer time inside the digital module** [OFFICIAL S1 Anhang 1] |
| Hören | Phase plan (≈ 35–40 min) × multiplier on non-audio phases | `started_at + Σ phase durations + buffering allowance (≤ 60 s)` | Audio spec §A; review window OD-03 |
| Schreiben | 60 min × multiplier [OFFICIAL] | `started_at + duration` | Advisory 20/25/15 [OFFICIAL] |
| Sprechen | Prep 15 min [OFFICIAL]; parts per speaking spec | Phase deadlines | Speaking spec |

**Grace window [DESIGN]:** saves that arrive ≤ 10 s after the deadline with a client timestamp before the deadline and a valid seq are accepted (network latency). Nothing later is accepted.

**Breaks [DESIGN, OD-04]:** between written modules in `simulation_full`, a break screen of up to 15 min (official paper minimum [OFFICIAL S1 §2]), skippable. The next module starts **only on an explicit action**. Break time is not exam time. If the learner doesn't return within 24 h, the remaining modules become `auto_abandon` (scored as not taken, not 0) [OD-28].

---

## 5. Module transitions

1. Submitting module *n* (manual or auto) locks it and scores the objective parts asynchronously.
2. A break screen appears (if `simulation_full`).
3. Module *n+1*: tutorial (untimed) → explicit "Start" → server sets `started_at` and `deadline_at` and releases that module's keyless package.
4. A module's content is **never** fetched before its start. Earlier modules are never re-openable after submission.
5. Order is fixed L→H→S→Sp in `simulation_full` [OFFICIAL recommended order]. [OD-29] whether the learner may reorder.

---

## 6. Answer persistence and autosave

### 6.1 Client
- Every change is written immediately to **IndexedDB** (`attemptId/module/itemId → {value, seq, clientTs}`).
- Batched upload debounced ≤ 2 s, on part change, on `visibilitychange=hidden`, and on `pagehide` (`navigator.sendBeacon`).
- `seq` increases monotonically per attempt module.

### 6.2 Server
- `PUT /exam/attempts/:id/modules/:m/responses` with `{leaseId, batch:[{itemId, value, seq, clientTs}], clientRequestId}`.
- Accept if: lease valid; module running (or within the grace window); `seq > stored seq` for that item.
- Upsert `response_current`. Append to `response_events` (audit + calibration: answer changes).
- Returns `{acceptedSeqHigh, serverNow}`.

### 6.3 Writing
Full-text snapshots every 5 s while typing and on blur (`writing_version`, last N = 20 kept + the final). Diff storage is optional later.

### 6.4 Idempotency
`clientRequestId` dedupes retries. Repeated submission calls return the same final state.

---

## 7. Form assignment (server-side)

1. `POST /exam/attempts {mode, level, modules?, clientRequestId}`. If an unfinished attempt of the same mode exists, **return it** (refresh/duplicate create never changes the form).
2. Eligible forms: `status ∈ {live}` (or `pilot` if the user is in the pilot cohort) for the level, **excluding the Mock** for set modes. For `mock_m0`, only the Mock.
3. Repeat-avoidance [DESIGN]: prefer forms the user hasn't attempted. Among the least-attempted by this user, choose uniformly at random with a **server CSPRNG** (`crypto.getRandomValues`). With calibration balancing on (pilot), prefer forms with the lowest current sample size (stratified assignment, calibration plan §6).
4. Persist `form_id`, `assignment_reason` (`fresh|least_seen|calibration_quota|admin`) and `assignment_seed` (for audit) **before** returning.
5. Deterministic recovery: the attempt id is the key. Any device or session of the same user resumes the same attempt and form.
6. Admin visibility: assignment log and per-form counts in the admin dashboard. Admin override is possible (audit-logged).
7. No client-visible randomness, no predictable sequence (form order isn't exposed; form ids in the client are opaque per-attempt aliases [DESIGN]).

---

## 8. Recovery matrix

| Event | Behaviour | Time effect |
|---|---|---|
| Page refresh | Reload state from the server (attempt, module, deadline, responses ∪ unsynced IndexedDB with higher seq) | **None.** The deadline is fixed server-side |
| Browser close / crash | Same as refresh on reopen; the timer kept running | None |
| Network loss | Continue offline (Lesen/Schreiben; Hören plays from a preloaded blob); banner "Offline – answers kept on this device"; retry with backoff | None; at the deadline the client stops and queues the submit. The server accepts in-window saves on reconnect (grace window), otherwise the module closes with the last server state [OD-26] |
| Duplicate tab | Lease conflict: the new tab gets "This exam is open elsewhere", **[Take over]** → revokes the old lease (old tab becomes read-only) | None |
| Device change | Sign in on the new device → take over the lease → resume. Unsynced answers on the old device are lost after takeover (warned before takeover) | None |
| Reconnect | Flush the queued batch (seq-guarded); reconcile; re-sync the clock | None |
| Timer expiry | Server auto-submits (`auto_deadline`) at the next request or by a scheduled sweep (Cron Trigger every minute) | – |
| Hören interruption | Audio spec §A7 (one recovery replay of an interrupted *text*, logged) [UNKNOWN / KLARWEG DESIGN DECISION, OD-05] | None |
| Sprechen interruption | Speaking spec §6 | None |
| Session cookie expired | Inline re-auth modal; the exam timer keeps running | None |

**Invariant:** no action by the client can move `deadline_at` later. Only an admin `extend` (incident) can, and it is audit-logged.

---

## 9. Presentation layer (Lesen, Schreiben; Hören and Sprechen in their specs)

### 9.1 Layout
- **Desktop ≥ 1024 px:** split pane (stimulus left, items right, independent scroll), matching the paper spread.
- **Tablet 768–1023:** split pane with a collapsible stimulus.
- **Mobile < 768:** single column with a sticky "Text ⇄ Aufgaben" toggle and a sticky item palette.
- L3: situations pinned; ads in a grid (desktop) or a filterable list (mobile); **used ads marked "verwendet bei 15"** and still selectable (re-assignment moves them); the "0 – keine passende Anzeige" option is explicit.
- L4: names list with a jump to the comment; comment cards with the name header.
- Item palette: 1–30 with states (answered / unanswered / flagged). A flag toggle per item.

### 9.2 Visual system (Klarweg Goethe Mode) [DESIGN; visual-system §7.7, §11.16]
- Teal action accent only (no coral).
- Canvas `#FAFAF7`; surfaces white.
- **Exam text typeface: Inter ≥ 17 px**, line-height 1.55, for legibility (decision D12 in `b1/GOETHE-B1-DIGITAL-EXAM-SPEC.md`; confirm vs the "Fraunces for German" rule).
- Eyebrow `GOETHE B1 · LESEN · TEIL 3` in JetBrains Mono. Double-line top rule.
- Timer: large mono numerals, ink colour; no red, no flashing.
- No grammar colouring, no word popups, no audio buttons on exam texts (exam texts are plain).
- No celebration motion; `prefers-reduced-motion` respected.

### 9.3 Illustration and visual spec [DESIGN]
| Use | Rule |
|---|---|
| Photos | Only decorative (article header images), licence-clean, people/places not identifiable as real brands or persons; never carry information needed for an item |
| Illustrations | Klarweg-original style (flat, low-detail line art in neutral ink + one tint); used for SP1 planning card and SP2 slide headers. **Never imitate Goethe's clipboard, slide frames or ad artwork** |
| Ads (L3) | Rendered as **structured HTML cards from text** (not images) so they are accessible, scalable and searchable. Typographic variety (weight/size/frames) creates realistic ad diversity without image text |
| Information density | Ads ≤ 60 words each; ≤ 1 contact line; abbreviations at the official density (e.g. "Tel.", "inkl.", "ab"); every information-bearing visual has a text equivalent |
| Distractor visuals | Visual salience must not cue the key: equal card size/prominence for all ads; no colour coding |
| Typography | Min 16 px mobile / 17 px desktop body; numbers in tabular figures; no text in images |
| Mobile | Images max-width 100 %, lazy-loaded only after module start; slides stack vertically with note fields below |
| Alt text | Required (de + en); for decorative images `alt=""` with `information_bearing=false` |

### 9.4 Schreiben editor
- Three tasks as tabs. The A2 Gästebuch stimulus is pinned next to the editor (stacked above on mobile).
- `<textarea>`-based plain editor with `spellcheck=false autocorrect=off autocapitalize=off autocomplete=off`, `lang="de"`, no rich text.
- **Word count**, live: tokens separated by whitespace, hyphenated compounds = 1, numbers = 1. Shown as "ca. 80 Wörter · 63". No hard limit. A soft cap of 1,000 words is a technical safeguard only.
- Umlaut row `ä ö ü Ä Ö Ü ß „ “ – €` inserts at the caret. Typing fallbacks (`ae` etc.) are untouched.
- Paste policy [OD-06]: proposal = **paste disabled** except from the same editor (internal clipboard); drag-drop disabled. Attempts are logged (integrity analytics), not punished.
- Keyboard: Tab moves focus out of the editor (`Esc` then `Tab`); `Ctrl/Cmd+Z` native.
- Timer: module 60 min; advisory per-task times displayed.
- Submit: confirmation lists word counts per task and flags < 50 % of target ("Hinweis: unter 50 % der Wortzahl wird die Aufgabe mit 0 Punkten bewertet" [OFFICIAL criterion S3 p.42]); final text = the last server-acknowledged version at submit or deadline.
- Storage: `writing_version` (server), final text frozen in `writing_final` with sha256; rating workflow in the scoring spec.

---

## 10. Accessibility and device support [DESIGN]
- WCAG 2.2 AA: full keyboard operation (radio groups with arrow keys, matching via select/listbox, H4 grid as rows of radio groups), visible focus, labelled fieldsets (`legend` = "Aufgabe 14"), live-region announcements for phase changes and 10/1-minute warnings (not per second), 200 % zoom reflow, contrast ≥ 4.5:1.
- Screen-reader mode: Hören remains audio; transcripts are **not** provided during the exam (construct). Accommodations follow S8 via admin.
- Supported (Simulation): latest 2 versions of Chrome, Edge, Firefox, Safari (macOS/iOS/iPadOS), Samsung Internet; minimum viewport 360×640. Sprechen in Simulation requires a desktop/tablet with a microphone [OD-27].
- Pre-checks: audio output test, microphone test (Sprechen), storage availability (IndexedDB), clock sanity, connection quality (RTT + 1 MB download); fail → guided fix, not exam start.

---

## 11. Data model (D1 `klarweg-exam`; logical design, not created)

| Table | Key columns |
|---|---|
| `level_configs` | id, level, version, json, created_at |
| `forms` | id, level_config_id, kind, label, status, release, package_sha, created_at, published_at |
| `form_parts` | form_id, module, part, task_ids json |
| `items_index` | item_id, form_id, module, part, display_no, interaction, is_example, is_anchor |
| `item_keys` | item_id, form_id, key json, points, rubric_id — **server-only** |
| `exam_roles` | user_id, role, granted_by, granted_at |
| `accommodations` | user_id, time_multiplier, other json, granted_by, valid_until |
| `attempts` | id, user_id, mode, form_id, status, accommodation, created_at, started_at, completed_at, expires_at, client_request_id UNIQUE(user_id, client_request_id), assignment_reason, assignment_seed, pilot_cohort |
| `attempt_modules` | attempt_id, module, status, tutorial_at, started_at, deadline_at, submitted_at, submit_kind, released_at |
| `attempt_leases` | attempt_id, lease_id, device_hash, issued_at, renewed_at, expires_at, revoked_reason |
| `hoeren_phases` | attempt_id, seq, part, phase, planned_start, planned_end, actual_start, actual_end, status |
| `audio_plays` | attempt_id, asset_id, part, play_no, token_id, issued_at, started_at, ended_at, outcome (`complete|interrupted|recovery`) |
| `responses_current` | attempt_id, item_id, value json, seq, client_ts, server_ts |
| `response_events` | id, attempt_id, item_id, value json, seq, client_ts, server_ts |
| `writing_versions` | attempt_id, task_no, version, text, words, server_ts |
| `writing_final` | attempt_id, task_no, text, words, sha256, frozen_at |
| `recordings` | attempt_id, part, segment, chunk_seq, r2_key, bytes, duration_ms, sha256, received_at, status |
| `consents` | user_id, attempt_id, kind, version, granted_at, withdrawn_at |
| `ratings` | id, attempt_id, module, task_no, rater_id, rater_kind (`ai|teacher|lead`), round (`1|2|3`), criteria json, total, status, started_at, submitted_at |
| `module_scores` | attempt_id, module, raw, converted, max, pass, method, computed_at, version |
| `results` | attempt_id, json (result object), status, computed_at |
| `incidents` | id, attempt_id, kind, detail json, created_at, resolved_by |
| `item_stats` | item_id, sample_id, n, stats json, computed_at |
| `rater_stats` | rater_id, sample_id, stats json |
| `admin_audit` | id, actor_id, action, target, detail json, at |
| `rate_counters` | (same pattern as Access) |

Indexes on user_id, form_id, status and (attempt_id, item_id). Migrations live in the exam Worker's own folder.

---

## 12. API surface (via Access proxy `/exam/*` → exam Worker; JSON; `no-store`)

| Method · path | Purpose |
|---|---|
| `GET /exam/catalog?level=b1` | Available modes/modules, entitlement state, existing attempts |
| `POST /exam/attempts` | Create or resume (idempotent) |
| `GET /exam/attempts/:id` | State: modules, deadlines, phase, serverNow, lease status |
| `POST /exam/attempts/:id/lease` | Claim/renew/take over |
| `POST /exam/attempts/:id/modules/:m/tutorial` · `/start` | Tutorial ack; start the clock |
| `GET /exam/attempts/:id/modules/:m/package` | Keyless content (only when running) |
| `POST /exam/attempts/:id/media` | Exchange asset ids → signed URLs (purpose-bound) |
| `PUT /exam/attempts/:id/modules/:m/responses` | Batched saves |
| `POST /exam/attempts/:id/hoeren/phase` · `/play-token` | Phase acks; play authorisation (audio spec) |
| `PUT /exam/attempts/:id/writing/:task` | Writing snapshot |
| `POST /exam/attempts/:id/sprechen/...` | Speaking spec §5 |
| `POST /exam/attempts/:id/modules/:m/submit` | Submit (idempotent) |
| `GET /exam/attempts/:id/result` | Learner result (scoring spec §6) |
| `GET /exam/media/:token` | Signed media stream (Range support) |
| `/exam/admin/*` | Roles: rating queue, rating submit, form registry, analytics, incidents |

---

## 13. B1-specific configuration surface
Everything B1-specific sits in `lc:b1@1` and form content:
- module order, durations and advisory times
- the part list with interactions/counts/plays/pre-read
- `objective_table` (30→100 conversion [OFFICIAL S1 §4.1–4.2])
- rubric ids (Schreiben/Sprechen [OFFICIAL])
- the pass threshold of 60
- the grade bands
- the speaking phase plan
- the Hören phase plan template

The engine core contains **no** B1 numbers.
