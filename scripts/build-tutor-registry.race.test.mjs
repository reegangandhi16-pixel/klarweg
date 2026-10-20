/* Regression for the intermittent ERR_MODULE_NOT_FOUND in `npm test`: tutor/eval/eval.test.mjs rebuilds the generated
   tutor registry (via run-eval.mjs) while other test processes import from it. The builder used to delete the whole
   directory first. Now it replaces files atomically, so concurrent readers never see a missing or partial module.
   This test rebuilds repeatedly, forcing real rewrites (it first puts a different, complete version of every file in
   place, atomically), while it imports every generated module again and again. Bounded to a few seconds; the last
   build restores the exact generated output. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn, execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BUILD = path.join(ROOT, 'scripts/build-tutor-registry.mjs');
const GEN = path.join(ROOT, 'tutor/worker/src/registry/generated');
const build = () => new Promise((resolve) => spawn(process.execPath, [BUILD], { stdio: 'ignore' }).on('exit', resolve));
const files = () => [path.join(GEN, 'index.js'), ...fs.readdirSync(path.join(GEN, 'ch')).filter((f) => f.endsWith('.js') && !f.startsWith('.')).map((f) => path.join(GEN, 'ch', f))];
const swapIn = (file, src) => { const tmp = `${file}.stress-${process.pid}.tmp`; fs.writeFileSync(tmp, src); fs.renameSync(tmp, file); };

test('TUTOR REGISTRY: concurrent rebuilds never expose a missing or partial generated module', async () => {
  execFileSync(process.execPath, [BUILD], { stdio: 'ignore' });
  const all = files();
  assert.ok(all.length > 200, `generated registry present (${all.length} files)`);
  const original = new Map(all.map((f) => [f, fs.readFileSync(f, 'utf8')]));
  let stop = false, rebuilds = 0, reads = 0;
  const failures = [];
  const writer = (async () => {
    while (!stop) {
      for (const [f, src] of original) swapIn(f, src + `// stress ${rebuilds}\n`);   // force the builder to rewrite everything
      await Promise.all([build(), build()]);                                       // two concurrent builders, like parallel test files
      rebuilds++;
    }
  })();
  const t0 = Date.now();
  // mostly file reads (a missing file is ENOENT, a partial one fails the completeness check), and every 25th check a
  // real import like the tutor tests do. Imports are cached by the module loader for good, so they stay bounded
  const complete = (f, src) => (f.endsWith('index.js') ? /export const LOADERS = \{[\s\S]*\n\};\n/.test(src) : /^\/\/ GENERATED[^\n]*\nexport default JSON\.parse\("[\s\S]*"\);\n(\/\/ stress \d+\n)?$/.test(src));
  for (let n = 0; (Date.now() - t0 < 3000 || rebuilds < 2) && n < 200000; n++) {
    const f = all[n % all.length];
    try {
      if (n % 25 === 0) {
        const m = await import(`${pathToFileURL(f).href}?stress=${n}`);
        if (f.endsWith('index.js') ? !m.LOADERS : m.default === undefined) throw new Error('module without its export');
      } else if (!complete(f, fs.readFileSync(f, 'utf8'))) throw new Error('partial file');
      reads++;
    } catch (e) { failures.push(`${path.relative(GEN, f)}: ${e.code || e.message}`); }
    if (n % 500 === 0) await new Promise((r) => setImmediate(r));   // let the builders' exit events through
  }
  stop = true; await writer;
  execFileSync(process.execPath, [BUILD], { stdio: 'ignore' });
  for (const [f, src] of original) assert.equal(fs.readFileSync(f, 'utf8'), src, `${path.relative(GEN, f)} restored exactly`);
  assert.deepEqual(fs.readdirSync(path.join(GEN, 'ch')).filter((f) => f.endsWith('.tmp')), [], 'no temporary files left behind');
  assert.ok(rebuilds >= 2 && reads > 1000, `stress actually ran (rebuilds ${rebuilds}, reads ${reads})`);
  assert.deepEqual(failures.slice(0, 5), [], `${failures.length} failed reads during ${rebuilds} rebuilds`);
});
