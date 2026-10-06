/* Flow helpers shared by the API test files: drive one attempt through the
   modules exactly as the browser engine would. */
import assert from 'node:assert/strict';
import { call, rid, keysFor, pkgFor, scoredItems, sha } from './harness.mjs';

export const A = (s, p = '') => `/exam/v1/attempts/${s.attempt}${p}`;
export const post = (s, p, body, extra = {}) => call(s.env, 'POST', A(s, p), { user: s.user, body: { lease_id: s.lease, request_id: rid(), ...body }, ...extra });
export const get = (s, p) => call(s.env, 'GET', A(s, p) + (p.includes('?') ? '&' : '?') + `lease_id=${s.lease}`, { user: s.user });

export async function start(s, module) {
  const r = await post(s, `/modules/${module}/start`, {});
  assert.equal(r.status, 200, JSON.stringify(r.json));
  return r.json.module;
}

export async function submit(s, module) {
  const r = await post(s, `/modules/${module}/submit`, {});
  assert.equal(r.status, 200, JSON.stringify(r.json));
  return r.json;
}

/* pick(item, key) → option id or null (skip). Default: always correct. */
export async function answerObjective(s, module, pick = (it, k) => k.correct, seqBase = 1) {
  const keys = keysFor(s.build);
  const items = scoredItems(pkgFor(s.build, module));
  const answers = [];
  for (const it of items) {
    const v = pick(it, keys[it.item_id]);
    if (v === undefined) continue;
    answers.push({ item_id: it.item_id, value: { option_id: v }, seq: seqBase, client_ts: s.clock.t });
  }
  for (let i = 0; i < answers.length; i += 20) {
    const r = await post(s, `/modules/${module}/answers`, { answers: answers.slice(i, i + 20) });
    assert.equal(r.status, 200, JSON.stringify(r.json));
  }
  return answers.length;
}

/* Hören: readiness, then every play phase in schedule order (normal plays only). */
export async function runHoeren(s, pick) {
  const m = await start(s, 'hoeren');
  const pkg = pkgFor(s.build, 'hoeren');
  const ready = await post(s, '/hoeren/events', { type: 'ready' });
  assert.equal(ready.status, 200, JSON.stringify(ready.json));
  let offset = 0;
  for (const ph of pkg.timing.plan.phases) {
    if (ph.kind === 'play') {
      s.clock.t = ready.json.plan_started_at + offset;
      const a = await post(s, '/hoeren/events', { type: 'play_start', phase_seq: ph.seq });
      assert.equal(a.status, 200, JSON.stringify(a.json));
      s.clock.t += ph.ms;
      const b = await post(s, '/hoeren/events', { type: 'play_end', phase_seq: ph.seq });
      assert.equal(b.status, 200, JSON.stringify(b.json));
    }
    offset += ph.ms;
  }
  await answerObjective(s, 'hoeren', pick);
  return { module: m, plan: pkg.timing.plan, plan_started_at: ready.json.plan_started_at };
}

export const SAMPLE_TEXT = 'Sehr geehrte Damen und Herren, ich schreibe Ihnen wegen der Prüfung. Größe, Straße, Übung: äöüß ÄÖÜ — ein synthetischer Testtext.';

export async function runSchreiben(s, text = SAMPLE_TEXT) {
  await start(s, 'schreiben');
  const items = scoredItems(pkgFor(s.build, 'schreiben'));
  let seq = 1;
  for (const it of items) {
    const r = await post(s, '/modules/schreiben/answers', { answers: [{ item_id: it.item_id, value: { text }, seq: seq++ }] });
    assert.equal(r.status, 200, JSON.stringify(r.json));
  }
  return items;
}

export async function runSprechen(s) {
  const c = await post(s, '/sprechen/consent', { granted: true, version: 'rec-consent@1' });
  assert.equal(c.status, 200, JSON.stringify(c.json));
  await start(s, 'sprechen');
  const pkg = pkgFor(s.build, 'sprechen');
  const topic = scoredItems(pkg).find((i) => i.interaction === 'topic_choice');
  const t = await post(s, '/modules/sprechen/answers', { answers: [{ item_id: topic.item_id, value: { option_id: 't1' }, seq: 1 }] });
  assert.equal(t.status, 200, JSON.stringify(t.json));
  for (const it of scoredItems(pkg).filter((i) => i.interaction === 'spoken_response')) {
    for (const turn of it.response_spec.turns) {
      const chunks = [Buffer.from(`synthetic-${it.item_id}-${turn.turn}-0`), Buffer.from(`synthetic-${it.item_id}-${turn.turn}-1`)];
      for (let i = 0; i < chunks.length; i++) {
        const r = await uploadChunk(s, it.item_id, turn.turn, i, chunks[i]);
        assert.equal(r.status, 200, JSON.stringify(r.json));
      }
      const done = await post(s, '/sprechen/turns', { item_id: it.item_id, turn: turn.turn, chunks: 2, duration_ms: 5000 });
      assert.equal(done.status, 200, JSON.stringify(done.json));
    }
  }
}

export function uploadChunk(s, itemId, turn, seq, bytes, { checksum = sha(bytes), mime = 'audio/webm', lease = s.lease } = {}) {
  const q = new URLSearchParams({ lease_id: lease, item_id: itemId, turn, seq: String(seq), sha256: checksum });
  return call(s.env, 'POST', A(s, `/sprechen/chunks?${q}`), { user: s.user, raw: bytes, contentType: mime });
}

export async function complete(s) {
  const r = await post(s, '/complete', {});
  assert.equal(r.status, 200, JSON.stringify(r.json));
  return r.json;
}
