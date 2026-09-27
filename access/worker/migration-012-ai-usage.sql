-- Klarweg AI usage accounting (cost controls for the AI tutor).
--
-- Stores COUNTS only — never learner text, never prompts, never model
-- output. Additive: no existing table is touched.
--
-- ai_usage   per-user consumption per period, used for the per-user
--            daily and monthly quotas. period is 'd:YYYY-MM-DD' or
--            'm:YYYY-MM' (UTC). units is the quota currency: most
--            actions cost 1 unit, heavier ones more (see ai.js).
-- ai_global  whole-service consumption per UTC day, used for the global
--            daily request/spend ceiling (the "spend breaker").
CREATE TABLE IF NOT EXISTS ai_usage (
  user_id TEXT NOT NULL,
  period  TEXT NOT NULL,
  units   INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, period)
);
CREATE INDEX IF NOT EXISTS ai_usage_period_idx ON ai_usage (period);

CREATE TABLE IF NOT EXISTS ai_global (
  day           TEXT PRIMARY KEY,
  requests      INTEGER NOT NULL DEFAULT 0,
  input_tokens  INTEGER NOT NULL DEFAULT 0,
  output_tokens INTEGER NOT NULL DEFAULT 0,
  cost_micros   INTEGER NOT NULL DEFAULT 0,
  failures      INTEGER NOT NULL DEFAULT 0
);
