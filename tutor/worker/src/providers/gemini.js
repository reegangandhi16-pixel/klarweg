/* Google Gemini API — POST models/{model}:generateContent.
   Structured output: generationConfig.responseMimeType =
   "application/json" + responseJsonSchema. The key travels in the
   x-goog-api-key header, never the query string (keeps it out of
   logs). */
import { upstreamError } from './index.js';

export async function callGemini(req, env, ProviderError) {
  const key = env.GEMINI_API_KEY;
  if (!key) throw new ProviderError('GEMINI_API_KEY is not set', { status: 503, retriable: false, code: 'ai_unconfigured' });

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(req.model)}:generateContent`;
  const res = await fetch(url, {
    method: 'POST',
    signal: req.signal,
    headers: { 'content-type': 'application/json', 'x-goog-api-key': key },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: req.system }] },
      contents: [{ role: 'user', parts: [{ text: req.user }] }],
      generationConfig: {
        maxOutputTokens: req.maxTokens || 1200,
        responseMimeType: 'application/json',
        responseJsonSchema: req.schema,
      },
    }),
  });
  if (!res.ok) throw await upstreamError('gemini', res, ProviderError);

  const json = await res.json();
  const cand = json.candidates && json.candidates[0];
  if (!cand) {
    const reason = (json.promptFeedback && json.promptFeedback.blockReason) || 'no candidates';
    throw new ProviderError(`gemini returned no answer (${reason})`, { status: 502, retriable: false, code: 'ai_refused' });
  }
  const text = ((cand.content && cand.content.parts) || []).map((p) => p.text || '').join('');
  const u = json.usageMetadata || {};
  return {
    text,
    model: json.modelVersion || req.model,
    usage: {
      input: u.promptTokenCount || 0,
      output: (u.candidatesTokenCount || 0) + (u.thoughtsTokenCount || 0),
      cachedInput: u.cachedContentTokenCount || 0,
    },
  };
}
