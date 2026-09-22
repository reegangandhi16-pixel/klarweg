import { normalizeEmail } from "./auth.js";

export async function findUserByEmail(db, email) {
  const normalizedEmail = normalizeEmail(email);

  if (!normalizedEmail) return null;

  return db
    .prepare(
      "SELECT id, email, name, phone, password_hash, password_salt, password_iterations FROM users WHERE email = ?1 LIMIT 1"
    )
    .bind(normalizedEmail)
    .first();
}

export async function findUserByGoogleSub(db, googleSub) {
  if (typeof googleSub !== "string" || !googleSub) return null;

  return db
    .prepare(
      "SELECT id, email, name, phone, password_hash, password_salt, password_iterations, google_sub FROM users WHERE google_sub = ?1 LIMIT 1"
    )
    .bind(googleSub)
    .first();
}

export async function createGoogleUser(db, { id, email, name, googleSub }) {
  const now = Math.floor(Date.now() / 1000);
  const normalizedEmail = normalizeEmail(email);

  await db
    .prepare(
      `INSERT INTO users (
        id,
        email,
        name,
        google_sub,
        created_at,
        updated_at
      ) VALUES (?1, ?2, ?3, ?4, ?5, ?5)`
    )
    .bind(
      id,
      normalizedEmail,
      name || null,
      googleSub,
      now
    )
    .run();

  return {
    id,
    email: normalizedEmail,
    name: name || null
  };
}

export async function updateUserPhone(db, userId, phone) {
  const now = Math.floor(Date.now() / 1000);

  await db
    .prepare(
      `UPDATE users
       SET phone = ?1, updated_at = ?2
       WHERE id = ?3`
    )
    .bind(phone, now, userId)
    .run();
}

export async function createUser(db, { id, email, name, passwordHash }) {
  const now = Math.floor(Date.now() / 1000);
  const normalizedEmail = normalizeEmail(email);

  await db
    .prepare(
      `INSERT INTO users (
        id,
        email,
        name,
        password_hash,
        password_salt,
        password_iterations,
        created_at,
        updated_at
      ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?7)`
    )
    .bind(
      id,
      normalizedEmail,
      name || null,
      passwordHash.hash,
      passwordHash.salt,
      passwordHash.iterations,
      now
    )
    .run();

  return {
    id,
    email: normalizedEmail,
    name: name || null
  };
}
