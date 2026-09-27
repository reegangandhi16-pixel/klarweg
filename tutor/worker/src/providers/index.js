/* ============================================================
   klarweg-tutor · PROVIDER ADAPTER
   ------------------------------------------------------------
   One interface, several vendors. The product never imports a
   vendor module directly; it calls callModel() and receives
     { text, usage: { input, output }, provider, model }
   or a thrown ProviderError.

   Selection is configuration, not code:
     LLM_PROVIDER   none | mock | anthropic | openai | gemini
     LLM_MODEL      the provider's model id (required for real providers)
     <VENDOR>_API_KEY  a Worker secret — never a [var], never in the repo

   LLM_PROVIDER defaults to "none": the Worker ships disabled and
   every request degrades to the deterministic fallback until a
   provider has been chosen from the measured evaluation
   (tutor/eval) and its key installed with `wrangler secret put`.

   All adapters use plain fetch(): this Worker has no npm
   dependencies (same as klarweg-access / klarweg-reports) and the
   adapter has to speak three wire formats behind one interface.
   ============================================================ */
import { callAnthropic } from './anthropic.js';
import { callOpenAI } from './openai.js';
import { callGemini } from './gemini.js';
import { callMock } from './mock.js';

export class ProviderError extends Error {
  constructor(message, { status = 502, retriable = true, code = 'provider_error' } = {}) {
    super(message);
    this.name = 'ProviderError';
    this.status = status;
    this.retriable = retriable;
    this.code = code;
  }
}

const ADAPTERS = {
  anthropic: callAnthropic,
  openai: callOpenAI,
  gemini: callGemini,
  mock: callMock,
};

export function providerConfig(env) {
  const provider = String(env.LLM_PROVIDER || 'none').toLowerCase();
  const model = String(env.LLM_MODEL || '');
  return { provider, model };
}

/* JSON-Schema keywords every structured-output mode accepts. Length
   and count limits are enforced by our own validator instead, because
   several strict modes reject them outright. */
const KEEP = new Set(['type', 'properties', 'required', 'additionalProperties', 'items', 'enum', 'description']);
export function providerSchema(schema) {
  if (Array.isArray(schema)) return schema.map(providerSchema);
  if (!schema || typeof schema !== 'object') return schema;
  const out = {};
  for (const [k, v] of Object.entries(schema)) {
    if (!KEEP.has(k)) continue;
    if (k === 'properties') {
      out.properties = Object.fromEntries(Object.entries(v).map(([pk, pv]) => [pk, providerSchema(pv)]));
    } else if (k === 'items') {
      out.items = providerSchema(v);
    } else {
      out[k] = v;
    }
  }
  return out;
}

/**
 * @param {object} req  { system, user, schema, schemaName, maxTokens, timeoutMs }
 * @param {object} env  Worker env (secrets + vars)
 */
export async function callModel(req, env) {
  const { provider, model } = providerConfig(env);
  if (provider === 'none') {
    throw new ProviderError('No AI provider configured', { status: 503, retriable: false, code: 'ai_unconfigured' });
  }
  const adapter = ADAPTERS[provider];
  if (!adapter) {
    throw new ProviderError(`Unknown LLM_PROVIDER "${provider}"`, { status: 500, retriable: false, code: 'ai_unconfigured' });
  }
  if (provider !== 'mock' && !model) {
    throw new ProviderError('LLM_MODEL is not set', { status: 500, retriable: false, code: 'ai_unconfigured' });
  }

  const timeoutMs = req.timeoutMs || 12000;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const result = await adapter({ ...req, model, schema: providerSchema(req.schema), signal: controller.signal }, env, ProviderError);
    return { ...result, provider, model: result.model || model };
  } catch (err) {
    if (err instanceof ProviderError) throw err;
    if (err && err.name === 'AbortError') throw new ProviderError(`${provider} timed out after ${timeoutMs}ms`, { status: 504, retriable: true, code: 'ai_timeout' });
    throw new ProviderError(`${provider} request failed: ${(err && err.message) || err}`, { status: 502, retriable: true });
  } finally {
    clearTimeout(timer);
  }
}

/* Shared: turn an upstream HTTP failure into a ProviderError. */
export async function upstreamError(provider, res, ProviderErrorCtor) {
  const body = await res.text().catch(() => '');
  const retriable = res.status === 429 || res.status >= 500;
  return new ProviderErrorCtor(`${provider} ${res.status}: ${body.slice(0, 240)}`, {
    status: res.status === 429 ? 429 : 502,
    retriable,
    code: res.status === 429 ? 'ai_rate_limited' : 'provider_error',
  });
}
