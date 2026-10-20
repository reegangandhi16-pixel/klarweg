/* ============================================================
   Klarweg Access Worker · SAME-DAY ₹100 CONSULTATION BOOKING
   ------------------------------------------------------------
   Routes (wired in index.js):
     GET  /consult/availability      public: today's bookable slots
     POST /consult/bookings          signed in: hold a slot + Cashfree order
     GET  /consult/bookings          signed in: my booking references
     GET  /consult/bookings/:ref     signed in: one booking; reconciles a
                                     pending payment with Cashfree
     GET  /consult/bookings/:ref/join
                                     signed in, own CONFIRMED booking only:
                                     the Google Meet link, read from the
                                     CONSULT_JOIN_LINKS secret (never from
                                     any file the browser can download)
   Settlement of PAYMENT_SUCCESS webhooks for consultation orders
   (order ids "cons_…") is consultWebhook() below, called from
   webhooks-cashfree.js before the self-paced order lookup.

   Separation from the self-paced checkout — nothing here is negotiable:
     · This module never imports entitlements.js or products.js and never
       reads or writes orders / user_entitlements / entitlements. A
       consultation payment can never unlock a course.
     · Consultation order ids start "cons_", self-paced ones "ord_"; each
       side looks only at its own table.

   Trust model:
     · The amount is fixed here (FEE_PAISE). The client sends a teacher
       and a slot only; any amount it sends is ignored.
     · A booking is confirmed only after Cashfree's own order API reports
       PAID for exactly ₹100.00 INR — never on the learner's return
       redirect. The webhook only names an order.
     · The slot is reserved atomically by a partial UNIQUE index
       (migration-013): two pending/confirmed rows for one teacher, date
       and slot cannot exist, so concurrent requests cannot double-book.
     · Confirmation is a conditional UPDATE, so duplicate webhooks and
       polls confirm once.
     · No email or message is sent from this module.

   Switch: CONSULT_BOOKING = "off" (default) | "sandbox" | "live".
     "sandbox" works only while CASHFREE_ENV is "sandbox" (test payments,
     no real money); "live" only while CASHFREE_ENV is "production".
     Any mismatch, or an incoherent Cashfree configuration, keeps booking
     off. scripts/predeploy-access-check.mjs refuses to deploy anything
     but "off" without --allow-consult-booking=<mode>.
   Teachers: CONSULT_TEACHERS (comma-separated ids) ∩ ELIGIBLE_TEACHERS,
     and only on dates with a confirmed consult_availability row.
   ============================================================ */
import { isValidPhone } from "./auth.js";
import { getSessionToken, findSessionUser } from "./sessions.js";
import {
  cashfreeMode,
  cashfreeBaseUrl,
  cashfreeConfigProblem,
  siteBaseUrl,
  notifyUrl,
  readJson
} from "./cashfree-config.js";

const CASHFREE_API_VERSION = "2023-08-01";

export const FEE_PAISE = 10000;                 // ₹100 (decision sheet D4)
export const DURATION_MINUTES = 20;             // D4
export const TIMEZONE = "Asia/Kolkata";
const IST_OFFSET_MINUTES = 330;                 // UTC+05:30, no daylight saving
export const BOOKING_WINDOW = { opens: "09:00", closes: "12:00" };
export const APPOINTMENT_WINDOW = { start: "15:00", end: "16:00" };
/* Owner instruction (2026-10-20): only these two teachers may ever be
   configured as bookable. "candidate-01" is the second named teacher,
   held under an opaque id until their profile is verified and published
   with consent (docs/live-classes-candidates.json; the name is kept in the
   private roster outside this repository). Widening this list needs the
   owner's written authorisation and a reviewed PR. */
export const ELIGIBLE_TEACHERS = Object.freeze(["reegan-gandhi", "candidate-01"]);

