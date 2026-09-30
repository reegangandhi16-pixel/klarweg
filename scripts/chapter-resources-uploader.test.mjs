/* Resume-safe release uploader (scripts/chapter-resources/uploader.mjs). */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { uploadRelease, planUpload, redact } from './chapter-resources/uploader.mjs';

const sha = (b) => crypto.createHash('sha256').update(b).digest('hex');
function makeObjects(n, prefix = 'r9/') {
  const objs = [];
  for (let i = 0; i < n; i++) {
    const buf = Buffer.from(`%PDF-1.4 object ${i} ` + 'x'.repeat(i));
    objs.push({ key: `${prefix}pdfs/a1/a1-${i}-x/vocabulary.pdf`, bytes: buf.length, sha256: sha(buf), contentType: 'application/pdf', read: () => buf });
  }
  const m = Buffer.from(JSON.stringify({ version: 1, n }));
  return { objects: objs, manifest: { key: `${prefix}manifest.json`, bytes: m.length, sha256: sha(m), contentType: 'application/json', read: () => m } };
}
function makeBucket({ failKeys = new Set(), failMessage = 'boom' } = {}) {
  const store = new Map();
  const puts = [];
  return {
    store, puts,
    async list({ prefix, cursor }) {
      const keys = [...store.keys()].filter((k) => k.startsWith(prefix)).sort();
      const start = cursor ? Number(cursor) : 0;
      const page = keys.slice(start, start + 3);                       // tiny pages: exercise cursors
      return { objects: page.map((k) => ({ key: k, size: store.get(k).length })), truncated: start + 3 < keys.length, cursor: String(start + 3) };
    },
    async put(key, body) {
      puts.push(key);
      if (failKeys.has(key)) throw new Error(failMessage);
      store.set(key, Buffer.from(body));
      return { key, size: Buffer.from(body).length };
    },
    async get(key) {
      const b = store.get(key);
      return b ? { arrayBuffer: async () => b.buffer.slice(b.byteOffset, b.byteOffset + b.length) } : null;
    },
  };
}

test('A. empty remote — every object uploaded, manifest written last', async () => {
  const { objects, manifest } = makeObjects(7);
  const b = makeBucket();
  const r = await uploadRelease({ bucket: b, prefix: 'r9/', objects, manifest, concurrency: 2, sampleSize: 3 });
  assert.equal(r.refused, undefined);
  assert.equal(r.uploaded, 7);
  assert.equal(r.complete, true);
  assert.equal(b.puts.at(-1), manifest.key, 'manifest is the final write');
  assert.equal(b.puts.filter((k) => k === manifest.key).length, 1);
  assert.equal(b.store.size, 8);
});

test('B. partial remote — same-size objects skipped, only missing ones uploaded (never re-put)', async () => {
  const { objects, manifest } = makeObjects(7);
  const b = makeBucket();
  for (const o of objects.slice(0, 4)) b.store.set(o.key, o.read());
  const refusedWithoutResume = await uploadRelease({ bucket: b, prefix: 'r9/', objects, manifest });
  assert.match(refusedWithoutResume.refused, /--resume/);
  assert.equal(b.puts.length, 0);
  const r = await uploadRelease({ bucket: b, prefix: 'r9/', objects, manifest, resume: true, sampleSize: 7 });
  assert.equal(r.skipped, 4);
  assert.equal(r.uploaded, 3);
  assert.equal(r.complete, true);
  for (const o of objects.slice(0, 4)) assert.ok(!b.puts.includes(o.key), `existing ${o.key} was never overwritten`);
  assert.equal(b.puts.at(-1), manifest.key);
});

test('C. existing object with a different size — stop before ANY upload; object untouched', async () => {
  const { objects, manifest } = makeObjects(5);
  const b = makeBucket();
  const wrong = Buffer.from('%PDF- corrupted, wrong size');
  b.store.set(objects[1].key, wrong);
  const r = await uploadRelease({ bucket: b, prefix: 'r9/', objects, manifest, resume: true });
  assert.match(r.refused, /differ in size/);
  assert.equal(b.puts.length, 0, 'nothing uploaded');
  assert.deepEqual(b.store.get(objects[1].key), wrong, 'not overwritten');
  assert.ok(!b.store.has(manifest.key));
});

