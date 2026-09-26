const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

function emptyEntitlements() {
  return {
    A1: false,
    A2: false,
    B1: false,
    B2: false,
    C1: false,
    C2: false,
    LIFETIME: false
  };
}

/* Calendar-correct "N years from now", not a fixed day-count offset
   (365*2 or 730 days would drift by up to a day depending on how many
   Feb 29ths the window happens to cross). Advancing the calendar year
   while keeping month/day/time is what a human means by "2 years
   later" — the one edge case worth knowing: a grant made on Feb 29
   rolls forward to March 1 two years later (JS's own day-overflow
   behavior for a target year that has no Feb 29), never Feb 28. */
function yearsFrom(unixSeconds, years) {
  const d = new Date(unixSeconds * 1000);
  d.setUTCFullYear(d.getUTCFullYear() + years);
  return Math.floor(d.getTime() / 1000);
}

const SINGLE_LEVEL_ACCESS_YEARS = 2;

export async function readEntitlements(db, userId) {
  const entitlements = emptyEntitlements();
  const now = Math.floor(Date.now() / 1000);

  const result = await db
    .prepare(
      `SELECT product_id, expires_at
       FROM user_entitlements
       WHERE user_id = ?1`
    )
    .bind(userId)
    .all();

  for (const row of result.results || []) {
    const productId = String(row.product_id || "").toUpperCase();
    // A NULL expires_at never expires (this is how every pre-2-year-
    // policy row is grandfathered, and how every LIFETIME-grant row —
    // the LIFETIME row itself and the 6 per-level rows granted
    // alongside it — is written by grantProduct() below).
    const expired = row.expires_at != null && row.expires_at <= now;

    if (productId in entitlements && !expired) {
      entitlements[productId] = true;
    }
  }

  // Unchanged: LIFETIME being true (i.e. not expired, per the loop
  // above) is what grants every level — this does not re-check the
  // 6 auxiliary per-level rows' own expiry, so a mistake there would
  // never lock out a real Lifetime owner.
  if (entitlements.LIFETIME) {
    for (const level of LEVELS) {
      entitlements[level] = true;
    }
  }

  return entitlements;
}

export async function grantProduct(db, userId, productId, orderId) {
  const normalizedProductId =
    typeof productId === "string"
      ? productId.trim().toUpperCase()
      : "";

  if (!["A1", "A2", "B1", "B2", "C1", "C2", "LIFETIME"].includes(normalizedProductId)) {
    throw new Error("Invalid entitlement product.");
  }

  const now = Math.floor(Date.now() / 1000);
  const isLifetime = normalizedProductId === "LIFETIME";

  // LIFETIME never expires — including the 6 per-level rows granted
  // alongside it (see the readEntitlements() comment above for why
  // that's safe: the LIFETIME row's own expiry is what actually
  // matters). A standalone single-level purchase expires
  // SINGLE_LEVEL_ACCESS_YEARS from the moment access is granted here
  // (server-side payment confirmation), not from order creation.
  const expiresAt = isLifetime
    ? null
    : yearsFrom(now, SINGLE_LEVEL_ACCESS_YEARS);

  const grants = isLifetime ? ["LIFETIME", ...LEVELS] : [normalizedProductId];

  const statements = grants.map((product) =>
    db
      .prepare(
        `INSERT INTO user_entitlements
          (user_id, product_id, source_order_id, granted_at, expires_at)
         VALUES (?1, ?2, ?3, ?4, ?5)
         ON CONFLICT(user_id, product_id) DO NOTHING`
      )
      .bind(userId, product, orderId, now, expiresAt)
  );

  await db.batch(statements);

  return readEntitlements(db, userId);
}

export { LEVELS };
