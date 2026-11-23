-- Live teacher marketplace (src/live-catalog.js, live-demos.js, live-admin.js,
-- and the marketplace path of enrolments.js).
--
-- REQUIRES migration-013 (consult_bookings) and migration-014
-- (live_enrolments, live_payments) to be applied first. Production has
-- neither yet (checked 2026-11-20), so apply 013 → 014 → 019 together,
-- non-production first. Additive only: no existing row changes meaning.
--
-- Still completely separate from the self-paced checkout: nothing here
-- touches orders, user_entitlements or entitlements.

-- ₹100 demo bookings reuse consult_bookings (same ₹100 amount CHECK, same
-- partial UNIQUE slot index, same Cashfree settlement, webhook, cron
-- reconciliation and join-link route). kind tells them apart.
ALTER TABLE consult_bookings ADD COLUMN kind TEXT NOT NULL DEFAULT 'same-day' CHECK (kind IN ('same-day', 'demo'));
ALTER TABLE consult_bookings ADD COLUMN contact_name TEXT;
ALTER TABLE consult_bookings ADD COLUMN contact_phone TEXT;
ALTER TABLE consult_bookings ADD COLUMN reschedule_count INTEGER NOT NULL DEFAULT 0 CHECK (reschedule_count >= 0);
ALTER TABLE consult_bookings ADD COLUMN original_date TEXT;          -- first booked date, if rescheduled
ALTER TABLE consult_bookings ADD COLUMN original_slot TEXT;
ALTER TABLE consult_bookings ADD COLUMN refund_status TEXT CHECK (refund_status IS NULL OR refund_status IN ('requested', 'refunded'));
ALTER TABLE consult_bookings ADD COLUMN admin_note TEXT;

-- Teacher-specific demo availability, set by an admin. No row = not bookable.
-- Only Friday/Sunday dates and 16:20–21:40 IST slots are accepted (Worker).
CREATE TABLE IF NOT EXISTS demo_slots (
  teacher_id  TEXT NOT NULL,
  date        TEXT NOT NULL,              -- YYYY-MM-DD, Asia/Kolkata
  slot_start  TEXT NOT NULL,              -- HH:MM, Asia/Kolkata
  status      TEXT NOT NULL CHECK (status IN ('open', 'closed')),
  updated_by  TEXT NOT NULL,              -- admin user id
  updated_at  INTEGER NOT NULL,
  PRIMARY KEY (teacher_id, date, slot_start)
);
CREATE INDEX IF NOT EXISTS demo_slots_open ON demo_slots (teacher_id, status, date);

-- Batches of a teacher × level × format course. Dates stay NULL ("To be
-- announced") until the owner provides them. Only status 'open' with both
-- dates, a schedule, a capacity and an approval can be charged.
CREATE TABLE IF NOT EXISTS live_batches (
  id              TEXT PRIMARY KEY,       -- bat_<uuid>
  course_id       TEXT NOT NULL,          -- live-<teacher>-<level>-<format>
  teacher_id      TEXT NOT NULL,
  level           TEXT NOT NULL CHECK (level IN ('A1', 'A2', 'B1', 'B2')),
  format          TEXT NOT NULL CHECK (format IN ('group', 'individual')),
  start_date      TEXT,                   -- NULL = To be announced
  end_date        TEXT,
  schedule        TEXT,                   -- e.g. "Mon, Wed, Fri · 19:30–21:00 IST"
  capacity        INTEGER NOT NULL DEFAULT 0 CHECK (capacity >= 0),
  status          TEXT NOT NULL CHECK (status IN ('draft', 'announced', 'open', 'closed', 'cancelled')),
  fulfilment_note TEXT,                   -- what the learner receives; shown on checkout
  approved_by     TEXT,                   -- admin user id that opened it for payment
  approved_at     INTEGER,
  created_at      INTEGER NOT NULL,
  updated_at      INTEGER NOT NULL,
  CHECK (status <> 'open' OR (start_date IS NOT NULL AND end_date IS NOT NULL AND schedule IS NOT NULL AND capacity > 0 AND approved_by IS NOT NULL)),
  CHECK (start_date IS NULL OR end_date IS NULL OR end_date >= start_date)
);
CREATE INDEX IF NOT EXISTS live_batches_course ON live_batches (course_id, status);

-- Operational pauses per teacher (verification itself is code: live-catalog.js).
CREATE TABLE IF NOT EXISTS live_teacher_settings (
  teacher_id     TEXT PRIMARY KEY,
  demo_paused    INTEGER NOT NULL DEFAULT 0 CHECK (demo_paused IN (0, 1)),
  courses_paused INTEGER NOT NULL DEFAULT 0 CHECK (courses_paused IN (0, 1)),
  updated_by     TEXT NOT NULL,
  updated_at     INTEGER NOT NULL
);

-- Coupon on/off switch. Codes, formats and amounts are fixed in code.
CREATE TABLE IF NOT EXISTS live_coupons (
  code        TEXT PRIMARY KEY CHECK (code IN ('GROUP3000', 'PERSONAL7000')),
  active      INTEGER NOT NULL DEFAULT 1 CHECK (active IN (0, 1)),
  updated_by  TEXT NOT NULL,
  updated_at  INTEGER NOT NULL
);
INSERT OR IGNORE INTO live_coupons (code, active, updated_by, updated_at) VALUES
  ('GROUP3000', 1, 'migration-019', 0),
  ('PERSONAL7000', 1, 'migration-019', 0);

-- Marketplace enrolments keep the legacy columns (batch = batch id for
-- marketplace rows) and record exactly how the amount was made up.
ALTER TABLE live_enrolments ADD COLUMN batch_id TEXT;
ALTER TABLE live_enrolments ADD COLUMN teacher_id TEXT;
ALTER TABLE live_enrolments ADD COLUMN level TEXT;
ALTER TABLE live_enrolments ADD COLUMN format TEXT;
ALTER TABLE live_enrolments ADD COLUMN original_paise INTEGER CHECK (original_paise IS NULL OR original_paise > 0);
ALTER TABLE live_enrolments ADD COLUMN coupon_code TEXT;
ALTER TABLE live_enrolments ADD COLUMN discount_paise INTEGER NOT NULL DEFAULT 0 CHECK (discount_paise >= 0);
ALTER TABLE live_enrolments ADD COLUMN refund_status TEXT CHECK (refund_status IS NULL OR refund_status IN ('requested', 'refunded'));
ALTER TABLE live_enrolments ADD COLUMN admin_note TEXT;

-- Every admin change, for accountability.
CREATE TABLE IF NOT EXISTS live_admin_audit (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  at       INTEGER NOT NULL,
  user_id  TEXT NOT NULL,
  action   TEXT NOT NULL,
  detail   TEXT NOT NULL DEFAULT '{}'
);
CREATE INDEX IF NOT EXISTS live_admin_audit_at ON live_admin_audit (at);
