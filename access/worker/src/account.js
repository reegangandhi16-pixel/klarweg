/* account.js — the signed-in learner's own account (client: account/index.html).

     GET    /account            overview: profile, sign-in methods, access with
                                expiry, paid purchases, which features are on
     POST   /account/profile    { name?, preferredLevel? }   display name / level
     POST   /account/avatar     { image: "data:image/…;base64,…" }  profile photo
     DELETE /account/avatar
     POST   /account/password   { currentPassword, newPassword }  password accounts
     POST   /account/delete     { confirmEmail, password? }   off unless
                                ACCOUNT_DELETION = "on"

   Security
   · The user always comes from the session cookie (findSessionUser), never
     from the body; every query is scoped by that id. Cross-site writes are
     already refused in index.js (isForeignOriginWrite).
   · Nothing here touches entitlements, orders, prices or Cashfree. The
     overview only READS user_entitlements / orders (status 'paid').
   · Names: trimmed, inner whitespace collapsed, 2–80 characters, no control,
     zero-width or bidi-override characters. Always rendered as text.
   · Photos: ≤ 96 KB decoded; the type is taken from the file's magic bytes
     (JPEG, PNG, WebP — never SVG or anything scriptable), and the stored
     bytes are re-emitted as a data: URL for the owner only.
   · Password change: the current password is required, failures count
     against the existing per-network login budget and a per-account budget
     (5 / 15 min); success re-hashes and signs out every OTHER session.
     Google-only accounts have no password and get a clear 400.
   · Deletion (off by default): refused while the account has any order,
     access, consultation booking, live-class enrolment or two-factor setup —
     those records are financial / security records and go through support.
     Requires the typed account email plus the password (password accounts)
     or a sign-in within the last 10 minutes (Google-only accounts). */

import { hashPassword, verifyPassword, clearSessionCookie, normalizeEmail } from "./auth.js";
import { getSessionToken, findSessionUser, hashSessionToken } from "./sessions.js";
import { checkLoginLimit, recordLoginFailure } from "./ratelimit.js";

export const ACCOUNT_LIMITS = {
  nameMin: 2,
  nameMax: 80,
  avatarBytes: 96 * 1024,
  bodyBytes: 160 * 1024,
  profileWrites: 30,       // name/level/photo saves per account per 15 minutes
  reauthFailures: 5,
  reauthWindowMs: 15 * 60 * 1000,
  recentSignInSeconds: 10 * 60
};
export const PREFERRED_LEVELS = ["A1", "A2", "B1", "B2"];
const PRODUCTS = ["A1", "A2", "B1", "B2", "C1", "C2", "LIFETIME"];

function json(data, status = 200, headers = {}) {
  return Response.json(data, { status, headers: { "Cache-Control": "no-store", ...headers } });
}
const fail = (status, error, message, field) =>
  json({ ok: false, error, message, ...(field ? { field } : {}) }, status);

async function readBody(request) {
  try {
    const text = await request.text();
    if (text.length > ACCOUNT_LIMITS.bodyBytes) return { tooLarge: true };
    return { body: text ? JSON.parse(text) : null };
  } catch {
    return { body: null };
  }
}

async function sessionUser(request, env) {
  return findSessionUser(env.DB, getSessionToken(request));
}

/* ---------------- validation (exported for tests) ---------------- */

// C0/C1 controls, zero-width characters, bidi embeddings/overrides/isolates.
const BAD_NAME_CHARS = /[\u0000-\u001f\u007f-\u009f​-‏‪-‮⁠-⁤⁦-⁩﻿]/;

export function cleanName(raw) {
  if (typeof raw !== "string") return { error: "Please enter your name." };
  const name = raw.normalize("NFC").replace(/\s+/g, " ").trim();
  if (BAD_NAME_CHARS.test(raw)) return { error: "Your name contains characters that cannot be used." };
  const length = [...name].length;
  if (length < ACCOUNT_LIMITS.nameMin) return { error: "Please enter your name (at least 2 characters)." };
  if (length > ACCOUNT_LIMITS.nameMax) return { error: "That name is too long (80 characters at most)." };
  return { name };
}

