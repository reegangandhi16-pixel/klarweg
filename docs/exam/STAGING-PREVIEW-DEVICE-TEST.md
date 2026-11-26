# O-6: HTTPS staging preview and real-phone test (deployed to NON-PROD 2026-11-24)

Owner decision (OWN-2026-11-24-3): prepare a secure HTTPS staging preview with dummy content only, isolated from
production learners and live services. Confirm there is no production impact, extra cost or exposure of private
content before redeploying. This file records those checks.

**Status 2026-11-24:** redeployed to non-prod by a parallel session. The checks below were done first.
- `klarweg-exam-nonprod` = b5279125 (rollback ffa37711; D1 bookmark taken before: 00000467-00000000-0000512d-0ee2e110798334d6cf751c0120c79e3c).
- `klarweg-exam-preview` = 193ba35f (rollback c7f02339), built from 1afaa48b.
- The hosted check passed on a fresh non-prod account. Production `klarweg-exam` is unchanged at 335b45df.
- The rater-warning and contrast fixes (bdc99b4f, 3e8d699a) came after this build and are not on the preview yet.

## What would be redeployed

| Piece | Now (since 2026-11-11) | After the redeploy | Rollback |
|---|---|---|---|
| `klarweg-exam-preview` (static page host, workers.dev, HTTPS) | c7f02339 (fix branch 9ccf1970) | client from `feat/exam-b1-complete` (O-8/O-5 wording, Modelltest progress, lease fix, 4-way upload) | `wrangler rollback c7f02339` |
| `klarweg-exam-nonprod` (non-prod exam Worker) | ffa37711 (main dbdd462a + `EXAM_SINGLE_EXAMINER`) | `feat/exam-b1-complete` with the same vars | `wrangler rollback ffa37711` |
| `klarweg-access-nonprod` | 456b4692 | **unchanged** | n/a |

No migration is needed: `exam-worker/migrations` has not changed since dbdd462a.

## Checks done on 2026-11-24 (all local or read-only)

| Check | Result |
|---|---|
| Production impact | None. The page host has **no bindings**, no routes and no custom domain (`wrangler deploy --dry-run`: "No bindings found"). The exam Worker binds only `klarweg-exam-nonprod` (D1 309e3ca3…) and the `*-nonprod` R2 buckets. Production uses `klarweg-exam` / D1 5ebb2c5e… / `klarweg-exam-content`, none of which appears in the config. The non-prod Worker has `workers_dev = false` and no route, so it is reached only through the non-prod Access Worker. The production Access and exam Workers and klarweg.in are not touched. |
| Dummy content only | The non-prod Worker runs `EXAM_SYNTHETIC_FORMS=on`, `EXAM_MOCK_FORMS=off`, `EXAM_PRODUCTION_FORMS=off`, and `EXAM_REVIEW_FORMS` is unset (a test fails if any config sets it). The guard test keeps mock forms out of non-prod, so neither M0 nor M1–M10 is there. |
| Private content in the page bundle | None. The 32 files (352 KB) were scanned for form ids, M0–M10 names, audio files and production API hosts. The only hit is a code comment in `api.js` that is already public on main. The build tool refuses any page that names a production host. |
| Cost | Workers on the existing account; static assets plus a few hundred test requests stay far inside the free daily request allowance. No paid service is activated, and no TTS or AI call is made. The existing per-minute deadline cron is unchanged. |
| Indexing / exposure | `_headers`: `X-Robots-Tag: noindex, nofollow, noarchive`, `Cache-Control: no-store`, `X-Frame-Options: DENY`; `robots.txt` disallows all. A learner needs a non-prod account **and** a non-prod grant. |

## Commands (as used; for a later refresh)

```sh
# page host (static files built by exam-content/tools/build-nonprod-site.mjs into qa-live/nonprod/hosted-site-2026-11-24)
wrangler deploy -c qa-live/nonprod/preview-host/wrangler.2026-11-24.jsonc --message "O-6 2026-11-24: feat/exam-b1-complete client, synthetic only"
# non-prod exam Worker
cd exam-worker && wrangler deploy -c wrangler.nonprod.toml --var EXAM_SINGLE_EXAMINER:on --message "O-6 2026-11-24: feat/exam-b1-complete"
```

## Real-phone checklist (owner, about 20 minutes per phone)

Use **iPhone Safari** and **Android Chrome**, on Wi-Fi and with wired or Bluetooth headphones ready. Use the non-prod
learner test account.

1. Open the preview URL and sign in. The start page loads, and the footer shows the non-affiliation notice.
2. Start the synthetic Übung and answer two Lesen items. Switch Teil tabs, then lock and unlock the phone: the answers are still there.
3. Hören: the tone check plays, and a text plays without a pause button. Put the phone to sleep for 10 s and come back: the timer is correct and a replay is offered once.
4. Schreiben: type with umlauts on the phone keyboard, reload the page, and check the text is still there.
5. Sprechen:
   - allow the microphone and check that the mic test shows a level;
   - record Teil 1–3, with the screen locked once during preparation;
   - on the result page, play your own recordings.
6. The result shows the disclaimer: "Klarweg-Simulation – kein offizielles Ergebnis …". It also shows "nicht mit dem Goethe-Institut verbunden", and no "zertifiziert".
7. Note the iOS/Android version, the browser version, and anything that looked wrong.

The engineering browser tests already cover desktop Chrome and a 360×640 mobile viewport on real M0–M10 forms (22/22).
Desktop Safari 27.2 decodes the exam WebM/Opus audio. The phone test is the remaining gap: the iOS microphone format
(`audio/mp4`, allowed by the server) and real audio routing.
