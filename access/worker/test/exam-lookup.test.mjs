/* Exam admin lookup by learner email, across the real boundary: klarweg-access resolves the email (it alone stores
   emails) and forwards only the result; klarweg-exam decides who may look up (exam_admin + fresh second factor), rate-
   limits, audits without the email, and returns the minimum. Then the audited grant/revoke flow. */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import examWorker from '../../../exam-worker/src/index.js';
import { createD1 } from './d1-sqlite.mjs';
import { makeEnv as makeExamEnv, role, rid, dev, PROXY_SECRET, PRACTICE_FORM_DIR } from '../../../exam-worker/test/harness.mjs';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://reegangandhi16-pixel.github.io';
const API = 'https://klarweg-access.example.workers.dev';
const ctx = { waitUntil() {} };
const LOOKUP = '/exam/v1/admin/access/lookup';

function makeEnv() {
  const exam = makeExamEnv({ formDirs: [PRACTICE_FORM_DIR] });
  const forwarded = [];
  const EXAM = { async fetch(r) { forwarded.push({ path: new URL(r.url).pathname, lookup: r.headers.get('x-kw-lookup-user'), body: r.method === 'POST' ? r.clone().text() : null }); return examWorker.fetch(r, exam.env); } };
  return { env: { DB: createD1(WORKER_DIR), RATE_SALT: 'test-salt', CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1234567890', CASHFREE_SECRET_KEY: 'cfsk_test',
    EXAM_ROUTES: 'on', EXAM, EXAM_PROXY_SECRET: PROXY_SECRET, TOTP_ENC_KEY: crypto.randomBytes(32).toString('base64') }, exam, forwarded };
}
async function req(env, method, pathname, { cookie, body, raw, headers = {} } = {}) {
  const h = { 'CF-Connecting-IP': '203.0.113.' + Math.floor(Math.random() * 200), origin: SITE, ...headers };
  if (cookie) h.cookie = cookie;
  if (body !== undefined || raw !== undefined) h['content-type'] = 'application/json';
  const res = await worker.fetch(new Request(API + pathname, { method, headers: h, body: raw !== undefined ? raw : body === undefined ? undefined : JSON.stringify(body) }), env, ctx);
  let json = null; try { json = JSON.parse(await res.text()); } catch {}
  return { status: res.status, json };
}
async function signup(env, email) {
  const r = await req(env, 'POST', '/auth/signup', { body: { email, password: 'correct-horse-9', name: 'T' } });
  assert.equal(r.status, 201, JSON.stringify(r.json));
  return { cookie: r.headers?.get?.('set-cookie') || null, id: r.json.user.id, email };
}
async function setup() {
  const h = makeEnv();
  const mk = async (email) => {
    const res = await worker.fetch(new Request(API + '/auth/signup', { method: 'POST', headers: { 'content-type': 'application/json', origin: SITE, 'CF-Connecting-IP': '203.0.113.9' },
      body: JSON.stringify({ email, password: 'correct-horse-9', name: 'T' }) }), h.env, ctx);
    const json = await res.json();
    assert.equal(res.status, 201, JSON.stringify(json));
    return { cookie: res.headers.get('set-cookie').split(';')[0], id: json.user.id, email };
  };
  const admin = await mk(`admin${Date.now()}@example.com`), learner = await mk(`lea.rner${Date.now()}@example.com`), rater = await mk(`rater${Date.now()}@example.com`);
  await role(h.exam.env, admin.id, 'exam_admin'); await role(h.exam.env, rater.id, 'lead_rater');
  // the exam Worker judges freshness on ITS clock (the test harness runs at a fixed date)
  const verify = (u, at = Math.floor(h.exam.clock.t / 1000)) => h.env.DB.prepare('UPDATE sessions SET mfa_verified_at = ?2 WHERE user_id = ?1').bind(u.id, at).run();
  await verify(admin); await verify(rater);
  return { ...h, admin, learner, rater, verify };
}
const lookup = (h, actor, email, extra = {}) => req(h.env, 'POST', LOOKUP, { cookie: actor.cookie, body: { email }, ...extra });

test('ADMIN LOOKUP: an exam admin finds a learner by email (case/space-insensitive); only id + account date; the email never reaches the exam Worker; audited without it', async () => {
  const h = await setup();
  const r = await lookup(h, h.admin, `  ${h.learner.email.toUpperCase()} `);
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.deepEqual(Object.keys(r.json).sort(), ['account_created', 'ok', 'user_id']);
  assert.equal(r.json.user_id, h.learner.id);
  assert.ok(Number.isInteger(r.json.account_created));
  const fwd = h.forwarded.find((f) => f.path === LOOKUP);
  assert.equal(fwd.lookup, h.learner.id);
  assert.equal(await fwd.body, '{}', 'the email is not forwarded');
  const audit = (await h.exam.env.DB.prepare("SELECT actor, detail_json FROM audit_log WHERE action = 'access_lookup'").all()).results;
  assert.deepEqual(audit.map((a) => [a.actor, JSON.parse(a.detail_json)]), [[h.admin.id, { found: true, user_id: h.learner.id }]]);
  assert.equal(/@/.test(JSON.stringify((await h.exam.env.DB.prepare('SELECT detail_json FROM audit_log').all()).results)), false, 'no email stored in the exam audit');
});

