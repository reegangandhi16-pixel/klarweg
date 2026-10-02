"""Klarweg speech transcription service — A1·01 Record & Check pilot.

Transcribes a short German recording with faster-whisper and returns the text.
It never scores: Word Match is computed by deterministic code in the browser
(chapter-app.js, "Word Match scorer"). It is a transcription service only.

Privacy
- No third-party speech API. The model is loaded from the local cache with
  HF_HUB_OFFLINE=1 (download it once beforehand; see README.md).
- Uploaded audio exists only as a temp file in a private directory for the
  length of one request and is deleted in `finally`. Transcripts are returned,
  never stored. Logs carry status codes and timings only.

Limits (env): MAX_UPLOAD_BYTES, MAX_AUDIO_SEC, REQUEST_TIMEOUT_SEC,
CONCURRENCY, QUEUE_WAIT_SEC. Run it behind an HTTPS reverse proxy in any
non-local setting; it binds to whatever host uvicorn is given.

Run (local):  MODEL=small uvicorn server:app --host 127.0.0.1 --port 8901
"""
import asyncio, logging, os, shutil, tempfile, time
from contextlib import asynccontextmanager

os.environ.setdefault("HF_HUB_OFFLINE", "1")           # never download at request time

import av
from fastapi import FastAPI, File, Request, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from faster_whisper import WhisperModel

MODEL = os.environ.get("MODEL", "small")
MAX_UPLOAD_BYTES = int(os.environ.get("MAX_UPLOAD_BYTES", str(2 * 1024 * 1024)))
MAX_AUDIO_SEC = float(os.environ.get("MAX_AUDIO_SEC", "30"))
REQUEST_TIMEOUT_SEC = float(os.environ.get("REQUEST_TIMEOUT_SEC", "25"))
CONCURRENCY = int(os.environ.get("CONCURRENCY", "1"))
QUEUE_WAIT_SEC = float(os.environ.get("QUEUE_WAIT_SEC", "10"))
THREADS = int(os.environ.get("THREADS", "2"))           # measured: 2 threads ≈ the default 4 on an M2
ALLOWED_ORIGINS = [o.strip() for o in os.environ.get("ALLOWED_ORIGINS", "http://127.0.0.1:8811,http://localhost:8811").split(",") if o.strip()]
AUDIO_TYPES = ("audio/webm", "audio/ogg", "audio/mp4", "audio/mpeg", "audio/wav", "audio/x-wav", "audio/aac", "audio/x-m4a")

log = logging.getLogger("kw-speech")
logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
STATE = {"model": None, "load_ms": None, "tmpdir": None}
SLOTS = asyncio.Semaphore(CONCURRENCY)


@asynccontextmanager
async def lifespan(app):
    t0 = time.perf_counter()
    STATE["model"] = WhisperModel(MODEL, device="cpu", compute_type="int8", cpu_threads=THREADS)
    STATE["load_ms"] = round((time.perf_counter() - t0) * 1000)
    STATE["tmpdir"] = tempfile.mkdtemp(prefix="kw-speech-")   # 0700
    log.info("model=%s loaded in %d ms", MODEL, STATE["load_ms"])
    yield
    shutil.rmtree(STATE["tmpdir"], ignore_errors=True)       # nothing in flight survives a restart


app = FastAPI(lifespan=lifespan, docs_url=None, redoc_url=None, openapi_url=None)
app.add_middleware(CORSMiddleware, allow_origins=ALLOWED_ORIGINS, allow_methods=["POST", "GET"], allow_headers=["*"], max_age=600)


def problem(status, code, message):
    return JSONResponse({"error": code, "message": message}, status_code=status, headers={"Cache-Control": "no-store"})


