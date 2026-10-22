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
   KX_E2E_ONLY=flagged|autoplay|hoeren-autoplay|practice|sprechen-topic|lease-expiry|two-tabs|rater-2fa|lesen-only|part-practice|access-admin|precheck|review-form runs one scenario). A fourth scenario runs one complete attempt on
   the synthetic PRACTICE form P1 (KX_E2E_FORM=p2…p15 for another form) plus rating by two raters (see runPractice).
   Chrome always runs with --mute-audio. */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import { startDevServer } from './dev-server.mjs';
import { call, rid, pkgFor, syntheticBuild, PRACTICE_LIBRARY } from './harness.mjs';
import { speakingSchedule } from '../../exam/js/sprechen.js';
import { hotp, base32Decode, stepAt } from '../../access/worker/src/totp.js';
import { post, start, submit, submit as apiSubmit, uploadChunk, runSchreiben, runSprechen, complete } from './flow.mjs';
import { writeReviewForms } from '../../exam-content/tools/review-form.mjs';
import { checkFile } from '../../exam-content/tools/review-status.mjs';

const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
/* CHROME_ARGS: extra flags for CI runners (e.g. --no-sandbox on Ubuntu 24.04, where unprivileged user namespaces are
   restricted). Never needed locally. */
const CHROME_ARGS = (process.env.CHROME_ARGS || '').split(/\s+/).filter(Boolean);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => console.log('[browser-e2e]', ...a);
/* waitFor polling only (read-only checks): a page that is navigating or reloading answers "target navigated or closed" /
   "execution context destroyed" for a moment. That is "not yet", not a failure; poll again. Side-effecting evaluations
   (clicks) never go through here, so nothing can run twice. */
const NAVIGATING = /Inspected target navigated or closed|Execution context was destroyed|Cannot find context with specified id/;
async function probe(evaluate, expr) {
  try { return await evaluate(expr); } catch (e) { if (NAVIGATING.test(String(e && e.message))) return false; throw e; }
}

/* Chrome start-up on a cold CI runner has taken more than 10 s (DevToolsActivePort missing, run 39261898074). Wait up to
   30 s, stop early if Chrome exits, and retry the start once: this is browser start-up, never a test assertion. */
const LAUNCH_WAIT_MS = 30000;
async function startChrome({ autoplayFlag }) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-chrome-'));
  const proc = spawn(CHROME, [...CHROME_ARGS, '--headless=new', '--mute-audio', '--disable-gpu', '--no-first-run', '--no-default-browser-check', `--user-data-dir=${dir}`,
    '--remote-debugging-port=0', ...(autoplayFlag ? ['--autoplay-policy=no-user-gesture-required'] : []), '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream',
    'about:blank'], { stdio: ['ignore', 'ignore', 'pipe'] });
  let stderr = ''; let exited = null;
  proc.stderr.on('data', (d) => { stderr = (stderr + d).slice(-2000); });
  proc.on('exit', (code, signal) => { exited = signal || code; });
  const portFile = path.join(dir, 'DevToolsActivePort');
  const t0 = Date.now();
  // the port file is written in two lines; wait until the first line is a port number
  const readPort = () => { try { const p = fs.readFileSync(portFile, 'utf8').split('\n')[0]; return /^\d+$/.test(p) ? p : null; } catch { return null; } };
  let port = null;
  while (!(port = readPort()) && exited === null && Date.now() - t0 < LAUNCH_WAIT_MS) await sleep(100);
  if (port) return { proc, dir, port };
  proc.kill();
  throw new Error(`Chrome did not start within ${Date.now() - t0} ms (exit: ${exited}); stderr tail:\n${stderr}`);
}

async function launch({ autoplayFlag = true } = {}) {
  let started;
  try { started = await startChrome({ autoplayFlag }); }
  catch (e) { console.log(`[e2e] ${e.message}\n[e2e] retrying Chrome start once`); started = await startChrome({ autoplayFlag }); }
  const { proc, dir, port } = started;
  const targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const page = targets.find((t) => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r, { once: true }));
  let id = 0; const pending = new Map(); const events = [];
  ws.addEventListener('message', (m) => {
    const msg = JSON.parse(m.data);
    if (msg.id && pending.has(msg.id)) { const { resolve, reject, timer } = pending.get(msg.id); clearTimeout(timer); pending.delete(msg.id); msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result); }
    else if (msg.method) {
      events.push(msg);
      // a JavaScript dialog (e.g. the leave warning while an answer is still being saved) blocks every further CDP
      // navigation; accept it in every scenario instead of hanging until the CI job times out (still recorded in events)
      if (msg.method === 'Page.javascriptDialogOpening') ws.send(JSON.stringify({ id: ++id, method: 'Page.handleJavaScriptDialog', params: { accept: true } }));
    }
  });
  /* every CDP call fails after SEND_TIMEOUT_MS with its method name: a stuck browser is a clear failure, not a hang */
  const SEND_TIMEOUT_MS = Number(process.env.KX_E2E_SEND_TIMEOUT_MS || 120_000);
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const i = ++id;
    const timer = setTimeout(() => { if (pending.delete(i)) reject(new Error(`CDP ${method} did not answer within ${SEND_TIMEOUT_MS} ms`)); }, SEND_TIMEOUT_MS);
    pending.set(i, { resolve, reject, timer }); ws.send(JSON.stringify({ id: i, method, params }));
  });
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
      while (Date.now() - t0 < ms) { if (await probe(evaluate, `(() => { try { return !!(${fnSrc}); } catch { return false; } })()`)) return; await sleep(200); }
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
    // Lesen parts are tabs (GOETHE-B1-DIGITAL §4): one tab per part, each controlling an existing panel; Teil 1 open
    const navLinks = await evaluate(`[...document.querySelectorAll('[role="tab"]')].map((t) => '#' + t.getAttribute('aria-controls'))`);
    assert.ok(navLinks.length >= 2, 'part tabs shown');
    assert.equal(await evaluate(`${JSON.stringify(navLinks)}.every((h) => document.querySelector(h)?.getAttribute('role') === 'tabpanel')`), true, 'every tab controls a panel');
    assert.equal(await evaluate(`[...document.querySelectorAll('#kx-main .kx-part')].filter((p) => !p.hidden).length`), 1, 'one part shown at a time');
    const total = Number(/von (\d+) beantwortet/.exec(await evaluate(`document.querySelector('.kx-progress').textContent`))[1]);
    assert.match(await evaluate(`document.querySelector('.kx-progress').textContent`), /^0 von \d+ beantwortet$/);
    // the first "Modul abgeben" opens the review — nothing is submitted; it lists the unanswered items with working links
    await click('[data-act="submit"]');
    await waitFor(`document.querySelector('#kx-review')`, 5000, 'review panel');
    assert.equal(await evaluate(`document.activeElement && document.activeElement.id`), 'kx-review-title', 'focus moves to the review');
    assert.match(await evaluate(`document.querySelector('.kx-review-summary').textContent`), new RegExp(`^${total} von ${total} Aufgaben sind noch ohne Antwort`));
    assert.equal(await evaluate(`[...document.querySelectorAll('#kx-review a[data-review-jump]')].every((a) => document.querySelector(a.getAttribute('href')))`), true);
    // a review link into another part opens that part (tab) and lands on the item
    const jumped = await evaluate(`(() => { const a = [...document.querySelectorAll('#kx-review a[data-review-jump]')].at(-1); const it = document.querySelector(a.getAttribute('href')); a.click();
      const part = it.closest('.kx-part'); return { part: part.dataset.part, shown: !part.hidden, selected: document.querySelector('[role="tab"][aria-selected="true"]').dataset.tab }; })()`);
    assert.ok(jumped.shown && jumped.selected === jumped.part && jumped.part !== '1', `review jump opens its part: ${JSON.stringify(jumped)}`);
    await click('[role="tab"][data-tab="1"]'); await sleep(200);
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
    // OD-04: an optional break of up to 15 minutes between written modules, counting down, never starting anything
    await waitFor(`document.body.innerText.includes('Pause (freiwillig)') && /^1[45]:[0-9][0-9]$/.test(document.querySelector('.kx-break-time')?.textContent || '')`, 5000, 'break before Hören');
    { const intro = await text(); assert.match(intro, /ca\. \d+ Minuten? · 4 Teile · \d+ Aufgaben/); assert.match(intro, /Die Teile erscheinen nacheinander/); }
    // ENGINE §10: no Hören start before the audio check; then the tone is played and confirmed
    await click('[data-act="start"][data-module="hoeren"]');
    await waitFor(`/bestätigen Sie, dass Sie ihn gehört haben/.test(document.querySelector('#kx-tone-msg')?.textContent || '')`, 5000, 'start refused before the audio check');
    assert.equal(await evaluate(`document.querySelector('[data-act="start"][data-module="hoeren"]') !== null`), true, 'still on the intro');
    await click('[data-act="tone-play"]'); await waitFor(`/Testton abgespielt/.test(document.querySelector('#kx-tone-msg')?.textContent || '')`, 15000, 'test tone'); await click('#kx-tone-heard');
    await click('[data-act="start"][data-module="hoeren"]');
    await waitFor(`/Sie hören den Text|Lesen Sie die Aufgaben/.test(document.querySelector('#kx-phase')?.textContent || '')`, 30000, 'Hören schedule running');
    // F2: only Teil 1 is in the DOM; future parts' items/text are absent (not merely hidden)
    await waitFor(`document.querySelectorAll('#kx-main .kx-part').length === 1`, 10000, 'Teil 1 rendered');
    const dom = await evaluate('document.documentElement.outerHTML');
    assert.equal(/syn-h[234]-|data-part="[234]"/.test(dom), false, 'future Hören parts must not be in the DOM');
    // the playback status stays in view while the learner is scrolled down to the questions (sticky bar)
    await evaluate(`window.scrollTo(0, document.body.scrollHeight)`); await sleep(300);
    const live = await evaluate(`(() => { const p = document.getElementById('kx-phase'); const r = p.getBoundingClientRect(); return { inBar: !!p.closest('.kx-bar'), text: p.textContent.trim().length > 0, visible: r.top >= 0 && r.bottom <= innerHeight }; })()`);
    assert.deepEqual(live, { inBar: true, text: true, visible: true }, `Hören status visible while scrolled (${viewport.name})`);
    await evaluate(`window.scrollTo(0, 0)`);
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
    assert.match(await text(), /Pause \(freiwillig\)/, 'break before Schreiben');
    await click('[data-act="start"][data-module="schreiben"]');
    await waitFor(`document.querySelector('textarea')`, 15000, 'editor');
    await evaluate(`(() => { const t = document.querySelector('textarea'); t.focus(); t.value = 'Liebe Grüße aus der Straße '; t.dispatchEvent(new Event('input', { bubbles: true })); })()`);
    await click('.kx-char[data-insert="ä"]');
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 15000, 'Schreiben autosaved');
    // OD-06 paste policy (internal_only): an outside paste is refused with a note and logged (no text); a paste of text
    // copied inside the editor goes through
    const pasteRes = await evaluate(`(() => { const t = document.querySelector('textarea'); const before = t.value;
      const paste = (txt) => { const dt = new DataTransfer(); dt.setData('text/plain', txt); const ev = new ClipboardEvent('paste', { clipboardData: dt, bubbles: true, cancelable: true }); t.dispatchEvent(ev); return ev.defaultPrevented; };
      const outside = paste('Text aus dem Internet');
      t.focus(); t.setSelectionRange(0, 5); t.dispatchEvent(new ClipboardEvent('copy', { bubbles: true, cancelable: true }));
      const inside = paste(before.slice(0, 5));
      return { outside, inside, unchanged: t.value === before, note: document.querySelector('#kx-announce').textContent }; })()`);
    assert.deepEqual([pasteRes.outside, pasteRes.inside, pasteRes.unchanged], [true, false, true], JSON.stringify(pasteRes));
    assert.match(pasteRes.note, /Einfügen von außerhalb der Prüfung ist hier nicht möglich/);
    for (const t0 = Date.now(); !(await dev.env.DB.prepare("SELECT COUNT(*) AS n FROM audit_log WHERE action = 'writing_integrity'").first()).n; await sleep(200)) if (Date.now() - t0 > 10000) throw new Error('paste attempt not logged');
    assert.deepEqual(JSON.parse((await dev.env.DB.prepare("SELECT detail_json FROM audit_log WHERE action = 'writing_integrity'").first()).detail_json).length, 21, 'only the length is logged');
    // recovery: reload the tab mid-module
    await evaluate('window.__beforeReload = true');
    await send('Page.reload');
    await waitFor(`!window.__beforeReload && document.querySelector('[data-wc-for]') && document.querySelector('textarea') && document.querySelector('textarea').value.startsWith('Liebe Grüße aus der Straße ä')`, 15000, 'text recovered after reload');
    assert.match(await evaluate(`document.querySelector('[data-wc-for]').textContent`), /^[56]$/);
    // the submission review flags a text under half the target length with the official 0-points note (ENGINE §9)
    await click('[data-act="submit"]'); await waitFor(`document.querySelector('.kx-review')`, 5000, 'Schreiben review');
    assert.ok((await evaluate(`document.querySelectorAll('.kx-review-warn').length`)) >= 1, 'short text flagged');
    assert.match(await evaluate(`document.querySelector('.kx-review').textContent`), /Unter 50 % der Wortzahl wird die Aufgabe mit 0 Punkten bewertet/);
    assert.match(await text(), /Empfohlene Zeit: ca\. \d+ Minuten/, 'Schreiben shows the advisory time per part');
    await click('[data-act="review-close"]');
    await submitModule();

    await waitFor(`document.querySelector('[data-act="start"][data-module="sprechen"]')`, 15000, 'Sprechen intro');
    assert.equal(/Pause \(freiwillig\)/.test(await text()), false, 'no break before the oral module');
    // ENGINE §10: no Sprechen start before the microphone check; the fake microphone passes it
    await click('#kx-consent'); await click('[data-act="start"][data-module="sprechen"]');
    await waitFor(`/Bitte testen Sie zuerst Ihr Mikrofon/.test(document.querySelector('#kx-mic-msg')?.textContent || '')`, 5000, 'start refused before the microphone check');
    await click('[data-act="mic-test"]'); await waitFor(`/Mikrofon funktioniert/.test(document.querySelector('#kx-mic-msg')?.textContent || '')`, 15000, 'microphone check');
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
    // SPEAKING §2 Teil 2 slides: one deck per topic, one slide at a time, advanced by the learner (S0 options are not
    // "Thema n: …", so its decks are not linked to a topic and both stay)
    const deck = (n) => evaluate(`(() => { const d = document.querySelectorAll('.kx-deck')[${n}]; return { shown: !d.hidden, pos: d.querySelector('.kx-deck-pos').textContent, visible: [...d.querySelectorAll('.kx-slide')].filter((x) => !x.hidden).length,
      prev: d.querySelector('[data-act="slide-prev"]').disabled, next: d.querySelector('[data-act="slide-next"]').disabled, focus: (document.activeElement && document.activeElement.dataset.act) || null }; })()`);
    assert.equal(await evaluate(`document.querySelectorAll('.kx-deck').length`), 2, 'two slide decks');
    assert.deepEqual(await deck(0), { shown: true, pos: 'Folie 1 von 5', visible: 1, prev: true, next: false, focus: null });
    for (let i = 0; i < 4; i++) { await evaluate(`(() => { const b = document.querySelectorAll('.kx-deck')[0].querySelector('[data-act="slide-next"]'); b.focus(); b.click(); })()`); }
    const end = await deck(0);
    assert.deepEqual(end, { shown: true, pos: 'Folie 5 von 5', visible: 1, prev: false, next: true, focus: 'slide-prev' }, 'last slide: forward disabled, focus moved to back');
    await evaluate(`document.activeElement.click()`);
    assert.equal((await deck(0)).pos, 'Folie 4 von 5');
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
    // the Teil 2 recording's last chunk may still be uploading when the partner phase begins: count only once that turn
    // is finalised, so a late Teil 2 chunk is never mistaken for a recording during the presentation
    for (const t2 = Date.now(); ; ) {
      const open = (await dev.env.DB.prepare("SELECT COUNT(*) AS n FROM recording_turns WHERE part = 2 AND status != 'complete'").first()).n;
      if (!open) break;
      if (Date.now() - t2 > 10000) throw new Error('Teil 2 turn not finalised before the partner presentation');
      await sleep(200);
    }
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
      while (Date.now() - t0 < ms) { if (await probe(evaluate, `(() => { try { return !!(${src}); } catch { return false; } })()`)) return; await sleep(100); }
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
      while (Date.now() - t0 < ms) { if (await probe(evaluate, `(() => { try { return !!(${src}); } catch { return false; } })()`)) return; await sleep(100); }
      throw new Error(`timeout: ${label}\n${(await evaluate('document.body.innerText')).slice(0, 600)}`);
    };
    await send('Page.addScriptToEvaluateOnNewDocument', { source: `window.__gains = []; { const cg = (window.AudioContext || window.webkitAudioContext).prototype.createGain;
      (window.AudioContext || window.webkitAudioContext).prototype.createGain = function () { const g = cg.apply(this, arguments); window.__gains.push(g); return g; }; }` });
    // AUDIO-SPEC A3: the first audio download fails → a retry is offered in the page (no error screen); "Erneut laden"
    // loads only what is missing and the module continues. (The schedule already runs here, so no incident is expected.)
    const fromEv = b.events.length; let failedOnce = false;
    await send('Fetch.enable', { patterns: [{ urlPattern: '*/exam/v1/media/*', requestStage: 'Request' }] });
    const pump = setInterval(() => { for (const e of b.events.slice(fromEv)) if (e.method === 'Fetch.requestPaused' && !e.__done) {
      e.__done = true;
      if (!failedOnce) { failedOnce = true; send('Fetch.failRequest', { requestId: e.params.requestId, errorReason: 'ConnectionFailed' }).catch(() => {}); }
      else send('Fetch.continueRequest', { requestId: e.params.requestId }).catch(() => {});
    } }, 50);
    await send('Page.navigate', { url: `http://127.0.0.1:${dev.port}/exam/` });
    await waitFor(`document.querySelector('[data-act="hoeren-reload"]')`, 20000, '"Erneut laden" offered after a failed download');
    const pre = await evaluate(`({ phase: document.querySelector('#kx-phase').textContent, alert: document.querySelector('#kx-alerts [data-kind="preload"]').getAttribute('role'),
      text: document.querySelector('#kx-alerts [data-kind="preload"] p').textContent, focus: document.activeElement && document.activeElement.dataset.act, error: !!document.querySelector('.kx-error') })`);
    assert.ok(pre.phase === 'Die Hördateien konnten nicht geladen werden.' && pre.alert === 'alert' && /Ihre Antworten bleiben erhalten/.test(pre.text) && pre.focus === 'hoeren-reload' && !pre.error, `${viewport.name}: preload retry offered ${JSON.stringify(pre)}`);
    await evaluate(`document.querySelector('[data-act="hoeren-reload"]').click()`);
    await waitFor(`!document.querySelector('#kx-alerts [data-kind="preload"]')`, 20000, 'preload alert cleared after the retry');
    clearInterval(pump); await send('Fetch.disable');
    assert.equal((await dev.env.DB.prepare("SELECT COUNT(*) AS n FROM incidents WHERE kind = 'listening_preload_failed'").first()).n, 0, 'no incident once the schedule runs');

    // 1. blocked audio does not block the module: prompt shown, Teil 2 opens, answers save, nothing is played
    await waitFor(`document.querySelector('[data-act="audio-start"]')`, 15000, '"Audio starten" offered (Hören)');
    // AUDIO-SPEC A4: the only control is a master volume in the sticky bar; it changes the gain, nothing else
    const vol = await evaluate(`(() => { const r = document.getElementById('kx-volume'); const before = { value: r.value, inBar: !!r.closest('.kx-bar'), label: r.labels[0].textContent, text: r.getAttribute('aria-valuetext') };
      r.value = '40'; r.dispatchEvent(new Event('input', { bubbles: true }));
      return { before, text: r.getAttribute('aria-valuetext'), shown: r.parentElement.querySelector('.kx-volume-val').textContent, stored: localStorage.getItem('kx-volume'),
        gains: window.__gains.map((g) => Math.round(g.gain.value * 100) / 100), noH: document.documentElement.scrollWidth <= innerWidth + 1 }; })()`);
    assert.ok(vol.before.value === '100' && vol.before.inBar && vol.before.label === 'Lautstärke' && vol.before.text === '100 %' && vol.text === '40 %' && vol.shown === '40 %'
      && vol.stored === '0.4' && vol.gains.includes(0.4) && vol.noH, `${viewport.name}: Hören volume ${JSON.stringify(vol)}`);
    await waitFor(`document.querySelector('.kx-part[data-part="2"]')`, 8000, 'Teil 2 rendered without a click');
    assert.equal(await evaluate(`document.querySelector('[data-act="audio-start"]').closest('[role="alert"]') !== null`), true, 'accessible alert');
    assert.equal(await evaluate(`document.activeElement && document.activeElement.dataset.act`), 'audio-start', 'the action receives focus');
    await evaluate(`(() => { const r = document.querySelector('.kx-part[data-part="1"] input[type=radio]:not([disabled])'); r.click(); })()`);
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 8000, 'answer saved while audio is blocked');
    assert.equal((await plays()).length, before, 'nothing played or recovered before the click');

    // 2. one click: the owed recovery replay plays first, then the next normal plays follow without overlapping it
    await evaluate(`document.querySelector('[data-act="audio-start"]').click()`, true);
    await waitFor(`!document.querySelector('[data-act="audio-start"]')`, 4000, 'prompt disappears after the click');
    // the Teil 2 preread of the synthetic plan is only 2 s: on a slow runner the page may arrive after the Teil 2 text has
    // started, so the next normal play is the then-current one — Teil 2 text or later, never anything from Teil 1
    for (const t1 = Date.now(); !(await plays()).slice(before).some((p) => p.kind === 'normal' && p.phase_seq >= T2PLAY.seq); ) {
      if (Date.now() - t1 > 15000) throw new Error('no normal play at or after the Teil 2 text: ' + JSON.stringify(await plays()));
      await sleep(200);
    }
    const after = (await plays()).slice(before);
    const rec = after.find((p) => p.kind === 'recovery');
    assert.ok(rec && rec.phase_seq === LAST.seq, 'recovery replay of the interrupted last play: ' + JSON.stringify(after));
    assert.equal(after[0].kind, 'recovery', 'the recovery replay is the first play after the click');
    const nextNormal = after.find((p) => p.kind === 'normal');
    assert.ok(rec.ended_at !== null && nextNormal.started_at >= rec.ended_at, 'the next normal play starts after the replay ended');
    assert.ok(nextNormal.phase_seq >= T2PLAY.seq, `no Teil 1 phase is played again after the click: ${JSON.stringify(after)}`);
    assert.equal(after.filter((p) => p.kind === 'recovery').length, 1);
    const uncaught = b.events.filter((e) => e.method === 'Runtime.exceptionThrown').map((e) => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text);
    log(viewport.name, 'DEFAULT autoplay HÖREN PASS', { after_click: after.map((p) => `${p.kind}:${p.phase_seq}`) });
    return uncaught;
  } finally {
    b.close(); dev.server.close();
  }
}

