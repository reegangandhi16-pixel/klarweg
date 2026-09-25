const GOOGLE_CERTS_URL = "https://www.googleapis.com/oauth2/v3/certs";
import {
  createSessionToken,
  hashPassword,
  sessionCookie,
  verifyPassword,
  clearSessionCookie,
  normalizeEmail,
  normalizePhone,
  isValidPhone
} from "./auth.js";

import {
  hashSessionToken,
  sessionExpiry,
  getSessionToken,
  findSessionUser,
  revokeSession
} from "./sessions.js";

import { createUser, findUserByEmail, findUserByGoogleSub, createGoogleUser, updateUserPhone } from "./users.js";
import { verifyGoogleIdToken } from "./google-auth.js";
import { readEntitlements } from "./entitlements.js";
import { createUserId } from "./user-id.js";
import { checkLoginLimit, recordLoginFailure, checkSignupLimit, recordSignupAttempt, sweepRateCounters } from "./ratelimit.js";

const SESSION_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;
const GOOGLE_NONCE_TTL_SECONDS = 60 * 5;

/* Fixed, hardcoded redirect destination for the iOS Google redirect-mode
   login. Never derived from client input — only the query string below is
   reconstructed from allowlisted values, so this can never become an open
   redirect regardless of what a caller sends. */
const ACCOUNT_RETURN_URL = "https://reegangandhi16-pixel.github.io/klarweg/account/index.html";
const ALLOWED_AUTH_ERRORS = new Set([
  "google_conflict",
  "invalid_nonce",
  "invalid_credential",
  "missing_credential"
]);

function json(data, status = 200) {
  return Response.json(data, { status });
}

