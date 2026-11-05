/* klarweg-audio Worker is RETIRED (P3): no bucket binding, every request 410,
   uncacheable. Audio is served by the access Worker at klarweg.in/api/media/. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../audio/worker/src/index.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('retired: every path and method answers 410, no-store, nothing read', async () => {
  let touched = 0;
  const env = { AUDIO: { get() { touched++; return null; }, head() { touched++; return null; } } };
  for (const p of ['/story/A1_017_S003.mp3', '/a1-words-manifest.json', '/vocab/manifest.json', '/', '/words/female/x.mp3']) {
    for (const method of ['GET', 'HEAD']) {
      const res = await worker.fetch(new Request('https://klarweg-audio.example.workers.dev' + p, { method, headers: { range: 'bytes=0-9' } }), env);
      assert.equal(res.status, 410, method + ' ' + p);
      assert.equal(res.headers.get('cache-control'), 'no-store');
      assert.equal(res.headers.get('access-control-allow-origin'), null);
      if (method === 'GET') assert.match(await res.text(), /\/api\/media\//);
    }
  }
  assert.equal(touched, 0);
});

test('retired config has no bucket binding', () => {
  const toml = fs.readFileSync(path.join(ROOT, 'audio/worker/wrangler.toml'), 'utf8');
  assert.ok(!/r2_buckets|bucket_name/.test(toml));
  assert.match(toml, /^name = "klarweg-audio"$/m);
});
