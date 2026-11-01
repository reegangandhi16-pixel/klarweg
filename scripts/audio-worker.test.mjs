/* klarweg-audio Worker (audio/worker/src/index.js) against an in-memory R2. */
import test from 'node:test';
import assert from 'node:assert/strict';
import worker, { parseRange, keyFromPath, cacheControlFor, contentTypeFor } from '../audio/worker/src/index.js';

const MP3 = new Uint8Array(Array.from({ length: 1000 }, (_, i) => i % 251));
function fakeBucket(objects) {
  const meta = (key) => ({ key, size: objects[key].bytes.length, httpEtag: `"etag-${key.length}"`, uploaded: new Date('2026-10-30T00:00:00Z'),
    writeHttpMetadata(h) { if (objects[key].type) h.set('Content-Type', objects[key].type); } });
  return {
    calls: [],
    async head(key) { this.calls.push(['head', key]); return objects[key] ? meta(key) : null; },
    async get(key, opts = {}) {
      this.calls.push(['get', key, opts.range || null]);
      if (!objects[key]) return null;
      const b = objects[key].bytes, r = opts.range;
      const slice = r ? b.slice(r.offset, r.offset + r.length) : b;
      return { ...meta(key), body: new Blob([slice]).stream() };
    }
  };
}
const env = () => ({ ALLOWED_ORIGINS: 'https://klarweg.in', AUDIO: fakeBucket({
  'words/female/32e35ad5c15bcd84.mp3': { bytes: MP3, type: 'audio/mpeg' },
  'reading/A1_001_R001.mp3': { bytes: MP3 },
  'a1-words-manifest.json': { bytes: new TextEncoder().encode('{"ab":{"female":"/audio/words/female/x.mp3"}}'), type: 'application/json; charset=utf-8' },
  'vocab/manifest.json': { bytes: new TextEncoder().encode('{}') }
}) });
const call = (path, init = {}, e = env()) => worker.fetch(new Request('https://klarweg-audio.example.workers.dev' + path, init), e);
const bytes = async (r) => new Uint8Array(await r.arrayBuffer());

test('GET full object: 200, audio/mpeg, length, ETag, Accept-Ranges, immutable cache', async () => {
  const r = await call('/words/female/32e35ad5c15bcd84.mp3', { headers: { Origin: 'https://klarweg.in' } });
  assert.equal(r.status, 200);
  assert.equal(r.headers.get('Content-Type'), 'audio/mpeg');
  assert.equal(r.headers.get('Content-Length'), '1000');
  assert.equal(r.headers.get('Accept-Ranges'), 'bytes');
  assert.ok(r.headers.get('ETag'));
  assert.equal(r.headers.get('Cache-Control'), 'public, max-age=31536000, immutable');
  assert.equal(r.headers.get('Access-Control-Allow-Origin'), 'https://klarweg.in');
  assert.match(r.headers.get('Access-Control-Expose-Headers'), /Content-Range/);
  assert.deepEqual(await bytes(r), MP3);
});

test('Range: bytes=0-1 (Safari probe) → 206 with the exact two bytes and Content-Range', async () => {
  const r = await call('/words/female/32e35ad5c15bcd84.mp3', { headers: { Range: 'bytes=0-1' } });
  assert.equal(r.status, 206);
  assert.equal(r.headers.get('Content-Range'), 'bytes 0-1/1000');
  assert.equal(r.headers.get('Content-Length'), '2');
  assert.deepEqual(await bytes(r), MP3.slice(0, 2));
});

test('Range: open-ended, suffix and clamped end → 206 with correct slices', async () => {
  for (const [hdr, from, to] of [['bytes=990-', 990, 999], ['bytes=-10', 990, 999], ['bytes=500-5000', 500, 999], ['bytes=0-', 0, 999]]) {
    const r = await call('/reading/A1_001_R001.mp3', { headers: { Range: hdr } });
    assert.equal(r.status, 206, hdr);
    assert.equal(r.headers.get('Content-Range'), `bytes ${from}-${to}/1000`, hdr);
    assert.deepEqual(await bytes(r), MP3.slice(from, to + 1), hdr);
  }
});

