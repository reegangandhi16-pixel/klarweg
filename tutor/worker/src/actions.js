/* ============================================================
   klarweg-tutor · ACTIONS
   ------------------------------------------------------------
   Each action:
     1. resolves authoritative content from the registry
     2. answers deterministically when it can (no model call)
     3. otherwise builds a scoped prompt and calls the provider
     4. validates the JSON reply against the strict schema
     5. applies semantic guards (hint ladder, anti-hallucination,
        scope) that a schema alone cannot express
     6. on any model failure returns a deterministic fallback
        where one exists, so the lesson keeps working
   ============================================================ */
import { resolveItem, describeItem } from './registry.js';
import { SCHEMAS, validate, parseModelJson, SchemaError } from './schema.js';
import { buildSystem, buildUser, buildChatSystem, buildChatUser, buildChapterChatSystem, buildChapterChatUser, SCHEMA_FOR_ACTION } from './prompts.js';
import { callModel, ProviderError } from './providers/index.js';
import {
  isExactMatch, isCaseOnlyDifference, gapIsCorrect, firstDifference,
  overlapRatio, revealsAnswer, occursIn, normalizeAnswer, answerVariants,
} from './deterministic.js';

export class RequestError extends Error {
  constructor(code, message, status = 400) { super(message); this.code = code; this.status = status; }
}

const INPUT_LIMITS = { check_writing: 2000, check_writing_exam: 4000, check_speaking: 1200, check_exercise: 400 };

/* ---------- model call with validation + one bounded retry ---------- */
async function askModel(env, { action, mode, C, task, input, lang, attempt, recent }) {
  const schemaName = SCHEMA_FOR_ACTION[action];
  const req = {
    system: buildSystem(action, mode, C.level),
    user: buildUser({ C, task, input, lang, attempt, recent }),
    schema: SCHEMAS[schemaName],
    schemaName,
    maxTokens: action === 'check_writing' ? 1400 : action === 'explain_grammar' ? 2000 : 700,
    timeoutMs: Number(env.LLM_TIMEOUT_MS) || 12000,
    // Server configuration only (wrangler [vars]); never taken from the request.
    reasoningEffort: action === 'explain_grammar' ? (env.LLM_REASONING_EFFORT_EXPLAIN || undefined) : undefined,
  };
  return runModel(env, req);
}

/* Shared by every action (chapter actions via askModel, and chat). */
async function runModel(env, req) {
  const { schemaName } = req;
  /* calls:        provider replies received (tokens known)
     failedCalls:  requests that reached the provider but returned no
                   usable reply (timeout, HTTP error, network error,
                   refusal) — counted so the global daily ceiling sees them
     estimated*:   a timed-out request may still be billed, so it is
                   charged against the daily budget at a conservative
                   estimate: the whole prompt plus the full output cap. */
  const usage = { input: 0, output: 0, calls: 0, failedCalls: 0, estimatedInput: 0, estimatedOutput: 0 };
  let lastErr;
  for (let tryNo = 0; tryNo < 2; tryNo++) {
    try {
      const res = await callModel(req, env);
      usage.input += res.usage.input || 0;
      usage.output += res.usage.output || 0;
      usage.calls++;
      const parsed = validate(SCHEMAS[schemaName], parseModelJson(res.text));
      return { parsed, usage, provider: res.provider, model: res.model };
    } catch (err) {
      lastErr = err;
      // ai_unconfigured is raised before any network request, so it is not a call.
      if (err instanceof ProviderError && err.code !== 'ai_unconfigured') {
        usage.failedCalls++;
        if (err.code === 'ai_timeout') {
          usage.estimatedInput += Math.ceil((req.system.length + req.user.length) / 3);
          usage.estimatedOutput += req.maxTokens;
        }
      }
      // Retry once on a transient upstream error or a malformed reply;
      // never on configuration errors, refusals or timeouts (latency).
      const retriable = err instanceof SchemaError || (err instanceof ProviderError && err.retriable && err.code !== 'ai_timeout');
      if (!retriable) break;
    }
  }
  lastErr.usage = usage;
  throw lastErr;
}