export function cleanLevel(raw) {
  if (raw === null || raw === "") return { level: null };
  const level = typeof raw === "string" ? raw.trim().toUpperCase() : "";
  return PREFERRED_LEVELS.includes(level) ? { level } : { error: "Choose a level from A1 to B2." };
}

/* → { mime, b64 } or { error } — the type comes from the bytes, not the label. */
export function parseAvatar(dataUrl) {
  if (typeof dataUrl !== "string") return { error: "Choose an image file." };
  const m = /^data:image\/(?:jpeg|png|webp);base64,([A-Za-z0-9+/]+={0,2})$/.exec(dataUrl);
  if (!m) return { error: "Use a JPEG, PNG or WebP image." };
  let bytes;
  try {
    const bin = atob(m[1]);
    bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  } catch {
    return { error: "That image could not be read." };
  }
  if (bytes.length < 12) return { error: "That image could not be read." };
  if (bytes.length > ACCOUNT_LIMITS.avatarBytes) return { error: "That image is too large. Try a smaller photo." };
  const ascii = (a, b) => String.fromCharCode(...bytes.slice(a, b));
  let mime = null;
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) mime = "image/jpeg";
  else if (bytes[0] === 0x89 && ascii(1, 4) === "PNG" && bytes[4] === 0x0d && bytes[5] === 0x0a && bytes[6] === 0x1a && bytes[7] === 0x0a) mime = "image/png";
  else if (ascii(0, 4) === "RIFF" && ascii(8, 12) === "WEBP") mime = "image/webp";
  if (!mime) return { error: "Use a JPEG, PNG or WebP image." };
  return { mime, b64: m[1] };
}

/* ---------------- per-account re-auth budget ---------------- */

function windowEnd(now, win) { return Math.ceil((now + 1) / win) * win; }

/* Profile/photo write budget per account (peek-and-bump in one statement,
   as progress.js does). false once over budget. */
async function takeProfileWrite(env, userId, now = Date.now()) {
  const row = await env.DB.prepare(
    "INSERT INTO rate_counters (bucket, window_end, hits) VALUES (?1, ?2, 1) " +
    "ON CONFLICT(bucket, window_end) DO UPDATE SET hits = hits + 1 RETURNING hits"
  ).bind("pf:" + userId, windowEnd(now, ACCOUNT_LIMITS.reauthWindowMs)).first();
  return !row || row.hits <= ACCOUNT_LIMITS.profileWrites;
}
const TOO_MANY_SAVES = () => fail(429, "rate_limited", "You have saved your profile many times in a short while. Please wait a few minutes and try again.");

async function reauthBlocked(env, userId, now) {
  const row = await env.DB.prepare("SELECT hits FROM rate_counters WHERE bucket = ?1 AND window_end = ?2")
    .bind("ra:" + userId, windowEnd(now, ACCOUNT_LIMITS.reauthWindowMs)).first();
  return !!row && row.hits >= ACCOUNT_LIMITS.reauthFailures;
}
async function recordReauthFailure(env, request, userId, now) {
  await env.DB.prepare(
    "INSERT INTO rate_counters (bucket, window_end, hits) VALUES (?1, ?2, 1) " +
    "ON CONFLICT(bucket, window_end) DO UPDATE SET hits = hits + 1"
  ).bind("ra:" + userId, windowEnd(now, ACCOUNT_LIMITS.reauthWindowMs)).run();
  await recordLoginFailure(env, request, now);
}

/* Checks the current password of a password account. → null when it matched,
   otherwise the Response to return. */
