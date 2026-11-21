/* OPT-IN, LOCAL macOS ONLY: real Safari over WebDriver (safaridriver, no extra dependencies) for the Lesen-only release
   checks Q1 (Safari journey) and Q4a (confidentiality) in docs/exam/LESEN-ONLY-RELEASE-READINESS.md §6.1 / §6.4.
   Synthetic content, local dev server (the same one the Chrome scenarios use), nothing deployed. Not in CI: GitHub's
   Linux runners have no Safari. Needs Safari → Develop → "Allow Remote Automation" and `safaridriver --enable` once.

   Q4a in Safari: WebDriver has no network inspector, so every byte the dev server SENDS to Safari is captured on the
   server side (a 'request' listener in front of the real handler) — the same bytes Web Inspector would show. On top of
   that, Safari's own DOM, localStorage and sessionStorage are searched, and Safari itself asks for the item review
   while Lesen runs (409 expected). After the submission the same scan must find the released review (control).

   Usage: node exam-worker/test/safari-qa.mjs
     KX_SAFARI_FORM=p3 (default; the release candidates are P3, P8, P13), KX_DEV_PROXY=1 (through the real Access
     Worker in-process), KX_SAFARI_OUT=<dir> (screenshots + a JSON result record), SAFARIDRIVER_PORT (default 4445). */
import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { startDevServer } from './dev-server.mjs';
import { PRACTICE_LIBRARY } from './harness.mjs';

const FORM = PRACTICE_LIBRARY.find((f) => f.name.toLowerCase() === (process.env.KX_SAFARI_FORM || 'p3').toLowerCase());
if (!FORM) { console.error(`unknown KX_SAFARI_FORM=${process.env.KX_SAFARI_FORM}`); process.exit(2); }
const PORT = Number(process.env.SAFARIDRIVER_PORT || 4445);
const OUT = process.env.KX_SAFARI_OUT || '';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => console.log('[safari-qa]', ...a);
const ELEMENT = 'element-6066-11e4-a52f-4a52f35c3a42';
const KEY = { Tab: '', Enter: '', Escape: '', End: '', Home: '', ArrowLeft: '', ArrowRight: '' };

/* ---------- minimal W3C WebDriver client ---------- */
const driver = spawn('safaridriver', ['-p', String(PORT)], { stdio: ['ignore', 'ignore', 'pipe'] });
let driverErr = ''; driver.stderr.on('data', (d) => { driverErr = (driverErr + d).slice(-2000); });
process.on('exit', () => { try { driver.kill(); } catch { /* gone */ } });
async function wd(method, p, body) {
  const r = await fetch(`http://127.0.0.1:${PORT}${p}`, { method, headers: { 'content-type': 'application/json' }, body: body === undefined ? undefined : JSON.stringify(body) });
  const j = await r.json().catch(() => ({}));
  if (j.value && j.value.error) { const e = new Error(`WebDriver ${method} ${p}: ${j.value.error}: ${j.value.message}`); e.wd = j.value.error; throw e; }
  return j.value;
}
for (const t0 = Date.now(); ; await sleep(250)) {
  try { await wd('GET', '/status'); break; } catch { if (Date.now() - t0 > 15000) throw new Error(`safaridriver did not start: ${driverErr}`); }
}

const results = { form: FORM.id, proxy: process.env.KX_DEV_PROXY === '1', q1: {}, q4a: {} };
const dev = await startDevServer({ form: FORM.name.toLowerCase(), flags: { EXAM_MODULE_ONLY: 'lesen', EXAM_RELEASE_FORMS: FORM.id } });
// every response body the server sends to Safari (registered before the real handler, wraps write/end)
const bodies = [];
dev.server.prependListener('request', (req, res) => {
  const chunks = []; const write = res.write.bind(res); const end = res.end.bind(res);
  res.write = (c, ...a) => { if (c && typeof c !== 'function') chunks.push(Buffer.from(c)); return write(c, ...a); };
  res.end = (c, ...a) => { if (c && typeof c !== 'function') chunks.push(Buffer.from(c)); bodies.push({ url: req.url, status: res.statusCode, body: Buffer.concat(chunks).toString('utf8') }); return end(c, ...a); };
});

