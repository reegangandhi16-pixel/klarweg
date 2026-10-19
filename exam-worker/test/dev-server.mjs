/* LOCAL DEV / BROWSER-TEST SERVER ONLY — never deployed.
   Serves exam/ statically and routes /exam/v1/* into the klarweg-exam Worker
   in-process (in-memory D1 + private R2 with the synthetic release), playing
   the role of the Access proxy. Local test users stand in for signed-in accounts: the default entitled learner, two
   raters and one outsider without any role. The dev-only cookie `kx-dev-as=<alias>` picks one of THESE users (it can
   never name any other user id); authorization is still decided by the exam Worker from the stored roles.
   Usage: node exam-worker/test/dev-server.mjs [port] [s0|p1|p2|…|practice] [--mfa] (practice = every registered practice form;
   --mfa = real rater 2FA screens via an in-process Access Worker)  →  http://127.0.0.1:<port>/exam/  (rater screen: /exam/rater.html)
   Default for the demo: practice (every practice form; each new attempt gets the least-attempted one). Tests default to s0.
   Switching user in the demo: open /exam/dev/as/<alias> (learner, rater1, rater2, outsider); it sets the dev cookie and
   goes to the matching screen. Only these local test users exist. */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import worker from '../src/index.js';
import { makeEnv, grant, role, ROOT, PROXY_SECRET, FORM_DIR, PRACTICE_LIBRARY } from './harness.mjs';
import accessWorker from '../../access/worker/src/index.js';
import { createD1 } from '../../access/worker/test/d1-sqlite.mjs';
import { hashSessionToken } from '../../access/worker/src/sessions.js';

/* mfa: true (opt-in) runs the real klarweg-access Worker in-process for /auth/mfa/* with an in-memory Access D1: every
   local test user gets an Access user + session, and the exam requests carry X-KW-MFA-At from that session exactly as
   the Access proxy attests it. Default (false): the local test users count as verified (OD-19 is then not exercised). */
async function makeAccess(users) {
  const env = { DB: createD1(path.join(ROOT, 'access/worker')), RATE_SALT: 'dev-salt', TOTP_ENC_KEY: Buffer.from(crypto.getRandomValues(new Uint8Array(32))).toString('base64') };
  const tokens = {}, t = Math.floor(Date.now() / 1000);
  for (const [alias, id] of Object.entries(users)) {
    await env.DB.prepare('INSERT INTO users (id, email, name, created_at, updated_at) VALUES (?1, ?2, ?3, ?4, ?4)').bind(id, `${alias}@dev.local`, alias, t).run();
    tokens[alias] = crypto.randomUUID().replace(/-/g, '') + crypto.randomUUID().replace(/-/g, '');
    await env.DB.prepare('INSERT INTO sessions (token_hash, user_id, created_at, expires_at) VALUES (?1, ?2, ?3, ?4)').bind(await hashSessionToken(tokens[alias]), id, t, t + 86400).run();
  }
  const mfaAt = async (alias) => { const r = await env.DB.prepare('SELECT mfa_verified_at FROM sessions WHERE token_hash = ?1').bind(await hashSessionToken(tokens[alias])).first(); return r && r.mfa_verified_at; };
  return { env, tokens, mfaAt };
}

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8' };

/* proxy: true (opt-in; KX_DEV_PROXY=1 for the browser tests) sends /exam/v1/* and /auth/* through the REAL klarweg-access
   Worker in-process: session cookie → findSessionUser → /exam proxy (header allow-list, 512 KiB body cap, X-KW-* strip,
   no-store, set-cookie removal) → service binding → exam Worker. It implies the in-process Access of `mfa`; without mfa
   the local test users' sessions start verified. The browser's Origin is not forwarded (the CSRF guard is covered by the
   Access tests; a same-origin dev page is not a cross-site write). */
