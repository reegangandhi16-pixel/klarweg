#!/usr/bin/env node
/* Real OpenAI smoke test for Record & Check — the production code path,
   run locally, before any learner exposure. NOT an accuracy benchmark.

     read -rs "OPENAI_API_KEY?OpenAI API key: " && export OPENAI_API_KEY && echo
     node scripts/speech-smoke.mjs <browser-recorded clip (.webm/.ogg/.m4a)> ["expected German text"]

   Runs the REAL klarweg-access Worker (/speech/status, /speech/transcribe)
   against an in-memory D1 with a temporary A1 test account, with the REAL
   klarweg-tutor handler as its service binding, which calls the REAL OpenAI
   API with OPENAI_API_KEY from this shell. The clip should be synthetic or
   your own test recording — never a learner's. Nothing is written to disk;
   the key is never printed. Exit code 0 = every check passed. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import access from '../access/worker/src/index.js';
import tutor from '../tutor/worker/src/index.js';
import { createD1 } from '../access/worker/test/d1-sqlite.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [clipPath, expected = 'Ich heiße Rohan.'] = process.argv.slice(2);
const KEY = process.env.OPENAI_API_KEY || '';
if (!clipPath || !fs.existsSync(clipPath)) { console.error('usage: node scripts/speech-smoke.mjs <clip.webm> ["expected text"]'); process.exit(2); }
if (!KEY) { console.error('OPENAI_API_KEY is not set in this shell (see the header of this file).'); process.exit(2); }

const SITE = 'https://reegangandhi16-pixel.github.io';
const ext = path.extname(clipPath).toLowerCase();
const TYPE = ext === '.webm' ? 'audio/webm;codecs=opus' : ext === '.ogg' ? 'audio/ogg;codecs=opus' : ext === '.m4a' || ext === '.mp4' ? 'audio/mp4' : 'audio/wav';
const audio = new Uint8Array(fs.readFileSync(clipPath));
const out = [];
const captured = [];
const origLog = console.log;
console.log = (...a) => captured.push(a.join(' '));            // Worker log lines, checked below
const check = (name, ok, info = '') => out.push({ name, ok: !!ok, info });

const env = {
  DB: createD1(path.join(ROOT, 'access/worker')), RATE_SALT: 'smoke', CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1', CASHFREE_SECRET_KEY: 'x', GOOGLE_CLIENT_ID: 'g',
  SPEECH_MODE: 'entitled',
  TUTOR: { fetch: (url, init) => tutor.fetch(new Request(url, init), { OPENAI_API_KEY: KEY }) }
};
const ctx = { waitUntil() {} };
const call = (method, p, { body, headers = {}, cookie } = {}) => access.fetch(new Request('https://klarweg-access.local' + p, { method, body, headers: { origin: SITE, 'CF-Connecting-IP': '203.0.113.7', ...(cookie ? { cookie } : {}), ...headers } }), env, ctx);

const su = await call('POST', '/auth/signup', { body: JSON.stringify({ email: 'smoke@example.com', password: 'correct-horse-9', name: 'Smoke' }), headers: { 'content-type': 'application/json' } });
const user = (await su.json()).user; const cookie = su.headers.get('set-cookie').split(';')[0];
await env.DB.prepare('INSERT INTO user_entitlements (user_id, product_id, source_order_id, granted_at, expires_at) VALUES (?1, ?2, NULL, 1, NULL)').bind(user.id, 'A1').run();

const st = await (await call('GET', '/speech/status?chapter=a1-1-alphabet', { cookie })).json();
check('status: eligible on A1·01', st.enabled === true && st.eligible === true, JSON.stringify(st));

const t0 = Date.now();
const res = await call('POST', '/speech/transcribe?chapter=a1-1-alphabet&ms=2500', { cookie, body: audio, headers: { 'content-type': TYPE } });
const ms = Date.now() - t0;
const body = await res.text();
let j = null; try { j = JSON.parse(body); } catch {}
check('OpenAI accepted the browser recording and returned a transcript', res.status === 200 && j && j.ok === true && typeof j.text === 'string' && j.text.length > 0, `HTTP ${res.status} ${j && j.error ? j.error : ''}`);
check('browser receives only { ok, text }', j && JSON.stringify(Object.keys(j).sort()) === JSON.stringify(['ok', 'text']));

// The page's own Word Match, unchanged, scores the returned text.
const APP = fs.readFileSync(path.join(ROOT, 'chapter/chapter-app.js'), 'utf8');
const sandbox = {}; vm.createContext(sandbox);
vm.runInContext(APP.slice(APP.indexOf('  // ---- Word Match scorer (deterministic) ----'), APP.indexOf('  // ---- end Word Match scorer ----')) + '\nthis.wordMatch = wordMatch;', sandbox);
const wm = j && j.ok ? sandbox.wordMatch(expected, j.text) : null;
check('Word Match scored the transcript', wm && Number.isInteger(wm.matched), wm ? `${wm.matched}/${wm.targetWords} · ${wm.percent}%` : '');

const logs = captured.join('\n');
check('API key never in the response or the Worker logs', !body.includes(KEY) && !logs.includes(KEY));
check('transcript never in the Worker logs', j && j.text ? !logs.includes(j.text) : true);
const tables = env.DB.raw.prepare("SELECT name FROM sqlite_master WHERE type='table'").all().map((t) => t.name);
const dump = tables.map((t) => JSON.stringify(env.DB.raw.prepare(`SELECT * FROM "${t}"`).all())).join('');
check('D1 holds no transcript and no audio (counters only)', j && j.text ? !dump.includes(j.text) : true);
const tutorLine = captured.map((l) => { try { return JSON.parse(l); } catch { return null; } }).find((l) => l && l.svc === 'klarweg-tutor');
check('engine logged as openai:gpt-transcribe', tutorLine && tutorLine.engine === 'openai:gpt-transcribe', tutorLine ? `${tutorLine.ms} ms at the provider${tutorLine.seconds != null ? ", " + tutorLine.seconds + " s billed" : ""}` : '');

console.log = origLog;
console.log(`\nKlarweg speech smoke test — ${path.basename(clipPath)} (${audio.length} bytes, ${TYPE}) — SMOKE TEST ONLY, not an accuracy benchmark`);
console.log(`end-to-end through access → tutor → OpenAI: ${ms} ms`);
if (j && j.ok) console.log(`transcript (of this test clip): "${j.text}"   expected: "${expected}"`);
for (const c of out) console.log(`${c.ok ? 'PASS' : 'FAIL'}  ${c.name}${c.info ? '  — ' + c.info : ''}`);
const failed = out.filter((c) => !c.ok).length;
console.log(failed ? `\n${failed} check(s) failed.` : `\nAll ${out.length} checks passed.`);
process.exit(failed ? 1 : 0);
