/* media.js — klarweg.in/api/media/<key>: policy classes, key validation,
   Range/HEAD/304, the signed media pass (issue, scope, expiry, re-check,
   session binding, logout) and cache headers. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { createD1 } from './d1-sqlite.mjs';
import { shardOf, _resetPolicyCache, parseRange, levelsMask, grants, PASS_TTL_SECONDS, RECHECK_SECONDS } from '../src/media.js';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://klarweg.in';
const MEDIA = SITE + '/api/media/';
const SECRET = 'test-media-pass-secret-0123456789abcdef';
const ctx = { waitUntil() {} };

/* ---------- fixtures: audio bucket + sharded policy ---------- */
const AUDIO = {
  'story/A1_001_S001.mp3': 'free-a1-chapter-1',
  'words/female/aaaa000000000001.mp3': 'free-word',
  'story/A1_017_S003.mp3': 'paid-a1-17-' + 'x'.repeat(1000),
  'speaking/B2_009_P001.mp3': 'paid-b2-9',
  'story/A1_001_S099.mp3': 'free-chapter-file-not-on-free-list',
  'words/female/bbbb000000000002.mp3': 'paid-word',
  'vocab/audio/female/geben.mp3': 'paid-word-2',
  'words/female/cccc000000000003.mp3': 'unreferenced',
  'dialogues/dddd.mp3': 'unclassified',
  'vocab/audio/female/café.mp3': 'paid-word-accent',
};
const POLICY = {
  free: ['story/A1_001_S001.mp3', 'words/female/aaaa000000000001.mp3'],
  manifest: ['a1-words-manifest.json'],
  deny: ['words/female/cccc000000000003.mp3'],
  chapters: { A1_001: 'a1-1-alphabet', A1_017: 'a1-17-goethe2', B2_009: 'b2-09-passiv' },
  freeChapters: ['a1-1-alphabet'],
};
const SHARDS = 8;
function policyObjects(release = 'm1') {
  const o = new Map();
  o.set(`media-policy/${release}/head.json`, Buffer.from(JSON.stringify({ schema: 1, shards: SHARDS, chapters: POLICY.chapters, freeChapters: POLICY.freeChapters })));
  for (let i = 0; i < SHARDS; i++) {
    const pick = (a) => a.filter((k) => shardOf(k, SHARDS) === i);
    o.set(`media-policy/${release}/shard-${String(i).padStart(2, '0')}.json`, Buffer.from(JSON.stringify({ free: pick(POLICY.free), manifest: pick(POLICY.manifest), deny: pick(POLICY.deny) })));
  }
  return o;
}
function jsonBucket(objects) {
  return { reads: 0, async get(k) { this.reads++; const b = objects.get(k); return b ? { async json() { return JSON.parse(b.toString('utf8')); } } : null; } };
}
function audioBucket() {
  const calls = [];
  const etag = (k) => '"' + Buffer.from(k).toString('hex').slice(0, 16) + '"';
  return {
    calls,
    async head(k) { calls.push(['head', k]); const v = AUDIO[k]; return v == null ? null : { size: Buffer.byteLength(v), httpEtag: etag(k) }; },
    async get(k, opts) {
      calls.push(['get', k, opts]); const v = AUDIO[k]; if (v == null) return null;
      let b = Buffer.from(v);
      if (opts && opts.range) b = b.subarray(opts.range.offset, opts.range.offset + opts.range.length);
      return { body: new Blob([b]).stream() };
    },
  };
}
function makeEnv(over = {}) {
  _resetPolicyCache();
  return {
    DB: createD1(WORKER_DIR),
    CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1234567890', CASHFREE_SECRET_KEY: 'cfsk_test', RATE_SALT: 'test-salt',
    MEDIA: audioBucket(), RESOURCES: jsonBucket(policyObjects()), MEDIA_POLICY_RELEASE: 'm1', MEDIA_PASS_SECRET: SECRET,
    ...over,
  };
}
/* Count D1 statements, to prove the pass avoids the database. */
function countDb(env) { const db = env.DB, n = { q: 0 }; env.DB = new Proxy(db, { get(t, p) { if (p === 'prepare') return (...a) => { n.q++; return t.prepare(...a); }; const v = t[p]; return typeof v === 'function' ? v.bind(t) : v; } }); return n; }

