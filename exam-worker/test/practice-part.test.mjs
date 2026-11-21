/* Single-part practice (ENGINE §2 practice_part): one Lesen part, untimed, from an explicitly listed practice pool that
   never overlaps the learner release set. Off by default; every misconfiguration fails closed. The part is the only
   content the attempt can see or answer, it is reported as a count of correct answers (no module points, no pass), and
   it appears in history labelled as a part practice. Existing attempts and full exams are unaffected. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { makeEnv, newUser, grant, call, rid, dev, FORM_DIR, PRACTICE_LIBRARY, keysFor, syntheticBuild, pkgFor } from './harness.mjs';
import { post, get, start, submit } from './flow.mjs';
import { PRACTICE_PART_WINDOW_MS } from '../src/api.js';
import { resultPage, attemptHistory } from '../../exam/js/render.js';

const P = Object.fromEntries(PRACTICE_LIBRARY.map((f) => [f.name, f]));   // P1 … P15
const ON = (extra = {}) => ({ EXAM_PRACTICE_PARTS: 'lesen', EXAM_PRACTICE_PART_FORMS: `${P.P2.id},${P.P3.id}`, ...extra });

async function setupPart(flags, dirs = [P.P1.dir, P.P2.dir, P.P3.dir]) {
  const h = makeEnv({ formDirs: dirs, flags });
  const user = newUser(); await grant(h.env, user);
  return { ...h, user };
}
const create = (h, body) => call(h.env, 'POST', '/exam/v1/attempts', { user: h.user, body: { level: 'b1', request_id: rid(), device_id: dev(), ...body } });
const createPart = (h, part, extra = {}) => create(h, { mode: 'synthetic_part', module: 'lesen', part, ...extra });
const session = (h, r) => ({ ...h, attempt: r.json.attempt_id, lease: r.json.lease.lease_id });
const partItems = (pkg, part) => pkg.parts.filter((p) => p.part === part).flatMap((p) => p.tasks.flatMap((t) => t.items.filter((it) => !it.is_example)));

test('PRACTICE PART (off by default): no switch → refused and listed as disabled; full and Lesen-only modes unchanged', async () => {
  const h = await setupPart({});
  const r = await createPart(h, 3);
  assert.equal(r.status, 403); assert.equal(r.json.error, 'mode_disabled');
  const av = (await call(h.env, 'GET', '/exam/v1/availability', { user: h.user })).json;
  assert.deepEqual(av.modes.filter((m) => m.mode === 'synthetic_part').map((m) => [m.module, m.available, m.reason]), [[null, false, 'disabled']]);
  assert.equal(av.modes.find((m) => m.mode === 'synthetic_full').available, true);
  const full = await create(h, { mode: 'synthetic_full' });
  assert.equal(full.status, 200);
  assert.equal(full.json.part_scope, null);
});

test('PRACTICE PART (fail closed): no pool, a pool that overlaps the release set, a system-test form, an unsupported module', async () => {
  const cases = [
    [{ EXAM_PRACTICE_PARTS: 'lesen' }, 503, 'pool_unconfigured'],
    [ON({ EXAM_RELEASE_FORMS: P.P2.id, EXAM_MODULE_ONLY: 'lesen' }), 503, 'pool_misconfigured'],   // a live simulation form never doubles as practice
    [ON({ EXAM_PRACTICE_PART_FORMS: 'frm:b1:synthetic-s0@1' }), 503, 'pool_misconfigured'],        // S0 is a system-test fixture
    [ON({ EXAM_PRACTICE_PART_FORMS: `${P.P2.id},${P.P2.id}` }), 503, 'pool_misconfigured'],         // duplicate ids
    [ON({ EXAM_PRACTICE_PART_FORMS: 'frm:b1:synthetic-p99@1' }), 503, 'pool_misconfigured'],        // not a live form
    [ON({ EXAM_PRACTICE_PARTS: 'hoeren' }), 403, 'mode_disabled'],                                  // only Lesen is supported
    [ON({ EXAM_PRACTICE_PARTS: 'lesen,schreiben' }), 403, 'mode_disabled'],
    [ON({ EXAM_MODULE_ONLY: 'lessen' }), 403, 'mode_disabled']                                        // a misconfigured module switch disables everything
  ];
  for (const [flags, status, error] of cases) {
    const h = await setupPart(flags, [FORM_DIR, P.P1.dir, P.P2.dir, P.P3.dir]);
    const r = await createPart(h, 3);
    assert.equal(r.status, status, `${JSON.stringify(flags)} → ${JSON.stringify(r.json)}`); assert.equal(r.json.error, error, JSON.stringify(flags));
  }
});

test('PRACTICE PART (requests): exactly one valid Lesen part; other modes take no part', async () => {
  const h = await setupPart(ON());
  for (const part of [undefined, 0, 6, 10, '3', 2.5]) {
    const r = await createPart(h, part);
    assert.equal(r.status, 400, String(part)); assert.equal(r.json.error, 'invalid_part');
  }
  const hoeren = await create(h, { mode: 'synthetic_part', module: 'hoeren', part: 1 });
  assert.equal(hoeren.status, 403); assert.equal(hoeren.json.error, 'module_disabled');
  const full = await create(h, { mode: 'synthetic_full', part: 2 });
  assert.equal(full.status, 400); assert.equal(full.json.error, 'invalid_part');
});

test('PRACTICE PART (journey): untimed Teil 3 from the pool — only that part is visible and answerable; counted result, review and history', async () => {
  const h = await setupPart(ON());
  const av = (await call(h.env, 'GET', '/exam/v1/availability', { user: h.user })).json;
  const entry = av.modes.find((m) => m.mode === 'synthetic_part');
  assert.equal(entry.available, true); assert.equal(entry.module, 'lesen');
  assert.deepEqual(entry.parts.map((p) => p.part), [1, 2, 3, 4, 5]);

  const c = await createPart(h, 3);
  assert.equal(c.status, 200, JSON.stringify(c.json));
  assert.equal(c.json.mode, 'synthetic_part'); assert.equal(c.json.module_scope, 'lesen'); assert.equal(c.json.part_scope, 3);
  assert.deepEqual(c.json.modules.map((m) => m.module), ['lesen']);
  const stored = await h.env.DB.prepare('SELECT form_id, mode, part_scope FROM attempts WHERE id = ?1').bind(c.json.attempt_id).first();
  assert.ok([P.P2.id, P.P3.id].includes(stored.form_id), 'assigned from the practice pool only');
  assert.equal(stored.mode, 'synthetic_full');
  const intro = c.json.modules[0].intro;
  assert.equal(intro.untimed, true); assert.equal(intro.minutes, null); assert.equal(intro.part, 3); assert.equal(intro.parts, 1); assert.equal(intro.items, 7);

  const s = session(h, c);
  const m = await start(s, 'lesen');
  assert.equal(m.deadline_at - m.started_at, PRACTICE_PART_WINDOW_MS, 'no countdown: only the abandoned-practice window');
  const pkgRes = await get(s, '/modules/lesen/package');
  assert.equal(pkgRes.status, 200);
  assert.deepEqual(pkgRes.json.package.parts.map((p) => p.part), [3], 'the package holds only the practised part');

  const dir = stored.form_id === P.P2.id ? P.P2.dir : P.P3.dir;
  const build = syntheticBuild([dir]); const keys = keysFor(build); const full = pkgFor(build, 'lesen');
  const other = partItems(full, 1)[0];
  const outside = await post(s, '/modules/lesen/answers', { answers: [{ item_id: other.item_id, value: { option_id: other.options[0].option_id }, seq: 1 }] });
  assert.equal(outside.status, 422); assert.equal(outside.json.error, 'item_not_in_part');
  const items = partItems(full, 3);
  // 5 correct, 1 wrong, 1 unanswered
  const answers = items.slice(0, 6).map((it, i) => ({ item_id: it.item_id, seq: 1,
    value: { option_id: i < 5 ? keys[it.item_id].correct : it.options.find((o) => o.option_id !== keys[it.item_id].correct).option_id } }));
  const saved = await post(s, '/modules/lesen/answers', { answers });
  assert.equal(saved.status, 200, JSON.stringify(saved.json));
  // a reload (fresh read) sees exactly the saved answers
  assert.equal((await get(s, '/modules/lesen/answers')).json.answers.length, 6);
  await submit(s, 'lesen');
  const done = await post(s, '/complete', {});
  assert.equal(done.status, 200, JSON.stringify(done.json));

  const result = (await call(h.env, 'GET', `/exam/v1/attempts/${s.attempt}/result`, { user: h.user })).json.result;
  assert.deepEqual(result.practice_part, { module: 'lesen', part: 3 });
  const lesen = result.modules.find((x) => x.module === 'lesen');
  assert.deepEqual(lesen.counts, { correct: 5, incorrect: 1, unanswered: 1 });
  assert.equal(lesen.points, null, 'no module points for one part'); assert.equal(lesen.pass, null, 'no pass/fail for one part');
  assert.equal(lesen.max_points, 7);
  const review = (await call(h.env, 'GET', `/exam/v1/attempts/${s.attempt}/modules/lesen/review`, { user: h.user })).json;
  assert.deepEqual([...new Set(review.items.map((x) => x.part))], [3]); assert.equal(review.summary.total, 7);
  assert.equal(review.summary.correct, 5);

  const hist = (await call(h.env, 'GET', '/exam/v1/attempts', { user: h.user })).json;
  assert.deepEqual(hist.attempts[0].practice_part, { module: 'lesen', part: 3 });
  assert.deepEqual(hist.attempts[0].modules[0].counts, { correct: 5, incorrect: 1, unanswered: 1 });
  // what the learner sees
  const page = resultPage(result);
  assert.match(page, /Lesen Teil 3/); assert.match(page, /5 von 7 richtig/);
  assert.equal(/Bestanden ab|nicht bestanden/.test(page), false);
  assert.match(attemptHistory(hist, () => '21.10.2026'), /Teilübung · Lesen Teil 3/);
  assert.match(attemptHistory(hist, () => '21.10.2026'), /5 \/ 7 richtig/);
});

test('PRACTICE PART: repeat avoidance per part; an abandoned practice closes itself after the window; full attempts keep their points', async () => {
  const h = await setupPart(ON());
  const forms = [];
  for (let i = 0; i < 2; i++) {
    const c = await createPart(h, 2); const s = session(h, c);
    forms.push((await h.env.DB.prepare('SELECT form_id FROM attempts WHERE id = ?1').bind(s.attempt).first()).form_id);
    await start(s, 'lesen'); await submit(s, 'lesen'); await post(s, '/complete', {});
  }
  assert.deepEqual([...forms].sort(), [P.P2.id, P.P3.id].sort(), 'the second Teil-2 practice uses the other pool form');

  const c = await createPart(h, 4); const s = session(h, c);
  await start(s, 'lesen');
  h.advance(PRACTICE_PART_WINDOW_MS + 60_000);
  const l = await call(h.env, 'POST', `/exam/v1/attempts/${s.attempt}/lease`, { user: h.user, body: { device_id: dev(), request_id: rid() } });
  assert.equal(l.status, 200); s.lease = l.json.lease.lease_id;
  assert.equal((await get(s, '')).json.modules[0].submit_kind, 'auto_deadline');
});

test('PRACTICE PART: coexists with a Lesen-only release (different pools); one open attempt per family; form removed from the pool fails closed', async () => {
  const flags = ON({ EXAM_MODULE_ONLY: 'lesen', EXAM_RELEASE_FORMS: P.P1.id });
  const h = await setupPart(flags);
  const sim = await create(h, { mode: 'synthetic_module', module: 'lesen' });
  assert.equal(sim.status, 200);
  assert.equal((await h.env.DB.prepare('SELECT form_id FROM attempts WHERE id = ?1').bind(sim.json.attempt_id).first()).form_id, P.P1.id, 'the simulation uses the release set');
  const busy = await createPart(h, 1);
  assert.equal(busy.status, 409); assert.equal(busy.json.error, 'attempt_open');
  const ss = session(h, sim); await start(ss, 'lesen'); await submit(ss, 'lesen'); await post(ss, '/complete', {});
  const simResult = (await call(h.env, 'GET', `/exam/v1/attempts/${ss.attempt}/result`, { user: h.user })).json.result;
  assert.equal(typeof simResult.modules[0].points, 'number', 'a simulation keeps its module points'); assert.equal(simResult.practice_part, undefined);

  const c = await createPart(h, 1); assert.equal(c.status, 200);
  const s = session(h, c);
  const fid = (await h.env.DB.prepare('SELECT form_id FROM attempts WHERE id = ?1').bind(s.attempt).first()).form_id;
  await start(s, 'lesen');
  h.env.EXAM_PRACTICE_PART_FORMS = [P.P2.id, P.P3.id].filter((x) => x !== fid).join(',');   // the form leaves the pool
  const pk = await get(s, '/modules/lesen/package');
  assert.equal(pk.status, 403); assert.equal(pk.json.error, 'form_not_in_pool');
});
