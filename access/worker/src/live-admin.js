/* ============================================================
   Klarweg Access Worker · LIVE MARKETPLACE ADMINISTRATION
   ------------------------------------------------------------
   Routes (index.js), all JSON, all no-store:
     GET  /live-admin/overview                 everything the admin page shows
     POST /live-admin/slots                    open / close demo slots
     POST /live-admin/batches                  create / update a batch
     POST /live-admin/teachers                 pause / resume demos or courses
     POST /live-admin/coupons                  switch a coupon on / off
     POST /live-admin/demos/:ref               cancel · reschedule · refund status · note
     POST /live-admin/enrolments/:ref          cancel · refund status · note

   Access (fail closed):
     · a signed-in session whose account email is listed in the Worker
       variable LIVE_ADMIN_EMAILS (comma-separated; unset = nobody), AND
     · a FRESH second factor on this session (sessions.mfa_verified_at,
       12 h, the same rule as exam staff: /auth/mfa/verify).
   Every write is recorded in live_admin_audit.

   What an admin can NOT do here, by design:
     · verify a teacher, a level or a qualification (code: live-catalog.js);
     · change a price, a coupon amount or the ₹100 demo fee (code);
     · mark anything paid. Payment status only ever comes from Cashfree's
       order API (settle / settlePayment). Refunds are made in the Cashfree
       dashboard; this records that it happened.
   ============================================================ */
import { getSessionToken, findSessionUser } from "./sessions.js";
import { MFA_FRESH_SECONDS } from "./mfa-routes.js";
import { istClock, BOOKING_REF_RE } from "./consultations.js";
import { ENROL_REF_RE } from "./enrolments.js";
import { moveDemo } from "./live-demos.js";
import {
  TEACHERS, LEVELS, FORMATS, COUPONS, DEMO_TIMES, courseId, courseStatus, demoEligible, isDemoDay, isValidDate
} from "./live-catalog.js";

const json = (data, status = 200) => Response.json(data, { status, headers: { "cache-control": "no-store" } });
const nowSec = () => Math.floor(Date.now() / 1000);
const BATCH_ID_RE = /^bat_[0-9a-f-]{36}$/;

export function adminEmails(env) {
  return String(env.LIVE_ADMIN_EMAILS || "").split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
}

/* → { user } or { response } */
export async function requireLiveAdmin(request, env) {
  const user = await findSessionUser(env.DB, getSessionToken(request));
  if (!user) return { response: json({ ok: false, error: "Authentication required." }, 401) };
  const allowed = adminEmails(env);
  if (!allowed.length || !allowed.includes(String(user.email || "").toLowerCase())) {
    return { response: json({ ok: false, error: "Not authorised.", code: "not-admin" }, 403) };
  }
  const t = nowSec();
  const v = Number(user.mfaVerifiedAt);
  if (!Number.isFinite(v) || v <= t - MFA_FRESH_SECONDS || v > t + 60) {
    return { response: json({ ok: false, error: "Please confirm your two-factor code first.", code: "mfa-required" }, 403) };
  }
  return { user };
}

async function audit(env, userId, action, detail) {
  await env.DB.prepare("INSERT INTO live_admin_audit (at, user_id, action, detail) VALUES (?1, ?2, ?3, ?4)")
    .bind(nowSec(), userId, action, JSON.stringify(detail || {})).run();
}
async function body(request) { try { return await request.json(); } catch { return null; } }
const bad = (error, code = "invalid") => json({ ok: false, error, code }, 400);
const cleanText = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "") || null;

