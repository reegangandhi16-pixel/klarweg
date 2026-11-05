/* Autosave robustness (found in the 2026-10-27 non-production acceptance run): the answers endpoint validates the whole
   batch first and refuses it as a whole ("a rejected save request changes nothing"), naming the offending item in the
   error body's `message` for item-level refusals. The client used to treat every such refusal (except topic_locked) as
   "offline" and retry the SAME first-20 batch for ever, so one answer the server will never accept blocked every other
   answer of the module; topic_locked dropped the whole batch, valid answers included.
   Expected now: a permanent item-level refusal holds back exactly that answer (kept, persisted, reported — never
   silently discarded, never sent again unless the learner changes it) and the rest is saved; transient and unknown
   errors keep the old retry-everything behaviour. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { Autosave, REJECT_CODES } from '../js/autosave.js';
import { ExamApiError } from '../js/api.js';
import { setup, pkgFor, syntheticBuild } from '../../exam-worker/test/harness.mjs';
import { post, start } from '../../exam-worker/test/flow.mjs';

function memoryStore() { const m = new Map(); return { kind: 'memory', get: async (k) => structuredClone(m.get(k)), set: async (k, v) => { m.set(k, structuredClone(v)); } }; }
const manual = () => { const timers = []; return { timers, setTimer: (fn) => { timers.push(fn); return timers.length; }, clearTimer: () => {} }; };
async function drain(a, max = 10) { for (let i = 0; i < max && (a.hasPending() || a.inflight); i++) await a.flush(); }
const allItems = (pkg) => pkg.parts.flatMap((p) => p.tasks.flatMap((t) => t.items));

/* the real exam Worker (in-process harness) as the autosave transport, exactly as exam/js/api.js surfaces errors */
const realSend = (s, module) => async (batch, requestId) => {
  const r = await post(s, `/modules/${module}/answers`, { answers: batch, request_id: requestId });
  if (r.status !== 200) throw new ExamApiError(r.status, (r.json && r.json.error) || `http_${r.status}`, r.json);
  return r.json;
};

test('AUTOSAVE (real Worker): one answer the server refuses for good (read-only example) no longer blocks the valid answers around it', async () => {
  const s = await setup();
  await start(s, 'lesen');
  const items = allItems(pkgFor(syntheticBuild(), 'lesen')).filter((i) => i.options && i.options.length);
  const example = items.find((i) => i.is_example), [v1, v2] = items.filter((i) => !i.is_example);
  assert.ok(example && v1 && v2, 'fixture has an example and two scored choice items');
  // contract evidence: the server refuses the whole batch and names the example in `message`
  const direct = await post(s, '/modules/lesen/answers', { answers: [{ item_id: v1.item_id, value: { option_id: v1.options[0].option_id }, seq: 1 }, { item_id: example.item_id, value: { option_id: example.options[0].option_id }, seq: 1 }] });
  assert.deepEqual([direct.status, direct.json.error, direct.json.message], [422, 'item_is_example', example.item_id]);
  assert.equal((await s.env.DB.prepare('SELECT COUNT(*) AS n FROM responses_current WHERE attempt_id = ?1').bind(s.attempt).first()).n, 0, 'a refused batch stores nothing');

  const store = memoryStore(), t = manual(), sent = [], rejected = [], states = [];
  const send = realSend(s, 'lesen');
  const a = new Autosave({ key: 'k', store, ...t, onState: (st) => states.push(st), onRejected: (code, entry) => rejected.push([code, entry.item_id, entry.seq]),
    send: async (batch, rq) => { sent.push(batch.map((b) => b.item_id)); return send(batch, rq); } });
  await a.load();
  await a.set(v1.item_id, { option_id: v1.options[0].option_id });
  await a.set(example.item_id, { option_id: example.options[1].option_id });   // e.g. a tampered or buggy client
  await a.set(v2.item_id, { option_id: v2.options[1].option_id });
  await drain(a);
  const rows = (await s.env.DB.prepare('SELECT item_id FROM responses_current WHERE attempt_id = ?1 ORDER BY item_id').bind(s.attempt).all()).results.map((r) => r.item_id);
  assert.deepEqual(rows, [v1.item_id, v2.item_id].sort(), 'both valid answers reached the server');
  assert.equal(a.state, 'saved'); assert.equal(a.hasPending(), false);
  assert.deepEqual(rejected, [['item_is_example', example.item_id, 1]], 'the refused answer is reported once');
  assert.deepEqual(Object.keys(a.rejected), [example.item_id], 'and kept, not discarded');
  assert.equal((await store.get('k')).rejected[example.item_id].code, 'item_is_example', 'persisted for recovery/diagnosis');
  const n = sent.length; await a.flush(); assert.equal(sent.length, n, 'never sent again by itself');
  assert.ok(sent.slice(1).every((b) => !b.includes(example.item_id)), `only the first request carried it: ${JSON.stringify(sent)}`);
});

