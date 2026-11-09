/* NON-PRODUCTION room preview (scripts/exam-room-preview.mjs builds the site; never on klarweg.in).
   Runs the REAL Sprechen driver, speaking audio, ChunkQueue/TurnRecorder, classic Sprechen view and exam room, wired as
   exam/js/main.js runSprechen() does — only the server is replaced by an in-browser stand-in: the package and audio
   are static demo files, the clock is the device clock (plus "Nächste Phase" jumps), and chunks/turns are kept in
   memory so the tester can play them back at the end. Nothing is sent anywhere. */
import { createRenderer } from '/exam/js/render.js';
import { ChunkQueue, TurnRecorder } from '/exam/js/recorder.js';
import { memoryStore } from '/exam/js/store.js';
import { speakingPhaseAt, speakingSchedule, speakingPhaseLabel, topicItems, chosenTopic } from '/exam/js/sprechen.js';
import { createSpeakingDriver } from '/exam/js/sprechen-driver.js';
import { createSpeakingAudio } from '/exam/js/speaking-audio.js';
import { createRoomBridge } from '/exam/js/room/bridge.js';
import { roomWanted, VIEW_KEY } from '/exam/js/room/config.js';
import { framePeak, levelPercent } from '/exam/js/level.js';
import { formatRemaining } from '/exam/js/clock.js';

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const T0 = performance.now();
// proto/exam-room-photoreal: the video renderer (same createRoom contract); ?renderer=3d keeps the old one for comparison
const ROOM_MODULE = new URLSearchParams(location.search).get('renderer') === '3d' ? '/exam/js/room/room.js' : '/exam/js/room-video/video-room.js';

