/* mfa-routes.js — second factor for exam raters/admins (register OD-19; owner decisions D1–D8).
   Any signed-in user may enrol; the exam Worker requires a FRESH second factor (D2: 12 h) only on rater/admin routes,
   using the time the Access proxy attests in X-KW-MFA-At (sessions.mfa_verified_at).

   GET  /auth/mfa/status            { enrolled, pending, verified_at, fresh, recovery_codes_left, locked_until }
   POST /auth/mfa/enroll            start (or, with a fresh second factor, replace) enrolment → { secret, otpauth_uri }
   POST /auth/mfa/enroll/confirm    { code } → confirms, marks this session verified → { recovery_codes } (shown once)
   POST /auth/mfa/verify            { code } or { recovery_code } → marks this session verified
   POST /auth/mfa/recovery-codes    with a fresh second factor → a new set; the old set stops working (D5)

   Limits: D3 5 wrong codes per user / 20 per network per 15 min (rate_counters); D4 30 min lock after 10 consecutive
   failures (user_totp). An owner reset (D6) is an audited database procedure (runbook), not an endpoint. Every
   response is no-store; secrets and recovery codes are returned only at the moment they are created. */
import { getSessionToken, findSessionUser, hashSessionToken } from "./sessions.js";
import { checkMfaLimit, recordMfaFailure } from "./ratelimit.js";
import {
  SECRET_BYTES, base32Encode, verifyTotp, otpauthUri, hasEncKey, encryptSecret, decryptSecret,
  newRecoveryCodes, hashRecoveryCode
} from "./totp.js";

export const MFA_FRESH_SECONDS = 12 * 60 * 60;   // D2
export const MFA_LOCK_AFTER = 10;                 // D4
export const MFA_LOCK_SECONDS = 30 * 60;          // D4

const nowSec = () => Math.floor(Date.now() / 1000);
const reply = (data, status = 200) => Response.json(data, { status, headers: { "Cache-Control": "no-store" } });
async function body(request) { try { return await request.json(); } catch { return {}; } }

async function audit(env, userId, event, detail = {}) {
  await env.DB.prepare("INSERT INTO mfa_audit (at, user_id, event, detail) VALUES (?1, ?2, ?3, ?4)")
    .bind(nowSec(), userId, event, JSON.stringify(detail)).run();
}

/* The signed-in user and this session's row key; null when not signed in. */
async function sessionContext(request, env) {
  const token = getSessionToken(request);
  const user = await findSessionUser(env.DB, token);
  if (!user) return null;
  return { user, tokenHash: await hashSessionToken(token) };
}

const fresh = (verifiedAt, t = nowSec()) => Number.isFinite(verifiedAt) && verifiedAt > t - MFA_FRESH_SECONDS && verifiedAt <= t + 60;

async function markVerified(env, ctx, t) {
  await env.DB.prepare("UPDATE sessions SET mfa_verified_at = ?2 WHERE token_hash = ?1").bind(ctx.tokenHash, t).run();
}

async function totpRow(env, userId) {
  return env.DB.prepare("SELECT * FROM user_totp WHERE user_id = ?1").bind(userId).first();
}

async function storeRecoveryCodes(env, userId, t) {
  const codes = newRecoveryCodes();
  const stmts = [env.DB.prepare("DELETE FROM user_recovery_codes WHERE user_id = ?1").bind(userId)];
  for (const c of codes) stmts.push(env.DB.prepare("INSERT INTO user_recovery_codes (user_id, code_hash, created_at) VALUES (?1, ?2, ?3)").bind(userId, await hashRecoveryCode(userId, c), t));
  await env.DB.batch(stmts);
  return codes;
}

/* D3/D4 gate before any code is checked; returns a refusal Response or null. */
async function gate(request, env, userId, row, t) {
  if (row && row.locked_until > t) return reply({ ok: false, error: "mfa_locked", retry_after: row.locked_until - t }, 429);
  const lim = await checkMfaLimit(env, request, userId);
  if (!lim.ok) return reply({ ok: false, error: "mfa_rate_limited", retry_after: lim.retryAfter }, 429);
  return null;
}

