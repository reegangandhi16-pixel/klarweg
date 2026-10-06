/* Autosave queue. Each item has a strictly increasing seq (persisted locally
   and seeded from the server on recovery); the latest value per item is sent
   in batches. A failed batch is retried with the SAME request id. The server
   keeps only the highest seq, so reordering or duplicates are harmless. */
import { randomId } from './ids.js';

export class Autosave {
  constructor({ send, store, key, debounceMs = 800, onState = () => {}, onFatal = () => {}, setTimer = (fn, ms) => setTimeout(fn, ms), clearTimer = (t) => clearTimeout(t) }) {
    Object.assign(this, { send, store, key, debounceMs, onState, onFatal, setTimer, clearTimer });
    this.seq = {}; this.pending = {}; this.inflight = null; this.timer = null; this.state = 'saved';
  }
  async load(serverAnswers = []) {
    const saved = (await this.store.get(this.key)) || { seq: {}, pending: {} };
    this.seq = saved.seq || {};
    for (const a of serverAnswers) this.seq[a.item_id] = Math.max(this.seq[a.item_id] || 0, a.seq);
    this.pending = saved.pending || {};
    if (Object.keys(this.pending).length) this.schedule(0);
  }
  async persist() { await this.store.set(this.key, { seq: this.seq, pending: this.pending }); }
  async set(itemId, value) {
    const seq = (this.seq[itemId] || 0) + 1;
    this.seq[itemId] = seq;
    this.pending[itemId] = { item_id: itemId, value, seq, client_ts: Date.now() };
    await this.persist();
    this.setState('pending');
    this.schedule(this.debounceMs);
  }
  schedule(ms) { if (this.timer) this.clearTimer(this.timer); this.timer = this.setTimer(() => { this.timer = null; this.flush().catch(() => this.setState('offline')); }, ms); }
  setState(s) { if (s !== this.state) { this.state = s; try { this.onState(s); } catch { /* UI callback must not break saving */ } } }
  async flush() {
    if (this.inflight) return this.inflight;
    const batch = Object.values(this.pending).slice(0, 20);
    if (!batch.length) { this.setState('saved'); return; }
    const requestId = randomId('rq');
    this.setState('saving');
    this.inflight = (async () => {
      try {
        const r = await this.send(batch, requestId);
        for (const res of r.results || []) {
          const p = this.pending[res.item_id];
          if (p && p.seq <= res.current_seq) delete this.pending[res.item_id];
          if (res.current_seq > (this.seq[res.item_id] || 0)) this.seq[res.item_id] = res.current_seq;
        }
        await this.persist();
        this.inflight = null;
        if (Object.keys(this.pending).length) return this.flush();
        this.setState('saved');
      } catch (e) {
        this.inflight = null;
        const code = e && e.code;
        if (['lease_superseded', 'lease_expired', 'module_submitted', 'deadline_passed', 'module_not_running'].includes(code)) { this.setState('stopped'); this.onFatal(code); return; }
        this.setState('offline');
        this.schedule(3000);
      }
    })();
    return this.inflight;
  }
  hasPending() { return Object.keys(this.pending).length > 0; }
}
