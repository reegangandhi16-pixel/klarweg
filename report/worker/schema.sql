-- Klarweg issue reporting — D1 schema (Cloudflare D1 / SQLite)
-- Apply:  wrangler d1 execute klarweg-reports --file=./schema.sql --remote
-- Then:   wrangler d1 execute klarweg-reports --file=./section-refs.sql --remote

CREATE TABLE IF NOT EXISTS reports (
  id             TEXT PRIMARY KEY,
  created_at     INTEGER NOT NULL,
  status         TEXT NOT NULL DEFAULT 'new'
                 CHECK (status IN ('new','reviewing','fixed','dismissed')),
  category       TEXT NOT NULL
                 CHECK (category IN ('content','grammar','vocabulary','exercise',
                                     'audio','reading_listening','display','technical','other')),
  -- Location: ALWAYS derived server-side from section_refs. Never client-supplied.
  level          TEXT NOT NULL CHECK (level IN ('a1','a2','b1','b2','c1','c2')),
  chapter_id     TEXT NOT NULL,
  chapter_no     INTEGER,
  section_id     TEXT NOT NULL,
  section_ref    TEXT NOT NULL,
  page_path      TEXT NOT NULL,
  description    TEXT NOT NULL,
  -- Claimed client metadata. Untrusted, display-only, deliberately minimal.
  claimed_title  TEXT,
  viewport       TEXT,
  dpr            REAL,
  ua_family      TEXT,
  prefers_rm     INTEGER,
  screenshot_key TEXT,
  dup_hash       TEXT NOT NULL,
  reporter_hash  TEXT NOT NULL,
  admin_notes    TEXT,
  updated_at     INTEGER,
  updated_by     TEXT
);
CREATE INDEX IF NOT EXISTS reports_created_idx ON reports (created_at DESC);
CREATE INDEX IF NOT EXISTS reports_status_idx  ON reports (status, created_at DESC);
CREATE INDEX IF NOT EXISTS reports_loc_idx     ON reports (level, chapter_id, created_at DESC);
CREATE INDEX IF NOT EXISTS reports_dup_idx     ON reports (dup_hash, created_at DESC);

-- Admin sessions. Only the SHA-256 of the cookie value is ever stored.
CREATE TABLE IF NOT EXISTS admin_sessions (
  token_hash TEXT PRIMARY KEY,
  admin_id   TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS admin_sessions_exp_idx ON admin_sessions (expires_at);

-- Rate-limit counters, keyed by (bucket, window). Swept lazily.
CREATE TABLE IF NOT EXISTS rate_counters (
  bucket     TEXT NOT NULL,
  window_end INTEGER NOT NULL,
  hits       INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (bucket, window_end)
);
CREATE INDEX IF NOT EXISTS rate_counters_exp_idx ON rate_counters (window_end);

-- Generated allowlist of every reportable section (259 chapters x ~12 sections).
-- Rebuilt by report/build-section-refs.mjs. Source of truth for level/chapter/
-- section/page_path on every inserted report.
CREATE TABLE IF NOT EXISTS section_refs (
  ref           TEXT PRIMARY KEY,
  level         TEXT NOT NULL,
  chapter_id    TEXT NOT NULL,
  chapter_no    INTEGER,
  chapter_title TEXT NOT NULL,
  section_id    TEXT NOT NULL,
  section_label TEXT NOT NULL,
  page_path     TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS section_refs_chapter_idx ON section_refs (level, chapter_id);
