-- 0002 — in-flight idempotency claims (ABSENT → PENDING → COMPLETED) for the routes that use idempotentAtomic().
-- Existing rows are completed responses and keep that meaning: the new state column defaults to 'completed'.
-- A pending row holds a claim token; its response_json is the placeholder '{}' and is never replayed.
ALTER TABLE request_log ADD COLUMN state TEXT NOT NULL DEFAULT 'completed' CHECK (state IN ('pending', 'completed'));
ALTER TABLE request_log ADD COLUMN claim_token TEXT;
ALTER TABLE request_log ADD COLUMN claimed_at INTEGER;
CREATE INDEX idx_request_log_pending ON request_log (state, claimed_at) WHERE state = 'pending';

-- One row per in-flight atomic commit: the first statement of the batch inserts ok = 1 only if the request still owns
-- its claim and the transition precondition holds; ok = 0 violates the CHECK, fails the statement and rolls the whole
-- batch back. The batch's last statement deletes the row again.
CREATE TABLE idempotency_assertions (
  token  TEXT PRIMARY KEY,
  ok     INTEGER NOT NULL CHECK (ok = 1)
);
