/* Anthropic Messages API — POST /v1/messages.
   Structured output: output_config.format = { type: "json_schema", schema }.
   The stable system prompt is marked cacheable (prompt caching reads
   are billed at a fraction of normal input). */
import { upstreamError } from './index.js';

export async function callAnthropic(req, env, ProviderError) {
  const key = env.ANTHROPIC_API_KEY;
  if (!key) throw new ProviderError('ANTHROPIC_API_KEY is not set', { status: 503, retriable: false, code: 'ai_unconfigured' });

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    signal: req.signal,
    headers: {
      'content-type': 'application/json',
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: req.model,
      max_tokens: req.maxTokens || 1200,
      system: [{ type: 'text', text: req.system, cache_control: { type: 'ephemeral' } }],
      messages: [{ role: 'user', content: req.user }],
      output_config: { format: { type: 'json_schema', schema: req.schema } },
    }),
  });
  if (!res.ok) throw await upstreamError('anthropic', res, ProviderError);

  const json = await res.json();
  if (json.stop_reason === 'refusal') {
    throw new ProviderError('anthropic declined the request', { status: 502, retriable: false, code: 'ai_refused' });
  }
  const text = (json.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('');
  const u = json.usage || {};
  return {
    text,
    model: json.model,
    usage: {
      input: (u.input_tokens || 0) + (u.cache_read_input_tokens || 0) + (u.cache_creation_input_tokens || 0),
      output: u.output_tokens || 0,
      cachedInput: u.cache_read_input_tokens || 0,
    },
  };
}
