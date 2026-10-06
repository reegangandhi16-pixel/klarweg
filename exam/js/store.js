/* Local persistence for recovery (unsent answers, per-item seq, buffered
   recording chunks). IndexedDB in the browser; a Map in tests or when
   IndexedDB is unavailable (private mode) — the server stays the source of
   truth either way, local data only shortens recovery. */
export function memoryStore() {
  const m = new Map();
  return {
    async get(k) { return m.has(k) ? structuredClone(m.get(k)) : undefined; },
    async set(k, v) { m.set(k, structuredClone(v)); },
    async del(k) { m.delete(k); },
    async keys(prefix = '') { return [...m.keys()].filter((k) => k.startsWith(prefix)); }
  };
}

export async function idbStore(name = 'klarweg-exam') {
  if (typeof indexedDB === 'undefined') return memoryStore();
  try {
    const db = await new Promise((resolve, reject) => {
      const r = indexedDB.open(name, 1);
      r.onupgradeneeded = () => r.result.createObjectStore('kv');
      r.onsuccess = () => resolve(r.result);
      r.onerror = () => reject(r.error);
    });
    const tx = (mode, fn) => new Promise((resolve, reject) => {
      const t = db.transaction('kv', mode); const s = t.objectStore('kv'); const req = fn(s);
      t.oncomplete = () => resolve(req && req.result); t.onerror = () => reject(t.error);
    });
    return {
      get: (k) => tx('readonly', (s) => s.get(k)),
      set: (k, v) => tx('readwrite', (s) => s.put(v, k)),
      del: (k) => tx('readwrite', (s) => s.delete(k)),
      keys: async (prefix = '') => ((await tx('readonly', (s) => s.getAllKeys())) || []).filter((k) => String(k).startsWith(prefix))
    };
  } catch { return memoryStore(); }
}
