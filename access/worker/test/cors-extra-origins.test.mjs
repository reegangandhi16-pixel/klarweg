/* klarweg-access — CORS_EXTRA_ORIGINS (src/cors.js), the opt-in extra origin
   list of the isolated non-production Worker (wrangler.nonprod.toml).
   Production never sets it; these tests prove that unset means "exactly the
   production list", that bad values fail closed, and that a value does not
   leak into a later request served with an env that lacks it. */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { parseExtraOrigins, isExactOrigin } from '../src/cors.js';
import { createD1 } from './d1-sqlite.mjs';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const API = 'https://klarweg-access-nonprod.example.workers.dev';
const LOCAL = 'http://localhost:8788';
const ctx = { waitUntil() {} };

function env(extra) {
  const e = { DB: createD1(WORKER_DIR), RATE_SALT: 'test-salt' };
  if (extra !== undefined) e.CORS_EXTRA_ORIGINS = extra;
  return e;
}

async function preflight(e, origin) {
  return worker.fetch(new Request(API + '/auth/me', { method: 'OPTIONS', headers: { origin } }), e, ctx);
}

async function signup(e, origin) {
  const body = JSON.stringify({ email: `u${Math.random().toString(36).slice(2)}@example.com`, password: 'correct-horse-9', name: 'T' });
  return worker.fetch(new Request(API + '/auth/signup', {
    method: 'POST', body,
    headers: { origin, 'content-type': 'application/json', 'CF-Connecting-IP': '203.0.113.' + Math.floor(Math.random() * 200) }
  }), e, ctx);
}

test('CORS EXTRA: parse accepts exact https origins and http://localhost / 127.0.0.1 only', () => {
  assert.deepEqual(parseExtraOrigins('http://localhost:8788'), ['http://localhost:8788']);
  assert.deepEqual(parseExtraOrigins(' http://127.0.0.1:8788 , https://exam-test.example.com '), ['http://127.0.0.1:8788', 'https://exam-test.example.com']);
  assert.deepEqual(parseExtraOrigins('https://a.example.com:8443'), ['https://a.example.com:8443']);
});

test('CORS EXTRA: unset, empty or any invalid entry yields no extra origins (fails closed)', () => {
  for (const bad of [undefined, null, '', '   ', ',', '*', 'null', 'http://example.com', 'https://example.com/', 'https://example.com/path',
    'https://*.example.com', 'localhost:8788', 'https://EXAMPLE.com', 'http://localhost:8788,*', 'http://localhost:8788, http://evil.example',
    'javascript:alert(1)', 'https://example.com:999999', 'https://exa mple.com']) {
    assert.deepEqual(parseExtraOrigins(bad), [], `must reject ${JSON.stringify(bad)}`);
  }
});

test('CORS EXTRA: port boundaries — 1 and 65535 accepted; 0, 65536, 99999, leading zero, default port and empty port rejected', () => {
  for (const ok of ['http://localhost:1', 'http://localhost:65535', 'https://a.example.com:65535', 'http://127.0.0.1:8788', 'https://a.example.com:8443']) {
    assert.deepEqual(parseExtraOrigins(ok), [ok], `accepts ${ok}`);
  }
  for (const bad of ['http://localhost:0', 'http://localhost:65536', 'http://localhost:99999', 'https://a.example.com:65536', 'https://a.example.com:99999',
    'http://localhost:08788', 'http://localhost:00', 'http://localhost:', 'https://a.example.com:', 'https://a.example.com:443', 'http://localhost:80',
    'http://localhost:+8788', 'http://localhost:87 88', 'http://localhost:0x1f']) {
    assert.deepEqual(parseExtraOrigins(bad), [], `rejects ${bad}`);
  }
});

