/* klarweg-access /speech/* — node --test
   The real Worker fetch handler against an in-memory D1 (schema.sql + every
   migration). The klarweg-tutor service binding is a recording stub; no
   network, no real credentials. */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { createD1 } from './d1-sqlite.mjs';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://reegangandhi16-pixel.github.io';
const API = 'https://klarweg-access.example.workers.dev';
const CH = 'a1-1-alphabet';
const AUDIO = new Uint8Array(3000).map((_, i) => (i * 13) % 256);
const TRANSCRIPT = 'Ich heiße Rohan Kumar';

globalThis.fetch = async (u) => { throw new Error('Unexpected network call in test: ' + u); };

const logs = [];
const origLog = console.log;
console.log = (...a) => logs.push(a.join(' '));
test.after(() => { console.log = origLog; });

/* klarweg-tutor stub: records what it receives, answers per `next`. */
function tutorStub() {
  const t = { calls: [], next: () => Response.json({ ok: true, text: ' ' + TRANSCRIPT + ' ', seconds: 2, meta: { provider: true, ms: 900 } }) };
  t.fetch = async (url, init) => {
    t.calls.push({ url, headers: { ...init.headers }, bytes: new Uint8Array(init.body) });
    return t.next(init);
  };
  return t;
}
function makeEnv(extra = {}) {
  const TUTOR = tutorStub();
  // The older tests below exercise the account/global layers with many checks on
  // one task, so they lift the per-task cap; the per-task tests use the real 3.
  return { DB: createD1(WORKER_DIR), RATE_SALT: 'test-salt', CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1', CASHFREE_SECRET_KEY: 'x', GOOGLE_CLIENT_ID: 'g', SPEECH_MODE: 'entitled', SPEECH_TASK_DAILY_CHECKS: '1000', TUTOR, ...extra };
}
const ctx = { waitUntil() {} };
async function call(env, method, pathname, { cookie, origin = SITE, body, headers = {} } = {}) {
  const h = { 'CF-Connecting-IP': '203.0.113.' + Math.floor(Math.random() * 200), ...headers };
  if (cookie) h.cookie = cookie;
  if (origin) h.origin = origin;
  const res = await worker.fetch(new Request(API + pathname, { method, headers: h, body }), env, ctx);
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch {}
  return { status: res.status, json, text, headers: res.headers };
}
const transcribe = (env, cookie, { ms = 2500, type = 'audio/webm;codecs=opus', body = AUDIO, chapter = CH, task = '0', headers = {}, origin } = {}) =>
  call(env, 'POST', `/speech/transcribe?chapter=${chapter}&task=${task}&ms=${ms}`, { cookie, body, origin, headers: { 'content-type': type, ...headers } });
const status = (env, cookie, chapter = CH) => call(env, 'GET', `/speech/status?chapter=${chapter}`, { cookie });

async function signup(env) {
  const email = `s${Math.random().toString(36).slice(2)}@example.com`;
  const r = await call(env, 'POST', '/auth/signup', { body: JSON.stringify({ email, password: 'correct-horse-9', name: 'T' }), headers: { 'content-type': 'application/json' } });
  assert.equal(r.status, 201, r.text);
  return { cookie: r.headers.get('set-cookie').split(';')[0], id: r.json.user.id };
}
async function grant(env, userId, product = 'A1') {
  await env.DB.prepare('INSERT INTO user_entitlements (user_id, product_id, source_order_id, granted_at, expires_at) VALUES (?1, ?2, NULL, 1, NULL)').bind(userId, product).run();
}
async function learner(env, product = 'A1') { const u = await signup(env); if (product) await grant(env, u.id, product); return u; }
const units = async (env, id, prefix) => {
  const r = await env.DB.prepare("SELECT COALESCE(SUM(units),0) AS n FROM ai_usage WHERE user_id = ?1 AND period LIKE ?2").bind(id, prefix + '%').first();
  return Number(r.n);
};

test('flag OFF (default): status says disabled, transcribe refuses, nothing reaches the tutor', async () => {
  const env = makeEnv({ SPEECH_MODE: undefined });
  const u = await learner(env);
  const off = (await status(env, u.cookie)).json;
  assert.deepEqual({ ok: off.ok, enabled: off.enabled }, { ok: true, enabled: false });
  assert.deepEqual(off.tasks.used, [0, 0, 0], 'per-task counts still answered (they also cap browser checks)');
  assert.equal((await status(env, null)).json.tasks, undefined, 'signed out: no counts');
  const r = await transcribe(env, u.cookie);
  assert.equal(r.status, 503); assert.equal(r.json.error, 'speech_disabled');
  assert.equal(env.TUTOR.calls.length, 0);
  for (const mode of ['off', 'OFF', 'yes', '']) {
    const e = makeEnv({ SPEECH_MODE: mode });
    assert.equal((await transcribe(e, u.cookie)).json.error, 'speech_disabled', mode);
  }
  const noBinding = makeEnv({ TUTOR: undefined });
  assert.deepEqual((await status(noBinding, null)).json, { ok: true, enabled: false }, 'no tutor binding = off');
});

test('authentication required: no or bad session → 401, status not eligible', async () => {
  const env = makeEnv();
  assert.equal((await transcribe(env, null)).status, 401);
  assert.equal((await transcribe(env, 'kw_session=forged')).json.error, 'auth_required');
  assert.deepEqual((await status(env, null)).json, { ok: true, enabled: true, signedIn: false, eligible: false });
  assert.equal(env.TUTOR.calls.length, 0);
});

test('entitlement required: signed in without A1 → 403 not_entitled', async () => {
  const env = makeEnv();
  const u = await learner(env, null);
  const r = await transcribe(env, u.cookie);
  assert.equal(r.status, 403); assert.equal(r.json.error, 'not_entitled');
  assert.equal((await status(env, u.cookie)).json.eligible, false);
  const other = await learner(env, 'B1');
  assert.equal((await transcribe(env, other.cookie)).status, 403, 'another level does not count');
  const life = await learner(env, 'LIFETIME');
  assert.equal((await transcribe(env, life.cookie)).status, 200, 'Lifetime covers A1');
  assert.equal(env.TUTOR.calls.length, 1);
});

test('A1·01 only: other chapters are refused even for owners', async () => {
  const env = makeEnv();
  const u = await learner(env, 'LIFETIME');
  for (const ch of ['a1-2-vokale', 'a1-1', 'b1-1-anything', 'a1-1-alphabet-x', '../a1-1-alphabet']) {
    const r = await transcribe(env, u.cookie, { chapter: encodeURIComponent(ch) });
    assert.equal(r.status, 403, ch); assert.equal(r.json.error, 'not_enabled');
    assert.equal((await status(env, u.cookie, encodeURIComponent(ch))).json.eligible, false);
  }
  assert.equal(env.TUTOR.calls.length, 0);
});

test('valid check: browser gets only { ok, text }; the tutor gets only the exact audio + type', async () => {
  const env = makeEnv();
  const u = await learner(env);
  const st = await status(env, u.cookie);
  assert.equal(st.json.eligible, true);
  assert.deepEqual(st.json.remaining, { day: 60, month: 600 });
  const r = await transcribe(env, u.cookie);
  assert.equal(r.status, 200);
  assert.deepEqual(r.json, { ok: true, text: TRANSCRIPT, task: { limit: 1000, used: 1, remaining: 999, locked: false } }, 'nothing else — no engine, provider, meta or usage; only this task\'s count');
  assert.equal(r.headers.get('access-control-allow-origin'), SITE);
  assert.equal(r.headers.get('cache-control'), 'no-store');
  const c = env.TUTOR.calls[0];
  assert.equal(c.url, 'https://klarweg-tutor.internal/v1/transcribe');
  assert.deepEqual(c.headers, { 'content-type': 'audio/webm;codecs=opus' }, 'no cookie, no user id, no auth header forwarded');
  assert.deepEqual(c.bytes, AUDIO, 'identical bytes');
  assert.deepEqual((await status(env, u.cookie)).json.remaining, { day: 59, month: 599 });
});

test('allowlist mode (internal staging): only listed accounts, entitlement not needed', async () => {
  const env = makeEnv({ SPEECH_MODE: 'allowlist' });
  const staff = await learner(env, null);
  const buyer = await learner(env, 'A1');
  env.SPEECH_ALLOWLIST = ` ${staff.id} , someone-else`;
  assert.equal((await status(env, staff.cookie)).json.eligible, true);
  assert.equal((await transcribe(env, staff.cookie)).status, 200);
  assert.equal((await status(env, buyer.cookie)).json.eligible, false, 'buyers wait for "entitled"');
  assert.equal((await transcribe(env, buyer.cookie)).status, 403);
  env.SPEECH_ALLOWLIST = undefined;
  assert.equal((await transcribe(env, staff.cookie)).status, 403, 'empty allowlist = nobody');
});

test('upload limits: type, bytes (declared and actual), declared duration, empty', async () => {
  const env = makeEnv({ SPEECH_MAX_BYTES: '2000' });
  const u = await learner(env);
  let r = await transcribe(env, u.cookie, { type: 'application/json' });
  assert.equal(r.status, 415); assert.equal(r.json.error, 'unsupported_type');
  r = await transcribe(env, u.cookie, { type: 'video/webm' });
  assert.equal(r.status, 415);
  r = await transcribe(env, u.cookie);                               // 3000 bytes > 2000
  assert.equal(r.status, 413); assert.equal(r.json.error, 'too_large');
  r = await transcribe(env, u.cookie, { body: AUDIO.slice(0, 100), headers: { 'content-length': '999999' } });
  assert.equal(r.status, 413, 'declared size is checked before reading');
  r = await transcribe(env, u.cookie, { body: AUDIO.slice(0, 100), ms: 30001 });
  assert.equal(r.status, 413); assert.equal(r.json.error, 'too_long');
  r = await transcribe(env, u.cookie, { body: AUDIO.slice(0, 100), ms: 0 });
  assert.equal(r.status, 400);
  r = await transcribe(env, u.cookie, { body: AUDIO.slice(0, 100), ms: 'abc' });
  assert.equal(r.status, 400);
  r = await transcribe(env, u.cookie, { body: new Uint8Array(0) });
  assert.equal(r.status, 400); assert.equal(r.json.error, 'empty_audio');
  assert.equal(env.TUTOR.calls.length, 0, 'none of these reached the provider');
  assert.equal(await units(env, u.id, 's'), 0, 'and none consumed quota');
});

test('rate limit: per minute, then per day, then per month', async () => {
  let env = makeEnv({ SPEECH_PER_MINUTE: '2' });
  let u = await learner(env);
  assert.equal((await transcribe(env, u.cookie)).status, 200);
  assert.equal((await transcribe(env, u.cookie)).status, 200);
  let r = await transcribe(env, u.cookie);
  assert.equal(r.status, 429); assert.equal(r.json.error, 'rate_minute'); assert.ok(r.json.retryAfter >= 1 && r.json.retryAfter <= 60);
  assert.equal(env.TUTOR.calls.length, 2);
  env = makeEnv({ SPEECH_DAILY_CHECKS: '2' });
  u = await learner(env);
  await transcribe(env, u.cookie); await transcribe(env, u.cookie);
  r = await transcribe(env, u.cookie);
  assert.equal(r.status, 429); assert.equal(r.json.error, 'quota_day');
  assert.equal(await units(env, u.id, 'sx:'), 2, 'the refused attempt did not consume the per-minute bucket');
  env = makeEnv({ SPEECH_MONTHLY_CHECKS: '1' });
  u = await learner(env);
  await transcribe(env, u.cookie);
  r = await transcribe(env, u.cookie);
  assert.equal(r.status, 429); assert.equal(r.json.error, 'quota_month');
  const other = await learner(env);
  assert.equal((await transcribe(env, other.cookie)).status, 200, 'quotas are per account');
});

test('global ceilings: daily requests and estimated spend', async () => {
  let env = makeEnv({ SPEECH_GLOBAL_DAILY_REQUESTS: '1' });
  const a = await learner(env), b = await learner(env);
  assert.equal((await transcribe(env, a.cookie)).status, 200);
  let r = await transcribe(env, b.cookie);
  assert.equal(r.status, 503); assert.equal(r.json.error, 'speech_busy');
  env = makeEnv({ SPEECH_GLOBAL_DAILY_BUDGET_MICROS: '100' });
  const c = await learner(env);
  assert.equal((await transcribe(env, c.cookie)).status, 200);          // 2 s → 150 micros ≥ 100
  assert.equal(await units(env, 'speech:global', 'sc:'), 150, '2 s × $0.0045/min = 150 micro-dollars');
  r = await transcribe(env, c.cookie);
  assert.equal(r.status, 503); assert.equal(r.json.error, 'speech_busy');
});

test('cost falls back to the declared length when the provider reports none', async () => {
  const env = makeEnv();
  env.TUTOR.next = () => Response.json({ ok: true, text: 'Hallo', seconds: null, meta: { provider: true } });
  const u = await learner(env);
  await transcribe(env, u.cookie, { ms: 4200 });
  assert.equal(await units(env, 'speech:global', 'sc:'), 375, 'ceil(4.2 s) = 5 s → 375 micros');
});

test('provider failures: safe codes, learner refunded, outage retries stay bounded', async () => {
  const env = makeEnv();
  const u = await learner(env);
  const cases = [
    [{ ok: false, error: 'provider_busy', meta: { provider: true } }, 503, 503, 'speech_unavailable', true],
    [{ ok: false, error: 'provider_error', meta: { provider: true } }, 502, 503, 'speech_unavailable', true],
    [{ ok: false, error: 'provider_auth', meta: { provider: true } }, 502, 503, 'speech_unavailable', true],
    [{ ok: false, error: 'provider_timeout', meta: { provider: true } }, 504, 504, 'speech_timeout', true],
    [{ ok: false, error: 'unreadable_audio', meta: { provider: true } }, 422, 422, 'unreadable_audio', true],
    [{ ok: false, error: 'provider_malformed', meta: { provider: true } }, 502, 503, 'speech_unavailable', true],
    [{ ok: false, error: 'speech_unconfigured', meta: { provider: false } }, 503, 503, 'speech_unavailable', false],
    [{ ok: true, meta: { provider: true } }, 200, 503, 'speech_unavailable', true],                     // ok without text = malformed
  ];
  for (const [body, tutorStatus, status, error, contacted] of cases) {
    const before = { minute: await units(env, u.id, 'sx:'), global: await units(env, 'speech:global', 'sg:') };
    env.TUTOR.next = () => Response.json(body, { status: tutorStatus });
    const r = await transcribe(env, u.cookie);
    assert.equal(r.status, status, JSON.stringify(body)); assert.equal(r.json.error, error);
    assert.ok(typeof r.json.message === 'string' && !/openai|gpt|provider|tutor/i.test(r.json.message), 'learner wording only');
    assert.equal(await units(env, u.id, 'sd:'), 0, 'day units refunded');
    assert.equal(await units(env, u.id, 'sm:'), 0, 'month units refunded');
    assert.equal(await units(env, u.id, 'sx:'), before.minute + (contacted ? 1 : 0), 'per-minute kept only when the provider was contacted');
    assert.equal(await units(env, 'speech:global', 'sg:'), before.global + (contacted ? 1 : 0));
    await env.DB.prepare("DELETE FROM ai_usage WHERE period LIKE 'sx:%'").run();
  }
  env.TUTOR.next = () => { const e = new Error('slow'); e.name = 'TimeoutError'; throw e; };
  let r = await transcribe(env, u.cookie);
  assert.equal(r.status, 504); assert.equal(r.json.error, 'speech_timeout');
  env.TUTOR.next = () => { throw new TypeError('binding down'); };
  r = await transcribe(env, u.cookie);
  assert.equal(r.status, 503); assert.equal(r.json.error, 'speech_unavailable');
});

test('empty transcript is returned as text "" (the page shows "nothing recognised")', async () => {
  const env = makeEnv();
  env.TUTOR.next = () => Response.json({ ok: true, text: '', seconds: 1, meta: { provider: true } });
  const u = await learner(env);
  const r = await transcribe(env, u.cookie);
  assert.equal(r.status, 200); assert.deepEqual(r.json, { ok: true, text: '', task: { limit: 1000, used: 1, remaining: 999, locked: false } });
});

test('privacy: D1 holds counters only; logs hold numbers only', async () => {
  const env = makeEnv();
  const u = await learner(env);
  logs.length = 0;
  await transcribe(env, u.cookie);
  env.TUTOR.next = () => Response.json({ ok: false, error: 'provider_busy', meta: { provider: true } }, { status: 503 });
  await transcribe(env, u.cookie);
  const tables = env.DB.raw.prepare("SELECT name FROM sqlite_master WHERE type='table'").all().map((t) => t.name);
  for (const t of tables) {
    const dump = JSON.stringify(env.DB.raw.prepare(`SELECT * FROM "${t}"`).all());
    assert.ok(!dump.includes('Rohan') && !dump.includes('heiße'), 'no transcript in table ' + t);
  }
  const periods = env.DB.raw.prepare("SELECT user_id, period FROM ai_usage").all();
  assert.ok(periods.every((p) => /^s/.test(p.period)), 'speech uses its own s* buckets — AI chat quotas untouched');
  const stats = new Set(periods.filter((p) => p.user_id === 'speech:stats').map((p) => p.period.split(':')[0]));
  for (const k of ['sq', 'so', 'se', 's5xx']) assert.ok(stats.has(k), 'stats counter ' + k);
  assert.ok([...stats].every((k) => ['sq', 'so', 'se', 'sl', 's5xx'].includes(k)), 'no other stats counters');   // sl (latency sum) is written only when > 0 ms
  const speechLogs = logs.filter((l) => l.includes('"evt":"speech"'));
  assert.equal(speechLogs.length, 2);
  for (const l of speechLogs) {
    assert.ok(!l.includes('Rohan') && !l.includes(u.cookie.split('=')[1]) && !l.includes(u.id), 'no transcript, cookie or account id in logs');
    const j = JSON.parse(l);
    assert.equal(j.engine, 'openai:gpt-transcribe');
  }
});

test('CORS + CSRF: preflight for an audio body from the site; foreign origins refused', async () => {
  const env = makeEnv();
  const pre = await worker.fetch(new Request(API + '/speech/transcribe?chapter=' + CH, { method: 'OPTIONS', headers: { origin: SITE, 'access-control-request-method': 'POST', 'access-control-request-headers': 'content-type' } }), env, ctx);
  assert.equal(pre.status, 204);
  assert.equal(pre.headers.get('access-control-allow-origin'), SITE);
  assert.match(pre.headers.get('access-control-allow-headers'), /Content-Type/i);
  assert.equal(pre.headers.get('access-control-allow-credentials'), 'true');
  const u = await learner(env);
  const evil = await transcribe(env, u.cookie, { origin: 'https://evil.example' });
  assert.equal(evil.status, 403);
  assert.equal(env.TUTOR.calls.length, 0);
});

test('existing routes are unchanged by the speech routes', async () => {
  const env = makeEnv();
  assert.equal((await call(env, 'GET', '/speech/nope')).status, 404);
  assert.equal((await call(env, 'GET', '/speech/transcribe')).status, 404, 'GET is not a transcribe');
  assert.equal((await call(env, 'GET', '/')).json.service, 'klarweg-access');
});

/* ---------------- scope: which chapters may use the speech check ---------------- */
import fs from 'node:fs';
import { speechChapter, speechScope } from '../src/speech.js';
const REAL_IDS = fs.readdirSync(path.join(WORKER_DIR, '../../chapter')).filter((f) => /^chapter-[a-c][0-9]-.*\.html$/.test(f)).map((f) => f.slice(8, -5));
const ok = (env, id) => !!speechChapter(env, id);

test('scope: default is the explicit A1·01 list only', () => {
  assert.equal(ok({}, 'a1-1-alphabet'), true);
  assert.equal(ok({}, 'a1-2-vokale'), false);
  assert.equal(ok({ SPEECH_CHAPTERS: 'a1-2-vokale' }, 'a1-1-alphabet'), false, 'an explicit list replaces the default');
  assert.equal(ok({ SPEECH_CHAPTERS: '' }, 'a1-1-alphabet'), false, 'empty list = no chapters');
});

test('scope: levels "a1", "a1,a2", "all"; explicit list adds; exclusions always win', () => {
  assert.equal(ok({ SPEECH_SCOPE: 'a1' }, 'a1-2-vokale'), true);
  assert.equal(ok({ SPEECH_SCOPE: 'a1' }, 'a2-1-genitiv'), false);
  assert.equal(ok({ SPEECH_SCOPE: 'a1, A2' }, 'a2-1-genitiv'), true, 'case and spaces tolerated');
  assert.equal(ok({ SPEECH_SCOPE: 'a1,a2' }, 'b1-1-infinitiv-mit-zu'), false);
  assert.equal(ok({ SPEECH_SCOPE: 'b1,b2' }, 'b2-38-verschachtelte-relativsaetze'), true);
  assert.equal(ok({ SPEECH_SCOPE: 'all' }, 'c2-29-goethe-c2-final'), true);
  assert.equal(ok({ SPEECH_SCOPE: 'a1', SPEECH_CHAPTERS: 'c1-01-tempusgebrauch-stilistische-tempuswahl' }, 'c1-01-tempusgebrauch-stilistische-tempuswahl'), true, 'list adds to the levels');
  assert.equal(ok({ SPEECH_SCOPE: 'all', SPEECH_CHAPTERS_EXCLUDE: 'b2-14-goethe-mini-test-1' }, 'b2-14-goethe-mini-test-1'), false);
  assert.equal(ok({ SPEECH_CHAPTERS: 'a1-1-alphabet', SPEECH_CHAPTERS_EXCLUDE: 'a1-1-alphabet' }, 'a1-1-alphabet'), false, 'exclusion beats the explicit list');
  assert.equal(ok({ SPEECH_SCOPE: 'b3,everything,' }, 'b1-1-infinitiv-mit-zu'), false, 'unknown scope words grant nothing');
  const sc = speechScope({ SPEECH_SCOPE: 'all,a1' });
  assert.equal(sc.all, true); assert.deepEqual([...sc.levels], ['a1']);
});

test('scope: every real chapter id is well-formed; malformed ids are refused even under "all"', () => {
  assert.equal(REAL_IDS.length, 258);
  for (const id of REAL_IDS) assert.ok(ok({ SPEECH_SCOPE: 'all' }, id), id);
  for (const bad of ['', 'a1', 'a1-', 'a1-1-', 'a1--x', 'A1-1-alphabet', 'z9-1-x', 'a1-123-x', '../a1-1-alphabet', 'a1-1-alphabet/../x', 'a1-1-ALPHABET', 'a1-1-alpha bet', 'a1-1-' + 'x'.repeat(80), null, 42]) {
    assert.equal(ok({ SPEECH_SCOPE: 'all' }, bad), false, String(bad));
  }
});

test('scope over HTTP: status and transcribe agree per chapter and level (entitled)', async () => {
  const env = makeEnv({ SPEECH_SCOPE: 'a1,a2', SPEECH_CHAPTERS: '', SPEECH_CHAPTERS_EXCLUDE: 'a1-3-zahlen' });
  const a1 = await learner(env, 'A1');
  const both = await learner(env, 'A1'); await grant(env, both.id, 'A2');
  assert.equal((await status(env, a1.cookie, 'a1-2-vokale')).json.eligible, true);
  assert.equal((await transcribe(env, a1.cookie, { chapter: 'a1-2-vokale' })).status, 200);
  assert.equal((await status(env, a1.cookie, 'a1-3-zahlen')).json.eligible, false, 'excluded');
  assert.equal((await transcribe(env, a1.cookie, { chapter: 'a1-3-zahlen' })).json.error, 'not_enabled');
  assert.equal((await status(env, a1.cookie, 'a2-1-genitiv')).json.eligible, false, 'in scope, but A2 not owned');
  assert.equal((await transcribe(env, a1.cookie, { chapter: 'a2-1-genitiv' })).json.error, 'not_entitled');
  assert.equal((await transcribe(env, both.cookie, { chapter: 'a2-1-genitiv' })).status, 200, 'owner of A2');
  assert.equal((await transcribe(env, both.cookie, { chapter: 'b1-1-infinitiv-mit-zu' })).json.error, 'not_enabled', 'B1 outside scope');
  const life = await learner(env, 'LIFETIME');
  assert.equal((await status(env, life.cookie, 'a2-1-genitiv')).json.eligible, true);
});

test('scope over HTTP: allowlist mode + "all" — the listed account on every level, nobody else', async () => {
  const env = makeEnv({ SPEECH_MODE: 'allowlist', SPEECH_SCOPE: 'all', SPEECH_PER_MINUTE: '50' });   // 7 chapters in one minute
  const staff = await learner(env, null), buyer = await learner(env, 'LIFETIME');
  env.SPEECH_ALLOWLIST = staff.id;
  for (const ch of ['a1-2-vokale', 'a2-1-genitiv', 'b1-1-infinitiv-mit-zu', 'b2-38-verschachtelte-relativsaetze', 'b2-14-goethe-mini-test-1', 'c1-01-tempusgebrauch-stilistische-tempuswahl', 'c2-29-goethe-c2-final']) {
    assert.equal((await status(env, staff.cookie, ch)).json.eligible, true, ch);
    assert.equal((await transcribe(env, staff.cookie, { chapter: ch })).status, 200, ch);
    assert.equal((await transcribe(env, buyer.cookie, { chapter: ch })).status, 403, 'not allowlisted: ' + ch);
  }
});

test('quotas and budget are per account and shared across chapters and levels', async () => {
  let env = makeEnv({ SPEECH_SCOPE: 'all', SPEECH_DAILY_CHECKS: '2' });
  const u = await learner(env, 'LIFETIME');
  assert.equal((await transcribe(env, u.cookie, { chapter: 'a1-2-vokale' })).status, 200);
  assert.equal((await transcribe(env, u.cookie, { chapter: 'c2-29-goethe-c2-final' })).status, 200);
  const r = await transcribe(env, u.cookie, { chapter: 'b1-1-infinitiv-mit-zu' });
  assert.equal(r.status, 429); assert.equal(r.json.error, 'quota_day', 'one daily allowance across all chapters');
  assert.deepEqual((await status(env, u.cookie, 'b2-01-erweiterte-satzklammer')).json.remaining, { day: 0, month: 598 });
  env = makeEnv({ SPEECH_SCOPE: 'all', SPEECH_PER_MINUTE: '1' });
  const v = await learner(env, 'LIFETIME');
  assert.equal((await transcribe(env, v.cookie, { chapter: 'a1-2-vokale' })).status, 200);
  assert.equal((await transcribe(env, v.cookie, { chapter: 'a2-1-genitiv' })).json.error, 'rate_minute', 'per-minute cap is per account, not per chapter');
  env = makeEnv({ SPEECH_SCOPE: 'all', SPEECH_GLOBAL_DAILY_BUDGET_MICROS: '200' });
  const a = await learner(env, 'LIFETIME'), b = await learner(env, 'LIFETIME');
  assert.equal((await transcribe(env, a.cookie, { chapter: 'a1-2-vokale' })).status, 200);       // 150 micros
  assert.equal((await transcribe(env, b.cookie, { chapter: 'c1-01-tempusgebrauch-stilistische-tempuswahl' })).status, 200);   // 300 ≥ 200 after
  assert.equal((await transcribe(env, a.cookie, { chapter: 'b2-38-verschachtelte-relativsaetze' })).json.error, 'speech_busy', 'global budget shared by every chapter');
  const keys = env.DB.raw.prepare('SELECT DISTINCT period FROM ai_usage').all().map((r) => r.period.split(':')[0]);
  assert.ok(keys.every((k) => /^s/.test(k)), 'no chapter id in any counter key: ' + keys.join(','));
});
