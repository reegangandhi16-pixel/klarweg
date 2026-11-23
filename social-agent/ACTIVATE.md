# Klarweg Social Agent — Activation checklist

**Status: draft only. Do not enable publishing until every check passes.**

## A. Existing Klarweg accounts (non-secret identifiers)

- Facebook Page: **Klarweg German Institute**, ID: `1122503034281366`.
- Threads username: `@klarwegofficial`.
- Instagram username: `@klarwegofficial` (manual carousel publishing with native app music).
- Mandatory link in **every** caption: `https://klarweg.in`.
- 6 daily local slots: **04:00, 08:00, 12:00, 16:00, 20:00, 00:00 (Asia/Kolkata)**.
- No draft is eligible for publication unless content status AND individual platform approval are explicitly set to `approved`/`true`.

## B. Create the publishing authorizations privately

1. Open [Meta for Developers](https://developers.facebook.com/apps/) while signed in to the Facebook account that administers the Klarweg Page.
2. For **Facebook Pages**, set up the Pages API / Facebook Login use case and request appropriate Page publishing scopes, typically `pages_manage_posts`, `pages_read_engagement`, and `pages_show_list`, as allowed for your app and Page role. Get a **Page access token for the Klarweg Page**, not a short-lived personal test token. Confirm its expiry and renewal method.
3. For **Threads**, use the official Threads API use case/app. Authorize `@klarwegofficial` with `threads_basic` and `threads_content_publish`. Obtain and maintain a Threads token, using its approved refresh path.
4. Do not paste access tokens, app secrets, or passwords in ChatGPT, Issues, commits, images, or public links.

Official Meta references:
- https://developers.facebook.com/docs/graph-api/reference/page/feed/
- https://developers.facebook.com/docs/graph-api/reference/photo/
- https://www.postman.com/meta/threads/collection/dht3nzz/threads-api

## C. GitHub Actions Secrets and configuration

Go to the **Klarweg repository**: https://github.com/reegangandhi16-pixel/klarweg/settings/secrets/actions

Create repository Actions Secrets with **exact** names:

| Secret name | Value |
|---|---|
| `KLARWEG_FB_PAGE_ID` | `1122503034281366` |
| `KLARWEG_FB_PAGE_TOKEN` | Authorized Page access token from Meta |
| `KLARWEG_THREADS_TOKEN` | Authorized Threads API access token |

GitHub Actions automatically provides `GITHUB_TOKEN`; do not generate or upload a personal access token for that entry.

Once this draft PR is reviewed, merged, and the secrets exist, run **Klarweg Meta Connection Check (Read-only)** from GitHub Actions. It reads account identity only and creates **no posts**. A successful read-only check does not itself prove publishing rights.

## D. Media hosting

Every auto-posted image must have a **durable publicly retrievable HTTPS PNG/JPEG URL**, e.g.
`https://cdn.klarweg.in/social/2026-11-17/growth-001/facebook.jpg`.

For each of 6 daily topics, prepare:
- Instagram: 4 unique slides (music and final publishing done in Instagram app)
- Facebook: 1 complete standalone infographic
- Threads: 1 separate single image, or an independently useful short text post

**Do not** use ChatGPT `sandbox:` paths, temporary upload URLs, expiring signed image links, or tiny Canva preview URLs. Test that Meta can fetch the image publicly without an authentication cookie.

## E. Publish a single owner-approved pilot, not six at once

1. Run unit tests and `node social-agent/scripts/agent.mjs --dry-run`.
2. Fill in one topic with final captions + permanent media URLs in `social-agent/queue.json`.
3. Proofread German/English, images and quizzes. Mark **only that topic** and selected channels `approved`.
4. In repo Settings → Secrets and variables → Actions → Variables, add `SOCIAL_PUBLISH_ENABLED=true` **only after** reviewing and merging the draft PR and completing the tests.
5. Have a human watch the first Facebook and Threads posts. Confirm image, caption, website link and unique URL. Then add the remaining approved content with staggered slots.
6. For Instagram, expect the agent to create a **manual** posting Issue; select licensed music in Instagram and publish there. It does not auto-publish Instagram.

## F. Safety / operating limits

- A record is logged before calling the platform to reduce unintended duplicate retries.
- Failure or unknown API outcome requires human reconciliation; never retry automatically without checking the social page.
- GitHub scheduled workflows can be delayed; **exact minute** cannot be guaranteed.
- A missing credential or expired token causes a failure rather than switching to another connected social account.
- Each completed slot uses a different approved topic; 6/day means at most 18 platform-specific posts if all 3 platforms are published (Instagram manual).
- If a 6-slot content batch is not ready, it is better to **skip a slot** than post an inaccurate or repeated graphic.
