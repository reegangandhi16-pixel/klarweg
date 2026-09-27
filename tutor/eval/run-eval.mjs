#!/usr/bin/env node
/* ============================================================
   KLARWEG AI · PROVIDER BENCHMARK RUNNER
   ------------------------------------------------------------
   Runs the 150 cases in cases.mjs through the REAL tutor pipeline
   (the same handle() the Worker serves: registry, prompts, schema
   validation, guards) against one provider/model, and reports:

     1. false-correction rate   (errors flagged in correct German)
     2. chapter-scope adherence (no later grammar / leaks / persona)
     3. CEFR adherence          (explanation length per level)
     4. structured-JSON validity (first reply valid, after retry, failed)
     5. latency                 (p50 / p95, ms)
     6. cost per 1,000 checks   (measured tokens × price per token)
   plus detection rate, hint-ladder integrity and Hindi policy.

   Spending money is opt-in: real providers require --confirm-spend.

   Usage:
     node tutor/eval/run-eval.mjs                          # mock (free, pipeline check)
     LLM_PROVIDER=gemini LLM_MODEL=<id> GEMINI_API_KEY=… \
       node tutor/eval/run-eval.mjs --price-in 0.30 --price-out 2.50 --confirm-spend
   Options: --only A,B   --limit N   --concurrency 4
   Results: tutor/eval/results/<provider>-<model>-<timestamp>.json
   ============================================================ */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i === -1 ? d : process.argv[i + 1]; };

execFileSync(process.execPath, [path.join(ROOT, 'scripts/build-tutor-registry.mjs')], { stdio: 'ignore' });
const { handle } = await import('../worker/src/index.js');
const { LOADERS } = await import('../worker/src/registry/generated/index.js');
const cases = (await import('./cases.mjs')).default;

// The Worker writes one operational log line per request; keep the report clean.
const log = console.log.bind(console);
console.log = () => {};

const provider = (process.env.LLM_PROVIDER || 'mock').toLowerCase();
if (provider !== 'mock' && !process.argv.includes('--confirm-spend')) {
  console.error(`Refusing to call "${provider}" without --confirm-spend (this spends real money on the configured account).`);
  process.exit(1);
}
const env = {
  ...process.env,
  LLM_PROVIDER: provider,
  PRICE_INPUT_PER_MTOK_USD: arg('--price-in', process.env.PRICE_INPUT_PER_MTOK_USD || '0'),
  PRICE_OUTPUT_PER_MTOK_USD: arg('--price-out', process.env.PRICE_OUTPUT_PER_MTOK_USD || '0'),
  LLM_TIMEOUT_MS: process.env.LLM_TIMEOUT_MS || '20000',
};

/* Scorer self-check profiles for the free mock provider:
     --mock-profile flag-first-word  flags the learner's first word as an error
       everywhere → false-correction rate must come out ~100%, proving the
       metric is not trivially zero. */
const profile = arg('--mock-profile');
if (provider === 'mock' && profile === 'flag-first-word') {
  env.MOCK_REPLY = (req) => {
    const m = req.user.match(/<student_input>\n([\s\S]*?)\n<\/student_input>/);
    const first = m ? m[1].trim().split(/\s+/)[0] : 'x';
    if (req.schemaName === 'feedback') return JSON.stringify({ summary: 's', corrections: [{ wrong: first, right: first + 'X', role: 'other', reason: 'r', severity: 'error' }], focus: { status: 'applied', note: '' }, improved: '', rubric: [], hindi_bridge: '', next_action: 'n' });
    return undefined;
  };
  const base = env.MOCK_REPLY;
  env.MOCK_REPLY = async (req) => (await base(req)) ?? JSON.stringify({ exercise: { verdict: 'incorrect', rule_hint: 'r', focus_fragment: '', explanation: '', hindi_bridge: '' }, explain: { explanation: 'e', examples: [], hindi_bridge: '' }, quiz_review: { pattern: '', items: [], review: [], next_action: '' }, practice: { wrong: 'a b', right: 'a c', explain: '' } }[req.schemaName] || {});
}

const JSON_ONLY = process.argv.includes('--json');
const only = arg('--only') ? new Set(arg('--only').split(',')) : null;
const selected = cases.filter((c) => !only || only.has(c.cat)).slice(0, Number(arg('--limit', 1e9)));
const concurrency = Number(arg('--concurrency', provider === 'mock' ? 16 : 4));

/* ---------- scoring helpers ---------- */
const lc = (s) => String(s || '').toLowerCase();
const words = (s) => String(s || '').trim().split(/\s+/).filter(Boolean).length;
const WORD_LIMIT = { A1: 45, A2: 45, B1: 70, B2: 70, C1: 100, C2: 100 };
const IDENTITY_FORBID = [/\bKlara\b/, /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u, /as an ai language model/i];
const DEVANAGARI = /[ऀ-ॿ]/;

async function authoredAnswer(c) {
  const C = (await LOADERS[c.body.chapterId]()).default;
  const [, key, idx] = c.body.itemId.split('.');
  if (key === 'gap') return C.exercises.gap.gaps.map((g) => g.answer).join(' ');
  if (key === 'ecs') return C.exercises.ecs[Number(idx)].right;
  if (key === 'errorCorrection') return C.exercises.errorCorrection.right;
  const a = C.exercises[key] && C.exercises[key].answer;
  return Array.isArray(a) ? a.join(' ') : a;
}

