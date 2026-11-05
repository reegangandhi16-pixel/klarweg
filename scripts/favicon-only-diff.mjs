// Lets the live-classes SCOPE guards tell a sitewide favicon swap apart from a
// real edit: two versions count as "favicon-only" when they differ in nothing
// but <link rel="icon"> tags that point at a favicon file. Any other byte that
// changes (wording, dates, scripts, other links) keeps the guard failing.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const FAVICON_LINK = /<link rel="icon"(?: (?:type="image\/[a-z+.-]+"|sizes="\d+x\d+"|href="(?:\.\.\/|\/)*favicon[\w.-]*\.(?:ico|png|svg)"))+>/g;

export function faviconOnlyChange(before, after) {
  if (before === after) return false;
  return before.replace(FAVICON_LINK, '') === after.replace(FAVICON_LINK, '');
}

/* `file` as changed between git commit `base` and the working tree. */
export function faviconOnlyFileChange(file, base, root) {
  let before;
  try {
    before = execFileSync('git', ['show', `${base}:${file}`], { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
  } catch {
    return false; // added on this branch: not a favicon swap
  }
  const abs = path.join(root, file);
  if (!fs.existsSync(abs)) return false; // deleted
  return faviconOnlyChange(before, fs.readFileSync(abs, 'utf8'));
}
