/* klarweg-access — second factor for exam raters/admins (OD-19, owner decisions D1–D8). Drives the real Access fetch
   handler with the real klarweg-exam Worker behind the /exam proxy (in-process, in-memory D1s). No network, no real
   secrets: TOTP_ENC_KEY is a random test key. */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import examWorker from '../../../exam-worker/src/index.js';
import { createD1 } from './d1-sqlite.mjs';
import { makeEnv as makeExamEnv, grant, role, PROXY_SECRET } from '../../../exam-worker/test/harness.mjs';
import { hotp, base32Decode, base32Encode, stepAt, verifyTotp, encryptSecret, decryptSecret, hashRecoveryCode } from '../src/totp.js';
import { MFA_FRESH_SECONDS } from '../src/mfa-routes.js';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://reegangandhi16-pixel.github.io';
const API = 'https://klarweg-access.example.workers.dev';
const ctx = { waitUntil() {} };
const TEST_KEY = Buffer.from(crypto.getRandomValues(new Uint8Array(32))).toString('base64');

function makeEnv(overrides = {}) {
  const exam = makeExamEnv();
  exam.env.__clock = () => Date.now();   // real time on both sides (TOTP uses the wall clock)
  const seen = [];
  const EXAM = { async fetch(r) { seen.push({ url: r.url, mfa: r.headers.get('x-kw-mfa-at') }); return examWorker.fetch(r, exam.env); } };
  return { env: { DB: createD1(WORKER_DIR), RATE_SALT: 'test-salt', EXAM_ROUTES: 'on', EXAM, EXAM_PROXY_SECRET: PROXY_SECRET, TOTP_ENC_KEY: TEST_KEY, ...overrides }, exam, seen };
}
let ipN = 0;
async function req(env, method, pathname, { cookie, origin = SITE, body, headers = {}, ip } = {}) {
  const h = { 'CF-Connecting-IP': ip || `198.51.100.${(ipN++ % 200) + 1}`, ...headers };
  if (cookie) h.cookie = cookie;
  if (origin) h.origin = origin;
  if (body !== undefined) h['content-type'] = 'application/json';
  const res = await worker.fetch(new Request(API + pathname, { method, headers: h, body: body === undefined ? undefined : JSON.stringify(body) }), env, ctx);
  const buf = Buffer.from(await res.arrayBuffer());
  let json = null; try { json = JSON.parse(buf.toString('utf8')); } catch {}
  return { status: res.status, json, headers: res.headers };
}
async function signup(env) {
  const r = await req(env, 'POST', '/auth/signup', { body: { email: `r${Math.random().toString(36).slice(2)}@example.com`, password: 'correct-horse-9', name: 'Rater' } });
  assert.equal(r.status, 201);
  return { cookie: r.headers.get('set-cookie').split(';')[0], id: r.json.user.id };
}
const code = async (secretB32, offset = 0) => hotp(base32Decode(secretB32), stepAt(Math.floor(Date.now() / 1000)) + offset);
const queue = (env, cookie) => req(env, 'GET', '/exam/v1/admin/rating-queue', { cookie });
async function enrol(env, cookie) {
  const s = await req(env, 'POST', '/auth/mfa/enroll', { cookie });
  assert.equal(s.status, 200, JSON.stringify(s.json));
  const c = await req(env, 'POST', '/auth/mfa/enroll/confirm', { cookie, body: { code: await code(s.json.secret) } });
  assert.equal(c.status, 200, JSON.stringify(c.json));
  return { secret: s.json.secret, codes: c.json.recovery_codes };
}

test('TOTP core: RFC 6238 SHA-1 reference values, base32 round trip, ±1 step, replay refused', async () => {
  const key = new TextEncoder().encode('12345678901234567890');
  for (const [t, want] of [[59, '94287082'], [1111111109, '07081804'], [1111111111, '14050471'], [1234567890, '89005924'], [2000000000, '69279037'], [20000000000, '65353130']]) {
    assert.equal(await hotp(key, Math.floor(t / 30), 8), want, `T=${t}`);
  }
  assert.deepEqual([...base32Decode(base32Encode(key))], [...key]);
  const t = 1_700_000_000, s = stepAt(t);
  assert.equal(await verifyTotp(key, await hotp(key, s - 1), t), s - 1, 'previous step accepted');
  assert.equal(await verifyTotp(key, await hotp(key, s + 1), t), s + 1, 'next step accepted');
  assert.equal(await verifyTotp(key, await hotp(key, s + 2), t), null, 'two steps away refused');
  assert.equal(await verifyTotp(key, await hotp(key, s), t, s), null, 'a step at or below the last used one is refused');
  assert.equal(await verifyTotp(key, '12345', t), null);
});

