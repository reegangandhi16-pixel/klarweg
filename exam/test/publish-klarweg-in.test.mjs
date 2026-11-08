/* The exam client on klarweg.in: API base resolution (same-origin /api) and the closed state shown while the exam
   routes are switched off. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveApiBase, createApi, ExamApiError } from '../js/api.js';
import { errorView, EXAM_INFO_URL } from '../js/render.js';

test('API base: explicit meta wins; klarweg.in uses same-origin /api; anywhere else the page origin', () => {
  assert.equal(resolveApiBase('https://x.example', 'klarweg.in'), 'https://x.example');
  assert.equal(resolveApiBase('', 'klarweg.in'), '/api');
  assert.equal(resolveApiBase('', 'www.klarweg.in'), '/api');
  assert.equal(resolveApiBase('', 'localhost'), '');
  assert.equal(resolveApiBase('', 'klarweg.in.evil.example'), '');
  assert.equal(resolveApiBase('', 'reegangandhi16-pixel.github.io'), '');
});

test('on klarweg.in every call goes to /api/exam/v1/... with credentials, which the Access Worker strips to /exam/v1', async () => {
  const seen = [];
  const api = createApi({ base: resolveApiBase('', 'klarweg.in'), fetchImpl: async (url, init) => { seen.push([url, init.credentials]); return new Response(JSON.stringify({ ok: true, open_attempts: [] }), { status: 200 }); } });
  await api.availability();
  assert.ok(seen.length >= 1);
  for (const [url, cred] of seen) { assert.match(url, /^\/api\/exam\/v1\//); assert.equal(cred, 'include'); }
});

test('routes off: a 404 surfaces as a calm "Noch nicht geöffnet" screen with a link to the public exam hub', async () => {
  const api = createApi({ base: '/api', retries: 0, fetchImpl: async () => new Response(JSON.stringify({ ok: false, error: 'Not found' }), { status: 404 }) });
  await assert.rejects(api.availability(), (e) => e instanceof ExamApiError && e.status === 404);
  for (const code of ['exam_closed', 'exam_disabled']) {
    const v = errorView({ code, status: code === 'exam_disabled' ? 503 : 404 });
    assert.equal(v.title, 'Noch nicht geöffnet');
    assert.deepEqual(v.actions, []);
    assert.equal(v.links[0].href, EXAM_INFO_URL);
    assert.doesNotMatch(v.body, /\(|Fehler|error/i, 'no raw error codes');
  }
  assert.equal(EXAM_INFO_URL, '../goethe-exam.html');
});
