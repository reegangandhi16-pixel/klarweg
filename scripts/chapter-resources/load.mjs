/* Load canonical chapter data files (chapter/chapter-<level>-*-data.js) in a
   sandbox — same pattern as scripts/build-tutor-registry.mjs. Read-only. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { compareIds } from './common.mjs';

export const CANONICAL_DATA_FILE = /^chapter-(a1|a2|b1|b2|c1|c2)-.*-data\.js$/;

export function loadChapter(file) {
  const ctx = {};
  ctx.window = ctx;
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, 'utf8') + '\n;this.__C = CHAPTER;', ctx, { timeout: 5000, filename: file });
  return ctx.__C;
}

export function loadAllChapters(chapterDir) {
  return fs.readdirSync(chapterDir)
    .filter((f) => CANONICAL_DATA_FILE.test(f))
    .map((f) => loadChapter(path.join(chapterDir, f)))
    .filter((C) => C && C.id)
    .sort((a, b) => compareIds(a.id, b.id));
}