class Jar {                                     // minimal browser cookie jar: name, path, expiry
  constructor() { this.c = new Map(); }
  take(res, now = Date.now()) {
    for (const sc of res.headers.getSetCookie()) {
      const [nv, ...attrs] = sc.split(';').map((s) => s.trim());
      const [name, ...v] = nv.split('='); const a = Object.fromEntries(attrs.map((x) => { const [k, ...r] = x.split('='); return [k.toLowerCase(), r.join('=') || true]; }));
      const maxAge = Number(a['max-age']);
      if (maxAge <= 0) { this.c.delete(name + '|' + a.path); continue; }
      this.c.set(name + '|' + a.path, { name, value: v.join('='), path: a.path, exp: now + maxAge * 1000, attrs: a });
    }
  }
  header(url, now = Date.now()) {
    const p = new URL(url).pathname;
    return [...this.c.values()].filter((x) => x.exp > now && (p === x.path || p.startsWith(x.path.endsWith('/') ? x.path : x.path + '/'))).map((x) => `${x.name}=${x.value}`).join('; ');
  }
  get(name) { return [...this.c.values()].find((x) => x.name === name); }
}
async function signup(env, jar) {
  const res = await worker.fetch(new Request(SITE + '/api/auth/signup', {
    method: 'POST', headers: { 'content-type': 'application/json', origin: SITE, 'CF-Connecting-IP': '198.51.100.' + Math.floor(Math.random() * 200) },
    body: JSON.stringify({ email: `u${Math.random().toString(36).slice(2)}@example.com`, password: 'correct-horse-9', name: 'Test' }),
  }), env, ctx);
  const body = await res.json();
  assert.equal(res.status, 201, JSON.stringify(body));
  jar.take(res);
  return body.user.id;
}
async function grant(env, userId, product, expiresAt = null) {
  await env.DB.prepare('INSERT INTO user_entitlements (user_id, product_id, granted_at, expires_at) VALUES (?1, ?2, ?3, ?4)')
    .bind(userId, product, Math.floor(Date.now() / 1000), expiresAt).run();
}
async function media(env, key, { jar, method = 'GET', headers = {}, base = MEDIA, referer = SITE + '/chapter/x.html' } = {}) {
  const url = base + key;
  const h = { ...headers };
  if (referer) h.referer = referer;
  if (jar) { const c = jar.header(url); if (c) h.cookie = c; }
  const res = await worker.fetch(new Request(url, { method, headers: h }), env, ctx);
  if (jar) jar.take(res);
  const buf = Buffer.from(await res.arrayBuffer());
  return { status: res.status, h: res.headers, text: buf.toString('utf8'), res };
}
function withClock(offsetSeconds, fn) {
  const real = Date.now; Date.now = () => real() + offsetSeconds * 1000;
  return Promise.resolve().then(fn).finally(() => { Date.now = real; });
}

/* ---------- pure helpers ---------- */
test('shardOf matches the policy builder (FNV-1a 32-bit) on fixed vectors', () => {
  // Same vectors are asserted in scripts/media-policy.test.mjs.
  assert.equal(shardOf('', 64), 0x811c9dc5 % 64);
  assert.equal(shardOf('story/A1_017_S003.mp3', 64), 25);
  assert.equal(shardOf('vocab/audio/female/café.mp3', 64), 27);
});
test('levels mask and grants', () => {
  assert.equal(levelsMask({ A1: true, B2: true }), 0b001001);
  assert.ok(grants(0b001001, 'B2') && !grants(0b001001, 'A2') && grants(1, 'any') && !grants(0, 'any'));
});
test('parseRange (ported from the audio Worker)', () => {
  assert.equal(parseRange(null, 10), null);
  assert.deepEqual(parseRange('bytes=0-', 10), { offset: 0, length: 10 });
  assert.deepEqual(parseRange('bytes=2-4', 10), { offset: 2, length: 3 });
  assert.deepEqual(parseRange('bytes=-3', 10), { offset: 7, length: 3 });
  assert.deepEqual(parseRange('bytes=10-', 10), { invalid: true });
  assert.equal(parseRange('bytes=0-1,3-4', 10), null);
});

