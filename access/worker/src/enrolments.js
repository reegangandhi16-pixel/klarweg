/* ============================================================
   Klarweg Access Worker · LIVE-COURSE ENROLMENT WITH ONLINE PAYMENT
   ------------------------------------------------------------
   Routes (wired in index.js):
     GET  /enrol/catalog               public: courses open for online
                                       enrolment, fees, seats left
     GET  /enrol/quote?course_id=      signed in: the amount due, computed
                                       here
     POST /enrol/checkout              signed in: hold a seat + Cashfree
                                       order for the full course fee
     GET  /enrol/enrolments            signed in: my enrolments
     GET  /enrol/enrolments/:ref       signed in: one enrolment; reconciles
                                       open payments with Cashfree
   Full payment only (owner decision, 2026-10-21): one enrolment is paid by
   one payment of the whole course fee. There are no instalments.
   Settlement of PAYMENT_SUCCESS webhooks for enrolment orders
   ("enrp_…") is enrolWebhook() below, called from webhooks-cashfree.js.

   Separation — nothing here is negotiable:
     · Never imports entitlements.js / products.js and never reads or writes
       orders, user_entitlements, entitlements or consult_bookings (except
       to READ a confirmed consultation for the fee adjustment, when that is
       switched on). An enrolment payment never unlocks self-paced content.
     · Enrolment order ids start "enrp_"; self-paced "ord_"; consultation
       "cons_". Each side looks only at its own table.

   Trust model:
     · Fees come from LIVE_COURSES below (the published course data, kept in
       step by a test). The browser sends a course id only; any
       amount it sends is ignored, except that POST /enrol/checkout refuses
       to start if the amount the learner was shown is no longer the amount
       due (expected_amount_paise), so nobody pays a figure they didn't see.
     · Enrolment is confirmed only when Cashfree's own order API reports
       PAID for exactly the payment's amount in INR — never on the return
       redirect. A webhook only names an order.
     · Seats: one conditional INSERT takes a seat only while fewer than the
       course capacity are held; a learner holds at most one active
       enrolment per batch; an enrolment has at most one open or paid
       order (migration-014). Duplicate webhooks, polls and refreshes
       resume or acknowledge; they never charge or enrol twice.
     · No email or message is sent from this module.

   Switches:
     ENROL_PAYMENTS = "off" (default) | "sandbox" | "live" — like
       CONSULT_BOOKING: "sandbox" only with CASHFREE_ENV "sandbox", "live"
       only with "production". scripts/predeploy-access-check.mjs refuses
       anything but "off" without --allow-enrol-payments=<mode>.
     ENROL_COURSES  = JSON {"live-a1":{"batch":"2026-11-02"}}: the courses
       open for online enrolment and the start date of the batch being
       sold. A course not listed, or whose batch has started, is closed.
     ENROL_CONSULT_CREDIT = "off" (default) | "course-fee": whether a
       confirmed ₹100 consultation from the last 7 days reduces the course
       fee (an owner decision; see docs/live-classes-online-payments.md).
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
import { cashfreeExpiryTime, parseGatewayTime, istClock, FEE_PAISE as CONSULT_FEE_PAISE } from "./consultations.js";

const CASHFREE_API_VERSION = "2023-08-01";

/* The published live courses that may be sold online, with the full
   course fee in paise. Mirrors live-classes-data.js and the decision sheet
   (D3): a test fails if a fee or capacity here differs from the page. Only
   a course listed here AND open in ENROL_COURSES with a future batch can
   be charged; a teacher's displayed price alone sells nothing. */
export const LIVE_COURSES = Object.freeze({
  "live-a1": Object.freeze({
    title: "Beginner German · A1",
    capacity: 8,                                   // "Up to 8 learners"
    feePaise: 799900                               // ₹7,999, paid in full
  })
});
/* The only payment plan. A request naming any other plan is refused. */
export const PLAN = "full";
/* The consultation adjustment period (decision sheet D4: 7 days). */
export const CONSULT_CREDIT_DAYS = 7;

