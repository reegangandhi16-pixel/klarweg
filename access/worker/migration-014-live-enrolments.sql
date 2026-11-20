-- Live-course enrolment with online payment (src/enrolments.js).
--
-- Completely separate from the self-paced checkout and from consultation
-- bookings: no row here touches orders, user_entitlements, entitlements or
-- consult_bookings, and an enrolment payment never calls grantProduct().
-- Additive: no existing table is touched.
--
-- Full payment only (owner decision, 2026-10-21): an enrolment is paid by
-- one payment of the whole course fee. There are no instalments.
--
-- live_enrolments  one row per enrolment attempt in one course batch.
--                  A seat is held by a row whose status is pending (while the
--                  learner pays) or enrolled. The Worker inserts a pending row
--                  only while fewer than the course's capacity are held (one
--                  conditional INSERT, so two learners cannot take the last
--                  seat), and a learner holds at most one active row per
--                  course batch (partial unique index below).
-- live_payments    one row per Cashfree order (id = Cashfree order id,
--                  "enrp_…") for an enrolment's course fee. A retry after an
--                  order lapses opens a new row; at most one pending or paid
--                  row per enrolment, so the fee cannot be charged twice.
--
-- live_enrolments.status:
--   pending   seat held while the fee is paid (until hold_expires_at)
--   enrolled  the fee verified with Cashfree's API; seat taken
--   expired   hold ran out before the fee was paid
--   released  replaced by a new attempt after its order lapsed
--   failed    the gateway order could not be created
--   review    paid but not confirmable (late payment with no seat left, or a
--             second active enrolment): a person checks it and refunds
--   cancelled cancelled by Klarweg (e.g. after a refund; set by hand)
-- live_payments.status:
--   pending   gateway order open (until expires_at)
--   paid      Cashfree's API reported PAID for exactly amount_paise INR
--   expired   the gateway order expired or was replaced
--   failed    the gateway order could not be used
--   review    amount, currency or order mismatch: never counted as paid
--   refunded  refunded in the Cashfree dashboard (set by hand)
CREATE TABLE IF NOT EXISTS live_enrolments (
  id                 TEXT PRIMARY KEY,                 -- enr_<uuid>
  ref                TEXT NOT NULL UNIQUE,             -- shown to the learner, e.g. KWE-7F3K9Q2M
  user_id            TEXT NOT NULL,
  course_id          TEXT NOT NULL,                    -- e.g. live-a1
  batch              TEXT NOT NULL,                    -- batch start date, YYYY-MM-DD (IST)
  status             TEXT NOT NULL CHECK (status IN ('pending','enrolled','expired','released','failed','review','cancelled')),
  total_paise        INTEGER NOT NULL CHECK (total_paise > 0),
  credit_paise       INTEGER NOT NULL DEFAULT 0 CHECK (credit_paise >= 0),
  credit_consult_ref TEXT,                             -- the consultation adjusted against this fee, if any
  hold_expires_at    INTEGER NOT NULL,                 -- unix seconds
  review_reason      TEXT,
  created_at         INTEGER NOT NULL,
  updated_at         INTEGER NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS live_enrolments_one_active_per_user
  ON live_enrolments (user_id, course_id, batch)
  WHERE status IN ('pending', 'enrolled');

CREATE UNIQUE INDEX IF NOT EXISTS live_enrolments_credit_once
  ON live_enrolments (credit_consult_ref)
  WHERE credit_consult_ref IS NOT NULL AND status IN ('pending', 'enrolled', 'review');

CREATE INDEX IF NOT EXISTS live_enrolments_seats ON live_enrolments (course_id, batch, status);
CREATE INDEX IF NOT EXISTS live_enrolments_user_idx ON live_enrolments (user_id, created_at);

CREATE TABLE IF NOT EXISTS live_payments (
  id                 TEXT PRIMARY KEY,                 -- enrp_<uuid>; also the Cashfree order id
  enrolment_id       TEXT NOT NULL,
  amount_paise       INTEGER NOT NULL CHECK (amount_paise > 0),
  currency           TEXT NOT NULL DEFAULT 'INR' CHECK (currency = 'INR'),
  status             TEXT NOT NULL CHECK (status IN ('pending','paid','expired','failed','review','refunded')),
  payment_session_id TEXT,
  payment_id         TEXT UNIQUE,                      -- Cashfree cf_payment_id
  expires_at         INTEGER NOT NULL,                 -- unix seconds
  review_reason      TEXT,
  created_at         INTEGER NOT NULL,
  updated_at         INTEGER NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS live_payments_one_open_per_enrolment
  ON live_payments (enrolment_id)
  WHERE status IN ('pending', 'paid');

CREATE INDEX IF NOT EXISTS live_payments_enrolment_idx ON live_payments (enrolment_id);
CREATE INDEX IF NOT EXISTS live_payments_status_idx ON live_payments (status, expires_at);