/* ---------- diagnostics (no personal data) ---------- */
const diag = { ua: navigator.userAgent, screen: `${screen.width}x${screen.height}@${devicePixelRatio}`, events: [], errors: [], fps: [], jank: 0, frames: 0 };
const note = (kind, d) => { diag.events.push({ t: Math.round(performance.now() - T0), kind, ...(d || {}) }); };
addEventListener('error', (e) => diag.errors.push(String(e.message || e.error)));
addEventListener('unhandledrejection', (e) => diag.errors.push('rejection: ' + String(e.reason && (e.reason.message || e.reason))));
for (const lvl of ['warn', 'info']) {
  const orig = console[lvl].bind(console);
  console[lvl] = (...a) => { if (typeof a[0] === 'string' && /^\[kx-/.test(a[0])) note(a[1], a[2] && typeof a[2] === 'object' ? { d: JSON.stringify(a[2]).slice(0, 160) } : null); orig(...a); };
}
(function fpsLoop() {
  let last = performance.now(), n = 0, win = last;
  const tick = (t) => { n++; diag.frames++; if (t - last > 50) diag.jank++; last = t; if (t - win >= 2000) { diag.fps.push(Math.round((n * 1000) / (t - win))); if (diag.fps.length > 600) diag.fps.shift(); n = 0; win = t; } requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
})();

/* ---------- state ---------- */
const renderer = createRenderer();
let pkg, audioFiles, plan, startedAt = 0, offset = 0, active = true;
const answers = {}, locked = new Set();
const now = () => Date.now() + offset;
const recordings = new Map();   // "item:turn" → { chunks: [{seq, bytes, mime}], done, duration_ms }
let micStream = null, gestureResolve = null;
const pool = [];   // audio elements unlocked inside the start tap (iOS plays them later without another tap)

$('#kx-demo-mode').textContent = roomWanted({ hostname: location.hostname, search: location.search, stored: storedView() })
  ? 'Ansicht: Prüfungsraum (3-D). „Klassische Ansicht“ ist jederzeit möglich.' : 'Ansicht: klassisch. Für den Prüfungsraum die Adresse mit ?room=on öffnen.';
function storedView() { try { return localStorage.getItem(VIEW_KEY); } catch { return null; } }
if (storedView() === 'classic') {   // "Klassische Ansicht" is remembered per device; offer the way back for the preview
  const b = document.createElement('button'); b.type = 'button'; b.className = 'kx-btn kx-btn-quiet'; b.textContent = 'Prüfungsraum wieder einschalten';
  b.addEventListener('click', () => { try { localStorage.removeItem(VIEW_KEY); } catch {} location.search = '?room=on'; });
  $('#kx-demo-mode').append(' ', b);
}

$('#kx-demo-go').addEventListener('click', async () => {
  const btn = $('#kx-demo-go'); btn.disabled = true; btn.textContent = 'Wird geladen …';
  try {
    const t = performance.now();
    try { micStream = await navigator.mediaDevices.getUserMedia({ audio: true }); note('mic_granted', { ms: Math.round(performance.now() - t) }); }
    catch (e) { note('mic_denied', { name: e && e.name }); }
    const data = await (await fetch('demo-pkg.json', { cache: 'no-cache' })).json();
    pkg = data.package; audioFiles = data.audio; plan = pkg.timing.plan;
    const first = Object.values(audioFiles)[0];
    for (let i = 0; i < 8; i++) { const a = new Audio(first); a.muted = true; const reset = () => { a.pause(); a.muted = false; a.removeAttribute('src'); a.load(); };   // empty again: no later 'emptied' after the room attaches
      a.play().then(reset, reset); pool.push(a); }
    startedAt = now();
    note('start');
    run().catch((e) => { diag.errors.push('run: ' + (e && e.message)); showEnd(); });
  } catch (e) { $('#kx-demo-err').textContent = 'Start fehlgeschlagen: ' + (e && e.message); btn.disabled = false; btn.textContent = 'Erneut versuchen'; }
});

/* ---------- classic Sprechen view (same markup as main.js paint()) ---------- */
function paint() {
  $('#kx-app').innerHTML = `<div class="kx-bar"><div id="kx-head"><p class="kx-demo-badge">INTERNE VORSCHAU · Demo-Dialog · keine Uploads</p></div><p class="kx-phase" id="kx-phase" aria-live="polite"></p>`
    + '<p class="kx-phase-time" id="kx-phase-time"></p>'
    + '<div class="kx-level" id="kx-level" hidden aria-hidden="true"><span class="kx-level-label">Mikrofon</span><span class="kx-level-bar"><span class="kx-level-fill"></span></span></div>'
    + '<p class="kx-silence" id="kx-silence" role="status" aria-live="polite"></p><div class="kx-alerts" id="kx-alerts"></div>'
    + '<p><button type="button" class="kx-btn kx-btn-quiet" data-act="demo-skip">Nächste Phase (Demo)</button></p></div>'
    + `<div class="kx-speak-layout"><main class="kx-module" id="kx-main">${renderer.module(pkg, answers, { locked, multiplier: 1 })}</main></div>`;
}
document.addEventListener('change', (e) => {
  const el = e.target;
  if (el && el.matches('input[type=radio][data-item]') && !locked.has(el.dataset.item)) answers[el.dataset.item] = { option_id: el.value };
});
document.addEventListener('click', (e) => {
  const b = e.target.closest && e.target.closest('button[data-act]'); if (!b) return;
  const act = b.dataset.act;
  if (act === 'demo-skip') return skipPhase();
  if (act === 'audio-start' && gestureResolve) return gestureResolve();
  if (act === 'mic-retry') { clearAlert('mic'); return; }
  if (act === 'slide-prev' || act === 'slide-next') {
    const deck = b.closest('.kx-deck'); const slides = [...deck.querySelectorAll('.kx-slide')];
    let i = slides.findIndex((s) => !s.hidden); i = Math.max(0, Math.min(slides.length - 1, i + (act === 'slide-next' ? 1 : -1)));
    slides.forEach((s, k) => { s.hidden = k !== i; s.classList.toggle('kx-current', k === i); });
    deck.querySelector('.kx-deck-pos').textContent = `Folie ${i + 1} von ${slides.length}`;
    deck.querySelector('[data-act="slide-prev"]').disabled = i === 0; deck.querySelector('[data-act="slide-next"]').disabled = i === slides.length - 1;
  }
});
function skipPhase() {
  const at = speakingPhaseAt(plan, startedAt, now());
  if (at.state !== 'running') return;
  offset += at.remaining_ms + 50;
  note('skip', { from: at.phase.id });
}
function showAlert(kind, text, action = null) {
  const box = $('#kx-alerts'); if (!box) return null;
  clearAlert(kind);
  const el = document.createElement('div'); el.className = 'kx-alert'; el.dataset.kind = kind; el.setAttribute('role', 'alert');
  el.innerHTML = `<p>${esc(text)}</p>${action ? `<button type="button" class="kx-btn" data-act="${esc(action.act)}">${esc(action.label)}</button>` : ''}`;
  box.appendChild(el); return el;
}
function clearAlert(kind) { const el = document.querySelector(`#kx-alerts [data-kind="${kind}"]`); if (el) el.remove(); }
function applyTopicLock() {
  for (const t of topicItems(pkg)) { locked.add(t.item_id); for (const el of document.querySelectorAll(`[data-item="${CSS.escape(t.item_id)}"]`)) el.disabled = true; }
}
function requestAudioGesture(endsAt) {
  return new Promise((resolve) => {
    let finished = false;
    const finish = (r) => { if (finished) return; finished = true; gestureResolve = null; clearAlert('gesture'); resolve(r); };
    showAlert('gesture', 'Ihr Browser hat die Wiedergabe blockiert. Bitte starten Sie das Audio.', { act: 'audio-start', label: 'Audio starten' });
    gestureResolve = () => finish('clicked');
    (async () => { while (!finished) { if (now() >= endsAt) return finish('timeout'); await sleep(200); } })();
  });
}
async function getMic() {
  if (micStream && micStream.getAudioTracks().some((tr) => tr.readyState === 'live')) return micStream;
  try { micStream = await navigator.mediaDevices.getUserMedia({ audio: true }); clearAlert('mic'); return micStream; }
  catch (e) { showAlert('mic', 'Kein Zugriff auf das Mikrofon. Erlauben Sie den Mikrofonzugriff und wählen Sie „Mikrofon erneut versuchen“.', { act: 'mic-retry', label: 'Mikrofon erneut versuchen' }); note('mic_unavailable', { name: e && e.name }); return null; }
}
let meter = null;
function levelMeter(on, stream) {
  if (meter) { clearInterval(meter.timer); meter.ctx.close().catch(() => {}); meter = null; }
  const box = $('#kx-level'); if (!box) return;
  box.hidden = !on; if (!on || !stream) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)(); const an = ctx.createAnalyser(); an.fftSize = 512;
    ctx.createMediaStreamSource(stream).connect(an); const buf = new Uint8Array(an.fftSize); const fill = box.querySelector('.kx-level-fill');
    meter = { ctx, timer: setInterval(() => { an.getByteTimeDomainData(buf); fill.style.width = `${levelPercent(framePeak(buf))}%`; }, 100) };
  } catch { /* meter is optional */ }
}