function costMicros(env, usage) {
  const pin = Number(env.PRICE_INPUT_PER_MTOK_USD) || 0;
  const pout = Number(env.PRICE_OUTPUT_PER_MTOK_USD) || 0;
  // $/1M tokens == micro-dollars per token
  return Math.round((usage.input + (usage.estimatedInput || 0)) * pin + (usage.output + (usage.estimatedOutput || 0)) * pout);
}

/* meta.llm = "the provider was contacted", including failed attempts, so
   klarweg-access records the request against the global daily ceiling. */
const contacted = (usage) => usage.calls + (usage.failedCalls || 0) > 0;

function aiResult(env, result, m) {
  return { ok: true, source: 'ai', result, meta: { llm: true, provider: m.provider, model: m.model, usage: m.usage, costMicros: costMicros(env, m.usage) } };
}
function deterministic(result) {
  return { ok: true, source: 'deterministic', result, meta: { llm: false, usage: { input: 0, output: 0, calls: 0 }, costMicros: 0 } };
}
function fallback(env, result, err) {
  const usage = (err && err.usage) || { input: 0, output: 0, calls: 0 };
  return { ok: true, source: 'fallback', notice: 'Klarweg AI is unavailable right now. This is the lesson’s own guidance.', error: (err && err.code) || 'ai_unavailable', result, meta: { llm: contacted(usage), usage, costMicros: costMicros(env, usage) } };
}
function unavailable(env, err, message = 'Klarweg AI is unavailable right now. The lesson works as normal — try again later.') {
  const usage = (err && err.usage) || { input: 0, output: 0, calls: 0 };
  return { ok: false, status: 503, error: (err && err.code) || 'ai_unavailable', message, meta: { llm: contacted(usage), usage, costMicros: costMicros(env, usage) } };
}

function recentTitles(C, recent) {
  return (Array.isArray(recent) ? recent : []).slice(0, 5).map((id) => describeItem(C, id)).filter(Boolean);
}

