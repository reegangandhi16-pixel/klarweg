-- Coupon pricing on self-paced orders (src/coupons.js, src/orders.js).
-- orders.amount_paise stays the amount actually charged (and verified
-- against Cashfree); these record how it was reached. Existing rows:
-- original_amount_paise NULL (= amount_paise), no discount, no coupon.
ALTER TABLE orders ADD COLUMN original_amount_paise INTEGER;
ALTER TABLE orders ADD COLUMN discount_paise INTEGER NOT NULL DEFAULT 0;
ALTER TABLE orders ADD COLUMN coupon_code TEXT;