export const HOLD_SECONDS = 30 * 60;               // seat held while paying
export const GATEWAY_EXPIRY_SECONDS = 26 * 60;     // gateway order ends before the hold
export const DAILY_ATTEMPT_LIMIT = 6;

const REF_ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
const PAYMENT_ID_RE = /^enrp_[0-9a-f-]{36}$/;
export const ENROL_REF_RE = /^KWE-[2-9A-HJ-NP-Z]{8}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

const nowSeconds = () => Math.floor(Date.now() / 1000);

function json(data, status = 200) {
  return Response.json(data, { status, headers: { "cache-control": "no-store" } });
}

/* ---------------- configuration ---------------- */
export function enrolMode(env) {
  const wanted = String(env.ENROL_PAYMENTS || "off").toLowerCase();
  if (wanted === "off") return { enabled: false, mode: "off", problem: null };
  if (wanted !== "sandbox" && wanted !== "live") return { enabled: false, mode: "off", problem: "ENROL_PAYMENTS must be off, sandbox or live" };
  const cf = cashfreeConfigProblem(env);
  if (cf) return { enabled: false, mode: "off", problem: cf };
  const gateway = cashfreeMode(env);
  if (wanted === "sandbox" && gateway !== "sandbox") return { enabled: false, mode: "off", problem: "ENROL_PAYMENTS=sandbox needs CASHFREE_ENV=sandbox" };
  if (wanted === "live" && gateway !== "production") return { enabled: false, mode: "off", problem: "ENROL_PAYMENTS=live needs CASHFREE_ENV=production" };
  return { enabled: true, mode: wanted, problem: null };
}

/* ENROL_COURSES → { courseId: { batch } } for known courses with a valid
   batch date. Anything malformed is ignored (and logged without values). */
export function configuredCourses(env) {
  if (!env.ENROL_COURSES) return {};
  let raw;
  try { raw = JSON.parse(env.ENROL_COURSES); } catch { console.error("enrol: ENROL_COURSES is not valid JSON"); return {}; }
  const out = {};
  for (const [id, v] of Object.entries(raw && typeof raw === "object" ? raw : {})) {
    if (!LIVE_COURSES[id] || !v || typeof v.batch !== "string" || !DATE_RE.test(v.batch)) { console.error("enrol: ENROL_COURSES entry refused for", id); continue; }
    out[id] = { batch: v.batch };
  }
  return out;
}

export function creditMode(env) {
  return String(env.ENROL_CONSULT_CREDIT || "off") === "course-fee" ? "course-fee" : "off";
}

/* A course is open for online enrolment today: configured, and its batch
   has not started (IST). */
function openCourse(env, courseId, clock = istClock()) {
  const cfg = configuredCourses(env)[courseId];
  if (!cfg) return null;
  if (cfg.batch <= clock.date) return null;
  return { id: courseId, batch: cfg.batch, ...LIVE_COURSES[courseId] };
}

function addDays(date, days) {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
}

/* ---------------- storage helpers ---------------- */
function newRef() {
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  return "KWE-" + Array.from(bytes, (b) => REF_ALPHABET[b % REF_ALPHABET.length]).join("");
}
const isUniqueViolation = (e) => /UNIQUE constraint failed/i.test(String(e && e.message));

async function sweep(db, nowSec) {
  await db.batch([
    db.prepare("UPDATE live_enrolments SET status = 'expired', updated_at = ?1 WHERE status = 'pending' AND hold_expires_at <= ?1").bind(nowSec),
    db.prepare("UPDATE live_payments SET status = 'expired', updated_at = ?1 WHERE status = 'pending' AND expires_at <= ?1").bind(nowSec)
  ]);
}

async function seatsHeld(db, courseId, batch) {
  return (await db.prepare(
    "SELECT COUNT(*) AS n FROM live_enrolments WHERE course_id = ?1 AND batch = ?2 AND status IN ('pending', 'enrolled')"
  ).bind(courseId, batch).first()).n;
}

