/* ============================================================
   Klarweg Access Worker · LIVE TEACHER MARKETPLACE CATALOGUE (pure)
   ------------------------------------------------------------
   The server's own copy of everything that decides what a learner may
   buy or book in the live-classes marketplace. Nothing here trusts the
   browser: the page (live-classes-data.js + live-marketplace-pricing.js)
   shows the same figures, and scripts/live-marketplace.test.mjs fails if
   the two ever differ.

   Owner pricing (2026-11-20), identical for A1, A2, B1 and B2:
     Reegan Gandhi, Geetika Dhawan   group ₹16,000 − ₹3,000 = ₹13,000
                                     one-to-one ₹22,000 − ₹7,000 = ₹15,000
     every other teacher             group ₹21,000 − ₹3,000 = ₹18,000
                                     one-to-one ₹27,000 − ₹7,000 = ₹20,000
   Coupons: GROUP3000 (group only, ₹3,000), PERSONAL7000 (one-to-one only,
   ₹7,000). One coupon per order. A coupon is never combined with the ₹100
   consultation adjustment (enrolments.js applies at most one reduction).

   Eligibility: a teacher × level × format can be SOLD only if it is listed
   in COURSE_ELIGIBILITY below with status "verified". Every other
   combination stays "draft": shown nowhere as purchasable and refused by
   the Worker. Verification means the teacher's profile, consent and level
   eligibility are confirmed (docs/live-classes-teacher-intake.md); it is
   a reviewed code change, never an admin toggle, because it publishes
   facts about a real person. Admins manage operations only (batches,
   dates, demo slots, pauses, coupon on/off) in D1.
   ============================================================ */

export const LEVELS = Object.freeze(["A1", "A2", "B1", "B2"]);
export const FORMATS = Object.freeze(["group", "individual"]);
export const FORMAT_LABELS = Object.freeze({ group: "Group classes", individual: "One-to-One classes" });

/* Every teacher id the marketplace knows (the roster in live-classes-data.js).
   preferred = the lower owner price tier. */
export const TEACHERS = Object.freeze({
  "reegan-gandhi":   Object.freeze({ name: "Reegan Gandhi",   preferred: true }),
  "geetika-dhawan":  Object.freeze({ name: "Geetika Dhawan",  preferred: true }),
  "priyanshi-verma": Object.freeze({ name: "Priyanshi Verma", preferred: false }),
  "sunidhi-jain":    Object.freeze({ name: "Sunidhi Jain",    preferred: false }),
  "mansi-kapoor":    Object.freeze({ name: "Mansi Kapoor",    preferred: false }),
  "gaurav-singhal":  Object.freeze({ name: "Gaurav Singhal",  preferred: false }),
  "kanika-taneja":   Object.freeze({ name: "Kanika Taneja",   preferred: false }),
  "trisha-khanna":   Object.freeze({ name: "Trisha Khanna",   preferred: false }),
  "rashi-gupta":     Object.freeze({ name: "Rashi Gupta",     preferred: false }),
  "deepika-agarwal": Object.freeze({ name: "Deepika Agarwal", preferred: false }),
  "sahil-arora":     Object.freeze({ name: "Sahil Arora",     preferred: false })
});

/* What is verified for sale. Reegan Gandhi: the owner's own published
   profile (levels A1–B2, group + one-to-one, confirmed 2026-10-20).
   Nobody else has a verified profile yet: Geetika Dhawan's A1–B1 is an
   owner statement for a name-only listing (no consent to a full profile,
   no qualifications), so her courses stay draft like everyone else's. */
export const COURSE_ELIGIBILITY = Object.freeze({
  "reegan-gandhi": Object.freeze({ levels: LEVELS, formats: FORMATS, demo: true })
});

export const PRICES_PAISE = Object.freeze({
  preferred: Object.freeze({ group: 1600000, individual: 2200000 }),
  standard:  Object.freeze({ group: 2100000, individual: 2700000 })
});

export const COUPONS = Object.freeze({
  GROUP3000:    Object.freeze({ code: "GROUP3000",    format: "group",      discountPaise: 300000 }),
  PERSONAL7000: Object.freeze({ code: "PERSONAL7000", format: "individual", discountPaise: 700000 })
});
export const COUPON_FOR_FORMAT = Object.freeze({ group: "GROUP3000", individual: "PERSONAL7000" });