test('ADMIN LOOKUP: unknown email → 404 (audited as not found); malformed input → 400 before any lookup', async () => {
  const h = await setup();
  const r = await lookup(h, h.admin, 'nobody-here@example.com');
  assert.equal(r.status, 404); assert.equal(r.json.error, 'user_not_found');
  assert.deepEqual(JSON.parse((await h.exam.env.DB.prepare("SELECT detail_json FROM audit_log WHERE action = 'access_lookup'").first()).detail_json), { found: false });
  for (const bad of ['', 'no-at-sign', 'a@b', `${'x'.repeat(250)}@example.com`, 'two@@example.com', 'sp ace@example.com', 42, null]) {
    const b = await lookup(h, h.admin, bad);
    assert.equal(b.status, 400, String(bad)); assert.equal(b.json.error, 'invalid_email');
  }
  assert.equal((await req(h.env, 'POST', LOOKUP, { cookie: h.admin.cookie, raw: '{not json' })).json.error, 'invalid_email');
});

test('ADMIN LOOKUP (no enumeration): learners and raters get the same refusal for an existing and an unknown email; signed-out → 401', async () => {
  const h = await setup();
  for (const actor of [h.learner, h.rater]) {
    const known = await lookup(h, actor, h.admin.email), unknown = await lookup(h, actor, 'ghost@example.com');
    assert.equal(known.status, 403); assert.deepEqual(known.json, unknown.json, 'identical answer whether or not the account exists');
    assert.equal(known.json.error, 'exam_admin_required');
  }
  assert.equal((await lookup(h, { cookie: null }, h.learner.email)).status, 401);
  assert.equal((await h.exam.env.DB.prepare("SELECT COUNT(*) AS n FROM audit_log WHERE action = 'access_lookup'").first()).n, 0, 'refused calls are not lookups');
});

test('ADMIN LOOKUP: the second factor must be fresh (none or 13 h old → mfa_required)', async () => {
  const h = await setup();
  await h.env.DB.prepare('UPDATE sessions SET mfa_verified_at = NULL WHERE user_id = ?1').bind(h.admin.id).run();
  assert.equal((await lookup(h, h.admin, h.learner.email)).json.error, 'mfa_required');
  await h.verify(h.admin, Math.floor(h.exam.clock.t / 1000) - 13 * 3600);
  assert.equal((await lookup(h, h.admin, h.learner.email)).json.error, 'mfa_required');
});

test('ADMIN LOOKUP: rate-limited per administrator; a browser-sent x-kw-lookup-user header is ignored', async () => {
  const h = await setup();
  const forged = await lookup(h, h.admin, 'ghost@example.com', { headers: { 'x-kw-lookup-user': h.learner.id } });
  assert.equal(forged.status, 404, 'the forged header never reaches the exam Worker');
  for (let i = 1; i < 20; i++) assert.notEqual((await lookup(h, h.admin, h.learner.email)).status, 429, `lookup ${i + 1}`);
  const over = await lookup(h, h.admin, h.learner.email);
  assert.equal(over.status, 429); assert.equal(over.json.error, 'rate_limited');
});

test('ADMIN LOOKUP → grant → revoke through the proxy: the found learner gets access, then loses it; every step audited', async () => {
  const h = await setup();
  const create = () => req(h.env, 'POST', '/exam/v1/attempts', { cookie: h.learner.cookie, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: dev() } });
  assert.equal((await create()).json.error, 'exam_access_required');
  const found = (await lookup(h, h.admin, h.learner.email)).json.user_id;
  const g = await req(h.env, 'POST', '/exam/v1/admin/access/grants', { cookie: h.admin.cookie, body: { user_id: found, level: 'b1', scope: 'synthetic', reason: 'Pilot nach E-Mail-Suche' } });
  assert.equal(g.status, 200, JSON.stringify(g.json));
  assert.equal((await create()).status, 200, 'the learner can start');
  const rv = await req(h.env, 'POST', `/exam/v1/admin/access/grants/${g.json.grant.grant_id}/revoke`, { cookie: h.admin.cookie, body: { reason: 'Pilot beendet' } });
  assert.equal(rv.status, 200);
  const view = await req(h.env, 'GET', `/exam/v1/admin/access?user_id=${found}`, { cookie: h.admin.cookie });
  assert.deepEqual(view.json.audit.map((a) => a.action), ['access_revoked', 'access_granted']);
  assert.deepEqual((await h.exam.env.DB.prepare("SELECT action FROM audit_log WHERE action LIKE 'access_%' ORDER BY id").all()).results.map((r) => r.action),
    ['access_lookup', 'access_granted', 'access_revoked']);
});
