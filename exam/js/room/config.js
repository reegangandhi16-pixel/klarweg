/* When the exam room may load (pure; tested in Node).

   Stage 1 is OFF in production until the owner approves it: ROOM_PRODUCTION stays false in this PR.
   Review/preview: on localhost and *.pages.dev preview hosts, `?room=on` enables it for that tab.
   The learner can always switch to the classic view (stored per device); a stored "classic" wins. */

export const ROOM_PRODUCTION = false;
export const ROOM_BASE = '/exam-room/';
const PREVIEW_HOST = /^(localhost|127\.0\.0\.1|\[::1\]|[a-z0-9-]+\.klarweg-site\.pages\.dev)$/;
export const VIEW_KEY = 'kx-sprechen-view';

export const isPreviewHost = (hostname) => PREVIEW_HOST.test(hostname);

export function roomWanted({ hostname = '', search = '', stored = null, production = ROOM_PRODUCTION } = {}) {
  if (stored === 'classic') return false;
  if (production) return true;
  if (!PREVIEW_HOST.test(hostname)) return false;
  return new URLSearchParams(search).get('room') === 'on' || stored === 'room';
}

/** Environment checks before any download: WebGL and module support; reduced data on Save-Data. */
export function roomCapable({ webgl = false, saveData = false } = {}) {
  if (!webgl) return { ok: false, reason: 'no_webgl' };
  if (saveData) return { ok: false, reason: 'save_data' };
  return { ok: true };
}
