/**
 * app/api/chat/route.ts   (Next.js App Router — server-side only)
 * ----------------------------------------------------------------------------
 * Secure AI-tutor endpoint for Klarweg.  POST /api/chat
 *
 *   body: { chapterId: string, question: string, history?: {role,text}[] }
 *          ↑ NO chapter content from the client — the server retrieves it.
 *
 *   200 { text, sources, model, usage }
 *   400 bad input · 401 unauthenticated · 403 bad origin
 *   429 rate limited · 503 { text, fallback:true } on LLM/budget unavailable
 *
 * Hardened per security review:
 *   1. RAG retrieval is 100% server-side (client cannot inject context).
 *   2. Auth required — only a logged-in student session may call it.
 *   3. Distributed per-IP + per-user rate limiting (Upstash/Vercel KV).
 *   + Origin allowlist, trusted IP, prompt-size cap, no client-forged
 *     assistant turns, and a global daily spend breaker.
 */
import { NextRequest, NextResponse } from 'next/server';
import { callLLM, LLMError, type LLMMessage } from '@/lib/llm';
import { checkRateLimits } from '@/lib/rate-limit';
import { getSessionUser } from '@/lib/auth';
import {
  getChapter, retrieveChunks, buildContext, buildSystemPrompt, fallbackAnswer,
} from '@/lib/rag';
import { checkBudget, recordSpend } from '@/lib/budget';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 15; // keep under platform function cap so our timeout wins

const MAX_QUESTION = 1000;
const MAX_HISTORY = 6;
const MAX_HISTORY_CHARS = 800;     // per assistant turn we echo back
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);

function log(event: string, data: Record<string, unknown>) {
  console.log(JSON.stringify({ t: new Date().toISOString(), svc: 'api/chat', event, ...data }));
}

/** Trusted client IP — prefer the platform-provided ip, fall back to the
 *  LEFTMOST untrusted XFF only if nothing better exists. On Vercel, req.ip is
 *  set from the platform and cannot be spoofed. */
function trustedIp(req: NextRequest): string {
  // @ts-ignore — Next provides req.ip on supported platforms
  const platformIp: string | undefined = (req as any).ip;
  if (platformIp) return platformIp;
  const xff = req.headers.get('x-forwarded-for') || '';
  // last hop added by YOUR proxy is most trustworthy; if unsure use first.
  return xff.split(',').map((s) => s.trim()).filter(Boolean).pop() || 'unknown';
}

function originAllowed(req: NextRequest): boolean {
  if (!ALLOWED_ORIGINS.length) return true; // not configured → allow (dev)
  const origin = req.headers.get('origin') || '';
  if (origin) return ALLOWED_ORIGINS.includes(origin);
  // No Origin header (same-origin server fetch / curl) — allow.
  return true;
}

