/* Sprechen exam room — Stage 1 (simulated exam room with RECORDED prompts; not a conversational AI).

   A presentation layer over the unchanged Sprechen driver. main.js gives it four hooks and nothing else:
     prepare(assetId, bytes)          a copy of each prompt clip the audio module fetched (viseme analysis)
     attachAudio(audioElement)        every <audio> the audio module creates (read-only: events + currentTime)
     phase(phaseId)                   the driver's current phase id
     recording(on, { part, stream })  a turn is being recorded (read-only microphone level for listening cues)
   It never touches timing, playback, recording, uploads or rating. Every hook is guarded: the first error
   tears the room down and the classic Sprechen view (which stays in the page throughout) carries on. */
import { validateCast, castForPackage, speakerAt, sceneFor, statusText, examinerOf } from './cast.js';
import { sampleTimeline, ALL_KEYS } from './visemes.js';
import { ROOM_BASE, roomCapable, isPreviewHost } from './config.js';

const LATENCY_MS = 30;   // render a frame slightly ahead of the audio clock (display latency)

export async function createRoom({ mount, pkg, log = () => {}, onFail = () => {} }) {
  const webgl = (() => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; } })();
  const cap = roomCapable({ webgl, saveData: !!(navigator.connection && navigator.connection.saveData) });
  if (!cap.ok) { log('room_unavailable', { reason: cap.reason }); return null; }

  const index = await (await fetch(ROOM_BASE + 'casts/index.json', { cache: 'no-cache' })).json();
  const casts = await Promise.all(index.casts.map(async (f) => validateCast(await (await fetch(ROOM_BASE + 'casts/' + f, { cache: 'no-cache' })).json())));
  const cast = castForPackage(casts, pkg);
  if (!cast) { log('room_unavailable', { reason: 'no_cast_for_form' }); return null; }

  const mobile = matchMedia('(max-width: 720px)').matches;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const examiner = examinerOf(cast);
  const people = Object.fromEntries(Object.entries(cast.people).map(([k, p]) => [k, {
    ...p, seat: p.role === 'examiner' ? 'examiner' : 'front', card: p.role === 'examiner' ? p.label : null,
    body: /-m$/.test(p.avatar) ? 'M' : 'F',
  }]));

  const ui = buildUi(mount);
  let dead = false, stage = null, listen = null;
  const timelines = new Map();   // assetId → { promise, done: {runs, method} }
  const audios = new Set();
  const fail = (where, e) => {
    if (dead) return; dead = true;
    log('room_failed', { where, error: (e && (e.message || e.name)) || String(e) });
    try { destroy(); } catch {}
    onFail();
  };
  const guard = (where, fn) => (...a) => { if (dead) return; try { return fn(...a); } catch (e) { fail(where, e); } };

  try {
    const { createStage } = await import('./stage.js');
    stage = await withTimeout(createStage(ui.canvas, { people, mobile, reduced, log }), mobile ? 45000 : 30000, 'stage_timeout');
  } catch (e) { fail('stage', e); return null; }
  ui.root.dataset.state = 'ready';
  const loading = ui.root.querySelector('.kx-room-loading'); if (loading) loading.remove();

  let phaseId = null, rec = null, prep = true;

  function scene() {
    const s = sceneFor(cast, phaseId);
    for (const [k, h] of Object.entries(stage.heads)) {
      if (k === examiner) continue;
      h.armature.visible = k === s.front;
    }
    return s;
  }
  scene();

  // each frame: who speaks (from the playing <audio> and the cast), their visemes at the audio clock
  const speakingNow = { who: null };
  stage.setFrameHook(guard('frame', () => {
    let who = null, values = null;
    for (const a of audios) {
      if (a.paused || a.ended || !a.dataset.asset) continue;
      const ms = a.currentTime * 1000;
      who = speakerAt(cast, a.dataset.asset, ms);
      const tl = timelines.get(a.dataset.asset);
      if (who && tl && tl.done) values = sampleTimeline(tl.done.runs, ms + LATENCY_MS);
      break;
    }
    for (const [k, h] of Object.entries(stage.heads)) {
      const v = k === who ? values || {} : {};
      for (const key of ALL_KEYS) { const m = h.mtAvatar && h.mtAvatar[key]; if (m) Object.assign(m, { newvalue: v[key] || 0, needsUpdate: true }); }
      h.isSpeaking = k === who;
      // listeners look at whoever speaks; with nobody speaking everyone looks at the candidate
      h.speakTo = who && k !== who ? stage.heads[who] : null;
    }
    if (who !== speakingNow.who) {
      speakingNow.who = who;
      stage.setFocus(who || sceneFor(cast, phaseId).front || examiner);
      ui.status(statusText(cast, { speaker: who, recording: !!rec, phaseId, prep }), who ? 'speaking' : rec ? 'you' : 'idle');
    }
  }));

  // read-only test hook (E2E): preview hosts only, never on production
  if (isPreviewHost(location.hostname) && /[?&]roomdebug\b/.test(location.search)) {
    window.__kxRoom = { heads: stage.heads, camera: stage.camera, view: stage.setDebugView, frame: stage.debugFrame, cast, speaking: () => speakingNow.who, timelines, phase: () => phaseId, recording: () => !!rec };
  }

  const api = {
    cast,
    prepare: guard('prepare', (assetId, bytes) => {
      if (!cast.assets[assetId] || timelines.has(assetId)) return;
      const entry = { done: null };
      const copy = bytes instanceof ArrayBuffer ? bytes.slice(0) : new Uint8Array(bytes).buffer.slice(0);
      entry.promise = import('./analyse.js').then(({ analyseClip }) => analyseClip(copy)).then((r) => {
        entry.done = r; log('room_visemes', { asset: assetId, method: r.method, runs: r.runs.length });
      }).catch((e) => log('room_visemes_failed', { asset: assetId, error: e && e.message }));
      timelines.set(assetId, entry);
    }),
    attachAudio: guard('attach', (a) => {
      audios.add(a);
      const drop = () => { if (a.ended) audios.delete(a); };
      a.addEventListener('ended', drop);
      a.addEventListener('emptied', () => audios.delete(a));
    }),
    phase: guard('phase', (id) => {
      prep = false;
      if (id === phaseId) return;
      phaseId = id; scene();
      ui.status(statusText(cast, { recording: !!rec, phaseId, prep }), 'idle');
    }),
    recording: guard('recording', (on, { part, stream } = {}) => {
      if (on) {
        rec = { part };
        startListening(stream);
        ui.status(statusText(cast, { recording: true, phaseId, prep }), 'you');
      } else {
        rec = null; stopListening();
        ui.status(statusText(cast, { phaseId, prep }), 'idle');
      }
    }),
    destroy,
  };

  // listening cues: the room's own analyser on the microphone stream (the recording itself is untouched)
  function startListening(stream) {
    stopListening();
    if (!stream) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const an = ctx.createAnalyser();
      ctx.createMediaStreamSource(stream).connect(an);
      for (const [k, h] of Object.entries(stage.heads)) if (h.armature.visible) h.startListening(an, { listeningSilenceThresholdMs: 1200 });
      listen = { ctx };
    } catch (e) { log('room_listen_unavailable', { error: e && e.name }); }
  }
  function stopListening() {
    if (stage) for (const h of Object.values(stage.heads)) { try { h.stopListening(); } catch {} }
    if (listen) { listen.ctx.close().catch(() => {}); listen = null; }
  }
  function destroy() {
    dead = true;
    ui.root.remove();   // first: whatever fails below, the classic view is never left behind a half-built room
    try { stopListening(); } catch {}
    try { stage && stage.destroy(); } catch {}
    audios.clear(); timelines.clear();
  }
  return api;
}

function withTimeout(p, ms, code) { return Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error(code)), ms))]); }

function buildUi(mount) {
  const root = document.createElement('section');
  root.className = 'kx-room'; root.dataset.state = 'loading';
  root.setAttribute('aria-label', 'Simulierter Prüfungsraum');
  root.innerHTML = `<div class="kx-room-stage"><p class="kx-room-loading">Prüfungsraum wird geladen …</p></div>
    <div class="kx-room-bar"><p class="kx-room-status" aria-hidden="true"><span class="kx-room-dot"></span><span class="kx-room-status-text">Prüfungsraum</span></p>
    <p class="kx-room-note">Simulierter Prüfungsraum mit aufgezeichneten Gesprächsimpulsen. Keine KI, keine offizielle Goethe-Prüfung.</p></div>`;
  mount.prepend(root);
  return {
    root, canvas: root.querySelector('.kx-room-stage'),
    status(text, kind) { root.querySelector('.kx-room-status-text').textContent = text; root.dataset.speaking = kind; },
  };
}
