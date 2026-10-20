/* Content revisions across the whole lifecycle (SCHEMA §2), on an in-memory D1 with the real migrations:
   learner release of P3@1 → a learner completes a Lesen attempt → a corrected P3@2 (tools/revise-form.mjs, new form id
   AND new item ids) is imported next to it → both revisions resolve; the original attempt's result, item review,
   answers and history are unchanged byte for byte; duplicate and conflicting imports fail atomically; the preflight
   tells the cases apart. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createExamD1, makeBucket, newUser, grant, call, rid, dev, PROXY_SECRET, MEDIA_SECRET, ROOT } from './harness.mjs';
import { start, submit, complete, post } from './flow.mjs';
import { buildRelease } from '../../exam-content/tools/build-release.mjs';
import { reviseFormDir } from '../../exam-content/tools/revise-form.mjs';
import { preflight, EXPORTS } from '../../exam-content/tools/registry-preflight.mjs';
import { validateForm } from '../../exam-content/tools/validate.mjs';

const P3 = path.join(ROOT, 'exam-content/forms/synthetic/b1-synthetic-p3');
const builtAt = '2026-10-20T00:00:00.000Z';
const learner = (dirs, release) => buildRelease({ release, purpose: 'learner', formDirs: dirs, builtAt });
const exportOf = (db) => Object.fromEntries(Object.entries(EXPORTS).map(([t, q]) => [t, db.raw.prepare(q).all().map((r) => ({ ...r }))]));
const TABLES = ['forms', 'form_modules', 'items_index', 'item_keys', 'form_assets', 'attempts', 'attempt_modules', 'responses_current', 'response_events', 'module_scores', 'results', 'audit_log'];
const snapshotDb = (db) => Object.fromEntries(TABLES.map((t) => [t, db.raw.prepare(`SELECT * FROM ${t} ORDER BY rowid`).all().map((r) => ({ ...r }))]));

function env(flags) {
  const DB = createExamD1();
  const clock = { t: Date.UTC(2026, 9, 20, 9, 0, 0) };
  const e = { DB, CONTENT: makeBucket(), RECORDINGS: makeBucket(), EXAM_PROXY_SECRET: PROXY_SECRET, EXAM_MEDIA_SECRET: MEDIA_SECRET,
    EXAM_ENABLED: 'on', EXAM_SYNTHETIC_FORMS: 'on', ...flags, __clock: () => clock.t, __logs: [] };
  return { env: e, clock };
}
function importRelease(e, build) {   // what the runbook does: upload the objects, run registry.sql
  for (const [k, buf] of build.files) e.CONTENT.objects.set(k, { bytes: buf });
  e.DB.raw.exec(build.sql);
}
function failedImport(e, build) {    // a failed registry import must leave nothing behind
  assert.throws(() => e.DB.raw.exec(build.sql), /UNIQUE constraint failed/);
  try { e.DB.raw.exec('ROLLBACK'); } catch { /* already closed */ }
}
async function lesenAttempt(h, user) {
  const c = await call(h.env, 'POST', '/exam/v1/attempts', { user, body: { mode: 'synthetic_module', module: 'lesen', level: 'b1', request_id: rid(), device_id: dev() } });
  assert.equal(c.status, 200, JSON.stringify(c.json));
  const s = { ...h, user, attempt: c.json.attempt_id, lease: c.json.lease.lease_id };
  await start(s, 'lesen');
  const keys = Object.fromEntries(h.env.DB.raw.prepare("SELECT k.item_id, k.key_json FROM item_keys k JOIN items_index i ON i.item_id = k.item_id JOIN attempts a ON a.form_id = k.form_id WHERE a.id = ? AND i.module = 'lesen' AND i.is_example = 0").all(s.attempt).map((r) => [r.item_id, JSON.parse(r.key_json).correct]));
  const answers = Object.entries(keys).map(([item_id, k]) => ({ item_id, value: { option_id: k }, seq: 1 }));
  for (let i = 0; i < answers.length; i += 20) assert.equal((await post(s, '/modules/lesen/answers', { answers: answers.slice(i, i + 20) })).status, 200);
  await submit(s, 'lesen'); await complete(s);
  return s;
}
const reads = async (h, s) => ({
  result: (await call(h.env, 'GET', `/exam/v1/attempts/${s.attempt}/result`, { user: s.user })).json,
  review: (await call(h.env, 'GET', `/exam/v1/attempts/${s.attempt}/modules/lesen/review`, { user: s.user })).json,
  history: (await call(h.env, 'GET', '/exam/v1/attempts', { user: s.user })).json
});