/* ---------------- overview ---------------- */
export async function liveAdminOverview(request, env) {
  const a = await requireLiveAdmin(request, env);
  if (a.response) return a.response;
  const clock = istClock();
  const db = env.DB;
  const q = async (sql, ...args) => (await db.prepare(sql).bind(...args).all()).results;
  const teachers = Object.entries(TEACHERS).map(([id, t]) => ({
    id, name: t.name, preferred: t.preferred, demoEligible: demoEligible(id),
    verifiedCourses: LEVELS.flatMap((l) => FORMATS.filter((f) => courseStatus(id, l, f) === "verified").map((f) => courseId(id, l, f)))
  }));
  return json({
    ok: true,
    admin: { email: a.user.email },
    today: clock.date,
    demoTimes: DEMO_TIMES,
    teachers,
    settings: await q("SELECT * FROM live_teacher_settings"),
    coupons: (await q("SELECT code, active, updated_at FROM live_coupons")).map((c) => ({ ...c, ...COUPONS[c.code] })),
    slots: await q("SELECT teacher_id, date, slot_start, status FROM demo_slots WHERE date >= ?1 ORDER BY date, slot_start LIMIT 500", clock.date),
    batches: await q(`SELECT b.*, (SELECT COUNT(*) FROM live_enrolments e WHERE e.course_id = b.course_id AND e.batch = b.id AND e.status = 'enrolled') AS enrolled,
                        (SELECT COUNT(*) FROM live_enrolments e WHERE e.course_id = b.course_id AND e.batch = b.id AND e.status = 'pending') AS pending
                      FROM live_batches b ORDER BY b.course_id, b.created_at`),
    demos: await q(`SELECT c.ref, c.teacher_id, c.date, c.slot_start, c.status, c.amount_paise, c.contact_name, c.contact_phone, c.reschedule_count,
                      c.refund_status, c.review_reason, c.admin_note, c.created_at, u.email
                    FROM consult_bookings c LEFT JOIN users u ON u.id = c.user_id
                    WHERE c.kind = 'demo' AND c.status IN ('pending', 'confirmed', 'review', 'cancelled') ORDER BY c.date DESC, c.slot_start DESC LIMIT 200`),
    enrolments: await q(`SELECT e.ref, e.course_id, e.batch, e.status, e.original_paise, e.coupon_code, e.discount_paise, e.total_paise, e.credit_paise,
                           e.refund_status, e.review_reason, e.admin_note, e.created_at, u.email,
                           (SELECT GROUP_CONCAT(p.status) FROM live_payments p WHERE p.enrolment_id = e.id) AS payment_statuses
                         FROM live_enrolments e LEFT JOIN users u ON u.id = e.user_id
                         WHERE e.status IN ('pending', 'enrolled', 'review', 'cancelled') ORDER BY e.created_at DESC LIMIT 200`),
    audit: await q("SELECT at, action, detail FROM live_admin_audit ORDER BY id DESC LIMIT 50")
  });
}

/* ---------------- demo slots ---------------- */
/* { teacher_id, date, times: ["16:20", …], status: "open"|"closed" } */
export async function liveAdminSlots(request, env) {
  const a = await requireLiveAdmin(request, env);
  if (a.response) return a.response;
  const b = await body(request);
  if (!b) return bad("Invalid JSON body.");
  const { teacher_id: teacherId, date, times, status } = b;
  if (!demoEligible(teacherId)) return bad("This teacher is not verified for demo classes.", "teacher-not-eligible");
  if (!isDemoDay(date)) return bad("Demo slots can be set on Fridays and Sundays only.", "bad-day");
  if (date < istClock().date) return bad("This date is in the past.", "past");
  if (!Array.isArray(times) || !times.length || times.length > DEMO_TIMES.length || !times.every((t) => DEMO_TIMES.includes(t))) {
    return bad("Times must be 20-minute slots from 16:20 to 21:40 IST.", "bad-time");
  }
  if (status !== "open" && status !== "closed") return bad("status must be open or closed.");
  const t = nowSec();
  await env.DB.batch(times.map((slot) => env.DB.prepare(
    `INSERT INTO demo_slots (teacher_id, date, slot_start, status, updated_by, updated_at) VALUES (?1, ?2, ?3, ?4, ?5, ?6)
     ON CONFLICT (teacher_id, date, slot_start) DO UPDATE SET status = excluded.status, updated_by = excluded.updated_by, updated_at = excluded.updated_at`
  ).bind(teacherId, date, slot, status, a.user.id, t)));
  /* Closing a slot never cancels a booking already in it; the admin moves
     or cancels those explicitly. */
  const { results: booked } = await env.DB.prepare(
    `SELECT ref, slot_start, status FROM consult_bookings WHERE teacher_id = ?1 AND date = ?2 AND status IN ('pending', 'confirmed')`
  ).bind(teacherId, date).all();
  await audit(env, a.user.id, "slots", { teacherId, date, times, status });
  return json({ ok: true, bookedInDay: booked });
}

