const PBKDF2_ITERATIONS = 100000;
const PASSWORD_KEY_LENGTH = 256;
const SESSION_TOKEN_BYTES = 32;

function bytesToBase64url(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function base64urlToBytes(value) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/")
    + "===".slice((value.length + 3) % 4);
  const binary = atob(padded);
  return Uint8Array.from(binary, char => char.charCodeAt(0));
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

async function derivePasswordHash(password, salt) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );

  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations: PBKDF2_ITERATIONS,
      hash: "SHA-256"
    },
    key,
    PASSWORD_KEY_LENGTH
  );

  return new Uint8Array(bits);
}

export async function hashPassword(password) {
  if (typeof password !== "string" || password.length < 8) {
    throw new Error("Password must contain at least 8 characters.");
  }

  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await derivePasswordHash(password, salt);

  return {
    algorithm: "PBKDF2-SHA256",
    iterations: PBKDF2_ITERATIONS,
    salt: bytesToBase64url(salt),
    hash: bytesToBase64url(hash)
  };
}

export async function verifyPassword(password, stored) {
  if (!stored || stored.algorithm !== "PBKDF2-SHA256") return false;
  if (stored.iterations !== PBKDF2_ITERATIONS) return false;

  try {
    const salt = base64urlToBytes(stored.salt);
    const expected = base64urlToBytes(stored.hash);
    const actual = await derivePasswordHash(password, salt);
    return timingSafeEqual(actual, expected);
  } catch {
    return false;
  }
}

export function createSessionToken() {
  return bytesToBase64url(
    crypto.getRandomValues(new Uint8Array(SESSION_TOKEN_BYTES))
  );
}

export function normalizeEmail(email) {
  return typeof email === "string" ? email.trim().toLowerCase() : "";
}

/* Cashfree's customer_phone requirement, per the official Create Order
   schema: a bare 10-digit number, or a "+"-prefixed international
   number that overrides the 10-digit limit. Cashfree's docs do not
   state a minimum/maximum length for the international case — the
   8-15 digit bound below is a Klarweg sanity check, not a Cashfree
   requirement. This is format validation only — no uniqueness or
   other business rule is enforced here. */
const PHONE_RE = /^(\d{10}|\+\d{8,15})$/;

export function normalizePhone(phone) {
  return typeof phone === "string" ? phone.trim() : "";
}

export function isValidPhone(phone) {
  return PHONE_RE.test(phone);
}

export function sessionCookie(token, maxAgeSeconds) {
  return [
    `kw_session=${token}`,
    "Path=/",
    "HttpOnly",
    "Secure",
    "SameSite=None",
    `Max-Age=${maxAgeSeconds}`
  ].join("; ");
}

export function clearSessionCookie() {
  return [
    "kw_session=",
    "Path=/",
    "HttpOnly",
    "Secure",
    "SameSite=None",
    "Max-Age=0"
  ].join("; ");
}