/* The gateway order expires before the hold does, so no payment can
   start after the slot is released. A payment that still lands late is
   handled in settle() (confirmed if the slot is free, else review).
   Cashfree PG Create Order (x-api-version 2023-08-01, checked 2026-10-20):
   order_expiry_time is an ISO 8601 string; "We store timestamps in IST, but
   you can provide them in a valid ISO 8601 time format", e.g.
   2021-07-02T10:20:12+05:30. No minimum or maximum is documented, so the
   value Cashfree returns is re-checked against the hold (createConsultBooking). */
export const HOLD_SECONDS = 20 * 60;
export const GATEWAY_EXPIRY_SECONDS = 16 * 60;
/* Booking attempts per learner per IST day (each creates a gateway order). */
export const DAILY_ATTEMPT_LIMIT = 6;

const REF_ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ"; // no 0/O/1/I
const BOOKING_ID_RE = /^cons_[0-9a-f-]{36}$/;
export const BOOKING_REF_RE = /^KWC-[2-9A-HJ-NP-Z]{8}$/;

const nowSeconds = () => Math.floor(Date.now() / 1000);

/* Unix seconds → "YYYY-MM-DDTHH:MM:SS+05:30" (IST, Cashfree's own example
   format). Seconds precision; no milliseconds. */
export function cashfreeExpiryTime(unixSec) {
  const ist = new Date((unixSec + IST_OFFSET_MINUTES * 60) * 1000).toISOString();
  return ist.slice(0, 19) + "+05:30";
}
export const CASHFREE_TIME_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,6})?(?:Z|[+-]\d{2}:\d{2})$/;
/* An ISO 8601 timestamp WITH an explicit offset → unix seconds, else null.
   (A bare local time would be read in the Worker's own zone: refused.) */
export function parseGatewayTime(value) {
  if (typeof value !== "string" || !CASHFREE_TIME_RE.test(value)) return null;
  const ms = Date.parse(value);
  return Number.isFinite(ms) ? Math.floor(ms / 1000) : null;
}

/* HH:MM in IST for a unix time (for learner-facing messages). */
function istTimeOf(unixSec) {
  return new Date((unixSec + IST_OFFSET_MINUTES * 60) * 1000).toISOString().slice(11, 16);
}

/* Google Meet links per teacher, from the CONSULT_JOIN_LINKS secret:
   {"reegan-gandhi":"https://meet.google.com/abc-defg-hij"}. Only a
   well-formed Meet link for an eligible teacher counts; anything else is
   treated as not configured (and logged without the value). */
const MEET_LINK_RE = /^https:\/\/meet\.google\.com\/[a-z]{3}-[a-z]{4}-[a-z]{3}$/;
export function joinLinkFor(env, teacherId) {
  if (!env.CONSULT_JOIN_LINKS) return null;
  let map;
  try { map = JSON.parse(env.CONSULT_JOIN_LINKS); } catch { console.error("consult: CONSULT_JOIN_LINKS is not valid JSON"); return null; }
  const link = map && typeof map === "object" ? map[teacherId] : null;
  if (link == null) return null;
  if (!ELIGIBLE_TEACHERS.includes(teacherId) || typeof link !== "string" || !MEET_LINK_RE.test(link)) {
    console.error("consult: CONSULT_JOIN_LINKS entry refused for", teacherId);
    return null;
  }
  return link;
}

function json(data, status = 200) {
  return Response.json(data, { status, headers: { "cache-control": "no-store" } });
}

/* ---------------- time (pure) ---------------- */
const toMinutes = (hhmm) => Number(hhmm.slice(0, 2)) * 60 + Number(hhmm.slice(3, 5));
const toHhmm = (m) => String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0");

/* The appointment window cut into non-overlapping DURATION_MINUTES slots
   that end inside it: 15:00, 15:20, 15:40. */
export const SLOTS = Object.freeze((() => {
  const out = [];
  for (let m = toMinutes(APPOINTMENT_WINDOW.start); m + DURATION_MINUTES <= toMinutes(APPOINTMENT_WINDOW.end); m += DURATION_MINUTES) out.push(toHhmm(m));
  return out;
})());

export function slotEnd(start) { return toHhmm(toMinutes(start) + DURATION_MINUTES); }

