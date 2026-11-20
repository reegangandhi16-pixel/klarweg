/* ============================================================
   Klarweg Access Worker · ₹100 DEMO BOOKING (Friday / Sunday, after 4 PM IST)
   ------------------------------------------------------------
   Extends the same-day consultation system (consultations.js) to future
   demo classes. A demo is a consult_bookings row with kind = 'demo', so it
   shares everything that already protects a ₹100 booking:
     · the ₹100 amount CHECK and the partial UNIQUE slot index (no double
       booking, even under concurrent requests);
     · one pending hold per learner;
     · settle(): confirmed only after Cashfree's own order API reports PAID
       for exactly ₹100 INR; late payments re-take the slot only if it is
       still free, otherwise the booking goes to review for a refund;
     · the webhook (consultWebhook), the cron reconciliation and the
       learner's status/join routes (/consult/bookings/:ref[/join]).

   Routes (wired in index.js):
     GET  /demo/availability?teacher_id=   public: open Friday/Sunday slots
     POST /demo/bookings                   signed in: hold + Cashfree order
     POST /demo/bookings/:ref/reschedule   signed in: move a confirmed demo
                                           once, ≥12 h before it starts

   Availability is real: only slots an admin opened in demo_slots for an
   eligible, unpaused teacher, on a Friday or Sunday, 16:20–21:40 IST,
   at least DEMO_MIN_LEAD_SECONDS ahead, and not held by anyone.

   Switch: DEMO_BOOKING = "off" (default) | "sandbox" | "live", with the
   same Cashfree coherence rules as CONSULT_BOOKING.
   ============================================================ */
import { isValidPhone } from "./auth.js";
import { getSessionToken, findSessionUser } from "./sessions.js";
import { cashfreeMode, cashfreeBaseUrl, cashfreeConfigProblem, siteBaseUrl, notifyUrl, readJson } from "./cashfree-config.js";
import {
  istClock, istEpoch, slotEnd, cashfreeExpiryTime, parseGatewayTime, publicBooking, BOOKING_REF_RE,
  HOLD_SECONDS, GATEWAY_EXPIRY_SECONDS, TIMEZONE
} from "./consultations.js";
import {
  DEMO_FEE_PAISE, DEMO_TIMES, DEMO_DURATION_MINUTES, DEMO_MIN_LEAD_SECONDS, DEMO_MAX_AHEAD_DAYS,
  DEMO_RESCHEDULE_NOTICE_SECONDS, DEMO_RESCHEDULES_ALLOWED, TEACHERS,
  demoEligible, demoTeachers, isDemoDay, isDemoTime, demoDates, addDays
} from "./live-catalog.js";