/* ---------- the run (as main.js runSprechen) ---------- */
async function run() {
  paint();
  const timer = setInterval(() => {
    const at = speakingPhaseAt(plan, startedAt, now()); const el = $('#kx-phase-time');
    if (el) el.textContent = at.state === 'running' ? `${speakingPhaseLabel(at.phase)} · noch ${formatRemaining(at.remaining_ms)}` : '';
  }, 250);
  const queue = new ChunkQueue({
    attemptId: 'demo', store: memoryStore(),
    upload: async (q, bytes, mime) => { const k = `${q.item_id}:${q.turn}`; const r = recordings.get(k) || { chunks: [] }; r.chunks.push({ seq: Number(q.seq), bytes, mime }); recordings.set(k, r); },
    completeTurn: async (b) => { const k = `${b.item_id}:${b.turn}`; const r = recordings.get(k) || { chunks: [] }; r.done = true; r.duration_ms = b.duration_ms; recordings.set(k, r); note('turn_complete', { k, chunks: b.chunks, ms: b.duration_ms }); return { ok: true }; }
  });
  const room = startRoom();
  const audio = createSpeakingAudio({
    fetchAsset: async (assetId) => { const r = await fetch(audioFiles[assetId]); if (!r.ok) throw Object.assign(new Error('asset'), { code: 'http_' + r.status }); const bytes = await r.arrayBuffer(); room.prepare(assetId, bytes); return { bytes, mime: 'audio/mpeg' }; },
    makeAudio: () => { const a = pool.pop() || new Audio(); room.attachAudio(a); return a; },
    makeUrl: (bytes, mime) => URL.createObjectURL(new Blob([bytes], { type: mime })),
    now, sleep, requestGesture: requestAudioGesture
  });
  const label = (key, text) => { const el = document.querySelector(`[data-turn="${CSS.escape(key)}"]`); if (el) el.textContent = text; };
  const ui = {
    phase: (text) => { const el = $('#kx-phase'); if (el) el.textContent = text; },
    turn: label, alert: (kind, text) => showAlert(kind, text), clear: clearAlert, lockTopics: applyTopicLock,
    recording: (on, { stream } = {}) => levelMeter(on, stream)
  };
  const driver = createSpeakingDriver({
    pkg, plan, startedAt, multiplier: 1, now, sleep, active: () => active,
    status: { turns: [], chunks: [] }, queue, audio, getMic, recorder: (turn, stream) => new TurnRecorder({ stream, queue, turn }),
    ui: { ...ui,
      phase: (text) => { ui.phase(text); const at = speakingPhaseAt(plan, startedAt, now()); room.phase(at.state === 'running' ? at.phase.id : at.state); },
      recording: (on, opts = {}) => { ui.recording(on, opts); room.recording(on, { part: opts.part, stream: opts.stream }); } },
    topic: () => chosenTopic(pkg, answers),
    log: (event, detail) => console.warn('[kx-sprechen]', event, detail)
  });
  try { await driver.run(); } finally { clearInterval(timer); levelMeter(false); room.destroy(); if (micStream) micStream.getTracks().forEach((t) => t.stop()); }
  await sleep(1500);
  showEnd();
}

