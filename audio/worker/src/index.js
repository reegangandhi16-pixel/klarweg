/* klarweg-audio — RETIRED (paid-content remediation, P3).

   This Worker used to serve every recording in the private R2 bucket
   klarweg-audio to anyone, without a session. All audio is now served by the
   access Worker on the site's own origin (klarweg.in/api/media/): free audio
   for everyone, paid audio only with a session that holds the purchase.

   The retired Worker has NO bucket binding: it cannot read any object. Every
   request answers 410 Gone, uncacheable. Rollback = redeploy the previous
   version (see the remediation report); the old source is in git history. */

const BODY = 'Gone. Klarweg audio is served from https://klarweg.in/api/media/.\n';

export default {
  async fetch(request) {
    const headers = {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff'
    };
    return new Response(request.method === 'HEAD' ? null : BODY, { status: 410, headers });
  }
};