async function checkCurrentPassword(request, env, row, password, now) {
  if (await reauthBlocked(env, row.id, now) || !(await checkLoginLimit(env, request, now)).ok) {
    return fail(429, "rate_limited", "Too many attempts. Please wait 15 minutes and try again.");
  }
  const okPw = typeof password === "string" && password.length > 0 && password.length <= 200 &&
    await verifyPassword(password, {
      algorithm: "PBKDF2-SHA256",
      iterations: row.password_iterations,
      salt: row.password_salt,
      hash: row.password_hash
    });
  if (!okPw) {
    await recordReauthFailure(env, request, row.id, now);
    return fail(400, "wrong_password", "That is not your current password.", "currentPassword");
  }
  return null;
}

async function userRow(env, id) {
  return env.DB.prepare(
    `SELECT id, email, name, preferred_level, created_at, google_sub,
            password_hash, password_salt, password_iterations
       FROM users WHERE id = ?1`
  ).bind(id).first();
}

export function deletionEnabled(env) {
  return !!env && env.ACCOUNT_DELETION === "on";
}
function passwordResetEnabled(env) {
  return !!env && env.PASSWORD_RESET === "on";
}

/* ---------------- GET /account ---------------- */

export async function accountOverview(request, env) {
  const user = await sessionUser(request, env);
  if (!user) return fail(401, "auth_required", "Please sign in.");
  const row = await userRow(env, user.id);
  if (!row) return fail(401, "auth_required", "Please sign in.");

  const [avatar, ents, orders] = await Promise.all([
    env.DB.prepare("SELECT mime, data_b64, updated_at FROM user_avatars WHERE user_id = ?1").bind(user.id).first(),
    env.DB.prepare("SELECT product_id, granted_at, expires_at FROM user_entitlements WHERE user_id = ?1").bind(user.id).all(),
    env.DB.prepare(
      `SELECT product_id, amount_paise, currency, created_at, updated_at
         FROM orders WHERE user_id = ?1 AND status = 'paid'
        ORDER BY updated_at DESC LIMIT 50`
    ).bind(user.id).all()
  ]);

  const nowSec = Math.floor(Date.now() / 1000);
  const access = [];
  for (const e of ents.results || []) {
    const product = String(e.product_id || "").toUpperCase();
    if (!PRODUCTS.includes(product)) continue;
    const expiresAt = e.expires_at == null ? null : Number(e.expires_at);
    access.push({
      product,
      grantedAt: Number(e.granted_at) || null,
      expiresAt,
      active: expiresAt == null || expiresAt > nowSec
    });
  }

  const purchases = (orders.results || [])
    .filter((o) => PRODUCTS.includes(String(o.product_id || "").toUpperCase()))
    .map((o) => ({
      product: String(o.product_id).toUpperCase(),
      amountPaise: Number(o.amount_paise) || 0,
      currency: o.currency || "INR",
      paidAt: Number(o.updated_at) || Number(o.created_at) || null
    }));

  const hasPassword = !!row.password_hash;
  const hasGoogle = !!row.google_sub;
  return json({
    ok: true,
    profile: {
      name: row.name || "",
      email: row.email,
      preferredLevel: PREFERRED_LEVELS.includes(row.preferred_level) ? row.preferred_level : null,
      avatar: avatar ? `data:${avatar.mime};base64,${avatar.data_b64}` : null,
      memberSince: Number(row.created_at) || null
    },
    signIn: {
      password: hasPassword,
      google: hasGoogle,
      // Google confirms the address at sign-in; password sign-ups are not
      // email-verified (there is no verification flow), so this is null.
      emailVerified: hasGoogle ? true : null
    },
    access,
    purchases,
    features: {
      changePassword: hasPassword,
      passwordReset: passwordResetEnabled(env),
      deletion: deletionEnabled(env)
    }
  });
}

/* ---------------- POST /account/profile ---------------- */