test('TOTP secrets: AES-GCM under TOTP_ENC_KEY, bound to the user id; recovery-code hashes are per user', async () => {
  const env = { TOTP_ENC_KEY: TEST_KEY };
  const secret = crypto.getRandomValues(new Uint8Array(20));
  const enc = await encryptSecret(env, 'usr_a', secret);
  assert.match(enc, /^v1:/); assert.equal(enc.includes(base32Encode(secret)), false);
  assert.deepEqual([...await decryptSecret(env, 'usr_a', enc)], [...secret]);
  await assert.rejects(decryptSecret(env, 'usr_b', enc), 'a ciphertext copied to another user does not decrypt');
  await assert.rejects(decryptSecret({ TOTP_ENC_KEY: Buffer.alloc(32, 7).toString('base64') }, 'usr_a', enc), 'wrong key');
  assert.notEqual(await hashRecoveryCode('usr_a', 'abcde-fghij'), await hashRecoveryCode('usr_b', 'abcde-fghij'));
  assert.equal(await hashRecoveryCode('usr_a', 'ABCDE FGHIJ'), await hashRecoveryCode('usr_a', 'abcde-fghij'), 'case and separators do not matter');
});

test('OD-19: a rater is refused on every staff route until enrolled; after enrolment and on a fresh session the queue opens; learners unaffected', async () => {
  const { env, exam, seen } = makeEnv();
  const rater = await signup(env), learner = await signup(env);
  await role(exam.env, rater.id, 'rater'); await grant(exam.env, learner.id);
  for (const p of ['/exam/v1/admin/rating-queue', `/exam/v1/admin/attempts/att_${crypto.randomUUID()}/productive`]) {
    const r = await req(env, 'GET', p, { cookie: rater.cookie });
    assert.equal(r.status, 401); assert.equal(r.json.error, 'mfa_required', p);
  }
  assert.equal((await req(env, 'POST', '/exam/v1/admin/ratings', { cookie: rater.cookie, body: {} })).json.error, 'mfa_required');
  // a learner (no staff role) is refused by the role check as before, never asked for a second factor
  assert.equal((await queue(env, learner.cookie)).status, 403);
  assert.equal((await req(env, 'GET', '/exam/v1/availability', { cookie: learner.cookie })).status, 200, 'learner routes unchanged');
  const st0 = await req(env, 'GET', '/auth/mfa/status', { cookie: rater.cookie });
  assert.deepEqual([st0.json.enrolled, st0.json.fresh], [false, false]);
  assert.equal(st0.headers.get('cache-control'), 'no-store');
  const { codes } = await enrol(env, rater.cookie);
  assert.equal(codes.length, 10); assert.equal(new Set(codes).size, 10);
  const q = await queue(env, rater.cookie);
  assert.equal(q.status, 200, JSON.stringify(q.json));
  assert.ok(Number(seen.at(-1).mfa) > 0, 'the proxy attested the verification time');
  const st = await req(env, 'GET', '/auth/mfa/status', { cookie: rater.cookie });
  assert.deepEqual([st.json.enrolled, st.json.fresh, st.json.recovery_codes_left], [true, true, 10]);
  // the database holds neither the secret nor the recovery codes in clear
  const row = await env.DB.prepare('SELECT secret_enc, pending_secret_enc FROM user_totp WHERE user_id = ?1').bind(rater.id).first();
  assert.match(row.secret_enc, /^v1:/); assert.equal(row.pending_secret_enc, null);
  const hashes = (await env.DB.prepare('SELECT code_hash FROM user_recovery_codes WHERE user_id = ?1').bind(rater.id).all()).results.map((r) => r.code_hash);
  assert.equal(hashes.some((h) => codes.some((c) => h.includes(c.replace('-', '')))), false);
  // lead raters and exam admins need it too
  const lead = await signup(env); await role(exam.env, lead.id, 'lead_rater');
  assert.equal((await queue(env, lead.cookie)).json.error, 'mfa_required');
});

