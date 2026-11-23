#!/usr/bin/env node
/* Footer social links — the single source of truth for every page footer.
 *
 * Klarweg has no shared footer include (pages are self-contained HTML), so
 * this module is the shared component:
 *   - SOCIALS / SOCIAL_HTML: the official accounts + brand glyphs (Simple
 *     Icons, CC0) in the order Instagram → Facebook → Threads.
 *   - SOCIAL_CSS: the styles, kept in sync inside site.css, practice/practice.css
 *     and (inline) in pages that link neither.
 *   - applyFooterSocial(html): idempotently puts SOCIAL_HTML into a page's
 *     <footer>, replacing the old placeholder icons. Generators call it on
 *     every page they render; this CLI applies it to the hand-written pages.
 *
 *   node scripts/footer-social.mjs           # write
 *   node scripts/footer-social.mjs --check   # fail if any page/stylesheet is stale
 *
 * Pages without a <footer> (chapters, newer SEO guides by owner rule) are
 * left alone: this never adds a footer, it only fills existing ones.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export const SOCIALS = [
  {
    id: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/klarwegofficial/',
    path: 'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077',
  },
  {
    id: 'facebook', name: 'Facebook', url: 'https://www.facebook.com/klarweg',
    path: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
  },
  {
    id: 'threads', name: 'Threads', url: 'https://www.threads.com/@klarwegofficial',
    path: 'M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z',
  },
];

export const SOCIAL_HTML = '<nav class="kw-social" aria-label="Klarweg on social media">'
  + SOCIALS.map(s => `<a class="kw-social-link kw-social-${s.id}" href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="Klarweg on ${s.name} (opens in a new tab)">`
    + `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path fill="currentColor" d="${s.path}"/></svg></a>`).join('')
  + '</nav>';

/* Brand-neutral by design: ink icons on a light disc, Klarweg teal on hover. */
export const SOCIAL_CSS = `/* kw-social:start — generated by scripts/footer-social.mjs; edit there */
.kw-social { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.kw-social-link { width: 44px; height: 44px; flex: none; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; border: 1px solid rgba(14,14,16,0.10); background: #FFFFFF; color: #3A3A40; text-decoration: none; transition: transform 240ms cubic-bezier(0.16,1,0.3,1), color 150ms cubic-bezier(0.16,1,0.3,1), border-color 150ms cubic-bezier(0.16,1,0.3,1), background-color 150ms cubic-bezier(0.16,1,0.3,1), box-shadow 240ms cubic-bezier(0.16,1,0.3,1); }
.kw-social-link svg { width: 18px; height: 18px; display: block; }
.kw-social-link:hover { transform: translateY(-2px); color: #1F4E4A; background: #E7F0EE; border-color: rgba(31,78,74,0.35); box-shadow: 0 8px 20px -12px rgba(20,51,49,0.45); }
.kw-social-link:focus-visible { outline: 2px solid #1F4E4A; outline-offset: 3px; }
.kw-social-link:active { transform: translateY(0); }
.footer-brand .kw-social { margin-top: 24px; }
footer.footer > .kw-social, .footer-inner > .kw-social { justify-content: center; }
footer.footer > .kw-social { margin-top: 12px; }
footer .container > .kw-social { margin-top: 16px; }
@media (prefers-reduced-motion: reduce) { .kw-social-link, .kw-social-link:hover { transition: none; transform: none; } }
/* kw-social:end */`;

const CSS_BLOCK_RE = /\/\* kw-social:start[\s\S]*?\/\* kw-social:end \*\//;
const INLINE_RE = /<style id="kw-social-css">[\s\S]*?<\/style>/;
const NAV_RE = /<nav class="kw-social"[\s\S]*?<\/nav>/;
const PLACEHOLDER_RE = /<div class="footer-socials">[\s\S]*?<\/div>/;

/* Index of the </div> that closes the <div> opening at `start`. */
function closeDiv(html, start) {
  const re = /<div\b|<\/div>/g; re.lastIndex = start; let depth = 0, m;
  while ((m = re.exec(html))) { depth += m[0] === '</div>' ? -1 : 1; if (depth === 0) return m.index; }
  return -1;
}