function startRoom() {
  const bridge = createRoomBridge({ log: (e, d) => console.warn('[kx-room]', e, d) });
  const main = $('#kx-main');
  if (!main || !roomWanted({ hostname: location.hostname, search: location.search, stored: storedView() })) { bridge.ready(null); note('room_off'); return bridge; }
  const t = performance.now();
  import(ROOM_MODULE)
    .then(({ createRoom }) => createRoom({ mount: main, pkg, log: (e, d) => console.info('[kx-room]', e, d), onFail: () => bridge.destroy() }))
    .then((r) => { bridge.ready(r); note(r ? 'room_ready' : 'room_null', { ms: Math.round(performance.now() - t) }); if (r) { watchVisible(t); wireRoomControls(bridge); } })
    .catch((e) => { console.warn('[kx-room]', 'room_failed', { where: 'load', error: e && e.message }); bridge.ready(null); });
  return bridge;
}
function watchVisible(t) {   // first moment the figures are seated and shown (canvas loses .kx-room-settling)
  const id = setInterval(() => { const c = document.querySelector('.kx-room-canvas, .kxv-room[data-state="ready"]'); if (!c) return; if (!c.classList.contains('kx-room-settling')) { clearInterval(id); note('room_visible', { ms: Math.round(performance.now() - t), sinceStart: Math.round(performance.now() - T0) }); } }, 100);
}
function wireRoomControls(bridge) {
  const bar = document.querySelector('.kx-room-bar'); if (!bar) return;
  const box = document.createElement('div'); box.className = 'kx-room-actions';
  box.innerHTML = '<button type="button" class="kx-btn kx-btn-quiet" data-room="collapse" aria-expanded="true">Raum ausblenden</button><button type="button" class="kx-btn kx-btn-quiet" data-room="classic">Klassische Ansicht</button>';
  bar.appendChild(box);
  box.addEventListener('click', (ev) => {
    const b = ev.target.closest('button[data-room]'); if (!b) return;
    const root = document.querySelector('.kx-room');
    if (b.dataset.room === 'collapse' && root) { const c = root.dataset.collapsed !== 'true'; root.dataset.collapsed = String(c); b.textContent = c ? 'Raum einblenden' : 'Raum ausblenden'; }
    if (b.dataset.room === 'classic') { try { localStorage.setItem(VIEW_KEY, 'classic'); } catch {} note('classic_chosen'); bridge.destroy(); }
  });
}

