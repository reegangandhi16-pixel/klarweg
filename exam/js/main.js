/* Exam shell — DOM wiring only (browser). All rules live on the server; all
   rendering lives in render.js; sequencing in engine.js. */
import { createApi, ExamApiError } from './api.js';
import { ServerClock, formatRemaining } from './clock.js';
import { idbStore } from './store.js';
import { Autosave } from './autosave.js';
import { createRenderer, header, resultPage, moduleNav, reviewPanel, itemReview, recordingsSection, ratedFeedback, esc, MODULE_LABELS } from './render.js';
import { CRITERION_LABELS } from './rating.js';
import { nextAction, assertSupported, partProgress } from './engine.js';
import { phaseAt, phaseLabel, ControlledPlayer } from './hoeren.js';
import { ChunkQueue, TurnRecorder } from './recorder.js';
import { speakingPhaseAt, prepEndsAt, topicItems } from './sprechen.js';
import { createSpeakingDriver } from './sprechen-driver.js';
import { createSpeakingAudio } from './speaking-audio.js';
import { countWords } from './wordcount.js';
import { randomId } from './ids.js';

const $ = (s, r = document) => r.querySelector(s);
const app = $('#kx-app');
const base = (document.querySelector('meta[name="kw-exam-api"]') || {}).content || '';
const clock = new ServerClock();
const api = createApi({ base, clock });
const renderer = createRenderer();
const S = { attempt: null, lease: null, pkg: null, answers: {}, autosave: null, module: null, timer: null, hb: null, store: null, locked: new Set(), sprechen: null, recordingUrls: [] };
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
    screen(`<main class="kx-card"><p class="kx-eyebrow">Übung · synthetische Inhalte</p><h1>Klarweg B1 Simulation</h1><p>Eine Übungsprüfung mit allen vier Modulen: Lesen, Hören, Schreiben, Sprechen. Die Inhalte sind synthetisch (keine echte Prüfung); die Hörtexte werden als Prüftöne abgespielt und sind nach der Abgabe zum Nachlesen da. Lesen und Schreiben laufen mit Prüfungszeit, Hören und Sprechen mit verkürzten Übungszeiten. Die Zeit läuft auf dem Server.</p><div class="kx-actions"><button class="kx-btn" data-act="create">Übung starten</button>${av.last_completed ? `<button class="kx-btn-quiet" data-act="last-result" data-attempt="${esc(av.last_completed)}">Letztes Ergebnis ansehen</button>` : ''}</div></main>`);
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
  if (a.kind === 'complete') return screen('<main class="kx-card"><h1>Alle Module abgegeben</h1><p>Schließen Sie die Übung ab, um das Ergebnis zu sehen.</p><div class="kx-actions"><button class="kx-btn" data-act="complete">Abschließen</button></div></main>');
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
    onDropped: (code, batch) => syncFromServer(batch.map((b) => b.item_id)).then(() => {
      if (code === 'topic_locked') { announce('Die Themenwahl ist gesperrt. Ihre Änderung wurde nicht gespeichert.'); applyTopicLock(false); }
    }).catch(() => {})
  });
  await S.autosave.load(saved.answers);
  if (module === 'sprechen' && S.pkg.timing.kind === 'speaking_phases') {
    const m = moduleState();
    S.sprechen = { plan: S.pkg.timing.plan, startedAt: m.started_at, multiplier: S.attempt.time_multiplier || 1 };
    // after a refresh past the preparation the topic choice renders locked straight away
    if (clock.serverNow() >= prepEndsAt(S.sprechen.plan, m.started_at, S.sprechen.multiplier)) for (const t of topicItems(S.pkg)) S.locked.add(t.item_id);
  }
  // unsent local answers are shown again — except for locked items, whose server value is authoritative
  const local = (await S.store.get(`answers:${id}:${module}`)) || {};
  for (const v of Object.values(local.pending || {})) if (!S.locked.has(v.item_id)) S.answers[v.item_id] = v.value;
  paint();
  if (S.locked.size) applyTopicLock(false);
  clearInterval(S.timer);
  S.timer = setInterval(tick, 250);
  const guard = (e) => { if (S.module === module) fail(e); };   // after submit, a stopped loop is not an error
  if (module === 'hoeren') runHoeren().catch(guard);
  if (module === 'sprechen') runSprechen().catch(guard);
}

