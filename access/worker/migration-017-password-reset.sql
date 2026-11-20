-- Password reset by email (src/password-reset.js).
-- One row per issued reset link. Only the SHA-256 hash of the link's token
-- is stored — the raw token exists only in the email and the learner's
-- browser, never in D1 or a log. A row is usable once: used_at is set by an
-- atomic conditional UPDATE when the new password is saved, and every other
-- open row of that user is deleted at the same moment. Rows past expires_at
-- are dead and are swept opportunistically.
CREATE TABLE IF NOT EXISTS password_reset_tokens (
  token_hash TEXT PRIMARY KEY,
  user_id    TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL,
  used_at    INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_password_reset_tokens_user
  ON password_reset_tokens(user_id);

CREATE INDEX IF NOT EXISTS idx_password_reset_tokens_expires
  ON password_reset_tokens(expires_at);
