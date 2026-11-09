#!/usr/bin/env node
/* Check a built/deployed NON-PRODUCTION room preview in headless Chrome (fake microphone speaking German).
     node scripts/exam-room-preview-check.mjs <preview origin, e.g. https://x.klarweg-site.pages.dev> [--shots <dir>]
   Scenarios: desktop 1280×900, mobile 390×844@3, fallback (avatars blocked). Prints a JSON summary; exits 1 on failure. */
import { spawn, execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const ORIGIN = (process.argv[2] || '').replace(/\/$/, '');
if (!/^https?:\/\//.test(ORIGIN)) throw new Error('usage: exam-room-preview-check.mjs <origin>');
const si = process.argv.indexOf('--shots');
const SHOTS = si > 0 ? process.argv[si + 1] : fs.mkdtempSync(path.join(os.tmpdir(), 'kx-preview-shots-'));
fs.mkdirSync(SHOTS, { recursive: true });
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => console.error('[preview-check]', ...a);

function speechWav() {   // 3 s silence, a German sentence (macOS voice), 4 s silence — looped by Chrome
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-preview-wav-')), aiff = path.join(dir, 's.aiff'), out = path.join(dir, 'speech.wav');
  execFileSync('say', ['-v', 'Anna', '-o', aiff, 'Ich schlage vor, dass wir am Freitag um drei Uhr im Café feiern. Ich kann einen Kuchen mitbringen.']);
  execFileSync('ffmpeg', ['-y', '-v', 'error', '-f', 'lavfi', '-t', '3', '-i', 'anullsrc=r=48000:cl=mono', '-i', aiff, '-f', 'lavfi', '-t', '4', '-i', 'anullsrc=r=48000:cl=mono',
    '-filter_complex', '[1:a]aresample=48000,aformat=channel_layouts=mono[b];[0:a][b][2:a]concat=n=3:v=0:a=1', '-ar', '48000', '-ac', '1', '-c:a', 'pcm_s16le', out]);
  return out;
}

async function launch(wav) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-preview-chrome-'));
  const args = ['--headless=new', '--mute-audio', '--no-first-run', '--no-default-browser-check', `--user-data-dir=${dir}`, '--remote-debugging-port=0',
    '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream', '--enable-unsafe-swiftshader',
    '--disable-features=AudioServiceSandbox,AudioServiceOutOfProcess', `--use-file-for-fake-audio-capture=${wav}`, 'about:blank'];
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
  const evaluate = async (expr) => { const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true, userGesture: true }); if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text); return r.result.value; };
  const close = () => { try { ws.close(); } catch {} proc.kill('SIGKILL'); setTimeout(() => fs.rmSync(dir, { recursive: true, force: true }), 500); };
  return { send, evaluate, events, close };
}

