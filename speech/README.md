# Klarweg speech service — A1·01 Record & Check pilot

Self-hosted German transcription for **Record & Check**. Feature-flagged: only
A1·01 uses it, and only when an endpoint is configured. Not deployed anywhere.

```
learner's microphone ─► MediaRecorder (browser, existing capture)
   └─► POST /v1/transcribe (this service, HTTPS in any real setup)
         └─► faster-whisper small · language=de · VAD · word timestamps
   ◄── { text, words, audio_sec, timings }          (no score, nothing stored)
browser ─► Word Match scorer (deterministic, chapter-app.js) ─► ✓/✗ per word + X/Y
```

Whisper only transcribes. The score is computed by deterministic code
(`chapter/chapter-app.js`, “Word Match scorer”; reference: `score_reference.py`,
parity test `scripts/speech-word-match.test.mjs`). It is a Word Match, not a
pronunciation score.

## Run locally

```sh
python3 -m venv venv && ./venv/bin/pip install -r requirements.txt
# one-time model download (needs network once; requests never download):
HF_HUB_OFFLINE=0 ./venv/bin/python -c "from faster_whisper import WhisperModel; WhisperModel('small', device='cpu', compute_type='int8')"
ALLOWED_ORIGINS=http://127.0.0.1:8811 MODEL=small ./venv/bin/uvicorn server:app --host 127.0.0.1 --port 8901
```

Open the chapter from a local server on the same loopback host, e.g.
`http://127.0.0.1:8811/chapter/chapter-a1-1-alphabet.html?kwspeech=http://127.0.0.1:8901`.
The `kwspeech` override is accepted only for a loopback service on a loopback
page; on the live site the pilot turns on only through `window.KW_SPEECH_API`
(https), which is not set anywhere yet.

## Limits (environment variables)

| Variable | Default | Effect |
|---|---|---|
| `MAX_UPLOAD_BYTES` | 2 MiB | larger uploads → 413 |
| `MAX_AUDIO_SEC` | 30 | longer recordings → 413 (checked before full decoding) |
| `REQUEST_TIMEOUT_SEC` | 25 | slower transcriptions → 504 (the work finishes in the background, then frees its slot and deletes its file) |
| `CONCURRENCY` | 1 | parallel transcriptions |
| `QUEUE_WAIT_SEC` | 10 | wait for a free slot, then 503 + `Retry-After` |
| `THREADS` | 2 | CPU threads per transcription |
| `ALLOWED_ORIGINS` | 127.0.0.1:8811 | CORS allowlist |

Accepted types: webm, ogg, mp4/m4a/aac (Safari), mpeg, wav.

## HTTPS and access (before any non-local use)

- Terminate TLS in a reverse proxy (Caddy/nginx) in front of uvicorn; bind
  uvicorn to 127.0.0.1 behind it.
- Add an entitlement check: the browser cannot hold a secret, so the proxy or
  the service should accept a short-lived token issued by the Access Worker for
  signed-in learners with A1 access, plus per-learner rate limits.
- Set `ALLOWED_ORIGINS` to the site origin only.

## Privacy

- No third-party speech API; `HF_HUB_OFFLINE=1` is set before the model loads.
- Audio is written to a private temp directory (0700) only for decoding and
  deleted in `finally`; the directory is removed on shutdown.
- Transcripts are returned to the caller and never stored.
- Logs: status code, audio length and timings only — no audio, no text.

## Status

Validated on synthetic voices only. Before any accuracy claim, validate with
real learner recordings collected with explicit consent.