async function paymentsOf(db, enrolmentId) {
  const { results } = await db.prepare(
    "SELECT * FROM live_payments WHERE enrolment_id = ?1 ORDER BY created_at"
  ).bind(enrolmentId).all();
  return results;
}

export function publicEnrolment(row, payments, mode) {
  const course = LIVE_COURSES[row.course_id];
  const paid = payments.some((p) => p.status === "paid");
  const open = payments.some((p) => p.status === "pending");
  return {
    ref: row.ref,
    courseId: row.course_id,
    courseTitle: course ? course.title : row.course_id,
    batch: row.batch,
    status: row.status,
    totalPaise: row.total_paise,
    creditPaise: row.credit_paise,
    creditConsultRef: row.credit_consult_ref || null,
    amountDuePaise: row.total_paise - row.credit_paise,
    paymentStatus: paid ? "paid" : open ? "pending" : "due",
    paidPaise: payments.filter((p) => p.status === "paid").reduce((a, p) => a + p.amount_paise, 0),
    holdExpiresAt: row.status === "pending" ? row.hold_expires_at : null,
    testMode: mode === "sandbox"
  };
}

/* The consultation that may be adjusted against this fee: the learner's
   most recent CONFIRMED consultation dated within the last 7 days, not
   already used by another active enrolment. */
async function consultCredit(env, userId, clock) {
  if (creditMode(env) !== "course-fee") return null;
  const since = addDays(clock.date, -CONSULT_CREDIT_DAYS);
  let row;
  try {
    row = await env.DB.prepare(
      `SELECT c.ref FROM consult_bookings c
        WHERE c.user_id = ?1 AND c.status = 'confirmed' AND c.date >= ?2 AND c.date <= ?3
          AND NOT EXISTS (SELECT 1 FROM live_enrolments e WHERE e.credit_consult_ref = c.ref AND e.status IN ('pending', 'enrolled', 'review'))
        ORDER BY c.date DESC LIMIT 1`
    ).bind(userId, since, clock.date).first();
  } catch { return null; }
  return row ? { ref: row.ref, amountPaise: CONSULT_FEE_PAISE } : null;
}

/* The amount due: the full course fee, less the consultation adjustment
   when that is switched on and applies. */
async function quoteFor(env, user, course, clock) {
  const credit = user ? await consultCredit(env, user.id, clock) : null;
  const creditPaise = credit ? Math.min(credit.amountPaise, course.feePaise - 100) : 0;
  return {
    courseId: course.id,
    courseTitle: course.title,
    batch: course.batch,
    totalPaise: course.feePaise,
    creditPaise,
    creditConsultRef: credit ? credit.ref : null,
    dueNowPaise: course.feePaise - creditPaise,
    currency: "INR"
  };
}

/* ---------------- Cashfree ---------------- */
async function fetchGatewayOrder(env, orderId) {
  try {
    const res = await fetch(`${cashfreeBaseUrl(env)}/orders/${encodeURIComponent(orderId)}`, {
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

/* Creates the Cashfree order for an enrolment's course fee. Returns
   { ok, paymentSessionId, expiresAt } or { ok: false }. Nothing is written. */
async function createGatewayOrder(env, request, { id, ref, user, amountPaise, courseTitle, now }) {
  const expiresAt = now + GATEWAY_EXPIRY_SECONDS;
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
        order_amount: amountPaise / 100,
        order_currency: "INR",
        order_expiry_time: cashfreeExpiryTime(expiresAt),
        customer_details: {
          customer_id: user.id,
          customer_email: user.email,
          customer_phone: user.phone,
          customer_name: user.name || "Klarweg Customer"
        },
        order_note: `Klarweg ${courseTitle} ${ref}`,
        order_tags: { kind: "live-enrolment", ref },
        order_meta: {
          return_url: siteBaseUrl(env, request) + "/live-classes.html?enrol_ref=" + ref + "#enrol",
          notify_url: notifyUrl(env)
        }
      })
    });
    data = await readJson(res);
  } catch {
    return { ok: false };
  }
  if (!res.ok || !data) return { ok: false };
  const returned = parseGatewayTime(data.order_expiry_time);
  if (data.order_id !== id || Math.round(Number(data.order_amount) * 100) !== amountPaise || data.order_currency !== "INR"
      || typeof data.payment_session_id !== "string" || !data.payment_session_id
      || returned === null || returned > expiresAt + 60 || returned <= now) {
    console.error("enrol: gateway order refused", ref, returned === null ? "expiry-missing" : "validation");
    return { ok: false };
  }
  return { ok: true, paymentSessionId: data.payment_session_id, expiresAt: Math.min(returned, expiresAt) };
}

