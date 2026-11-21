/* SCHREIBEN audit (API level, synthetic B1 form): text saving and versions, what is frozen at submission, word count
   and the below-half-target flag, empty answers, limits, NFC, deadline auto-submit and the rater view. Expectations
   come from the synthetic form, the level config and the shared word counter. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { setup, call, newUser, role, pkgFor, scoredItems, sha, ROOT } from './harness.mjs';
import { A, post, get, start, submit } from './flow.mjs';
import { countWords } from '../src/wordcount.js';
import { _clearCaches } from '../src/content.js';

const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'exam-content/levels/b1/level-config.json'), 'utf8'));
const partCfg = (part) => cfg.modules.find((m) => m.module === 'schreiben').parts.find((p) => p.part === part);

async function toSchreiben(s) {
  for (const m of ['lesen', 'hoeren']) { await start(s, m); if (m === 'hoeren') await post(s, '/hoeren/events', { type: 'ready' }); await submit(s, m); }
  return start(s, 'schreiben');
}
const items = (s) => scoredItems(pkgFor(s.build, 'schreiben'));
const saveText = (s, item_id, text, seq) => post(s, '/modules/schreiben/answers', { answers: [{ item_id, value: { text }, seq }] });
const finalRows = async (s) => Object.fromEntries((await s.env.DB.prepare('SELECT * FROM writing_final WHERE attempt_id = ?1').bind(s.attempt).all()).results.map((r) => [r.item_id, r]));
/* move the server clock forward, keeping the device lease alive like the real heartbeat */
async function goto(s, t) {
  while (s.clock.t < t) { s.clock.t = Math.min(t, s.clock.t + 50_000); await post(s, '/heartbeat', {}); }
}
const words = (n, w = 'Wort') => Array.from({ length: n }, (_, i) => `${w}${i}`).join(' ');

test('SCHREIBEN fixture: 3 text tasks with the configured target words and rubrics; no points, no keys in the package', async () => {
  const s = await setup();
  await toSchreiben(s);
  const pkg = (await get(s, '/modules/schreiben/package')).json.package;
  const its = pkg.parts.flatMap((p) => p.tasks.flatMap((t) => t.items.map((it) => ({ it, part: p.part }))));
  assert.equal(its.length, 3);
  for (const { it, part } of its) {
    assert.equal(it.interaction, 'text_response');
    assert.equal(it.response_spec.target_words, partCfg(part).target_words, it.item_id);
    assert.equal('example_answer' in it, false);
  }
  const idx = (await s.env.DB.prepare("SELECT item_id, points, rubric_id FROM items_index WHERE module = 'schreiben'").all()).results;
  for (const { it, part } of its) assert.deepEqual(idx.find((r) => r.item_id === it.item_id), { item_id: it.item_id, points: 0, rubric_id: partCfg(part).rubric });
});

test('SCHREIBEN versions: every accepted version is kept; a stale write is not; submission freezes the latest accepted text', async () => {
  const s = await setup();
  await toSchreiben(s);
  const [it] = items(s);
  const v1 = 'Erste Fassung mit wenigen Wörtern.', v2 = 'Zweite Fassung: länger, mit Umlauten — Größe, Straße, Übung.';
  const r1 = await saveText(s, it.item_id, v1, 1);
  assert.deepEqual(r1.json.results[0], { item_id: it.item_id, seq: 1, status: 'accepted', current_seq: 1, words: countWords(v1) });
  assert.equal((await saveText(s, it.item_id, v2, 3)).json.results[0].status, 'accepted');
  // a delayed older write (seq 2, never stored before) arrives after seq 3: stale, and not kept as a version
  const stale = await saveText(s, it.item_id, 'verspätete alte Fassung', 2);
  assert.equal(stale.json.results[0].status, 'stale');
  const versions = (await s.env.DB.prepare('SELECT version, text, words FROM writing_versions WHERE attempt_id = ?1 AND item_id = ?2 ORDER BY version').bind(s.attempt, it.item_id).all()).results;
  assert.deepEqual(versions, [{ version: 1, text: v1, words: countWords(v1) }, { version: 3, text: v2, words: countWords(v2) }]);
  await submit(s, 'schreiben');
  const f = (await finalRows(s))[it.item_id];
  assert.equal(f.text, v2); assert.equal(f.words, countWords(v2)); assert.equal(f.sha256, sha(Buffer.from(v2, 'utf8')));
});

