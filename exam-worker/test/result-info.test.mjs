/* What the result tells the learner beyond points: the pass mark per module (from the level config) and that a module
   was submitted automatically because its time ran out. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { makeEnv, newUser, grant, call, rid, dev, PRACTICE_FORM_DIR } from './harness.mjs';
import { start, post, get } from './flow.mjs';
import { resultPage } from '../../exam/js/render.js';

test('RESULT INFO: pass mark per module, and "time ran out" for a module the deadline submitted', async () => {
  const h = makeEnv({ formDirs: [PRACTICE_FORM_DIR], flags: { EXAM_MODULE_ONLY: 'lesen', EXAM_RELEASE_FORMS: 'frm:b1:synthetic-p1@1' } });
  const user = newUser(); await grant(h.env, user);
  const c = await call(h.env, 'POST', '/exam/v1/attempts', { user, body: { mode: 'synthetic_module', module: 'lesen', level: 'b1', request_id: rid(), device_id: dev() } });
  assert.equal(c.status, 200, JSON.stringify(c.json));
  const s = { ...h, user, attempt: c.json.attempt_id, lease: c.json.lease.lease_id };
  const m = await start(s, 'lesen');
  h.advance(m.deadline_at - h.clock.t + 60_000);   // past the deadline and its save grace: the server submits
  // the device was away that long, so its lease expired: reacquire it exactly as a reload does
  const l = await call(h.env, 'POST', `/exam/v1/attempts/${s.attempt}/lease`, { user, body: { device_id: dev(), request_id: rid() } });
  assert.equal(l.status, 200, JSON.stringify(l.json)); s.lease = l.json.lease.lease_id;
  const view = (await get(s, '')).json;
  assert.equal(view.modules.find((x) => x.module === 'lesen').submit_kind, 'auto_deadline');
  const done = await post(s, '/complete', {});
  assert.equal(done.status, 200, JSON.stringify(done.json));
  const r = (await call(h.env, 'GET', `/exam/v1/attempts/${s.attempt}/result`, { user })).json.result;
  assert.equal(r.pass_points, 60);
  const lesen = r.modules.find((x) => x.module === 'lesen');
  assert.equal(lesen.submit_kind, 'auto_deadline');
  const html = resultPage(r);
  assert.match(html, /Bestanden ab 60 Punkten je Modul\./);
  assert.match(html, /Zeit abgelaufen – automatisch abgegeben\./);
  // a stored result from before this field existed still renders, without the pass line
  assert.equal(/Bestanden ab/.test(resultPage({ ...r, pass_points: undefined })), false);
});
