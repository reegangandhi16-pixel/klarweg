# Klarweg Social Agent — draft; not live

This is a **safe, approval-gated** social-publishing pipeline. Nothing is published until the owner enables the repository variable and approves each queued channel. It is isolated from website production code.

## What happens for each approved topic

- **Instagram:** creates a GitHub issue containing exactly 4 slides + caption. **The owner selects music and posts manually in Instagram**. No automated Instagram publish.
- **Facebook:** automatically publishes **one self-contained educational image** at the scheduled time.
- **Threads:** automatically publishes **one short standalone image or text** at the scheduled time.
- All captions are normalized to include **https://klarweg.in**. Threads copy must be at most 500 characters including the appended URL.

## Setup — required before production

1. Review this draft PR, run tests and a dry-run, and **do not merge yet**.
2. Upload approved IG, FB and Threads image assets to **durable public HTTPS URLs**, e.g. a Klarweg CDN. Use PNG/JPEG URLs. No ChatGPT sandbox links, signed/temporary Meta CDN links or ephemeral Canva thumbnails.
3. Configure GitHub **repository secrets**, not in chat, code, logs, or queue.json:
   - `KLARWEG_FB_PAGE_ID` = Klarweg Facebook Page ID.
   - `KLARWEG_FB_PAGE_TOKEN` = Meta Page token with page publishing permissions.
   - `KLARWEG_THREADS_TOKEN` = Threads-specific token with `threads_basic` and `threads_content_publish`.
   - `GITHUB_TOKEN` comes from GitHub Actions automatically (requires repo Issues enabled).
4. For each topic, fill in final **media URLs**, proofread the captions, and set post `status: "approved"` and each relevant channel `approved: true` only after editorial approval. Set timezone-aware ISO `scheduled_at`, e.g. `2026-11-19T13:00:00+05:30`.
5. Run dry-run and validate Meta token scopes/expiry privately; then set GitHub repository **variable** `SOCIAL_PUBLISH_ENABLED=true` and merge into the default branch. The scheduled workflow will only start after merge and enablement.

## Six daily publishing slots (Asia/Kolkata)

The owner has selected **six distinct posts per day**, at exactly 4-hour intervals:

| Slot | IST | Run behavior |
|---|---|---|
| 1 | 04:00 AM | Process approved Facebook/Threads posts; create Instagram manual music task |
| 2 | 08:00 AM | Same |
| 3 | 12:00 PM | Same |
| 4 | 04:00 PM | Same |
| 5 | 08:00 PM | Same |
| 6 | 12:00 AM (midnight) | Same — **this belongs to the next calendar day** |

Cron uses `30 2,6,10,14,18,22 * * *` in UTC, corresponding to **08:00, 12:00, 16:00, 20:00, 00:00, 04:00 IST** every day. The order wraps across midnight; the code uses explicit timezone-aware dates for each post.

Each slot needs a unique fact-checked, approved topic; 6 topic packages/day are potentially **24 Instagram slide images + 6 Facebook images + 6 Threads images**. Editorial review and hosted images must be prepared **before** the planned publishing time. All platform captions must include `https://klarweg.in` (enforced by code). No approved post = no action.

**Instagram is manual:** the agent creates an issue with four slides, caption and a reminder to add licensed music; it cannot guarantee Instagram publication at the scheduled instant. Facebook and Threads are eligible for automatic publication only after separate approval and credentials are configured.

GitHub scheduled jobs are best-effort and **may start late or occasionally be dropped**; there is no guaranteed exact-to-the-minute publication. A due job is accepted in a 36-hour window. All `scheduled_at` timestamps include `+05:30`.

## Local checks

From repository root:

```sh
node --test social-agent/scripts/*.test.mjs
node social-agent/scripts/agent.mjs --dry-run
```

The queue defaults to draft, no post URLs are present, and the publishing switch is **off**. Existing live content is unaffected.

## Duplicate protection

A local `ledger.json` records every attempt **before** posting and results afterward; the workflow commits the ledger. A failed/unknown external request is **never retried automatically**. The owner should inspect and reconcile each `needs_manual_review` entry to avoid duplicates. This is best-effort and cannot provide exactly-once guarantees under GitHub service interruptions.

## Limitations

- This code schedules approved posts; **it does not create images automatically**. Creative generation and factual review happen in a separate content-creation step.
- Windsor.ai/Supermetrics authorizations in ChatGPT do **not** export publishing tokens into GitHub; a fresh Meta developer/API authorization is needed.
- Facebook/Threads image publication needs stable image URLs. When unavailable, leave the specific post in draft.
- Adding licensed music to an Instagram photo carousel requires the Instagram mobile app. It is not auto-posted.
- Keep Meta permissions up-to-date and refresh expiring Threads tokens.

Official references:
- https://developers.facebook.com/docs/graph-api/reference/photo/
- https://www.postman.com/meta/threads/documentation/dht3nzz/threads-api
- https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax
