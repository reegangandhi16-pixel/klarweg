/* Sprechen virtual room — local proof of concept (no paid API, nothing uploaded).
   Scene (official B1 Teil 3 order, shortened): examiner introduces → partner Julia presents (excerpt)
   → Julia asks the candidate a question → candidate answers via microphone (end of turn detected by
   a calibrated energy VAD) → examiner closes. Avatar: TalkingHead (MIT) + MPFB avatar (CC0),
   German viseme lip-sync from word timings. Fallback: 2-D portrait driven by audio level. */

const $ = (id) => document.getElementById(id);
const t0 = performance.now();
const log = (msg) => { const li = document.createElement('li'); li.textContent = `${((performance.now() - t0) / 1000).toFixed(2)} s  ${msg}`; $('log').append(li); console.log('[room]', msg); };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const mobile = matchMedia('(max-width: 640px)').matches;

let head = null;           // TalkingHead instance when the 3-D avatar is active
let ctx = null;            // AudioContext (the avatar's own when it is active)
let clips = {};            // id → { meta, buffer }
let mic = null;            // { stream, source, analyser, floorDb }
let captionsOn = false;
const Q = new URLSearchParams(location.search);
const MUTE = Q.has('mute');      // test aid: silent playback (visuals unchanged)
const NOMIC = Q.has('nomic');    // test aid: exercise the no-microphone fallback

function setStatus(kind, text) { $('status').dataset.s = kind; $('statusText').textContent = text; }
function setExaminer(on, text) { $('examiner').classList.toggle('speaking', on); $('exState').textContent = text; }
let capTimers = [];
/* One sentence at a time, timed from the clip's word timings. */
function captionTimed(meta) {
  capTimers.forEach(clearTimeout); capTimers = [];
  let cur = [], startAt = 0;
  meta.words.forEach((w, i) => {
    if (!cur.length) startAt = meta.wtimes[i];
    cur.push(w);
    if (/[.!?]$/.test(w) || i === meta.words.length - 1) { const text = cur.join(' '); capTimers.push(setTimeout(() => caption(text), startAt)); cur = []; }
  });
}
function caption(text) { const c = $('caption'); c.textContent = text || ''; c.hidden = !captionsOn || !text; }

function webglOk() {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; }
}

async function loadAvatar() {
  $('loading').hidden = false;
  const started = performance.now();
  const { TalkingHead } = await import('talkinghead');
  head = new TalkingHead($('avatar'), {
    ttsEndpoint: null, lipsyncModules: ['de'], lipsyncLang: 'de',
    cameraView: 'upper', cameraRotateEnable: false, cameraZoomEnable: false,
    modelFPS: mobile ? 24 : 30, modelPixelRatio: Math.min(devicePixelRatio || 1, 2),
    avatarIdleEyeContact: 0.4, avatarIdleHeadMove: reduced ? 0.1 : 0.4,
    avatarSpeakingEyeContact: 0.6, avatarSpeakingHeadMove: reduced ? 0.1 : 0.5,
  });
  await Promise.race([
    head.showAvatar({ url: 'vendor/mpfb.glb', body: 'F', avatarMood: 'neutral', lipsyncLang: 'de' }, (ev) => {
      if (ev.lengthComputable) $('loadingText').textContent = `Avatar wird geladen … ${Math.round((ev.loaded / ev.total) * 100)} %`;
    }),
    sleep(60000).then(() => { throw new Error('avatar timeout'); }),
  ]);
  ctx = head.audioCtx;
  if (MUTE) head.setMixerGain(0);
  $('loading').hidden = true;
  log(`3-D avatar ready in ${Math.round(performance.now() - started)} ms`);
}

let lastHeadCtx = null;
function useFallback(reason) {
  if (head) { lastHeadCtx = head.audioCtx; try { head.stop(); head.dispose(); } catch {} head = null; }
  $('avatar').innerHTML = ''; $('loading').hidden = true; $('portrait').hidden = false;
  if (!ctx || ctx.state === 'closed' || ctx === lastHeadCtx) ctx = new AudioContext();
  log('fallback 2-D portrait: ' + reason);
}