function fillFooter(footer) {
  if (NAV_RE.test(footer)) return footer.replace(NAV_RE, SOCIAL_HTML);
  if (PLACEHOLDER_RE.test(footer)) return footer.replace(PLACEHOLDER_RE, SOCIAL_HTML);
  const brand = footer.search(/<div class="footer-brand">/);
  if (brand >= 0) { const end = closeDiv(footer, brand); return footer.slice(0, end) + SOCIAL_HTML + footer.slice(end); }
  const inner = footer.search(/<div class="footer-inner">/);
  if (inner >= 0) { const end = closeDiv(footer, inner); return footer.slice(0, end) + SOCIAL_HTML + footer.slice(end); }
  const container = footer.search(/<div class="container">/);
  if (container >= 0) { const end = closeDiv(footer, container); return footer.slice(0, end) + SOCIAL_HTML + footer.slice(end); }
  return footer.replace(/<\/footer>$/, SOCIAL_HTML + '</footer>');
}

const linksSharedCss = html => /<link[^>]+href="[^"]*(?:site|practice)\.css(?:\?[^"]*)?"/.test(html);

/* Idempotent: running it twice gives the same page. Pages with no <footer>
   (or only print/PDF footers inside <section>) are returned unchanged. */
export function applyFooterSocial(html) {
  const m = /<footer(?:\s+class="footer")?>[\s\S]*?<\/footer>/.exec(html);
  if (!m) return html;
  let out = html.slice(0, m.index) + fillFooter(m[0]) + html.slice(m.index + m[0].length);
  const inline = `<style id="kw-social-css">\n${SOCIAL_CSS}\n</style>`;
  if (linksSharedCss(out)) out = out.replace(/\n?<style id="kw-social-css">[\s\S]*?<\/style>/, '');
  else if (INLINE_RE.test(out)) out = out.replace(INLINE_RE, inline);
  else {
    /* Right after the page's own first <style> (else after <meta charset>):
       never in front of that style (tests read it as "the page style") and
       never beside the JSON-LD block seo-ld.mjs re-inserts before </head>. */
    const head = out.indexOf('</head>'), style = out.indexOf('<style');
    const charset = /<meta charset[^>]*>/i.exec(out);
    const at = style >= 0 && style < head ? out.indexOf('</style>', style) + '</style>'.length
      : charset && charset.index < head ? charset.index + charset[0].length : head;
    out = out.slice(0, at) + '\n' + inline + out.slice(at);
  }
  return out;
}

/* For the live-classes SCOPE guards: true when `file` differs from git
   commit `base` only by this footer update (exactly applyFooterSocial). */
export function footerSocialOnlyFileChange(file, base, root = ROOT) {
  let before;
  try { before = execFileSync('git', ['show', `${base}:${file}`], { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }); }
  catch { return false; }
  const abs = path.join(root, file);
  if (!fs.existsSync(abs)) return false;
  const after = fs.readFileSync(abs, 'utf8');
  return before !== after && applyFooterSocial(before) === after;
}

export function applyStylesheet(css) {
  return CSS_BLOCK_RE.test(css) ? css.replace(CSS_BLOCK_RE, SOCIAL_CSS) : css.replace(/\n*$/, '\n\n' + SOCIAL_CSS + '\n');
}

const STYLESHEETS = ['site.css', 'practice/practice.css'];
/* Source trees that are never published or are not web pages. */
const SKIP = /^(uploads|docs|scripts|tmp|audit|report|deliverables|review-packages|react-lib|node_modules|exam-content|exam-worker|access|tutor)\//;

function pages() {
  return execFileSync('git', ['ls-files', '-z', '*.html'], { cwd: ROOT, encoding: 'utf8' })
    .split('\0').filter(f => f && !SKIP.test(f));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  if (args.some(a => a !== '--check')) throw new Error('Usage: footer-social.mjs [--check]');
  const check = args.includes('--check');
  const stale = [];
  let filled = 0;
  for (const file of [...STYLESHEETS, ...pages()]) {
    const abs = path.join(ROOT, file);
    if (!fs.existsSync(abs)) continue;
    const cur = fs.readFileSync(abs, 'utf8');
    const next = file.endsWith('.css') ? applyStylesheet(cur) : applyFooterSocial(cur);
    if (next.includes('class="kw-social"')) filled++;
    if (next === cur) continue;
    stale.push(file);
    if (!check) fs.writeFileSync(abs, next);
  }
  if (check && stale.length) {
    console.error(`Footer social links stale in ${stale.length} file(s), e.g. ${stale.slice(0, 5).join(', ')} — run node scripts/footer-social.mjs`);
    process.exitCode = 1;
  } else console.log(JSON.stringify({ footers: filled, changed: check ? 0 : stale.length, check }));
}