/* Automated accessibility audit of the screen as rendered (EX-04 is the manual audit; this does not replace it): every
   interactive node in Chrome's accessibility tree has a name; no duplicate ids; lang set; one h1; and real Tab key
   presses land on elements that show a visible focus indicator. Findings are collected; the caller asserts them. */
function makeA11y({ send, evaluate }) {
  const a11yFindings = [], a11yScreens = [];
  const INTERACTIVE = new Set(['button', 'link', 'textbox', 'radio', 'checkbox', 'combobox', 'slider', 'spinbutton', 'searchbox', 'listbox', 'switch', 'tab', 'menuitem']);
  const within = (p, ms, what) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error(`a11y step timed out: ${what}`)), ms))]);
  const a11y = async (label, opts = {}) => {
    if (process.env.KX_E2E_NO_A11Y) return;
    try { await within(a11yScreen(label, opts), 30000, label); } catch (e) { a11yFindings.push(`${label}: ${e.message}`); }
    // leave nothing behind: an enabled Accessibility domain makes Chrome rebuild the tree on every DOM change (the
    // ticking Sprechen screen then stalls), and Tab presses may have moved focus out of the page
    await within(send('Accessibility.disable'), 5000, 'Accessibility.disable').catch(() => {});
    await evaluate('document.activeElement && document.activeElement.blur && document.activeElement.blur(), window.focus(), true').catch(() => {});
    if (process.env.KX_E2E_VERBOSE) console.log('[browser-e2e] a11y findings so far', JSON.stringify(a11yFindings));
    if (process.env.KX_E2E_VERBOSE) console.log('[browser-e2e] a11y done', label, new Date().toISOString());
  };
  /* The audit must be able to fail: inject an unnamed button and a duplicate id, require both findings, remove them. */
  const a11ySelfCheck = async () => {
    await evaluate(`(() => { const d = document.createElement('div'); d.id = 'kx-a11y-probe';
      d.innerHTML = '<button type="button"></button><span id="kx-probe-dup"></span><span id="kx-probe-dup"></span>'; document.body.appendChild(d); return true; })()`);
    const before = a11yFindings.length;
    await a11y('self-check', { tabs: 0 });
    const got = a11yFindings.splice(before);
    a11yScreens.splice(a11yScreens.indexOf('self-check'), 1);
    await evaluate(`(document.getElementById('kx-a11y-probe').remove(), true)`);
    assert.ok(got.some((f) => /button without an accessible name/.test(f)) && got.some((f) => /duplicate id "kx-probe-dup"/.test(f)), `a11y audit self-check failed: ${JSON.stringify(got)}`);
  };
  const a11yScreen = async (label, { tabs = 12 } = {}) => {
    a11yScreens.push(label);
    if (process.env.KX_E2E_VERBOSE) console.log('[browser-e2e] a11y', label, new Date().toISOString());
    await within(send('Accessibility.enable'), 5000, 'Accessibility.enable');
    const { nodes } = await within(send('Accessibility.getFullAXTree'), 5000, 'getFullAXTree');
    for (const n of nodes) {
      if (n.ignored || !INTERACTIVE.has(n.role?.value)) continue;
      if (!String(n.name?.value || '').trim()) a11yFindings.push(`${label}: ${n.role.value} without an accessible name`);
    }
    const page = await evaluate(`(() => { const ids = [...document.querySelectorAll('[id]')].map((e) => e.id);
      return { lang: document.documentElement.lang, dup: [...new Set(ids.filter((x, i) => ids.indexOf(x) !== i))], h1: document.querySelectorAll('h1').length }; })()`);
    if (!page.lang) a11yFindings.push(`${label}: no lang on <html>`);
    for (const d of page.dup) a11yFindings.push(`${label}: duplicate id "${d}"`);
    if (page.h1 !== 1) a11yFindings.push(`${label}: ${page.h1} h1 elements`);
    await evaluate('document.activeElement && document.activeElement.blur && document.activeElement.blur()');
    for (let i = 0; i < tabs; i++) {
      for (const type of ['keyDown', 'keyUp']) await within(send('Input.dispatchKeyEvent', { type, key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 }), 5000, `Tab ${i + 1} ${type}`);
      const f = await evaluate(`(() => { const e = document.activeElement; if (!e || e === document.body) return null; const st = getComputedStyle(e);
        return { what: e.tagName.toLowerCase() + (e.dataset.act ? '[' + e.dataset.act + ']' : '') + (e.type ? ':' + e.type : ''), visible: (st.outlineStyle !== 'none' && parseFloat(st.outlineWidth) > 0) || st.boxShadow !== 'none' }; })()`);
      if (f && !f.visible) a11yFindings.push(`${label}: keyboard focus on ${f.what} is not visible`);
    }
  };
  return { a11y, selfCheck: a11ySelfCheck, findings: a11yFindings, screens: a11yScreens };
}

const results = [];
const ONLY = process.env.KX_E2E_ONLY || '';
/* KX_E2E_FORM=p1…p15 picks the practice form for the practice scenario (default p1) */
const PRACTICE = PRACTICE_LIBRARY.find((f) => f.name.toLowerCase() === (process.env.KX_E2E_FORM || 'p1').toLowerCase());
if (!PRACTICE) { console.error(`unknown KX_E2E_FORM=${process.env.KX_E2E_FORM}`); process.exit(2); }
const PRACTICE_ASSETS = JSON.parse(fs.readFileSync(path.join(PRACTICE.dir, 'assets.json'), 'utf8'));
const PRACTICE_L1_START = PRACTICE_ASSETS.find((a) => a.id.endsWith('-l1-text')).text.body_md.split('\n')[0];
const PRACTICE_H3_LAST = PRACTICE_ASSETS.find((a) => a.id.endsWith('-h3')).script_de.split('\n').pop();   // shown only in the post-submission review
/* PRACTICE (form P1 or KX_E2E_FORM, realistic synthetic content): one complete attempt as learner, then rating as two raters, in one
   headless, muted browser. Proves: Lesen autosave; the item review is refused before and exact after submission; full
   Hören playback; Schreiben; Sprechen recording; result + review tables; outsider and learner refused on the rater
   screen and API; rater validation and keyboard reach; two raters → final scores on the learner's result; mobile
   layout without horizontal scroll; no uncaught errors. Users are the dev server's local test users (cookie). */
