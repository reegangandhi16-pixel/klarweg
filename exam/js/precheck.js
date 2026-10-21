/* Pre-checks before a module starts (ENGINE §10): audio output (Hören), microphone (Sprechen), and notes about local
   storage, the device clock and the connection. Audio and microphone failures lead to a guided fix, not to the start;
   storage, clock and connection only inform (the server stays the source of truth for answers and time). The test tone
   uses its own short-lived AudioContext; the exam's Hören player is not touched. */

export const CLOCK_SKEW_NOTE_MS = 120_000;
export const SLOW_RTT_MS = 1500;

/* → [{ kind, text }] informational notes; empty when everything looks fine */
export function environmentNotes({ storageKind, offsetMs, rttMs } = {}) {
  const out = [];
  if (storageKind === 'memory') out.push({ kind: 'storage', text: 'Ihr Browser erlaubt keine lokale Zwischenspeicherung (z. B. im privaten Modus). Antworten werden trotzdem auf dem Server gespeichert; bei einem Verbindungsabbruch können noch nicht übertragene Antworten verloren gehen.' });
  if (Number.isFinite(offsetMs) && Math.abs(offsetMs) > CLOCK_SKEW_NOTE_MS) out.push({ kind: 'clock', text: 'Die Uhr Ihres Geräts weicht von der Serverzeit ab. Das ist unbedenklich: Die Prüfungszeit läuft nach der Serverzeit.' });
  if (Number.isFinite(rttMs) && rttMs > SLOW_RTT_MS) out.push({ kind: 'connection', text: 'Ihre Verbindung ist langsam. Antworten werden automatisch erneut gesendet; eine stabile Verbindung wird empfohlen.' });
  return out;
}

/* one second of a quiet 440 Hz tone with a soft envelope; resolves when it has finished */
export async function playTestTone(createContext = () => new (window.AudioContext || window.webkitAudioContext)()) {
  const ctx = createContext();
  try {
    if (ctx.state !== 'running') await ctx.resume();
    const osc = ctx.createOscillator(); const gain = ctx.createGain();
    osc.frequency.value = 440;
    const t = ctx.currentTime;
    gain.gain.setValueAtTime(0, t); gain.gain.linearRampToValueAtTime(0.2, t + 0.05);
    gain.gain.setValueAtTime(0.2, t + 0.9); gain.gain.linearRampToValueAtTime(0, t + 1);
    osc.connect(gain).connect(ctx.destination);
    await new Promise((resolve) => { osc.onended = resolve; osc.start(t); osc.stop(t + 1); });
  } finally { try { await ctx.close(); } catch { /* already closed */ } }
}

/* microphone check: permission + a live audio track; the level is measured for information only (a quiet room is
   fine). The stream is released afterwards; the module asks again before its first recording. */
export async function testMicrophone({ getUserMedia = (c) => navigator.mediaDevices.getUserMedia(c), createContext = () => new (window.AudioContext || window.webkitAudioContext)(), ms = 1500 } = {}) {
  let stream;
  try { stream = await getUserMedia({ audio: true }); } catch (e) { return { ok: false, error: (e && e.name) || 'Error' }; }
  let peak = 0;
  try {
    const live = stream.getAudioTracks().some((tr) => tr.readyState === 'live');
    if (!live) return { ok: false, error: 'NotReadableError' };
    try {
      const ctx = createContext(); const an = ctx.createAnalyser(); an.fftSize = 512;
      ctx.createMediaStreamSource(stream).connect(an);
      const buf = new Uint8Array(an.fftSize);
      const until = Date.now() + ms;
      while (Date.now() < until) { an.getByteTimeDomainData(buf); for (const v of buf) peak = Math.max(peak, Math.abs(v - 128) / 128); await new Promise((r) => setTimeout(r, 100)); }
      await ctx.close();
    } catch { /* level is optional */ }
    return { ok: true, peak };
  } finally { stream.getTracks().forEach((tr) => tr.stop()); }
}

export const MIC_FIX = {
  NotAllowedError: 'Kein Zugriff auf das Mikrofon. Erlauben Sie den Mikrofonzugriff für diese Seite in Ihrem Browser und testen Sie erneut.',
  SecurityError: 'Kein Zugriff auf das Mikrofon. Erlauben Sie den Mikrofonzugriff für diese Seite in Ihrem Browser und testen Sie erneut.',
  NotFoundError: 'Es wurde kein Mikrofon gefunden. Schließen Sie ein Mikrofon oder Headset an und testen Sie erneut.',
  NotReadableError: 'Das Mikrofon wird von einer anderen Anwendung verwendet oder ist nicht bereit. Schließen Sie diese Anwendung und testen Sie erneut.'
};

