/* media-images.js — paid vocabulary illustrations: per-level entitlement of
   the chapters that use each image, fail-closed, no existence oracle,
   private no-store, klarweg.in only. Unauthorized, expired, revoked
   (entitlement and session), wrong-level, Lifetime, enumeration. */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { createD1 } from './d1-sqlite.mjs';
import { _resetImageCache, IMG_KEY } from '../src/media-images.js';
import { _resetMediaCache } from '../src/media.js';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://klarweg.in';
const ctx = { waitUntil() {} };
const ID_A1 = 'a1a1a1a1a1a1a1a1a1a1';          // used only by A1 paid chapters
const ID_A1B1 = 'b1b1b1b1b1b1b1b1b1b1';        // shared by A1 and B1 chapters
const ID_C2 = 'c2c2c2c2c2c2c2c2c2c2';
const ID_UNLISTED = 'dddddddddddddddddddd';     // in the bucket, not in levels.json
const LEVELS = { [ID_A1]: ['A1'], [ID_A1B1]: ['A1', 'B1'], [ID_C2]: ['C2'] };

function bucket({ levels = JSON.stringify(LEVELS), throwOnLevels = false } = {}) {
  const files = new Map();
  for (const id of [ID_A1, ID_A1B1, ID_C2, ID_UNLISTED]) for (const w of [400, 800]) for (const f of ['avif', 'webp']) files.set(`vocab-img/${id}-${w}.${f}`, `IMG:${id}:${w}:${f}`);
  const calls = [];
  return {
    calls,
    async head(k) { calls.push(['head', k]); const v = files.get(k); return v == null ? null : { size: v.length, httpEtag: '"e"' }; },
    async get(k) {
      calls.push(['get', k]);
      if (k === 'vocab-img/levels.json') { if (throwOnLevels) throw new Error('r2 down'); return levels == null ? null : { async text() { return levels; } }; }
      const v = files.get(k); return v == null ? null : { size: v.length, httpEtag: '"e"', body: new Blob([Buffer.from(v)]).stream() };
    },
  };
}
function makeEnv(over = {}) {
  _resetImageCache(); _resetMediaCache();
  return { DB: createD1(WORKER_DIR), CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1234567890', CASHFREE_SECRET_KEY: 'cfsk_test', RATE_SALT: 'test-salt', MEDIA: bucket(), ...over };
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
async function img(env, id, { cookie, w = 400, f = 'avif', method = 'GET', base = SITE + '/api/media/', referer = SITE + '/chapter/x.html', raw } = {}) {
  const h = {}; if (referer) h.referer = referer; if (cookie) h.cookie = cookie;
  const res = await worker.fetch(new Request(base + (raw || `vocab-img/${id}-${w}.${f}`), { method, headers: h }), env, ctx);
  return { status: res.status, h: res.headers, text: Buffer.from(await res.arrayBuffer()).toString('utf8') };
}

test('key rule: opaque 20-hex id, 400/800, avif/webp only', () => {
  assert.ok(IMG_KEY.test(`vocab-img/${ID_A1}-400.avif`));
  for (const bad of [`vocab-img/${ID_A1}-401.avif`, `vocab-img/${ID_A1}-400.png`, 'vocab-img/der-hund--dog-400.avif', `vocab-img/../${ID_A1}-400.avif`, 'vocab-img/levels.json', `vocab-img/${ID_A1.toUpperCase()}-400.avif`]) assert.ok(!IMG_KEY.test(bad), bad);
});

test('malformed keys and the levels map itself → 404 with no bucket read', async () => {
  const env = makeEnv();
  for (const raw of ['vocab-img/levels.json', 'vocab-img/der-hund--dog-400.avif', `vocab-img/${ID_A1}-400.png`, `vocab-img/..%2F${ID_A1}-400.avif`, `vocab-img/${ID_A1}-400.avif%00`]) {
    assert.equal((await img(env, null, { raw })).status, 404, raw);
  }
  assert.equal(env.MEDIA.calls.length, 0);
});

test('signed out → 401 for existing, unlisted and missing images alike (no read of the image)', async () => {
  const env = makeEnv();
  for (const id of [ID_A1, ID_UNLISTED, 'eeeeeeeeeeeeeeeeeeee']) assert.equal((await img(env, id)).status, 401, id);
  assert.ok(!env.MEDIA.calls.some((c) => c[1].endsWith('.avif')));
});

test('only klarweg.in: workers.dev → 404; foreign Referer → 403', async () => {
  const env = makeEnv(); const u = await signup(env); await grant(env, u.id, 'A1');
  assert.equal((await img(env, ID_A1, { cookie: u.cookie, base: 'https://klarweg-access.example.workers.dev/media/' })).status, 404);
  assert.equal((await img(env, ID_A1, { cookie: u.cookie, referer: 'https://evil.example/' })).status, 403);
});

test('right level → 200, private no-store, correct type; wrong level → 403', async () => {
  const env = makeEnv(); const u = await signup(env); await grant(env, u.id, 'A1');
  const ok = await img(env, ID_A1, { cookie: u.cookie });
  assert.equal(ok.status, 200);
  assert.equal(ok.text, `IMG:${ID_A1}:400:avif`);
  assert.equal(ok.h.get('cache-control'), 'private, no-store');
  assert.equal(ok.h.get('content-type'), 'image/avif');
  assert.equal(ok.h.get('x-content-type-options'), 'nosniff');
  assert.equal(ok.h.get('cross-origin-resource-policy'), 'same-origin');
  assert.equal((await img(env, ID_A1, { cookie: u.cookie, w: 800, f: 'webp' })).h.get('content-type'), 'image/webp');
  assert.equal((await img(env, ID_C2, { cookie: u.cookie })).status, 403, 'A1 buyer cannot see a C2 image');
});

test('shared image: authorized through any level that uses it, never through others', async () => {
  const env = makeEnv();
  const b1 = await signup(env); await grant(env, b1.id, 'B1');
  const c2 = await signup(env); await grant(env, c2.id, 'C2');
  assert.equal((await img(env, ID_A1B1, { cookie: b1.cookie })).status, 200, 'B1 buyer sees the A1+B1 image');
  assert.equal((await img(env, ID_A1, { cookie: b1.cookie })).status, 403, 'B1 buyer cannot see an A1-only image');
  assert.equal((await img(env, ID_A1B1, { cookie: c2.cookie })).status, 403, 'C2 buyer cannot see an A1+B1 image');
});

test('Lifetime → every listed image; still nothing unlisted', async () => {
  const env = makeEnv(); const u = await signup(env); await grant(env, u.id, 'LIFETIME');
  for (const id of [ID_A1, ID_A1B1, ID_C2]) assert.equal((await img(env, id, { cookie: u.cookie })).status, 200, id);
  assert.equal((await img(env, ID_UNLISTED, { cookie: u.cookie })).status, 403);
});

test('expired entitlement → 403; revoked entitlement → 403; revoked session → 401', async () => {
  const env = makeEnv();
  const ex = await signup(env); await grant(env, ex.id, 'A1', Math.floor(Date.now() / 1000) - 60);
  assert.equal((await img(env, ID_A1, { cookie: ex.cookie })).status, 403, 'expired');
  const rv = await signup(env); await grant(env, rv.id, 'A1');
  assert.equal((await img(env, ID_A1, { cookie: rv.cookie })).status, 200);
  await env.DB.prepare('DELETE FROM user_entitlements WHERE user_id = ?1').bind(rv.id).run();
  assert.equal((await img(env, ID_A1, { cookie: rv.cookie })).status, 403, 'revoked entitlement');
  const so = await signup(env); await grant(env, so.id, 'A1');
  const out = await worker.fetch(new Request(SITE + '/api/auth/logout', { method: 'POST', headers: { cookie: so.cookie, origin: SITE } }), env, ctx);
  assert.ok(out.status < 400, 'logout ' + out.status);
  assert.equal((await img(env, ID_A1, { cookie: so.cookie })).status, 401, 'revoked session');
  assert.equal((await img(env, ID_A1, { cookie: 'kw_session=forged' })).status, 401, 'forged cookie');
});

test('no existence oracle: unlisted, missing and wrong-level answer the same 403', async () => {
  const env = makeEnv(); const u = await signup(env); await grant(env, u.id, 'A1');
  const a = await img(env, ID_UNLISTED, { cookie: u.cookie });
  const b = await img(env, 'ffffffffffffffffffff', { cookie: u.cookie });
  const c = await img(env, ID_C2, { cookie: u.cookie });
  assert.deepEqual([a.status, b.status, c.status], [403, 403, 403]);
  assert.equal(a.text, b.text); assert.equal(b.text, c.text);
  // a listed level whose file is missing in the bucket also answers 403
  const env2 = makeEnv({ MEDIA: bucket({ levels: JSON.stringify({ ...LEVELS, ffffffffffffffffffff: ['A1'] }) }) });
  const u2 = await signup(env2); await grant(env2, u2.id, 'A1');
  assert.equal((await img(env2, 'ffffffffffffffffffff', { cookie: u2.cookie })).status, 403);
});

test('fail closed: levels map missing, unreadable, malformed, or R2 error → 503; no binding → 503', async () => {
  for (const MEDIA of [bucket({ levels: null }), bucket({ levels: '{not json' }), bucket({ levels: '[]' }), bucket({ throwOnLevels: true })]) {
    const env = makeEnv({ MEDIA }); const u = await signup(env); await grant(env, u.id, 'LIFETIME');
    assert.equal((await img(env, ID_A1, { cookie: u.cookie })).status, 503);
  }
  const env = makeEnv({ MEDIA: undefined });
  assert.equal((await img(env, ID_A1)).status, 503);
});

test('levels map entries with unknown level names grant nothing', async () => {
  const env = makeEnv({ MEDIA: bucket({ levels: JSON.stringify({ [ID_A1]: ['LIFETIME', 'ANY', '*'] }) }) });
  const u = await signup(env); await grant(env, u.id, 'LIFETIME');
  assert.equal((await img(env, ID_A1, { cookie: u.cookie })).status, 403);
});

test('HEAD reads no body and keeps the same authorization', async () => {
  const env = makeEnv(); const u = await signup(env); await grant(env, u.id, 'A1');
  const h = await img(env, ID_A1, { cookie: u.cookie, method: 'HEAD' });
  assert.equal(h.status, 200); assert.equal(h.text, '');
  assert.ok(!env.MEDIA.calls.some((c) => c[0] === 'get' && c[1].endsWith('.avif')));
  assert.equal((await img(env, ID_C2, { cookie: u.cookie, method: 'HEAD' })).status, 403);
});

test('existing audio routes are untouched by the image route', async () => {
  const env = makeEnv(); const u = await signup(env); await grant(env, u.id, 'LIFETIME');
  const r = await worker.fetch(new Request(SITE + '/api/media/vocab-img-not/x.mp3', { headers: { cookie: u.cookie } }), env, ctx);
  assert.equal(r.status, 404);
});
