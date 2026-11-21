/* Structured, redacted logging. One JSON line per event, svc "klarweg-exam".
   Never logged: passwords, auth/proxy/media secrets, tokens, cookies, answer
   keys, answer values, writing texts, audio bytes. Field names below are
   dropped wherever they appear (nested too); strings are length-capped. */

const REDACT = new Set([
  'password', 'secret', 'token', 'cookie', 'authorization', 'proxy_auth', 'sig',
  'key', 'key_json', 'keys', 'correct', 'answer', 'answers', 'value', 'value_json',
  'text', 'body', 'audio', 'bytes_b64', 'example_answer', 'bands', 'points_json'
]);
const MAX_STR = 120;

export function redact(v, depth = 0) {
  if (depth > 4) return '[depth]';
  if (Array.isArray(v)) return v.slice(0, 20).map((x) => redact(x, depth + 1));
  if (v && typeof v === 'object') {
    const out = {};
    for (const [k, x] of Object.entries(v)) out[k] = REDACT.has(k.toLowerCase()) ? '[redacted]' : redact(x, depth + 1);
    return out;
  }
  if (typeof v === 'string' && v.length > MAX_STR) return v.slice(0, MAX_STR) + '…';
  return v;
}

export function log(env, evt, fields = {}) {
  const line = JSON.stringify({ svc: 'klarweg-exam', evt, ...redact(fields) });
  if (env && Array.isArray(env.__logs)) env.__logs.push(line);   // tests capture
  else console.log(line);
}
