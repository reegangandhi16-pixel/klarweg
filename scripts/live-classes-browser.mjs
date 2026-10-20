/* ============================================================
   LIVE CLASSES · headless browser checks (live-classes.html)
   ------------------------------------------------------------
   Real headless Chrome against a local static server over the repo
   root. No dependencies, no secrets, no network: every host except
   127.0.0.1 and the test alias below resolves to nothing, so the page
   can never reach the Access Worker, checkout or an email service, and
   the consultation form only produces its mailto: hand-off.

   Covers (A) the production default (showDrafts:false), (B) the host
   guard (showDrafts forced true on a non-local host), (C) the local
   preview: filters, profile dialog, deep links, prefill, validation,
   hand-off, and (D) mobile layout + sticky CTA.

   Usage:  npm run test:live:browser
   Env:    CHROME=<binary>   CHROME_ARGS="--no-sandbox"   (CI on Linux)
           LIVE_E2E_VERBOSE=1   log every check as it runs
   ============================================================ */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHROME = process.env.CHROME || (process.platform === 'darwin'
  ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  : 'google-chrome');
const CHROME_ARGS = (process.env.CHROME_ARGS || '').split(' ').filter(Boolean);
const VERBOSE = process.env.LIVE_E2E_VERBOSE === '1';
const ALIAS = 'preview.klarweg.test';   // a non-local hostname for the host-guard checks
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---------- static server (repo root, read-only) ---------- */
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json', '.txt': 'text/plain', '.xml': 'application/xml' };
function startServer() {
  const server = http.createServer((req, res) => {
    const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/^\/+/, '') || 'index.html';
    const file = path.resolve(ROOT, rel);
    if (!file.startsWith(ROOT + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404); res.end('not found'); return; }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((r) => server.listen(0, '127.0.0.1', () => r(server)));
}

/* ---------- Chrome over the DevTools protocol ---------- */
async function startChrome() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-live-'));
  const proc = spawn(CHROME, [...CHROME_ARGS, '--headless=new', '--mute-audio', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
    `--user-data-dir=${dir}`, '--remote-debugging-port=0',
    // hermetic: only the local server is reachable (fonts, auth, analytics all fail closed)
    `--host-resolver-rules=MAP ${ALIAS} 127.0.0.1, MAP * ~NOTFOUND, EXCLUDE 127.0.0.1`,
    'about:blank'], { stdio: ['ignore', 'ignore', 'pipe'] });
  let stderr = ''; let exited = null;
  proc.stderr.on('data', (d) => { stderr = (stderr + d).slice(-2000); });
  proc.on('exit', (code, signal) => { exited = signal || code; });
  const portFile = path.join(dir, 'DevToolsActivePort');
  const readPort = () => { try { const p = fs.readFileSync(portFile, 'utf8').split('\n')[0]; return /^\d+$/.test(p) ? p : null; } catch { return null; } };
  const t0 = Date.now(); let port = null;
  // cold CI runners have needed >10 s to start Chrome (see exam-worker/test/browser-e2e.mjs)
  while (!(port = readPort()) && exited === null && Date.now() - t0 < 30000) await sleep(100);
  if (!port) { proc.kill(); throw new Error(`Chrome did not start within ${Date.now() - t0} ms (exit: ${exited}); stderr tail:\n${stderr}`); }
  return { proc, port };
}
async function browser() {
  let started;
  try { started = await startChrome(); } catch (e) { console.log(`[live-e2e] ${e.message}\n[live-e2e] retrying Chrome start once`); started = await startChrome(); }
  const { proc, port } = started;
  const page = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r, { once: true }));
  let id = 0; const pend = new Map(); const handlers = [];
  ws.addEventListener('message', (m) => {
    const msg = JSON.parse(m.data);
    if (msg.id && pend.has(msg.id)) { const p = pend.get(msg.id); pend.delete(msg.id); msg.error ? p.rej(new Error(msg.error.message)) : p.res(msg.result); }
    else handlers.forEach((h) => h(msg));
  });
  const send = (method, params = {}) => new Promise((res, rej) => { const i = ++id; pend.set(i, { res, rej }); ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (expr) => {
    const r = await Promise.race([
      send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true }),
      new Promise((_, rej) => setTimeout(() => rej(new Error('evaluate timed out: ' + expr.slice(0, 80))), 8000))
    ]);
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
    return r.result.value;
  };
  return { send, ev, handlers, close: () => { try { ws.close(); } catch {} proc.kill(); } };
}

