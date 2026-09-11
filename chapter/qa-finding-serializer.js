/* Klarweg QA finding serializer — investigation infrastructure (P15 diag)
 * ============================================================================
 * Lossless capture/serialization layer for qa-engine.js finding objects.
 *
 * The P14 sweep driver stored a hand-picked subset (code, section, index,
 * surface, badge, role, headword) and silently dropped `severity` and every
 * other `detail` property. This layer stores whatever the engine actually
 * emitted, without enumerating field names, so codes whose detail shape we
 * have never seen in the corpus are captured too.
 *
 * Engine schema (qa-engine.js:11, :199-200, :297) — read from source, not assumed:
 *   { code, severity, index, section, surface, detail }
 * detail shapes as emitted:
 *   BLACK_FALLBACK / LINK_BLUE       { colour }
 *   NO_POINTER                       { cursor }
 *   NO_POPUP                         { }
 *   MISSING_BADGE                    { }
 *   CASE_COLLISION_CAPITALISED       { headword, entryType, badge }
 *   CASE_COLLISION_LOWERCASE         { headword, entryType, badge }
 *   ROLE_CONTRADICTS_BADGE           { badge, badgeClass, role, colour }
 *   PARADIGM_CLASS_MISMATCH          { badge, paradigm }
 *   PARADIGM_NOT_ABOUT_WORD          { paradigm, forms[] }
 *   HEADWORD_COLOUR_MISMATCH         { span, head }
 *   LETTER_ROLE_UNSTABLE             { roles[] }   (index -1, section '(chapter)')
 *
 * Nothing here reads or changes detector logic, thresholds, or semantics: it is
 * a pure transport. Absent keys, undefined values, null, '', 0, false, [] and {}
 * all survive a JSON round-trip as distinct states — JSON alone cannot do that
 * (it drops undefined-valued keys), which is why values are wrapped.
 * --------------------------------------------------------------------------- */