async function loadClips() {
  const manifest = await (await fetch('media/manifest.json', { cache: 'no-store' })).json();
  await Promise.all(manifest.clips.map(async (m) => {
    const bytes = await (await fetch(m.file)).arrayBuffer();
    clips[m.id] = { meta: m, buffer: await ctx.decodeAudioData(bytes) };
  }));
  log(`${manifest.clips.length} clips decoded`);
}

/* Plays one clip through a plain source node; drives the 2-D ring from its level. */
function playPlain(buffer) {
  return new Promise((resolve) => {
    const src = ctx.createBufferSource(); src.buffer = buffer;
    const an = ctx.createAnalyser(); an.fftSize = 512;
    src.connect(an);
    if (MUTE) { const g = ctx.createGain(); g.gain.value = 0; an.connect(g); g.connect(ctx.destination); } else an.connect(ctx.destination);
    const data = new Float32Array(an.fftSize); let raf = 0;
    const tick = () => {
      an.getFloatTimeDomainData(data);
      const rms = Math.sqrt(data.reduce((a, v) => a + v * v, 0) / data.length);
      const ring = $('ring'); ring.style.transform = `scale(${1 + Math.min(rms * 3, 0.18)})`; ring.style.opacity = String(0.15 + Math.min(rms * 4, 0.6));
      raf = requestAnimationFrame(tick);
    };
    src.onended = () => { cancelAnimationFrame(raf); $('ring').style.transform = ''; $('ring').style.opacity = ''; resolve(); };
    src.start(); tick();
  });
}

/* Partner speaks: TalkingHead lip-sync from word timings, or the 2-D fallback. */
function partnerSays(id) {
  const { meta, buffer } = clips[id];
  setStatus('speaking', 'Julia spricht'); captionTimed(meta);
  if (!head) return playPlain(buffer);
  return new Promise((resolve) => {
    let done = false; const finish = () => { if (!done) { done = true; resolve(); } };
    head.speakAudio({ audio: buffer, words: meta.words, wtimes: meta.wtimes, wdurations: meta.wdurations,
      markers: [finish], mtimes: [meta.duration_ms] }, { lipsyncLang: 'de' });
    setTimeout(finish, meta.duration_ms + 1500);   // safety net if the marker never fires
  });
}

/* Examiner is off camera (seated at the side); her voice plays without lip-sync. */
async function examinerSays(id) {
  const { meta, buffer } = clips[id];
  setStatus('speaking', 'Prüferin spricht'); setExaminer(true, 'spricht'); captionTimed(meta);
  if (head) head.lookAt(innerWidth * 0.9, innerHeight * 0.6, meta.duration_ms);  // Julia looks at the examiner
  await playPlain(buffer);
  setExaminer(false, 'am Tisch');
}

async function openMic() {
  if (NOMIC) throw new Error('disabled by ?nomic');
  if (!navigator.mediaDevices?.getUserMedia) throw new Error('getUserMedia not available (needs https or localhost)');
  const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
  const source = ctx.createMediaStreamSource(stream);
  const analyser = ctx.createAnalyser(); analyser.fftSize = 1024; source.connect(analyser);
  // calibrate the room's noise floor for 800 ms (nobody speaks yet)
  setStatus('idle', 'Mikrofon wird geprüft …');
  const buf = new Float32Array(analyser.fftSize); const levels = [];
  const end = performance.now() + 800;
  while (performance.now() < end) { analyser.getFloatTimeDomainData(buf); levels.push(dbOf(buf)); await sleep(30); }
  levels.sort((a, b) => a - b);
  const floorDb = levels[Math.floor(levels.length / 2)];
  log(`mic open: ${stream.getAudioTracks()[0].label || 'default'}; noise floor ${floorDb.toFixed(1)} dBFS`);
  mic = { stream, source, analyser, floorDb };
}
function dbOf(buf) { const rms = Math.sqrt(buf.reduce((a, v) => a + v * v, 0) / buf.length); return 20 * Math.log10(rms + 1e-9); }

