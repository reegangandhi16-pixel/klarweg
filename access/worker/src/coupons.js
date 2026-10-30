/* ============================================================
   Klarweg Access Worker · COUPONS (server-side, single source)
   ------------------------------------------------------------
   A coupon is a fixed discount on ONE product, defined here in
   reviewed code and switched on/off by a Worker variable, so it can
   be withdrawn from the Cloudflare dashboard without a deploy:
     COUPON_KLARWEGFREE1 = "on"   accepted
     anything else / unset        refused (the default)

   Trust model:
     · the browser sends a product id and a code — never an amount;
     · the payable amount is the catalogue price (products.js) minus
       the discount defined here, computed in paise, and must stay at
       least ₹1 (Cashfree's minimum) and below the original price;
     · unknown, disabled and wrong-product codes are refused, with the
       same answer for unknown and disabled so the switch leaks nothing.
   ============================================================ */

const COUPONS = Object.freeze({
  KLARWEGFREE1: Object.freeze({
    code: "KLARWEGFREE1",
    productId: "LIFETIME",       // Klarweg Lifetime (A1–C2), ₹4,999
    discountPaise: 499800,       // ₹4,998 off → ₹1 payable
    switchVar: "COUPON_KLARWEGFREE1"
  })
});

const MIN_PAYABLE_PAISE = 100;   // ₹1, Cashfree's minimum order amount

/* Case-insensitive and whitespace-safe: " klarweg free1 " → "KLARWEGFREE1".
   Anything that is not a short run of letters and digits is no code. */
export function normalizeCouponCode(raw) {
  if (typeof raw !== "string") return "";
  const code = raw.replace(/\s+/g, "").toUpperCase();
  return /^[A-Z0-9]{1,32}$/.test(code) ? code : "";
}

/* Prices `product` with an optional coupon code.
   No code (absent/blank) → the catalogue price, coupon null.
   Returns { ok: true, quote } or { ok: false, error, message }. */
export function priceWithCoupon(env, product, rawCode) {
  const original = product.amountPaise;
  const blank = rawCode == null || (typeof rawCode === "string" && rawCode.trim() === "");

  if (blank) {
    return { ok: true, quote: { productId: product.id, couponCode: null, originalPaise: original, discountPaise: 0, payablePaise: original } };
  }

  const code = normalizeCouponCode(rawCode);
  const coupon = code ? COUPONS[code] : null;

  if (!coupon || String(env[coupon.switchVar] || "").toLowerCase() !== "on") {
    return { ok: false, error: "invalid-coupon", message: "This coupon code is not valid." };
  }

  if (coupon.productId !== product.id) {
    return { ok: false, error: "coupon-not-eligible", message: "This coupon code cannot be used for this plan." };
  }

  const payable = original - coupon.discountPaise;

  if (!Number.isInteger(payable) || payable < MIN_PAYABLE_PAISE || payable >= original) {
    console.error("coupons: refused, payable out of range", coupon.code);
    return { ok: false, error: "invalid-coupon", message: "This coupon code is not valid." };
  }

  return {
    ok: true,
    quote: { productId: product.id, couponCode: coupon.code, originalPaise: original, discountPaise: coupon.discountPaise, payablePaise: payable }
  };
}