/* Applies a gateway order record to a payment (and its enrolment).
   Returns { result: "paid"|"duplicate"|"not-paid"|"expired"|"review", reason? }.
   Only a PAID order for exactly the payment's amount in INR, with our
   order id, counts. */
export async function settlePayment(env, payment, remote, paymentId) {
  const db = env.DB;
  const now = nowSeconds();
  if (payment.status === "paid") return { result: "duplicate" };
  if (payment.status === "review" || payment.status === "refunded") return { result: "review", reason: payment.review_reason, duplicate: true };

  const remoteStatus = String(remote.order_status || "").toUpperCase();
  const remotePaise = Math.round(Number(remote.order_amount || 0) * 100);
  const mismatch =
    String(remote.order_id || "") !== payment.id ? "order-id"
    : remoteStatus !== "PAID" ? null
    : remotePaise !== Number(payment.amount_paise) ? "amount"
    : String(remote.order_currency || "").toUpperCase() !== "INR" ? "currency"
    : null;

  const paymentToReview = async (reason) => {
    await db.prepare(
      "UPDATE live_payments SET status = 'review', review_reason = ?1, payment_id = COALESCE(payment_id, ?2), updated_at = ?3 WHERE id = ?4 AND status NOT IN ('paid', 'refunded')"
    ).bind(reason, paymentId || null, now, payment.id).run();
    console.error("enrol: payment needs review", payment.id, reason);
    return { result: "review", reason };
  };
  if (mismatch) return paymentToReview(mismatch);

  if (remoteStatus !== "PAID") {
    if ((remoteStatus === "EXPIRED" || remoteStatus === "TERMINATED") && payment.status === "pending") {
      await db.prepare("UPDATE live_payments SET status = 'expired', updated_at = ?1 WHERE id = ?2 AND status = 'pending'").bind(now, payment.id).run();
      return { result: "expired" };
    }
    return { result: "not-paid" };
  }

  /* Paid. Record the money first: the payment row becomes 'paid' (the
     enrolment can then never be charged again). A second paid order for
     the same enrolment violates the unique index: that is a duplicate
     charge, kept for a person to refund. */
  try {
    const r = await db.prepare(
      "UPDATE live_payments SET status = 'paid', payment_id = COALESCE(?1, payment_id), updated_at = ?2 WHERE id = ?3 AND status IN ('pending', 'expired', 'failed')"
    ).bind(paymentId || null, now, payment.id).run();
    if (!(r.meta && r.meta.changes === 1)) {
      const fresh = await db.prepare("SELECT * FROM live_payments WHERE id = ?1").bind(payment.id).first();
      return fresh.status === "paid" ? { result: "duplicate" } : { result: "review", reason: fresh.review_reason, duplicate: true };
    }
  } catch (e) {
    if (!isUniqueViolation(e)) throw e;
    return paymentToReview("duplicate-payment");
  }

  /* Paid: the enrolment is confirmed. Normal case: still pending. */
  const enrolment = await db.prepare("SELECT * FROM live_enrolments WHERE id = ?1").bind(payment.enrolment_id).first();
  if (!enrolment) return { result: "paid" };
  if (enrolment.status === "enrolled") return { result: "paid" };
  const enrolmentToReview = async (reason) => {
    await db.prepare(
      "UPDATE live_enrolments SET status = 'review', review_reason = ?1, updated_at = ?2 WHERE id = ?3 AND status NOT IN ('enrolled', 'cancelled')"
    ).bind(reason, now, enrolment.id).run();
    console.error("enrol: enrolment needs review", enrolment.ref, reason);
    return { result: "review", reason };
  };
  if (enrolment.status === "pending") {
    const r = await db.prepare(
      "UPDATE live_enrolments SET status = 'enrolled', updated_at = ?1 WHERE id = ?2 AND status = 'pending'"
    ).bind(now, enrolment.id).run();
    if (r.meta && r.meta.changes === 1) return { result: "paid", enrolled: true };
  }
  /* Recovery: paid after the seat hold lapsed. The seat is re-taken only
     if the batch has not started and a seat is still free (one
     conditional UPDATE); otherwise a person reviews and refunds. */
  const course = LIVE_COURSES[enrolment.course_id];
  if (!course || enrolment.batch <= istClock().date) return enrolmentToReview("late-payment-batch-started");
  try {
    const r = await db.prepare(
      `UPDATE live_enrolments SET status = 'enrolled', updated_at = ?1
        WHERE id = ?2 AND status IN ('expired', 'released', 'failed')
          AND (SELECT COUNT(*) FROM live_enrolments WHERE course_id = ?3 AND batch = ?4 AND status IN ('pending', 'enrolled')) < ?5`
    ).bind(now, enrolment.id, enrolment.course_id, enrolment.batch, course.capacity).run();
    if (r.meta && r.meta.changes === 1) return { result: "paid", enrolled: true, recovered: true };
  } catch (e) {
    if (!isUniqueViolation(e)) throw e;
    return enrolmentToReview("late-payment-already-enrolled");
  }
  const fresh = await db.prepare("SELECT * FROM live_enrolments WHERE id = ?1").bind(enrolment.id).first();
  return fresh.status === "enrolled" ? { result: "paid" } : enrolmentToReview("late-payment-no-seat");
}

