# Photoreal pilot — provider research and budget (2026-11-10)

Nothing has been bought or generated. Prices come from provider pages read on 2026-11-10; re-check on the day of
purchase. No paid service may be used until the owner approves this budget.

## Recommended stack

| Step | Provider / model | Price (official page) | Licence / data |
|---|---|---|---|
| Room plate + examiner still | Google Gemini API: `gemini-3-pro-image` | $0.134 per 1K/2K image, $0.24 per 4K image (no free tier) | Google does not claim ownership of generated content. Paid tier: prompts/outputs not used to improve products. We are responsible for use. Invisible SynthID watermark. No deceptive deepfakes of real people (ours are fictional) |
| Idle/listening loop (image→video) | Google Veo 3.1 Fast (Standard for comparison) | Fast $0.12/s at 1080p; Standard $0.40/s; audio is always generated and billed (we discard it) | Same Gemini API terms |
| German line (voice) | Google Cloud TTS (the billed project already used for M0 audio) | well under $0.05 for one line | Existing setup |
| Lip-sync on the idle loop | sync.so `lipsync-2-pro` (and `sync-3` for comparison) | lipsync-2-pro $0.067–0.083/s, sync-3 $0.107–0.133/s; Creator plan $19/mo (no watermark, API). Free: 3 clips/month ≤15 s, watermarked, no card | Help centre: "All Sync.so subscription plans include full commercial usage rights". The ToS likeness/consent clause was not found; it must be read before sign-up |
| Optional A/B for the spoken take | ByteDance OmniHuman 1.5 via fal.ai (image + audio → talking video) | $0.16/s | fal terms: "personal or internal business use", with end users allowed through our product. Partner-model terms also apply. Weaker clarity than Google/sync |

### Why this stack

1. It is the only pipeline that keeps every clip on the plate's own pixels:
   - the still is the start frame for the idle loop;
   - the lip-sync is applied onto that same idle loop.
   Switching between idle and speaking is therefore invisible, and the ingest script measures the seam (PSNR).
2. Audio-driven lip-sync works from the sound itself, so it is language-agnostic. No provider publishes German
   benchmarks, so the pilot line deliberately contains ü/ö/ch/r sounds.
3. The licensing is the clearest of the options: Google's paid terms, plus sync's explicit commercial rights.

### Considered, not chosen for the pilot

| Provider | Why not now |
|---|---|
| HeyGen Avatar IV | Strong lip-sync, but it is an avatar platform: little control over our room framing and seamless loops. API is pay-as-you-go, about $3–5 per finished minute (third-party figures, not verified). Photo-avatar likeness rules apply |
| Hedra Character-3 | Subscription credits; paid plans are commercial, free is non-commercial with a watermark; plan prices conflict between sources |
| Kling (i2v + lip-sync) | Cheaper image-to-video (about $0.084/s, reseller figures) but the official terms were not verified. Fallback for idle loops |
| Higgsfield (aggregator, MCP connected) | Ownership not claimed, commercial use not tied to plan; credit-based. The connector session has expired, so the account state is unknown |

## Smallest useful pilot — budget (hard cap $45)

| Item | Usage | Cost |
|---|---|---|
| Stills (room + lead examiner, about 45, blazer) | 12 × 2K iterations + 2 × 4K finals | $2.09 |
| Idle/listening loop | 4 × 8 s Veo 3.1 Fast 1080p | $3.84 |
| Comparison loop | 1 × 8 s Veo 3.1 Standard | $3.20 |
| German line (TTS) | 1 line of about 150 characters | < $0.05 |
| sync.so Creator | 1 month (cancel after) | $19.00 |
| Lip-sync takes | 4 × 10 s lipsync-2-pro + 2 × 10 s sync-3 | $5.98 |
| **Subtotal** | | **$34.16** |
| Optional OmniHuman A/B | 3 × 10 s | $4.80 |
| **With optional** | | **$38.96** |

Gates (stop at any step):
1. Google stills + loops, about $9 → owner sees the stills and loop.
2. sync.so free tier (watermarked, $0): German lip-sync quality check on one loop.
3. Creator plan + clean takes, about $25 → ingest → non-production HTTPS preview → owner tests on iPhone.

Owner actions needed:
- a Gemini API key in a billed GCP project, with a $45 budget alert (kept outside the repo);
- a sync.so account;
- approval of this budget.
