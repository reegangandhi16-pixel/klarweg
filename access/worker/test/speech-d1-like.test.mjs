/* klarweg-access — /speech/status under Cloudflare D1's LIKE/GLOB limit.
   Production bug (2026-10-03): chapterTaskUse() queried
   LIKE 'st:<day>:<chapterId>:%'; D1 refuses LIKE/GLOB patterns over 50
   bytes, so for 49 chapters (e.g. b1-18-relativsaetze-mit-praepositionen,
   54 bytes) /speech/status threw for every signed-in learner. The test D1
   (d1-sqlite.mjs) now enforces the same 50-byte limit. No network, no AI. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { SPEECH_TASKS } from '../src/speech-tasks.js';
import { createD1, D1_LIKE_PATTERN_MAX_BYTES } from './d1-sqlite.mjs';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://reegangandhi16-pixel.github.io';
const API = 'https://klarweg-access.example.workers.dev';
const B118 = 'b1-18-relativsaetze-mit-praepositionen';
const IDS = Object.keys(SPEECH_TASKS);
const LONGEST = IDS.reduce((a, b) => (b.length > a.length ? b : a));
const day = () => new Date().toISOString().slice(0, 10);

globalThis.fetch = async (u) => { throw new Error('Unexpected network call in test: ' + u); };
const logs = [];
const origLog = console.log;
console.log = (...a) => logs.push(a.join(' '));
test.after(() => { console.log = origLog; });

const makeEnv = (extra = {}) => ({ DB: createD1(WORKER_DIR), RATE_SALT: 's', CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1', CASHFREE_SECRET_KEY: 'x', GOOGLE_CLIENT_ID: 'g',
  SPEECH_MODE: 'entitled', SPEECH_SCOPE: 'all', SPEECH_CHAPTERS: '', TUTOR: { fetch: async () => { throw new Error('no AI in these tests'); } }, ...extra });
const ctx = { waitUntil() {} };
async function call(env, method, pathname, cookie) {
  const h = { origin: SITE, 'CF-Connecting-IP': '198.51.100.' + Math.floor(Math.random() * 200) };
  if (cookie) h.cookie = cookie;
  const res = await worker.fetch(new Request(API + pathname, { method, headers: h }), env, ctx);
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch {}
  return { status: res.status, json, headers: res.headers };
}
async function learner(env, product = 'LIFETIME') {
  const res = await worker.fetch(new Request(API + '/auth/signup', { method: 'POST', headers: { origin: SITE, 'content-type': 'application/json', 'CF-Connecting-IP': '198.51.100.3' },
    body: JSON.stringify({ email: `d${Math.random().toString(36).slice(2)}@example.com`, password: 'correct-horse-9', name: 'D' }) }), env, ctx);
  const j = await res.json();
  if (product) await env.DB.prepare('INSERT INTO user_entitlements (user_id, product_id, source_order_id, granted_at, expires_at) VALUES (?1, ?2, NULL, 1, NULL)').bind(j.user.id, product).run();
  return { id: j.user.id, cookie: res.headers.get('set-cookie').split(';')[0] };
}
const put = (env, userId, period, units) => env.DB.prepare('INSERT INTO ai_usage (user_id, period, units) VALUES (?1, ?2, ?3)').bind(userId, period, units).run();
const status = (env, cookie, ch) => call(env, 'GET', '/speech/status?chapter=' + ch, cookie);

test('the test D1 enforces production’s 50-byte LIKE/GLOB limit (the gap that hid the bug)', async () => {
  assert.equal(D1_LIKE_PATTERN_MAX_BYTES, 50);
  const db = createD1(WORKER_DIR);
  await db.prepare('INSERT INTO ai_usage (user_id, period, units) VALUES (?1, ?2, 1)').bind('u', 'st:x').run();
  const q = (pattern) => db.prepare('SELECT COUNT(*) AS n FROM ai_usage WHERE user_id = ?1 AND period LIKE ?2').bind('u', pattern).first();
  await assert.doesNotReject(q('s'.repeat(49) + '%'), '50 bytes: allowed');
  await assert.rejects(q('s'.repeat(50) + '%'), /LIKE or GLOB pattern too complex/, '51 bytes: D1’s error');
  await assert.rejects(q('st:2026-10-03:' + B118 + ':%'), /LIKE or GLOB pattern too complex/, 'the exact production pattern (54 bytes) fails here as it did on D1');
  await assert.rejects(db.prepare("SELECT 'x' GLOB ?1 AS m").bind('s'.repeat(51)).first(), /pattern too complex/, 'GLOB too');
});

test('static guard: no Worker SQL uses LIKE/GLOB with a bound (dynamic) pattern; every literal pattern is ≤ 50 bytes', () => {
  const dir = path.join(WORKER_DIR, 'src');
  const found = [];
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.js'))) {
    const src = fs.readFileSync(path.join(dir, f), 'utf8');
    // SQL operands only (comments use the words too): a bound parameter, or a quoted literal.
    for (const m of src.matchAll(/\b(LIKE|GLOB)\s+(\?\d*|'[^']*')/gi)) {
      const operand = m[2];
      found.push(f + ': ' + m[1] + ' ' + operand);
      assert.ok(!operand.startsWith('?'), `${f}: ${m[1]} ${operand} — LIKE/GLOB must use a short literal pattern, never a bound value (a chapter id can make it exceed D1's 50 bytes)`);
      assert.ok(!/["+`]|\$\{/.test(operand), `${f}: ${m[1]} ${operand} — no string building inside a LIKE/GLOB pattern`);
      assert.ok(Buffer.byteLength(operand.slice(1, -1)) <= D1_LIKE_PATTERN_MAX_BYTES, `${f}: ${operand} is over ${D1_LIKE_PATTERN_MAX_BYTES} bytes`);
    }
  }
  assert.ok(found.length > 0, 'the scan found the existing (short, literal) sweep patterns');
  const speech = fs.readFileSync(path.join(dir, 'speech.js'), 'utf8');
  const fn = speech.slice(speech.indexOf('async function chapterTaskUse'), speech.indexOf('// Atomic: the conditional upsert'));
  assert.doesNotMatch(fn, /\bLIKE\b|\bGLOB\b/, 'chapterTaskUse uses no pattern at all');
  assert.doesNotMatch(fn.slice(fn.indexOf('prepare(')), /bind\([^)]*chapterId/, 'the chapter id is never part of the query');
});

test('B1·18 (the production scenario): signed-in entitled learner with today’s real counters → 200, eligible, exact counts', async () => {
  const env = makeEnv();
  const u = await learner(env);
  const d = day();
  // the owner's rows as they were in production on 2026-10-03 (same shape, today's date)
  for (const [p, n] of [['sd:' + d, 5], ['sm:' + d.slice(0, 7), 8], [`st:${d}:a1-10-artikel:0`, 3], [`st:${d}:a1-10-artikel:1`, 1], [`st:${d}:${B118}:0`, 2], ['sx:' + d + 'T09:08', 2]]) await put(env, u.id, p, n);
  const r = await status(env, u.cookie, B118);
  assert.equal(r.status, 200);
  assert.equal(r.headers.get('access-control-allow-origin'), SITE);
  assert.equal(r.json.ok, true); assert.equal(r.json.enabled, true); assert.equal(r.json.signedIn, true); assert.equal(r.json.eligible, true);
  assert.deepEqual(r.json.tasks.used, [2, 0, 0, 0, 0, 0, 0]);
  assert.deepEqual(r.json.tasks.remaining, [1, 3, 3, 3, 3, 3, 3]);
  assert.equal(r.json.tasks.limit, 3);
  assert.match(r.json.tasks.resetsAt, /^\d{4}-\d\d-\d\dT00:00:00\.000Z$/);
  assert.deepEqual(r.json.remaining, { day: 55, month: 592 });
  const a = await status(env, u.cookie, 'a1-10-artikel');
  assert.equal(a.status, 200); assert.equal(a.json.eligible, true);
  assert.deepEqual(a.json.tasks.used, [3, 1, 0], 'A1·10 unchanged');
});

test('every one of the 258 chapters (49 with ids over the old limit), incl. the longest id: 200 with exact per-task counts', async () => {
  const env = makeEnv();
  const u = await learner(env);
  const d = day();
  const longIds = IDS.filter((id) => Buffer.byteLength(`st:${d}:${id}:%`) > 50);
  assert.equal(longIds.length, 49, 'chapters the old query broke');
  assert.ok(longIds.includes(B118) && longIds.includes(LONGEST));
  // a distinct, recognisable count on one task of every chapter
  const want = {};
  for (const [k, id] of IDS.entries()) { const t = k % SPEECH_TASKS[id]; want[id] = t; await put(env, u.id, `st:${d}:${id}:${t}`, 1 + (k % 3)); }
  for (const [k, id] of IDS.entries()) {
    const r = await status(env, u.cookie, id);
    assert.equal(r.status, 200, id);
    assert.equal(r.json.eligible, true, id);
    const expected = new Array(SPEECH_TASKS[id]).fill(0); expected[want[id]] = 1 + (k % 3);
    assert.deepEqual(r.json.tasks.used, expected, id);
  }
  assert.ok(LONGEST.length >= 40, 'the longest real id: ' + LONGEST);
});

test('exact matching: other chapters (incl. ids that share a prefix), other days, other users and non-task suffixes never count', async () => {
  const env = makeEnv();
  const u = await learner(env), other = await learner(env);
  const d = day(), y = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  await put(env, u.id, `st:${d}:${B118}:1`, 2);
  await put(env, u.id, `st:${d}:${B118}-x:1`, 3);          // a longer id with B1·18 as its prefix
  await put(env, u.id, `st:${d}:${B118}:1:extra`, 3);      // not a plain task number
  await put(env, u.id, `st:${d}:${B118}:01`, 3);
  await put(env, u.id, `st:${d}:${B118}:9`, 3);            // beyond the chapter's 7 tasks
  await put(env, u.id, `st:${y}:${B118}:2`, 3);            // yesterday
  await put(env, u.id, `sd:${d}`, 9);                      // a different counter
  await put(env, other.id, `st:${d}:${B118}:3`, 3);        // someone else
  const r = await status(env, u.cookie, B118);
  assert.deepEqual(r.json.tasks.used, [0, 2, 0, 0, 0, 0, 0]);
});

test('the per-task cap itself is unchanged: 3 allowed, the 4th refused, on a long-id chapter', async () => {
  const env = makeEnv({ TUTOR: { fetch: async () => Response.json({ ok: true, text: 'Hallo', seconds: 1, meta: { provider: true } }) } });
  const u = await learner(env);
  const tx = () => worker.fetch(new Request(API + `/speech/transcribe?chapter=${B118}&task=0&ms=2000`, { method: 'POST', headers: { origin: SITE, cookie: u.cookie, 'content-type': 'audio/webm' }, body: new Uint8Array(1000) }), env, ctx).then((r) => r.json().then((j) => [r.status, j]));
  const out = [];
  for (let i = 0; i < 4; i++) out.push(await tx());
  assert.deepEqual(out.map(([s, j]) => s === 200 ? j.task.remaining : j.error), [2, 1, 0, 'task_limit']);
  const s = await status(env, u.cookie, B118);
  assert.equal(s.status, 200); assert.deepEqual(s.json.tasks.used.slice(0, 2), [3, 0]);
});

test('defence in depth: an unexpected exception is a JSON 500 with CORS headers, not a raw error page; logs carry the error class only', async () => {
  const env = makeEnv();
  const u = await learner(env);
  const realPrepare = env.DB.prepare;
  env.DB.prepare = (sql) => { if (/FROM ai_usage/.test(sql)) throw Object.assign(new Error('D1_ERROR: simulated secret detail'), { name: 'D1Error' }); return realPrepare(sql); };
  logs.length = 0;
  const r = await status(env, u.cookie, B118);
  assert.equal(r.status, 500);
  assert.deepEqual(r.json, { ok: false, error: 'server_error' });
  assert.equal(r.headers.get('access-control-allow-origin'), SITE, 'the browser can read it (no CORS failure)');
  assert.equal(r.headers.get('access-control-allow-credentials'), 'true');
  const line = logs.find((l) => l.includes('"evt":"unhandled"'));
  assert.ok(line && line.includes('"path":"/speech/status"') && line.includes('"error":"D1Error"'));
  assert.ok(!logs.join('\n').includes('simulated secret detail'), 'no error message or stack in logs');
  env.DB.prepare = realPrepare;
  assert.equal((await status(env, u.cookie, B118)).status, 200, 'normal answers are untouched');
  const foreign = await worker.fetch(new Request(API + '/speech/status?chapter=' + B118, { headers: { origin: 'https://evil.example' } }), makeEnv(), ctx);
  assert.equal(foreign.headers.get('access-control-allow-origin'), null, 'no CORS grant for foreign origins, as before');
});
