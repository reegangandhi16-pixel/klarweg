/* klarweg-access — third-party-cookie pre-flight (/auth/cookie-probe; register §G.1 interim safeguard until OD-20). */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { createD1 } from './d1-sqlite.mjs';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://reegangandhi16-pixel.github.io';
const env = { DB: createD1(WORKER_DIR), RATE_SALT: 'test-salt' };
const call = (method, { cookie, origin = SITE } = {}) => worker.fetch(new Request('https://klarweg-access.example.workers.dev/auth/cookie-probe',
  { method, headers: { ...(cookie ? { cookie } : {}), ...(origin ? { origin } : {}), 'CF-Connecting-IP': '192.0.2.9' } }), env, { waitUntil() {} });

test('COOKIE PROBE: POST sets kw_probe with the session cookie attributes; GET reports whether the browser sent it back', async () => {
  const set = await call('POST');
  assert.equal(set.status, 200);
  const c = set.headers.get('set-cookie');
  for (const part of ['kw_probe=1', 'Path=/', 'HttpOnly', 'Secure', 'SameSite=None', 'Max-Age=300']) assert.ok(c.includes(part), part);
  assert.equal(set.headers.get('cache-control'), 'no-store');
  assert.equal(set.headers.get('access-control-allow-credentials'), 'true');
  assert.equal(set.headers.get('access-control-allow-origin'), SITE);
  assert.deepEqual(await (await call('GET', { cookie: 'kw_probe=1' })).json(), { ok: true, received: true });
  assert.deepEqual(await (await call('GET', { cookie: 'other=1; kw_probe=1' })).json(), { ok: true, received: true });
  assert.deepEqual(await (await call('GET')).json(), { ok: true, received: false }, 'blocked: nothing came back');
  assert.deepEqual(await (await call('GET', { cookie: 'kw_probe=2' })).json(), { ok: true, received: false });
});

test('COOKIE PROBE: a cross-site POST is refused like every other write; no user data involved', async () => {
  assert.equal((await call('POST', { origin: 'https://evil.example' })).status, 403);
  const n = await env.DB.prepare('SELECT COUNT(*) AS n FROM sessions').first();
  assert.equal(n.n, 0);
});
