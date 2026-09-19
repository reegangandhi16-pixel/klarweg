/* reports.js — POST /api/reports, the only learner-facing write path.

   Order of operations is deliberate:
     1. cheap rejections first (method, size, form parse)
     2. section_ref → canonical location from D1 (unknown ref = 400)
     3. field validation
     4. Turnstile (a rejected token never reaches the database)
     5. rate limits (per reporter, then global breaker)
     6. duplicate suppression
     7. screenshot sanitisation (failure downgrades, never blocks)
     8. insert
   Nothing about the location is taken from the browser. */
import { json } from './cors.js';
import { newReportId, reporterHash, dupHash } from './ids.js';
import { resolveRef } from './refs.js';
import { verifyTurnstile } from './turnstile.js';
import { checkReportLimits, sweep } from './ratelimit.js';
import { validateAndSanitise } from './images.js';

export const CATEGORIES = new Set([
  'content', 'grammar', 'vocabulary', 'exercise', 'audio',
  'reading_listening', 'display', 'technical', 'other'
]);

export const MAX_DESCRIPTION = 2000;
const MIN_DESCRIPTION = 10;
const DUP_WINDOW_MS = 24 * 60 * 60 * 1000;
const HARD_BODY_CAP = 3 * 1024 * 1024;   // request cap; image cap is MAX_UPLOAD_BYTES

function clampStr(v, max) {
  return typeof v === 'string' ? v.slice(0, max) : null;
}

/** Claimed client metadata. Untrusted, display-only, deliberately narrow:
 *  anything not on this list is discarded. */
function safeMeta(raw) {
  let m = {};
  try { m = JSON.parse(raw || '{}') || {}; } catch (e) { m = {}; }
  const vp = clampStr(m.viewport, 16);
  return {
    claimed_title: clampStr(m.claimed_title, 200),
    viewport: vp && /^\d{1,5}x\d{1,5}$/.test(vp) ? vp : null,
    dpr: typeof m.dpr === 'number' && m.dpr > 0 && m.dpr < 10 ? Math.round(m.dpr * 100) / 100 : null,
    ua_family: clampStr(m.ua_family, 40),
    prefers_rm: m.prefers_reduced_motion ? 1 : 0
  };
}

export async function createReport(env, req, origin, ctx) {
  const now = Date.now();

  // 1 — refuse an oversized body before reading a single byte of it.
  const declared = Number(req.headers.get('Content-Length') || 0);
  if (declared && declared > HARD_BODY_CAP) {
    return json({ error: 'payload_too_large' }, { status: 413 }, origin);
  }

  let form;
  try {
    form = await req.formData();
  } catch (e) {
    return json({ error: 'bad_request' }, { status: 400 }, origin);
  }

  // 2 — location comes from the database, not the browser.
  const ref = clampStr(form.get('section_ref'), 128);
  const loc = await resolveRef(env, ref);
  if (!loc) return json({ error: 'invalid_section' }, { status: 400 }, origin);

  // 3 — field validation.
  const category = clampStr(form.get('category'), 32);
  if (!category || !CATEGORIES.has(category)) {
    return json({ error: 'invalid_category' }, { status: 400 }, origin);
  }
  const description = (clampStr(form.get('description'), MAX_DESCRIPTION) || '').trim();
  if (description.length < MIN_DESCRIPTION) {
    return json({ error: 'invalid_description' }, { status: 400 }, origin);
  }
  const meta = safeMeta(form.get('meta'));

  // 4 — Turnstile. A present-but-rejected token is refused outright.
  const ip = req.headers.get('CF-Connecting-IP') || '';
  const ts = await verifyTurnstile(env, form.get('cf-turnstile-response'), ip);
  if (!ts.ok) return json({ error: 'verification_failed' }, { status: 403 }, origin);

  // 5 — budgets. The tighter "unverified" budget only applies when Turnstile
  //     IS configured but this submission could not be verified. With no
  //     Turnstile configured at all, everyone gets the normal budget.
  const reporter = await reporterHash(env, req);
  const trusted = ts.verified || ts.reason === 'not_configured';
  const limit = await checkReportLimits(env, reporter, trusted, now);
  if (!limit.ok) {
    const status = limit.code === 'service_busy' ? 503 : 429;
    return json({ error: limit.code }, {
      status, headers: { 'Retry-After': String(limit.retryAfter || 60) }
    }, origin);
  }

  // 6 — duplicate suppression: same reporter, same place, same words, 24h.
  //     A different reporter filing the same thing is an independent
  //     confirmation and is always kept.
  const dup = await dupHash(loc.ref, category, description);
  const existing = await env.DB.prepare(
    'SELECT id FROM reports WHERE dup_hash = ? AND reporter_hash = ? AND created_at > ? LIMIT 1'
  ).bind(dup, reporter, now - DUP_WINDOW_MS).first();
  if (existing) {
    return json({ id: existing.id, duplicate: true }, { status: 200 }, origin);
  }

  const id = newReportId();

  // 7 — optional screenshot. Any problem here downgrades the report to
  //     "no screenshot"; it never costs the learner their report.
  let screenshotKey = null;
  let screenshotStatus = 'none';
  const file = form.get('screenshot');
  if (file && typeof file.arrayBuffer === 'function') {
    const maxBytes = Number(env.MAX_UPLOAD_BYTES || 2097152);
    try {
      if (file.size > maxBytes) {
        screenshotStatus = 'rejected:too_large';
      } else {
        const v = validateAndSanitise(new Uint8Array(await file.arrayBuffer()), maxBytes);
        if (!v.ok) {
          screenshotStatus = 'rejected:' + v.reason;
        } else {
          const d = new Date(now);
          const key = 'reports/' + d.getUTCFullYear() + '/' +
            String(d.getUTCMonth() + 1).padStart(2, '0') + '/' + id + '.' + v.format;
          await env.SCREENSHOTS.put(key, v.bytes, {
            httpMetadata: { contentType: v.contentType, cacheControl: 'no-store' },
            customMetadata: { reportId: id, w: String(v.width), h: String(v.height) }
          });
          screenshotKey = key;
          screenshotStatus = 'stored';
        }
      }
    } catch (e) {
      screenshotStatus = 'rejected:error';
      console.log(JSON.stringify({ svc: 'reports', event: 'screenshot_failed', id }));
    }
  }

  // 8 — insert. Location columns come from `loc`, never from the client.
  //     `status` is omitted so the column DEFAULT 'new' applies.
  await env.DB.prepare(
    'INSERT INTO reports (id, created_at, category, level, chapter_id, chapter_no, ' +
    'section_id, section_ref, page_path, description, claimed_title, viewport, dpr, ua_family, ' +
    'prefers_rm, screenshot_key, dup_hash, reporter_hash) ' +
    'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
  ).bind(
    id, now, category, loc.level, loc.chapter_id, loc.chapter_no,
    loc.section_id, loc.ref, loc.page_path, description,
    meta.claimed_title, meta.viewport, meta.dpr, meta.ua_family, meta.prefers_rm,
    screenshotKey, dup, reporter
  ).run();

  console.log(JSON.stringify({
    svc: 'reports', event: 'created', id,
    level: loc.level, chapter: loc.chapter_id, section: loc.section_id,
    category, verified: ts.verified, screenshot: screenshotStatus
  }));

  if (ctx && ctx.waitUntil) ctx.waitUntil(sweep(env, now));

  return json({ id, duplicate: false, screenshot: screenshotStatus }, { status: 201 }, origin);
}
