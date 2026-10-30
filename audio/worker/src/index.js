/* klarweg-audio — read-only audio origin for https://klarweg.in.

   Serves objects from the private R2 bucket bound as AUDIO, keyed by URL path
   (no leading slash). GET and HEAD only; single byte ranges → 206 so Safari
   can play MP3s; ETag/If-None-Match → 304 (the engine re-validates manifests
   on every page load); CORS for the site origin; Cache-Control by path.
   No secrets, no writes. R2 reads: HEAD/304/416 = head() only; GET = head() + get(). */

const CORS_EXPOSE = 'Content-Length, Content-Range, Accept-Ranges, ETag';

const TYPES = {
  mp3: 'audio/mpeg',
  json: 'application/json; charset=utf-8'
};

/* Hash-named files never change in place → immutable. Fixed-name recordings
   (reading/listening/story/speaking) can be re-recorded under the same name →
   one day. Manifests change when audio is added → five minutes. */
export function cacheControlFor(key) {
  if (/\.json$/i.test(key)) return 'public, max-age=300';
  if (/^(reading|listening|story|speaking)\//.test(key)) return 'public, max-age=86400';
  return 'public, max-age=31536000, immutable';
}

export function contentTypeFor(key) {
  const ext = (key.match(/\.([a-z0-9]+)$/i) || [])[1];
  return (ext && TYPES[ext.toLowerCase()]) || 'application/octet-stream';
}

/* Object key from the request path. Refuses empty keys, "..", "//" and
   control characters; decodes %xx once. */
export function keyFromPath(pathname) {
  let p;
  try { p = decodeURIComponent(pathname); } catch { return null; }
  p = p.replace(/^\/+/, '');
  if (!p || p.length > 512 || /(^|\/)\.\.(\/|$)|\/\/|[\u0000-\u001f\u007f\\]/.test(p)) return null;
  return p;
}

/* Parses a single "bytes=" range against the object size.
   Returns null (no/ignored Range → full 200), {invalid:true} (→ 416),
   or {offset, length}. Multi-range requests are answered with the full body. */
export function parseRange(header, size) {
  if (!header) return null;
  const m = /^\s*bytes\s*=\s*(\d*)\s*-\s*(\d*)\s*$/i.exec(header);
  if (!m) return null;                          // multi-range or other unit → full 200
  const [, a, b] = m;
  if (a === '' && b === '') return { invalid: true };
  if (a === '') {                               // suffix: last n bytes
    const n = Number(b);
    if (n === 0) return { invalid: true };
    const len = Math.min(n, size);
    return { offset: size - len, length: len };
  }
  const start = Number(a);
  if (start >= size) return { invalid: true };
  const end = b === '' ? size - 1 : Math.min(Number(b), size - 1);
  if (end < start) return { invalid: true };
  return { offset: start, length: end - start + 1 };
}

function allowedOrigin(request, env) {
  const origin = request.headers.get('Origin');
  if (!origin) return null;
  const list = String(env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
  return list.includes(origin) ? origin : null;
}

function baseHeaders(request, env) {
  const h = new Headers();
  const origin = allowedOrigin(request, env);
  if (origin) {
    h.set('Access-Control-Allow-Origin', origin);
    h.set('Access-Control-Expose-Headers', CORS_EXPOSE);
  }
  h.set('Vary', 'Origin');
  h.set('X-Content-Type-Options', 'nosniff');
  return h;
}

function objectHeaders(h, key, obj) {
  if (obj.writeHttpMetadata) obj.writeHttpMetadata(h);
  // Bucket metadata is set at upload; the extension mapping is the fallback.
  if (!h.get('Content-Type')) h.set('Content-Type', contentTypeFor(key));
  h.set('Cache-Control', cacheControlFor(key));
  h.set('Accept-Ranges', 'bytes');
  if (obj.httpEtag) h.set('ETag', obj.httpEtag);
  if (obj.uploaded) h.set('Last-Modified', new Date(obj.uploaded).toUTCString());
  return h;
}

function etagMatches(ifNoneMatch, etag) {
  if (!ifNoneMatch || !etag) return false;
  if (ifNoneMatch.trim() === '*') return true;
  const bare = (t) => t.trim().replace(/^W\//, '');
  return ifNoneMatch.split(',').some((t) => bare(t) === bare(etag));
}

export default {
  async fetch(request, env) {
    const method = request.method;
    if (method === 'OPTIONS') {
      const h = baseHeaders(request, env);
      h.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
      h.set('Access-Control-Allow-Headers', 'Range, If-None-Match');
      h.set('Access-Control-Max-Age', '86400');
      return new Response(null, { status: 204, headers: h });
    }
    if (method !== 'GET' && method !== 'HEAD') {
      const h = baseHeaders(request, env);
      h.set('Allow', 'GET, HEAD, OPTIONS');
      return new Response(null, { status: 405, headers: h });
    }

    const key = keyFromPath(new URL(request.url).pathname);
    if (!key) return new Response(null, { status: 404, headers: baseHeaders(request, env) });

    // One metadata read decides 404 / 304 / range validity before any body read.
    const head = await env.AUDIO.head(key);
    if (!head) return new Response(null, { status: 404, headers: baseHeaders(request, env) });

    const h = objectHeaders(baseHeaders(request, env), key, head);
    if (etagMatches(request.headers.get('If-None-Match'), head.httpEtag)) {
      return new Response(null, { status: 304, headers: h });
    }

    const range = parseRange(request.headers.get('Range'), head.size);
    if (range && range.invalid) {
      h.set('Content-Range', `bytes */${head.size}`);
      h.delete('Content-Type');
      return new Response(null, { status: 416, headers: h });
    }

    if (method === 'HEAD') {
      h.set('Content-Length', String(head.size));
      return new Response(null, { status: 200, headers: h });
    }

    if (range) {
      const obj = await env.AUDIO.get(key, { range: { offset: range.offset, length: range.length } });
      if (!obj) return new Response(null, { status: 404, headers: baseHeaders(request, env) });
      h.set('Content-Range', `bytes ${range.offset}-${range.offset + range.length - 1}/${head.size}`);
      h.set('Content-Length', String(range.length));
      return new Response(obj.body, { status: 206, headers: h });
    }

    const obj = await env.AUDIO.get(key);
    if (!obj) return new Response(null, { status: 404, headers: baseHeaders(request, env) });
    h.set('Content-Length', String(head.size));
    return new Response(obj.body, { status: 200, headers: h });
  }
};