/* ---------- end: recordings + report ---------- */
function resourceSizes() {
  return performance.getEntriesByType('resource').filter((r) => /\.(glb|js|mp3|json)(\?|$)/.test(r.name))
    .map((r) => ({ f: r.name.replace(location.origin, ''), kb: Math.round((r.transferSize || r.encodedBodySize || 0) / 1024), ms: Math.round(r.duration) }))
    .filter((r) => /avatars|vendor|audio/.test(r.f));
}
function showEnd() {
  active = false;
  const fps = diag.fps.slice(1); const med = fps.length ? fps.slice().sort((a, b) => a - b)[Math.floor(fps.length / 2)] : null;
  const report = { ...diag, fps_median: med, fps_min: fps.length ? Math.min(...fps) : null, recordings: [...recordings].map(([k, r]) => ({ k, chunks: r.chunks.length, done: !!r.done, ms: r.duration_ms })), resources: resourceSizes() };
  delete report.fps;
  const recs = [...recordings].map(([k, r]) => {
    const blob = new Blob(r.chunks.sort((a, b) => a.seq - b.seq).map((c) => c.bytes), { type: (r.chunks[0] && r.chunks[0].mime) || 'audio/webm' });
    return `<li><strong>${esc(k.replace('itm:b1:syn-', ''))}</strong> · ${r.chunks.length} Teile · ${Math.round((r.duration_ms || 0) / 1000)} s · ${r.done ? 'abgeschlossen' : 'offen'}<br><audio controls preload="metadata" src="${URL.createObjectURL(blob)}"></audio></li>`;
  }).join('');
  $('#kx-app').innerHTML = `<main class="kx-card"><h1>Vorschau beendet</h1>
    <p>Ihre Aufnahmen (nur auf diesem Gerät):</p><ul>${recs || '<li>Keine Aufnahmen.</li>'}</ul>
    <h2>Technischer Bericht</h2><p>Enthält keine persönlichen Daten (Gerät/Browser, Ladezeiten, Bildrate, Fehler). Zum Weitergeben kopieren:</p>
    <p><button class="kx-btn" type="button" id="kx-demo-copy">Bericht kopieren</button> <span id="kx-demo-copied" role="status"></span></p>
    <pre class="kx-demo-report">${esc(JSON.stringify(report, null, 1))}</pre>
    <p><a class="kx-btn kx-btn-quiet" href="?room=on">Noch einmal (Prüfungsraum)</a></p></main>`;
  $('#kx-demo-copy').addEventListener('click', () => navigator.clipboard.writeText(JSON.stringify(report)).then(() => { $('#kx-demo-copied').textContent = 'Kopiert.'; }, () => { $('#kx-demo-copied').textContent = 'Kopieren nicht möglich – bitte Text markieren.'; }));
  window.__kxDemoReport = report;
}
window.__kxDemo = { diag, recordings, skip: () => skipPhase(), end: () => showEnd() };
