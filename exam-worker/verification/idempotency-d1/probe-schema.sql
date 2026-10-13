-- Idempotency probe schema. Applied BY THE OPERATOR (wrangler d1 execute <verified probe db> --remote --file=...),
-- never by the Worker. The Worker only verifies it and refuses everything unless the marker row matches its secret.
CREATE TABLE idem_probe_marker (
  label         TEXT PRIMARY KEY CHECK (label LIKE 'nonprod-%'),
  nonce_sha256  TEXT NOT NULL CHECK (length(nonce_sha256) = 64),
  created_at    INTEGER NOT NULL
);
CREATE TABLE idem_probe_state (run_id TEXT PRIMARY KEY, state TEXT NOT NULL);
CREATE TABLE idem_probe_effects (id INTEGER PRIMARY KEY AUTOINCREMENT, run_id TEXT NOT NULL, request_id TEXT NOT NULL, tag TEXT NOT NULL);