/* ---------- feedback guards (writing / speaking) ---------- */
function guardFeedback(out, { input, mode, lang, speaking }) {
  const seen = new Set();
  out.corrections = (out.corrections || []).filter((c) => {
    if (!c.wrong || !c.right) return false;
    if (normalizeAnswer(c.wrong) === normalizeAnswer(c.right)) return false;       // not a correction
    if (!occursIn(c.wrong, input)) return false;                                      // quotes text the learner never wrote
    if (speaking && (c.role === 'spelling' || c.role === 'capitalisation')) return false; // ASR artefacts
    const k = normalizeAnswer(c.wrong).toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  if (mode !== 'improve') out.improved = '';
  if (mode !== 'exam') out.rubric = [];
  if (lang !== 'hi') out.hindi_bridge = '';
  return out;
}

/* ---------- actions ---------- */

async function checkWriting(env, C, body) {
  const r = resolveItem(C, body.sectionId, body.itemId);
  if (!r || r.kind !== 'writing') throw new RequestError('invalid_item', 'Unknown writing item.');
  // Exam chapters: feedback only on the submitted text, in exam mode.
  const mode = C.isExam ? 'exam' : (body.mode === 'improve' ? 'improve' : 'check');
  if (C.isExam && body.submitted !== true) throw new RequestError('not_submitted', 'Submit the exam text first.');
  const limit = C.isExam ? INPUT_LIMITS.check_writing_exam : INPUT_LIMITS.check_writing;
  const input = requireInput(body.input, limit);
  const task = { text: `WRITING TASK (authored): ${r.item.prompt}${r.item.minWords ? `\nTarget length: at least ${r.item.minWords} words.` : ''}`, withVocab: true };
  try {
    const m = await askModel(env, { action: 'check_writing', mode, C, task, input, lang: body.lang, recent: recentTitles(C, body.recent) });
    return aiResult(env, guardFeedback(m.parsed, { input, mode, lang: body.lang, speaking: false }), m);
  } catch (err) {
    return unavailable(env, err);
  }
}

async function checkSpeaking(env, C, body) {
  const r = resolveItem(C, body.sectionId, body.itemId);
  if (!r || r.kind !== 'speaking') throw new RequestError('invalid_item', 'Unknown speaking item.');
  const input = requireInput(body.input, INPUT_LIMITS.check_speaking);
  const mode = C.isExam ? 'exam' : 'check';
  const checklist = C.speakingEvaluation ? `\nCHECKLIST (authored):\n${C.speakingEvaluation.map((x) => '- ' + x).join('\n')}` : '';
  const task = {
    text: `SPEAKING TASK (authored): ${r.item.task || 'Say the model sentence.'}\nMODEL ANSWER (authored, one acceptable answer — the learner may say something different but correct): ${r.item.de}${r.item.en ? ' — ' + r.item.en : ''}${checklist}`,
    withVocab: true,
  };
  try {
    const m = await askModel(env, { action: 'check_speaking', mode, C, task, input, lang: body.lang, recent: recentTitles(C, body.recent) });
    return aiResult(env, guardFeedback(m.parsed, { input, mode, lang: body.lang, speaking: true }), m);
  } catch (err) {
    return unavailable(env, err);
  }
}

/* Hint ladder, enforced here regardless of what the model wrote:
     attempt 1 → rule hint only
     attempt 2 → + the learner's wrong fragment
     attempt 3 → + explanation + the AUTHORED answer (never the model's)
   "why" (Why is my answer wrong?) → rule + fragment + explanation,
   and the answer only once attempt ≥ 3. */
function ladder(out, { attempt, mode, item, input, C }) {
  const reveal = attempt >= 3;
  const res = { correct: false, verdict: out.verdict, attempt, rule_hint: out.rule_hint || '' };
  if (attempt >= 2 || mode === 'why') {
    res.focus_fragment = out.focus_fragment && occursIn(out.focus_fragment, input)
      ? out.focus_fragment
      : firstDifference(input, item.answer).fragment;
  }
  if (reveal || mode === 'why') {
    let expl = out.explanation || '';
    if (!reveal && revealsAnswer(expl, item.answer)) expl = '';
    if (!reveal && revealsAnswer(res.rule_hint, item.answer)) res.rule_hint = defaultRuleHint(C);
    res.explanation = expl;
  } else if (revealsAnswer(res.rule_hint, item.answer)) {
    res.rule_hint = defaultRuleHint(C);
  }
  if (reveal) {
    res.answer = Array.isArray(item.answer) ? item.answer.join(' → ') : item.answer;
    res.authored_explain = item.explain || '';
  }
  if (out.hindi_bridge) res.hindi_bridge = out.hindi_bridge;
  return res;
}

function defaultRuleHint(C) {
  const g = C.grammar[0];
  return g ? `Re-read “${g.title}” in the Grammar section and apply it to this sentence.` : 'Re-read this chapter’s Grammar section and apply the rule to this sentence.';
}

function deterministicLadder(C, item, input, attempt, mode) {
  const res = { correct: false, verdict: 'incorrect', attempt, rule_hint: defaultRuleHint(C) };
  if (isCaseOnlyDifference(input, item.answer)) res.rule_hint = 'The words are right — check capital letters. In German every noun starts with a capital letter.';
  if (attempt >= 2 || mode === 'why') {
    const d = firstDifference(input, item.answer);
    res.focus_fragment = d.fragment;
    if (d.missing) res.missing = true;
  }
  if (attempt >= 3) {
    res.answer = Array.isArray(item.answer) ? item.answer.join(' → ') : item.answer;
    res.authored_explain = item.explain || '';
  }
  return res;
}

async function checkExercise(env, C, body) {
  const r = resolveItem(C, body.sectionId, body.itemId);
  if (!r || !['correction', 'transform', 'gap'].includes(r.kind)) throw new RequestError('invalid_item', 'Unknown exercise item.');
  const attempt = clampAttempt(body.attempt);
  const mode = body.mode === 'why' ? 'why' : 'hint';

  // Goethe checkpoints are assessments: no hints while answering —
  // only an explanation after the learner has revealed the answer.
  if (C.isExam && attempt < 3) throw new RequestError('exam_locked', 'Hints are not available during a checkpoint. Reveal the answer first.', 403);

  // Gap-fill: the learner sends the gap values joined by " | ".
  if (r.kind === 'gap') {
    const values = String(body.input == null ? '' : body.input).split('|').map((s) => s.trim());
    const gaps = r.item.gaps;
    if (values.length !== gaps.length || values.some((v) => v.length > 40)) throw new RequestError('invalid_input', 'Send one value per gap.');
    const wrong = gaps.map((g, i) => ({ i, value: values[i], ok: gapIsCorrect(values[i], g) })).filter((x) => !x.ok);
    if (!wrong.length) return deterministic({ correct: true, attempt });
    const sentence = r.item.sentence.map((part, i) => part + (i < gaps.length ? `[${i + 1}]` : '')).join('');
    const answer = gaps.map((g) => g.answer).join(' | ');
    const item = { answer, explain: r.item.explain };
    const task = {
      text: `EXERCISE (gap fill, authored): ${sentence}\nANSWER KEY (authoritative, do not reveal): ${gaps.map((g, i) => `[${i + 1}] ${g.answer}`).join('; ')}\nAUTHORED EXPLANATION (do not quote until allowed): ${r.item.explain}\nLEARNER'S WRONG GAPS: ${wrong.map((w) => `[${w.i + 1}] "${w.value}"`).join(', ')}`,
    };
    const learner = wrong.map((w) => w.value).join(' ');
    try {
      const m = await askModel(env, { action: 'check_exercise', mode, C, task, input: learner, lang: body.lang, attempt });
      const out = m.parsed;
      out.verdict = 'incorrect'; // a gap value either matches the key or not
      const res = ladder(out, { attempt, mode, item, input: learner, C });
      res.wrong_gaps = wrong.map((w) => w.i);
      return aiResult(env, res, m);
    } catch (err) {
      const res = deterministicLadder(C, item, learner, attempt, mode);
      res.focus_fragment = wrong.map((w) => w.value).join(', ');
      res.wrong_gaps = wrong.map((w) => w.i);
      return fallback(env, res, err);
    }
  }

  const input = requireInput(body.input, INPUT_LIMITS.check_exercise);
  const item = r.item;
  if (isExactMatch(input, item.answer) || (item.accepts || []).some((a) => isExactMatch(input, a))) return deterministic({ correct: true, attempt });

  const task = {
    text: `EXERCISE (authored): ${item.task}\nPROMPT: ${item.prompt}\nANSWER KEY (authoritative, do not reveal): ${Array.isArray(item.answer) ? item.answer.join(' → ') : item.answer}${item.accepts && item.accepts.length ? `\nALSO ACCEPTED (authored): ${item.accepts.join(' | ')}` : ''}\nAUTHORED EXPLANATION (do not quote until allowed): ${item.explain || '(none)'}`,
  };
  try {
    const m = await askModel(env, { action: 'check_exercise', mode, C, task, input, lang: body.lang, attempt, recent: recentTitles(C, body.recent) });
    const out = m.parsed;
    // An "acceptable variant" must still be recognisably the same
    // sentence, never a different one the model happens to like —
    // and a case-only slip is never a variant.
    if (out.verdict === 'acceptable_variant') {
      const plausible = overlapRatio(input, item.answer) >= 0.6 && !isCaseOnlyDifference(input, item.answer) && out.explanation;
      if (plausible) {
        return aiResult(env, { correct: true, variant: true, attempt, explanation: out.explanation, answer: answerVariants(item.answer)[0] }, m);
      }
      out.verdict = 'incorrect';
    }
    return aiResult(env, ladder(out, { attempt, mode, item, input, C }), m);
  } catch (err) {
    return fallback(env, deterministicLadder(C, item, input, attempt, mode), err);
  }
}

async function moreLikeThis(env, C, body) {
  const r = resolveItem(C, body.sectionId, body.itemId);
  if (!r || r.kind !== 'correction') throw new RequestError('invalid_item', 'Practice generation is available for error-correction items only.');
  if (C.isExam) throw new RequestError('exam_locked', 'Generated practice is not available in a checkpoint.', 403);
  const task = {
    text: `AUTHORED ITEM (the model to imitate):\nWRONG: ${r.item.prompt}\nRIGHT: ${r.item.answer}\nWHY: ${r.item.explain || '(see chapter rules)'}`,
    withVocab: true,
  };
  try {
    const m = await askModel(env, { action: 'more_like_this', mode: 'practice', C, task, input: null, lang: 'en' });
    const p = m.parsed;
    const bad = !p.wrong || !p.right || normalizeAnswer(p.wrong) === normalizeAnswer(p.right)
      || normalizeAnswer(p.right) === normalizeAnswer(r.item.answer)
      || p.right.split(/\s+/).length < 2 || p.right.length > 160;
    if (bad) return unavailable(env, Object.assign(new Error('generated item failed checks'), { code: 'ai_invalid', usage: m.usage }));
    return aiResult(env, { generated: true, wrong: p.wrong, right: p.right, explain: p.explain }, m);
  } catch (err) {
    return unavailable(env, err);
  }
}

async function explainGrammar(env, C, body) {
  const r = resolveItem(C, body.sectionId, body.itemId);
  if (!r || r.kind !== 'grammar') throw new RequestError('invalid_item', 'Unknown grammar card.');
  const mode = ['simpler', 'example', 'compare', 'hindi'].includes(body.mode) ? body.mode : 'simpler';
  const lang = mode === 'hindi' ? 'hi' : body.lang;
  const task = { text: `GRAMMAR CARD (authored, authoritative): ${r.item.title}\n${r.item.text}`, withVocab: true };
  try {
    const m = await askModel(env, { action: 'explain_grammar', mode, C, task, input: null, lang });
    const out = m.parsed;
    if (lang !== 'hi') out.hindi_bridge = '';
    out.examples = (out.examples || []).filter((e) => e.de && e.en);
    return aiResult(env, out, m);
  } catch (err) {
    return unavailable(env, err);
  }
}

async function quizReview(env, C, body) {
  const r = resolveItem(C, body.sectionId, body.itemId);
  if (!r || r.kind !== 'quiz') throw new RequestError('invalid_item', 'Unknown quiz.');
  const quiz = r.item;
  if (!Array.isArray(body.answers) || body.answers.length > quiz.length) throw new RequestError('invalid_input', 'Send the submitted quiz answers.');
  const seen = new Set();
  const wrong = [];
  for (const a of body.answers) {
    const i = a && a.i, chosen = a && a.chosen;
    if (!Number.isInteger(i) || !quiz[i] || seen.has(i) || !Number.isInteger(chosen) || chosen < 0 || chosen >= quiz[i].options.length) {
      throw new RequestError('invalid_input', 'Invalid quiz answer.');
    }
    seen.add(i);
    if (chosen !== quiz[i].answer) wrong.push({ i, chosen, q: quiz[i] });
  }
  if (!wrong.length) return deterministic({ allCorrect: true, pattern: '', items: [], review: [], next_action: 'Continue to the next chapter.' });

  const sectionIds = new Set(C.sections.map((s) => s.id));
  // Deterministic review: the authored explanation for every wrong
  // question — always available, AI or not.
  const base = {
    items: wrong.map((w) => ({ i: w.i, why: w.q.explain })),
    review: C.sections.some((s) => s.id === 'grammar') ? [{ section: 'grammar', reason: 'Re-read the rule cards for the questions you missed.' }] : [],
    pattern: '',
    next_action: 'Re-read the Grammar section, then retake the quiz.',
  };

  const task = {
    text: `SECTIONS (ids you may reference): ${C.sections.map((s) => `${s.id} (${s.label})`).join(', ')}\nWRONG ANSWERS:\n` +
      wrong.map((w) => `[i=${w.i}] Q: ${w.q.q}\n  chosen: ${w.q.options[w.chosen]}\n  correct: ${w.q.options[w.q.answer]}\n  authored explanation: ${w.q.explain}`).join('\n'),
  };
  try {
    const m = await askModel(env, { action: 'quiz_review', mode: 'review', C, task, input: null, lang: body.lang });
    const out = m.parsed;
    const wrongIdx = new Set(wrong.map((w) => w.i));
    const aiItems = new Map((out.items || []).filter((x) => wrongIdx.has(x.i)).map((x) => [x.i, x.why]));
    const result = {
      pattern: out.pattern,
      items: wrong.map((w) => ({ i: w.i, why: aiItems.get(w.i) || w.q.explain })),
      review: (out.review || []).filter((x) => sectionIds.has(x.section)),
      next_action: out.next_action,
    };
    if (!result.review.length) result.review = base.review;
    return aiResult(env, result, m);
  } catch (err) {
    return fallback(env, base, err);
  }
}

/* ---------- input helpers ---------- */
function requireInput(input, max) {
  if (typeof input !== 'string') throw new RequestError('invalid_input', 'Input is required.');
  const t = input.trim();
  if (!t) throw new RequestError('invalid_input', 'Input is required.');
  if (t.length > max) throw new RequestError('input_too_long', `Input is limited to ${max} characters.`);
  return t;
}
function clampAttempt(a) {
  const n = Number(a);
  return Number.isInteger(n) ? Math.min(Math.max(n, 1), 3) : 1;
}

/* ---------- homepage chat (general German learning; no chapter) ----------
   The one action without a chapter: klarweg-access decides who may use it
   and meters it on the account-wide Klarweg AI allowance.
   Limits mirror access/worker/src/ai.js (CHAT_LIMITS) and are enforced here
   too, because this Worker never trusts its caller's validation. */
export const CHAT_LIMITS = { message: 600, turns: 6, turnChars: 800 };
const CHAT_UNAVAILABLE = 'Klarweg AI chat is unavailable right now. Please try again in a moment.';

function chatHistory(history) {
  if (history == null) return [];
  if (!Array.isArray(history)) throw new RequestError('invalid_history', 'Conversation history is malformed.');
  if (history.length > CHAT_LIMITS.turns) throw new RequestError('history_too_long', `Only the last ${CHAT_LIMITS.turns} messages can be sent.`);
  return history.map((t) => {
    if (!t || typeof t !== 'object' || (t.role !== 'user' && t.role !== 'assistant') || typeof t.text !== 'string') {
      throw new RequestError('invalid_history', 'Conversation history is malformed.');
    }
    // Earlier answers can be long; context is trimmed, never rejected.
    return { role: t.role, text: t.text.trim().slice(0, CHAT_LIMITS.turnChars) };
  }).filter((t) => t.text);
}

async function chat(env, _C, body) {
  const message = requireInput(body.message, CHAT_LIMITS.message);
  const history = chatHistory(body.history);
  return runChat(env, {
    system: buildChatSystem(),
    user: buildChatUser({ message, history, lang: body.lang }),
  }, CHAT_UNAVAILABLE);
}

/* ---------- chapter chat ----------
   Free questions inside one chapter: the chat's limits, schema and
   rendering, grounded in this chapter's authoritative material (the
   browser sends only the chapter id, never lesson text). */
const CHAPTER_CHAT_UNAVAILABLE = 'Klarweg AI is unavailable right now. The lesson works as normal — try again in a moment.';

async function chapterChat(env, C, body) {
  const message = requireInput(body.message, CHAT_LIMITS.message);
  const history = chatHistory(body.history);
  return runChat(env, {
    system: buildChapterChatSystem(C.level),
    user: buildChapterChatUser({ C, message, history, lang: body.lang }),
  }, CHAPTER_CHAT_UNAVAILABLE);
}

async function runChat(env, { system, user }, unavailableMessage) {
  const req = {
    system,
    user,
    schema: SCHEMAS.chat,
    schemaName: 'chat',
    maxTokens: 1600,
    timeoutMs: Number(env.LLM_TIMEOUT_MS) || 12000,
    // Server configuration only (wrangler [vars]); never taken from the request.
    reasoningEffort: env.LLM_REASONING_EFFORT_CHAT || undefined,
  };
  try {
    const m = await runModel(env, req);
    const out = m.parsed;
    out.examples = (out.examples || []).filter((e) => e.de && e.en);
    out.follow_ups = (out.follow_ups || []).filter(Boolean);
    if (!out.answer) return unavailable(env, { code: 'ai_unavailable', usage: m.usage }, unavailableMessage);
    return aiResult(env, out, m);
  } catch (err) {
    return unavailable(env, err, unavailableMessage);
  }
}

export const ACTIONS = {
  check_writing: checkWriting,
  check_speaking: checkSpeaking,
  check_exercise: checkExercise,
  more_like_this: moreLikeThis,
  explain_grammar: explainGrammar,
  quiz_review: quizReview,
  chat,
  chapter_chat: chapterChat,
};

/* Actions that do not operate on a chapter (index.js skips the chapter lookup). */
export const CHAPTERLESS_ACTIONS = new Set(['chat']);