async function scenario(name, { viewport, blockAvatars = false }) {
  const b = await launch(speechWav()); const { send, evaluate } = b; const res = { name, ok: true, checks: {} };
  const check = (k, ok, v) => { res.checks[k] = { ok: !!ok, v }; if (!ok) res.ok = false; log(name, ok ? 'ok ' : 'FAIL', k, JSON.stringify(v)); };
  const waitFor = async (expr, ms, label) => { const t0 = Date.now(); while (Date.now() - t0 < ms) { try { if (await evaluate(`(() => { try { return !!(${expr}); } catch { return false; } })()`)) return true; } catch {} await sleep(150); } log(name, 'timeout', label); return false; };
  const shot = async (label) => { const r = await send('Page.captureScreenshot', { format: 'png' }); fs.writeFileSync(path.join(SHOTS, `preview-${name}-${label}.png`), Buffer.from(r.data, 'base64')); };
  try {
    await send('Runtime.enable'); await send('Page.enable'); await send('Network.enable'); await send('Network.setCacheDisabled', { cacheDisabled: true });
    if (blockAvatars) await send('Network.setBlockedURLs', { urls: ['*/exam-room/avatars/*'] });
    await send('Emulation.setDeviceMetricsOverride', { width: viewport.w, height: viewport.h, deviceScaleFactor: viewport.dpr || 1, mobile: !!viewport.mobile });
    const t0 = Date.now();
    await send('Page.navigate', { url: ORIGIN + '/exam-room/preview/?room=on&roomdebug' });
    check('page_loads', await waitFor(`document.querySelector('#kx-demo-go') && window.__kxDemo`, 20000, 'start'), { ms: Date.now() - t0 });
    check('https', ORIGIN.startsWith('https://') || /127\.0\.0\.1|localhost/.test(ORIGIN), ORIGIN);
    const ev = (k) => `window.__kxDemo && window.__kxDemo.diag.events.find((e) => e.kind === '${k}')`;
    await evaluate(`document.querySelector('#kx-demo-go').click()`);
    await sleep(1500);
    const errs = b.events.filter((e) => e.method === 'Runtime.exceptionThrown' || (e.method === 'Runtime.consoleAPICalled' && /error|warn/.test(e.params.type))).map((e) => e.method === 'Runtime.exceptionThrown' ? e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text : e.params.args.map((a) => a.value ?? a.description).join(' '));
    if (errs.length) log(name, 'console', errs.slice(0, 8).join(' | ').slice(0, 1500));
    check('mic_permission', await waitFor(ev('mic_granted'), 10000, 'mic'), await evaluate(`(${ev('mic_granted')}) || null`));
    if (!blockAvatars) {
      const vis = await waitFor(ev('room_visible'), 90000, 'room visible');
      const ready = await evaluate(`({ ready: (${ev('room_ready')}) || null, visible: (${ev('room_visible')}) || null })`);
      check('avatars_load', vis, ready);
      await evaluate(`window.__mouth = { s: [] }; (function loop(){ const R = window.__kxRoom; if (R) { const v = (h) => { let m = 0; for (const n in h.mtAvatar) if (n.startsWith('viseme_')) { const t = h.mtAvatar[n]; for (let j = 0; j < t.ms.length; j++) m = Math.max(m, t.ms[j][t.is[j]] || 0); } return m; }; const o = { who: R.speaking() }; for (const k in R.heads) o[k] = R.heads[k].armature.visible ? v(R.heads[k]) : 0; window.__mouth.s.push(o); } if (window.__mouth.s.length < 20000) requestAnimationFrame(loop); })(); 1`);
      check('partner_speaks', await waitFor(`window.__kxRoom.speaking() === 'partner'`, 45000, 'partner'), null);
      await sleep(2500); await shot('teil1-partner-speaks');
      check('status_partner', /Gesprächspartner spricht/.test(await evaluate(`(document.querySelector('.kx-room-status-text')||{}).textContent || ''`)), await evaluate(`(document.querySelector('.kx-room-status-text')||{}).textContent`));
      check('candidate_turn', await waitFor(`window.__kxRoom.recording()`, 30000, 'turn'), null);
      await sleep(1500);
      check('status_turn', /Sie sind dran/.test(await evaluate(`document.querySelector('.kx-room-status-text').textContent`)), await evaluate(`document.querySelector('.kx-room-status-text').textContent`));
      check('partner_listens', await evaluate(`window.__kxRoom.heads.partner.isListening`), null);
      await shot('teil1-your-turn');
      const lip = await evaluate(`(() => { const S = window.__mouth.s.filter((o) => o.who === 'partner'); const f = (k) => S.filter((o) => o[k] > 0.1).length / Math.max(1, S.length); return { frames: S.length, partnerOpen: +f('partner').toFixed(2), examinerOpen: +f('examiner').toFixed(2) }; })()`);
      check('lip_sync', lip.partnerOpen > 0.3 && lip.examinerOpen < 0.05, lip);
      await sleep(4000);
      await evaluate(`window.__kxDemo.skip()`); await sleep(1500);   // → Teil 2
      await evaluate(`window.__kxDemo.skip()`);                      // → partner phase (Julia)
      check('julia_speaks', await waitFor(`window.__kxRoom.speaking() === 'julia'`, 30000, 'julia'), null);
      await sleep(2500); await shot('teil3-julia-presents');
      check('julia_opposite', await evaluate(`window.__kxRoom.heads.julia.armature.visible && !window.__kxRoom.heads.partner.armature.visible`), null);
      await waitFor(`window.__kxRoom.speaking() === 'examiner'`, 50000, 'examiner after julia');
      const seq = await evaluate(`window.__mouth.s.map((o) => o.who).filter(Boolean).reduce((acc, w) => (acc[acc.length - 1] === w ? acc : acc.concat(w)), [])`);
      check('speaker_sequence', seq.join(',').includes('partner') && seq.join(',').includes('examiner,julia,examiner'), seq);
      const jl = await evaluate(`(() => { const S = window.__mouth.s.filter((o) => o.who === 'julia'); const f = (k) => S.filter((o) => o[k] > 0.1).length / Math.max(1, S.length); return { frames: S.length, juliaOpen: +f('julia').toFixed(2), examinerOpen: +f('examiner').toFixed(2) }; })()`);
      check('lip_sync_julia', jl.juliaOpen > 0.3 && jl.examinerOpen < 0.05, jl);
    } else {
      check('room_removed', await waitFor(`!document.querySelector('.kx-room') && window.__kxDemo.diag.events.some((e) => /room_failed|fail/.test(e.kind))`, 60000, 'fallback'), await evaluate(`window.__kxDemo.diag.events.map((e) => e.kind)`));
      await evaluate(`window.__kxDemo.skip()`);   // prep → intro
    }
    await waitFor(`[...window.__kxDemo.recordings.values()].some((r) => r.chunks.length >= 2)`, 60000, 'recording chunks');
    check('recording_chunks', await evaluate(`[...window.__kxDemo.recordings.values()].reduce((a, r) => a + r.chunks.length, 0) >= 2`), await evaluate(`[...window.__kxDemo.recordings].map(([k, r]) => [k, r.chunks.length])`));
    for (let i = 0; i < 8 && !(await evaluate(`!!window.__kxDemoReport`)); i++) { await evaluate(`window.__kxDemo.skip()`); await sleep(2500); }
    check('end_page', await waitFor(`window.__kxDemoReport && document.querySelectorAll('audio[controls]').length >= 1`, 30000, 'end'), null);
    await shot('end');
    const rep = await evaluate(`window.__kxDemoReport`);
    res.report = { fps_median: rep.fps_median, fps_min: rep.fps_min, jank: rep.jank, frames: rep.frames, errors: rep.errors, recordings: rep.recordings, resources: rep.resources, events: rep.events.filter((e) => /room|mic|start|turn_complete/.test(e.kind)).slice(0, 30) };
    // known, harmless: three's meshopt decoder module tries to compile WebAssembly at import time, which the exam CSP
    // (no 'wasm-unsafe-eval') refuses; the figures use no meshopt compression, so the decoder is never needed
    const known = (e) => /WebAssembly.*Content Security/.test(e);
    res.knownWarnings = rep.errors.filter(known);
    check('no_errors', !rep.errors.filter((e) => !known(e)).length, rep.errors.filter((e) => !known(e)));
  } catch (e) { res.ok = false; res.error = e.message; log(name, 'ERROR', e.message); }
  finally { b.close(); }
  return res;
}

const out = [];
for (const [name, opts] of [['desktop', { viewport: { w: 1280, h: 900 } }], ['mobile', { viewport: { w: 390, h: 844, dpr: 3, mobile: true } }], ['fallback', { viewport: { w: 390, h: 844, dpr: 3, mobile: true }, blockAvatars: true }]]) {
  if (process.env.KX_ONLY && process.env.KX_ONLY !== name) continue;
  out.push(await scenario(name, opts));
}
console.log(JSON.stringify({ origin: ORIGIN, shots: SHOTS, results: out }, null, 1));
process.exit(out.every((r) => r.ok) ? 0 : 1);
