# Klarweg Exam Platform: Architecture

> **Status:** design only (Phase 3). Nothing is implemented, deployed or committed. No exam content, keys, audio or visuals exist.
> **Authority:** implements `docs/exam/b1/GOETHE-B1-ADULT-MASTER-STANDARD.md` (the "Standard"). If this document and the Standard conflict, the Standard wins and the conflict must be raised.
> **Labels:** **[OFFICIAL]** Goethe evidence (cited in the Standard) · **[REPO]** verified in `origin/main` @ `bf2838c` · **[DESIGN]** proposed here · **[UNKNOWN]** · **[OD-xx]** owner decision (register in §12).
> **Companion specs:** `EXAM-ITEM-SCHEMA.md`, `B1-EXAM-ENGINE-SPEC.md`, `B1-SCORING-SPEC.md`, `B1-AUDIO-SPEC.md`, `B1-SPEAKING-SPEC.md`, `B1-CALIBRATION-PLAN.md`, `B1-MOCK-SPEC.md`, `B1-SET-BALANCING-SPEC.md`.

---

## 1. Repository audit (read-only, `origin/main` @ `bf2838c`, 2026-10-04)

### 1.1 Map
| Area | Finding [REPO] | Evidence |
|---|---|---|
| Frontend | Static multi-page site, vanilla JS, no build step; chapter engine `chapter/chapter-app.js` + `chapter-*-data.js` (258 chapters) | CLAUDE.md; `chapter/` |
| Routing | File-based on GitHub Pages; OS spec reserves `/exam/b1` (OS §16.1), which doesn't exist yet | `.github/pages-allowlist.txt`; `uploads/klarweg-os.md` |
| Deployment | GitHub Actions "Deploy Pages (public allowlist only)" copies **only allowlisted paths** and hard-fails on prohibited prefixes (`access`, `admin`, `audit`, `uploads`, `scripts`, `content`, `audio-manifests`, `tutor`, …). **`docs/` is not allowlisted, so it is never published.** | `.github/workflows/deploy-pages.yml` |
| Authentication | Access Worker `/auth/*`: email+password (PBKDF2-SHA256, 100k iterations), Google sign-in (nonce/state), login rate limits | `access/worker/src/auth*.js`, `ratelimit.js` |
| Session | Random 32-byte token in cookie `kw_session`; **only its SHA-256 hash** stored in D1 `sessions`; TTL 30 days; cookie `HttpOnly; Secure; SameSite=None` (site and API are different sites) | `sessions.js`, `auth.js` l. 109–126 |
| CSRF | State-changing requests with a foreign `Origin` are refused; CORS limited to `https://reegangandhi16-pixel.github.io` and `https://klarweg.in` | `cors.js`, `index.js` |
| Entitlements | `user_entitlements` (per level + LIFETIME, expiry) via `readEntitlements()`; client `kw-access.js` is a **UI gate only** (documented) | `entitlements.js`, `kw-access.js` |
| Access Worker | Routes: auth, orders, Cashfree webhook, saved words, `/ai/*`, `/speech/*`, `/resources/*`; bindings D1 `klarweg-access`, R2 `klarweg-resources`, service `TUTOR` | `index.js`, `wrangler.toml` |
| Tutor Worker | Private (`workers_dev=false`), reached only via service binding; LLM providers (openai/anthropic/gemini/mock); `/v1/transcribe` (OpenAI `gpt-transcribe`); actions `check_writing`, `check_speaking`, … resolved against a **chapter registry**; chapter "exam mode" (`C.isExam`) feedback | `tutor/worker/src/*` |
| Reports Worker | Separate D1 `klarweg-reports` (reports, admin_sessions, rate_counters, section_refs), R2 screenshots, own admin login | `report/worker/*` |
| D1 `klarweg-access` | users, orders, sessions, user_entitlements, google_login_nonces, rate_counters, saved_words, ai_usage, ai_global (speech counters live in `ai_usage` under prefixed periods) | `schema.sql`, `migration-001…012` |
| Speech | Record & Check: ≤ 30 s, ≤ 1 MiB, 3 checks per task per UTC day, chapter/task allowlist (`speech-tasks.js`, 258 chapters / 1,277 tasks); **no audio or transcript stored**; deterministic Word Match scoring in the browser | `speech.js` header |
| Audio | `kw-audio-engine.js` chain: manifest MP3 → IndexedDB → TTS endpoint → browser `speechSynthesis`; production MP3s served from a **public GitHub repo via jsDelivr** (`KW_AUDIO_BASE = cdn.jsdelivr.net/gh/reegangandhi16-pixel/klarweg-audio@main/…`) | `public/audio/kw-tts-config.js`, `manifest.json` |
| Protected assets | `resources.js`: private R2, immutable release prefix (`RESOURCE_RELEASE`), **HMAC-signed, 5-minute, signature-only links** (no cookie needed), rate-limited, generic refusals | `resources.js` |
| Scoring | Chapter quiz score in **localStorage**; speech Word Match client-side; AI feedback via Tutor. **No server-side scoring exists.** | `chapter-app.js` |
| Caching | API JSON `cache-control: no-store`; static assets via Pages/jsDelivr | `resources.js` |
| Design system | Tokens (canvas `#FAFAF7`, teal action accent, Fraunces / Inter / JetBrains Mono / Noto Sans Devanagari), motion and spacing; **Goethe Mode** and **Goethe Exercise Card** specified (visual-system §7.7, §11.16) | CLAUDE.md, `uploads/klarweg-visual-system.md` |

