/* ids.js — id generation and hashing. WebCrypto only; no dependencies. */

const ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'; // no I, L, O, U

/** 'KW-XXXXXX' — readable aloud, safe in URLs, server-generated only. */
export function newReportId() {
  const b = crypto.getRandomValues(new Uint8Array(6));
  let s = '';
  for (let i = 0; i < 6; i++) s += ALPHABET[b[i] % ALPHABET.length];
  return 'KW-' + s;
}

export function randomToken(bytes = 32) {
  const b = crypto.getRandomValues(new Uint8Array(bytes));
  return btoa(String.fromCharCode(...b)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function hex(buf) {
  return [...new Uint8Array(buf)].map(x => x.toString(16).padStart(2, '0')).join('');
}

export async function sha256Hex(input) {
  const data = typeof input === 'string' ? new TextEncoder().encode(input) : input;
  return hex(await crypto.subtle.digest('SHA-256', data));
}

export async function hmacHex(secret, message) {
  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(String(secret)),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  );
  return hex(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(String(message))));
}

/** Timing-safe compare for equal-length hex/base64 strings. */
export function safeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Pseudonymous reporter key: HMAC(ip + UTC day, RATE_SALT).
 *  Rotates daily. The raw IP is never stored, logged, or returned. */
export async function reporterHash(env, req) {
  const ip = req.headers.get('CF-Connecting-IP') || 'unknown';
  const day = new Date().toISOString().slice(0, 10);
  return hmacHex(env.RATE_SALT || 'dev-salt', 'r|' + ip + '|' + day);
}

/** Separate namespace for login throttling so it can't collide with reports. */
export async function ipHash(env, req) {
  const ip = req.headers.get('CF-Connecting-IP') || 'unknown';
  const day = new Date().toISOString().slice(0, 10);
  return hmacHex(env.RATE_SALT || 'dev-salt', 'l|' + ip + '|' + day);
}

/** Duplicate key: same place + same kind + same words.
 *  lowercase → strip punctuation → collapse whitespace. */
export function normaliseDescription(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[\p{P}\p{S}]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function dupHash(sectionRef, category, description) {
  return sha256Hex(sectionRef + '|' + category + '|' + normaliseDescription(description));
}
