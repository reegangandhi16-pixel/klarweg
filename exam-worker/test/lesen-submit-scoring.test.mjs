/* LESEN audit (API level, synthetic B1 form): answer saving and recovery, submission, server-side scoring and the
   result. Expectations come from the synthetic fixture, its server-only key file and the level config's scoring
   rules (objective table, pass threshold, grade bands); nothing is hard-coded beyond what the fixture defines. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { setup, call, rid, keysFor, pkgFor, scoredItems, ROOT } from './harness.mjs';
import { A, post, get, start, submit, runHoeren, runSchreiben, runSprechen, complete } from './flow.mjs';

const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'exam-content/levels/b1/level-config.json'), 'utf8'));
const lesenCfg = cfg.modules.find((m) => m.module === 'lesen');
const table = cfg.objective_tables[lesenCfg.scoring.table];
/* Expected module outcome for a raw count, from the configured rules (not from scoring.js). */
const expected = (raw) => {
  const points = table.map[String(raw)];
  const band = cfg.grade_bands.find((b) => points >= b.min && points <= b.max);
  return { points, pass: points >= cfg.pass_threshold_points, predikat: band.label };
};

const allItems = (pkg) => pkg.parts.flatMap((p) => p.tasks.flatMap((t) => t.items));
const wrongOption = (it, key) => it.options.map((o) => o.option_id).find((o) => o !== key.correct);
const save = (s, answers) => post(s, '/modules/lesen/answers', { answers });
async function saveAll(s, answers) {
  for (let i = 0; i < answers.length; i += 20) {
    const r = await save(s, answers.slice(i, i + 20));
    assert.equal(r.status, 200, JSON.stringify(r.json));
  }
}
const scoreRow = (s) => s.env.DB.prepare("SELECT * FROM module_scores WHERE attempt_id = ?1 AND module = 'lesen'").bind(s.attempt).first();
const count = async (s, sql, ...b) => (await s.env.DB.prepare(sql).bind(s.attempt, ...b).first()).n;

test('LESEN fixture: 30 scored items, all keyed server-side; the 4 examples carry no points', async () => {
  const s = await setup();
  const pkg = pkgFor(s.build, 'lesen');
  const keys = keysFor(s.build);
  const scored = scoredItems(pkg);
  assert.equal(scored.length, 30);
  assert.equal(scored.length, table.max_raw);
  for (const it of scored) {
    assert.equal(keys[it.item_id]?.kind, 'single', it.item_id);
    assert.ok(it.options.some((o) => o.option_id === keys[it.item_id].correct), `${it.item_id}: key is one of its options`);
    assert.ok(wrongOption(it, keys[it.item_id]), `${it.item_id}: has an incorrect option`);
  }
  const index = (await s.env.DB.prepare("SELECT item_id, is_example, points FROM items_index WHERE module = 'lesen'").all()).results;
  assert.deepEqual(index.filter((r) => r.points === 1).map((r) => r.item_id).sort(), scored.map((it) => it.item_id).sort());
  const examples = allItems(pkg).filter((it) => it.is_example);
  assert.equal(examples.length, 4);
  for (const ex of examples) assert.deepEqual(index.find((r) => r.item_id === ex.item_id), { item_id: ex.item_id, is_example: 1, points: 0 });
});

test('LESEN scoring via the API: mixed correct / incorrect / cleared / unanswered → configured table value', async () => {
  const s = await setup();
  await start(s, 'lesen');
  const keys = keysFor(s.build);
  const scored = scoredItems(pkgFor(s.build, 'lesen'));
  // i%4: 0 correct, 1 incorrect, 2 cleared (option_id null), 3 never answered
  const answers = [];
  scored.forEach((it, i) => {
    const k = keys[it.item_id];
    if (i % 4 === 0) answers.push({ item_id: it.item_id, value: { option_id: k.correct }, seq: 1 });
    if (i % 4 === 1) answers.push({ item_id: it.item_id, value: { option_id: wrongOption(it, k) }, seq: 1 });
    if (i % 4 === 2) answers.push({ item_id: it.item_id, value: { option_id: null }, seq: 1 });
  });
  await saveAll(s, answers);
  const correct = scored.filter((_, i) => i % 4 === 0).length;
  const incorrect = scored.filter((_, i) => i % 4 === 1).length;
  await submit(s, 'lesen');
  const row = await scoreRow(s);
  const exp = expected(correct);
  assert.equal(row.status, 'final');
  assert.equal(row.raw, correct);
  assert.equal(row.raw_max, 30);
  assert.equal(row.points, exp.points);
  assert.equal(row.pass, exp.pass ? 1 : 0);
  assert.equal(row.predikat, exp.predikat);
  assert.deepEqual(JSON.parse(row.rule_flags_json), { correct, incorrect, unanswered: 30 - correct - incorrect });
});