/* ---------------- routes ---------------- */
async function sessionUser(request, env) {
  return findSessionUser(env.DB, getSessionToken(request));
}

export async function enrolCatalog(request, env) {
  const cfg = enrolMode(env);
  const clock = istClock();
  const base = { ok: true, enabled: cfg.enabled, testMode: cfg.mode === "sandbox", currency: "INR", consultCredit: creditMode(env) };
  if (!cfg.enabled) return json({ ...base, courses: [] });
  await sweep(env.DB, clock.nowSec);
  const courses = [];
  for (const id of Object.keys(configuredCourses(env))) {
    const course = openCourse(env, id, clock);
    if (!course) continue;
    const held = await seatsHeld(env.DB, id, course.batch);
    courses.push({
      id, title: course.title, batch: course.batch, capacity: course.capacity,
      seatsLeft: Math.max(0, course.capacity - held),
      feePaise: course.feePaise
    });
  }
  return json({ ...base, courses });
}

/* course_id, and the plan if one is named: only "full" is accepted
   (an old page asking for instalments is refused, never charged). */
function readCourse(source) {
  const courseId = typeof source.course_id === "string" ? source.course_id.trim() : "";
  const planOk = source.plan == null || source.plan === "" || source.plan === PLAN;
  return { courseId, planOk };
}
const badPlan = () => json({ ok: false, error: "Only full payment of the course fee is available.", code: "bad-plan" }, 400);

export async function enrolQuote(request, env) {
  const user = await sessionUser(request, env);
  if (!user) return json({ ok: false, error: "Authentication required." }, 401);
  const cfg = enrolMode(env);
  if (!cfg.enabled) return json({ ok: false, error: "Online enrolment is not available." }, 503);
  const url = new URL(request.url);
  const { courseId, planOk } = readCourse(Object.fromEntries(url.searchParams));
  if (!planOk) return badPlan();
  const clock = istClock();
  const course = openCourse(env, courseId, clock);
  if (!course) return json({ ok: false, error: "This course is not open for online enrolment.", code: "course-closed" }, 409);
  return json({ ok: true, quote: await quoteFor(env, user, course, clock), testMode: cfg.mode === "sandbox" });
}