### 1.2 Reuse vs isolation
| System | Decision | Reason |
|---|---|---|
| Session cookie + `findSessionUser()` | **Reuse (read-only)** | Single identity; the exam must not invent a second login |
| `readEntitlements()` | **Reuse (read-only)** | Exam access is derived from level/LIFETIME entitlement [OD-18: exam product rule] |
| CORS/CSRF guard (`cors.js`) | **Reuse** | Same origin rules |
| Rate-limit pattern (`rate_counters`, fixed window) | **Reuse the pattern**, separate buckets in exam D1 | Proven |
| Signed-link pattern (`resources.js` HMAC) | **Reuse the pattern**, new secret `EXAM_MEDIA_SECRET` | Media elements can't rely on third-party cookies |
| Private R2 + immutable release prefix | **Reuse the pattern**, new buckets | Proven release/rollback model |
| Tutor service binding + provider layer + cost accounting (`ai_usage`/`ai_global` style) | **Reuse the infrastructure**, add **new exam actions** | Keep one LLM gateway and one budget control |
| Tutor `check_writing` / `check_speaking` chapter actions (incl. `C.isExam`) | **Isolate (do not reuse)** | Chapter-registry-bound, free-text feedback, not rubric scoring |
| Speech Record & Check (`/speech/*`, 30 s cap, Word Match, daily caps) | **Isolate (do not modify)** | Short-utterance design; exam needs multi-minute capture, storage and rating |
| `kw-audio-engine.js` and manifests, jsDelivr CDN, `klarweg-audio` repo | **Isolate (exam must not use)** | Public CDN, TTS fallbacks, pause/seek players; the exam needs private, locked playback |
| Chapter engine, chapter data, chapter scoring, word popup | **Isolate** | Must stay untouched; no exam code is loaded on chapter pages, and no chapter code on exam pages |
| Design tokens / `site.css` | **Reuse (read-only import)** | Visual consistency; exam CSS is additive |
| Reports Worker | **Separate**; optional later "report an exam issue" through its existing API | Independent admin domain |
| D1 `klarweg-access` | **No new exam tables** | Isolation of exam data, independent migrations and backups |

---

## 2. System context

```
Browser (exam pages on Pages: /exam/…; vanilla JS engine)
   │  HTTPS, credentials (kw_session cookie), CSRF-guarded
   ▼
klarweg-access Worker  ── auth/session/entitlement ──► D1 klarweg-access (read-only for exam)
   │  thin authenticated proxy: /exam/*  (adds verified user id; strips client identity claims)
   │  service binding EXAM (private)
   ▼
klarweg-exam Worker (NEW, workers_dev=false)
   ├── D1  klarweg-exam            (attempts, responses, timers, ratings, results, calibration)
   ├── R2  klarweg-exam-content    (immutable form releases: keyless packages, keys, assets, audio)
   ├── R2  klarweg-exam-recordings (speaking recordings; retention per OD-09)
   └── service binding TUTOR ──► klarweg-tutor (new exam actions: transcribe_long, rate_writing_b1, rate_speaking_b1)
   
Authoring (offline): private repo klarweg-exam-content ──CI validate+compile──► R2 release rNNN ──► D1 form registry
Raters/admins: /exam/admin/* (role-gated, same session) or Reports-style admin auth [OD-19]
```

