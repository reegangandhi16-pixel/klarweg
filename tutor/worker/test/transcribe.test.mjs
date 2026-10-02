/* klarweg-tutor /v1/transcribe — node --test
   OpenAI is mocked at the fetch() boundary; the request the Worker builds
   is inspected field by field. No network, no real key. */
import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../src/index.js';
import { SPEECH_MODEL, SPEECH_PROMPT, SPEECH_URL, SPEECH_MAX_BYTES } from '../src/transcribe.js';

const KEY = 'sk-test-SECRET-KEY-must-never-leak-1234';
const AUDIO = new Uint8Array(4096).map((_, i) => (i * 7) % 251);   // stand-in for a WebM/Opus recording
const calls = [];
let reply = () => Response.json({ text: ' Ich heiße Rohan. ', languages: [{ code: 'de' }], usage: { type: 'duration', seconds: 2 } });

globalThis.fetch = async (url, init = {}) => {
  calls.push({ url: String(url), init });
  return reply(init);
};

const logs = [];
const origLog = console.log, origErr = console.error;
console.log = (...a) => logs.push(a.join(' '));
console.error = (...a) => logs.push(a.join(' '));
test.after(() => { console.log = origLog; console.error = origErr; });

async function post(body = AUDIO, type = 'audio/webm;codecs=opus', env = { OPENAI_API_KEY: KEY }) {
  calls.length = 0;
  const res = await worker.fetch(new Request('https://klarweg-tutor.internal/v1/transcribe', { method: 'POST', headers: { 'content-type': type }, body }), env);
  const text = await res.text();
  return { status: res.status, json: JSON.parse(text), text };
}

test('valid transcript: exact OpenAI request (model, languages[]=de, json, generic prompt, unchanged bytes)', async () => {
  const r = await post();
  assert.equal(r.status, 200);
  assert.deepEqual({ ok: r.json.ok, text: r.json.text, seconds: r.json.seconds }, { ok: true, text: 'Ich heiße Rohan.', seconds: 2 });
  assert.equal(calls.length, 1);
  const { url, init } = calls[0];
  assert.equal(url, SPEECH_URL);
  assert.equal(url, 'https://api.openai.com/v1/audio/transcriptions');
  assert.equal(init.method, 'POST');
  assert.equal(init.headers.authorization, 'Bearer ' + KEY);
  const f = init.body;
  assert.ok(f instanceof FormData);
  assert.equal(f.get('model'), 'gpt-transcribe');
  assert.equal(SPEECH_MODEL, 'gpt-transcribe');
  assert.deepEqual(f.getAll('languages[]'), ['de']);
  assert.equal(f.get('response_format'), 'json');
  assert.equal(f.get('prompt'), SPEECH_PROMPT);
  for (const k of ['language', 'temperature', 'keywords', 'keywords[]', 'timestamp_granularities[]', 'include[]', 'stream']) assert.equal(f.get(k), null, k + ' must not be sent');
  const file = f.get('file');
  assert.equal(file.name, 'speech.webm');
  assert.equal(file.type, 'audio/webm;codecs=opus');
  assert.deepEqual(new Uint8Array(await file.arrayBuffer()), AUDIO, 'the exact recorded bytes, unconverted');
  assert.equal([...f.keys()].pop(), 'file', 'file is the last field');
});

test('the primary prompt is generic: no target sentence, no learner-specific words', () => {
  assert.equal(SPEECH_PROMPT, "Klarweg German language learning exercise. Transcribe the learner's German speech faithfully. Preserve what was actually spoken. Do not correct grammar.");
  for (const w of ['Apfel', 'Buch', 'Hund', 'Rohan', 'Kaffee', 'Käse', 'heiße', 'buchstabiere']) assert.ok(!SPEECH_PROMPT.toLowerCase().includes(w.toLowerCase()), w);
});

test('container types map to provider filenames (Safari MP4, Firefox Ogg)', async () => {
  for (const [type, name] of [['audio/mp4', 'speech.m4a'], ['audio/ogg;codecs=opus', 'speech.ogg'], ['audio/webm', 'speech.webm'], ['audio/wav', 'speech.wav']]) {
    await post(AUDIO, type);
    assert.equal(calls[0].init.body.get('file').name, name, type);
  }
});