export async function updateProfile(request, env) {
  const user = await sessionUser(request, env);
  if (!user) return fail(401, "auth_required", "Please sign in.");
  const { body, tooLarge } = await readBody(request);
  if (tooLarge) return fail(413, "too_large", "That request is too large.");
  if (!body || typeof body !== "object" || Array.isArray(body)) return fail(400, "invalid", "Nothing to save.");

  const sets = [];
  const binds = [];
  if ("name" in body) {
    const n = cleanName(body.name);
    if (n.error) return fail(400, "invalid_name", n.error, "name");
    sets.push(`name = ?${binds.push(n.name)}`);
  }
  if ("preferredLevel" in body) {
    const l = cleanLevel(body.preferredLevel);
    if (l.error) return fail(400, "invalid_level", l.error, "preferredLevel");
    sets.push(`preferred_level = ?${binds.push(l.level)}`);
  }
  if (!sets.length) return fail(400, "invalid", "Nothing to save.");
  if (!(await takeProfileWrite(env, user.id))) return TOO_MANY_SAVES();

  const now = Math.floor(Date.now() / 1000);
  sets.push(`updated_at = ?${binds.push(now)}`);
  await env.DB.prepare(`UPDATE users SET ${sets.join(", ")} WHERE id = ?${binds.push(user.id)}`)
    .bind(...binds).run();

  const row = await userRow(env, user.id);
  return json({
    ok: true,
    profile: {
      name: row.name || "",
      email: row.email,
      preferredLevel: PREFERRED_LEVELS.includes(row.preferred_level) ? row.preferred_level : null
    }
  });
}

/* ---------------- POST / DELETE /account/avatar ---------------- */

export async function setAvatar(request, env) {
  const user = await sessionUser(request, env);
  if (!user) return fail(401, "auth_required", "Please sign in.");
  const { body, tooLarge } = await readBody(request);
  if (tooLarge) return fail(413, "too_large", "That image is too large. Try a smaller photo.", "avatar");
  const parsed = parseAvatar(body && body.image);
  if (parsed.error) return fail(400, "invalid_image", parsed.error, "avatar");
  if (!(await takeProfileWrite(env, user.id))) return TOO_MANY_SAVES();
  const now = Math.floor(Date.now() / 1000);
  await env.DB.prepare(
    `INSERT INTO user_avatars (user_id, mime, data_b64, updated_at) VALUES (?1, ?2, ?3, ?4)
     ON CONFLICT(user_id) DO UPDATE SET mime = excluded.mime, data_b64 = excluded.data_b64, updated_at = excluded.updated_at`
  ).bind(user.id, parsed.mime, parsed.b64, now).run();
  return json({ ok: true, avatar: `data:${parsed.mime};base64,${parsed.b64}` });
}

export async function removeAvatar(request, env) {
  const user = await sessionUser(request, env);
  if (!user) return fail(401, "auth_required", "Please sign in.");
  await env.DB.prepare("DELETE FROM user_avatars WHERE user_id = ?1").bind(user.id).run();
  return json({ ok: true, avatar: null });
}

/* ---------------- POST /account/password ---------------- */

export async function changePassword(request, env, now = Date.now()) {
  const user = await sessionUser(request, env);
  if (!user) return fail(401, "auth_required", "Please sign in.");
  const { body } = await readBody(request);
  const row = await userRow(env, user.id);
  if (!row || !row.password_hash) {
    return fail(400, "no_password", "This account signs in with Google, so it has no Klarweg password to change.");
  }
  const next = body && body.newPassword;
  if (typeof next !== "string" || next.length < 8) return fail(400, "weak_password", "Use at least 8 characters.", "newPassword");
  if (next.length > 200) return fail(400, "weak_password", "That password is too long.", "newPassword");

  const denied = await checkCurrentPassword(request, env, row, body && body.currentPassword, now);
  if (denied) return denied;
  if (next === body.currentPassword) {
    return fail(400, "same_password", "Choose a password that is different from your current one.", "newPassword");
  }

  const hashed = await hashPassword(next);
  const nowSec = Math.floor(now / 1000);
  const currentHash = await hashSessionToken(getSessionToken(request));
  await env.DB.batch([
    env.DB.prepare(
      "UPDATE users SET password_hash = ?1, password_salt = ?2, password_iterations = ?3, updated_at = ?4 WHERE id = ?5"
    ).bind(hashed.hash, hashed.salt, hashed.iterations, nowSec, user.id),
    // every other device is signed out; this one stays signed in
    env.DB.prepare("DELETE FROM sessions WHERE user_id = ?1 AND token_hash <> ?2").bind(user.id, currentHash),
    env.DB.prepare("DELETE FROM password_reset_tokens WHERE user_id = ?1").bind(user.id)
  ]);
  return json({ ok: true });
}