**Why proxy through Access rather than expose a new public Worker [DESIGN]:**
1. One cookie host, so no new cross-site cookie and no second login.
2. Entitlement is checked once, where it already lives.
3. The exam Worker stays private, like Tutor.
4. CSRF and CORS policy stays in one place.

The exam Worker trusts **only** the `X-KW-User` header set by Access over the service binding. It is never reachable from the internet (`workers_dev=false`, no routes).

**Cookie risk [INFERENCE, REPO]:** the session cookie is cross-site (github.io → workers.dev). Browsers that block third-party cookies (e.g. Safari by default) can break any cookie-authenticated API call. The exam inherits this risk. Mitigation: move the site and API to the same site (`klarweg.in` + `api.klarweg.in`, already anticipated in `cors.js`) **before the exam launches** [OD-20]. Media never depend on cookies (signed URLs).

---

## 3. Component architecture

| Layer | Component | Responsibility |
|---|---|---|
| Content | `klarweg-exam-content` (private git repo) | Source of truth for level configs, items, tasks, forms, rubrics, asset metadata, transcripts. JSON/YAML + binary assets (Git LFS) |
| Build | `exam-build` CLI / CI (Node, no runtime deps in the site) | Validate (§9 gates), compile **keyless form packages** + **key files** + asset manifests, upload an immutable release to R2, register in D1 |
| Runtime API | `klarweg-exam` Worker | Catalogue, attempts, assignment, leases, timers, content release per module, response persistence, Hören phase control and play tokens, recording ingest, submission, scoring, results |
| Scoring | Module inside `klarweg-exam` (pure functions + D1) | Objective scoring, rubric aggregation, conversion tables, pass status, feedback assembly (`B1-SCORING-SPEC.md`) |
| AI services | `klarweg-tutor` (new actions only) | Long transcription, rubric pre-rating (writing/speaking), never final scores |
| Frontend | `exam/` static app (new allowlisted files only) | Generic renderer driven by level config + form package; no keys, no scoring logic |
| Rating console | `exam/admin/` (role-gated) | Teacher rating, double rating, third rating, calibration dashboards |
| Analytics | D1 views + offline notebooks | Item statistics, rater agreement, set balancing (`B1-CALIBRATION-PLAN.md`) |

---

## 4. Data stores

| Store | Contents | Sensitivity | Retention |
|---|---|---|---|
| D1 `klarweg-exam` | level_config versions, forms registry, attempts, modules, phases, leases, responses + events, audio_plays, writing versions, recording index, ratings, scores, results, incidents, accommodations, consents, item stats snapshots, roles, admin audit | Personal data + answer keys (keys only in `item_keys`) | Attempts per OD-09/OD-21 |
| R2 `klarweg-exam-content` | `releases/<rNNN>/forms/<form_id>/{form.json,module-<m>.json}` (keyless), `keys/<form_id>.json` (**never served**), `assets/<sha256>.<ext>`, `audio/<form_id>/…` | Confidential (pre-release items), keys secret | Immutable per release |
| R2 `klarweg-exam-recordings` | `attempts/<attempt_id>/speaking/<part>/<seq>.webm` + manifest | Personal data (voice) | OD-09 (proposal ≤ 90 days after final rating) |
| Private content repo | Authoring sources | Confidential | Permanent (versioned) |
| Outside all repos | Official Goethe PDFs/audio, Hueber book (benchmarking only) | Third-party copyright | Analyst machines only |

The table-level design is in `B1-EXAM-ENGINE-SPEC.md` §11. **No schema is created in this phase.**

---

## 5. Security model (summary; details in the engine and scoring specs)

