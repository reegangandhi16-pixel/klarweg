/* klarweg-access — Record & Check: 3 checks per Speaking task per day.
   The real Worker fetch handler against an in-memory D1; the klarweg-tutor
   binding is a recording stub (no network, no credentials, no audio played).
   Key: account + chapter + task + UTC day, stored as an ai_usage counter. */
import test, { mock } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { speechChapter, speechTask } from '../src/speech.js';
import { SPEECH_TASKS } from '../src/speech-tasks.js';
import { createD1 } from './d1-sqlite.mjs';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://reegangandhi16-pixel.github.io';
const API = 'https://klarweg-access.example.workers.dev';
const CH = 'a1-1-alphabet';
const AUDIO = new Uint8Array(3000).map((_, i) => (i * 7) % 256);
const LIMIT_MSG = 'You’ve used all 3 checks for this task today. Move to the next speaking task.';

globalThis.fetch = async (u) => { throw new Error('Unexpected network call in test: ' + u); };
const origLog = console.log;
const logs = [];
console.log = (...a) => logs.push(a.join(' '));
test.after(() => { console.log = origLog; });

function tutorStub() {
  const t = { calls: 0, next: () => Response.json({ ok: true, text: 'Ich heiße Rohan', seconds: 2, meta: { provider: true, ms: 800 } }) };
  t.fetch = async (url, init) => { t.calls++; return t.next(init); };
  return t;
}
// Production per-task cap (3) unless a test says otherwise.
const makeEnv = (extra = {}) => ({ DB: createD1(WORKER_DIR), RATE_SALT: 's', CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1', CASHFREE_SECRET_KEY: 'x', GOOGLE_CLIENT_ID: 'g',
  SPEECH_MODE: 'entitled', SPEECH_SCOPE: 'all', SPEECH_CHAPTERS: '', TUTOR: tutorStub(), ...extra });
const ctx = { waitUntil() {} };
async function call(env, method, pathname, { cookie, origin = SITE, body, headers = {} } = {}) {
  const h = { 'CF-Connecting-IP': '198.51.100.' + Math.floor(Math.random() * 200), ...headers };
  if (cookie) h.cookie = cookie;
  if (origin) h.origin = origin;
  const res = await worker.fetch(new Request(API + pathname, { method, headers: h, body }), env, ctx);
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch {}
  return { status: res.status, json, text };
}
const check = (env, cookie, { chapter = CH, task = '0', ms = 2000, type = 'audio/webm;codecs=opus', body = AUDIO, origin } = {}) =>
  call(env, 'POST', `/speech/transcribe?chapter=${chapter}${task === null ? '' : '&task=' + task}&ms=${ms}`, { cookie, body, origin, headers: { 'content-type': type } });
const browserCheck = (env, cookie, { chapter = CH, task = '0', origin } = {}) => call(env, 'POST', `/speech/task-check?chapter=${chapter}&task=${task}`, { cookie, origin });
const status = (env, cookie, chapter = CH) => call(env, 'GET', `/speech/status?chapter=${chapter}`, { cookie });

async function signup(env, email = `t${Math.random().toString(36).slice(2)}@example.com`) {
  const r = await call(env, 'POST', '/auth/signup', { body: JSON.stringify({ email, password: 'correct-horse-9', name: 'T' }), headers: { 'content-type': 'application/json' } });
  assert.equal(r.status, 201, r.text);
  return { email, cookie: null, id: r.json.user.id, first: r };
}
async function login(env, email) {
  const res = await worker.fetch(new Request(API + '/auth/login', { method: 'POST', headers: { origin: SITE, 'content-type': 'application/json', 'CF-Connecting-IP': '198.51.100.7' }, body: JSON.stringify({ email, password: 'correct-horse-9' }) }), env, ctx);
  assert.equal(res.status, 200);
  return res.headers.get('set-cookie').split(';')[0];
}
async function learner(env, product = 'A1') {
  const email = `t${Math.random().toString(36).slice(2)}@example.com`;
  const res = await worker.fetch(new Request(API + '/auth/signup', { method: 'POST', headers: { origin: SITE, 'content-type': 'application/json', 'CF-Connecting-IP': '198.51.100.9' }, body: JSON.stringify({ email, password: 'correct-horse-9', name: 'T' }) }), env, ctx);
  const j = await res.json();
  const u = { email, id: j.user.id, cookie: res.headers.get('set-cookie').split(';')[0] };
  if (product) await env.DB.prepare('INSERT INTO user_entitlements (user_id, product_id, source_order_id, granted_at, expires_at) VALUES (?1, ?2, NULL, 1, NULL)').bind(u.id, product).run();
  return u;
}
const units = async (env, id, prefix) => Number((await env.DB.prepare("SELECT COALESCE(SUM(units),0) AS n FROM ai_usage WHERE user_id = ?1 AND period LIKE ?2").bind(id, prefix + '%').first()).n);