async function readJson(request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

function getCookie(request, name) {
  const header = request.headers.get("Cookie");

  if (!header) return null;

  for (const part of header.split(";")) {
    const [key, ...rest] = part.trim().split("=");

    if (key === name) return rest.join("=") || null;
  }

  return null;
}

/* Same-origin-relative paths only — never a scheme, never protocol-relative.
   This is intentionally stricter than the existing popup flow's `next`
   handling elsewhere on this page, not a reuse of it. */
function isSafeNextPath(value) {
  if (typeof value !== "string" || !value) return false;
  if (value.includes("://")) return false;
  if (value.startsWith("//")) return false;
  return value.startsWith("/klarweg/");
}

function sanitizeMode(value) {
  return value === "signup" || value === "login" ? value : null;
}

function sanitizeBuy(value) {
  return typeof value === "string" && /^[A-Z0-9_]{1,20}$/.test(value) ? value : null;
}

function sanitizeNext(value) {
  return isSafeNextPath(value) ? value : null;
}

/* Builds the redirect destination for the Google redirect-mode login from
   ONLY the fixed constant above plus allowlisted, re-validated state
   values — never an absolute URL a client could supply. `state` comes
   from the caller: either freshly-read query params (nonce issuance) or
   values recovered from a just-consumed, single-use D1 nonce row
   (redirect completion) — never from login_uri, which carries no query
   string at all. */
function buildAccountRedirectUrl(state) {
  state = state || {};
  const dest = new URL(ACCOUNT_RETURN_URL);

  const mode = sanitizeMode(state.mode);
  if (mode) dest.searchParams.set("mode", mode);

  const buy = sanitizeBuy(state.buy);
  if (buy) dest.searchParams.set("buy", buy);

  const next = sanitizeNext(state.next);
  if (next) dest.searchParams.set("next", next);

  return dest;
}

function redirectWithError(dest, code) {
  const url = new URL(dest.toString());
  url.searchParams.set("authError", ALLOWED_AUTH_ERRORS.has(code) ? code : "invalid_credential");

  return new Response(null, {
    status: 303,
    headers: { Location: url.toString() }
  });
}

/* Shared by both the JSON (/auth/google) and redirect (/auth/google/redirect)
   Google login paths so the account-linking / conflict rule can never drift
   between them. Throws an Error with .code = "conflict" when the Google
   email already belongs to a password account. */
async function findOrCreateGoogleUser(db, googleUser) {
  let user = await findUserByGoogleSub(db, googleUser.sub);

  if (!user) {
    const existingEmailUser = await findUserByEmail(db, googleUser.email);

    if (existingEmailUser) {
      const error = new Error("An account with this email already exists.");
      error.code = "conflict";
      throw error;
    }

    user = await createGoogleUser(db, {
      id: createUserId(),
      email: googleUser.email,
      name: googleUser.name,
      googleSub: googleUser.sub
    });
  }

  return user;
}

/* Shared session-creation step, identical for every login path (password,
   Google JSON, Google redirect). */
async function createUserSession(db, userId) {
  const token = createSessionToken();
  const tokenHash = await hashSessionToken(token);
  const now = Math.floor(Date.now() / 1000);
  const expiresAt = sessionExpiry(now);

  await db
    .prepare(
      `INSERT INTO sessions (
        token_hash,
        user_id,
        created_at,
        expires_at
      ) VALUES (?1, ?2, ?3, ?4)`
    )
    .bind(tokenHash, userId, now, expiresAt)
    .run();

  return token;
}

export async function signup(request, env, ctx) {
  if (ctx && ctx.waitUntil) ctx.waitUntil(sweepRateCounters(env));

  const limit = await checkSignupLimit(env, request);
  if (!limit.ok) {
    return json(
      { ok: false, error: "Too many attempts. Please try again shortly." },
      429
    );
  }
  await recordSignupAttempt(env, request);

  const body = await readJson(request);

  if (
    !body ||
    typeof body.email !== "string" ||
    typeof body.password !== "string"
  ) {
    return json(
      { ok: false, error: "Email and password are required." },
      400
    );
  }

  const email = normalizeEmail(body.email);
  const password = body.password;
  const name = typeof body.name === "string" ? body.name.trim() : "";

  if (!email || !email.includes("@")) {
    return json(
      { ok: false, error: "Enter a valid email address." },
      400
    );
  }

  if (password.length < 8) {
    return json(
      { ok: false, error: "Password must contain at least 8 characters." },
      400
    );
  }

  const existingUser = await findUserByEmail(env.DB, email);

  if (existingUser) {
    return json(
      { ok: false, error: "An account with this email already exists." },
      409
    );
  }

  const passwordHash = await hashPassword(password);
  const userId = createUserId();

  const user = await createUser(env.DB, {
    id: userId,
    email,
    name,
    passwordHash
  });

  const token = createSessionToken();
  const tokenHash = await hashSessionToken(token);
  const now = Math.floor(Date.now() / 1000);
  const expiresAt = sessionExpiry(now);

  await env.DB
    .prepare(
      `INSERT INTO sessions (
        token_hash,
        user_id,
        created_at,
        expires_at
      ) VALUES (?1, ?2, ?3, ?4)`
    )
    .bind(tokenHash, user.id, now, expiresAt)
    .run();

  return new Response(
    JSON.stringify({
      ok: true,
      user
    }),
    {
      status: 201,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": sessionCookie(token, SESSION_COOKIE_MAX_AGE)
      }
    }
  );
}

export async function login(request, env, ctx) {
  if (ctx && ctx.waitUntil) ctx.waitUntil(sweepRateCounters(env));

  const limit = await checkLoginLimit(env, request);
  if (!limit.ok) {
    return json(
      { ok: false, error: "Too many attempts. Please try again shortly." },
      429
    );
  }

  const body = await readJson(request);

  if (
    !body ||
    typeof body.email !== "string" ||
    typeof body.password !== "string"
  ) {
    return json(
      { ok: false, error: "Email and password are required." },
      400
    );
  }

  const email = normalizeEmail(body.email);
  const user = await findUserByEmail(env.DB, email);

  if (
    !user ||
    !(await verifyPassword(body.password, {
      algorithm: "PBKDF2-SHA256",
      iterations: user.password_iterations,
      salt: user.password_salt,
      hash: user.password_hash
    }))
  ) {
    await recordLoginFailure(env, request);
    return json(
      { ok: false, error: "Invalid email or password." },
      401
    );
  }

  const token = createSessionToken();
  const tokenHash = await hashSessionToken(token);
  const now = Math.floor(Date.now() / 1000);
  const expiresAt = sessionExpiry(now);

  await env.DB
    .prepare(
      `INSERT INTO sessions (
        token_hash,
        user_id,
        created_at,
        expires_at
      ) VALUES (?1, ?2, ?3, ?4)`
    )
    .bind(tokenHash, user.id, now, expiresAt)
    .run();

  return new Response(
    JSON.stringify({
      ok: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone || null
      }
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": sessionCookie(token, SESSION_COOKIE_MAX_AGE)
      }
    }
  );
}