function correctedRevision() {   // P3@2 = revise-form copy of P3@1 with one corrected explanation
  const dir = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'kx-rev-')), 'p3r2');
  assert.equal(reviseFormDir(P3, dir), 'frm:b1:synthetic-p3@2');
  const p = path.join(dir, 'items.json'); const items = JSON.parse(fs.readFileSync(p, 'utf8'));
  items.find((i) => i.id === 'itm:b1:p3-l1-02-r2').feedback.explanation_de = 'Korrigierte Erklärung (Revision 2).';
  fs.writeFileSync(p, JSON.stringify(items, null, 2));
  return dir;
}

test('REVISION: revise-form gives a new form id and new item ids that supersede the old ones; the revision validates', () => {
  const dir = correctedRevision();
  try {
    const v = validateForm(dir); assert.equal(v.ok, true, JSON.stringify(v.errors));
    const form = JSON.parse(fs.readFileSync(path.join(dir, 'form.json'), 'utf8'));
    assert.deepEqual([form.id, form.rev, form.supersedes], ['frm:b1:synthetic-p3@2', 2, 'frm:b1:synthetic-p3@1']);
    const items = JSON.parse(fs.readFileSync(path.join(dir, 'items.json'), 'utf8'));
    const old = JSON.parse(fs.readFileSync(path.join(P3, 'items.json'), 'utf8'));
    assert.ok(items.every((it, i) => it.id === `${old[i].id}-r2` && it.supersedes === old[i].id && it.rev === 2));
    const keys = JSON.parse(fs.readFileSync(path.join(dir, 'keys.json'), 'utf8'));
    assert.equal(keys.form_id, 'frm:b1:synthetic-p3@2');
    assert.ok(Object.keys(keys.keys).every((k) => k.endsWith('-r2')));
    assert.equal(fs.readFileSync(path.join(P3, 'items.json'), 'utf8').includes('-r2'), false, 'the source revision is untouched');
    // the validator refuses a revision that reuses the old item ids, and a revision-1 form with suffixed ids
    const bad = JSON.parse(fs.readFileSync(path.join(dir, 'items.json'), 'utf8'));
    bad[0].id = bad[0].supersedes; fs.writeFileSync(path.join(dir, 'items.json'), JSON.stringify(bad));
    assert.ok(validateForm(dir).errors.some((e) => e.code === 'revision_ids'));
  } finally { fs.rmSync(path.dirname(dir), { recursive: true, force: true }); }
});

