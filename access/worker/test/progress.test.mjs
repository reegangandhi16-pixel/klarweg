/* klarweg-access — account-backed chapter progress (src/progress.js).
   Drives the real Worker fetch handler against the in-memory D1 (real
   schema + every migration, including migration-016-chapter-progress.sql). */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { createD1 } from './d1-sqlite.mjs';
import { sanitizeRecord, validChapterId, PROGRESS_LIMITS } from '../src/progress.js';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://reegangandhi16-pixel.github.io';
const API = 'https://klarweg-access.example.workers.dev';
const ctx = { waitUntil() {} };

function makeEnv() {
  return { DB: createD1(WORKER_DIR), CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1234567890', CASHFREE_SECRET_KEY: 'cfsk_test', RATE_SALT: 'test-salt' };
}
async function req(env, method, pathname, { cookie, origin = SITE, body } = {}) {
  const h = { 'CF-Connecting-IP': '203.0.113.' + Math.floor(Math.random() * 200) };
  if (cookie) h.cookie = cookie;
  if (origin) h.origin = origin;
  if (body !== undefined) h['content-type'] = 'application/json';
  const res = await worker.fetch(new Request(API + pathname, { method, headers: h, body: body === undefined ? undefined : (typeof body === 'string' ? body : JSON.stringify(body)) }), env, ctx);
  let json = null; try { json = await res.json(); } catch {}
  return { status: res.status, json, headers: res.headers };
}
async function signupUser(env) {
  const email = `u${Math.random().toString(36).slice(2)}@example.com`;
  const res = await worker.fetch(new Request(API + '/auth/signup', {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: SITE, 'CF-Connecting-IP': '198.51.100.' + Math.floor(Math.random() * 200) },
    body: JSON.stringify({ email, password: 'correct-horse-9', name: 'Test' }),
  }), env, ctx);
  const body = await res.json();
  assert.equal(res.status, 201, JSON.stringify(body));
  return { cookie: res.headers.get('set-cookie').split(';')[0], id: body.user.id };
}
const REC = { done: { story: true, vocabulary: true }, learned: { Tisch: true }, quizScore: 4, vocabVoice: 'male', xpEarned: 74, xpMax: 160 };

test('chapter ids: real ids accepted, anything else refused', () => {
  for (const id of ['a1-1', 'a1-10-artikel', 'b2-01-erweiterte-satzklammer', 'c2-29-goethe-c2-final', 'c1-15-konjunktiv-i-und-indirekte-rede']) assert.ok(validChapterId(id), id);
  for (const id of ['', 'x1-1', 'a1', 'a1-1/../x', 'A1-1', 'a1-1-' , 'a1-1-Artikel', 'a3-1', 'a1-1-a-b-c-d-e-f-g-h-i-j-k-l-m-n']) assert.ok(!validChapterId(id), id);
});

test('records are rebuilt from an allow-list', () => {
  const r = sanitizeRecord({ ...REC, done: { story: true, quiz: true, evil: 'yes', 'Bad Key': true }, learned: { Tisch: true, Stuhl: false }, quizScore: 4.5, extra: 'x', saved: { a: true }, xpEarned: 500, xpMax: 160, resetAt: 1793520000000 });
  assert.deepEqual(r, { done: { story: true, quiz: true }, learned: { Tisch: true }, quizScore: null, vocabVoice: 'male', resetAt: 1793520000000 });
  assert.equal(sanitizeRecord(null), null);
  assert.equal(sanitizeRecord([1]), null);
});

test('signed out: 401 for read and write', async () => {
  const env = makeEnv();
  assert.equal((await req(env, 'GET', '/progress')).status, 401);
  assert.equal((await req(env, 'POST', '/progress/a1-1', { body: { record: REC } })).status, 401);
});