export async function startDevServer({ port = 0, user = `usr_${crypto.randomUUID()}`, form = 's0', mfa = false, proxy = process.env.KX_DEV_PROXY === '1' } = {}) {
  const FORMS = { s0: [FORM_DIR], ...Object.fromEntries(PRACTICE_LIBRARY.map((f) => [f.name.toLowerCase(), [f.dir]])), practice: PRACTICE_LIBRARY.map((f) => f.dir) };
  if (!FORMS[form]) throw new Error(`unknown form ${form} (${Object.keys(FORMS).join('|')})`);
  const h = makeEnv({ formDirs: FORMS[form] });
  await grant(h.env, user);
  const users = { learner: user, rater1: `usr_${crypto.randomUUID()}`, rater2: `usr_${crypto.randomUUID()}`, outsider: `usr_${crypto.randomUUID()}` };
  await role(h.env, users.rater1, 'rater'); await role(h.env, users.rater2, 'rater');
  const aliasFor = (req) => { const m = /(?:^|;\s*)kx-dev-as=([a-z0-9]+)/.exec(req.headers.cookie || ''); return (m && users[m[1]]) ? m[1] : 'learner'; };
  const userFor = (req) => users[aliasFor(req)];
  const access = mfa || proxy ? await makeAccess(users) : null;
  if (proxy) {
    Object.assign(access.env, { EXAM_ROUTES: 'on', EXAM_PROXY_SECRET: PROXY_SECRET, EXAM: { fetch: (r) => worker.fetch(r, h.env) } });
    if (!mfa) await access.env.DB.prepare('UPDATE sessions SET mfa_verified_at = ?1').bind(Math.floor(Date.now() / 1000)).run();
  }
  const viaAccess = async (req, url) => {   // the browser request, as the Access Worker would receive it
    const chunks = []; for await (const c of req) chunks.push(c);
    const headers = { cookie: `kw_session=${access.tokens[aliasFor(req)]}`, 'CF-Connecting-IP': '127.0.0.1' };
    for (const k of ['content-type', 'content-length']) if (req.headers[k]) headers[k] = req.headers[k];
    return accessWorker.fetch(new Request('https://klarweg-access.internal' + url.pathname + url.search, { method: req.method, headers, body: ['GET', 'HEAD'].includes(req.method) ? undefined : Buffer.concat(chunks) }), access.env, { waitUntil() {} });
  };
  delete h.env.__clock;                            // real time in the browser
  const server = http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url, 'http://127.0.0.1');
      if (proxy && (url.pathname.startsWith('/exam/v1/') || url.pathname.startsWith('/auth/'))) {
        const r = await viaAccess(req, url);
        const out = Object.fromEntries([...r.headers].filter(([k]) => k !== 'set-cookie'));
        res.writeHead(r.status, out);
        res.end(Buffer.from(await r.arrayBuffer()));
        return;
      }
      if (access && url.pathname.startsWith('/auth/mfa/')) {   // the real Access routes, server-to-server (no Origin)
        const chunks = []; for await (const c of req) chunks.push(c);
        const headers = { cookie: `kw_session=${access.tokens[aliasFor(req)]}` };
        if (req.headers['content-type']) headers['content-type'] = req.headers['content-type'];
        const r = await accessWorker.fetch(new Request('https://klarweg-access.internal' + url.pathname, { method: req.method, headers, body: ['GET', 'HEAD'].includes(req.method) ? undefined : Buffer.concat(chunks) }), access.env, { waitUntil() {} });
        res.writeHead(r.status, { 'content-type': r.headers.get('content-type') || 'application/json', 'cache-control': 'no-store' });
        res.end(Buffer.from(await r.arrayBuffer()));
        return;
      }
      if (url.pathname.startsWith('/exam/v1/')) {
        const chunks = []; for await (const c of req) chunks.push(c);
        // OD-19: with mfa (opt-in) the freshness comes from the in-process Access session; otherwise the local test users count as verified now
        const headers = { 'x-kw-proxy-auth': PROXY_SECRET, 'x-kw-user': userFor(req) };
        const at = access ? await access.mfaAt(aliasFor(req)) : Math.floor(Date.now() / 1000);
        if (at) headers['x-kw-mfa-at'] = String(at);
        if (req.headers['content-type']) headers['content-type'] = req.headers['content-type'];
        const r = await worker.fetch(new Request('https://klarweg-exam.internal' + url.pathname + url.search,
          { method: req.method, headers, body: ['GET', 'HEAD'].includes(req.method) ? undefined : Buffer.concat(chunks) }), h.env);
        res.writeHead(r.status, Object.fromEntries(r.headers));
        res.end(Buffer.from(await r.arrayBuffer()));
        return;
      }
      const as = /^\/exam\/dev\/as\/([a-z0-9]+)$/.exec(url.pathname);
      if (as) {   // demo convenience: pick one of the local test users (never any other user id)
        if (!users[as[1]]) { res.writeHead(404); res.end('unknown test user'); return; }
        res.writeHead(302, { 'set-cookie': `kx-dev-as=${as[1]}; Path=/; SameSite=Lax`, location: /^rater/.test(as[1]) ? '/exam/rater.html' : '/exam/', 'cache-control': 'no-store' });
        res.end(); return;
      }
      let p = url.pathname === '/exam/' || url.pathname === '/exam' ? '/exam/index.html' : url.pathname;
      const file = path.join(ROOT, path.normalize(p));
      if (!file.startsWith(path.join(ROOT, 'exam') + path.sep) || !fs.existsSync(file)) { res.writeHead(404); res.end('not found'); return; }
      res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
      res.end(fs.readFileSync(file));
    } catch (e) {
      res.writeHead(500, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: 'dev_server_error', message: String(e && e.message) }));
    }
  });
  await new Promise((r) => server.listen(port, '127.0.0.1', r));
  return { server, port: server.address().port, env: h.env, user, users, form, access, proxy };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  // --mfa: raters go through the real second-factor screens (OD-19) against an in-process Access Worker
  const mfa = process.argv.includes('--mfa');
  const proxyMode = process.argv.includes('--proxy') || process.env.KX_DEV_PROXY === '1';
  const pos = process.argv.slice(2).filter((x) => !x.startsWith('--'));
  const s = await startDevServer({ port: Number(pos[0] || 8788), form: pos[1] || 'practice', mfa, proxy: proxyMode });
  const u = `http://127.0.0.1:${s.port}/exam`;
  console.log(`klarweg-exam dev server (local only, synthetic content, TEST AUDIO tones — not real listening audio), form ${s.form}
  learner:   ${u}/dev/as/learner
  raters:    ${u}/dev/as/rater1   ${u}/dev/as/rater2
  no role:   ${u}/dev/as/outsider
  ${proxyMode ? 'requests: through the real Access Worker in-process (session, /exam proxy, service binding)\n  ' : ''}${mfa ? 'second factor: ON (raters enrol with an authenticator app on first visit; local in-memory data only)' : 'second factor: raters count as verified (start with --mfa to see the 2FA screens)'}`);
}
