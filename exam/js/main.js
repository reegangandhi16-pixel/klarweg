/* Exam shell — DOM wiring only (browser). All rules live on the server; all
   rendering lives in render.js; sequencing in engine.js. */
import { createApi, ExamApiError } from './api.js';
import { ServerClock, formatRemaining } from './clock.js';
import { idbStore } from './store.js';
import { Autosave } from './autosave.js';
import { createRenderer, header, resultPage, esc, MODULE_LABELS } from './render.js';
import { nextAction, assertSupported, unansweredCount } from './engine.js';
import { phaseAt, phaseLabel, ControlledPlayer } from './hoeren.js';
import { ChunkQueue, TurnRecorder } from './recorder.js';
import { speakingPhaseAt, prepEndsAt, partOfPhase, speakingItemsForPart, partnerAssetFor, listenPhaseAssets, topicItems,
  partnerPlayOffset, turnWindowMs, resumeAction, speakingPhaseLabel } from './sprechen.js';
import { countWords } from './wordcount.js';
import { randomId } from './ids.js';

const $ = (s, r = document) => r.querySelector(s);
const app = $('#kx-app');
const base = (document.querySelector('meta[name="kw-exam-api"]') || {}).content || '';
const clock = new ServerClock();
const api = createApi({ base, clock });
const renderer = createRenderer();
const S = { attempt: null, lease: null, pkg: null, answers: {}, autosave: null, module: null, timer: null, hb: null, store: null, locked: new Set(), sprechen: null };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function deviceId() {
  try { let d = localStorage.getItem('kx-device'); if (!d) { d = randomId('dev'); localStorage.setItem('kx-device', d); } return d; } catch { return randomId('dev'); }
}
function leaseKey(id) { return `kx-lease:${id}`; }
function rememberLease(id, l) { try { sessionStorage.setItem(leaseKey(id), l); } catch {} }

function screen(html) { app.innerHTML = html; const h = app.querySelector('h1, h2'); if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); } }
function message(title, body, actions = '') { screen(`<main class="kx-card"><h1>${esc(title)}</h1><p>${esc(body)}</p><div class="kx-actions">${actions}</div></main>`); }
function fail(e) {
  const code = e instanceof ExamApiError ? e.code : 'network';
  if (code === 'lease_superseded') return message('In einem anderen Fenster geöffnet', 'Diese Prüfung wird in einem anderen Tab oder auf einem anderen Gerät fortgesetzt.', '<button class="kx-btn" data-act="takeover">Hier fortsetzen</button>');
  if (code === 'auth_required') return message('Bitte anmelden', 'Melden Sie sich bei Klarweg an, um fortzufahren.');
  message('Verbindung unterbrochen', `Ihre Antworten sind gespeichert oder lokal gesichert. (${code})`, '<button class="kx-btn" data-act="reload">Erneut verbinden</button>');
}

async function boot() {
  S.store = await idbStore();
  try {
    const av = await api.availability();
    const open = av.open_attempts[0];
    if (open) return resume(open.attempt_id);
    const mode = av.modes.find((m) => m.mode === 'synthetic_full' && m.available);
    if (!mode) return message('Nicht verfügbar', 'Der Prüfungsbereich ist für Ihr Konto noch nicht freigeschaltet.');
    screen(`<main class="kx-card"><p class="kx-eyebrow">Systemtest</p><h1>Klarweg B1 Simulation</h1><p>Synthetischer Ablauf mit Prüftönen statt echter Aufgaben: Lesen, Hören, Schreiben, Sprechen. Die Zeit läuft auf dem Server.</p><div class="kx-actions"><button class="kx-btn" data-act="create">Systemtest starten</button></div></main>`);
  } catch (e) { fail(e); }
}

async function resume(attemptId, takeover = false) {
  let stored = null; try { stored = sessionStorage.getItem(leaseKey(attemptId)); } catch {}
  try {
    if (stored && !takeover) {
      const hb = await api.heartbeat(attemptId, stored);
      S.lease = stored; S.attempt = hb; return route();
    }
  } catch { /* fall through to a fresh lease */ }
  try {
    const r = await api.lease(attemptId, deviceId(), takeover);
    S.lease = r.lease.lease_id; rememberLease(attemptId, S.lease); S.attempt = r; route();
  } catch (e) {
    if (e.code === 'lease_held') return message('Bereits geöffnet', 'Diese Prüfung ist in einem anderen Tab oder auf einem anderen Gerät geöffnet.', `<button class="kx-btn" data-act="takeover" data-attempt="${esc(attemptId)}">Hier fortsetzen</button>`);
    fail(e);
  }
}