test('REVISION lifecycle: P3@1 used in an attempt, P3@2 imported next to it — history unchanged, both revisions resolve, bad imports atomic', async () => {
  const rev2 = correctedRevision();
  try {
    const h = env({ EXAM_MODULE_ONLY: 'lesen', EXAM_RELEASE_FORMS: 'frm:b1:synthetic-p3@1' });
    const r1 = learner([P3], 'r001');
    assert.equal(preflight(r1, exportOf(h.env.DB)).ok, true);
    importRelease(h.env, r1);

    // revision 1 in use
    const a = newUser(); await grant(h.env, a);
    const sa = await lesenAttempt(h, a);
    const before = await reads(h, sa);
    assert.equal(before.result.result.modules[0].points, 100);
    assert.equal(before.review.items.find((i) => i.item_id === 'itm:b1:p3-l1-02').explanation, JSON.parse(fs.readFileSync(path.join(P3, 'items.json'), 'utf8')).find((i) => i.id === 'itm:b1:p3-l1-02').feedback.explanation_de);
    const dbBefore = snapshotDb(h.env.DB);

    // the corrected revision: preflight says new, the insert-only import succeeds, nothing of revision 1 changes
    const r2 = learner([rev2], 'r002');
    const pf = preflight(r2, exportOf(h.env.DB));
    assert.equal(pf.ok, true, JSON.stringify(pf)); assert.deepEqual(pf.forms.map((f) => f.verdict), ['new']);
    importRelease(h.env, r2);
    const dbAfter = snapshotDb(h.env.DB);
    for (const t of ['attempts', 'attempt_modules', 'responses_current', 'response_events', 'module_scores', 'results', 'audit_log']) assert.deepEqual(dbAfter[t], dbBefore[t], `${t} unchanged by the import`);
    for (const t of ['forms', 'form_modules', 'items_index', 'item_keys', 'form_assets']) {
      const keep = dbAfter[t].filter((r) => (r.form_id || r.id) === 'frm:b1:synthetic-p3@1');
      assert.deepEqual(keep, dbBefore[t], `${t}: revision-1 rows untouched`);
    }
    assert.deepEqual(await reads(h, sa), before, 'result, item review and history of the original attempt are identical');

    // switching the release set to revision 2: a new attempt gets P3@2 and the corrected text; the old attempt still reads @1
    h.env.EXAM_RELEASE_FORMS = 'frm:b1:synthetic-p3@2';
    const b = newUser(); await grant(h.env, b);
    const sb = await lesenAttempt(h, b);
    assert.equal(h.env.DB.raw.prepare('SELECT form_id FROM attempts WHERE id = ?').get(sb.attempt).form_id, 'frm:b1:synthetic-p3@2');
    const rb = await reads(h, sb);
    assert.equal(rb.review.items.find((i) => i.item_id === 'itm:b1:p3-l1-02-r2').explanation, 'Korrigierte Erklärung (Revision 2).');
    assert.ok(rb.review.items.every((i) => i.item_id.endsWith('-r2')));
    assert.deepEqual(await reads(h, sa), before, 'still identical after revision 2 is in use');
    // a released-but-withdrawn revision cannot be continued; its completed history stays readable (shown above)
    const sc = await call(h.env, 'POST', '/exam/v1/attempts', { user: a, body: { mode: 'synthetic_module', module: 'lesen', level: 'b1', request_id: rid(), device_id: dev() } });
    assert.equal(h.env.DB.raw.prepare('SELECT form_id FROM attempts WHERE id = ?').get(sc.json.attempt_id).form_id, 'frm:b1:synthetic-p3@2', 'no new attempt on the superseded revision');

    // duplicate import of revision 2 and an in-place edit of revision 1: preflight refuses, the import fails atomically
    const snap = snapshotDb(h.env.DB);
    assert.deepEqual(preflight(learner([rev2], 'r003'), exportOf(h.env.DB)).forms.map((f) => f.verdict), ['identical']);
    failedImport(h.env, learner([rev2], 'r003'));
    assert.deepEqual(snapshotDb(h.env.DB), snap, 'duplicate import changed nothing');
    const inPlace = path.join(path.dirname(rev2), 'p3-inplace');
    fs.mkdirSync(inPlace);
    for (const f of fs.readdirSync(P3)) fs.copyFileSync(path.join(P3, f), path.join(inPlace, f));
    const ip = JSON.parse(fs.readFileSync(path.join(inPlace, 'items.json'), 'utf8'));
    ip.find((i) => i.id === 'itm:b1:p3-l1-02').feedback.explanation_de = 'Stillschweigend geändert.';
    fs.writeFileSync(path.join(inPlace, 'items.json'), JSON.stringify(ip));
    const pfi = preflight(learner([inPlace], 'r004'), exportOf(h.env.DB));
    assert.equal(pfi.forms[0].verdict, 'conflict'); assert.match(pfi.forms[0].reasons.join(' '), /item key\/explanation record/);
    failedImport(h.env, learner([inPlace], 'r004'));
    assert.deepEqual(snapshotDb(h.env.DB), snap, 'conflicting import changed nothing');
    assert.deepEqual(await reads(h, sa), before);
    // a revision that kept the old item ids is caught by the preflight (and by the validator, previous test)
    const reuse = path.join(path.dirname(rev2), 'p3r3-reuse');
    fs.mkdirSync(reuse);
    for (const f of fs.readdirSync(P3)) fs.copyFileSync(path.join(P3, f), path.join(reuse, f));
    const fj = JSON.parse(fs.readFileSync(path.join(reuse, 'form.json'), 'utf8')); fj.id = 'frm:b1:synthetic-p3@3'; fj.rev = 3; fs.writeFileSync(path.join(reuse, 'form.json'), JSON.stringify(fj));
    const kj = JSON.parse(fs.readFileSync(path.join(reuse, 'keys.json'), 'utf8')); kj.form_id = fj.id; fs.writeFileSync(path.join(reuse, 'keys.json'), JSON.stringify(kj));
    assert.throws(() => learner([reuse], 'r005'), /revision_ids/, 'the builder validates and refuses it');
  } finally { fs.rmSync(path.dirname(rev2), { recursive: true, force: true }); }
});
