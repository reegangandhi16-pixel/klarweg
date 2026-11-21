/* totp.js — second factor for exam raters/admins (register OD-19, decisions D1–D8).
   RFC 6238 TOTP: HMAC-SHA-1, 6 digits, 30 s step, ±1 step accepted; a step at or below the last accepted step is
   refused (no replay). Secrets are stored encrypted with AES-GCM under the Worker secret TOTP_ENC_KEY (32 random bytes,
   base64); without that secret every second-factor route answers mfa_unavailable. Recovery codes are random, shown
   once and stored only as SHA-256 hashes bound to the user id. WebCrypto only — no dependencies. */

export const STEP_SECONDS = 30;
export const DIGITS = 6;
export const WINDOW_STEPS = 1;
export const SECRET_BYTES = 20;
export const RECOVERY_CODE_COUNT = 10;

const B32 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

export function base32Encode(bytes) {
  let bits = 0, value = 0, out = "";
  for (const b of bytes) {
    value = (value << 8) | b; bits += 8;
    while (bits >= 5) { out += B32[(value >>> (bits - 5)) & 31]; bits -= 5; }
  }
  if (bits > 0) out += B32[(value << (5 - bits)) & 31];
  return out;
}

export function base32Decode(text) {
  const clean = String(text).toUpperCase().replace(/[\s=-]/g, "");
  let bits = 0, value = 0;
  const out = [];
  for (const c of clean) {
    const i = B32.indexOf(c);
    if (i < 0) throw new Error("invalid base32");
    value = (value << 5) | i; bits += 5;
    if (bits >= 8) { out.push((value >>> (bits - 8)) & 255); bits -= 8; }
  }
  return new Uint8Array(out);
}

/* RFC 4226 HOTP over a raw key; returns the zero-padded code. */
export async function hotp(keyBytes, counter, digits = DIGITS) {
  const key = await crypto.subtle.importKey("raw", keyBytes, { name: "HMAC", hash: "SHA-1" }, false, ["sign"]);
  const msg = new Uint8Array(8);
  let c = BigInt(counter);
  for (let i = 7; i >= 0; i--) { msg[i] = Number(c & 0xffn); c >>= 8n; }
  const h = new Uint8Array(await crypto.subtle.sign("HMAC", key, msg));
  const off = h[h.length - 1] & 0x0f;
  const bin = ((h[off] & 0x7f) << 24) | (h[off + 1] << 16) | (h[off + 2] << 8) | h[off + 3];
  return String(bin % 10 ** digits).padStart(digits, "0");
}

export const stepAt = (nowSeconds) => Math.floor(nowSeconds / STEP_SECONDS);

function sameString(a, b) {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

/* Returns the accepted step, or null. Steps ≤ lastUsedStep are never accepted (replay). */
export async function verifyTotp(keyBytes, code, nowSeconds, lastUsedStep = 0) {
  const c = String(code || "").replace(/\s/g, "");
  if (!/^\d{6}$/.test(c)) return null;
  const now = stepAt(nowSeconds);
  let hit = null;
  for (let s = now - WINDOW_STEPS; s <= now + WINDOW_STEPS; s++) {   // every candidate is computed: no early exit
    if (s <= lastUsedStep) continue;
    if (sameString(await hotp(keyBytes, s), c) && hit === null) hit = s;
  }
  return hit;
}

export function otpauthUri({ secretB32, account, issuer = "Klarweg" }) {
  const label = encodeURIComponent(`${issuer}:${account}`);
  return `otpauth://totp/${label}?secret=${secretB32}&issuer=${encodeURIComponent(issuer)}&algorithm=SHA1&digits=${DIGITS}&period=${STEP_SECONDS}`;
}

/* ---------- secret encryption (TOTP_ENC_KEY) ---------- */
const b64 = (bytes) => btoa(String.fromCharCode(...bytes));
const unb64 = (s) => Uint8Array.from(atob(s), (ch) => ch.charCodeAt(0));

export function hasEncKey(env) {
  try { return typeof env.TOTP_ENC_KEY === "string" && unb64(env.TOTP_ENC_KEY).length === 32; } catch { return false; }
}

async function aesKey(env) {
  return crypto.subtle.importKey("raw", unb64(env.TOTP_ENC_KEY), { name: "AES-GCM" }, false, ["encrypt", "decrypt"]);
}

/* The user id is bound as additional data: a ciphertext copied to another user's row does not decrypt. */
export async function encryptSecret(env, userId, secretBytes) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv, additionalData: new TextEncoder().encode(userId) }, await aesKey(env), secretBytes));
  return `v1:${b64(iv)}:${b64(ct)}`;
}

export async function decryptSecret(env, userId, stored) {
  const [v, iv, ct] = String(stored || "").split(":");
  if (v !== "v1" || !iv || !ct) throw new Error("unsupported secret format");
  return new Uint8Array(await crypto.subtle.decrypt({ name: "AES-GCM", iv: unb64(iv), additionalData: new TextEncoder().encode(userId) }, await aesKey(env), unb64(ct)));
}

/* ---------- recovery codes ---------- */
/* 10 base32 characters (50 bits) shown as xxxxx-xxxxx; normalised case- and separator-insensitively. */
export function newRecoveryCodes(n = RECOVERY_CODE_COUNT) {
  return Array.from({ length: n }, () => {
    const raw = base32Encode(crypto.getRandomValues(new Uint8Array(7))).slice(0, 10).toLowerCase();
    return `${raw.slice(0, 5)}-${raw.slice(5)}`;
  });
}

export const normaliseRecoveryCode = (code) => String(code || "").toLowerCase().replace(/[^a-z2-7]/g, "");

export async function hashRecoveryCode(userId, code) {
  const d = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${userId}:${normaliseRecoveryCode(code)}`));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
