-- Coupon pricing on self-paced orders. Applied to production D1 on
-- 2026-10-30 for the Klarweg-side coupon, which was then withdrawn in
-- favour of Cashfree's own offers (customer enters the code on Cashfree's
-- checkout). The Worker no longer writes these columns; they stay because
-- production has them, and test databases must match production.
-- orders.amount_paise remains the amount Klarweg asked Cashfree to collect.
ALTER TABLE orders ADD COLUMN original_amount_paise INTEGER;
ALTER TABLE orders ADD COLUMN discount_paise INTEGER NOT NULL DEFAULT 0;
ALTER TABLE orders ADD COLUMN coupon_code TEXT;