test('1–4: checks 1, 2, 3 allowed (remaining 2, 1, 0); the 4th is refused before the AI is contacted', async () => {
  const env = makeEnv();
  const u = await learner(env);
  assert.deepEqual((await status(env, u.cookie)).json.tasks.used, [0, 0, 0]);
  for (const [n, left] of [[1, 2], [2, 1], [3, 0]]) {
    const r = await check(env, u.cookie);
    assert.equal(r.status, 200, 'check ' + n);
    assert.deepEqual(r.json.task, { limit: 3, used: n, remaining: left, locked: left === 0 });
  }
  assert.equal(env.TUTOR.calls, 3);
  const fourth = await check(env, u.cookie);
  assert.equal(fourth.status, 429);
  assert.equal(fourth.json.error, 'task_limit');
  assert.equal(fourth.json.message, LIMIT_MSG);
  assert.deepEqual(fourth.json.task, { limit: 3, used: 3, remaining: 0, locked: true });
  assert.equal(env.TUTOR.calls, 3, 'the 4th never reached the transcription service');
  assert.equal(await units(env, u.id, 'sd:'), 3, 'the refused 4th took no daily unit');
  assert.equal(await units(env, u.id, 'sx:'), 3, 'nor a per-minute unit');
  const st = (await status(env, u.cookie)).json.tasks;
  assert.deepEqual({ used: st.used, remaining: st.remaining, limit: st.limit }, { used: [3, 0, 0], remaining: [0, 3, 3], limit: 3 });
  assert.match(st.resetsAt, /^\d{4}-\d\d-\d\dT00:00:00\.000Z$/, 'next UTC midnight');
});

test('5–6: another task in the chapter and another chapter each have their own 3', async () => {
  const env = makeEnv({ SPEECH_PER_MINUTE: '100' });             // 9 checks in one go; the minute cap is tested in 12
  const u = await learner(env, 'LIFETIME');
  for (let i = 0; i < 3; i++) assert.equal((await check(env, u.cookie, { task: '0' })).status, 200);
  assert.equal((await check(env, u.cookie, { task: '0' })).json.error, 'task_limit');
  for (let i = 0; i < 3; i++) assert.equal((await check(env, u.cookie, { task: '1' })).status, 200, 'task 1 of the same chapter');
  assert.equal((await check(env, u.cookie, { task: '1' })).json.error, 'task_limit');
  for (let i = 0; i < 3; i++) assert.equal((await check(env, u.cookie, { chapter: 'b1-4-folgen-deshalb-so-dass', task: '0' })).status, 200, 'task 0 of another chapter');
  assert.deepEqual((await status(env, u.cookie)).json.tasks.used, [3, 3, 0]);
  assert.deepEqual((await status(env, u.cookie, 'b1-4-folgen-deshalb-so-dass')).json.tasks.used.slice(0, 2), [3, 0]);
});

test('7–8: shared across sessions/devices; refresh, re-login and a second tab keep the count', async () => {
  const env = makeEnv();
  const u = await learner(env);
  await check(env, u.cookie); await check(env, u.cookie);
  const phone = await login(env, u.email);                     // another device = another session
  assert.notEqual(phone, u.cookie);
  assert.deepEqual((await status(env, phone)).json.tasks.used, [2, 0, 0], 'the phone sees the laptop’s 2 checks');
  assert.equal((await check(env, phone)).json.task.remaining, 0);
  assert.equal((await check(env, u.cookie)).json.error, 'task_limit', 'the laptop is now refused too');
  assert.equal((await call(env, 'POST', '/auth/logout', { cookie: u.cookie })).status < 500, true);
  const again = await login(env, u.email);                     // log out and in
  assert.equal((await check(env, again)).json.error, 'task_limit');
  assert.deepEqual((await status(env, again)).json.tasks.used, [3, 0, 0], 'refresh / reopen: same count');
});

