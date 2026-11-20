/* password-reset.js — "Forgot password?" for email/password accounts.

   Routes (all JSON, same-origin via klarweg.in/api, CSRF-guarded like every
   other write in index.js):
     POST /auth/password/forgot        { email }
     POST /auth/password/reset/check   { token }
     POST /auth/password/reset         { token, password }

   Design
   · Off unless PASSWORD_RESET = "on" AND the EMAIL send_email binding exists.
     While off, /forgot answers 503 "reset_unavailable" for EVERY address, so
     the switch itself reveals nothing about which accounts exist.
   · No enumeration: /forgot returns the same 200 body, with the email sent in
     ctx.waitUntil (after the response), whether the address is unknown, a
     password account, or a Google-only account. Only a malformed address
     (400) or the per-network limit (429) differ, and neither depends on D1.
   · Tokens: 32 random bytes (base64url). D1 stores only SHA-256(token).
     Valid for RESET_TTL_SECONDS, single use (atomic conditional UPDATE),
     and a new request or a successful reset deletes every other open token
     of that user. Never logged; the link carries it in the URL #fragment,
     which browsers never send to a server or in a Referer.
   · A reset revokes every session of the account (all devices are signed
     out) and does not sign the learner in: they return to the login form.
     Entitlements, orders, progress, saved words and google_sub are not
     touched — only password_hash / password_salt / password_iterations.
   · Emails never echo the account's display name: signup does not verify
     ownership of the address, so the name is attacker-choosable text.
   · Google-only accounts (no password_hash) get an email explaining that
     they sign in with Google; no reset link is issued, so a password can
     never be added to a Google account this way.
   · Rate limits (rate_counters, pseudonymous daily HMAC buckets): per
     network 5 requests / 15 min (429); per address 3 emails / hour (further
     requests silently send nothing); all addresses together
     PASSWORD_RESET_DAILY_EMAILS per UTC day (protects the Email Service
     quota); token checks/resets 20 failures / 15 min per network. */

import { clearSessionCookie, createSessionToken, hashPassword, normalizeEmail } from "./auth.js";
import { hashSessionToken } from "./sessions.js";
import { findUserByEmail } from "./users.js";
import { mailConfigured, sendMail } from "./mailer.js";

export const RESET_TTL_SECONDS = 30 * 60;
const RESET_TTL_MINUTES = RESET_TTL_SECONDS / 60;

const FORGOT_IP_LIMIT = { max: 5, win: 15 * 60 * 1000 };
const FORGOT_EMAIL_LIMIT = { max: 3, win: 60 * 60 * 1000 };
const RESET_IP_LIMIT = { max: 20, win: 15 * 60 * 1000 };
const DAY_MS = 24 * 60 * 60 * 1000;
const DEFAULT_DAILY_EMAILS = 200;

const TOKEN_RE = /^[A-Za-z0-9_-]{43}$/;   // 32 bytes, base64url, no padding
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const DEFAULT_SITE = "https://klarweg.in";

export const NEUTRAL_MESSAGE =
  "If an account exists for this email address, we have sent a link to reset the password. The link is valid for 30 minutes.";

function json(data, status = 200) {
  return Response.json(data, { status, headers: { "Cache-Control": "no-store" } });
}

async function readJson(request) {
  try { return await request.json(); } catch { return null; }
}

export function passwordResetEnabled(env) {
  return !!env && env.PASSWORD_RESET === "on" && mailConfigured(env);
}

/* ---------- rate limiting (same table and window shape as ratelimit.js) ---------- */

function windowEnd(now, win) { return Math.ceil((now + 1) / win) * win; }