const session = await wd('POST', '/session', { capabilities: { alwaysMatch: { browserName: 'safari' } } });
const S = `/session/${session.sessionId}`;
results.safari = { browserVersion: session.capabilities.browserVersion, platformVersion: session.capabilities['safari:platformVersion'], build: session.capabilities['safari:platformBuildVersion'] };
log('Safari session', results.safari);
const exec = (script, args = []) => wd('POST', `${S}/execute/sync`, { script, args });
const ev = (expr) => exec(`return (${expr});`);
const fetchIn = (p) => wd('POST', `${S}/execute/async`, { script: `const done = arguments[arguments.length - 1]; fetch(arguments[0], { credentials: 'include' }).then(async (r) => done({ status: r.status, body: await r.text() })).catch((e) => done({ status: 0, body: String(e) }));`, args: [p] });
const waitFor = async (expr, ms = 15000, label = expr) => {
  for (const t0 = Date.now(); ; await sleep(200)) {
    try { if (await ev(`(() => { try { return !!(${expr}); } catch (e) { return false; } })()`)) return; } catch (e) { if (!/stale|navigat|no such window|JavaScript/i.test(e.message)) throw e; }
    if (Date.now() - t0 > ms) throw new Error(`timeout: ${label}\n--- page ---\n${String(await ev('document.body && document.body.innerText').catch(() => '')).slice(0, 600)}`);
  }
};
// Safari returns the element reference under its own key; keep the raw reference to pass it back to scripts
const find = async (css) => { const ref = await wd('POST', `${S}/element`, { using: 'css selector', value: css }); return { ref, id: ref[ELEMENT] || Object.values(ref)[0] }; };
/* a real (native) click. WebDriver scrolls a target only until it touches the viewport edge, where the sticky bar or
   the sticky "Modul abgeben" footer covers it ("click intercepted"); a person scrolls it into the middle first. */
/* The page may still be moving (a part switch scrolls to its heading on the next frame / after 100 ms), so wait until
   the target's centre stays put and is not covered, then click. */
const click = async (css) => {
  const { ref, id } = await find(css);
  let last = null;
  for (let i = 0; i < 10; i++) {
    const s = await wd('POST', `${S}/execute/sync`, { script: `const el = arguments[0]; el.scrollIntoView({ block: 'center' }); const r = el.getBoundingClientRect();
      const x = r.left + r.width / 2, y = r.top + r.height / 2, top = document.elementFromPoint(x, y); return { y: Math.round(y), free: !!top && (top === el || el.contains(top) || (el.labels && [...el.labels].some((l) => l.contains(top)))) };`, args: [ref] });
    if (s.free && last && last.y === s.y) break;
    last = s; await sleep(150);
  }
  return wd('POST', `${S}/element/${id}/click`, {});
};
const keys = (...names) => wd('POST', `${S}/actions`, { actions: [{ type: 'key', id: 'kbd', actions: names.flatMap((k) => [{ type: 'keyDown', value: KEY[k] }, { type: 'keyUp', value: KEY[k] }]) }] }).then(() => wd('DELETE', `${S}/actions`));
const shot = async (name) => { if (!OUT) return; fs.writeFileSync(path.join(OUT, `safari-${FORM.name.toLowerCase()}-${name}.png`), Buffer.from(await wd('GET', `${S}/screenshot`), 'base64')); };
const step = async (id, label, fn) => {
  try { const detail = await fn(); results.q1[id] = { label, result: 'PASS', ...(detail ? { detail } : {}) }; log(id, 'PASS', label, detail || ''); }
  catch (e) { results.q1[id] = { label, result: 'FAIL', error: String(e.message).slice(0, 1500) }; log(id, 'FAIL', label, e.message); throw e; }
};
const tabState = () => ev(`(() => { const tabs = [...document.querySelectorAll('[role="tab"]')]; return { selected: tabs.filter((t) => t.getAttribute('aria-selected') === 'true').map((t) => t.dataset.tab),
  shown: [...document.querySelectorAll('#kx-main .kx-part')].filter((p) => !p.hidden).map((p) => p.dataset.part),
  focus: document.activeElement && (document.activeElement.dataset.tab ? 'tab-' + document.activeElement.dataset.tab : document.activeElement.id) }; })()`);

