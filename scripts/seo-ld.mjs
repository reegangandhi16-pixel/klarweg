/* ============================================================
   KLARWEG · STRUCTURED DATA (JSON-LD) HELPERS
   ------------------------------------------------------------
   Shared by scripts/seo-structured-data.mjs (root pages),
   scripts/build-grammar-index.mjs (german-grammar.html) and
   scripts/seo-chapter-meta.mjs (free chapter pages), so every
   generated block has one format and one source of truth.

   Only schema the visible page supports: an Organization/WebSite
   description of the site and BreadcrumbLists that mirror the real
   navigation path (Home › Courses › level › chapter). No ratings,
   reviews, prices or other claims are emitted here.
   ============================================================ */
import { SITE_BASE } from './site-origin.mjs';

export const LD_START = '<!-- KW-LD:start (scripts/seo-ld.mjs) -->';
export const LD_END = '<!-- KW-LD:end -->';

/* Level names exactly as the level pages show them in their eyebrow/title. */
export const LEVEL_CRUMBS = {
  a1: 'A1 · Foundations',
  a2: 'A2 · Aufbau',
  b1: 'B1 · Mittelstufe',
  b2: 'B2 · Oberstufe',
  c1: 'C1 · Oberstufe',
  c2: 'C2 · Großes Sprachdiplom',
};

// JSON inside <script> must not be able to close the element early.
const json = (o) => JSON.stringify(o, null, 2).replace(/</g, '\\u003c');

export function ldScript(obj) {
  return `<script type="application/ld+json">\n${json(obj)}\n</script>`;
}

/* crumbs: [[name, path], ...] with paths relative to the site root ('' = home). */
export function breadcrumb(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map(([name, p], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${SITE_BASE}/${p}`,
    })),
  };
}

export const HOME = ['Klarweg', ''];
export const COURSES = ['Courses', 'courses.html'];
export const levelCrumb = (id) => [LEVEL_CRUMBS[id], `${id}.html`];

export function block(objs) {
  return [LD_START, ...objs.map(ldScript), LD_END].join('\n');
}

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
export const LD_BLOCK_RE = new RegExp(esc(LD_START) + '[\\s\\S]*?' + esc(LD_END) + '\\n?');

/* Insert or replace the block just before </head>. Idempotent. */
export function withBlock(html, blk) {
  const clean = html.replace(LD_BLOCK_RE, '');
  const i = clean.indexOf('</head>');
  if (i < 0) throw new Error('no </head>');
  return clean.slice(0, i) + blk + '\n' + clean.slice(i);
}
