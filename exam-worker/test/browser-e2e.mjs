/* OPT-IN real-browser E2E (headless Chrome over CDP, no extra dependencies):
   START → LESEN → HÖREN (real WebAudio playback of test tones, real time)
   → SCHREIBEN (typing + umlaut button + reload recovery) → SPRECHEN (phase-driven:
   preparation + reload, topic lock, fake-microphone recording, reload mid-part,
   partner presentation played once without recording, Teil 3) → SUBMIT → RESULT,
   at desktop and mobile widths. Synthetic content only, against the local dev
   server. The Sprechen part moves the module start on the TEST server (in-memory
   D1) to skip the long Teil 1/2 waits.
   A second scenario runs Chrome with its DEFAULT autoplay policy (no
   --autoplay-policy flag, no user gesture on load): the page is loaded just
   before the partner phase and reloaded during it; blocked audio must ask for
   "Audio starten" and continue from its scheduled position, never silently
   count as played. A third scenario does the same for HÖREN: the page is reloaded
   during Teil 2 with a recovery replay owed; the module must stay usable (parts,
   answers) before the click, and after it the replay plays first, without
   overlapping the next normal play. Takes ~6–7 minutes.
   Usage: node exam-worker/test/browser-e2e.mjs   (CHROME=/path/to/chrome to override;
   KX_E2E_ONLY=flagged|autoplay|hoeren-autoplay|practice runs one scenario). A fourth scenario runs one complete attempt on
   the synthetic PRACTICE form P1 plus rating by two raters (see runPractice). Chrome always runs with --mute-audio. */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import { startDevServer } from './dev-server.mjs';
import { call, rid, pkgFor, syntheticBuild } from './harness.mjs';
import { post, start, submit, uploadChunk } from './flow.mjs';

const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => console.log('[browser-e2e]', ...a);

async function launch({ autoplayFlag = true } = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-chrome-'));
  const proc = spawn(CHROME, ['--headless=new', '--mute-audio', '--disable-gpu', '--no-first-run', '--no-default-browser-check', `--user-data-dir=${dir}`,
    '--remote-debugging-port=0', ...(autoplayFlag ? ['--autoplay-policy=no-user-gesture-required'] : []), '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream',
    'about:blank'], { stdio: 'ignore' });
  const portFile = path.join(dir, 'DevToolsActivePort');
  for (let i = 0; i < 100 && !fs.existsSync(portFile); i++) await sleep(100);
  const port = fs.readFileSync(portFile, 'utf8').split('\n')[0];
  const targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const page = targets.find((t) => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r, { once: true }));
  let id = 0; const pending = new Map(); const events = [];
  ws.addEventListener('message', (m) => {
    const msg = JSON.parse(m.data);
    if (msg.id && pending.has(msg.id)) { const { resolve, reject } = pending.get(msg.id); pending.delete(msg.id); msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result); }
    else if (msg.method) events.push(msg);
  });
  const send = (method, params = {}) => new Promise((resolve, reject) => { const i = ++id; pending.set(i, { resolve, reject }); ws.send(JSON.stringify({ id: i, method, params })); });
  return { proc, dir, send, events, close: () => { try { ws.close(); } catch {} proc.kill(); } };
}