/* Candidate's turn. Ends after 1.4 s of silence once ≥ 2 s of speech were heard, on "Ich bin fertig",
   or at the hard limit. Returns { blob, spokenMs, endReason, transcript }. */
function candidateTurn({ maxMs = 60000 } = {}) {
  return new Promise((resolve) => {
    setStatus('you', 'Sie sind dran – bitte antworten Sie'); caption('');
    $('done').hidden = false; $('meterWrap').hidden = !mic;
    const speechDb = mic ? Math.max(mic.floorDb + 12, -50) : 0;
    let maxDb = -Infinity, spokenMs = 0, silentMs = 0, speaking = false, finished = false, lastT = performance.now(), firstVoice = null;
    const chunks = []; let rec = null, transcript = '', stt = null;
    if (mic && window.MediaRecorder) {
      rec = new MediaRecorder(mic.stream); rec.ondataavailable = (e) => e.data.size && chunks.push(e.data); rec.start(250);
    }
    if (head && mic) head.startListening(mic.analyser, { listeningSilenceThresholdMs: 1400 });   // listening head motion + eye contact
    if ($('optStt').checked && (window.SpeechRecognition || window.webkitSpeechRecognition)) {
      stt = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      stt.lang = 'de-DE'; stt.continuous = true; stt.interimResults = false;
      stt.onresult = (e) => { for (let i = e.resultIndex; i < e.results.length; i++) if (e.results[i].isFinal) transcript += e.results[i][0].transcript + ' '; };
      try { stt.start(); } catch {}
    }
    const buf = new Float32Array(mic ? mic.analyser.fftSize : 1);
    const finish = (endReason) => {
      if (finished) return; finished = true;
      clearInterval(timer); $('done').hidden = true; $('meterWrap').hidden = true;
      if (head) head.stopListening();
      if (stt) try { stt.stop(); } catch {}
      const out = () => resolve({ blob: chunks.length ? new Blob(chunks, { type: rec.mimeType }) : null, maxDb, speechDb, spokenMs, endReason, transcript: transcript.trim(), firstVoice });
      if (rec && rec.state !== 'inactive') { rec.onstop = () => setTimeout(out, stt ? 600 : 0); rec.stop(); } else setTimeout(out, stt ? 600 : 0);
    };
    $('done').onclick = () => finish('button');
    const started = performance.now();
    const timer = setInterval(() => {
      const now = performance.now(), dt = now - lastT; lastT = now;
      if (now - started > maxMs) return finish('limit');
      if (!mic) return;
      mic.analyser.getFloatTimeDomainData(buf);
      const db = dbOf(buf); if (db > maxDb) maxDb = db;
      $('meter').style.width = Math.max(0, Math.min(100, ((db - mic.floorDb) / 40) * 100)) + '%';
      if (db > speechDb) {
        speaking = true; spokenMs += dt; silentMs = 0;
        if (firstVoice === null) { firstVoice = now - started; log(`candidate started speaking after ${Math.round(firstVoice)} ms`); }
        setStatus('listening', 'Julia hört zu');
      } else if (speaking) {
        silentMs += dt;
        if (silentMs > 1400 && spokenMs > 2000) return finish('silence');
      }
    }, 50);
  });
}

/* The avatar loads as soon as the page opens (while the candidate reads the instructions);
   audio is unlocked synchronously inside the click, which iOS Safari requires. */
