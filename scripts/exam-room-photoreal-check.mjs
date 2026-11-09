#!/usr/bin/env node
/* Headless check of the photoreal room PROTOTYPE (video renderer) on a built preview.
     node scripts/exam-room-photoreal-check.mjs <origin> [--shots <dir>]
   Scenarios: desktop 1280×900, mobile 390×844@3, novideo (all .mp4 blocked: still plate must remain), noscene
   (scene.json blocked: classic view continues). Fake microphone. Prints JSON; exits 1 on failure. */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const ORIGIN = (process.argv[2] || '').replace(/\/$/, '');
if (!/^https?:\/\//.test(ORIGIN)) throw new Error('usage: exam-room-photoreal-check.mjs <origin>');
const si = process.argv.indexOf('--shots');
const SHOTS = si > 0 ? process.argv[si + 1] : fs.mkdtempSync(path.join(os.tmpdir(), 'kxv-shots-'));
fs.mkdirSync(SHOTS, { recursive: true });
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => console.error('[photoreal-check]', ...a);

async function launch() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kxv-chrome-'));
  const proc = spawn(CHROME, ['--headless=new', '--mute-audio', '--no-first-run', `--user-data-dir=${dir}`, '--remote-debugging-port=0', '--autoplay-policy=no-user-gesture-required',
    '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream', '--disable-features=AudioServiceSandbox,AudioServiceOutOfProcess', 'about:blank'], { stdio: 'ignore' });
  let port = null; const t0 = Date.now();
  while (!port && Date.now() - t0 < 30000) { try { const p = fs.readFileSync(path.join(dir, 'DevToolsActivePort'), 'utf8').split('\n')[0]; if (/^\d+$/.test(p)) port = p; } catch {} await sleep(100); }
  if (!port) throw new Error('Chrome did not start');
  const page = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r, { once: true }));
  let id = 0; const pending = new Map();
  ws.addEventListener('message', (m) => { const msg = JSON.parse(m.data); if (msg.id && pending.has(msg.id)) { const p = pending.get(msg.id); pending.delete(msg.id); msg.error ? p.reject(new Error(msg.error.message)) : p.resolve(msg.result); } });
  const send = (method, params = {}) => new Promise((resolve, reject) => { const i = ++id; pending.set(i, { resolve, reject }); ws.send(JSON.stringify({ id: i, method, params })); });
  const evaluate = async (expr) => { const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true, userGesture: true }); if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text); return r.result.value; };
  return { send, evaluate, close: () => { try { ws.close(); } catch {} proc.kill('SIGKILL'); setTimeout(() => fs.rmSync(dir, { recursive: true, force: true }), 500); } };
}

