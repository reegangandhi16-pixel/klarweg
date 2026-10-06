-- Klarweg exam database (D1 "klarweg-exam") — separate from klarweg-access.
-- Users are referenced by their Access user id (usr_…); no cross-database FKs.
-- Answer keys live ONLY in item_keys (server side) — never in browser packages.

-- ---------- content registry (imported from immutable releases) ----------
CREATE TABLE level_configs (
  id          TEXT PRIMARY KEY,                 -- lc:b1@1
  level       TEXT NOT NULL,
  version     INTEGER NOT NULL,
  json        TEXT NOT NULL,
  created_at  TEXT NOT NULL
);

CREATE TABLE forms (
  id              TEXT PRIMARY KEY,             -- frm:b1:synthetic-s0@1 (id carries the revision)
  level_config_id TEXT NOT NULL REFERENCES level_configs(id),
  kind            TEXT NOT NULL CHECK (kind IN ('synthetic','mock','set','anchor_form')),
  label           TEXT NOT NULL,
  status          TEXT NOT NULL CHECK (status IN ('draft','review','pilot','live','retired')),
  rev             INTEGER NOT NULL CHECK (rev >= 1),
  release         TEXT NOT NULL,
  created_at      TEXT NOT NULL
);
CREATE INDEX idx_forms_assignable ON forms (kind, status);

CREATE TABLE form_modules (
  form_id         TEXT NOT NULL REFERENCES forms(id),
  module          TEXT NOT NULL CHECK (module IN ('lesen','hoeren','schreiben','sprechen')),
  module_order    INTEGER NOT NULL,
  package_key     TEXT NOT NULL,                -- R2 key of the KEYLESS package
  package_sha256  TEXT NOT NULL,
  PRIMARY KEY (form_id, module)
);

CREATE TABLE items_index (
  item_id      TEXT PRIMARY KEY,
  form_id      TEXT NOT NULL REFERENCES forms(id),
  module       TEXT NOT NULL,
  part         INTEGER NOT NULL,
  display_no   TEXT,
  interaction  TEXT NOT NULL,
  is_example   INTEGER NOT NULL CHECK (is_example IN (0,1)),
  points       INTEGER NOT NULL,               -- 1 = scored objective item, 0 = example / productive / topic choice
  rubric_id    TEXT
);
CREATE INDEX idx_items_form_module ON items_index (form_id, module);

CREATE TABLE item_keys (                       -- SERVER ONLY
  item_id   TEXT PRIMARY KEY REFERENCES items_index(item_id),
  form_id   TEXT NOT NULL REFERENCES forms(id),
  key_json  TEXT NOT NULL
);

CREATE TABLE form_assets (
  form_id      TEXT NOT NULL REFERENCES forms(id),
  asset_id     TEXT NOT NULL,
  module       TEXT,
  r2_key       TEXT NOT NULL,
  mime         TEXT NOT NULL,
  bytes        INTEGER NOT NULL,
  sha256       TEXT NOT NULL,
  duration_ms  INTEGER,
  PRIMARY KEY (form_id, asset_id)
);

-- ---------- access, roles, accommodations ----------
CREATE TABLE exam_access (                      -- separate from chapter/level entitlement (register OD-18)
  id           TEXT PRIMARY KEY,
  user_id      TEXT NOT NULL,
  level        TEXT NOT NULL,
  scope        TEXT NOT NULL CHECK (scope IN ('synthetic','mock','sets')),
  source       TEXT NOT NULL,                   -- admin_grant | order:<id> | pilot
  granted_by   TEXT,
  granted_at   INTEGER NOT NULL,
  valid_until  INTEGER,
  revoked_at   INTEGER
);
CREATE INDEX idx_exam_access_user ON exam_access (user_id, level, scope);

CREATE TABLE exam_roles (
  user_id     TEXT NOT NULL,
  role        TEXT NOT NULL CHECK (role IN ('rater','lead_rater','content_admin','exam_admin')),
  granted_by  TEXT,
  granted_at  INTEGER NOT NULL,
  PRIMARY KEY (user_id, role)
);

CREATE TABLE accommodations (
  user_id          TEXT PRIMARY KEY,
  time_multiplier  REAL NOT NULL DEFAULT 1.0 CHECK (time_multiplier >= 1.0 AND time_multiplier <= 2.0),
  granted_by       TEXT,
  granted_at       INTEGER NOT NULL,
  valid_until      INTEGER
);

