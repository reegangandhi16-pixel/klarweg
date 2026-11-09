/* Photoreal exam room — PROTOTYPE renderer (proto/exam-room-photoreal; not wired into production).

   Same contract as exam/js/room/room.js, so the Sprechen driver, bridge and main.js hooks stay unchanged:
     createRoom({ mount, pkg, log, onFail }) → { prepare, attachAudio, phase, recording, destroy } | null
   Rendering is plain DOM, no WebGL: one wide room plate (<img>) plus, per person, two muted inline <video> patches
   (idle loop + speaking clip) placed over their own pixels of the plate with feathered edges. The "camera" is a
   CSS transform on the whole plate (director.js). The plate already shows everyone, so if a video cannot play
   (Low Power Mode, decode error) the room still looks complete — just still.

   Speech audio still comes only from the exam's own <audio> elements; videos are muted and slaved to that clock.
   Media manifest (scene.json): people[id] = { role, label, rect, idle: url, speak: url (generic speaking loop) },
   clips: { "<asset_id>#<segment index>": url } (lip-synced take for exactly that segment; preferred over speak). */
import { validateCast, castForPackage, speakerAt, PHASE_PART, statusText } from '../room/cast.js';
import { ROOM_BASE, isPreviewHost } from '../room/config.js';
import { validateScene, shotFor, transformFor, moveMs } from './director.js';

const SCENE_URL = ROOM_BASE + 'photoreal/scene.json';
const DRIFT_S = 0.12;   // resync a speaking clip when it drifts this far from the audio clock

export async function createRoom({ mount, pkg, log = () => {}, onFail = () => {} }) {
  const v = document.createElement('video');
  if (!v.canPlayType('video/mp4; codecs="avc1.42E01E"')) { log('room_unavailable', { reason: 'no_h264' }); return null; }
  if (navigator.connection && navigator.connection.saveData) { log('room_unavailable', { reason: 'save_data' }); return null; }

  const get = async (u) => { const r = await fetch(u, { cache: 'no-cache' }); if (!r.ok) throw new Error('http_' + r.status + ' ' + u); return r.json(); };
  const scene = validateScene(await get(SCENE_URL));
  const index = await get(ROOM_BASE + 'casts/index.json');
  const casts = await Promise.all(index.casts.map(async (f) => validateCast(await get(ROOM_BASE + 'casts/' + f))));
  const cast = castForPackage(casts, pkg);
  if (!cast) { log('room_unavailable', { reason: 'no_cast_for_form' }); return null; }
  for (const k of Object.keys(cast.people)) if (!scene.people[k]) { log('room_unavailable', { reason: 'cast_not_in_scene', person: k }); return null; }

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const base = new URL(SCENE_URL, location.href);
  const abs = (u) => new URL(u, base).href;
  const ui = buildUi(mount, scene, abs);
  let dead = false;
  const fail = (where, e) => { if (dead) return; log('room_failed', { where, error: (e && (e.message || e.name)) || String(e) }); destroy(); onFail(); };
  const guard = (where, fn) => (...a) => { if (dead) return; try { return fn(...a); } catch (e) { fail(where, e); } };

  try { await withTimeout(ui.plateReady, 20000, 'plate_timeout'); } catch (e) { fail('plate', e); return null; }

  /* ---- people: idle loop + speaking clip per person ---- */
  const people = {};
  for (const [id, p] of Object.entries(scene.people)) {
    const box = document.createElement('div');
    box.className = 'kxv-person'; box.dataset.person = id;
    const [x, y, w, h] = p.rect;
    Object.assign(box.style, { left: x * 100 + '%', top: y * 100 + '%', width: w * 100 + '%', height: h * 100 + '%' });
    const idle = mkVideo(abs(p.idle), true), speak = mkVideo(null, false);
    speak.classList.add('kxv-speak');
    box.append(idle, speak);
    ui.cam.appendChild(box);
    people[id] = { box, idle, speak, clip: null, speaking: false };
    idle.play().catch((e) => log('room_video_blocked', { person: id, error: e && e.name }));
  }

  /* ---- camera ---- */
  let shot = null, current = null, rec = null, phaseId = null, prep = true, speaking = null;
  function frame(force = false) {
    const part = PHASE_PART[phaseId] || null;
    const next = reduced ? 'establish' : shotFor(scene, { speaker: speaking, recording: !!rec, part, prep });
    if (next === shot && !force) return;
    shot = next;
    const { width: w, height: h } = ui.stage.getBoundingClientRect();
    if (!w || !h) return;
    const t = transformFor(scene, shot, w, h);
    const ms = force || reduced ? 0 : moveMs(current, t, w);
    ui.cam.style.transition = ms ? `transform ${ms}ms cubic-bezier(0.45, 0, 0.25, 1)` : 'none';
    ui.cam.style.transform = `translate3d(${t.tx}px, ${t.ty}px, 0) scale(${t.s})`;
    current = t;
    ui.root.dataset.shot = shot;
  }
  const ro = new ResizeObserver(() => frame(true)); ro.observe(ui.stage);
  frame(true);

  /* ---- speech: who speaks follows the playing <audio> and the cast; their clip follows its clock ---- */
  const audios = new Set();
  const segIndex = (assetId, ms) => (cast.assets[assetId] || []).findIndex(([a, b]) => ms >= a && ms < b);
  const tick = guard('tick', () => {
    let who = null, key = null, offset = 0;
    for (const a of audios) {
      if (a.paused || a.ended || !a.dataset.asset) continue;
      const ms = a.currentTime * 1000;
      who = speakerAt(cast, a.dataset.asset, ms);
      if (who) { const i = segIndex(a.dataset.asset, ms); key = `${a.dataset.asset}#${i}`; offset = (ms - cast.assets[a.dataset.asset][i][0]) / 1000; }
      break;
    }
    for (const [id, p] of Object.entries(people)) {
      if (id === who) {
        const src = (scene.clips && scene.clips[key]) || scene.people[id].speak;
        const exact = !!(scene.clips && scene.clips[key]);
        if (p.clip !== src) { p.clip = src; p.speak.src = abs(src); p.speak.loop = !exact; }
        if (exact && Math.abs(p.speak.currentTime - offset) > DRIFT_S) p.speak.currentTime = offset;
        if (p.speak.paused) p.speak.play().catch(() => {});
        if (!p.speaking) { p.speaking = true; p.box.dataset.state = 'speaking'; }
      } else if (p.speaking) {
        p.speaking = false; p.box.dataset.state = 'idle';
        setTimeout(() => { if (!p.speaking) p.speak.pause(); }, 200);
      }
    }
    if (who !== speaking) {
      speaking = who; frame();
      ui.status(statusText(cast, { speaker: who, recording: !!rec, phaseId, prep }), who ? 'speaking' : rec ? 'you' : 'idle');
    }
  });
  const timer = setInterval(tick, 50);

  if (isPreviewHost(location.hostname) && /[?&]roomdebug\b/.test(location.search)) {
    window.__kxRoom = { renderer: 'video', cast, scene, speaking: () => speaking, shot: () => shot, transform: () => current, recording: () => !!rec, phase: () => phaseId,
      playing: (id) => { const p = people[id]; return p && { idle: !p.idle.paused, speak: !p.speak.paused && p.speaking, t: p.speak.currentTime, src: p.clip }; } };
  }

  function destroy() {
    dead = true; clearInterval(timer); ro.disconnect();
    for (const p of Object.values(people)) for (const el of [p.idle, p.speak]) { try { el.pause(); el.removeAttribute('src'); el.load(); } catch {} }
    ui.root.remove(); audios.clear();
  }

  return {
    cast,
    prepare: guard('prepare', (assetId) => {   // the driver fetched this prompt: warm up its exact clips
      (cast.assets[assetId] || []).forEach((_, i) => { const u = scene.clips && scene.clips[`${assetId}#${i}`]; if (u) fetch(abs(u)).catch(() => {}); });
    }),
    attachAudio: guard('attach', (a) => { audios.add(a); a.addEventListener('emptied', () => audios.delete(a)); }),
    phase: guard('phase', (id) => {
      prep = false; if (id === phaseId) return; phaseId = id; frame();
      ui.status(statusText(cast, { recording: !!rec, phaseId, prep }), 'idle');
    }),
    recording: guard('recording', (on, { part } = {}) => {
      rec = on ? { part } : null; frame();
      ui.status(statusText(cast, { recording: on, phaseId, prep }), on ? 'you' : 'idle');
    }),
    destroy,
  };
}

