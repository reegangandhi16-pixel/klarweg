/* HTTP helpers for klarweg-exam. Every error is a JSON body
   { ok:false, error:<code>, message? } with a stable machine code. */

export class ApiError extends Error {
  constructor(status, code, message, extra) {
    super(message || code);
    this.status = status;
    this.code = code;
    this.extra = extra || null;
  }
}

export const fail = (status, code, message, extra) => { throw new ApiError(status, code, message, extra); };

export function json(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...headers }
  });
}

export function errorResponse(err) {
  return json({ ok: false, error: err.code, ...(err.message && err.message !== err.code ? { message: err.message } : {}), ...(err.extra || {}) }, err.status);
}

const MAX_JSON_BYTES = 256 * 1024;   // writing texts are small; anything bigger is refused

export async function readJsonBody(request) {
  const ct = (request.headers.get('content-type') || '').toLowerCase();
  if (!ct.startsWith('application/json')) fail(415, 'unsupported_media_type', 'JSON body required.');
  const buf = await request.arrayBuffer();
  if (buf.byteLength > MAX_JSON_BYTES) fail(413, 'body_too_large');
  try {
    const v = JSON.parse(new TextDecoder().decode(buf));
    if (!v || typeof v !== 'object' || Array.isArray(v)) fail(400, 'invalid_body');
    return v;
  } catch (e) {
    if (e instanceof ApiError) throw e;
    fail(400, 'invalid_json');
  }
}

export const REQUEST_ID_RE = /^[A-Za-z0-9_-]{8,64}$/;
export const DEVICE_ID_RE = /^[A-Za-z0-9_-]{8,64}$/;
export const ATTEMPT_ID_RE = /^att_[0-9a-f-]{36}$/;
export const LEASE_ID_RE = /^ls_[0-9a-f-]{36}$/;

export const now = (env) => (typeof env.__clock === 'function' ? env.__clock() : Date.now());

export async function sha256Hex(data) {
  const buf = typeof data === 'string' ? new TextEncoder().encode(data) : data;
  const d = await crypto.subtle.digest('SHA-256', buf);
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export function timingSafeEqualStr(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  const ea = new TextEncoder().encode(a);
  const eb = new TextEncoder().encode(b);
  let diff = ea.length ^ eb.length;
  for (let i = 0; i < Math.max(ea.length, eb.length); i++) diff |= (ea[i] || 0) ^ (eb[i] || 0);
  return diff === 0;
}