/* ---------- routing and keys ---------- */
test('only klarweg.in: workers.dev answers 404', async () => {
  const env = makeEnv();
  const r = await media(env, 'story/A1_001_S001.mp3', { base: 'https://klarweg-access.example.workers.dev/media/' });
  assert.equal(r.status, 404);
  assert.equal(env.MEDIA.calls.length, 0);
});
test('malformed keys are 404 before any read', async () => {
  const env = makeEnv();
  for (const k of ['..%2Fsecret.mp3', 'story/..%2F..%2Fx.mp3', 'story//A1.mp3', 'a1-words-manifest.json', 'story/A1_001_S001.MP3', '%E0%A4%A.mp3', '/story/A1.mp3', 'story/A1 001.mp3']) {
    const r = await media(env, k);
    assert.equal(r.status, 404, k);
  }
  assert.equal(env.MEDIA.calls.length, 0);
  assert.equal(env.RESOURCES.reads, 0);
});
test('unconfigured (no secret / short secret / bad release) → 503', async () => {
  for (const over of [{ MEDIA_PASS_SECRET: undefined }, { MEDIA_PASS_SECRET: 'short' }, { MEDIA_POLICY_RELEASE: 'r3' }, { MEDIA: undefined }]) {
    const r = await media(makeEnv(over), 'story/A1_001_S001.mp3');
    assert.equal(r.status, 503, JSON.stringify(Object.keys(over)));
    assert.equal(r.h.get('cache-control'), 'private, no-store');
  }
});
test('policy unavailable → 503, and the failure is not cached', async () => {
  const env = makeEnv({ RESOURCES: jsonBucket(new Map()) });
  assert.equal((await media(env, 'story/A1_001_S001.mp3')).status, 503);
  env.RESOURCES = jsonBucket(policyObjects());
  assert.equal((await media(env, 'story/A1_001_S001.mp3')).status, 200);
});

/* ---------- free ---------- */
test('free audio: anyone, public cache, no cookie, no database', async () => {
  const env = makeEnv(); const n = countDb(env);
  const r = await media(env, 'story/A1_001_S001.mp3', { referer: null });
  assert.equal(r.status, 200);
  assert.equal(r.text, AUDIO['story/A1_001_S001.mp3']);
  assert.equal(r.h.get('cache-control'), 'public, max-age=86400');
  assert.equal(r.h.get('content-type'), 'audio/mpeg');
  assert.equal(r.h.get('cross-origin-resource-policy'), 'same-origin');
  assert.equal(r.h.get('set-cookie'), null);
  assert.equal(n.q, 0);
  const w = await media(env, 'words/female/aaaa000000000001.mp3');
  assert.equal(w.h.get('cache-control'), 'public, max-age=31536000, immutable');
});
test('Range → 206, invalid → 416, HEAD reads no body, If-None-Match → 304', async () => {
  const env = makeEnv();
  const key = 'story/A1_001_S001.mp3', size = Buffer.byteLength(AUDIO[key]);
  const r = await media(env, key, { headers: { range: 'bytes=0-3' } });
  assert.equal(r.status, 206); assert.equal(r.text, AUDIO[key].slice(0, 4));
  assert.equal(r.h.get('content-range'), `bytes 0-3/${size}`); assert.equal(r.h.get('accept-ranges'), 'bytes');
  assert.equal((await media(env, key, { headers: { range: `bytes=${size}-` } })).status, 416);
  env.MEDIA.calls.length = 0;
  const hd = await media(env, key, { method: 'HEAD' });
  assert.equal(hd.status, 200); assert.equal(hd.h.get('content-length'), String(size));
  assert.ok(env.MEDIA.calls.every((c) => c[0] === 'head'), 'HEAD never reads the body');
  const etag = r.h.get('etag');
  assert.equal((await media(env, key, { headers: { 'if-none-match': etag } })).status, 304);
});
test('foreign Referer → 403; missing Referer allowed', async () => {
  const env = makeEnv();
  assert.equal((await media(env, 'story/A1_001_S001.mp3', { referer: 'https://evil.example/x' })).status, 403);
  assert.equal((await media(env, 'story/A1_001_S001.mp3', { referer: null })).status, 200);
});
test('lists, deny-listed, unknown-chapter, free-chapter file not on the free list, unclassified → 404', async () => {
  const env = makeEnv();
  const jar = new Jar(); const id = await signup(env, jar); await grant(env, id, 'LIFETIME');
  for (const k of ['words/female/cccc000000000003.mp3', 'story/A1_001_S099.mp3', 'dialogues/dddd.mp3', 'story/C1_044_S001.mp3']) {
    const r = await media(env, k, { jar });
    assert.equal(r.status, 404, k);
    assert.equal(r.h.get('cache-control'), 'private, no-store');
  }
});