async function run(viewport) {
  const dev = await startDevServer();
  const b = await launch();
  const { send } = b;
  const errors = [];
  try {
    await send('Runtime.enable'); await send('Page.enable'); await send('Log.enable');
    await send('Emulation.setDeviceMetricsOverride', { width: viewport.w, height: viewport.h, deviceScaleFactor: 1, mobile: viewport.mobile });
    const evaluate = async (expr) => {
      const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
      if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
      return r.result.value;
    };
    const text = () => evaluate('document.body.innerText');
    const waitFor = async (fnSrc, ms = 15000, label = fnSrc) => {
      const t0 = Date.now();
      while (Date.now() - t0 < ms) { if (await evaluate(`(() => { try { return !!(${fnSrc}); } catch { return false; } })()`)) return; await sleep(200); }
      throw new Error(`timeout: ${label}\n--- page ---\n${(await text()).slice(0, 800)}\n--- console ---\n${b.events.filter((e) => e.method === 'Runtime.exceptionThrown' || e.method === 'Log.entryAdded' || (e.method === 'Runtime.consoleAPICalled' && e.params.type === 'error')).map((e) => JSON.stringify(e.params).slice(0, 300)).join('\n')}`);
    };
    const click = (sel) => evaluate(`document.querySelector(${JSON.stringify(sel)}).click()`);
    const submitModule = async () => { await click('[data-act="submit"]'); await waitFor(`document.querySelector('[data-act="submit-confirm"]')`, 5000, 'review'); await click('[data-act="submit-confirm"]'); };
    await send('Runtime.evaluate', { expression: 'window.confirm = () => true' });
    await send('Page.addScriptToEvaluateOnNewDocument', { source: 'window.confirm = () => true;' });
    // record which Sprechen assets an <audio> element starts (the shell tags them with data-asset)
    await send('Page.addScriptToEvaluateOnNewDocument', { source: `window.__plays = []; { const play = HTMLMediaElement.prototype.play;
      HTMLMediaElement.prototype.play = function () { window.__plays.push((this.dataset && this.dataset.asset) || ''); return play.apply(this, arguments); }; }` });
    const base = `http://127.0.0.1:${dev.port}/exam/`;
    await send('Page.navigate', { url: base });

    await waitFor(`document.querySelector('[data-act="create"]')`, 15000, 'start screen');
    await click('[data-act="create"]');
    await waitFor(`document.querySelector('[data-act="start"][data-module="lesen"]')`, 15000, 'Lesen intro');
    await click('[data-act="start"][data-module="lesen"]');
    await waitFor(`document.querySelectorAll('input[type=radio]').length > 20`, 15000, 'Lesen rendered');
    assert.match(await text(), /SYNTHETISCHE ÜBUNGSINHALTE/);
    // answer: first option of each non-example radio group, first real option of each select
    // part navigation and progress: one link per part, every target present, nothing answered yet
    const navLinks = await evaluate(`[...document.querySelectorAll('.kx-nav a')].map((a) => a.getAttribute('href'))`);
    assert.ok(navLinks.length >= 2, 'part navigation shown');
    assert.equal(await evaluate(`${JSON.stringify(navLinks)}.every((h) => document.querySelector(h))`), true, 'every part link has a target');
    const total = Number(/von (\d+) beantwortet/.exec(await evaluate(`document.querySelector('.kx-progress').textContent`))[1]);
    assert.match(await evaluate(`document.querySelector('.kx-progress').textContent`), /^0 von \d+ beantwortet$/);
    // the first "Modul abgeben" opens the review — nothing is submitted; it lists the unanswered items with working links
    await click('[data-act="submit"]');
    await waitFor(`document.querySelector('#kx-review')`, 5000, 'review panel');
    assert.equal(await evaluate(`document.activeElement && document.activeElement.id`), 'kx-review-title', 'focus moves to the review');
    assert.match(await evaluate(`document.querySelector('.kx-review-summary').textContent`), new RegExp(`^${total} von ${total} Aufgaben sind noch ohne Antwort`));
    assert.equal(await evaluate(`[...document.querySelectorAll('#kx-review a[data-review-jump]')].every((a) => document.querySelector(a.getAttribute('href')))`), true);
    assert.equal((await dev.env.DB.prepare("SELECT status FROM attempt_modules WHERE module = 'lesen'").first()).status, 'running', 'opening the review submits nothing');
    // answering while the review is open refreshes the review (not only the header); focus stays where the learner is
    await evaluate(`(() => { const r = document.querySelector('input[type=radio]:not([disabled])'); r.focus(); r.click(); })()`);   // as a pointer/keyboard user does
    await waitFor(`document.querySelector('.kx-review-summary')?.textContent.startsWith('${total - 1} von ${total} Aufgaben')`, 5000, 'review refreshed after an answer');
    assert.equal(await evaluate(`document.querySelector('.kx-progress').textContent`), `1 von ${total} beantwortet`);
    assert.equal(await evaluate(`document.activeElement && document.activeElement.type`), 'radio', 'focus is not pulled into the review');
    await click('[data-act="review-close"]');
    await waitFor(`!document.querySelector('#kx-review') && !document.querySelector('.kx-foot').hidden`, 5000, 'review closed');
    // answer: first option of each non-example radio group, first real option of each select
    await evaluate(`(() => { const seen = new Set(); for (const r of document.querySelectorAll('input[type=radio]:not([disabled])')) { if (!seen.has(r.name)) { seen.add(r.name); r.click(); } }
      for (const s of document.querySelectorAll('select:not([disabled])')) { s.selectedIndex = 1; s.dispatchEvent(new Event('change', { bubbles: true })); } })()`);
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 15000, 'Lesen autosaved');
    assert.equal(await evaluate(`document.querySelector('.kx-progress').textContent`), `${total} von ${total} beantwortet`, 'progress follows the answers');
    const overflow = await evaluate('document.documentElement.scrollWidth > window.innerWidth + 1');
    assert.equal(overflow, false, 'no horizontal scroll');
    await click('[data-act="submit"]');
    await waitFor(`/Alle \\d+ Aufgaben sind beantwortet/.test(document.querySelector('.kx-review-summary')?.textContent || '')`, 5000, 'review: all answered');
    assert.equal(await evaluate('document.documentElement.scrollWidth > window.innerWidth + 1'), false, 'no horizontal scroll with the review open');
    await click('[data-act="submit-confirm"]');

    await waitFor(`document.querySelector('[data-act="start"][data-module="hoeren"]')`, 15000, 'Hören intro');
    await click('[data-act="start"][data-module="hoeren"]');
    await waitFor(`/Sie hören den Text|Lesen Sie die Aufgaben/.test(document.querySelector('#kx-phase')?.textContent || '')`, 30000, 'Hören schedule running');
    // F2: only Teil 1 is in the DOM; future parts' items/text are absent (not merely hidden)
    await waitFor(`document.querySelectorAll('#kx-main .kx-part').length === 1`, 10000, 'Teil 1 rendered');
    const dom = await evaluate('document.documentElement.outerHTML');
    assert.equal(/syn-h[234]-|data-part="[234]"/.test(dom), false, 'future Hören parts must not be in the DOM');
    log(viewport.name, 'Hören running (real-time synthetic plan); future parts absent from DOM');
    // F1: genuine interruption — reload the page while a LAST allowed play (P1 text 1, play 2/2) is playing
    const lastPlaySeq = 5;
    const t0 = Date.now();
    for (;;) {
      const row = await dev.env.DB.prepare("SELECT outcome FROM audio_plays WHERE phase_seq = ?1 AND kind = 'normal'").bind(lastPlaySeq).first();
      if (row && row.outcome === 'started') break;
      if (Date.now() - t0 > 30000) throw new Error('last play never started');
      await sleep(30);
    }
    await evaluate('window.__beforeReload = true');
    await send('Page.reload');
    await waitFor(`!window.__beforeReload && document.querySelector('#kx-phase')`, 20000, 'reloaded into Hören');
    for (const t1 = Date.now(); ; ) {
      const rec = await dev.env.DB.prepare("SELECT outcome FROM audio_plays WHERE phase_seq = ?1 AND kind = 'recovery'").bind(lastPlaySeq).first();
      if (rec && rec.outcome === 'complete') break;
      if (Date.now() - t1 > 30000) throw new Error('recovery replay did not complete: ' + JSON.stringify(rec));
      await sleep(100);
    }
    log(viewport.name, 'interrupted last play recovered once');
    // an open review is redrawn when Hören opens another part; keyboard focus stays on the equivalent review control
    const partsBefore = await evaluate(`document.querySelectorAll('#kx-main .kx-part').length`);
    assert.ok(partsBefore < 4, `a later part must still be locked here (parts open: ${partsBefore})`);
    await click('[data-act="submit"]');
    await waitFor(`document.querySelector('#kx-review')`, 5000, 'Hören review');
    await evaluate(`document.querySelector('[data-act="review-close"]').focus()`);
    const reviewParts = () => evaluate(`document.querySelectorAll('.kx-review-list > li').length`);
    const listedBefore = await reviewParts();
    await waitFor(`document.querySelectorAll('#kx-main .kx-part').length > ${partsBefore}`, 120000, 'next Hören part unlocked');
    await waitFor(`document.querySelectorAll('.kx-review-list > li').length > ${listedBefore}`, 5000, 'review lists the newly opened part');
    assert.equal(await evaluate(`document.activeElement && document.activeElement.dataset.act`), 'review-close', 'focus kept on the equivalent review control');
    assert.equal((await dev.env.DB.prepare("SELECT status FROM attempt_modules WHERE module = 'hoeren'").first()).status, 'running', 'the open review submitted nothing');
    await click('[data-act="review-close"]');
    await waitFor(`!document.querySelector('#kx-review') && !document.querySelector('.kx-foot').hidden`, 5000, 'Hören review closed');
    await waitFor(`/Ende des Hörteils/.test(document.querySelector('#kx-phase')?.textContent || '')`, 150000, 'Hören finished');
    assert.equal(await evaluate(`document.querySelectorAll('#kx-main .kx-part').length`), 4, 'all four parts open by the end');
    const plays = (await dev.env.DB.prepare('SELECT kind, outcome, COUNT(*) AS n FROM audio_plays GROUP BY kind, outcome').all()).results;
    const n = (k, o) => plays.filter((r) => r.kind === k && (!o || r.outcome === o)).reduce((a, r) => a + r.n, 0);
    // 15 text plays (example 1 + 5×2, 1, 1, 2) + 1 synthetic Teil 2 instruction play (AUDIO-SPEC A1/A2)
    assert.equal(n('normal'), 16, JSON.stringify(plays));
    assert.equal(n('normal', 'interrupted'), 1, JSON.stringify(plays));
    assert.equal(n('normal', 'complete'), 15, JSON.stringify(plays));
    assert.equal(n('recovery'), 1); assert.equal(n('recovery', 'complete'), 1);
    await submitModule();

    await waitFor(`document.querySelector('[data-act="start"][data-module="schreiben"]')`, 15000, 'Schreiben intro');
    await click('[data-act="start"][data-module="schreiben"]');
    await waitFor(`document.querySelector('textarea')`, 15000, 'editor');
    await evaluate(`(() => { const t = document.querySelector('textarea'); t.focus(); t.value = 'Liebe Grüße aus der Straße '; t.dispatchEvent(new Event('input', { bubbles: true })); })()`);
    await click('.kx-char[data-insert="ä"]');
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 15000, 'Schreiben autosaved');
    // recovery: reload the tab mid-module
    await evaluate('window.__beforeReload = true');
    await send('Page.reload');
    await waitFor(`!window.__beforeReload && document.querySelector('[data-wc-for]') && document.querySelector('textarea') && document.querySelector('textarea').value.startsWith('Liebe Grüße aus der Straße ä')`, 15000, 'text recovered after reload');
    assert.match(await evaluate(`document.querySelector('[data-wc-for]').textContent`), /^[56]$/);
    await submitModule();

    await waitFor(`document.querySelector('[data-act="start"][data-module="sprechen"]')`, 15000, 'Sprechen intro');
    await click('#kx-consent');
    await click('[data-act="start"][data-module="sprechen"]');
    const TOPIC = 'itm:b1:syn-sp2-topic', PARTNER = 'ast:syn-sp3-partner-talk';
    const topicRadios = `[...document.querySelectorAll('input[type=radio][data-item="${TOPIC}"]')]`;
    const sprechenRow = () => dev.env.DB.prepare("SELECT started_at, deadline_at FROM attempt_modules WHERE module = 'sprechen'").first();
    const chunkCount = async (part) => (await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM recording_chunks' + (part ? ' WHERE part = ?1' : '')).bind(...(part ? [part] : [])).first()).n;
    const phaseSecondsLeft = async () => { const m = /noch (\d+):(\d+)/.exec(await evaluate(`document.querySelector('#kx-phase-time')?.textContent || ''`)); return m ? Number(m[1]) * 60 + Number(m[2]) : null; };

    // 1. PREPARATION (synthetic: 20 s; published lc:b1@1: 15 min): topic choice open, nothing recorded
    await waitFor(`/^Vorbereitung/.test(document.querySelector('#kx-phase')?.textContent || '')`, 20000, 'preparation phase');
    assert.equal(await evaluate(`${topicRadios}.length`), 2);
    assert.equal(await evaluate(`${topicRadios}.some((r) => r.disabled)`), false, 'topic choice open during the preparation');
    await evaluate(`${topicRadios}.find((r) => r.value === 't1').click()`);
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 15000, 'topic autosaved');
    assert.equal(await chunkCount(), 0, 'nothing is recorded during the preparation');
    // refresh during the preparation: same phase, same remaining time (server-derived)
    await evaluate('window.__beforeReload = true');
    await send('Page.reload');
    await waitFor(`!window.__beforeReload && /^Vorbereitung/.test(document.querySelector('#kx-phase')?.textContent || '') && /noch/.test(document.querySelector('#kx-phase-time')?.textContent || '')`, 20000, 'preparation restored after reload');
    const row0 = await sprechenRow();
    const shown = await phaseSecondsLeft(), expected = (row0.started_at + 20_000 - Date.now()) / 1000;
    assert.ok(shown !== null && Math.abs(shown - expected) <= 2, `remaining preparation after reload: shown ${shown} s, expected ≈ ${expected.toFixed(1)} s`);
    assert.equal(await evaluate(`${topicRadios}.find((r) => r.value === 't1').checked`), true, 'chosen topic restored');

    // 2. TOPIC LOCK at the end of the preparation (the server enforces it as well)
    await waitFor(`${topicRadios}.every((r) => r.disabled)`, 25000, 'topic locked after the preparation');
    await evaluate(`${topicRadios}.find((r) => r.value === 't2').click()`);
    assert.equal(await evaluate(`${topicRadios}.find((r) => r.value === 't1').checked`), true, 'a locked choice cannot change');
    const stored = await dev.env.DB.prepare('SELECT value_json FROM responses_current WHERE item_id = ?1').bind(TOPIC).first();
    assert.deepEqual(JSON.parse(stored.value_json), { option_id: 't1' });
    // F6: the lock is announced and tied to the group for assistive technology
    assert.equal(await evaluate(`document.getElementById('item-itm_b1_syn-sp2-topic').getAttribute('aria-describedby')`), 'lock-itm_b1_syn-sp2-topic');
    assert.match(await evaluate(`document.getElementById('lock-itm_b1_syn-sp2-topic').textContent`), /gesperrt\. Gewählt: /);
    assert.match(await evaluate(`document.querySelector('#kx-announce').textContent`), /Vorbereitung ist beendet/);

    // 3. TEIL 1: recording windows follow the phase (intro first, then the partner prompt, then recording)
    await waitFor(`/^Teil 1: Aufnahme läuft/.test(document.querySelector('#kx-phase')?.textContent || '')`, 25000, 'Teil 1 recording');
    for (const t1 = Date.now(); (await chunkCount(1)) < 2; ) { if (Date.now() - t1 > 15000) throw new Error('no Teil 1 chunks'); await sleep(200); }

    // 4. TEST-SERVER TIME JUMP + reload mid-turn: land 8 s before the end of Teil 2 (no waiting for Teil 1/2)
    const row1 = await sprechenRow();
    const target = Date.now() - (265_000 - 8_000);   // Teil 2 ends 265 s after the module start (synthetic plan)
    const delta = target - row1.started_at;
    await dev.env.DB.prepare("UPDATE attempt_modules SET started_at = started_at + ?1, deadline_at = deadline_at + ?1 WHERE module = 'sprechen'").bind(delta).run();
    await evaluate('window.__beforeReload = true');
    await send('Page.reload');
    await waitFor(`!window.__beforeReload && /^Teil 2/.test(document.querySelector('#kx-phase')?.textContent || '')`, 20000, 'reloaded into Teil 2');
    // the interrupted Teil 1 turn kept its chunks and was finalised; Teil 1 is not repeated
    for (const t1 = Date.now(); ; ) {
      const turn = await dev.env.DB.prepare("SELECT status, chunks FROM recording_turns WHERE part = 1 AND turn = 't1'").first();
      if (turn && turn.status === 'complete') { assert.ok(turn.chunks >= 2); break; }
      if (Date.now() - t1 > 10000) throw new Error('interrupted Teil 1 turn not finalised: ' + JSON.stringify(turn));
      await sleep(200);
    }

    // 5. PARTNER PRESENTATION: played once, nothing recorded
    await waitFor(`/Präsentation Ihres Gesprächspartners/.test(document.querySelector('#kx-phase')?.textContent || '')`, 15000, 'partner phase');
    const chunksAtPartner = await chunkCount();
    await waitFor(`window.__plays.includes(${JSON.stringify(PARTNER)})`, 5000, 'partner presentation started');
    await sleep(3000);
    assert.equal(await chunkCount(), chunksAtPartner, 'no recording during the partner presentation');
    assert.equal(await chunkCount(3), 0);

    // 6. TEIL 3: recording starts without replaying the partner talk; the examiner prompt is still played
    await waitFor(`/^Teil 3: Aufnahme läuft/.test(document.querySelector('#kx-phase')?.textContent || '')`, 15000, 'Teil 3 recording');
    for (const t1 = Date.now(); (await chunkCount(3)) < 1; ) { if (Date.now() - t1 > 15000) throw new Error('no Teil 3 chunks'); await sleep(200); }
    assert.equal(await evaluate(`window.__plays.filter((a) => a === ${JSON.stringify(PARTNER)}).length`), 1, 'partner presentation played exactly once');
    const teil2 = await dev.env.DB.prepare("SELECT status FROM recording_turns WHERE part = 2 AND turn = 't1'").first();
    assert.equal(teil2 && teil2.status, 'complete', 'Teil 2 recorded in its (shortened) window');
    const chunks = { n: await chunkCount() };
    log(viewport.name, 'Sprechen phases: preparation + reload, topic lock, Teil 1, reload into Teil 2, partner once, Teil 3');
    await submitModule();
    await waitFor(`document.querySelector('[data-act="complete"]')`, 20000, 'complete screen');
    await click('[data-act="complete"]');
    await waitFor(`/Klarweg B1 Simulation – Ergebnis/.test(document.body.innerText)`, 15000, 'result page');
    const result = await text();
    assert.match(result, /Lesen/); assert.match(result, /in Bewertung/);
    assert.match(result, /Klarweg-Simulation – kein offizielles Ergebnis des Goethe-Instituts\./, 'OD-45 disclaimer');
    assert.equal(/Goethe[- ]?(score|Ergebnis|Zertifikat)|official score|TEST RESULT|Awaiting/i.test(result.replace(/Klarweg-Simulation – kein offizielles Ergebnis des Goethe-Instituts\./, '')), false);
    assert.equal(/nicht bestanden · nicht bestanden/.test(result), false, 'no duplicated verdict');
    assert.match(result, /richtig \d+ · falsch \d+ · ohne Antwort \d+/, 'objective counts shown');
    const exceptions = b.events.filter((e) => e.method === 'Runtime.exceptionThrown');
    errors.push(...exceptions.map((e) => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text));
    log(viewport.name, 'PASS', { normal_plays: n('normal'), recovery_plays: n('recovery'), chunks: chunks.n });
  } finally {
    b.close(); dev.server.close();
  }
  return errors;
}