test('OD-19 D2: a verification older than 12 hours is not fresh; a new session must verify again (code from the next step)', async () => {
  const { env, exam } = makeEnv();
  const r = await signup(env); await role(exam.env, r.id, 'rater');
  const { secret } = await enrol(env, r.cookie);
  const old = Math.floor(Date.now() / 1000) - MFA_FRESH_SECONDS - 5;
  await env.DB.prepare('UPDATE sessions SET mfa_verified_at = ?1 WHERE user_id = ?2').bind(old, r.id).run();
  assert.equal((await queue(env, r.cookie)).json.error, 'mfa_required');
  assert.equal((await req(env, 'GET', '/auth/mfa/status', { cookie: r.cookie })).json.fresh, false);
  // the code just used for enrolment cannot be replayed; the next step's code is accepted
  const replay = await req(env, 'POST', '/auth/mfa/verify', { cookie: r.cookie, body: { code: await code(secret) } });
  assert.equal(replay.status, 422); assert.equal(replay.json.error, 'mfa_invalid_code');
  const ok = await req(env, 'POST', '/auth/mfa/verify', { cookie: r.cookie, body: { code: await code(secret, 1) } });
  assert.equal(ok.status, 200, JSON.stringify(ok.json));
  assert.equal((await queue(env, r.cookie)).status, 200);
  // a second, unverified session of the same rater is not covered by the first one
  const login = await req(env, 'POST', '/auth/login', { body: { email: (await env.DB.prepare('SELECT email FROM users WHERE id = ?1').bind(r.id).first()).email, password: 'correct-horse-9' } });
  const other = login.headers.get('set-cookie').split(';')[0];
  assert.equal((await queue(env, other)).json.error, 'mfa_required');
});

test('OD-19: a browser cannot assert the second factor by sending X-KW-MFA-At itself', async () => {
  const { env, exam, seen } = makeEnv();
  const r = await signup(env); await role(exam.env, r.id, 'rater');
  const forged = await req(env, 'GET', '/exam/v1/admin/rating-queue', { cookie: r.cookie, headers: { 'x-kw-mfa-at': String(Math.floor(Date.now() / 1000)) } });
  assert.equal(forged.json.error, 'mfa_required');
  assert.equal(seen.at(-1).mfa, null, 'the forged header never reached the exam Worker');
});

test('OD-19 D3/D4: 5 wrong codes per 15 min per user; 10 consecutive failures lock for 30 minutes (audited); a correct code is refused while locked', async () => {
  const { env, exam } = makeEnv();
  const r = await signup(env); await role(exam.env, r.id, 'rater');
  const { secret } = await enrol(env, r.cookie);
  const wrong = async () => req(env, 'POST', '/auth/mfa/verify', { cookie: r.cookie, body: { code: (Number(await code(secret, 1)) + 1).toString().padStart(6, '0').slice(-6) } });
  for (let i = 0; i < 5; i++) assert.equal((await wrong()).json.error, 'mfa_invalid_code');
  const limited = await wrong();
  assert.equal(limited.status, 429); assert.equal(limited.json.error, 'mfa_rate_limited'); assert.ok(limited.json.retry_after > 0);
  // next window (simulated by clearing the counters): the consecutive count continues to 10 → lock
  await env.DB.prepare('DELETE FROM rate_counters').run();
  for (let i = 0; i < 4; i++) assert.equal((await wrong()).json.error, 'mfa_invalid_code');
  const locked = await wrong();
  assert.equal(locked.status, 429); assert.equal(locked.json.error, 'mfa_locked'); assert.equal(locked.json.retry_after, 1800);
  await env.DB.prepare('DELETE FROM rate_counters').run();
  const right = await req(env, 'POST', '/auth/mfa/verify', { cookie: r.cookie, body: { code: await code(secret, 1) } });
  assert.equal(right.json.error, 'mfa_locked', 'even a correct code waits for the lock');
  const events = (await env.DB.prepare('SELECT event FROM mfa_audit WHERE user_id = ?1').bind(r.id).all()).results.map((e) => e.event);
  assert.ok(events.includes('locked') && events.filter((e) => e === 'verify_failed').length === 10);
});

