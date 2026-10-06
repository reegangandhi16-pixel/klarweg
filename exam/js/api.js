/* Exam API client (/exam/v1 via klarweg-access). Every mutating call carries
   a request id that is REUSED on network retry, so the server applies it once
   and replays its stored answer. Errors surface as ExamApiError(code). */
import { randomId } from './ids.js';

export class ExamApiError extends Error {
  constructor(status, code, body) { super(code); this.status = status; this.code = code; this.body = body || {}; }
}

export function createApi({ base, fetchImpl = (...a) => fetch(...a), clock, retries = 3, backoffMs = 400, sleep = (ms) => new Promise((r) => setTimeout(r, ms)) }) {
  async function once(method, path, { body, raw, contentType, keepalive } = {}) {
    const init = { method, credentials: 'include', headers: {} };
    if (keepalive) init.keepalive = true;   // survives page unload (Hören interruption report)
    if (raw) { init.body = raw; init.headers['content-type'] = contentType; }
    else if (body !== undefined) { init.body = JSON.stringify(body); init.headers['content-type'] = 'application/json'; }
    const sent = Date.now();
    const res = await fetchImpl(base + path, init);
    const received = Date.now();
    let json = null;
    try { json = await res.json(); } catch { /* non-JSON */ }
    if (clock && json && Number.isFinite(json.server_now)) clock.sample(sent, received, json.server_now);
    if (!res.ok) throw new ExamApiError(res.status, (json && json.error) || 'http_' + res.status, json);
    return json;
  }
  async function call(method, path, opts = {}) {
    let last;
    for (let i = 0; i <= retries; i++) {
      try { return await once(method, path, opts); } catch (e) {
        last = e;
        const transient = !(e instanceof ExamApiError) || e.status >= 500 || e.status === 429;
        if (!transient || i === retries) throw e;
        await sleep(backoffMs * 2 ** i);
      }
    }
    throw last;
  }
  const att = (id, p = '') => `/exam/v1/attempts/${id}${p}`;
  const rq = (body = {}) => ({ request_id: body.request_id || randomId('rq'), ...body });
  return {
    call,
    availability: () => call('GET', '/exam/v1/availability'),
    createAttempt: (b) => call('POST', '/exam/v1/attempts', { body: rq(b) }),
    getAttempt: (id) => call('GET', att(id)),
    lease: (id, deviceId, takeover = false) => call('POST', att(id, '/lease'), { body: { device_id: deviceId, takeover } }),
    heartbeat: (id, leaseId) => call('POST', att(id, '/heartbeat'), { body: { lease_id: leaseId } }),
    start: (id, leaseId, module) => call('POST', att(id, `/modules/${module}/start`), { body: rq({ lease_id: leaseId }) }),
    pkg: (id, leaseId, module) => call('GET', att(id, `/modules/${module}/package?lease_id=${encodeURIComponent(leaseId)}`)),
    answers: (id, leaseId, module) => call('GET', att(id, `/modules/${module}/answers?lease_id=${encodeURIComponent(leaseId)}`)),
    save: (id, leaseId, module, answers, requestId) => call('POST', att(id, `/modules/${module}/answers`), { body: rq({ lease_id: leaseId, answers, request_id: requestId }) }),
    submit: (id, leaseId, module) => call('POST', att(id, `/modules/${module}/submit`), { body: rq({ lease_id: leaseId }) }),
    hoerenEvent: (id, leaseId, ev, { keepalive = false } = {}) => keepalive
      ? once('POST', att(id, '/hoeren/events'), { body: rq({ lease_id: leaseId, ...ev }), keepalive: true })
      : call('POST', att(id, '/hoeren/events'), { body: rq({ lease_id: leaseId, ...ev }) }),
    media: (id, leaseId, assetId) => call('POST', att(id, '/media'), { body: { lease_id: leaseId, asset_id: assetId } }),
    consent: (id, leaseId, version) => call('POST', att(id, '/sprechen/consent'), { body: rq({ lease_id: leaseId, granted: true, version }) }),
    chunk: (id, leaseId, q, bytes, mime) => call('POST', att(id, `/sprechen/chunks?${new URLSearchParams({ lease_id: leaseId, ...q })}`), { raw: bytes, contentType: mime }),
    turn: (id, leaseId, b) => call('POST', att(id, '/sprechen/turns'), { body: rq({ lease_id: leaseId, ...b }) }),
    speakingStatus: (id, leaseId) => call('GET', att(id, `/sprechen/status?lease_id=${encodeURIComponent(leaseId)}`)),
    complete: (id, leaseId) => call('POST', att(id, '/complete'), { body: rq({ lease_id: leaseId }) }),
    result: (id) => call('GET', att(id, '/result')),
    mediaBytes: async (url) => {
      const res = await fetchImpl(base + url, { credentials: 'omit' });
      if (!res.ok) throw new ExamApiError(res.status, 'media_' + res.status);
      return res.arrayBuffer();
    }
  };
}