/* ---------- DEFAULT autoplay policy (F1): no flag, no user gesture on load ---------- */
async function runDefaultAutoplay(viewport) {
  const dev = await startDevServer();
  const b = await launch({ autoplayFlag: false });
  const { send } = b;
  const PARTNER = 'ast:syn-sp3-partner-talk', PARTNER_START = 265_000;   // synthetic plan: partner phase 265–270 s after the module start
  try {
    // drive Lesen/Hören/Schreiben through the in-process Worker (no browser clicks), then start Sprechen there too
    const created = await call(dev.env, 'POST', '/exam/v1/attempts', { user: dev.user, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: 'dev_e2e_autoplay_0000000001' } });
    const s = { env: dev.env, user: dev.user, attempt: created.json.attempt_id, lease: created.json.lease.lease_id };
    for (const m of ['lesen', 'hoeren', 'schreiben']) { await start(s, m); if (m === 'hoeren') await post(s, '/hoeren/events', { type: 'ready' }); await submit(s, m); }
    assert.equal((await post(s, '/sprechen/consent', { granted: true, version: 'rec-consent@1' })).status, 200);
    await start(s, 'sprechen');
    // Teil 1 and Teil 2 are already recorded (via the test Worker), so the page holds no live microphone before the
    // partner phase: Chrome lets a page that is capturing audio autoplay, which would hide the default-policy refusal.
    for (const [item, turns] of [['itm:b1:syn-sp1', ['t1', 't2', 't3']], ['itm:b1:syn-sp2', ['t1']]]) for (const turn of turns) {
      assert.equal((await uploadChunk(s, item, turn, 0, Buffer.from(`pre-${item}-${turn}`))).status, 200);
      assert.equal((await post(s, '/sprechen/turns', { item_id: item, turn, chunks: 1, duration_ms: 1000 })).status, 200);
    }
    const placeAt = async (msAfterStart) => {   // TEST server only: move the module start so that "now" is msAfterStart into the plan
      const row = await dev.env.DB.prepare("SELECT started_at FROM attempt_modules WHERE module = 'sprechen'").first();
      const delta = (Date.now() - msAfterStart) - row.started_at;
      await dev.env.DB.prepare("UPDATE attempt_modules SET started_at = started_at + ?1, deadline_at = deadline_at + ?1 WHERE module = 'sprechen'").bind(delta).run();
    };
    await dev.env.DB.prepare('DELETE FROM attempt_leases').run();   // let the page take the attempt without a "Hier fortsetzen" click

    await send('Runtime.enable'); await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', { width: viewport.w, height: viewport.h, deviceScaleFactor: 1, mobile: viewport.mobile });
    // record successful and refused play() calls per asset (the shell tags Sprechen audio with data-asset)
    await send('Page.addScriptToEvaluateOnNewDocument', { source: `window.__ok = []; window.__refused = []; { const play = HTMLMediaElement.prototype.play;
      HTMLMediaElement.prototype.play = function () { const el = this, asset = (el.dataset && el.dataset.asset) || ''; const p = play.apply(el, arguments);
        p.then(() => window.__ok.push({ asset, offset: el.currentTime }), (e) => window.__refused.push({ asset, name: e && e.name })); return p; }; }` });
    const evaluate = async (expr, userGesture = false) => {
      const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true, userGesture });
      if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
      return r.result.value;
    };
    const waitFor = async (src, ms, label) => {
      const t0 = Date.now();
      while (Date.now() - t0 < ms) { if (await evaluate(`(() => { try { return !!(${src}); } catch { return false; } })()`)) return; await sleep(100); }
      throw new Error(`timeout: ${label}\n${(await evaluate('document.body.innerText')).slice(0, 600)}`);
    };
    const okPartner = () => evaluate(`window.__ok.filter((p) => p.asset === ${JSON.stringify(PARTNER)})`);

    // 1. load the page 4 s before the partner phase (fresh load = no user activation)
    await placeAt(PARTNER_START - 4_000);
    await send('Page.navigate', { url: `http://127.0.0.1:${dev.port}/exam/` });
    await waitFor(`/Präsentation Ihres Gesprächspartners/.test(document.querySelector('#kx-phase')?.textContent || '')`, 15000, 'partner phase (loaded just before)');
    await waitFor(`document.querySelector('[data-act="audio-start"]')`, 4000, '"Audio starten" offered');
    assert.ok(await evaluate(`window.__refused.some((r) => r.asset === ${JSON.stringify(PARTNER)} && r.name === 'NotAllowedError')`), 'default policy refused the play');
    assert.equal((await okPartner()).length, 0, 'a refused play never counts as played');
    assert.equal(await evaluate(`document.querySelector('[data-act="audio-start"]').closest('[role="alert"]') !== null`), true, 'the request is an accessible alert');
    assert.equal(await evaluate(`document.activeElement && document.activeElement.dataset.act`), 'audio-start', 'the action receives focus');
    await evaluate(`document.querySelector('[data-act="audio-start"]').click()`, true);   // a real user gesture
    await waitFor(`window.__ok.some((p) => p.asset === ${JSON.stringify(PARTNER)})`, 4000, 'partner plays after the click');
    assert.equal((await okPartner()).length, 1, 'played once');
    assert.equal(await evaluate(`!!document.querySelector('[data-act="audio-start"]')`), false, 'the request disappears');

    // 2. reload DURING the partner phase (0.6 s in; the synthetic presentation is 2 s): continue from the scheduled position
    await placeAt(PARTNER_START + 600);
    await evaluate('window.__beforeReload = true');
    await send('Page.reload');
    await waitFor(`!window.__beforeReload && document.querySelector('[data-act="audio-start"]')`, 6000, '"Audio starten" offered again after the reload');
    assert.equal((await okPartner()).length, 0, 'nothing played before the click on the reloaded page');
    await evaluate(`document.querySelector('[data-act="audio-start"]').click()`, true);
    await waitFor(`window.__ok.some((p) => p.asset === ${JSON.stringify(PARTNER)})`, 4000, 'partner continues after the click');
    const resumed = await okPartner();
    assert.equal(resumed.length, 1, 'played once on this page');
    assert.ok(resumed[0].offset >= 0.5, `continued at ${resumed[0].offset} s, not from the beginning`);

    // 3. Teil 3 records on schedule (its first prompt is the partner talk, which is not replayed)
    await waitFor(`/^Teil 3: Aufnahme läuft/.test(document.querySelector('#kx-phase')?.textContent || '')`, 10000, 'Teil 3 recording');
    assert.equal((await okPartner()).length, 1, 'no further partner play in Teil 3');
    for (const t1 = Date.now(); ; ) {
      const n = (await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM recording_chunks WHERE part = 3').first()).n;
      if (n >= 1) break;
      if (Date.now() - t1 > 10000) throw new Error('no Teil 3 chunks');
      await sleep(200);
    }
    const uncaught = b.events.filter((e) => e.method === 'Runtime.exceptionThrown').map((e) => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text);
    log(viewport.name, 'DEFAULT autoplay PASS', { partner_resumed_offset_s: Number(resumed[0].offset.toFixed(2)) });
    return uncaught;
  } finally {
    b.close(); dev.server.close();
  }
}

