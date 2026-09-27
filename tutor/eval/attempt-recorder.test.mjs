/* The per-attempt recorder must tell a length cutoff, malformed JSON,
   a schema failure and an HTTP error apart — through the real Worker
   handler and OpenAI adapter, with the network stubbed — and must
   never record the key, the prompt or a provider error body. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { handle } from '../worker/src/index.js';
import { installAttemptRecorder } from './attempt-recorder.mjs';

const KEY = 'sk-test-DO-NOT-RECORD-7f3a';
const ENV = { LLM_PROVIDER: 'openai', LLM_MODEL: 'gpt-6-luna', OPENAI_API_KEY: KEY, LLM_TIMEOUT_MS: '5000' };
const CASE = { id: 'T001', action: 'explain_grammar', body: { chapterId: 'a1-12-akkusativ', sectionId: 'grammar', itemId: 'grammar.0', mode: 'simpler' } };
const GOOD = JSON.stringify({ explanation: 'Masculine der becomes den.', examples: [{ de: 'Ich sehe den Hund.', en: 'I see the dog.' }], hindi_bridge: '' });

const openai = (content, finish, completion = 700, reasoning = 520) => new Response(JSON.stringify({
  model: 'gpt-6-luna-2026-09-01',
  choices: [{ message: { content }, finish_reason: finish }],
  usage: { prompt_tokens: 1950, completion_tokens: completion, completion_tokens_details: { reasoning_tokens: reasoning } },
}), { status: 200, headers: { 'content-type': 'application/json' } });

async function runWith(replies) {
  const saved = globalThis.fetch;
  let n = 0;
  globalThis.fetch = async () => replies[n++]();
  const rec = installAttemptRecorder();
  try {
    const { value: res, attempts } = await rec.run(CASE, () => handle(new Request('https://tutor.internal/v1/explain_grammar', { method: 'POST', body: JSON.stringify(CASE.body) }), ENV));
    return { status: res.status, body: await res.json(), attempts };
  } finally {
    rec.uninstall();
    globalThis.fetch = saved;
  }
}

test('recorder: length cutoff then valid retry — both attempts recorded with stop reason and token split', async () => {
  const r = await runWith([
    () => openai('{"explanation":"Masculine der becomes', 'length'),
    () => openai(GOOD, 'stop', 480, 360),
  ]);
  assert.equal(r.body.source, 'ai');
  assert.equal(r.attempts.length, 2);
  const [a, b] = r.attempts;
  assert.deepEqual(
    { caseId: a.caseId, attempt: a.attempt, provider: a.provider, requestedModel: a.requestedModel, model: a.model, finishReason: a.finishReason, inputTokens: a.inputTokens, outputTokens: a.outputTokens, reasoningTokens: a.reasoningTokens, parseOk: a.parseOk, schemaOk: a.schemaOk },
    { caseId: 'T001', attempt: 1, provider: 'openai', requestedModel: 'gpt-6-luna', model: 'gpt-6-luna-2026-09-01', finishReason: 'length', inputTokens: 1950, outputTokens: 700, reasoningTokens: 520, parseOk: false, schemaOk: false },
  );
  assert.equal(a.error, '$: no JSON object in reply');
  assert.equal(a.rejectedSnippet, '{"explanation":"Masculine der becomes');
  assert.equal(b.attempt, 2);
  assert.equal(b.finishReason, 'stop');
  assert.equal(b.schemaOk, true);
  assert.equal(b.error, null);
  assert.equal(b.rejectedSnippet, null, 'accepted replies are not stored');
});

test('recorder: malformed JSON vs schema failure are distinguished with the exact validator message', async () => {
  const empty = JSON.stringify({ explanation: 'x', examples: [], hindi_bridge: '' });
  const r = await runWith([
    () => openai('{"explanation": "x", "examples": [,]}', 'stop', 300),
    () => openai(empty, 'stop', 300),
  ]);
  assert.equal(r.status, 503);
  const [a, b] = r.attempts;
  assert.equal(a.parseOk, false);
  assert.match(a.error, /^\$: invalid JSON: /);
  assert.equal(b.parseOk, true);
  assert.equal(b.schemaOk, false);
  assert.equal(b.error, '$.examples: expected at least 1 item(s)');
  assert.ok(b.rejectedSnippet.length <= 300);
});

test('recorder: HTTP error keeps status only; key, prompt and error body never recorded; snippet capped at 300', async () => {
  const leakyError = () => new Response(JSON.stringify({ error: { message: `Incorrect API key provided: ${KEY}` } }), { status: 500 });
  const long = '{"explanation":"' + 'a'.repeat(1000);
  const r = await runWith([leakyError, () => openai(long, 'length')]);
  const [a, b] = r.attempts;
  assert.equal(a.httpStatus, 500);
  assert.equal(a.error, 'http 500');
  assert.equal(a.finishReason, null);
  assert.equal(b.rejectedSnippet.length, 300);
  const dump = JSON.stringify(r.attempts);
  assert.ok(!dump.includes(KEY), 'API key must not appear');
  assert.ok(!dump.includes('HARD RULES') && !dump.includes('<chapter>'), 'prompt must not appear');
});

test('recorder: calls outside a recorded case pass straight through', async () => {
  const saved = globalThis.fetch;
  globalThis.fetch = async () => new Response('ok');
  const rec = installAttemptRecorder();
  try {
    assert.equal(await (await fetch('https://api.openai.com/v1/models')).text(), 'ok');
  } finally {
    rec.uninstall();
    globalThis.fetch = saved;
  }
});

test('eval-only reasoning effort: sent only on the listed action, recorded per attempt; absent → request untouched', async () => {
  const saved = globalThis.fetch;
  const sent = [];
  globalThis.fetch = async (url, init) => {
    sent.push(JSON.parse(init.body));
    const exercise = JSON.stringify({ verdict: 'incorrect', rule_hint: 'Check the article after von.', focus_fragment: '', explanation: '', hindi_bridge: '' });
    return openai(sent.at(-1).response_format.json_schema.name === 'exercise' ? exercise : GOOD, 'stop', 300, 200);
  };
  const EXERCISE = { id: 'T002', action: 'check_exercise', body: { chapterId: 'b1-10-passiv-praesens', sectionId: 'exercises', itemId: 'ex.errorCorrection', input: 'Das Auto wird repariert von den Mechaniker.', attempt: 1, mode: 'hint' } };
  const post = (c) => () => handle(new Request(`https://tutor.internal/v1/${c.action}`, { method: 'POST', body: JSON.stringify(c.body) }), ENV);
  try {
    const low = installAttemptRecorder({ openaiReasoningEffort: { effort: 'low', actions: ['explain_grammar'] } });
    const g = await low.run(CASE, post(CASE));
    const x = await low.run(EXERCISE, post(EXERCISE));
    low.uninstall();
    assert.equal(sent[0].reasoning_effort, 'low', 'explain_grammar gets the override');
    assert.equal(g.attempts[0].reasoningEffortSent, 'low');
    assert.ok(!('reasoning_effort' in sent[1]), 'other actions are untouched');
    assert.equal(x.attempts[0].reasoningEffortSent, null);
    assert.equal(sent[0].max_completion_tokens, 2000, 'token limit unchanged');

    const plain = installAttemptRecorder();
    const p = await plain.run(CASE, post(CASE));
    plain.uninstall();
    assert.ok(!('reasoning_effort' in sent[2]), 'no override → Worker request as built');
    assert.equal(p.attempts[0].reasoningEffortSent, null);

    assert.throws(() => installAttemptRecorder({ openaiReasoningEffort: { effort: 'minimal', actions: ['explain_grammar'] } }), /not one of/);
  } finally {
    globalThis.fetch = saved;
  }
});
