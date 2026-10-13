/* SYNTHETIC PRACTICE FORM P1 (tools/make-practice-form.mjs) on the unchanged engine: a complete attempt at API level.
   Original Klarweg texts, not placeholders; every scored item has a server key; numbering is exam-wide; nothing
   server-only (keys, listening scripts) reaches a module package; OD-45 result wording is unchanged. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { setup, call, newUser, role, pkgFor, keysFor, scoredItems, PRACTICE_FORM_DIR } from './harness.mjs';
import { A, start, submit, answerObjective, runHoeren, runSchreiben, runSprechen, complete } from './flow.mjs';

const P1 = { formDirs: [PRACTICE_FORM_DIR] };

test('PRACTICE P1: content is original and realistic (no placeholders), clearly synthetic practice, keys complete, numbering exam-wide', async () => {
  const s = await setup(P1);
  const keys = keysFor(s.build);
  assert.equal(s.created.form.test_content, true);
  assert.match(s.created.form.label, /Übungsform P1/);
  const raw = ['items.json', 'tasks.json', 'assets.json'].map((f) => fs.readFileSync(path.join(PRACTICE_FORM_DIR, f), 'utf8')).join('');
  assert.equal(/Teststadt|Testperson|SYNTHETISCHER TESTTEXT|Testsignal|Testaussage|Testfrage/.test(raw), false, 'no system-test placeholders');
  assert.equal(/Goethe/.test(raw), false, 'no reference to Goethe in the practice content');
  for (const m of ['lesen', 'hoeren']) {
    const items = scoredItems(pkgFor(s.build, m)).filter((it) => !it.is_example);
    assert.equal(items.length, 30, `${m}: 30 scored items`);
    assert.deepEqual(items.map((i) => i.display_no), Array.from({ length: 30 }, (_, i) => String(i + 1)), `${m}: numbering 1–30 across parts`);
    for (const it of items) {
      assert.ok(keys[it.item_id] && keys[it.item_id].kind === 'single', `${it.item_id} has a key`);
      assert.ok(it.options.some((o) => o.option_id === keys[it.item_id].correct), `${it.item_id}: the key is one of its options`);
      assert.ok(it.stem.length > 8 && /^\d+\. /.test(it.stem), `${it.item_id}: numbered, meaningful stem`);
    }
  }
  const pkgs = ['lesen', 'hoeren', 'schreiben', 'sprechen'].map((m) => JSON.stringify(pkgFor(s.build, m))).join('');
  assert.equal(/"correct"|script_de/.test(pkgs), false, 'no key and no listening script in any module package');
  // Lesen Teil 3: each advertisement at most once; exactly one situation without a matching ad
  const l3 = scoredItems(pkgFor(s.build, 'lesen')).filter((it) => !it.is_example && it.interaction === 'matching_pool').map((it) => keys[it.item_id].correct);
  assert.equal(l3.filter((k) => k === '0').length, 1); assert.equal(new Set(l3.filter((k) => k !== '0')).size, l3.length - 1);
});

test('PRACTICE P1: complete attempt — objective scores, item review, two human ratings, final result with OD-45 wording', async () => {
  const s = await setup(P1);
  const keys = keysFor(s.build);
  await start(s, 'lesen');
  await answerObjective(s, 'lesen', (it, k) => (Number(it.display_no) <= 24 ? k.correct : undefined));   // 24 correct, 6 unanswered
  await submit(s, 'lesen');
  await runHoeren(s, (it, k) => k.correct); await submit(s, 'hoeren');
  const w = await runSchreiben(s); await submit(s, 'schreiben');
  await runSprechen(s); await submit(s, 'sprechen');
  const done = await complete(s);
  // the result can be opened again later: availability names the learner's OWN last completed attempt only
  assert.equal((await call(s.env, 'GET', '/exam/v1/availability', { user: s.user })).json.last_completed, s.attempt);
  assert.equal((await call(s.env, 'GET', '/exam/v1/availability', { user: newUser() })).json.last_completed, null);
  const by = Object.fromEntries(done.result.modules.map((m) => [m.module, m]));
  assert.deepEqual(by.lesen.counts, { correct: 24, incorrect: 0, unanswered: 6 });
  assert.equal(by.hoeren.points, 100);
  assert.equal(done.result.label, 'Klarweg B1 Simulation – Ergebnis');
  assert.ok(done.result.disclaimer.startsWith('Klarweg-Simulation – kein offizielles Ergebnis des Goethe-Instituts'));
  const rv = await call(s.env, 'GET', A(s, '/modules/lesen/review'), { user: s.user });
  assert.equal(rv.status, 200);
  assert.deepEqual(rv.json.summary, { correct: 24, incorrect: 0, unanswered: 6, total: 30 });
  assert.ok(rv.json.items.every((i) => i.correct_answer.option_id === keys[i.item_id].correct));
  // two independent raters, from the data the rater screen uses
  const r1 = newUser(), r2 = newUser(); await role(s.env, r1, 'rater'); await role(s.env, r2, 'rater');
  for (const [rater, round] of [[r1, 1], [r2, 2]]) {
    const d = (await call(s.env, 'GET', `/exam/v1/admin/attempts/${s.attempt}/productive`, { user: rater })).json;
    assert.equal(d.writing.length, w.length);
    for (const u of d.units) {
      const x = await call(s.env, 'POST', '/exam/v1/admin/ratings', { user: rater, body: { attempt_id: s.attempt, item_id: u.item_id, round, bands: Object.fromEntries(Object.keys(u.criteria).map((c) => [c, 'A'])) } });
      assert.equal(x.status, 200, JSON.stringify(x.json));
    }
  }
  const res = (await call(s.env, 'GET', A(s, '/result'), { user: s.user })).json.result;
  const fin = Object.fromEntries(res.modules.map((m) => [m.module, m]));
  assert.equal(fin.schreiben.status, 'final'); assert.equal(fin.schreiben.points, 100); assert.equal(fin.schreiben.pass, true);
  assert.equal(fin.sprechen.status, 'final'); assert.equal(fin.sprechen.points, 100);
});

test('PRACTICE P1: explanations, evidence and listening scripts stay on the server until the owner has submitted the module', async () => {
  const s = await setup(P1);
  const read = (f) => JSON.parse(fs.readFileSync(path.join(PRACTICE_FORM_DIR, f), 'utf8'));
  const explanations = read('items.json').filter((it) => it.feedback).map((it) => it.feedback.explanation_de);
  const scripts = Object.fromEntries(read('assets.json').filter((a) => a.script_de).map((a) => [a.id, a.script_de]));
  assert.equal(explanations.length, 60, 'every scored Lesen and Hören item has an explanation');
  const secret = (text) => explanations.some((e) => text.includes(e)) || Object.values(scripts).some((t) => text.includes(t.slice(0, 40)));
  // never in a package, the attempt or a media asset (only TEST AUDIO wav files are media)
  for (const m of ['lesen', 'hoeren', 'schreiben', 'sprechen']) assert.equal(secret(JSON.stringify(pkgFor(s.build, m))), false, `${m} package`);
  assert.deepEqual((await s.env.DB.prepare('SELECT DISTINCT mime FROM form_assets').all()).results.map((r) => r.mime), ['audio/wav']);
  const review = (m, user = s.user) => call(s.env, 'GET', A(s, `/modules/${m}/review`), { user });

  // Lesen: refused before and while running; complete after submission, with evidence the learner can find in the text
  for (const when of ['before', 'running']) {
    if (when === 'running') await start(s, 'lesen');
    const r = await review('lesen');
    assert.equal(r.status, 409, `lesen ${when}`); assert.equal(secret(r.buf.toString('utf8')), false);
  }
  const pkgLesen = await call(s.env, 'GET', A(s, '/modules/lesen/package'), { user: s.user });
  assert.equal(secret(pkgLesen.buf.toString('utf8')), false, 'the running package as served');
  await answerObjective(s, 'lesen'); await submit(s, 'lesen');
  const hoerenEarly = await review('hoeren');
  assert.equal(hoerenEarly.status, 409, 'Hören review stays closed after Lesen was submitted'); assert.equal(secret(hoerenEarly.buf.toString('utf8')), false);
  let r = await review('lesen');
  assert.equal(r.status, 200);
  const lesenText = JSON.stringify(pkgFor(s.build, 'lesen'));
  for (const it of r.json.items) {
    assert.ok(explanations.includes(it.explanation), `${it.item_id}: explanation`);
    assert.equal(it.evidence.length, 1); assert.ok(lesenText.includes(JSON.stringify(it.evidence[0].text).slice(1, -1)), `${it.item_id}: evidence is in the text`);
  }
  assert.deepEqual(r.json.transcripts, [], 'no listening scripts in the Lesen review');

  // Hören: refused while running; scripts and explanations only after submission
  await runHoeren(s, (it, k) => k.correct);
  r = await review('hoeren');
  assert.equal(r.status, 409); assert.equal(secret(r.buf.toString('utf8')), false);
  await submit(s, 'hoeren');
  for (const u of [newUser(), await (async () => { const x = newUser(); await role(s.env, x, 'rater'); return x; })()]) {
    r = await review('hoeren', u); assert.equal(r.status, 404); assert.equal(secret(r.buf.toString('utf8')), false, 'nothing for another user');
  }
  r = await review('hoeren');
  assert.equal(r.status, 200);
  assert.deepEqual(r.json.transcripts.map((t) => [t.part, t.text]), Object.entries(scripts).filter(([id]) => /p1-h(1-t|2$|3$|4$)/.test(id)).map(([id, t]) => [Number(id.match(/h(\d)/)[1]), t]),
    'the scripts of all scored Hören texts, once each, in exam order');
  for (const it of r.json.items) {
    assert.ok(explanations.includes(it.explanation), `${it.item_id}: explanation`);
    const src = r.json.transcripts.find((t) => t.asset_id === it.evidence[0].asset_id);
    assert.ok(src && src.part === it.part && src.text.slice(it.evidence[0].start, it.evidence[0].end) === it.evidence[0].text, `${it.item_id}: evidence span in its script`);
  }
});