/* ---------- DEFAULT autoplay policy, HÖREN: reload (no user gesture) with a recovery replay owed ---------- */
async function runDefaultAutoplayHoeren(viewport) {
  const dev = await startDevServer();
  const b = await launch({ autoplayFlag: false });
  const { send } = b;
  try {
    const created = await call(dev.env, 'POST', '/exam/v1/attempts', { user: dev.user, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: 'dev_e2e_autoplay_0000000002' } });
    const s = { env: dev.env, user: dev.user, attempt: created.json.attempt_id, lease: created.json.lease.lease_id };
    await start(s, 'lesen'); await submit(s, 'lesen');
    await start(s, 'hoeren');
    assert.equal((await post(s, '/hoeren/events', { type: 'ready' })).status, 200);
    const plan = pkgFor(syntheticBuild(), 'hoeren').timing.plan;
    const offsetOf = (seq) => plan.phases.filter((x) => x.seq < seq).reduce((n, x) => n + x.ms, 0);
    const placeAt = async (msAfterPlanStart) => {   // TEST server only: move the Hören schedule so that "now" is msAfterPlanStart into it
      const row = await dev.env.DB.prepare("SELECT plan_started_at FROM attempt_modules WHERE module = 'hoeren'").first();
      const delta = (Date.now() - msAfterPlanStart) - row.plan_started_at;
      await dev.env.DB.prepare("UPDATE attempt_modules SET started_at = started_at + ?1, plan_started_at = plan_started_at + ?1, deadline_at = deadline_at + ?1 WHERE module = 'hoeren'").bind(delta).run();
    };
    // Teil 1 text 1, play 2 of 2 (a LAST play) is interrupted mid-play → one recovery replay is owed
    const LAST = plan.phases.find((x) => x.kind === 'play' && x.part === 1 && x.play_no === 2 && x.plays_allowed === 2);
    await placeAt(offsetOf(LAST.seq) + 300);
    assert.equal((await post(s, '/hoeren/events', { type: 'play_start', phase_seq: LAST.seq })).status, 200);
    assert.equal((await post(s, '/hoeren/events', { type: 'interrupted', phase_seq: LAST.seq })).status, 200);
    // reopen the page during the Teil 2 preread (fresh load = no user activation)
    const T2 = plan.phases.find((x) => x.kind === 'preread' && x.part === 2);
    const T2PLAY = plan.phases.find((x) => x.kind === 'play' && x.part === 2 && x.purpose !== 'instruction');
    await placeAt(offsetOf(T2.seq) + 300);
    await dev.env.DB.prepare('DELETE FROM attempt_leases').run();
    const plays = async () => (await dev.env.DB.prepare('SELECT phase_seq, kind, started_at, ended_at, outcome FROM audio_plays ORDER BY started_at').all()).results;
    const before = (await plays()).length;

    await send('Runtime.enable'); await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', { width: viewport.w, height: viewport.h, deviceScaleFactor: 1, mobile: viewport.mobile });
    const evaluate = async (expr, userGesture = false) => {
      const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true, userGesture });
      if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
      return r.result.value;
    };
    const waitFor = async (src, ms, label) => {
      const t0 = Date.now();
      while (Date.now() - t0 < ms) { if (await evaluate(`(() => { try { return !!(${src}); } catch { return false; } })()`)) return; await sleep(100); }
      throw new Error(`timeout: ${label}\n${(await evaluate('document.body.innerText')).slice(0, 600)}`);
    };
    await send('Page.navigate', { url: `http://127.0.0.1:${dev.port}/exam/` });

    // 1. blocked audio does not block the module: prompt shown, Teil 2 opens, answers save, nothing is played
    await waitFor(`document.querySelector('[data-act="audio-start"]')`, 15000, '"Audio starten" offered (Hören)');
    await waitFor(`document.querySelector('.kx-part[data-part="2"]')`, 8000, 'Teil 2 rendered without a click');
    assert.equal(await evaluate(`document.querySelector('[data-act="audio-start"]').closest('[role="alert"]') !== null`), true, 'accessible alert');
    assert.equal(await evaluate(`document.activeElement && document.activeElement.dataset.act`), 'audio-start', 'the action receives focus');
    await evaluate(`(() => { const r = document.querySelector('.kx-part[data-part="1"] input[type=radio]:not([disabled])'); r.click(); })()`);
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 8000, 'answer saved while audio is blocked');
    assert.equal((await plays()).length, before, 'nothing played or recovered before the click');

    // 2. one click: the owed recovery replay plays first, then the next normal plays follow without overlapping it
    await evaluate(`document.querySelector('[data-act="audio-start"]').click()`, true);
    await waitFor(`!document.querySelector('[data-act="audio-start"]')`, 4000, 'prompt disappears after the click');
    for (const t1 = Date.now(); !(await plays()).some((p) => p.phase_seq === T2PLAY.seq && p.kind === 'normal'); ) {
      if (Date.now() - t1 > 15000) throw new Error('Teil 2 text never played: ' + JSON.stringify(await plays()));
      await sleep(200);
    }
    const after = (await plays()).slice(before);
    const rec = after.find((p) => p.kind === 'recovery');
    assert.ok(rec && rec.phase_seq === LAST.seq, 'recovery replay of the interrupted last play: ' + JSON.stringify(after));
    assert.equal(after[0].kind, 'recovery', 'the recovery replay is the first play after the click');
    const nextNormal = after.find((p) => p.kind === 'normal');
    assert.ok(rec.ended_at !== null && nextNormal.started_at >= rec.ended_at, 'the next normal play starts after the replay ended');
    assert.equal(after.filter((p) => p.kind === 'recovery').length, 1);
    const uncaught = b.events.filter((e) => e.method === 'Runtime.exceptionThrown').map((e) => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text);
    log(viewport.name, 'DEFAULT autoplay HÖREN PASS', { after_click: after.map((p) => `${p.kind}:${p.phase_seq}`) });
    return uncaught;
  } finally {
    b.close(); dev.server.close();
  }
}