/* ---------------- batches ---------------- */
export async function liveAdminBatch(request, env) {
  const a = await requireLiveAdmin(request, env);
  if (a.response) return a.response;
  const b = await body(request);
  if (!b) return bad("Invalid JSON body.");
  const level = String(b.level || "").toUpperCase();
  const format = String(b.format || "");
  if (!TEACHERS[b.teacher_id] || !LEVELS.includes(level) || !FORMATS.includes(format)) return bad("Choose a teacher, level and format.");
  const cid = courseId(b.teacher_id, level, format);
  if (courseStatus(b.teacher_id, level, format) !== "verified") return bad("This course is still a draft: the teacher's level eligibility is not verified.", "course-draft");
  const status = String(b.status || "draft");
  if (!["draft", "announced", "open", "closed", "cancelled"].includes(status)) return bad("Unknown status.");
  const start = b.start_date ? String(b.start_date) : null;
  const end = b.end_date ? String(b.end_date) : null;
  if ((start && !isValidDate(start)) || (end && !isValidDate(end))) return bad("Dates must be YYYY-MM-DD.");
  if (start && end && end < start) return bad("The end date is before the start date.");
  const schedule = cleanText(b.schedule, 200);
  const note = cleanText(b.fulfilment_note, 600);
  const capacity = Number.isInteger(b.capacity) ? b.capacity : Number.parseInt(b.capacity, 10) || 0;
  if (capacity < 0 || capacity > (format === "individual" ? 1 : 30)) return bad(format === "individual" ? "A one-to-one batch has capacity 1." : "Capacity must be 1–30.");
  if (status === "open") {
    if (!start || !end || !schedule || capacity < 1) return bad("To open a batch for payment, set start date, end date, schedule and capacity.", "incomplete");
    if (start <= istClock().date) return bad("The start date must be in the future.", "past");
    if (b.approve !== true) return bad("Opening a batch for payment needs explicit approval (approve: true).", "approval-required");
  }
  const t = nowSec();
  let id = b.id;
  if (id) {
    if (!BATCH_ID_RE.test(id)) return bad("Invalid batch id.");
    const cur = await env.DB.prepare("SELECT * FROM live_batches WHERE id = ?1").bind(id).first();
    if (!cur) return json({ ok: false, error: "Batch not found." }, 404);
    if (cur.course_id !== cid) return bad("A batch cannot move to another course.");
    const seats = (await env.DB.prepare("SELECT COUNT(*) AS n FROM live_enrolments WHERE batch = ?1 AND status IN ('pending', 'enrolled')").bind(id).first()).n;
    if (capacity < seats) return bad(`${seats} seats are already held; capacity cannot be lower.`, "capacity-below-held");
    await env.DB.prepare(
      `UPDATE live_batches SET start_date = ?1, end_date = ?2, schedule = ?3, capacity = ?4, status = ?5, fulfilment_note = ?6,
         approved_by = CASE WHEN ?5 = 'open' THEN ?7 ELSE approved_by END, approved_at = CASE WHEN ?5 = 'open' THEN ?8 ELSE approved_at END, updated_at = ?8
       WHERE id = ?9`
    ).bind(start, end, schedule, capacity, status, note, a.user.id, t, id).run();
  } else {
    id = `bat_${crypto.randomUUID()}`;
    await env.DB.prepare(
      `INSERT INTO live_batches (id, course_id, teacher_id, level, format, start_date, end_date, schedule, capacity, status, fulfilment_note, approved_by, approved_at, created_at, updated_at)
       VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14, ?14)`
    ).bind(id, cid, b.teacher_id, level, format, start, end, schedule, capacity, status, note,
      status === "open" ? a.user.id : null, status === "open" ? t : null, t).run();
  }
  await audit(env, a.user.id, "batch", { id, courseId: cid, status, start, end, capacity });
  return json({ ok: true, batch: await env.DB.prepare("SELECT * FROM live_batches WHERE id = ?1").bind(id).first() });
}

/* ---------------- teachers / coupons ---------------- */
export async function liveAdminTeacher(request, env) {
  const a = await requireLiveAdmin(request, env);
  if (a.response) return a.response;
  const b = await body(request);
  if (!b || !TEACHERS[b.teacher_id]) return bad("Unknown teacher.");
  const demo = b.demo_paused ? 1 : 0, courses = b.courses_paused ? 1 : 0;
  await env.DB.prepare(
    `INSERT INTO live_teacher_settings (teacher_id, demo_paused, courses_paused, updated_by, updated_at) VALUES (?1, ?2, ?3, ?4, ?5)
     ON CONFLICT (teacher_id) DO UPDATE SET demo_paused = excluded.demo_paused, courses_paused = excluded.courses_paused, updated_by = excluded.updated_by, updated_at = excluded.updated_at`
  ).bind(b.teacher_id, demo, courses, a.user.id, nowSec()).run();
  await audit(env, a.user.id, "teacher", { teacherId: b.teacher_id, demoPaused: demo, coursesPaused: courses });
  return json({ ok: true });
}

export async function liveAdminCoupon(request, env) {
  const a = await requireLiveAdmin(request, env);
  if (a.response) return a.response;
  const b = await body(request);
  if (!b || !COUPONS[b.code]) return bad("Unknown coupon.");
  await env.DB.prepare("UPDATE live_coupons SET active = ?1, updated_by = ?2, updated_at = ?3 WHERE code = ?4")
    .bind(b.active ? 1 : 0, a.user.id, nowSec(), b.code).run();
  await audit(env, a.user.id, "coupon", { code: b.code, active: !!b.active });
  return json({ ok: true });
}

