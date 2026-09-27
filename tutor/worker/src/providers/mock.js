/* Deterministic test provider. Never selectable in production by
   accident: it only runs when LLM_PROVIDER=mock, and it produces
   nothing a learner could mistake for feedback on their text unless
   a test injects a reply.

   Tests inject behaviour through env.MOCK_REPLY:
     - a string   → returned verbatim as the model text
     - a function → called with the request, returns text or throws
   With no injection it returns a minimal schema-valid reply for the
   requested schema name, so the pipeline can be exercised end-to-end. */
const DEFAULTS = {
  feedback: { summary: 'Mock review.', corrections: [], focus: { status: 'not_applicable', note: '' }, improved: '', rubric: [], hindi_bridge: '', next_action: 'Write one more sentence.' },
  exercise: { verdict: 'incorrect', rule_hint: 'Check the rule for this exercise.', focus_fragment: '', explanation: '', hindi_bridge: '' },
  practice: { wrong: 'Ich sehe der Mann.', right: 'Ich sehe den Mann.', explain: 'Masculine object: der becomes den.' },
  explain: { explanation: 'Mock explanation.', examples: [], hindi_bridge: '' },
  quiz_review: { pattern: 'Mock pattern.', items: [], review: [], next_action: 'Re-read the grammar section.' },
};

export async function callMock(req, env) {
  let text;
  if (typeof env.MOCK_REPLY === 'function') text = await env.MOCK_REPLY(req);
  else if (typeof env.MOCK_REPLY === 'string') text = env.MOCK_REPLY;
  else text = JSON.stringify(DEFAULTS[req.schemaName] || {});
  return { text, model: 'mock', usage: { input: Math.ceil((req.system.length + req.user.length) / 4), output: Math.ceil(String(text).length / 4), cachedInput: 0 } };
}