const keyRows = (await dev.env.DB.prepare('SELECT item_id, key_json FROM item_keys').all()).results.map((r) => [r.item_id, JSON.parse(r.key_json)]);
const correct = Object.fromEntries(keyRows.map(([id, k]) => [id, k.correct]));
const markers = [...new Set(keyRows.flatMap(([, k]) => [k.review?.explanation_de, ...(k.review?.transcripts || []).map((t) => t.text)]).filter((s) => typeof s === 'string' && s.length >= 20))];
const FORBIDDEN = new Set(['correct', 'correct_answer', 'key', 'keys', 'key_json', 'explanation', 'explanation_de', 'evidence', 'transcript', 'transcripts', 'scoring_key']);
const fieldsIn = (v, out = new Set()) => { if (Array.isArray(v)) v.forEach((x) => fieldsIn(x, out)); else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) { out.add(k); fieldsIn(x, out); } return out; };
const scan = (list) => {
  const leaks = [];
  for (const r of list) {
    const hit = markers.find((m) => r.body.includes(m)); if (hit) leaks.push(`${r.url.split('?')[0]}: explanation/transcript text "${hit.slice(0, 40)}…"`);
    if (r.url.startsWith('/exam/v1/')) { let j = null; try { j = JSON.parse(r.body); } catch { /* not JSON */ }
      const bad = j ? [...fieldsIn(j)].filter((f) => FORBIDDEN.has(f)) : []; if (bad.length) leaks.push(`${r.url.split('?')[0]}: fields ${bad.join(', ')}`); }
  }
  return leaks;
};
const lesen = (await dev.env.DB.prepare("SELECT item_id, part FROM items_index WHERE module = 'lesen' AND is_example = 0 ORDER BY part, item_id").all()).results;
const stored = async () => (await dev.env.DB.prepare("SELECT COUNT(*) AS n FROM responses_current WHERE module = 'lesen'").first()).n;
const answerPart = async (part) => {   // native clicks on the correct radio of every item in the open part; selects via change events
  for (const r of lesen.filter((x) => x.part === part)) {
    const css = `[data-item="${r.item_id}"][value="${correct[r.item_id]}"]`;
    if (await ev(`!!document.querySelector('input${css}')`)) {
      const id = await ev(`document.querySelector('input${css}').id`);
      // the visible target is the label (WebKit radios are small); fall back to the input itself
      if (id && await ev(`!!document.querySelector('label[for="${id}"]')`)) await click(`label[for="${id}"]`); else await click(`input${css}`);
    } else await exec(`const s = document.querySelector('select[data-item="' + arguments[0] + '"]'); s.value = arguments[1]; s.dispatchEvent(new Event('change', { bubbles: true }));`, [r.item_id, correct[r.item_id]]);
  }
};