/* Server time → the Asia/Kolkata calendar date and minute of day. */
export function istClock(nowMs = Date.now()) {
  const ist = new Date(nowMs + IST_OFFSET_MINUTES * 60000);
  const date = ist.toISOString().slice(0, 10);
  const minutes = ist.getUTCHours() * 60 + ist.getUTCMinutes();
  return { date, minutes, nowSec: Math.floor(nowMs / 1000) };
}

/* Unix seconds at which an IST date + HH:MM begins. */
export function istEpoch(date, hhmm) {
  const [y, mo, d] = date.split("-").map(Number);
  return Math.floor((Date.UTC(y, mo - 1, d) + (toMinutes(hhmm) - IST_OFFSET_MINUTES) * 60000) / 1000);
}

export function bookingOpen(clock) {
  return clock.minutes >= toMinutes(BOOKING_WINDOW.opens) && clock.minutes < toMinutes(BOOKING_WINDOW.closes);
}

export function closedMessage(clock) {
  return clock.minutes < toMinutes(BOOKING_WINDOW.opens)
    ? "Same-day booking is closed. It opens today at 09:00 IST."
    : "Same-day booking is closed for today. It is open from 09:00 to 12:00 IST, for consultations between 15:00 and 16:00 IST the same day.";
}

/* ---------------- configuration ---------------- */
/* { enabled, mode: "off"|"sandbox"|"live", problem } */
export function consultMode(env) {
  const wanted = String(env.CONSULT_BOOKING || "off").toLowerCase();
  if (wanted === "off") return { enabled: false, mode: "off", problem: null };
  if (wanted !== "sandbox" && wanted !== "live") return { enabled: false, mode: "off", problem: "CONSULT_BOOKING must be off, sandbox or live" };
  const cf = cashfreeConfigProblem(env);
  if (cf) return { enabled: false, mode: "off", problem: cf };
  const gateway = cashfreeMode(env);
  if (wanted === "sandbox" && gateway !== "sandbox") return { enabled: false, mode: "off", problem: "CONSULT_BOOKING=sandbox needs CASHFREE_ENV=sandbox" };
  if (wanted === "live" && gateway !== "production") return { enabled: false, mode: "off", problem: "CONSULT_BOOKING=live needs CASHFREE_ENV=production" };
  return { enabled: true, mode: wanted, problem: null };
}

export function bookableTeachers(env) {
  const listed = String(env.CONSULT_TEACHERS || "").split(",").map((s) => s.trim()).filter(Boolean);
  return ELIGIBLE_TEACHERS.filter((id) => listed.includes(id));
}

/* ---------------- storage helpers ---------------- */
function newRef() {
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  return "KWC-" + Array.from(bytes, (b) => REF_ALPHABET[b % REF_ALPHABET.length]).join("");
}

const isUniqueViolation = (e) => /UNIQUE constraint failed/i.test(String(e && e.message));
/* Which partial UNIQUE index refused the row: the learner's own second
   pending hold (consult_bookings_one_pending_per_user → user_id), or the
   slot itself (teacher_id, date, slot_start). */
const isOwnPendingViolation = (e) => /UNIQUE constraint failed:[^\n]*\buser_id\b/i.test(String(e && e.message))
  && !/slot_start/i.test(String(e && e.message));

/* Pending holds whose time ran out stop holding their slot. */
async function sweepExpiredHolds(db, nowSec) {
  await db.prepare(
    "UPDATE consult_bookings SET status = 'expired', updated_at = ?1 WHERE status = 'pending' AND hold_expires_at <= ?1"
  ).bind(nowSec).run();
}

async function confirmedDay(db, teacherId, date) {
  return !!(await db.prepare(
    "SELECT 1 AS ok FROM consult_availability WHERE teacher_id = ?1 AND date = ?2"
  ).bind(teacherId, date).first());
}

async function heldSlots(db, teacherId, date) {
  const { results } = await db.prepare(
    "SELECT slot_start FROM consult_bookings WHERE teacher_id = ?1 AND date = ?2 AND status IN ('pending', 'confirmed')"
  ).bind(teacherId, date).all();
  return new Set(results.map((r) => r.slot_start));
}

