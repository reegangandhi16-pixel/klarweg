/* ============================================================
   LIVE CLASSES · headless browser checks (live-classes.html)
   ------------------------------------------------------------
   Real headless Chrome against a local static server over the repo
   root. No dependencies, no secrets, no network: every host except
   127.0.0.1 and the test alias below resolves to nothing, so the page
   can never reach the Access Worker, checkout or an email service, and
   the consultation form only produces its mailto: hand-off.

   Covers (A) the production default (showDrafts:false): the D8 waitlist
   launch, with only the owner's profile and live-a1 published, (B) the host
   guard (showDrafts forced true on a non-local host), (C) the local
   preview: filters, profile dialog, deep links, prefill, validation,
   hand-off, (M) several published teachers (test-only data edits),
   and (D) mobile layout + sticky CTA.

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
const N_B1 = LIVE.teachers.filter((t) => (t.levels || []).includes('B1')).length;
const N_B1_DE = LIVE.teachers.filter((t) => (t.levels || []).includes('B1') && (t.teachesIn || []).includes('German')).length;
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
/* Teachers listed by name and title only (tier 'listed', owner instruction 2026-10-21). */
const LISTED = LIVE.teachers.filter((t) => !t.draft && t.tier === 'listed');
const SHOWN = [OWNER, ...LISTED];
const FULL = '.t-card:not(.t-listed)';
const cardNames = (sel) => `[...document.querySelectorAll("${sel} .t-name")].map(n=>n.textContent).join("|")`;
/* A listed card: name, the title, "No reviews yet", stated levels only; no link, button, booking or profile action. */
const listedOk = `[...document.querySelectorAll(".t-listed")].map(c=>[c.querySelector(".t-name").textContent,c.querySelector(".t-headline").textContent,c.querySelector(".t-reviews").textContent,c.querySelector(".lvl-row .vh")?.textContent||"",c.querySelectorAll("a,button,[data-profile],[data-book-teacher],.t-facts,.t-avail,img").length].join("~")).join("|")`;
const listedWant = LISTED.map((t) => [t.name, 'German Language Teacher', 'No reviews yet', t.levels ? 'Levels taught: ' + t.levels.join(', ') : '', 0].join('~')).join('|');
const A1 = LIVE.courses.find((c) => c.id === 'live-a1');
const POLICY_TEXTS = Object.values(LIVE.policies);
const policiesShown = `Object.entries(${JSON.stringify(LIVE.policies)}).every(([k,t])=>document.querySelector('[data-policy="'+k+'"]').textContent===t)`;
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
  // ---- A. production default (showDrafts:false): the D8 waitlist launch ----
  // Published: the owner's profile and live-a1 as a waitlist. Nothing else, no start date, no payment.
  const OTHER_TITLES = LIVE.courses.filter((c) => c.draft).map((c) => c.title);
  for (const [w, mob] of [[375, true], [1280, false]]) {
    await load(L, { width: w, mobile: mob });
    ok(`A${w} no draft text in DOM or options`, (await q(draftLeak)) === null, await q(draftLeak));
    ok(`A${w} draft banner hidden`, await q('document.getElementById("draft-banner").hidden'));
    ok(`A${w} the owner first (full profile), then every listed teacher in the owner's order, with filters and a count`, (await q(cardNames('.t-card'))) === SHOWN.map((t) => t.name).join('|')
      && await q('!document.querySelector(".t-card").classList.contains("t-listed") && document.querySelectorAll(".t-card:not(.t-listed)").length===1 && !document.getElementById("teacher-grid").classList.contains("single") && !document.querySelector("#teachers .filters").hidden')
      && (await q('document.getElementById("t-count").textContent')) === SHOWN.length + ' teachers', await q(cardNames('.t-card')));
    ok(`A${w} listed cards: name, "German Language Teacher", "No reviews yet", stated levels only, no action`, (await q(listedOk)) === listedWant, await q(listedOk));
    ok(`A${w} each row shows its A1 course fee from coursePricing`, (await q('[...document.querySelectorAll(".t-card")].map(c=>c.querySelector(".t-price-label").textContent+" "+c.querySelector(".t-price-value").textContent).join("|")')) === SHOWN.map((t) => LIVE.coursePricing.label + ' ' + LIVE.coursePricing.teachers[t.id]).join('|'));
    ok(`A${w} rows: full width, thin light-grey rules between them, no card boxes, on a white page`, await q('(()=>{const g=document.getElementById("teacher-grid"),gr=g.getBoundingClientRect(),rows=[...g.querySelectorAll(".t-card")];return rows.every(r=>{const b=r.getBoundingClientRect(),cs=getComputedStyle(r);return Math.abs(b.width-gr.width)<2&&cs.borderBottomWidth==="1px"&&cs.borderBottomColor==="rgb(229, 231, 235)"&&cs.borderLeftWidth==="0px"&&cs.backgroundColor==="rgba(0, 0, 0, 0)"})&&getComputedStyle(document.body).backgroundColor==="rgb(255, 255, 255)"})()'));
    ok(`A${w} monogram avatars (no photo is approved), navy with gold initials`, await q('[...document.querySelectorAll(".t-avatar")].every(a=>!a.querySelector("img")&&/^[A-Z]{2}$/.test(a.textContent)&&getComputedStyle(a).backgroundColor==="rgb(15, 23, 42)"&&getComputedStyle(a).color==="rgb(251, 191, 36)")'));
    ok(`A${w} no sample rating on the page (the switch is off)`, await q('!document.querySelector(".t-sample,.sample-flag") && !document.querySelector("script[src*=sample-data]")'));
    ok(`A${w} no experience, rating or booking claim on any listed card`, !/years|★|rating|book|available|consult/i.test(await q('[...document.querySelectorAll(".t-listed")].map(c=>c.innerText).join(" ")')));
    ok(`A${w} exactly one course card: Beginner German · A1, no filters or count`, (await q('[...document.querySelectorAll(".c-card h3")].map(h=>h.textContent).join("|")')) === A1.title
      && await q('[...document.querySelectorAll("#courses .filters")].every(f=>f.hidden&&f.offsetParent===null) && document.getElementById("c-count").textContent===""'));
    ok(`A${w} no other (draft) course in the catalogue or the form`, !(await q(`(()=>{const t=document.getElementById("course-grid").innerText+' '+[...document.querySelectorAll('option')].map(o=>o.text).join(' ');return ${JSON.stringify(OTHER_TITLES)}.some(x=>t.includes(x))})()`)));
    const card = await q('document.querySelector(".c-card").innerText');
    ok(`A${w} the A1 card: approved fee, terms and schedule, "Waitlist", next batch to be announced`, [A1.priceLabel, A1.paymentTerms, A1.frequency, A1.sessionLength, A1.totalDuration, A1.batchSize, 'Waitlist'].every((x) => card.includes(x)) && /to be announced[\s\S]*next batch/i.test(card), card);
    ok(`A${w} the A1 card says the start date is to be announced and the waitlist is free and not a booking`, card.includes('The start date is still to be announced. Enrolment is not open yet. Joining the waitlist is free and is not a booking: nothing is charged.'));
    ok(`A${w} the A1 CTA is "Join the waitlist" (secondary), never an enrol or pay button`, (await q('(()=>{const a=document.querySelector("[data-book-course=live-a1]");return a.textContent.trim().startsWith("Join the waitlist")&&a.classList.contains("btn-secondary")&&a.getAttribute("href")==="#book"})()'))
      && !/enrol now|pay now|buy now|book your (?:seat|place)/i.test(await q('document.body.innerText')));
    ok(`A${w} testimonials hidden`, await q('document.getElementById("quotes").hidden'));
    ok(`A${w} form selects offer only the published teacher and course`, (await q('[...document.getElementById("bf-teacher").options].map(o=>o.value).join("|")')) === '|reegan-gandhi'
      && (await q('[...document.getElementById("bf-course").options].map(o=>o.value).join("|")')) === '|live-a1', await q('[...document.getElementById("bf-course").options].map(o=>o.value).join("|")'));
    ok(`A${w} no horizontal overflow`, (await q(overflow)) <= 0, await q(overflow));
    ok(`A${w} hero CTAs lead to the teacher and the course`,
      (await q('[...document.querySelectorAll(".live-hero .hero-ctas a")].map(a=>a.getAttribute("href")+" "+a.textContent.trim()).join(" | ")')) === '#teachers Explore our teachers | #courses Explore live courses',
      await q('[...document.querySelectorAll(".live-hero .hero-ctas a")].map(a=>a.getAttribute("href")+" "+a.textContent.trim()).join(" | ")'));
    ok(`A${w} primary hero CTA keeps its arrow`, await q('!!document.querySelector(".live-hero .btn-live .btn-arrow")'));
    ok(`A${w} accessibility audit: names, labels, unique ids, heading order`, (await q(a11y)).length === 0, (await q(a11y)).join(' | '));
    ok(`A${w} hero level range comes from what is published`, (await q('document.querySelector("[data-live-levels]").textContent')) === ' · ' + OWNER.levels[0] + ' → ' + OWNER.levels.at(-1), await q('document.querySelector("[data-live-levels]").textContent'));
    const jA = await q(jsonld);
    ok(`A${w} structured data: FAQPage matches, one Course with its instructor, no price or date`, !!jA && jA.faqOk && jA.courses.join() === A1.title && jA.instructors.join() === OWNER.name
      && !jA.keys.some((k) => /price|offers|startDate|courseSchedule|hasCourseInstance/i.test(k)), JSON.stringify(jA && { faqOk: jA.faqOk, courses: jA.courses, keys: jA.keys }));
    ok(`A${w} requests go to the documented address`, (await q('document.querySelector("[data-contact-email]").textContent')) === 'klarwegofficial@gmail.com');
    ok(`A${w} the four approved policies are shown in the FAQ and its structured data`, (await q(policiesShown)) && POLICY_TEXTS.every((t) => jA.text.includes(t)), await q(policiesShown));
    ok(`A${w} booking is off: an honest "Online demo booking is not open yet" notice, no booking script or panel, no "Book a consultation" button`,
      (await q('(()=>{const n=document.getElementById("consult-closed");return !!n&&!n.hidden&&n.offsetParent!==null&&n.querySelector("h3").textContent})()')) === 'Online demo booking is not open yet'
      && await q('!document.querySelector("script[src*=kw-consult],script[src*=cashfree],#consult-online")')
      && await q('![...document.querySelectorAll("a,button")].some(a=>a.offsetParent!==null&&/book a consultation|request a consultation|^book$/i.test(a.textContent.trim()))'),
      await q('[...document.querySelectorAll("a,button")].filter(a=>a.offsetParent!==null&&/consultation|^book$/i.test(a.textContent.trim())).map(a=>a.textContent.trim()).join(" | ")'));
    ok(`A${w} no learner is told to book or pay by email or manual UPI`, !/send a request by email|UPI details|bank transfer|payment request we email|time slot and payment details/i.test(await q('document.body.innerText')));
    ok(`A${w} consultation terms from the data: length, platform and cancellation`, (await q('document.querySelector("[data-consult-unit]").textContent')) === LIVE.consultation.durationMinutes + '-minute session on ' + LIVE.consultation.platform
      && (await q('(()=>{const e=document.querySelector("[data-consult-cancel]");return !e.hidden&&e.offsetParent!==null&&e.textContent})()')) === LIVE.consultation.cancellation);
  }
  // the waitlist CTA prefills a free interest request for A1; the hand-off says nothing is booked or charged
  await q('document.querySelector("[data-book-course=live-a1]").click()'); await sleep(700);
  ok('A "Join the waitlist" prefills the free waitlist request for A1 (the form has no consultation option)', (await q('!document.querySelector("input[name=rtype]")'))
    && (await q('document.getElementById("form-title").textContent')) === 'Join the course waitlist' && (await q('document.getElementById("bf-course").value')) === 'live-a1');
  await q('(()=>{const s=(id,v)=>{const e=document.getElementById(id);e.value=v;e.dispatchEvent(new Event("change"))};s("bf-name","Test Person");s("bf-email","test@example.com");s("bf-level","A1");s("bf-goal","Other");const c=document.getElementById("bf-consent");c.checked=true;c.dispatchEvent(new Event("change"))})()');
  await submit(); await sleep(500);
  const prevA = await q('document.getElementById("consult-preview").textContent');
  ok('A waitlist request: "Nothing booked or charged", no fee, names the A1 course', /Nothing booked or charged/.test(await q('document.getElementById("done-notice").innerText'))
    && /^Live course interest \(no consultation requested, nothing to pay\)/.test(prevA) && !/₹/.test(prevA) && prevA.includes('Course of interest: ' + A1.title), prevA);
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
  ok('C structured data never includes draft courses or teachers, even in the preview', !!jC && jC.faqOk && jC.courses.join() === A1.title && jC.instructors.join() === OWNER.name && !new RegExp(DRAFT_RX.source + '|\\[[^\\]]+\\]', 'i').test(jC.text), jC && (jC.text.match(new RegExp('.{0,40}(' + DRAFT_RX.source + '|\\[[^\\]]+\\]).{0,40}', 'i')) || [''])[0]);
  const a1Card = await q(`(()=>{const c=document.getElementById("cn-live-a1");return c?c.closest(".c-card").innerText:null})()`);
  ok('C preview: the A1 card shows the approved fee, payment terms, schedule and waitlist status, with no start date', !!a1Card && [A1.priceLabel, A1.paymentTerms, A1.frequency, A1.sessionLength, A1.totalDuration, A1.batchSize, 'Waitlist'].every((x) => a1Card.includes(x)) && /to be announced[\s\S]*next batch/i.test(a1Card), a1Card);
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
  ok('C a course that is not open asks for interest, not a paid consultation', (await q('document.getElementById("form-title").textContent')) === 'Join the course waitlist');
  ok('C preview accessibility audit', (await q(a11y)).length === 0, (await q(a11y)).join(' | '));
  await q('document.querySelector("[data-profile=teacher-1]").click()'); await q('document.querySelector("#t-dialog [data-book-teacher]").click()'); await sleep(700);
  ok('C profile CTA closes the dialog and prefills the teacher', (await q('!document.getElementById("t-dialog").open')) && (await q('document.getElementById("bf-teacher").value')) === 'teacher-1');
  ok('C with booking off, a teacher CTA joins the free waitlist, never an emailed consultation request', (await q('document.getElementById("form-title").textContent')) === 'Join the course waitlist');

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
  ok('C valid submit: confirmation focused and says "Nothing booked or charged"', (await q('!document.getElementById("consult-done").hidden && document.activeElement.id==="consult-done"')) && /Nothing booked or charged/.test(await q('document.getElementById("consult-done").innerText')));
  ok('C request text carries the form fields', /Name: Test Person[\s\S]*Course of interest: Goethe exam preparation/.test(await q('document.getElementById("consult-preview").textContent')));
  ok('C the email is a free interest request: no consultation, no fee, no payment details', /^Live course interest \(no consultation requested, nothing to pay\)/.test(await q('document.getElementById("consult-preview").textContent'))
    && !/₹|consultation request|UPI/i.test(await q('document.getElementById("consult-preview").textContent').then((t) => t.replace('no consultation requested', ''))) && !/time slot and payment details/.test(await q('document.getElementById("done-notice").innerText')));
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

  // ---- F. the launch state in detail: the committed data, no test-only edits ----
  if (OWNER) {
    const pub = [];
    const lo = OWNER.levels[0], hi = OWNER.levels.at(-1);
    for (const [w, mob] of [[375, true], [1280, false]]) {
      await load(L, { edits: pub, width: w, mobile: mob });
      ok(`F${w} served data: one full profile (the owner), the rest listed`, (await q('window.KWLive.teachers.filter(t=>!t.draft&&t.tier!=="listed").map(t=>t.id).join()')) === 'reegan-gandhi'
        && (await q('window.KWLive.teachers.filter(t=>!t.draft&&t.tier==="listed").length')) === LISTED.length);
      ok(`F${w} one full-profile row, then the listed rows; no draft banner`, await q('document.querySelectorAll(".t-card:not(.t-listed)").length===1 && document.querySelectorAll(".t-card").length===' + SHOWN.length + ' && document.getElementById("draft-banner").hidden'));
      ok(`F${w} the full-profile row shows the real name and no draft or placeholder text`, (await q('document.querySelector(".t-card:not(.t-listed) .t-name").textContent')) === OWNER.name && !(await q('/Draft|\\[|Portrait pending/.test(document.querySelector(".t-card:not(.t-listed) .t-body").innerText)')));
      ok(`F${w} directory copy, not single-teacher copy`, (await q('document.getElementById("teachers-h").textContent')) === 'Find the teacher who fits your goal.' && !/currently taught by one teacher/.test(await q('document.getElementById("fa3").textContent')));
      ok(`F${w} the rows stack in one column, each below the previous`, await q('(()=>{const r=[...document.querySelectorAll(".t-card")].map(c=>c.getBoundingClientRect());return r.every((b,i)=>!i||b.top>=r[i-1].bottom-1)})()'));
      ok(`F${w} hero level range comes from the published profile`, (await q('document.querySelector("[data-live-levels]").textContent')) === ' · ' + lo + ' → ' + hi, await q('document.querySelector("[data-live-levels]").textContent'));
      ok(`F${w} no horizontal overflow`, (await q(overflow)) <= 0, await q(overflow));
      ok(`F${w} accessibility audit in the launch state`, (await q(a11y)).length === 0, (await q(a11y)).join(' | '));
      ok(`F${w} avatar beside the details; the fee sits right on desktop and below the details on phones`, await q('(()=>{const c=document.querySelector(".t-card"),a=c.querySelector(".t-avatar").getBoundingClientRect(),b=c.querySelector(".t-body").getBoundingClientRect(),s=c.querySelector(".t-side").getBoundingClientRect();return b.left>=a.right-1&&(innerWidth>760?s.left>=b.right-1:s.top>=b.bottom-1)})()'));
    }
    await q('document.querySelector(".t-card:not(.t-listed) [data-profile]").click()'); await sleep(200);
    const dlF = await q('[...document.querySelectorAll("#t-dialog .profile-dl dt")].map(d=>d.textContent+": "+d.nextElementSibling.textContent).join(" | ")');
    ok('F profile dialog: every confirmed field, certificate once, no placeholder', OWNER.specialisms.every((x) => dlF.includes(x)) && dlF.includes('Experience: ' + OWNER.experience) && dlF.includes('German proficiency: ' + OWNER.proficiency)
      && dlF.split(OWNER.goethe[0]).length - 1 === 1 && !/\[/.test(dlF), dlF);
    ok('F with booking off the profile CTA is the free waitlist (prefilled with the teacher), not a consultation request', /^Join the waitlist/.test(await q('document.querySelector("#t-dialog [data-book-teacher]").textContent.trim()'))
      && (await q('document.querySelector("#t-dialog [data-book-teacher]").getAttribute("data-request")')) === 'interest');
    ok('F with booking off the full-profile row offers no consultation button', await q('!document.querySelector(".t-card [data-book-teacher]")'));
    await key('Escape', 'Escape', 27); await sleep(200);
    ok('F the form offers the published teacher by name', (await q('[...document.getElementById("bf-teacher").options].map(o=>o.text).join("|")')) === 'Help me choose|' + OWNER.name);
    const jF = await q(jsonld);
    ok('F structured data: FAQPage matches, and the only Course is A1', !!jF && jF.faqOk && jF.courses.join() === A1.title, JSON.stringify(jF && jF.courses));
    await load(L);
    ok('F2 the published course names its teacher as a profile link', (await q('document.querySelector(".c-card .t-link").textContent')) === OWNER.name);
    const jF2 = await q(jsonld);
    ok('F2 structured data: the published course with its published instructor, nothing else', !!jF2 && jF2.faqOk && jF2.courses.join() === LIVE.courses[0].title && jF2.instructors.join() === OWNER.name && !/\[[^\]]+\]|Draft/.test(jF2.text), JSON.stringify(jF2 && { c: jF2.courses, i: jF2.instructors }));
    ok('F2 no price or start date is invented in the structured data', !jF2.keys.some((k) => /price|offers|startDate|courseSchedule|hasCourseInstance/i.test(k)), jF2.keys.join());
  }

  // ---- M. several published teachers (test-only data edits: a fictional second teacher replaces the teacher-2 template) ----
  {
    const src = fs.readFileSync(path.join(ROOT, 'live-classes-data.js'), 'utf8');
    const start = src.indexOf("{\n        id: 'teacher-2',"), end = src.indexOf('\n      }', start) + '\n      }'.length;
    const two = "{ id: 'test-two', name: 'Test Teacher Two', photo: null, photoAlt: '', headline: 'Test headline', experience: '3 years of teaching German', proficiency: 'C2', qualifications: ['Test qualification'], goethe: [], levels: ['A1', 'A2'], teachesIn: ['English', 'German'], specialisms: ['Test specialism'], examPrep: null, approach: 'Test approach.', formats: ['One-to-one'], availability: null, consent: 'test', photoConsent: null, unconfirmed: [] }";
    const multi = [[src.slice(start, end), two], ["teacherIds: ['reegan-gandhi'],", "teacherIds: ['reegan-gandhi', 'test-two'],"]];
    for (const [w, mob] of [[375, true], [1280, false]]) {
      await load(L, { edits: multi, width: w, mobile: mob });
      ok(`M${w} two teacher cards in a directory layout, with filters and a count`, await q('document.querySelectorAll("' + FULL + '").length===2 && !document.querySelector(".t-featured") && !document.getElementById("teacher-grid").classList.contains("single") && !document.querySelector("#teachers .filters").hidden')
        && (await q('document.getElementById("t-count").textContent')) === (2 + LISTED.length) + ' teachers', await q('document.getElementById("t-count").textContent'));
      ok(`M${w} directory copy, not single-teacher copy`, (await q('document.getElementById("teachers-h").textContent')) === 'Find the teacher who fits your goal.');
      ok(`M${w} level chips only for levels a teacher covers`, (await q('[...document.querySelectorAll("[data-tlevel]")].filter(b=>!b.hidden&&b.offsetParent!==null).map(b=>b.textContent).join()')) === 'All,A1,A2,B1,B2',
        await q('[...document.querySelectorAll("[data-tlevel]")].filter(b=>!b.hidden&&b.offsetParent!==null).map(b=>b.textContent).join()'));
      ok(`M${w} language filter lists the teachers' languages; the exam filter stays (one teacher prepares for Goethe)`, (await q('[...document.getElementById("t-lang").options].map(o=>o.text).join("|")')) === 'Any language|Hindi|English|German'
        && await q('document.getElementById("t-exam").offsetParent!==null'));
      ok(`M${w} no horizontal overflow`, (await q(overflow)) <= 0, await q(overflow));
      ok(`M${w} accessibility audit with several teachers`, (await q(a11y)).length === 0, (await q(a11y)).join(' | '));
      ok(`M${w} no draft or template text`, (await q(draftLeak)) === null, await q(draftLeak));
    }
    await q('document.querySelector("[data-tlevel=A2]").click()');
    const nA2 = 2 + LISTED.filter((t) => (t.levels || []).includes('A2')).length;
    ok('M level A2 narrows the list to the teachers who teach it', (await q(cardNames(FULL))) === OWNER.name + '|Test Teacher Two' && (await q('document.getElementById("t-count").textContent')) === nA2 + ' of ' + (2 + LISTED.length) + ' teachers match', await q('document.getElementById("t-count").textContent'));
    await q('(()=>{const s=document.getElementById("t-lang");s.value="German";s.dispatchEvent(new Event("change"))})()');
    ok('M + teaches in German leaves one teacher', (await q(cardNames('.t-card'))) === 'Test Teacher Two' && (await q('document.getElementById("t-count").textContent')) === '1 of ' + (2 + LISTED.length) + ' teachers match', await q('document.getElementById("t-count").textContent'));
    await q('document.getElementById("t-exam").click()');
    ok('M + Goethe exam prep: no match, with a reset that restores everything', await q('!!document.getElementById("t-reset")'));
    await q('document.getElementById("t-reset").click()');
    ok('M reset shows every teacher again', (await q('document.querySelectorAll(".t-card").length')) === 2 + LISTED.length && (await q('document.querySelectorAll("' + FULL + '").length')) === 2);
    const cardT = await q('(()=>{const d=[...document.querySelectorAll(".c-card dt")].find(x=>/^Teachers?$/.test(x.textContent));return d?d.textContent+": "+d.nextElementSibling.textContent:null})()');
    ok('M the course card names both teachers as profile links', cardT === 'Teachers: ' + OWNER.name + ', Test Teacher Two' && (await q('document.querySelectorAll(".c-card .t-link").length')) === 2, cardT);
    await q('document.querySelectorAll(".c-card .t-link")[1].focus(); document.querySelectorAll(".c-card .t-link")[1].click()'); await sleep(200);
    ok('M a course-card teacher link opens that teacher\'s profile, labelled, with focus inside', (await q('document.getElementById("t-dialog").open')) && (await q('location.hash')) === '#teacher-test-two'
      && (await q('document.getElementById("t-dialog-name").textContent')) === 'Test Teacher Two' && await q('document.getElementById("t-dialog").contains(document.activeElement)'));
    ok('M the profile lists the course the teacher is assigned to', /Live courses: Beginner German · A1/.test(await q('[...document.querySelectorAll("#t-dialog .profile-dl dt")].map(d=>d.textContent+": "+d.nextElementSibling.textContent).join(" | ")')));
    await key('Escape', 'Escape', 27); await sleep(200);
    ok('M Escape closes and returns focus to the course-card link', (await q('!document.getElementById("t-dialog").open')) && await q('document.activeElement.classList.contains("t-link")'));
    const jM = await q(jsonld);
    ok('M structured data: the course lists both published instructors, no template', !!jM && jM.instructors.join('|') === OWNER.name + '|Test Teacher Two' && !/\[[^\]]+\]|Draft/.test(jM.text), JSON.stringify(jM && jM.instructors));
    ok('M the form offers both published teachers', (await q('[...document.getElementById("bf-teacher").options].map(o=>o.text).join("|")')) === 'Help me choose|' + OWNER.name + '|Test Teacher Two');
    // availability as the booking service would report it: bookable teachers first, factual labels, nothing else re-ranked
    const names = cardNames(FULL);
    ok('M no availability label before the booking service reports', await q('document.querySelectorAll(".t-avail").length===0'));
    await q('window.KWLiveUI.applyAvailability({"test-two":{availableToday:true}})');
    ok('M an available teacher sorts first, labelled "Available today"; the other "Currently unavailable"', (await q(names)) === 'Test Teacher Two|' + OWNER.name
      && (await q('[...document.querySelectorAll(".t-card .t-avail")].map(a=>a.firstChild.textContent).join("|")')) === 'Available today|Currently unavailable', await q(names));
    await q('window.KWLiveUI.applyAvailability({})');
    ok('M nobody available: data order kept, every card "Currently unavailable"', (await q(names)) === OWNER.name + '|Test Teacher Two' && (await q('[...document.querySelectorAll(".t-avail")].every(a=>a.dataset.avail==="unavailable")')));
    ok('M every card states "No reviews yet"', await q('[...document.querySelectorAll(".t-card .t-reviews")].every(r=>r.textContent==="No reviews yet") && document.querySelectorAll(".t-card .t-reviews").length===' + (2 + LISTED.length)));
    ok('M listed teachers never get an availability label, even when the service reports', await q('document.querySelectorAll(".t-listed .t-avail").length===0'));
  }

  // ---- production: the owner's full profile and the listed teachers ----
  await load(L);
  ok('P level filter: B2 leaves the owner only; A1 adds the listed teacher whose levels are stated, never one without', await (async () => {
    await q('document.querySelector("[data-tlevel=B2]").click()');
    const b2 = await q(cardNames('.t-card'));
    await q('document.querySelector("[data-tlevel=A1]").click()');
    const a1 = await q(cardNames('.t-card'));
    await q('document.querySelector("[data-tlevel=\'\']").click()');
    return b2 === OWNER.name && a1 === SHOWN.filter((t) => (t.levels || []).includes('A1')).map((t) => t.name).join('|');
  })());
  ok('P a deep link to a listed teacher opens no dialog', await (async () => { if (!LISTED.length) return true; await load(L + '#teacher-' + LISTED[0].id); return q('!document.getElementById("t-dialog").open && location.hash==="#teachers"'); })());
  await load(L);
  ok('R every card says "No reviews yet" and shows no rating or availability label', await q('[...document.querySelectorAll(".t-card .t-reviews")].every(r=>r.textContent==="No reviews yet") && document.querySelectorAll(".t-card .t-reviews").length===' + SHOWN.length + ' && document.querySelectorAll(".t-avail").length===0'));
  ok('R online booking is off: no booking script, panel or payment SDK loads', await q('![...document.scripts].some(s=>/kw-consult|cashfree/.test(s.src)) && !document.getElementById("consult-online") && !window.KWConsult && !window.Cashfree'));
  ok('R the profile dialog lists "Reviews: No reviews yet"', await q('(()=>{document.querySelector("[data-profile=reegan-gandhi]").click();const t=[...document.querySelectorAll("#t-dialog .profile-dl dt")].map(d=>d.textContent+": "+d.nextElementSibling.textContent).join(" | ");document.getElementById("t-dialog").close();return /Reviews: No reviews yet/.test(t)})()'));
  // sample ratings: a flagged local preview only; a deployed host never loads them, whatever the switch says
  const sampleOn = [['previewSampleRatings: false,', 'previewSampleRatings: true,']];
  await load(L, { edits: sampleOn }); await sleep(400);
  ok('S local preview with the switch on: every row shows a sample rating, each flagged "Sample data · preview only"', await q('(()=>{const r=[...document.querySelectorAll(".t-card .t-reviews")];return r.length===' + SHOWN.length + '&&r.every(x=>x.classList.contains("t-sample")&&x.querySelector(".sample-flag").textContent==="Sample data · preview only")})()'),
    await q('[...document.querySelectorAll(".t-card .t-reviews")].map(r=>r.textContent).join(" | ")'));
  ok('S the sample values: 4.8 · 100+ for the first two, 3.5 for the rest', await q('(()=>{const r=[...document.querySelectorAll(".t-card .t-reviews")].map(x=>x.textContent);return r.slice(0,2).every(t=>/4\\.8 · 100\\+ ratings/.test(t))&&r.slice(2).every(t=>/3\\.5 · (?:[23]\\d|40) ratings/.test(t))})()'));
  ok('S no rating reaches structured data, even in the preview', !/ratingValue|aggregateRating|reviewCount|"Review"/.test(JSON.stringify(await q(jsonld))));
  await load(R, { edits: sampleOn }); await sleep(400);
  ok('S a deployed host ignores the switch: no sample script, every row "No reviews yet"', await q('!document.querySelector("script[src*=sample-data]") && !window.KWLiveSample && [...document.querySelectorAll(".t-card .t-reviews")].every(r=>r.textContent==="No reviews yet")'));

  // the owner switch loads the booking script (served data edited in the test only; the Worker is not reached here)
  await load(L, { edits: [['enabled: false,', 'enabled: true,']] });
  ok('R with onlineBooking.enabled the page loads kw-consult.js', await q('[...document.scripts].some(s=>/kw-consult\\.js$/.test(s.src))'));

  // ---- N. without JavaScript: readable FAQ, no dead controls, an email route ----
  for (const [w, mob] of [[375, true], [1280, false]]) {
    await load(L, { nojs: true, width: w, mobile: mob });
    ok(`N${w} scripts really are off`, (await q('typeof window.KWLive')) === 'undefined');
    ok(`N${w} every FAQ answer is readable`, await q('[...document.querySelectorAll(".faq-a-inner")].every(a=>a.getBoundingClientRect().height>0&&a.closest(".faq-a").getBoundingClientRect().height>=a.getBoundingClientRect().height-1)'));
    ok(`N${w} no filters or form controls that would do nothing`, await q('[...document.querySelectorAll("main .filters, #consult-form")].every(e=>e.offsetParent===null)'));
    const nj = await q('(()=>{const n=document.querySelector(".nojs-request");if(!n||!n.offsetParent)return null;const a=n.querySelector("a[href^=mailto]");return {href:a&&a.getAttribute("href"),text:n.innerText}})()');
    ok(`N${w} an email route replaces the form, to the documented address and reply time`, !!nj && nj.href === 'mailto:' + LIVE.contact.email && nj.text.includes(LIVE.contact.replyTime), JSON.stringify(nj));
    ok(`N${w} the approved policies and consultation terms are readable without JavaScript`, (await q(policiesShown)) && (await q('document.body.innerText')).includes(LIVE.consultation.cancellation));
    ok(`N${w} no horizontal overflow`, (await q(overflow)) <= 0, await q(overflow));
    const nc = await q('(()=>{const p=document.querySelector("[data-nojs-course]");return p&&p.offsetParent?p.innerText:null})()');
    ok(`N${w} the A1 waitlist is described without JavaScript: start date to be announced, free, not a booking`, !!nc && nc.includes(A1.title) && nc.includes(OWNER.name) && /waitlist only/.test(nc) && /start date is still to be announced/.test(nc) && /free and is not a booking/.test(nc), nc);
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
  ok('off-host requests are only fonts and the login-state lookup', [...offHost].every((h) => /fonts\.(googleapis|gstatic)\.com$|^klarweg\.in$/.test(h)), [...offHost].join(', '));
} catch (e) {
  ok('suite ran to completion', false, e.stack || String(e));
}

clearTimeout(watchdog);
b.close(); server.close();
const failed = results.filter((r) => r[0] === 'FAIL');
console.log(`\n[live-e2e] ${results.length - failed.length}/${results.length} checks passed`);
if (failed.length) { console.log('[live-e2e] failures:'); failed.forEach((r) => console.log(`  - ${r[1]}${r[2] ? ': ' + r[2] : ''}`)); }
process.exit(failed.length ? 1 : 0);