/* ---------- paid ---------- */
test('signed out → 401 for paid lesson and word audio, no database lookup of a user', async () => {
  const env = makeEnv(); const n = countDb(env);
  for (const k of ['story/A1_017_S003.mp3', 'words/female/bbbb000000000002.mp3']) {
    const r = await media(env, k);
    assert.equal(r.status, 401); assert.equal(r.h.get('cache-control'), 'private, no-store');
  }
  assert.equal(n.q, 0);
});
test('no purchase → 403 and a pass with the exact scope; pass never sent to other routes', async () => {
  const env = makeEnv(); const jar = new Jar(); await signup(env, jar);
  const r = await media(env, 'story/A1_017_S003.mp3', { jar });
  assert.equal(r.status, 403);
  const sc = r.res.headers.getSetCookie().find((c) => c.startsWith('kw_media='));
  assert.ok(sc, 'pass issued');
  for (const attr of ['Path=/api/media', 'HttpOnly', 'Secure', 'SameSite=Lax', `Max-Age=${PASS_TTL_SECONDS}`]) assert.ok(sc.includes(attr), attr);
  assert.ok(!/Domain=/i.test(sc), 'host-only cookie');
  assert.equal((await media(env, 'words/female/bbbb000000000002.mp3', { jar })).status, 403);
  // Browser path matching: the pass goes to /api/media/* only.
  assert.ok(jar.header(SITE + '/api/media/story/x.mp3').includes('kw_media='));
  for (const u of ['/api/auth/me', '/api/chapters/a1-17-goethe2.js', '/api/progress', '/api/mediax', '/', '/chapter/x.html']) {
    assert.ok(!jar.header(SITE + u).includes('kw_media='), u);
  }
  assert.ok(jar.header(SITE + '/api/auth/me').includes('kw_session='), 'session cookie unchanged (Path=/api)');
});
test('A1 buyer: A1 chapter + word audio 200, B2 chapter 403; second request uses the pass (no database)', async () => {
  const env = makeEnv(); const jar = new Jar(); const id = await signup(env, jar); await grant(env, id, 'A1');
  const r = await media(env, 'story/A1_017_S003.mp3', { jar });
  assert.equal(r.status, 200); assert.equal(r.text, AUDIO['story/A1_017_S003.mp3']);
  assert.equal(r.h.get('cache-control'), 'private, no-store'); assert.equal(r.h.get('vary'), 'Cookie');
  const n = countDb(env);
  assert.equal((await media(env, 'story/A1_017_S003.mp3', { jar, headers: { range: 'bytes=0-9' } })).status, 206);
  assert.equal((await media(env, 'words/female/bbbb000000000002.mp3', { jar })).status, 200);
  assert.equal((await media(env, 'vocab/audio/female/caf%C3%A9.mp3', { jar })).status, 200);
  assert.equal(n.q, 0, 'pass verified without D1');
  assert.equal((await media(env, 'speaking/B2_009_P001.mp3', { jar })).status, 403, 'pass checked < 60 s ago → no re-check');
  assert.equal(n.q, 0);
});
test('Lifetime unlocks every level; expired level does not', async () => {
  const env = makeEnv(); const jar = new Jar(); const id = await signup(env, jar); await grant(env, id, 'LIFETIME');
  assert.equal((await media(env, 'speaking/B2_009_P001.mp3', { jar })).status, 200);
  const env2 = makeEnv(); const jar2 = new Jar(); const id2 = await signup(env2, jar2);
  await grant(env2, id2, 'A1', Math.floor(Date.now() / 1000) - 10);
  assert.equal((await media(env2, 'story/A1_017_S003.mp3', { jar: jar2 })).status, 403);
  assert.equal((await media(env2, 'words/female/bbbb000000000002.mp3', { jar: jar2 })).status, 403);
});
test('purchase is honoured within RECHECK_SECONDS', async () => {
  const env = makeEnv(); const jar = new Jar(); const id = await signup(env, jar);
  assert.equal((await media(env, 'story/A1_017_S003.mp3', { jar })).status, 403);
  await grant(env, id, 'A1');
  assert.equal((await media(env, 'story/A1_017_S003.mp3', { jar })).status, 403, 'within 60 s the negative pass stands');
  await withClock(RECHECK_SECONDS + 1, async () => {
    assert.equal((await media(env, 'story/A1_017_S003.mp3', { jar })).status, 200);
  });
});
test('refund/expiry: the pass keeps working at most PASS_TTL_SECONDS, then access ends', async () => {
  const env = makeEnv(); const jar = new Jar(); const id = await signup(env, jar); await grant(env, id, 'A1');
  assert.equal((await media(env, 'story/A1_017_S003.mp3', { jar })).status, 200);
  await env.DB.prepare('DELETE FROM user_entitlements WHERE user_id = ?1').bind(id).run();
  await withClock(PASS_TTL_SECONDS - 5, async () => {
    // The real browser still holds the pass for its last seconds.
    const h = { cookie: [...jar.c.values()].map((x) => `${x.name}=${x.value}`).join('; '), referer: SITE + '/' };
    const res = await worker.fetch(new Request(MEDIA + 'story/A1_017_S003.mp3', { headers: h }), env, ctx);
    assert.equal(res.status, 200, 'documented window: up to 600 s');
  });
  await withClock(PASS_TTL_SECONDS + 1, async () => {
    const h = { cookie: [...jar.c.values()].map((x) => `${x.name}=${x.value}`).join('; '), referer: SITE + '/' };
    const res = await worker.fetch(new Request(MEDIA + 'story/A1_017_S003.mp3', { headers: h }), env, ctx);
    assert.equal(res.status, 403, 'expired pass → D1 re-check → refused');
  });
});
test('a pass is bound to its session: copied to another session or tampered → ignored', async () => {
  const env = makeEnv();
  const a = new Jar(); const ida = await signup(env, a); await grant(env, ida, 'A1');
  assert.equal((await media(env, 'story/A1_017_S003.mp3', { jar: a })).status, 200);
  const b = new Jar(); await signup(env, b);
  const passA = a.get('kw_media').value;
  const bSession = b.get('kw_session').value;
  const forged = async (pass) => (await worker.fetch(new Request(MEDIA + 'story/A1_017_S003.mp3', { headers: { cookie: `kw_session=${bSession}; kw_media=${pass}` } }), env, ctx)).status;
  assert.equal(await forged(passA), 403, 'A\'s pass with B\'s session is not honoured');
  const [v, u, , c, e, s] = passA.split('.');
  assert.equal(await forged([v, u, '63', c, e, s].join('.')), 403, 'level bits tampered');
  // No session at all: the pass alone is worthless.
  const r = await worker.fetch(new Request(MEDIA + 'story/A1_017_S003.mp3', { headers: { cookie: `kw_media=${passA}` } }), env, ctx);
  assert.equal(r.status, 401);
});
test('logout clears kw_session and the media pass (exact paths); afterwards paid audio is 401', async () => {
  const env = makeEnv(); const jar = new Jar(); const id = await signup(env, jar); await grant(env, id, 'A1');
  assert.equal((await media(env, 'story/A1_017_S003.mp3', { jar })).status, 200);
  const res = await worker.fetch(new Request(SITE + '/api/auth/logout', { method: 'POST', headers: { origin: SITE, cookie: jar.header(SITE + '/api/auth/logout') } }), env, ctx);
  assert.equal(res.status, 200);
  const set = res.headers.getSetCookie();
  assert.ok(set.some((c) => c.startsWith('kw_session=;') && c.includes('Path=/api') && c.includes('Max-Age=0')), set.join(' | '));
  assert.ok(set.some((c) => c.startsWith('kw_media=;') && c.includes('Path=/api/media') && c.includes('Max-Age=0')), set.join(' | '));
  jar.take(res);
  assert.equal(jar.get('kw_media'), undefined); assert.equal(jar.get('kw_session'), undefined);
  assert.equal((await media(env, 'story/A1_017_S003.mp3', { jar })).status, 401);
});
test('logout on workers.dev sets only the session cookie (no media pass exists there)', async () => {
  const env = makeEnv();
  const res = await worker.fetch(new Request('https://klarweg-access.example.workers.dev/auth/logout', { method: 'POST', headers: { origin: SITE } }), env, ctx);
  assert.deepEqual(res.headers.getSetCookie().map((c) => c.split('=')[0]), ['kw_session']);
});
test('paid cache header: MEDIA_PAID_MAX_AGE "3600" → private, max-age=3600; "0"/unset/invalid → private, no-store', async () => {
  for (const [v, want] of [['3600', 'private, max-age=3600'], ['0', 'private, no-store'], [undefined, 'private, no-store'], ['abc', 'private, no-store'], ['999999', 'private, no-store']]) {
    const env = makeEnv({ MEDIA_PAID_MAX_AGE: v }); const jar = new Jar(); const id = await signup(env, jar); await grant(env, id, 'A1');
    const r = await media(env, 'story/A1_017_S003.mp3', { jar });
    assert.equal(r.h.get('cache-control'), want, String(v));
  }
});
test('media.js never writes, deletes or lists the bucket', () => {
  const src = fs.readFileSync(path.join(WORKER_DIR, 'src/media.js'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
  for (const op of ['.put(', '.delete(', '.list(', 'createMultipartUpload', 'resumeMultipartUpload']) assert.ok(!src.includes(op), op);
});