export function publicBooking(row, mode) {
  return {
    ref: row.ref,
    teacherId: row.teacher_id,
    date: row.date,
    slotStart: row.slot_start,
    slotEnd: slotEnd(row.slot_start),
    timezone: TIMEZONE,
    durationMinutes: DURATION_MINUTES,
    status: row.status,
    amountPaise: row.amount_paise,
    currency: row.currency,
    holdExpiresAt: row.status === "pending" ? row.hold_expires_at : null,
    testMode: mode === "sandbox"
  };
}

/* ---------------- availability ---------------- */
export async function computeAvailability(env, nowMs = Date.now()) {
  const cfg = consultMode(env);
  const clock = istClock(nowMs);
  const base = {
    ok: true,
    enabled: cfg.enabled,
    testMode: cfg.mode === "sandbox",
    timezone: TIMEZONE,
    date: clock.date,
    bookingWindow: BOOKING_WINDOW,
    appointmentWindow: APPOINTMENT_WINDOW,
    durationMinutes: DURATION_MINUTES,
    fee: { amountPaise: FEE_PAISE, currency: "INR" }
  };
  if (!cfg.enabled) {
    return { ...base, bookingOpen: false, message: "Online consultation booking is not available.", teachers: [] };
  }
  const open = bookingOpen(clock);
  await sweepExpiredHolds(env.DB, clock.nowSec);
  const teachers = [];
  for (const teacherId of bookableTeachers(env)) {
    let slots = [];
    if (open && (await confirmedDay(env.DB, teacherId, clock.date))) {
      const held = await heldSlots(env.DB, teacherId, clock.date);
      slots = SLOTS
        .filter((s) => istEpoch(clock.date, s) > clock.nowSec && !held.has(s))
        .map((s) => ({ start: s, end: slotEnd(s) }));
    }
    teachers.push({ teacherId, availableToday: slots.length > 0, slots });
  }
  return { ...base, bookingOpen: open, message: open ? null : closedMessage(clock), teachers };
}

export async function consultAvailability(request, env) {
  return json(await computeAvailability(env));
}

/* ---------------- Cashfree ---------------- */
async function fetchGatewayOrder(env, cashfreeOrderId) {
  try {
    const res = await fetch(`${cashfreeBaseUrl(env)}/orders/${encodeURIComponent(cashfreeOrderId)}`, {
      headers: {
        "x-api-version": CASHFREE_API_VERSION,
        "x-client-id": env.CASHFREE_APP_ID,
        "x-client-secret": env.CASHFREE_SECRET_KEY,
        accept: "application/json"
      }
    });
    if (!res.ok) return null;
    return await readJson(res);
  } catch {
    return null;
  }
}

/* Applies a gateway order record to a booking. Returns
   { result: "confirmed"|"duplicate"|"not-paid"|"review"|"expired", reason? }.
   Only a PAID order for exactly FEE_PAISE INR, with our order id, confirms. */