test('SCHREIBEN below-half-target flag follows the configured length rule at its boundary; empty and unanswered tasks are frozen as empty', async () => {
  const s = await setup();
  await toSchreiben(s);
  const [a, b, c] = items(s);
  const limit = (it) => (it.response_spec.target_words * cfg.rubrics[partCfg(Number(it.item_id.slice(-1))).rubric].length_rule_pct) / 100;
  assert.ok(Number.isInteger(limit(a)) && Number.isInteger(limit(b)), 'synthetic targets give whole-word limits');
  await saveText(s, a.item_id, words(limit(a) - 1), 1);    // one word short of the limit → flagged
  await saveText(s, b.item_id, words(limit(b)), 1);        // exactly at the limit → not flagged
  await saveText(s, c.item_id, 'irgendein Text', 1);
  await saveText(s, c.item_id, '', 2);                      // cleared again
  await submit(s, 'schreiben');
  const f = await finalRows(s);
  assert.equal(Object.keys(f).length, 3);
  assert.deepEqual([f[a.item_id].words, f[a.item_id].below_half_target, f[a.item_id].target_words], [limit(a) - 1, 1, a.response_spec.target_words]);
  assert.deepEqual([f[b.item_id].words, f[b.item_id].below_half_target], [limit(b), 0]);
  assert.deepEqual([f[c.item_id].text, f[c.item_id].words, f[c.item_id].below_half_target, f[c.item_id].sha256], ['', 0, 1, sha(Buffer.from('', 'utf8'))]);

  const s2 = await setup();                                 // a task never answered at all is frozen the same way
  await toSchreiben(s2);
  await submit(s2, 'schreiben');
  const f2 = await finalRows(s2);
  assert.equal(Object.keys(f2).length, 3);
  for (const r of Object.values(f2)) assert.deepEqual([r.text, r.words, r.below_half_target], ['', 0, 1]);
});

/* TEST DATABASE ONLY: replace the stored level config of this in-memory env (the committed config is not touched). */
async function withRubricPct(s, pct, fn) {
  const row = await s.env.DB.prepare('SELECT id, json FROM level_configs').first();
  const changed = JSON.parse(row.json);
  for (const r of Object.values(changed.rubrics)) if (r.module === 'schreiben') r.length_rule_pct = pct;
  await s.env.DB.prepare('UPDATE level_configs SET json = ?2 WHERE id = ?1').bind(row.id, pct === undefined ? row.json.replace(/,\s*"length_rule_pct":\s*\d+/g, '') : JSON.stringify(changed)).run();
  _clearCaches();
  try { return await fn(); } finally { await s.env.DB.prepare('UPDATE level_configs SET json = ?2 WHERE id = ?1').bind(row.id, row.json).run(); _clearCaches(); }
}

test('SCHREIBEN length rule is read from the configured length_rule_pct (a non-default 40 % in a test database), not a fixed half', async () => {
  const s = await setup();
  await toSchreiben(s);
  const [a, b] = items(s);
  const at40 = (it) => (it.response_spec.target_words * 40) / 100;
  assert.ok(Number.isInteger(at40(a)) && at40(a) < a.response_spec.target_words / 2, 'the 40 % limit lies below the 50 % one');
  await saveText(s, a.item_id, words(at40(a)), 1);          // at the 40 % limit: not flagged (a fixed half would flag it)
  await saveText(s, b.item_id, words(at40(b) - 1), 1);      // one word short of the 40 % limit: flagged
  await withRubricPct(s, 40, () => submit(s, 'schreiben'));
  const f = await finalRows(s);
  assert.equal(f[a.item_id].below_half_target, 0, `${at40(a)} words of ${a.response_spec.target_words} is not below 40 %`);
  assert.equal(f[b.item_id].below_half_target, 1);
  assert.equal(cfg.rubrics[partCfg(1).rubric].length_rule_pct, 50, 'the committed configuration keeps 50 %');
});