-- ---------- attempts (exam sessions) ----------
CREATE TABLE attempts (
  id                 TEXT PRIMARY KEY,         -- att_<uuid>
  user_id            TEXT NOT NULL,
  mode               TEXT NOT NULL CHECK (mode IN ('synthetic_full','mock_m0','simulation_full')),
  level              TEXT NOT NULL,
  form_id            TEXT NOT NULL REFERENCES forms(id),   -- immutable once assigned
  release            TEXT NOT NULL,
  status             TEXT NOT NULL CHECK (status IN ('created','in_progress','completed','voided')),
  time_multiplier    REAL NOT NULL DEFAULT 1.0,
  client_request_id  TEXT NOT NULL,
  assignment_reason  TEXT NOT NULL,
  assignment_seed    TEXT NOT NULL,
  created_at         INTEGER NOT NULL,
  started_at         INTEGER,
  completed_at       INTEGER,
  UNIQUE (user_id, client_request_id)
);
CREATE INDEX idx_attempts_user ON attempts (user_id, status);
CREATE INDEX idx_attempts_form ON attempts (form_id);
CREATE UNIQUE INDEX idx_attempts_one_open ON attempts (user_id, mode) WHERE status IN ('created','in_progress');

CREATE TABLE attempt_modules (
  attempt_id       TEXT NOT NULL REFERENCES attempts(id),
  module           TEXT NOT NULL,
  module_order     INTEGER NOT NULL,
  status           TEXT NOT NULL CHECK (status IN ('locked','available','running','submitting','submitted')),   -- submitting = closed to saves, finalization pending
  started_at       INTEGER,
  deadline_at      INTEGER,                    -- server-authoritative; never moved by the client
  plan_started_at  INTEGER,                    -- Hören: phase schedule base (after audio readiness)
  plan_shift_ms    INTEGER NOT NULL DEFAULT 0, -- Hören: added by an authorised recovery replay
  submitted_at     INTEGER,
  submit_kind      TEXT CHECK (submit_kind IN ('manual','auto_deadline','admin')),
  plan_json        TEXT,
  seq_high         INTEGER NOT NULL DEFAULT 0,
  recovery_used    INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (attempt_id, module)
);
CREATE INDEX idx_attempt_modules_deadline ON attempt_modules (status, deadline_at);

CREATE TABLE attempt_leases (                   -- one active device lease per attempt
  attempt_id   TEXT PRIMARY KEY REFERENCES attempts(id),
  lease_id     TEXT NOT NULL,
  device_id    TEXT NOT NULL,
  generation   INTEGER NOT NULL DEFAULT 1,
  issued_at    INTEGER NOT NULL,
  renewed_at   INTEGER NOT NULL,
  expires_at   INTEGER NOT NULL
);

CREATE TABLE request_log (                      -- idempotency: (attempt, request id) → stored response
  attempt_id     TEXT NOT NULL,
  request_id     TEXT NOT NULL,
  route          TEXT NOT NULL,
  status         INTEGER NOT NULL,
  response_json  TEXT NOT NULL,
  created_at     INTEGER NOT NULL,
  PRIMARY KEY (attempt_id, request_id)
);

-- ---------- answers ----------
CREATE TABLE responses_current (
  attempt_id  TEXT NOT NULL,
  item_id     TEXT NOT NULL,
  module      TEXT NOT NULL,
  value_json  TEXT NOT NULL,
  seq         INTEGER NOT NULL,                -- save sequence: only strictly higher seq replaces
  client_ts   INTEGER,
  server_ts   INTEGER NOT NULL,
  PRIMARY KEY (attempt_id, item_id)
);

CREATE TABLE response_events (                  -- append-only audit + calibration (answer changes)
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  attempt_id  TEXT NOT NULL,
  item_id     TEXT NOT NULL,
  value_json  TEXT NOT NULL,
  seq         INTEGER NOT NULL,
  client_ts   INTEGER,
  server_ts   INTEGER NOT NULL,
  outcome     TEXT NOT NULL CHECK (outcome IN ('accepted','stale'))
);
CREATE INDEX idx_response_events_attempt ON response_events (attempt_id, item_id);

CREATE TABLE writing_versions (
  attempt_id  TEXT NOT NULL,
  item_id     TEXT NOT NULL,
  version     INTEGER NOT NULL,
  text        TEXT NOT NULL,
  words       INTEGER NOT NULL,
  server_ts   INTEGER NOT NULL,
  PRIMARY KEY (attempt_id, item_id, version)
);

CREATE TABLE writing_final (
  attempt_id       TEXT NOT NULL,
  item_id          TEXT NOT NULL,
  text             TEXT NOT NULL,
  words            INTEGER NOT NULL,
  target_words     INTEGER,
  below_half_target INTEGER NOT NULL DEFAULT 0, -- rater hint for the official < 50 % length criterion
  sha256           TEXT NOT NULL,
  frozen_at        INTEGER NOT NULL,
  PRIMARY KEY (attempt_id, item_id)
);

