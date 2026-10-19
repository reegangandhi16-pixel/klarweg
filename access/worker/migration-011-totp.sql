-- migration-011-totp.sql — second factor (TOTP, RFC 6238) for exam raters and admins (register OD-19; owner decisions
-- D1–D8 of the OD-19 proposal: TOTP, 12 h freshness, 5 wrong codes per 15 min, 30 min lock after 10 consecutive
-- failures, 10 hashed single-use recovery codes, owner-only reset, Google sign-in included, secrets encrypted with the
-- Worker secret TOTP_ENC_KEY).
-- Apply to the NON-PRODUCTION Access D1 first (decision D9). Nothing here enables anything by itself: the exam Worker
-- asks for a fresh second factor only on rater/admin routes.

CREATE TABLE IF NOT EXISTS user_totp (
  user_id            TEXT PRIMARY KEY,
  secret_enc         TEXT,                          -- confirmed secret, AES-GCM with TOTP_ENC_KEY ("v1:<iv>:<ct>")
  pending_secret_enc TEXT,                          -- enrolment in progress, replaced on confirmation
  created_at         INTEGER NOT NULL,              -- unix seconds
  confirmed_at       INTEGER,
  last_used_step     INTEGER NOT NULL DEFAULT 0,    -- 30 s step of the last accepted code (no replay)
  failed_count       INTEGER NOT NULL DEFAULT 0,    -- consecutive wrong codes (D4)
  locked_until       INTEGER NOT NULL DEFAULT 0,    -- unix seconds
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS user_recovery_codes (
  user_id    TEXT NOT NULL,
  code_hash  TEXT NOT NULL,                         -- SHA-256 of "<user_id>:<normalised code>"
  created_at INTEGER NOT NULL,
  used_at    INTEGER,
  PRIMARY KEY (user_id, code_hash),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS mfa_audit (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  at         INTEGER NOT NULL,                      -- unix seconds
  user_id    TEXT NOT NULL,
  event      TEXT NOT NULL,                         -- enrolled · verified · verify_failed · locked · recovery_used · codes_regenerated · reset_by_owner
  detail     TEXT NOT NULL DEFAULT '{}'
);
CREATE INDEX IF NOT EXISTS idx_mfa_audit_user ON mfa_audit (user_id, at);

-- When this session last passed the second factor (unix seconds); cleared with the session.
ALTER TABLE sessions ADD COLUMN mfa_verified_at INTEGER;