test('LESEN scoring via the API: every answer incorrect → raw 0; all correct → max', async () => {
  for (const mode of ['wrong', 'right']) {
    const s = await setup();
    await start(s, 'lesen');
    const keys = keysFor(s.build);
    await saveAll(s, scoredItems(pkgFor(s.build, 'lesen')).map((it) => ({ item_id: it.item_id,
      value: { option_id: mode === 'right' ? keys[it.item_id].correct : wrongOption(it, keys[it.item_id]) }, seq: 1 })));
    await submit(s, 'lesen');
    const row = await scoreRow(s);
    const raw = mode === 'right' ? 30 : 0;
    assert.equal(row.raw, raw, mode);
    assert.equal(row.points, expected(raw).points, mode);
    assert.deepEqual(JSON.parse(row.rule_flags_json), { correct: raw, incorrect: 30 - raw, unanswered: 0 }, mode);
  }
});

test('LESEN examples cannot be answered, alone or inside a batch (the whole batch is refused, nothing stored)', async () => {
  const s = await setup();
  await start(s, 'lesen');
  const pkg = pkgFor(s.build, 'lesen');
  const keys = keysFor(s.build);
  const [first] = scoredItems(pkg);
  for (const ex of allItems(pkg).filter((it) => it.is_example)) {
    const r = await save(s, [{ item_id: ex.item_id, value: { option_id: ex.example_answer }, seq: 1 }]);
    assert.equal(r.status, 422); assert.equal(r.json.error, 'item_is_example');
  }
  const ex = allItems(pkg).find((it) => it.is_example);
  const mixed = await save(s, [{ item_id: first.item_id, value: { option_id: keys[first.item_id].correct }, seq: 1 },
    { item_id: ex.item_id, value: { option_id: ex.example_answer }, seq: 1 }]);
  assert.equal(mixed.json.error, 'item_is_example');
  assert.equal(await count(s, 'SELECT COUNT(*) AS n FROM responses_current WHERE attempt_id = ?1'), 0);
  await submit(s, 'lesen');
  assert.deepEqual(JSON.parse((await scoreRow(s)).rule_flags_json), { correct: 0, incorrect: 0, unanswered: 30 });
});

test('LESEN save → reload (lease re-acquired) → the accepted answers come back; only a higher seq replaces; score uses them', async () => {
  const s = await setup();
  await start(s, 'lesen');
  const keys = keysFor(s.build);
  const scored = scoredItems(pkgFor(s.build, 'lesen'));
  await saveAll(s, scored.map((it) => ({ item_id: it.item_id, value: { option_id: keys[it.item_id].correct }, seq: 1 })));
  const changed = scored.slice(0, 5);
  await saveAll(s, changed.map((it) => ({ item_id: it.item_id, value: { option_id: wrongOption(it, keys[it.item_id]) }, seq: 2 })));
  // a delayed, older write (seq 1) arrives after seq 2: reported stale, not applied
  const stale = await save(s, changed.map((it) => ({ item_id: it.item_id, value: { option_id: keys[it.item_id].correct }, seq: 1 })));
  assert.ok(stale.json.results.every((r) => r.status === 'stale' && r.current_seq === 2));

  // reload: same device re-acquires the lease (takeover of its own live lease), then recovers the answers
  const l = await call(s.env, 'POST', A(s, '/lease'), { user: s.user, body: { device_id: s.device, takeover: true } });
  assert.equal(l.status, 200, JSON.stringify(l.json));
  const old = s.lease;
  s.lease = l.json.lease.lease_id;
  assert.equal((await call(s.env, 'GET', A(s, `/modules/lesen/answers?lease_id=${old}`), { user: s.user })).status, 409);   // old tab is out
  const back = (await get(s, '/modules/lesen/answers')).json.answers;
  assert.equal(back.length, 30);
  const byId = Object.fromEntries(back.map((a) => [a.item_id, a]));
  for (const it of scored) {
    const isChanged = changed.includes(it);
    assert.deepEqual(byId[it.item_id].value, { option_id: isChanged ? wrongOption(it, keys[it.item_id]) : keys[it.item_id].correct }, it.item_id);
    assert.equal(byId[it.item_id].seq, isChanged ? 2 : 1);
  }
  await submit(s, 'lesen');
  const row = await scoreRow(s);
  assert.equal(row.raw, 25);
  assert.equal(row.points, expected(25).points);
});

