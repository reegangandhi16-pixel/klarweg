# klarweg.in domain migration — inventory, DNS, cutover, rollback

Status (2026-10-29): repository side prepared on branch `feat/klarweg-in-domain`.
**Nothing external has been changed** — no DNS, GitHub Pages setting, Worker,
OAuth or payment configuration. Hosting stays on GitHub Pages; no Hostinger
web-hosting plan is needed (the site is static; nothing in the audit requires
server-side hosting).

The one authority for the public origin is `scripts/site-origin.mjs`
(`SITE_BASE`). `scripts/set-site-origin.mjs --to <origin> [--write]` rewrites
every published declaration of it and reads the current value from that file,
so the same command rolls back. `scripts/set-site-origin.test.mjs` keeps the
tree consistent with it.

## 1. Facts found in the audit (read-only checks, 2026-10-29)

| Fact | Evidence |
|---|---|
| Pages deploys from a **custom Actions workflow** (`build_type: workflow`), custom domain unset | `GET /repos/…/klarweg/pages` → `cname: null`, `https_enforced: true` |
| In that mode GitHub **ignores the `CNAME` file**; the custom domain is the Settings → Pages value | GitHub docs, "Managing a custom domain for your GitHub Pages site" |
| Hostinger is only the **registrar**. DNS is delegated to **AWS Route 53** (`ns-695.awsdns-22.net`, `ns-350.awsdns-43.com`, `ns-1854.awsdns-39.co.uk`, `ns-1362.awsdns-42.org`) | `whois`, `dig NS` |
| Apex currently `A 3.6.224.232` (EC2 ap-south-1) + `AAAA 2406:da1a:1247:aa00:66fe:464f:25b8:709a`; no HTTP/HTTPS answer; no MX, TXT, CAA or `www` publicly visible | `dig`, `curl` |
| **Registration expires 2026-12-01** | `whois` |
| Live Access Worker = version `e9e85b17` (2026-10-03); allows `https://klarweg.in` with credentials; refuses `https://www.klarweg.in` | `wrangler deployments list`; `OPTIONS /auth/me` → `204`, `Access-Control-Allow-Origin: https://klarweg.in`, `…-Credentials: true` |
| Live Access Worker sets no `SITE_BASE_URL`, `ACCOUNT_RETURN_URL` or CORS vars (code defaults apply); `CASHFREE_ENV = sandbox` | `wrangler versions view` (var names/values; secrets by name only) |
| Live Reports Worker **refuses `https://klarweg.in`** | `OPTIONS` → `403` |
| Audio is served from a separate Pages site `…github.io/klarweg-audio-cdn/` (`Access-Control-Allow-Origin: *`); there is no user-site repo, so a custom domain on `klarweg` does not move it | `curl -I`; `GET /repos/…/reegangandhi16-pixel.github.io` → 404 |

## 2. Migration inventory

