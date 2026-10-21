/* ============================================================
   LOCAL TEST PAGE for the Cashfree SANDBOX Worker
   ------------------------------------------------------------
   Serves this repository at http://localhost:8789 (the only origin the
   sandbox Worker accepts) with, IN MEMORY ONLY:
     · kw-config.js pointing at the payment-sandbox Worker, never production;
     · both Live Classes switches on and A1 marked open for a SYNTHETIC test
       batch, so the real kw-consult.js / kw-enrol.js and Cashfree's real
       checkout (sandbox mode) can be exercised by hand;
     · a banner on every page: SANDBOX TEST PAGE, no real payment.
   No committed file changes, and the public site is untouched.

   Usage:
     SANDBOX_WORKER_URL=https://klarweg-access-payments-nonprod.<sub>.workers.dev \
       node scripts/payments-sandbox-site.mjs
   then open http://localhost:8789/live-classes.html
   Pay with Cashfree's sandbox test details only (e.g. UPI testsuccess@gocash).
   ============================================================ */
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8789;
const WORKER = String(process.env.SANDBOX_WORKER_URL || '').replace(/\/$/, '');
if (!/^https:\/\/klarweg-access-payments-nonprod\.[a-z0-9-]+\.workers\.dev$/.test(WORKER)) {
  console.error('Set SANDBOX_WORKER_URL to the payment-sandbox Worker (https://klarweg-access-payments-nonprod.<sub>.workers.dev). Nothing is served for any other Worker.');
  process.exit(2);
}

function sandboxData(src) {
  const edits = [
    [/(onlineBooking: \{\s*enabled: )false/, '$1true'],
    [/(onlineBooking: \{[\s\S]*?joinLinksConfigured: )false/, '$1true'],
    [/(liveEnrolment: \{\s*enabled: )false/, '$1true'],
    [/nextBatch: null,(\s*\/\/ no start date)/, "nextBatch: 'SANDBOX TEST BATCH · not a real start date',$1"],
    [/(paymentTerms: '₹7,999 in full, in one payment, before the first class\.) Paid online on this page once enrolment opens\.'/, "$1 Paid online through Cashfree (SANDBOX test mode).'"],
    [/(title: 'Beginner German · A1',[\s\S]*?enrolment: )'waitlist'/, "$1'open'"]
  ];
  let s = src;
  for (const [re, to] of edits) { if (!re.test(s)) throw new Error('sandbox site: data edit did not apply: ' + re); s = s.replace(re, to); }
  return s;
}
const CONFIG = `window.KW_ACCESS_API = ${JSON.stringify(WORKER)};\n`;
const BANNER = '<div style="position:sticky;top:0;z-index:9999;background:#7A4E00;color:#fff;font:600 13px/1.4 system-ui;padding:8px 16px;text-align:center">SANDBOX TEST PAGE · Cashfree test mode · no real payment · not the public site</div>';
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json', '.webp': 'image/webp', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };

http.createServer((req, res) => {
  const u = new URL(req.url, `http://localhost:${PORT}`);
  let rel = decodeURIComponent(u.pathname).replace(/^\/+/, '') || 'index.html';
  if (rel.endsWith('/')) rel += 'index.html';
  const file = path.resolve(ROOT, rel);
  if (!file.startsWith(ROOT + path.sep) || /(^|\/)\.|node_modules|access\/worker|exam|private/.test(rel)) { res.writeHead(404); return res.end(); }
  if (rel === 'kw-config.js') { res.writeHead(200, { 'content-type': TYPES['.js'], 'cache-control': 'no-store' }); return res.end(CONFIG); }
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404); return res.end(); }
  let body = fs.readFileSync(file);
  if (rel === 'live-classes-data.js') body = sandboxData(body.toString('utf8'));
  if (rel.endsWith('.html')) body = body.toString('utf8').replace(/<body([^>]*)>/, `<body$1>${BANNER}`);
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  res.end(body);
}).listen(PORT, '127.0.0.1', () => console.log(`Sandbox test page: http://localhost:${PORT}/live-classes.html  →  ${WORKER}  (Ctrl+C to stop)`));
