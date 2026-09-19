#!/usr/bin/env node
/* ============================================================
   hash-passphrase.mjs — generate the admin login secrets.

     node report/worker/tools/hash-passphrase.mjs 'your passphrase here'

   Prints the two values to feed to `wrangler secret put`:
     ADMIN_PASSPHRASE_SALT
     ADMIN_PASSPHRASE_HASH

   The passphrase itself is never stored anywhere. Uses the same
   PBKDF2-SHA256 / 210,000 iterations / 256-bit derivation as
   src/auth.js derive().
   ============================================================ */
import { webcrypto as crypto } from 'node:crypto';

const passphrase = process.argv[2];
if (!passphrase || passphrase.length < 12) {
  console.error('Usage: node hash-passphrase.mjs \'<passphrase, 12+ chars>\'');
  process.exit(1);
}

const salt = crypto.getRandomValues(new Uint8Array(16));
const key = await crypto.subtle.importKey(
  'raw', new TextEncoder().encode(passphrase), 'PBKDF2', false, ['deriveBits']
);
const bits = await crypto.subtle.deriveBits(
  { name: 'PBKDF2', salt, iterations: 210000, hash: 'SHA-256' }, key, 256
);

const b64 = b => Buffer.from(b).toString('base64');
console.log('ADMIN_PASSPHRASE_SALT=' + b64(salt));
console.log('ADMIN_PASSPHRASE_HASH=' + b64(new Uint8Array(bits)));
console.log('\nSet them with:\n  wrangler secret put ADMIN_PASSPHRASE_SALT\n  wrangler secret put ADMIN_PASSPHRASE_HASH');
