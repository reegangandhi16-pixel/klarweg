/* ============================================================
   _dev-mocks.js — DEV ONLY. Not deployed, not referenced by any
   shipped page.

   A small in-memory stand-in for the D1 and R2 bindings so the real
   Worker modules can be exercised end-to-end in a browser without
   Cloudflare credentials. It understands exactly the SQL the Worker
   issues — it is a test double, not a database.
   ============================================================ */

function likeToRegex(pattern, escape) {
  let out = '', i = 0;
  while (i < pattern.length) {
    const c = pattern[i];
    if (escape && c === escape) { out += pattern[i + 1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); i += 2; continue; }
    if (c === '%') out += '[\\s\\S]*';
    else if (c === '_') out += '[\\s\\S]';
    else out += c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    i++;
  }
  return new RegExp('^' + out + '$', 'i');
}

export function makeD1(sectionRefs) {
  const db = {
    section_refs: new Map(sectionRefs.map(r => [r.ref, r])),
    reports: [],
    admin_sessions: new Map(),
    rate_counters: new Map()          // key: bucket|window_end
  };

  function exec(sql, a) {
    const s = sql.replace(/\s+/g, ' ').trim();

    /* ---- section_refs ---- */
    if (/^SELECT ref, level.*FROM section_refs WHERE ref = \?$/i.test(s)) {
      return { rows: [db.section_refs.get(a[0])].filter(Boolean) };
    }

    /* ---- rate_counters ---- */
    if (/^INSERT INTO rate_counters/i.test(s)) {
      const k = a[0] + '|' + a[1];
      const hits = (db.rate_counters.get(k) || 0) + 1;
      db.rate_counters.set(k, hits);
      return { rows: [{ hits }] };
    }
    if (/^SELECT hits FROM rate_counters/i.test(s)) {
      const k = a[0] + '|' + a[1];
      return { rows: db.rate_counters.has(k) ? [{ hits: db.rate_counters.get(k) }] : [] };
    }
    if (/^DELETE FROM rate_counters/i.test(s)) {
      [...db.rate_counters.keys()].forEach(k => { if (Number(k.split('|')[1]) < a[0]) db.rate_counters.delete(k); });
      return { rows: [] };
    }

    /* ---- admin_sessions ---- */
    if (/^INSERT INTO admin_sessions/i.test(s)) {
      db.admin_sessions.set(a[0], { admin_id: a[1], created_at: a[2], expires_at: a[3] });
      return { rows: [] };
    }
    if (/^SELECT admin_id, expires_at FROM admin_sessions WHERE token_hash = \?$/i.test(s)) {
      const r = db.admin_sessions.get(a[0]);
      return { rows: r ? [r] : [] };
    }
    if (/^DELETE FROM admin_sessions WHERE token_hash = \?$/i.test(s)) {
      db.admin_sessions.delete(a[0]);
      return { rows: [] };
    }
    if (/^DELETE FROM admin_sessions WHERE expires_at/i.test(s)) {
      [...db.admin_sessions.entries()].forEach(([k, v]) => { if (v.expires_at < a[0]) db.admin_sessions.delete(k); });
      return { rows: [] };
    }

    /* ---- reports: dedupe probe ---- */
    if (/^SELECT id FROM reports WHERE dup_hash = \? AND reporter_hash = \? AND created_at > \?/i.test(s)) {
      const hit = db.reports.find(r => r.dup_hash === a[0] && r.reporter_hash === a[1] && r.created_at > a[2]);
      return { rows: hit ? [{ id: hit.id }] : [] };
    }

    /* ---- reports: insert ---- */
    if (/^INSERT INTO reports/i.test(s)) {
      const cols = s.slice(s.indexOf('(') + 1, s.indexOf(')')).split(',').map(x => x.trim());
      const row = { status: 'new', admin_notes: null, updated_at: null, updated_by: null };
      cols.forEach((c, i) => { row[c] = a[i]; });
      if (!('status' in row) || row.status === undefined) row.status = 'new';
      db.reports.push(row);
      return { rows: [], meta: { changes: 1 } };
    }

    /* ---- reports: detail ---- */
    if (/^SELECT r\.\*, COALESCE\(s\.chapter_title/i.test(s)) {
      const r = db.reports.find(x => x.id === a[0]);
      if (!r) return { rows: [] };
      const sr = db.section_refs.get(r.section_ref) || {};
      return { rows: [{ ...r, chapter_title: sr.chapter_title || r.chapter_id, section_label: sr.section_label || r.section_id }] };
    }
    if (/^SELECT screenshot_key FROM reports WHERE id = \?$/i.test(s)) {
      const r = db.reports.find(x => x.id === a[0]);
      return { rows: r ? [{ screenshot_key: r.screenshot_key }] : [] };
    }

    /* ---- reports: update ---- */
    if (/^UPDATE reports SET /i.test(s)) {
      const setPart = s.slice(s.indexOf('SET ') + 4, s.lastIndexOf(' WHERE '));
      const fields = setPart.split(',').map(x => x.trim().split(' = ')[0]);
      const id = a[a.length - 1];
      const r = db.reports.find(x => x.id === id);
      if (!r) return { rows: [], meta: { changes: 0 } };
      fields.forEach((f, i) => { r[f] = a[i]; });
      return { rows: [], meta: { changes: 1 } };
    }

    /* ---- reports: list ---- */
    if (/^SELECT r\.id, r\.created_at, r\.status/i.test(s)) {
      // The main WHERE follows the join; the dup-count subselect has its own.
      const after = s.indexOf('LEFT JOIN section_refs s ON s.ref = r.section_ref');
      const whereIdx = s.indexOf(' WHERE ', after);
      const orderIdx = s.indexOf(' ORDER BY ');
      const conds = whereIdx > -1 ? s.slice(whereIdx + 7, orderIdx).split(' AND ').map(c => c.trim()).filter(Boolean) : [];
      let bi = 0;
      let rows = db.reports.slice();
      conds.forEach(cond => {
        if (/^r\.status = \?$/.test(cond)) { const v = a[bi++]; rows = rows.filter(r => r.status === v); }
        else if (/^r\.category = \?$/.test(cond)) { const v = a[bi++]; rows = rows.filter(r => r.category === v); }
        else if (/^r\.level = \?$/.test(cond)) { const v = a[bi++]; rows = rows.filter(r => r.level === v); }
        else if (/^r\.chapter_id = \?$/.test(cond)) { const v = a[bi++]; rows = rows.filter(r => r.chapter_id === v); }
        else if (/^r\.created_at < \?$/.test(cond)) { const v = a[bi++]; rows = rows.filter(r => r.created_at < v); }
        else if (/LIKE/.test(cond)) {
          const p = a[bi]; bi += 4;
          const re = likeToRegex(p, '\\');
          rows = rows.filter(r => re.test(r.description) || re.test(r.id) || re.test(r.chapter_id) || re.test(r.section_id));
        } else { throw new Error('mock D1: unhandled condition ' + cond); }
      });
      const limit = a[a.length - 1];
      rows.sort((x, y) => y.created_at - x.created_at);
      return {
        rows: rows.slice(0, limit).map(r => {
          const sr = db.section_refs.get(r.section_ref) || {};
          return {
            id: r.id, created_at: r.created_at, status: r.status, category: r.category,
            level: r.level, chapter_id: r.chapter_id, chapter_no: r.chapter_no,
            section_id: r.section_id, section_ref: r.section_ref, description: r.description,
            has_screenshot: r.screenshot_key ? 1 : 0,
            chapter_title: sr.chapter_title || r.chapter_id,
            section_label: sr.section_label || r.section_id,
            dup_count: db.reports.filter(d => d.dup_hash === r.dup_hash).length
          };
        })
      };
    }

    /* ---- facets ---- */
    if (/GROUP BY/i.test(s)) {
      const group = /GROUP BY r?\.?(\w+)/i.exec(s)[1];
      const counts = new Map();
      db.reports.forEach(r => {
        const k = r[group];
        if (!counts.has(k)) counts.set(k, { n: 0, row: r });
        counts.get(k).n++;
      });
      return {
        rows: [...counts.entries()].map(([k, v]) => {
          const sr = db.section_refs.get(v.row.section_ref) || {};
          return {
            [group]: k, n: v.n,
            level: v.row.level, chapter_id: v.row.chapter_id, chapter_no: v.row.chapter_no,
            chapter_title: sr.chapter_title || v.row.chapter_id
          };
        })
      };
    }

    throw new Error('mock D1: unhandled SQL → ' + s.slice(0, 90));
  }

  return {
    _db: db,
    prepare(sql) {
      return {
        bind(...args) {
          return {
            async first() { const r = exec(sql, args); return r.rows[0] || null; },
            async all() { const r = exec(sql, args); return { results: r.rows }; },
            async run() { return exec(sql, args); }
          };
        },
        async first() { const r = exec(sql, []); return r.rows[0] || null; },
        async all() { const r = exec(sql, []); return { results: r.rows }; },
        async run() { return exec(sql, []); }
      };
    }
  };
}

export function makeR2() {
  const store = new Map();
  return {
    _store: store,
    async put(key, bytes, opts) { store.set(key, { bytes, opts }); },
    async get(key) {
      if (!store.has(key)) return null;
      const o = store.get(key);
      return { body: o.bytes, httpMetadata: (o.opts && o.opts.httpMetadata) || {} };
    }
  };
}

export const ctx = { waitUntil() {} };