let failed = null;
try {
  await wd('POST', `${S}/window/rect`, { width: 1280, height: 900 });
  await wd('POST', `${S}/url`, { url: `http://127.0.0.1:${dev.port}/exam/dev/as/learner` });
  await waitFor(`document.querySelector('[data-act="create"][data-module="lesen"]')`, 20000, 'Lesen-only start screen');
  /* The first native click on a freshly drawn screen is occasionally dropped by Safari's WebDriver (seen 2 of ~12 runs).
     A probe showed the button is inserted once and never replaced, and no request was made, so it is not a re-render
     in the app. Diagnose and click once more; every retry is recorded in the result (results.clickRetries). */
  results.clickRetries = [];
  const clickThen = async (css, until, label, request) => {
    await click(css);
    try { await waitFor(until, 8000, label); return; } catch { /* diagnosed below */ }
    const diag = { css, buttonDisabled: await ev(`!!document.querySelector('${css}')?.disabled`), requests: bodies.filter((r) => request.test(r.url)).map((r) => r.status) };
    results.clickRetries.push(diag); log(`click had no effect after 8 s (${label})`, diag, '— clicking once more (recorded)');
    if (!diag.buttonDisabled && !diag.requests.length) await click(css);
    await waitFor(until, 15000, label);
  };
  await clickThen('[data-act="create"][data-module="lesen"]', `document.querySelector('[data-act="start"][data-module="lesen"]')`, 'Lesen intro', /\/exam\/v1\/attempts$/);
  await clickThen('[data-act="start"][data-module="lesen"]', `document.querySelectorAll('input[type=radio]').length > 20`, 'Lesen rendered', /\/modules\/lesen\/start/);
  const attempt = (await dev.env.DB.prepare('SELECT id FROM attempts').first()).id;

  await step('1', 'start Lesen in Safari (start screen offers Lesen only)', async () => {
    const t = await ev('document.body.innerText');
    assert.equal((await tabState()).selected.join(), '1', 'Teil 1 open');
    return { tabs: await ev(`document.querySelectorAll('[role="tab"]').length`), timer: /\d+:\d{2}/.test(t) };
  });

  await step('2', 'tabs: Tab reaches the tab bar, arrows move focus only, Enter opens the part, focus on its heading', async () => {
    // Tab from the start of the page: does keyboard focus reach the tab bar? (Safari's "Press Tab to highlight each
    // item" setting decides whether buttons are in the Tab order; recorded, not asserted)
    await exec('document.activeElement && document.activeElement.blur(); window.scrollTo(0, 0);');
    let reached = false;
    for (let i = 0; i < 40 && !reached; i++) { await keys('Tab'); reached = await ev(`!!(document.activeElement && document.activeElement.getAttribute('role') === 'tab')`); }
    await exec(`document.querySelector('[role="tab"][data-tab="1"]').focus();`);
    await keys('ArrowRight'); let s = await tabState();
    assert.deepEqual([s.focus, s.selected, s.shown], ['tab-2', ['1'], ['1']], `ArrowRight moves focus only: ${JSON.stringify(s)}`);
    await keys('End'); assert.equal((await tabState()).focus, 'tab-5'); await keys('ArrowRight'); assert.equal((await tabState()).focus, 'tab-1', 'wraps around');
    await keys('ArrowRight', 'ArrowRight'); await keys('Enter'); await sleep(300); s = await tabState();
    assert.deepEqual([s.selected, s.shown, s.focus], [['3'], ['3'], 'part-3'], `Enter opens Teil 3, focus on its heading: ${JSON.stringify(s)}`);
    const said = await ev(`document.querySelector('#kx-sr-announce').textContent`);
    assert.equal(said, 'Teil 3 geöffnet.');
    return { tabKeyReachedTabBar: reached, announced: said };
  });

  await step('3', 'answer Teil 1 and Teil 3 (one ad twice → "verwendet bei"), flag one item, overview shows states + flag, a number jumps', async () => {
    await exec(`document.querySelector('[role="tab"][data-tab="1"]').click();`); await sleep(300);
    await answerPart(1);
    await exec(`document.querySelector('[role="tab"][data-tab="3"]').click();`); await sleep(300);
    const sels = await ev(`[...document.querySelectorAll('[data-part="3"] select[data-item]:not([disabled])')].map((s) => s.dataset.item)`);
    const ad = await ev(`[...document.querySelector('[data-part="3"] select[data-item]:not([disabled])').options].map((o) => o.value).filter(Boolean)[2]`);
    for (const id of sels.slice(0, 2)) await exec(`const s = document.querySelector('select[data-item="' + arguments[0] + '"]'); s.value = arguments[1]; s.dispatchEvent(new Event('change', { bubbles: true }));`, [id, ad]);
    await sleep(300);
    const used = await ev(`({ card: document.querySelector('[data-part="3"] .kx-ad[data-ad="${ad}"] [data-ad-status]').textContent,
      option: [...document.querySelector('select[data-item="${sels[1]}"]').options].find((o) => o.value === '${ad}').textContent })`);
    assert.match(used.card, /^verwendet bei \d+, \d+/, `ad card marks both uses: ${JSON.stringify(used)}`);
    assert.match(used.option, /verwendet bei/, `option marks the use: ${JSON.stringify(used)}`);
    await shot('teil3-used-ad');
    for (const id of sels.slice(2)) await exec(`const s = document.querySelector('select[data-item="' + arguments[0] + '"]'); s.value = arguments[1]; s.dispatchEvent(new Event('change', { bubbles: true }));`, [id, correct[id]]);
    await exec(`document.querySelector('[role="tab"][data-tab="1"]').click();`); await sleep(300);
    const flagItem = await ev(`document.querySelector('#kx-main .kx-part:not([hidden]) [data-flag]').dataset.flag`);
    await click(`[data-flag="${flagItem}"]`);
    assert.equal(await ev(`document.querySelector('[data-flag="${flagItem}"]').getAttribute('aria-pressed')`), 'true', 'flag set');
    for (const t0 = Date.now(); (await stored()) < lesen.filter((x) => x.part === 1 || x.part === 3).length; await sleep(200)) if (Date.now() - t0 > 15000) throw new Error('Teil 1/3 answers not stored');
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 15000, 'Gespeichert');
    await click('.kx-palette-toggle'); await sleep(300);
    const pal = await ev(`(() => { const p = document.getElementById('kx-palette'); return { links: p.querySelectorAll('a[data-palette-jump]').length, sum: p.querySelector('.kx-palette-sum').textContent, flagged: p.querySelectorAll('.is-flagged').length }; })()`);
    assert.ok(pal.links === 30 && pal.flagged === 1 && /1 markiert/.test(pal.sum), `overview ${JSON.stringify(pal)}`);
    await shot('overview');
    const target = await ev(`(() => { const a = [...document.querySelectorAll('#kx-palette a[data-palette-jump]')][20]; return a.getAttribute('href').slice(1); })()`);
    await click(`#kx-palette a[href="#${target}"]`); await sleep(500);
    const land = await ev(`(() => { const it = document.getElementById('${target}'); const r = it.getBoundingClientRect(); return { closed: !document.getElementById('kx-palette'), focusIn: it.contains(document.activeElement), visible: r.top >= document.querySelector('.kx-bar').getBoundingClientRect().bottom - 1 && r.top < innerHeight }; })()`);
    assert.deepEqual(land, { closed: true, focusIn: true, visible: true }, `jump lands on the item: ${JSON.stringify(land)}`);
    return { usedAd: used, overview: pal, flagged: flagItem };
  });

  await step('4', 'reload: same part and item come back ("Weiter in Teil …"); answers and the flag are kept', async () => {
    const before = await tabState();
    const n = await ev(`document.querySelectorAll('input[type=radio]:checked').length`);
    const last = await ev(`localStorage.getItem(Object.keys(localStorage).find((k) => k.startsWith('kx-pos:')))`);   // the item focused last
    assert.ok(last, 'a last position was remembered');
    await wd('POST', `${S}/refresh`, {});
    await waitFor(`document.querySelectorAll('input[type=radio]:checked').length >= ${n}`, 20000, 'answers back after reload');
    // the restore runs after the module page is drawn (next frame / 100 ms fallback); the resume line is #kx-announce
    const pos = () => ev(`(() => { const it = document.getElementById('${last}'); const r = it.getBoundingClientRect(), bar = document.querySelector('.kx-bar').getBoundingClientRect().bottom;
      return { top: Math.round(r.top), bar: Math.round(bar), vh: innerHeight, said: document.querySelector('#kx-announce').textContent, part: it.closest('.kx-part').dataset.part }; })()`);
    let p = await pos();
    for (const t0 = Date.now(); !(p.said && p.top >= p.bar - 1 && p.top < p.vh - 40) && Date.now() - t0 < 5000; await sleep(100)) p = await pos();
    const after = await tabState();
    const flags = await ev(`document.querySelectorAll('[data-flag][aria-pressed="true"]').length`);
    assert.deepEqual(after.selected, [p.part], `the resumed tab is the part of the last item: ${JSON.stringify({ before, after, p })}`);
    assert.equal(p.said, `Weiter in Teil ${p.part}, bei der zuletzt bearbeiteten Aufgabe.`);
    assert.ok(p.top >= p.bar - 1 && p.top < p.vh - 40, `the last item is back in view below the bar: ${JSON.stringify(p)}`);
    assert.equal(flags, 1, 'the flag survives the reload');
    return { part: p.part, announced: p.said, checked: await ev(`document.querySelectorAll('input[type=radio]:checked').length`) };
  });

  // Q4a while Lesen runs — after the start, the answers, the reload (package fetched twice)
  {
    const early = await fetchIn(`/exam/v1/attempts/${attempt}/modules/lesen/review`);
    const running = bodies.slice();
    const api = running.filter((r) => r.url.startsWith('/exam/v1/'));
    const pkgs = api.filter((r) => /\/modules\/lesen\/package/.test(r.url) && r.status === 200);
    const leaks = scan(running.filter((r) => !/\/modules\/lesen\/review/.test(r.url) || r.status === 200));
    const local = await ev(`JSON.stringify({ l: Object.entries(localStorage), s: Object.entries(sessionStorage), dom: document.documentElement.outerHTML })`);
    const localHit = markers.find((m) => local.includes(m)) || null;
    const localFields = /"(correct|correct_answer|explanation_de|key_json)"/.test(local);
    results.q4a.running = { responses: running.length, api: api.length, packages: pkgs.length, reviewWhileRunning: early.status, leaks, storageOrDomText: localHit, storageOrDomFields: localFields, markers: markers.length };
    assert.equal(early.status, 409, `Safari's own review request while Lesen runs: ${early.status} ${early.body.slice(0, 200)}`);
    assert.equal(/correct|explanation|evidence|transcript/.test(early.body), false, 'the 409 body carries nothing');
    assert.ok(pkgs.length >= 2, `package captured at start and after the reload (${pkgs.length})`);
    assert.deepEqual(leaks, [], 'no key, explanation, evidence or transcript sent to Safari while Lesen runs');
    assert.equal(localHit, null, 'no explanation text in Safari storage or DOM');
    assert.equal(localFields, false, 'no key fields in Safari storage or DOM');
    log('Q4a running', 'PASS', results.q4a.running);
  }

  await step('5', 'browser Back: "Prüfung verlassen?" appears; "In der Prüfung bleiben" keeps the exam', async () => {
    let open = false;
    for (let i = 0; i < 40 && !open; i++) { await wd('POST', `${S}/back`, {}).catch(() => {}); await sleep(200); open = await ev(`!!document.getElementById('kx-leave')?.open`).catch(() => false); }
    assert.ok(open, 'leave dialog on Back');
    const d = await ev(`({ text: document.getElementById('kx-leave').innerText, focus: document.activeElement && document.activeElement.dataset.leave })`);
    assert.match(d.text, /Prüfung verlassen\?/); assert.match(d.text, /In der Prüfung bleiben/);
    await shot('leave-dialog');
    await click('#kx-leave [data-leave="stay"]'); await sleep(300);
    const after = await ev(`({ open: !!document.getElementById('kx-leave')?.open, main: !!document.getElementById('kx-main') })`);
    assert.deepEqual(after, { open: false, main: true });
    assert.equal((await dev.env.DB.prepare("SELECT status FROM attempt_modules WHERE module = 'lesen'").first()).status, 'running');
    return { focus: d.focus };
  });

  await step('7', 'resize: tablet collapse control at ~800 px, phone "Text / Aufgaben" pair at phone width, no horizontal page scroll', async () => {
    const out = {};
    for (const [w, h] of [[800, 1000], [360, 740]]) {
      await wd('POST', `${S}/window/rect`, { width: w, height: h }); await sleep(600);
      await exec(`document.querySelector('[role="tab"][data-tab="4"]').click();`); await sleep(400);
      const v = await ev(`(() => { const vis = (sel) => [...document.querySelectorAll('#kx-main .kx-part:not([hidden]) ' + sel)].some((n) => getComputedStyle(n).display !== 'none');
        return { innerWidth, collapse: vis('.kx-split-collapse'), toggle: vis('.kx-split-toggle'), noHScroll: document.documentElement.scrollWidth <= innerWidth + 1 }; })()`);
      out[w] = v;
      await shot(`width-${v.innerWidth}`);
      assert.ok(v.noHScroll, `no horizontal page scroll at ${v.innerWidth}px: ${JSON.stringify(v)}`);
      if (v.innerWidth >= 768 && v.innerWidth < 1024) assert.ok(v.collapse && !v.toggle, `tablet: collapse control, no phone pair at ${v.innerWidth}px: ${JSON.stringify(v)}`);
      if (v.innerWidth < 768) assert.ok(v.toggle && !v.collapse, `phone: Text/Aufgaben pair at ${v.innerWidth}px: ${JSON.stringify(v)}`);
    }
    await wd('POST', `${S}/window/rect`, { width: 1280, height: 900 }); await sleep(400);
    return out;
  });

  await step('6', '"Modul abgeben" → review lists open + marked items and time left → "Endgültig abgeben" → result and item review with explanations', async () => {
    await click('[data-act="submit"]'); await waitFor(`document.querySelector('#kx-review')`, 5000, 'submit review');
    const rv = await ev(`({ text: document.querySelector('#kx-review').innerText, remaining: document.querySelector('[data-review-remaining]')?.textContent })`);
    assert.match(rv.text, /\d+ von 30 Aufgaben sind noch ohne Antwort\./, 'open items counted');
    assert.match(rv.text, /1 Aufgabe ist zur Kontrolle markiert/, 'the marked item counted');
    assert.match(rv.text, /markiert: Aufgabe \d+/, 'the marked item listed'); assert.match(rv.text, /ohne Antwort: Aufgabe \d+/, 'open items listed');
    assert.match(rv.remaining || '', /^\d{1,2}:\d{2}(:\d{2})?$/);
    await shot('submit-review');
    await click('[data-act="submit-confirm"]');
    await waitFor(`document.querySelector('.kx-result table') && document.querySelectorAll('.kx-review-items .kx-rv-explain').length === 30`, 20000, 'result with item review');
    await shot('result');
    return { remaining: rv.remaining, open: (rv.text.match(/\d+ von 30 Aufgaben sind noch ohne Antwort/) || [])[0] || null, explanations: 30 };
  });

  // Q4a control: the released review is detected by the same scan
  {
    await sleep(500);
    const ctl = scan(bodies.filter((r) => /\/modules\/lesen\/review/.test(r.url) && r.status === 200));
    results.q4a.control = ctl;
    assert.ok(ctl.some((l) => /explanation\/transcript text/.test(l)) && ctl.some((l) => /fields .*correct_answer/.test(l)), `control: the review after submission is found by the scan ${JSON.stringify(ctl)}`);
    results.q4a.result = 'PASS';
    log('Q4a control', 'PASS', ctl.length);
  }
} catch (e) {
  failed = e;
  if (!results.q4a.result && results.q4a.running) results.q4a.result = 'FAIL';
  await shot('failure').catch(() => {});
} finally {
  await wd('DELETE', S).catch(() => {});
  dev.server.close(); driver.kill();
}
results.q1.result = failed ? 'FAIL' : 'PASS';
if (OUT) fs.writeFileSync(path.join(OUT, `safari-${FORM.name.toLowerCase()}${results.proxy ? '-proxy' : ''}.json`), JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
if (failed) { console.error(failed); process.exit(1); }