export async function settle(env, booking, remote, paymentId) {
  const db = env.DB;
  const now = nowSeconds();
  if (booking.status === "confirmed") return { result: "duplicate" };
  if (booking.status === "review") return { result: "review", reason: booking.review_reason, duplicate: true };

  const remoteStatus = String(remote.order_status || "").toUpperCase();
  const remotePaise = Math.round(Number(remote.order_amount || 0) * 100);
  const mismatch =
    String(remote.order_id || "") !== booking.cashfree_order_id ? "order-id"
    : remoteStatus !== "PAID" ? null
    : remotePaise !== FEE_PAISE || remotePaise !== Number(booking.amount_paise) ? "amount"
    : String(remote.order_currency || "").toUpperCase() !== "INR" ? "currency"
    : null;

  const toReview = async (reason) => {
    await db.prepare(
      "UPDATE consult_bookings SET status = 'review', review_reason = ?1, payment_id = COALESCE(payment_id, ?2), updated_at = ?3 WHERE id = ?4 AND status <> 'confirmed'"
    ).bind(reason, paymentId || null, now, booking.id).run();
    console.error("consult: booking needs review", booking.ref, reason);
    return { result: "review", reason };
  };

  if (mismatch) return toReview(mismatch);

  if (remoteStatus !== "PAID") {
    if ((remoteStatus === "EXPIRED" || remoteStatus === "TERMINATED") && booking.status === "pending") {
      await db.prepare(
        "UPDATE consult_bookings SET status = 'expired', updated_at = ?1 WHERE id = ?2 AND status = 'pending'"
      ).bind(now, booking.id).run();
      return { result: "expired" };
    }
    return { result: "not-paid" };
  }

  /* Paid. Normal case: the hold is still pending. */
  if (booking.status === "pending") {
    const r = await db.prepare(
      "UPDATE consult_bookings SET status = 'confirmed', payment_id = ?1, updated_at = ?2 WHERE id = ?3 AND status = 'pending'"
    ).bind(paymentId || null, now, booking.id).run();
    if (r.meta && r.meta.changes === 1) return { result: "confirmed" };
    const fresh = await db.prepare("SELECT * FROM consult_bookings WHERE id = ?1").bind(booking.id).first();
    return settle(env, fresh, remote, paymentId);
  }

  /* Recovery: paid after the hold lapsed (expired/released/failed). The
     slot is re-taken only if it is still in the future and still free;
     the UNIQUE index decides atomically. Otherwise the owner reviews and
     refunds by hand. */
  if (istEpoch(booking.date, booking.slot_start) <= now) return toReview("late-payment-slot-passed");
  try {
    const r = await db.prepare(
      "UPDATE consult_bookings SET status = 'confirmed', payment_id = ?1, updated_at = ?2 WHERE id = ?3 AND status IN ('expired', 'released', 'failed')"
    ).bind(paymentId || null, now, booking.id).run();
    if (r.meta && r.meta.changes === 1) return { result: "confirmed", recovered: true };
  } catch (e) {
    if (!isUniqueViolation(e)) throw e;
    return toReview("late-payment-slot-taken");
  }
  const fresh = await db.prepare("SELECT * FROM consult_bookings WHERE id = ?1").bind(booking.id).first();
  return fresh.status === "confirmed" ? { result: "duplicate" } : toReview("late-payment-unexpected-state");
}

/* ---------------- routes ---------------- */
async function sessionUser(request, env) {
  return findSessionUser(env.DB, getSessionToken(request));
}

