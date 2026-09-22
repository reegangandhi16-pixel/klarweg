const GOOGLE_CERTS_URL = "https://www.googleapis.com/oauth2/v3/certs";
import {
  createSessionToken,
  hashPassword,
  sessionCookie,
  verifyPassword,
  clearSessionCookie,
  normalizeEmail
} from "./auth.js";

import {
  hashSessionToken,
  sessionExpiry,
  getSessionToken,
  findSessionUser,
  revokeSession
} from "./sessions.js";

import { createUser, findUserByEmail, findUserByGoogleSub, createGoogleUser } from "./users.js";
import { verifyGoogleIdToken } from "./google-auth.js";
import { readEntitlements } from "./entitlements.js";
import { createUserId } from "./user-id.js";

const SESSION_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

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

export async function signup(request, env) {
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

export async function login(request, env) {
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
        name: user.name
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

  let user = await findUserByGoogleSub(env.DB, googleUser.sub);

  if (!user) {
    const existingEmailUser = await findUserByEmail(env.DB, googleUser.email);

    if (existingEmailUser) {
      return json(
        {
          ok: false,
          error: "An account with this email already exists. Sign in with your email and password first, then link Google from your account."
        },
        409
      );
    }

    user = await createGoogleUser(env.DB, {
      id: createUserId(),
      email: googleUser.email,
      name: googleUser.name,
      googleSub: googleUser.sub
    });
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
        name: user.name
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
      name: user.name
    },
    hasFullAccess: user.hasFullAccess,
    entitlements
  });
}