(function () {
  var VERSION = 'kwfser-1';
  var U = '$u';          // marker object for an explicit `undefined` VALUE
  var isPlain = function (v) { return v !== null && typeof v === 'object' && !Array.isArray(v); };

  function enc(v) {
    if (v === undefined) { var o = {}; o[U] = true; return o; }
    if (v === null) return null;
    if (Array.isArray(v)) return v.map(enc);
    if (isPlain(v)) {
      var out = {};
      Object.keys(v).forEach(function (k) { out[k] = enc(v[k]); });   // key order preserved
      return out;
    }
    return v;                                                        // string | number | boolean
  }
  function dec(v) {
    if (v === null) return null;
    if (Array.isArray(v)) return v.map(dec);
    if (isPlain(v)) {
      if (v[U] === true && Object.keys(v).length === 1) return undefined;
      var out = {};
      Object.keys(v).forEach(function (k) { out[k] = dec(v[k]); });
      return out;
    }
    return v;
  }

  /* A finding → storable record. Every own enumerable key of the finding is
   * carried, so a future engine field appears without touching this file.
   * `_present` records which keys existed, so "key absent" stays different from
   * "key present, value undefined" after JSON. */
  function serialize(f) {
    var rec = { _v: VERSION, _present: Object.keys(f) };
    Object.keys(f).forEach(function (k) { rec[k] = enc(f[k]); });
    return rec;
  }
  function deserialize(rec) {
    var out = {};
    (rec._present || Object.keys(rec).filter(function (k) { return k.charAt(0) !== '_'; }))
      .forEach(function (k) { out[k] = dec(rec[k]); });
    return out;
  }

  /* Strict structural equality: key PRESENCE must match (not just values), and
   * values compare with Object.is so NaN/-0/undefined are not glossed over. */
  function deepEqualStrict(a, b, path, diffs) {
    path = path || '$'; diffs = diffs || [];
    if (Array.isArray(a) || Array.isArray(b)) {
      if (!Array.isArray(a) || !Array.isArray(b)) { diffs.push(path + ': array/non-array'); return diffs; }
      if (a.length !== b.length) { diffs.push(path + ': length ' + a.length + ' vs ' + b.length); return diffs; }
      a.forEach(function (_, i) { deepEqualStrict(a[i], b[i], path + '[' + i + ']', diffs); });
      return diffs;
    }
    if (isPlain(a) || isPlain(b)) {
      if (!isPlain(a) || !isPlain(b)) { diffs.push(path + ': object/non-object'); return diffs; }
      var ka = Object.keys(a), kb = Object.keys(b);
      ka.concat(kb).filter(function (k, i, arr) { return arr.indexOf(k) === i; }).forEach(function (k) {
        var ha = Object.prototype.hasOwnProperty.call(a, k), hb = Object.prototype.hasOwnProperty.call(b, k);
        if (ha !== hb) { diffs.push(path + '.' + k + ': presence ' + ha + ' vs ' + hb); return; }
        deepEqualStrict(a[k], b[k], path + '.' + k, diffs);
      });
      return diffs;
    }
    if (!Object.is(a, b)) diffs.push(path + ': ' + JSON.stringify(a) + ' vs ' + JSON.stringify(b));
    return diffs;
  }

  function roundTrip(f) { return deserialize(JSON.parse(JSON.stringify(serialize(f)))); }

  /* Engine-shaped fixtures for codes the corpus has never produced, so the
   * serializer is proven against every detail shape in qa-engine.js — not only
   * the six codes that fire today. Shapes copied from the source lines cited in
   * the header; values are illustrative. */
  var FIXTURES = [
    { code: 'BLACK_FALLBACK', severity: 'high', index: 3, section: 'grammar', surface: 'Wort', detail: { colour: 'rgb(14, 14, 16)' } },
    { code: 'LINK_BLUE', severity: 'high', index: 4, section: 'reading', surface: 'Wort', detail: { colour: 'rgb(0, 0, 238)' } },
    { code: 'NO_POINTER', severity: 'medium', index: 5, section: 'story', surface: 'Wort', detail: { cursor: 'default' } },
    { code: 'NO_POPUP', severity: 'high', index: 6, section: 'story', surface: 'an', detail: {} },
    { code: 'MISSING_BADGE', severity: 'medium', index: 7, section: 'vocabulary', surface: 'Wort', detail: {} },
    { code: 'PARADIGM_NOT_ABOUT_WORD', severity: 'high', index: 8, section: 'vocabulary', surface: 'gehen',
      detail: { paradigm: 'Conjugation|Number', forms: ['gehe', 'gehst', 'geht'] } },
    { code: 'LETTER_ROLE_UNSTABLE', severity: 'medium', index: -1, section: '(chapter)', surface: 'a', detail: { roles: ['letter', 'subject'] } },
    { code: 'HEADWORD_COLOUR_MISMATCH', severity: 'medium', index: 9, section: 'reading', surface: 'Bis',
      detail: { span: 'rgb(31, 78, 74)', head: 'rgb(14, 14, 16)' } }
  ];

  /* State-distinguishability matrix: the states JSON would otherwise conflate. */
  var STATES = [
    { name: 'key absent', build: function (d) { return d; } },
    { name: 'undefined value', build: function (d) { d.x = undefined; return d; } },
    { name: 'null', build: function (d) { d.x = null; return d; } },
    { name: 'empty string', build: function (d) { d.x = ''; return d; } },
    { name: 'zero', build: function (d) { d.x = 0; return d; } },
    { name: 'false', build: function (d) { d.x = false; return d; } },
    { name: 'empty array', build: function (d) { d.x = []; return d; } },
    { name: 'empty object', build: function (d) { d.x = {}; return d; } }
  ];

  function selfTest(realFindings) {
    var cases = [], fails = [];
    (realFindings || []).forEach(function (f, i) { cases.push({ kind: 'real', label: f.code + '#' + i, f: f }); });
    FIXTURES.forEach(function (f) { cases.push({ kind: 'fixture', label: f.code, f: f }); });
    cases.push({ kind: 'edge', label: 'detail key absent', f: { code: 'X', severity: 'low', index: 0, section: 's', surface: 'w' } });
    cases.push({ kind: 'edge', label: 'unknown future field', f: { code: 'X', severity: 'low', index: 0, section: 's', surface: 'w', detail: {}, futureField: { nested: [1, 'a', null] } } });
    cases.push({ kind: 'edge', label: 'undefined severity value', f: { code: 'X', severity: undefined, index: 0, section: 's', surface: 'w', detail: {} } });

    cases.forEach(function (c) {
      var d = deepEqualStrict(c.f, roundTrip(c.f));
      if (d.length) fails.push({ kind: c.kind, label: c.label, diffs: d });
    });

    var encoded = STATES.map(function (s) {
      var f = { code: 'S', severity: 'low', index: 0, section: 's', surface: 'w', detail: s.build({}) };
      return { name: s.name, f: f, json: JSON.stringify(serialize(f)) };
    });
    var stateFails = [];
    encoded.forEach(function (e) {
      var d = deepEqualStrict(e.f, roundTrip(e.f));
      if (d.length) stateFails.push(e.name + ' did not round-trip: ' + d.join('; '));
    });
    encoded.forEach(function (a, i) {
      encoded.slice(i + 1).forEach(function (b) {
        if (a.json === b.json) stateFails.push('indistinguishable: "' + a.name + '" vs "' + b.name + '"');
      });
    });

    function keyUnion(list, pick) {
      var s = {};
      list.forEach(function (f) { Object.keys(pick(f)).forEach(function (k) { s[k] = true; }); });
      return Object.keys(s).sort();
    }
    var inputs = cases.map(function (c) { return c.f; });
    var recovered = inputs.map(roundTrip);
    var topIn = keyUnion(inputs, function (f) { return f; });
    var topOut = keyUnion(recovered, function (f) { return f; });
    var detIn = keyUnion(inputs.filter(function (f) { return isPlain(f.detail); }), function (f) { return f.detail; });
    var detOut = keyUnion(recovered.filter(function (f) { return isPlain(f.detail); }), function (f) { return f.detail; });
    var missing = topIn.filter(function (k) { return topOut.indexOf(k) < 0; })
      .concat(detIn.filter(function (k) { return detOut.indexOf(k) < 0; }).map(function (k) { return 'detail.' + k; }));

    return {
      pass: !fails.length && !stateFails.length && !missing.length,
      version: VERSION,
      cases: { total: cases.length, real: cases.filter(function (c) { return c.kind === 'real'; }).length,
               fixture: FIXTURES.length, edge: 3 },
      roundTripFailures: fails, stateFailures: stateFails,
      statesProvenDistinct: STATES.map(function (s) { return s.name; }),
      topLevelFieldsPreserved: topOut, detailFieldsPreserved: detOut, fieldsLost: missing
    };
  }

  window.KWFSER = { VERSION: VERSION, serialize: serialize, deserialize: deserialize,
    roundTrip: roundTrip, deepEqualStrict: deepEqualStrict, selfTest: selfTest, FIXTURES: FIXTURES };
})();