1. **The server is authoritative** for: attempt identity, form assignment, timers and deadlines, phase schedule, play counts, content release timing, scoring, pass/fail and results. The browser holds only a display copy.
2. **The browser never receives:** answer keys, scoring rules beyond public display tables, rubric pre-ratings before rating is final, other learners' data, unreleased module content, or R2 object keys.
3. **Content release is just-in-time:** a module's package is served only after that module has started on the server. Hören items are served for the current part's pre-read window [DESIGN].
4. **Media:** HMAC-signed, attempt-bound, short-TTL URLs (payload `kw-exm-v1|attempt|asset|purpose|play|exp`). Audio play tokens are single-purpose and counted server-side.
5. **Writes:** every mutation carries `attemptId`, `leaseId`, monotonically increasing `seq` and a `clientRequestId` (idempotency). The server rejects stale leases, out-of-window writes and post-deadline writes (with a grace window for in-flight saves, §B1-EXAM-ENGINE-SPEC 6.4).
6. **Roles:** `learner` (default), `rater`, `lead_rater`, `content_admin`, `exam_admin`, in table `exam_roles` (user_id → role). Admin actions are audit-logged.
7. **Abuse limits:** attempt creation per user per day (OD-22), API rate limits per attempt, recording byte caps per part.
8. **Privacy:** recordings and texts are linked by attempt id. Rater views are pseudonymised (no email/name). Consent is captured before Sprechen recording. Deletion jobs run per retention policy.
9. **Content confidentiality:** pre-release items never touch Pages or public CDNs. Releases are immutable, and unpublishing a form removes it from assignment, never from history.

---

## 6. Generic engine principle (A1 / A2 / B1 / B2 without copies)

- **The core engine knows only generic concepts:** form → module → part → task → item; interaction types; timers and phase plans; scoring strategies; aggregation policies.
- **Level specifics live in a versioned `level_config`** (B1: 4 independent modules, Lesen/Hören 30 items with the official conversion table, Schreiben/Sprechen rubrics, 60 % pass per module). A1/A2/B2 get their own configs after their own official validation phases. [UNKNOWN] Their aggregation rules (e.g. non-modular exams) are supported by an `aggregation_policy` plug-in, not hardcoded.
- **Interaction types (shared library):**
  - `binary_choice` (R/F, Ja/Nein)
  - `mcq_single`
  - `matching_pool` (unique use, null option "0")
  - `speaker_assignment`
  - `text_response`
  - `spoken_response`
  - `audio_stimulus_group`
  - `slide_presentation`
  - `dialogue_turns`

New levels compose these; new types are added once, centrally.

---

## 7. Admin / authoring model (future; no UI now)

| Capability | Mechanism |
|---|---|
| Create/edit item, assign metadata, define key | Item files in the content repo (schema-validated), or the future admin UI that writes **pull requests** to the content repo (keeps review and versioning) [DESIGN, OD-23] |
| Attach audio/image | Asset files under content-addressed names (sha256), with metadata sidecar (licence, creator, alt text, transcript link) |
| Review difficulty | `exam-build profile <form>`: computes the indicators and the Set Difficulty Profile (`B1-SET-BALANCING-SPEC.md`) |
| Preview item/form | `exam-build preview` renders the keyless package in the real engine against a local mock API (no keys in the bundle) |
| Assemble form | `form.json` lists part → task → item IDs; the assembly validator enforces the coherence rules (`EXAM-ITEM-SCHEMA.md` §4) |
| Validate form | All §9 gates; fail = no release |
| Publish/unpublish | `exam-build release` → R2 `releases/rNNN` + D1 forms registry `status: draft → review → pilot → live → retired`; only `exam_admin` can promote; every promotion audit-logged |

---

## 8. Content and asset architecture

- **References:** every text, image, ad, audio clip, transcript, writing stimulus, speaking card, rubric and key has a stable ID (`EXAM-ITEM-SCHEMA.md` §2).
- **Delivery:** forms reference assets by ID; packages carry asset IDs only, and the client exchanges them for signed URLs at module start.
- **Keyless packages:** the build strips `key`, `scoring.rule_params`, rationales, distractor tags and calibration data.
- **Keys:** stored only in `keys/<form_id>.json` and imported into D1 `item_keys` at publish.
- **Transcripts:** stored with the audio. Released to the learner **only in review** after module submission (OS §23.1).
- **Rubrics:** rubric *structure* (criteria, bands, points) is public in-app. AI prompt templates and rater notes are server-only.
- **Official material:** never stored in any Klarweg repo or bucket. Benchmark corpora (OCR text, measurements) live on analyst machines only. Similarity checks run against them offline.

---

