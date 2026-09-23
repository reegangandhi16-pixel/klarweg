const GOOGLE_CERTS_URL = "https://www.googleapis.com/oauth2/v3/certs";
const GOOGLE_ISSUERS = new Set([
  "https://accounts.google.com",
  "accounts.google.com"
]);

let cachedKeys = null;
let cachedKeysExpiresAt = 0;

function base64urlToBytes(value) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/")
    + "===".slice((value.length + 3) % 4);

  const binary = atob(padded);

  return Uint8Array.from(
    binary,
    char => char.charCodeAt(0)
  );
}

function decodeJsonPart(value) {
  return JSON.parse(new TextDecoder().decode(base64urlToBytes(value)));
}

async function getGoogleKey(kid) {
  const now = Date.now();

  if (!cachedKeys || now >= cachedKeysExpiresAt) {
    const response = await fetch(GOOGLE_CERTS_URL);

    if (!response.ok) {
      throw new Error("Google signing keys could not be fetched.");
    }

    const cacheControl = response.headers.get("Cache-Control") || "";

    const match = cacheControl.match(/max-age=(\d+)/i);

    const maxAge = match ? Number(match[1]) * 1000 : 60 * 60 * 1000;

    cachedKeys = await response.json();


    cachedKeysExpiresAt =
      now + Math.min(maxAge, 24 * 60 * 60 * 1000);
  }

  const key = (cachedKeys.keys || [])
    .find(item => item.kid == kid);

  if (!key) {
    cachedKeys = null;
    cachedKeysExpiresAt = 0;

    throw new Error(
      "Google signing key not found."
    );
  }

  return key;
}

export async function verifyGoogleIdToken(idToken, clientId) {
  if (
    typeof idToken !== "string" ||
    !idToken.trim()
  ) {
    throw new Error(
      "Google credential is required."
    );
  }

  if (
    typeof clientId !== "string" ||
    !clientId.trim()
  ) {
    throw new Error(
      "Google authentication is not configured."
    );
  }

  const parts = idToken.split(".");

  if (parts.length !== 3) {
    throw new Error(
      "Invalid Google credential."
    );
  }

  let header;

  let payload;

  try {
    header = decodeJsonPart(parts[0]);
    payload = decodeJsonPart(parts[1]);
  } catch {
    throw new Error(
      "Invalid Google credential."
    );
  }

  if (
    header.alg !== "RS256" ||
    typeof header.kid !== "string" ||
    !header.kid.trim()
  ) {
    throw new Error(
      "Unsupported Google credential."
    );
  }

  if (!GOOGLE_ISSUERS.has(payload.iss)) {
    throw new Error(
      "Invalid Google credential issuer."
    );
  }

  const audience = Array.isArray(payload.aud)
    ? payload.aud
    : [payload.aud];

  if (!audience.includes(clientId)) {
    throw new Error(
      "Google credential audience mismatch."
    );
  }

  if (audience.length > 1 && payload.azp !== clientId) {
    throw new Error(
      "Google credential authorized party mismatch."
    );
  }

  let now = Math.floor(Date.now() / 1000);

  if (
    typeof payload.exp !== "number" ||
    payload.exp <= now ||
    typeof payload.iat !== "number" ||
    payload.iat > now + 300
  ) {
    throw new Error(
      "Google credential has expired or is not yet valid."
    );
  }

  if (
    typeof payload.sub !== "string" ||
    !payload.sub.trim() ||
    typeof payload.email !== "string" ||
    !payload.email.trim() ||
    payload.email_verified !== true
  ) {
    throw new Error(
      "Google account email is not verified."
    );
  }

  const keyData = await getGoogleKey(header.kid);

  const cryptoKey = await crypto.subtle.importKey(
    "jwk",
    keyData,
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: "SHA-256"
    },
    false,
    ["verify"]
  );

  const signingInput = new TextEncoder().encode(
    parts[0] + "." + parts[1]
  );

  const signature = base64urlToBytes(parts[2]);

  const valid = await crypto.subtle.verify(
    {
      name: "RSASSA-PKCS1-v1_5"
    },
    cryptoKey,
    signature,
    signingInput
  );

  if (!valid) {
    throw new Error(
      "Invalid Google credential signature."
    );
  }

  return {
    sub: payload.sub,
    email: payload.email
      .trim()
      .toLowerCase(),
    name:
      typeof payload.name === "string"
        ? payload.name.trim()
        : "",
    nonce: typeof payload.nonce === "string" ? payload.nonce : null
  };
}
