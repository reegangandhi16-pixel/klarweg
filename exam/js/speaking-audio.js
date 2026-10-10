/* Sprechen audio playback (partner presentation, turn prompts). Dependencies are
   injected, so the rules are testable in Node with a fake clock and fake audio.

   - preload(assetId): fetches the media once (cached); playback waits for it only
     until the phase ends.
   - play(assetId, { offsetMs, endsAt }): returns a status, never a silent success:
       played   the audio ran to its end
       stopped  it was stopped at the scheduled phase boundary (endsAt)
       missed   it could not start before endsAt (not loaded in time, no user
                gesture in time, or the scheduled offset is already past the end)
       error    loading or playback failed
     offsetMs may be a function: it is evaluated right before playback starts
     (after loading and after a user gesture), so a late start never replays
     audio that is already in the past.
   - A browser autoplay refusal (NotAllowedError, e.g. after a reload without a
     click) is not playback: requestGesture(endsAt) asks the user for a click
     ("Audio starten") and the play is retried once. */

export const STATUS = Object.freeze({ PLAYED: 'played', STOPPED: 'stopped', MISSED: 'missed', ERROR: 'error' });
const TIMEOUT = Symbol('timeout');

export function createSpeakingAudio({ fetchAsset, makeAudio, makeUrl, now, sleep, requestGesture, pollMs = 100 }) {
  const cache = new Map();

  function preload(assetId) {
    if (!cache.has(assetId)) {
      const p = fetchAsset(assetId).then(({ bytes, mime }) => makeUrl(bytes, mime));
      p.catch(() => cache.delete(assetId));   // a failed load may be retried later
      cache.set(assetId, p);
    }
    return cache.get(assetId);
  }

  /* Resolves with the promise's value as soon as it settles, or TIMEOUT once now() >= deadline. */
  async function until(promise, deadline) {
    let settled = false, value, error, failed = false;
    const watched = promise.then((v) => { settled = true; value = v; }, (e) => { settled = true; failed = true; error = e; });
    while (!settled) {
      if (now() >= deadline) return TIMEOUT;
      await Promise.race([watched, sleep(Math.max(1, Math.min(pollMs, deadline - now())))]);
    }
    if (failed) throw error;
    return value;
  }

  async function play(assetId, { offsetMs = 0, endsAt = Infinity } = {}) {
    let url;
    try { url = await until(preload(assetId), endsAt); }
    catch (e) { return { status: STATUS.ERROR, reason: 'load_failed', detail: (e && (e.code || e.name)) || 'error' }; }
    if (url === TIMEOUT) return { status: STATUS.MISSED, reason: 'not_loaded_in_time' };

    const audio = makeAudio();
    if (audio.dataset) audio.dataset.asset = assetId;
    let ended = false, mediaError = false;
    audio.onended = () => { ended = true; };
    audio.onerror = () => { mediaError = true; };
    audio.src = url;
    const offsetFn = typeof offsetMs === 'function' ? offsetMs : () => offsetMs;

    const start = async () => {
      const off = offsetFn();
      if (off == null || now() >= endsAt) return 'past';
      if (off > 0) { try { audio.currentTime = off / 1000; } catch { /* seeking unavailable: start of file */ } }
      await audio.play();
      return 'started';
    };

    let started;
    try { started = await start(); }
    catch (e) {
      if (!e || e.name !== 'NotAllowedError') return { status: STATUS.ERROR, reason: 'play_failed', detail: (e && e.name) || 'error' };
      const g = await requestGesture(endsAt);   // 'clicked' | 'timeout' | 'cancelled'
      if (g !== 'clicked') return { status: STATUS.MISSED, reason: g === 'timeout' ? 'no_gesture_in_time' : 'cancelled' };
      try { started = await start(); }
      catch (e2) { return { status: STATUS.ERROR, reason: 'play_failed', detail: (e2 && e2.name) || 'error' }; }
    }
    if (started === 'past') return { status: STATUS.MISSED, reason: 'already_over' };

    for (;;) {
      if (ended) return { status: STATUS.PLAYED };
      if (mediaError) { try { audio.pause(); } catch {} return { status: STATUS.ERROR, reason: 'media_error' }; }
      if (now() >= endsAt) { try { audio.pause(); } catch {} return { status: STATUS.STOPPED }; }
      await sleep(Math.max(1, Math.min(pollMs, endsAt - now())));
    }
  }

  return { preload, play };
}
