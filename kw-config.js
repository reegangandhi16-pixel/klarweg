/* ============================================================
   KLARWEG · ACCESS BACKEND ENDPOINT (kw-config.js)
   ------------------------------------------------------------
   The only place the Access Worker origin is written down.
   Contains NO credentials: the Cashfree app id and secret, the
   D1 binding and the session signing material all live in the
   Worker (Cloudflare secrets / vars) and never reach the browser.

   This is the deployed klarweg-access Worker.

   Override at runtime before this file loads for local testing:
     <script>window.KW_ACCESS_API = 'http://127.0.0.1:8787';</script>
   ============================================================ */
(function (global) {
  'use strict';
  if (typeof global.KW_ACCESS_API === 'string' && global.KW_ACCESS_API) return;
  global.KW_ACCESS_API = 'https://klarweg-access.klarweg-issue-reports-2026.workers.dev';
})(window);