async function hmacHex(secret, message) {
  const key = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(String(secret)),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
  );
  const mac = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(String(message)));
  return [...new Uint8Array(mac)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function ipKey(env, request, prefix) {
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const day = new Date().toISOString().slice(0, 10);
  return prefix + ":" + await hmacHex(env.RATE_SALT || "dev-salt", prefix + "|" + ip + "|" + day);
}

async function emailKey(env, email) {
  return "pre:" + await hmacHex(env.RATE_SALT || "dev-salt", "pwreset|" + email);
}

async function hits(env, key, lim, now) {
  const row = await env.DB.prepare(
    "SELECT hits FROM rate_counters WHERE bucket = ?1 AND window_end = ?2"
  ).bind(key, windowEnd(now, lim.win)).first();
  return row ? row.hits : 0;
}

async function bump(env, key, lim, now) {
  await env.DB.prepare(
    "INSERT INTO rate_counters (bucket, window_end, hits) VALUES (?1, ?2, 1) " +
    "ON CONFLICT(bucket, window_end) DO UPDATE SET hits = hits + 1"
  ).bind(key, windowEnd(now, lim.win)).run();
}

function dailyEmailCap(env) {
  const n = Number.parseInt(env && env.PASSWORD_RESET_DAILY_EMAILS, 10);
  return Number.isFinite(n) && n >= 0 ? n : DEFAULT_DAILY_EMAILS;
}

/* ---------- links and email copy ---------- */

function siteBase(env) {
  /* Operator configuration only (wrangler.toml), never request input, and
     only an https origin is accepted — anything else falls back to
     klarweg.in, so the link in the email can never point elsewhere. */
  try {
    const u = new URL(env && env.SITE_BASE_URL ? env.SITE_BASE_URL : DEFAULT_SITE);
    if (u.protocol !== "https:") return DEFAULT_SITE;
    return u.origin;
  } catch {
    return DEFAULT_SITE;
  }
}

export function resetLink(env, token) {
  return siteBase(env) + "/account/reset-password#token=" + token;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function shell(title, bodyHtml) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)}</title></head>
<body style="margin:0;padding:0;background:#FAFAF7;font-family:Inter,Helvetica,Arial,sans-serif;color:#0E0E10">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAFAF7"><tr><td align="center" style="padding:36px 16px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#FFFFFF;border:1px solid #E6E5E0;border-radius:16px"><tr><td style="padding:36px 32px">
<p style="margin:0 0 24px;font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:600;color:#0E0E10">Klarweg</p>
${bodyHtml}
</td></tr></table>
<p style="margin:24px 0 0;font-size:12px;line-height:1.6;color:#6F6F73">Klarweg · klarweg.in<br>This is an automated message about your Klarweg account.</p>
</td></tr></table></body></html>`;
}

function resetEmail(env, token) {
  const link = resetLink(env, token);
  const hello = "Hello,";
  const text = [
    hello,
    "",
    "We received a request to reset the password of your Klarweg account.",
    `Open this link to choose a new password. It is valid for ${RESET_TTL_MINUTES} minutes and can be used once:`,
    "",
    link,
    "",
    "If you did not ask for this, you can ignore this email. Your password stays the same.",
    "",
    "Klarweg"
  ].join("\n");
  const html = shell("Reset your Klarweg password", `
<p style="margin:0 0 16px;font-size:15px;line-height:1.6">${escapeHtml(hello)}</p>
<p style="margin:0 0 24px;font-size:15px;line-height:1.6">We received a request to reset the password of your Klarweg account. The button below is valid for ${RESET_TTL_MINUTES} minutes and can be used once.</p>
<p style="margin:0 0 24px"><a href="${escapeHtml(link)}" style="display:inline-block;background:#1F4E4A;color:#FFFFFF;text-decoration:none;font-weight:600;font-size:15px;padding:14px 24px;border-radius:8px">Choose a new password</a></p>
<p style="margin:0 0 8px;font-size:13px;line-height:1.6;color:#5A5A60">If the button does not work, copy this link into your browser:</p>
<p style="margin:0 0 24px;font-size:13px;line-height:1.6;word-break:break-all"><a href="${escapeHtml(link)}" style="color:#1F4E4A">${escapeHtml(link)}</a></p>
<p style="margin:0;font-size:13px;line-height:1.6;color:#5A5A60">If you did not ask for this, ignore this email. Your password stays the same.</p>`);
  return { subject: "Reset your Klarweg password", text, html };
}

function googleOnlyEmail(env) {
  const login = siteBase(env) + "/account/";
  const hello = "Hello,";
  const text = [
    hello,
    "",
    "We received a request to reset the password of your Klarweg account.",
    "Your account uses Google Sign-In, so it has no Klarweg password to reset.",
    `To sign in, open ${login} and choose "Sign in with Google" with this email address.`,
    "",
    "If you did not ask for this, you can ignore this email.",
    "",
    "Klarweg"
  ].join("\n");
  const html = shell("Signing in to Klarweg", `