export async function googleLogin(request, env) {
  const body = await readJson(request);

  if (!body || typeof body.credential !== "string" || !body.credential.trim()) {
    return json(
      { ok: false, error: "Google credential is required." },
      400
    );
  }

  let googleUser;

  try {
    googleUser = await verifyGoogleIdToken(
      body.credential,
      env.GOOGLE_CLIENT_ID
    );
  } catch (error) {
    return json(
      { ok: false, error: error && error.message ? error.message : "Google sign-in could not be verified." },
      401
    );
  }

  let user;

  try {
    user = await findOrCreateGoogleUser(env.DB, googleUser);
  } catch (error) {
    if (error && error.code === "conflict") {
      return json(
        {
          ok: false,
          error: "An account with this email already exists. Sign in with your email and password first, then link Google from your account."
        },
        409
      );
    }
    throw error;
  }

  const token = await createUserSession(env.DB, user.id);

  return new Response(
    JSON.stringify({
      ok: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone || null
      }
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": sessionCookie(token, SESSION_COOKIE_MAX_AGE)
      }
    }
  );
}

/* Unauthenticated: mints a short-lived, single-use nonce that the iOS
   redirect-mode Google login must embed in its ID token. Never returns an
   existing nonce — always a fresh random value, stored once.

   login_uri must be the exact, bare, pre-registered redirect URI with no
   query string (Google's redirect_uri validation requires an exact
   match), so mode/buy/next can no longer travel on login_uri. They are
   validated here, with the same allowlists as before, and stored
   alongside the nonce instead — recovered only once that same nonce is
   later verified and atomically consumed in googleLoginRedirect(). */
export async function googleNonce(request, env) {
  const url = new URL(request.url);
  const nonce = createSessionToken();
  const now = Math.floor(Date.now() / 1000);

  const mode = sanitizeMode(url.searchParams.get("mode"));
  const buy = sanitizeBuy(url.searchParams.get("buy"));
  const next = sanitizeNext(url.searchParams.get("next"));

  await env.DB
    .prepare(
      "INSERT INTO google_login_nonces (nonce, expires_at, mode, buy, next_path) VALUES (?1, ?2, ?3, ?4, ?5)"
    )
    .bind(nonce, now + GOOGLE_NONCE_TTL_SECONDS, mode, buy, next)
    .run();

  return json({ ok: true, nonce });
}

/* The login_uri target for iOS Google Sign-In (ux_mode: 'redirect').
   Google POSTs here directly as a top-level, cross-origin, form-encoded
   navigation — this is not a fetch() target and must not be wrapped in
   CORS handling. Every failure path redirects back to the fixed Klarweg
   account URL with an allowlisted `authError` code; no internal error
   detail is ever exposed. */
