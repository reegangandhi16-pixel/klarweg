-- V10 probe schema. Applied BY THE OPERATOR to a separately created, EMPTY non-production D1 database
-- (wrangler d1 execute <verified name> --remote --file=probe-schema.sql), never by the Worker. The Worker only
-- verifies it and refuses every route unless exactly one marker matches its label and secret nonce.
CREATE TABLE v10_probe_marker (
  label         TEXT PRIMARY KEY CHECK (label LIKE 'nonprod-%'),
  nonce_sha256  TEXT NOT NULL CHECK (length(nonce_sha256) = 64),
  created_at    INTEGER NOT NULL
);
CREATE TABLE v10_assertions (id INTEGER PRIMARY KEY AUTOINCREMENT, ok INTEGER NOT NULL CHECK (ok = 1));
CREATE TABLE v10_ledger (op_key TEXT PRIMARY KEY, run_id TEXT NOT NULL, applied_at INTEGER NOT NULL);
CREATE TABLE v10_state (run_id TEXT PRIMARY KEY, state TEXT NOT NULL);
CREATE TABLE v10_rows (run_id TEXT NOT NULL, k TEXT NOT NULL, v TEXT NOT NULL, PRIMARY KEY (run_id, k));