<p style="margin:0 0 16px;font-size:15px;line-height:1.6">${escapeHtml(hello)}</p>
<p style="margin:0 0 16px;font-size:15px;line-height:1.6">We received a request to reset the password of your Klarweg account. Your account uses <strong>Google Sign-In</strong>, so it has no Klarweg password to reset.</p>
<p style="margin:0 0 24px"><a href="${escapeHtml(login)}" style="display:inline-block;background:#1F4E4A;color:#FFFFFF;text-decoration:none;font-weight:600;font-size:15px;padding:14px 24px;border-radius:8px">Sign in with Google</a></p>
<p style="margin:0;font-size:13px;line-height:1.6;color:#5A5A60">If you did not ask for this, ignore this email.</p>`);
  return { subject: "Signing in to your Klarweg account", text, html };
}

function changedEmail(env) {
  const login = siteBase(env) + "/account/";
  const hello = "Hello,";
  const text = [
    hello,
    "",
    "The password of your Klarweg account was just changed, and every device was signed out.",
    `Sign in again at ${login}.`,
    "",
    "If you did not do this, reset your password again right away from the sign-in page and write to us at klarwegofficial@gmail.com.",
    "",
    "Klarweg"
  ].join("\n");
  const html = shell("Your Klarweg password was changed", `
