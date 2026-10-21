/* ============================================================
   LOCAL TEST PAGE for the Cashfree SANDBOX Worker
   ------------------------------------------------------------
   Serves this repository at http://localhost:8789 (the only origin the
   sandbox Worker accepts) with, IN MEMORY ONLY:
     · kw-config.js pointing at the payment-sandbox Worker, never production;
     · both Live Classes switches on and A1 marked open for a SYNTHETIC test
       batch, so the real kw-consult.js / kw-enrol.js and Cashfree's real
       checkout (sandbox mode) can be exercised by hand;
     · a banner on every page: SANDBOX TEST PAGE, no real payment;
     · /sandbox-checkout.html (exists only here): opens Cashfree's hosted JS
       checkout in SANDBOX mode for a payment session that
       scripts/cashfree-sandbox-verify.mjs created, so a person can complete
       the sandbox payment without Cashfree's S2S Order Pay API.
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
    [/(onlineBooking: \{[\s\S]*?ownerApproval: )null/, "$1'SANDBOX TEST PAGE ONLY'"],
    [/(liveEnrolment: \{[\s\S]*?ownerApproval: )null/, "$1'SANDBOX TEST PAGE ONLY'"],
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
/* The hosted-checkout step. Mode is fixed to 'sandbox'; the session id arrives in the
   URL fragment (never sent to any server) and is cleared from the address bar. */
const CHECKOUT_PAGE = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Sandbox checkout</title><meta name="robots" content="noindex">
<script src="https://sdk.cashfree.com/js/v3/cashfree.js"></script>
<style>body{margin:0;font:16px/1.5 system-ui,sans-serif;background:#fff;color:#1a1a1a}main{max-width:560px;margin:0 auto;padding:24px 16px}button{font:inherit;padding:10px 18px;border:0;border-radius:6px;background:#1F2A44;color:#fff;cursor:pointer}button:disabled{opacity:.5}#out{margin-top:16px;white-space:pre-wrap}</style>
</head><body><main><h1>Cashfree sandbox checkout</h1>
<p id="what">Opened from <code>scripts/cashfree-sandbox-verify.mjs</code>.</p>
<p>Use only Cashfree's published <strong>sandbox test</strong> details. Never a real card, bank or UPI id.</p>
<button id="go" disabled>Open Cashfree sandbox checkout</button><div id="out" role="status"></div></main>
<script>
(function () {
  var q = new URLSearchParams(location.hash.slice(1));
  var session = q.get('session') || '', outcome = q.get('outcome') === 'failure' ? 'failure' : 'success';
  history.replaceState(null, '', location.pathname);
  var out = document.getElementById('out'), go = document.getElementById('go');
  if (!/^session_\\S{8,}$/.test(session)) { out.textContent = 'No payment session in the link. Copy the full link the verifier printed.'; return; }
  document.getElementById('what').textContent = outcome === 'success'
    ? 'Step: complete this payment SUCCESSFULLY with a sandbox test method.'
    : 'Step: make this payment FAIL with a sandbox test method (choose the failure outcome).';
  go.disabled = false;
  go.onclick = function () {
    go.disabled = true;
    var cf = Cashfree({ mode: 'sandbox' });
    cf.checkout({ paymentSessionId: session, redirectTarget: '_modal' }).then(function (r) {
      if (r && r.error) out.textContent = 'Checkout ended: ' + (r.error.message || 'not completed') + '. The verifier reads the result from Cashfree.';
      else out.textContent = 'Checkout closed. Return to the terminal: the verifier reads the result from Cashfree and the sandbox database.';
    });
  };
})();
</script></body></html>
`;
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json', '.webp': 'image/webp', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };

http.createServer((req, res) => {
  const u = new URL(req.url, `http://localhost:${PORT}`);
  let rel = decodeURIComponent(u.pathname).replace(/^\/+/, '') || 'index.html';
  if (rel.endsWith('/')) rel += 'index.html';
  const file = path.resolve(ROOT, rel);
  if (!file.startsWith(ROOT + path.sep) || /(^|\/)\.|node_modules|access\/worker|exam|private/.test(rel)) { res.writeHead(404); return res.end(); }
  if (rel === 'sandbox-checkout.html') { res.writeHead(200, { 'content-type': TYPES['.html'], 'cache-control': 'no-store' }); return res.end(CHECKOUT_PAGE.replace(/<body([^>]*)>/, `<body$1>${BANNER}`)); }
  if (rel === 'kw-config.js') { res.writeHead(200, { 'content-type': TYPES['.js'], 'cache-control': 'no-store' }); return res.end(CONFIG); }
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404); return res.end(); }
  let body = fs.readFileSync(file);
  if (rel === 'live-classes-data.js') body = sandboxData(body.toString('utf8'));
  if (rel.endsWith('.html')) body = body.toString('utf8').replace(/<body([^>]*)>/, `<body$1>${BANNER}`);
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  res.end(body);
}).listen(PORT, '127.0.0.1', () => console.log(`Sandbox test page: http://localhost:${PORT}/live-classes.html  →  ${WORKER}  (Ctrl+C to stop)`));