const CASHFREE_API_VERSION = "2023-08-01";
export const DEMO_ATTEMPTS_PER_DAY = 6;
const REF_ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
const NAME_RE = /^[\p{L}\p{M}][\p{L}\p{M} .'-]{1,79}$/u;

const nowSeconds = () => Math.floor(Date.now() / 1000);
const json = (data, status = 200) => Response.json(data, { status, headers: { "cache-control": "no-store" } });
const isUniqueViolation = (e) => /UNIQUE constraint failed/i.test(String(e && e.message));
const isOwnPendingViolation = (e) => /UNIQUE constraint failed:[^\n]*\buser_id\b/i.test(String(e && e.message)) && !/slot_start/i.test(String(e && e.message));

export function demoMode(env) {
  const wanted = String(env.DEMO_BOOKING || "off").toLowerCase();
  if (wanted === "off") return { enabled: false, mode: "off", problem: null };
  if (wanted !== "sandbox" && wanted !== "live") return { enabled: false, mode: "off", problem: "DEMO_BOOKING must be off, sandbox or live" };
  const cf = cashfreeConfigProblem(env);
  if (cf) return { enabled: false, mode: "off", problem: cf };
  const gateway = cashfreeMode(env);
  if (wanted === "sandbox" && gateway !== "sandbox") return { enabled: false, mode: "off", problem: "DEMO_BOOKING=sandbox needs CASHFREE_ENV=sandbox" };
  if (wanted === "live" && gateway !== "production") return { enabled: false, mode: "off", problem: "DEMO_BOOKING=live needs CASHFREE_ENV=production" };
  return { enabled: true, mode: wanted, problem: null };
}

function newRef() {
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  return "KWC-" + Array.from(bytes, (b) => REF_ALPHABET[b % REF_ALPHABET.length]).join("");
}

async function sweepExpiredHolds(db, nowSec) {
  await db.prepare("UPDATE consult_bookings SET status = 'expired', updated_at = ?1 WHERE status = 'pending' AND hold_expires_at <= ?1").bind(nowSec).run();
}

async function teacherPaused(db, teacherId) {
  const r = await db.prepare("SELECT demo_paused FROM live_teacher_settings WHERE teacher_id = ?1").bind(teacherId).first();
  return !!(r && r.demo_paused);
}

/* Is this exact slot bookable right now (ignoring holds)? */
export function slotTimingOk(date, slot, nowSec, today) {
  if (!isDemoDay(date) || !isDemoTime(slot)) return false;
  if (date > addDays(today, DEMO_MAX_AHEAD_DAYS)) return false;
  return istEpoch(date, slot) - nowSec >= DEMO_MIN_LEAD_SECONDS;
}

async function slotOpen(db, teacherId, date, slot) {
  return !!(await db.prepare(
    "SELECT 1 AS ok FROM demo_slots WHERE teacher_id = ?1 AND date = ?2 AND slot_start = ?3 AND status = 'open'"
  ).bind(teacherId, date, slot).first());
}

async function slotHeld(db, teacherId, date, slot, exceptId = null) {
  return !!(await db.prepare(
    "SELECT 1 AS ok FROM consult_bookings WHERE teacher_id = ?1 AND date = ?2 AND slot_start = ?3 AND status IN ('pending', 'confirmed') AND id <> ?4"
  ).bind(teacherId, date, slot, exceptId || "").first());
}

/* ---------------- availability ---------------- */
export async function computeDemoAvailability(env, { teacherId = null, nowMs = Date.now() } = {}) {
  const cfg = demoMode(env);
  const clock = istClock(nowMs);
  const base = {
    ok: true, enabled: cfg.enabled, testMode: cfg.mode === "sandbox", timezone: TIMEZONE,
    fee: { amountPaise: DEMO_FEE_PAISE, currency: "INR" }, durationMinutes: DEMO_DURATION_MINUTES,
    days: ["Friday", "Sunday"], earliest: DEMO_TIMES[0]
  };
  if (!cfg.enabled) return { ...base, teachers: [], message: "Online demo booking is not open yet." };
  await sweepExpiredHolds(env.DB, clock.nowSec);
  const ids = demoTeachers().filter((id) => !teacherId || id === teacherId);
  const last = addDays(clock.date, DEMO_MAX_AHEAD_DAYS);
  const teachers = [];
  for (const id of ids) {
    if (await teacherPaused(env.DB, id)) { teachers.push({ teacherId: id, paused: true, dates: [] }); continue; }
    const { results: open } = await env.DB.prepare(
      "SELECT date, slot_start FROM demo_slots WHERE teacher_id = ?1 AND status = 'open' AND date >= ?2 AND date <= ?3 ORDER BY date, slot_start"
    ).bind(id, clock.date, last).all();
    const { results: held } = await env.DB.prepare(
      "SELECT date, slot_start FROM consult_bookings WHERE teacher_id = ?1 AND date >= ?2 AND status IN ('pending', 'confirmed')"
    ).bind(id, clock.date).all();
    const heldSet = new Set(held.map((h) => h.date + " " + h.slot_start));
    const byDate = new Map();
    for (const r of open) {
      if (heldSet.has(r.date + " " + r.slot_start) || !slotTimingOk(r.date, r.slot_start, clock.nowSec, clock.date)) continue;
      if (!byDate.has(r.date)) byDate.set(r.date, []);
      byDate.get(r.date).push({ start: r.slot_start, end: slotEnd(r.slot_start) });
    }
    teachers.push({
      teacherId: id, paused: false,
      dates: demoDates(clock.date, 8).map((d) => ({ date: d, weekday: new Date(d + "T12:00:00Z").getUTCDay() === 5 ? "Friday" : "Sunday", slots: byDate.get(d) || [] }))
    });
  }
  return { ...base, teachers };
}

export async function demoAvailability(request, env) {
  const t = new URL(request.url).searchParams.get("teacher_id");
  if (t && !TEACHERS[t]) return json({ ok: false, error: "Unknown teacher." }, 404);
  return json(await computeDemoAvailability(env, { teacherId: t || null }));
}

/* ---------------- Cashfree ---------------- */
async function createGatewayOrder(env, request, { id, ref, user, contact, holdUntil, now }) {
  const gatewayExpiry = now + GATEWAY_EXPIRY_SECONDS;
  let res, data;
  try {
    res = await fetch(`${cashfreeBaseUrl(env)}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", "x-api-version": CASHFREE_API_VERSION,
        "x-client-id": env.CASHFREE_APP_ID, "x-client-secret": env.CASHFREE_SECRET_KEY, "x-idempotency-key": id
      },
      body: JSON.stringify({
        order_id: id,
        order_amount: DEMO_FEE_PAISE / 100,
        order_currency: "INR",
        order_expiry_time: cashfreeExpiryTime(gatewayExpiry),
        customer_details: { customer_id: user.id, customer_email: user.email, customer_phone: contact.phone, customer_name: contact.name },
        order_note: `Klarweg demo class ${ref}`,
        order_tags: { kind: "demo", ref },
        order_meta: {
          return_url: siteBaseUrl(env, request) + "/live-classes.html?demo_ref=" + ref + "#demo",
          notify_url: notifyUrl(env)
        }
      })
    });
    data = await readJson(res);
  } catch { return { ok: false }; }
  if (!res.ok || !data) return { ok: false };
  const returned = parseGatewayTime(data.order_expiry_time);
  if (data.order_id !== id || Math.round(Number(data.order_amount) * 100) !== DEMO_FEE_PAISE || data.order_currency !== "INR"
      || typeof data.payment_session_id !== "string" || !data.payment_session_id
      || returned === null || returned > holdUntil || returned <= now) {
    console.error("demo: gateway order refused", ref, returned === null ? "expiry-missing" : "validation");
    return { ok: false };
  }
  return { ok: true, paymentSessionId: data.payment_session_id };
}

/* ---------------- booking ---------------- */
export function readContact(body, user) {
  const name = typeof body?.contact_name === "string" ? body.contact_name.trim().replace(/\s+/g, " ") : (user.name || "");
  const phone = typeof body?.contact_phone === "string" ? body.contact_phone.replace(/[\s-]/g, "") : (user.phone || "");
  if (!NAME_RE.test(name)) return { ok: false, error: "Please enter your full name.", code: "contact-name" };
  if (!isValidPhone(phone)) return { ok: false, error: "Please enter a valid 10-digit mobile number.", code: "contact-phone" };
  return { ok: true, name, phone };
}

export async function createDemoBooking(request, env) {
  const user = await findSessionUser(env.DB, getSessionToken(request));
  if (!user) return json({ ok: false, error: "Authentication required." }, 401);
  const cfg = demoMode(env);
  if (!cfg.enabled) {
    if (cfg.problem) console.error("demo: booking refused:", cfg.problem);
    return json({ ok: false, error: "Online demo booking is not open yet.", code: "demo-closed" }, 503);
  }
  let body;
  try { body = await request.json(); } catch { return json({ ok: false, error: "Invalid JSON body." }, 400); }
  const teacherId = typeof body?.teacher_id === "string" ? body.teacher_id.trim() : "";
  const date = typeof body?.date === "string" ? body.date.trim() : "";
  const slot = typeof body?.slot === "string" ? body.slot.trim() : "";
  if (body?.accept_terms !== true) return json({ ok: false, error: "Please accept the demo booking terms.", code: "terms" }, 400);
  const contact = readContact(body, user);
  if (!contact.ok) return json({ ok: false, error: contact.error, code: contact.code }, 400);

  if (!demoEligible(teacherId) || (await teacherPaused(env.DB, teacherId))) {
    return json({ ok: false, error: "This teacher is not taking demo bookings right now.", code: "teacher-unavailable" }, 409);
  }
  const clock = istClock();
  if (!isDemoDay(date)) return json({ ok: false, error: "Demo classes run on Fridays and Sundays only.", code: "bad-day" }, 400);
  if (!isDemoTime(slot)) return json({ ok: false, error: "Demo classes start between 16:20 and 21:40 IST.", code: "bad-time" }, 400);
  if (!slotTimingOk(date, slot, clock.nowSec, clock.date) || !(await slotOpen(env.DB, teacherId, date, slot))) {
    return json({ ok: false, error: "This time is not available. Nothing has been charged. Please choose another time.", code: "slot-unavailable" }, 409);
  }

  await sweepExpiredHolds(env.DB, clock.nowSec);
  const pending = await env.DB.prepare("SELECT * FROM consult_bookings WHERE user_id = ?1 AND status = 'pending'").bind(user.id).first();
  if (pending && pending.kind === "demo" && pending.teacher_id === teacherId && pending.date === date && pending.slot_start === slot && pending.payment_session_id) {
    return json({ ok: true, resumed: true, booking: publicBooking(pending, cfg.mode), paymentSessionId: pending.payment_session_id, checkout: { mode: cashfreeMode(env) } });
  }
  const attempts = (await env.DB.prepare(
    "SELECT COUNT(*) AS n FROM consult_bookings WHERE user_id = ?1 AND kind = 'demo' AND created_at >= ?2"
  ).bind(user.id, clock.nowSec - 86400).first()).n;
  if (attempts >= DEMO_ATTEMPTS_PER_DAY) return json({ ok: false, error: "Too many booking attempts today. Please try again tomorrow.", code: "rate-limited" }, 429);
  if (await slotHeld(env.DB, teacherId, date, slot)) {
    return json({ ok: false, error: "Sorry, this time has just been taken. Nothing has been charged. Please choose another time.", code: "slot-taken" }, 409);
  }

  const id = `cons_${crypto.randomUUID()}`;
  const ref = newRef();
  const holdUntil = clock.nowSec + HOLD_SECONDS;
  const gw = await createGatewayOrder(env, request, { id, ref, user, contact, holdUntil, now: clock.nowSec });
  if (!gw.ok) return json({ ok: false, code: "payment-unavailable", error: "The payment could not be started. Nothing has been charged. Please try again." }, 502);

  const stmts = [];
  if (pending) stmts.push(env.DB.prepare("UPDATE consult_bookings SET status = 'released', updated_at = ?1 WHERE id = ?2 AND status = 'pending'").bind(clock.nowSec, pending.id));
  stmts.push(env.DB.prepare(
    `INSERT INTO consult_bookings
       (id, ref, user_id, teacher_id, date, slot_start, status, amount_paise, currency, cashfree_order_id,
        payment_session_id, hold_expires_at, created_at, updated_at, kind, contact_name, contact_phone)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, 'pending', ?7, 'INR', ?1, ?8, ?9, ?10, ?10, 'demo', ?11, ?12)`
  ).bind(id, ref, user.id, teacherId, date, slot, DEMO_FEE_PAISE, gw.paymentSessionId, holdUntil, clock.nowSec, contact.name, contact.phone));
  try {
    await env.DB.batch(stmts);
  } catch (e) {
    if (!isUniqueViolation(e)) throw e;
    await env.DB.prepare(
      `INSERT INTO consult_bookings (id, ref, user_id, teacher_id, date, slot_start, status, amount_paise, currency, cashfree_order_id,
         hold_expires_at, review_reason, created_at, updated_at, kind)
       VALUES (?1, ?2, ?3, ?4, ?5, ?6, 'failed', ?7, 'INR', ?1, ?8, ?9, ?10, ?10, 'demo')`
    ).bind(id, ref, user.id, teacherId, date, slot, DEMO_FEE_PAISE, holdUntil, isOwnPendingViolation(e) ? "concurrent-request" : "slot-taken", clock.nowSec).run();
    return isOwnPendingViolation(e)
      ? json({ ok: false, code: "booking-in-progress", error: "Another booking from your account was being processed at the same moment. Nothing has been charged." }, 409)
      : json({ ok: false, code: "slot-taken", error: "Sorry, this time has just been taken. Nothing has been charged. Please choose another time." }, 409);
  }
  const row = await env.DB.prepare("SELECT * FROM consult_bookings WHERE id = ?1").bind(id).first();
  return json({ ok: true, booking: publicBooking(row, cfg.mode), released: pending ? pending.ref : null, paymentSessionId: gw.paymentSessionId, checkout: { mode: cashfreeMode(env) } });
}

/* ---------------- rescheduling ---------------- */
/* Moves a slot atomically: the partial UNIQUE index refuses a slot someone
   else holds, so the UPDATE either moves the booking or changes nothing.
   byAdmin skips the learner limits (notice, count) but never the calendar
   rules or the conflict check. */
export async function moveDemo(env, booking, { date, slot, byAdmin = false }) {
  const clock = istClock();
  if (booking.kind !== "demo") return { ok: false, status: 400, code: "not-demo", error: "Only demo classes can be moved here." };
  if (booking.status !== "confirmed") return { ok: false, status: 409, code: "not-confirmed", error: "Only a confirmed demo can be moved." };
  if (!byAdmin) {
    if (Number(booking.reschedule_count) >= DEMO_RESCHEDULES_ALLOWED) return { ok: false, status: 409, code: "reschedule-used", error: "This demo has already been moved once. Please contact Klarweg." };
    if (istEpoch(booking.date, booking.slot_start) - clock.nowSec < DEMO_RESCHEDULE_NOTICE_SECONDS) {
      return { ok: false, status: 409, code: "too-late", error: "A demo can be moved only up to 12 hours before it starts." };
    }
  }
  if (!slotTimingOk(date, slot, clock.nowSec, clock.date) || !(await slotOpen(env.DB, booking.teacher_id, date, slot))) {
    return { ok: false, status: 409, code: "slot-unavailable", error: "This time is not available. Please choose another time." };
  }
  try {
    const r = await env.DB.prepare(
      `UPDATE consult_bookings SET date = ?1, slot_start = ?2, reschedule_count = reschedule_count + ?3,
         original_date = COALESCE(original_date, date), original_slot = COALESCE(original_slot, slot_start), updated_at = ?4
       WHERE id = ?5 AND status = 'confirmed' AND reschedule_count = ?6`
    ).bind(date, slot, byAdmin ? 0 : 1, clock.nowSec, booking.id, Number(booking.reschedule_count)).run();
    if (!(r.meta && r.meta.changes === 1)) return { ok: false, status: 409, code: "changed", error: "This booking changed in the meantime. Please reload." };
  } catch (e) {
    if (!isUniqueViolation(e)) throw e;
    return { ok: false, status: 409, code: "slot-taken", error: "Sorry, this time has just been taken. Please choose another time." };
  }
  return { ok: true };
}

export async function rescheduleDemo(request, env, ref) {
  const user = await findSessionUser(env.DB, getSessionToken(request));
  if (!user) return json({ ok: false, error: "Authentication required." }, 401);
  if (!BOOKING_REF_RE.test(ref)) return json({ ok: false, error: "Invalid booking reference." }, 400);
  let body;
  try { body = await request.json(); } catch { return json({ ok: false, error: "Invalid JSON body." }, 400); }
  const booking = await env.DB.prepare("SELECT * FROM consult_bookings WHERE ref = ?1 AND user_id = ?2").bind(ref, user.id).first();
  if (!booking) return json({ ok: false, error: "Booking not found." }, 404);
  const out = await moveDemo(env, booking, { date: String(body?.date || ""), slot: String(body?.slot || "") });
  if (!out.ok) return json({ ok: false, code: out.code, error: out.error }, out.status);
  const row = await env.DB.prepare("SELECT * FROM consult_bookings WHERE id = ?1").bind(booking.id).first();
  return json({ ok: true, booking: publicBooking(row, demoMode(env).mode) });
}