test('9: concurrent requests cannot turn 3 into 4 or 5 (atomic reservation)', async () => {
  const env = makeEnv();
  const u = await learner(env);
  const rs = await Promise.all(Array.from({ length: 6 }, () => check(env, u.cookie, { task: '2' })));
  assert.equal(rs.filter((r) => r.status === 200).length, 3);
  assert.equal(rs.filter((r) => r.status === 429 && r.json.error === 'task_limit').length, 3);
  assert.equal(env.TUTOR.calls, 3);
  assert.equal(await units(env, u.id, 'st:'), 3);
  const mixed = await Promise.all([check(env, u.cookie, { task: '1' }), browserCheck(env, u.cookie, { task: '1' }), check(env, u.cookie, { task: '1' }), browserCheck(env, u.cookie, { task: '1' }), check(env, u.cookie, { task: '1' })]);
  assert.equal(mixed.filter((r) => r.status === 200).length, 3, 'AI + browser checks racing on one task: still 3');
});

test('10: the next UTC day starts a fresh allowance', async () => {
  mock.timers.enable({ apis: ['Date'], now: Date.UTC(2026, 9, 3, 23, 58) });
  try {
    const env = makeEnv();
    const u = await learner(env);
    for (let i = 0; i < 3; i++) await check(env, u.cookie);
    assert.equal((await check(env, u.cookie)).json.error, 'task_limit');
    assert.equal((await status(env, u.cookie)).json.tasks.resetsAt, '2026-10-04T00:00:00.000Z');
    mock.timers.setTime(Date.UTC(2026, 9, 4, 0, 1));
    assert.deepEqual((await status(env, u.cookie)).json.tasks.used, [0, 0, 0]);
    const r = await check(env, u.cookie);
    assert.equal(r.status, 200); assert.equal(r.json.task.remaining, 2);
  } finally { mock.timers.reset(); }
});

test('11: browser-recognition checks share the counter; no hidden unlimited path', async () => {
  const env = makeEnv();
  const owner = await learner(env);
  assert.equal((await check(env, owner.cookie)).status, 200);
  assert.equal((await check(env, owner.cookie)).status, 200);
  const b = await browserCheck(env, owner.cookie);                 // "Use browser check" after 2 AI checks
  assert.equal(b.status, 200); assert.deepEqual(b.json, { ok: true, task: { limit: 3, used: 3, remaining: 0, locked: true } });
  assert.equal((await check(env, owner.cookie)).json.error, 'task_limit', 'AI refused after the browser check');
  const b2 = await browserCheck(env, owner.cookie);
  assert.equal(b2.status, 429); assert.equal(b2.json.error, 'task_limit'); assert.equal(b2.json.message, LIMIT_MSG);
  // Not entitled (browser fallback chapter): 3 browser checks per task, then refused.
  const free = await learner(env, null);
  for (let i = 0; i < 3; i++) assert.equal((await browserCheck(env, free.cookie, { chapter: 'a2-19-indirekte-fragen', task: '4' })).status, 200);
  assert.equal((await browserCheck(env, free.cookie, { chapter: 'a2-19-indirekte-fragen', task: '4' })).json.error, 'task_limit');
  assert.equal((await status(env, free.cookie, 'a2-19-indirekte-fragen')).json.eligible, false);
  assert.equal((await status(env, free.cookie, 'a2-19-indirekte-fragen')).json.tasks.used[4], 3, 'counts reported to the not-eligible page too');
  // Browser checks never touch the AI quotas or the global counters, and work with the AI switched off.
  assert.equal(await units(env, free.id, 'sd:'), 0); assert.equal(await units(env, free.id, 'sx:'), 0);
  const off = makeEnv({ SPEECH_MODE: 'off' });
  const v = await learner(off);
  assert.equal((await browserCheck(off, v.cookie)).status, 200, 'cap still counted when SPEECH_MODE is off');
  // Refusals before counting: signed out, unknown chapter, invented task, foreign origin.
  assert.equal((await browserCheck(env, null)).status, 401);
  for (const [ch, t] of [[CH, '3'], [CH, '-1'], [CH, '01'], [CH, 'x'], [CH, ''], ['a1-99-none', '0'], ['../a1-1-alphabet', '0']]) {
    const r = await browserCheck(env, free.cookie, { chapter: encodeURIComponent(ch), task: t });
    assert.equal(r.status, 400, ch + ' / ' + t); assert.equal(r.json.error, 'bad_task');
  }
  assert.equal((await browserCheck(env, free.cookie, { origin: 'https://evil.example' })).status, 403, 'cross-site writes refused');
});