| System | Current state | Change | Where / when | Verification |
|---|---|---|---|---|
| Canonical, `og:url`, `og:image`, `twitter:image`, JSON-LD (24 indexable pages: root pages, `live-classes.html`, 6 free chapters) | github.io base | `https://klarweg.in` | **This PR** (script) | `set-site-origin.test.mjs`: every canonical/og:url = the page's own URL on `SITE_BASE`; JSON-LD parses and only uses `SITE_BASE` |
| 252 paid chapter pages | `noindex, follow`, no canonical | none | — | same test (no old base anywhere in 258 pages) |
| `sitemap.xml` (24 URLs) | github.io | `https://klarweg.in/…` | **This PR** | test: sitemap set = canonical set, every URL is a published file |
| `robots.txt` | `Sitemap:` on github.io; never read before (robots only counts at a host root) | `Sitemap: https://klarweg.in/sitemap.xml`. Becomes effective for the first time; its `Disallow` lines cover only unpublished dirs plus `/report/` (JS/CSS for the issue reporter) | **This PR** | test |
| `404.html` | root-relative `/klarweg/…` links (served for any missing path) | `/…` | **This PR** (script) | test: each link exists at the root; Chrome: `/chapter/does-not-exist.html` and `/nope/deeper/missing` → 404 page with working icon/manifest/buttons |
| Generated SEO (`seo-chapter-meta.mjs`, `build-grammar-index.mjs`) | read `SITE_BASE` | follows `SITE_BASE` | **This PR** | `npm run check:generated` |
| `CNAME` | absent | `klarweg.in`, allowlisted, in the artifact | **This PR** | test + local Pages build. Informational only (see §1) |
| Relative links, assets, fonts, shared CSS/JS, 258 chapters, account pages | all relative; JS derives the base from `location` | none needed | — | static resolver: 280 HTML files, 6,174 same-origin refs, 0 unresolved; Chrome at root: 0 same-origin 4xx, 0 `/klarweg/` requests |
| `manifest.json` | relative `start_url`/`scope` | none | — | — |
| Account `next` checks (`account/index.html` `safeNextPath`, Worker `isSafeNextPath`) | base derived from page path; Worker accepts any root-relative path | none | — | code review |
| Chapter resource PDFs (R2) | footer link built from `SITE_BASE`; existing PDFs say github.io | future builds say klarweg.in; existing ones redirect via GitHub after cutover. No regeneration needed | — | `chapter-resources.test.mjs` |
| Audio (`klarweg-audio-cdn`) | separate Pages origin | none | — | test asserts the CDN URL is unchanged |
| **GitHub Pages custom domain** | unset | `klarweg.in`, then Enforce HTTPS | Owner, Settings → Pages, at cutover | `GET /pages` → `cname: klarweg.in`; `curl -I https://reegangandhi16-pixel.github.io/klarweg/a1.html` → 301 to `https://klarweg.in/a1.html` |
| **DNS** (Route 53 zone) | apex → EC2 | see §3 | Owner | §5 |
| Access Worker CORS | `klarweg.in` allowed (live) | none. `www` not needed: GitHub redirects `www` → apex | — | preflight above |
| Access Worker `ACCOUNT_RETURN_URL` (iOS Google redirect sign-in) | default github.io account page | `https://klarweg.in/account/index.html` | Owner-approved Worker change, after cutover | expected to work without it via GitHub's 301 (path + query — confirm in §6), so cleanup, not a blocker |
| Access Worker `SITE_BASE_URL` (Cashfree `return_url` fallback) | default github.io | `https://klarweg.in` | same | `return_url` already follows the request Origin for `klarweg.in` in the deployed code |
| Reports Worker `ALLOWED_ORIGINS` | no `klarweg.in` (live 403) | `https://klarweg.in` added in `report/worker/wrangler.toml` (**this PR, source only**) | **Deploy before cutover** (additive) | `OPTIONS` from `https://klarweg.in` → 204 |
| Reports Worker `SITE_BASE_URL` (admin "open" links) | github.io | `https://klarweg.in` | after cutover (github.io redirects anyway) | admin dashboard link |
| Turnstile | no site key configured on the page | none now; add `klarweg.in` to the widget hostnames if one is configured later | — | — |
| Google OAuth client | origins unknown to the repo | add `https://klarweg.in` to **Authorized JavaScript origins** (keep github.io). Redirect URI is the Worker's `/auth/google/redirect` — unchanged | Owner, Google Cloud console, **before cutover** | Google button renders and signs in on klarweg.in |
| Cashfree | sandbox (live var) | when production goes live: whitelist `klarweg.in` | Owner, Cashfree dashboard | sandbox checkout returns to `klarweg.in` |
| Session cookie (`SameSite=None` on `workers.dev`) | third-party from github.io | **still third-party from klarweg.in** — same behaviour, no regression, no fix | — | §4 |
| Exam Portal | Worker-proxied; not part of the Pages allowlist | none | — | — |
| Search Console | github.io property (if any) | add + verify `klarweg.in`, submit sitemap | Owner, after cutover | — |

Docs that still mention github.io (`deployment/*.md`, `docs/exam/*`, `docs/live-classes-*`) are historical/reference text and are intentionally unchanged. Worker defaults in `access/worker/src/*.js` stay on github.io on purpose: they are dual-origin by design and change only with a reviewed Worker deployment.

## 3. DNS records (owner action — not done by Claude)

**Where:** the records must go in the zone that is actually authoritative: the
**AWS Route 53 hosted zone for `klarweg.in`**. Records added in Hostinger's
DNS editor have no effect while the nameservers point at AWS. Confirm who
controls that AWS account before cutover.

Do **not** change nameservers, delete the zone, or touch `NS`/`SOA`. Before
editing, export/screenshot the full Route 53 record list (it may hold
subdomains a public lookup cannot see) and keep everything that is not listed
below.

1. **Domain verification (do first, any time — no user impact).**
   GitHub → your *profile* Settings → Pages → *Add a domain* → `klarweg.in`.
   GitHub shows a TXT record:

   | Type | Name | Value | TTL |
   |---|---|---|---|
   | TXT | `_github-pages-challenge-reegangandhi16-pixel` | *(value shown by GitHub)* | 300 |

   Click *Verify* once it resolves.

2. **Site records (cutover).** Lower TTLs to 300 a day before if they are long.

   | Type | Name | Value | TTL | Action |
   |---|---|---|---|---|
   | A | `klarweg.in` (apex) | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` | 300 | **replace** `3.6.224.232` (confirm the EC2 host is unused first) |
   | AAAA | `klarweg.in` (apex) | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` | 300 | **replace** `2406:da1a:1247:aa00:66fe:464f:25b8:709a` |
   | CNAME | `www` | `reegangandhi16-pixel.github.io` (no repo name) | 300 | add |

   No wildcard records (domain-takeover risk). No CAA exists; if one is added
   later it must allow `letsencrypt.org`, or the HTTPS certificate fails.
   No MX exists, so email is unaffected.

