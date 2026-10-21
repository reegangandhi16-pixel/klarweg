/* Module intro data: before a module starts, the attempt view tells the learner its time, parts and scored tasks, from
   the form's own package; once the module runs, no intro is sent (heartbeats never load packages). */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, call, PRACTICE_FORM_DIR, pkgFor, syntheticBuild } from './harness.mjs';
import { start, get } from './flow.mjs';

const scored = (pkg) => pkg.parts.reduce((n, p) => n + p.tasks.reduce((k, t) => k + t.items.filter((it) => !it.is_example).length, 0), 0);

test('MODULE INTRO: not-started modules report minutes, parts and scored tasks from the package; running ones do not', async () => {
  const s = await setup({ formDirs: [PRACTICE_FORM_DIR] });
  const lesen = pkgFor(syntheticBuild([PRACTICE_FORM_DIR]), 'lesen');
  const intro = (view, m) => view.modules.find((x) => x.module === m).intro;

  const before = s.created;
  assert.deepEqual(intro(before, 'lesen'), { minutes: Math.round(lesen.timing.seconds / 60), parts: lesen.parts.length, items: scored(lesen) });
  assert.equal(intro(before, 'lesen').items, 30);   // B1 Lesen: 30 scored tasks, examples excluded
  assert.equal(intro(before, 'hoeren').minutes, null);   // phase-planned module: no fixed time to promise

  await start(s, 'lesen');
  const after = (await get(s, '')).json;
  assert.equal(intro(after, 'lesen'), undefined);
  assert.ok(intro(after, 'schreiben'), 'later modules still describe themselves');
});

test('MODULE INTRO: the time follows the attempt\'s time multiplier (accommodation)', async () => {
  const s = await setup({ formDirs: [PRACTICE_FORM_DIR] });
  await s.env.DB.prepare('UPDATE attempts SET time_multiplier = 1.5 WHERE id = ?1').bind(s.attempt).run();
  const lesen = pkgFor(syntheticBuild([PRACTICE_FORM_DIR]), 'lesen');
  const view = (await call(s.env, 'GET', `/exam/v1/attempts/${s.attempt}`, { user: s.user })).json;
  assert.equal(view.modules.find((x) => x.module === 'lesen').intro.minutes, Math.round((lesen.timing.seconds * 1.5) / 60));
});