## 9. Automated quality gates (framework; parameters in companion specs)

A form fails the release if **any** mandatory gate fails. Gates run in CI (content repo) and again at publish (Worker-side checks of the compiled package).

| # | Gate | Rule source |
|---|---|---|
| Q1 | Structure: part count, item count, numbering, example items | level_config (B1: Standard §4) |
| Q2 | IDs: unique, stable, well-formed; no orphan references | `EXAM-ITEM-SCHEMA.md` §2 |
| Q3 | Keys: exactly one key per objective item (L3 may use "0"; unique-use rule) | Schema §6 |
| Q4 | Assets: all referenced assets exist, hashes match, MIME allowed, alt text present, licence recorded | Schema §7 |
| Q5 | Timing totals: module and part times equal the config; Hören phase plan total within the target band | Engine spec §4, audio spec |
| Q6 | Scoring totals: Lesen/Hören 30 items, Schreiben 40/40/20, Sprechen 28/40/16/16 | Scoring spec |
| Q7 | Difficulty profile within Layer C limits; SDP constraints | Balancing spec |
| Q8 | Topic distribution, register (Sie/du), regional quotas | Balancing spec |
| Q9 | Answer-option balance and run lengths | Balancing spec |
| Q10 | Speaker distribution and voice configuration | Audio spec |
| Q11 | Audio: duration, loudness, peak, sample rate, speech rate, silence detection, transcript alignment coverage ≥ 98 % | Audio spec |
| Q12 | Writing/speaking task requirements (operators, functions, slide set, topic pairs) | Standard §6 |
| Q13 | Consistency: names, genders, numbers between stimulus, items and keys | Standard §17 G3 |
| Q14 | Originality: n-gram overlap against private benchmark corpora; banned-entity list (real brands/people) | §10 |
| Q15 | Rendering: headless render at 360×640, 768×1024, 1280×800 without overflow; contrast | Engine spec §9 |
| Q16 | Accessibility: axe-core zero serious/critical; keyboard path script passes | Engine spec §10 |
| Q17 | Security: keyless package contains no key fields, no rubric internals, no R2 keys; package size limits | §5 |

---

## 10. Copyright and originality safeguards

1. **Goethe is the benchmark, not a content source.** Structure, timings, task mechanics and measured linguistic characteristics are used. Texts, items, options, scenarios, slide topics, audio, artwork and layouts are not.
2. Every Klarweg item is **newly authored**, with an authoring record (author, date, sources consulted = none from Goethe/Hueber content).
3. No reproduction of Goethe or Hueber texts, questions or options. No paraphrase of a specific source text.
4. No reuse of Goethe audio. No voice imitation of Goethe recordings.
5. No cloning of Goethe artwork (clipboard graphic, slide frames, ad layouts). Klarweg designs its own visual language (engine spec §8).
6. Instruction wording: functional instructions are paraphrased unless legal review (OD-08) allows the standard rubric phrases.
7. Automated similarity gate (Q14) plus human originality sign-off per form.
8. Reference materials stay private benchmarking material outside the product repos. Product docs cite them by URL and hash only.
9. Trademark: nominative reference only ("prepares for the Goethe-Zertifikat B1"). Every result screen states "Klarweg simulation – not an official Goethe-Institut result."

---

## 11. Dependency graph and review

```
REFERENCE STANDARD (GOETHE-B1-ADULT-MASTER-STANDARD.md)
        ↓
CONTENT MODEL (EXAM-ITEM-SCHEMA.md · level_config B1)
        ↓
EXAM FORM (assembled, validated, released: Mock M0 → Sets 01–10)
        ↓
SESSION (attempt · lease · server timers · assignment)
        ↓
EXAM ENGINE (renderer · Hören phase engine · writing editor · speaking recorder)
        ↓
SCORING (objective · rubric aggregation · conversion · status)
        ↓
RESULT (simulation result · educational feedback · admin analytics)
        ↓
CALIBRATION (pilot statistics · rater agreement · equating)
        ↓
10 SETS (authored only after M0 passes its gates)
```

