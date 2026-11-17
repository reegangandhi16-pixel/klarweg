/* Renders scripts/og/live-classes-og.html to og-live-classes.png (1200×630)
   with local headless Chrome. Needs network access for Google Fonts.
   Usage: node scripts/og/render-og.mjs   (CHROME=<binary> to override) */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const CHROME = process.env.CHROME || (process.platform === 'darwin' ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' : 'google-chrome');
const src = pathToFileURL(path.join(ROOT, 'scripts/og/live-classes-og.html')).href;
const out = path.join(ROOT, 'og-live-classes.png');
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-og-'));
execFileSync(CHROME, ['--headless=new', '--hide-scrollbars', '--no-first-run', `--user-data-dir=${profile}`, '--force-device-scale-factor=1',
  '--window-size=1200,630', '--virtual-time-budget=8000', `--screenshot=${out}`, src], { stdio: 'ignore' });
fs.rmSync(profile, { recursive: true, force: true });
console.log('wrote', path.relative(ROOT, out), fs.statSync(out).size, 'bytes');