test('request shape is checked before OpenAI is contacted', async () => {
  let r = await post(AUDIO, 'text/plain');
  assert.equal(r.status, 415); assert.equal(r.json.error, 'unsupported_type'); assert.equal(calls.length, 0);
  r = await post(new Uint8Array(0));
  assert.equal(r.status, 400); assert.equal(r.json.error, 'empty_audio'); assert.equal(calls.length, 0);
  r = await post(new Uint8Array(SPEECH_MAX_BYTES + 1));
  assert.equal(r.status, 413); assert.equal(r.json.error, 'too_large'); assert.equal(calls.length, 0);
  assert.equal(r.json.meta.provider, false);
});

test('missing OPENAI_API_KEY → 503 speech_unconfigured, no provider call', async () => {
  const r = await post(AUDIO, 'audio/webm', {});
  assert.equal(r.status, 503);
  assert.equal(r.json.error, 'speech_unconfigured');
  assert.equal(r.json.meta.provider, false);
  assert.equal(calls.length, 0);
});

test('provider errors map to safe codes; raw OpenAI bodies never pass through', async () => {
  const body = (msg) => JSON.stringify({ error: { message: msg, type: 'invalid_request_error', code: 'x' } });
  const cases = [
    [401, 502, 'provider_auth'], [403, 502, 'provider_auth'], [429, 503, 'provider_busy'],
    [500, 502, 'provider_error'], [503, 502, 'provider_error'], [400, 422, 'unreadable_audio'], [413, 413, 'too_large'],
  ];
  for (const [up, status, error] of cases) {
    reply = () => new Response(body('Incorrect API key provided: sk-test-SE************1234. secret detail'), { status: up });
    const r = await post();
    assert.equal(r.status, status, 'upstream ' + up);
    assert.equal(r.json.error, error);
    assert.equal(r.json.meta.provider, true);
    assert.ok(!/Incorrect|secret detail|sk-/.test(r.text), 'no provider text in the response');
  }
});

test('timeout and unreachable provider', async () => {
  reply = () => { const e = new Error('timed out'); e.name = 'TimeoutError'; throw e; };
  let r = await post();
  assert.equal(r.status, 504); assert.equal(r.json.error, 'provider_timeout'); assert.equal(r.json.meta.provider, true);
  reply = () => { throw new TypeError('fetch failed'); };
  r = await post();
  assert.equal(r.status, 502); assert.equal(r.json.error, 'provider_unreachable');
  assert.ok(calls[0].init.signal, 'every provider call carries an abort signal');
});

test('malformed provider response and empty transcript', async () => {
  reply = () => new Response('<html>gateway</html>', { status: 200, headers: { 'content-type': 'text/html' } });
  let r = await post();
  assert.equal(r.status, 502); assert.equal(r.json.error, 'provider_malformed');
  reply = () => Response.json({ languages: [{ code: 'de' }] });
  r = await post();
  assert.equal(r.status, 502); assert.equal(r.json.error, 'provider_malformed');
  reply = () => Response.json({ text: '   ', languages: [] });
  r = await post();
  assert.equal(r.status, 200); assert.equal(r.json.ok, true); assert.equal(r.json.text, '', 'empty transcript is a valid "nothing heard"');
  assert.equal(r.json.seconds, null, 'no usage → null, never invented');
});

test('no word timestamps are invented; the response carries text + seconds only', async () => {
  reply = () => Response.json({ text: 'Hallo', usage: { type: 'duration', seconds: 1 } });
  const r = await post();
  assert.deepEqual(Object.keys(r.json).sort(), ['meta', 'ok', 'seconds', 'text']);
});

test('the key and the transcript never appear in logs or responses', async () => {
  reply = () => Response.json({ text: 'Geheimer Satz aus der Aufnahme', usage: { type: 'duration', seconds: 3 } });
  logs.length = 0;
  const r = await post();
  assert.ok(!r.text.includes(KEY));
  const all = logs.join('\n');
  assert.ok(all.length > 0, 'an operational log line is written');
  assert.ok(!all.includes(KEY) && !all.includes('sk-'), 'no key in logs');
  assert.ok(!all.includes('Geheimer') && !all.includes('Aufnahme'), 'no transcript in logs');
  const line = JSON.parse(logs[logs.length - 1]);
  assert.equal(line.engine, 'openai:gpt-transcribe');
  assert.deepEqual(Object.keys(line).sort(), ['action', 'bytes', 'empty', 'engine', 'error', 'ms', 'ok', 'provider', 'seconds', 'status', 'svc'].sort());
});

test('existing JSON actions are unaffected by the audio route', async () => {
  const res = await worker.fetch(new Request('https://klarweg-tutor.internal/v1/no_such_action', { method: 'POST', body: '{}' }), {});
  assert.equal(res.status, 404);
});
