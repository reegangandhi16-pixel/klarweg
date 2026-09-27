#!/usr/bin/env node
/* ============================================================
   KLARWEG AI · PROVIDER BENCHMARK ORCHESTRATOR
   ------------------------------------------------------------
   One deterministic run across Gemini, OpenAI and Anthropic
   cheap-tier models. Per provider:

     key → live model lookup (with cheap-tier fallbacks) → one
     adapter ping → 3-case smoke test (A001 correction, B041
     false-correction trap, F111 scope/CEFR) → full 150 cases →
     integrity check

   Keys come ONLY from the environment (the wrapper
   tutor/eval/run-benchmark.sh prompts for them with hidden input).
   They are never printed or written; every message passes through
   redact(), and result files are scanned for the actual key values.

   Writes ~/klarweg-benchmark-complete.json at start ("running") and
   at the end. Exit code is non-zero unless at least one provider
   completed with a verified 150-case result file.

   Spends money on real provider accounts — run only when intended.
   ============================================================ */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync, execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');
const RESULTS = path.join(HERE, 'results');
const MARKER = path.join(os.homedir(), 'klarweg-benchmark-complete.json');
const SMOKE_IDS = 'A001,B041,F111';

// USD per 1M tokens, official pages fetched 2026-09-27 (see prices.json).
const PROVIDERS = {
  gemini: {
    keyVar: 'GEMINI_API_KEY',
    prefer: ['gemini-3.5-flash-lite', 'gemini-3.1-flash-lite', 'gemini-2.5-flash-lite'],
    prices: { 'gemini-3.5-flash-lite': [0.30, 2.50], 'gemini-3.1-flash-lite': [0.25, 1.50], 'gemini-2.5-flash-lite': [0.10, 0.40] },
    async list(key) {
      const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models?pageSize=1000', { headers: { 'x-goog-api-key': key } });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw httpError(r.status, j);
      return (j.models || []).map((m) => String(m.name).replace(/^models\//, ''));
    },
  },
  openai: {
    keyVar: 'OPENAI_API_KEY',
    prefer: ['gpt-6-luna', 'gpt-5.6-luna', 'gpt-5.4-nano', 'gpt-5-nano', 'gpt-5-mini'],
    prices: { 'gpt-6-luna': [0.10, 0.50], 'gpt-5.6-luna': [0.20, 1.20], 'gpt-5.4-nano': [0.20, 1.25], 'gpt-5-nano': [0.05, 0.40], 'gpt-5-mini': [0.25, 2.00] },
    async list(key) {
      const r = await fetch('https://api.openai.com/v1/models', { headers: { authorization: `Bearer ${key}` } });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw httpError(r.status, j);
      return (j.data || []).map((m) => m.id);
    },
  },
  anthropic: {
    keyVar: 'ANTHROPIC_API_KEY',
    prefer: ['claude-haiku-4-5'],
    prices: { 'claude-haiku-4-5': [1.00, 5.00] },
    async list(key) {
      const r = await fetch('https://api.anthropic.com/v1/models?limit=1000', { headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' } });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw httpError(r.status, j);
      return (j.data || []).map((m) => m.id);
    },
  },
};

/* ---------- safety: never let a key reach output or disk ---------- */
const KEYS = Object.values(PROVIDERS).map((p) => process.env[p.keyVar]).filter((k) => k && k.length >= 8);
function redact(s) {
  let out = String(s == null ? '' : s);
  for (const k of KEYS) out = out.split(k).join('[redacted]');
  return out
    .replace(/(key provided: )[^.\s]+/gi, '$1[redacted]')
    .replace(/\b(sk-ant-[\w*-]{6,}|sk-[\w*-]{12,}|AIza[\w-]{20,})/g, '[redacted]')
    .slice(0, 300);
}
const log = (...a) => console.log(redact(a.join(' ')));

function httpError(status, body) {
  const e = new Error(`${status} ${JSON.stringify(body).slice(0, 400)}`);
  e.status = status;
  return e;
}

/* ---------- error categories (the only words that describe failures) ---------- */
function categorize(status, text) {
  const t = String(text || '');
  if (status === 401) return 'auth_failed';
  if (status === 403) return /billing|payment|credit|quota|plan|balance/i.test(t) ? 'billing_required' : 'auth_failed';
  if (status === 400 && /api key not valid|invalid.{0,10}api.?key|invalid x-api-key/i.test(t)) return 'auth_failed';
  if (status === 400 && /billing|credit balance|payment/i.test(t)) return 'billing_required';
  if (status === 404) return 'model_unavailable';
  if (status === 400 && /model/i.test(t) && /not found|does not exist|unsupported|invalid model|not supported/i.test(t)) return 'model_id_invalid';
  if (status === 400) return 'request_format_error';
  if (status === 429) return /insufficient_quota|billing|credit|balance|exceeded your current quota/i.test(t) ? 'billing_required' : 'rate_limited';
  if (status >= 500) return 'provider_error';
  return 'provider_error';
}

function chooseModel(ids, prefer) {
  for (const p of prefer) {
    if (ids.includes(p)) return { model: p, note: 'exact id in live model list' };
    const dated = ids.filter((i) => i.startsWith(p + '-') || i.startsWith(p + '@')).sort().reverse()[0];
    if (dated) return { model: dated, note: `live id for ${p}` };
  }
  return null;
}

/* ---------- steps ---------- */
async function ping(provider, model, key) {
  const { callModel } = await import('../worker/src/providers/index.js');
  const env = { LLM_PROVIDER: provider, LLM_MODEL: model, [PROVIDERS[provider].keyVar]: key, LLM_TIMEOUT_MS: '30000' };
  const schema = { type: 'object', properties: { ok: { type: 'string' } }, required: ['ok'], additionalProperties: false };
  const res = await callModel({ system: 'Reply with a JSON object {"ok":"yes"} and nothing else.', user: 'ping', schema, schemaName: 'ping', maxTokens: 50 }, env);
  const parsed = JSON.parse(String(res.text).trim().replace(/^```(?:json)?\s*|```$/g, ''));
  if (parsed.ok == null) throw new Error('ping reply was not the requested JSON');
  return res;
}

function runEval(provider, model, key, price, extra) {
  const env = { ...process.env, LLM_PROVIDER: provider, LLM_MODEL: model, [PROVIDERS[provider].keyVar]: key, LLM_TIMEOUT_MS: '30000' };
  // Only the one provider key is passed to each run.
  for (const p of Object.values(PROVIDERS)) if (p.keyVar !== PROVIDERS[provider].keyVar) delete env[p.keyVar];
  const r = spawnSync(process.execPath, [path.join(HERE, 'run-eval.mjs'), '--price-in', String(price[0]), '--price-out', String(price[1]), '--confirm-spend', '--json', ...extra],
    { env, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, timeout: 45 * 60 * 1000 });
  if (r.status !== 0) throw new Error(`run-eval exited ${r.status}: ${(r.stderr || '').slice(-300)}`);
  const summary = JSON.parse(r.stdout.trim().split('\n').pop());
  return { summary, data: JSON.parse(fs.readFileSync(summary.resultFile, 'utf8')) };
}

function rowCategory(rows) {
  const bad = rows.filter((x) => x.status !== 200 || (x.llm && x.source !== 'ai'));
  if (!bad.length) return null;
  const s = bad.map((x) => String(x.source)).join(' ');
  if (/rate_limited/.test(s)) return 'rate_limited';
  if (/unconfigured/.test(s)) return 'key_missing';
  if (/refused|provider_error|timeout/.test(s)) return 'provider_error';
  return 'benchmark_error';
}

async function integrity(file, provider, model) {
  const problems = [];
  const text = fs.readFileSync(file, 'utf8');
  let data;
  try { data = JSON.parse(text); } catch { return ['malformed result JSON']; }
  const cases = (await import('./cases.mjs')).default;
  const want = new Set(cases.map((c) => c.id));
  const got = data.rows.map((r) => r.id);
  if (got.length !== 150) problems.push(`expected 150 rows, got ${got.length}`);
  if (new Set(got).size !== got.length) problems.push('duplicate case ids');
  const missing = [...want].filter((id) => !got.includes(id));
  if (missing.length) problems.push(`missing ids: ${missing.slice(0, 5).join(',')}`);
  if (data.summary.provider !== provider || data.summary.model !== model) problems.push('provider/model mismatch (possible mock mix-up)');
  for (const k of KEYS) if (text.includes(k)) problems.push('KEY VALUE FOUND IN RESULT FILE');
  try { execFileSync('git', ['-C', ROOT, 'check-ignore', '-q', file]); } catch { problems.push('result file is not git-ignored'); }
  return problems;
}

/* ---------- main ---------- */
const report = { startedAt: new Date().toISOString(), finishedAt: null, host: os.hostname(), status: 'running', providersCompleted: 0, resultFilesCreated: 0, providers: {} };
const writeMarker = () => fs.writeFileSync(MARKER, JSON.stringify(report, null, 1));
writeMarker();
log(`Klarweg benchmark — ${report.startedAt} — host ${report.host}`);
log(`Completion marker: ${MARKER}`);

const only = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1].split(',') : Object.keys(PROVIDERS);
for (const name of only) {
  const P = PROVIDERS[name];
  const st = { keyPresent: false, model: null, modelNote: null, lookup: 'not_run', ping: 'not_run', smoke: 'not_run', full: 'not_run', integrity: 'not_run', smokeFile: null, resultFile: null, category: null, error: null };
  report.providers[name] = st;
  log(`\n== ${name}`);
  const key = process.env[P.keyVar];
  const fail = (step, category, err) => { st[step] = 'fail'; st.category = category; st.error = redact(err && err.message ? err.message : err); log(`   ${step}: FAIL [${category}] ${st.error}`); writeMarker(); };
  if (!key || key.length < 8) { fail('lookup', 'key_missing', `${P.keyVar} not provided`); continue; }
  st.keyPresent = true;
  log(`   key: present (${key.length} chars)`);

  try {
    const ids = await P.list(key);
    const pick = chooseModel(ids, P.prefer);
    if (!pick) { fail('lookup', 'model_unavailable', `none of ${P.prefer.join(', ')} in this account's model list`); continue; }
    Object.assign(st, { model: pick.model, modelNote: pick.note, lookup: 'pass' });
    if (pick.model !== P.prefer[0] && !pick.model.startsWith(P.prefer[0])) st.modelNote += ` (preferred ${P.prefer[0]} unavailable)`;
    log(`   model: ${pick.model} — ${st.modelNote}`);
  } catch (e) { fail('lookup', categorize(e.status, e.message), e); continue; }

  const base = P.prefer.find((p) => st.model === p || st.model.startsWith(p)) || st.model;
  const price = P.prices[base] || [0, 0];

  try {
    const r = await ping(name, st.model, key);
    st.ping = 'pass';
    log(`   ping: pass (${r.usage.input} in / ${r.usage.output} out tokens)`);
  } catch (e) {
    const m = String(e.message || e).match(/\b(\d{3}):/);
    fail('ping', m ? categorize(Number(m[1]), e.message) : 'request_format_error', e);
    continue;
  }

  try {
    const { summary, data } = runEval(name, st.model, key, price, ['--ids', SMOKE_IDS]);
    st.smokeFile = summary.resultFile;
    const cat = rowCategory(data.rows);
    if (cat || summary.json.invalid > 0 || data.rows.length !== 3) {
      fail('smoke', cat || 'benchmark_error', `smoke rows: ${data.rows.map((x) => `${x.id}:${x.status}:${x.source}`).join(' ')}`);
      continue;
    }
    st.smoke = 'pass';
    log(`   smoke: pass (3/3 structurally valid; ${data.rows.map((x) => x.id + (Object.values(x.checks).every(Boolean) ? ' ok' : ' check-miss')).join(', ')})`);
  } catch (e) { fail('smoke', 'benchmark_error', e); continue; }

  try {
    log('   full: running 150 cases …');
    const { summary, data } = runEval(name, st.model, key, price, []);
    st.resultFile = summary.resultFile;
    report.resultFilesCreated++;
    const problems = await integrity(summary.resultFile, name, st.model);
    if (problems.length) { st.full = 'pass'; fail('integrity', 'benchmark_error', problems.join('; ')); continue; }
    st.full = 'pass';
    st.integrity = 'pass';
    st.category = 'completed';
    report.providersCompleted++;
    const nonOk = data.rows.filter((x) => x.status !== 200 || (x.llm && x.source !== 'ai')).length;
    log(`   full: pass — false corrections ${summary.falseCorrectionRate}, JSON invalid ${summary.json.invalid}, retried ${summary.json.validAfterRetry}, failed/fallback rows ${nonOk}, p50 ${summary.latencyMs.p50}ms, cost/1k ${summary.costPer1000Checks}`);
    log(`   result: ${summary.resultFile}`);
  } catch (e) { fail('full', 'benchmark_error', e); continue; }
  writeMarker();
}

report.finishedAt = new Date().toISOString();
report.status = report.providersCompleted > 0 ? 'completed' : 'failed';
writeMarker();
log(`\nPROVIDERS COMPLETED: ${report.providersCompleted}/${only.length}`);
log(`RESULT FILES CREATED: ${report.resultFilesCreated}`);
for (const [n, s] of Object.entries(report.providers)) log(`  ${n.padEnd(9)} ${String(s.category || 'incomplete').padEnd(20)} model=${s.model || '-'}`);
log(report.status === 'completed' ? `BENCHMARK COMPLETE — marker ${MARKER}` : `BENCHMARK FAILED — no provider completed. Marker ${MARKER}`);
process.exit(report.providersCompleted > 0 ? 0 : 1);