let ready = null;
function prepare() {
  if ($('opt2d').checked) { useFallback('chosen by user'); return Promise.resolve(); }
  if (!webglOk()) { useFallback('no WebGL'); return Promise.resolve(); }
  return loadAvatar().catch((e) => useFallback('avatar failed: ' + e.message));
}
function unlockAudio() {
  if (!ctx) ctx = new AudioContext();            // fallback path; the avatar brings its own context
  const p = ctx.resume();
  const b = ctx.createBufferSource(); b.buffer = ctx.createBuffer(1, 1, 22050); b.connect(ctx.destination); b.start();
  return p;
}
async function audioRunning() {
  if (ctx.state === 'running') return;
  await Promise.race([ctx.resume(), sleep(1500)]);
  if (ctx.state === 'running') return;
  setStatus('idle', 'Bitte tippen, um den Ton freizugeben');
  await new Promise((r) => document.addEventListener('pointerdown', () => { ctx.resume().then(r); }, { once: true }));
}

async function run() {
  $('go').disabled = true; $('go').hidden = true; $('result').hidden = true;
  captionsOn = $('optCaptions').checked;
  try {
    if ($('opt2d').checked && head) useFallback('chosen by user');
    if (ctx) unlockAudio();                      // inside the gesture
    await ready;
    if (!ctx) ctx = new AudioContext();
    await audioRunning();
    await loadClips();
    // 2. microphone (fallback: continue without, the candidate ends the turn by button)
    try { await openMic(); } catch (e) {
      log('mic unavailable: ' + e.message);
      $('hint').textContent = 'Kein Mikrofon verfügbar. In der echten Prüfung würde der Gerätetest das vorher verhindern. Hier können Sie den Ablauf ohne Aufnahme testen: Klicken Sie nach Ihrer Antwort auf „Ich bin fertig“.';
    }
    // 3. the scene
    await examinerSays('exam-intro');
    await sleep(500);
    await partnerSays('julia-talk');
    caption(''); setStatus('idle', 'Präsentation (gekürzt)');
    await sleep(900);
    await partnerSays('julia-question');
    const turnStart = performance.now();
    const answer = await candidateTurn();
    log(`turn ended (${answer.endReason}); spoken ${Math.round(answer.spokenMs)} ms (peak ${answer.maxDb.toFixed(1)} dBFS, threshold ${answer.speechDb.toFixed(1)}), total ${Math.round(performance.now() - turnStart)} ms`);
    setStatus('idle', 'Pause');
    const gapStart = performance.now();
    await sleep(600);                         // natural turn gap before the examiner continues
    log(`end-of-turn → examiner audio: ${Math.round(performance.now() - gapStart)} ms after detection`);
    await examinerSays('exam-thanks');
    setStatus('idle', 'Teil beendet'); caption('');
    // 4. local result
    if (answer.blob) { $('playback').src = URL.createObjectURL(answer.blob); $('playback').hidden = false; } else $('playback').hidden = true;
    if (answer.transcript) { $('transcript').hidden = false; $('transcript').textContent = '„' + answer.transcript + '“'; }
    $('result').hidden = false;
  } catch (e) {
    log('error: ' + (e.stack || e.message)); setStatus('idle', 'Fehler – siehe Messwerte');
  } finally {
    if (mic) { mic.stream.getTracks().forEach((t) => t.stop()); mic = null; }
    $('go').disabled = false; $('go').hidden = false; $('go').textContent = 'Noch einmal';
  }
}

$('optCaptions').onchange = (e) => { captionsOn = e.target.checked; if (!captionsOn) $('caption').hidden = true; };
$('go').onclick = run;
$('opt2d').onchange = (e) => { if (e.target.checked && head) useFallback('chosen by user'); };
if (Q.has('2d')) $('opt2d').checked = true;
ready = prepare();
if (Q.has('debug')) window.__room = { get head() { return head; }, get ctx() { return ctx; }, clips, partnerSays };
log(`ready · WebGL ${webglOk() ? 'yes' : 'no'} · ${mobile ? 'mobile' : 'desktop'} layout · STT API ${(window.SpeechRecognition || window.webkitSpeechRecognition) ? 'present' : 'absent'}`);
