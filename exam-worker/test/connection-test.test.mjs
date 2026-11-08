/* ENGINE §10 connection pre-check: 1 MiB, never cached, lease-checked, rate-limited per attempt; nothing stored. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, call, newUser, grant, PRACTICE_FORM_DIR } from './harness.mjs';
import { DOWNLOAD_TEST_BYTES } from '../src/api.js';

const path = (s, lease = s.lease) => `/exam/v1/attempts/${s.attempt}/precheck/download?lease_id=${lease}`;

test('CONNECTION TEST: 1 MiB of incompressible bytes, no-store; lease required; other users cannot use it; 3 per attempt per 10 min', async () => {
  const s = await setup({ formDirs: [PRACTICE_FORM_DIR] });
  const r = await call(s.env, 'GET', path(s), { user: s.user });
  assert.equal(r.status, 200);
  assert.equal(r.buf.byteLength, DOWNLOAD_TEST_BYTES);
  assert.equal(r.headers.get('cache-control'), 'no-store');
  assert.equal(r.headers.get('content-type'), 'application/octet-stream');
  const bytes = new Uint8Array(r.buf);
  assert.ok(new Set(bytes.slice(0, 4096)).size > 200, 'not a run of zeros (transport compression cannot flatter it)');
  assert.equal((await call(s.env, 'GET', path(s, 'lea_00000000000000000000000000000000'), { user: s.user })).status >= 400, true, 'a foreign lease is refused');
  const other = newUser(); await grant(s.env, other);
  assert.equal((await call(s.env, 'GET', path(s), { user: other })).status, 404, 'another learner cannot use this attempt');
  assert.equal((await call(s.env, 'GET', path(s), { user: s.user })).status, 200);
  assert.equal((await call(s.env, 'GET', path(s), { user: s.user })).status, 200);
  const over = await call(s.env, 'GET', path(s), { user: s.user });
  assert.equal(over.status, 429); assert.equal(over.json.error, 'rate_limited');
});