def transcribe_file(path):
    """Blocking: runs in a worker thread. Returns the transcription payload."""
    with av.open(path) as c:                                   # duration check before decoding the whole file
        dur = float(c.duration / av.time_base) if c.duration else None
    if dur is not None and dur > MAX_AUDIO_SEC + 0.5:
        return {"too_long": round(dur, 1)}
    t0 = time.perf_counter()
    segments, info = STATE["model"].transcribe(path, language="de", task="transcribe", beam_size=5, vad_filter=True,
                                               word_timestamps=True, condition_on_previous_text=False)
    segs = list(segments)
    if info.duration > MAX_AUDIO_SEC + 0.5:
        return {"too_long": round(info.duration, 1)}
    return {
        "text": " ".join(s.text.strip() for s in segs).strip(),
        "language": "de",
        "audio_sec": round(info.duration, 2),
        "speech_sec": round(info.duration_after_vad, 2),
        "words": [{"word": w.word.strip(), "start": round(w.start, 2), "end": round(w.end, 2), "probability": round(w.probability, 3)}
                  for s in segs for w in (s.words or [])],
        "model": MODEL,
        "transcribe_ms": round((time.perf_counter() - t0) * 1000),
    }


@app.get("/health")
def health():
    return {"ok": STATE["model"] is not None, "model": MODEL, "load_ms": STATE["load_ms"], "busy": SLOTS.locked(),
            "limits": {"max_upload_bytes": MAX_UPLOAD_BYTES, "max_audio_sec": MAX_AUDIO_SEC, "timeout_sec": REQUEST_TIMEOUT_SEC, "concurrency": CONCURRENCY}}


@app.post("/v1/transcribe")
async def transcribe(request: Request, audio: UploadFile = File(...)):
    t0 = time.perf_counter()
    declared = int(request.headers.get("content-length") or 0)
    if declared > MAX_UPLOAD_BYTES + 64 * 1024:
        log.info("status=413 reason=upload-size bytes=%d", declared)
        return problem(413, "too_large", "The recording is too large.")
    ctype = (audio.content_type or "").split(";")[0].strip().lower()
    if ctype and ctype not in AUDIO_TYPES and ctype != "application/octet-stream":
        log.info("status=415 type=%s", ctype)
        return problem(415, "unsupported_type", "Unsupported audio type.")
    data = await audio.read(MAX_UPLOAD_BYTES + 1)
    if len(data) > MAX_UPLOAD_BYTES:
        log.info("status=413 reason=upload-size bytes>%d", MAX_UPLOAD_BYTES)
        return problem(413, "too_large", "The recording is too large.")
    if not data:
        return problem(400, "empty", "The recording is empty.")
    try:
        await asyncio.wait_for(SLOTS.acquire(), timeout=QUEUE_WAIT_SEC)
    except asyncio.TimeoutError:
        log.info("status=503 reason=busy")
        return JSONResponse({"error": "busy", "message": "The speech check is busy."}, status_code=503, headers={"Retry-After": "5", "Cache-Control": "no-store"})
    fd, path = tempfile.mkstemp(dir=STATE["tmpdir"], suffix=".audio")
    work = None
    try:
        with os.fdopen(fd, "wb") as f:
            f.write(data)
        del data
        work = asyncio.get_running_loop().run_in_executor(None, transcribe_file, path)
        try:
            out = await asyncio.wait_for(asyncio.shield(work), timeout=REQUEST_TIMEOUT_SEC)
        except asyncio.TimeoutError:
            log.info("status=504 reason=timeout after=%.1fs", time.perf_counter() - t0)
            return problem(504, "timeout", "The speech check took too long.")
        except Exception as e:                                  # undecodable audio etc.
            log.info("status=422 reason=decode %s", type(e).__name__)
            return problem(422, "undecodable", "The recording could not be read.")
        if "too_long" in out:
            log.info("status=413 reason=audio-length sec=%.1f", out["too_long"])
            return problem(413, "too_long", f"Recordings are limited to {int(MAX_AUDIO_SEC)} seconds.")
        out["total_ms"] = round((time.perf_counter() - t0) * 1000)
        log.info("status=200 audio=%.1fs transcribe=%dms total=%dms", out["audio_sec"], out["transcribe_ms"], out["total_ms"])
        return JSONResponse(out, headers={"Cache-Control": "no-store"})
    finally:
        def cleanup(_=None):
            try: os.remove(path)
            except FileNotFoundError: pass
            SLOTS.release()                                     # the slot frees only when the work has really finished
        if work is not None and not work.done():
            work.add_done_callback(cleanup)                     # a timed-out transcription still owns its file and slot
        else:
            cleanup()
