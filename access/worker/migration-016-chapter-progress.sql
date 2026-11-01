-- Chapter progress, account-backed.
-- One row per (user, chapter): the chapter page's own progress record
-- (sections done, quiz best score, learned words, voice preference, reset
-- marker, stored XP) as sanitised JSON — the same record the page keeps in
-- localStorage as "kw-ch-<chapter id>", so a learner's progress follows the
-- account across devices and browsers instead of living in one browser.
-- updated_at is server time in ms and doubles as the optimistic-concurrency
-- token for POST /progress/<chapter id> (baseUpdatedAt).

CREATE TABLE IF NOT EXISTS chapter_progress (
  user_id     TEXT NOT NULL,
  chapter_id  TEXT NOT NULL,
  record      TEXT NOT NULL,
  updated_at  INTEGER NOT NULL,
  PRIMARY KEY (user_id, chapter_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