/* fake server with the real contract: validate the whole batch first; refuse it naming the first bad item */
function contractServer(rules) {
  const stored = new Map(), sent = [];
  const send = async (batch) => {
    sent.push(batch.map((b) => `${b.item_id}@${b.seq}`));
    for (const b of batch) { const r = rules(b); if (r) throw new ExamApiError(r.status, r.code, { ok: false, error: r.code, ...(r.named === false ? {} : { message: b.item_id }) }); }
    return { results: batch.map((b) => { const cur = stored.get(b.item_id) || 0; if (b.seq > cur) stored.set(b.item_id, b.seq); return { item_id: b.item_id, status: b.seq > cur ? 'accepted' : 'stale', current_seq: Math.max(cur, b.seq) }; }) };
  };
  return { stored, sent, send };
}

test('AUTOSAVE: an over-long Schreiben text (413 text_too_long) is held back with its text; the other texts save; shortening it saves it', async () => {
  const srv = contractServer((b) => (b.value.text && b.value.text.length > 20_000 ? { status: 413, code: 'text_too_long' } : null));
  const rejected = [];
  const a = new Autosave({ key: 'w', store: memoryStore(), ...manual(), send: srv.send, onRejected: (code, e) => rejected.push([code, e.item_id]) });
  await a.load();
  await a.set('t1', { text: 'kurz' });
  await a.set('t2', { text: 'x'.repeat(20_001) });
  await a.set('t3', { text: 'auch kurz' });
  await drain(a);
  assert.deepEqual([...srv.stored.keys()].sort(), ['t1', 't3']);
  assert.deepEqual(rejected, [['text_too_long', 't2']]);
  assert.equal(a.rejected.t2.value.text.length, 20_001, 'the learner\'s text is kept, not discarded');
  await a.set('t2', { text: 'gekürzt' });                  // the learner edits it: a new seq, a normal save
  assert.equal(a.rejected.t2, undefined, 'a new edit clears the hold');
  await drain(a);
  assert.equal(srv.stored.get('t2'), 2, 'saved with the higher seq');
});

test('AUTOSAVE: a refusal that names no item (unknown_item) is isolated by sending one answer at a time, then held back', async () => {
  const srv = contractServer((b) => (b.item_id === 'bad' ? { status: 422, code: 'unknown_item', named: false } : null));
  const rejected = [];
  const a = new Autosave({ key: 'u', store: memoryStore(), ...manual(), send: srv.send, onRejected: (code, e) => rejected.push([code, e.item_id]) });
  await a.load();
  for (const id of ['a', 'bad', 'b']) await a.set(id, { option_id: 'x' });
  await drain(a);
  assert.deepEqual([...srv.stored.keys()].sort(), ['a', 'b']);
  assert.deepEqual(rejected, [['unknown_item', 'bad']]);
  assert.ok(srv.sent.length <= 5, `bounded isolation: ${JSON.stringify(srv.sent)}`);
  assert.equal(a.state, 'saved');
});

test('AUTOSAVE: topic_locked drops only the topic choice, not the valid answers sent with it', async () => {
  const srv = contractServer((b) => (b.item_id === 'topic' ? { status: 409, code: 'topic_locked' } : null));
  const dropped = [];
  const a = new Autosave({ key: 'tl', store: memoryStore(), ...manual(), send: srv.send, onDropped: (code, batch) => dropped.push([code, batch.map((b) => b.item_id)]) });
  await a.load();
  await a.set('note', { option_id: 'x' }); await a.set('topic', { option_id: 't2' }); await a.set('other', { option_id: 'y' });
  await drain(a);
  assert.deepEqual(dropped, [['topic_locked', ['topic']]]);
  assert.deepEqual([...srv.stored.keys()].sort(), ['note', 'other']);
  assert.equal(a.rejected.topic, undefined, 'topic_locked keeps its drop semantics (the server value is authoritative)');
});

test('AUTOSAVE: transient and unknown errors still retry the whole batch — nothing is held back, dropped or treated as saved', async () => {
  for (const err of [new TypeError('network'), new ExamApiError(500, 'server_error', {}), new ExamApiError(429, 'rate_limited', {}),
    new ExamApiError(409, 'part_not_open', { message: 'b' }),            // a later Hören part: valid once it opens
    new ExamApiError(409, 'listening_not_started', {}),
    new ExamApiError(400, 'invalid_answers', {}),                         // batch-level, not attributable
    new ExamApiError(422, 'some_future_code', { message: 'b' })]) {       // unknown codes are never guessed at
    let fail = 1; const sent = [];
    const a = new Autosave({ key: 'tr', store: memoryStore(), ...manual(), onRejected: () => assert.fail(`held back on ${err.code || err.message}`), onDropped: () => assert.fail('dropped'),
      send: async (batch) => { sent.push(batch.map((b) => b.item_id)); if (fail-- > 0) throw err; return { results: batch.map((b) => ({ item_id: b.item_id, status: 'accepted', current_seq: b.seq })) }; } });
    await a.load();
    await a.set('a', { option_id: 'x' }); await a.set('b', { option_id: 'y' });
    await a.flush();
    assert.equal(a.state, 'offline', `${err.code || err.message}: shown as a retry, not as saved`);
    assert.equal(a.hasPending(), true);
    await a.flush();
    assert.deepEqual(sent, [['a', 'b'], ['a', 'b']], `${err.code || err.message}: the same batch is retried`);
    assert.equal(a.state, 'saved');
  }
});