async function wrongCode(request, env, userId, t, what) {
  await recordMfaFailure(env, request, userId);
  const r = await env.DB.prepare("UPDATE user_totp SET failed_count = failed_count + 1 WHERE user_id = ?1 RETURNING failed_count").bind(userId).first();
  await audit(env, userId, "verify_failed", { what });
  if (r && r.failed_count >= MFA_LOCK_AFTER) {
    await env.DB.prepare("UPDATE user_totp SET failed_count = 0, locked_until = ?2 WHERE user_id = ?1").bind(userId, t + MFA_LOCK_SECONDS).run();
    await audit(env, userId, "locked", { seconds: MFA_LOCK_SECONDS });
    return reply({ ok: false, error: "mfa_locked", retry_after: MFA_LOCK_SECONDS }, 429);
  }
  return reply({ ok: false, error: "mfa_invalid_code" }, 422);
}

export async function mfaStatus(request, env) {
  const ctx = await sessionContext(request, env);
  if (!ctx) return reply({ ok: false, error: "auth_required" }, 401);
  const row = await totpRow(env, ctx.user.id);
  const left = await env.DB.prepare("SELECT COUNT(*) AS n FROM user_recovery_codes WHERE user_id = ?1 AND used_at IS NULL").bind(ctx.user.id).first();
  const t = nowSec();
  return reply({ ok: true, enrolled: !!(row && row.confirmed_at && row.secret_enc), pending: !!(row && row.pending_secret_enc),
    verified_at: ctx.user.mfaVerifiedAt ?? null, fresh: fresh(ctx.user.mfaVerifiedAt, t), fresh_seconds: MFA_FRESH_SECONDS,
    recovery_codes_left: left ? left.n : 0, locked_until: row && row.locked_until > t ? row.locked_until : null });
}

export async function mfaEnroll(request, env) {
  if (!hasEncKey(env)) return reply({ ok: false, error: "mfa_unavailable" }, 503);
  const ctx = await sessionContext(request, env);
  if (!ctx) return reply({ ok: false, error: "auth_required" }, 401);
  const t = nowSec();
  const row = await totpRow(env, ctx.user.id);
  // replacing a confirmed second factor needs a fresh one (the current device or a recovery code)
  if (row && row.confirmed_at && !fresh(ctx.user.mfaVerifiedAt, t)) return reply({ ok: false, error: "mfa_required" }, 403);
  const secret = crypto.getRandomValues(new Uint8Array(SECRET_BYTES));
  const enc = await encryptSecret(env, ctx.user.id, secret);
  await env.DB.prepare(`INSERT INTO user_totp (user_id, pending_secret_enc, created_at) VALUES (?1, ?2, ?3)
    ON CONFLICT(user_id) DO UPDATE SET pending_secret_enc = excluded.pending_secret_enc`).bind(ctx.user.id, enc, t).run();
  const b32 = base32Encode(secret);
  return reply({ ok: true, secret: b32, otpauth_uri: otpauthUri({ secretB32: b32, account: ctx.user.email || ctx.user.id }) });
}

/* A stored secret that no longer decrypts (TOTP_ENC_KEY rotated, RUNBOOK-RATER-2FA §5) can never verify: answer
   clearly instead of throwing, never count it as a wrong code, and audit it. The owner reset (§3) is the way back. */
async function openSecret(env, userId, stored, what) {
  try { return await decryptSecret(env, userId, stored); }
  catch { await audit(env, userId, "secret_unreadable", { what }); return null; }
}

