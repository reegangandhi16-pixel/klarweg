/* klarweg-access — /exam/* proxy (src/exam-proxy.js). Drives the real Access
   fetch handler; the EXAM service binding is the real klarweg-exam Worker
   running in-process against its own in-memory D1 and private R2. */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import examWorker from '../../../exam-worker/src/index.js';
import { createD1 } from './d1-sqlite.mjs';
import { makeEnv as makeExamEnv, grant, PROXY_SECRET } from '../../../exam-worker/test/harness.mjs';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://reegangandhi16-pixel.github.io';
const API = 'https://klarweg-access.example.workers.dev';
const ctx = { waitUntil() {} };

function makeEnv(overrides = {}) {
  const exam = makeExamEnv();
  const seen = [];
  const EXAM = { async fetch(req) { seen.push({ url: req.url, user: req.headers.get('x-kw-user'), auth: req.headers.get('x-kw-proxy-auth'), cookie: req.headers.get('cookie') }); return examWorker.fetch(req, exam.env); } };
  return {
    env: { DB: createD1(WORKER_DIR), CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1234567890', CASHFREE_SECRET_KEY: 'cfsk_test', RATE_SALT: 'test-salt',
      EXAM_ROUTES: 'on', EXAM, EXAM_PROXY_SECRET: PROXY_SECRET, ...overrides },
    exam, seen
  };
}

async function req(env, method, pathname, { cookie, origin = SITE, body, headers = {} } = {}) {
  const h = { 'CF-Connecting-IP': '203.0.113.' + Math.floor(Math.random() * 200), ...headers };
  if (cookie) h.cookie = cookie;
  if (origin) h.origin = origin;
  if (body !== undefined) h['content-type'] = 'application/json';
  const res = await worker.fetch(new Request(API + pathname, { method, headers: h, body: body === undefined ? undefined : JSON.stringify(body) }), env, ctx);
  const buf = Buffer.from(await res.arrayBuffer());
  let json = null; try { json = JSON.parse(buf.toString('utf8')); } catch {}
  return { status: res.status, json, headers: res.headers, buf };
}
async function signup(env) {
  const r = await req(env, 'POST', '/auth/signup', { body: { email: `u${Math.random().toString(36).slice(2)}@example.com`, password: 'correct-horse-9', name: 'T' } });
  assert.equal(r.status, 201);
  return { cookie: r.headers.get('set-cookie').split(';')[0], id: r.json.user.id };
}

test('EXAM PROXY off by default: no EXAM_ROUTES → /exam/* is the same 404 as any unknown path', async () => {
  const { env, seen } = makeEnv({ EXAM_ROUTES: undefined });
  const a = await req(env, 'GET', '/exam/v1/availability');
  const b = await req(env, 'GET', '/definitely-not-a-route');
  assert.equal(a.status, 404); assert.deepEqual(a.json, b.json);
  assert.equal(seen.length, 0);
  const t = makeEnv({ EXAM_ROUTES: 'true' });   // only the exact string "on"
  assert.equal((await req(t.env, 'GET', '/exam/v1/availability')).status, 404);
});

test('EXAM PROXY: flag on but no EXAM binding (current wrangler.toml) → plain 404', async () => {
  const { env } = makeEnv({ EXAM: undefined });
  assert.equal((await req(env, 'GET', '/exam/v1/availability')).status, 404);
});

test('EXAM PROXY: signed-out → 401 JSON with CORS; nothing forwarded', async () => {
  const { env, seen } = makeEnv();
  const r = await req(env, 'GET', '/exam/v1/availability');
  assert.equal(r.status, 401); assert.equal(r.json.error, 'auth_required');
  assert.equal(r.headers.get('access-control-allow-origin'), SITE);
  assert.equal(r.headers.get('access-control-allow-credentials'), 'true');
  assert.equal(seen.length, 0);
});

test('EXAM PROXY: session resolved to user id; spoofed X-KW-* headers and cookies never reach the exam Worker', async () => {
  const { env, seen } = makeEnv();
  const u = await signup(env);
  const r = await req(env, 'GET', '/exam/v1/availability', { cookie: u.cookie, headers: { 'x-kw-user': 'usr_00000000-0000-0000-0000-000000000000', 'x-kw-proxy-auth': 'forged' } });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.equal(seen[0].user, u.id); assert.equal(seen[0].auth, PROXY_SECRET); assert.equal(seen[0].cookie, null);
  assert.equal(r.headers.get('cache-control'), 'no-store');
  assert.equal(r.headers.get('access-control-allow-origin'), SITE);
});

