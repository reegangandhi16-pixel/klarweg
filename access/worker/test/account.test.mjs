/* klarweg-access — the learner's own account (src/account.js).
   Drives the real Worker fetch handler against the in-memory D1 (real
   schema + every migration, including migration-018-account-profile.sql). */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { createD1 } from './d1-sqlite.mjs';
import { cleanName, cleanLevel, parseAvatar, ACCOUNT_LIMITS } from '../src/account.js';
import { createSessionToken } from '../src/auth.js';
import { hashSessionToken } from '../src/sessions.js';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://reegangandhi16-pixel.github.io';
const API = 'https://klarweg-access.example.workers.dev';
const ctx = { waitUntil() {} };
const PNG_1PX = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

function makeEnv(extra = {}) {
  return { DB: createD1(WORKER_DIR), CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1234567890', CASHFREE_SECRET_KEY: 'cfsk_test', RATE_SALT: 'test-salt', ...extra };
}
async function req(env, method, pathname, { cookie, origin = SITE, body, ip } = {}) {
  const h = { 'CF-Connecting-IP': ip || '203.0.113.' + Math.floor(Math.random() * 200) };
  if (cookie) h.cookie = cookie;
  if (origin) h.origin = origin;
  if (body !== undefined) h['content-type'] = 'application/json';
  const res = await worker.fetch(new Request(API + pathname, { method, headers: h, body: body === undefined ? undefined : (typeof body === 'string' ? body : JSON.stringify(body)) }), env, ctx);
  let json = null; try { json = await res.json(); } catch {}
  return { status: res.status, json, headers: res.headers };
}
async function signupUser(env, password = 'correct-horse-9') {
  const email = `u${Math.random().toString(36).slice(2)}@example.com`;
  const res = await req(env, 'POST', '/auth/signup', { body: { email, password, name: 'Asha Rao' } });
  assert.equal(res.status, 201, JSON.stringify(res.json));
  return { cookie: res.headers.get('set-cookie').split(';')[0], id: res.json.user.id, email, password };
}
async function login(env, email, password) {
  const res = await req(env, 'POST', '/auth/login', { body: { email, password } });
  return { status: res.status, cookie: res.status === 200 ? res.headers.get('set-cookie').split(';')[0] : null };
}
/* Google-only account with a session created `ageSeconds` ago. */
async function googleUser(env, ageSeconds = 0) {
  const id = 'usr_g' + Math.random().toString(36).slice(2);
  const now = Math.floor(Date.now() / 1000);
  await env.DB.prepare('INSERT INTO users (id, email, name, google_sub, created_at, updated_at) VALUES (?1, ?2, ?3, ?4, ?5, ?5)')
    .bind(id, id + '@gmail.com', 'G User', 'sub-' + id, now).run();
  const token = createSessionToken();
  await env.DB.prepare('INSERT INTO sessions (token_hash, user_id, created_at, expires_at) VALUES (?1, ?2, ?3, ?4)')
    .bind(await hashSessionToken(token), id, now - ageSeconds, now + 86400).run();
  return { id, email: id + '@gmail.com', cookie: 'kw_session=' + token };
}

test('name validation', () => {
  assert.deepEqual(cleanName('  Asha   Rao '), { name: 'Asha Rao' });
  assert.deepEqual(cleanName('राहुल शर्मा'), { name: 'राहुल शर्मा' });
  assert.ok(cleanName('A').error);
  assert.ok(cleanName('x'.repeat(81)).error);
  assert.ok(cleanName('Asha‮oaR').error, 'bidi override refused');
  assert.ok(cleanName('Asha​').error, 'zero-width refused');
  assert.ok(cleanName('Asha\nRao').error, 'control char refused');
  assert.ok(cleanName(42).error);
});

test('level validation: A1–B2 or null only', () => {
  for (const l of ['A1', 'a2', ' B1 ', 'B2']) assert.equal(cleanLevel(l).level, l.trim().toUpperCase());
  assert.deepEqual(cleanLevel(null), { level: null });
  for (const l of ['C1', 'C2', 'A3', 7, 'LIFETIME']) assert.ok(cleanLevel(l).error, String(l));
});

test('avatar validation: type from magic bytes, size cap, no SVG', () => {
  assert.equal(parseAvatar('data:image/png;base64,' + PNG_1PX).mime, 'image/png');
  // labelled JPEG but PNG bytes → stored as PNG (bytes win)
  assert.equal(parseAvatar('data:image/jpeg;base64,' + PNG_1PX).mime, 'image/png');
  assert.ok(parseAvatar('data:image/svg+xml;base64,' + Buffer.from('<svg onload=alert(1)>').toString('base64')).error);
  assert.ok(parseAvatar('data:image/png;base64,' + Buffer.from('<html><script>x</script></html>').toString('base64')).error);
  const big = Buffer.alloc(ACCOUNT_LIMITS.avatarBytes + 1); big[0] = 0xff; big[1] = 0xd8; big[2] = 0xff;
  assert.match(parseAvatar('data:image/jpeg;base64,' + big.toString('base64')).error, /too large/);
  assert.ok(parseAvatar('https://evil.example/a.png').error);
});

test('signed out: every account route answers 401', async () => {
  const env = makeEnv();
  for (const [m, p] of [['GET', '/account'], ['POST', '/account/profile'], ['POST', '/account/avatar'], ['DELETE', '/account/avatar'], ['POST', '/account/password']]) {
    assert.equal((await req(env, m, p, { body: m === 'GET' || m === 'DELETE' ? undefined : {} })).status, 401, m + ' ' + p);
  }
});

test('cross-site writes are refused before reaching the handler', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  const r = await req(env, 'POST', '/account/profile', { cookie: u.cookie, origin: 'https://evil.example', body: { name: 'Hacked' } });
  assert.equal(r.status, 403);
  assert.equal((await req(env, 'GET', '/account', { cookie: u.cookie })).json.profile.name, 'Asha Rao');
});

