-- Fixed-window rate-limit counters for POST /auth/login, guarding against
-- brute-force/credential-stuffing. Mirrors report/worker/schema.sql's
-- rate_counters table exactly (same shape, same fixed-window design),
-- kept in this Worker's own D1 rather than shared, since the two Workers
-- do not share a database.
CREATE TABLE IF NOT EXISTS rate_counters (
  bucket     TEXT NOT NULL,
  window_end INTEGER NOT NULL,
  hits       INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (bucket, window_end)
);
CREATE INDEX IF NOT EXISTS rate_counters_exp_idx ON rate_counters (window_end);