function startHeartbeat() {
  clearInterval(S.hb);
  S.hb = setInterval(async () => {
    try { const r = await api.heartbeat(S.attempt.attempt_id, S.lease); const before = S.module; S.attempt = r; const m = r.modules.find((x) => x.module === before); if (before && m && m.status === 'submitted') route(); }
    catch (e) { if (e.code === 'lease_superseded') { clearInterval(S.hb); fail(e); } }
  }, 15_000);
}

async function route() {
  startHeartbeat();
  const a = nextAction(S.attempt);
  if (a.kind === 'start') return intro(a.module);
  if (a.kind === 'resume') return openModule(a.module);
  if (a.kind === 'complete') return screen('<main class="kx-card"><h1>Alle Module abgegeben</h1><p>Schließen Sie den Systemtest ab, um das Ergebnis zu sehen.</p><div class="kx-actions"><button class="kx-btn" data-act="complete">Abschließen</button></div></main>');
  if (a.kind === 'result') return showResult();
  if (a.kind === 'wait') return message('Abgabe wird abgeschlossen', 'Ihre Abgabe ist gespeichert und wird gerade abgeschlossen.', '<button class="kx-btn" data-act="reload">Erneut prüfen</button>');
}

function intro(module) {
  const extra = module === 'sprechen' ? '<p>Für dieses Modul werden Ihre Antworten aufgenommen und privat gespeichert. Ohne Ihre Zustimmung kann das Modul nicht beginnen.</p><label class="kx-consent"><input type="checkbox" id="kx-consent"> Ich stimme der Aufnahme zu.</label>' : '';
  const hoeren = module === 'hoeren' ? '<p>Die Prüftöne werden zuerst vollständig geladen. Wiedergabe ohne Pause, Vor- oder Zurückspulen.</p>' : '';
  screen(`<main class="kx-card"><p class="kx-eyebrow">Nächstes Modul</p><h1>${esc(MODULE_LABELS[module] || module)}</h1>${hoeren}${extra}<div class="kx-actions"><button class="kx-btn" data-act="start" data-module="${module}">Modul starten</button></div></main>`);
}

async function openModule(module) {
  const id = S.attempt.attempt_id;
  S.module = module;
  S.locked = new Set(); S.sprechen = null;
  announced = {};
  const p = await api.pkg(id, S.lease, module);
  S.pkg = p.package;
  assertSupported(S.pkg, renderer.registry);
  const saved = await api.answers(id, S.lease, module);
  S.answers = Object.fromEntries(saved.answers.map((a) => [a.item_id, a.value]));
  S.autosave = new Autosave({
    key: `answers:${id}:${module}`, store: S.store,
    send: (batch, requestId) => api.save(id, S.lease, module, batch, requestId),
    onState: () => paintHeader(), onFatal: (code) => { if (code === 'lease_superseded') fail(new ExamApiError(409, code)); else refresh(); },
    onDropped: (code, batch) => syncFromServer(batch.map((b) => b.item_id)).catch(() => {})
  });
  await S.autosave.load(saved.answers);
  const local = (await S.store.get(`answers:${id}:${module}`)) || {};
  for (const v of Object.values(local.pending || {})) S.answers[v.item_id] = v.value;
  if (module === 'sprechen' && S.pkg.timing.kind === 'speaking_phases') {
    const m = moduleState();
    S.sprechen = { plan: S.pkg.timing.plan, startedAt: m.started_at, multiplier: S.attempt.time_multiplier || 1 };
    // after a refresh past the preparation the topic choice renders locked straight away
    if (clock.serverNow() >= prepEndsAt(S.sprechen.plan, m.started_at, S.sprechen.multiplier)) for (const t of topicItems(S.pkg)) S.locked.add(t.item_id);
  }
  paint();
  clearInterval(S.timer);
  S.timer = setInterval(tick, 250);
  const guard = (e) => { if (S.module === module) fail(e); };   // after submit, a stopped loop is not an error
  if (module === 'hoeren') runHoeren().catch(guard);
  if (module === 'sprechen') runSprechen().catch(guard);
}