**If you would rather manage DNS in Hostinger:** that means switching the
nameservers back to Hostinger's (a nameserver change — your decision; create
the records above in Hostinger's zone first, then switch, and allow up to
24–48 h). Not required for this migration.

## 4. Cookies, Safari and `api.klarweg.in`

The site calls `https://klarweg-access…workers.dev` with
`credentials: 'include'` and a `SameSite=None` cookie. `workers.dev` and
`klarweg.in` are different sites, so the cookie is third-party exactly as it is
from github.io today: Chrome (third-party cookies allowed) keeps working;
Safari's default tracking prevention blocks it on **both** origins, and the
existing cookie probe (`/auth/cookie-probe`) tells learners why. Moving the
site neither fixes nor worsens this.

A same-site API (`api.klarweg.in`, also the Exam Portal's OD-20 launch
condition) is the fix, but it is **not** a DNS-only change: a Worker custom
domain requires the `klarweg.in` zone to be on Cloudflare (nameservers moved
to Cloudflare, Pages A/AAAA/`www` records recreated there as DNS-only), or a
paid partial (CNAME) setup. A CNAME from Route 53/Hostinger straight to
`workers.dev` does not work. Then: Worker custom domain, `kw-config.js`
API origin, CORS, cookie attributes, Cashfree notify URL, Google redirect URI.
Recommended as a **separate, later project**; not a prerequisite for this
move.

## 5. Cutover sequence

Prerequisites (any order, all additive, nothing breaks the github.io site):

- [ ] **Renew the domain** (expires 2026-12-01).
- [ ] Confirm access to the Route 53 zone and that the EC2 apex target is unused.
- [ ] Verify `klarweg.in` for GitHub Pages (§3.1).
- [ ] Google Cloud console: add `https://klarweg.in` to Authorized JavaScript origins.
- [ ] Deploy the Reports Worker with the updated `ALLOWED_ORIGINS` (record the live version first as rollback).
- [ ] Review and approve this PR (do not merge yet).

Cutover (low-traffic window):

1. Route 53: apply §3.2. Wait until `dig +short klarweg.in A` shows the four GitHub IPs from a public resolver.
2. Repo Settings → Pages → Custom domain `klarweg.in` → Save. From this moment github.io URLs 301 to klarweg.in.
3. Wait for the certificate (usually minutes, up to 24 h), then tick **Enforce HTTPS**. Until then `https://klarweg.in` may show a certificate warning — do steps 1–3 close together.
4. Merge this PR (Pages workflow deploys canonical/sitemap/CNAME). Confirm with `cmp` of live files vs `origin/main`.
5. Live checks: §6.
6. Afterwards (owner-approved Worker change): Access Worker vars `ACCOUNT_RETURN_URL=https://klarweg.in/account/index.html`, `SITE_BASE_URL=https://klarweg.in`; Reports `SITE_BASE_URL`. Note: redeploying Access from `main` would also ship code merged after 2026-10-03 — review that diff, or change only the vars.
7. Search Console: add `https://klarweg.in`, submit `/sitemap.xml`.

## 6. Live verification after cutover (not possible yet)

- `curl -I http://klarweg.in/` → 301 to `https://`; `https://klarweg.in/` → 200, valid certificate.
- `https://www.klarweg.in/` → 301 to `https://klarweg.in/`.
- `https://reegangandhi16-pixel.github.io/klarweg/chapter/chapter-a1-1-alphabet.html?x=1` → 301 to the same path + query on klarweg.in.
- Chrome + Safari (macOS and iOS), desktop and 375 px: homepage, a1.html → Chapter 1, word popup, audio play, Klarweg AI status, sign-up, log-in, Google sign-in (popup on desktop, redirect on iOS), log-out, saved words, a sandbox checkout returning to klarweg.in, live-classes waitlist, "Report an issue" submit.
- Safari: expect the cookie-probe message, as on github.io today.

## 7. Rollback

- **Before the PR is merged:** Settings → Pages → remove the custom domain. github.io serves directly again within minutes. DNS can stay or be reverted to the saved records.
- **After merge:** remove the custom domain *and* revert the merge commit (or `node scripts/set-site-origin.mjs --to https://reegangandhi16-pixel.github.io/klarweg --write`, delete `CNAME` + its allowlist line, open a PR). The rollback path is rehearsed byte-for-byte in `set-site-origin.test.mjs`.
- **Workers:** roll back to the recorded version (`wrangler rollback <version>`); additive CORS entries can stay.
- Keep DNS TTLs at 300 for a week after cutover so any revert propagates fast.