test('LESEN submit: finalizes once, unlocks only Hören; retries (same or new request id) never re-score or double-count', async () => {
  const s = await setup();
  assert.equal((await post(s, '/modules/lesen/submit', {})).json.error, 'invalid_transition');   // not started
  await start(s, 'lesen');
  const keys = keysFor(s.build);
  const scored = scoredItems(pkgFor(s.build, 'lesen'));
  await saveAll(s, scored.slice(0, 20).map((it) => ({ item_id: it.item_id, value: { option_id: keys[it.item_id].correct }, seq: 1 })));

  const requestId = rid();
  const first = await post(s, '/modules/lesen/submit', { request_id: requestId });
  assert.equal(first.status, 200, JSON.stringify(first.json));
  assert.equal(first.json.module.status, 'submitted');
  const before = await scoreRow(s);
  s.advance(5_000);
  const replay = await post(s, '/modules/lesen/submit', { request_id: requestId });
  assert.equal(replay.json.replayed, true);
  assert.deepEqual({ ...replay.json, replayed: undefined }, { ...first.json, replayed: undefined });
  const again = await post(s, '/modules/lesen/submit', {});
  assert.equal(again.status, 200); assert.equal(again.json.already, true);

  const after = await scoreRow(s);
  assert.deepEqual(after, before);   // not recomputed: same computed_at, same values
  assert.equal(after.raw, 20); assert.equal(after.points, expected(20).points);
  assert.equal(await count(s, "SELECT COUNT(*) AS n FROM module_scores WHERE attempt_id = ?1 AND module = 'lesen'"), 1);
  assert.equal(await count(s, "SELECT COUNT(*) AS n FROM audit_log WHERE attempt_id = ?1 AND action = 'module_submitted'"), 1);
  const mods = Object.fromEntries((await call(s.env, 'GET', A(s), { user: s.user })).json.modules.map((m) => [m.module, m.status]));
  assert.deepEqual(mods, { lesen: 'submitted', hoeren: 'available', schreiben: 'locked', sprechen: 'locked' });
  assert.equal((await save(s, [{ item_id: scored[25].item_id, value: { option_id: keys[scored[25].item_id].correct }, seq: 9 }])).json.error, 'module_submitted');
  assert.equal((await scoreRow(s)).raw, 20);
});

test('LESEN keys stay server-side: package has no keys for scored items; the result reports counts only', async () => {
  const s = await setup();
  await start(s, 'lesen');
  const pkgRes = (await get(s, '/modules/lesen/package')).json;
  const items = allItems(pkgRes.package);
  for (const it of items) {
    const allowed = ['item_id', 'display_no', 'interaction', 'stem', 'options', 'response_spec', 'is_example', ...(it.is_example ? ['example_answer'] : [])];
    assert.deepEqual(Object.keys(it).filter((k) => !allowed.includes(k)), [], it.item_id);
    if (!it.is_example) assert.equal('example_answer' in it, false);
    for (const o of it.options) assert.deepEqual(Object.keys(o).filter((k) => !['option_id', 'label', 'text'].includes(k)), [], it.item_id);
  }
  const keys = keysFor(s.build);
  const scored = scoredItems(pkgRes.package);
  await saveAll(s, scored.slice(0, 12).map((it) => ({ item_id: it.item_id, value: { option_id: keys[it.item_id].correct }, seq: 1 })));
  const sub = await post(s, '/modules/lesen/submit', {});
  assert.equal(JSON.stringify(sub.json).includes('itm:b1:syn-l'), false);

  await runHoeren(s, () => undefined); await submit(s, 'hoeren');
  await runSchreiben(s); await submit(s, 'schreiben');
  await runSprechen(s); await submit(s, 'sprechen');
  const done = await complete(s);
  const got = (await call(s.env, 'GET', A(s, '/result'), { user: s.user })).json.result;
  assert.deepEqual(got, done.result);
  const lesen = got.modules.find((m) => m.module === 'lesen');
  const exp = expected(12);
  assert.deepEqual(lesen, { module: 'lesen', submitted: true, submit_kind: 'manual', status: 'final', points: exp.points, max_points: 100,
    pass: exp.pass, predikat: exp.predikat, counts: { correct: 12, incorrect: 0, unanswered: 18 }, note: null });
  const text = JSON.stringify(got);
  assert.equal(text.includes('itm:'), false);
  assert.equal(/"(correct_option|key|keys|answer_key|map)"/.test(text), false);
});