test('direct API bypass: no task, invented task or unknown chapter → refused, nothing counted, AI never called', async () => {
  const env = makeEnv();
  const u = await learner(env, 'LIFETIME');
  for (const [chapter, task, code, err] of [[CH, null, 400, 'bad_task'], [CH, '3', 400, 'bad_task'], [CH, '99', 400, 'bad_task'], [CH, '1e0', 400, 'bad_task'], [CH, ' 1', 400, 'bad_task'],
    ['a1-1-alphabet-x', '0', 403, 'not_enabled'], ['a1-77-made-up', '0', 403, 'not_enabled']]) {
    const r = await check(env, u.cookie, { chapter: encodeURIComponent(chapter), task: task === null ? null : encodeURIComponent(task) });
    assert.equal(r.status, code, chapter + ' / ' + task); assert.equal(r.json.error, err);
  }
  assert.equal(env.TUTOR.calls, 0);
  assert.equal(await units(env, u.id, 'st:'), 0);
  assert.equal(await units(env, u.id, 'sd:'), 0);
});

test('12: 6/minute, 60/day and 600/month still apply on top of the per-task cap', async () => {
  const env = makeEnv();
  const u = await learner(env, 'LIFETIME');
  const tasks = [['a1-1-alphabet', '0'], ['a1-1-alphabet', '1'], ['a1-1-alphabet', '2']];
  let n = 0;
  for (const [chapter, task] of tasks) for (let i = 0; i < 2; i++) { assert.equal((await check(env, u.cookie, { chapter, task })).status, 200); n++; }
  assert.equal(n, 6);
  const r = await check(env, u.cookie, { chapter: 'a2-1-genitiv', task: '0' });
  assert.equal(r.status, 429); assert.equal(r.json.error, 'rate_minute', 'the 7th in a minute');
  assert.deepEqual(r.json.task, { limit: 3, used: 0, remaining: 3, locked: false }, 'refused by the minute cap → the task check is given back');
  const d = makeEnv({ SPEECH_PER_MINUTE: '100', SPEECH_DAILY_CHECKS: '4' });
  const w = await learner(d, 'LIFETIME');
  for (const t of ['0', '1', '2']) assert.equal((await check(d, w.cookie, { task: t })).status, 200);
  assert.equal((await check(d, w.cookie, { chapter: 'a2-1-genitiv', task: '0' })).status, 200);
  const q = await check(d, w.cookie, { chapter: 'a2-1-genitiv', task: '1' });
  assert.equal(q.json.error, 'quota_day'); assert.equal(q.json.task.used, 0, 'task check refunded');
  const m = makeEnv({ SPEECH_PER_MINUTE: '100', SPEECH_MONTHLY_CHECKS: '1' });
  const x = await learner(m);
  assert.equal((await check(m, x.cookie)).status, 200);
  assert.equal((await check(m, x.cookie, { task: '1' })).json.error, 'quota_month');
  // The production values are unchanged.
  const toml = fs.readFileSync(path.join(WORKER_DIR, 'wrangler.toml'), 'utf8');
  const v = (k) => (toml.match(new RegExp('^' + k + ' = "([^"]*)"', 'm')) || [])[1];
  assert.deepEqual([v('SPEECH_PER_MINUTE'), v('SPEECH_DAILY_CHECKS'), v('SPEECH_MONTHLY_CHECKS'), v('SPEECH_GLOBAL_DAILY_REQUESTS'), v('SPEECH_GLOBAL_DAILY_BUDGET_MICROS'), v('SPEECH_MAX_BYTES'), v('SPEECH_MAX_SECONDS')],
    ['6', '60', '600', '500', '500000', '1048576', '30']);
  assert.equal(v('SPEECH_TASK_DAILY_CHECKS'), '3');
});

