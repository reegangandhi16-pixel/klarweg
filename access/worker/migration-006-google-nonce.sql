CREATE TABLE IF NOT EXISTS google_login_nonces (
  nonce TEXT PRIMARY KEY,
  expires_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_google_login_nonces_expires_at
  ON google_login_nonces(expires_at);
