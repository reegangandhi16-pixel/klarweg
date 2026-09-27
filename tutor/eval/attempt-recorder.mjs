/* ============================================================
   KLARWEG AI · EVAL-ONLY PER-ATTEMPT RECORDER
   ------------------------------------------------------------
   The Worker's retry loop (actions.js askModel) keeps only the
   final outcome. For diagnosis the eval needs every attempt:
   stop reason, token split, reasoning tokens, and the exact
   parser/validator error.

   This module never touches Worker code. It wraps globalThis.fetch
   for the eval process only, tags each provider reply with the case
   in flight (AsyncLocalStorage, safe under --concurrency), and
   re-runs the Worker's own parseModelJson + validate on the reply
   text — deterministic, so the error message is the one the Worker
   produced.

   Never recorded: request bodies (prompts), headers (the key),
   provider error bodies, or full responses. A rejected reply keeps
   only its first 300 characters.
   ============================================================ */
import { AsyncLocalStorage } from 'node:async_hooks';
import { SCHEMAS, parseModelJson, validate } from '../worker/src/schema.js';
import { SCHEMA_FOR_ACTION } from '../worker/src/prompts.js';
import { OPENAI_REASONING_EFFORTS } from '../worker/src/providers/openai.js';

const SNIPPET = 300;
const PROVIDER_HOSTS = {
  'api.openai.com': 'openai',
  'api.anthropic.com': 'anthropic',
  'generativelanguage.googleapis.com': 'gemini',
};

/* Reply text, stop reason and token split in each provider's wire format. */
function readReply(provider, json) {
  if (provider === 'openai') {
    const ch = (json.choices && json.choices[0]) || {};
    const u = json.usage || {};
    return {
      text: (ch.message && ch.message.content) || '',
      refusal: !!(ch.message && ch.message.refusal),
      finishReason: ch.finish_reason ?? null,
      inputTokens: u.prompt_tokens ?? null,
      outputTokens: u.completion_tokens ?? null,
      reasoningTokens: (u.completion_tokens_details && u.completion_tokens_details.reasoning_tokens) ?? null,
    };
  }
  if (provider === 'anthropic') {
    const u = json.usage || {};
    return {
      text: (json.content || []).filter((b) => b.type === 'text').map((b) => b.text).join(''),
      refusal: json.stop_reason === 'refusal',
      finishReason: json.stop_reason ?? null,
      inputTokens: u.input_tokens ?? null,
      outputTokens: u.output_tokens ?? null,
      reasoningTokens: null,
    };
  }
  const cand = (json.candidates && json.candidates[0]) || {};
  const u = json.usageMetadata || {};
  return {
    text: ((cand.content && cand.content.parts) || []).map((p) => p.text || '').join(''),
    refusal: false,
    finishReason: cand.finishReason ?? null,
    inputTokens: u.promptTokenCount ?? null,
    outputTokens: u.candidatesTokenCount ?? null,
    reasoningTokens: u.thoughtsTokenCount ?? null,
  };
}

/* Same two steps, same order, as askModel in actions.js. */
function check(schemaName, text) {
  let parsed;
  try { parsed = parseModelJson(text); } catch (e) { return { parseOk: false, schemaOk: false, error: e.message }; }
  try { validate(SCHEMAS[schemaName], parsed); } catch (e) { return { parseOk: true, schemaOk: false, error: e.message }; }
  return { parseOk: true, schemaOk: true, error: null };
}

export { OPENAI_REASONING_EFFORTS };

/**
 * @param {object} [opts]
 * @param {{ effort: string, actions: string[] }} [opts.openaiReasoningEffort]
 *   EVAL-ONLY experiment: adds Chat Completions `reasoning_effort` to OpenAI
 *   requests made by the listed actions. The Worker never sends it; omitted,
 *   requests go out byte-for-byte as the Worker built them.
 */
export function installAttemptRecorder(opts = {}) {
  const als = new AsyncLocalStorage();
  const realFetch = globalThis.fetch;
  const effort = opts.openaiReasoningEffort;
  if (effort && !OPENAI_REASONING_EFFORTS.includes(effort.effort)) {
    throw new Error(`reasoning effort "${effort.effort}" is not one of ${OPENAI_REASONING_EFFORTS.join(', ')}`);
  }

  globalThis.fetch = async function recordedFetch(input, init) {
    const ctx = als.getStore();
    const url = typeof input === 'string' ? input : input && input.url;
    const provider = ctx && url ? PROVIDER_HOSTS[new URL(url).host] : undefined;
    if (!provider) return realFetch(input, init);

    if (effort && provider === 'openai' && effort.actions.includes(ctx.action)) {
      const body = JSON.parse(init.body);
      body.reasoning_effort = effort.effort;
      init = { ...init, body: JSON.stringify(body) };
    }

    const attempt = {
      caseId: ctx.caseId,
      attempt: ctx.attempts.length + 1,
      provider,
      requestedModel: null,
      reasoningEffortSent: null,
      model: null,
      httpStatus: null,
      finishReason: null,
      inputTokens: null,
      outputTokens: null,
      reasoningTokens: null,
      parseOk: null,
      schemaOk: null,
      error: null,
      rejectedSnippet: null,
      ms: null,
    };
    ctx.attempts.push(attempt);
    try {
      // Only the model id and reasoning effort are read — never the prompt.
      const sent = JSON.parse(init && init.body);
      attempt.requestedModel = sent.model ?? null;
      attempt.reasoningEffortSent = sent.reasoning_effort ?? null;
    } catch { /* gemini carries the model in the URL */ }
    if (!attempt.requestedModel && provider === 'gemini') {
      attempt.requestedModel = decodeURIComponent((url.match(/models\/([^:]+):/) || [])[1] || '') || null;
    }

    const t0 = Date.now();
    let res;
    try {
      res = await realFetch(input, init);
    } catch (err) {
      attempt.ms = Date.now() - t0;
      attempt.error = err && err.name === 'AbortError' ? 'timeout (request aborted)' : `fetch failed: ${err && err.name}`;
      throw err;
    }
    attempt.ms = Date.now() - t0;
    attempt.httpStatus = res.status;
    // Provider error bodies can echo parts of the key — status only.
    if (!res.ok) { attempt.error = `http ${res.status}`; return res; }

    try {
      const json = await res.clone().json();
      const r = readReply(provider, json);
      attempt.model = json.model || json.modelVersion || null;
      attempt.finishReason = r.finishReason;
      attempt.inputTokens = r.inputTokens;
      attempt.outputTokens = r.outputTokens;
      attempt.reasoningTokens = r.reasoningTokens;
      if (r.refusal) {
        attempt.error = 'provider refusal';
      } else {
        Object.assign(attempt, check(ctx.schemaName, r.text));
        if (!attempt.schemaOk) attempt.rejectedSnippet = r.text.slice(0, SNIPPET);
      }
    } catch (err) {
      attempt.error = `unreadable provider reply: ${err && err.message}`;
    }
    return res;
  };

  return {
    /** Run fn() with every provider call inside it recorded against caseId. */
    async run(c, fn) {
      const ctx = { caseId: c.id, action: c.action, schemaName: SCHEMA_FOR_ACTION[c.action], attempts: [] };
      const value = await als.run(ctx, fn);
      return { value, attempts: ctx.attempts };
    },
    uninstall() { globalThis.fetch = realFetch; },
  };
}