function moduleState() { return S.attempt.modules.find((m) => m.module === S.module); }
/* Progress counts only for the item-based modules; Sprechen is phase-driven and has no navigation. */
function progress() { return S.pkg && S.module !== 'sprechen' ? partProgress(S.pkg, S.answers) : null; }
function paintHeader() {
  const m = S.module && moduleState();
  const h = $('#kx-head');
  if (h && m) h.innerHTML = header({ module: S.module, remainingMs: clock.remaining(m.deadline_at), saveState: S.autosave && S.autosave.state, progress: progress() });
}
function paintNav() { const n = $('#kx-nav-slot'); if (n) n.innerHTML = S.module === 'sprechen' ? '' : moduleNav(progress()); }
/* An open review is redrawn whenever its counts or parts change. Focus moves only if it was inside the review, and then
   to the equivalent control (same button, or the same item link), else to the review title if that control is gone. */
function refreshReview() {
  const slot = $('#kx-review-slot'); if (!slot || !slot.innerHTML) return;
  const active = document.activeElement;
  const inside = !!active && active !== document.body && slot.contains(active);
  const key = !inside ? null : active.dataset.act ? `[data-act="${active.dataset.act}"]`
    : active.matches('a[data-review-jump]') ? `a[data-review-jump][href="${CSS.escape(active.getAttribute('href'))}"]` : null;
  slot.innerHTML = reviewPanel(progress() || []);
  if (inside) { const t = (key && slot.querySelector(key)) || $('#kx-review-title'); if (t) t.focus({ preventScroll: true }); }
}
function updateProgress() { paintHeader(); paintNav(); refreshReview(); }
function closeReview(focusSubmit = true) {
  const slot = $('#kx-review-slot'); if (slot) slot.innerHTML = '';
  const foot = $('.kx-foot'); if (foot) foot.hidden = false;
  if (focusSubmit) { const b = $('[data-act="submit"]'); if (b) b.focus(); }
}
function paint() {
  const phaseTime = S.sprechen ? '<p class="kx-phase-time" id="kx-phase-time"></p><div class="kx-alerts" id="kx-alerts"></div>'
    : S.module === 'hoeren' ? '<div class="kx-alerts" id="kx-alerts"></div>' : '';
  screen(`<div id="kx-head"></div><div id="kx-nav-slot"></div><p class="kx-phase" id="kx-phase" aria-live="polite"></p>${phaseTime}<p class="kx-announce" id="kx-announce" role="status" aria-live="polite"></p><main class="kx-module" id="kx-main">${renderer.module(S.pkg, S.answers, { locked: S.locked })}</main>`
    + `<div id="kx-review-slot"></div><footer class="kx-foot"><button class="kx-btn" data-act="submit">Modul abgeben</button></footer>`);
  updateProgress();
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
  /* Autoplay policy: a reloaded page has no user gesture, so the AudioContext can stay suspended and resume() may never
     settle. The module never waits on it: parts, answers and the schedule continue, and plays wait for one click on
     "Audio starten", then continue from their scheduled position. A blocked play is never reported as played. */
  const audioRunning = () => ctx.state === 'running';
  let unlocked = null;
  const unlockAudio = () => unlocked || (unlocked = new Promise((resolve) => {
    const el = showAlert('gesture', 'Ihr Browser hat die Wiedergabe blockiert. Bitte starten Sie das Audio.', { act: 'audio-start', label: 'Audio starten' });
    const btn = el && el.querySelector('button'); if (btn) btn.focus({ preventScroll: true });
    // resume() runs inside the click handler (user activation)
    S.gestureResolve = () => { ctx.resume().then(() => { if (audioRunning()) { S.gestureResolve = null; clearAlert('gesture'); resolve(); } }).catch(() => {}); };
  }));
  await Promise.race([ctx.resume().catch(() => {}), sleep(1500)]);
  // OD-05: report a genuine interruption of a running play (audio session interrupted / page torn down)
  const reportInterrupted = () => {
    const cp = S.currentPlay; if (!cp) return;
    S.currentPlay = null;
    api.hoerenEvent(id, S.lease, { type: 'interrupted', phase_seq: cp.seq, kind: cp.kind }, { keepalive: true }).catch(() => {});
  };
  ctx.onstatechange = () => { if (ctx.state !== 'running') { player.stop(); reportInterrupted(); } };
  S.onPageHide = reportInterrupted;
  if (!audioRunning()) {
    unlockAudio();
    if (moduleState().plan_started_at == null) await unlockAudio();   // first start: readiness waits for audible playback
  }
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
    updateProgress();   // also redraws an open review with the parts that are open now
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
  // a recovery replay owed after a reload is played only once audio actually runs (before any later normal play)
  let afterUnlock = null;
  if (ready.pending_recovery_seq != null) {
    if (audioRunning()) await recover(ready.pending_recovery_seq).catch(() => {});
    else afterUnlock = unlockAudio().then(() => recover(ready.pending_recovery_seq)).catch(() => {});
  }
  await refreshParts();

  let lastIndex = -2;
  const loop = async () => {
    if (S.module !== 'hoeren') { player.stop(); S.onPageHide = null; S.gestureResolve = null; return; }
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
    if (!audioRunning() || afterUnlock) {   // also wait for a deferred recovery replay, so the two never overlap
      const seq = at.phase.seq;
      await (afterUnlock || unlockAudio());
      if (S.module !== 'hoeren') return;
      m = moduleState();
      at = phaseAt(plan, m.plan_started_at, clock.serverNow(), m.plan_shift_ms || 0);
      if (!at.phase || at.phase.seq !== seq) return;   // its slot ended before the click: missed, not reported as played
    }
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
const announce = (text) => { const el = $('#kx-announce'); if (el) el.textContent = text; };
const safeId = (s) => String(s).replace(/[^a-zA-Z0-9_-]/g, '_');

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

/* Locks the Teil 2 topic choice: controls disabled, a note tied to the group (aria-describedby) says what was
   chosen — or that no topic was chosen (no default is assumed). With announce, the change is also announced. */
function applyTopicLock(withAnnouncement) {
  if (!S.pkg) return;
  for (const t of topicItems(S.pkg)) {
    S.locked.add(t.item_id);
    const inputs = [...document.querySelectorAll(`[data-item="${CSS.escape(t.item_id)}"]`)];
    for (const el of inputs) el.disabled = true;
    const chosen = inputs.find((el) => el.checked);
    const chosenLabel = chosen ? (chosen.closest('label')?.querySelector('.kx-opt-label')?.textContent || chosen.value) : null;
    const text = chosen ? `Die Themenwahl ist gesperrt. Gewählt: ${chosenLabel}.` : 'Die Themenwahl ist gesperrt. Es wurde kein Thema gewählt.';
    const group = document.getElementById(`item-${safeId(t.item_id)}`);
    if (group) {
      const noteId = `lock-${safeId(t.item_id)}`;
      let note = document.getElementById(noteId);
      if (!note) { note = document.createElement('p'); note.id = noteId; note.className = 'kx-lock-note'; group.appendChild(note); }
      note.textContent = text;
      group.setAttribute('aria-describedby', noteId);
    }
    if (withAnnouncement) announce(`Die Vorbereitung ist beendet. ${text}`);
  }
  if (S.autosave) S.autosave.flush().catch(() => {});   // send a last-second choice now (the server allows the save grace)
}

/* Accessible alerts above the module (role="alert"), one per kind, optionally with an action button. */
function showAlert(kind, text, action = null) {
  const box = $('#kx-alerts'); if (!box) return null;
  let el = box.querySelector(`[data-kind="${kind}"]`);
  if (!el) { el = document.createElement('div'); el.className = 'kx-alert'; el.dataset.kind = kind; el.setAttribute('role', 'alert'); box.appendChild(el); }
  el.innerHTML = `<p>${esc(text)}</p>` + (action ? `<button type="button" class="kx-btn" data-act="${esc(action.act)}">${esc(action.label)}</button>` : '');
  return el;
}
function clearAlert(kind) { const el = document.querySelector(`#kx-alerts [data-kind="${kind}"]`); if (el) el.remove(); }

/* Browser autoplay refused (e.g. after a reload without a click): ask for one click. Resolves 'clicked',
   'timeout' (the phase ended first) or 'cancelled' (module left). The click gives the page user activation, so the
   retried play() is allowed. */
function requestAudioGesture(endsAt) {
  return new Promise((resolve) => {
    const el = showAlert('gesture', 'Ihr Browser hat die Wiedergabe blockiert. Bitte starten Sie das Audio.', { act: 'audio-start', label: 'Audio starten' });
    const btn = el && el.querySelector('button'); if (btn) btn.focus({ preventScroll: true });
    let finished = false;
    const finish = (r) => { if (finished) return; finished = true; S.gestureResolve = null; clearAlert('gesture'); resolve(r); };
    S.gestureResolve = () => finish('clicked');
    (async () => { while (!finished) { if (S.module !== 'sprechen') return finish('cancelled'); if (clock.serverNow() >= endsAt) return finish('timeout'); await sleep(200); } })();
  });
}

/* Microphone: requested right before the first recording (not during the preparation). Errors are reported as
   microphone problems, with a retry; turns without a microphone are not recorded (nothing is fabricated). */
const MIC_MESSAGES = {
  NotAllowedError: 'Kein Zugriff auf das Mikrofon. Erlauben Sie den Mikrofonzugriff in Ihrem Browser und wählen Sie dann „Mikrofon erneut versuchen“.',
  SecurityError: 'Kein Zugriff auf das Mikrofon. Erlauben Sie den Mikrofonzugriff in Ihrem Browser und wählen Sie dann „Mikrofon erneut versuchen“.',
  NotFoundError: 'Es wurde kein Mikrofon gefunden. Schließen Sie ein Mikrofon an und wählen Sie dann „Mikrofon erneut versuchen“.',
  NotReadableError: 'Das Mikrofon wird von einer anderen Anwendung verwendet oder ist nicht bereit.'
};
async function getMic() {
  if (S.micStream && S.micStream.getAudioTracks().some((tr) => tr.readyState === 'live')) return S.micStream;
  try {
    S.micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    clearAlert('mic');
    return S.micStream;
  } catch (e) {
    const name = (e && e.name) || 'Error';
    showAlert('mic', MIC_MESSAGES[name] || 'Das Mikrofon konnte nicht gestartet werden.', { act: 'mic-retry', label: 'Mikrofon erneut versuchen' });
    console.warn('[kx-sprechen]', 'microphone_unavailable', { name });
    return null;
  }
}
function releaseMic() { if (S.micStream) { S.micStream.getTracks().forEach((tr) => tr.stop()); S.micStream = null; } }

/* Phase-driven Sprechen (sprechen-driver.js): the server plan and server time decide the phase; a refresh lands in
   the same phase with the same remaining time. This function only wires the DOM, API, recorder and audio. */
async function runSprechen() {
  const id = S.attempt.attempt_id;
  const { plan, startedAt, multiplier } = S.sprechen;
  const queue = new ChunkQueue({
    attemptId: id, store: S.store,
    upload: (q, bytes, mime) => api.chunk(id, S.lease, q, bytes, mime),
    completeTurn: (b) => api.turn(id, S.lease, b)
  });
  const status = await api.speakingStatus(id, S.lease);
  const audio = createSpeakingAudio({
    fetchAsset: async (assetId) => { const m = await api.media(id, S.lease, assetId); return { bytes: await api.mediaBytes(m.url), mime: m.mime }; },
    makeAudio: () => new Audio(),
    makeUrl: (bytes, mime) => URL.createObjectURL(new Blob([bytes], { type: mime })),
    now: () => clock.serverNow(), sleep, requestGesture: requestAudioGesture
  });
  const label = (key, text) => { const el = document.querySelector(`[data-turn="${CSS.escape(key)}"]`); if (el) el.textContent = text; };
  const driver = createSpeakingDriver({
    pkg: S.pkg, plan, startedAt, multiplier, now: () => clock.serverNow(), sleep, active: () => S.module === 'sprechen',
    status, queue, audio, getMic, recorder: (turn, stream) => new TurnRecorder({ stream, queue, turn }),
    ui: {
      phase: (text) => { const el = $('#kx-phase'); if (el) el.textContent = text; },
      turn: label, alert: (kind, text) => showAlert(kind, text), clear: clearAlert,
      lockTopics: () => applyTopicLock(true)
    },
    log: (event, detail) => console.warn('[kx-sprechen]', event, detail)
  });
  try { await driver.run(); } finally { releaseMic(); }
}

async function showResult() {
  clearInterval(S.hb); clearInterval(S.timer);
  const r = await api.result(S.attempt.attempt_id);
  // item review for the objectively scored modules, from the server; a module without a review simply shows none
  const reviews = [];
  for (const m of r.result.modules) {
    if (!m.counts) continue;
    try { reviews.push(itemReview(m.module, await api.review(S.attempt.attempt_id, m.module))); } catch { /* not available */ }
  }
  for (const m of r.result.modules) {   // criterion feedback once a rated module is final
    if ((m.module === 'schreiben' || m.module === 'sprechen') && m.status === 'final') {
      try { reviews.push(ratedFeedback(m.module, await api.feedback(S.attempt.attempt_id, m.module), CRITERION_LABELS)); } catch { /* not available */ }
    }
  }
  if (r.result.modules.some((m) => m.module === 'sprechen' && m.status !== 'not_taken')) {
    try { reviews.push(recordingsSection(await api.myRecordings(S.attempt.attempt_id))); } catch { /* not available */ }
  }
  for (const u of S.recordingUrls.splice(0)) URL.revokeObjectURL(u);
  screen(resultPage(r.result) + reviews.join(''));
}

/* ---------- events ---------- */
app.addEventListener('change', (e) => {
  const el = e.target;
  if (!el.dataset || !el.dataset.item || !S.autosave) return;
  const value = { option_id: el.value === '' ? null : el.value };
  S.answers[el.dataset.item] = value; S.autosave.set(el.dataset.item, value);
  updateProgress();
});
app.addEventListener('input', (e) => {
  const el = e.target;
  if (el.tagName !== 'TEXTAREA' || !S.autosave) return;
  const wc = document.querySelector(`[data-wc-for="${CSS.escape(el.id)}"]`); if (wc) wc.textContent = countWords(el.value);
  S.answers[el.dataset.item] = { text: el.value }; S.autosave.set(el.dataset.item, { text: el.value });
  updateProgress();
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
    if (act === 'audio-start') { if (S.gestureResolve) S.gestureResolve(); return; }
    if (act === 'mic-retry') { await getMic(); return; }
    if (act === 'last-result') { S.attempt = { attempt_id: b.dataset.attempt }; return showResult(); }
    if (act === 'my-recording') {
      const cell = b.closest('.kx-play-cell'); b.disabled = true; b.textContent = 'Wird geladen …';
      try {
        const url = URL.createObjectURL(await api.myRecording(S.attempt.attempt_id, b.dataset.part, b.dataset.turn)); S.recordingUrls.push(url);
        cell.innerHTML = `<audio controls preload="metadata" src="${url}" aria-label="Ihre Aufnahme Teil ${esc(b.dataset.part)}"></audio>`;
      } catch { b.disabled = false; b.textContent = 'Erneut versuchen'; }
      return;
    }
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
    if (act === 'submit') {   // first step: an in-page review; nothing is submitted yet
      const slot = $('#kx-review-slot'); if (!slot) return;
      slot.innerHTML = reviewPanel(progress() || []);
      const foot = $('.kx-foot'); if (foot) foot.hidden = true;
      const h = $('#kx-review-title'); if (h) { h.scrollIntoView({ block: 'start' }); h.focus({ preventScroll: true }); }
      return;
    }
    if (act === 'review-close') return closeReview();
    if (act === 'submit-confirm') {
      b.disabled = true;
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