/* intro blocks (escaped static text only) */
export const AUDIO_CHECK = '<section class="kx-precheck" aria-labelledby="kx-pc-audio"><h2 id="kx-pc-audio">Tontest</h2>'
  + '<p>Spielen Sie den Testton ab. Wenn Sie nichts hören: Lautstärke erhöhen, Stummschaltung aufheben, Kopfhörer prüfen oder ein anderes Gerät verwenden.</p>'
  + '<div class="kx-actions"><button class="kx-btn kx-btn-quiet" type="button" data-act="tone-play">Testton abspielen</button></div>'
  + '<label class="kx-consent"><input type="checkbox" id="kx-tone-heard"> Ich habe den Testton gehört.</label>'
  + '<p class="kx-precheck-msg" id="kx-tone-msg" role="status"></p></section>';
export const MIC_CHECK = '<section class="kx-precheck" aria-labelledby="kx-pc-mic"><h2 id="kx-pc-mic">Mikrofontest</h2>'
  + '<p>Für dieses Modul brauchen Sie ein funktionierendes Mikrofon. Testen Sie es vor dem Start.</p>'
  + '<div class="kx-actions"><button class="kx-btn kx-btn-quiet" type="button" data-act="mic-test">Mikrofon testen</button></div>'
  + '<p class="kx-precheck-msg" id="kx-mic-msg" role="status"></p></section>';

/* ENGINE §10 connection quality: time a 1 MiB download once per attempt (Hören), on top of the RTT already sampled.
   Never blocks. Skipped when the browser asks to save data. Resolves to { state, mbps? }:
   'ok' | 'slow' (below SLOW_MBPS) | 'failed' | 'timeout' | 'skipped'. */
export const SLOW_MBPS = 2;
export const DOWNLOAD_TIMEOUT_MS = 20_000;
export async function measureDownload({ fetchImpl, url, now = () => performance.now(), saveData = false, timeoutMs = DOWNLOAD_TIMEOUT_MS, expectBytes = 1024 * 1024 } = {}) {
  if (saveData) return { state: 'skipped' };
  const ctl = typeof AbortController === 'function' ? new AbortController() : null;
  const timer = setTimeout(() => ctl && ctl.abort(), timeoutMs);
  const t0 = now();
  try {
    const res = await fetchImpl(url, { credentials: 'include', cache: 'no-store', signal: ctl && ctl.signal });
    if (!res.ok) return { state: 'failed' };
    const bytes = (await res.arrayBuffer()).byteLength;
    if (bytes < expectBytes * 0.9) return { state: 'failed' };
    const secs = Math.max((now() - t0) / 1000, 0.001);
    const mbps = Math.round(((bytes * 8) / 1e6 / secs) * 10) / 10;
    return { state: mbps < SLOW_MBPS ? 'slow' : 'ok', mbps };
  } catch (e) {
    return { state: e && e.name === 'AbortError' ? 'timeout' : 'failed' };
  } finally { clearTimeout(timer); }
}
export function downloadNote(r) {
  switch (r && r.state) {
    case 'ok': return `Verbindung geprüft: etwa ${String(r.mbps).replace('.', ',')} Mbit/s. Die Prüftöne werden zügig geladen.`;
    case 'slow': return `Ihre Verbindung ist langsam (etwa ${String(r.mbps).replace('.', ',')} Mbit/s). Das Laden der Prüftöne kann länger dauern; die Hörzeit beginnt erst danach. Eine stabilere Verbindung (z. B. WLAN) wird empfohlen.`;
    case 'timeout': return 'Der Verbindungstest hat zu lange gedauert. Das Laden der Prüftöne kann länger dauern; die Hörzeit beginnt erst danach. Wechseln Sie wenn möglich in ein stabileres Netz.';
    case 'failed': return 'Der Verbindungstest war nicht möglich. Sie können trotzdem beginnen; die Prüftöne werden vor dem Start vollständig geladen.';
    case 'skipped': return 'Datensparmodus aktiv: Der Verbindungstest wurde übersprungen.';
    default: return '';
  }
}
export const CONNECTION_CHECK = '<p class="kx-precheck-msg" id="kx-conn-msg" role="status">Verbindung wird geprüft …</p>';
