/* ACCESS MATRIX: every attempt-scoped learner route of the router, called on a COMPLETED attempt with recordings, by
   (a) another entitled learner and (b) a plain rater, answers 404 attempt_not_found — indistinguishable from a missing
   attempt — and returns no learner data. The route list is checked against the router source, so a new attempt route
   must be added here. Rater-only routes refuse the learner (no role) and an outsider. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { setup, call, newUser, grant, role, rid, WORKER_DIR } from './harness.mjs';
import { A, start, submit, answerObjective, runHoeren, runSchreiben, runSprechen, complete } from './flow.mjs';

const LEARNER_ROUTES = [
  ['GET', ''], ['POST', '/lease'], ['POST', '/heartbeat'],
  ['POST', '/modules/lesen/start'], ['GET', '/modules/lesen/package'], ['GET', '/modules/lesen/answers'],
  ['POST', '/modules/lesen/answers'], ['POST', '/modules/lesen/submit'],
  ['POST', '/hoeren/events'], ['POST', '/media'],
  ['POST', '/sprechen/consent'], ['POST', '/sprechen/chunks'], ['POST', '/sprechen/turns'], ['GET', '/sprechen/status'],
  ['POST', '/schreiben/integrity'],
  ['GET', '/precheck/download'],
  ['POST', '/complete'], ['GET', '/result'], ['GET', '/modules/lesen/review'], ['GET', '/modules/schreiben/feedback'],
  ['GET', '/sprechen/recordings'], ['GET', '/sprechen/recordings/1/t1']
];

test('ACCESS MATRIX: the route list covers every attempt-scoped learner route of the router', () => {
  const src = fs.readFileSync(path.join(WORKER_DIR, 'src/index.js'), 'utf8');
  const routes = [...src.matchAll(/\['(GET|POST)', R\(`\/attempts\/\$\{A\}([^`]*)`\)/g)].length;
  assert.equal(routes, LEARNER_ROUTES.length, 'a learner attempt route was added or removed: update LEARNER_ROUTES');
});

test('ACCESS MATRIX: another learner and a plain rater get 404 on every learner route of a completed attempt; rater routes refuse non-raters', async () => {
  const s = await setup();
  await start(s, 'lesen'); await answerObjective(s, 'lesen'); await submit(s, 'lesen');
  await runHoeren(s, (it, k) => k.correct); await submit(s, 'hoeren');
  await runSchreiben(s); await submit(s, 'schreiben');
  await runSprechen(s); await submit(s, 'sprechen');
  await complete(s);
  const own = await call(s.env, 'GET', A(s, '/sprechen/recordings'), { user: s.user });
  assert.equal(own.status, 200, 'the owner reads their recordings (control)');

  const other = newUser(); await grant(s.env, other);
  const rater = newUser(); await role(s.env, rater, 'rater');
  for (const [who, user] of [['other learner', other], ['rater', rater]]) {
    for (const [m, p] of LEARNER_ROUTES) {
      const r = await call(s.env, m, A(s, p), { user, body: m === 'POST' ? { lease_id: s.lease, request_id: rid(), device_id: s.device, granted: true, version: 'rec-consent@1', answers: [], type: 'ready', asset_ids: [] } : undefined });
      assert.equal(r.status, 404, `${who}: ${m} ${p} → ${r.status} ${JSON.stringify(r.json).slice(0, 120)}`);
      assert.equal(r.json && r.json.error, 'attempt_not_found', `${who}: ${m} ${p}`);
      assert.equal(new RegExp(s.user).test(JSON.stringify(r.json)), false, `${who}: ${m} ${p} leaks the owner id`);
    }
  }
  // rater-only routes: the learner (no role, even on their own attempt) and an outsider are refused
  for (const user of [s.user, other]) {
    for (const [m, p] of [['GET', '/exam/v1/admin/rating-queue'], ['GET', `/exam/v1/admin/attempts/${s.attempt}/productive`], ['GET', `/exam/v1/admin/attempts/${s.attempt}/recordings/1/t1`], ['POST', '/exam/v1/admin/ratings']]) {
      const r = await call(s.env, m, p, { user, body: m === 'POST' ? { attempt_id: s.attempt, module: 'schreiben', request_id: rid() } : undefined });
      assert.equal(r.status, 403, `${user === s.user ? 'learner' : 'outsider'}: ${m} ${p} → ${r.status}`);
    }
  }
  assert.equal((await s.env.DB.prepare('SELECT COUNT(*) AS n FROM ratings').first()).n, 0);
});