function moduleState() { return S.attempt.modules.find((m) => m.module === S.module); }
function paintHeader() {
  const m = S.module && moduleState();
  const h = $('#kx-head');
  if (h && m) h.innerHTML = header({ module: S.module, remainingMs: clock.remaining(m.deadline_at), saveState: S.autosave && S.autosave.state });
}
function paint() {
  const phaseTime = S.sprechen ? '<p class="kx-phase-time" id="kx-phase-time"></p>' : '';
  screen(`<div id="kx-head"></div><p class="kx-phase" id="kx-phase" aria-live="polite"></p>${phaseTime}<p class="kx-announce" id="kx-announce" role="status" aria-live="polite"></p><main class="kx-module" id="kx-main">${renderer.module(S.pkg, S.answers, { locked: S.locked })}</main>`
    + `<footer class="kx-foot"><button class="kx-btn" data-act="submit">Modul abgeben</button></footer>`);
  paintHeader();
}
let announced = {};   // time warnings go to #kx-announce so they never overwrite the phase text
function tick() {
  const m = moduleState(); if (!m) return;
  const rem = clock.remaining(m.deadline_at);
  const t = $('.kx-timer'); if (t) t.textContent = formatRemaining(rem);
  if (S.sprechen) {   // time left in the current Sprechen phase (server time)
    const at = speakingPhaseAt(S.sprechen.plan, S.sprechen.startedAt, clock.serverNow(), S.sprechen.multiplier);
    const pt = $('#kx-phase-time'); if (pt) pt.textContent = at.state === 'running' ? `Diese Phase: noch ${formatRemaining(at.remaining_ms)}` : '';
  }
  for (const mark of [300_000, 60_000]) if (rem <= mark && !announced[mark]) { announced[mark] = true; const ph = $('#kx-announce'); if (ph) ph.textContent = `Noch ${mark / 60_000} Minute${mark > 60_000 ? 'n' : ''}.`; }
  if (rem === 0) { clearInterval(S.timer); setTimeout(refresh, 11_000); }   // server auto-submits after its grace
}
async function refresh() { try { S.attempt = await api.getAttempt(S.attempt.attempt_id); S.module = null; route(); } catch (e) { fail(e); } }

/* ---------- Hören ---------- */
async function runHoeren() {
  const id = S.attempt.attempt_id;
  const plan = S.pkg.timing.plan;
  const lastPart = Math.max(...plan.phases.map((p) => p.part || 0));
  const assets = [...new Set(plan.phases.filter((p) => p.kind === 'play').map((p) => p.asset_id))];
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const player = new ControlledPlayer(ctx);
  const ph = $('#kx-phase');
  const rendered = new Set([...document.querySelectorAll('#kx-main .kx-part')].map((el) => Number(el.dataset.part)));
  ph.textContent = 'Prüftöne werden geladen …';
  for (const a of assets) { const m = await api.media(id, S.lease, a); await player.preload(a, await api.mediaBytes(m.url)); }
  await ctx.resume();
  // OD-05: report a genuine interruption of a running play (audio session interrupted / page torn down)
  const reportInterrupted = () => {
    const cp = S.currentPlay; if (!cp) return;
    S.currentPlay = null;
    api.hoerenEvent(id, S.lease, { type: 'interrupted', phase_seq: cp.seq, kind: cp.kind }, { keepalive: true }).catch(() => {});
  };
  ctx.onstatechange = () => { if (ctx.state !== 'running') { player.stop(); reportInterrupted(); } };
  S.onPageHide = reportInterrupted;
  const ready = await api.hoerenEvent(id, S.lease, { type: 'ready' });
  let m = moduleState(); m.plan_started_at = ready.plan_started_at; m.deadline_at = ready.deadline_at; m.plan_shift_ms = ready.plan_shift_ms || 0;

  /* OD-02: parts appear only when the server has opened them */
  let nextRefresh = 0;
  const refreshParts = async () => {
    const p = await api.pkg(id, S.lease, 'hoeren');
    S.pkg = p.package;
    const main = $('#kx-main');
    for (const part of S.pkg.parts) {
      if (rendered.has(part.part)) continue;
      rendered.add(part.part);
      main.insertAdjacentHTML('beforeend', renderer.part(part, S.answers));
    }
  };
  const play = async (phase, kind, offsetMs) => {
    S.currentPlay = { seq: phase.seq, kind };
    await player.play(phase.asset_id, offsetMs);
    if (!S.currentPlay || S.currentPlay.seq !== phase.seq) return;   // interrupted meanwhile
    S.currentPlay = null;
    return api.hoerenEvent(id, S.lease, { type: 'play_end', phase_seq: phase.seq, kind });
  };
  const recover = async (seq) => {
    const phase = plan.phases.find((p) => p.seq === seq);
    const r = await api.hoerenEvent(id, S.lease, { type: 'play_start', phase_seq: seq, kind: 'recovery' });
    m.plan_shift_ms = r.plan_shift_ms; m.deadline_at = r.deadline_at;
    ph.textContent = 'Die unterbrochene Wiedergabe wird einmal wiederholt.';
    await play(phase, 'recovery', 0);
  };
  if (ready.pending_recovery_seq != null) await recover(ready.pending_recovery_seq).catch(() => {});
  await refreshParts();

  let lastIndex = -2;
  const loop = async () => {
    if (S.module !== 'hoeren') { player.stop(); S.onPageHide = null; return; }
    m = moduleState();
    const at = phaseAt(plan, m.plan_started_at, clock.serverNow(), m.plan_shift_ms || 0);
    const wanted = at.state === 'finished' ? lastPart : at.phase ? (at.phase.part ?? lastPart) : 0;
    if (wanted > Math.max(0, ...rendered) && Date.now() >= nextRefresh) { nextRefresh = Date.now() + 700; refreshParts().catch(() => {}); }
    if (at.index !== lastIndex) {
      lastIndex = at.index;
      ph.textContent = at.state === 'finished' ? 'Ende des Hörteils. Geben Sie das Modul ab.' : phaseLabel(at.phase);
      if (at.phase && at.phase.kind === 'play') playPhase(at).catch(() => {});
    }
    setTimeout(loop, 200);
  };
  const playPhase = async (at) => {
    try { await api.hoerenEvent(id, S.lease, { type: 'play_start', phase_seq: at.phase.seq }); }
    catch (e) {
      if (e.code !== 'play_limit_reached') throw e;
      return recover(at.phase.seq);   // the server decides whether a recovery is owed (OD-05)
    }
    return play(at.phase, 'normal', at.elapsed_ms || 0);
  };
  loop();
}

