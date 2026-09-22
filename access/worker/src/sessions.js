const SESSION_HASH_ALGORITHM = "SHA-256";

export const SESSION_TTL_SECONDS = 60 * 60 * 24 * 30;

function bytesToHex(bytes) {
  return Array.from(
    bytes,
    byte => byte.toString(16).padStart(2, "0")
  ).join("");
}

export async function hashSessionToken(token) {
  const data = new TextEncoder().encode(token);

  const digest = await crypto.subtle.digest(
    SESSION_HASH_ALGORITHM,
    data
  );

  return bytesToHex(new Uint8Array(digest));
}

export function sessionExpiry(
  nowSeconds = Math.floor(Date.now() / 1000)
) {
  return nowSeconds + SESSION_TTL_SECONDS;
}

export function getSessionToken(request) {
  const cookieHeader = request.headers.get("Cookie");

  if (!cookieHeader) return null;

  const cookies = cookieHeader.split(";");

  for (const cookie of cookies) {
    const [name, ...valueParts] = cookie.trim().split("=");

    if (name === "kw_session") {
      const value = valueParts.join("=");

      return value || null;
    }
  }

  return null;
}

export async function findSessionUser(db, token) {
  if (!token) return null;

  const tokenHash = await hashSessionToken(token);
  const now = Math.floor(Date.now() / 1000);

  const result = await db
    .prepare(
      `SELECT
        u.id,
        u.email,
        u.name,
        u.phone,
        COALESCE(e.has_full_access, 0) AS has_full_access,
        s.expires_at
      FROM sessions s
      INNER JOIN users u
        ON u.id = s.user_id
      LEFT JOIN entitlements e
        ON e.user_id = u.id
      WHERE s.token_hash = ?1
        AND s.expires_at > ?2
      LIMIT 1`
    )
    .bind(tokenHash, now)
    .first();

  if (!result) return null;

  return {
    id: result.id,
    email: result.email,
    name: result.name,
    phone: result.phone,
    hasFullAccess: Boolean(result.has_full_access),
    expiresAt: result.expires_at
  };
}
export async function revokeSession(db, token) {
  if (!token) return;

  const tokenHash = await hashSessionToken(token);

  await db
    .prepare(
      "DELETE FROM sessions WHERE token_hash = ?1"
    )
    .bind(tokenHash)
    .run();
}