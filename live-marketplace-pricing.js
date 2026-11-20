/* Klarweg live teacher marketplace: public-facing display rules, never a payment authority.
 * The Access Worker MUST independently validate every teacher, level, coupon,
 * slot and total before creating a Cashfree order. No payments are enabled here.
 */
(function (root) {
  'use strict';
  var LEVELS = Object.freeze(['A1', 'A2', 'B1', 'B2']);
  var FORMATS = Object.freeze(['group', 'individual']);
  var COUPONS = Object.freeze({ group: 'GROUP3000', individual: 'PERSONAL7000' });
  var GROUP_DISCOUNT = 3000;
  var INDIVIDUAL_DISCOUNT = 7000;
  var SPECIAL_TEACHERS = Object.freeze(['reegan-gandhi', 'geetika-dhawan']);
  var fmt = function (amount) { return '₹' + amount.toLocaleString('en-IN'); };

  function prices(teacherId, level, format) {
    if (typeof teacherId !== 'string' || !teacherId || !LEVELS.includes(level) || !FORMATS.includes(format)) return null;
    var preferred = SPECIAL_TEACHERS.includes(teacherId);
    var original = format === 'group' ? 16000 : 22000;
    var discount = format === 'group' ? GROUP_DISCOUNT : INDIVIDUAL_DISCOUNT;
    if (!preferred) original += 5000;
    return Object.freeze({
      teacherId: teacherId, level: level, format: format, original: original,
      discount: discount, discounted: original - discount, coupon: COUPONS[format],
      label: format === 'group' ? 'Group course' : 'One-to-One classes'
    });
  }
  function quotedPrice(teacherId, level, format, coupon) {
    var offer = prices(teacherId, level, format);
    if (!offer) return null;
    var applied = typeof coupon === 'string' && coupon.trim().toUpperCase() === offer.coupon;
    return Object.freeze({ original: offer.original, discount: applied ? offer.discount : 0,
      due: offer.original - (applied ? offer.discount : 0), applied: applied, currency: 'INR' });
  }
  // Date-only strings are interpreted in the Asia/Kolkata calendar, not the viewer's timezone.
  function isDemoDay(isoDate) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(isoDate))) return false;
    var dt = new Date(isoDate + 'T12:00:00Z');
    if (Number.isNaN(dt.getTime()) || dt.toISOString().slice(0, 10) !== isoDate) return false;
    return dt.getUTCDay() === 5 || dt.getUTCDay() === 0;
  }
  function futureDemoDates(fromIso, numberOfDates) {
    var base = new Date(fromIso + 'T12:00:00Z');
    if (Number.isNaN(base.getTime()) || base.toISOString().slice(0,10) !== fromIso) return [];
    var days = [];
    for (var d = 0; d < 90 && days.length < Math.min(numberOfDates || 8, 20); d++) {
      var date = new Date(base.getTime() + d * 86400000).toISOString().slice(0, 10);
      if (isDemoDay(date)) days.push(date);
    }
    return days;
  }
  // Candidate times only. The Worker must return actual availability for the chosen teacher/date.
  function candidateDemoTimes() {
    var slots = [];
    for (var minutes = 16 * 60 + 20; minutes + 20 <= 22 * 60; minutes += 20) {
      slots.push(String(Math.floor(minutes / 60)).padStart(2, '0') + ':' + String(minutes % 60).padStart(2,'0'));
    }
    return slots;
  }
  var api = Object.freeze({ LEVELS: LEVELS, FORMATS: FORMATS, COUPONS: COUPONS,
    SPECIAL_TEACHERS: SPECIAL_TEACHERS, prices: prices, quotedPrice: quotedPrice,
    isDemoDay: isDemoDay, futureDemoDates: futureDemoDates, candidateDemoTimes: candidateDemoTimes,
    fmt: fmt, demoFee: 100, timezone: 'Asia/Kolkata', paymentsEnabled: false });
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.KWLiveMarketplace = api;
})(typeof window !== 'undefined' ? window : globalThis);
