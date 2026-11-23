# Klarweg Social Agent — draft / not live

This is an isolated, approval-gated social publishing pipeline. Nothing is published until explicitly enabled and an individual item in `social-agent/queue.json` has `status: "approved"` and per-channel `approved: true`.

## Outputs
- **Instagram:** issue with 4 approved image links and caption, for a human to add licensed music and publish in the Instagram app; never API-posts the carousel.
- **Facebook Page:** automated **standalone image** via Facebook Page Photos API.
- **Threads:** automated **short text or single image** via Threads API.
- Every caption includes the canonical `https://klarweg.in` URL automatically. Threads text (including the appended URL) must be <= 500 characters.

## Security and setup
1. **Do not merge this draft PR yet**. Run `node --test social-agent/scripts/*.test.mjs` and dry-run locally.
2. Configure durable publicly accessible HTTPS URLs for image assets (no expiring/signed URLs; use approved commercial image rights). Host 4 Instagram slide PNG/JPEG images and separate Facebook/Threads images, e.g. on Klarweg's CDN / Cloudflare R2 public domain.
3. Put these values in **GitHub repository Secrets**, never in JSON, a message, or code:
   - `FACEBOOK_PAGE_ID` (Page ID)
   - `FACEBOOK_PAGE_ACCESS_TOKEN` (Page Access Token with required publishing permissions)
   - `THREADS_ACCESS_TOKEN` (Threads-specific access token with `threads_basic` and `threads_content_publish`)
4. For each upcoming post, edit the `queue.json` record: add durable media URLs, final proofread copy, set `status` + per-platform `approved` to true, set ISO-8601 `scheduled_at` with `+05:30` timezone. Publish no content without this review.
5. Run the manual workflow **dry_run=true** first and verify the preview logs. Check token permissions with private safe testing before enabling scheduled publishing. Set repo **Variable** `SOCIAL_PUBLISH_ENABLED=true` only when ready. Then merge PR to default branch; GitHub Actions schedule only runs from default branch.
6. The scheduler will post eligible content at around FB 13:00 IST, IG 19:30 IST (manual issue, not publish), and Threads 20:15 IST. GitHub Actions schedules can be delayed; jobs older than 36 hours are skipped rather than dumped all at once.
7. All attempts are recorded in `ledger.json`, including failures. Unknown outcomes have `needs_manual_review` and must be manually reconciled to avoid duplicate posts. Never delete ledger entries casually.

## Platform limits
- Music on Instagram carousels is a manual Instagram-app step.
- Windsor.ai and Supermetrics credentials already connected in ChatGPT are **not available as GitHub secrets**, and cannot be copied into this agent. Meta-specific tokens must be authorized separately by the owner.
- Images need durable public links. Do not use sandbox URLs, short-lived Canva previews or expiring CDN links.
- This agent does not generate new AI artwork automatically. Content authoring/proofreading is a separate stage.

## Dry run and tests
`node --test social-agent/scripts/*.test.mjs`
`node social-agent/scripts/agent.mjs --dry-run`

## Operational safety
- Default is **OFF**. Every channel is gated.
- No unsolicited repeated retries. Review all `needs_manual_review` jobs before another run.
- Scheduled publications are not guaranteed to fire at the exact minute due to GitHub Actions queueing.
- Check Meta permission scopes and current API versions before enabling; APIs change.

Set the repository Actions variable `FACEBOOK_PAGE_ID` to `1122503034281366`. The workflow checks the queue at 04:00, 08:00, 12:00, 16:00, 20:00 and 00:00 IST. Set each approved queue item to the intended slot.
