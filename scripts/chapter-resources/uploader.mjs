/* ============================================================
   KLARWEG — resumable, verify-first release uploader (core logic)
   Works against any R2-binding-like object { list, put, get }:
   the real bucket (via wrangler getPlatformProxy), local R2, or a
   test double. No shell-outs, no credentials in this module.

   Rules (never relaxed):
   · An existing object is NEVER overwritten.
   · Existing object, same size as local  → skipped (resume).
   · Existing object, different size       → STOP before any upload.
   · Anything under the release prefix that is not expected → STOP.
   · manifest.json is written LAST, only after every other object is
     present with the right size and a byte sample verifies.
   · A complete release (manifest present, everything matching)
     performs 0 uploads.
============================================================ */
import crypto from 'node:crypto';

const sha256 = (buf) => crypto.createHash('sha256').update(buf).digest('hex');

/* Strip anything that could be a credential from error text. */
export function redact(text) {
  return String(text == null ? '' : text)
    .replace(/(authorization|bearer|token|secret|password|api[_-]?key)(["'\s:=]+)[^\s"',;]+/gi, '$1$2[redacted]')
    .replace(/\bcf[a-z]{2,4}_[A-Za-z0-9._-]{16,}/g, '[redacted]')
    .replace(/\b[A-Za-z0-9_-]{32,}\.[A-Za-z0-9_-]{16,}\b/g, '[redacted]')
    .replace(/\b[A-Za-z0-9+/_-]{48,}={0,2}/g, '[redacted]');
}

export async function listPrefix(bucket, prefix) {
  const out = new Map();
  let cursor;
  do {
    const page = await bucket.list({ prefix, cursor, limit: 1000 });
    for (const o of page.objects) out.set(o.key, o.size);
    cursor = page.truncated ? page.cursor : undefined;
  } while (cursor);
  return out;
}

/* Pure planning step. objects: [{ key, bytes }] excluding the manifest. */
export function planUpload(objects, manifestKey, remote, { resume }) {
  const expected = new Map(objects.map((o) => [o.key, o.bytes]));
  const unexpected = [...remote.keys()].filter((k) => !expected.has(k) && k !== manifestKey);
  const mismatched = objects.filter((o) => remote.has(o.key) && remote.get(o.key) !== o.bytes).map((o) => o.key);
  const present = objects.filter((o) => remote.has(o.key) && remote.get(o.key) === o.bytes);
  const missing = objects.filter((o) => !remote.has(o.key));
  const manifestPresent = remote.has(manifestKey);
  let refusal = null;
  if (unexpected.length) refusal = `unexpected objects under the release prefix: ${unexpected.slice(0, 5).join(', ')}${unexpected.length > 5 ? ' …' : ''}`;
  else if (mismatched.length) refusal = `existing objects differ in size from the local release (never overwritten): ${mismatched.slice(0, 5).join(', ')}${mismatched.length > 5 ? ' …' : ''}`;
  else if (manifestPresent && missing.length) refusal = 'manifest.json exists but the release is incomplete — refusing to touch it';
  else if (!resume && remote.size > 0 && !manifestPresent) refusal = `release already has ${remote.size} objects — re-run with --resume to complete it`;
  return { refusal, present, missing, manifestPresent, unexpected, mismatched };
}

async function pool(items, concurrency, fn) {
  const queue = [...items];
  await Promise.all(Array.from({ length: Math.max(1, Math.min(concurrency, queue.length)) }, async () => {
    while (queue.length) await fn(queue.shift());
  }));
}

/**
 * @param {object} o
 * @param {object} o.bucket      R2-like binding
 * @param {string} o.prefix      "r2/"
 * @param {Array}  o.objects     [{ key, bytes, sha256, read: () => Buffer, contentType }]  (no manifest)
 * @param {object} o.manifest    { key, bytes, sha256, read, contentType }
 * @param {boolean} o.resume
 * @param {number} o.concurrency
 * @param {number} o.sampleSize  byte-verified objects after upload
 * @param {Function} o.log
 */
export async function uploadRelease({ bucket, prefix, objects, manifest, resume = false, concurrency = 2, sampleSize = 25, log = () => {} }) {
  const report = { uploaded: 0, skipped: 0, failures: [], verified: 0, manifestWritten: false, complete: false };
  const remote = await listPrefix(bucket, prefix);
  const plan = planUpload(objects, manifest.key, remote, { resume });
  if (plan.refusal) return { ...report, refused: plan.refusal };

  if (plan.manifestPresent) {
    // Complete release: verify, upload nothing.
    const ok = remote.get(manifest.key) === manifest.bytes;
    return { ...report, skipped: plan.present.length, complete: ok, refused: ok ? null : 'manifest.json exists with a different size' };
  }

  report.skipped = plan.present.length;
  log(`remote: ${plan.present.length} present (skipped), ${plan.missing.length} to upload`);
  let done = 0;
  await pool(plan.missing, concurrency, async (o) => {
    try {
      const put = await bucket.put(o.key, o.read(), { httpMetadata: { contentType: o.contentType } });
      if (!put || put.size !== o.bytes) throw new Error(`size after put ${put && put.size} ≠ ${o.bytes}`);
      report.uploaded++;
    } catch (e) {
      report.failures.push({ key: o.key, error: redact(e && (e.stack || e.message) || e) });
    }
    if (++done % 100 === 0) log(`  ${done}/${plan.missing.length}`);
  });
  if (report.failures.length) return { ...report, refused: `${report.failures.length} uploads failed — manifest NOT written; re-run with --resume` };

  // Verify everything before the manifest.
  const after = await listPrefix(bucket, prefix);
  const bad = objects.filter((o) => after.get(o.key) !== o.bytes).map((o) => o.key);
  if (bad.length) return { ...report, refused: `post-upload listing mismatch for ${bad.length} objects (e.g. ${bad[0]}) — manifest NOT written` };
  const extra = [...after.keys()].filter((k) => !objects.some((o) => o.key === k));
  if (extra.length) return { ...report, refused: `unexpected objects appeared: ${extra.slice(0, 3).join(', ')} — manifest NOT written` };

  const sample = [...objects].sort((a, b) => a.sha256.localeCompare(b.sha256)).slice(0, sampleSize);
  for (const o of sample) {
    const got = await bucket.get(o.key);
    const buf = got ? Buffer.from(await got.arrayBuffer()) : null;
    if (!buf || buf.length !== o.bytes || sha256(buf) !== o.sha256) return { ...report, refused: `byte verification failed for ${o.key} — manifest NOT written` };
    report.verified++;
  }

  // Manifest last.
  try {
    await bucket.put(manifest.key, manifest.read(), { httpMetadata: { contentType: manifest.contentType } });
    const got = await bucket.get(manifest.key);
    const buf = got ? Buffer.from(await got.arrayBuffer()) : null;
    if (!buf || sha256(buf) !== manifest.sha256) throw new Error('manifest verification failed');
    report.manifestWritten = true;
  } catch (e) {
    return { ...report, failures: [{ key: manifest.key, error: redact(e && (e.stack || e.message) || e) }], refused: 'manifest upload failed' };
  }
  report.complete = true;
  return report;
}