test('OD-19 D5: recovery codes are single use; a new set invalidates the old one; replacing the device needs a fresh second factor', async () => {
  const { env, exam } = makeEnv();
  const r = await signup(env); await role(exam.env, r.id, 'rater');
  const { codes } = await enrol(env, r.cookie);
  await env.DB.prepare('UPDATE sessions SET mfa_verified_at = NULL WHERE user_id = ?1').bind(r.id).run();
  assert.equal((await req(env, 'POST', '/auth/mfa/enroll', { cookie: r.cookie })).json.error, 'mfa_required', 'no silent device swap');
  assert.equal((await req(env, 'POST', '/auth/mfa/recovery-codes', { cookie: r.cookie })).json.error, 'mfa_required');
  const used = await req(env, 'POST', '/auth/mfa/verify', { cookie: r.cookie, body: { recovery_code: codes[0].toUpperCase().replace('-', ' ') } });
  assert.equal(used.status, 200); assert.equal(used.json.recovery_codes_left, 9);
  assert.equal((await queue(env, r.cookie)).status, 200);
  await env.DB.prepare('UPDATE sessions SET mfa_verified_at = NULL WHERE user_id = ?1').bind(r.id).run();
  assert.equal((await req(env, 'POST', '/auth/mfa/verify', { cookie: r.cookie, body: { recovery_code: codes[0] } })).json.error, 'mfa_invalid_code', 'single use');
  assert.equal((await req(env, 'POST', '/auth/mfa/verify', { cookie: r.cookie, body: { recovery_code: codes[1] } })).status, 200);
  const regen = await req(env, 'POST', '/auth/mfa/recovery-codes', { cookie: r.cookie });
  assert.equal(regen.status, 200); assert.equal(regen.json.recovery_codes.length, 10);
  await env.DB.prepare('UPDATE sessions SET mfa_verified_at = NULL WHERE user_id = ?1').bind(r.id).run();
  assert.equal((await req(env, 'POST', '/auth/mfa/verify', { cookie: r.cookie, body: { recovery_code: codes[2] } })).json.error, 'mfa_invalid_code', 'old set invalid');
  assert.equal((await req(env, 'POST', '/auth/mfa/verify', { cookie: r.cookie, body: { recovery_code: regen.json.recovery_codes[0] } })).status, 200);
  // with a fresh second factor the device can be replaced; the old secret stops working once the new one is confirmed
  const re = await req(env, 'POST', '/auth/mfa/enroll', { cookie: r.cookie });
  assert.equal(re.status, 200);
  const conf = await req(env, 'POST', '/auth/mfa/enroll/confirm', { cookie: r.cookie, body: { code: await code(re.json.secret) } });
  assert.equal(conf.status, 200);
  const ev = (await env.DB.prepare("SELECT detail FROM mfa_audit WHERE user_id = ?1 AND event = 'enrolled' ORDER BY id DESC").bind(r.id).first());
  assert.deepEqual(JSON.parse(ev.detail), { replaced: true });
});

test('OD-19: signed out → 401; no TOTP_ENC_KEY → mfa_unavailable (never a weaker fallback); cross-site writes refused', async () => {
  const { env } = makeEnv();
  assert.equal((await req(env, 'GET', '/auth/mfa/status')).status, 401);
  assert.equal((await req(env, 'POST', '/auth/mfa/verify', { body: { code: '000000' } })).status, 401);
  const r = await signup(env);
  assert.equal((await req(env, 'POST', '/auth/mfa/enroll', { cookie: r.cookie, origin: 'https://evil.example' })).status, 403, 'CSRF guard');
  const noKey = makeEnv({ TOTP_ENC_KEY: undefined });
  const u = await signup(noKey.env);
  const e = await req(noKey.env, 'POST', '/auth/mfa/enroll', { cookie: u.cookie });
  assert.equal(e.status, 503); assert.equal(e.json.error, 'mfa_unavailable');
  assert.equal((await req(noKey.env, 'POST', '/auth/mfa/verify', { cookie: u.cookie, body: { code: '000000' } })).json.error, 'mfa_unavailable');
});
