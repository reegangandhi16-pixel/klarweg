/* LOCAL DEV / BROWSER-TEST SERVER ONLY — never deployed.
   Serves exam/ statically and routes /exam/v1/* into the klarweg-exam Worker
   in-process (in-memory D1 + private R2 with the synthetic release), playing
   the role of the Access proxy. Local test users stand in for signed-in accounts: the default entitled learner, two
   raters and one outsider without any role. The dev-only cookie `kx-dev-as=<alias>` picks one of THESE users (it can
   never name any other user id); authorization is still decided by the exam Worker from the stored roles.
   Usage: node exam-worker/test/dev-server.mjs [port] [s0|p1|p2|…|practice] (practice = every registered practice form)  →  http://127.0.0.1:<port>/exam/  (rater screen: /exam/rater.html)
   Default for the demo: practice (every practice form; each new attempt gets the least-attempted one). Tests default to s0.
   Switching user in the demo: open /exam/dev/as/<alias> (learner, rater1, rater2, outsider); it sets the dev cookie and
   goes to the matching screen. Only these local test users exist. */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import worker from '../src/index.js';
import { makeEnv, grant, role, ROOT, PROXY_SECRET, FORM_DIR, PRACTICE_LIBRARY } from './harness.mjs';

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8' };

export async function startDevServer({ port = 0, user = `usr_${crypto.randomUUID()}`, form = 's0' } = {}) {
  const FORMS = { s0: [FORM_DIR], ...Object.fromEntries(PRACTICE_LIBRARY.map((f) => [f.name.toLowerCase(), [f.dir]])), practice: PRACTICE_LIBRARY.map((f) => f.dir) };
  if (!FORMS[form]) throw new Error(`unknown form ${form} (${Object.keys(FORMS).join('|')})`);
  const h = makeEnv({ formDirs: FORMS[form] });
  await grant(h.env, user);
  const users = { learner: user, rater1: `usr_${crypto.randomUUID()}`, rater2: `usr_${crypto.randomUUID()}`, outsider: `usr_${crypto.randomUUID()}` };
  await role(h.env, users.rater1, 'rater'); await role(h.env, users.rater2, 'rater');
  const userFor = (req) => { const m = /(?:^|;\s*)kx-dev-as=([a-z0-9]+)/.exec(req.headers.cookie || ''); return (m && users[m[1]]) || user; };
  delete h.env.__clock;                            // real time in the browser
  const server = http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url, 'http://127.0.0.1');
      if (url.pathname.startsWith('/exam/v1/')) {
        const chunks = []; for await (const c of req) chunks.push(c);
        // the local test users count as having passed the second factor just now (OD-19 is exercised by the Access tests)
        const headers = { 'x-kw-proxy-auth': PROXY_SECRET, 'x-kw-user': userFor(req), 'x-kw-mfa-at': String(Math.floor(Date.now() / 1000)) };
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
  return { server, port: server.address().port, env: h.env, user, users, form };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const s = await startDevServer({ port: Number(process.argv[2] || 8788), form: process.argv[3] || 'practice' });
  const u = `http://127.0.0.1:${s.port}/exam`;
  console.log(`klarweg-exam dev server (local only, synthetic content, TEST AUDIO tones — not real listening audio), form ${s.form}
  learner:   ${u}/dev/as/learner
  raters:    ${u}/dev/as/rater1   ${u}/dev/as/rater2
  no role:   ${u}/dev/as/outsider`);
}