test('D. complete remote — 0 uploads, release intact; repeat runs are idempotent', async () => {
  const { objects, manifest } = makeObjects(6);
  const b = makeBucket();
  await uploadRelease({ bucket: b, prefix: 'r9/', objects, manifest });
  const snapshot = new Map(b.store);
  const putsBefore = b.puts.length;
  for (const resume of [true, false]) {
    const r = await uploadRelease({ bucket: b, prefix: 'r9/', objects, manifest, resume });
    assert.equal(r.uploaded, 0);
    assert.equal(r.complete, true);
    assert.equal(r.refused, null);
  }
  assert.equal(b.puts.length, putsBefore, 'no writes at all');
  assert.deepEqual(b.store, snapshot);
});

test('E. failed upload — full error captured, credentials redacted, manifest NOT written', async () => {
  const { objects, manifest } = makeObjects(6);
  const leaky = 'R2 put failed: 401 Unauthorized\nAuthorization: Bearer cfut_AbCdEfGhIjKlMnOpQrStUvWxYz0123456789 refresh_token = "cfort_FAKEfakeFAKEfakeFAKEfakeFAKE0000.FAKEfakeFAKEfake0000FAKE"';
  const b = makeBucket({ failKeys: new Set([objects[2].key, objects[4].key]), failMessage: leaky });
  const r = await uploadRelease({ bucket: b, prefix: 'r9/', objects, manifest, concurrency: 3 });
  assert.match(r.refused, /2 uploads failed — manifest NOT written/);
  assert.equal(r.failures.length, 2);
  for (const f of r.failures) {
    assert.match(f.error, /R2 put failed: 401 Unauthorized/, 'the real error is kept');
    assert.ok(!/cfut_|cfort_|AbCdEfGhIjKl|FAKEfakeFAKE/.test(f.error), 'no credential text survives');
  }
  assert.ok(!b.store.has(manifest.key));
  // resume after the fault clears: completes without re-putting the successes
  const ok = new Set([...b.store.keys()]);
  const healthy = makeBucket(); for (const [k, v] of b.store) healthy.store.set(k, v);
  const r2 = await uploadRelease({ bucket: healthy, prefix: 'r9/', objects, manifest, resume: true, sampleSize: 6 });
  assert.equal(r2.uploaded, 2);
  assert.ok(healthy.puts.every((k) => !ok.has(k)), 'earlier successes were not re-put');
  assert.equal(r2.complete, true);
});

test('F. manifest never precedes the objects; unexpected objects or a stray manifest block the run', async () => {
  const { objects, manifest } = makeObjects(4);
  // unexpected object under the prefix
  const b = makeBucket(); b.store.set('r9/pdfs/zz/stray.pdf', Buffer.from('x'));
  const r = await uploadRelease({ bucket: b, prefix: 'r9/', objects, manifest, resume: true });
  assert.match(r.refused, /unexpected objects/);
  assert.equal(b.puts.length, 0);
  // manifest present but objects missing → refuse, never "repair"
  const c = makeBucket(); c.store.set(manifest.key, manifest.read());
  const rc = await uploadRelease({ bucket: c, prefix: 'r9/', objects, manifest, resume: true });
  assert.match(rc.refused, /incomplete/);
  assert.equal(c.puts.length, 0);
  // a corrupted object is caught by byte verification before the manifest
  const d = makeBucket();
  d.put = async (key, body) => { d.puts.push(key); const buf = Buffer.from(body); if (key === objects[0].key) buf[5] = 0x21; d.store.set(key, buf); return { key, size: buf.length }; };
  const rd = await uploadRelease({ bucket: d, prefix: 'r9/', objects, manifest, sampleSize: 4 });
  assert.match(rd.refused, /byte verification failed/);
  assert.ok(!d.store.has(manifest.key), 'manifest not written after a failed verification');
});

test('planUpload reports present / missing / mismatched precisely', () => {
  const { objects, manifest } = makeObjects(3);
  const remote = new Map([[objects[0].key, objects[0].bytes], [objects[1].key, 1]]);
  const p = planUpload(objects, manifest.key, remote, { resume: true });
  assert.deepEqual(p.present.map((o) => o.key), [objects[0].key]);
  assert.deepEqual(p.missing.map((o) => o.key), [objects[2].key]);
  assert.deepEqual(p.mismatched, [objects[1].key]);
  assert.match(p.refusal, /differ in size/);
  assert.equal(redact('token = "abc123def456ghi789jkl012mno345pqr678"'), 'token = "[redacted]"');
});
