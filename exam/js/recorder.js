/* Speaking upload pipeline (new exam path — NOT the chapter Record & Check).
   Chunks are buffered locally first, hashed (SHA-256), uploaded in order with
   retry, and a turn is completed only when the server confirms every chunk.
   A reload resends exactly the chunks the server is missing. */
export async function sha256Hex(bytes) {
  const d = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export class ChunkQueue {
  constructor({ store, upload, completeTurn, sleep = (ms) => new Promise((r) => setTimeout(r, ms)), maxRetries = 5 }) {
    Object.assign(this, { store, upload, completeTurn, sleep, maxRetries });
  }
  key(t, seq) { return `chunk:${t.item_id}:${t.turn}:${String(seq).padStart(4, '0')}`; }
  async add(t, seq, bytes, mime) {
    const u8 = new Uint8Array(bytes);
    await this.store.set(this.key(t, seq), { ...t, seq, mime, sha256: await sha256Hex(u8), bytes: u8 });
  }
  async pending(t) { return (await this.store.keys(`chunk:${t.item_id}:${t.turn}:`)).sort(); }
  /* serverHas: Set of seqs already confirmed (from /sprechen/status) */
  async drain(t, serverHas = new Set()) {
    for (const k of await this.pending(t)) {
      const c = await this.store.get(k);
      if (serverHas.has(c.seq)) { await this.store.del(k); continue; }
      for (let i = 0; ; i++) {
        try {
          await this.upload({ item_id: c.item_id, turn: c.turn, seq: String(c.seq), sha256: c.sha256 }, c.bytes, c.mime);
          await this.store.del(k);
          break;
        } catch (e) {
          if (e && ['checksum_mismatch', 'chunk_conflict', 'turn_closed', 'upload_window_closed', 'consent_required', 'recording_quota_exceeded'].includes(e.code)) throw e;
          if (i >= this.maxRetries) throw e;
          await this.sleep(500 * 2 ** i);
        }
      }
    }
  }
  /* Background upload while recording: drains run one at a time. */
  kick(t) {
    this.chain = (this.chain || Promise.resolve()).then(() => this.drain(t)).catch((e) => { this.lastError = e; });
    return this.chain;
  }
  async finish(t, chunks, durationMs) {
    if (this.chain) await this.chain;
    await this.drain(t);
    return this.completeTurn({ item_id: t.item_id, turn: t.turn, chunks, duration_ms: durationMs });
  }
}

/* Browser-only: MediaRecorder → 1 s chunks → ChunkQueue. */
export class TurnRecorder {
  constructor({ stream, queue, turn, mimeType }) { Object.assign(this, { stream, queue, turn, mimeType }); this.seq = 0; this.startedAt = 0; this.writes = []; }
  start() {
    this.rec = new MediaRecorder(this.stream, this.mimeType ? { mimeType: this.mimeType } : undefined);
    this.rec.ondataavailable = (e) => { if (e.data && e.data.size) { const seq = this.seq++; this.writes.push(e.data.arrayBuffer().then((b) => this.queue.add(this.turn, seq, b, (this.rec.mimeType || 'audio/webm').split(';')[0])).then(() => { this.queue.kick(this.turn); })); } };
    this.startedAt = performance.now();
    this.rec.start(1000);
  }
  async stop() {
    await new Promise((r) => { this.rec.onstop = r; this.rec.stop(); });
    await Promise.all(this.writes);
    return { chunks: this.seq, duration_ms: Math.round(performance.now() - this.startedAt) };
  }
}
