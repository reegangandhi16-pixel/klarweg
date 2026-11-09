/* OPT-IN real-browser E2E for the Sprechen exam room (Stage 1, recorded prompts). Headless Chrome over CDP, local
   dev server, fake microphone fed with German speech. Run: node exam-worker/test/room-e2e.mjs

   Scenarios (KX_ROOM_ONLY=m0|mobile|fallback|synthetic runs one):
   m0         desktop: M0 Sprechen only, room on (?room=on). Preparation → Teil 1: the partner's mouth moves with the
              playing prompt (and only his), status "… spricht"; the candidate's turn: "Sie sind dran", the room
              listens, recording chunks reach the server as before. Partner phase: the speaker switches
              examiner → Julia at the cast boundary; Julia's mouth moves. Screenshots.
   mobile     the same at 390×844 (portrait framing), screenshots.
   fallback   avatar downloads blocked: the room removes itself, the classic Sprechen view continues and records.
   synthetic  a form without a cast: no room at all, classic view only.
   Needs the private M0 content (KX_ROOM_FORM, default ~/klarweg-work/klarweg-exam-content/forms/b1/mock-m0) with
   generated audio; without it, only the synthetic scenario runs. Screenshots → KX_ROOM_SHOTS (default: tmp). */
import { spawn, execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import { startDevServer } from './dev-server.mjs';

const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const FORM = process.env.KX_ROOM_FORM || path.join(os.homedir(), 'klarweg-work/klarweg-exam-content/forms/b1/mock-m0');
const SHOTS = process.env.KX_ROOM_SHOTS || fs.mkdtempSync(path.join(os.tmpdir(), 'kx-room-shots-'));
const ONLY = process.env.KX_ROOM_ONLY || '';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => console.log('[room-e2e]', ...a);
const FLAGS = { EXAM_ENABLED: 'on', EXAM_MOCK_FORMS: 'on', EXAM_SYNTHETIC_FORMS: 'off', EXAM_RELEASE_FORMS: 'frm:b1:mock-m0@1', EXAM_SINGLE_EXAMINER: 'on', EXAM_MODULE_CHOICE: 'on' };

/* the fake microphone plays German speech (an M0 clip) in a loop: 3 s silence, speech, 4 s silence */
function speechWav(dir) {
  const out = path.join(dir, 'speech.wav');
  execFileSync('ffmpeg', ['-y', '-v', 'error', '-f', 'lavfi', '-t', '3', '-i', 'anullsrc=r=48000:cl=mono', '-i', path.join(FORM, 'audio/m0-sp1-partner-4.webm'),
    '-f', 'lavfi', '-t', '4', '-i', 'anullsrc=r=48000:cl=mono', '-filter_complex', '[1:a]aresample=48000,aformat=channel_layouts=mono[b];[0:a][b][2:a]concat=n=3:v=0:a=1',
    '-ar', '48000', '-ac', '1', '-c:a', 'pcm_s16le', out]);
  return out;
}

async function launch(wav) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-room-chrome-'));
  const args = ['--headless=new', '--mute-audio', '--no-first-run', '--no-default-browser-check', `--user-data-dir=${dir}`, '--remote-debugging-port=0',
    '--autoplay-policy=no-user-gesture-required', '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream', '--enable-unsafe-swiftshader',
    // macOS: without these the fake-capture file is read inside the audio sandbox and stays silent
    '--disable-features=AudioServiceSandbox,AudioServiceOutOfProcess', ...(wav ? [`--use-file-for-fake-audio-capture=${wav}`] : []), 'about:blank'];
  const proc = spawn(CHROME, args, { stdio: 'ignore' });
  let port = null; const t0 = Date.now();
  while (!port && Date.now() - t0 < 30000) { try { const p = fs.readFileSync(path.join(dir, 'DevToolsActivePort'), 'utf8').split('\n')[0]; if (/^\d+$/.test(p)) port = p; } catch {} await sleep(100); }
  if (!port) throw new Error('Chrome did not start');
  const page = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r, { once: true }));
  let id = 0; const pending = new Map(); const events = [];
  ws.addEventListener('message', (m) => { const msg = JSON.parse(m.data); if (msg.id && pending.has(msg.id)) { const p = pending.get(msg.id); pending.delete(msg.id); msg.error ? p.reject(new Error(msg.error.message)) : p.resolve(msg.result); } else if (msg.method) events.push(msg); });
  const send = (method, params = {}) => new Promise((resolve, reject) => { const i = ++id; pending.set(i, { resolve, reject }); ws.send(JSON.stringify({ id: i, method, params })); });
  const evaluate = async (expr) => { const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true }); if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text); return r.result.value; };
  const close = () => { try { ws.close(); } catch {} proc.kill('SIGKILL'); setTimeout(() => fs.rmSync(dir, { recursive: true, force: true }), 500); };
  return { send, evaluate, events, close };
}

