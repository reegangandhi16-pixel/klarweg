-- Saved Words: account-backed vocabulary saves + Leitner/SRS review state.
-- Mirrors the on-device SavedWord shape already used by kw-account.js and
-- the handoff spec in account/SAVED-WORDS-BACKEND.md, adapted from that
-- doc's generic Postgres design to this project's actual D1/SQLite
-- conventions: app-generated TEXT ids (matching usr_<uuid>), INTEGER
-- unix-seconds timestamps, and ON DELETE CASCADE ownership like every
-- other user-owned table (orders, user_entitlements).

CREATE TABLE IF NOT EXISTS saved_words (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL,
  de          TEXT NOT NULL,
  en          TEXT NOT NULL,
  word_type   TEXT,
  level       TEXT NOT NULL CHECK (level IN ('A1','A2','B1','B2','C1','C2')),
  gender      TEXT CHECK (gender IN ('m','f','n')),
  ipa         TEXT,
  source_ref  TEXT,
  created_at  INTEGER NOT NULL,

  -- Leitner/SRS review state, synced here so review.html never falls back
  -- to device-local state once saved words are account-backed.
  srs_box     INTEGER NOT NULL DEFAULT 0,
  srs_due_at  INTEGER,
  srs_reviews INTEGER NOT NULL DEFAULT 0,

  -- Matches the client's existing identity key (level + ':' + de) and
  -- gives POST idempotency for free via ON CONFLICT.
  UNIQUE (user_id, level, de),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_saved_words_user_id
  ON saved_words(user_id);

CREATE INDEX IF NOT EXISTS idx_saved_words_user_level
  ON saved_words(user_id, level);

CREATE INDEX IF NOT EXISTS idx_saved_words_due
  ON saved_words(user_id, srs_due_at);