test('unsatisfiable range → 416 with Content-Range: bytes */size; multi-range → full 200', async () => {
  const bad = await call('/reading/A1_001_R001.mp3', { headers: { Range: 'bytes=1000-' } });
  assert.equal(bad.status, 416);
  assert.equal(bad.headers.get('Content-Range'), 'bytes */1000');
  const multi = await call('/reading/A1_001_R001.mp3', { headers: { Range: 'bytes=0-1,5-6' } });
  assert.equal(multi.status, 200);
});

test('HEAD → 200 with length and type, no body; R2 body never read', async () => {
  const e = env();
  const r = await call('/words/female/32e35ad5c15bcd84.mp3', { method: 'HEAD' }, e);
  assert.equal(r.status, 200);
  assert.equal(r.headers.get('Content-Length'), '1000');
  assert.equal(r.headers.get('Content-Type'), 'audio/mpeg');
  assert.equal((await r.arrayBuffer()).byteLength, 0);
  assert.deepEqual(e.AUDIO.calls.map((c) => c[0]), ['head']);
});

test('If-None-Match with the current ETag → 304 (manifest revalidation costs no body read)', async () => {
  const first = await call('/a1-words-manifest.json');
  assert.equal(first.headers.get('Content-Type'), 'application/json; charset=utf-8');
  assert.equal(first.headers.get('Cache-Control'), 'public, max-age=300');
  const e = env();
  const r = await call('/a1-words-manifest.json', { headers: { 'If-None-Match': first.headers.get('ETag') } }, e);
  assert.equal(r.status, 304);
  assert.deepEqual(e.AUDIO.calls.map((c) => c[0]), ['head']);
});

test('content type falls back to the extension when the object has no metadata', async () => {
  const r = await call('/reading/A1_001_R001.mp3');
  assert.equal(r.headers.get('Content-Type'), 'audio/mpeg');
  assert.equal(r.headers.get('Cache-Control'), 'public, max-age=86400');
  const v = await call('/vocab/manifest.json');
  assert.equal(v.headers.get('Content-Type'), 'application/json; charset=utf-8');
});

test('CORS: only the allowed origin is echoed; OPTIONS preflight allows Range', async () => {
  const other = await call('/vocab/manifest.json', { headers: { Origin: 'https://evil.example' } });
  assert.equal(other.headers.get('Access-Control-Allow-Origin'), null);
  assert.match(other.headers.get('Vary'), /Origin/);
  const pre = await call('/vocab/manifest.json', { method: 'OPTIONS', headers: { Origin: 'https://klarweg.in', 'Access-Control-Request-Method': 'GET', 'Access-Control-Request-Headers': 'range' } });
  assert.equal(pre.status, 204);
  assert.equal(pre.headers.get('Access-Control-Allow-Origin'), 'https://klarweg.in');
  assert.match(pre.headers.get('Access-Control-Allow-Headers'), /Range/);
});

test('404 for missing keys and unsafe paths; 405 for writes', async () => {
  for (const p of ['/nope.mp3', '/', '/../secret', '/a//b.mp3', '/%2e%2e/x']) assert.equal((await call(p)).status, 404, p);
  for (const m of ['PUT', 'POST', 'DELETE']) assert.equal((await call('/words/female/32e35ad5c15bcd84.mp3', { method: m })).status, 405, m);
});

test('helpers: parseRange edge cases, keyFromPath, cache/type mapping', () => {
  assert.equal(parseRange(null, 10), null);
  assert.deepEqual(parseRange('bytes=-0', 10), { invalid: true });
  assert.deepEqual(parseRange('bytes=-', 10), { invalid: true });
  assert.deepEqual(parseRange('bytes=-50', 10), { offset: 0, length: 10 });
  assert.deepEqual(parseRange('bytes=5-2', 10), { invalid: true });
  assert.equal(parseRange('items=0-1', 10), null);
  assert.equal(keyFromPath('/vocab/audio/female/das%20Haus.mp3'), 'vocab/audio/female/das Haus.mp3');
  assert.equal(keyFromPath('/%E0%A4'), null);
  assert.equal(cacheControlFor('story/A1_001_S001.mp3'), 'public, max-age=86400');
  assert.equal(cacheControlFor('vocab/audio/female/x.mp3'), 'public, max-age=31536000, immutable');
  assert.equal(contentTypeFor('x.bin'), 'application/octet-stream');
});