test('EXAM PROXY: CORS preflight works and cross-site writes are refused', async () => {
  const { env, seen } = makeEnv();
  const pre = await worker.fetch(new Request(API + '/exam/v1/attempts', { method: 'OPTIONS', headers: { origin: SITE, 'access-control-request-method': 'POST', 'access-control-request-headers': 'content-type' } }), env, ctx);
  assert.ok(pre.status === 204 || pre.status === 200);
  assert.equal(pre.headers.get('access-control-allow-origin'), SITE);
  assert.match(pre.headers.get('access-control-allow-methods'), /POST/);
  const u = await signup(env);
  const evil = await req(env, 'POST', '/exam/v1/attempts', { cookie: u.cookie, origin: 'https://evil.example', body: {} });
  assert.equal(evil.status, 403);
  assert.equal(seen.length, 0);
});

test('EXAM PROXY: end-to-end through Access — create attempt, start Lesen, fetch keyless package; errors stay JSON', async () => {
  const { env, exam } = makeEnv();
  const u = await signup(env);
  await grant(exam.env, u.id);
  const c = await req(env, 'POST', '/exam/v1/attempts', { cookie: u.cookie, body: { mode: 'synthetic_full', level: 'b1', request_id: 'rq_proxy_0001', device_id: 'dev_proxy_0001' } });
  assert.equal(c.status, 200, JSON.stringify(c.json));
  const att = c.json.attempt_id, lease = c.json.lease.lease_id;
  const s = await req(env, 'POST', `/exam/v1/attempts/${att}/modules/lesen/start`, { cookie: u.cookie, body: { lease_id: lease, request_id: 'rq_proxy_0002' } });
  assert.equal(s.status, 200);
  const p = await req(env, 'GET', `/exam/v1/attempts/${att}/modules/lesen/package?lease_id=${lease}`, { cookie: u.cookie });
  assert.equal(p.status, 200); assert.equal(p.json.package.test_content, true);
  assert.equal(/"correct"/.test(p.buf.toString('utf8')), false);
  const bad = await req(env, 'POST', `/exam/v1/attempts/${att}/modules/hoeren/start`, { cookie: u.cookie, body: { lease_id: lease, request_id: 'rq_proxy_0003' } });
  assert.equal(bad.status, 409); assert.equal(bad.json.error, 'module_locked');
});

test('EXAM PROXY: media is forwarded without a session (signed token is the capability)', async () => {
  const { env, exam } = makeEnv();
  const u = await signup(env);
  await grant(exam.env, u.id);
  const c = await req(env, 'POST', '/exam/v1/attempts', { cookie: u.cookie, body: { mode: 'synthetic_full', level: 'b1', request_id: 'rq_media_0001', device_id: 'dev_media_0001' } });
  const att = c.json.attempt_id, lease = c.json.lease.lease_id;
  const body = (n, extra = {}) => ({ lease_id: lease, request_id: `rq_media_000${n}`, ...extra });
  await req(env, 'POST', `/exam/v1/attempts/${att}/modules/lesen/start`, { cookie: u.cookie, body: body(2) });
  await req(env, 'POST', `/exam/v1/attempts/${att}/modules/lesen/submit`, { cookie: u.cookie, body: body(3) });
  await req(env, 'POST', `/exam/v1/attempts/${att}/modules/hoeren/start`, { cookie: u.cookie, body: body(4) });
  const m = await req(env, 'POST', `/exam/v1/attempts/${att}/media`, { cookie: u.cookie, body: body(5, { asset_id: 'ast:syn-h1-t1' }) });
  assert.equal(m.status, 200, JSON.stringify(m.json));
  const f = await req(env, 'GET', m.json.url, {});
  assert.equal(f.status, 200); assert.equal(f.headers.get('content-type'), 'audio/wav');
  assert.equal(f.headers.get('cache-control'), 'private, no-store');
});

test('EXAM PROXY: exam Worker failure → 502 JSON with CORS; missing proxy secret → 503', async () => {
  const { env } = makeEnv({ EXAM: { async fetch() { throw new TypeError('boom'); } } });
  const u = await signup(env);
  const r = await req(env, 'GET', '/exam/v1/availability', { cookie: u.cookie });
  assert.equal(r.status, 502); assert.equal(r.json.error, 'exam_unavailable');
  assert.equal(r.headers.get('access-control-allow-origin'), SITE);
  const n = makeEnv({ EXAM_PROXY_SECRET: undefined });
  assert.equal((await req(n.env, 'GET', '/exam/v1/availability')).status, 503);
});

test('EXAM PROXY: existing routes are untouched when exam routes are on', async () => {
  const { env, seen } = makeEnv();
  const root = await req(env, 'GET', '/');
  assert.equal(root.status, 200); assert.equal(root.json.service, 'klarweg-access');
  assert.equal((await req(env, 'GET', '/auth/me')).status, 401);
  assert.equal((await req(env, 'GET', '/examples')).status, 404);   // prefix match is /exam/ only
  assert.equal(seen.length, 0);
});