/* ---------- Sprechen (SPEAKING-SPEC §2, §5) ---------- */
/* Server answers for these items replace the local ones (after a refused save, e.g. topic_locked). */
async function syncFromServer(itemIds) {
  const saved = await api.answers(S.attempt.attempt_id, S.lease, S.module);
  for (const id of itemIds) {
    const row = saved.answers.find((a) => a.item_id === id);
    if (row) S.answers[id] = row.value; else delete S.answers[id];
    for (const el of document.querySelectorAll(`[data-item="${CSS.escape(id)}"]`)) {
      if (el.type === 'radio') el.checked = !!row && row.value.option_id === el.value;
      else if (el.tagName === 'SELECT') el.value = row ? row.value.option_id || '' : '';
    }
  }
}

/* Plays one Sprechen audio asset once, optionally from an offset; resolves when it ends. */
async function playSpeakingAsset(assetId, offsetMs = 0) {
  const id = S.attempt.attempt_id;
  const m = await api.media(id, S.lease, assetId);
  const a = new Audio();
  a.dataset.asset = assetId;
  a.src = URL.createObjectURL(new Blob([await api.mediaBytes(m.url)], { type: m.mime }));
  if (offsetMs > 0) {
    await new Promise((r) => { a.onloadedmetadata = r; a.onerror = r; });
    try { a.currentTime = offsetMs / 1000; } catch { /* plays from the start if seeking is unavailable */ }
  }
  await new Promise((r) => { a.onended = r; a.onerror = r; a.play().catch(r); });
}

/* Phase-driven Sprechen: the server plan and server time decide the phase; a refresh lands in the same phase
   with the same remaining time. Preparation → (intro) → Teil 1 → Teil 2 → partner presentation (listen only)
   → Teil 3. The topic choice locks when the preparation ends (the server enforces the same rule). */