export async function createEnrolCheckout(request, env) {
  const user = await sessionUser(request, env);
  if (!user) return json({ ok: false, error: "Authentication required." }, 401);
  const cfg = enrolMode(env);
  if (!cfg.enabled) {
    if (cfg.problem) console.error("enrol: checkout refused:", cfg.problem);
    return json({ ok: false, error: "Online enrolment is not available." }, 503);
  }
  let body;
  try { body = await request.json(); } catch { return json({ ok: false, error: "Invalid JSON body." }, 400); }
  const { courseId, planOk } = readCourse(body || {});
  if (!planOk) return badPlan();
  const clock = istClock();
  const course = openCourse(env, courseId, clock);
  if (!course) return json({ ok: false, error: "This course is not open for online enrolment.", code: "course-closed" }, 409);
  if (!isValidPhone(user.phone)) {
    return json({ ok: false, error: "A valid phone number is required before payment. Please add one to your account.", code: "phone-required" }, 400);
  }

  await sweep(env.DB, clock.nowSec);

  const active = await env.DB.prepare(
    "SELECT * FROM live_enrolments WHERE user_id = ?1 AND course_id = ?2 AND batch = ?3 AND status IN ('pending', 'enrolled')"
  ).bind(user.id, courseId, course.batch).first();
  if (active && active.status === "enrolled") {
    return json({ ok: false, code: "already-enrolled", error: "You are already enrolled in this batch.", enrolment: publicEnrolment(active, await paymentsOf(env.DB, active.id), cfg.mode) }, 409);
  }
  /* Refresh / retry / back button: a held enrolment resumes its open order. */
  if (active) {
    const open = await env.DB.prepare(
      "SELECT * FROM live_payments WHERE enrolment_id = ?1 AND status = 'pending'"
    ).bind(active.id).first();
    if (open && open.payment_session_id) {
      return json({ ok: true, resumed: true, enrolment: publicEnrolment(active, await paymentsOf(env.DB, active.id), cfg.mode), paymentSessionId: open.payment_session_id, checkout: { mode: cashfreeMode(env) } });
    }
  }

  const quote = await quoteFor(env, user, course, clock);
  /* The learner must have seen this exact amount. */
  if (body.expected_amount_paise != null && Number(body.expected_amount_paise) !== quote.dueNowPaise) {
    return json({ ok: false, code: "amount-changed", error: "The amount due has changed. Please review it before paying.", quote }, 409);
  }

  const attempts = (await env.DB.prepare(
    "SELECT COUNT(*) AS n FROM live_enrolments WHERE user_id = ?1 AND created_at >= ?2"
  ).bind(user.id, clock.nowSec - 86400).first()).n;
  if (attempts >= DAILY_ATTEMPT_LIMIT) {
    return json({ ok: false, error: "Too many enrolment attempts today. Please try again tomorrow.", code: "rate-limited" }, 429);
  }
  if (!active && (await seatsHeld(env.DB, courseId, course.batch)) >= course.capacity) {
    return json({ ok: false, code: "sold-out", error: "This batch is full. Nothing has been charged." }, 409);
  }

  const enrolmentId = `enr_${crypto.randomUUID()}`;
  const paymentId = `enrp_${crypto.randomUUID()}`;
  const ref = newRef();
  const holdUntil = clock.nowSec + HOLD_SECONDS;

  /* 1. The gateway order first; nothing in the database changes yet. */
  const gw = await createGatewayOrder(env, request, { id: paymentId, ref, user, amountPaise: quote.dueNowPaise, courseTitle: course.title, now: clock.nowSec });
  if (!gw.ok) return json({ ok: false, code: "payment-unavailable", error: "The payment could not be started. Nothing has been charged. Please try again." }, 502);

  /* 2. One transaction: release the learner's earlier hold whose order
        lapsed (if any),
        take a seat only while one is free, and open the payment. If the
        seat insert takes nothing, the payment insert takes nothing too. */
  const stmts = [];
  if (active) {
    stmts.push(env.DB.prepare("UPDATE live_enrolments SET status = 'released', updated_at = ?1 WHERE id = ?2 AND status = 'pending'").bind(clock.nowSec, active.id));
  }
  stmts.push(env.DB.prepare(
    `INSERT INTO live_enrolments
       (id, ref, user_id, course_id, batch, status, total_paise, credit_paise, credit_consult_ref, hold_expires_at, created_at, updated_at)
     SELECT ?1, ?2, ?3, ?4, ?5, 'pending', ?6, ?7, ?8, ?9, ?10, ?10
      WHERE (SELECT COUNT(*) FROM live_enrolments WHERE course_id = ?4 AND batch = ?5 AND status IN ('pending', 'enrolled')) < ?11`
  ).bind(enrolmentId, ref, user.id, courseId, course.batch, quote.totalPaise, quote.creditPaise, quote.creditConsultRef, holdUntil, clock.nowSec, course.capacity));
  stmts.push(env.DB.prepare(
    `INSERT INTO live_payments (id, enrolment_id, amount_paise, currency, status, payment_session_id, expires_at, created_at, updated_at)
     SELECT ?1, ?2, ?3, 'INR', 'pending', ?4, ?5, ?6, ?6
      WHERE EXISTS (SELECT 1 FROM live_enrolments WHERE id = ?2)`
  ).bind(paymentId, enrolmentId, quote.dueNowPaise, gw.paymentSessionId, gw.expiresAt, clock.nowSec));
  try {
    await env.DB.batch(stmts);
  } catch (e) {
    if (!isUniqueViolation(e)) throw e;
    await recordUnusedPayment(env.DB, { paymentId, enrolmentId, amountPaise: quote.dueNowPaise, now: clock.nowSec, reason: "concurrent-request" });
    return json({ ok: false, code: "enrolment-in-progress", error: "Another enrolment request from your account was being processed at the same moment. Nothing has been charged. Please reload." }, 409);
  }
  const row = await env.DB.prepare("SELECT * FROM live_enrolments WHERE id = ?1").bind(enrolmentId).first();
  if (!row) {
    await recordUnusedPayment(env.DB, { paymentId, enrolmentId, amountPaise: quote.dueNowPaise, now: clock.nowSec, reason: "sold-out" });
    return json({ ok: false, code: "sold-out", error: "This batch has just filled up. Nothing has been charged." }, 409);
  }
  return json({
    ok: true,
    enrolment: publicEnrolment(row, await paymentsOf(env.DB, enrolmentId), cfg.mode),
    released: active ? active.ref : null,
    paymentSessionId: gw.paymentSessionId,
    checkout: { mode: cashfreeMode(env) }
  });
}