const results = [];
const ONLY = process.env.KX_E2E_ONLY || '';
/* PRACTICE (form P1, realistic synthetic content): one complete attempt as learner, then rating as two raters, in one
   headless, muted browser. Proves: Lesen autosave; the item review is refused before and exact after submission; full
   Hören playback; Schreiben; Sprechen recording; result + review tables; outsider and learner refused on the rater
   screen and API; rater validation and keyboard reach; two raters → final scores on the learner's result; mobile
   layout without horizontal scroll; no uncaught errors. Users are the dev server's local test users (cookie). */
async function runPractice() {
  const dev = await startDevServer({ form: 'p1' });
  const b = await launch();
  const { send } = b;
  try {
    await send('Runtime.enable'); await send('Page.enable');
    const evaluate = async (expr) => {
      const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
      if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
      return r.result.value;
    };
    const text = () => evaluate('document.body.innerText');
    const waitFor = async (src, ms = 15000, label = src) => {
      const t0 = Date.now();
      while (Date.now() - t0 < ms) { if (await evaluate(`(() => { try { return !!(${src}); } catch { return false; } })()`)) return; await sleep(250); }
      throw new Error(`timeout: ${label}\n--- page ---\n${(await text()).slice(0, 600)}`);
    };
    const click = (sel) => evaluate(`document.querySelector(${JSON.stringify(sel)}).click()`);
    const vp = (w, h, mobile) => send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile });
    const base = `http://127.0.0.1:${dev.port}/exam/`;
    const as = async (alias, page = '') => { await send('Page.navigate', { url: base }); await waitFor('document.readyState === "complete"'); await evaluate(`document.cookie = 'kx-dev-as=${alias}; path=/'`); await send('Page.navigate', { url: base + page }); };
    const noHScroll = () => evaluate('document.documentElement.scrollWidth <= window.innerWidth + 1');
    const keys = Object.fromEntries((await dev.env.DB.prepare('SELECT item_id, key_json FROM item_keys').all()).results.map((r) => [r.item_id, JSON.parse(r.key_json).correct]));
    const answerAll = (plan) => evaluate(`(() => { const plan = ${JSON.stringify(plan)};
      for (const [id, v] of Object.entries(plan)) { const el = document.querySelector('[data-item="' + id + '"][value="' + v + '"]');
        if (el) { el.click(); continue; } const sel = document.querySelector('select[data-item="' + id + '"]'); if (sel) { sel.value = v; sel.dispatchEvent(new Event('change', { bubbles: true })); } } })()`);
    const submitModule = async () => { await click('[data-act="submit"]'); await waitFor(`document.querySelector('[data-act="submit-confirm"]')`, 5000, 'review'); await click('[data-act="submit-confirm"]'); };
    const apiFetch = (method, path, body) => evaluate(`fetch(${JSON.stringify('/exam/v1' + path)}, { method: ${JSON.stringify(method)}, credentials: 'include', headers: { 'content-type': 'application/json' }${body ? `, body: ${JSON.stringify(JSON.stringify(body))}` : ''} }).then(async (r) => ({ status: r.status, json: await r.json().catch(() => null) }))`);
    await vp(1280, 800, false);

    // ---- learner: Lesen (1–10 correct, 11–20 wrong, 21–30 blank), autosave, review refused before submission ----
    await send('Page.navigate', { url: base });
    await waitFor(`document.querySelector('[data-act="create"]')`, 15000, 'start screen');
    assert.match(await text(), /Übung · synthetische Inhalte/i); // eyebrow is uppercased by CSS
    await click('[data-act="create"]');
    await waitFor(`document.querySelector('[data-act="start"][data-module="lesen"]')`); await click('[data-act="start"][data-module="lesen"]');
    await waitFor(`document.querySelectorAll('input[type=radio]').length > 20`, 15000, 'Lesen rendered');
    assert.match(await text(), /Lindenau/, 'realistic practice text is shown');
    const attempt = (await dev.env.DB.prepare('SELECT id FROM attempts').first()).id;
    const lesen = (await dev.env.DB.prepare("SELECT item_id, display_no FROM items_index WHERE module = 'lesen' AND is_example = 0").all()).results;
    const wrong = (id) => { const k = keys[id]; return ['richtig', 'falsch'].includes(k) ? (k === 'richtig' ? 'falsch' : 'richtig') : ['ja', 'nein'].includes(k) ? (k === 'ja' ? 'nein' : 'ja') : k === 'a' ? 'b' : 'a'; };
    await answerAll(Object.fromEntries(lesen.filter((r) => Number(r.display_no) <= 20).map((r) => [r.item_id, Number(r.display_no) <= 10 ? keys[r.item_id] : wrong(r.item_id)])));
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 15000, 'Lesen autosaved');
    assert.equal(await evaluate(`document.querySelector('.kx-progress').textContent`), '20 von 30 beantwortet');
    let r = await apiFetch('GET', `/attempts/${attempt}/modules/lesen/review`);
    assert.equal(r.status, 409, 'no item review while Lesen is running'); assert.equal(/correct|explanation|evidence|transcript/.test(JSON.stringify(r.json)), false);
    await submitModule();
    await waitFor(`document.querySelector('[data-act="start"][data-module="hoeren"]')`, 15000, 'Lesen submitted');
    r = await apiFetch('GET', `/attempts/${attempt}/modules/lesen/review`);
    assert.equal(r.status, 200, 'item review after submission'); assert.deepEqual(r.json.summary, { correct: 10, incorrect: 10, unanswered: 10, total: 30 });

    // ---- Hören: full real-time plan, then all answers correct ----
    await click('[data-act="start"][data-module="hoeren"]');
    await waitFor(`/Verkürzte Übungszeiten – nicht die Zeiten der Prüfung/.test(document.querySelector('.kx-banner')?.textContent || '')`, 15000, 'practice timing labelled');
    r = await apiFetch('GET', `/attempts/${attempt}/modules/hoeren/review`);
    assert.equal(r.status, 409, 'no Hören review or script while Hören runs'); assert.equal(/Gärtnerei|Radwege|explanation/.test(JSON.stringify(r.json)), false);
    await waitFor(`/Ende des Hörteils/.test(document.querySelector('#kx-phase')?.textContent || '')`, 480000, 'Hören finished');
    const hoeren = (await dev.env.DB.prepare("SELECT item_id FROM items_index WHERE module = 'hoeren' AND is_example = 0").all()).results;
    await answerAll(Object.fromEntries(hoeren.map((x) => [x.item_id, keys[x.item_id]])));
    await waitFor(`document.querySelector('.kx-progress')?.textContent === '30 von 30 beantwortet' && document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 15000, 'Hören answered');
    await submitModule();

    // ---- Schreiben: three texts ----
    await waitFor(`document.querySelector('[data-act="start"][data-module="schreiben"]')`); await click('[data-act="start"][data-module="schreiben"]');
    await waitFor(`document.querySelectorAll('textarea').length === 3`, 15000, 'Schreiben');
    await evaluate(`[...document.querySelectorAll('textarea')].forEach((t, i) => { t.value = 'Lieber Tom, meine neue Wohnung ist hell und ruhig. Ich bin umgezogen, weil ich näher an der Arbeit wohnen wollte. Treffen wir uns am Samstag? Viele Grüße ' + i; t.dispatchEvent(new Event('input', { bubbles: true })); })`);
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 15000, 'Schreiben autosaved');
    await submitModule();

    // ---- Sprechen: consent, preparation, skip to Teil 1 (test server time), record, submit ----
    await waitFor(`document.querySelector('[data-act="start"][data-module="sprechen"]')`);
    await click('#kx-consent'); await click('[data-act="start"][data-module="sprechen"]');
    await waitFor(`/^Vorbereitung/.test(document.querySelector('#kx-phase')?.textContent || '')`, 30000, 'preparation');
    await evaluate(`document.querySelector('input[type=radio][value="t1"]').click()`);
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 15000, 'topic saved');
    await dev.env.DB.prepare("UPDATE attempt_modules SET started_at = started_at - 118000, deadline_at = deadline_at - 118000 WHERE module = 'sprechen'").run();
    await send('Page.reload');
    await waitFor(`/^Teil 1: Aufnahme läuft/.test(document.querySelector('#kx-phase')?.textContent || '')`, 40000, 'Teil 1 recording');
    for (const t0 = Date.now(); (await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM recording_chunks').first()).n < 1; ) { if (Date.now() - t0 > 20000) throw new Error('no recording'); await sleep(250); }
    await submitModule();
    await waitFor(`document.querySelector('[data-act="complete"]')`, 20000, 'complete screen'); await click('[data-act="complete"]');

    // ---- result + item review tables ----
    await waitFor(`/Klarweg B1 Simulation – Ergebnis/.test(document.body.innerText) && document.querySelectorAll('.kx-review-items').length === 2`, 20000, 'result with reviews');
    let res = await text();
    assert.match(res, /Klarweg-Simulation – kein offizielles Ergebnis des Goethe-Instituts\./);
    assert.match(res, /richtig 10 · falsch 10 · ohne Antwort 10/); assert.match(res, /richtig 30 · falsch 0 · ohne Antwort 0/);
    const lesenRows = await evaluate(`[...document.querySelectorAll('.kx-review-items')[0].querySelectorAll('tbody tr:not(.kx-rv-explain)')].map((tr) => [tr.querySelector('th').textContent, tr.querySelector('.kx-rv-status').textContent])`);
    assert.equal(lesenRows.length, 30);
    assert.deepEqual(lesenRows.map((x) => x[0]), Array.from({ length: 30 }, (_, i) => String(i + 1)), 'numbers as in the test');
    assert.deepEqual([lesenRows[0][1], lesenRows[14][1], lesenRows[24][1]], ['richtig', 'falsch', 'ohne Antwort']);
    assert.equal(await evaluate(`document.querySelectorAll('.kx-review-items')[0].querySelectorAll('.kx-rv-explain').length`), 30, 'Lesen: an explanation for every item');
    assert.equal(await evaluate(`document.querySelectorAll('.kx-review-items')[1].querySelectorAll('.kx-rv-explain q').length`), 30, 'Hören: evidence quoted for every item');
    assert.equal(await evaluate(`document.querySelectorAll('.kx-review-items')[0].querySelector('.kx-transcripts')`), null, 'no scripts for Lesen');
    await click('.kx-transcripts summary');
    assert.equal(await evaluate(`document.querySelectorAll('.kx-transcripts h3').length`), 8, 'Hören scripts after submission');
    assert.match(await text(), /Nora: Am Samstag ja\. Am Sonntag besuche ich meine Eltern\./);
    // the learner's own recordings: listed after submission, loaded only on request, never autoplayed
    assert.ok(await evaluate(`document.querySelectorAll('[data-act="my-recording"]').length >= 1`), 'own recordings listed');
    await click('[data-act="my-recording"]');
    await waitFor(`(() => { const a = document.querySelector('.kx-my-recordings audio'); return a && a.src.startsWith('blob:') && a.readyState >= 1; })()`, 15000, 'own recording loaded');
    assert.deepEqual(await evaluate(`(() => { const a = document.querySelector('.kx-my-recordings audio'); return [a.paused, a.autoplay]; })()`), [true, false]);
    assert.match(res, /Schreiben\s+–\s+in Bewertung/); assert.match(res, /Sprechen\s+–\s+in Bewertung/);
    await vp(390, 844, true); await sleep(300);
    assert.equal(await noHScroll(), true, 'result + review: no horizontal scroll on mobile'); await vp(1280, 800, false);

    // ---- unauthorized: an outsider and the learner on the rater screen and the API ----
    for (const alias of ['outsider', 'learner']) {
      await as(alias, 'rater.html');
      await waitFor(`/Kein Zugriff/.test(document.body.innerText)`, 10000, `${alias} refused`);
      r = await apiFetch('POST', '/admin/ratings', { attempt_id: attempt, item_id: 'sprechen:pron', round: 1, bands: { aussprache: 'A' } });
      assert.equal(r.status, 403, `${alias}: rating refused by the server`);
      r = await evaluate(`fetch('/exam/v1/admin/attempts/${attempt}/recordings/1/t1', { credentials: 'include' }).then((x) => x.status)`);
      assert.equal(r, 403, `${alias}: recording refused by the server`);
      assert.equal(/Lieber Tom/.test(await text()), false, `${alias} sees no learner text`);
    }
    assert.equal((await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM ratings').first()).n, 0);

    // ---- two raters ----
    for (const [alias, round] of [['rater1', 1], ['rater2', 2]]) {
      await as(alias, 'rater.html');
      await waitFor(`document.querySelector('[data-act="open"][data-attempt="${attempt}"]')`, 10000, `${alias} queue`);
      await click(`[data-act="open"][data-attempt="${attempt}"]`);
      await waitFor(`document.querySelectorAll('form.kx-rate').length === 7`, 10000, `${alias} rating forms`);
      assert.match(await text(), new RegExp(`Ihre Runde: ${round}`)); assert.match(await text(), /Lieber Tom/, 'the writing is shown to the rater');
      // the recording: loaded on request through the rater's own session, playable, no autoplay
      await click('[data-act="play"][data-part="1"][data-turn="t1"]');
      await waitFor(`(() => { const a = document.querySelector('.kx-play-cell audio'); return a && a.src.startsWith('blob:') && a.readyState >= 1; })()`, 15000, `${alias} recording loaded`);
      const audio = await evaluate(`(async () => { const a = document.querySelector('.kx-play-cell audio'); const b = await (await fetch(a.src)).blob(); return { size: b.size, type: b.type, paused: a.paused, autoplay: a.autoplay }; })()`);
      assert.ok(audio.size > 0 && /^audio\/webm/.test(audio.type) && audio.paused && !audio.autoplay, `recording playable: ${JSON.stringify(audio)}`);
      if (round === 1) {
        // validation: an incomplete form is not sent
        await evaluate(`document.querySelector('form.kx-rate button[type=submit]').click()`);
        await waitFor(`/Bitte für jedes Kriterium/.test(document.querySelector('form.kx-rate .kx-rate-msg').textContent)`, 5000, 'validation message');
        assert.equal((await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM ratings').first()).n, 0, 'nothing stored for an incomplete form');
        // keyboard: Tab reaches the band selects and the save buttons
        await evaluate('document.activeElement && document.activeElement.blur()');
        let reached = false;
        for (let i = 0; i < 40 && !reached; i++) { await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 }); await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 }); reached = await evaluate(`document.activeElement && document.activeElement.matches('form.kx-rate select')`); }
        assert.ok(reached, 'band selects are reachable by keyboard');
      }
      for (let i = 0; i < 7; i++) {
        await evaluate(`(() => { const f = [...document.querySelectorAll('form.kx-rate')].find((x) => !x.querySelector('button[type=submit]').disabled);
          f.querySelectorAll('select').forEach((s) => { s.value = 'B'; }); f.querySelector('button[type=submit]').click(); })()`);
        await waitFor(`/Gespeichert: [\\d,]+ Punkte \\(Runde ${round}\\)/.test(document.body.innerText) && document.querySelectorAll('form.kx-rate button[type=submit]:not([disabled])').length === ${6 - i}`, 10000, `${alias} saved ${i + 1}`);
      }
      assert.equal((await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM ratings WHERE round = ?1').bind(round).first()).n, 7);
      await vp(390, 844, true); await sleep(300); assert.equal(await noHScroll(), true, 'rater screen: no horizontal scroll on mobile'); await vp(1280, 800, false);
    }
    await as('rater2', 'rater.html'); await waitFor(`!/data-attempt="${attempt}"/.test(document.body.innerHTML) && /Keine Versuche warten/.test(document.body.innerText)`, 10000, 'queue empty after final');

    // ---- learner: final result reflects the ratings ----
    await as('learner', '');
    await waitFor(`document.querySelector('[data-act="last-result"][data-attempt="${attempt}"]')`, 15000, 'last result link'); await click('[data-act="last-result"]');
    await waitFor(`/Klarweg B1 Simulation – Ergebnis/.test(document.body.innerText)`, 15000, 'learner result');
    res = await text();
    assert.equal(/in Bewertung/.test(res), false, 'nothing awaits rating any more');
    const final = (await dev.env.DB.prepare("SELECT module, points FROM module_scores WHERE module IN ('schreiben','sprechen') AND status = 'final' ORDER BY module").all()).results;
    assert.equal(final.length, 2);
    for (const f of final) assert.match(res, new RegExp(`${f.module === 'schreiben' ? 'Schreiben' : 'Sprechen'}\\s+${f.points} / 100`));
    const exceptions = b.events.filter((e) => e.method === 'Runtime.exceptionThrown').map((e) => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text);
    log('practice P1', 'PASS', { lesen: '10/10/10', hoeren: '30/30', ratings: 14, final: final.map((f) => `${f.module}:${f.points}`) });
    return exceptions;
  } finally { b.close(); dev.server.close(); }
}

const VIEWPORTS = [{ name: 'desktop 1280×800', w: 1280, h: 800, mobile: false }, { name: 'mobile 390×844', w: 390, h: 844, mobile: true }];
const SCENARIOS = [['flagged', run, ''], ['autoplay', runDefaultAutoplay, ' (default autoplay policy)'], ['hoeren-autoplay', runDefaultAutoplayHoeren, ' (default autoplay policy, Hören)'], ['practice', runPractice, '']];
if (ONLY && !SCENARIOS.some(([n]) => n === ONLY)) { console.error(`unknown KX_E2E_ONLY=${ONLY}`); process.exit(2); }
for (const [name, fn, suffix] of SCENARIOS) {
  if (ONLY && name !== ONLY) continue;
  if (name === 'practice') { results.push({ vp: 'practice P1 (desktop + mobile checks)', uncaught: await fn() }); continue; }
  for (const vp of VIEWPORTS) results.push({ vp: vp.name + suffix, uncaught: await fn(vp) });
}
console.log(JSON.stringify(results));
if (results.some((r) => r.uncaught.length)) process.exit(1);
