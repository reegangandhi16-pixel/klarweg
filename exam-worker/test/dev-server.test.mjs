/* LOCAL DEMO SERVER: the user switch only ever selects one of the dev server's own test users. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { startDevServer } from './dev-server.mjs';

test('DEV SERVER: /exam/dev/as/<alias> sets the dev cookie for a local test user and redirects; unknown aliases are refused', async () => {
  const dev = await startDevServer({ form: 'p1' });
  try {
    const base = `http://127.0.0.1:${dev.port}/exam`;
    let r = await fetch(`${base}/dev/as/rater1`, { redirect: 'manual' });
    assert.equal(r.status, 302);
    assert.equal(r.headers.get('location'), '/exam/rater.html');
    assert.match(r.headers.get('set-cookie'), /^kx-dev-as=rater1; Path=\/; SameSite=Lax$/);
    r = await fetch(`${base}/dev/as/learner`, { redirect: 'manual' });
    assert.equal(r.headers.get('location'), '/exam/');
    for (const bad of ['admin', dev.user.replace(/[^a-z0-9]/g, ''), 'x'.repeat(40)]) {
      r = await fetch(`${base}/dev/as/${bad}`, { redirect: 'manual' });
      assert.equal(r.status, 404, bad); assert.equal(r.headers.get('set-cookie'), null);
    }
    // the cookie decides the user: the outsider is refused on the rater queue, a rater is served
    const queue = (alias) => fetch(`${base}/v1/admin/rating-queue`, { headers: { cookie: `kx-dev-as=${alias}` } }).then((x) => x.status);
    assert.equal(await queue('outsider'), 403);
    assert.equal(await queue('rater1'), 200);
  } finally { dev.server.close(); }
});