/* ---------- checks ---------- */
const results = [];
function ok(name, cond, info = '') {
  results.push([cond ? 'PASS' : 'FAIL', name, info]);
  if (VERBOSE || !cond) console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}${info !== '' && info != null ? '  ' + info : ''}`);
}

const server = await startServer();
const PORT = server.address().port;
const b = await browser();
const watchdog = setTimeout(() => { console.log(`[live-e2e] WATCHDOG: stopped after ${results.length} checks`); b.close(); process.exit(2); }, 240000);

const pageErrors = []; const offHost = new Set(); const offReq = new Map(); const offLoaded = new Set();
b.handlers.push(async (msg) => {
  if (msg.method === 'Runtime.exceptionThrown') pageErrors.push(msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text);
  if (msg.method === 'Network.requestWillBeSent') {
    const u = new URL(msg.params.request.url);
    if (/^https?:$/.test(u.protocol) && u.hostname !== '127.0.0.1' && u.hostname !== ALIAS) { offHost.add(u.hostname); offReq.set(msg.params.requestId, u.hostname); }
  }
  // an off-host request that completes means the resolver block failed
  if (msg.method === 'Network.loadingFinished' && offReq.has(msg.params.requestId)) offLoaded.add(offReq.get(msg.params.requestId));
  if (msg.method === 'Fetch.requestPaused') {   // preview mode / changed terms: serve an edited data file
    const r = await b.send('Fetch.getResponseBody', { requestId: msg.params.requestId });
    let body = r.base64Encoded ? Buffer.from(r.body, 'base64').toString() : r.body;
    for (const [from, to] of dataEdits) body = body.replace(from, to);
    await b.send('Fetch.fulfillRequest', { requestId: msg.params.requestId, responseCode: 200, responseHeaders: [{ name: 'Content-Type', value: 'application/javascript' }], body: Buffer.from(body).toString('base64') });
  }
});
await b.send('Runtime.enable'); await b.send('Page.enable'); await b.send('Network.enable');

let dataEdits = [];
async function load(url, { drafts = false, edits = [], width = 1280, height = 900, mobile = false, nojs = false } = {}) {
  await b.send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile });
  await b.send('Emulation.setScriptExecutionDisabled', { value: nojs });
  await b.send('Fetch.disable');
  dataEdits = (drafts ? [['showDrafts: false', 'showDrafts: true']] : []).concat(edits);
  if (dataEdits.length) await b.send('Fetch.enable', { patterns: [{ urlPattern: '*live-classes-data.js*', requestStage: 'Response' }] });
  // via about:blank so a hash-only change (#teacher-…) is a real load, not a same-document navigation
  await b.send('Page.navigate', { url: 'about:blank' }); await sleep(100);
  await b.send('Page.navigate', { url });
  for (let i = 0; i < 100; i++) { await sleep(100); if (await b.ev('document.readyState==="complete" && !!document.getElementById("teacher-grid")').catch(() => false)) break; }
  await sleep(300);
}
const q = (expr) => b.ev(expr);
const L = `http://127.0.0.1:${PORT}/live-classes.html`;
const R = `http://${ALIAS}:${PORT}/live-classes.html`;
/* Expected counts come from the data file, so adding or removing a draft
   teacher doesn't break the checks. Every draft teacher's name joins the
   leak pattern: a real person's draft profile must never reach a deployed host. */