export async function googleLoginRedirect(request, env) {
  /* login_uri carries no query string (must exactly match the bare
     registered redirect URI), so every failure before the nonce is
     verified and consumed can only redirect to the plain account URL —
     mode/buy/next are not known yet at that point. */
  let dest = buildAccountRedirectUrl({});

  let form;

  try {
    form = await request.formData();
  } catch {
    return redirectWithError(dest, "missing_credential");
  }

  const credential = form.get("credential");

  if (typeof credential !== "string" || !credential.trim()) {
    return redirectWithError(dest, "missing_credential");
  }

  /* Best-effort per Google's documented CSRF mechanism: the g_csrf_token
     cookie is set on the page that called initialize() (our static site's
     origin), which is a different origin from this Worker, so the cookie
     will typically never arrive here. A missing cookie is therefore not
     treated as fatal on its own — only an actual mismatch is rejected.
     The real defense against a replayed/unsolicited POST is the single-use
     D1 nonce consumed below. */
  const cookieToken = getCookie(request, "g_csrf_token");
  const bodyToken = form.get("g_csrf_token");

  if (cookieToken && typeof bodyToken === "string" && cookieToken !== bodyToken) {
    return redirectWithError(dest, "invalid_credential");
  }

  let googleUser;

  try {
    googleUser = await verifyGoogleIdToken(credential, env.GOOGLE_CLIENT_ID);
  } catch {
    return redirectWithError(dest, "invalid_credential");
  }

  if (!googleUser.nonce) {
    return redirectWithError(dest, "invalid_nonce");
  }

  const now = Math.floor(Date.now() / 1000);

  /* Recover the mode/buy/next stored alongside this nonce at issuance
     time, but this data is only ever trusted if the atomic consume below
     confirms single ownership of exactly this row — an expired, unknown,
     or already-consumed nonce never gets to use it. */
  const nonceRow = await env.DB
    .prepare(
      "SELECT mode, buy, next_path FROM google_login_nonces WHERE nonce = ?1"
    )
    .bind(googleUser.nonce)
    .first();

  /* Atomic single-use consume: the conditional DELETE both checks
     existence/expiry and consumes the nonce in one statement, so there is
     no separate check-then-delete race. meta.changes === 1 is the only
     acceptance condition — missing, expired and already-consumed all
     collapse to the same generic rejection below by design. */
  const consumed = await env.DB
    .prepare(
      "DELETE FROM google_login_nonces WHERE nonce = ?1 AND expires_at > ?2"
    )
    .bind(googleUser.nonce, now)
    .run();

  if (!nonceRow || !consumed.meta || consumed.meta.changes !== 1) {
    return redirectWithError(dest, "invalid_nonce");
  }

  dest = buildAccountRedirectUrl({
    mode: nonceRow.mode,
    buy: nonceRow.buy,
    next: nonceRow.next_path
  });

  let user;

  try {
    user = await findOrCreateGoogleUser(env.DB, googleUser);
  } catch (error) {
    if (error && error.code === "conflict") {
      return redirectWithError(dest, "google_conflict");
    }
    return redirectWithError(dest, "invalid_credential");
  }

  const token = await createUserSession(env.DB, user.id);

  return new Response(null, {
    status: 303,
    headers: {
      Location: dest.toString(),
      "Set-Cookie": sessionCookie(token, SESSION_COOKIE_MAX_AGE)
    }
  });
}

export async function logout(request, env) {
  const token = getSessionToken(request);

  await revokeSession(env.DB, token);

  return new Response(
    JSON.stringify({ ok: true }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": clearSessionCookie()
      }
    }
  );
}

export async function me(request, env) {
  const token = getSessionToken(request);

  const user = await findSessionUser(env.DB, token);

  if (!user) {
    return json(
      {
        ok: false,
        authenticated: false
      },
      401
    );
  }

  const entitlements = await readEntitlements(env.DB, user.id);

  return json({
    ok: true,
    authenticated: true,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone || null
    },
    hasFullAccess: entitlements.LIFETIME,
    entitlements
  });
}

/* Updates the phone number on the CURRENT authenticated user's own
   account only — the user id always comes from the session, never
   from the request body, so a client cannot target another account.
   Does not touch email, name, google_sub or password. No uniqueness
   is enforced (none was required). Cashfree's customer_phone is a
   required field on order creation (verified against the official
   Create Order schema), so orders.js depends on this being set — a
   missing/invalid phone must produce a clear error here, never a
   silent fake value. */
export async function updatePhone(request, env) {
  const token = getSessionToken(request);
  const user = await findSessionUser(env.DB, token);

  if (!user) {
    return json(
      { ok: false, error: "Authentication required." },
      401
    );
  }

  const body = await readJson(request);
  const phone = normalizePhone(body?.phone);

  if (!isValidPhone(phone)) {
    return json(
      {
        ok: false,
        error: "Enter a valid phone number — 10 digits, or an international number starting with +."
      },
      400
    );
  }

  await updateUserPhone(env.DB, user.id, phone);

  return json({
    ok: true,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      phone
    }
  });
}