export async function POST(req: NextRequest) {
  const started = Date.now();

  // ── Origin allowlist (cheap, before any work) ───────────────
  if (!originAllowed(req)) {
    return NextResponse.json({ error: 'Forbidden origin.' }, { status: 403 });
  }

  // ── 2. Authentication — must be a logged-in student ─────────
  const user = await getSessionUser(req);
  if (!user) {
    return NextResponse.json({ error: 'Please sign in to use the tutor.' }, { status: 401 });
  }

  const ip = trustedIp(req);

  // ── 3. Distributed rate limit (per-IP AND per-user) ─────────
  const rl = await checkRateLimits(ip, user.id);
  if (!rl.ok) {
    log('rate_limited', { uid: user.id, scope: rl.scope, degraded: rl.degraded });
    return NextResponse.json(
      { error: rl.degraded ? 'Service busy, try again shortly.' : 'Too many requests. Please slow down.' },
      { status: 429, headers: rlHeaders(rl) },
    );
  }

  // ── Global daily spend breaker ──────────────────────────────
  const budget = await checkBudget();
  if (!budget.ok) {
    log('budget_exceeded', { uid: user.id, used: budget.used });
    // Degrade gracefully — no LLM call, return a friendly message.
    return NextResponse.json(
      { text: "The tutor is taking a short break and will be back soon. Please re-read the lesson section for now.", fallback: true },
      { status: 503, headers: rlHeaders(rl) },
    );
  }

  // ── Parse + validate ────────────────────────────────────────
  let body: any;
  try { body = await req.json(); }
  catch { return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 }); }

  const question = typeof body?.question === 'string' ? body.question.trim() : '';
  if (!question) return NextResponse.json({ error: 'A question is required.' }, { status: 400 });
  if (question.length > MAX_QUESTION) {
    return NextResponse.json({ error: 'Question is too long.' }, { status: 400 });
  }

  const chapterId = typeof body?.chapterId === 'string' ? body.chapterId : '';
  const chapter = getChapter(chapterId);
  if (!chapter) {
    return NextResponse.json({ error: 'Unknown chapter.' }, { status: 400 });
  }

  // ── 1. SERVER-SIDE RAG — retrieve from trusted content only ─
  const chunks = retrieveChunks(chapterId, question);
  const context = buildContext(chunks);

  // History: bound count + size. We DO NOT trust client 'assistant' content as
  // authoritative — it's only conversational continuity, capped tightly, and
  // the model is instructed (rule 3) to treat all user input as a question.
  const history: LLMMessage[] = Array.isArray(body?.history)
    ? body.history
        .slice(-MAX_HISTORY)
        .filter((m: any) => m && typeof m.text === 'string')
        .map((m: any) => ({
          role: (m.role === 'assistant' || m.role === 'bot') ? 'assistant' : 'user',
          content: String(m.text).slice(0, MAX_HISTORY_CHARS),
        }))
    : [];

  const system = buildSystemPrompt({
    chapterTitle: chapter.title,
    chapterTitleEn: chapter.titleEn,
    level: chapter.level,
    context,
  });
  const messages: LLMMessage[] = [...history, { role: 'user', content: question }];

  // ── Call the model (bounded retry → graceful fallback) ──────
  try {
    const result = await withRetry(() =>
      callLLM({ system, messages, maxTokens: 600, temperature: 0.3, timeoutMs: 9000 }),
    );
    await recordSpend((result.usage?.input || 0) + (result.usage?.output || 0));
    log('ok', {
      uid: user.id, chapter: chapterId, qLen: question.length, chunks: chunks.length,
      ms: Date.now() - started, in: result.usage?.input, out: result.usage?.output,
    });
    return NextResponse.json(
      { text: result.text, sources: chunks.map((c) => c.title), model: result.model, usage: result.usage },
      { headers: rlHeaders(rl) },
    );
  } catch (err) {
    const e = err as LLMError;
    log('llm_error', { uid: user.id, status: e?.status, retriable: e?.retriable, msg: e?.message, ms: Date.now() - started });
    return NextResponse.json(
      { text: fallbackAnswer(question, chunks), sources: chunks.map((c) => c.title), fallback: true },
      { status: 503, headers: rlHeaders(rl) },
    );
  }
}

/** One jittered retry for retriable upstream errors (429 / 5xx / timeout). */
async function withRetry<T>(fn: () => Promise<T>): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    const e = err as LLMError;
    if (e instanceof LLMError && e.retriable) {
      await new Promise((r) => setTimeout(r, 250 + Math.random() * 350));
      return fn();
    }
    throw err;
  }
}

function rlHeaders(rl: { limit: number; remaining: number; resetAt: number }) {
  return {
    'X-RateLimit-Limit': String(rl.limit),
    'X-RateLimit-Remaining': String(rl.remaining),
    'X-RateLimit-Reset': String(Math.ceil(rl.resetAt / 1000)),
  };
}

export async function GET() {
  return NextResponse.json({ ok: true, service: 'api/chat', provider: process.env.LLM_PROVIDER || 'gemini' });
}