test('overview: real profile, sign-in methods, empty access, features', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  const r = await req(env, 'GET', '/account', { cookie: u.cookie });
  assert.equal(r.status, 200);
  assert.equal(r.headers.get('cache-control'), 'no-store');
  assert.equal(r.json.profile.name, 'Asha Rao');
  assert.equal(r.json.profile.email, u.email);
  assert.equal(r.json.profile.preferredLevel, null);
  assert.equal(r.json.profile.avatar, null);
  assert.deepEqual(r.json.signIn, { password: true, google: false, emailVerified: null });
  assert.deepEqual(r.json.access, []);
  assert.deepEqual(r.json.purchases, []);
  assert.deepEqual(r.json.features, { changePassword: true, passwordReset: false, deletion: false });
  assert.ok(!JSON.stringify(r.json).includes('password_hash'));
  assert.ok(!JSON.stringify(r.json).match(/salt|token|sub-/));
});

test('overview: access with expiry and paid purchases only', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  const now = Math.floor(Date.now() / 1000);
  await env.DB.prepare("INSERT INTO user_entitlements (user_id, product_id, granted_at, expires_at) VALUES (?1,'A1',?2,?3),(?1,'A2',?2,?4)")
    .bind(u.id, now - 100, now + 1000, now - 10).run();
  await env.DB.prepare("INSERT INTO orders (id, user_id, cashfree_order_id, amount_paise, status, product_id, created_at, updated_at) VALUES ('o1',?1,'cf1',99900,'paid','A1',?2,?2),('o2',?1,'cf2',99900,'created','B1',?2,?2)")
    .bind(u.id, now).run();
  const r = (await req(env, 'GET', '/account', { cookie: u.cookie })).json;
  const byP = Object.fromEntries(r.access.map((a) => [a.product, a]));
  assert.equal(byP.A1.active, true);
  assert.equal(byP.A1.expiresAt, now + 1000);
  assert.equal(byP.A2.active, false, 'expired access is reported as inactive');
  assert.deepEqual(r.purchases.map((p) => [p.product, p.amountPaise, p.currency]), [['A1', 99900, 'INR']]);
});

test('profile: update name and level, persists, scoped to the session user', async () => {
  const env = makeEnv();
  const a = await signupUser(env);
  const b = await signupUser(env);
  let r = await req(env, 'POST', '/account/profile', { cookie: a.cookie, body: { name: '  Asha   Verma ', preferredLevel: 'b1', id: b.id, userId: b.id } });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.deepEqual(r.json.profile, { name: 'Asha Verma', email: a.email, preferredLevel: 'B1' });
  // persisted for a new session (e.g. another device)
  const again = await login(env, a.email, a.password);
  assert.equal((await req(env, 'GET', '/account', { cookie: again.cookie })).json.profile.preferredLevel, 'B1');
  assert.equal((await req(env, 'GET', '/auth/me', { cookie: again.cookie })).json.user.name, 'Asha Verma');
  // the other account is untouched
  assert.equal((await req(env, 'GET', '/account', { cookie: b.cookie })).json.profile.name, 'Asha Rao');
  // clear the level
  r = await req(env, 'POST', '/account/profile', { cookie: a.cookie, body: { preferredLevel: null } });
  assert.equal(r.json.profile.preferredLevel, null);
  assert.equal(r.json.profile.name, 'Asha Verma');
});