async function scenario(name, { viewport, block = [] }) {
  const b = await launch(); const { send, evaluate } = b; const res = { name, ok: true, checks: {} };
  const check = (k, ok, v) => { res.checks[k] = { ok: !!ok, v }; if (!ok) res.ok = false; log(name, ok ? 'ok ' : 'FAIL', k, JSON.stringify(v)); };
  const waitFor = async (expr, ms) => { const t0 = Date.now(); while (Date.now() - t0 < ms) { try { if (await evaluate(`(() => { try { return !!(${expr}); } catch { return false; } })()`)) return true; } catch {} await sleep(100); } return false; };
  const shot = async (label) => { await sleep(2400); const r = await send('Page.captureScreenshot', { format: 'png' }); fs.writeFileSync(path.join(SHOTS, `photoreal-${name}-${label}.png`), Buffer.from(r.data, 'base64')); };
  const R = (expr) => evaluate(`(() => { const R = window.__kxRoom; return ${expr}; })()`);
  try {
    await send('Runtime.enable'); await send('Page.enable'); await send('Network.enable'); await send('Network.setCacheDisabled', { cacheDisabled: true });
    if (block.length) await send('Network.setBlockedURLs', { urls: block });
    await send('Emulation.setDeviceMetricsOverride', { width: viewport.w, height: viewport.h, deviceScaleFactor: viewport.dpr || 1, mobile: !!viewport.mobile });
    await send('Page.navigate', { url: ORIGIN + '/exam-room/preview/?room=on&roomdebug' });
    check('page_loads', await waitFor(`document.querySelector('#kx-demo-go') && window.__kxDemo`, 20000), null);
    await evaluate(`document.querySelector('#kx-demo-go').click()`);
    const ev = (k) => `window.__kxDemo.diag.events.find((e) => e.kind === '${k}')`;
    check('mic_permission', await waitFor(ev('mic_granted'), 10000), null);
    if (name === 'noscene') {
      check('classic_continues', await waitFor(`!document.querySelector('.kx-room') && window.__kxDemo.diag.events.some((e) => e.kind === 'room_null' || /room_failed/.test(e.kind))`, 20000), await evaluate(`window.__kxDemo.diag.events.map((e) => e.kind)`));
      await evaluate(`window.__kxDemo.skip()`);
      check('recording_without_room', await waitFor(`[...window.__kxDemo.recordings.values()].some((r) => r.chunks.length >= 1)`, 60000), null);
    } else {
      check('room_ready', await waitFor(ev('room_visible'), 30000), await evaluate(`(${ev('room_visible')}) || null`));
      await shot('establish');
      check('partner_speaks', await waitFor(`window.__kxRoom.speaking() === 'partner'`, 45000), null);
      check('camera_on_partner', await waitFor(`window.__kxRoom.shot() === 'partner'`, 3000), await R(`R.transform()`));
      if (name !== 'novideo') check('partner_clip_playing', await waitFor(`(() => { const p = window.__kxRoom.playing('partner'); return p.speak && p.t > 0.3; })()`, 5000), await R(`R.playing('partner')`));
      check('others_idle', await R(`!R.playing('examiner').speak && !R.playing('assessor').speak`), null);
      await shot('partner-speaks');
      check('candidate_turn_teil1', await waitFor(`window.__kxRoom.recording() && window.__kxRoom.shot() === 'address_partner'`, 30000), await R(`R.shot()`));
      await shot('teil1-your-turn');
      await evaluate(`window.__kxDemo.skip()`);   // → Teil 2
      check('teil2_addresses_examiners', await waitFor(`window.__kxRoom.recording() && window.__kxRoom.shot() === 'address_examiners'`, 15000), await R(`R.shot()`));
      await shot('teil2-presentation');
      await evaluate(`window.__kxDemo.skip()`);   // → partner presents (Teil 3)
      check('examiner_speaks', await waitFor(`window.__kxRoom.speaking() === 'examiner' && window.__kxRoom.shot() === 'examiners'`, 20000), await R(`R.shot()`));
      await shot('examiner-speaks');
      check('partner_presents', await waitFor(`window.__kxRoom.speaking() === 'partner'`, 20000), null);
      const vis = await R(`(() => { const st = document.querySelector('.kxv-stage').getBoundingClientRect(), im = document.querySelector('.kxv-plate').getBoundingClientRect(), pb = document.querySelector('[data-person="partner"]').getBoundingClientRect(); return { stage: [st.width, st.height], plate: [Math.round(im.width), Math.round(im.height)], partnerPatch: [Math.round(pb.width), Math.round(pb.height)], opacity: getComputedStyle(document.querySelector('.kxv-cam')).opacity }; })()`);
      check('plate_visible', vis.opacity === '1' && vis.plate[0] >= vis.stage[0] - 1 && vis.plate[1] >= vis.stage[1] - 1 && vis.partnerPatch[0] > 20, vis);
      const cam = await R(`(() => { const m = new DOMMatrix(getComputedStyle(document.querySelector('.kxv-cam')).transform); const s = document.querySelector('.kxv-stage').getBoundingClientRect(); return { tx: m.e, ty: m.f, s: m.a, w: s.width, h: s.height, plate: R.scene.plate }; })()`);
      check('no_empty_edges', cam.tx <= 0.5 && cam.ty <= 0.5 && cam.tx + cam.plate.w * cam.s >= cam.w - 1 && cam.ty + cam.plate.h * cam.s >= cam.h - 1, cam);
    }
    for (let i = 0; i < 10 && !(await evaluate(`!!window.__kxDemoReport`)); i++) { await evaluate(`window.__kxDemo.skip()`); await sleep(2000); }
    check('end_page', await waitFor(`window.__kxDemoReport`, 30000), null);
    const rep = await evaluate(`window.__kxDemoReport`);
    res.report = { fps_median: rep.fps_median, fps_min: rep.fps_min, jank: rep.jank, recordings: rep.recordings, resources: rep.resources, events: rep.events.filter((e) => /room|mic/.test(e.kind)).slice(0, 12) };
    const known = (e) => name === 'novideo' && /video|media|NotSupported|NotAllowed|play/i.test(e);
    check('no_errors', !rep.errors.filter((e) => !known(e)).length, rep.errors);
  } catch (e) { res.ok = false; res.error = e.message; log(name, 'ERROR', e.message); }
  finally { b.close(); }
  return res;
}

const out = [];
for (const [name, opts] of [['desktop', { viewport: { w: 1280, h: 900 } }], ['mobile', { viewport: { w: 390, h: 844, dpr: 3, mobile: true } }],
  ['novideo', { viewport: { w: 390, h: 844, dpr: 3, mobile: true }, block: ['*.mp4'] }], ['noscene', { viewport: { w: 1280, h: 900 }, block: ['*/photoreal/scene.json'] }]]) {
  if (process.env.KX_ONLY && process.env.KX_ONLY !== name) continue;
  out.push(await scenario(name, opts));
}
console.log(JSON.stringify({ origin: ORIGIN, shots: SHOTS, results: out }, null, 1));
process.exit(out.every((r) => r.ok) ? 0 : 1);