test('AUTOSAVE: a hold applies only to the exact seq refused; a newer change made meanwhile stays pending and is sent', async () => {
  let a;
  const sent = [];
  a = new Autosave({ key: 'race', store: memoryStore(), ...manual(), onRejected: () => {},
    send: async (batch) => {
      sent.push(batch.map((b) => `${b.item_id}@${b.seq}`));
      const bad = batch.find((b) => b.item_id === 'x' && b.seq === 1);
      if (bad) { await a.set('x', { option_id: 'fixed' }); throw new ExamApiError(422, 'invalid_option', { message: 'x' }); }   // changed while in flight
      return { results: batch.map((b) => ({ item_id: b.item_id, status: 'accepted', current_seq: b.seq })) };
    } });
  await a.load();
  await a.set('x', { option_id: 'nope' });
  await drain(a);
  assert.equal(a.rejected.x, undefined, 'the refused seq 1 was superseded by seq 2 before the reply');
  assert.deepEqual(sent, [['x@1'], ['x@2']]);
  assert.equal(a.state, 'saved');
});

test('AUTOSAVE: held answers survive a reload and are not re-sent; the reject list is explicit', async () => {
  assert.deepEqual([...REJECT_CODES].sort(), ['invalid_option', 'invalid_seq', 'invalid_value', 'item_is_example', 'item_not_in_part', 'not_answerable', 'text_too_long', 'unknown_item']);
  const store = memoryStore();
  const srv = contractServer((b) => (b.item_id === 'ex' ? { status: 422, code: 'item_is_example' } : null));
  const a = new Autosave({ key: 'rl', store, ...manual(), send: srv.send });
  await a.load(); await a.set('ex', { option_id: 'a' }); await drain(a);
  const b = new Autosave({ key: 'rl', store, ...manual(), send: srv.send });
  await b.load([]);
  assert.equal(b.hasPending(), false); assert.equal(b.rejected.ex.code, 'item_is_example');
  const n = srv.sent.length; await b.flush(); assert.equal(srv.sent.length, n);
});

test('UI: a held-back answer is announced; a text is kept as typed, a choice is shown with its saved value again', async () => {
  const { rejectedNotice } = await import('../js/render.js');
  assert.match(rejectedNotice('text_too_long', '2'), /^Ihr Text \(Aufgabe 2\) ist zu lang \(höchstens 20 000 Zeichen\) und wurde nicht gespeichert\. Bitte kürzen Sie ihn/);
  assert.match(rejectedNotice('item_is_example', '7'), /^Eine Antwort \(Aufgabe 7\) wurde vom Prüfungsserver nicht angenommen und nicht gespeichert\./);
  assert.equal(/\(Aufgabe/.test(rejectedNotice('unknown_item', '')), false, 'no empty number');
  const fs = await import('node:fs');
  const main = fs.readFileSync(new URL('../js/main.js', import.meta.url), 'utf8');
  const hook = main.slice(main.indexOf('onRejected:'), main.indexOf('onRejected:') + 700);
  assert.ok(main.includes('onRejected:'), 'main.js handles held-back answers');
  assert.match(hook, /announce\(rejectedNotice\(code/, 'the learner is told');
  assert.match(hook, /typeof entry\.value\.text === 'string'\) say\(\); else syncFromServer\(\[entry\.item_id\]\)/, 'texts are not overwritten; choices re-sync');
  assert.match(hook, /console\.warn\('\[kx-autosave\]', 'answer not accepted'/, 'and it is logged for diagnosis');
  // after a reload a held-back text is shown again as typed (not replaced by the older server text) and the notice repeats
  assert.match(main, /Object\.values\(local\.rejected \|\| \{\}\)\.filter\(\(v\) => v\.value && typeof v\.value\.text === 'string'/, 'held texts are restored on load');
  assert.match(main, /for \(const v of held\) S\.answers\[v\.item_id\] = v\.value;\n  paint\(\);\n  guardBack\(\);\n  if \(held\.length\)/, 'restored before painting, then announced');
});
