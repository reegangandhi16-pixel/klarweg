/* ============================================================
   klarweg-tutor · SPEECH TRANSCRIPTION (A1·01 Record & Check)
   ------------------------------------------------------------
     POST /v1/transcribe
       body: the learner's recording, raw bytes (no multipart)
       content-type: the recorder's own type (audio/webm;codecs=opus,
                     audio/mp4 on Safari, audio/ogg on Firefox …)

   Reached only through klarweg-access (/speech/transcribe), which has
   already checked the session, entitlement, quotas and size limits.
   No user identity arrives here.

   Provider: OpenAI gpt-transcribe, POST /v1/audio/transcriptions
   (developers.openai.com/api/docs/guides/speech-to-text):
     model             gpt-transcribe          fixed here, never from the client
     languages[]       de                      gpt-transcribe uses the plural field;
                                               the singular `language` is not sent
     response_format   json                    gpt-transcribe returns { text, languages, usage }
     prompt            generic context only    never the target sentence
   Not sent: temperature (not documented for gpt-transcribe), keywords,
   timestamp_granularities (whisper-1 only — gpt-transcribe has no word
   timestamps, and none are invented).

   The recording exists only in this request's memory: it is never
   written anywhere. Logs carry numbers and status classes only — never
   the transcript, the audio or the provider's error text.

   Response (JSON):
     200 { ok:true, text, seconds|null, meta:{ provider:true, ms } }
     4xx/5xx { ok:false, error, meta:{ provider:boolean, ms } }
       provider:true  = OpenAI was contacted (counts against the global day)
   ============================================================ */

export const SPEECH_MODEL = 'gpt-transcribe';
export const SPEECH_URL = 'https://api.openai.com/v1/audio/transcriptions';
export const SPEECH_PROMPT = "Klarweg German language learning exercise. Transcribe the learner's German speech faithfully. Preserve what was actually spoken. Do not correct grammar.";
export const SPEECH_MAX_BYTES = 1024 * 1024;
const SPEECH_TIMEOUT_MS = 15000;

/* What MediaRecorder produces in current browsers, mapped to a filename the
   provider recognises (it detects the container from the name). */
const AUDIO_TYPES = {
  'audio/webm': 'speech.webm',
  'audio/ogg': 'speech.ogg',
  'audio/mp4': 'speech.m4a',
  'audio/x-m4a': 'speech.m4a',
  'audio/aac': 'speech.m4a',
  'audio/mpeg': 'speech.mp3',
  'audio/wav': 'speech.wav',
  'audio/x-wav': 'speech.wav',
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
}

/* Provider HTTP status → our error. A 401/403 from OpenAI means OUR key or
   project is wrong, never the learner's session, so it is not passed on as
   an auth status. */
function providerError(status) {
  if (status === 400) return { error: 'unreadable_audio', status: 422 };
  if (status === 413) return { error: 'too_large', status: 413 };
  if (status === 401 || status === 403) return { error: 'provider_auth', status: 502 };
  if (status === 429) return { error: 'provider_busy', status: 503 };
  return { error: 'provider_error', status: 502 };
}

function log(fields) {
  // Operational metadata only — never transcript text, audio or provider bodies.
  console.log(JSON.stringify({ svc: 'klarweg-tutor', action: 'transcribe', engine: 'openai:' + SPEECH_MODEL, ...fields }));
}

export async function transcribe(request, env) {
  const started = Date.now();
  const done = (body, status, extra = {}) => {
    const ms = Date.now() - started;
    log({ ok: !!body.ok, status, error: body.error || null, ms, ...extra });
    return json({ ...body, meta: { provider: !!extra.provider, ms } }, status);
  };

  const fullType = String(request.headers.get('content-type') || '').trim().toLowerCase();
  const baseType = fullType.split(';')[0].trim();
  const filename = AUDIO_TYPES[baseType];
  if (!filename) return done({ ok: false, error: 'unsupported_type' }, 415);

  const declared = Number(request.headers.get('content-length'));
  if (Number.isFinite(declared) && declared > SPEECH_MAX_BYTES) return done({ ok: false, error: 'too_large' }, 413);
  let audio = await request.arrayBuffer();
  const bytes = audio.byteLength;
  if (!bytes) return done({ ok: false, error: 'empty_audio' }, 400);
  if (bytes > SPEECH_MAX_BYTES) return done({ ok: false, error: 'too_large' }, 413, { bytes });

  const key = env.OPENAI_API_KEY;
  if (!key) return done({ ok: false, error: 'speech_unconfigured' }, 503, { bytes });

  const form = new FormData();
  form.append('model', SPEECH_MODEL);
  form.append('languages[]', 'de');
  form.append('response_format', 'json');
  form.append('prompt', SPEECH_PROMPT);
  form.append('file', new Blob([audio], { type: fullType }), filename);   // the learner's exact bytes, unconverted
  audio = null;                                                              // the form holds the only reference now

  let res;
  try {
    res = await fetch(SPEECH_URL, {
      method: 'POST',
      headers: { authorization: `Bearer ${key}` },
      body: form,
      signal: AbortSignal.timeout(SPEECH_TIMEOUT_MS),
    });
  } catch (err) {
    const timeout = !!err && (err.name === 'TimeoutError' || err.name === 'AbortError');
    return done({ ok: false, error: timeout ? 'provider_timeout' : 'provider_unreachable' }, timeout ? 504 : 502, { provider: true, bytes });
  }

  if (!res.ok) {
    try { await res.arrayBuffer(); } catch { /* drain; the provider body is never logged or returned */ }
    const e = providerError(res.status);
    return done({ ok: false, error: e.error }, e.status, { provider: true, bytes, upstream: Math.floor(res.status / 100) + 'xx' });
  }

  let out;
  try { out = await res.json(); } catch { out = null; }
  if (!out || typeof out !== 'object' || typeof out.text !== 'string') {
    return done({ ok: false, error: 'provider_malformed' }, 502, { provider: true, bytes });
  }
  const usage = out.usage && typeof out.usage === 'object' ? out.usage : null;
  const seconds = usage && usage.type === 'duration' && Number.isFinite(Number(usage.seconds)) ? Number(usage.seconds) : null;
  return done({ ok: true, text: out.text.trim(), seconds }, 200, { provider: true, bytes, seconds, empty: !out.text.trim() });
}
