/* LOCAL DEV / BROWSER-TEST SERVER ONLY — never deployed.
   Serves exam/ statically and routes /exam/v1/* into the klarweg-exam Worker
   in-process (in-memory D1 + private R2 with the synthetic release), playing
   the role of the Access proxy for one fixed, entitled dev user.
   Usage: node exam-worker/test/dev-server.mjs [port]  →  http://127.0.0.1:<port>/exam/ */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import worker from '../src/index.js';
import { makeEnv, grant, ROOT, PROXY_SECRET } from './harness.mjs';

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8' };

export async function startDevServer({ port = 0, user = `usr_${crypto.randomUUID()}` } = {}) {
  const h = makeEnv();
  await grant(h.env, user);
  delete h.env.__clock;                            // real time in the browser
  const server = http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url, 'http://127.0.0.1');
      if (url.pathname.startsWith('/exam/v1/')) {
        const chunks = []; for await (const c of req) chunks.push(c);
        const headers = { 'x-kw-proxy-auth': PROXY_SECRET, 'x-kw-user': user };
        if (req.headers['content-type']) headers['content-type'] = req.headers['content-type'];
        const r = await worker.fetch(new Request('https://klarweg-exam.internal' + url.pathname + url.search,
          { method: req.method, headers, body: ['GET', 'HEAD'].includes(req.method) ? undefined : Buffer.concat(chunks) }), h.env);
        res.writeHead(r.status, Object.fromEntries(r.headers));
        res.end(Buffer.from(await r.arrayBuffer()));
        return;
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
  return { server, port: server.address().port, env: h.env, user };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const s = await startDevServer({ port: Number(process.argv[2] || 8788) });
  console.log(`klarweg-exam dev server: http://127.0.0.1:${s.port}/exam/  (synthetic content only)`);
}