/* ---------------- bookings / enrolments ---------------- */
export async function liveAdminDemo(request, env, ref) {
  const a = await requireLiveAdmin(request, env);
  if (a.response) return a.response;
  if (!BOOKING_REF_RE.test(ref)) return bad("Invalid booking reference.");
  const b = await body(request);
  if (!b) return bad("Invalid JSON body.");
  const row = await env.DB.prepare("SELECT * FROM consult_bookings WHERE ref = ?1 AND kind = 'demo'").bind(ref).first();
  if (!row) return json({ ok: false, error: "Booking not found." }, 404);
  const t = nowSec();
  const note = cleanText(b.note, 500);
  if (b.action === "reschedule") {
    const out = await moveDemo(env, row, { date: String(b.date || ""), slot: String(b.slot || ""), byAdmin: true });
    if (!out.ok) return json({ ok: false, code: out.code, error: out.error }, out.status);
  } else if (b.action === "cancel") {
    /* Frees the slot (the UNIQUE index covers pending/confirmed only). */
    const r = await env.DB.prepare("UPDATE consult_bookings SET status = 'cancelled', refund_status = CASE WHEN status IN ('confirmed', 'review') THEN 'requested' ELSE refund_status END, admin_note = COALESCE(?1, admin_note), updated_at = ?2 WHERE id = ?3 AND status IN ('pending', 'confirmed', 'review')")
      .bind(note, t, row.id).run();
    if (!(r.meta && r.meta.changes === 1)) return json({ ok: false, error: "This booking cannot be cancelled in its current state." }, 409);
  } else if (b.action === "refunded") {
    if (!["cancelled", "review"].includes(row.status)) return json({ ok: false, error: "Cancel the booking before recording a refund." }, 409);
    await env.DB.prepare("UPDATE consult_bookings SET refund_status = 'refunded', status = 'cancelled', admin_note = COALESCE(?1, admin_note), updated_at = ?2 WHERE id = ?3").bind(note, t, row.id).run();
  } else if (b.action === "note") {
    await env.DB.prepare("UPDATE consult_bookings SET admin_note = ?1, updated_at = ?2 WHERE id = ?3").bind(note, t, row.id).run();
  } else {
    return bad("Unknown action.");
  }
  await audit(env, a.user.id, "demo-" + b.action, { ref, date: b.date || null, slot: b.slot || null });
  return json({ ok: true, booking: await env.DB.prepare("SELECT ref, teacher_id, date, slot_start, status, refund_status, admin_note FROM consult_bookings WHERE id = ?1").bind(row.id).first() });
}

export async function liveAdminEnrolment(request, env, ref) {
  const a = await requireLiveAdmin(request, env);
  if (a.response) return a.response;
  if (!ENROL_REF_RE.test(ref)) return bad("Invalid enrolment reference.");
  const b = await body(request);
  if (!b) return bad("Invalid JSON body.");
  const row = await env.DB.prepare("SELECT * FROM live_enrolments WHERE ref = ?1").bind(ref).first();
  if (!row) return json({ ok: false, error: "Enrolment not found." }, 404);
  const t = nowSec();
  const note = cleanText(b.note, 500);
  if (b.action === "cancel") {
    const r = await env.DB.prepare("UPDATE live_enrolments SET status = 'cancelled', refund_status = CASE WHEN status IN ('enrolled', 'review') THEN 'requested' ELSE refund_status END, admin_note = COALESCE(?1, admin_note), updated_at = ?2 WHERE id = ?3 AND status IN ('pending', 'enrolled', 'review')")
      .bind(note, t, row.id).run();
    if (!(r.meta && r.meta.changes === 1)) return json({ ok: false, error: "This enrolment cannot be cancelled in its current state." }, 409);
  } else if (b.action === "refunded") {
    if (!["cancelled", "review"].includes(row.status)) return json({ ok: false, error: "Cancel the enrolment before recording a refund." }, 409);
    await env.DB.batch([
      env.DB.prepare("UPDATE live_enrolments SET status = 'cancelled', refund_status = 'refunded', admin_note = COALESCE(?1, admin_note), updated_at = ?2 WHERE id = ?3").bind(note, t, row.id),
      env.DB.prepare("UPDATE live_payments SET status = 'refunded', updated_at = ?1 WHERE enrolment_id = ?2 AND status IN ('paid', 'review')").bind(t, row.id)
    ]);
  } else if (b.action === "note") {
    await env.DB.prepare("UPDATE live_enrolments SET admin_note = ?1, updated_at = ?2 WHERE id = ?3").bind(note, t, row.id).run();
  } else {
    return bad("Unknown action.");
  }
  await audit(env, a.user.id, "enrolment-" + b.action, { ref });
  return json({ ok: true });
}