function mkVideo(src, loop) {
  const v = document.createElement('video');
  v.muted = true; v.defaultMuted = true; v.playsInline = true; v.loop = loop; v.preload = 'auto';
  v.setAttribute('muted', ''); v.setAttribute('playsinline', ''); v.setAttribute('aria-hidden', 'true');
  v.disablePictureInPicture = true;
  if (src) v.src = src;
  return v;
}

function withTimeout(p, ms, code) { return Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error(code)), ms))]); }

function buildUi(mount, scene, abs) {
  if (!document.querySelector('link[data-kxv]')) {
    const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = abs('room.css'); l.dataset.kxv = '1'; document.head.appendChild(l);
  }
  const root = document.createElement('section');
  root.className = 'kx-room kxv-room'; root.dataset.state = 'loading';
  root.setAttribute('aria-label', 'Simulierter Prüfungsraum');
  root.innerHTML = `<div class="kx-room-stage kxv-stage"><div class="kxv-cam"><img class="kxv-plate" alt="" draggable="false"></div>
    ${scene.foreground ? '<img class="kxv-fg" alt="" draggable="false">' : ''}</div>
    <div class="kx-room-bar"><p class="kx-room-status" aria-hidden="true"><span class="kx-room-dot"></span><span class="kx-room-status-text">Prüfungsraum</span></p>
    <p class="kx-room-note">Simulierter Prüfungsraum mit aufgezeichneten Gesprächsimpulsen. Keine KI, keine offizielle Goethe-Prüfung.</p></div>`;
  mount.prepend(root);
  const cam = root.querySelector('.kxv-cam');   // sized via CSSOM: the exam CSP blocks inline style attributes
  cam.style.width = scene.plate.w + 'px'; cam.style.height = scene.plate.h + 'px';
  const img = root.querySelector('.kxv-plate');
  const plateReady = new Promise((res, rej) => { img.onload = () => { root.dataset.state = 'ready'; res(); }; img.onerror = () => rej(new Error('plate')); });
  img.src = abs(scene.plate.src);
  if (scene.foreground) root.querySelector('.kxv-fg').src = abs(scene.foreground);
  return {
    root, stage: root.querySelector('.kxv-stage'), cam: root.querySelector('.kxv-cam'), plateReady,
    status(text, kind) { root.querySelector('.kx-room-status-text').textContent = text; root.dataset.speaking = kind; },
  };
}
