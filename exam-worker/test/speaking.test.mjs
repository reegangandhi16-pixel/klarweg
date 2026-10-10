/* SPEAKING: consent, chunk upload, checksum, retry/idempotency, contiguity,
   completion, metadata, private storage, recovery, upload grace. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, call, sha } from './harness.mjs';
import { A, post, get, start, submit, uploadChunk } from './flow.mjs';

const ITEM = 'itm:b1:syn-sp1';
async function toSprechen(s, { consent = true } = {}) {
  for (const m of ['lesen', 'hoeren', 'schreiben']) {
    await start(s, m);
    if (m === 'hoeren') await post(s, '/hoeren/events', { type: 'ready' });
    await submit(s, m);
  }
  if (consent) assert.equal((await post(s, '/sprechen/consent', { granted: true, version: 'rec-consent@1' })).status, 200);
  return start(s, 'sprechen');
}

test('SPEAKING: consent is required before any chunk is stored; consent must be explicit', async () => {
  const s = await setup();
  await toSprechen(s, { consent: false });
  assert.equal((await uploadChunk(s, ITEM, 't1', 0, Buffer.from('abc'))).json.error, 'consent_required');
  assert.equal((await post(s, '/sprechen/consent', { granted: 'yes', version: 'rec-consent@1' })).json.error, 'consent_invalid');
  assert.equal((await post(s, '/sprechen/consent', { granted: true, version: 'rec-consent@1' })).status, 200);
  assert.equal((await uploadChunk(s, ITEM, 't1', 0, Buffer.from('abc'))).status, 200);
});

test('SPEAKING: chunk stored privately with server-verified sha256 and metadata', async () => {
  const s = await setup();
  await toSprechen(s);
  const bytes = Buffer.from('synthetic-chunk-0');
  const r = await uploadChunk(s, ITEM, 't1', 0, bytes, { mime: 'audio/webm' });
  assert.deepEqual(r.json, { ok: true, seq: 0, stored: true });
  const row = await s.env.DB.prepare('SELECT * FROM recording_chunks WHERE attempt_id = ?1').bind(s.attempt).first();
  assert.equal(row.sha256, sha(bytes)); assert.equal(row.bytes, bytes.length); assert.equal(row.mime, 'audio/webm'); assert.equal(row.part, 1);
  assert.equal(row.r2_key, `rec/${s.attempt}/p1/t1/0000`);
  const obj = s.env.RECORDINGS.objects.get(row.r2_key);
  assert.ok(obj.bytes.equals(bytes)); assert.equal(obj.opts.customMetadata.sha256, sha(bytes));
  assert.equal(s.env.CONTENT.objects.has(row.r2_key), false);   // recordings never land in the content bucket
});

test('SPEAKING: checksum mismatch, missing checksum, bad mime, empty, oversize, unknown item/turn are refused', async () => {
  const s = await setup();
  await toSprechen(s);
  const b = Buffer.from('x');
  assert.equal((await uploadChunk(s, ITEM, 't1', 0, b, { checksum: sha(Buffer.from('y')) })).json.error, 'checksum_mismatch');
  assert.equal((await uploadChunk(s, ITEM, 't1', 0, b, { checksum: 'abc' })).json.error, 'checksum_required');
  assert.equal((await uploadChunk(s, ITEM, 't1', 0, b, { mime: 'video/mp4' })).json.error, 'unsupported_media_type');
  assert.equal((await uploadChunk(s, ITEM, 't1', 0, Buffer.alloc(0))).json.error, 'empty_chunk');
  const big = Buffer.alloc(262_145, 1);
  assert.equal((await uploadChunk(s, ITEM, 't1', 0, big)).json.error, 'chunk_too_large');
  assert.equal((await uploadChunk(s, 'itm:b1:syn-l1-01', 't1', 0, b)).json.error, 'unknown_item');
  assert.equal((await uploadChunk(s, 'itm:b1:syn-sp2-topic', 't1', 0, b)).json.error, 'unknown_item');
  assert.equal((await uploadChunk(s, ITEM, 't9', 0, b)).json.error, 'unknown_turn');
  assert.equal((await uploadChunk(s, ITEM, 't1', -1, b)).json.error, 'invalid_seq');
});

test('SPEAKING: retry of the same chunk is idempotent; different bytes for the same seq conflict', async () => {
  const s = await setup();
  await toSprechen(s);
  const b = Buffer.from('chunk-a');
  assert.equal((await uploadChunk(s, ITEM, 't1', 0, b)).json.stored, true);
  const again = await uploadChunk(s, ITEM, 't1', 0, b);
  assert.equal(again.status, 200); assert.equal(again.json.duplicate, true);
  assert.equal((await uploadChunk(s, ITEM, 't1', 0, Buffer.from('chunk-b'))).json.error, 'chunk_conflict');
  const t = await s.env.DB.prepare('SELECT chunks, bytes FROM recording_turns WHERE attempt_id = ?1').bind(s.attempt).first();
  assert.deepEqual(t, { chunks: 1, bytes: b.length });
});

test('SPEAKING: turn completion requires contiguous chunks 0..n-1; completed turns are closed', async () => {
  const s = await setup();
  await toSprechen(s);
  await uploadChunk(s, ITEM, 't1', 0, Buffer.from('a'));
  await uploadChunk(s, ITEM, 't1', 2, Buffer.from('c'));   // out-of-order arrival is fine
  const miss = await post(s, '/sprechen/turns', { item_id: ITEM, turn: 't1', chunks: 3, duration_ms: 3000 });
  assert.equal(miss.json.error, 'chunks_missing'); assert.deepEqual(miss.json.missing, [1]);
  await uploadChunk(s, ITEM, 't1', 1, Buffer.from('b'));
  assert.equal((await post(s, '/sprechen/turns', { item_id: ITEM, turn: 't1', chunks: 2, duration_ms: 3000 })).json.error, 'chunk_count_mismatch');
  assert.equal((await post(s, '/sprechen/turns', { item_id: ITEM, turn: 't1', chunks: 3, duration_ms: 999_999 })).json.error, 'invalid_duration');
  const ok = await post(s, '/sprechen/turns', { item_id: ITEM, turn: 't1', chunks: 3, duration_ms: 3000 });
  assert.equal(ok.json.complete, true);
  assert.equal((await uploadChunk(s, ITEM, 't1', 3, Buffer.from('d'))).json.error, 'turn_closed');
});

test('SPEAKING: recovery — status lists what the server holds so a reloaded client resends only the gaps', async () => {
  const s = await setup();
  await toSprechen(s);
  await uploadChunk(s, ITEM, 't1', 0, Buffer.from('a'));
  await uploadChunk(s, ITEM, 't1', 1, Buffer.from('b'));
  const st = await get(s, '/sprechen/status');
  assert.equal(st.json.consent, true);
  assert.deepEqual(st.json.chunks.map((c) => c.seq), [0, 1]);
  assert.equal(st.json.turns[0].status, 'open');
  assert.equal('r2_key' in st.json.chunks[0], false);
});

test('SPEAKING: buffered chunks may arrive after submit within the upload grace, never after it', async () => {
  const s = await setup();
  const m = await toSprechen(s);
  await submit(s, 'sprechen');
  assert.equal((await uploadChunk(s, ITEM, 't2', 0, Buffer.from('late'))).status, 200);
  s.clock.t = m.deadline_at + 600_001;
  const re = await call(s.env, 'POST', A(s, '/lease'), { user: s.user, body: { device_id: s.device } });
  s.lease = re.json.lease.lease_id;
  assert.equal((await uploadChunk(s, ITEM, 't2', 1, Buffer.from('too late'))).json.error, 'upload_window_closed');
});

test('SPEAKING: per-attempt byte quota is enforced', async () => {
  const s = await setup();
  await toSprechen(s);
  await s.env.DB.prepare('INSERT INTO recording_chunks (attempt_id, item_id, part, turn, seq, r2_key, bytes, sha256, mime, received_at) VALUES (?1, ?2, 2, ?3, 0, ?4, ?5, ?6, ?7, 0)')
    .bind(s.attempt, 'itm:b1:syn-sp2', 't1', 'x', 10_485_760 - 2, 'x', 'audio/webm').run();
  assert.equal((await uploadChunk(s, ITEM, 't1', 0, Buffer.from('abc'))).json.error, 'recording_quota_exceeded');
});

test('SPEAKING: deadline covers preparation + phases + transition allowance (synthetic overrides)', async () => {
  const s = await setup();
  const m = await toSprechen(s);
  const plan = (await get(s, '/modules/sprechen/package')).json.package.timing.plan;
  assert.equal(m.deadline_at - m.started_at, plan.total_ms);
  assert.ok(plan.prep_ms > 0 && plan.phases.some((p) => p.listen_only));
});

test('SPEAKING: the Teil 2 topic choice is changeable during the preparation and locked after it (server-enforced, save grace)', async () => {
  const s = await setup();
  await toSprechen(s);
  const TOPIC = 'itm:b1:syn-sp2-topic';
  const save = (seq, option_id) => post(s, '/modules/sprechen/answers', { answers: [{ item_id: TOPIC, value: { option_id }, seq }] });
  const prepMs = 20_000, grace = 10_000;   // synthetic preparation (timing override); SAVE_GRACE_MS
  assert.equal((await save(1, 't1')).status, 200);
  s.advance(prepMs - 1);
  assert.equal((await save(2, 't2')).status, 200, 'still in the preparation');
  s.advance(1 + grace);   // exactly prep end + grace: a choice sent at the end is still accepted in transit
  assert.equal((await save(3, 't1')).status, 200);
  s.advance(1);
  const late = await save(4, 't2');
  assert.equal(late.status, 409); assert.equal(late.json.error, 'topic_locked');
  const answers = await get(s, '/modules/sprechen/answers');
  assert.deepEqual(answers.json.answers.find((a) => a.item_id === TOPIC), { item_id: TOPIC, value: { option_id: 't1' }, seq: 3 }, 'the refused change left the stored choice untouched');
});

test('SPEAKING: with a time multiplier the topic lock moves with the longer preparation (same rule as the deadline)', async () => {
  const s = await setup();
  await s.env.DB.prepare('UPDATE attempts SET time_multiplier = 1.5 WHERE id = ?1').bind(s.attempt).run();
  await toSprechen(s);
  const TOPIC = 'itm:b1:syn-sp2-topic';
  s.advance(30_000 + 10_000);   // 20 s × 1.5 + grace
  assert.equal((await post(s, '/modules/sprechen/answers', { answers: [{ item_id: TOPIC, value: { option_id: 't2' }, seq: 1 }] })).status, 200);
  s.advance(1);
  assert.equal((await post(s, '/modules/sprechen/answers', { answers: [{ item_id: TOPIC, value: { option_id: 't1' }, seq: 2 }] })).json.error, 'topic_locked');
});
