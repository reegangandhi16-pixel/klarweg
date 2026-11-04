/* saved-lexicon.js — GET /api/saved-words/lexicon: dictionary entries for the
   signed-in user's OWN saved words, only with an active purchase. Synthetic
   accounts in a local SQLite D1; synthetic shards. */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { createD1 } from './d1-sqlite.mjs';
import { shardOf, normKey, SHARDS, _resetLexiconCache } from '../src/saved-lexicon.js';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://klarweg.in';
const ctx = { waitUntil() {} };

const G = {
  haus: { w: 'das Haus', en: 'house', hi: 'घर' },
  apfel: { w: 'der Apfel', en: 'apple' },
  geheim: { w: 'geheim', en: 'secret (not saved by anyone)' },
  gehen: { w: 'gehen', en: 'to go' },
};
const I = { ging: 'gehen' };
function shardBucket({ broken = false } = {}) {
  const shards = Array.from({ length: SHARDS }, () => ({ G: {}, I: {} }));
  for (const [k, v] of Object.entries(G)) shards[shardOf(k)].G[k] = v;
  for (const [k, v] of Object.entries(I)) shards[shardOf(k)].I[k] = v;
  const reads = [];
  return {
    reads,
    async get(k) {
      reads.push(k);
      const m = /^chapters\/r4\/lexicon\/(\d\d)\.json$/.exec(k);
      if (!m || broken) return null;
      const s = shards[Number(m[1])];
      return { async json() { return JSON.parse(JSON.stringify(s)); } };
    },
  };
}
function makeEnv(over = {}) {
  _resetLexiconCache();
  return {
    DB: createD1(WORKER_DIR),
    CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1234567890', CASHFREE_SECRET_KEY: 'cfsk_test', RATE_SALT: 'test-salt',
    RESOURCES: shardBucket(), CHAPTER_RELEASE: 'r4',
    ...over,
  };
}
async function signup(env) {
  const res = await worker.fetch(new Request(SITE + '/api/auth/signup', {
    method: 'POST', headers: { 'content-type': 'application/json', origin: SITE, 'CF-Connecting-IP': '198.51.100.' + Math.floor(Math.random() * 200) },
    body: JSON.stringify({ email: `u${Math.random().toString(36).slice(2)}@example.com`, password: 'correct-horse-9', name: 'Test' }),
  }), env, ctx);
  const body = await res.json();
  assert.equal(res.status, 201, JSON.stringify(body));
  return { id: body.user.id, cookie: res.headers.get('set-cookie').split(';')[0] };
}
async function grant(env, userId, product, expiresAt = null) {
  await env.DB.prepare('INSERT INTO user_entitlements (user_id, product_id, granted_at, expires_at) VALUES (?1, ?2, ?3, ?4)')
    .bind(userId, product, Math.floor(Date.now() / 1000), expiresAt).run();
}
async function save(env, cookie, de) {
  const res = await worker.fetch(new Request(SITE + '/api/saved-words', {
    method: 'POST', headers: { 'content-type': 'application/json', origin: SITE, cookie },
    body: JSON.stringify({ de, en: '', level: 'A1' }),
  }), env, ctx);
  assert.equal(res.status, 201, de);
}
async function lexicon(env, cookie) {
  const h = { origin: SITE };
  if (cookie) h.cookie = cookie;
  const res = await worker.fetch(new Request(SITE + '/api/saved-words/lexicon', { headers: h }), env, ctx);
  return { status: res.status, h: res.headers, body: await res.json() };
}

test('shard function matches scripts/lexicon-split.mjs (fixed vectors)', () => {
  assert.deepEqual(['apfel', 'haus', 'größe', 'ab und zu'].map((k) => shardOf(k)), [31, 18, 26, 44]);
  assert.equal(normKey('Das Haus.'), 'haus');
  assert.equal(normKey('der Apfel!'), 'apfel');   // same as review.html lex()
});

test('signed out → 401, no shard read', async () => {
  const env = makeEnv();
  const r = await lexicon(env, null);
  assert.equal(r.status, 401);
  assert.equal(r.h.get('cache-control'), 'private, no-store');
  assert.equal(env.RESOURCES.reads.length, 0);
});

test('signed in without a purchase, or expired → empty, no shard read', async () => {
  const env = makeEnv();
  const u = await signup(env);
  await save(env, u.cookie, 'das Haus');
  let r = await lexicon(env, u.cookie);
  assert.equal(r.status, 200);
  assert.deepEqual(r.body, { ok: true, entries: {} });
  await grant(env, u.id, 'A1', Math.floor(Date.now() / 1000) - 60);
  r = await lexicon(env, u.cookie);
  assert.deepEqual(r.body.entries, {});
  assert.equal(env.RESOURCES.reads.length, 0);
});

test('active level: only the user\'s own saved words, inflection → lemma under the saved key', async () => {
  const env = makeEnv();
  const u = await signup(env), other = await signup(env);
  await grant(env, u.id, 'A1');
  await grant(env, other.id, 'B2');
  await save(env, u.cookie, 'das Haus');
  await save(env, u.cookie, 'ging');
  await save(env, u.cookie, 'unbekanntwort');
  await save(env, other.cookie, 'geheim');
  const r = await lexicon(env, u.cookie);
  assert.equal(r.status, 200);
  assert.equal(r.h.get('cache-control'), 'private, no-store');
  assert.deepEqual(Object.keys(r.body.entries).sort(), ['ging', 'haus']);
  assert.deepEqual(r.body.entries.haus, G.haus);
  assert.deepEqual(r.body.entries.ging, G.gehen);
  assert.ok(!('geheim' in r.body.entries), 'another user\'s saved word never leaks');
  const o = await lexicon(env, other.cookie);
  assert.deepEqual(Object.keys(o.body.entries), ['geheim']);
});

test('Lifetime counts as an active purchase', async () => {
  const env = makeEnv();
  const u = await signup(env);
  await grant(env, u.id, 'LIFETIME');
  await save(env, u.cookie, 'Apfel');
  const r = await lexicon(env, u.cookie);
  assert.deepEqual(r.body.entries, { apfel: G.apfel });
});

test('logout revokes the lookup', async () => {
  const env = makeEnv();
  const u = await signup(env);
  await grant(env, u.id, 'A1');
  await save(env, u.cookie, 'das Haus');
  assert.equal((await lexicon(env, u.cookie)).status, 200);
  await worker.fetch(new Request(SITE + '/api/auth/logout', { method: 'POST', headers: { origin: SITE, cookie: u.cookie } }), env, ctx);
  assert.equal((await lexicon(env, u.cookie)).status, 401);
});

test('unreadable shard or unconfigured release → 503', async () => {
  for (const over of [{ RESOURCES: shardBucket({ broken: true }) }, { CHAPTER_RELEASE: '' }, { RESOURCES: undefined }]) {
    const env = makeEnv(over);
    const u = await signup(env);
    await grant(env, u.id, 'A1');
    await save(env, u.cookie, 'das Haus');
    assert.equal((await lexicon(env, u.cookie)).status, 503, JSON.stringify(Object.keys(over)));
  }
});