/* ---------------- POST /account/delete ---------------- */

export async function deleteAccount(request, env, now = Date.now()) {
  if (!deletionEnabled(env)) {
    return fail(503, "deletion_unavailable", "Account deletion is not available online yet. Please contact us and we will delete your account.");
  }
  const token = getSessionToken(request);
  const user = await findSessionUser(env.DB, token);
  if (!user) return fail(401, "auth_required", "Please sign in.");
  const { body } = await readBody(request);
  const row = await userRow(env, user.id);
  if (!row) return fail(401, "auth_required", "Please sign in.");

  if (normalizeEmail(body && body.confirmEmail) !== normalizeEmail(row.email)) {
    return fail(400, "email_mismatch", "Type your account email exactly as shown to confirm.", "confirmEmail");
  }

  const id = user.id;
  // Tables that exist on this database (consultations / live enrolments
  // are not migrated everywhere); a table that does not exist holds no rows.
  const { results: tables } = await env.DB.prepare(
    "SELECT name FROM sqlite_master WHERE type = 'table' AND name IN ('orders','user_entitlements','consult_bookings','live_enrolments','user_totp')"
  ).all();
  const present = new Set((tables || []).map((t) => t.name));
  const rows = (table) => present.has(table)
    ? env.DB.prepare(`SELECT COUNT(*) AS n FROM ${table} WHERE user_id = ?1`).bind(id).first()
    : Promise.resolve({ n: 0 });
  const [orders, ents, bookings, enrolments, totp] = await Promise.all(
    ["orders", "user_entitlements", "consult_bookings", "live_enrolments", "user_totp"].map(rows)
  );
  const count = (r) => Number(r && r.n) || 0;
  if (count(orders) + count(ents) + count(bookings) + count(enrolments) + count(totp) > 0) {
    return fail(409, "has_records",
      "This account has purchases, bookings or two-factor sign-in attached, so it cannot be deleted online. Please contact us and we will handle it with you.");
  }

  if (row.password_hash) {
    const denied = await checkCurrentPassword(request, env, row, body && body.password, now);
    if (denied) return denied;
  } else {
    const s = await env.DB.prepare("SELECT created_at FROM sessions WHERE token_hash = ?1")
      .bind(await hashSessionToken(token)).first();
    const age = Math.floor(now / 1000) - Number(s && s.created_at);
    if (!s || !(age >= 0 && age <= ACCOUNT_LIMITS.recentSignInSeconds)) {
      return fail(403, "reauth_required", "For your security, sign out and sign in with Google again, then delete your account within 10 minutes.");
    }
  }

  // Everything keyed to this user. The count check above guarantees there
  // are no orders, access rows, bookings, enrolments or 2FA rows.
  const { results: own } = await env.DB.prepare(
    "SELECT name FROM sqlite_master WHERE type = 'table' AND name IN ('saved_words','chapter_progress','user_avatars','password_reset_tokens','ai_usage')"
  ).all();
  const ownTables = (own || []).map((t) => t.name);
  await env.DB.batch([
    ...ownTables.map((t) => env.DB.prepare(`DELETE FROM ${t} WHERE user_id = ?1`).bind(id)),
    env.DB.prepare("DELETE FROM sessions WHERE user_id = ?1").bind(id),
    env.DB.prepare("DELETE FROM users WHERE id = ?1").bind(id)
  ]);
  return json({ ok: true, deleted: true }, 200, { "Set-Cookie": clearSessionCookie() });
}