const LIVE = (() => { const ctx = { window: {} }; vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'live-classes-data.js'), 'utf8'), ctx); return ctx.window.KWLive; })();
const N_T = LIVE.teachers.length;
const N_B1 = LIVE.teachers.filter((t) => t.levels.includes('B1')).length;
const N_B1_DE = LIVE.teachers.filter((t) => t.levels.includes('B1') && t.teachesIn.includes('German')).length;
const NAMED_DRAFT = LIVE.teachers.find((t) => t.draft && !/^\[/.test(t.name));
const reEsc = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const DRAFT_NAMES = LIVE.teachers.filter((t) => t.draft && !/^\[/.test(t.name)).map((t) => reEsc(t.name));
const DRAFT_RX = new RegExp(['\\[Teacher', '\\[One-line', '\\[Verified', '\\[Specialism', '\\[Mock exams', '\\[Years', '\\[German level', '\\[Qualification', 'Draft', 'Preview ·', 'Portrait pending', 'template'].concat(DRAFT_NAMES).join('|'), 'i');
const draftLeak = `(()=>{const t=document.body.innerText+' '+[...document.querySelectorAll('option')].map(o=>o.text).join(' ');const m=t.match(${DRAFT_RX});return m?m[0]:null})()`;
const overflow = 'document.documentElement.scrollWidth - document.documentElement.clientWidth';
/* The JSON-LD the page builds: FAQPage must equal the visible FAQ; returns
   { faqOk, courses: [names], text } so each scenario can assert on it. */
const jsonld = `(()=>{const el=document.getElementById("live-jsonld");if(!el)return null;const j=JSON.parse(el.textContent);const g=j["@graph"];
  const f=g.find(x=>x["@type"]==="FAQPage");const items=[...document.querySelectorAll(".faq-item")];const n=t=>t.replace(/\\s+/g," ").trim();
  const faqOk=!!f&&f.mainEntity.length===items.length&&f.mainEntity.every((m,i)=>m.name===n(items[i].querySelector(".faq-q").textContent)&&m.acceptedAnswer.text===n(items[i].querySelector(".faq-a-inner").textContent));
  const strs=[],keys=[];(function walk(v){if(typeof v==="string")strs.push(v);else if(v&&typeof v==="object")for(const k in v){keys.push(k);walk(v[k])}})(j);
  return {faqOk,courses:g.filter(x=>x["@type"]==="Course").map(x=>x.name),instructors:g.filter(x=>x["@type"]==="Course").flatMap(x=>(x.instructor||[]).map(p=>p.name)),text:strs.join("\\n"),keys}})()`;
const OWNER = LIVE.teachers.find((t) => t.id === 'reegan-gandhi');
/* A small structural accessibility audit of the rendered page (no
   dependency): every visible control has a name, labels exist, ids are
   unique, one h1 and no skipped heading levels, images have alt text,
   radio groups sit in a fieldset with a legend. Returns a list of problems. */
const a11y = `(()=>{const p=[];const vis=e=>!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)||e.type==="radio"||e.type==="checkbox";
  const name=e=>(e.getAttribute("aria-label")||(e.getAttribute("aria-labelledby")||"").split(" ").map(i=>document.getElementById(i)?.textContent||"").join(" ")||e.textContent||e.getAttribute("title")||"").trim();
  for(const e of document.querySelectorAll("a[href],button"))if(vis(e)&&!name(e))p.push("unnamed "+e.tagName+" "+(e.id||e.className));
  for(const e of document.querySelectorAll("input,select,textarea"))if(e.type!=="hidden"&&vis(e)&&!(e.labels&&e.labels.length)&&!e.getAttribute("aria-label")&&!e.getAttribute("aria-labelledby"))p.push("unlabelled "+(e.id||e.name));
  const ids={};for(const e of document.querySelectorAll("[id]"))ids[e.id]=(ids[e.id]||0)+1;for(const k in ids)if(ids[k]>1)p.push("duplicate id "+k);
  const hs=[...document.querySelectorAll("main h1,main h2,main h3,main h4")].filter(vis).map(h=>+h.tagName[1]);if(hs.filter(x=>x===1).length!==1)p.push("h1 count "+hs.filter(x=>x===1).length);
  hs.forEach((h,i)=>{if(i&&h>hs[i-1]+1)p.push("heading skips h"+hs[i-1]+"→h"+h)});
  for(const i of document.querySelectorAll("img"))if(!i.hasAttribute("alt"))p.push("img without alt");
  for(const r of document.querySelectorAll("input[type=radio]")){const f=r.closest("fieldset");if(!f||!f.querySelector("legend"))p.push("radio outside a fieldset with legend: "+r.name)}
  for(const e of document.querySelectorAll("[aria-describedby]"))for(const i of e.getAttribute("aria-describedby").split(" "))if(!document.getElementById(i))p.push("aria-describedby points nowhere: "+i);
  return p})()`;
const key = async (k, code, vk) => { for (const type of ['keyDown', 'keyUp']) await b.send('Input.dispatchKeyEvent', { type, key: k, code, windowsVirtualKeyCode: vk }); };
const submit = () => q('document.querySelector("#consult-form button[type=submit]").click()');

try {
  // ---- A. production default (showDrafts:false) ----
  for (const [w, mob] of [[375, true], [1280, false]]) {
    await load(L, { width: w, mobile: mob });
    ok(`A${w} no draft text in DOM or options`, (await q(draftLeak)) === null, await q(draftLeak));
    ok(`A${w} draft banner hidden`, await q('document.getElementById("draft-banner").hidden'));
    ok(`A${w} honest teacher empty state`, await q('/being finalised/.test(document.getElementById("teacher-grid").innerText)'));
    ok(`A${w} honest course empty state`, await q('/being scheduled/.test(document.getElementById("course-grid").innerText)'));
    ok(`A${w} filters hidden`, await q('[...document.querySelectorAll(".filters")].every(f=>f.hidden&&f.offsetParent===null)'));
    ok(`A${w} testimonials hidden`, await q('document.getElementById("quotes").hidden'));
    ok(`A${w} form selects only defaults`, await q('document.getElementById("bf-teacher").options.length===1&&document.getElementById("bf-course").options.length===1'));
    ok(`A${w} no horizontal overflow`, (await q(overflow)) <= 0, await q(overflow));
    ok(`A${w} hero CTAs lead to the consultation and how it works, not to empty sections`,
      (await q('[...document.querySelectorAll(".live-hero .hero-ctas a")].map(a=>a.getAttribute("href")+" "+a.textContent.trim()).join(" | ")')) === '#book Book a consultation | #how How live classes work',
      await q('[...document.querySelectorAll(".live-hero .hero-ctas a")].map(a=>a.getAttribute("href")+" "+a.textContent.trim()).join(" | ")'));
    ok(`A${w} primary hero CTA keeps its arrow`, await q('!!document.querySelector(".live-hero .btn-live .btn-arrow")'));
    ok(`A${w} no copy invites filtering or opening profiles that do not exist`, !(await q('/open a profile|Filter the teacher profiles/.test(document.body.innerText + document.getElementById("fa3").textContent)')));
    ok(`A${w} accessibility audit: names, labels, unique ids, heading order`, (await q(a11y)).length === 0, (await q(a11y)).join(' | '));
    ok(`A${w} hero names no level range while nothing is published`, (await q('document.querySelector("[data-live-levels]").textContent')) === '');
    const jA = await q(jsonld);
    ok(`A${w} structured data: FAQPage matches the visible FAQ, no Course`, !!jA && jA.faqOk && jA.courses.length === 0, JSON.stringify(jA && { faqOk: jA.faqOk, courses: jA.courses }));
    ok(`A${w} requests go to the documented address`, (await q('document.querySelector("[data-contact-email]").textContent')) === 'klarwegofficial@gmail.com');
  }
  await q('document.querySelector("#course-grid [data-request=interest]").click()'); await sleep(700);
  ok('A "Register interest" (no course yet) switches the form to a free interest request', (await q('document.querySelector("input[name=rtype]:checked").value')) === 'interest' && (await q('document.getElementById("form-title").textContent')) === 'Register your interest');
  await load(L + '#teacher-teacher-1');
  ok('A deep link to a draft teacher opens no dialog', await q('!document.getElementById("t-dialog").open'));
  ok('A deep link hash falls back to #teachers', (await q('location.hash')) === '#teachers', await q('location.hash'));
  if (NAMED_DRAFT) {
    await load(L + '#teacher-' + NAMED_DRAFT.id);
    ok('A deep link to a named draft profile opens no dialog and shows no name', (await q('!document.getElementById("t-dialog").open')) && (await q(draftLeak)) === null, await q(draftLeak));
    await load(R + '#teacher-' + NAMED_DRAFT.id, { drafts: true });
    ok('B named draft profile stays hidden on a non-local host even with drafts on', (await q('!document.getElementById("t-dialog").open')) && (await q(draftLeak)) === null && (await q('document.querySelectorAll(".t-card").length')) === 0, await q(draftLeak));
  }

  // ---- B. host guard: showDrafts forced true on a non-local host ----
  await load(R, { drafts: true });
  ok('B data file served with showDrafts:true', await q('window.KWLive.showDrafts===true'));
  ok('B non-local host renders no draft text', (await q(draftLeak)) === null, await q(draftLeak));
  await load(R + '#teacher-teacher-2', { drafts: true });
  ok('B non-local deep link opens no dialog', await q('!document.getElementById("t-dialog").open'));

  // ---- C. local preview (drafts on, localhost) ----
  await load(L, { drafts: true });
  ok('C preview shows drafts + banner', await q('!document.getElementById("draft-banner").hidden && document.querySelectorAll(".t-card").length===' + N_T));
  ok('C teacher count', (await q('document.getElementById("t-count").textContent')) === N_T + ' teachers');
  const jC = await q(jsonld);
  ok('C structured data never includes draft courses or teachers, even in the preview', !!jC && jC.faqOk && jC.courses.length === 0 && !new RegExp(DRAFT_RX.source + '|\\[[^\\]]+\\]', 'i').test(jC.text), jC && (jC.text.match(new RegExp('.{0,40}(' + DRAFT_RX.source + '|\\[[^\\]]+\\]).{0,40}', 'i')) || [''])[0]);
  ok('C several teachers: filters shown, directory layout', await q('!document.querySelector("#teachers .filters").hidden && !document.getElementById("teacher-grid").classList.contains("single")'));
  await q('document.querySelector(".c-card .t-link").click()'); await sleep(200);
  ok('C a teacher named on a course card opens that profile', (await q('document.getElementById("t-dialog").open')) && (await q('location.hash')) === '#teacher-' + LIVE.courses[0].teacherIds[0], await q('location.hash'));
  ok('C closing it returns focus to the course card link', await (async () => { await key('Escape', 'Escape', 27); await sleep(200); return q('document.activeElement.classList.contains("t-link")'); })());
  ok('C with profiles, the hero and FAQ point to them', (await q('document.querySelector(".live-hero .btn-live").getAttribute("href")')) === '#teachers' && /Filter the teacher profiles/.test(await q('document.getElementById("fa3").textContent')));
  ok('C levels taught are text for screen readers; the strip is hidden from them', await q('(()=>{const r=document.querySelector(".t-card .lvl-row");return r.querySelector(".vh").textContent==="Levels taught: ' + LIVE.teachers[0].levels.join(', ') + '"&&[...r.querySelectorAll(".lvl")].every(x=>x.getAttribute("aria-hidden")==="true")&&!r.hasAttribute("aria-label")})()'));
  await q('document.querySelector("[data-tlevel=B1]").click()');
  ok('C level filter B1', (await q('document.querySelectorAll(".t-card").length')) === N_B1 && (await q('document.querySelector("[data-tlevel=B1]").getAttribute("aria-pressed")')) === 'true');
  await q('(()=>{const s=document.getElementById("t-lang");s.value="German";s.dispatchEvent(new Event("change"))})()');
  ok('C B1 + teaches in German', (await q('document.querySelectorAll(".t-card").length')) === N_B1_DE, await q('document.getElementById("t-count").textContent'));
  await q('document.getElementById("t-exam").click()');
  ok('C + exam prep shows the no-match state', await q('!!document.getElementById("t-reset")'));
  await q('document.getElementById("t-reset").click()');
  ok('C reset restores all filters and focuses "All"', (await q('document.querySelectorAll(".t-card").length')) === N_T && (await q('document.activeElement.getAttribute("data-tlevel")')) === ''
    && (await q('document.getElementById("t-lang").value')) === '' && (await q('document.getElementById("t-exam").getAttribute("aria-pressed")')) === 'false');
  await q('document.querySelector("[data-profile=teacher-2]").focus(); document.querySelector("[data-profile=teacher-2]").click()');
  ok('C profile opens as modal with #teacher- hash', (await q('document.getElementById("t-dialog").open')) && (await q('location.hash')) === '#teacher-teacher-2');
  ok('C dialog is labelled and holds focus', await q('document.getElementById("t-dialog").contains(document.activeElement) && !!document.getElementById("t-dialog-name")'));
  await key('Escape', 'Escape', 27); await sleep(200);
  ok('C Escape closes, focus returns, hash #teachers, scroll unlocked', (await q('!document.getElementById("t-dialog").open')) && (await q('document.activeElement.getAttribute("data-profile")')) === 'teacher-2'
    && (await q('location.hash')) === '#teachers' && (await q('document.body.style.overflow')) === '');
  await load(L + '#teacher-teacher-3', { drafts: true });
  ok('C deep link opens that profile', await q('document.getElementById("t-dialog").open'));
  await q('document.getElementById("t-dialog-close").click()'); await sleep(100);
  ok('C closing a deep-linked profile focuses its card button', (await q('document.activeElement.getAttribute("data-profile")')) === 'teacher-3');
  const DUP = LIVE.teachers.find((t) => (t.goethe || []).some((g) => (t.qualifications || []).includes(g)));
  if (DUP) {
    const cert = DUP.goethe.find((g) => DUP.qualifications.includes(g));
    await load(L + '#teacher-' + DUP.id, { drafts: true });
    const dl = await q('[...document.querySelectorAll("#t-dialog .profile-dl dt")].map(d=>d.textContent+": "+d.nextElementSibling.textContent).join(" | ")');
    ok('C a certificate in both qualifications and goethe is shown once, under Goethe certificates',
      dl.split(cert).length - 1 === 1 && dl.includes('Goethe certificates: ' + cert), dl);
    await q('document.getElementById("t-dialog-close").click()'); await sleep(100);
  }
  await q('document.querySelector("[data-cgroup=exam]").click()');
  ok('C course filter "Goethe prep"', (await q('document.querySelectorAll(".c-card").length')) === 1);
  await q('document.querySelector("[data-book-course=live-goethe]").click()'); await sleep(700);
  ok('C course CTA prefills the course and focuses Name', (await q('document.getElementById("bf-course").value')) === 'live-goethe' && (await q('document.activeElement.id')) === 'bf-name');
  ok('C a course that is not open asks for interest, not a paid consultation', (await q('document.querySelector("input[name=rtype]:checked").value')) === 'interest' && (await q('document.getElementById("form-title").textContent')) === 'Register your interest');
  ok('C preview accessibility audit', (await q(a11y)).length === 0, (await q(a11y)).join(' | '));
  await q('document.querySelector("[data-profile=teacher-1]").click()'); await q('document.querySelector("#t-dialog [data-book-teacher]").click()'); await sleep(700);
  ok('C profile CTA closes the dialog and prefills the teacher', (await q('!document.getElementById("t-dialog").open')) && (await q('document.getElementById("bf-teacher").value')) === 'teacher-1');
  ok('C a teacher CTA asks for a consultation', (await q('document.querySelector("input[name=rtype]:checked").value')) === 'consult' && (await q('document.getElementById("form-title").textContent')) === 'Request a consultation');

  // validation + hand-off
  await q('(()=>{for(const id of ["bf-name","bf-email","bf-msg"])document.getElementById(id).value="";document.getElementById("bf-consent").checked=false;document.getElementById("bf-level").value="";document.getElementById("bf-goal").value=""})()');
  await submit();
  ok('C empty submit: summary, 5 invalid fields, focus on Name', (await q('!document.getElementById("err-summary").hidden')) && (await q('document.querySelectorAll("[aria-invalid=true]").length')) === 5 && (await q('document.activeElement.id')) === 'bf-name');
  ok('C error text tied to the field via aria-describedby', await q('document.getElementById("bf-email").getAttribute("aria-describedby")==="bf-email-err" && !document.getElementById("bf-email-err").hidden'));
  await q('(()=>{const s=(id,v)=>{const e=document.getElementById(id);e.value=v;e.dispatchEvent(new Event("change"))};s("bf-name","Test Person");s("bf-email","not-an-email");s("bf-level","A2");s("bf-goal","Other");const c=document.getElementById("bf-consent");c.checked=true;c.dispatchEvent(new Event("change"))})()');
  await submit();
  ok('C invalid email is the only error and is focused', (await q('document.querySelectorAll("[aria-invalid=true]").length')) === 1 && (await q('document.activeElement.id')) === 'bf-email');
  ok('C maxlength on free-text fields', await q('document.getElementById("bf-msg").maxLength===1000 && document.getElementById("bf-name").maxLength===100 && document.getElementById("bf-email").maxLength===254 && document.getElementById("bf-phone").maxLength===30'));
  await q('document.getElementById("bf-email").value="test@example.com"');
  await submit(); await sleep(500);
  ok('C valid submit: confirmation focused and says "Not booked yet"', (await q('!document.getElementById("consult-done").hidden && document.activeElement.id==="consult-done"')) && /Not booked yet/.test(await q('document.getElementById("consult-done").innerText')));
  ok('C request text carries the form fields', /Name: Test Person[\s\S]*Course of interest: Goethe exam preparation/.test(await q('document.getElementById("consult-preview").textContent')));
  ok('C consultation request names the fee in the email', new RegExp('^Live class consultation request \\(' + LIVE.consultation.feeLabel).test(await q('document.getElementById("consult-preview").textContent')));
  await q('document.getElementById("edit-request").click()');
  await q('document.querySelector("input[name=rtype][value=interest]").click()');
  await submit(); await sleep(500);
  ok('C interest request: says nothing is booked or charged, and the email asks for no consultation', /Nothing booked or charged/.test(await q('document.getElementById("done-notice").innerText')) && !/Not booked yet/.test(await q('document.getElementById("done-notice").innerText'))
    && /^Live course interest \(no consultation requested, nothing to pay\)/.test(await q('document.getElementById("consult-preview").textContent')) && !/₹/.test(await q('document.getElementById("consult-preview").textContent')));
  await q('document.getElementById("edit-request").click()');
  await q('document.querySelector("input[name=rtype][value=consult]").click()');
  await submit(); await sleep(500);
  ok('C switching back restores the consultation notice', /Not booked yet/.test(await q('document.getElementById("done-notice").innerText')));
  await q('document.getElementById("edit-request").click()');
  ok('C "Edit request" returns to the form with values kept', (await q('!document.getElementById("consult-form").hidden && document.getElementById("bf-name").value')) === 'Test Person' && (await q('document.activeElement.id')) === 'bf-name');

  // ---- C2. consultation terms come from the data file everywhere on the page ----
  await load(L, { edits: [["feeLabel: '₹100'", "feeLabel: '₹150'"], ['adjustmentDays: 7,', 'adjustmentDays: 10,']] });
  ok('C2 data file served with changed terms', (await q('window.KWLive.consultation.feeLabel')) === '₹150');
  ok('C2 no old fee or period left on the page', !(await q('/₹100|within 7 days|after 7 days|7-day adjust/i.test(document.body.innerText + document.getElementById("sticky-book").textContent)')),
    await q('(document.body.innerText.match(/.{0,30}(₹100|within 7 days|after 7 days|7-day adjust).{0,30}/i)||[""])[0]'));
  ok('C2 bound values flow inside their sentence (never a separate item of a flex row)', (await q('[...document.querySelectorAll("[data-consult-fee],[data-consult-days],[data-consult-dayadj]")].filter(e=>!e.classList.contains("fee-amt")&&/flex/.test(getComputedStyle(e.parentElement).display)).length')) === 0,
    await q('[...document.querySelectorAll("[data-consult-fee],[data-consult-days],[data-consult-dayadj]")].filter(e=>!e.classList.contains("fee-amt")&&/flex/.test(getComputedStyle(e.parentElement).display)).map(e=>e.parentElement.textContent.trim().slice(0,40)).join(" | ")'));
  ok('C2 new fee and period shown in every bound place', (await q('[...document.querySelectorAll("[data-consult-fee]")].every(e=>e.textContent==="₹150") && document.querySelectorAll("[data-consult-fee]").length>=8 && [...document.querySelectorAll("[data-consult-days]")].every(e=>e.textContent==="10 days") && document.querySelector("[data-consult-dayadj]").textContent==="10-day"')));

  // ---- F. launch simulation: the owner's profile published, no drafts ----
  // (test-only edits to the served data; the committed file stays draft)
  if (OWNER) {
    const pub = [["id: 'reegan-gandhi',\n        draft: true,", "id: 'reegan-gandhi',\n        draft: false,"]];
    const lo = OWNER.levels[0], hi = OWNER.levels.at(-1);
    for (const [w, mob] of [[375, true], [1280, false]]) {
      await load(L, { edits: pub, width: w, mobile: mob });
      ok(`F${w} served data publishes only the owner's profile`, (await q('window.KWLive.teachers.filter(t=>!t.draft).map(t=>t.id).join()')) === 'reegan-gandhi');
      ok(`F${w} one featured profile, no filters, no count, no draft banner`, await q('document.querySelectorAll(".t-card").length===1 && document.getElementById("teacher-grid").classList.contains("single") && [...document.querySelectorAll("#teachers .filters")].every(f=>f.hidden) && document.getElementById("t-count").textContent==="" && document.getElementById("draft-banner").hidden'));
      ok(`F${w} the card shows the real name and no draft or placeholder text`, (await q('document.querySelector(".t-card .t-name").textContent')) === OWNER.name && !(await q('/Draft|\\[|Portrait pending/.test(document.querySelector(".t-card .t-body").innerText)')));
      ok(`F${w} copy speaks of one teacher`, (await q('document.getElementById("teachers-h").textContent')) === 'Meet your teacher.' && /Meet your teacher/.test(await q('document.querySelector(".live-hero .btn-live").textContent')) && /currently taught by one teacher/.test(await q('document.getElementById("fa3").textContent')));
      ok(`F${w} hero level range comes from the published profile`, (await q('document.querySelector("[data-live-levels]").textContent')) === ' · ' + lo + ' → ' + hi, await q('document.querySelector("[data-live-levels]").textContent'));
      ok(`F${w} no horizontal overflow`, (await q(overflow)) <= 0, await q(overflow));
      ok(`F${w} accessibility audit in the launch state`, (await q(a11y)).length === 0, (await q(a11y)).join(' | '));
      ok(`F${w} portrait and details sit side by side on desktop, stacked on phones`, await q('(()=>{const p=document.querySelector(".t-card .portrait").getBoundingClientRect(),b=document.querySelector(".t-card .t-body").getBoundingClientRect();return innerWidth>720?b.left>=p.right-1:b.top>=p.bottom-1})()'));
    }
    await q('document.querySelector(".t-card [data-profile]").click()'); await sleep(200);
    const dlF = await q('[...document.querySelectorAll("#t-dialog .profile-dl dt")].map(d=>d.textContent+": "+d.nextElementSibling.textContent).join(" | ")');
    ok('F profile dialog: every confirmed field, certificate once, no placeholder', OWNER.specialisms.every((x) => dlF.includes(x)) && dlF.includes('Experience: ' + OWNER.experience) && dlF.includes('German proficiency: ' + OWNER.proficiency)
      && dlF.split(OWNER.goethe[0]).length - 1 === 1 && !/\[/.test(dlF), dlF);
    ok('F profile CTA names the teacher', /Request a consultation with Reegan/.test(await q('document.querySelector("#t-dialog [data-book-teacher]").textContent')));
    await key('Escape', 'Escape', 27); await sleep(200);
    ok('F the form offers the published teacher by name', (await q('[...document.getElementById("bf-teacher").options].map(o=>o.text).join("|")')) === 'Help me choose|' + OWNER.name);
    const jF = await q(jsonld);
    ok('F structured data: FAQPage matches, still no Course (none published)', !!jF && jF.faqOk && jF.courses.length === 0, JSON.stringify(jF && jF.courses));
    // with a course published too (test-only): its card links the teacher, and it enters the structured data
    const a1 = LIVE.courses.find((c) => c.id === 'live-a1');
    await load(L, { edits: pub.concat([["id: 'live-a1', draft: true,", "id: 'live-a1', draft: false,"]], a1.teacherIds.includes(OWNER.id) ? [] : [["teacherIds: ['" + a1.teacherIds[0] + "'],", "teacherIds: ['reegan-gandhi'],"]]) });
    ok('F2 the published course names its teacher as a profile link', (await q('document.querySelector(".c-card .t-link").textContent')) === OWNER.name);
    const jF2 = await q(jsonld);
    ok('F2 structured data: the published course with its published instructor, nothing else', !!jF2 && jF2.faqOk && jF2.courses.join() === LIVE.courses[0].title && jF2.instructors.join() === OWNER.name && !/\[[^\]]+\]|Draft/.test(jF2.text), JSON.stringify(jF2 && { c: jF2.courses, i: jF2.instructors }));
    ok('F2 no price or start date is invented in the structured data', !jF2.keys.some((k) => /price|offers|startDate|courseSchedule|hasCourseInstance/i.test(k)), jF2.keys.join());
  }

  // ---- N. without JavaScript: readable FAQ, no dead controls, an email route ----
  for (const [w, mob] of [[375, true], [1280, false]]) {
    await load(L, { nojs: true, width: w, mobile: mob });
    ok(`N${w} scripts really are off`, (await q('typeof window.KWLive')) === 'undefined');
    ok(`N${w} every FAQ answer is readable`, await q('[...document.querySelectorAll(".faq-a-inner")].every(a=>a.getBoundingClientRect().height>0&&a.closest(".faq-a").getBoundingClientRect().height>=a.getBoundingClientRect().height-1)'));
    ok(`N${w} no filters or form controls that would do nothing`, await q('[...document.querySelectorAll("main .filters, #consult-form")].every(e=>e.offsetParent===null)'));
    const nj = await q('(()=>{const n=document.querySelector(".nojs-request");if(!n||!n.offsetParent)return null;const a=n.querySelector("a[href^=mailto]");return {href:a&&a.getAttribute("href"),text:n.innerText}})()');
    ok(`N${w} an email route replaces the form, to the documented address and reply time`, !!nj && nj.href === 'mailto:' + LIVE.contact.email && nj.text.includes(LIVE.contact.replyTime), JSON.stringify(nj));
    ok(`N${w} no horizontal overflow`, (await q(overflow)) <= 0, await q(overflow));
  }

  // ---- E. tablet widths: no overflow, with and without published content ----
  for (const [w, mob] of [[768, true], [1024, false]]) {
    for (const drafts of [false, true]) {
      await load(L, { drafts, width: w, height: 1024, mobile: mob });
      ok(`E${w}${drafts ? ' preview' : ''} no horizontal overflow`, (await q(overflow)) <= 0, await q(overflow));
      ok(`E${w}${drafts ? ' preview' : ''} no element wider than the viewport`, (await q('[...document.querySelectorAll("main *")].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&r.right>innerWidth+0.5&&!e.closest(".filter-scroll")}).length')) === 0,
        await q('[...document.querySelectorAll("main *")].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&r.right>innerWidth+0.5&&!e.closest(".filter-scroll")}).slice(0,3).map(e=>e.tagName+"."+e.className).join(", ")'));
    }
  }

  // ---- D. mobile: layout, sticky CTA, dialog ----
  for (const w of [320, 375, 414]) {
    await load(L, { drafts: true, width: w, height: 760, mobile: true });
    ok(`D${w} no horizontal overflow`, (await q(overflow)) <= 0, await q(overflow));
    ok(`D${w} sticky CTA hidden and unfocusable at the top`, (await q('document.getElementById("sticky-book").getAttribute("aria-hidden")')) === 'true' && (await q('document.querySelector("#sticky-book a").tabIndex')) === -1);
    await q('window.scrollTo(0, document.getElementById("how").offsetTop)'); await sleep(700);
    ok(`D${w} sticky CTA names the fee`, /₹100 consultation/.test(await q('document.querySelector("#sticky-book strong").innerText')), await q('document.querySelector("#sticky-book strong").innerText'));
    ok(`D${w} sticky CTA shown mid-page`, (await q('document.getElementById("sticky-book").classList.contains("show")')) && (await q('document.querySelector("#sticky-book a").tabIndex')) === 0);
    await q('window.scrollTo(0, document.body.scrollHeight)'); await sleep(700);
    ok(`D${w} sticky CTA hidden at the footer, aria + tab order in sync`, !(await q('document.getElementById("sticky-book").classList.contains("show")'))
      && (await q('document.getElementById("sticky-book").getAttribute("aria-hidden")')) === 'true' && (await q('document.querySelector("#sticky-book a").tabIndex')) === -1);
    await q('window.scrollTo(0,0)'); await q('document.querySelector("[data-profile=teacher-1]").click()'); await sleep(200);
    ok(`D${w} profile dialog fits the viewport`, await q('(()=>{const r=document.getElementById("t-dialog").getBoundingClientRect();return r.left>=0&&r.right<=innerWidth+0.5&&r.height<=innerHeight+0.5})()'));
  }

  ok('no uncaught page errors', pageErrors.length === 0, pageErrors.join(' | '));
  // the page itself asks for fonts and the login state; the resolver rules must make every such request fail
  ok('every off-host request was blocked (none completed)', offLoaded.size === 0, [...offLoaded].join(', '));
  ok('off-host requests are only fonts and the login-state lookup', [...offHost].every((h) => /fonts\.(googleapis|gstatic)\.com$|workers\.dev$/.test(h)), [...offHost].join(', '));
} catch (e) {
  ok('suite ran to completion', false, e.stack || String(e));
}

clearTimeout(watchdog);
b.close(); server.close();
const failed = results.filter((r) => r[0] === 'FAIL');
console.log(`\n[live-e2e] ${results.length - failed.length}/${results.length} checks passed`);
if (failed.length) { console.log('[live-e2e] failures:'); failed.forEach((r) => console.log(`  - ${r[1]}${r[2] ? ': ' + r[2] : ''}`)); }
process.exit(failed.length ? 1 : 0);
