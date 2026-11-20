-- Account profile (account.js; client: account/index.html).
-- preferred_level: the learner's own choice of level to focus on (A1–B2),
--   NULL until they pick one. Display only — never an entitlement.
-- user_avatars: one small profile photo per user, re-encoded in the browser
--   to a 256×256 JPEG/WebP/PNG and validated by magic bytes in the Worker
--   (≤ 96 KB decoded, stored base64). Returned only to the signed-in owner
--   as a data: URL.
-- Additive only: no existing row or column changes.

ALTER TABLE users ADD COLUMN preferred_level TEXT;

CREATE TABLE IF NOT EXISTS user_avatars (
  user_id     TEXT PRIMARY KEY,
  mime        TEXT NOT NULL,
  data_b64    TEXT NOT NULL,
  updated_at  INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
