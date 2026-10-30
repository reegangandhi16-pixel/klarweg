# klarweg.in domain migration — inventory, DNS, cutover, rollback

Status (2026-10-30): **LIVE on https://klarweg.in.** Hosting stays on GitHub
Pages; no Hostinger web-hosting plan is needed (the site is static).

Done on 2026-10-30 (each step owner-approved):
- DNS moved from AWS Route 53 to **Hostinger** with the GitHub Pages records;
  TTLs lowered to 300 (§3). Domain renewed to 2027-12-01.
- Google OAuth: `klarweg.in` authorized domain + JavaScript origin (§3a).
- Reports Worker CORS for `klarweg.in` (version `60e4f1fb`), then
  `SITE_BASE_URL=https://klarweg.in` (version `1c28c085`, PR #245).
- GitHub Pages custom domain `klarweg.in` set 09:54 UTC; Let's Encrypt
  certificate issued at once (expires 2027-01-28); Enforce HTTPS on.
- PR #243 merged (`09cdf9df`): canonical / sitemap / robots / CNAME on klarweg.in.
- Access Worker `ACCOUNT_RETURN_URL` + `SITE_BASE_URL` set from the dashboard
  (version `940c61af`, code byte-identical to `e9e85b17`); recorded in
  `wrangler.toml` by PR #244.
- Search Console: Domain property `klarweg.in` verified (TXT
  `google-site-verification=…` on `@`, keep it); sitemap processed, 24 URLs.
- Desktop Chrome verification passed (§6). iPhone Safari still to run (§6).

No payment configuration has been changed (Cashfree is still sandbox).

The one authority for the public origin is `scripts/site-origin.mjs`
(`SITE_BASE`). `scripts/set-site-origin.mjs --to <origin> [--write]` rewrites
every published declaration of it and reads the current value from that file,
so the same command rolls back. `scripts/set-site-origin.test.mjs` keeps the
tree consistent with it.

## 1. Facts found in the audit (read-only checks, 2026-10-29; dated updates 2026-10-30)

| Fact | Evidence |
|---|---|
| Pages deploys from a **custom Actions workflow** (`build_type: workflow`), custom domain unset | `GET /repos/…/klarweg/pages` → `cname: null`, `https_enforced: true` |
| In that mode GitHub **ignores the `CNAME` file**; the custom domain is the Settings → Pages value | GitHub docs, "Managing a custom domain for your GitHub Pages site" |
| *(2026-10-29, superseded)* Hostinger was only the **registrar**; DNS was delegated to **AWS Route 53** (`ns-695.awsdns-22.net`, `ns-350.awsdns-43.com`, `ns-1854.awsdns-39.co.uk`, `ns-1362.awsdns-42.org`) | `whois`, `dig NS` |
| *(2026-10-29, superseded)* Apex was `A 3.6.224.232` (EC2 ap-south-1) + `AAAA 2406:da1a:1247:aa00:66fe:464f:25b8:709a`; no HTTP/HTTPS answer; no MX, TXT, CAA or `www` publicly visible | `dig`, `curl` |
| Registration was due to expire 2026-12-01; **renewed — now expires 2027-12-01** (checked 2026-10-30) | `whois` (`Registry Expiry Date: 2027-12-01T06:33:25Z`) |
| Live Access Worker = version `e9e85b17` (2026-10-03); allows `https://klarweg.in` with credentials; refuses `https://www.klarweg.in` | `wrangler deployments list`; `OPTIONS /auth/me` → `204`, `Access-Control-Allow-Origin: https://klarweg.in`, `…-Credentials: true` |
| Live Access Worker sets no `SITE_BASE_URL`, `ACCOUNT_RETURN_URL` or CORS vars (code defaults apply); `CASHFREE_ENV = sandbox` | `wrangler versions view` (var names/values; secrets by name only) |
| **2026-10-30:** nameservers switched to Hostinger (`ns1.dns-parking.com`, `ns2.dns-parking.com`) at 07:07 UTC; the Hostinger zone holds the GitHub Pages A/AAAA, `www` CNAME and verification TXT records (§3) | `.in` registry delegation, `whois` (updated 07:07:57 UTC), `dig @ns1.dns-parking.com`, Google/Cloudflare/Quad9 resolvers |
| Live Reports Worker refused `https://klarweg.in` (`4a920e47`, 2026-09-19). **Fixed 2026-10-30:** version `60e4f1fb` deployed with `klarweg.in` allowed | `OPTIONS` → `403` before, `204` after |
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
| **DNS** (Hostinger zone) | GitHub Pages records in place since 2026-10-30 | none required; TTLs lowered to 300 on 2026-10-30 (§3) | Owner, done | `dig` checks in §3 |
| Access Worker CORS | `klarweg.in` allowed (live) | none. `www` not needed: GitHub redirects `www` → apex | — | preflight above |
| Access Worker `ACCOUNT_RETURN_URL` (iOS Google redirect sign-in) | default github.io account page | `https://klarweg.in/account/index.html` | Owner-approved Worker change, after cutover | expected to work without it via GitHub's 301 (path + query — confirm in §6), so cleanup, not a blocker |
| Access Worker `SITE_BASE_URL` (Cashfree `return_url` fallback) | default github.io | `https://klarweg.in` | same | `return_url` already follows the request Origin for `klarweg.in` in the deployed code |
| Reports Worker `ALLOWED_ORIGINS` | allows `klarweg.in` since 2026-10-30 (was 403 before) | `https://klarweg.in` added in `report/worker/wrangler.toml` (this PR) | **DONE 2026-10-30** (owner-approved): version `60e4f1fb-718c-4861-8423-5aa998b22ea7`; rollback `wrangler rollback 4a920e47-230f-4c47-a524-eb4c2181c38b` | `OPTIONS` from `https://klarweg.in` → 204 (verified); github.io 204; unknown origin 403 |
| Reports Worker `SITE_BASE_URL` (admin "open" links) | github.io | `https://klarweg.in` | after cutover (github.io redirects anyway) | admin dashboard link |
| Turnstile | no site key configured on the page | none now; add `klarweg.in` to the widget hostnames if one is configured later | — | — |
| Google OAuth client | origins unknown to the repo | add `https://klarweg.in` to **Authorized JavaScript origins** (keep github.io). Redirect URI is the Worker's `/auth/google/redirect` — unchanged | **DONE 2026-10-30** (owner-confirmed; Google console not visible to Claude) — steps in §3a | Google button renders and signs in on klarweg.in |
| Cashfree | sandbox (live var) | when production goes live: whitelist `klarweg.in` | Owner, Cashfree dashboard | sandbox checkout returns to `klarweg.in` |
| Session cookie (`SameSite=None` on `workers.dev`) | third-party from github.io | **still third-party from klarweg.in** — same behaviour, no regression, no fix | — | §4 |
| Exam Portal | Worker-proxied; not part of the Pages allowlist | none | — | — |
| Search Console | github.io property (if any) | add + verify `klarweg.in`, submit sitemap | Owner, after cutover | — |

Docs that still mention github.io (`deployment/*.md`, `docs/exam/*`, `docs/live-classes-*`) are historical/reference text and are intentionally unchanged. Worker defaults in `access/worker/src/*.js` stay on github.io on purpose: they are dual-origin by design and change only with a reviewed Worker deployment.

## 3. DNS records (Hostinger — in place; owner-managed, not done by Claude)

**Where:** since 2026-10-30 07:07 UTC the authoritative DNS for `klarweg.in`
is **Hostinger** (`ns1.dns-parking.com`, `ns2.dns-parking.com`; hPanel →
Domains → `klarweg.in` → DNS / Nameservers). The old AWS Route 53 hosted zone
still answers if queried directly, but the registry no longer delegates to it:
**do not edit Route 53** — changes there have no effect.

**Current Hostinger zone (checked 2026-10-30, after the TTL change)** — matches the GitHub Pages
requirements; nothing needs adding:

| Type | Name | Value | TTL |
|---|---|---|---|
| A | `@` (`klarweg.in`) | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` | 300 |
| AAAA | `@` | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` | 300 |
| CNAME | `www` | `reegangandhi16-pixel.github.io` (no repo name) | 300 (see note) |
| TXT | `_github-pages-challenge-reegangandhi16-pixel` | GitHub verification value | 14400 (left as is) |
| NS | `@` | `ns1.dns-parking.com`, `ns2.dns-parking.com` | 86400 |

No MX (no email on the domain), no TXT on the apex, no CAA (so Let's Encrypt —
GitHub's certificate issuer — is not blocked), no wildcard.

Until the Pages custom domain is set, `http://klarweg.in` shows GitHub's
"Site not found" page and HTTPS has no certificate. The github.io site is
unaffected.

**Owner actions:**

1. **Domain verification — done; `klarweg.in` showed Verified on 2026-10-30.** GitHub → your *profile*
   Settings → Pages → *Verified domains*: `klarweg.in` must show **Verified**
   (click *Verify* if pending — the TXT record is live). While DNS points at
   GitHub and no repository claims the domain, verification is what stops
   another account from attaching `klarweg.in` to its own Pages site. Keep
   the TXT record after verifying.
2. **TTLs lowered — done 2026-10-30 (before 08:30 UTC), at the owner's request.**
   A, AAAA and `www` are at `300` (were `14400`), so a later DNS change
   reaches everyone in minutes rather than up to 4 h. Only the TTL fields
   were edited; values unchanged. Hostinger keeps one TTL per name+type, so
   one edit changed all four A (and all four AAAA) records. Saving may show a
   "Web Apps hosting" upsell — decline with *No thanks, point my domain*.
   - A/AAAA were served at 300 consistently right away.
   - `www` was stored at 300 at once, but Hostinger's nameservers were slow
     to sync. Read-only audits (20 queries per nameserver; `www` TTL 300 / old
     SOA serial `2026103011` seen):

     | UTC | ns1 `www` 300 | ns2 `www` 300 | old serial ns1 / ns2 |
     |---|---|---|---|
     | 08:41 | 3/20 | 8/20 | split / split |
     | 08:53 | 7/20 | 10/20 | 9 / 9 |
     | 09:33 | 18/20 | 14/20 | 3 / 0 |
     | 09:41 | 18/20 | 16/20 | 2 / 0 — stalled; Google cached a fresh 14400 `www` (expires 13:41 UTC); support ticket drafted |
     | 09:50 | **20/20** | **20/20** | 0 / 1 |

     At 09:50 `www` was clean on both nameservers; the support ticket was not
     needed. All values were correct in every answer throughout. Public
     resolver caches holding the old `www` TTL expire by **13:41 UTC**; until
     then only the speed of a *future* `www` DNS change is affected (the
     cutover itself changes no DNS). Before cutover, re-run the §3 `dig`
     checks; if Hostinger again serves 14400 or serial `2026103011`
     repeatedly, contact Hostinger support with that evidence.

**Do not:** use Hostinger's "reset DNS records" (restores parking defaults
and drops the GitHub records); add wildcard records (takeover risk); add a
CAA record that omits `letsencrypt.org`; change the nameservers again without
recreating these records first.

**Check from any machine:**
```
dig +short NS klarweg.in        # ns1.dns-parking.com. ns2.dns-parking.com.
dig +short A klarweg.in         # the four 185.199.10x.153 addresses
dig +short AAAA klarweg.in      # the four 2606:50c0:800x::153 addresses
dig +short CNAME www.klarweg.in # reegangandhi16-pixel.github.io.
```

**Leftovers in AWS (optional cleanup, no site impact):** the Route 53 hosted
zone (~$0.50/month) and the EC2 instance at `3.6.224.232` no longer serve
`klarweg.in`. Delete them only if nothing else uses them.

## 3a. Google OAuth client (owner action — not done by Claude)

**Done by the owner on 2026-10-30** (kept here for reference and rollback).
Additive; the github.io entries stay, so current sign-in keeps working.

**What the site uses** (`account/index.html`, `kw-config.js`):

- Client ID `584881453594-kdmjg0h79716s4tl65g0p1mlurshih3i.apps.googleusercontent.com`.
- Desktop / Android: popup flow. Google checks the **page origin** against
  *Authorized JavaScript origins* — this is what must gain `https://klarweg.in`.
- iOS: redirect flow (`ux_mode: 'redirect'`). Google POSTs to
  `login_uri = https://klarweg-access.klarweg-issue-reports-2026.workers.dev/auth/google/redirect`
  — the Worker's address, which **does not change**. The page origin is
  checked here too, so the new origin covers iOS as well.

**Steps** — [console.cloud.google.com](https://console.cloud.google.com),
signed in as the project owner, project containing the client above:

1. **Authorized domain first.** Google Auth Platform → **Branding** →
   *Authorized domains*: add `klarweg.in` if absent (Google requires every
   domain used in client settings to be registered here first). If ownership
   proof is requested, verify `klarweg.in` in Google Search Console with a DNS
   TXT record — in the **Hostinger** DNS zone (§3). Leave existing entries alone.
2. **JavaScript origin.** Google Auth Platform → **Clients** → the client
   ending `…kdmjg0h79716s4tl65g0p1mlurshih3i` → *Authorized JavaScript
   origins* → *Add URI*: `https://klarweg.in` — exactly that: `https`, no
   trailing slash, no path, no `www`.
   - **Keep** `https://reegangandhi16-pixel.github.io` (needed until cutover and for rollback).
   - `www` is not needed: GitHub redirects `www.klarweg.in` to the apex before any page loads.
3. **Redirect URIs — unchanged.** Only confirm the list contains
   `https://klarweg-access.klarweg-issue-reports-2026.workers.dev/auth/google/redirect`.
   If it is missing, iOS sign-in is already broken today, independent of this migration.
4. **Save.** Google notes changes can take a few minutes (occasionally longer) to apply.
5. **Branding links — not yet.** If homepage / privacy / terms links point at
   github.io, leave them until after cutover: changing app URLs on a verified
   brand can trigger re-verification, and the github.io links redirect anyway.

**Do not change:** the client ID or secret (`kw-config.js` and the Access
Worker's `GOOGLE_CLIENT_ID` must keep matching), the publishing status or
scopes, or existing origins / redirect URIs.

**Verify:**

- Right after saving: Google sign-in on
  `https://reegangandhi16-pixel.github.io/klarweg/account/index.html`
  (desktop) still works.
- After cutover, on `https://klarweg.in/account/index.html`:
  - Desktop Chrome: the button renders and the popup signs you in. A failure
    shows as `origin_mismatch` / "The given origin is not allowed for the given
    client ID".
  - iPhone Safari: the redirect returns signed in — or, if Safari blocks the
    `workers.dev` cookie, the existing "your browser blocks cookies" message,
    as on github.io today (§4).

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
paid partial (CNAME) setup. A CNAME from Hostinger DNS straight to
`workers.dev` does not work. Then: Worker custom domain, `kw-config.js`
API origin, CORS, cookie attributes, Cashfree notify URL, Google redirect URI.
Recommended as a **separate, later project**; not a prerequisite for this
move.

## 5. Cutover sequence

Prerequisites (any order, all additive, nothing breaks the github.io site):

- [x] **Renew the domain** — done; `whois` shows expiry 2027-12-01 (checked 2026-10-30).
- [x] DNS records for GitHub Pages in the Hostinger zone (owner, 2026-10-30; §3).
- [x] Confirm `klarweg.in` shows **Verified** under profile Settings → Pages (§3, step 1) — confirmed 2026-10-30 (keep the TXT record).
- [x] Lower the A/AAAA/`www` TTLs to 300 in Hostinger (§3, step 2) — done 2026-10-30; `www` clean (300, 40/40) at 09:50 UTC; old-TTL resolver caches gone by 13:41 UTC. Not a cutover gate (cutover changes no DNS); re-run the §3 `dig` checks before starting.
- [x] Google Cloud console: add `klarweg.in` as an authorized domain and `https://klarweg.in` as an Authorized JavaScript origin (§3a) — done 2026-10-30 (owner-confirmed). Sign-in on klarweg.in itself is verified after cutover (§6).
- [x] Deploy the Reports Worker with the updated `ALLOWED_ORIGINS` — done 2026-10-30, version `60e4f1fb` (rollback point `4a920e47`).
- [x] Review and approve this PR — PR #243 merged 2026-10-30 (`09cdf9df`).

Cutover (low-traffic window):

1. DNS is already in place (§3). Re-run the §3 `dig` checks immediately before starting. — **done** 09:54 UTC.
2. Repo Settings → Pages → Custom domain `klarweg.in` → Save. From this moment github.io URLs 301 to klarweg.in. — **done** 09:54 UTC (verified domain; certificate approved immediately).
3. Wait for the certificate (usually minutes, up to 24 h), then tick **Enforce HTTPS**. Until then `https://klarweg.in` may show a certificate warning — do steps 1–3 close together. — **done** 09:56 UTC.
4. Merge this PR (Pages workflow deploys canonical/sitemap/CNAME). Confirm with `cmp` of live files vs `origin/main`. — **done**: merged `09cdf9df` ~10:10 UTC, Pages run 41038778911 green, sampled live files == `main`; the deploy also cleared a stale GitHub CDN 404 on `http://klarweg.in/`.
5. Live checks: §6. — **desktop done; iPhone pending.**
6. Afterwards (owner-approved Worker change): Access Worker vars `ACCOUNT_RETURN_URL=https://klarweg.in/account/index.html`, `SITE_BASE_URL=https://klarweg.in`; Reports `SITE_BASE_URL`. Note: redeploying Access from `main` would also ship code merged after 2026-10-03 — review that diff, or change only the vars. — **done**: Access vars via dashboard (version `940c61af`, 10:32 UTC; PR #244), Reports `SITE_BASE_URL` (version `1c28c085`, 10:43 UTC; PR #245).
7. Search Console: add `https://klarweg.in`, submit `/sitemap.xml`. — **done**: existing Domain property verified ~11:07 UTC; sitemap Success, 24 URLs. Pages report (0 indexed / 17 not indexed) is all historical WordPress URLs from before Klarweg.

## 6. Live verification after cutover

Checklist (kept for re-runs):

- `curl -I http://klarweg.in/` → 301 to `https://`; `https://klarweg.in/` → 200, valid certificate.
- `https://www.klarweg.in/` → 301 to `https://klarweg.in/`.
- `https://reegangandhi16-pixel.github.io/klarweg/chapter/chapter-a1-1-alphabet.html?x=1` → 301 to the same path + query on klarweg.in.
- Chrome + Safari (macOS and iOS), desktop and 375 px: homepage, a1.html → Chapter 1, word popup, audio play, Klarweg AI status, sign-up, log-in, Google sign-in (popup on desktop, redirect on iOS), log-out, saved words, a sandbox checkout returning to klarweg.in, live-classes waitlist, "Report an issue" submit.
- Safari: expect the cookie-probe message, as on github.io today.

### 6a. Desktop Chrome results (2026-10-30, ~11:18–12:00 UTC)

Run on the live domain in the owner's Chrome. Read-only: no account
created, no purchase, no report submitted, no data changed. Audio was
confirmed in a separate headless Chrome against the same live site (each MP3
reached `playing`), because the automation tab is a background tab
(`document.hidden`) and Chrome does not start media there.

| # | Test | Result | Evidence |
|---|---|---|---|
| 1 | HTTP → HTTPS | PASS | `http://klarweg.in/…` → 301 → `https://klarweg.in/…`, one hop, valid certificate |
| 2 | www → apex | PASS | `http(s)://www.klarweg.in/…` → `https://klarweg.in/…`, one hop; github.io links keep path + query |
| 3 | Homepage | PASS | Fraunces / Inter / JetBrains Mono loaded, `#FAFAF7` canvas, no broken images, no horizontal scroll, canonical `https://klarweg.in/`, no console errors |
| 4 | Word popup | PASS | "Mann": all fields (pronunciation, EN/HI, Noun/Nominativ, why, singular/plural, example), inside the viewport |
| 5 | Word audio | PASS (headless) | github.io audio CDN MP3s played to `ended` (0.70 s / 0.77 s); hero "Listen" sentence from jsDelivr (1.82 s) |
| 6 | A1 page + free Chapter 1 | PASS | A1: 47 chapters, "Try Chapter 1 free"; Chapter 1 opens for a Guest, 9 sections, 163 words, 31 sentence players |
| 7 | Reading / Listening audio | PASS (headless) | Popup word + vocabulary word played to `ended`; Reading "Play passage" and Listening "Play dialogue" (line 1 → line 2) played; stop/resume worked |
| 8 | Sign-in screen | PASS | Google button (`accounts.google.com/gsi/button`), email/password, no `origin_mismatch` |
| 9 | Google sign-in (popup) | PASS | Owner signed in; `/auth/me` 200 `authenticated: true`, `hasFullAccess: true`; header shows "My Account" |
| 10 | Paid chapter | PASS | Signed out: A1·2 shows "Chapter Locked" (`noindex`). Signed in: A1·2 unlocked (12 sections) |
| 11 | Saved words | PASS | Signed out → `/account/index.html?mode=login&next=/account/saved-words.html`; signed in → page loads (7 words) |
| 12 | Klarweg AI status | PASS | `/ai/status` 200; `signedIn` false → true after sign-in; `enabled: true` (`eligible: false` for the owner account; not domain-related) |
| 13 | Live classes | PASS | Loads, canonical on klarweg.in, waitlist form, no console errors |
| 14 | 404 + navigation | PASS | Nested missing path → Klarweg 404 with working links; 21 header/nav/footer pages all 200; no `/klarweg/` hrefs |
| 15 | Report form | PASS (cancelled) | "Found something wrong?" opens with the section label; posts to the Reports Worker, which accepts klarweg.in (204) |
| 16 | Admin "open" links | PASS (config) | Live Reports `SITE_BASE_URL = https://klarweg.in`; dashboard UI not opened (admin sign-in) |

Signed-in session: account → saved words → home → A1·2 → `c2.html`; all 14
Access Worker calls 200 (`/auth/me`, `/saved-words`, `/saved-words/counts`,
`/ai/status`, `/speech/status`, `/resources/…`); no console errors.

Findings: no failures. Low, pre-existing and unrelated to the domain:
jsDelivr returns 404 for `b1-words-manifest.json`; the engine falls back to
the `klarweg.in` copy (200). Note: GitHub Pages sends no HSTS header for
custom domains; Enforce HTTPS redirects all HTTP.

### 6b. iPhone Safari — pending (owner)

Default settings, then Private Browsing: redirects; audio (silent switch
off, popup speaker, long-press slow, Reading / Listening, lock-screen
behaviour); email sign-in (expect the cookie-blocked message under
tracking protection); Google redirect sign-in must land on
`https://klarweg.in/account/index.html` (any `authError=` code is a
failure); `next=` return to Chapter 1; A1·2 locked when signed out; optional
retry with "Prevent Cross-Site Tracking" off to confirm the known
third-party-cookie limit (§4).

## 7. Rollback

Rollback points recorded at cutover: `main` `e45e250a` (before #243); Access `e9e85b17`; Reports `4a920e47` (before the CORS change) / `60e4f1fb` (before the `SITE_BASE_URL` change).

- **Before the PR is merged:** Settings → Pages → remove the custom domain. github.io serves directly again within minutes. DNS can stay as it is — nothing else uses the domain.
- **After merge:** remove the custom domain *and* revert the merge commit (or `node scripts/set-site-origin.mjs --to https://reegangandhi16-pixel.github.io/klarweg --write`, delete `CNAME` + its allowlist line, open a PR). The rollback path is rehearsed byte-for-byte in `set-site-origin.test.mjs`.
- **Workers:** roll back to the recorded version (`wrangler rollback <version>`); additive CORS entries can stay.
- Keep the TTLs at 300 (§3) for a week after cutover so any DNS change propagates fast.
