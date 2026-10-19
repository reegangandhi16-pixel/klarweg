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
import { parseExtraOrigins } from '../src/cors.js';
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
