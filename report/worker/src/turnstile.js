/* turnstile.js — server-side bot verification.

   The secret key lives only in a Worker secret and never reaches a client.
   Three outcomes:
     ok:true,  verified:true   token validated  → normal budget
     ok:true,  verified:false  no token / widget never loaded / not configured
                               → report still accepted, tighter rate limit
     ok:false                  token present but rejected → 403
   A learner whose network blocked the widget must still be able to report
   a broken lesson; a forged or replayed token must not get through. */

const ENDPOINT = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

function allowedHostnames(env) {
  return (env.ALLOWED_ORIGINS || '').split(',')
    .map(s => s.trim()).filter(Boolean)
    .map(o => { try { return new URL(o).hostname; } catch (e) { return null; } })
    .filter(Boolean);
}

export async function verifyTurnstile(env, token, ip) {
  if (!env.TURNSTILE_SECRET_KEY) return { ok: true, verified: false, reason: 'not_configured' };
  if (!token) return { ok: true, verified: false, reason: 'missing' };
  if (typeof token !== 'string' || token.length > 2048) {
    return { ok: false, reason: 'malformed' };
  }

  const body = new FormData();
  body.append('secret', env.TURNSTILE_SECRET_KEY);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);

  let data;
  try {
    const res = await fetch(ENDPOINT, { method: 'POST', body });
    data = await res.json();
  } catch (e) {
    // Verification service unreachable: do not punish the learner, but treat
    // the submission as unverified so the tighter budget applies.
    return { ok: true, verified: false, reason: 'unreachable' };
  }

  if (!data || data.success !== true) {
    return { ok: false, reason: 'verification_failed', codes: (data && data['error-codes']) || [] };
  }

  const hosts = allowedHostnames(env);
  if (hosts.length && data.hostname && !hosts.includes(data.hostname)) {
    return { ok: false, reason: 'hostname_mismatch' };
  }
  return { ok: true, verified: true };
}