test('CORS EXTRA: credentials, path, query, fragment, malformed hosts and wrong schemes are rejected', () => {
  for (const bad of [
    'https://user:pass@a.example.com', 'https://user@a.example.com', 'http://user@localhost:8788', 'http://localhost@evil.example',
    'https://a.example.com/', 'https://a.example.com/x', 'https://a.example.com?x=1', 'https://a.example.com#x', 'http://localhost:8788/',
    'https://a..example.com', 'https://.example.com', 'https://example.com.', 'https://-a.example.com', 'https://a-.example.com',
    'https://a_b.example.com', 'https://' + 'a'.repeat(64) + '.example.com', 'https://' + Array(64).fill('abc').join('.') + '.com',
    'https://1.2.3.4', 'https://127.0.0.1', 'https://[::1]', 'http://[::1]:8788', 'https://a.example.com\nhttps://b.example.com',
    'http://localhost.evil.example', 'http://127.0.0.1.evil.example', 'http://127.0.0.2:8788', 'http://localhost8788',
    'http://a.example.com', 'ftp://a.example.com', 'HTTPS://a.example.com', 'https:/a.example.com', '//a.example.com', 'https://',
    'http://localhost:8788,', ',http://localhost:8788', 'http://localhost:8788,,https://a.example.com', 'http://localhost:8788;https://a.example.com',
    'https://a.example.com\thttps://b.example.com'
  ]) {
    assert.deepEqual(parseExtraOrigins(bad), [], `rejects ${JSON.stringify(bad)}`);
  }
  for (const bad of ['http://localhost:8788\n', ' http://localhost:8788', 'http://localhost:8788 ', undefined, null, 8788]) {
    assert.equal(isExactOrigin(bad), false, `isExactOrigin rejects ${JSON.stringify(bad)}`);
  }
});

test('CORS EXTRA: legitimate origins are preserved exactly; one bad entry rejects the whole list', () => {
  const good = ['http://localhost:8788', 'http://localhost', 'http://127.0.0.1', 'https://exam-test.example.com', 'https://xn--bcher-kva.example.com', 'https://a1.b2.example.co.uk:8443'];
  assert.deepEqual(parseExtraOrigins(good.join(',')), good);
  assert.deepEqual(parseExtraOrigins(good.join(' , ')), good);
  assert.ok(isExactOrigin('https://' + ['a'.repeat(63), 'b'.repeat(63), 'c'.repeat(63), 'd'.repeat(57)].join('.')), '253-char host accepted');
  for (const bad of ['http://localhost:65536', 'https://a.example.com/', 'https://u@a.example.com']) {
    assert.deepEqual(parseExtraOrigins([...good, bad].join(',')), [], `whole list rejected because of ${bad}`);
  }
});

test('CORS EXTRA: unset (production) → a localhost preflight is refused; the production origin still works', async () => {
  const e = env();
  assert.equal((await preflight(e, LOCAL)).status, 403);
  const ok = await preflight(e, 'https://reegangandhi16-pixel.github.io');
  assert.equal(ok.status, 204);
  assert.equal(ok.headers.get('access-control-allow-origin'), 'https://reegangandhi16-pixel.github.io');
});

test('CORS EXTRA: set (non-prod) → the listed origin gets credentialed CORS; others are still refused', async () => {
  const e = env(LOCAL);
  const res = await preflight(e, LOCAL);
  assert.equal(res.status, 204);
  assert.equal(res.headers.get('access-control-allow-origin'), LOCAL);
  assert.equal(res.headers.get('access-control-allow-credentials'), 'true');
  assert.equal((await preflight(e, 'http://localhost:9999')).status, 403);
  assert.equal((await preflight(e, 'https://evil.example')).status, 403);
});

test('CORS EXTRA: CSRF guard — a state-changing POST from the extra origin passes only when configured', async () => {
  const refused = await signup(env(), LOCAL);
  assert.equal(refused.status, 403, 'unset: a write from localhost is a foreign-origin write');
  const allowed = await signup(env(LOCAL), LOCAL);
  assert.ok(allowed.status >= 200 && allowed.status < 300, `signup from the configured origin must succeed, got ${allowed.status}`);
  assert.match(allowed.headers.get('set-cookie') || '', /SameSite=None/i, 'the session cookie is the cross-site one the non-prod test exercises');
  assert.equal(allowed.headers.get('access-control-allow-origin'), LOCAL);
  const foreign = await signup(env(LOCAL), 'https://evil.example');
  assert.equal(foreign.status, 403, 'set: other origins are still refused');
});

test('CORS EXTRA: an invalid value is ignored entirely, never partially applied', async () => {
  const e = env(LOCAL + ',*');
  assert.equal((await preflight(e, LOCAL)).status, 403);
});

test('CORS EXTRA: the setting does not leak into a request served with an env that lacks it', async () => {
  assert.equal((await preflight(env(LOCAL), LOCAL)).status, 204);
  assert.equal((await preflight(env(), LOCAL)).status, 403);
});