async function runSprechen() {
  const id = S.attempt.attempt_id;
  const { plan, startedAt, multiplier } = S.sprechen;
  const queue = new ChunkQueue({
    store: S.store,
    upload: (q, bytes, mime) => api.chunk(id, S.lease, q, bytes, mime),
    completeTurn: (b) => api.turn(id, S.lease, b)
  });
  const status = await api.speakingStatus(id, S.lease);
  const turnRow = (part, turn) => status.turns.find((t) => t.part === part && t.turn === turn);
  const serverSeqs = (part, turn) => status.chunks.filter((c) => c.part === part && c.turn === turn.turn).map((c) => c.seq);
  const done = new Set();
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const ph = $('#kx-phase');
  const heard = listenPhaseAssets(S.pkg, plan);   // partner presentations are heard in their own phase, never replayed by a turn
  const prepEnd = prepEndsAt(plan, startedAt, multiplier);
  const topics = topicItems(S.pkg);
  const lockTopics = () => {
    for (const t of topics) {
      S.locked.add(t.item_id);
      for (const el of document.querySelectorAll(`[data-item="${CSS.escape(t.item_id)}"]`)) el.disabled = true;
    }
    if (S.autosave) S.autosave.flush().catch(() => {});   // send a last-second choice now (the server allows the save grace)
  };
  let topicsLocked = false;
  const active = () => S.module === 'sprechen';
  const label = (key, text) => { const el = document.querySelector(`[data-turn="${CSS.escape(key)}"]`); if (el) el.textContent = text; };
  const waitUntil = async (serverT) => { while (active() && clock.serverNow() < serverT) await sleep(Math.min(200, Math.max(10, serverT - clock.serverNow()))); };

  const runListen = async (at) => {
    const asset = partnerAssetFor(S.pkg, plan, at.phase);
    const offset = asset ? partnerPlayOffset(at, asset.duration_ms) : null;
    if (offset == null) return;
    await playSpeakingAsset(asset.asset_id, offset);
  };

  /* After a reload: every turn that was interrupted mid-recording keeps what was recorded and is finalised now,
     whichever phase is running; its part resumes at the next turn (SPEAKING-SPEC §5). Complete turns are skipped. */
  const settleTurns = async () => {
    for (const p of S.pkg.parts) for (const it of speakingItemsForPart(S.pkg, Number(p.part))) for (const turn of it.response_spec.turns) {
      const part = Number(p.part), key = `${it.item_id}:${turn.turn}`, t = { item_id: it.item_id, turn: turn.turn };
      const local = (await queue.pending(t)).map((k) => Number(k.split(':').pop()));
      const row = turnRow(part, turn.turn);
      const action = resumeAction(row && row.status, serverSeqs(part, turn), local);
      if (action.kind === 'done') { done.add(key); label(key, 'gespeichert'); }
      if (action.kind === 'finalize') {
        await queue.drain(t, new Set(serverSeqs(part, turn)));
        // duration estimate for an interrupted turn: 1 s chunks (TurnRecorder timeslice), capped at the turn length
        await api.turn(id, S.lease, { item_id: it.item_id, turn: turn.turn, chunks: action.chunks, duration_ms: Math.min(action.chunks * 1000, turn.seconds * 1000) });
        done.add(key); label(key, 'gespeichert (unterbrochen)');
      }
    }
  };

  const runTurns = async (at) => {
    const part = partOfPhase(at.phase);
    if (part == null) return;
    for (const it of speakingItemsForPart(S.pkg, part)) for (const turn of it.response_spec.turns) {
      if (!active() || clock.serverNow() >= at.ends_at) return;
      const key = `${it.item_id}:${turn.turn}`;
      const t = { item_id: it.item_id, turn: turn.turn };
      if (done.has(key)) { label(key, 'gespeichert'); continue; }
      if (turn.prompt_asset && !heard.has(turn.prompt_asset)) { ph.textContent = `Teil ${part}: Hören Sie den Gesprächsimpuls.`; await playSpeakingAsset(turn.prompt_asset); }
      const windowMs = turnWindowMs(turn.seconds, clock.serverNow(), at.ends_at);
      if (!windowMs || !active()) return;
      ph.textContent = `Teil ${part}: Aufnahme läuft — sprechen Sie jetzt (max. ${Math.round(windowMs / 1000)} s).`;
      label(key, 'Aufnahme …');
      const rec = new TurnRecorder({ stream, queue, turn: t });
      rec.start();
      await waitUntil(clock.serverNow() + windowMs);
      const res = await rec.stop();
      label(key, 'wird hochgeladen …');
      if (res.chunks > 0) { await queue.finish(t, res.chunks, res.duration_ms); done.add(key); label(key, 'gespeichert'); }
      else label(key, 'offen');
    }
    if (active() && clock.serverNow() < at.ends_at) ph.textContent = `Teil ${part} beendet. Der nächste Teil beginnt automatisch.`;
  };

  try {
    await settleTurns();
    let lastIndex = -2;
    while (active()) {
      if (!topicsLocked && clock.serverNow() >= prepEnd) { topicsLocked = true; lockTopics(); }
      const at = speakingPhaseAt(plan, startedAt, clock.serverNow(), multiplier);
      if (at.state === 'finished') { ph.textContent = 'Alle Teile beendet. Geben Sie das Modul ab.'; break; }
      if (at.state === 'running' && at.index !== lastIndex) {
        lastIndex = at.index;
        ph.textContent = speakingPhaseLabel(at.phase);
        if (at.phase.kind === 'listen') await runListen(at);
        else if (at.phase.kind === 'speak') await runTurns(at);
        continue;   // re-evaluate immediately: the phase may have ended while recording
      }
      await sleep(200);
    }
  } finally {
    stream.getTracks().forEach((tr) => tr.stop());
  }
}