test('13: refunds — our failures give the task check back; a returned transcript (even empty) counts; pre-provider refusals count nothing', async () => {
  const env = makeEnv();
  const u = await learner(env);
  const st = () => status(env, u.cookie).then((r) => r.json.tasks.used[0]);
  for (const reply of [() => Response.json({ ok: false, error: 'provider_error', meta: { provider: true } }, { status: 502 }),
    () => Response.json({ ok: false, error: 'provider_timeout', meta: { provider: true } }, { status: 504 }),
    () => Response.json({ ok: false, error: 'unreadable_audio', meta: { provider: true } }, { status: 422 }),
    () => { throw new TypeError('tutor down'); }]) {
    env.TUTOR.next = reply;
    const r = await check(env, u.cookie);
    assert.ok(r.status >= 400, String(r.status));
    assert.equal(r.json.task.used, 0, 'refunded: ' + r.json.error);
  }
  assert.equal(await st(), 0);
  env.TUTOR.next = () => Response.json({ ok: true, text: '', seconds: 1, meta: { provider: true } });
  assert.equal((await check(env, u.cookie)).json.task.used, 1, 'an empty transcript is a completed check');
  env.TUTOR.next = () => Response.json({ ok: true, text: 'Hallo', seconds: 1, meta: { provider: true } });
  const calls = env.TUTOR.calls;
  for (const opts of [{ type: 'application/json' }, { body: new Uint8Array(0) }, { ms: 0 }, { ms: 31000 }]) {
    const r = await check(env, u.cookie, opts);
    assert.ok(r.status === 400 || r.status === 413 || r.status === 415, JSON.stringify(opts));
  }
  assert.equal((await check(env, null)).status, 401);
  const busy = makeEnv({ SPEECH_GLOBAL_DAILY_REQUESTS: '0' });
  const b = await learner(busy);
  assert.equal((await check(busy, b.cookie)).json.error, 'speech_busy');
  assert.equal(await units(busy, b.id, 'st:'), 0, 'global ceiling: nothing counted');
  assert.equal(env.TUTOR.calls, calls, 'none of these reached the provider');
  assert.equal(await st(), 1);
  const plain = await learner(env, null);
  assert.equal((await check(env, plain.cookie)).json.error, 'not_entitled');
  assert.equal(await units(env, plain.id, 'st:'), 0);
});

test('14: production scope — every one of the 258 chapters, every task, nothing else', () => {
  const env = { SPEECH_SCOPE: 'all', SPEECH_CHAPTERS: '' };
  const ids = Object.keys(SPEECH_TASKS);
  assert.equal(ids.length, 258);
  for (const id of ids) {
    const c = speechChapter(env, id);
    assert.ok(c && c.id === id && /^(A1|A2|B1|B2|C1|C2)$/.test(c.level), id);
    assert.equal(c.level.toLowerCase(), id.slice(0, 2), 'level from the chapter id');
    for (let t = 0; t < SPEECH_TASKS[id]; t++) assert.equal(speechTask(id, String(t)), t);
    assert.equal(speechTask(id, String(SPEECH_TASKS[id])), null, id + ': one past the last task');
  }
  assert.equal(speechChapter(env, 'a1-99-unknown'), null, 'well-formed but not a real chapter');
  const toml = fs.readFileSync(path.join(WORKER_DIR, 'wrangler.toml'), 'utf8');
  const v = (k) => (toml.match(new RegExp('^' + k + ' = "([^"]*)"', 'm')) || [])[1];
  assert.deepEqual([v('SPEECH_MODE'), v('SPEECH_SCOPE'), v('SPEECH_CHAPTERS'), v('SPEECH_CHAPTERS_EXCLUDE')], ['entitled', 'all', '', ''], 'production: entitled learners, all chapters, no staging list');
});

test('privacy: a task counter holds only account, day, chapter id and task number', async () => {
  const env = makeEnv();
  const u = await learner(env);
  logs.length = 0;
  await check(env, u.cookie, { task: '1' });
  await browserCheck(env, u.cookie, { task: '2' });
  const rows = (await env.DB.prepare("SELECT * FROM ai_usage WHERE period LIKE 'st:%'").all()).results;
  assert.equal(rows.length, 2);
  for (const r of rows) {
    assert.deepEqual(Object.keys(r).sort(), ['period', 'units', 'user_id']);
    assert.match(r.period, /^st:\d{4}-\d\d-\d\d:a1-1-alphabet:[12]$/);
    assert.equal(r.user_id, u.id);
  }
  assert.ok(!logs.join('\n').includes('Rohan') && !logs.join('\n').includes(u.id), 'no transcript or account id in logs');
});