test('profile: invalid input is refused with a field and nothing changes', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  for (const body of [{ name: 'A' }, { name: 'x'.repeat(81) }, { preferredLevel: 'C1' }, {}, []]) {
    const r = await req(env, 'POST', '/account/profile', { cookie: u.cookie, body });
    assert.equal(r.status, 400, JSON.stringify(body));
  }
  assert.equal((await req(env, 'POST', '/account/profile', { cookie: u.cookie, body: '{bad json' })).status, 400);
  const r = await req(env, 'POST', '/account/profile', { cookie: u.cookie, body: { name: 'Valid Name', preferredLevel: 'Z9' } });
  assert.equal(r.json.field, 'preferredLevel');
  assert.equal((await req(env, 'GET', '/account', { cookie: u.cookie })).json.profile.name, 'Asha Rao', 'no partial write');
});

test('avatar: set, read back, replace, remove; bad files refused', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  let r = await req(env, 'POST', '/account/avatar', { cookie: u.cookie, body: { image: 'data:image/png;base64,' + PNG_1PX } });
  assert.equal(r.status, 200);
  assert.equal((await req(env, 'GET', '/account', { cookie: u.cookie })).json.profile.avatar, 'data:image/png;base64,' + PNG_1PX);
  r = await req(env, 'POST', '/account/avatar', { cookie: u.cookie, body: { image: 'data:image/svg+xml;base64,PHN2Zz4=' } });
  assert.equal(r.status, 400);
  r = await req(env, 'POST', '/account/avatar', { cookie: u.cookie, body: JSON.stringify({ image: 'data:image/jpeg;base64,' + 'A'.repeat(200 * 1024) }) });
  assert.equal(r.status, 413);
  assert.ok((await req(env, 'GET', '/account', { cookie: u.cookie })).json.profile.avatar, 'failed uploads keep the old photo');
  r = await req(env, 'DELETE', '/account/avatar', { cookie: u.cookie });
  assert.equal(r.status, 200);
  assert.equal((await req(env, 'GET', '/account', { cookie: u.cookie })).json.profile.avatar, null);
});

test('password change: needs the current password, signs out other devices only', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  const other = await login(env, u.email, u.password);
  let r = await req(env, 'POST', '/account/password', { cookie: u.cookie, body: { currentPassword: 'wrong-one-1', newPassword: 'new-password-2' } });
  assert.equal(r.status, 400); assert.equal(r.json.field, 'currentPassword');
  r = await req(env, 'POST', '/account/password', { cookie: u.cookie, body: { currentPassword: u.password, newPassword: 'short' } });
  assert.equal(r.status, 400); assert.equal(r.json.field, 'newPassword');
  r = await req(env, 'POST', '/account/password', { cookie: u.cookie, body: { currentPassword: u.password, newPassword: u.password } });
  assert.equal(r.json.error, 'same_password');
  r = await req(env, 'POST', '/account/password', { cookie: u.cookie, body: { currentPassword: u.password, newPassword: 'new-password-2' } });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.equal((await req(env, 'GET', '/auth/me', { cookie: u.cookie })).status, 200, 'this device stays signed in');
  assert.equal((await req(env, 'GET', '/auth/me', { cookie: other.cookie })).status, 401, 'other device signed out');
  assert.equal((await login(env, u.email, u.password)).status, 401, 'old password no longer works');
  assert.equal((await login(env, u.email, 'new-password-2')).status, 200);
});

test('password change: per-account limit after 5 wrong attempts', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  for (let i = 0; i < 5; i++) {
    assert.equal((await req(env, 'POST', '/account/password', { cookie: u.cookie, body: { currentPassword: 'nope-nope-' + i, newPassword: 'new-password-2' } })).status, 400);
  }
  const r = await req(env, 'POST', '/account/password', { cookie: u.cookie, body: { currentPassword: u.password, newPassword: 'new-password-2' } });
  assert.equal(r.status, 429, 'blocked even with the right password');
});