test('first write, read back, conditional update, conflict', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  let r = await req(env, 'GET', '/progress', { cookie: u.cookie });
  assert.equal(r.status, 200); assert.deepEqual(r.json.chapters, {});
  assert.equal(r.headers.get('cache-control'), 'no-store');

  r = await req(env, 'POST', '/progress/a1-10-artikel', { cookie: u.cookie, body: { record: REC, baseUpdatedAt: null } });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  const t1 = r.json.updatedAt; assert.ok(Number.isInteger(t1));

  r = await req(env, 'GET', '/progress', { cookie: u.cookie });
  assert.deepEqual(r.json.chapters['a1-10-artikel'], { record: REC, updatedAt: t1 });

  // stale base → 409 with the stored record
  r = await req(env, 'POST', '/progress/a1-10-artikel', { cookie: u.cookie, body: { record: { done: {} }, baseUpdatedAt: t1 - 5 } });
  assert.equal(r.status, 409); assert.equal(r.json.error, 'conflict'); assert.deepEqual(r.json.record, REC); assert.equal(r.json.updatedAt, t1);
  // missing base on an existing row → 409
  r = await req(env, 'POST', '/progress/a1-10-artikel', { cookie: u.cookie, body: { record: REC } });
  assert.equal(r.status, 409);

  // correct base → saved, updatedAt strictly increases
  const next = { ...REC, done: { ...REC.done, grammar: true } };
  r = await req(env, 'POST', '/progress/a1-10-artikel', { cookie: u.cookie, body: { record: next, baseUpdatedAt: t1 } });
  assert.equal(r.status, 200); assert.ok(r.json.updatedAt > t1);
  r = await req(env, 'GET', '/progress', { cookie: u.cookie });
  assert.deepEqual(r.json.chapters['a1-10-artikel'].record.done, { story: true, vocabulary: true, grammar: true });
});

test('rows are private to their account', async () => {
  const env = makeEnv();
  const a = await signupUser(env), b = await signupUser(env);
  await req(env, 'POST', '/progress/a1-1', { cookie: a.cookie, body: { record: REC } });
  const r = await req(env, 'GET', '/progress', { cookie: b.cookie });
  assert.deepEqual(r.json.chapters, {});
  // b writing the same chapter id creates b's own row; a's is untouched
  assert.equal((await req(env, 'POST', '/progress/a1-1', { cookie: b.cookie, body: { record: { done: {} } } })).status, 200);
  const ra = await req(env, 'GET', '/progress', { cookie: a.cookie });
  assert.deepEqual(ra.json.chapters['a1-1'].record, REC);
});

test('invalid input: bad chapter id, bad record, oversized body, foreign origin', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  assert.equal((await req(env, 'POST', '/progress/A1-1', { cookie: u.cookie, body: { record: REC } })).status, 404); // route regex is lowercase-only
  assert.equal((await req(env, 'POST', '/progress/x9-1', { cookie: u.cookie, body: { record: REC } })).status, 400);
  assert.equal((await req(env, 'POST', '/progress/a1-1', { cookie: u.cookie, body: { record: 'x' } })).status, 400);
  assert.equal((await req(env, 'POST', '/progress/a1-1', { cookie: u.cookie, body: '{not json' })).status, 400);
  const big = { record: { done: {}, learned: Object.fromEntries(Array.from({ length: 2000 }, (_, i) => ['w' + i + 'x'.repeat(20), true])) } };
  assert.equal((await req(env, 'POST', '/progress/a1-1', { cookie: u.cookie, body: big })).status, 413);
  const foreign = await req(env, 'POST', '/progress/a1-1', { cookie: u.cookie, origin: 'https://evil.example', body: { record: REC } });
  assert.equal(foreign.status, 403);
});

test('write budget per user', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  let last = null, t = null;
  for (let i = 0; i < PROGRESS_LIMITS.writesPerWindow; i++) {
    const r = await req(env, 'POST', '/progress/a1-1', { cookie: u.cookie, body: { record: REC, baseUpdatedAt: t } });
    assert.equal(r.status, 200, 'write ' + i); t = r.json.updatedAt;
  }
  last = await req(env, 'POST', '/progress/a1-1', { cookie: u.cookie, body: { record: REC, baseUpdatedAt: t } });
  assert.equal(last.status, 429);
});