export async function mfaEnrollConfirm(request, env) {
  if (!hasEncKey(env)) return reply({ ok: false, error: "mfa_unavailable" }, 503);
  const ctx = await sessionContext(request, env);
  if (!ctx) return reply({ ok: false, error: "auth_required" }, 401);
  const t = nowSec();
  const row = await totpRow(env, ctx.user.id);
  if (!row || !row.pending_secret_enc) return reply({ ok: false, error: "mfa_no_pending_enrolment" }, 409);
  const refused = await gate(request, env, ctx.user.id, row, t);
  if (refused) return refused;
  const { code } = await body(request);
  const pending = await openSecret(env, ctx.user.id, row.pending_secret_enc, "pending");
  if (!pending) {   // started under the old key: drop it so the rater can simply start again
    await env.DB.prepare("UPDATE user_totp SET pending_secret_enc = NULL WHERE user_id = ?1 AND pending_secret_enc = ?2").bind(ctx.user.id, row.pending_secret_enc).run();
    return reply({ ok: false, error: "mfa_no_pending_enrolment" }, 409);
  }
  const step = await verifyTotp(pending, code, t, 0);
  if (step === null) return wrongCode(request, env, ctx.user.id, t, "enrol");
  const done = await env.DB.prepare(`UPDATE user_totp SET secret_enc = pending_secret_enc, pending_secret_enc = NULL, confirmed_at = ?2,
      last_used_step = ?3, failed_count = 0, locked_until = 0 WHERE user_id = ?1 AND pending_secret_enc = ?4`)
    .bind(ctx.user.id, t, step, row.pending_secret_enc).run();
  if (!done.meta || done.meta.changes !== 1) return reply({ ok: false, error: "mfa_no_pending_enrolment" }, 409);   // replaced meanwhile
  const codes = await storeRecoveryCodes(env, ctx.user.id, t);
  await markVerified(env, ctx, t);
  await audit(env, ctx.user.id, "enrolled", { replaced: !!row.confirmed_at });
  return reply({ ok: true, recovery_codes: codes, verified_at: t });
}

export async function mfaVerify(request, env) {
  if (!hasEncKey(env)) return reply({ ok: false, error: "mfa_unavailable" }, 503);
  const ctx = await sessionContext(request, env);
  if (!ctx) return reply({ ok: false, error: "auth_required" }, 401);
  const t = nowSec();
  const row = await totpRow(env, ctx.user.id);
  if (!row || !row.confirmed_at || !row.secret_enc) return reply({ ok: false, error: "mfa_not_enrolled" }, 409);
  const refused = await gate(request, env, ctx.user.id, row, t);
  if (refused) return refused;
  const b = await body(request);
  if (b.recovery_code) {
    const hash = await hashRecoveryCode(ctx.user.id, b.recovery_code);
    const used = await env.DB.prepare("UPDATE user_recovery_codes SET used_at = ?3 WHERE user_id = ?1 AND code_hash = ?2 AND used_at IS NULL")
      .bind(ctx.user.id, hash, t).run();
    if (!used.meta || used.meta.changes !== 1) return wrongCode(request, env, ctx.user.id, t, "recovery_code");
    await env.DB.prepare("UPDATE user_totp SET failed_count = 0 WHERE user_id = ?1").bind(ctx.user.id).run();
    await markVerified(env, ctx, t);
    const left = await env.DB.prepare("SELECT COUNT(*) AS n FROM user_recovery_codes WHERE user_id = ?1 AND used_at IS NULL").bind(ctx.user.id).first();
    await audit(env, ctx.user.id, "recovery_used", { left: left.n });
    return reply({ ok: true, verified_at: t, recovery_codes_left: left.n });
  }
  const secret = await openSecret(env, ctx.user.id, row.secret_enc, "secret");
  if (!secret) return reply({ ok: false, error: "mfa_reset_required" }, 409);
  const step = await verifyTotp(secret, b.code, t, row.last_used_step);
  if (step === null) return wrongCode(request, env, ctx.user.id, t, "code");
  // conditional: two requests with the same code cannot both pass
  const ok = await env.DB.prepare("UPDATE user_totp SET last_used_step = ?2, failed_count = 0 WHERE user_id = ?1 AND last_used_step < ?2").bind(ctx.user.id, step).run();
  if (!ok.meta || ok.meta.changes !== 1) return wrongCode(request, env, ctx.user.id, t, "replay");
  await markVerified(env, ctx, t);
  await audit(env, ctx.user.id, "verified", {});
  return reply({ ok: true, verified_at: t });
}

export async function mfaRegenerateRecoveryCodes(request, env) {
  const ctx = await sessionContext(request, env);
  if (!ctx) return reply({ ok: false, error: "auth_required" }, 401);
  const t = nowSec();
  const row = await totpRow(env, ctx.user.id);
  if (!row || !row.confirmed_at) return reply({ ok: false, error: "mfa_not_enrolled" }, 409);
  if (!fresh(ctx.user.mfaVerifiedAt, t)) return reply({ ok: false, error: "mfa_required" }, 403);
  const codes = await storeRecoveryCodes(env, ctx.user.id, t);
  await audit(env, ctx.user.id, "codes_regenerated", {});
  return reply({ ok: true, recovery_codes: codes });
}