/* A gateway order that never became a seat: kept as a failed payment so it
   can be traced (and settlePayment() would send a payment on it to review). */
async function recordUnusedPayment(db, { paymentId, enrolmentId, amountPaise, now, reason }) {
  await db.prepare(
    `INSERT INTO live_payments (id, enrolment_id, amount_paise, currency, status, expires_at, review_reason, created_at, updated_at)
     VALUES (?1, ?2, ?3, 'INR', 'failed', ?4, ?5, ?4, ?4)`
  ).bind(paymentId, enrolmentId, amountPaise, now, reason).run();
}

/* Reconciles every not-yet-final payment of one enrolment with Cashfree. */
async function reconcileEnrolment(env, enrolmentId) {
  if (cashfreeConfigProblem(env)) return "unavailable";
  const { results } = await env.DB.prepare(
    "SELECT * FROM live_payments WHERE enrolment_id = ?1 AND status IN ('pending', 'expired', 'failed')"
  ).bind(enrolmentId).all();
  let out = null;
  for (const p of results) {
    const remote = await fetchGatewayOrder(env, p.id);
    if (!remote) { out = out || "unavailable"; continue; }
    const r = await settlePayment(env, p, remote, null);
    if (r.result !== "not-paid" && r.result !== "expired") out = r.result;
  }
  return out;
}

