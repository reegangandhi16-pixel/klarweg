/* OpenAI Chat Completions — POST /v1/chat/completions.
   Structured output: response_format = { type: "json_schema",
   json_schema: { name, strict: true, schema } }. OpenAI applies
   prompt caching automatically to long, stable prefixes.
   Optional `reasoning_effort` comes from server config only
   (LLM_REASONING_EFFORT_EXPLAIN → req.reasoningEffort). */
import { upstreamError } from './index.js';

/* Values documented for gpt-6-luna (developers.openai.com/api/docs/models/
   gpt-6-luna). Anything else is not sent, rather than risking an HTTP 400
   on every request from a typo in configuration. */
export const OPENAI_REASONING_EFFORTS = ['none', 'low', 'medium', 'high', 'xhigh', 'max'];

export async function callOpenAI(req, env, ProviderError) {
  const key = env.OPENAI_API_KEY;
  if (!key) throw new ProviderError('OPENAI_API_KEY is not set', { status: 503, retriable: false, code: 'ai_unconfigured' });

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    signal: req.signal,
    headers: { 'content-type': 'application/json', authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: req.model,
      max_completion_tokens: req.maxTokens || 1200,
      messages: [
        { role: 'system', content: req.system },
        { role: 'user', content: req.user },
      ],
      response_format: {
        type: 'json_schema',
        json_schema: { name: req.schemaName || 'klarweg_tutor', strict: true, schema: req.schema },
      },
      ...(OPENAI_REASONING_EFFORTS.includes(req.reasoningEffort) ? { reasoning_effort: req.reasoningEffort } : {}),
    }),
  });
  if (!res.ok) throw await upstreamError('openai', res, ProviderError);

  const json = await res.json();
  const choice = json.choices && json.choices[0];
  if (!choice) throw new ProviderError('openai returned no choices', { status: 502, retriable: true });
  if (choice.message && choice.message.refusal) {
    throw new ProviderError('openai declined the request', { status: 502, retriable: false, code: 'ai_refused' });
  }
  const u = json.usage || {};
  return {
    text: (choice.message && choice.message.content) || '',
    model: json.model,
    usage: {
      input: u.prompt_tokens || 0,
      output: u.completion_tokens || 0,
      cachedInput: (u.prompt_tokens_details && u.prompt_tokens_details.cached_tokens) || 0,
    },
  };
}