async function score(c, out, level) {
  const r = out.result || {};
  const checks = {};
  const text = JSON.stringify(r);
  const errs = (r.corrections || []).filter((x) => x.severity === 'error');
  const e = c.expect;
  if (e.flag) checks.detect = (r.corrections || []).some((x) => e.flag.some((f) => lc(x.wrong).includes(lc(f))));
  if (e.noErrors) checks.noFalseCorrection = errs.length === 0;
  if (e.notFlag) checks.noFalseCorrection = (checks.noFalseCorrection !== false) && !errs.some((x) => e.notFlag.some((f) => lc(x.wrong).includes(lc(f)) && !e.flag?.some((g) => lc(x.wrong).includes(lc(g)))));
  if (e.verdict) {
    const correct = r.correct === true;
    // 'correct' and 'accepted' both require the learner to be told they are right;
    // 'accepted' documents that an authored alternative or model-judged variant is expected.
    checks.verdict = e.verdict === 'incorrect' ? r.correct === false : correct;
  }
  if (e.noLeak) {
    const ans = lc(await authoredAnswer(c)).replace(/[.!?]$/, '');
    checks.noLeak = !r.answer && !(ans.length > 3 && lc(text).includes(ans));
  }
  if (e.hindi === true) checks.hindi = DEVANAGARI.test(r.hindi_bridge || '');
  if (e.hindi === false) checks.hindi = !r.hindi_bridge;
  if (e.rubric) checks.rubric = Array.isArray(r.rubric) && r.rubric.length >= 2;
  const forbid = (e.forbid || []).map((s) => new RegExp(s, 'iu')).concat(IDENTITY_FORBID);
  checks.scope = !forbid.some((re) => re.test(text));
  const prose = [r.summary, r.explanation, r.rule_hint, ...(r.corrections || []).map((x) => x.reason)].filter(Boolean);
  if (prose.length) checks.cefr = prose.every((p) => words(p) <= WORD_LIMIT[level]);
  return checks;
}

/* ---------- run ---------- */
const rows = [];
let next = 0;
async function worker() {
  while (next < selected.length) {
    const c = selected[next++];
    const level = c.body.chapterId.slice(0, 2).toUpperCase();
    const t0 = Date.now();
    const res = await handle(new Request(`https://tutor.internal/v1/${c.action}`, { method: 'POST', body: JSON.stringify(c.body) }), env);
    const out = await res.json();
    const ms = Date.now() - t0;
    const meta = out.meta || {};
    const usage = meta.usage || {};
    const json = !meta.llm ? 'n/a (deterministic)' : out.source === 'ai' ? (usage.calls === 1 ? 'valid-first-try' : 'valid-after-retry') : 'invalid';
    const checks = out.ok ? await score(c, out, level) : { failed: false };
    rows.push({ id: c.id, cat: c.cat, action: c.action, chapter: c.body.chapterId, status: res.status, source: out.source || out.error, json, ms, llm: !!meta.llm, in: usage.input || 0, out: usage.output || 0, costMicros: meta.costMicros || 0, checks, result: out.result });
    if (!JSON_ONLY) process.stdout.write('.');
  }
}
await Promise.all(Array.from({ length: concurrency }, worker));
if (!JSON_ONLY) process.stdout.write('\n');

/* ---------- aggregate ---------- */
const rate = (key) => {
  const xs = rows.filter((r) => key in r.checks);
  return { pass: xs.filter((r) => r.checks[key]).length, of: xs.length, pct: xs.length ? Math.round((1000 * xs.filter((r) => r.checks[key]).length) / xs.length) / 10 : null };
};
const llmRows = rows.filter((r) => r.llm);
const lat = llmRows.map((r) => r.ms).sort((a, b) => a - b);
const pct = (p) => (lat.length ? lat[Math.min(lat.length - 1, Math.floor((p / 100) * lat.length))] : null);
const fc = rate('noFalseCorrection');
const summary = {
  provider, model: process.env.LLM_MODEL || (provider === 'mock' ? 'mock' : ''), ranAt: new Date().toISOString(), cases: rows.length,
  falseCorrectionRate: fc.of ? Math.round((1000 * (fc.of - fc.pass)) / fc.of) / 10 + '%' : null,
  detectionRate: rate('detect'),
  scopeAdherence: rate('scope'),
  cefrAdherence: rate('cefr'),
  exerciseVerdicts: rate('verdict'),
  hintLadderNoLeak: rate('noLeak'),
  hindiPolicy: rate('hindi'),
  examRubric: rate('rubric'),
  json: {
    modelCalls: llmRows.length,
    validFirstTry: llmRows.filter((r) => r.json === 'valid-first-try').length,
    validAfterRetry: llmRows.filter((r) => r.json === 'valid-after-retry').length,
    invalid: llmRows.filter((r) => r.json === 'invalid').length,
  },
  latencyMs: { p50: pct(50), p95: pct(95) },
  costPer1000Checks: llmRows.length ? '$' + ((llmRows.reduce((a, r) => a + r.costMicros, 0) / llmRows.length) * 1000 / 1e6).toFixed(2) : null,
  avgTokens: llmRows.length ? { input: Math.round(llmRows.reduce((a, r) => a + r.in, 0) / llmRows.length), output: Math.round(llmRows.reduce((a, r) => a + r.out, 0) / llmRows.length) } : null,
  deterministicShortCircuits: rows.filter((r) => r.source === 'deterministic').length,
};

const dir = path.join(HERE, 'results');
fs.mkdirSync(dir, { recursive: true });
const file = path.join(dir, `${provider}-${(summary.model || 'x').replace(/[^a-z0-9.-]/gi, '_')}-${summary.ranAt.replace(/[:.]/g, '-')}.json`);
fs.writeFileSync(file, JSON.stringify({ summary, rows }, null, 1));
if (JSON_ONLY) log(JSON.stringify(summary));
else { log(JSON.stringify(summary, null, 2)); log('Full results:', path.relative(ROOT, file)); }
