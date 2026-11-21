/* Attempt-scoped signed media delivery from the private R2 bucket.
   A token binds attempt + form + asset + purpose + expiry under HMAC-SHA256
   (EXAM_MEDIA_SECRET). It is issued only for an asset of the attempt's own
   form whose module is currently running, lives MEDIA_TTL_MS, and is
   re-checked against attempt state on every fetch. Exam media never uses the
   public klarweg-audio CDN, jsDelivr, or chapter audio manifests. */
import { fail, now } from './http.js';

export const MEDIA_TTL_MS = 120_000;
const PREFIX = 'kw-exm-v1';
const PURPOSES = new Set(['listen', 'prompt']);

const b64u = (bytes) => btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const fromB64u = (s) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4)), (c) => c.charCodeAt(0));

async function hmacKey(env) {
  const s = env.EXAM_MEDIA_SECRET;
  if (typeof s !== 'string' || s.length < 32) fail(503, 'exam_misconfigured', 'Media secret missing.');
  return crypto.subtle.importKey('raw', new TextEncoder().encode(s), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}

export async function signMediaToken(env, { attemptId, formId, assetId, purpose, exp }) {
  if (!PURPOSES.has(purpose)) fail(400, 'invalid_purpose');
  const payload = [PREFIX, attemptId, formId, assetId, purpose, String(exp)].join('|');
  const sig = new Uint8Array(await crypto.subtle.sign('HMAC', await hmacKey(env), new TextEncoder().encode(payload)));
  return `${b64u(new TextEncoder().encode(payload))}.${b64u(sig)}`;
}

export async function verifyMediaToken(env, token) {
  const m = /^([A-Za-z0-9_-]{20,400})\.([A-Za-z0-9_-]{43})$/.exec(token || '');
  if (!m) fail(403, 'media_token_invalid');
  let payload, sig;
  try { payload = fromB64u(m[1]); sig = fromB64u(m[2]); } catch { fail(403, 'media_token_invalid'); }
  const ok = await crypto.subtle.verify('HMAC', await hmacKey(env), sig, payload);
  if (!ok) fail(403, 'media_token_invalid');
  const [prefix, attemptId, formId, assetId, purpose, exp] = new TextDecoder().decode(payload).split('|');
  if (prefix !== PREFIX) fail(403, 'media_token_invalid');
  if (!(Number(exp) > now(env))) fail(403, 'media_token_expired');
  return { attemptId, formId, assetId, purpose, exp: Number(exp) };
}

/* GET /exam/v1/media/:token — no cookie needed; the token is the capability. */
export async function streamMedia(env, token) {
  const t = await verifyMediaToken(env, token);
  const a = await env.DB.prepare('SELECT id, form_id, status FROM attempts WHERE id = ?1').bind(t.attemptId).first();
  if (!a || a.form_id !== t.formId || a.status !== 'in_progress') fail(403, 'media_not_allowed');
  const asset = await env.DB.prepare('SELECT module, r2_key, mime, bytes FROM form_assets WHERE form_id = ?1 AND asset_id = ?2').bind(t.formId, t.assetId).first();
  if (!asset) fail(404, 'media_not_found');
  const mod = await env.DB.prepare('SELECT status FROM attempt_modules WHERE attempt_id = ?1 AND module = ?2').bind(t.attemptId, asset.module).first();
  if (!mod || mod.status !== 'running') fail(403, 'media_not_allowed');
  const obj = await env.CONTENT.get(asset.r2_key);
  if (!obj) fail(404, 'media_not_found');
  return new Response(obj.body, {
    status: 200,
    headers: {
      'content-type': asset.mime,
      'content-length': String(asset.bytes),
      'cache-control': 'private, no-store',
      'x-content-type-options': 'nosniff',
      'content-disposition': 'inline'
    }
  });
}