test('SCHREIBEN missing length_rule_pct is a configuration error: finalization fails, the module stays recoverable (submitting), nothing is frozen', async () => {
  const s = await setup();
  await toSchreiben(s);
  await withRubricPct(s, undefined, async () => {
    const r = await post(s, '/modules/schreiben/submit', {});
    assert.equal(r.status, 500, JSON.stringify(r.json));
  });
  const st = await s.env.DB.prepare("SELECT status FROM attempt_modules WHERE attempt_id = ?1 AND module = 'schreiben'").bind(s.attempt).first();
  assert.equal(st.status, 'submitting');
  assert.equal(Object.keys(await finalRows(s)).length, 0);
  assert.equal((await post(s, '/modules/schreiben/submit', {})).status, 200);   // config repaired (restored): the retry finalizes
  assert.equal(Object.keys(await finalRows(s)).length, 3);
});

test('SCHREIBEN text is stored NFC (decomposed umlauts normalised); punctuation-only tokens are not words; length limit enforced', async () => {
  const s = await setup();
  await toSchreiben(s);
  const [it] = items(s);
  const decomposed = 'Größe Übung — äöü !';
  const r = await saveText(s, it.item_id, decomposed, 1);
  assert.equal(r.json.results[0].words, 3);
  const cur = await s.env.DB.prepare('SELECT value_json FROM responses_current WHERE attempt_id = ?1 AND item_id = ?2').bind(s.attempt, it.item_id).first();
  assert.equal(JSON.parse(cur.value_json).text, decomposed.normalize('NFC'));
  assert.equal(JSON.parse(cur.value_json).text.includes('̈'), false);
  assert.equal((await saveText(s, it.item_id, 'x'.repeat(20_000), 2)).status, 200);
  const big = await saveText(s, it.item_id, 'x'.repeat(20_001), 3);
  assert.equal(big.status, 413); assert.equal(big.json.error, 'text_too_long');
  assert.equal((await get(s, '/modules/schreiben/answers')).json.answers[0].seq, 2);
});

test('SCHREIBEN deadline: a save inside the grace counts; the module auto-submits and freezes it; later saves are refused', async () => {
  const s = await setup();
  const m = await toSchreiben(s);
  const [it] = items(s);
  await saveText(s, it.item_id, 'vor dem Ende', 1);
  await goto(s, m.deadline_at - 1_000);
  s.clock.t = m.deadline_at + 5_000;                        // inside the 10 s in-flight grace
  assert.equal((await saveText(s, it.item_id, 'in der Nachfrist gespeichert', 2)).json.results[0].status, 'accepted');
  s.clock.t = m.deadline_at + 11_000;                       // grace over
  const view = await call(s.env, 'GET', A(s), { user: s.user });
  const mod = view.json.modules.find((x) => x.module === 'schreiben');
  assert.equal(mod.status, 'submitted'); assert.equal(mod.submit_kind, 'auto_deadline');
  assert.equal(view.json.modules.find((x) => x.module === 'sprechen').status, 'available');
  assert.equal((await finalRows(s))[it.item_id].text, 'in der Nachfrist gespeichert');
  assert.equal((await saveText(s, it.item_id, 'zu spät', 3)).json.error, 'module_submitted');
  assert.equal((await finalRows(s))[it.item_id].text, 'in der Nachfrist gespeichert');
});

test('SCHREIBEN rater view: exactly the frozen texts with their word counts and checksums; learners cannot open it', async () => {
  const s = await setup();
  await toSchreiben(s);
  const its = items(s);
  for (const [i, it] of its.entries()) await saveText(s, it.item_id, `Text ${i + 1}: ${words(5 + i)}`, 1);
  await submit(s, 'schreiben');
  const rater = newUser(); await role(s.env, rater, 'rater');
  const v = await call(s.env, 'GET', `/exam/v1/admin/attempts/${s.attempt}/productive`, { user: rater });
  assert.equal(v.status, 200, JSON.stringify(v.json));
  const f = await finalRows(s);
  assert.equal(v.json.writing.length, 3);
  for (const w of v.json.writing) {
    assert.equal(w.text, f[w.item_id].text);
    assert.equal(w.words, countWords(w.text));
    assert.equal(w.sha256, sha(Buffer.from(w.text, 'utf8')));
  }
  assert.equal((await call(s.env, 'GET', `/exam/v1/admin/attempts/${s.attempt}/productive`, { user: s.user })).json.error, 'rater_role_required');
});
