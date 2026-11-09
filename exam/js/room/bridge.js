/* Bridge between the Sprechen wiring (main.js) and the exam room (pure; tested in Node).

   The driver starts at once; the room loads in the background. Until it is ready, the bridge keeps what the
   room will need (copies of prompt clips, <audio> elements, the current phase, an ongoing recording) and
   replays it on ready(). Every call is wrapped: nothing a room does can throw into the Sprechen driver.
   ready(null) or destroy() switches the bridge off for good (the classic view simply continues). */

export function createRoomBridge({ log = () => {} } = {}) {
  let room = null, off = false;
  const clips = new Map(), audios = new Set();
  let phase = null, rec = null;
  const safe = (name, fn) => { try { fn(); } catch (e) { log('room_bridge_error', { name, error: e && e.message }); } };
  const copy = (b) => (b instanceof ArrayBuffer ? b.slice(0) : ArrayBuffer.isView(b) ? b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength) : null);

  return {
    get active() { return !off; },
    get room() { return room; },
    prepare(assetId, bytes) {
      safe('prepare', () => {
        if (off) return;
        const c = copy(bytes); if (!c) return;
        if (room) room.prepare(assetId, c); else clips.set(assetId, c);
      });
    },
    attachAudio(a) { safe('attach', () => { if (off) return; if (room) room.attachAudio(a); else audios.add(a); }); },
    phase(id) { safe('phase', () => { if (off) return; phase = id; if (room) room.phase(id); }); },
    recording(on, o = {}) { safe('recording', () => { if (off) return; rec = on ? o : null; if (room) room.recording(on, o); }); },
    ready(r) {
      safe('ready', () => {
        if (off) { if (r) r.destroy(); return; }
        if (!r) { off = true; clips.clear(); audios.clear(); return; }
        room = r;
        for (const [id, b] of clips) r.prepare(id, b);
        for (const a of audios) r.attachAudio(a);
        clips.clear(); audios.clear();
        if (phase) r.phase(phase);
        if (rec) r.recording(true, rec);
      });
    },
    destroy() { safe('destroy', () => { off = true; clips.clear(); audios.clear(); if (room) room.destroy(); room = null; }); },
  };
}