async function scenario(name, { viewport, form, blockAvatars = false, expectRoom = true }) {
  log(name, 'start');
  const dev = await startDevServer({ port: 0, proxy: false, ...(form ? { form, flags: FLAGS } : {}) });
  await dev.env.DB.prepare("INSERT INTO exam_access (id,user_id,level,scope,source,granted_at) VALUES (?1,?2,'B1','mock','test',?3)").bind('xa_room_' + name, dev.user, Math.floor(Date.now() / 1000)).run();
  const wav = form === FORM ? speechWav(fs.mkdtempSync(path.join(os.tmpdir(), 'kx-room-wav-'))) : null;
  const b = await launch(wav);
  const { send, evaluate } = b;
  const waitFor = async (expr, ms = 20000, label = expr) => {
    const t0 = Date.now();
    while (Date.now() - t0 < ms) { try { if (await evaluate(`(() => { try { return !!(${expr}); } catch { return false; } })()`)) return; } catch {} await sleep(200); }
    throw new Error(`timeout: ${label}\n${(await evaluate('document.body.innerText').catch(() => '')).slice(0, 600)}\n${b.events.filter((e) => e.method === 'Runtime.consoleAPICalled').map((e) => e.params.args.map((a) => a.value ?? a.description).join(' ')).slice(-12).join('\n')}`);
  };
  const click = (sel) => evaluate(`document.querySelector(${JSON.stringify(sel)}).click()`);
  const shot = async (label) => { const r = await send('Page.captureScreenshot', { format: 'png' }); const f = path.join(SHOTS, `${name}-${label}.png`); fs.writeFileSync(f, Buffer.from(r.data, 'base64')); log('screenshot', f); };
  // room-only images for review (cropped to the room: no exam task text); KX_ROOM_GIF=1 also records a short GIF
  const roomRect = () => evaluate(`(() => { const r = document.querySelector('.kx-room').getBoundingClientRect(); return { x: r.x + scrollX, y: r.y + scrollY, width: r.width, height: r.height, scale: 1 }; })()`);
  const roomShot = async (label) => { const r = await send('Page.captureScreenshot', { format: 'png', clip: await roomRect(), captureBeyondViewport: true }); const f = path.join(SHOTS, `room-${name}-${label}.png`); fs.writeFileSync(f, Buffer.from(r.data, 'base64')); };
  const roomGif = async (label, ms) => {
    if (process.env.KX_ROOM_GIF !== '1') return;
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-room-gif-')); const clip = await roomRect(); const t0 = Date.now(); let i = 0;
    while (Date.now() - t0 < ms) { const r = await send('Page.captureScreenshot', { format: 'png', clip, captureBeyondViewport: true }); fs.writeFileSync(path.join(dir, `f${String(i++).padStart(4, '0')}.png`), Buffer.from(r.data, 'base64')); }
    const fps = Math.max(4, Math.round(i / (ms / 1000)));
    execFileSync('ffmpeg', ['-y', '-v', 'error', '-framerate', String(fps), '-i', path.join(dir, 'f%04d.png'), '-vf', 'scale=560:-2:flags=lanczos,split[a][b];[a]palettegen=max_colors=160[p];[b][p]paletteuse=dither=bayer:bayer_scale=4', path.join(SHOTS, `room-${name}-${label}.gif`)]);
    fs.rmSync(dir, { recursive: true, force: true }); log(name, 'gif', label, i, 'frames @', fps, 'fps');
  };
  const consoleLines = () => b.events.filter((e) => e.method === 'Runtime.consoleAPICalled').map((e) => e.params.args.map((a) => (a.value !== undefined ? (typeof a.value === 'object' ? JSON.stringify(a.value) : a.value) : a.description)).join(' '));
  const row = () => dev.env.DB.prepare("SELECT started_at FROM attempt_modules WHERE module = 'sprechen'").first();
  const chunks = async () => (await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM recording_chunks').first()).n;
  try {
    await send('Runtime.enable'); await send('Page.enable'); await send('Network.enable');
    if (blockAvatars) await send('Network.setBlockedURLs', { urls: ['*/exam-room/avatars/*'] });
    await send('Emulation.setDeviceMetricsOverride', { width: viewport.w, height: viewport.h, deviceScaleFactor: viewport.dpr || 1, mobile: !!viewport.mobile });
    const base = `http://127.0.0.1:${dev.port}`;
    await send('Page.navigate', { url: base + '/exam/dev/as/learner' }); await sleep(800);
    const url = base + '/exam/?room=on&roomdebug';
    await send('Page.navigate', { url });
    // M0 (module choice) → only Sprechen; synthetic forms start from their own button
    const createSel = form === FORM ? '[data-act="create"][data-mode="mock_module"][data-module="sprechen"]' : '[data-act="create"]';
    await waitFor(`document.querySelector(${JSON.stringify(createSel)})`, 20000, 'start screen');
    await click(createSel);
    await waitFor(`document.querySelector('[data-act="start"][data-module="sprechen"]') || document.querySelector('[data-act="start"]')`, 20000, 'module intro');
    if (form !== FORM) {   // synthetic: walk to Sprechen via the API is out of scope here; the Sprechen-only path is enough
      // (synthetic full mode starts with Lesen; the room must not appear anywhere)
      await sleep(1500);
      assert.equal(await evaluate(`!!document.querySelector('.kx-room')`), false, 'no room outside Sprechen');
      log(name, 'ok (no room outside Sprechen / without a cast)');
      return;
    }
    await click('#kx-consent');
    await click('[data-act="mic-test"]');
    await waitFor(`/Mikrofon funktioniert/.test(document.querySelector('#kx-mic-msg')?.textContent || '')`, 20000, 'mic check');
    await click('[data-act="start"][data-module="sprechen"]');
    await waitFor(`/^Vorbereitung/.test(document.querySelector('#kx-phase')?.textContent || '')`, 20000, 'preparation');

    if (!expectRoom) {
      // the room fails (blocked avatars) → it removes itself; the classic view is untouched
      await sleep(4000);
      await waitFor(`!document.querySelector('.kx-room')`, 60000, 'room removed');
      await sleep(3000);
      assert.ok(consoleLines().some((l) => /room_failed/.test(l)), 'room_failed logged');
    } else {
      await waitFor(`document.querySelector('.kx-room[data-state="ready"]') && window.__kxRoom`, 90000, 'room ready');
      assert.match(await evaluate(`document.querySelector('.kx-room-note').textContent`), /aufgezeichneten Gesprächsimpulsen.*Keine KI/);
      await sleep(1500); await shot('1-preparation');
    }

    // jump: Teil 1 starts in 3 s (server-side module start moved back), reload to pick it up
    const before = await row();
    const plan = JSON.parse(fs.readFileSync(path.join(FORM, 'tasks.json'), 'utf8'));   // only to fail loudly if the form moved
    assert.ok(plan);
    const prepMs = 900000, introMs = 60000;
    const delta = (Date.now() - (prepMs + introMs - 3000)) - before.started_at;
    await dev.env.DB.prepare("UPDATE attempt_modules SET started_at = started_at + ?1, deadline_at = deadline_at + ?1 WHERE module = 'sprechen'").bind(delta).run();
    await send('Page.reload'); await sleep(1500);
    if (expectRoom) await waitFor(`document.querySelector('.kx-room[data-state="ready"]') && window.__kxRoom`, 90000, 'room ready after reload');

    // Teil 1 partner prompt plays: only the partner's mouth moves; status names him
    await waitFor(`[...document.querySelectorAll('audio')].length >= 0 && /Teil 1/.test(document.querySelector('#kx-phase')?.textContent || '')`, 30000, 'Teil 1');
    if (expectRoom) {
      await evaluate(`window.__mouth = { partner: [], examiner: [], speaker: [] }; (function loop(){ const R = window.__kxRoom; if (!R) return; const v = (h) => { let m = 0; for (const n in h.mtAvatar) if (n.startsWith('viseme_')) { const t = h.mtAvatar[n]; for (let j = 0; j < t.ms.length; j++) m = Math.max(m, t.ms[j][t.is[j]] || 0); } return m; }; window.__mouth.partner.push(v(R.heads.partner)); window.__mouth.examiner.push(v(R.heads.examiner)); window.__mouth.speaker.push(R.speaking()); if (window.__mouth.partner.length < 4000) requestAnimationFrame(loop); })(); 1`);
      await waitFor(`window.__kxRoom.speaking() === 'partner'`, 30000, 'partner speaking');
      await sleep(2500); await shot('2-teil1-partner-speaks'); await roomShot('teil1-partner-speaks');
      log(name, 'framing', JSON.stringify(await evaluate(`(() => { const R = window.__kxRoom, c = R.camera, cv = document.querySelector('.kx-room canvas'); const r = (v) => [v.x, v.y, v.z].map((n) => +n.toFixed(2)); const eyes = {}; for (const [k, h] of Object.entries(R.heads)) { if (!h.objectLeftEye) continue; h.objectLeftEye.updateMatrixWorld(true); const e = h.objectLeftEye.getWorldPosition(c.position.clone()); eyes[k] = [r(e), h.armature.visible, +h.armature.position.y.toFixed(3), h.armature.parent && h.armature.parent.type, h.armature.parent && +h.armature.parent.position.y.toFixed(3)]; } return { rooms: document.querySelectorAll('.kx-room').length, canvases: [...document.querySelectorAll('.kx-room canvas')].map((x) => [x.width, x.height, x.parentElement.className, x.parentElement.clientWidth, x.parentElement.clientHeight]), cam: r(c.position), fov: c.fov, aspect: +c.aspect.toFixed(2), canvas: [cv.width, cv.height, cv.clientWidth, cv.clientHeight], eyes }; })()`)));
      assert.match(await evaluate(`document.querySelector('.kx-room-status-text').textContent`), /Gesprächspartner spricht/);
      await roomGif('teil1-partner-speaks', 4500);
      // faces over 7 s: blinks, eye movement (eye bone rotation range), non-viseme facial activity (brows, cheeks …)
      const face = await evaluate(`new Promise((res) => { const R = window.__kxRoom, out = {}, t0 = performance.now();
        const val = (h, k) => { const t = h.mtAvatar[k]; if (!t) return 0; let m = 0; for (let j = 0; j < t.ms.length; j++) m = Math.max(m, t.ms[j][t.is[j]] || 0); return m; };
        for (const k of Object.keys(R.heads)) if (R.heads[k].armature.visible) out[k] = { blinks: 0, closed: false, eyeMin: 9, eyeMax: -9, active: new Set(), peak: {} };
        (function tick() { for (const [k, o] of Object.entries(out)) { const h = R.heads[k];
            const b = val(h, 'eyeBlinkLeft'); if (b > 0.6 && !o.closed) { o.blinks++; o.closed = true; } if (b < 0.2) o.closed = false;
            const y = val(h, 'eyeLookInLeft') - val(h, 'eyeLookOutLeft') + val(h, 'eyeLookUpLeft') - val(h, 'eyeLookDownLeft') + h.objectLeftEye.rotation.y + h.objectLeftEye.rotation.x; o.eyeMin = Math.min(o.eyeMin, y); o.eyeMax = Math.max(o.eyeMax, y);
            for (const n of ['eyeSquintLeft', 'eyeBlinkLeft', 'cheekSquintLeft', 'eyeWideLeft', 'browDownLeft']) o.peak[n] = Math.max(o.peak[n] || 0, +val(h, n).toFixed(2));
            for (const n of Object.keys(h.mtAvatar)) if (!/^viseme_|^eyeBlink|^eyeLook/.test(n) && val(h, n) > 0.04) o.active.add(n); }
          if (performance.now() - t0 < 7000) requestAnimationFrame(tick);
          else res(Object.fromEntries(Object.entries(out).map(([k, o]) => [k, { blinks: o.blinks, eyeRange: +(o.eyeMax - o.eyeMin).toFixed(3), facial: [...o.active].slice(0, 8), peak: o.peak }]))); })(); })`);
      log(name, 'faces', JSON.stringify(face));
      for (const [k, f] of Object.entries(face)) {
        assert.ok(f.blinks >= 1, `${k} blinks (${f.blinks} in 7 s)`);
        assert.ok(f.eyeRange > 0.02, `${k} eyes move (gaze range ${f.eyeRange})`);
      }
      // close-ups for review: each visible face from 0.6 m
      for (const k of Object.keys(face)) {
        await evaluate(`(() => { const R = window.__kxRoom, h = R.heads['${k}']; h.objectLeftEye.updateMatrixWorld(true); const e = h.objectLeftEye.getWorldPosition(R.camera.position.clone()); const a = h.armature.rotation.y;
          R.view({ pos: [e.x + Math.sin(a) * 0.62 - 0.03, e.y + 0.01, e.z + Math.cos(a) * 0.62], aim: [e.x - 0.03, e.y - 0.06, e.z] }); })()`);
        await sleep(1200); await shot(`closeup-${k}`); await roomShot(`closeup-${k}`); await sleep(700); await shot(`closeup-${k}-b`);   // two frames: one may catch a blink
      }
      await evaluate(`window.__kxRoom.view(null)`);
      await waitFor(`window.__kxRoom.recording()`, 30000, 'candidate turn');
      const m = await evaluate(`(() => { const M = window.__mouth; const idx = M.speaker.map((s, i) => [s, i]); const sp = idx.filter(([s]) => s === 'partner').map(([, i]) => i); const open = (arr, ids) => ids.filter((i) => arr[i] > 0.1).length / Math.max(1, ids.length); return { frames: sp.length, partnerOpen: open(M.partner, sp), examinerOpenWhilePartner: open(M.examiner, sp) }; })()`);
      log(name, 'Teil 1 lip-sync', JSON.stringify(m));
      assert.ok(m.frames > 30, 'enough frames while the partner speaks');
      assert.ok(m.partnerOpen > 0.3, `partner mouth moves (${m.partnerOpen})`);
      assert.ok(m.examinerOpenWhilePartner < 0.05, 'examiner mouth closed meanwhile');
      assert.match(await evaluate(`document.querySelector('.kx-room-status-text').textContent`), /Sie sind dran/);
      await sleep(2500); await shot('3-teil1-your-turn'); await roomShot('teil1-your-turn');
      assert.equal(await evaluate(`window.__kxRoom.heads.partner.isListening`), true, 'the partner listens during the candidate turn');
    }
    // recording reaches the server exactly as without the room
    await waitFor(`/Aufnahme läuft/.test(document.querySelector('#kx-phase')?.textContent || '')`, 40000, 'candidate turn (classic view)');
    if (!expectRoom) { assert.equal(await evaluate(`!!document.querySelector('.kx-room')`), false, 'the room stays gone after reload'); await shot('classic-teil1-recording'); }
    const c0 = await chunks();
    await sleep(6000);
    const c1 = await chunks();
    log(name, 'recording chunks', c0, '→', c1);
    assert.ok(c1 > c0, 'recording chunks keep arriving');
    assert.equal(await evaluate(`!!document.querySelector('#kx-phase') && /Aufnahme läuft/.test(document.querySelector('#kx-phase').textContent)`), true, 'classic phase line unchanged');

    if (expectRoom) {
      // partner phase (Teil 3 presentation): examiner intro then Julia at the cast boundary (16.6 s)
      const r2 = await row();
      const partnerStart = prepMs + introMs + 210000 + 240000;
      const d2 = (Date.now() - (partnerStart + 1000)) - r2.started_at;   // 1 s into the phase: the examiner introduces for ~16 s
      await dev.env.DB.prepare("UPDATE attempt_modules SET started_at = started_at + ?1, deadline_at = deadline_at + ?1 WHERE module = 'sprechen'").bind(d2).run();
      await send('Page.reload'); await sleep(1500);
      await waitFor(`document.querySelector('.kx-room[data-state="ready"]') && window.__kxRoom`, 90000, 'room ready (partner phase)');
      await evaluate(`window.__sp = []; (function loop(){ const R = window.__kxRoom; if (!R) return; window.__sp.push(R.speaking()); if (window.__sp.length < 3000) requestAnimationFrame(loop); })(); 1`);
      await waitFor(`window.__kxRoom.speaking() === 'julia'`, 40000, 'Julia speaking');
      await sleep(2500); await shot('4-teil3-julia-presents'); await roomShot('teil3-julia-presents'); await roomGif('teil3-julia-presents', 5000);
      log(name, 'framing teil3', JSON.stringify(await evaluate(`(() => { const R = window.__kxRoom, c = R.camera, r = (v) => [v.x, v.y, v.z].map((n) => +n.toFixed(2)); const eyes = {}; for (const [k, h] of Object.entries(R.heads)) eyes[k] = [r(h.objectLeftEye.getWorldPosition(c.position.clone())), h.armature.visible]; return { cam: r(c.position), aspect: +c.aspect.toFixed(2), eyes, frame: R.frame(), settling: document.querySelector('.kx-room-settling') !== null }; })()`)));
      const seq = await evaluate(`[...new Set(window.__sp.filter(Boolean))]`);
      log(name, 'speaker sequence', seq.join(' → '));
      assert.deepEqual(seq.slice(-2), ['examiner', 'julia'], 'examiner introduces, then Julia presents');
      assert.equal(await evaluate(`window.__kxRoom.heads.julia.armature.visible && !window.__kxRoom.heads.partner.armature.visible`), true, 'Julia sits opposite in Teil 3');
      const via = consoleLines().filter((l) => /room_visemes/.test(l)).slice(-3);
      log(name, 'viseme analysis', via.join(' | '));
    }
    log(name, 'ok');
  } finally {
    b.close(); dev.server.close();
  }
}

const runs = [];
const haveM0 = fs.existsSync(path.join(FORM, 'audio', 'm0-sp1-partner-1.webm'));
if (!haveM0) log('M0 content not found at', FORM, '— running the synthetic scenario only');
if (haveM0 && (!ONLY || ONLY === 'm0')) runs.push(['m0', { viewport: { w: 1280, h: 900 }, form: FORM }]);
if (haveM0 && (!ONLY || ONLY === 'mobile')) runs.push(['mobile', { viewport: { w: 390, h: 844, dpr: 2, mobile: true }, form: FORM }]);
if (haveM0 && (!ONLY || ONLY === 'fallback')) runs.push(['fallback', { viewport: { w: 1280, h: 900 }, form: FORM, blockAvatars: true, expectRoom: false }]);
if (!ONLY || ONLY === 'synthetic') runs.push(['synthetic', { viewport: { w: 1280, h: 900 }, form: undefined }]);
for (const [name, opt] of runs) await scenario(name, opt);
log('all passed; screenshots in', SHOTS);
process.exit(0);
