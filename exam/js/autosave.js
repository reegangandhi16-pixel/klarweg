/* Autosave queue. Each item has a strictly increasing seq (persisted locally
   and seeded from the server on recovery); the latest value per item is sent
   in batches. A failed batch is retried with the SAME request id. The server
   keeps only the highest seq, so reordering or duplicates are harmless.
   The server validates a whole batch first and refuses it as a whole, naming
   the offending item in the error body's `message` for item-level refusals.
   Such a refusal concerns ONE answer, so only that answer is taken out and the
   rest is sent again (a refused request stores nothing, so nothing is lost or
   replayed):
   - DROP_CODES (e.g. the Sprechen topic choice after the preparation): the
     answer is dropped, the server value stays authoritative and
     onDropped(code, [entry]) lets the UI show it again;
   - REJECT_CODES (the server will never accept this value): the answer is
     held back in `rejected` (persisted, reported once via onRejected, never
     sent again unless the learner changes the item);
   - a refusal that names no item is isolated by sending one answer at a time.
   Only the exact seq refused is taken out; a newer change stays pending.
   Every other error (network, 5xx, 429, part_not_open, unknown codes) retries
   the whole batch as before — nothing is guessed at or treated as saved. */
import { randomId } from './ids.js';

export const DROP_CODES = ['topic_locked'];
export const REJECT_CODES = ['item_is_example', 'item_not_in_part', 'invalid_seq', 'invalid_value', 'invalid_option', 'not_answerable', 'text_too_long', 'unknown_item'];

export class Autosave {
  constructor({ send, store, key, debounceMs = 800, onState = () => {}, onFatal = () => {}, onDropped = () => {}, onRejected = () => {}, setTimer = (fn, ms) => setTimeout(fn, ms), clearTimer = (t) => clearTimeout(t) }) {
    Object.assign(this, { send, store, key, debounceMs, onState, onFatal, onDropped, onRejected, setTimer, clearTimer });
    this.seq = {}; this.pending = {}; this.rejected = {}; this.isolate = false; this.inflight = null; this.timer = null; this.state = 'saved';
  }
  async load(serverAnswers = []) {
    const saved = (await this.store.get(this.key)) || { seq: {}, pending: {} };
    this.seq = saved.seq || {};
    for (const a of serverAnswers) this.seq[a.item_id] = Math.max(this.seq[a.item_id] || 0, a.seq);
    this.pending = saved.pending || {};
    this.rejected = saved.rejected || {};
    if (Object.keys(this.pending).length) this.schedule(0);
  }
  async persist() { await this.store.set(this.key, { seq: this.seq, pending: this.pending, rejected: this.rejected }); }
  async set(itemId, value) {
    const seq = (this.seq[itemId] || 0) + 1;
    this.seq[itemId] = seq;
    delete this.rejected[itemId];   // a new change is a new answer: it is sent normally
    this.pending[itemId] = { item_id: itemId, value, seq, client_ts: Date.now() };
    await this.persist();
    this.setState('pending');
    this.schedule(this.debounceMs);
  }
  schedule(ms) { if (this.timer) this.clearTimer(this.timer); this.timer = this.setTimer(() => { this.timer = null; this.flush().catch(() => this.setState('offline')); }, ms); }
  setState(s) { if (s !== this.state) { this.state = s; try { this.onState(s); } catch { /* UI callback must not break saving */ } } }
  /* opts.keepalive: a request that survives page unload (pagehide); passed to send() */
  async flush(opts = {}) {
    if (this.inflight) return this.inflight;
    const batch = Object.values(this.pending).slice(0, this.isolate ? 1 : 20);
    if (!batch.length) { this.setState('saved'); return; }
    const requestId = randomId('rq');
    this.setState('saving');
    this.inflight = (async () => {
      try {
        const r = await this.send(batch, requestId, opts);
        for (const res of r.results || []) {
          const p = this.pending[res.item_id];
          if (p && p.seq <= res.current_seq) delete this.pending[res.item_id];
          if (res.current_seq > (this.seq[res.item_id] || 0)) this.seq[res.item_id] = res.current_seq;
        }
        await this.persist();
        this.inflight = null;
        if (Object.keys(this.pending).length) return this.flush();
        this.isolate = false;
        this.setState('saved');
      } catch (e) {
        this.inflight = null;
        const code = e && e.code;
        if (['lease_superseded', 'lease_expired', 'module_submitted', 'deadline_passed', 'module_not_running'].includes(code)) { this.setState('stopped'); this.onFatal(code); return; }
        // signed out (session expired, ENGINE §8): retrying cannot help; the queued answers stay persisted on this device
        // and are sent after the learner signs in again and resumes
        if (code === 'auth_required' || code === 'exam_access_required') { this.setState('stopped'); this.onFatal(code); return; }
        if (DROP_CODES.includes(code) || REJECT_CODES.includes(code)) {
          // the one answer refused: named by the server, or the only one sent; otherwise isolate it (one per request)
          const named = e.body && typeof e.body.message === 'string' ? batch.find((b) => b.item_id === e.body.message) : null;
          const target = named || (batch.length === 1 ? batch[0] : null);
          if (!target) { this.isolate = true; return this.flush(); }
          this.isolate = false;
          const cur = this.pending[target.item_id];
          if (cur && cur.seq === target.seq) {   // a newer change made meanwhile stays pending and is sent instead
            delete this.pending[target.item_id];
            if (!DROP_CODES.includes(code)) this.rejected[target.item_id] = { ...target, code };
            await this.persist();
            try { if (DROP_CODES.includes(code)) this.onDropped(code, [target]); else this.onRejected(code, target); } catch { /* UI callback must not break saving */ }
          }
          if (Object.keys(this.pending).length) return this.flush();
          this.setState('saved');
          return;
        }
        this.setState('offline');
        this.schedule(3000);
      }
    })();
    return this.inflight;
  }
  hasPending() { return Object.keys(this.pending).length > 0; }
}