export const DEMO_FEE_PAISE = 10000;                 // ₹100
export const DEMO_DURATION_MINUTES = 20;
/* "After 4:00 PM IST": 16:20 … 21:40, every 20 minutes, ending by 22:00. */
export const DEMO_TIMES = Object.freeze((() => {
  const out = [];
  for (let m = 16 * 60 + 20; m + DEMO_DURATION_MINUTES <= 22 * 60; m += DEMO_DURATION_MINUTES) {
    out.push(String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0"));
  }
  return out;
})());
export const DEMO_MIN_LEAD_SECONDS = 3 * 3600;       // book at least 3 hours ahead
export const DEMO_MAX_AHEAD_DAYS = 60;
export const DEMO_RESCHEDULE_NOTICE_SECONDS = 12 * 3600;  // policy: move once, ≥12 h notice
export const DEMO_RESCHEDULES_ALLOWED = 1;

const COURSE_ID_RE = /^live-([a-z]+(?:-[a-z]+)+)-(a1|a2|b1|b2)-(group|individual)$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export function courseId(teacherId, level, format) {
  return `live-${teacherId}-${String(level).toLowerCase()}-${format}`;
}

/* "live-reegan-gandhi-a1-group" → { teacherId, level, format } or null. */
export function parseCourseId(id) {
  const m = COURSE_ID_RE.exec(String(id || ""));
  if (!m || !TEACHERS[m[1]]) return null;
  return { teacherId: m[1], level: m[2].toUpperCase(), format: m[3] };
}
export const isMarketplaceCourse = (id) => parseCourseId(id) !== null;

export function courseStatus(teacherId, level, format) {
  const e = COURSE_ELIGIBILITY[teacherId];
  return e && e.levels.includes(level) && e.formats.includes(format) ? "verified" : "draft";
}

export function demoEligible(teacherId) {
  const e = COURSE_ELIGIBILITY[teacherId];
  return !!(e && e.demo === true);
}
export const demoTeachers = () => Object.keys(COURSE_ELIGIBILITY).filter(demoEligible);

/* Price list for one course (no coupon applied). null for unknown input. */
export function listPrice(teacherId, level, format) {
  const t = TEACHERS[teacherId];
  if (!t || !LEVELS.includes(level) || !FORMATS.includes(format)) return null;
  const tier = t.preferred ? PRICES_PAISE.preferred : PRICES_PAISE.standard;
  const coupon = COUPONS[COUPON_FOR_FORMAT[format]];
  return {
    courseId: courseId(teacherId, level, format),
    teacherId, teacherName: t.name, level, format, formatLabel: FORMAT_LABELS[format],
    originalPaise: tier[format],
    couponCode: coupon.code,
    couponDiscountPaise: coupon.discountPaise,
    priceWithCouponPaise: tier[format] - coupon.discountPaise,
    status: courseStatus(teacherId, level, format)
  };
}

export function normaliseCoupon(raw) {
  if (raw == null) return "";
  return String(raw).trim().toUpperCase().replace(/\s+/g, "").slice(0, 32);
}

/* Server-authoritative quote. coupon may be "" (none). activeCoupons is the
   set of codes not switched off by an admin (default: all).
   Returns { ok: true, ... } or { ok: false, code, error }. */
export function quoteCourse({ teacherId, level, format, coupon, activeCoupons = null }) {
  const lp = listPrice(teacherId, level, format);
  if (!lp) return { ok: false, code: "unknown-course", error: "This course does not exist." };
  const code = normaliseCoupon(coupon);
  let discountPaise = 0;
  let applied = null;
  if (code) {
    const c = COUPONS[code];
    if (!c) return { ok: false, code: "coupon-invalid", error: "This coupon code is not valid." };
    if (c.format !== format) {
      return { ok: false, code: "coupon-wrong-format", error: `${c.code} applies only to ${FORMAT_LABELS[c.format]}.` };
    }
    if (activeCoupons && !activeCoupons.has(c.code)) {
      return { ok: false, code: "coupon-inactive", error: "This coupon is not available at the moment." };
    }
    discountPaise = c.discountPaise;
    applied = c.code;
  }
  return {
    ok: true,
    courseId: lp.courseId, teacherId, teacherName: lp.teacherName, level, format, formatLabel: lp.formatLabel,
    originalPaise: lp.originalPaise,
    couponCode: applied,
    discountPaise,
    finalPaise: lp.originalPaise - discountPaise,
    currency: "INR"
  };
}

/* ---------------- demo calendar (Asia/Kolkata) ---------------- */
export function isValidDate(iso) {
  if (!DATE_RE.test(String(iso))) return false;
  const d = new Date(iso + "T12:00:00Z");
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === iso;
}
/* Friday (5) or Sunday (0) in the IST calendar (a date string has no zone). */
export function isDemoDay(iso) {
  if (!isValidDate(iso)) return false;
  const wd = new Date(iso + "T12:00:00Z").getUTCDay();
  return wd === 5 || wd === 0;
}
export const isDemoTime = (hhmm) => DEMO_TIMES.includes(hhmm);

export function addDays(date, days) {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
}

/* The next Fridays/Sundays from `fromDate` (inclusive), up to maxAheadDays. */
export function demoDates(fromDate, count = 8, maxAheadDays = DEMO_MAX_AHEAD_DAYS) {
  const out = [];
  for (let i = 0; i <= maxAheadDays && out.length < count; i++) {
    const d = addDays(fromDate, i);
    if (isDemoDay(d)) out.push(d);
  }
  return out;
}