-- ---------- listening ----------
CREATE TABLE audio_plays (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  attempt_id  TEXT NOT NULL,
  phase_seq   INTEGER NOT NULL,
  asset_id    TEXT NOT NULL,
  play_no     INTEGER NOT NULL,
  kind        TEXT NOT NULL CHECK (kind IN ('normal','recovery')),
  started_at  INTEGER NOT NULL,
  ended_at    INTEGER,
  outcome     TEXT NOT NULL CHECK (outcome IN ('started','complete','interrupted')),
  UNIQUE (attempt_id, phase_seq, kind)
);

-- ---------- speaking ----------
CREATE TABLE consents (
  id           TEXT PRIMARY KEY,
  user_id      TEXT NOT NULL,
  attempt_id   TEXT NOT NULL,
  kind         TEXT NOT NULL CHECK (kind IN ('speaking_recording')),
  version      TEXT NOT NULL,
  granted_at   INTEGER NOT NULL,
  withdrawn_at INTEGER
);
CREATE INDEX idx_consents_attempt ON consents (attempt_id, kind);

CREATE TABLE recording_chunks (
  attempt_id   TEXT NOT NULL,
  item_id      TEXT NOT NULL,
  part         INTEGER NOT NULL,
  turn         TEXT NOT NULL,
  seq          INTEGER NOT NULL,
  r2_key       TEXT NOT NULL,
  bytes        INTEGER NOT NULL,
  sha256       TEXT NOT NULL,
  mime         TEXT NOT NULL,
  received_at  INTEGER NOT NULL,
  PRIMARY KEY (attempt_id, part, turn, seq)
);

CREATE TABLE recording_turns (
  attempt_id    TEXT NOT NULL,
  item_id       TEXT NOT NULL,
  part          INTEGER NOT NULL,
  turn          TEXT NOT NULL,
  status        TEXT NOT NULL CHECK (status IN ('open','complete')),
  chunks        INTEGER NOT NULL DEFAULT 0,
  bytes         INTEGER NOT NULL DEFAULT 0,
  duration_ms   INTEGER,
  opened_at     INTEGER NOT NULL,
  completed_at  INTEGER,
  PRIMARY KEY (attempt_id, part, turn)
);

-- ---------- rating, scoring, results ----------
CREATE TABLE ratings (
  id            TEXT PRIMARY KEY,
  attempt_id    TEXT NOT NULL,
  module        TEXT NOT NULL CHECK (module IN ('schreiben','sprechen')),
  item_id       TEXT NOT NULL,                 -- item id, or 'sprechen:pron' for Aussprache
  rubric_id     TEXT NOT NULL,
  rater_id      TEXT NOT NULL,
  rater_kind    TEXT NOT NULL CHECK (rater_kind IN ('ai','teacher','lead')),
  round         INTEGER NOT NULL CHECK (round IN (1,2,3)),
  bands_json    TEXT NOT NULL,
  points_json   TEXT NOT NULL,
  total         REAL NOT NULL,
  submitted_at  INTEGER NOT NULL,
  UNIQUE (attempt_id, item_id, round)
);
CREATE INDEX idx_ratings_attempt ON ratings (attempt_id, module);

CREATE TABLE module_scores (
  attempt_id      TEXT NOT NULL,
  module          TEXT NOT NULL,
  status          TEXT NOT NULL CHECK (status IN ('final','pending_rating','pending_rule','not_taken')),
  raw             REAL,
  raw_unrounded   REAL,                        -- stored whenever an official rule is unresolved
  raw_max         REAL,
  points          INTEGER,
  max_points      INTEGER NOT NULL,
  pass            INTEGER,
  predikat        TEXT,
  rule_flags_json TEXT,
  scoring_version TEXT NOT NULL,
  inputs_sha      TEXT,
  computed_at     INTEGER NOT NULL,
  PRIMARY KEY (attempt_id, module)
);

CREATE TABLE results (
  attempt_id   TEXT PRIMARY KEY,
  json         TEXT NOT NULL,
  computed_at  INTEGER NOT NULL
);

-- ---------- operations ----------
CREATE TABLE incidents (
  id           TEXT PRIMARY KEY,
  attempt_id   TEXT NOT NULL,
  kind         TEXT NOT NULL,
  detail_json  TEXT NOT NULL,
  created_at   INTEGER NOT NULL
);
CREATE INDEX idx_incidents_attempt ON incidents (attempt_id);

CREATE TABLE audit_log (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  at           INTEGER NOT NULL,
  actor        TEXT NOT NULL,
  attempt_id   TEXT,
  action       TEXT NOT NULL,
  detail_json  TEXT NOT NULL
);
CREATE INDEX idx_audit_attempt ON audit_log (attempt_id, at);

CREATE TABLE rate_counters (
  bucket      TEXT NOT NULL,
  window_end  INTEGER NOT NULL,
  hits        INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (bucket, window_end)
);