| Category | Items |
|---|---|
| **Reusable** | Session/auth, entitlements, CORS/CSRF, rate-limit pattern, signed-URL pattern, R2 release pattern, Tutor gateway + provider layer + cost accounting, design tokens, Pages allowlist deploy |
| **Must be new** | `klarweg-exam` Worker, D1 `klarweg-exam`, R2 content + recordings buckets, Access `/exam/*` proxy routes, exam frontend (`exam/`), Hören phase engine, writing editor, speaking recorder + chunk ingest, scoring engine, rating console, content repo + build/validation CLI, analytics |
| **Blocked** | Speaking long capture (needs a new path, not the 30 s pipeline); audio production (voices, studio route OD-14); full official Hören pause timings (Standard B3); Safari/third-party cookie risk (OD-20) |
| **Owner decisions** | OD-01…OD-16 (Standard §14) plus OD-17…OD-34 (§12 below) |
| **Manual assets** | Studio/premium recordings, illustrations/photos (licence-clean), simulated-partner recordings, teacher rating time |
| **External review** | Legal (instructions/rubric wording, trademark, privacy and voice data), native-speaker linguists, B1 teachers/raters, accessibility audit, security review/pen test |

---

## 12. Owner-decision register (additions to Standard §14)

| ID | Decision | Proposal |
|---|---|---|
| OD-17 | New Worker vs routes inside Access | New private `klarweg-exam` behind an Access proxy (this doc) |
| OD-18 | Exam entitlement | B1 level or LIFETIME grants B1 exam access; Mock free or paid? |
| OD-19 | Rater/admin authentication | Same user session + `exam_roles`; 2FA for raters |
| OD-20 | Same-site domain before launch | `klarweg.in` + `api.klarweg.in` |
| OD-21 | Data retention (texts, results, recordings) | Results indefinite (user-deletable); recordings ≤ 90 days after final rating; texts 2 years |
| OD-22 | Attempt limits | Mock 1 graded attempt + practice; Sets 1 attempt each, repeat after all used |
| OD-23 | Authoring surface | Git content repo first; admin UI later (writes PRs) |
| OD-24 | Live AI partner vs scripted partner in Sprechen | Scripted, pre-recorded for calibration forms; live AI only as practice |
| OD-25 | Score adjustment after equating | Keep the official conversion table for display; equivalence via form revision, not score transformation |
| OD-26 | Offline tolerance | Continue offline ≤ 5 min; submit requires server ack |
| OD-27 | Mobile Sprechen support in Mock | Desktop/tablet required for full Simulation; mobile allowed for practice |
| OD-28 | Abandonment of remaining modules after a break | Not returned within 24 h → `auto_abandon` (not taken, not 0) |
| OD-29 | Module order in full simulation | Fixed L→H→S→Sp (official recommended order) |
| OD-30 | How a Schreiben third rating combines | Bewertung 3 replaces the mean (official text silent) |
| OD-31 | Re-scoring after key corrections | Versioned re-score + learner notification |
| OD-32 | Sprechen Teil 3 construct for solo learners | Simulated pair with a pre-recorded partner presentation |
| OD-33 | Re-take of a technically failed speaking part | Allowed once, new attempt slot, logged |
| OD-34 | Pilot cohort incentives and research consent | Separate research consent; modest incentive |

## 13. Risks
| Risk | Impact | Mitigation |
|---|---|---|
| Third-party cookie blocking (cross-site API) | Exam API unusable on some browsers | OD-20 same-site domain; detect and warn before start |
| Key leakage via static hosting | Exam compromised | Keys only in R2/D1; Q17 gate; no exam content on Pages |
| Audio playback variance (autoplay policies, iOS) | Unequal Hören conditions | Preload to blob, user-gesture start, phase engine, device check (audio spec) |
| Speaking capture failures | Unratable Sprechen | Chunked upload, local buffering, retry, incident handling (speaking spec) |
| AI rating bias or drift | Unfair feedback | AI = pre-rating only; teacher double rating; agreement monitoring (calibration plan) |
| Small pilot samples | Over-confident equivalence claims | Explicit staging: alignment → structural → empirical → statistical (calibration plan) |
| Content exposure across attempts | Item memorisation | Attempt limits, form rotation, item exposure tracking |
| D1 write contention at scale | Autosave latency | Debounced batched writes; Durable Object per attempt if > 200 concurrent attempts [DESIGN threshold] |
| Scope creep into chapter engine | Regressions in production | Hard isolation (§1.2); no shared runtime files except tokens |
