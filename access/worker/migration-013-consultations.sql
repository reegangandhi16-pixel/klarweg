-- Same-day ₹100 consultation booking (src/consultations.js).
--
-- Completely separate from the self-paced checkout: no row here ever
-- touches orders, user_entitlements or entitlements, and a consultation
-- payment never calls grantProduct(). Additive: no existing table is
-- touched.
--
-- consult_availability  one row per teacher per IST date that the owner
--                       has CONFIRMED in writing. No row = not bookable.
--                       Written by hand (wrangler d1 execute), never by
--                       the Worker; see docs/live-classes-consultation-booking.md.
-- consult_bookings      one row per booking attempt. A slot is held by
--                       at most one row whose status is pending or
--                       confirmed (the partial unique index below), so two
--                       learners can never hold or pay for the same slot.
--                       A review row never blocks a slot.
--
-- status: pending   held while the learner pays (until hold_expires_at)
--         confirmed payment verified with Cashfree's API; slot reserved
--         expired   hold ran out unpaid, or the gateway order expired
--         released  the learner started a different booking instead
--         failed    the gateway order could not be created
--         review    paid but not confirmable (amount/currency mismatch,
--                   or a late payment for a slot someone else now holds):
--                   the owner checks it and refunds by hand
--         cancelled cancelled by Klarweg, e.g. after a refund (set by hand,
--                   docs/live-classes-online-payments.md §5); frees the slot
CREATE TABLE IF NOT EXISTS consult_availability (
  teacher_id   TEXT NOT NULL,
  date         TEXT NOT NULL,           -- YYYY-MM-DD, Asia/Kolkata
  confirmed_by TEXT NOT NULL,           -- who confirmed, e.g. 'owner'
  confirmed_at INTEGER NOT NULL,        -- unix seconds
  PRIMARY KEY (teacher_id, date)
);

CREATE TABLE IF NOT EXISTS consult_bookings (
  id                 TEXT PRIMARY KEY,                -- cons_<uuid>; also the Cashfree order id
  ref                TEXT NOT NULL UNIQUE,            -- shown to the learner, e.g. KWC-7F3K9Q2M
  user_id            TEXT NOT NULL,
  teacher_id         TEXT NOT NULL,
  date               TEXT NOT NULL,                   -- YYYY-MM-DD, Asia/Kolkata
  slot_start         TEXT NOT NULL,                   -- HH:MM, Asia/Kolkata
  status             TEXT NOT NULL CHECK (status IN ('pending','confirmed','expired','released','failed','review','cancelled')),
  amount_paise       INTEGER NOT NULL CHECK (amount_paise = 10000),
  currency           TEXT NOT NULL DEFAULT 'INR' CHECK (currency = 'INR'),
  cashfree_order_id  TEXT NOT NULL UNIQUE,
  payment_session_id TEXT,
  payment_id         TEXT UNIQUE,
  hold_expires_at    INTEGER NOT NULL,                -- unix seconds
  review_reason      TEXT,
  created_at         INTEGER NOT NULL,
  updated_at         INTEGER NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS consult_bookings_active_slot
  ON consult_bookings (teacher_id, date, slot_start)
  WHERE status IN ('pending', 'confirmed');

CREATE UNIQUE INDEX IF NOT EXISTS consult_bookings_one_pending_per_user
  ON consult_bookings (user_id)
  WHERE status = 'pending';

CREATE INDEX IF NOT EXISTS consult_bookings_user_idx ON consult_bookings (user_id, created_at);