test('password change: Google-only account has no password', async () => {
  const env = makeEnv();
  const g = await googleUser(env);
  const o = (await req(env, 'GET', '/account', { cookie: g.cookie })).json;
  assert.deepEqual(o.signIn, { password: false, google: true, emailVerified: true });
  assert.equal(o.features.changePassword, false);
  const r = await req(env, 'POST', '/account/password', { cookie: g.cookie, body: { currentPassword: '', newPassword: 'new-password-2' } });
  assert.equal(r.json.error, 'no_password');
});

test('deletion: off by default', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  const r = await req(env, 'POST', '/account/delete', { cookie: u.cookie, body: { confirmEmail: u.email, password: u.password } });
  assert.equal(r.status, 503);
  assert.equal((await req(env, 'GET', '/auth/me', { cookie: u.cookie })).status, 200);
});

test('deletion: needs typed email + password; removes the account and its data', async () => {
  const env = makeEnv({ ACCOUNT_DELETION: 'on' });
  const u = await signupUser(env);
  const keep = await signupUser(env);
  await req(env, 'POST', '/progress/a1-1', { cookie: u.cookie, body: { record: { done: { story: true } } } });
  await req(env, 'POST', '/account/avatar', { cookie: u.cookie, body: { image: 'data:image/png;base64,' + PNG_1PX } });
  assert.equal((await req(env, 'POST', '/account/delete', { cookie: u.cookie, body: { confirmEmail: 'other@example.com', password: u.password } })).json.field, 'confirmEmail');
  assert.equal((await req(env, 'POST', '/account/delete', { cookie: u.cookie, body: { confirmEmail: u.email, password: 'wrong-pass-1' } })).json.field, 'currentPassword');
  const r = await req(env, 'POST', '/account/delete', { cookie: u.cookie, body: { confirmEmail: u.email.toUpperCase(), password: u.password } });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.match(r.headers.get('set-cookie'), /kw_session=;/);
  for (const t of ['users WHERE id', 'sessions WHERE user_id', 'chapter_progress WHERE user_id', 'user_avatars WHERE user_id']) {
    assert.equal((await env.DB.prepare(`SELECT COUNT(*) AS n FROM ${t} = ?1`).bind(u.id).first()).n, 0, t);
  }
  assert.equal((await login(env, u.email, u.password)).status, 401);
  assert.equal((await req(env, 'GET', '/auth/me', { cookie: keep.cookie })).status, 200, 'other accounts untouched');
});

test('deletion: refused while purchases or access exist', async () => {
  const env = makeEnv({ ACCOUNT_DELETION: 'on' });
  const u = await signupUser(env);
  await env.DB.prepare("INSERT INTO user_entitlements (user_id, product_id, granted_at) VALUES (?1, 'A1', 1)").bind(u.id).run();
  const r = await req(env, 'POST', '/account/delete', { cookie: u.cookie, body: { confirmEmail: u.email, password: u.password } });
  assert.equal(r.status, 409);
  assert.equal(r.json.error, 'has_records');
  assert.equal((await env.DB.prepare('SELECT COUNT(*) AS n FROM users WHERE id = ?1').bind(u.id).first()).n, 1);
});

test('deletion: Google-only accounts need a sign-in within 10 minutes', async () => {
  const env = makeEnv({ ACCOUNT_DELETION: 'on' });
  const stale = await googleUser(env, 3600);
  let r = await req(env, 'POST', '/account/delete', { cookie: stale.cookie, body: { confirmEmail: stale.email } });
  assert.equal(r.status, 403); assert.equal(r.json.error, 'reauth_required');
  const fresh = await googleUser(env, 60);
  r = await req(env, 'POST', '/account/delete', { cookie: fresh.cookie, body: { confirmEmail: fresh.email } });
  assert.equal(r.status, 200, JSON.stringify(r.json));
});

test('profile + photo saves share a per-account budget (30 / 15 min)', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  for (let i = 0; i < ACCOUNT_LIMITS.profileWrites; i++) {
    assert.equal((await req(env, 'POST', '/account/profile', { cookie: u.cookie, body: { name: 'Name ' + i } })).status, 200, 'save ' + i);
  }
  const r = await req(env, 'POST', '/account/avatar', { cookie: u.cookie, body: { image: 'data:image/png;base64,' + PNG_1PX } });
  assert.equal(r.status, 429);
  assert.equal((await req(env, 'GET', '/account', { cookie: u.cookie })).json.profile.avatar, null);
});