export async function createConsultBooking(request, env) {
  const user = await sessionUser(request, env);
  if (!user) return json({ ok: false, error: "Authentication required." }, 401);

  const cfg = consultMode(env);
  if (!cfg.enabled) {
    if (cfg.problem) console.error("consult: booking refused:", cfg.problem);
    return json({ ok: false, error: "Online consultation booking is not available." }, 503);
  }

  let body;
  try { body = await request.json(); } catch { return json({ ok: false, error: "Invalid JSON body." }, 400); }
  const teacherId = typeof body?.teacher_id === "string" ? body.teacher_id.trim() : "";
  const slot = typeof body?.slot === "string" ? body.slot.trim() : "";

  const clock = istClock();
  if (body && body.date != null && body.date !== clock.date) {
    return json({ ok: false, error: "Only same-day consultations can be booked." }, 400);
  }
  if (!bookingOpen(clock)) return json({ ok: false, error: closedMessage(clock), code: "booking-closed" }, 409);
  if (!bookableTeachers(env).includes(teacherId) || !(await confirmedDay(env.DB, teacherId, clock.date))) {
    return json({ ok: false, error: "This teacher is currently unavailable.", code: "teacher-unavailable" }, 409);
  }
  if (!SLOTS.includes(slot) || istEpoch(clock.date, slot) <= clock.nowSec) {
    return json({ ok: false, error: "This time is not available.", code: "slot-unavailable" }, 409);
  }
  if (!isValidPhone(user.phone)) {
    return json({ ok: false, error: "A valid phone number is required before payment. Please add one to your account.", code: "phone-required" }, 400);
  }

  await sweepExpiredHolds(env.DB, clock.nowSec);

  /* One pending hold per learner. The same slot again resumes it (same
     Cashfree order). A different slot never touches it until the new slot
     is secured: see the atomic swap below. */
  const pending = await env.DB.prepare(
    "SELECT * FROM consult_bookings WHERE user_id = ?1 AND status = 'pending'"
  ).bind(user.id).first();
  if (pending && pending.teacher_id === teacherId && pending.date === clock.date && pending.slot_start === slot && pending.payment_session_id) {
    return json({ ok: true, resumed: true, booking: publicBooking(pending, cfg.mode), paymentSessionId: pending.payment_session_id, checkout: { mode: cashfreeMode(env) } });
  }

  /* Truthful refusals that say which hold the learner has right now
     (their earlier one, or one a parallel request of theirs just took). */
  const keptHold = async () => env.DB.prepare(
    "SELECT * FROM consult_bookings WHERE user_id = ?1 AND status = 'pending' AND hold_expires_at > ?2"
  ).bind(user.id, nowSeconds()).first();
  const refuse = async (status, code, lead) => {
    const kept = await keptHold();
    const tail = kept
      ? ` You still hold ${kept.slot_start} IST until ${istTimeOf(kept.hold_expires_at)} IST: you can pay for it, or choose another time.`
      : " Nothing has been charged. Please choose another time.";
    return json({ ok: false, code, error: lead + tail, keptBooking: kept ? publicBooking(kept, cfg.mode) : null }, status);
  };
  const slotTaken = () => refuse(409, "slot-taken", `Sorry, ${slot} IST has just been taken by someone else.`);

  const attempts = (await env.DB.prepare(
    "SELECT COUNT(*) AS n FROM consult_bookings WHERE user_id = ?1 AND date = ?2"
  ).bind(user.id, clock.date).first()).n;
  if (attempts >= DAILY_ATTEMPT_LIMIT) {
    return json({ ok: false, error: "Too many booking attempts today. Please try again tomorrow.", code: "rate-limited" }, 429);
  }

  /* Cheap pre-check, so a visibly taken slot never creates a gateway
     order. Not relied on: the UNIQUE index decides atomically below. */
  if ((await heldSlots(env.DB, teacherId, clock.date)).has(slot)) return slotTaken();

  const id = `cons_${crypto.randomUUID()}`;
  const ref = newRef();
  const holdUntil = clock.nowSec + HOLD_SECONDS;
  const gatewayExpiry = clock.nowSec + GATEWAY_EXPIRY_SECONDS;

  /* 1. A NEW Cashfree order for this slot (never another slot's order).
        Nothing in the database changes yet, so a gateway failure leaves
        any existing hold exactly as it was. */
  const amount = FEE_PAISE / 100;
  const gatewayFailed = () => refuse(502, "payment-unavailable", "The payment could not be started.");
  let res, data;
  try {
    res = await fetch(`${cashfreeBaseUrl(env)}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-version": CASHFREE_API_VERSION,
        "x-client-id": env.CASHFREE_APP_ID,
        "x-client-secret": env.CASHFREE_SECRET_KEY,
        "x-idempotency-key": id
      },
      body: JSON.stringify({
        order_id: id,
        order_amount: amount,
        order_currency: "INR",
        order_expiry_time: cashfreeExpiryTime(gatewayExpiry),
        customer_details: {
          customer_id: user.id,
          customer_email: user.email,
          customer_phone: user.phone,
          customer_name: user.name || "Klarweg Customer"
        },
        order_note: `Klarweg consultation ${ref}`,
        order_tags: { kind: "consultation", ref },
        order_meta: {
          return_url: siteBaseUrl(env, request) + "/live-classes.html?consult_ref=" + ref + "#book",
          notify_url: notifyUrl(env)
        }
      })
    });
    data = await readJson(res);
  } catch {
    return gatewayFailed();
  }
  if (!res.ok || !data) return gatewayFailed();
  const returnedExpiry = parseGatewayTime(data.order_expiry_time);
  if (data.order_id !== id || Math.round(Number(data.order_amount) * 100) !== FEE_PAISE || data.order_currency !== "INR"
      || typeof data.payment_session_id !== "string" || !data.payment_session_id
      /* the gateway must not accept payment after our hold ends */
      || returnedExpiry === null || returnedExpiry > holdUntil || returnedExpiry <= clock.nowSec) {
    console.error("consult: gateway order refused", ref, returnedExpiry === null ? "expiry-missing" : "validation");
    await recordUnusedOrder(env.DB, { id, ref, user, teacherId, date: clock.date, slot, holdUntil, now: clock.nowSec, reason: "gateway-validation" });
    return gatewayFailed();
  }

  /* 2. Atomic swap, one transaction: release the old hold (if any) and
        hold the new slot. If the slot was taken in the meantime, or another
        request of this learner won, the whole batch rolls back and the old
        hold stays pending with its own order. */
  const stmts = [];
  if (pending) {
    stmts.push(env.DB.prepare(
      "UPDATE consult_bookings SET status = 'released', updated_at = ?1 WHERE id = ?2 AND status = 'pending'"
    ).bind(clock.nowSec, pending.id));
  }
  stmts.push(env.DB.prepare(
    `INSERT INTO consult_bookings
       (id, ref, user_id, teacher_id, date, slot_start, status, amount_paise, currency,
        cashfree_order_id, payment_session_id, hold_expires_at, created_at, updated_at)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, 'pending', ?7, 'INR', ?1, ?8, ?9, ?10, ?10)`
  ).bind(id, ref, user.id, teacherId, clock.date, slot, FEE_PAISE, data.payment_session_id, holdUntil, clock.nowSec));
  try {
    await env.DB.batch(stmts);
  } catch (e) {
    if (!isUniqueViolation(e)) throw e;
    /* The unused gateway order is kept on record (status failed, never
       shown to the browser); it expires unpaid at the gateway. */
    await recordUnusedOrder(env.DB, { id, ref, user, teacherId, date: clock.date, slot, holdUntil, now: clock.nowSec, reason: isOwnPendingViolation(e) ? "concurrent-request" : "slot-taken" });
    if (isOwnPendingViolation(e)) {
      return refuse(409, "booking-in-progress", "Another booking request from your account was being processed at the same moment.");
    }
    return slotTaken();
  }

  const row = await env.DB.prepare("SELECT * FROM consult_bookings WHERE id = ?1").bind(id).first();
  return json({
    ok: true,
    booking: publicBooking(row, cfg.mode),
    released: pending ? pending.ref : null,
    paymentSessionId: data.payment_session_id,
    checkout: { mode: cashfreeMode(env) }
  });
}

/* A gateway order that never became a hold: kept as a failed row so the
   owner can trace it (and settle() can still recover a payment on it,
   which cannot happen in practice because its session is never shown). */
async function recordUnusedOrder(db, { id, ref, user, teacherId, date, slot, holdUntil, now, reason }) {
  await db.prepare(
    `INSERT INTO consult_bookings
       (id, ref, user_id, teacher_id, date, slot_start, status, amount_paise, currency,
        cashfree_order_id, hold_expires_at, review_reason, created_at, updated_at)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, 'failed', ?7, 'INR', ?1, ?8, ?9, ?10, ?10)`
  ).bind(id, ref, user.id, teacherId, date, slot, FEE_PAISE, holdUntil, reason, now).run();
}

/* GET /consult/bookings/:ref/join — the joining link, only for the signed-in
   owner of a CONFIRMED (Cashfree-verified) booking, only from server-side
   configuration. Never stored in the database, the page or its data. */
export async function getConsultJoin(request, env, ref) {
  const user = await sessionUser(request, env);
  if (!user) return json({ ok: false, error: "Authentication required." }, 401);
  if (!BOOKING_REF_RE.test(ref)) return json({ ok: false, error: "Invalid booking reference." }, 400);
  const row = await env.DB.prepare(
    "SELECT ref, teacher_id, status FROM consult_bookings WHERE ref = ?1 AND user_id = ?2"
  ).bind(ref, user.id).first();
  if (!row) return json({ ok: false, error: "Booking not found." }, 404);
  if (row.status !== "confirmed") {
    return json({ ok: false, code: "not-confirmed", error: "Joining details are available only once your payment is confirmed." }, 409);
  }
  const joinUrl = joinLinkFor(env, row.teacher_id);
  if (!joinUrl) {
    return json({ ok: true, ref: row.ref, joinUrl: null, code: "not-configured",
      message: "The joining link for this consultation has not been set up yet. Please email Klarweg with your booking reference." });
  }
  return json({ ok: true, ref: row.ref, joinUrl });
}

export async function getConsultBooking(request, env, ref) {
  const user = await sessionUser(request, env);
  if (!user) return json({ ok: false, error: "Authentication required." }, 401);
  if (!BOOKING_REF_RE.test(ref)) return json({ ok: false, error: "Invalid booking reference." }, 400);

  let row = await env.DB.prepare(
    "SELECT * FROM consult_bookings WHERE ref = ?1 AND user_id = ?2"
  ).bind(ref, user.id).first();
  if (!row) return json({ ok: false, error: "Booking not found." }, 404);

  /* Reconcile anything not yet settled, so a lost webhook never leaves a
     paid learner unconfirmed. Works even while booking is switched off. */
  let verification = null;
  if (["pending", "expired", "released"].includes(row.status) && !cashfreeConfigProblem(env)) {
    const remote = await fetchGatewayOrder(env, row.cashfree_order_id);
    if (remote) {
      verification = (await settle(env, row, remote, null)).result;
      row = await env.DB.prepare("SELECT * FROM consult_bookings WHERE id = ?1").bind(row.id).first();
    } else {
      verification = "unavailable";
    }
  }
  if (row.status === "pending" && row.hold_expires_at <= nowSeconds()) {
    await sweepExpiredHolds(env.DB, nowSeconds());
    row = await env.DB.prepare("SELECT * FROM consult_bookings WHERE id = ?1").bind(row.id).first();
  }
  return json({ ok: true, booking: publicBooking(row, consultMode(env).mode), verification });
}

export async function listConsultBookings(request, env) {
  const user = await sessionUser(request, env);
  if (!user) return json({ ok: false, error: "Authentication required." }, 401);
  const { results } = await env.DB.prepare(
    "SELECT * FROM consult_bookings WHERE user_id = ?1 AND status IN ('pending', 'confirmed', 'review') ORDER BY created_at DESC LIMIT 20"
  ).bind(user.id).all();
  const mode = consultMode(env).mode;
  return json({ ok: true, bookings: results.map((r) => publicBooking(r, mode)) });
}

/* ---------------- webhook ---------------- */
export const isConsultOrderId = (id) => BOOKING_ID_RE.test(String(id || ""));

/* Called by webhooks-cashfree.js for a signature-verified
   PAYMENT_SUCCESS_WEBHOOK whose order id is a consultation order. */
export async function consultWebhook(env, cashfreeOrderId, paymentId) {
  const booking = await env.DB.prepare(
    "SELECT * FROM consult_bookings WHERE cashfree_order_id = ?1"
  ).bind(String(cashfreeOrderId)).first();
  if (!booking) return json({ ok: true, ignored: true, reason: "unknown-order" });
  if (booking.status === "confirmed") return json({ ok: true, status: "confirmed", duplicate: true });

  const remote = await fetchGatewayOrder(env, booking.cashfree_order_id);
  if (!remote) return json({ ok: false, error: "verification-unavailable" }, 500);

  const out = await settle(env, booking, remote, paymentId ? String(paymentId) : null);
  if (out.result === "confirmed") return json({ ok: true, status: "confirmed", ref: booking.ref });
  if (out.result === "duplicate") return json({ ok: true, status: "confirmed", duplicate: true });
  if (out.result === "not-paid") return json({ ok: false, error: "not-yet-paid" }, 503);
  if (out.result === "review") return json({ ok: false, error: "verification-failed", reason: out.reason, duplicate: !!out.duplicate }, out.reason === "amount" || out.reason === "currency" || out.reason === "order-id" ? 400 : 200);
  return json({ ok: true, status: out.result });
}
