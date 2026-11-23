/* LOCAL-ONLY real-browser journey through a REAL Modelltest form (Issue #384), headless Chrome over CDP.
   The forms live in the PRIVATE content repo, so this never runs in public CI:

     node exam-worker/test/modelltest-browser.mjs <formDir> [<formDir> ...] [--viewports=desktop,mobile] [--json=out.json]

   Per form and viewport (desktop 1280×800, mobile 360×640) against the local dev server (in-memory D1/R2, the real
   exam Worker, mock flags; a form with open originality checks is built as REVIEW STAGING and only reachable because
   this local run sets EXAM_REVIEW_FORMS=on):
     START   Modelltest start screen, no synthetic labels, no horizontal scroll
     LESEN   every scored item rendered (count = registry), all answered correctly in the UI, autosave, review → submit
     HÖREN   audio + tone check; EVERY audio asset of the form decodes in Chrome (WebAudio) and its decoded duration
             matches the Hören plan; the first play starts; then a TEST-SERVER time jump to the end of the schedule,
             reload, all four parts present, all answered correctly, submit
     SCHREIBEN  a B1-length text typed into every task, autosave, reload recovery of every text, submit
     SPRECHEN   consent + microphone check, preparation with the form's topic choice and slide decks, topic autosave;
             time jumps (test server) into Teil 1 (partner prompt played, recording chunks uploaded), the partner
             presentation (played, nothing recorded) and Teil 3 (recording), submit, complete
     RESULT  Lesen/Hören at maximum, productive skills "in Bewertung", the non-official disclaimer
     RATING  one examiner gives both blind rounds (EXAM_SINGLE_EXAMINER), a learner recording is retrievable by the
             rater, the learner's final result shows points and the same-examiner disclosure
   Uncaught page exceptions fail the run. A PASS is engineering evidence only — never a content or academic approval. */
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { startDevServer } from './dev-server.mjs';
import { launch, sleep } from './cdp.mjs';
import { speakingSchedule } from '../../exam/js/sprechen.js';
import { SAME_EXAMINER_NOTE } from '../../exam/js/render.js';
import { validateForm } from '../../exam-content/tools/validate.mjs';
import { ROOT } from './harness.mjs';

const args = process.argv.slice(2);
const opt = (n) => { const a = args.find((x) => x.startsWith(`--${n}=`)); return a ? a.slice(n.length + 3) : null; };
const DIRS = args.filter((a) => !a.startsWith('--')).map((d) => path.resolve(d));
const VPS = { desktop: { name: 'desktop 1280×800', w: 1280, h: 800, mobile: false }, mobile: { name: 'mobile 360×640', w: 360, h: 640, mobile: true } };
const viewports = (opt('viewports') || 'desktop,mobile').split(',').map((v) => VPS[v]);
if (!DIRS.length || viewports.some((v) => !v)) { console.error('usage: modelltest-browser.mjs <formDir> … [--viewports=desktop,mobile] [--json=out.json]'); process.exit(2); }
const log = (...a) => console.log('[modelltest-browser]', ...a);

const SCHREIBEN = 'Liebe Anna, vielen Dank für deine Nachricht. Leider kann ich am Samstag nicht kommen, weil meine Eltern zu Besuch sind. '
  + 'Wir wollen zusammen in die Stadt fahren und abends essen gehen. Hast du vielleicht nächste Woche Zeit? Am Mittwoch oder Donnerstag '
  + 'nach der Arbeit passt es mir gut. Dann können wir ins Kino gehen oder einfach im Park spazieren. Ich freue mich sehr auf dich. '
  + 'Schreib mir bitte bald zurück. Viele Grüße, dein Ravi';
