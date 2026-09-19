/* admin.js — the protected admin API.

   Every route here passes requireAdmin() first (deny by default), mutations
   additionally require a matching CSRF header, and every response is
   no-store. None of this code ships to the learner bundle. */
import { json } from './cors.js';
import { requireAdmin, checkCsrf, login, logout, CSRF_COOKIE, parseCookies } from './auth.js';

export const STATUSES = new Set(['new', 'reviewing', 'fixed', 'dismissed']);
const CATEGORIES = new Set([
  'content', 'grammar', 'vocabulary', 'exercise', 'audio',
  'reading_listening', 'display', 'technical', 'other'
]);
const LEVELS = new Set(['a1', 'a2', 'b1', 'b2', 'c1', 'c2']);
const PAGE_SIZE = 25;
const MAX_NOTE = 4000;

const SAFE_ID = /^KW-[0-9A-HJ-NP-TV-Z]{6}$/;

function withCookies(res, cookies) {
  const out = new Response(res.body, res);
  (cookies || []).forEach(c => out.headers.append('Set-Cookie', c));
  return out;
}

export async function handleAdmin(env, req, url, ctx) {
  const path = url.pathname.replace(/\/+$/, '');
  const method = req.method;

  /* ---------- unauthenticated: login only ---------- */
  if (path === '/api/admin/login' && method === 'POST') {
    let body = {};
    try { body = await req.json(); } catch (e) { body = {}; }
    const r = await login(env, req, body && body.passphrase);
    if (!r.ok) {
      const status = r.code === 'rate_limited' ? 429 : r.code === 'not_configured' ? 503 : 401;
      const headers = r.retryAfter ? { 'Retry-After': String(r.retryAfter) } : {};
      // 'invalid' is deliberately vague: no hint about which part was wrong.
      return json({ error: r.code === 'invalid' ? 'invalid_credentials' : r.code }, { status, headers });
    }
    return withCookies(json({ ok: true, csrf: r.csrf }), r.cookies);
  }

  if (path === '/api/admin/logout' && method === 'POST') {
    const cookies = await logout(env, req);
    return withCookies(json({ ok: true }), cookies);
  }

  /* ---------- everything below requires a session ---------- */
  const guard = await requireAdmin(env, req);
  if (guard.response) return guard.response;

  if (path === '/api/admin/me' && method === 'GET') {
    return json({ ok: true, admin: guard.session.adminId, csrf: parseCookies(req)[CSRF_COOKIE] || null });
  }

  if (path === '/api/admin/facets' && method === 'GET') {
    const levels = await env.DB.prepare(
      'SELECT level, COUNT(*) AS n FROM reports GROUP BY level ORDER BY level'
    ).all();
    const chapters = await env.DB.prepare(
      'SELECT r.level, r.chapter_id, r.chapter_no, COALESCE(s.chapter_title, r.chapter_id) AS chapter_title, ' +
      'COUNT(*) AS n FROM reports r LEFT JOIN section_refs s ON s.ref = r.section_ref ' +
      'GROUP BY r.chapter_id ORDER BY r.level, r.chapter_no'
    ).all();
    const statuses = await env.DB.prepare(
      'SELECT status, COUNT(*) AS n FROM reports GROUP BY status'
    ).all();
    const categories = await env.DB.prepare(
      'SELECT category, COUNT(*) AS n FROM reports GROUP BY category'
    ).all();
    return json({
      levels: levels.results || [], chapters: chapters.results || [],
      statuses: statuses.results || [], categories: categories.results || []
    });
  }

  if (path === '/api/admin/reports' && method === 'GET') {
    const p = url.searchParams;
    const where = [];
    const bind = [];

    const status = p.get('status');
    if (status && STATUSES.has(status)) { where.push('r.status = ?'); bind.push(status); }

    const category = p.get('category');
    if (category && CATEGORIES.has(category)) { where.push('r.category = ?'); bind.push(category); }

    const level = p.get('level');
    if (level && LEVELS.has(level)) { where.push('r.level = ?'); bind.push(level); }

    const chapter = p.get('chapter');
    if (chapter && /^[a-z0-9-]{1,64}$/.test(chapter)) { where.push('r.chapter_id = ?'); bind.push(chapter); }

    const q = (p.get('q') || '').trim().slice(0, 80);
    if (q) {
      where.push("(r.description LIKE ? ESCAPE '\\' OR r.id LIKE ? ESCAPE '\\' " +
        "OR r.chapter_id LIKE ? ESCAPE '\\' OR r.section_id LIKE ? ESCAPE '\\')");
      const like = '%' + q.replace(/[%_]/g, m => '\\' + m) + '%';
      bind.push(like, like, like, like);
    }

    // Keyset pagination — newest first, stable across inserts.
    const cursor = Number(p.get('cursor') || 0);
    if (cursor > 0) { where.push('r.created_at < ?'); bind.push(cursor); }

    const sql =
      'SELECT r.id, r.created_at, r.status, r.category, r.level, r.chapter_id, r.chapter_no, ' +
      'r.section_id, r.section_ref, r.description, r.screenshot_key IS NOT NULL AS has_screenshot, ' +
      'COALESCE(s.chapter_title, r.chapter_id) AS chapter_title, ' +
      'COALESCE(s.section_label, r.section_id) AS section_label, ' +
      '(SELECT COUNT(*) FROM reports d WHERE d.dup_hash = r.dup_hash) AS dup_count ' +
      'FROM reports r LEFT JOIN section_refs s ON s.ref = r.section_ref ' +
      (where.length ? 'WHERE ' + where.join(' AND ') + ' ' : '') +
      'ORDER BY r.created_at DESC LIMIT ?';
    bind.push(PAGE_SIZE + 1);

    const res = await env.DB.prepare(sql).bind(...bind).all();
    const rows = res.results || [];
    const more = rows.length > PAGE_SIZE;
    const page = more ? rows.slice(0, PAGE_SIZE) : rows;
    return json({
      reports: page,
      nextCursor: more ? page[page.length - 1].created_at : null
    });
  }

  const detail = path.match(/^\/api\/admin\/reports\/([^/]+)$/);
  if (detail) {
    const id = decodeURIComponent(detail[1]);
    if (!SAFE_ID.test(id)) return json({ error: 'not_found' }, { status: 404 });

    if (method === 'GET') {
      const row = await env.DB.prepare(
        'SELECT r.*, COALESCE(s.chapter_title, r.chapter_id) AS chapter_title, ' +
        'COALESCE(s.section_label, r.section_id) AS section_label ' +
        'FROM reports r LEFT JOIN section_refs s ON s.ref = r.section_ref WHERE r.id = ?'
      ).bind(id).first();
      if (!row) return json({ error: 'not_found' }, { status: 404 });
      // reporter_hash and the raw storage key stay server-side.
      const { reporter_hash, screenshot_key, ...safe } = row;
      safe.has_screenshot = !!screenshot_key;
      safe.open_url = (env.SITE_BASE_URL || '') + '/' + row.page_path + '#sec-' + row.section_id;
      return json({ report: safe });
    }

    if (method === 'PATCH') {
      if (!checkCsrf(req)) return json({ error: 'csrf' }, { status: 403 });
      let body = {};
      try { body = await req.json(); } catch (e) { return json({ error: 'bad_request' }, { status: 400 }); }

      const sets = [];
      const bind = [];
      if (body.status !== undefined) {
        if (!STATUSES.has(body.status)) return json({ error: 'invalid_status' }, { status: 400 });
        sets.push('status = ?'); bind.push(body.status);
      }
      if (body.admin_notes !== undefined) {
        if (typeof body.admin_notes !== 'string') return json({ error: 'bad_request' }, { status: 400 });
        sets.push('admin_notes = ?'); bind.push(body.admin_notes.slice(0, MAX_NOTE));
      }
      if (!sets.length) return json({ error: 'nothing_to_update' }, { status: 400 });

      sets.push('updated_at = ?'); bind.push(Date.now());
      sets.push('updated_by = ?'); bind.push(guard.session.adminId);
      bind.push(id);

      const r = await env.DB.prepare('UPDATE reports SET ' + sets.join(', ') + ' WHERE id = ?')
        .bind(...bind).run();
      const changed = r && r.meta ? r.meta.changes : 1;
      if (!changed) return json({ error: 'not_found' }, { status: 404 });
      return json({ ok: true });
    }

    return json({ error: 'method_not_allowed' }, { status: 405 });
  }

  const shot = path.match(/^\/api\/admin\/reports\/([^/]+)\/screenshot$/);
  if (shot && method === 'GET') {
    const id = decodeURIComponent(shot[1]);
    if (!SAFE_ID.test(id)) return new Response(null, { status: 404 });
    const row = await env.DB.prepare('SELECT screenshot_key FROM reports WHERE id = ?').bind(id).first();
    if (!row || !row.screenshot_key) return new Response(null, { status: 404 });
    const obj = await env.SCREENSHOTS.get(row.screenshot_key);
    if (!obj) return new Response(null, { status: 404 });
    // Streamed through the Worker: the bucket itself is never public.
    return new Response(obj.body, {
      headers: {
        'Content-Type': (obj.httpMetadata && obj.httpMetadata.contentType) || 'application/octet-stream',
        'Content-Disposition': 'inline; filename="' + id + '"',
        'Cache-Control': 'no-store, private',
        'X-Content-Type-Options': 'nosniff',
        'Content-Security-Policy': "sandbox; default-src 'none'",
        'Referrer-Policy': 'no-referrer'
      }
    });
  }

  return json({ error: 'not_found' }, { status: 404 });
}