async function showResult() {
  clearInterval(S.hb); clearInterval(S.timer);
  const r = await api.result(S.attempt.attempt_id);
  screen(resultPage(r.result));
}

/* ---------- events ---------- */
app.addEventListener('change', (e) => {
  const el = e.target;
  if (!el.dataset || !el.dataset.item || !S.autosave) return;
  const value = { option_id: el.value === '' ? null : el.value };
  S.answers[el.dataset.item] = value; S.autosave.set(el.dataset.item, value);
});
app.addEventListener('input', (e) => {
  const el = e.target;
  if (el.tagName !== 'TEXTAREA' || !S.autosave) return;
  const wc = document.querySelector(`[data-wc-for="${CSS.escape(el.id)}"]`); if (wc) wc.textContent = countWords(el.value);
  S.answers[el.dataset.item] = { text: el.value }; S.autosave.set(el.dataset.item, { text: el.value });
});
app.addEventListener('click', async (e) => {
  const b = e.target.closest('button'); if (!b) return;
  const act = b.dataset.act;
  try {
    if (b.dataset.insert) {
      const ta = document.getElementById(b.dataset.target); const { selectionStart: s, selectionEnd: en, value } = ta;
      ta.value = value.slice(0, s) + b.dataset.insert + value.slice(en); ta.selectionStart = ta.selectionEnd = s + 1; ta.focus();
      ta.dispatchEvent(new Event('input', { bubbles: true })); return;
    }
    if (act === 'reload') return location.reload();
    if (act === 'create') { const r = await api.createAttempt({ mode: 'synthetic_full', level: 'b1', device_id: deviceId() }); S.lease = r.lease.lease_id; rememberLease(r.attempt_id, S.lease); S.attempt = r; return route(); }
    if (act === 'takeover') return resume(b.dataset.attempt || S.attempt.attempt_id, true);
    if (act === 'start') {
      b.disabled = true;
      if (b.dataset.module === 'sprechen') {
        if (!$('#kx-consent').checked) { b.disabled = false; $('#kx-consent').focus(); return; }
        await api.consent(S.attempt.attempt_id, S.lease, 'rec-consent@1');
      }
      await api.start(S.attempt.attempt_id, S.lease, b.dataset.module);
      S.attempt = await api.getAttempt(S.attempt.attempt_id);
      return openModule(b.dataset.module);
    }
    if (act === 'submit') {
      const open = unansweredCount(S.pkg, S.answers);
      if (!confirm(open ? `${open} Aufgabe(n) ohne Antwort. Modul trotzdem abgeben?` : 'Modul jetzt abgeben? Danach ist keine Änderung mehr möglich.')) return;
      await S.autosave.flush();
      await api.submit(S.attempt.attempt_id, S.lease, S.module);
      clearInterval(S.timer); S.module = null;
      S.attempt = await api.getAttempt(S.attempt.attempt_id); return route();
    }
    if (act === 'complete') { await api.complete(S.attempt.attempt_id, S.lease); S.attempt = await api.getAttempt(S.attempt.attempt_id); return showResult(); }
  } catch (err) { fail(err); }
});
window.addEventListener('beforeunload', (e) => { if (S.autosave && S.autosave.hasPending()) { S.autosave.flush(); e.preventDefault(); } });
window.addEventListener('online', () => S.autosave && S.autosave.flush());
window.addEventListener('pagehide', () => { if (S.onPageHide) S.onPageHide(); });

boot();