async function runPractice() {
  const dev = await startDevServer({ form: PRACTICE.name.toLowerCase() });
  const b = await launch();
  const { send } = b;
  let dialogWatch = null;
  try {
    await send('Runtime.enable'); await send('Page.enable'); await send('Log.enable');   // Log: CSP violations are reported there
    const evaluate = async (expr) => {
      const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
      if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
      return r.result.value;
    };
    const text = () => evaluate('document.body.innerText');
    const waitFor = async (src, ms = 15000, label = src) => {
      const t0 = Date.now();
      while (Date.now() - t0 < ms) { if (await probe(evaluate, `(() => { try { return !!(${src}); } catch { return false; } })()`)) return; await sleep(250); }
      throw new Error(`timeout: ${label}\n--- page ---\n${(await text()).slice(0, process.env.KX_E2E_PAGE_CHARS ? Number(process.env.KX_E2E_PAGE_CHARS) : 600)}`);
    };
    const click = (sel) => evaluate(`document.querySelector(${JSON.stringify(sel)}).click()`);
    const vp = (w, h, mobile) => send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile });
    const base = `http://127.0.0.1:${dev.port}/exam/`;
    const as = async (alias, page = '') => { await send('Page.navigate', { url: base }); await waitFor('document.readyState === "complete"'); await evaluate(`document.cookie = 'kx-dev-as=${alias}; path=/'`); await send('Page.navigate', { url: base + page }); };
    const noHScroll = () => evaluate('document.documentElement.scrollWidth <= window.innerWidth + 1');
    /* Automated accessibility audit of the screen as rendered (EX-04 is the manual audit; this does not replace it):
       every interactive node in Chrome's accessibility tree has a name; no duplicate ids; lang set; one h1; and real
       Tab key presses land on elements that show a visible focus indicator. Findings are collected and asserted at the end. */
    /* JavaScript dialogs (e.g. the leave warning) block CDP navigation; record and accept them instead of hanging. */
    const dialogs = [];
    let seenEvents = 0;
    dialogWatch = setInterval(() => {
      for (; seenEvents < b.events.length; seenEvents++) {
        const ev = b.events[seenEvents];
        if (ev.method !== 'Page.javascriptDialogOpening') continue;
        dialogs.push({ type: ev.params.type, message: ev.params.message, url: ev.params.url });
        if (process.env.KX_E2E_VERBOSE) console.log('[browser-e2e] dialog', JSON.stringify(ev.params).slice(0, 200));
        send('Page.handleJavaScriptDialog', { accept: true }).catch(() => {});
      }
    }, 100);
    const { a11y, selfCheck: a11ySelfCheck, findings: a11yFindings, screens: a11yScreens } = makeA11y({ send, evaluate });
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
    assert.ok((await text()).includes(PRACTICE_L1_START), `realistic practice text is shown: ${PRACTICE_L1_START}`);
    if (!process.env.KX_E2E_NO_A11Y) await a11ySelfCheck();
    await a11y('Lesen');
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
    await a11y('Hören intro with audio check');
    await click('[data-act="tone-play"]'); await waitFor(`/Testton abgespielt/.test(document.querySelector('#kx-tone-msg')?.textContent || '')`, 15000, 'test tone'); await click('#kx-tone-heard');
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
    // Schreiben tasks are tabs (GOETHE-B1-DIGITAL §4 "Three task tabs"): Teil 1 open first; open Teil 2 for its post
    assert.deepEqual(await evaluate(`[...document.querySelectorAll('[role="tab"]')].map((t) => t.dataset.tab + ':' + t.getAttribute('aria-selected'))`), ['1:true', '2:false', '3:false']);
    await click('[role="tab"][data-tab="2"]'); await sleep(300);
    assert.equal(await evaluate(`document.activeElement && document.activeElement.id`), 'part-2', 'focus on the Teil 2 heading');
    // ENGINE §9.4: the Teil 2 forum post sits beside its editor at 1280 and above it on a phone (no horizontal scroll)
    const post = () => evaluate(`(() => { const sp = document.querySelectorAll('#kx-main .kx-split'); const s = sp[0]; if (!s) return { n: 0 };
      const t = s.querySelector('.kx-task-texts').getBoundingClientRect(), e = s.querySelector('textarea').getBoundingClientRect();
      return { n: sp.length, part: s.closest('.kx-part').dataset.part, beside: t.right <= e.left + 1, above: t.bottom <= e.top + 1, noH: document.documentElement.scrollWidth <= innerWidth + 1 }; })()`);
    const wideP = await post();
    assert.ok(wideP.n === 1 && wideP.part === '2' && wideP.beside && wideP.noH, `Schreiben post beside the editor: ${JSON.stringify(wideP)}`);
    await vp(360, 640, true); await sleep(300);
    const narrowP = await post(); await vp(1280, 800, false); await sleep(200);
    assert.ok(narrowP.above && narrowP.noH, `Schreiben post above the editor on a phone: ${JSON.stringify(narrowP)}`);
    await a11y('Schreiben');
    await evaluate(`[...document.querySelectorAll('textarea')].forEach((t, i) => { t.value = 'Lieber Tom, meine neue Wohnung ist hell und ruhig. Ich bin umgezogen, weil ich näher an der Arbeit wohnen wollte. Treffen wir uns am Samstag? Viele Grüße ' + i; t.dispatchEvent(new Event('input', { bubbles: true })); })`);
    // a real learner leaves each field: the browser then fires 'change' on the textarea (blur). That event must never
    // replace the text answer (non-prod acceptance A3 lost every Schreiben answer this way).
    await evaluate(`[...document.querySelectorAll('textarea')].forEach((t) => { t.focus(); t.blur(); t.dispatchEvent(new Event('change', { bubbles: true })); })`);
    // wait for the SERVER rows, not the "Gespeichert" label: all three answers stored as text
    for (const t0 = Date.now(); ; await sleep(200)) {
      const rows = (await dev.env.DB.prepare("SELECT value_json FROM responses_current WHERE module = 'schreiben'").all()).results.map((r) => JSON.parse(r.value_json));
      if (rows.length === 3 && rows.every((v) => typeof v.text === 'string' && v.text.startsWith('Lieber Tom') && !('option_id' in v))) break;
      if (Date.now() - t0 > 15000) throw new Error('Schreiben answers not stored as text after blur/change: ' + JSON.stringify(rows).slice(0, 300));
    }
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 15000, 'Schreiben autosaved');
    // switching task tabs never touches the texts
    const texts = () => evaluate(`[...document.querySelectorAll('textarea')].map((t) => t.value)`);
    const before = await texts();
    for (const n of [3, 1, 2]) { await click(`[role="tab"][data-tab="${n}"]`); await sleep(200); }
    assert.deepEqual(await texts(), before, 'texts unchanged after switching tabs');
    await submitModule();

    // ---- Sprechen: consent, preparation, skip to Teil 1 (test server time), record, submit ----
    await waitFor(`document.querySelector('[data-act="start"][data-module="sprechen"]')`);
    await a11y('Sprechen intro with microphone check', { tabs: 6 });
    await click('[data-act="mic-test"]'); await waitFor(`/Mikrofon funktioniert/.test(document.querySelector('#kx-mic-msg')?.textContent || '')`, 15000, 'microphone check');
    await click('#kx-consent'); await click('[data-act="start"][data-module="sprechen"]');
    await waitFor(`/^Vorbereitung/.test(document.querySelector('#kx-phase')?.textContent || '')`, 30000, 'preparation');
    await a11y('Sprechen preparation', { tabs: 6 });
    await evaluate(`document.querySelector('input[type=radio][value="t1"]').click()`);
    // the save indicator already reads "Gespeichert" before the click, so wait for the SERVER to hold the topic choice
    // (the reload below with an unsaved answer correctly triggers the leave warning)
    for (const t0 = Date.now(); ; await sleep(200)) {
      const row = await dev.env.DB.prepare("SELECT value_json FROM responses_current WHERE item_id LIKE '%-sp2-topic'").first();
      if (row && JSON.parse(row.value_json).option_id === 't1') break;
      if (Date.now() - t0 > 15000) throw new Error('topic choice never reached the server');
    }
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 15000, 'topic saved');
    await dev.env.DB.prepare("UPDATE attempt_modules SET started_at = started_at - 118000, deadline_at = deadline_at - 118000 WHERE module = 'sprechen'").run();
    await send('Page.reload');
    await waitFor(`/^Teil 1: Aufnahme läuft/.test(document.querySelector('#kx-phase')?.textContent || '')`, 40000, 'Teil 1 recording');
    for (const t0 = Date.now(); (await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM recording_chunks').first()).n < 1; ) { if (Date.now() - t0 > 20000) throw new Error('no recording'); await sleep(250); }
    await submitModule();
    await waitFor(`document.querySelector('[data-act="complete"]')`, 20000, 'complete screen'); await click('[data-act="complete"]');

    // ---- result + item review tables ----
    await waitFor(`/Klarweg B1 Simulation – Ergebnis/.test(document.body.innerText) && document.querySelectorAll('.kx-review-items').length === 2`, 20000, 'result with reviews');
    await a11y('result + item review');
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
    assert.ok((await text()).includes(PRACTICE_H3_LAST), `the Hören Teil 3 script is shown: ${PRACTICE_H3_LAST}`);
    // the learner's own recordings: listed after submission, loaded only on request, never autoplayed
    assert.ok(await evaluate(`document.querySelectorAll('[data-act="my-recording"]').length >= 1`), 'own recordings listed');
    await click('[data-act="my-recording"]');
    await waitFor(`(() => { const a = document.querySelector('.kx-my-recordings audio'); return a && a.src.startsWith('blob:') && a.readyState >= 1; })()`, 15000, 'own recording loaded');
    assert.deepEqual(await evaluate(`(() => { const a = document.querySelector('.kx-my-recordings audio'); return [a.paused, a.autoplay]; })()`), [true, false]);
    assert.match(res, /Schreiben\s+–\s+in Bewertung/); assert.match(res, /Sprechen\s+–\s+in Bewertung/);
    await vp(360, 640, true); await sleep(300);
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
      if (alias === 'rater1') await a11y('rater forms');
      assert.match(await text(), new RegExp(`Ihre Runde: ${round}`)); assert.match(await text(), /Lieber Tom/, 'the writing is shown to the rater');
      // Schreiben: each text sits in one pair with its own criteria form — side by side at 1280, stacked on a phone
      const pairs = async () => evaluate(`[...document.querySelectorAll('.kx-rate-pair')].map((p) => { const a = p.querySelector('.kx-written'), f = p.querySelector('form.kx-rate'); const ar = p.firstElementChild.getBoundingClientRect(), fr = f.getBoundingClientRect(); return { unit: f.dataset.unit, text: !!a, side: fr.left >= ar.right - 1, stacked: fr.top >= ar.bottom - 1 }; })`);
      const wide = await pairs();
      assert.ok(wide.length === 3 && wide.every((x) => x.text && x.side), `Schreiben pairs side by side: ${JSON.stringify(wide)}`);
      await vp(360, 640, true); await sleep(300);
      const narrow = await pairs(); await vp(1280, 800, false); await sleep(200);
      assert.ok(narrow.length === 3 && narrow.every((x) => x.stacked), `Schreiben pairs stacked on a phone: ${JSON.stringify(narrow)}`);
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
      // Real completion of a save = a FRESH render (the old <main> is marked stale before the click) in which that unit's
      // form shows as rated. The click disables the button at once and the previous "Gespeichert" text is still on the
      // page, so those two alone can pass before the save has finished.
      const saveUnits = (n) => evaluate(`(() => { document.querySelector('main').dataset.e2eStale = '1';
        return [...document.querySelectorAll('form.kx-rate')].filter((x) => !x.querySelector('button[type=submit]').disabled).slice(0, ${n}).map((f) => {
          f.querySelectorAll('select').forEach((s) => { s.value = 'B'; }); f.querySelector('button[type=submit]').click(); return f.dataset.unit; }); })()`);
      // rated = its form is disabled, or gone (a module that became final shows no forms)
      const savedFresh = (units) => `!document.querySelector('main').dataset.e2eStale && ${JSON.stringify(units)}.every((u) => { const b = document.querySelector('form.kx-rate[data-unit="' + u + '"] button[type=submit]'); return !b || b.disabled; })`;
      for (let done = 0; done < 7;) {
        let units;
        if (round === 2 && done === 0) {
          /* Deterministic overlap (regression for out-of-order re-renders): two saves at once; the re-render after the
             FIRST save gets a response computed before the second rating existed, and we deliver it LAST. The page
             must keep showing both units as rated. Requests are held with the DevTools Fetch domain. */
          const from = b.events.length, handled = new Set();
          const paused = async (re) => {
            for (const t0 = Date.now(); Date.now() - t0 < 10000; await sleep(50)) {
              const e = b.events.slice(from).find((x) => x.method === 'Fetch.requestPaused' && re.test(x.params.request.url) && !handled.has(x.params.requestId));
              if (e) { handled.add(e.params.requestId); return e.params.requestId; }
            }
            throw new Error(`no paused request ${re}`);
          };
          const release = (requestId) => send('Fetch.continueRequest', { requestId });
          await send('Fetch.enable', { patterns: [{ urlPattern: '*/exam/v1/admin/ratings', requestStage: 'Request' }, { urlPattern: '*/productive', requestStage: 'Response' }] });
          units = await saveUnits(2);
          const save1 = await paused(/\/admin\/ratings$/), save2 = await paused(/\/admin\/ratings$/);
          await release(save1);
          const stale = await paused(/\/productive$/);          // computed with only the first rating stored
          await release(save2);
          await release(await paused(/\/productive$/));         // fresh: both ratings stored
          await waitFor(savedFresh(units), 10000, `${alias} saved ${units.join(', ')} (fresh render)`);
          await release(stale); await sleep(1000);               // the stale response arrives last
          await send('Fetch.disable');
          assert.ok(await evaluate(savedFresh(units)), 'a late, older re-render must not show a rated unit as unrated');
        } else {
          units = await saveUnits(1);
          await waitFor(savedFresh(units), 10000, `${alias} saved ${units.join(', ')}`);
        }
        done += units.length;
        assert.equal(await evaluate(`document.querySelectorAll('form.kx-rate button[type=submit]:not([disabled])').length`), 7 - done);
      }
      assert.match(await text(), new RegExp(`Gespeichert: [\\d,]+ Punkte \\(Runde ${round}\\)`));
      assert.equal((await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM ratings WHERE round = ?1').bind(round).first()).n, 7);
      await vp(360, 640, true); await sleep(300); assert.equal(await noHScroll(), true, 'rater screen: no horizontal scroll on mobile'); await vp(1280, 800, false);
    }
    await as('rater2', 'rater.html'); await waitFor(`!/data-attempt="${attempt}"/.test(document.body.innerHTML) && /Keine Versuche warten/.test(document.body.innerText)`, 10000, 'queue empty after final');

    // ---- learner: final result reflects the ratings ----
    await as('learner', '');
    await waitFor(`document.querySelector('[data-act="last-result"][data-attempt="${attempt}"]')`, 15000, 'last result link');
    // the practice history on the start screen: this attempt with its final rated scores
    await waitFor(`document.querySelectorAll('.kx-history tbody tr').length === 1`, 10000, 'practice history');
    await a11y('start screen with history', { tabs: 6 });
    const hist = await evaluate(`[...document.querySelectorAll('.kx-history tbody td')].map((td) => td.textContent)`);
    assert.deepEqual(hist.slice(3, 5), ['75 / 100', '75 / 100'], `Schreiben and Sprechen final in the history: ${JSON.stringify(hist)}`);
    await vp(360, 640, true); await sleep(300); assert.equal(await noHScroll(), true, 'start screen with history: no horizontal scroll on mobile'); await vp(1280, 800, false);
    await click(`.kx-history [data-act="last-result"][data-attempt="${attempt}"]`);
    await waitFor(`/Klarweg B1 Simulation – Ergebnis/.test(document.body.innerText)`, 15000, 'learner result');
    res = await text();
    assert.equal(/in Bewertung/.test(res), false, 'nothing awaits rating any more');
    assert.match(res, /3 von 4 bewerteten Modulen bestanden \(Klarweg-Simulation\)\./, 'summary: modules passed (Lesen is answered 10/10/10 here and fails), never a sum of points');
    // SCORING §4.4 lead review: a 2-band disagreement (planted in the stored round-2 bands after scoring; the score is
    // computed already) appears only for the lead rater, needs a note, is audited and then leaves the list
    {
      const row = await dev.env.DB.prepare("SELECT id, bands_json FROM ratings WHERE attempt_id = ?1 AND item_id = 'sprechen:pron' AND round = 2").bind(attempt).first();
      const r1b = JSON.parse((await dev.env.DB.prepare("SELECT bands_json FROM ratings WHERE attempt_id = ?1 AND item_id = 'sprechen:pron' AND round = 1").bind(attempt).first()).bands_json).aussprache;
      const BANDS5 = ['A', 'B', 'C', 'D', 'E'], i1 = BANDS5.indexOf(r1b), far = BANDS5[i1 + 2 <= 4 ? i1 + 2 : i1 - 2];   // two bands away
      await dev.env.DB.prepare('UPDATE ratings SET bands_json = ?2 WHERE id = ?1').bind(row.id, JSON.stringify({ aussprache: far })).run();
      await as('rater1', 'rater.html'); await waitFor(`/Keine Versuche warten|Öffnen/.test(document.body.innerText)`, 10000, 'rater queue');
      await sleep(500); assert.equal(await evaluate(`!!document.querySelector('.kx-lead-review')`), false, 'a plain rater sees no lead review');
      await as('lead', 'rater.html');
      await waitFor(`document.querySelector('.kx-lead-review form.kx-flag-review')`, 15000, 'lead review listed');
      assert.match(await evaluate(`document.querySelector('.kx-lead-review').innerText`), new RegExp(`Aussprache · Sprechen · Aussprache \\(ganzes Modul\\) · Runde 1: ${r1b}, Runde 2: ${far} \\(2 Bänder\\)`));
      await a11y('lead review of a rating disagreement');
      await evaluate(`document.querySelector('form.kx-flag-review button').click()`);
      await waitFor(`/mindestens 3 Zeichen/.test(document.querySelector('form.kx-flag-review .kx-rate-msg').textContent)`, 5000, 'note required');
      await evaluate(`(() => { const f = document.querySelector('form.kx-flag-review'); f.querySelector('input').value = 'Rückmeldung an Rater 2'; f.requestSubmit(); })()`);
      await waitFor(`/Abweichung als geprüft markiert\./.test(document.body.innerText) && /Keine offenen Abweichungen\./.test(document.body.innerText)`, 15000, 'reviewed');
      assert.equal((await dev.env.DB.prepare("SELECT COUNT(*) AS n FROM audit_log WHERE action = 'disagreement_reviewed'").first()).n, 1);
      await as('learner', ''); await waitFor(`document.querySelector('.kx-history [data-act="last-result"][data-attempt="${attempt}"]')`, 15000, 'last result link again');
      await click(`.kx-history [data-act="last-result"][data-attempt="${attempt}"]`);
      await waitFor(`/Klarweg B1 Simulation – Ergebnis/.test(document.body.innerText)`, 15000, 'learner result again');
    }
    // rated feedback per task and criterion, and per-part lines in the reviews
    await waitFor(`document.querySelectorAll('.kx-rated').length === 2`, 10000, 'rated feedback for Schreiben and Sprechen');
    await a11y('final result with rated feedback');
    assert.deepEqual(a11yFindings, [], `automated accessibility findings on ${a11yScreens.join(', ')}`);
    assert.deepEqual(dialogs, [], 'no leave warning or other dialog appeared while everything was saved');
    const cspViolations = b.events.filter((e) => e.method === 'Log.entryAdded' && /Content Security Policy/i.test(e.params.entry.text || '')).map((e) => e.params.entry.text);
    assert.deepEqual(cspViolations, [], 'the Content-Security-Policy blocked nothing on the learner or rater pages');
    assert.equal(await evaluate(`document.querySelectorAll('.kx-rated table').length`), 7, '3 Schreiben tasks + 3 Sprechen parts + Aussprache');
    assert.match(await text(), /Teil 1: 10 von 10 · Teil 2: 5 von 5/i, 'Hören per-part line (shown in uppercase metadata style)');
    await vp(360, 640, true); await sleep(300); assert.equal(await noHScroll(), true, 'final result: no horizontal scroll on mobile'); await vp(1280, 800, false);
    const final = (await dev.env.DB.prepare("SELECT module, points FROM module_scores WHERE module IN ('schreiben','sprechen') AND status = 'final' ORDER BY module").all()).results;
    assert.equal(final.length, 2);
    for (const f of final) assert.match(res, new RegExp(`${f.module === 'schreiben' ? 'Schreiben' : 'Sprechen'}\\s+${f.points} / 100`));
    const exceptions = b.events.filter((e) => e.method === 'Runtime.exceptionThrown').map((e) => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text);
    log(`practice ${PRACTICE.name}`, 'PASS', { lesen: '10/10/10', hoeren: '30/30', ratings: 14, final: final.map((f) => `${f.module}:${f.points}`) });
    return exceptions;
  } finally { clearInterval(dialogWatch); b.close(); dev.server.close(); }
}

/* SPRECHEN TOPIC (OD-32, practice form KX_E2E_FORM, default p1): for EACH Teil 2 topic choice, the page plays the
   partner talk written for that choice (the one presenting the OTHER topic) and never the other talk; the locked choice
   is shown; Teil 3 then records and the examiner asks the question about the learner's own topic. Lesen/Hören/Schreiben and Sprechen Teil 1/2 go through the in-process test Worker; the
   module start is moved on the TEST server only, to just before the partner phase. */
async function runSprechenTopic() {
  const pkg = pkgFor(syntheticBuild([PRACTICE.dir]), 'sprechen');
  const topicItem = pkg.parts.flatMap((p) => p.tasks.flatMap((t) => t.items)).find((i) => i.interaction === 'topic_choice');
  const talks = pkg.parts.find((p) => p.part === 3).tasks.flatMap((t) => t.stimuli || []).filter((x) => x.role === 'partner_audio');
  const partner = speakingSchedule(pkg.timing.plan).find((p) => p.kind === 'listen');
  assert.deepEqual(talks.map((x) => x.for_topic), ['t1', 't2']);
  const uncaught = [];
  for (const choice of ['t1', 't2']) {
    const dev = await startDevServer({ form: PRACTICE.name.toLowerCase() });
    const b = await launch();
    const { send } = b;
    try {
      const created = await call(dev.env, 'POST', '/exam/v1/attempts', { user: dev.user, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: 'dev_e2e_topic_000000000001' } });
      const s = { env: dev.env, user: dev.user, attempt: created.json.attempt_id, lease: created.json.lease.lease_id };
      for (const m of ['lesen', 'hoeren', 'schreiben']) { await start(s, m); if (m === 'hoeren') await post(s, '/hoeren/events', { type: 'ready' }); await submit(s, m); }
      assert.equal((await post(s, '/sprechen/consent', { granted: true, version: 'rec-consent@1' })).status, 200);
      await start(s, 'sprechen');
      assert.equal((await post(s, '/modules/sprechen/answers', { answers: [{ item_id: topicItem.item_id, value: { option_id: choice }, seq: 1 }] })).status, 200);
      for (const part of [1, 2]) for (const it of pkg.parts.find((p) => p.part === part).tasks.flatMap((t) => t.items).filter((i) => i.interaction === 'spoken_response')) {
        for (const { turn } of it.response_spec.turns) {
          assert.equal((await uploadChunk(s, it.item_id, turn, 0, Buffer.from(`pre-${it.item_id}-${turn}`))).status, 200);
          assert.equal((await post(s, '/sprechen/turns', { item_id: it.item_id, turn, chunks: 1, duration_ms: 1000 })).status, 200);
        }
      }
      const row = await dev.env.DB.prepare("SELECT started_at FROM attempt_modules WHERE module = 'sprechen'").first();
      const delta = (Date.now() - (partner.start_ms - 3_000)) - row.started_at;   // TEST server only: 3 s before the partner phase
      await dev.env.DB.prepare("UPDATE attempt_modules SET started_at = started_at + ?1, deadline_at = deadline_at + ?1 WHERE module = 'sprechen'").bind(delta).run();
      await dev.env.DB.prepare('DELETE FROM attempt_leases').run();   // the page takes the attempt without a "Hier fortsetzen" click

      await send('Runtime.enable'); await send('Page.enable');
      await send('Page.addScriptToEvaluateOnNewDocument', { source: `window.__plays = []; { const play = HTMLMediaElement.prototype.play;
        HTMLMediaElement.prototype.play = function () { window.__plays.push((this.dataset && this.dataset.asset) || ''); return play.apply(this, arguments); }; }` });
      const evaluate = async (expr) => {
        const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
        if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
        return r.result.value;
      };
      const waitFor = async (src, ms, label) => {
        const t0 = Date.now();
        while (Date.now() - t0 < ms) { if (await probe(evaluate, `(() => { try { return !!(${src}); } catch { return false; } })()`)) return; await sleep(150); }
        throw new Error(`timeout: ${label}\n${(await evaluate('document.body.innerText')).slice(0, 600)}`);
      };
      // SPEAKING §2 notes: kept on this device per attempt — seeded here as if typed during preparation before a reload
      if (choice === 't1') await send('Page.addScriptToEvaluateOnNewDocument', { source: `try { if (!localStorage.getItem('kx-notes:${s.attempt}')) localStorage.setItem('kx-notes:${s.attempt}', 'Teil 2: Erfahrung, Vorteile'); } catch {}` });
      await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 800, deviceScaleFactor: 1, mobile: false });
      await send('Page.navigate', { url: `http://127.0.0.1:${dev.port}/exam/` });
      const radios = `[...document.querySelectorAll('input[type=radio][data-item="${topicItem.item_id}"]')]`;
      await waitFor(`${radios}.length === 2 && ${radios}.every((r) => r.disabled)`, 15000, 'locked topic choice rendered');
      assert.deepEqual(await evaluate(`${radios}.filter((r) => r.checked).map((r) => r.value)`), [choice], 'the locked choice shows the learner\'s topic');
      // after the lock only the chosen topic's slide deck stays, marked "Ihr Thema" (practice options are "Thema n: …")
      const decks = await evaluate(`[...document.querySelectorAll('.kx-deck')].map((d) => ({ topic: d.dataset.topic, shown: !d.hidden, mine: !d.querySelector('.kx-deck-mine').hidden, title: d.querySelector('h3').textContent }))`);
      assert.ok(decks.length === 2 && decks.filter((d) => d.shown).length === 1 && decks.find((d) => d.shown).topic === choice && decks.find((d) => d.shown).mine
        && decks.find((d) => d.shown).title.startsWith(choice === 't1' ? 'Thema 1: ' : 'Thema 2: '), `${choice}: only the chosen deck after the lock ${JSON.stringify(decks)}`);
      if (choice === 't1') {
        const notes = () => evaluate(`(() => { const n = document.querySelector('.kx-notes'), t = n.querySelector('textarea'), r = n.getBoundingClientRect(), m = document.getElementById('kx-main').getBoundingClientRect();
          return { value: t.value, beside: r.left >= m.right - 1, inView: r.top >= document.querySelector('.kx-bar').getBoundingClientRect().bottom - 1 && r.top < innerHeight - 100, stored: localStorage.getItem('kx-notes:${s.attempt}'),
            rule: n.querySelector('.kx-notes-rule').textContent, label: t.labels[0].textContent, aids: ['spellcheck', 'autocorrect', 'autocapitalize'].map((a) => t.getAttribute(a)).join(','), item: t.dataset.item || null, noH: document.documentElement.scrollWidth <= innerWidth + 1 }; })()`);
        let n = await notes();
        assert.ok(n.value === 'Teil 2: Erfahrung, Vorteile' && n.beside && n.inView && n.rule === 'Frei sprechen – nicht ablesen.' && n.label === 'Ihre Notizen' && n.aids === 'false,off,off' && n.item === null && n.noH, `notes restored beside the module: ${JSON.stringify(n)}`);
        const rows = async () => JSON.stringify((await dev.env.DB.prepare("SELECT item_id, value_json, seq FROM responses_current WHERE module = 'sprechen' ORDER BY item_id").all()).results);
        const before = await rows();
        await evaluate(`(() => { const t = document.querySelector('.kx-notes textarea'); t.focus(); t.value += '; Nachteile: Kosten'; t.dispatchEvent(new Event('input', { bubbles: true })); })()`);
        await sleep(1500); n = await notes();
        assert.equal(n.stored, 'Teil 2: Erfahrung, Vorteile; Nachteile: Kosten', 'typed notes kept on the device');
        assert.equal(await rows(), before, 'notes are never sent as an answer');
        await evaluate(`document.activeElement && document.activeElement.blur()`);
      }
      await waitFor(`/Präsentation Ihres Gesprächspartners/.test(document.querySelector('#kx-phase')?.textContent || '')`, 15000, 'partner phase');
      const mine = talks.find((x) => x.for_topic === choice).asset_id, other = talks.find((x) => x.for_topic !== choice).asset_id;
      await waitFor(`window.__plays.includes(${JSON.stringify(mine)})`, 6000, `partner talk for ${choice}`);
      await waitFor(`/^Teil 3: Aufnahme läuft/.test(document.querySelector('#kx-phase')?.textContent || '')`, 15000, 'Teil 3 recording');
      if (choice === 't1') {
        await evaluate('window.scrollTo(0, document.body.scrollHeight)'); await sleep(200);
        const v = await evaluate(`(() => { const n = document.querySelector('.kx-notes'); const r = n.getBoundingClientRect(), bar = document.querySelector('.kx-bar').getBoundingClientRect().bottom;
          return { top: Math.round(r.top), bottom: Math.round(r.bottom), bar: Math.round(bar), vh: innerHeight, scrolled: scrollY > 0, value: n.querySelector('textarea').value }; })()`);
        assert.ok(v.scrolled && v.top >= v.bar - 1 && v.top <= v.bar + 16 && v.bottom <= v.vh + 1 && v.value.endsWith('Nachteile: Kosten'), `notes stay stuck below the bar, whole panel visible, while speaking (Teil 3): ${JSON.stringify(v)}`);
        // SPEAKING §4: a level meter in the sticky bar while the turn records (Chrome's fake microphone plays a tone)
        let peak = 0;
        for (const t0 = Date.now(); Date.now() - t0 < 5000 && peak === 0; await sleep(100)) peak = await evaluate(`(() => { const m = document.getElementById('kx-level'); return m && !m.hidden ? parseFloat(m.querySelector('.kx-level-fill').style.width) || 0 : 0; })()`);
        const lv = await evaluate(`(() => { const m = document.getElementById('kx-level'); return { shown: !m.hidden, ariaHidden: m.getAttribute('aria-hidden'), inBar: !!m.closest('.kx-bar'), hint: document.getElementById('kx-silence').textContent }; })()`);
        assert.ok(peak > 0 && lv.shown && lv.ariaHidden === 'true' && lv.inBar && lv.hint === '', `level meter while recording: ${JSON.stringify({ peak, ...lv })}`);
      }
      for (const t0 = Date.now(); (await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM recording_chunks WHERE part = 3').first()).n < 1; ) { if (Date.now() - t0 > 15000) throw new Error('no Teil 3 chunks'); await sleep(200); }
      // the examiner's question (turn 2, after the 1-minute turn 1) is the one about the learner's own topic
      const q = pkg.parts.find((p) => p.part === 3).tasks.flatMap((t) => t.items).find((i) => i.interaction === 'spoken_response').response_spec.turns[1].prompt_asset_by_topic;
      await waitFor(`window.__plays.includes(${JSON.stringify(q[choice].asset_id)})`, 90000, `examiner question for ${choice}`);
      const plays = await evaluate('window.__plays');
      assert.equal(plays.some((a) => Object.values(q).some((x) => x.asset_id === a && a !== q[choice].asset_id)), false, `${choice}: no examiner question for the other topic: ${JSON.stringify(plays)}`);
      assert.equal(plays.filter((a) => a === mine).length, 1, `${choice}: its partner talk played exactly once: ${JSON.stringify(plays)}`);
      assert.equal(plays.includes(other), false, `${choice}: the other topic's talk is never played: ${JSON.stringify(plays)}`);
      uncaught.push(...b.events.filter((e) => e.method === 'Runtime.exceptionThrown').map((e) => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text));
      log(`sprechen topic ${PRACTICE.name} ${choice}`, 'PASS', { partner: mine, plays });
    } finally { b.close(); dev.server.close(); }
  }
  return uncaught;
}

/* LEASE EXPIRY (no takeover): the page's lease expires on the TEST server, as after a long sleep or a throttled tab.
   The next save gets lease_expired; the page must reacquire the lease like a reload would (audited lease_reacquired,
   no incident), save the queued answer and keep the learner in the module, never leaving saving stopped. The heartbeat
   recovers on its own, and a user action right after the expiry (submit) succeeds without an error screen. */