const PLACEHOLDER = /\b(TODO|TBD|Lorem ipsum|PLACEHOLDER|XXX)\b|\[\[|\{\{/;

async function journey(dir, vp) {
  const formId = JSON.parse(fs.readFileSync(path.join(dir, 'form.json'), 'utf8')).id;
  const v = validateForm(dir, { levelsDir: path.join(ROOT, 'exam-content/levels') });
  const blocking = v.errors.filter((e) => e.code !== 'originality');
  if (blocking.length) throw new Error('validation: ' + blocking.slice(0, 3).map((e) => e.msg).join('; '));
  const reviewStaging = v.errors.some((e) => e.code === 'originality');
  const flags = { EXAM_SYNTHETIC_FORMS: 'off', EXAM_MOCK_FORMS: 'on', EXAM_RELEASE_FORMS: formId, EXAM_SINGLE_EXAMINER: 'on', ...(reviewStaging ? { EXAM_REVIEW_FORMS: 'on' } : {}) };
  const dev = await startDevServer({ form: dir, reviewStaging, grantScope: 'mock', flags });
  const b = await launch();
  const { send, evaluate, text, waitFor, click } = b;
  const facts = { form: formId, viewport: vp.name, build: reviewStaging ? 'review-staging' : 'normal' };
  const DB = dev.env.DB;
  const one = (sql, ...p) => DB.prepare(sql).bind(...p).first();
  const all = async (sql, ...p) => (await DB.prepare(sql).bind(...p).all()).results;
  const noHScroll = () => evaluate('document.documentElement.scrollWidth <= window.innerWidth + 1');
  const pkg = (module) => {
    const key = [...dev.env.CONTENT.objects.keys()].find((k) => k.endsWith(`/module-${module}.json`));
    return JSON.parse(dev.env.CONTENT.objects.get(key).bytes.toString('utf8'));
  };
  const submitModule = async () => { await click('[data-act="submit"]'); await waitFor(`document.querySelector('[data-act="submit-confirm"]')`, 5000, 'review'); await click('[data-act="submit-confirm"]'); };
  const reload = async () => { await evaluate('window.__beforeReload = true'); await send('Page.reload'); await waitFor('!window.__beforeReload && document.readyState === "complete"', 15000, 'reloaded'); };
  const checkScreen = async (label) => {
    assert.equal(await noHScroll(), true, `${label}: horizontal scroll at ${vp.name}`);
    const t = await text();
    assert.equal(PLACEHOLDER.test(t), false, `${label}: placeholder text on screen: ${(t.match(PLACEHOLDER) || [])[0]}`);
    assert.equal(/synthetische (Übungs)?inhalte|synthetische Testform|nur Systemtest|TEST CONTENT/i.test(t), false, `${label}: synthetic-content label on a real form`);   // the synthetic-VOICE disclosure is correct and allowed
    assert.equal(await evaluate('document.querySelectorAll("h1").length'), 1, `${label}: exactly one h1`);
  };
  try {
    await send('Runtime.enable'); await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', { width: vp.w, height: vp.h, deviceScaleFactor: 1, mobile: vp.mobile });
    await send('Page.addScriptToEvaluateOnNewDocument', { source: `window.confirm = () => true; window.__plays = []; { const play = HTMLMediaElement.prototype.play;
      HTMLMediaElement.prototype.play = function () { window.__plays.push((this.dataset && this.dataset.asset) || ''); return play.apply(this, arguments); }; }` });
    const base = `http://127.0.0.1:${dev.port}/exam/`;
    const keys = Object.fromEntries((await all('SELECT item_id, key_json FROM item_keys')).map((r) => [r.item_id, JSON.parse(r.key_json).correct]));
    const answerAll = (ids) => evaluate(`(() => { const plan = ${JSON.stringify(Object.fromEntries(ids.map((id) => [id, keys[id]])))}; let n = 0;
      for (const [id, v] of Object.entries(plan)) { const el = document.querySelector('[data-item="' + id + '"][value="' + v + '"]');
        if (el) { if (!el.checked) el.click(); n++; continue; }
        const sel = document.querySelector('select[data-item="' + id + '"]'); if (sel) { sel.value = v; sel.dispatchEvent(new Event('change', { bubbles: true })); n++; } }
      return n; })()`);

    // ---- START ----
    await send('Page.navigate', { url: base });
    await waitFor(`document.querySelector('[data-act="create"][data-mode="mock_m0"]')`, 15000, 'Modelltest start screen');
    assert.match(await text(), /Klarweg B1 Modelltest/);
    await checkScreen('start');
    await click('[data-act="create"][data-mode="mock_m0"]');

    // ---- LESEN ----
    await waitFor(`document.querySelector('[data-act="start"][data-module="lesen"]')`, 15000, 'Lesen intro');
    await click('[data-act="start"][data-module="lesen"]');
    await waitFor(`document.querySelector('.kx-progress')`, 15000, 'Lesen rendered');
    const lesen = (await all("SELECT item_id FROM items_index WHERE module = 'lesen' AND is_example = 0")).map((r) => r.item_id);
    const total = Number(/von (\d+) beantwortet/.exec(await evaluate(`document.querySelector('.kx-progress').textContent`))[1]);
    assert.equal(total, lesen.length, 'Lesen: every scored item is counted');
    const tabs = await evaluate(`document.querySelectorAll('[role="tab"]').length`);
    assert.ok(tabs >= 5, `Lesen: one tab per part (${tabs})`);
    const answered = await answerAll(lesen);
    assert.equal(answered, lesen.length, `Lesen: every item has an answer control in the page (${answered}/${lesen.length})`);
    await waitFor(`document.querySelector('.kx-progress')?.textContent === '${total} von ${total} beantwortet'`, 15000, 'Lesen all answered');
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 15000, 'Lesen autosaved');
    for (let i = 1; i <= tabs; i++) { await click(`[role="tab"][data-tab="${i}"]`); await sleep(120); await checkScreen(`Lesen Teil ${i}`); }
    await submitModule();
    facts.lesen_items = lesen.length;

    // ---- HÖREN ----
    await waitFor(`document.querySelector('[data-act="start"][data-module="hoeren"]')`, 15000, 'Hören intro');
    await checkScreen('Hören intro');
    await click('[data-act="tone-play"]'); await waitFor(`/Testton abgespielt/.test(document.querySelector('#kx-tone-msg')?.textContent || '')`, 15000, 'test tone'); await click('#kx-tone-heard');
    await click('[data-act="start"][data-module="hoeren"]');
    await waitFor(`/Sie hören|Lesen Sie/.test(document.querySelector('#kx-phase')?.textContent || '')`, 30000, 'Hören schedule running');
    // every audio asset of the form decodes in this browser; its decoded length matches the plan
    const plan = pkg('hoeren').timing.plan;
    const planMs = Object.fromEntries(plan.phases.filter((p) => p.kind === 'play' && p.asset_id).map((p) => [p.asset_id, p.ms]));
    const audioKeys = [...dev.env.CONTENT.objects.keys()].filter((k) => /\/assets\/.+\.(webm|ogg|mp3|m4a|opus)$/.test(k));
    let decoded = 0, maxDrift = 0;
    for (const k of audioKeys) {
      const b64 = dev.env.CONTENT.objects.get(k).bytes.toString('base64');
      const dur = await evaluate(`(async () => { const s = atob(${JSON.stringify(b64)}); const u = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i);
        const ctx = new OfflineAudioContext(1, 1, 48000); const buf = await ctx.decodeAudioData(u.buffer); return buf.duration; })()`);
      assert.ok(dur > 0.5, `${k}: decoded duration ${dur}`);
      const id = Object.keys(planMs).find((a) => k.includes(a.replace(/^ast:/, '')));
      if (id) { const drift = Math.abs(dur * 1000 - planMs[id]); maxDrift = Math.max(maxDrift, drift); assert.ok(drift <= 250, `${id}: decoded ${Math.round(dur * 1000)} ms vs plan ${planMs[id]} ms`); }
      decoded++;
    }
    facts.audio_decoded = decoded; facts.audio_plan_max_drift_ms = Math.round(maxDrift);
    await waitFor(`true`, 1);
    for (const t0 = Date.now(); !(await one("SELECT COUNT(*) AS n FROM audio_plays")).n; await sleep(250)) if (Date.now() - t0 > 30000) throw new Error('no Hören play started');
    // TEST SERVER ONLY: jump to 5 s before the end of the schedule, reload — all parts open, review window
    const totalMs = plan.phases.reduce((n, p) => n + p.ms, 0);
    const reviewMs = plan.phases.filter((p) => p.kind === 'review').reduce((n, p) => n + p.ms, 0);
    const row = await one("SELECT plan_started_at FROM attempt_modules WHERE module = 'hoeren'");
    const delta = (Date.now() - (totalMs - reviewMs + 3000)) - row.plan_started_at;
    await DB.prepare("UPDATE attempt_modules SET started_at = started_at + ?1, plan_started_at = plan_started_at + ?1, deadline_at = deadline_at + ?1 WHERE module = 'hoeren'").bind(delta).run();
    await reload();
    await waitFor(`document.querySelectorAll('#kx-main .kx-part').length === 4`, 20000, 'Hören: all four parts after the schedule');
    const hoeren = (await all("SELECT item_id FROM items_index WHERE module = 'hoeren' AND is_example = 0")).map((r) => r.item_id);
    assert.equal(await answerAll(hoeren), hoeren.length, 'Hören: every item has an answer control');
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 15000, 'Hören autosaved');
    await checkScreen('Hören');
    await submitModule();
    facts.hoeren_items = hoeren.length;

    // ---- SCHREIBEN ----
    await waitFor(`document.querySelector('[data-act="start"][data-module="schreiben"]')`, 15000, 'Schreiben intro');
    await click('[data-act="start"][data-module="schreiben"]');
    await waitFor(`document.querySelector('textarea')`, 15000, 'editor');
    const nText = await evaluate(`document.querySelectorAll('textarea').length`);
    for (let i = 0; i < nText; i++) {
      await evaluate(`(() => { const t = document.querySelectorAll('textarea')[${i}]; const part = t.closest('.kx-part'); if (part && part.hidden) { const tab = document.querySelector('[role="tab"][data-tab="' + part.dataset.part + '"]'); if (tab) tab.click(); } t.focus(); })()`);
      await send('Input.insertText', { text: SCHREIBEN });
      await sleep(150);
    }
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 20000, 'Schreiben autosaved');
    await checkScreen('Schreiben');
    await reload();
    await waitFor(`document.querySelectorAll('textarea').length === ${nText} && [...document.querySelectorAll('textarea')].every((t) => t.value === ${JSON.stringify(SCHREIBEN)})`, 20000, 'every Schreiben text recovered after reload');
    await submitModule();
    facts.schreiben_tasks = nText;

    // ---- SPRECHEN ----
    await waitFor(`document.querySelector('[data-act="start"][data-module="sprechen"]')`, 15000, 'Sprechen intro');
    await checkScreen('Sprechen intro');
    await click('#kx-consent');
    await click('[data-act="mic-test"]'); await waitFor(`/Mikrofon funktioniert/.test(document.querySelector('#kx-mic-msg')?.textContent || '')`, 15000, 'microphone check');
    await click('[data-act="start"][data-module="sprechen"]');
    await waitFor(`/^Vorbereitung/.test(document.querySelector('#kx-phase')?.textContent || '')`, 20000, 'preparation');
    const sp = pkg('sprechen');
    const topicItem = sp.parts.flatMap((p) => p.tasks.flatMap((t) => t.items)).find((i) => i.interaction === 'topic_choice');
    const radios = `[...document.querySelectorAll('input[type=radio][data-item="${topicItem.item_id}"]')]`;
    assert.equal(await evaluate(`${radios}.length`), (topicItem.options || []).length, 'every topic option shown');
    facts.slide_decks = await evaluate(`document.querySelectorAll('.kx-deck').length`);
    assert.ok(facts.slide_decks >= 1, 'Teil 2 slides shown in the preparation');
    await evaluate(`${radios}[0].click()`);
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 15000, 'topic autosaved');
    await checkScreen('Sprechen preparation');
    const sched = speakingSchedule(sp.timing.plan);
    const placeAt = async (msAfterStart) => {   // TEST SERVER ONLY
      const r = await one("SELECT started_at FROM attempt_modules WHERE module = 'sprechen'");
      const d = (Date.now() - msAfterStart) - r.started_at;
      await DB.prepare("UPDATE attempt_modules SET started_at = started_at + ?1, deadline_at = deadline_at + ?1 WHERE module = 'sprechen'").bind(d).run();
      await reload();
    };
    const chunks = async (part) => (await one('SELECT COUNT(*) AS n FROM recording_chunks WHERE part = ?1', part)).n;
    const phase = (id) => { const p = sched.find((x) => x.id === id); assert.ok(p, `Sprechen plan has no phase ${id}`); return p; };
    await placeAt(phase('teil1').start_ms + 500);
    await waitFor(`/^Teil 1: Aufnahme läuft/.test(document.querySelector('#kx-phase')?.textContent || '')`, 60000, 'Teil 1 recording (after the partner prompt)');
    for (const t0 = Date.now(); (await chunks(1)) < 1; await sleep(250)) if (Date.now() - t0 > 30000) throw new Error('no Teil 1 recording chunks: ' + (await text()).slice(0, 300));
    await placeAt(phase('teil2').start_ms + 500);
    await waitFor(`/^Teil 2: Aufnahme läuft/.test(document.querySelector('#kx-phase')?.textContent || '')`, 60000, 'Teil 2 recording');
    for (const t0 = Date.now(); (await chunks(2)) < 1; await sleep(250)) if (Date.now() - t0 > 30000) throw new Error('no Teil 2 recording chunks');
    const listen = sched.find((p) => p.kind === 'listen');
    if (listen) {
      await placeAt(listen.start_ms + 500);
      await waitFor(`window.__plays.length > 0`, 15000, 'partner presentation started');
      const before = (await one('SELECT COUNT(*) AS n FROM recording_chunks WHERE part = 3')).n;
      await sleep(2500);
      assert.equal((await one('SELECT COUNT(*) AS n FROM recording_chunks WHERE part = 3')).n, before, 'nothing recorded during the partner presentation');
    }
    await placeAt(phase('teil3').start_ms + 500);
    await waitFor(`/^Teil 3: Aufnahme läuft/.test(document.querySelector('#kx-phase')?.textContent || '')`, 60000, 'Teil 3 recording');
    for (const t0 = Date.now(); (await chunks(3)) < 1; await sleep(250)) if (Date.now() - t0 > 30000) throw new Error('no Teil 3 recording chunks');
    await checkScreen('Sprechen Teil 3');
    await submitModule();
    await waitFor(`document.querySelector('[data-act="complete"]')`, 20000, 'complete screen');
    await click('[data-act="complete"]');
    await waitFor(`/kein offizielles Ergebnis des Goethe-Instituts/.test(document.body.innerText) && !document.querySelector('[data-act="complete"]')`, 20000, 'result page');
    const res = await text();
    if (process.env.KX_PRINT_RESULT) console.log('----- RESULT PAGE -----\n' + res + '\n-----');
    assert.match(res, /Klarweg-Simulation – kein offizielles Ergebnis des Goethe-Instituts\./, 'OD-45 disclaimer');
    assert.match(res, /in Bewertung/, 'productive skills pending rating');
    assert.match(res, new RegExp(`richtig ${lesen.length} · falsch 0`), 'Lesen all correct');
    assert.match(res, new RegExp(`richtig ${hoeren.length} · falsch 0`), 'Hören all correct');
    await checkScreen('result');
    facts.chunks = (await one('SELECT COUNT(*) AS n FROM recording_chunks')).n;

    // ---- RATING (one examiner, two blind rounds) ----
    const attempt = (await one('SELECT id FROM attempts')).id;
    const api = (method, p, body) => evaluate(`fetch(${JSON.stringify('/exam/v1' + p)}, { method: ${JSON.stringify(method)}, credentials: 'include', headers: { 'content-type': 'application/json' }${body ? `, body: ${JSON.stringify(JSON.stringify(body))}` : ''} })
      .then(async (r) => ({ status: r.status, json: await r.json().catch(() => null), type: r.headers.get('content-type') }))`);
    await evaluate(`document.cookie = 'kx-dev-as=rater1; path=/'`);
    let prod = await api('GET', `/admin/attempts/${attempt}/productive`);
    assert.equal(prod.status, 200, JSON.stringify(prod.json));
    const units = prod.json.units;
    assert.ok(units.some((u) => /sp/.test(u.item_id)) && units.some((u) => /sc/.test(u.item_id) || /s\d/.test(u.item_id)), 'Schreiben and Sprechen units to rate');
    // every recorded Sprechen turn is playable for the rater (binary audio); an outsider is refused
    const turns = await all("SELECT DISTINCT part, turn FROM recording_chunks ORDER BY part, turn");
    for (const t of turns) {
      const r = await evaluate(`fetch('/exam/v1/admin/attempts/${attempt}/recordings/${t.part}/${t.turn}', { credentials: 'include' }).then(async (r) => ({ status: r.status, bytes: (await r.arrayBuffer()).byteLength, type: r.headers.get('content-type') }))`);
      assert.equal(r.status, 200, `rater playback Teil ${t.part} ${t.turn}: ${JSON.stringify(r)}`);
      assert.ok(r.bytes > 0 && /audio/.test(r.type || ''), `rater playback is audio: ${JSON.stringify(r)}`);
    }
    facts.rater_recordings = turns.length;
    await evaluate(`document.cookie = 'kx-dev-as=outsider; path=/'`);
    const denied = await evaluate(`fetch('/exam/v1/admin/attempts/${attempt}/recordings/${turns[0].part}/${turns[0].turn}', { credentials: 'include' }).then((r) => r.status)`);
    assert.ok([403, 404].includes(denied), `an outsider must not hear a learner recording (${denied})`);
    await evaluate(`document.cookie = 'kx-dev-as=rater1; path=/'`);
    for (const round of [1, 2]) {
      if (round === 2) prod = await api('GET', `/admin/attempts/${attempt}/productive`);
      for (const u of prod.json.units) {
        const r = await api('POST', '/admin/ratings', { attempt_id: attempt, item_id: u.item_id, round, bands: Object.fromEntries(Object.keys(u.criteria).map((c) => [c, 'B'])) });
        assert.equal(r.status, 200, JSON.stringify(r.json));
      }
    }
    await evaluate(`document.cookie = 'kx-dev-as=learner; path=/'`);
    await send('Page.navigate', { url: base });
    await waitFor(`document.querySelector('[data-act="last-result"]')`, 20000, 'start screen links the last result');
    await click('[data-act="last-result"]');
    await waitFor(`/kein offizielles Ergebnis des Goethe-Instituts/.test(document.body.innerText) && !/in Bewertung/.test(document.body.innerText)`, 20000, 'final result after rating');
    const fin = await text();
    assert.ok(fin.includes(SAME_EXAMINER_NOTE), 'same-examiner disclosure');
    assert.match(fin, /Schreiben[\s\S]*\d+ \/ 100|\d+ von 100/, 'Schreiben final points');
    assert.match(fin, /kein offizielles Ergebnis des Goethe-Instituts/);
    facts.rating_units = units.length;
    const exc = b.events.filter((e) => e.method === 'Runtime.exceptionThrown').map((e) => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text);
    assert.equal(exc.length, 0, 'uncaught page exceptions: ' + exc.join(' | ').slice(0, 600));
    return facts;
  } finally { b.close(); dev.server.close(); }
}

const report = [];
let failed = 0;
for (const dir of DIRS) for (const vp of viewports) {
  const t0 = Date.now();
  try {
    const f = await journey(dir, vp);
    report.push({ ...f, result: 'PASS', seconds: Math.round((Date.now() - t0) / 1000) });
    log('PASS', f.form, vp.name, JSON.stringify(f));
  } catch (e) {
    failed++;
    report.push({ dir: path.basename(dir), viewport: vp.name, result: 'FAIL', error: String(e && e.stack || e).slice(0, 2500) });
    log('FAIL', path.basename(dir), vp.name, String(e && e.message || e).slice(0, 1200));
  }
}
if (opt('json')) fs.writeFileSync(opt('json'), JSON.stringify({ generated_at: new Date().toISOString(), runs: report }, null, 2));
log(`${report.length - failed}/${report.length} browser journeys passed (engineering evidence only)`);
process.exit(failed ? 1 : 0);
