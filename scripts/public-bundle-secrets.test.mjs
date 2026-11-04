/* Security regression: no credential ever ships in the public GitHub Pages
   artifact. Builds the exact file list deploy-pages.yml publishes (from
   .github/pages-allowlist.txt, plain paths + GLOB: lines) and scans every
   file for credential shapes. Matches are reported by type and path only,
   never by value. Public client identifiers (Google OAuth client id,
   Cashfree app id) are not secrets and are not matched. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const PATTERNS = {
  cashfree_secret_key: /cfsk_ma_(?:prod|test)_[A-Za-z0-9_]{8,}/,
  cashfree_secret_header: /x-client-secret['"]?\s*[:=]\s*['"][^'"\s]{8,}/i,
  google_api_key: /AIza[0-9A-Za-z_-]{35}/,
  google_oauth_client_secret: /GOCSPX-[0-9A-Za-z_-]{20,}/,
  openai_key: /\bsk-(?:proj-|svcacct-)?[A-Za-z0-9_-]{32,}/,
  anthropic_key: /\bsk-ant-[A-Za-z0-9_-]{20,}/,
  github_token: /\b(?:ghp|gho|ghs|ghu|github_pat)_[A-Za-z0-9_]{30,}/,
  private_key: /-----BEGIN (?:RSA |EC |OPENSSH |ENCRYPTED )?PRIVATE KEY-----/,
  gcp_service_account: /"type"\s*:\s*"service_account"/,
  aws_access_key: /\bAKIA[0-9A-Z]{16}\b/,
  cloudflare_token_assignment: /(?:CLOUDFLARE_API_TOKEN|CF_API_TOKEN)\s*[=:]\s*['"]?[A-Za-z0-9_-]{30,}/,
  worker_secret_assignment: /(?:RESOURCE_URL_SECRET|RATE_SALT|SESSION_PEPPER|ADMIN_PASSPHRASE_HASH|CASHFREE_WEBHOOK_SECRET|OPENAI_API_KEY)\s*[=:]\s*['"][^'"\s]{8,}/,
};

function globFiles(pattern) {
  // Same shape the allowlist uses: "<dir>/<prefix>*<suffix>" (one directory, one star).
  const dir = path.dirname(pattern);
  const base = path.basename(pattern);
  const [pre, suf] = base.split('*');
  assert.ok(suf !== undefined && !base.slice(base.indexOf('*') + 1).includes('*'), 'unsupported glob ' + pattern);
  return fs.readdirSync(path.join(ROOT, dir))
    .filter((f) => f.startsWith(pre) && f.endsWith(suf) && f.length >= pre.length + suf.length)
    .map((f) => path.join(dir, f));
}

export function publicFiles() {
  const lines = fs.readFileSync(path.join(ROOT, '.github/pages-allowlist.txt'), 'utf8').split('\n');
  const out = new Set();
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    if (line.startsWith('GLOB:')) globFiles(line.slice(5)).forEach((f) => out.add(f));
    else out.add(line);
  }
  return [...out];
}

test('public Pages artifact contains no credential-shaped strings', () => {
  const files = publicFiles();
  assert.ok(files.length > 300, 'allowlist resolved to ' + files.length + ' files');
  const hits = [];
  for (const rel of files) {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) continue; // deploy-pages.yml already fails on a missing path
    const buf = fs.readFileSync(abs);
    if (buf.subarray(0, 8000).includes(0)) continue; // binary (images, fonts, audio)
    const text = buf.toString('utf8');
    for (const [type, rx] of Object.entries(PATTERNS)) if (rx.test(text)) hits.push(`${type} in ${rel}`);
  }
  assert.deepEqual(hits, [], 'credential-shaped strings in the public artifact:\n' + hits.join('\n'));
});

test('public Pages artifact never includes Worker source, configs or env files', () => {
  const bad = publicFiles().filter((f) =>
    /(^|\/)(wrangler[^/]*\.toml|\.env[^/]*|\.dev\.vars[^/]*|package(-lock)?\.json)$/.test(f) ||
    /^(access|tutor|exam-worker|report\/worker|audio\/worker|scripts|docs)\//.test(f) ||
    /\.(pem|key|p12|pfx|map)$/.test(f));
  assert.deepEqual(bad, []);
});