async function runLeaseExpiry() {
  const dev = await startDevServer({ form: PRACTICE.name.toLowerCase() });
  const b = await launch();
  const { send } = b;
  try {
    await send('Runtime.enable'); await send('Page.enable');
    const evaluate = async (expr) => {
      const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
      if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
      return r.result.value;
    };
    const waitFor = async (src, ms, label) => {
      const t0 = Date.now();
      while (Date.now() - t0 < ms) { if (await probe(evaluate, `(() => { try { return !!(${src}); } catch { return false; } })()`)) return; await sleep(150); }
      throw new Error(`timeout: ${label}\n${(await evaluate('document.body.innerText')).slice(0, 600)}`);
    };
    const click = (sel) => evaluate(`document.querySelector(${JSON.stringify(sel)}).click()`);
    await send('Page.navigate', { url: `http://127.0.0.1:${dev.port}/exam/` });
    await waitFor(`document.querySelector('[data-act="create"]')`, 15000, 'start screen'); await click('[data-act="create"]');
    await waitFor(`document.querySelector('[data-act="start"][data-module="lesen"]')`, 15000, 'Lesen intro'); await click('[data-act="start"][data-module="lesen"]');
    await waitFor(`document.querySelectorAll('input[type=radio]').length > 20`, 15000, 'Lesen rendered');
    const radios = `[...document.querySelectorAll('input[type=radio]:not([disabled])')]`;
    const pick = (n) => evaluate(`(() => { const r = ${radios}.filter((x) => !x.closest('.kx-example'))[${n}]; r.click(); return r.dataset.item; })()`);
    const first = await pick(0);
    for (const t0 = Date.now(); !(await dev.env.DB.prepare('SELECT 1 FROM responses_current WHERE item_id = ?1').bind(first).first()); await sleep(150)) {
      if (Date.now() - t0 > 15000) throw new Error('the first answer never reached the server');   // "Gespeichert" alone shows before the save
    }
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 15000, 'first answer saved');
    const lease0 = (await dev.env.DB.prepare('SELECT lease_id, generation FROM attempt_leases').first());
    await dev.env.DB.prepare('UPDATE attempt_leases SET expires_at = 1').run();   // TEST server only: the lease has expired
    const second = await pick(4);
    assert.notEqual(second, first);
    for (const t0 = Date.now(); ; await sleep(200)) {
      const row = await dev.env.DB.prepare('SELECT 1 AS ok FROM responses_current WHERE item_id = ?1').bind(second).first();
      if (row) break;
      if (Date.now() - t0 > 20000) throw new Error('the answer given after the lease expired never reached the server: ' + (await evaluate(`document.querySelector('.kx-save')?.textContent`)));
    }
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 15000, 'saved again after reacquiring');
    const lease1 = await dev.env.DB.prepare('SELECT lease_id, generation FROM attempt_leases').first();
    assert.notEqual(lease1.lease_id, lease0.lease_id); assert.equal(lease1.generation, lease0.generation + 1);
    assert.ok(await dev.env.DB.prepare("SELECT 1 FROM audit_log WHERE action = 'lease_reacquired'").first(), 'audited as lease_reacquired');
    assert.equal((await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM incidents').first()).n, 0, 'an expiry is not a takeover incident');
    assert.equal(await evaluate(`document.querySelectorAll('input[type=radio]').length > 20 && !document.querySelector('[data-act="takeover"]')`), true, 'still in the module, no takeover screen');
    // the heartbeat path too: expire again and wait for the next heartbeat (15 s) to reacquire on its own
    await dev.env.DB.prepare('UPDATE attempt_leases SET expires_at = 1').run();
    for (const t0 = Date.now(); ; await sleep(500)) {
      const l = await dev.env.DB.prepare('SELECT generation, expires_at FROM attempt_leases').first();
      if (l.generation === lease1.generation + 1 && l.expires_at > Date.now()) break;
      if (Date.now() - t0 > 25000) throw new Error('the heartbeat did not reacquire the expired lease');
    }
    // RACE: a late lease_expired for an already replaced lease must not trigger a second reacquire (it would meet our own
    // new lease, get lease_held and wrongly show the takeover screen). Hold the refused save's response at the network
    // layer until the heartbeat has reacquired, then release it.
    await dev.env.DB.prepare('UPDATE attempt_leases SET expires_at = 1').run();
    const genBefore = (await dev.env.DB.prepare('SELECT generation FROM attempt_leases').first()).generation;
    await send('Fetch.enable', { patterns: [{ urlPattern: '*/modules/lesen/answers', requestStage: 'Response' }] });
    const fromEv = b.events.length;
    const third = await pick(8);
    let held = null;
    for (const t0 = Date.now(); !held; await sleep(50)) {
      held = b.events.slice(fromEv).find((x) => x.method === 'Fetch.requestPaused' && x.params.request.method === 'POST' && x.params.responseStatusCode === 409);
      if (Date.now() - t0 > 10000) throw new Error('the refused save was not observed');
    }
    for (const t0 = Date.now(); ; await sleep(250)) {      // the heartbeat reacquires meanwhile (≤ 15 s)
      if ((await dev.env.DB.prepare('SELECT generation FROM attempt_leases').first()).generation === genBefore + 1) break;
      if (Date.now() - t0 > 25000) throw new Error('the heartbeat did not reacquire while the save response was held');
    }
    await send('Fetch.continueRequest', { requestId: held.params.requestId });   // the late lease_expired arrives now
    for (const t0 = Date.now(); ; await sleep(200)) {      // other paused requests (the retry) pass straight through
      for (const e of b.events.slice(fromEv)) if (e.method === 'Fetch.requestPaused' && e.params.requestId !== held.params.requestId && !e.__done) { e.__done = true; send('Fetch.continueRequest', { requestId: e.params.requestId }).catch(() => {}); }
      if (await dev.env.DB.prepare('SELECT 1 FROM responses_current WHERE item_id = ?1').bind(third).first()) break;
      if (Date.now() - t0 > 20000) throw new Error('the answer whose refusal arrived late was never saved');
    }
    await send('Fetch.disable');
    await sleep(1000);
    assert.equal((await dev.env.DB.prepare('SELECT generation FROM attempt_leases').first()).generation, genBefore + 1, 'no second reacquire for the stale lease');
    assert.equal(await evaluate(`!document.querySelector('[data-act="takeover"]') && !/In einem anderen Fenster/.test(document.body.innerText)`), true, 'no false takeover screen');
    // a user action right after the expiry (before any heartbeat): submitting Lesen must still work
    await dev.env.DB.prepare('UPDATE attempt_leases SET expires_at = 1').run();
    await click('[data-act="submit"]'); await waitFor(`document.querySelector('[data-act="submit-confirm"]')`, 5000, 'review step');
    await click('[data-act="submit-confirm"]');
    await waitFor(`document.querySelector('[data-act="start"][data-module="hoeren"]')`, 15000, 'Lesen submitted after the lease expired');
    assert.equal((await dev.env.DB.prepare("SELECT status FROM attempt_modules WHERE module = 'lesen'").first()).status, 'submitted');
    assert.equal((await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM incidents').first()).n, 0);
    const exceptions = b.events.filter((e) => e.method === 'Runtime.exceptionThrown').map((e) => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text);
    log(`lease expiry ${PRACTICE.name}`, 'PASS', { autosave: 'reacquired + saved', heartbeat: 'reacquired', late_stale_refusal: 'retried, no second reacquire', submit: 'reacquired + submitted' });
    return exceptions;
  } finally { b.close(); dev.server.close(); }
}

/* TWO TABS (takeover, the case the lease_expired retry must NOT touch): tab A answers Lesen; tab B (a second browser
   on the same account) is told the attempt is open elsewhere and takes it over with "Hier fortsetzen", seeing A's saved
   answers; A then shows "In einem anderen Fenster geöffnet" instead of saving silently, and the takeover is an incident. */
async function runTwoTabs() {
  const dev = await startDevServer({ form: PRACTICE.name.toLowerCase() });
  const A = await launch(), B = await launch();
  const tools = (b) => {
    const evaluate = async (expr) => {
      const r = await b.send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
      if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
      return r.result.value;
    };
    const waitFor = async (src, ms, label) => {
      const t0 = Date.now();
      while (Date.now() - t0 < ms) { if (await probe(evaluate, `(() => { try { return !!(${src}); } catch { return false; } })()`)) return; await sleep(150); }
      throw new Error(`timeout: ${label}\n${(await evaluate('document.body.innerText')).slice(0, 600)}`);
    };
    return { evaluate, waitFor, click: (sel) => evaluate(`document.querySelector(${JSON.stringify(sel)}).click()`) };
  };
  try {
    for (const b of [A, B]) { await b.send('Runtime.enable'); await b.send('Page.enable'); }
    const a = tools(A), bb = tools(B), url = `http://127.0.0.1:${dev.port}/exam/`;
    await A.send('Page.navigate', { url });
    await a.waitFor(`document.querySelector('[data-act="create"]')`, 15000, 'A start'); await a.click('[data-act="create"]');
    await a.waitFor(`document.querySelector('[data-act="start"][data-module="lesen"]')`, 15000, 'A intro'); await a.click('[data-act="start"][data-module="lesen"]');
    await a.waitFor(`document.querySelectorAll('input[type=radio]').length > 20`, 15000, 'A Lesen');
    const item = await a.evaluate(`(() => { const r = [...document.querySelectorAll('input[type=radio]:not([disabled])')].filter((x) => !x.closest('.kx-example'))[0]; r.click(); return r.dataset.item + '|' + r.value; })()`);
    // "Gespeichert" is already shown before the click, so wait for the SERVER to hold the answer (the save is debounced);
    // otherwise B could take over before A's save was sent
    for (const t0 = Date.now(); !(await dev.env.DB.prepare('SELECT 1 FROM responses_current WHERE item_id = ?1').bind(item.split('|')[0]).first()); await sleep(150)) {
      if (Date.now() - t0 > 15000) throw new Error('A\'s answer never reached the server');
    }
    await a.waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 15000, 'A saved');
    // B: the same attempt is open in A
    await B.send('Page.navigate', { url });
    await bb.waitFor(`/Bereits geöffnet/.test(document.body.innerText) && document.querySelector('[data-act="takeover"]')`, 15000, 'B told the attempt is open elsewhere');
    assert.match(await bb.evaluate('document.body.innerText'), /auf einem anderen Gerät noch nicht übertragen wurden, gehen dabei verloren/, 'B is warned before taking over (ENGINE §8)');
    assert.equal((await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM incidents').first()).n, 0, 'nothing happens before B decides');
    await bb.click('[data-act="takeover"]');
    await bb.waitFor(`document.querySelectorAll('input[type=radio]').length > 20`, 15000, 'B in Lesen');
    const [id, value] = item.split('|');
    assert.equal(await bb.evaluate(`!!document.querySelector('input[data-item="${id}"][value="${value}"]:checked')`), true, 'B sees the answer A saved');
    assert.equal((await dev.env.DB.prepare("SELECT COUNT(*) AS n FROM incidents WHERE kind = 'lease_takeover'").first()).n, 1, 'the takeover is recorded');
    // A: its next save (or heartbeat) is refused and A says so; no silent retry with a new lease
    await a.evaluate(`(() => { const r = [...document.querySelectorAll('input[type=radio]:not([disabled])')].filter((x) => !x.closest('.kx-example'))[5]; r.click(); return true; })()`);
    await a.waitFor(`/In einem anderen Fenster geöffnet/.test(document.body.innerText) && document.querySelector('[data-act="takeover"]')`, 20000, 'A shows the takeover screen');
    const gen = (await dev.env.DB.prepare('SELECT generation FROM attempt_leases').first()).generation;
    assert.equal(gen, 2, 'A did not grab the attempt back on its own');
    const exceptions = [A, B].flatMap((b) => b.events.filter((e) => e.method === 'Runtime.exceptionThrown').map((e) => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text));
    log(`two tabs ${PRACTICE.name}`, 'PASS', { takeover: 'B', a: 'superseded screen', incidents: 1 });
    return exceptions;
  } finally { A.close(); B.close(); dev.server.close(); }
}

/* LEASE EXPIRY during Sprechen recording: chunks recorded while the lease is expired stay queued locally and reach the
   server under the reacquired lease; no incident, no error screen. Earlier modules go through the test Worker; the
   module start is moved on the TEST server only. */
async function runLeaseExpirySprechen() {
  const dev = await startDevServer({ form: PRACTICE.name.toLowerCase() });
  const b = await launch();
  const { send } = b;
  try {
    const pkg = pkgFor(syntheticBuild([PRACTICE.dir]), 'sprechen');
    const created = await call(dev.env, 'POST', '/exam/v1/attempts', { user: dev.user, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: 'dev_e2e_leasesp_000000001' } });
    const s0 = { env: dev.env, user: dev.user, attempt: created.json.attempt_id, lease: created.json.lease.lease_id };
    for (const m of ['lesen', 'hoeren', 'schreiben']) { await start(s0, m); if (m === 'hoeren') await post(s0, '/hoeren/events', { type: 'ready' }); await submit(s0, m); }
    assert.equal((await post(s0, '/sprechen/consent', { granted: true, version: 'rec-consent@1' })).status, 200);
    await start(s0, 'sprechen');
    const teil1 = speakingSchedule(pkg.timing.plan).find((p) => p.id === 'teil1');
    const row = await dev.env.DB.prepare("SELECT started_at FROM attempt_modules WHERE module = 'sprechen'").first();
    const delta = (Date.now() - (teil1.start_ms + 1_000)) - row.started_at;   // TEST server only: 1 s into Teil 1
    await dev.env.DB.prepare("UPDATE attempt_modules SET started_at = started_at + ?1, deadline_at = deadline_at + ?1 WHERE module = 'sprechen'").bind(delta).run();
    await dev.env.DB.prepare('DELETE FROM attempt_leases').run();
    await send('Runtime.enable'); await send('Page.enable');
    const evaluate = async (expr) => (await send('Runtime.evaluate', { expression: expr, returnByValue: true })).result.value;
    await send('Page.navigate', { url: `http://127.0.0.1:${dev.port}/exam/` });
    const chunks = async () => (await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM recording_chunks').first()).n;
    for (const t0 = Date.now(); (await chunks()) < 2; await sleep(250)) if (Date.now() - t0 > 40000) throw new Error('no Teil 1 recording: ' + (await evaluate('document.body.innerText')).slice(0, 300));
    const gen0 = (await dev.env.DB.prepare('SELECT generation FROM attempt_leases').first()).generation;
    await dev.env.DB.prepare('UPDATE attempt_leases SET expires_at = 1').run();   // TEST server only: the lease expires mid-recording
    const n0 = await chunks();
    for (const t0 = Date.now(); (await chunks()) < n0 + 3; await sleep(250)) if (Date.now() - t0 > 30000) throw new Error(`recording stopped reaching the server after the lease expired (${await chunks()} chunks)`);
    const l = await dev.env.DB.prepare('SELECT generation, expires_at FROM attempt_leases').first();
    assert.ok(l.generation === gen0 + 1 && l.expires_at > Date.now(), 'reacquired once, valid lease');
    assert.equal((await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM incidents').first()).n, 0);
    assert.equal(await evaluate(`/Aufnahme läuft/.test(document.querySelector('#kx-phase')?.textContent || '') && !document.querySelector('[data-act="takeover"]')`), true, 'still recording, no error screen');
    const exceptions = b.events.filter((e) => e.method === 'Runtime.exceptionThrown').map((e) => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text);
    log(`lease expiry Sprechen ${PRACTICE.name}`, 'PASS', { chunks_before: n0, chunks_after: await chunks(), generation: l.generation });
    return exceptions;
  } finally { b.close(); dev.server.close(); }
}

/* RATER 2FA (OD-19) in a real browser: the dev server runs the real Access Worker in-process (mfa: true), so the rater
   screen's enrolment, recovery codes, expiry, wrong code and recovery-code paths run against the real routes. The test
   computes the TOTP from the key shown on the page, as an authenticator app would. */
async function runRater2fa() {
  const dev = await startDevServer({ form: PRACTICE.name.toLowerCase(), mfa: true });
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
    const waitFor = async (src, ms, label) => {
      const t0 = Date.now();
      while (Date.now() - t0 < ms) { if (await probe(evaluate, `(() => { try { return !!(${src}); } catch { return false; } })()`)) return; await sleep(150); }
      throw new Error(`timeout: ${label}\n${(await text()).slice(0, 600)}`);
    };
    const h1 = (t) => waitFor(`document.querySelector('h1')?.textContent === ${JSON.stringify(t)}`, 10000, `h1 ${t}`);
    const fill = (sel, v) => evaluate(`(() => { const i = document.querySelector(${JSON.stringify(sel)}); i.value = ${JSON.stringify(v)}; i.dispatchEvent(new Event('input', { bubbles: true })); return true; })()`);
    const submit = (sel = 'form.kx-mfa') => evaluate(`document.querySelector(${JSON.stringify(sel)}).requestSubmit()`);
    const base = `http://127.0.0.1:${dev.port}/exam/`;
    const as = async (alias, page) => { await send('Page.navigate', { url: `${base}dev/as/${alias}` }); await sleep(300); if (page) await send('Page.navigate', { url: base + page }); };
    const nowCode = (secret, off = 0) => hotp(base32Decode(secret), stepAt(Math.floor(Date.now() / 1000)) + off);
    const A = makeA11y({ send, evaluate });   // automated accessibility audit of every 2FA screen
    const expire = () => dev.access.env.DB.prepare('UPDATE sessions SET mfa_verified_at = 1 WHERE user_id = ?1').bind(dev.users.rater1).run();

    // 1. not enrolled → enrolment; focus on the heading; key shown grouped; a link for apps on this device
    await as('rater1', 'rater.html');
    await h1('Zweiten Faktor einrichten');
    assert.equal(await evaluate(`document.activeElement === document.querySelector('h1')`), true, 'focus on the heading');
    if (!process.env.KX_E2E_NO_A11Y) await A.selfCheck();
    await A.a11y('2FA: enrolment start', { tabs: 4 });
    await evaluate(`document.querySelector('[data-act="mfa-enrol"]').click()`);
    await h1('Authenticator-App verbinden');
    const secret = (await evaluate(`document.querySelector('.kx-mfa-secret').textContent`)).replace(/\s/g, '');
    assert.match(secret, /^[A-Z2-7]{32}$/);
    await A.a11y('2FA: connect the app', { tabs: 6 });
    assert.match(await evaluate(`document.querySelector('a[href^="otpauth://totp/"]').getAttribute('href')`), /secret=[A-Z2-7]{32}&issuer=Klarweg/);
    await fill('#kx-mfa-code', await nowCode(secret));
    await submit();
    // 2. recovery codes shown once; continuing requires the "saved" confirmation
    await h1('Wiederherstellungscodes');
    const codes = await evaluate(`[...document.querySelectorAll('.kx-mfa-codes code')].map((c) => c.textContent)`);
    assert.equal(codes.length, 10);
    await A.a11y('2FA: recovery codes', { tabs: 4 });
    await submit();
    await waitFor(`/Bitte bestätigen Sie, dass Sie die Codes gespeichert haben/.test(document.querySelector('.kx-rate-msg').textContent)`, 3000, 'saved confirmation required');
    await evaluate(`document.querySelector('#kx-mfa-saved').click()`); await submit();
    await h1('Bewertung');
    assert.match(await text(), /Zweiter Faktor eingerichtet und bestätigt/);
    // 3. after 12 h (simulated): asked again; a wrong code is reported in the alert region and the field is cleared
    await expire();
    await as('rater1', 'rater.html');
    await h1('Anmeldung bestätigen');
    await A.a11y('2FA: verify with code', { tabs: 5 });
    await fill('#kx-mfa-code', '000000'); await submit();
    await waitFor(`/nicht gültig/.test(document.querySelector('.kx-rate-msg[role="alert"]').textContent)`, 5000, 'wrong code message');
    assert.equal(await evaluate(`document.querySelector('#kx-mfa-code').value === '' && document.activeElement === document.querySelector('#kx-mfa-code')`), true);
    await fill('#kx-mfa-code', await nowCode(secret, 1)); await submit();   // the enrolment used the current step
    await h1('Bewertung');
    assert.match(await text(), /Bestätigt\./);
    // 4. recovery code path
    await expire();
    await as('rater1', 'rater.html');
    await h1('Anmeldung bestätigen');
    await evaluate(`document.querySelector('[data-act="mfa-use-recovery"]').click()`);
    await waitFor(`document.querySelector('#kx-mfa-recovery')`, 3000, 'recovery field');
    await A.a11y('2FA: verify with recovery code', { tabs: 5 });
    await fill('#kx-mfa-recovery', codes[0].toUpperCase()); await submit();
    await h1('Bewertung');
    assert.match(await text(), /Noch 9 Wiederherstellungscodes übrig/);
    // mobile width: no horizontal scroll on the enrolment-type screens
    await expire(); await as('rater1', 'rater.html'); await h1('Anmeldung bestätigen');
    await send('Emulation.setDeviceMetricsOverride', { width: 360, height: 640, deviceScaleFactor: 1, mobile: true }); await sleep(300);
    assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth + 1'), true, 'no horizontal scroll at 360 px');
    await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 800, deviceScaleFactor: 1, mobile: false });
    // 6. a rating interrupted by an expired second factor: the selection survives verification and is saved explicitly
    const created = await call(dev.env, 'POST', '/exam/v1/attempts', { user: dev.user, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: 'dev_e2e_rater2fa_00000001' } });
    const sx = { env: dev.env, user: dev.user, attempt: created.json.attempt_id, lease: created.json.lease.lease_id, build: syntheticBuild([PRACTICE.dir]) };
    for (const m of ['lesen', 'hoeren']) { await start(sx, m); if (m === 'hoeren') await post(sx, '/hoeren/events', { type: 'ready' }); await apiSubmit(sx, m); }
    await runSchreiben(sx); await apiSubmit(sx, 'schreiben');
    await runSprechen(sx); await apiSubmit(sx, 'sprechen');
    await complete(sx);
    await dev.access.env.DB.prepare('UPDATE sessions SET mfa_verified_at = ?2 WHERE user_id = ?1').bind(dev.users.rater1, Math.floor(Date.now() / 1000)).run();
    await as('rater1', 'rater.html');
    await waitFor(`document.querySelector('[data-act="open"][data-attempt="${sx.attempt}"]')`, 10000, 'attempt in the queue');
    await evaluate(`document.querySelector('[data-act="open"][data-attempt="${sx.attempt}"]').click()`);
    await waitFor(`document.querySelector('form.kx-rate')`, 10000, 'rating forms');
    const unit = await evaluate(`document.querySelector('form.kx-rate').dataset.unit`);
    const chosen = await evaluate(`(() => { const f = document.querySelector('form.kx-rate'); const out = {}; for (const sel of f.querySelectorAll('select[data-crit]')) { sel.value = sel.options[2].value; out[sel.dataset.crit] = sel.value; } return out; })()`);
    await expire();
    await evaluate(`document.querySelector('form.kx-rate').requestSubmit()`);
    await h1('Anmeldung bestätigen');
    assert.match(await text(), /Auswahl bleibt erhalten/);
    assert.equal((await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM ratings').first()).n, 0, 'nothing stored without a fresh second factor');
    await evaluate(`document.querySelector('[data-act="mfa-use-recovery"]').click()`);
    await waitFor(`document.querySelector('#kx-mfa-recovery')`, 3000, 'recovery field');
    await fill('#kx-mfa-recovery', codes[1]); await submit();
    await waitFor(`/Ihre Auswahl wurde wiederhergestellt/.test(document.body.innerText)`, 10000, 'back on the attempt with the selection');
    const restored = await evaluate(`(() => { const f = [...document.querySelectorAll('form.kx-rate')].find((x) => x.dataset.unit === ${JSON.stringify(unit)}); return Object.fromEntries([...f.querySelectorAll('select[data-crit]')].map((s) => [s.dataset.crit, s.value])); })()`);
    assert.deepEqual(restored, chosen, 'every band restored');
    assert.equal((await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM ratings').first()).n, 0, 'restored, not sent on its own');
    await evaluate(`[...document.querySelectorAll('form.kx-rate')].find((x) => x.dataset.unit === ${JSON.stringify(unit)}).requestSubmit()`);
    await waitFor(`/Gespeichert: [\\d,]+ Punkte/.test(document.body.innerText)`, 10000, 'saved after the explicit click');
    assert.equal((await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM ratings WHERE item_id = ?1').bind(unit).first()).n, 1);
    // 7. TOTP_ENC_KEY removed on the server while this freshly verified rater has the attempt open (A4 row 10): the next
    // save is refused, the loaded attempt disappears from the screen, a reload shows only the notice; learners carry on;
    // with the key back the same fresh session works again
    const savedKey = dev.access.env.TOTP_ENC_KEY;
    const other = await evaluate(`(() => { const f = [...document.querySelectorAll('form.kx-rate')].find((x) => x.dataset.unit !== ${JSON.stringify(unit)}); for (const sel of f.querySelectorAll('select[data-crit]')) sel.value = sel.options[1].value; return f.dataset.unit; })()`);
    delete dev.access.env.TOTP_ENC_KEY;
    await evaluate(`[...document.querySelectorAll('form.kx-rate')].find((x) => x.dataset.unit === ${JSON.stringify(other)}).requestSubmit()`);
    await waitFor(`/nicht verfügbar/.test(document.querySelector('.kx-error[role="alert"]')?.textContent || '')`, 10000, 'unavailable notice after a refused save');
    assert.equal(await evaluate(`document.querySelectorAll('form.kx-rate, .kx-queue, audio').length`), 0, 'no attempt material left on screen');
    assert.equal((await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM ratings WHERE item_id = ?1').bind(other).first()).n, 0, 'nothing stored without the key');
    await as('rater1', 'rater.html');
    await waitFor(`/nicht verfügbar/.test(document.querySelector('.kx-error[role="alert"]')?.textContent || '')`, 10000, 'unavailable notice on reload');
    assert.equal(await evaluate(`document.querySelectorAll('form.kx-rate, .kx-queue').length`), 0, 'no queue without the key');
    await A.a11y('2FA: unavailable notice', { tabs: 3 });
    await as('learner', '');
    await waitFor(`document.querySelector('[data-act="create"]')`, 10000, 'learner start screen without the key');
    dev.access.env.TOTP_ENC_KEY = savedKey;
    await as('rater1', 'rater.html');
    await waitFor(`document.querySelector('.kx-queue')`, 10000, 'queue again once the key is back');
    // 5. learners never see any of it
    await as('learner', '');
    await waitFor(`document.querySelector('[data-act="create"]')`, 10000, 'learner start screen');
    assert.equal(/zweiten Faktor|Anmeldung bestätigen/i.test(await text()), false);
    assert.deepEqual(A.findings, [], `automated accessibility findings on ${A.screens.join(', ')}`);
    const events = (await dev.access.env.DB.prepare('SELECT event FROM mfa_audit ORDER BY id').all()).results.map((e) => e.event);
    assert.deepEqual(events, ['enrolled', 'verify_failed', 'verified', 'recovery_used', 'recovery_used']);
    const exceptions = b.events.filter((e) => e.method === 'Runtime.exceptionThrown').map((e) => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text);
    log(`rater 2FA ${PRACTICE.name}`, 'PASS', { events });
    return exceptions;
  } finally { b.close(); dev.server.close(); }
}

/* LESEN-ONLY (EXAM_MODULE_ONLY=lesen, the self-practice configuration): the start screen offers only Lesen and says
   that the other modules are unavailable; a full attempt is refused; one Lesen attempt runs to a result with one module
   row and its item review; no other module can be started; desktop + mobile without horizontal scroll; a11y audit. */
async function runLesenOnly() {
  const dev = await startDevServer({ form: PRACTICE.name.toLowerCase(), flags: { EXAM_MODULE_ONLY: 'lesen', EXAM_RELEASE_FORMS: PRACTICE.id } });
  const b = await launch();
  const { send } = b;
  try {
    await send('Runtime.enable'); await send('Page.enable'); await send('Log.enable');
    const evaluate = async (expr) => {
      const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
      if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
      return r.result.value;
    };
    const text = () => evaluate('document.body.innerText');
    const waitFor = async (src, ms = 15000, label = src) => {
      const t0 = Date.now();
      while (Date.now() - t0 < ms) { if (await probe(evaluate, `(() => { try { return !!(${src}); } catch { return false; } })()`)) return; await sleep(250); }
      throw new Error(`timeout: ${label}\n--- page ---\n${(await text()).slice(0, process.env.KX_E2E_PAGE_CHARS ? Number(process.env.KX_E2E_PAGE_CHARS) : 600)}`);
    };
    const click = (sel) => evaluate(`document.querySelector(${JSON.stringify(sel)}).click()`);
    const vp = (w, h, mobile) => send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile });
    const apiFetch = (method, p, body) => evaluate(`fetch(${JSON.stringify('/exam/v1' + p)}, { method: ${JSON.stringify(method)}, credentials: 'include', headers: { 'content-type': 'application/json' }${body ? `, body: ${JSON.stringify(JSON.stringify(body))}` : ''} }).then(async (r) => ({ status: r.status, json: await r.json().catch(() => null) }))`);
    const A = makeA11y({ send, evaluate });
    const base = `http://127.0.0.1:${dev.port}/exam/`;
    const keys = Object.fromEntries((await dev.env.DB.prepare('SELECT item_id, key_json FROM item_keys').all()).results.map((r) => [r.item_id, JSON.parse(r.key_json).correct]));

    await vp(360, 640, true);
    await send('Page.navigate', { url: base });
    await waitFor(`document.querySelector('[data-act="create"][data-module="lesen"]')`, 15000, 'Lesen-only start screen');
    let t = await text();
    assert.match(t, /nur Lesen/i);
    assert.match(t, /Hören, Schreiben und Sprechen sind in dieser Version nicht verfügbar/);
    assert.match(t, /kein Prüfungsergebnis/);
    assert.equal(/Übung starten|allen vier Modulen/.test(t), false, 'the full simulation is not offered');
    assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth + 1'), true, 'no horizontal scroll at 360 px');
    await A.a11y('Lesen-only start (mobile)');
    await vp(1280, 800, false);
    const full = await apiFetch('POST', '/attempts', { mode: 'synthetic_full', level: 'b1', request_id: 'rq_e2e_lesenonly_full_0001', device_id: 'dev_e2e_lesenonly_00000001' });
    assert.equal(full.status, 403); assert.equal(full.json.error, 'mode_disabled');

    await click('[data-act="create"]');
    await waitFor(`document.querySelector('[data-act="start"][data-module="lesen"]')`, 15000, 'Lesen intro');
    t = await text();
    assert.match(t, /\d+ Minuten · 5 Teile · 30 Aufgaben/, 'the intro states time, parts and tasks before the clock starts');
    assert.match(t, /läuft auf dem Server weiter/);
    await A.a11y('Lesen intro');
    await click('[data-act="start"][data-module="lesen"]');
    await waitFor(`document.querySelectorAll('input[type=radio]').length > 20`, 15000, 'Lesen rendered');
    assert.equal(await evaluate(`document.querySelector('#part-1 + .kx-advisory')?.textContent`), 'Empfohlene Zeit: ca. 10 Minuten', 'advisory time under the part heading');
    // the timer and part navigation stay visible while the learner scrolls through the module
    await evaluate(`window.scrollTo(0, document.body.scrollHeight / 2)`); await sleep(200);
    const bar = await evaluate(`(() => { const r = document.querySelector('.kx-bar').getBoundingClientRect(); const tm = document.querySelector('.kx-timer').getBoundingClientRect(); return { top: Math.round(r.top), timerVisible: tm.top >= 0 && tm.bottom <= innerHeight, nav: !!document.querySelector('.kx-bar .kx-nav') }; })()`);
    assert.deepEqual(bar, { top: 0, timerVisible: true, nav: true }, 'sticky bar with timer and part navigation');
    // part tabs (GOETHE-B1-DIGITAL §2.3/§4): one part at a time; opening a tab shows its heading below the sticky bar
    // with focus on it, at desktop, tablet and phone width
    const tabState = () => evaluate(`(() => { const tabs = [...document.querySelectorAll('[role="tab"]')]; return { selected: tabs.filter((t) => t.getAttribute('aria-selected') === 'true').map((t) => t.dataset.tab),
      focusable: tabs.filter((t) => t.tabIndex === 0).map((t) => t.dataset.tab), shown: [...document.querySelectorAll('#kx-main .kx-part')].filter((p) => !p.hidden).map((p) => p.dataset.part),
      panels: [...document.querySelectorAll('#kx-main .kx-part')].every((p) => p.getAttribute('role') === 'tabpanel' && p.getAttribute('aria-labelledby') === 'tab-part-' + p.dataset.part && p.id === 'panel-part-' + p.dataset.part),
      focus: document.activeElement && (document.activeElement.dataset.tab ? 'tab-' + document.activeElement.dataset.tab : document.activeElement.id), said: document.querySelector('#kx-sr-announce').textContent }; })()`);
    const openTab = async (n) => { await evaluate(`document.querySelector('[role="tab"][data-tab="${n}"]').click()`); await sleep(300); };
    let ts = await tabState();
    assert.deepEqual([ts.selected, ts.focusable, ts.shown, ts.panels], [['1'], ['1'], ['1'], true], `first part open, one tab in the Tab order: ${JSON.stringify(ts)}`);
    // keyboard (manual activation): arrows move focus without opening; Enter opens and moves focus to the heading
    await evaluate(`document.querySelector('[role="tab"][data-tab="1"]').focus()`);
    const key = async (k, code, vk) => { for (const type of ['keyDown', 'keyUp']) await send('Input.dispatchKeyEvent', { type, key: k, code, windowsVirtualKeyCode: vk }); await sleep(120); };
    await key('ArrowRight', 'ArrowRight', 39); ts = await tabState();
    assert.deepEqual([ts.focus, ts.selected, ts.shown], ['tab-2', ['1'], ['1']], `ArrowRight moves focus only: ${JSON.stringify(ts)}`);
    assert.equal(await evaluate(`document.activeElement.matches(':focus-visible') && parseFloat(getComputedStyle(document.activeElement).outlineWidth) >= 2`), true, 'visible focus ring on the tab');
    await key('End', 'End', 35); assert.equal((await tabState()).focus, 'tab-5'); await key('ArrowRight', 'ArrowRight', 39); assert.equal((await tabState()).focus, 'tab-1', 'wraps around');
    await key('Home', 'Home', 36); await key('ArrowLeft', 'ArrowLeft', 37); assert.equal((await tabState()).focus, 'tab-5');
    await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13, text: '\r' }); await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 }); await sleep(300);
    ts = await tabState();
    assert.deepEqual([ts.selected, ts.focusable, ts.shown, ts.focus, ts.said], [['5'], ['5'], ['5'], 'part-5', 'Teil 5 geöffnet.'], `Enter opens Teil 5, focus on its heading, announced: ${JSON.stringify(ts)}`);
    await A.a11y('Lesen part tabs');
    for (const [w, h, mobile] of [[1280, 800, false], [800, 1024, true], [360, 640, true]]) {
      await vp(w, h, mobile); await evaluate(`window.scrollTo(0, 0)`); await sleep(100);
      await openTab(4);
      const pos = await evaluate(`({ bar: document.querySelector('.kx-bar').getBoundingClientRect().bottom, barH: document.querySelector('.kx-bar').getBoundingClientRect().height, head: document.getElementById('part-4').getBoundingClientRect().top, noHScroll: document.documentElement.scrollWidth <= innerWidth + 1 })`);
      assert.ok(pos.head >= pos.bar - 1, `Teil 4 heading visible below the bar at ${w}px: ${JSON.stringify(pos)}`);
      assert.ok(pos.noHScroll, `no horizontal scroll at ${w}px`);
      assert.ok(pos.barH <= 120, `the sticky bar stays compact at ${w}px (${pos.barH} px)`);
      ts = await tabState(); assert.deepEqual([ts.selected, ts.shown, ts.focus], [['4'], ['4'], 'part-4'], `Teil 4 open and focused at ${w}px: ${JSON.stringify(ts)}`);
      const tabVis = await evaluate(`(() => { const t = document.querySelector('[role="tab"][data-tab="4"]'), row = t.closest('ol'); const r = t.getBoundingClientRect(), rr = row.getBoundingClientRect(); return r.left >= rr.left - 1 && r.right <= rr.right + 1; })()`);
      assert.equal(tabVis, true, `the open part's tab is visible in the tab row at ${w}px`);
      const cols = await evaluate(`(() => { const t = document.querySelector('#kx-main .kx-part:not([hidden]) .kx-split .kx-task-texts').getBoundingClientRect(), i = document.querySelector('#kx-main .kx-part:not([hidden]) .kx-split .kx-task-items').getBoundingClientRect(); return { sideBySide: t.right <= i.left + 1 && t.top < i.bottom && t.bottom > i.top,   /* beside = no horizontal overlap, shared rows (the texts column is sticky, so tops differ) */ stacked: t.bottom <= i.top + 1 }; })()`);
      assert.equal(w < 768 ? cols.stacked : cols.sideBySide, true, `Lesen texts ${w < 768 ? 'above' : 'beside'} the tasks at ${w}px: ${JSON.stringify(cols)}`);
      // ENGINE §9.1: on a phone a sticky "Text / Aufgaben" pair (above the submit bar) jumps between the stacked columns;
      // hidden on wide screens where both are side by side
      const tog = () => evaluate(`(() => { const split = [...document.querySelectorAll('#kx-main .kx-part:not([hidden]) .kx-split')].find((x) => { const r = x.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; }) || document.querySelector('#kx-main .kx-part:not([hidden]) .kx-split');
        const n = split.querySelector('.kx-split-toggle'); const st = getComputedStyle(n); const r = n.getBoundingClientRect(); const foot = document.querySelector('.kx-foot').getBoundingClientRect();
        return { shown: st.display !== 'none', inView: r.top >= 0 && r.bottom <= innerHeight, aboveFoot: r.bottom <= foot.top + 1, links: [...n.querySelectorAll('a')].map((a) => a.getAttribute('href')) }; })()`);
      assert.equal(await evaluate(`[...document.querySelectorAll('.kx-split-collapse')].some((b) => getComputedStyle(b).display !== 'none')`), w >= 768 && w < 1024, `collapse control only at tablet width (${w}px)`);
      if (w >= 768) assert.equal((await tog()).shown, false, `no Text/Aufgaben toggle beside side-by-side columns (${w}px)`);
      else {
        await evaluate(`document.querySelector('#kx-main .kx-part:not([hidden]) .kx-split .kx-task-items .kx-item:last-child').scrollIntoView({ block: 'center' })`); await sleep(300);
        const t = await tog();
        assert.ok(t.shown && t.inView && t.aboveFoot && t.links.length === 2, `sticky toggle on a phone: ${JSON.stringify(t)}`);
        for (const [i, which] of [[0, 'texts'], [1, 'items']]) {
          await evaluate(`[...document.querySelectorAll('#kx-main .kx-part:not([hidden]) .kx-split .kx-split-toggle')].find((n) => { const r = n.getBoundingClientRect(); return r.top >= 0 && r.bottom <= innerHeight; }).querySelectorAll('a')[${i}].click()`); await sleep(400);
          const land = await evaluate(`(() => { const el = document.querySelector(location.hash); const r = el.getBoundingClientRect(); return { hash: location.hash, top: r.top, bar: document.querySelector('.kx-bar').getBoundingClientRect().bottom }; })()`);
          assert.ok(land.hash.startsWith(`#kx-${which}-`) && land.top >= land.bar - 1 && land.top < land.bar + 40, `toggle → ${which} lands below the bar: ${JSON.stringify(land)}`);
        }
      }
      if (process.env.KX_E2E_SHOTS) fs.writeFileSync(path.join(process.env.KX_E2E_SHOTS, `lesen-bar-${w}.png`), Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).data, 'base64'));
    }
    // ENGINE §9.1 Teil 4: "Zum Text" beside a name brings that person's comment into view (own scroll column on desktop,
    // stacked page on a phone), below the sticky bar
    for (const [w, h, mobile] of [[1280, 800, false], [360, 640, true]]) {
      await vp(w, h, mobile); await sleep(200);
      const jump = await evaluate(`(() => { const a = [...document.querySelectorAll('#part-4 ~ .kx-task .kx-stim-jump, [data-part="4"] .kx-stim-jump')].at(-1); a.scrollIntoView({ block: 'center' }); a.click(); return a.getAttribute('aria-label'); })()`);
      await sleep(500);
      const seen = await evaluate(`(() => { const t = document.querySelector(location.hash); const r = t.getBoundingClientRect(), bar = document.querySelector('.kx-bar').getBoundingClientRect().bottom;
        const col = t.closest('.kx-task-texts').getBoundingClientRect(); const top = Math.max(bar, col.top);
        return { hash: location.hash, label: t.querySelector('.kx-stim-label').textContent, visible: r.top >= top - 1 && r.top < Math.min(innerHeight, col.bottom) - 40 }; })()`);
      assert.ok(jump.endsWith(seen.label) && seen.visible, `Teil 4 jump at ${w}px: ${jump} → ${JSON.stringify(seen)}`);
    }
    // ENGINE §9.1 tablet (768–1023 px): split pane with a collapsible texts column — keyboard, focus, labels, layout
    {
      await vp(800, 1024, true); await evaluate(`window.scrollTo(0, 0)`); await sleep(200);
      await openTab(1);
      const key2 = async (k, code, vk, text) => { for (const type of ['keyDown', 'keyUp']) await send('Input.dispatchKeyEvent', { type, key: k, code, windowsVirtualKeyCode: vk, ...(text && type === 'keyDown' ? { text } : {}) }); await sleep(150); };
      const state = (part) => evaluate(`(() => { const sp = document.querySelector('[data-part="${part}"] .kx-split'); const b = sp.querySelector('.kx-split-collapse'); const r = b.getBoundingClientRect();
        const texts = document.getElementById(b.getAttribute('aria-controls')); const items = sp.querySelector('.kx-task-items').getBoundingClientRect(), grid = sp.querySelector('.kx-split-grid').getBoundingClientRect();
        return { name: b.textContent, expanded: b.getAttribute('aria-expanded'), h: Math.round(r.height), textsShown: getComputedStyle(texts).display !== 'none', itemsFull: Math.abs(items.width - grid.width) < 2,
          focused: document.activeElement === b, ring: b.matches(':focus-visible') && getComputedStyle(b).outlineStyle !== 'none' && parseFloat(getComputedStyle(b).outlineWidth) >= 2,
          noH: document.documentElement.scrollWidth <= innerWidth + 1 }; })()`);
      let st = await state(1);
      assert.ok(st.name === 'Texte zu Teil 1' && st.expanded === 'true' && st.h >= 44 && st.textsShown && !st.itemsFull && st.noH, `tablet: expanded by default ${JSON.stringify(st)}`);
      await evaluate(`document.querySelector('[data-part="1"] .kx-split-collapse').focus()`);
      await key2('Enter', 'Enter', 13, '\r'); st = await state(1);
      assert.ok(st.expanded === 'false' && !st.textsShown && st.itemsFull && st.focused && st.ring && st.noH, `tablet: Enter collapses, focus stays with a visible ring ${JSON.stringify(st)}`);
      await A.a11y('Lesen tablet, texts collapsed');   // the audit tabs through the page: focus the control again
      await evaluate(`document.querySelector('[data-part="1"] .kx-split-collapse').focus()`);
      await key2(' ', 'Space', 32, ' '); st = await state(1);
      assert.ok(st.expanded === 'true' && st.textsShown && !st.itemsFull && st.focused && st.noH, `tablet: Space expands ${JSON.stringify(st)}`);
      // part navigation still lands below the bar while a panel is collapsed
      await evaluate(`document.querySelector('[data-part="1"] .kx-split-collapse').click()`);
      await openTab(3);
      const nav = await evaluate(`({ bar: document.querySelector('.kx-bar').getBoundingClientRect().bottom, head: document.getElementById('part-3').getBoundingClientRect().top, noH: document.documentElement.scrollWidth <= innerWidth + 1 })`);
      assert.ok(nav.head >= nav.bar - 1 && nav.noH, `tablet: part jump with a collapsed panel ${JSON.stringify(nav)}`);
      // a Teil 4 "Zum Text" jump into a collapsed panel opens it and shows that comment
      await openTab(4); await evaluate(`document.querySelector('[data-part="4"] .kx-split-collapse').click()`);
      assert.equal((await state(4)).textsShown, false);
      const label = await evaluate(`(() => { const a = [...document.querySelectorAll('[data-part="4"] .kx-stim-jump')].at(-1); a.scrollIntoView({ block: 'center' }); a.click(); return a.getAttribute('aria-label'); })()`);
      await sleep(500); st = await state(4);
      const seen = await evaluate(`(() => { const t = document.querySelector(location.hash); const r = t.getBoundingClientRect(); return { label: t.querySelector('.kx-stim-label').textContent, inView: r.top >= 0 && r.top < innerHeight - 40 }; })()`);
      assert.ok(st.expanded === 'true' && st.textsShown && label.endsWith(seen.label) && seen.inView, `tablet: jump opens the collapsed panel ${JSON.stringify({ st, seen, label })}`);
      // the collapsed state never leaks into desktop or phone layouts
      await openTab(1); await evaluate(`document.querySelector('[data-part="1"] .kx-split') .classList.contains('kx-collapsed') || document.querySelector('[data-part="1"] .kx-split-collapse').click()`);
      for (const [w, h, m] of [[1280, 800, false], [360, 640, true]]) {
        await vp(w, h, m); await sleep(200);
        const v = await evaluate(`(() => { const sp = document.querySelector('[data-part="1"] .kx-split'); return { collapsedClass: sp.classList.contains('kx-collapsed'), textsShown: getComputedStyle(sp.querySelector('.kx-task-texts')).display !== 'none', noH: document.documentElement.scrollWidth <= innerWidth + 1 }; })()`);
        assert.ok(v.collapsedClass && v.textsShown && v.noH, `a tablet-collapsed panel still shows its texts at ${w}px: ${JSON.stringify(v)}`);
      }
      await vp(800, 1024, true); await sleep(200);
      await evaluate(`document.querySelector('[data-part="1"] .kx-split-collapse').click()`);   // back to expanded
    }
    await vp(1280, 800, false);
    await evaluate(`window.scrollTo(0, 0)`);
    const attempt = (await dev.env.DB.prepare('SELECT id, mode, module_scope FROM attempts').first());
    assert.deepEqual([attempt.mode, attempt.module_scope], ['synthetic_full', 'lesen']);
    const lease = await evaluate(`sessionStorage.getItem('kx-lease:${attempt.id}')`);
    for (const module of ['hoeren', 'schreiben', 'sprechen']) {
      const r = await apiFetch('GET', `/attempts/${attempt.id}/modules/${module}/package?lease_id=${lease}`);
      assert.equal(r.status, 404, `${module} unreachable: ${JSON.stringify(r.json)}`); assert.equal(r.json.error, 'module_not_found');
    }
    // ENGINE §9.1 L3: ads as equal cards (grid from 768 px) that say where they are used; options say "verwendet bei n";
    // choosing an ad twice is marked, never blocked or reset; the phone filter only hides cards
    {
      const t3 = '[data-part="3"]';
      await openTab(3);
      const sel = (no) => `${t3} select[data-no="${no}"]`;
      const choose = (no, v) => evaluate(`(() => { const s = document.querySelector('${sel(no)}'); s.value = '${v}'; s.dispatchEvent(new Event('change', { bubbles: true })); })()`);
      const view = () => evaluate(`(() => { const cards = [...document.querySelectorAll('${t3} .kx-ad')]; const vis = cards.filter((c) => getComputedStyle(c).display !== 'none');
        const rects = vis.map((c) => c.getBoundingClientRect()); const lefts = [...new Set(rects.map((r) => Math.round(r.left)))];
        const c = document.querySelector('${t3} .kx-ad[data-ad="c"]');
        return { n: cards.length, visible: vis.map((x) => x.dataset.ad).join(''), cols: lefts.length, widths: [...new Set(rects.map((r) => Math.round(r.width)))].length,
          grid: getComputedStyle(document.querySelector('${t3} .kx-ads-list')).display, cStatus: c.querySelector('[data-ad-status]').textContent, cUsed: c.classList.contains('kx-ad-is-used'), cEdge: getComputedStyle(c).boxShadow !== 'none',
          opt14c: [...document.querySelector('${sel(14)}').options].find((o) => o.value === 'c').textContent, filterShown: getComputedStyle(document.querySelector('${t3} .kx-ad-filter')).display !== 'none',
          count: document.querySelector('${t3} [data-ad-count]').textContent, values: [...document.querySelectorAll('${t3} select[data-item]')].map((s) => s.value).join(','), noH: document.documentElement.scrollWidth <= innerWidth + 1 }; })()`);
      const shot3 = async (name) => { if (!process.env.KX_E2E_SHOTS) return; await evaluate(`document.querySelector('${t3} .kx-ads-list').scrollIntoView({ block: 'start' }); window.scrollBy(0, -140)`); await sleep(200); fs.writeFileSync(path.join(process.env.KX_E2E_SHOTS, `lesen-ads-${name}.png`), Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).data, 'base64')); };
      const t3Rows = async () => JSON.stringify((await dev.env.DB.prepare("SELECT r.item_id, r.value_json FROM responses_current r JOIN items_index i ON i.item_id = r.item_id WHERE i.module = 'lesen' AND i.part = 3 ORDER BY r.item_id").all()).results);
      await vp(1280, 800, false); await sleep(200);
      let v = await view();
      assert.ok(v.n === 10 && v.visible === 'abcdefghij' && v.grid === 'grid' && v.cols === 2 && v.widths === 1 && !v.filterShown && v.cStatus === '' && v.opt14c === 'c' && v.noH, `L3 desktop grid ${JSON.stringify(v)}`);
      await choose(13, 'c'); await sleep(200); v = await view();
      assert.ok(v.cStatus === 'verwendet bei 13' && v.cUsed && v.cEdge && v.opt14c === 'c (verwendet bei 13)', `L3 used ad marked ${JSON.stringify(v)}`);
      await choose(14, 'c'); await sleep(200); v = await view();
      assert.ok(v.cStatus === 'verwendet bei 13, 14 – jede Anzeige darf nur einmal gewählt werden' && /^Beispiel|,c,c,/.test(v.values), `L3 a second use is marked, not blocked ${JSON.stringify(v)}`);
      await shot3('1280');
      const usesOf = async (opt) => JSON.parse(await t3Rows()).filter((r) => JSON.parse(r.value_json).option_id === opt).length;
      for (const t0 = Date.now(); (await usesOf('c')) !== 2; await sleep(200)) if (Date.now() - t0 > 15000) throw new Error(`both uses of ad c stored: ${await t3Rows()}`);
      await vp(800, 1024, true); await sleep(200); v = await view();
      assert.ok(v.grid === 'grid' && v.visible === 'abcdefghij' && !v.filterShown && v.noH, `L3 tablet ${JSON.stringify(v)}`);
      // phone: filter by text and by "unused"; answers and server rows never change
      await vp(360, 640, true); await sleep(200);
      const before = { values: (await view()).values, rows: await t3Rows() };
      v = await view(); assert.ok(v.filterShown && v.visible === 'abcdefghij' && v.count === '' && v.noH, `L3 phone filter ${JSON.stringify(v)}`);
      const typeQ = (q) => evaluate(`(() => { const i = document.querySelector('${t3} [data-ad-filter]'); i.value = ${JSON.stringify('')} + ${JSON.stringify(q)}; i.dispatchEvent(new Event('input', { bubbles: true })); })()`);
      await typeQ('zzzz'); await sleep(200); v = await view();
      assert.ok(v.visible === '' && v.count === 'Keine Anzeige passt zum Filter. Ihre Antworten bleiben unverändert.', `L3 empty filter ${JSON.stringify(v)}`);
      const word = await evaluate(`document.querySelector('${t3} .kx-ad[data-ad="j"] p').textContent.split(/\\s+/).find((w) => w.length > 6)`);
      await typeQ(word.toUpperCase()); await sleep(200); v = await view();
      assert.ok(v.visible.includes('j') && /^\d+ von 10 Anzeigen$/.test(v.count), `L3 text filter "${word}" ${JSON.stringify(v)}`);
      await typeQ(''); await evaluate(`document.querySelector('${t3} [data-ad-unused]').click()`); await sleep(200); v = await view();
      assert.ok(v.visible === 'bdefghij' && v.count === '8 von 10 Anzeigen', `L3 unused filter hides the used ads (a: example, c) ${JSON.stringify(v)}`);
      await shot3('360-unused');
      await choose(13, 'd'); await sleep(200); v = await view();
      assert.ok(!v.visible.includes('d') && v.visible.includes('c') === false && v.cStatus === 'verwendet bei 14', `L3 filter follows a new choice ${JSON.stringify(v)}`);
      await choose(13, 'c'); await sleep(200);
      await A.a11y('Lesen Teil 3 phone filter');
      v = await view(); assert.equal(v.values, before.values, 'filtering changed no answer'); assert.ok(v.noH);
      for (const t0 = Date.now(); (await t3Rows()) !== before.rows; await sleep(200)) if (Date.now() - t0 > 15000) throw new Error(`server rows after filtering differ`);
      // an active phone filter never hides cards on wider screens
      await vp(1280, 800, false); await sleep(200); v = await view();
      assert.ok(v.visible === 'abcdefghij', `L3 desktop ignores the phone filter ${JSON.stringify(v)}`);
      await vp(360, 640, true); await sleep(200);
      await evaluate(`document.querySelector('${t3} [data-ad-unused]').click()`); await sleep(100);
      await vp(1280, 800, false); await sleep(200);
      await choose(14, ''); await sleep(200);
    }
    const lesen = (await dev.env.DB.prepare("SELECT item_id FROM items_index WHERE module = 'lesen' AND is_example = 0").all()).results;
    await evaluate(`(() => { const plan = ${JSON.stringify(Object.fromEntries(lesen.map((r) => [r.item_id, keys[r.item_id]])))};
      for (const [id, v] of Object.entries(plan)) { const el = document.querySelector('[data-item="' + id + '"][value="' + v + '"]');
        if (el) { el.click(); continue; } const sel = document.querySelector('select[data-item="' + id + '"]'); if (sel) { sel.value = v; sel.dispatchEvent(new Event('change', { bubbles: true })); } } })()`);
    for (const t0 = Date.now(); (await dev.env.DB.prepare("SELECT COUNT(*) AS n FROM responses_current WHERE module = 'lesen'").first()).n < lesen.length; await sleep(200)) {
      if (Date.now() - t0 > 15000) throw new Error('Lesen answers not stored');
    }
    // ENGINE §8: the session expires mid-module. An answer changed now is queued on the device; the screen offers sign-in in a
    // new tab and "Weiter". Signing in as SOMEONE ELSE shows that user's own state (identity is checked again, the attempt
    // stays hidden); signing in as the learner resumes the SAME attempt, sends the queued answer, keeps the deadline.
    const lesenRow = () => dev.env.DB.prepare("SELECT deadline_at FROM attempt_modules WHERE attempt_id = ?1 AND module = 'lesen'").bind(attempt.id).first();
    const deadlineBefore = (await lesenRow()).deadline_at;
    const probeItem = (await dev.env.DB.prepare("SELECT item_id FROM items_index WHERE module = 'lesen' AND is_example = 0 AND interaction = 'binary_choice' LIMIT 1").first()).item_id;
    const stored = async () => JSON.parse((await dev.env.DB.prepare('SELECT value_json FROM responses_current WHERE item_id = ?1').bind(probeItem).first()).value_json).option_id;
    const correctOpt = await stored();
    // an expired session: every exam call answers 401, while cookies still reach the server (the cookie pre-flight says
    // "received"; through the dev proxy on plain http the real probe cookie is Secure and would be dropped by Chrome)
    await send('Fetch.enable', { patterns: [{ urlPattern: '*/exam/v1/*', requestStage: 'Request' }, { urlPattern: '*/auth/cookie-probe*', requestStage: 'Request' }] });
    const expiredFrom = b.events.length;
    const json = (o) => ({ responseHeaders: [{ name: 'content-type', value: 'application/json' }], body: Buffer.from(JSON.stringify(o)).toString('base64') });
    const fulfil401 = setInterval(() => { for (const e of b.events.slice(expiredFrom)) if (e.method === 'Fetch.requestPaused' && !e.__done) { e.__done = true;
      const probe = /\/auth\/cookie-probe/.test(e.params.request.url);
      send('Fetch.fulfillRequest', { requestId: e.params.requestId, responseCode: probe ? 200 : 401, ...json(probe ? { ok: true, received: true } : { ok: false, error: 'auth_required' }) }).catch(() => {}); } }, 50);
    const changedTo = await evaluate(`(() => { const r = [...document.querySelectorAll('input[type=radio][data-item="${probeItem}"]')].find((x) => !x.checked); r.click(); return r.value; })()`);
    assert.notEqual(changedTo, correctOpt);
    await waitFor(`/Bitte erneut anmelden/.test(document.body.innerText)`, 20000, 'session expired screen');
    assert.equal(await stored(), correctOpt, 'the server still holds the old answer while signed out');
    const signIn = await evaluate(`(() => { const a = [...document.querySelectorAll('a')].find((x) => /In neuem Tab anmelden/.test(x.textContent)); return a && { href: a.getAttribute('href'), target: a.target, rel: a.rel }; })()`);
    assert.deepEqual(signIn, { href: '../account/index.html', target: '_blank', rel: 'noopener' });
    assert.match(await text(), /Prüfungszeit läuft auf dem Server weiter/);
    await A.a11y('session expired');
    await vp(360, 640, true); await sleep(200);
    assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth + 1'), true, 'session screen: no horizontal scroll at 360 px');
    await A.a11y('session expired (mobile)');
    await vp(1280, 800, false);
    clearInterval(fulfil401); await send('Fetch.disable');
    // signed in as a different account in the other tab: this tab now shows THAT account's own state
    await evaluate(`document.cookie = 'kx-dev-as=outsider; path=/'`);
    await evaluate('window.__beforeReload = true'); await click('[data-act="reload"]');
    await waitFor(`!window.__beforeReload && /nicht freigeschaltet/.test(document.body.innerText)`, 15000, 'another identity sees its own state');
    assert.equal(await evaluate(`document.querySelectorAll('input[type=radio]').length`), 0, 'the learner’s attempt is not shown to another account');
    // signed in as the learner again: the same attempt resumes and the queued answer is sent
    await evaluate(`document.cookie = 'kx-dev-as=learner; path=/'`);
    await evaluate('window.__beforeReload = true'); await send('Page.reload');
    await waitFor(`!window.__beforeReload && document.querySelectorAll('input[type=radio]').length > 20`, 15000, 'resumed after signing in');
    for (const t0 = Date.now(); (await stored()) !== changedTo; await sleep(200)) if (Date.now() - t0 > 15000) throw new Error('queued answer not sent after resume');
    assert.equal((await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM attempts').first()).n, 1, 'the same attempt continues (no duplicate)');
    assert.equal((await lesenRow()).deadline_at, deadlineBefore, 'signing in again never moves the deadline');
    assert.match(await evaluate(`document.querySelector('.kx-progress').textContent`), new RegExp(`${lesen.length} von ${lesen.length} beantwortet`), 'every answer is still there');
    // resume at the same part and item: the item changed last before the reload is back in view below the bar
    const pos = await evaluate(`(() => { const it = document.querySelector('input[data-item="${probeItem}"]').closest('[id^="item-"]'); const r = it.getBoundingClientRect(), bar = document.querySelector('.kx-bar').getBoundingClientRect().bottom;
      return { top: Math.round(r.top), bar: Math.round(bar), vh: innerHeight, scrolled: scrollY > 0, said: document.querySelector('#kx-announce').textContent, part: it.closest('.kx-part').dataset.part, stored: localStorage.getItem('kx-pos:${attempt.id}:lesen') === it.id }; })()`);
    assert.deepEqual((await tabState()).selected, [pos.part], 'the resumed tab is the part of the last item');
    assert.ok(pos.stored && pos.scrolled && pos.top >= pos.bar - 1 && pos.top < pos.vh - 40 && pos.said === `Weiter in Teil ${pos.part}, bei der zuletzt bearbeiteten Aufgabe.`, `resume position ${JSON.stringify(pos)}`);
    // ENGINE §8 network loss: offline, an answer change stays on the device (IndexedDB queue) and the learner is told so;
    // back online it is sent and the recovery is announced
    {
      await send('Network.enable');
      await send('Network.emulateNetworkConditions', { offline: true, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
      const other = await evaluate(`(() => { const r = [...document.querySelectorAll('input[type=radio][data-item="${probeItem}"]')].find((x) => !x.checked); r.click(); return r.value; })()`);
      await waitFor(`/^Offline – Ihre Antworten bleiben auf diesem Gerät gespeichert/.test(document.querySelector('#kx-announce')?.textContent || '')`, 20000, 'offline announcement');
      await openTab(3); await openTab(1);   // switching parts while offline keeps the unsent answer
      assert.equal(await evaluate(`document.querySelector('input[data-item="${probeItem}"]:checked')?.value`), other, 'the offline answer survives tab switches');
      assert.match(await evaluate(`document.querySelector('.kx-save').textContent`), /^Offline/);
      assert.notEqual(await stored(), other, 'nothing reached the server while offline');
      await send('Network.emulateNetworkConditions', { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
      await evaluate(`window.dispatchEvent(new Event('online'))`);
      for (const t0 = Date.now(); (await stored()) !== other; await sleep(200)) if (Date.now() - t0 > 30000) throw new Error('queued answer not sent after reconnect');
      await waitFor(`/^Wieder verbunden\. Alle Antworten sind gespeichert\./.test(document.querySelector('#kx-announce')?.textContent || '')`, 20000, 'recovery announced');
    }
    // back to the correct answer for the score check below
    await evaluate(`document.querySelector('input[type=radio][data-item="${probeItem}"][value="${correctOpt}"]').click()`);
    for (const t0 = Date.now(); (await stored()) !== correctOpt; await sleep(200)) if (Date.now() - t0 > 15000) throw new Error('answer not restored');
    // ENGINE §9.1 item flag: a local reminder — survives a reload, listed in the submit review, never sent to the server
    const serverRows = async () => JSON.stringify((await dev.env.DB.prepare("SELECT item_id, value_json, seq FROM responses_current WHERE module = 'lesen' ORDER BY item_id").all()).results);
    await sleep(1500); const rowsBefore = await serverRows();
    const flagSel = `.kx-flag[data-flag="${probeItem}"]`;
    assert.equal(await evaluate(`document.querySelector('${flagSel}').getAttribute('aria-pressed')`), 'false');
    await click(flagSel);
    assert.equal(await evaluate(`document.querySelector('${flagSel}').getAttribute('aria-pressed')`), 'true', 'flag pressed');
    assert.deepEqual(await evaluate(`JSON.parse(localStorage.getItem('kx-flags:${attempt.id}'))`), [probeItem], 'flag kept on the device');
    await evaluate('window.__beforeReload = true'); await send('Page.reload');
    await waitFor(`!window.__beforeReload && document.querySelector('${flagSel}')?.getAttribute('aria-pressed') === 'true'`, 15000, 'flag restored after reload');
    await sleep(1500);
    assert.equal(await serverRows(), rowsBefore, 'flagging changed nothing on the server');
    await click('[data-act="submit"]'); await waitFor(`document.querySelector('#kx-review')`, 5000, 'review with flags');
    assert.match(await evaluate(`document.querySelector('#kx-review').innerText`), /1 Aufgabe ist zur Kontrolle markiert[\s\S]*markiert: Aufgabe \d+/, 'the review lists the marked item');
    await A.a11y('Lesen review with a marked item');
    await click('[data-act="review-close"]'); await waitFor(`!document.querySelector('#kx-review')`, 5000, 'review closed');
    // ENGINE §9.1 item palette: every item with its state in words; a jump closes it and focuses the item's control
    {
      const pal = () => evaluate(`(() => { const b = document.querySelector('.kx-palette-toggle'); const p = document.getElementById('kx-palette');
        return { expanded: b.getAttribute('aria-expanded'), open: !!p, links: p ? p.querySelectorAll('a[data-palette-jump]').length : 0, sum: p ? p.querySelector('.kx-palette-sum').textContent : '',
          flagged: p ? [...p.querySelectorAll('.is-flagged')].map((a) => a.textContent) : [], bar: Math.round(document.querySelector('.kx-bar').getBoundingClientRect().height), noH: document.documentElement.scrollWidth <= innerWidth + 1 }; })()`);
      let v = await pal();
      assert.deepEqual([v.expanded, v.open], ['false', false]);
      await evaluate(`document.querySelector('.kx-palette-toggle').click()`); await sleep(150); v = await pal();
      assert.ok(v.expanded === 'true' && v.open && v.links === 30 && v.sum === '30 beantwortet · 0 offen · 1 markiert' && v.flagged.length === 1 && /markiert/.test(v.flagged[0]) && v.noH, `palette open ${JSON.stringify(v)}`);
      assert.equal(await evaluate(`document.activeElement && document.activeElement.classList.contains('kx-palette-toggle')`), true, 'focus stays on the toggle');
      await A.a11y('Lesen item palette');
      const target = await evaluate(`(() => { const a = [...document.querySelectorAll('#kx-palette a[data-palette-jump]')][20]; const id = a.getAttribute('href').slice(1); a.click(); return id; })()`);
      await sleep(400);
      const land = await evaluate(`(() => { const it = document.getElementById(${JSON.stringify(target)}); const r = it.getBoundingClientRect(); return { closed: !document.getElementById('kx-palette') && document.querySelector('.kx-palette-toggle').getAttribute('aria-expanded') === 'false',
        focusIn: it.contains(document.activeElement), top: Math.round(r.top), bar: Math.round(document.querySelector('.kx-bar').getBoundingClientRect().bottom) }; })()`);
      assert.ok(land.closed && land.focusIn && land.top >= land.bar - 1, `palette jump ${JSON.stringify(land)}`);
      await vp(360, 640, true); await sleep(200);
      await evaluate(`document.querySelector('.kx-palette-toggle').click()`); await sleep(150); v = await pal();
      const scrolls = await evaluate(`(() => { const p = document.getElementById('kx-palette'); return p.scrollHeight > p.clientHeight && getComputedStyle(p).overflowY === 'auto'; })()`);
      // on a phone the open overview takes most of the screen (it closes on a jump); it scrolls on its own and leaves content below
      assert.ok(v.open && v.noH && v.bar <= 640 - 100 && scrolls, `palette on a phone ${JSON.stringify({ ...v, scrolls })}`);
      await evaluate(`document.querySelector('.kx-palette-toggle').click()`); await vp(1280, 800, false); await sleep(200);
    }
    // GOETHE-B1-DIGITAL §4: Browser Back does not leave the running exam silently — a modal asks; staying keeps
    // everything, leaving really leaves, and coming back resumes the same running attempt
    {
      const dlg = () => evaluate(`(() => { const d = document.getElementById('kx-leave'); return { open: !!d && d.open, focus: document.activeElement && document.activeElement.dataset.leave || null, text: d ? d.innerText : '', main: !!document.getElementById('kx-main') }; })()`);
      assert.equal(await evaluate(`!!document.querySelector('dialog[open]')`), false, 'in-page # links (fragment navigations) never opened the dialog');
      // Back walks through the in-page #link entries first (normal browser history); the dialog appears when Back would
      // leave the exam page
      for (let i = 0; i < 40 && !(await evaluate(`!!document.getElementById('kx-leave')?.open`)); i++) { await evaluate('history.back()'); await sleep(150); }
      await waitFor(`document.getElementById('kx-leave')?.open`, 5000, 'leave dialog on Back');
      let d = await dlg();
      assert.ok(d.open && d.focus === 'stay' && /Prüfung verlassen\?/.test(d.text) && /Die Zeit läuft weiter/.test(d.text) && d.main, `leave dialog ${JSON.stringify(d)}`);
      await A.a11y('leave dialog');
      await evaluate(`document.querySelector('#kx-leave [data-leave="stay"]').click()`); await sleep(200);
      d = await dlg(); assert.ok(!d.open && d.main, 'stay keeps the exam open');
      await evaluate('history.back()'); await waitFor(`document.getElementById('kx-leave')?.open`, 5000, 'leave dialog again');
      for (const type of ['keyDown', 'keyUp']) await send('Input.dispatchKeyEvent', { type, key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
      await sleep(200); d = await dlg(); assert.ok(!d.open && d.main, 'Escape stays too');
      assert.equal((await dev.env.DB.prepare("SELECT status FROM attempt_modules WHERE module = 'lesen'").first()).status, 'running');
      await evaluate('history.back()'); await waitFor(`document.getElementById('kx-leave')?.open`, 5000, 'leave dialog a third time');
      // leaving really navigates away (here the earlier history entry is the exam URL itself, so a new document loads)
      await evaluate(`window.__beforeLeave = true; document.querySelector('#kx-leave [data-leave="go"]').click()`);
      await waitFor(`!window.__beforeLeave`, 10000, 'left the exam page (new document)');
      await send('Page.navigate', { url: base });
      await waitFor(`document.querySelector('[role="tab"]') && document.getElementById('kx-main')`, 15000, 'the running attempt resumes');
      assert.equal((await dev.env.DB.prepare("SELECT status FROM attempt_modules WHERE module = 'lesen'").first()).status, 'running', 'leaving submitted nothing');
    }
    await click('[data-act="submit"]'); await waitFor(`document.querySelector('[data-act="submit-confirm"]')`, 5000, 'review'); await click('[data-act="submit-confirm"]');
    // a single-module attempt goes straight from the confirmed submission to its result (no extra "Abschließen" step)
    await waitFor(`document.querySelector('.kx-result table')`, 15000, 'result');
    assert.equal(await evaluate(`!!document.querySelector('[data-act="complete"]')`), false);
    assert.equal((await dev.env.DB.prepare('SELECT status FROM attempts WHERE id = ?1').bind(attempt.id).first()).status, 'completed');
    const rows = await evaluate(`[...document.querySelectorAll('.kx-result table tbody tr th')].map((x) => x.textContent)`);
    assert.deepEqual(rows, ['Lesen']);
    t = await text();
    assert.match(t, /100 \/ 100/); assert.match(t, /kein Gesamtergebnis/);
    assert.match(t, /1 von 1 bewerteten Modul bestanden \(Klarweg-Simulation\)\./, 'summary counts modules, never points');
    await A.a11y('Lesen-only result');
    // the result and item review on a phone: no page-level horizontal scroll, every table readable
    await vp(360, 640, true); await sleep(200);
    const phone = await evaluate(`({ page: document.documentElement.scrollWidth, vw: innerWidth, tables: [...document.querySelectorAll('.kx-result table, .kx-review-items table')].map((t) => ({ w: Math.round(t.getBoundingClientRect().width), sw: t.scrollWidth })) })`);
    if (process.env.KX_E2E_SHOTS) { fs.writeFileSync(path.join(process.env.KX_E2E_SHOTS, 'lesen-result-360.png'), Buffer.from((await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true })).data, 'base64')); fs.writeFileSync(path.join(process.env.KX_E2E_SHOTS, 'lesen-result-360.json'), JSON.stringify(phone)); }
    assert.ok(phone.page <= phone.vw + 1, `no horizontal page scroll on the result at 360 px: ${JSON.stringify(phone)}`);
    for (const t of phone.tables) assert.ok(t.sw <= t.w + 1 && t.w <= phone.vw, `result/review tables fit a phone without sideways scrolling: ${JSON.stringify(phone)}`);
    await vp(1280, 800, false);
    const review = await apiFetch('GET', `/attempts/${attempt.id}/modules/lesen/review`);
    assert.equal(review.status, 200); assert.equal(review.json.summary.correct, lesen.length);
    // back to the start from the result page itself: Lesen again, with the history row (Lesen column only)
    await click('[data-act="home"]');
    await waitFor(`document.querySelector('[data-act="create"][data-module="lesen"]') && document.querySelector('.kx-history')`, 15000, 'start screen with history');
    assert.deepEqual(await evaluate(`[...document.querySelectorAll('.kx-history thead th')].map((x) => x.textContent)`), ['Datum', 'Übung', 'Lesen', 'Aktion']);
    assert.deepEqual(A.findings, [], `automated accessibility findings on ${A.screens.join(', ')}`);
    const exceptions = b.events.filter((e) => e.method === 'Runtime.exceptionThrown').map((e) => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text);
    const csp = b.events.filter((e) => e.method === 'Log.entryAdded' && /Content Security Policy/i.test(e.params.entry.text || '')).map((e) => e.params.entry.text);
    assert.deepEqual(csp, [], 'no CSP violations');
    log(`lesen-only ${PRACTICE.name}`, 'PASS', {});
    return exceptions;
  } finally { b.close(); dev.server.close(); }
}

/* PART-PRACTICE (ENGINE §2 practice_part): Lesen Teil 3 alone, untimed, from a practice pool that is disjoint from the
   Lesen-only release set. Phone start screen lists the parts; the intro says "ohne Zeitlimit"; only Teil 3 is on the page
   and the header shows no clock; answers survive a reload; submit goes straight to a counted result (no points, no
   pass line) and a Teil-3-only review; "Zur Übersicht" shows the practice in history, labelled as a part practice. */
async function runPartPractice() {
  const pool = PRACTICE_LIBRARY.find((f) => f.id !== PRACTICE.id);
  const dev = await startDevServer({ form: 'practice', flags: { EXAM_MODULE_ONLY: 'lesen', EXAM_RELEASE_FORMS: PRACTICE.id, EXAM_PRACTICE_PARTS: 'lesen', EXAM_PRACTICE_PART_FORMS: pool.id } });
  const b = await launch();
  const { send } = b;
  try {
    await send('Runtime.enable'); await send('Page.enable'); await send('Log.enable');
    const evaluate = async (expr) => {
      const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
      if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
      return r.result.value;
    };
    const text = () => evaluate('document.body.innerText');
    const waitFor = async (src, ms = 15000, label = src) => {
      const t0 = Date.now();
      while (Date.now() - t0 < ms) { if (await probe(evaluate, `(() => { try { return !!(${src}); } catch { return false; } })()`)) return; await sleep(250); }
      throw new Error(`timeout: ${label}\n--- page ---\n${(await text()).slice(0, process.env.KX_E2E_PAGE_CHARS ? Number(process.env.KX_E2E_PAGE_CHARS) : 600)}`);
    };
    const click = (sel) => evaluate(`document.querySelector(${JSON.stringify(sel)}).click()`);
    const vp = (w, h, mobile) => send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile });
    const A = makeA11y({ send, evaluate });
    const base = `http://127.0.0.1:${dev.port}/exam/`;
    const keys = Object.fromEntries((await dev.env.DB.prepare('SELECT item_id, key_json FROM item_keys').all()).results.map((r) => [r.item_id, JSON.parse(r.key_json).correct]));

    await vp(360, 640, true);
    await send('Page.navigate', { url: base });
    await waitFor(`document.querySelector('[data-act="create"][data-mode="synthetic_part"][data-part="3"]')`, 15000, 'part practice on the start screen');
    let t = await text();
    assert.match(t, /einzelne Teile üben/); assert.match(t, /Ohne Zeitlimit/);
    assert.equal(await evaluate(`document.querySelectorAll('[data-act="create"][data-mode="synthetic_part"]').length`), 5);
    assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth + 1'), true, 'no horizontal scroll at 360 px');
    await A.a11y('start with part practice (mobile)');
    await click('[data-act="create"][data-mode="synthetic_part"][data-part="3"]');
    await waitFor(`document.querySelector('[data-act="start"][data-module="lesen"]')`, 15000, 'part intro');
    t = await text();
    assert.match(t, /Teil 3 · 7 Aufgaben · ohne Zeitlimit/);
    const attempt = await dev.env.DB.prepare('SELECT id, form_id, part_scope FROM attempts').first();
    assert.equal(attempt.form_id, pool.id, 'assigned from the practice pool, not the release set'); assert.equal(attempt.part_scope, 3);
    await click('[data-act="start"][data-module="lesen"]');
    await waitFor(`document.querySelector('#kx-main .kx-part')`, 15000, 'Teil 3 rendered');
    assert.deepEqual(await evaluate(`[...document.querySelectorAll('#kx-main .kx-part')].map((p) => p.dataset.part)`), ['3'], 'only the practised part is on the page');
    assert.equal(await evaluate(`!!document.querySelector('.kx-timer')`), false, 'no clock');
    assert.match(await evaluate(`document.querySelector('.kx-head').textContent`), /Ohne Zeitlimit/);
    await A.a11y('part practice module (mobile)');
    const items = (await dev.env.DB.prepare("SELECT item_id FROM items_index WHERE form_id = ?1 AND module = 'lesen' AND part = 3 AND is_example = 0").bind(pool.id).all()).results.map((r) => r.item_id);
    assert.equal(items.length, 7);
    // 6 correct, the last one left open
    await evaluate(`(() => { const plan = ${JSON.stringify(Object.fromEntries(items.slice(0, 6).map((id) => [id, keys[id]])))};
      for (const [id, v] of Object.entries(plan)) { const sel = document.querySelector('select[data-item="' + id + '"]'); if (sel) { sel.value = v; sel.dispatchEvent(new Event('change', { bubbles: true })); continue; }
        const el = document.querySelector('[data-item="' + id + '"][value="' + v + '"]'); if (el) el.click(); } })()`);
    for (const t0 = Date.now(); (await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM responses_current WHERE attempt_id = ?1').bind(attempt.id).first()).n < 6; await sleep(200)) {
      if (Date.now() - t0 > 15000) throw new Error('part answers not stored');
    }
    await evaluate('window.__beforeReload = true'); await send('Page.reload');
    await waitFor(`!window.__beforeReload && document.querySelector('#kx-main .kx-part')`, 15000, 'reloaded into the part');
    assert.match(await evaluate(`document.querySelector('.kx-progress').textContent`), /6 von 7 beantwortet/, 'answers restored after a reload');
    await vp(1280, 800, false);
    await click('[data-act="submit"]'); await waitFor(`document.querySelector('[data-act="submit-confirm"]')`, 5000, 'review panel'); await click('[data-act="submit-confirm"]');
    await waitFor(`document.querySelector('.kx-part-result-score')`, 15000, 'part result');
    t = await text();
    assert.match(t, /Lesen Teil 3/); assert.match(t, /6 von 7 richtig/); assert.match(t, /ohne Antwort 1/);
    assert.equal(/Bestanden ab|nicht bestanden|\/ 100/.test(t), false, 'no module points or pass line for a part');
    assert.equal(await evaluate(`document.querySelectorAll('.kx-review-items tbody tr:not(.kx-rv-explain)').length`), 7, 'review of Teil 3 only');
    await A.a11y('part practice result');
    await click('[data-act="home"]');
    await waitFor(`document.querySelector('.kx-history')`, 15000, 'history');
    assert.match(await evaluate(`document.querySelector('.kx-history tbody tr').textContent`), /Teilübung · Lesen Teil 3.*6 \/ 7 richtig/s);
    assert.deepEqual(A.findings, [], `automated accessibility findings on ${A.screens.join(', ')}`);
    const exceptions = b.events.filter((e) => e.method === 'Runtime.exceptionThrown').map((e) => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text);
    const csp = b.events.filter((e) => e.method === 'Log.entryAdded' && /Content Security Policy/i.test(e.params.entry.text || '')).map((e) => e.params.entry.text);
    assert.deepEqual(csp, [], 'no CSP violations');
    log(`part-practice ${pool.name}`, 'PASS', {});
    return exceptions;
  } finally { b.close(); dev.server.close(); }
}

/* ACCESS-ADMIN (OD-18): an exam_admin grants a user without access, the user can then start a practice, the admin
   revokes it and the user is refused again; a learner opening the admin screen is refused by the server. */
async function runAccessAdmin() {
  const dev = await startDevServer({ form: PRACTICE.name.toLowerCase() });
  const b = await launch();
  const { send } = b;
  try {
    await send('Runtime.enable'); await send('Page.enable'); await send('Log.enable');
    const evaluate = async (expr) => {
      const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
      if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
      return r.result.value;
    };
    const text = () => evaluate('document.body.innerText');
    const waitFor = async (src, ms = 15000, label = src) => {
      const t0 = Date.now();
      while (Date.now() - t0 < ms) { if (await probe(evaluate, `(() => { try { return !!(${src}); } catch { return false; } })()`)) return; await sleep(250); }
      throw new Error(`timeout: ${label}\n--- page ---\n${(await text()).slice(0, process.env.KX_E2E_PAGE_CHARS ? Number(process.env.KX_E2E_PAGE_CHARS) : 600)}`);
    };
    const vp = (w, h, mobile) => send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile });
    const A = makeA11y({ send, evaluate });
    const base = `http://127.0.0.1:${dev.port}/exam/`;
    const as = async (alias, page) => { await send('Page.navigate', { url: `${base}dev/as/${alias}` }); await sleep(300); if (page) await send('Page.navigate', { url: base + page }); };
    const target = dev.users.outsider;

    await vp(1280, 800, false);
    // a learner on the admin screen: the server refuses, the page says so
    await as('learner', `admin.html?user=${target}`);
    await waitFor(`/Nur die Prüfungsverwaltung/.test(document.body.innerText)`, 15000, 'learner refused');
    // the user has no access yet
    await as('outsider');
    await waitFor(`/nicht freigeschaltet/.test(document.body.innerText)`, 15000, 'no access before the grant');
    // find the learner by email (resolved by the sign-in service), confirm, then manage
    await as('access', 'admin.html');
    await waitFor(`document.querySelector('form[data-form="email"]')`, 15000, 'admin search');
    await evaluate(`(() => { const f = document.querySelector('form[data-form="email"]'); f.querySelector('#kx-email').value = 'nobody@dev.local'; f.requestSubmit(); })()`);
    await waitFor(`/Kein Klarweg-Konto mit dieser E-Mail-Adresse/.test(document.body.innerText)`, 15000, 'unknown email');
    await evaluate(`(() => { const f = document.querySelector('form[data-form="email"]'); f.querySelector('#kx-email').value = '  OUTSIDER@dev.local '; f.requestSubmit(); })()`);
    await waitFor(`document.querySelector('[data-act="manage"]')`, 15000, 'match shown');
    assert.equal(await evaluate(`document.querySelector('[data-act="manage"]').dataset.user`), target, 'the email resolves to that learner');
    await A.a11y('access admin (email match)');
    await evaluate(`document.querySelector('[data-act="manage"]').click()`);
    await waitFor(`document.querySelector('form[data-form="grant"]')`, 15000, 'admin screen');
    assert.equal((await dev.env.DB.prepare("SELECT COUNT(*) AS n FROM audit_log WHERE action = 'access_lookup'").first()).n, 2, 'both searches audited');
    assert.match(await text(), /Noch kein Zugang erteilt/);
    await A.a11y('access admin (empty)');
    await evaluate(`(() => { const f = document.querySelector('form[data-form="grant"]'); f.querySelector('#kx-scope').value = 'synthetic'; f.querySelector('#kx-reason').value = 'E2E Pilot'; f.requestSubmit(); })()`);
    await waitFor(`/Zugang erteilt\./.test(document.body.innerText) && document.querySelector('form[data-form="revoke"]')`, 15000, 'granted');
    assert.match(await text(), /Wirksam: B1: Übungen \(synthetisch\)/);
    const row = await dev.env.DB.prepare('SELECT granted_by, reason, revoked_at FROM exam_access WHERE user_id = ?1').bind(target).first();
    assert.deepEqual([row.granted_by, row.reason, row.revoked_at], [dev.users.access, 'E2E Pilot', null]);
    await A.a11y('access admin (granted)');
    // the user can now start
    await as('outsider');
    await waitFor(`document.querySelector('[data-act="create"]')`, 15000, 'start screen after the grant');
    // extra time (OD-41): +50 % for attempts created afterwards
    await as('access', `admin.html?user=${target}`);
    await waitFor(`document.querySelector('form[data-form="acc-set"]')`, 15000, 'accommodation form');
    await evaluate(`(() => { const f = document.querySelector('form[data-form="acc-set"]'); f.querySelector('#kx-acc-m').value = '1.5'; f.querySelector('#kx-acc-reason').value = 'Nachweis geprüft (E2E)'; f.requestSubmit(); })()`);
    await waitFor(`document.body.innerText.includes('Nachteilsausgleich gesetzt.') && document.body.innerText.includes('Aktuell: +50 %')`, 15000, 'accommodation set');
    await A.a11y('access admin (accommodation)');
    await as('outsider');
    await waitFor(`document.querySelector('[data-act="create"]')`, 15000, 'start screen');
    await evaluate(`document.querySelector('[data-act="create"]').click()`);
    await waitFor(`document.querySelector('[data-act="start"][data-module="lesen"]')`, 15000, 'Lesen intro with extra time');
    const lesenMin = Math.round((pkgFor(syntheticBuild([PRACTICE.dir]), 'lesen').timing.seconds * 1.5) / 60);
    assert.match(await text(), new RegExp(`${lesenMin} Minuten · 5 Teile`), 'the intro shows the extended time');
    assert.equal((await dev.env.DB.prepare('SELECT time_multiplier FROM attempts WHERE user_id = ?1').bind(target).first()).time_multiplier, 1.5);
    // support view: the learner's attempts, module status and incidents — on request, audited, no answers
    await as('access', `admin.html?user=${target}`);
    await waitFor(`document.querySelector('[data-act="attempts"]')`, 15000, 'attempts button');
    const att = (await dev.env.DB.prepare('SELECT id FROM attempts WHERE user_id = ?1').bind(target).first()).id;
    await dev.env.DB.prepare("INSERT INTO incidents (id, attempt_id, kind, detail_json, created_at) VALUES ('inc_e2e', ?1, 'lease_takeover', '{\"generation\":2,\"same_device\":false}', ?2)").bind(att, Date.now()).run();
    assert.equal((await dev.env.DB.prepare("SELECT COUNT(*) AS n FROM audit_log WHERE action = 'attempts_viewed'").first()).n, 0, 'nothing read before the click');
    await evaluate(`document.querySelector('[data-act="attempts"]').click()`);
    await waitFor(`document.querySelector('#kx-att-slot .kx-admin-attempt')`, 15000, 'attempts listed');
    const sv = await evaluate(`(() => { const t = document.getElementById('kx-att-slot').innerText; return { t, id: document.querySelector('.kx-admin-attempt h3').textContent }; })()`);
    assert.ok(sv.id === att && /1 Versuch \(neueste zuerst/.test(sv.t) && /Lesen/.test(sv.t) && /Auf anderem Gerät\/Tab übernommen/.test(sv.t) && /\(generation: 2, same_device: false\)/.test(sv.t) && /nicht begonnen/.test(sv.t) && /Zeit \+50 %/.test(sv.t), `support view ${JSON.stringify(sv)}`);
    assert.equal((await dev.env.DB.prepare("SELECT COUNT(*) AS n FROM audit_log WHERE action = 'attempts_viewed'").first()).n, 1, 'the view is audited');
    await A.a11y('access admin (attempts and incidents)');
    // revoke
    await waitFor(`document.querySelector('form[data-form="revoke"]')`, 15000, 'revoke form');
    await evaluate(`(() => { const f = document.querySelector('form[data-form="revoke"]'); f.querySelector('input[name="reason"]').value = 'E2E Ende'; f.requestSubmit(); })()`);
    await waitFor(`/Zugang widerrufen\./.test(document.body.innerText) && !document.querySelector('form[data-form="revoke"]')`, 15000, 'revoked');
    assert.match(await text(), /widerrufen .*E2E Ende/);
    assert.equal((await dev.env.DB.prepare("SELECT COUNT(*) AS n FROM audit_log WHERE action IN ('access_granted', 'access_revoked')").first()).n, 2);
    await vp(360, 640, true); await sleep(200);
    assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth + 1'), true, 'admin screen: no horizontal scroll at 360 px');
    await A.a11y('access admin (mobile)');
    await vp(1280, 800, false);
    // revocation stops the open attempt too
    await as('outsider');
    await waitFor(`/nicht freigeschaltet/.test(document.body.innerText)`, 15000, 'refused after revocation (open attempt)');
    assert.deepEqual(A.findings, [], `automated accessibility findings on ${A.screens.join(', ')}`);
    const exceptions = b.events.filter((e) => e.method === 'Runtime.exceptionThrown').map((e) => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text);
    const csp = b.events.filter((e) => e.method === 'Log.entryAdded' && /Content Security Policy/i.test(e.params.entry.text || '')).map((e) => e.params.entry.text);
    assert.deepEqual(csp, [], 'no CSP violations');
    log('access-admin', 'PASS', {});
    return exceptions;
  } finally { b.close(); dev.server.close(); }
}

/* PRECHECK (ENGINE §10): the audio and microphone checks gate the Hören and Sprechen starts and recover after a fix;
   a reload on a check screen keeps the same attempt and the saved answers; environment notes appear only for a real
   problem and never block. */
async function runPrecheck() {
  const dev = await startDevServer({ form: PRACTICE.name.toLowerCase() });
  const b = await launch();
  const { send } = b;
  try {
    await send('Runtime.enable'); await send('Page.enable'); await send('Log.enable');
    const evaluate = async (expr) => {
      const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
      if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
      return r.result.value;
    };
    const text = () => evaluate('document.body.innerText');
    const waitFor = async (src, ms = 15000, label = src) => {
      const t0 = Date.now();
      while (Date.now() - t0 < ms) { if (await probe(evaluate, `(() => { try { return !!(${src}); } catch { return false; } })()`)) return; await sleep(250); }
      throw new Error(`timeout: ${label}\n--- page ---\n${(await text()).slice(0, 800)}`);
    };
    const click = (sel) => evaluate(`document.querySelector(${JSON.stringify(sel)}).click()`);
    const vp = (w, h, mobile) => send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile });
    const A = makeA11y({ send, evaluate });
    const base = `http://127.0.0.1:${dev.port}/exam/`;
    const submitUi = async () => { await click('[data-act="submit"]'); await waitFor(`document.querySelector('[data-act="submit-confirm"]')`, 5000, 'review'); await click('[data-act="submit-confirm"]'); };

    await vp(1280, 800, false);
    await send('Page.navigate', { url: base });
    await waitFor(`document.querySelector('[data-act="create"]')`, 15000, 'start screen');
    await click('[data-act="create"]');
    await waitFor(`document.querySelector('[data-act="start"][data-module="lesen"]')`, 15000, 'Lesen intro');
    await click('[data-act="start"][data-module="lesen"]');
    await waitFor(`document.querySelectorAll('input[type=radio]').length > 20`, 15000, 'Lesen');
    await evaluate(`document.querySelector('#kx-main input[type=radio]:not([disabled])').click()`);
    for (const t0 = Date.now(); !(await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM responses_current').first()).n; await sleep(200)) if (Date.now() - t0 > 10000) throw new Error('answer not saved');
    await submitUi();

    // HÖREN: refused before the audio check; a reload keeps the same attempt and the saved answer
    await waitFor(`document.querySelector('[data-act="start"][data-module="hoeren"]')`, 15000, 'Hören intro');
    // ENGINE §10 connection check: a timed 1 MiB download, once per attempt, guidance only (never blocks)
    await waitFor(`/Verbindung geprüft|Verbindung ist langsam/.test(document.querySelector('#kx-conn-msg')?.textContent || '')`, 25000, 'connection result');
    const dlHits = async () => ((await dev.env.DB.prepare("SELECT SUM(hits) AS n FROM rate_counters WHERE bucket LIKE 'dltest:%'").first()).n || 0);
    assert.equal(await dlHits(), 1);
    await evaluate('window.__beforeReload = true'); await send('Page.reload');
    await waitFor(`!window.__beforeReload && /Verbindung geprüft|Verbindung ist langsam/.test(document.querySelector('#kx-conn-msg')?.textContent || '')`, 15000, 'cached connection result after reload');
    assert.equal(await dlHits(), 1, 'a reload does not download again');
    // a failed test explains itself and does not block
    await evaluate(`(Object.keys(sessionStorage).filter((k) => k.startsWith('kx-conn:')).forEach((k) => sessionStorage.removeItem(k)), true)`);
    await send('Fetch.enable', { patterns: [{ urlPattern: '*/precheck/download*', requestStage: 'Request' }] });
    const failFrom = b.events.length;
    const failer = setInterval(() => { for (const e of b.events.slice(failFrom)) if (e.method === 'Fetch.requestPaused' && !e.__done) { e.__done = true; send('Fetch.failRequest', { requestId: e.params.requestId, errorReason: 'ConnectionReset' }).catch(() => {}); } }, 50);
    await evaluate('window.__beforeReload = true'); await send('Page.reload');
    await waitFor(`!window.__beforeReload && /Verbindungstest war nicht möglich/.test(document.querySelector('#kx-conn-msg')?.textContent || '')`, 15000, 'failed connection test explained');
    clearInterval(failer); await send('Fetch.disable');
    // notes reflect the real checks: device and server clocks agree here, so no clock note (the skewed case is unit-tested)
    assert.equal(/weicht von der Serverzeit ab/.test(await text()), false, 'no clock note without a real offset');
    await click('[data-act="start"][data-module="hoeren"]');
    await waitFor(`/bestätigen Sie, dass Sie ihn gehört haben/.test(document.querySelector('#kx-tone-msg').textContent)`, 5000, 'Hören start refused');
    assert.equal((await dev.env.DB.prepare("SELECT status FROM attempt_modules WHERE module = 'hoeren'").first()).status, 'available', 'Hören did not start');
    await evaluate('window.__beforeReload = true'); await send('Page.reload');   // wait for the NEW document, not the old one
    await waitFor(`!window.__beforeReload && document.querySelector('[data-act="start"][data-module="hoeren"]') && document.querySelector('#kx-tone-heard')`, 15000, 'Hören intro after reload');
    assert.equal((await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM attempts').first()).n, 1, 'no duplicate attempt');
    assert.equal((await dev.env.DB.prepare("SELECT COUNT(*) AS n FROM responses_current WHERE module = 'lesen'").first()).n, 1, 'the saved Lesen answer is kept');
    assert.equal(await evaluate(`document.querySelector('#kx-tone-heard').checked`), false, 'the confirmation is asked again after a reload');
    await vp(360, 640, true); await sleep(200);
    assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth + 1'), true, 'Hören check: no horizontal scroll at 360 px');
    await A.a11y('Hören audio check (mobile)');
    await vp(1280, 800, false);
    await click('[data-act="tone-play"]');
    await waitFor(`/Testton abgespielt/.test(document.querySelector('#kx-tone-msg').textContent)`, 15000, 'tone played');
    await click('#kx-tone-heard'); await click('[data-act="start"][data-module="hoeren"]');
    await waitFor(`document.querySelector('#kx-main .kx-part')`, 20000, 'Hören started');
    await submitUi();
    await waitFor(`document.querySelector('[data-act="start"][data-module="schreiben"]')`, 15000, 'Schreiben intro');
    await click('[data-act="start"][data-module="schreiben"]');
    await waitFor(`document.querySelector('textarea')`, 15000, 'Schreiben');
    await submitUi();

    // SPRECHEN: microphone denied → guided fix, start refused, nothing recorded; granted → passes and starts
    await waitFor(`document.querySelector('[data-act="start"][data-module="sprechen"]')`, 15000, 'Sprechen intro');
    // the browser refuses the microphone exactly as after a denied prompt (Chrome's fake-media flag would grant it)
    await evaluate(`(() => { window.__realGum = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
      navigator.mediaDevices.getUserMedia = async () => { const e = new Error('Permission denied'); e.name = 'NotAllowedError'; throw e; }; return true; })()`);
    await click('[data-act="mic-test"]');
    await waitFor(`/Kein Zugriff auf das Mikrofon/.test(document.querySelector('#kx-mic-msg').textContent)`, 15000, 'denied microphone explained');
    await click('#kx-consent'); await click('[data-act="start"][data-module="sprechen"]');
    await waitFor(`/Bitte testen Sie zuerst Ihr Mikrofon/.test(document.querySelector('#kx-mic-msg').textContent)`, 5000, 'Sprechen start refused');
    assert.equal((await dev.env.DB.prepare("SELECT status FROM attempt_modules WHERE module = 'sprechen'").first()).status, 'available', 'Sprechen did not start');
    assert.equal((await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM recording_chunks').first()).n, 0, 'nothing recorded');
    await vp(360, 640, true); await sleep(200);
    await A.a11y('Sprechen microphone check, denied (mobile)', { tabs: 6 });
    await vp(1280, 800, false);
    await evaluate(`(navigator.mediaDevices.getUserMedia = window.__realGum, true)`);   // the learner allows the microphone
    await click('[data-act="mic-test"]');
    await waitFor(`/Mikrofon funktioniert/.test(document.querySelector('#kx-mic-msg').textContent)`, 15000, 'microphone works after the fix');
    await click('[data-act="start"][data-module="sprechen"]');
    await waitFor(`/Vorbereitung/.test(document.querySelector('#kx-phase')?.textContent || '')`, 20000, 'Sprechen started (preparation)');
    assert.equal((await dev.env.DB.prepare("SELECT status FROM attempt_modules WHERE module = 'sprechen'").first()).status, 'running');
    assert.equal((await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM attempts').first()).n, 1);
    assert.deepEqual(A.findings, [], `automated accessibility findings on ${A.screens.join(', ')}`);
    const exceptions = b.events.filter((e) => e.method === 'Runtime.exceptionThrown').map((e) => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text);
    const csp = b.events.filter((e) => e.method === 'Log.entryAdded' && /Content Security Policy/i.test(e.params.entry.text || '')).map((e) => e.params.entry.text);
    assert.deepEqual(csp, [], 'no CSP violations');
    log('precheck', 'PASS', {});
    return exceptions;
  } finally { b.close(); dev.server.close(); }
}

/* REVIEW-FORM: the offline EX-03 review form (exam-content/tools/review-form.mjs) in a real browser, opened from a file
   like a reviewer would. Fill slot A for every Lesen item through the page, then check: the counter reaches complete;
   the record kept in the browser passes the same checker the organiser uses; a reload restores it; slot C shows only
   C's fields; no script errors; automated a11y audit. Synthetic answers only — nothing is approved. */
async function runReviewForm() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-review-form-'));
  writeReviewForms(dir, [PRACTICE.name.toLowerCase()], { modules: ['lesen'] });
  const url = 'file://' + path.join(dir, `${PRACTICE.name}-review-form-lesen.html`);
  const b = await launch();
  const { send } = b;
  try {
    await send('Runtime.enable'); await send('Page.enable'); await send('Log.enable');
    const evaluate = async (expr) => {
      const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
      if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
      return r.result.value;
    };
    const text = () => evaluate('document.body.innerText');
    const waitFor = async (src, ms = 10000, label = src) => {
      const t0 = Date.now();
      while (Date.now() - t0 < ms) { if (await probe(evaluate, `(() => { try { return !!(${src}); } catch { return false; } })()`)) return; await sleep(200); }
      throw new Error(`timeout: ${label}\n--- page ---\n${(await text()).slice(0, process.env.KX_E2E_PAGE_CHARS ? Number(process.env.KX_E2E_PAGE_CHARS) : 600)}`);
    };
    const A = makeA11y({ send, evaluate });
    await send('Page.navigate', { url });
    await waitFor(`document.querySelector('#kx-progress')?.textContent.includes('0 of 30')`, 10000, 'form loaded');
    await A.a11y('review form (empty)');
    await evaluate(`(() => {
      const set = (sel, v) => { const el = document.querySelector(sel); el.value = v; el.dispatchEvent(new Event('change', { bubbles: true })); };
      set('[name="reviewer::slot"]', 'A'); set('[name="reviewer::native_german"]', 'true');
      const id = document.querySelector('[name="reviewer::reviewer_id"]'); id.value = 'e2e-A'; id.dispatchEvent(new Event('input', { bubbles: true }));
      set('[name="reviewer::date"]', '2026-10-20');
      for (const fs of document.querySelectorAll('fieldset.item')) {
        fs.querySelector('input[value="approve"][name$="::verdict"]').click();
        fs.querySelector('input[value="0"][name$="::ambiguity_risk"]').click();
        for (const s of fs.querySelectorAll('select')) { s.value = '3'; s.dispatchEvent(new Event('change', { bubbles: true })); }
      }
    })()`);
    await waitFor(`document.querySelector('#kx-progress').textContent.startsWith('Complete: 30 of 30')`, 10000, 'complete');
    assert.equal(await evaluate(`getComputedStyle(document.querySelector('.row.c')).display`), 'none', 'slot A does not see the C fields');
    const saved = JSON.parse(await evaluate(`localStorage.getItem(Object.keys(localStorage).find((k) => k.startsWith('kx-ex03:')))`));
    const verdict = checkFile(saved, { module: 'lesen' });
    assert.equal(verdict.ok, true, JSON.stringify(verdict));
    await send('Page.reload');
    await waitFor(`document.querySelector('#kx-progress')?.textContent.startsWith('Complete: 30 of 30')`, 10000, 'restored after reload');
    await evaluate(`(() => { const s = document.querySelector('[name="reviewer::slot"]'); s.value = 'C'; s.dispatchEvent(new Event('change', { bubbles: true })); })()`);
    await waitFor(`document.body.className === 'slot-C'`);
    assert.equal(await evaluate(`getComputedStyle(document.querySelector('.row.ab')).display`), 'none', 'slot C does not see the A/B ratings');
    assert.match(await evaluate(`document.querySelector('#kx-progress').textContent`), /originality sign-off/);
    await A.a11y('review form (slot C)');
    assert.deepEqual(A.findings, [], `automated accessibility findings on ${A.screens.join(', ')}`);
    const exceptions = b.events.filter((e) => e.method === 'Runtime.exceptionThrown').map((e) => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text);
    log(`review-form ${PRACTICE.name}`, 'PASS', { entries: 30 });
    return exceptions;
  } finally { b.close(); fs.rmSync(dir, { recursive: true, force: true }); }
}

/* ENGINE §10 / MOCK M-25: the smallest supported viewport is 360×640 */
const VIEWPORTS = [{ name: 'desktop 1280×800', w: 1280, h: 800, mobile: false }, { name: 'mobile 360×640', w: 360, h: 640, mobile: true }];
const SCENARIOS = [['flagged', run, ''], ['autoplay', runDefaultAutoplay, ' (default autoplay policy)'], ['hoeren-autoplay', runDefaultAutoplayHoeren, ' (default autoplay policy, Hören)'], ['practice', runPractice, ''], ['sprechen-topic', runSprechenTopic, ''], ['lease-expiry', runLeaseExpiry, ''], ['two-tabs', runTwoTabs, ''], ['rater-2fa', runRater2fa, ''], ['lesen-only', runLesenOnly, ''], ['part-practice', runPartPractice, ''], ['access-admin', runAccessAdmin, ''], ['precheck', runPrecheck, ''], ['review-form', runReviewForm, '']];
if (ONLY && !SCENARIOS.some(([n]) => n === ONLY)) { console.error(`unknown KX_E2E_ONLY=${ONLY}`); process.exit(2); }
for (const [name, fn, suffix] of SCENARIOS) {
  if (ONLY && name !== ONLY) continue;
  if (name === 'review-form') { results.push({ vp: `review form ${PRACTICE.name} (Lesen, file://)`, uncaught: await fn() }); continue; }
  if (name === 'lesen-only') { results.push({ vp: `lesen-only ${PRACTICE.name} (mobile start + desktop)`, uncaught: await fn() }); continue; }
  if (name === 'precheck') { results.push({ vp: 'precheck (audio + microphone gates, denied → fixed, reload)', uncaught: await fn() }); continue; }
  if (name === 'access-admin') { results.push({ vp: 'access-admin (grant, use, revoke)', uncaught: await fn() }); continue; }
  if (name === 'part-practice') { results.push({ vp: 'part-practice (mobile start + desktop result)', uncaught: await fn() }); continue; }
  if (name === 'rater-2fa') { results.push({ vp: `rater 2FA ${PRACTICE.name}`, uncaught: await fn() }); continue; }
  if (name === 'two-tabs') { results.push({ vp: `two tabs ${PRACTICE.name}`, uncaught: await fn() }); continue; }
  if (name === 'lease-expiry') { results.push({ vp: `lease expiry ${PRACTICE.name}`, uncaught: await fn() }, { vp: `lease expiry Sprechen ${PRACTICE.name}`, uncaught: await runLeaseExpirySprechen() }); continue; }
  if (name === 'sprechen-topic') { results.push({ vp: `sprechen topic ${PRACTICE.name} (t1 + t2)`, uncaught: await fn() }); continue; }
  if (name === 'practice') { results.push({ vp: `practice ${PRACTICE.name} (desktop + mobile checks)`, uncaught: await fn() }); continue; }
  for (const vp of VIEWPORTS) results.push({ vp: vp.name + suffix, uncaught: await fn(vp) });
}
console.log(JSON.stringify(results));
if (results.some((r) => r.uncaught.length)) process.exit(1);