<p style="margin:0 0 16px;font-size:15px;line-height:1.6">${escapeHtml(hello)}</p>
<p style="margin:0 0 16px;font-size:15px;line-height:1.6">The password of your Klarweg account was just changed, and every device was signed out.</p>
<p style="margin:0 0 24px"><a href="${escapeHtml(login)}" style="display:inline-block;background:#1F4E4A;color:#FFFFFF;text-decoration:none;font-weight:600;font-size:15px;padding:14px 24px;border-radius:8px">Sign in</a></p>
<p style="margin:0;font-size:13px;line-height:1.6;color:#5A5A60">If you did not do this, reset your password again right away from the sign-in page and write to us at klarwegofficial@gmail.com.</p>`);
  return { subject: "Your Klarweg password was changed", text, html };
}

/* ---------- token store ---------- */

async function findOpenToken(db, token, nowSec) {
  return db.prepare(
    `SELECT t.user_id, u.email, u.password_hash
       FROM password_reset_tokens t
       INNER JOIN users u ON u.id = t.user_id
      WHERE t.token_hash = ?1 AND t.used_at IS NULL AND t.expires_at > ?2
      LIMIT 1`
  ).bind(await hashSessionToken(token), nowSec).first();
}

async function sweepExpired(env, nowSec) {
  try {
    await env.DB.prepare("DELETE FROM password_reset_tokens WHERE expires_at < ?1").bind(nowSec - DAY_MS / 1000).run();
  } catch { /* housekeeping only */ }
}

function runLater(ctx, promise) {
  const p = Promise.resolve(promise).catch(() => {});
  if (ctx && typeof ctx.waitUntil === "function") ctx.waitUntil(p);
  return p;
}

/* ---------- POST /auth/password/forgot ---------- */

export async function forgotPassword(request, env, ctx, now = Date.now()) {
  const body = await readJson(request);
  const raw = body && typeof body.email === "string" ? body.email : "";
  const email = normalizeEmail(raw);

  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return json({ ok: false, error: "Please enter a valid email address.", field: "email" }, 400);
  }

  if (!passwordResetEnabled(env)) {
    return json({ ok: false, error: "reset_unavailable", message: "Password reset by email is not available yet." }, 503);
  }

  const ipBucket = await ipKey(env, request, "prf");
  if (await hits(env, ipBucket, FORGOT_IP_LIMIT, now) >= FORGOT_IP_LIMIT.max) {
    return json({ ok: false, error: "Too many requests. Please wait a few minutes and try again." }, 429);
  }
  await bump(env, ipBucket, FORGOT_IP_LIMIT, now);

  /* Everything that depends on whether the address exists runs after the
     response, so status, body and timing are the same for every address. */
  runLater(ctx, issueReset(env, email, now));

  return json({ ok: true, message: NEUTRAL_MESSAGE });
}

async function issueReset(env, email, now) {
  const nowSec = Math.floor(now / 1000);
  await sweepExpired(env, nowSec);

  const perEmail = await emailKey(env, email);
  if (await hits(env, perEmail, FORGOT_EMAIL_LIMIT, now) >= FORGOT_EMAIL_LIMIT.max) return { sent: false, reason: "email_limit" };

  const user = await findUserByEmail(env.DB, email);
  if (!user) return { sent: false, reason: "no_account" };

  const globalKey = "prg:" + new Date(now).toISOString().slice(0, 10);
  const dayLim = { max: dailyEmailCap(env), win: DAY_MS };
  if (await hits(env, globalKey, dayLim, now) >= dayLim.max) {
    console.log(JSON.stringify({ svc: "klarweg-access", evt: "password_reset_daily_cap" }));
    return { sent: false, reason: "daily_cap" };
  }
  await bump(env, perEmail, FORGOT_EMAIL_LIMIT, now);
  await bump(env, globalKey, dayLim, now);

  let message;
  if (!user.password_hash) {
    message = googleOnlyEmail(env);
  } else {
    const token = createSessionToken();
    const tokenHash = await hashSessionToken(token);
    await env.DB.batch([
      env.DB.prepare("DELETE FROM password_reset_tokens WHERE user_id = ?1 AND used_at IS NULL").bind(user.id),
      env.DB.prepare(
        "INSERT INTO password_reset_tokens (token_hash, user_id, created_at, expires_at) VALUES (?1, ?2, ?3, ?4)"
      ).bind(tokenHash, user.id, nowSec, nowSec + RESET_TTL_SECONDS)
    ]);
    message = resetEmail(env, token);
  }

  const result = await sendMail(env, { to: user.email, ...message });
  return { sent: result.ok, reason: result.ok ? (user.password_hash ? "reset" : "google_only") : result.code };
}

/* ---------- POST /auth/password/reset/check ---------- */

const INVALID_LINK = {
  ok: false,
  error: "invalid_token",
  message: "This reset link is invalid, has expired, or has already been used. Request a new one."
};

async function tokenGate(request, env, now) {
  const bucket = await ipKey(env, request, "prr");
  if (await hits(env, bucket, RESET_IP_LIMIT, now) >= RESET_IP_LIMIT.max) {
    return { response: json({ ok: false, error: "Too many attempts. Please wait a few minutes and try again." }, 429) };
  }
  const body = await readJson(request);
  return { body, fail: () => bump(env, bucket, RESET_IP_LIMIT, now) };
}

export async function checkResetToken(request, env, ctx, now = Date.now()) {
  const gate = await tokenGate(request, env, now);
  if (gate.response) return gate.response;

  const token = gate.body && typeof gate.body.token === "string" ? gate.body.token : "";
  const row = TOKEN_RE.test(token) ? await findOpenToken(env.DB, token, Math.floor(now / 1000)) : null;

  if (!row || !row.password_hash) {
    await gate.fail();
    return json(INVALID_LINK, 400);
  }
  return json({ ok: true });
}

/* ---------- POST /auth/password/reset ---------- */

export async function resetPassword(request, env, ctx, now = Date.now()) {
  const gate = await tokenGate(request, env, now);
  if (gate.response) return gate.response;

  const body = gate.body || {};
  const token = typeof body.token === "string" ? body.token : "";
  const password = typeof body.password === "string" ? body.password : null;

  if (password === null || password.length < 8) {
    return json({ ok: false, error: "Use at least 8 characters.", field: "password" }, 400);
  }
  if (password.length > 200) {
    return json({ ok: false, error: "That password is too long.", field: "password" }, 400);
  }

  const nowSec = Math.floor(now / 1000);
  const row = TOKEN_RE.test(token) ? await findOpenToken(env.DB, token, nowSec) : null;
  if (!row || !row.password_hash) {
    await gate.fail();
    return json(INVALID_LINK, 400);
  }

  const hashed = await hashPassword(password);
  const tokenHash = await hashSessionToken(token);

  /* Atomic single use: the conditional UPDATE is the only acceptance test.
     Two concurrent submits of one link — exactly one gets changes === 1. */
  const consumed = await env.DB.prepare(
    "UPDATE password_reset_tokens SET used_at = ?1 WHERE token_hash = ?2 AND used_at IS NULL AND expires_at > ?1"
  ).bind(nowSec, tokenHash).run();

  if (!consumed.meta || consumed.meta.changes !== 1) {
    await gate.fail();
    return json(INVALID_LINK, 400);
  }

  await env.DB.batch([
    env.DB.prepare(
      `UPDATE users
          SET password_hash = ?1, password_salt = ?2, password_iterations = ?3, updated_at = ?4
        WHERE id = ?5 AND password_hash IS NOT NULL`
    ).bind(hashed.hash, hashed.salt, hashed.iterations, nowSec, row.user_id),
    env.DB.prepare("DELETE FROM sessions WHERE user_id = ?1").bind(row.user_id),
    env.DB.prepare("DELETE FROM password_reset_tokens WHERE user_id = ?1 AND token_hash <> ?2").bind(row.user_id, tokenHash)
  ]);

  runLater(ctx, sendMail(env, { to: row.email, ...changedEmail(env) }));

  /* Also clears this browser's session cookie, in case one was present. */
  return new Response(JSON.stringify({ ok: true, message: "Your password has been changed. Sign in with your new password." }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "Set-Cookie": clearSessionCookie()
    }
  });
}