export async function getEnrolment(request, env, ref) {
  const user = await sessionUser(request, env);
  if (!user) return json({ ok: false, error: "Authentication required." }, 401);
  if (!ENROL_REF_RE.test(ref)) return json({ ok: false, error: "Invalid enrolment reference." }, 400);
  let row = await env.DB.prepare("SELECT * FROM live_enrolments WHERE ref = ?1 AND user_id = ?2").bind(ref, user.id).first();
  if (!row) return json({ ok: false, error: "Enrolment not found." }, 404);
  /* A lost webhook never leaves a paid learner unconfirmed. Works even
     while online enrolment is switched off. */
  const verification = await reconcileEnrolment(env, row.id);
  await sweep(env.DB, nowSeconds());
  row = await env.DB.prepare("SELECT * FROM live_enrolments WHERE id = ?1").bind(row.id).first();
  return json({ ok: true, enrolment: publicEnrolment(row, await paymentsOf(env.DB, row.id), enrolMode(env).mode), verification });
}

export async function listEnrolments(request, env) {
  const user = await sessionUser(request, env);
  if (!user) return json({ ok: false, error: "Authentication required." }, 401);
  const { results } = await env.DB.prepare(
    "SELECT * FROM live_enrolments WHERE user_id = ?1 AND status IN ('pending', 'enrolled', 'review') ORDER BY created_at DESC LIMIT 20"
  ).bind(user.id).all();
  const mode = enrolMode(env).mode;
  const out = [];
  for (const r of results) out.push(publicEnrolment(r, await paymentsOf(env.DB, r.id), mode));
  return json({ ok: true, enrolments: out });
}

/* ---------------- webhook + scheduled reconciliation ---------------- */
export const isEnrolOrderId = (id) => PAYMENT_ID_RE.test(String(id || ""));

export async function enrolWebhook(env, cashfreeOrderId, paymentId) {
  const payment = await env.DB.prepare("SELECT * FROM live_payments WHERE id = ?1").bind(String(cashfreeOrderId)).first();
  if (!payment) return json({ ok: true, ignored: true, reason: "unknown-order" });
  if (payment.status === "paid") return json({ ok: true, status: "paid", duplicate: true });
  const remote = await fetchGatewayOrder(env, payment.id);
  if (!remote) return json({ ok: false, error: "verification-unavailable" }, 500);
  const out = await settlePayment(env, payment, remote, paymentId ? String(paymentId) : null);
  if (out.result === "paid") return json({ ok: true, status: "paid", enrolled: !!out.enrolled });
  if (out.result === "duplicate") return json({ ok: true, status: "paid", duplicate: true });
  if (out.result === "not-paid") return json({ ok: false, error: "not-yet-paid" }, 503);
  if (out.result === "review") return json({ ok: false, error: "verification-failed", reason: out.reason, duplicate: !!out.duplicate }, ["amount", "currency", "order-id"].includes(out.reason) ? 400 : 200);
  return json({ ok: true, status: out.result });
}

/* Cron reconciliation (index.js scheduled()): re-checks recent payments
   that are still open or expired, so a payment whose webhook and return
   were both lost is still settled. Read-only towards Cashfree. */
export async function reconcileRecentPayments(env, { sinceSeconds = 3 * 86400, limit = 50 } = {}) {
  if (cashfreeConfigProblem(env)) return { checked: 0, skipped: "cashfree-not-configured" };
  const now = nowSeconds();
  await sweep(env.DB, now);
  const { results } = await env.DB.prepare(
    "SELECT * FROM live_payments WHERE status IN ('pending', 'expired') AND created_at >= ?1 ORDER BY created_at LIMIT ?2"
  ).bind(now - sinceSeconds, limit).all();
  const tally = {};
  for (const p of results) {
    const remote = await fetchGatewayOrder(env, p.id);
    const r = remote ? (await settlePayment(env, p, remote, null)).result : "unavailable";
    tally[r] = (tally[r] || 0) + 1;
  }
  return { checked: results.length, ...tally };
}
