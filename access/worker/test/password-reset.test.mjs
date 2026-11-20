/* klarweg-access — Forgot password / reset password (src/password-reset.js).
   Drives the real Worker fetch handler against an in-memory D1 (schema.sql +
   every migration). The Cloudflare Email Service binding is a recorder
   (env.EMAIL.send); Google's JWKS is served by a local RSA key. No network,
   no real credentials. */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { createD1 } from './d1-sqlite.mjs';
import { NEUTRAL_MESSAGE, RESET_TTL_SECONDS, resetLink } from '../src/password-reset.js';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://klarweg.in';
const API = 'https://klarweg.in/api';
const GOOGLE_CLIENT_ID = 'test-client.apps.googleusercontent.com';
const PASSWORD = 'correct-horse-9';

/* ---------- Google JWKS mock (for Google-only accounts + regression) ---------- */
let googleKeyPair, googleJwk;
const b64u = (buf) => Buffer.from(buf).toString('base64url');
test.before(async () => {
  googleKeyPair = await crypto.subtle.generateKey(
    { name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' }, true, ['sign', 'verify']);
  googleJwk = { ...(await crypto.subtle.exportKey('jwk', googleKeyPair.publicKey)), kid: 'test-kid', alg: 'RS256', use: 'sig' };
});
async function googleIdToken(claims) {
  const header = b64u(JSON.stringify({ alg: 'RS256', kid: 'test-kid', typ: 'JWT' }));
  const now = Math.floor(Date.now() / 1000);
  const payload = b64u(JSON.stringify({ iss: 'https://accounts.google.com', aud: GOOGLE_CLIENT_ID, iat: now, exp: now + 600, email_verified: true, ...claims }));
  const sig = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', googleKeyPair.privateKey, new TextEncoder().encode(`${header}.${payload}`));
  return `${header}.${payload}.${b64u(sig)}`;
}
globalThis.fetch = async (input) => {
  const url = typeof input === 'string' ? input : input.url;
  if (url === 'https://www.googleapis.com/oauth2/v3/certs') return Response.json({ keys: [googleJwk] });
  throw new Error('Unexpected network call in test: ' + url);
};

/* ---------- harness ---------- */
function makeEnv(overrides = {}) {
  const sent = [];
  const mail = { fail: null };
  const EMAIL = {
    async send(msg) {
      if (mail.fail) { const e = new Error('nope'); e.code = mail.fail; throw e; }
      sent.push(msg);
      return { messageId: 'm' + sent.length };
    }
  };
  return {
    env: { DB: createD1(WORKER_DIR), RATE_SALT: 'test-salt', GOOGLE_CLIENT_ID, SITE_BASE_URL: 'https://klarweg.in', PASSWORD_RESET: 'on', EMAIL, ...overrides },
    sent, mail
  };
}

let ipN = 0;
const freshIp = () => `198.51.100.${(ipN++ % 250) + 1}`;
async function req(env, method, pathname, { body, cookie, origin = SITE, ip = freshIp() } = {}) {
  const h = { 'CF-Connecting-IP': ip };
  if (body !== undefined) h['content-type'] = 'application/json';
  if (cookie) h.cookie = cookie;
  if (origin) h.origin = origin;
  const pending = [];
  const ctx = { waitUntil(p) { pending.push(p); } };
  const res = await worker.fetch(new Request('https://klarweg-access.example.workers.dev' + pathname, {
    method, headers: h, body: body === undefined ? undefined : (typeof body === 'string' ? body : JSON.stringify(body))
  }), env, ctx);
  await Promise.all(pending);          // let after-response work (the email) finish
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch {}
  return { status: res.status, json, text, headers: res.headers };
}
const cookieOf = (r) => { const c = r.headers.get('set-cookie'); return c ? c.split(';')[0] : null; };
async function signup(env, email = `u${Math.random().toString(36).slice(2)}@example.com`) {
  const r = await req(env, 'POST', '/auth/signup', { body: { email, password: PASSWORD, name: 'Asha' } });
  assert.equal(r.status, 201, JSON.stringify(r.json));
  return { email, cookie: cookieOf(r), id: r.json.user.id };
}
const forgot = (env, email, opts = {}) => req(env, 'POST', '/auth/password/forgot', { body: { email }, ...opts });
const login = (env, email, password) => req(env, 'POST', '/auth/login', { body: { email, password } });
function tokenFrom(msg) {
  const m = msg.text.match(/#token=([A-Za-z0-9_-]+)/);
  assert.ok(m, 'reset email carries a #token= link');
  return m[1];
}

/* ---------- tests ---------- */

test('success: neutral reply, one email with a klarweg.in link, reset works, old password and all sessions die', async () => {
  const { env, sent } = makeEnv();
  const u = await signup(env, 'asha@example.com');
  const second = cookieOf(await login(env, u.email, PASSWORD));

  const r = await forgot(env, '  Asha@Example.com ');
  assert.equal(r.status, 200);
  assert.deepEqual(r.json, { ok: true, message: NEUTRAL_MESSAGE });
  assert.equal(r.headers.get('cache-control'), 'no-store');
  assert.equal(sent.length, 1);
  const msg = sent[0];
  assert.equal(msg.to, 'asha@example.com');
  assert.deepEqual(msg.from, { email: 'no-reply@klarweg.in', name: 'Klarweg' });
  assert.match(msg.subject, /Reset your Klarweg password/);
  assert.ok(msg.text && msg.html, 'plain-text and HTML parts');
  assert.match(msg.text, /https:\/\/klarweg\.in\/account\/reset-password#token=[A-Za-z0-9_-]{43}\n/);
  assert.doesNotMatch(msg.text + msg.html, new RegExp(PASSWORD), 'never contains a password');
  assert.doesNotMatch(msg.html, /E55A3F|coral/i, 'no orange in the email');
  assert.doesNotMatch(msg.text + msg.html, /Asha/, 'never echoes the (unverified) display name');
  const token = tokenFrom(msg);

  // only the hash is stored
  const rows = env.DB.raw.prepare('SELECT * FROM password_reset_tokens').all();
  assert.equal(rows.length, 1);
  assert.notEqual(rows[0].token_hash, token);
  assert.ok(!JSON.stringify(rows).includes(token));
  assert.equal(rows[0].expires_at - rows[0].created_at, RESET_TTL_SECONDS);
  assert.equal(RESET_TTL_SECONDS, 30 * 60);

  assert.equal((await req(env, 'POST', '/auth/password/reset/check', { body: { token } })).status, 200);

  const done = await req(env, 'POST', '/auth/password/reset', { body: { token, password: 'new-secret-42' } });
  assert.equal(done.status, 200, JSON.stringify(done.json));
  assert.match(done.headers.get('set-cookie'), /^kw_session=;.*Max-Age=0/, 'clears this browser\'s cookie');
  assert.equal(cookieOf(done), 'kw_session=');

  assert.equal((await login(env, u.email, PASSWORD)).status, 401, 'old password refused');
  assert.equal((await login(env, u.email, 'new-secret-42')).status, 200, 'new password works');
  assert.equal((await req(env, 'GET', '/auth/me', { cookie: u.cookie })).status, 401, 'signup session revoked');
  assert.equal((await req(env, 'GET', '/auth/me', { cookie: second })).status, 401, 'other device revoked');

  assert.equal(sent.length, 2, 'a "password changed" notice follows');
  assert.match(sent[1].subject, /password was changed/);
  assert.doesNotMatch(sent[1].text, /token=/);
});

test('used link: a second reset with the same token is refused, and it cannot be checked again', async () => {
  const { env, sent } = makeEnv();
  const u = await signup(env);
  await forgot(env, u.email);
  const token = tokenFrom(sent[0]);
  assert.equal((await req(env, 'POST', '/auth/password/reset', { body: { token, password: 'first-new-pass' } })).status, 200);
  const again = await req(env, 'POST', '/auth/password/reset', { body: { token, password: 'second-new-pass' } });
  assert.equal(again.status, 400);
  assert.equal(again.json.error, 'invalid_token');
  assert.equal((await req(env, 'POST', '/auth/password/reset/check', { body: { token } })).status, 400);
  assert.equal((await login(env, u.email, 'first-new-pass')).status, 200, 'the first reset stands');
  assert.equal((await login(env, u.email, 'second-new-pass')).status, 401);
});

test('concurrent submits of one link: exactly one wins', async () => {
  const { env, sent } = makeEnv();
  const u = await signup(env);
  await forgot(env, u.email);
  const token = tokenFrom(sent[0]);
  const [a, b] = await Promise.all([
    req(env, 'POST', '/auth/password/reset', { body: { token, password: 'alpha-pass-1' } }),
    req(env, 'POST', '/auth/password/reset', { body: { token, password: 'bravo-pass-2' } })
  ]);
  assert.deepEqual([a.status, b.status].sort(), [200, 400]);
});

test('expired link is refused and leaves the password unchanged', async () => {
  const { env, sent } = makeEnv();
  const u = await signup(env);
  await forgot(env, u.email);
  const token = tokenFrom(sent[0]);
  env.DB.raw.exec(`UPDATE password_reset_tokens SET expires_at = ${Math.floor(Date.now() / 1000) - 1}`);
  const check = await req(env, 'POST', '/auth/password/reset/check', { body: { token } });
  assert.equal(check.status, 400);
  assert.match(check.json.message, /expired/);
  assert.equal((await req(env, 'POST', '/auth/password/reset', { body: { token, password: 'too-late-pass' } })).status, 400);
  assert.equal((await login(env, u.email, PASSWORD)).status, 200);
});

test('a newer request replaces the older link', async () => {
  const { env, sent } = makeEnv();
  const u = await signup(env);
  await forgot(env, u.email);
  await forgot(env, u.email);
  const [older, newer] = sent.map(tokenFrom);
  assert.notEqual(older, newer);
  assert.equal((await req(env, 'POST', '/auth/password/reset/check', { body: { token: older } })).status, 400);
  assert.equal((await req(env, 'POST', '/auth/password/reset/check', { body: { token: newer } })).status, 200);
});

test('unknown email: identical status and body, nothing sent, nothing stored', async () => {
  const { env, sent } = makeEnv();
  const u = await signup(env);
  const known = await forgot(env, u.email);
  const unknown = await forgot(env, 'nobody@example.com');
  assert.equal(unknown.status, known.status);
  assert.equal(unknown.text, known.text);
  assert.equal(sent.length, 1);
  assert.equal(sent[0].to, u.email);
  assert.equal(env.DB.raw.prepare('SELECT COUNT(*) n FROM password_reset_tokens').get().n, 1);
});

test('Google-only account: same neutral reply, an email that points to Google Sign-In, no reset token; Google login unaffected', async () => {
  const { env, sent } = makeEnv();
  const credential = await googleIdToken({ sub: 'g-42', email: 'gee@example.com', name: 'Gee' });
  const g = await req(env, 'POST', '/auth/google', { body: { credential } });
  assert.equal(g.status, 200);

  const r = await forgot(env, 'gee@example.com');
  assert.deepEqual(r.json, { ok: true, message: NEUTRAL_MESSAGE });
  assert.equal(sent.length, 1);
  assert.match(sent[0].text, /Google Sign-In/);
  assert.doesNotMatch(sent[0].text + sent[0].html, /token=/);
  assert.equal(env.DB.raw.prepare('SELECT COUNT(*) n FROM password_reset_tokens').get().n, 0);

  const row = env.DB.raw.prepare('SELECT google_sub, password_hash FROM users WHERE email = ?').get('gee@example.com');
  assert.equal(row.google_sub, 'g-42');
  assert.equal(row.password_hash, null);
  assert.equal((await login(env, 'gee@example.com', 'anything-at-all')).status, 401, 'still no password login');
  const again = await req(env, 'POST', '/auth/google', { body: { credential } });
  assert.equal(again.status, 200);
  assert.equal(again.json.user.id, g.json.user.id);
});

test('invalid input: bad email, short/long/missing password, malformed or unknown token', async () => {
  const { env, sent } = makeEnv();
  for (const email of ['', 'not-an-email', 'a@b', 'x'.repeat(250) + '@example.com']) {
    const r = await forgot(env, email);
    assert.equal(r.status, 400, email);
    assert.equal(r.json.field, 'email');
  }
  assert.equal((await req(env, 'POST', '/auth/password/forgot', { body: 'not json' })).status, 400);

  const u = await signup(env);
  await forgot(env, u.email);
  const token = tokenFrom(sent[0]);
  for (const password of ['short', 'x'.repeat(201), undefined, 12345678]) {
    const r = await req(env, 'POST', '/auth/password/reset', { body: { token, password } });
    assert.equal(r.status, 400);
    assert.equal(r.json.field, 'password');
  }
  assert.equal((await req(env, 'POST', '/auth/password/reset/check', { body: { token } })).status, 200, 'a refused password does not use up the link');

  for (const bad of ['', 'abc', token.slice(0, -1) + (token.endsWith('A') ? 'B' : 'A'), token + 'x', '../../etc', null]) {
    assert.equal((await req(env, 'POST', '/auth/password/reset/check', { body: { token: bad } })).status, 400);
    assert.equal((await req(env, 'POST', '/auth/password/reset', { body: { token: bad, password: 'long-enough-1' } })).status, 400);
  }
  assert.equal((await login(env, u.email, PASSWORD)).status, 200);
});

test('feature off (flag off, or no EMAIL binding): 503 for every address, nothing sent or stored', async () => {
  for (const overrides of [{ PASSWORD_RESET: 'off' }, { PASSWORD_RESET: undefined }, { EMAIL: undefined }]) {
    const { env, sent } = makeEnv(overrides);
    const u = await signup(env);
    const known = await forgot(env, u.email);
    const unknown = await forgot(env, 'nobody@example.com');
    assert.equal(known.status, 503);
    assert.equal(known.json.error, 'reset_unavailable');
    assert.equal(known.text, unknown.text, 'off-state does not differ by address');
    assert.equal(sent.length, 0);
    assert.equal(env.DB.raw.prepare('SELECT COUNT(*) n FROM password_reset_tokens').get().n, 0);
  }
});

test('rate limits: 5 requests per network per 15 min, 3 emails per address per hour, daily global cap', async () => {
  const { env, sent } = makeEnv();
  const u = await signup(env);
  const ip = '203.0.113.9';
  for (let i = 0; i < 5; i++) assert.equal((await forgot(env, `n${i}@example.com`, { ip })).status, 200);
  const blocked = await forgot(env, u.email, { ip });
  assert.equal(blocked.status, 429);
  assert.equal(sent.length, 0, 'a blocked request sends nothing');

  for (let i = 0; i < 5; i++) assert.equal((await forgot(env, u.email)).json.message, NEUTRAL_MESSAGE);
  assert.equal(sent.length, 3, 'per-address cap: further requests answer the same but send nothing');

  const capped = makeEnv({ PASSWORD_RESET_DAILY_EMAILS: '1' });
  const a = await signup(capped.env), b = await signup(capped.env);
  assert.equal((await forgot(capped.env, a.email)).status, 200);
  assert.equal((await forgot(capped.env, b.email)).status, 200);
  assert.equal(capped.sent.length, 1, 'global daily cap holds');
});

test('token guessing is throttled per network', async () => {
  const { env } = makeEnv();
  const ip = '203.0.113.77';
  const fake = 'A'.repeat(43);
  for (let i = 0; i < 20; i++) assert.equal((await req(env, 'POST', '/auth/password/reset/check', { body: { token: fake }, ip })).status, 400);
  assert.equal((await req(env, 'POST', '/auth/password/reset/check', { body: { token: fake }, ip })).status, 429);
  assert.equal((await req(env, 'POST', '/auth/password/reset', { body: { token: fake, password: 'long-enough-1' }, ip })).status, 429);
});

test('mail failure: the reply is still neutral, the error code is logged without the address or token', async () => {
  const { env, mail } = makeEnv();
  const u = await signup(env);
  mail.fail = 'E_SENDER_NOT_VERIFIED';
  const logs = [];
  const orig = console.log;
  console.log = (...a) => logs.push(a.join(' '));
  try {
    const r = await forgot(env, u.email);
    assert.deepEqual(r.json, { ok: true, message: NEUTRAL_MESSAGE });
  } finally { console.log = orig; }
  const all = logs.join('\n');
  assert.match(all, /E_SENDER_NOT_VERIFIED/);
  assert.ok(!all.includes(u.email), 'address not logged');
  const hash = env.DB.raw.prepare('SELECT token_hash FROM password_reset_tokens').get().token_hash;
  assert.ok(!all.includes(hash));
});

test('nothing logged on the success path either', async () => {
  const { env, sent } = makeEnv();
  const u = await signup(env);
  const logs = [];
  const orig = console.log;
  console.log = (...a) => logs.push(a.join(' '));
  try {
    await forgot(env, u.email);
    await req(env, 'POST', '/auth/password/reset', { body: { token: tokenFrom(sent[0]), password: 'fresh-pass-77' } });
  } finally { console.log = orig; }
  assert.deepEqual(logs, []);
});

test('purchases, entitlements, saved progress and Google link survive a reset', async () => {
  const { env, sent } = makeEnv();
  const u = await signup(env);
  const now = Math.floor(Date.now() / 1000);
  env.DB.raw.prepare('INSERT INTO user_entitlements (user_id, product_id, source_order_id, granted_at) VALUES (?, ?, ?, ?)').run(u.id, 'A2', 'ord_x', now);
  env.DB.raw.prepare('INSERT INTO user_entitlements (user_id, product_id, source_order_id, granted_at) VALUES (?, ?, ?, ?)').run(u.id, 'LIFETIME', 'ord_y', now);
  const before = env.DB.raw.prepare('SELECT * FROM user_entitlements WHERE user_id = ? ORDER BY product_id').all(u.id);
  const userBefore = env.DB.raw.prepare('SELECT id, email, name, phone, google_sub, created_at FROM users WHERE id = ?').get(u.id);

  await forgot(env, u.email);
  await req(env, 'POST', '/auth/password/reset', { body: { token: tokenFrom(sent[0]), password: 'fresh-pass-77' } });

  assert.deepEqual(env.DB.raw.prepare('SELECT * FROM user_entitlements WHERE user_id = ? ORDER BY product_id').all(u.id), before);
  assert.deepEqual(env.DB.raw.prepare('SELECT id, email, name, phone, google_sub, created_at FROM users WHERE id = ?').get(u.id), userBefore);
  const cookie = cookieOf(await login(env, u.email, 'fresh-pass-77'));
  const me = await req(env, 'GET', '/auth/me', { cookie });
  assert.equal(me.json.user.id, u.id);
  assert.equal(me.json.entitlements.LIFETIME, true);
});

test('CSRF: reset endpoints refuse a foreign origin', async () => {
  const { env, sent } = makeEnv();
  const u = await signup(env);
  for (const p of ['/auth/password/forgot', '/auth/password/reset/check', '/auth/password/reset']) {
    const r = await req(env, 'POST', p, { body: { email: u.email, token: 'A'.repeat(43), password: 'x'.repeat(10) }, origin: 'https://evil.example' });
    assert.equal(r.status, 403, p);
  }
  assert.equal(sent.length, 0);
});

test('reset link is always on the https site origin, never request input', () => {
  const t = 'T'.repeat(43);
  assert.equal(resetLink({ SITE_BASE_URL: 'https://klarweg.in' }, t), 'https://klarweg.in/account/reset-password#token=' + t);
  assert.equal(resetLink({ SITE_BASE_URL: 'https://klarweg.in/some/path?x=1' }, t), 'https://klarweg.in/account/reset-password#token=' + t);
  assert.equal(resetLink({ SITE_BASE_URL: 'http://evil.example' }, t), 'https://klarweg.in/account/reset-password#token=' + t);
  assert.equal(resetLink({ SITE_BASE_URL: 'javascript:alert(1)' }, t), 'https://klarweg.in/account/reset-password#token=' + t);
  assert.equal(resetLink({}, t), 'https://klarweg.in/account/reset-password#token=' + t);
});

test('regression: signup, login, logout and Google sign-in behave as before', async () => {
  const { env } = makeEnv();
  const u = await signup(env);
  assert.equal((await req(env, 'GET', '/auth/me', { cookie: u.cookie })).status, 200);
  assert.equal((await login(env, u.email, 'wrong-password')).status, 401);
  const l = await login(env, u.email, PASSWORD);
  assert.equal(l.status, 200);
  await req(env, 'POST', '/auth/logout', { cookie: cookieOf(l) });
  assert.equal((await req(env, 'GET', '/auth/me', { cookie: cookieOf(l) })).status, 401);
  assert.equal((await req(env, 'POST', '/auth/signup', { body: { email: u.email, password: PASSWORD, name: 'x' } })).status, 409);
  const clash = await req(env, 'POST', '/auth/google', { body: { credential: await googleIdToken({ sub: 'g-9', email: u.email }) } });
  assert.equal(clash.status, 409, 'password account still not taken over by Google');
});
