/* Planning core for the chapter resource generator: which PDFs each chapter
   gets, their HTML, and a content hash. Pure (no fs, no Chrome) so the
   manifest logic is unit-testable and deterministic. */
import crypto from 'node:crypto';
import { listResources, resourceFile, parseId } from './common.mjs';
import { buildResource, TEMPLATE_VERSION } from './templates.mjs';

// Grammar-role colours come straight from chapter/chapter.css so PDFs never drift.
export function roleCssFrom(chapterCss) {
  const tokens = chapterCss.match(/^\s*--g-[a-z-]+:[^;]+;/gm) || [];
  const rules = chapterCss.match(/^\.r-[a-z-]+(?:,\s*\.r-[a-z-]+)*\s*\{[^}\n]*\}/gm) || [];
  return `:root {\n${tokens.join('\n')}\n}\n${rules.join('\n')}`;
}

export const contentHash = (html) => crypto.createHash('sha256').update(`v${TEMPLATE_VERSION}\n${html}`).digest('hex').slice(0, 16);

/* → { level, number, title, resources: {type: {file, title, kind, sections, contentHash, html}}, skipped: [...] } */
export function planChapter(C, { css, roleCss, siteBase }) {
  const entry = { level: parseId(C.id).level, number: C.number, title: C.title, resources: {}, skipped: [] };
  for (const r of listResources(C)) {
    if (!r.template) { entry.skipped.push({ type: r.type, title: r.title, reason: r.reason }); continue; }
    const built = buildResource(C, r, { css, roleCss, chapterUrl: `${siteBase}/chapter/chapter-${C.id}.html` });
    if (!built) { entry.skipped.push({ type: r.type, title: r.title, reason: 'no authored content for this resource' }); continue; }
    entry.resources[r.type] = {
      file: resourceFile(C.id, r.type), title: r.title, kind: r.kind || null,
      sections: built.sections, contentHash: contentHash(built.html), html: built.html,
    };
  }
  return entry;
}

/* Authored-content problems worth fixing at the source. Reported, never "repaired". */
export function contentWarnings(C) {
  const out = [];
  const g = C.exercises && C.exercises.gap;
  if (g && !(Array.isArray(g.sentence) && Array.isArray(g.gaps) && g.sentence.length === g.gaps.length + 1 && !g.sentence.some((p) => /_{2,}/.test(p)))) {
    out.push('exercises.gap is malformed (parts ≠ gaps + 1, or a literal ___) — skipped in Homework');
  }
  const cyr = JSON.stringify(C).match(/[^"\\]{0,20}[\u0400-\u04FF]+[^"\\]{0,12}/g);
  if (cyr) out.push('Cyrillic look-alike letters in Latin text: ' + cyr.slice(0, 3).map((s) => JSON.stringify(s)).join(', '));
  return out;
}
