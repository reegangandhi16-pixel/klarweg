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

export async function readEntitlements(db, userId) {
  const entitlements = emptyEntitlements();

  const result = await db
    .prepare(
      `SELECT product_id
       FROM user_entitlements
       WHERE user_id = ?1`
    )
    .bind(userId)
    .all();

  for (const row of result.results || []) {
    const productId = String(row.product_id || "").toUpperCase();

    if (productId in entitlements) {
      entitlements[productId] = true;
    }
  }

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

  const grants =
    normalizedProductId === "LIFETIME"
      ? ["LIFETIME", ...LEVELS]
      : [normalizedProductId];

  const statements = grants.map((product) =>
    db
      .prepare(
        `INSERT INTO user_entitlements
          (user_id, product_id, source_order_id, granted_at)
         VALUES (?1, ?2, ?3, ?4)
         ON CONFLICT(user_id, product_id) DO NOTHING`
      )
      .bind(userId, product, orderId, now)
  );

  await db.batch(statements);

  return readEntitlements(db, userId);
}

export { LEVELS };
