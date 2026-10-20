/* ============================================================
   KLARWEG · LIVE CLASSES (kw-live.js)
   Renders live-classes.html from live-classes-data.js: teacher
   directory + profile dialog, course catalogue, consultation
   request form, mobile sticky CTA. Vanilla, no dependencies.

   The consultation form has no backend: like the contact page it
   hands off to a pre-filled mailto: and says so plainly. It never
   claims a booking or payment happened.
   ============================================================ */
(function () {
  'use strict';

  var D = window.KWLive;
  if (!D) return;

  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  var GROUP_LABEL = { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced', exam: 'Goethe prep', speaking: 'Speaking' };
  var STATUS = {
    open: { cls: 'status-open', label: 'Enrolment open', cta: 'Book a consultation to enrol' },
    waitlist: { cls: 'status-waitlist', label: 'Waitlist', cta: 'Join the waitlist' },
    'not-open': { cls: '', label: 'Enrolment not open yet', cta: 'Register interest' }
  };
  var ARROW = '<svg class="btn-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var DOT = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="2.5" fill="currentColor"/></svg>';

  function $(id) { return document.getElementById(id); }
  function esc(v) {
    return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function has(v) { return Array.isArray(v) ? v.length > 0 : (v != null && String(v).trim() !== ''); }
  /* Drafts render only when showDrafts is true AND the page runs
     locally; on any deployed host they are dropped regardless. */
  var SHOW_DRAFTS = D.showDrafts === true && /^(localhost|127\.0\.0\.1|\[::1\]|)$/.test(location.hostname);
  function visible(list) { return (list || []).filter(function (x) { return SHOW_DRAFTS || !x.draft; }); }
  function draftFlag(x) { return x.draft ? '<span class="draft-flag">Draft</span>' : ''; }

  var teachers = visible(D.teachers);
  var courses = visible(D.courses);
  var quotes = visible(D.testimonials);
  var teacherById = {};
  teachers.forEach(function (t) { teacherById[t.id] = t; });

  function teacherLabel(t) {
    return t.draft ? 'Draft profile ' + (teachers.indexOf(t) + 1) : t.name;
  }
  function initials(t) {
    if (t.draft) return 'T' + (teachers.indexOf(t) + 1);
    return t.name.split(/\s+/).filter(Boolean).map(function (w) { return w.charAt(0); }).slice(0, 2).join('').toUpperCase();
  }
  function portrait(t) {
    var inner = t.photo
      ? '<img src="' + esc(t.photo) + '" alt="' + esc(t.photoAlt || ('Portrait of ' + t.name)) + '" loading="lazy" decoding="async" width="800" height="600">'
      : '<div class="portrait-mono" aria-hidden="true"><span>' + esc(initials(t)) + '</span><small>Portrait pending</small></div>';
    return '<div class="portrait">' + inner + draftFlag(t) + '</div>';
  }
  /* The six-level strip is visual only; screen readers get the list as text
     (an aria-label on a plain div is not announced). */
  function levelRow(on) {
    return '<div class="lvl-row"><span class="vh">Levels taught: ' + esc(on.join(', ')) + '</span>' + LEVELS.map(function (l) {
      return '<span class="lvl' + (on.indexOf(l) > -1 ? ' on' : '') + '" aria-hidden="true">' + l + '</span>';
    }).join('') + '</div>';
  }

  /* ---------- draft banner + static copy from data ---------- */
  function initCopy() {
    var anyDraft = teachers.concat(courses, quotes).some(function (x) { return x.draft; });
    if (anyDraft && $('draft-banner')) $('draft-banner').hidden = false;

    var c = D.consultation || {};
    document.querySelectorAll('[data-consult-fee]').forEach(function (el) { el.textContent = c.feeLabel; });
    document.querySelectorAll('[data-consult-days]').forEach(function (el) { el.textContent = c.adjustmentDays + ' days'; });
    document.querySelectorAll('[data-consult-dayadj]').forEach(function (el) { el.textContent = c.adjustmentDays + '-day'; });
    var unit = [];
    if (c.durationMinutes) unit.push(c.durationMinutes + '-minute session');
    if (c.platform) unit.push('on ' + c.platform);
    if (unit.length && document.querySelector('[data-consult-unit]')) document.querySelector('[data-consult-unit]').textContent = unit.join(' ');
    var cancel = document.querySelector('[data-consult-cancel]');
    if (cancel) { if (has(c.cancellation)) cancel.textContent = c.cancellation; else cancel.hidden = true; }
    if ($('book-steps')) $('book-steps').innerHTML = (c.steps || []).map(function (s) { return '<li>' + esc(String(s).split('{fee}').join(c.feeLabel)) + '</li>'; }).join('');

    var email = D.contact && D.contact.email;
    document.querySelectorAll('[data-contact-email]').forEach(function (el) { el.textContent = email; });
    document.querySelectorAll('[data-contact-mailto]').forEach(function (el) { el.href = 'mailto:' + email; el.textContent = email; });
    document.querySelectorAll('[data-reply-time]').forEach(function (el) { el.textContent = D.contact.replyTime; });

    Object.keys(D.policies || {}).forEach(function (k) {
      var txt = D.policies[k];
      var el = document.querySelector('[data-policy="' + k + '"]');
      if (el && has(txt)) el.textContent = txt;
    });

    /* Self-paced price, from the real product catalog. */
    var P = window.KWProducts;
    var sp = document.querySelector('[data-selfpaced-price]');
    if (P && sp) {
      var lv = P.levels().map(function (p) { return p.paise; });
      var min = P.levels().filter(function (p) { return p.paise === Math.min.apply(null, lv); })[0];
      var life = P.get('LIFETIME');
      if (min && life) sp.textContent = 'From ' + min.label + ' per level, or ' + life.label + ' for Lifetime (all six)';
    }
  }

  /* Copy that only makes sense once teachers / courses are published
     carries an honest alternative: data-none="teachers|courses" with
     data-none-text (and data-none-href on links). On a button-style link
     only the label changes, so its arrow icon stays. */
  function swapCopy(el, text, href) {
    if (href) el.setAttribute('href', href);
    var label = el.querySelector('.btn-arrow') && el.firstChild && el.firstChild.nodeType === 3 ? el.firstChild : null;
    if (label) label.nodeValue = text + ' ';
    else el.textContent = text;
  }
  function initEmptyCopy() {
    var none = { teachers: !teachers.length, courses: !courses.length };
    document.querySelectorAll('[data-none]').forEach(function (el) {
      if (none[el.getAttribute('data-none')]) swapCopy(el, el.getAttribute('data-none-text'), el.getAttribute('data-none-href'));
    });
    /* Exactly one teacher: copy written for a directory ("our teachers",
       "filter the profiles") switches to its data-one-text. */
    if (teachers.length === 1) document.querySelectorAll('[data-one-text]').forEach(function (el) {
      swapCopy(el, el.getAttribute('data-one-text'), el.getAttribute('data-one-href'));
    });
    /* The hero names only the levels actually covered by the teachers and
       courses on the page, never a blanket A1–C2. */
    var lv = [];
    teachers.concat(courses).forEach(function (x) { (x.levels || []).forEach(function (l) { if (lv.indexOf(l) < 0) lv.push(l); }); });
    lv = LEVELS.filter(function (l) { return lv.indexOf(l) > -1; });
    var contiguous = lv.length && LEVELS.indexOf(lv[lv.length - 1]) - LEVELS.indexOf(lv[0]) === lv.length - 1;
    document.querySelectorAll('[data-live-levels]').forEach(function (el) {
      el.textContent = !lv.length ? '' : ' · ' + (lv.length === 1 ? lv[0] : contiguous ? lv[0] + ' → ' + lv[lv.length - 1] : lv.join(', '));
    });
  }

  /* ---------- teacher directory ---------- */
  var tFilter = { level: '', lang: '', exam: false };

  function teacherCard(t) {
    var facts = [];
    if (has(t.experience)) facts.push(t.experience);
    if (has(t.proficiency)) facts.push('German: ' + t.proficiency);
    if (has(t.teachesIn)) facts.push('Teaches in ' + t.teachesIn.join(', '));
    if (has(t.formats)) facts.push(t.formats.join(' · '));
    if (has(t.goethe)) facts.push('Goethe: ' + t.goethe.join(', '));
    return '<article class="t-card" aria-labelledby="tn-' + esc(t.id) + '">'
      + portrait(t)
      + '<div class="t-body">'
      + '<h3 class="t-name" id="tn-' + esc(t.id) + '">' + esc(t.name) + '</h3>'
      + (has(t.headline) ? '<p class="t-headline">' + esc(t.headline) + '</p>' : '')
      + (has(t.levels) ? levelRow(t.levels) : '')
      + '<ul class="t-facts">' + facts.map(function (f) { return '<li>' + DOT + '<span>' + esc(f) + '</span></li>'; }).join('') + '</ul>'
      + '<div class="t-actions">'
      + '<button type="button" class="btn btn-secondary" data-profile="' + esc(t.id) + '">View profile</button>'
      + '<a href="#book" class="btn btn-live" data-book-teacher="' + esc(t.id) + '">Consultation</a>'
      + '</div></div></article>';
  }

  function renderTeachers() {
    var grid = $('teacher-grid');
    if (!grid) return;
    if (!teachers.length) {
      grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><h3>Teacher profiles are being finalised</h3>'
        + '<p>We publish a profile only once the teacher’s qualifications are confirmed. You can still book a consultation now and we’ll match you with a suitable teacher.</p>'
        + '<a href="#book" class="btn btn-live">Book a consultation ' + ARROW + '</a></div>';
      $('t-count').textContent = '';
      document.querySelectorAll('#teachers .filters').forEach(function (f) { f.hidden = true; });
      return;
    }
    /* Filters only help when there is something to narrow down. */
    var few = teachers.length < 2;
    document.querySelectorAll('#teachers .filters').forEach(function (f) { f.hidden = few; });
    grid.classList.toggle('single', few);
    if (few) { $('t-count').textContent = ''; grid.innerHTML = teachers.map(teacherCard).join(''); return; }
    var list = teachers.filter(function (t) {
      if (tFilter.level && (t.levels || []).indexOf(tFilter.level) < 0) return false;
      if (tFilter.lang && (t.teachesIn || []).indexOf(tFilter.lang) < 0) return false;
      if (tFilter.exam && !has(t.goethe) && !has(t.examPrep)) return false;
      return true;
    });
    $('t-count').textContent = list.length === teachers.length
      ? teachers.length + (teachers.length === 1 ? ' teacher' : ' teachers')
      : list.length + ' of ' + teachers.length + ' teachers match';
    grid.innerHTML = list.length ? list.map(teacherCard).join('')
      : '<div class="empty-state" style="grid-column:1/-1"><h3>No teacher matches these filters</h3>'
        + '<p>Try a different level or language, or tell us your goal in a consultation request and we’ll find the right teacher.</p>'
        + '<button type="button" class="btn btn-secondary" id="t-reset">Clear filters</button></div>';
  }

  function initTeacherFilters() {
    var langs = [];
    teachers.forEach(function (t) { (t.teachesIn || []).forEach(function (l) { if (langs.indexOf(l) < 0) langs.push(l); }); });
    var sel = $('t-lang');
    if (sel) {
      sel.insertAdjacentHTML('beforeend', langs.map(function (l) { return '<option>' + esc(l) + '</option>'; }).join(''));
      sel.addEventListener('change', function () { tFilter.lang = sel.value; renderTeachers(); });
    }
    var levelBtns = document.querySelectorAll('[data-tlevel]');
    levelBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        tFilter.level = b.getAttribute('data-tlevel');
        levelBtns.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        renderTeachers();
      });
    });
    var exam = $('t-exam');
    if (exam) exam.addEventListener('click', function () {
      tFilter.exam = !tFilter.exam;
      exam.setAttribute('aria-pressed', tFilter.exam ? 'true' : 'false');
      renderTeachers();
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest || !e.target.closest('#t-reset')) return;
      tFilter = { level: '', lang: '', exam: false };
      levelBtns.forEach(function (x) { x.setAttribute('aria-pressed', x.getAttribute('data-tlevel') === '' ? 'true' : 'false'); });
      if (sel) sel.value = '';
      if (exam) exam.setAttribute('aria-pressed', 'false');
      renderTeachers();
      var first = document.querySelector('[data-tlevel=""]');
      if (first) first.focus();
    });
  }

  /* ---------- profile dialog ---------- */
  var dlg = $('t-dialog');
  var dlgOpener = null;   // the element to refocus on close, or 'deeplink'
  var lastProfileId = null;
  var closeProfile = function () {};

  function row(label, val) {
    if (!has(val)) return '';
    var v = Array.isArray(val)
      ? (val.length > 1 ? '<ul>' + val.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : esc(val[0]))
      : esc(val);
    return '<dt>' + esc(label) + '</dt><dd>' + v + '</dd>';
  }

  function openProfile(id, opener) {
    var t = teacherById[id];
    if (!t || !dlg) return;
    var teaches = courses.filter(function (c) { return (c.teacherIds || []).indexOf(id) > -1; }).map(function (c) { return c.title; });
    $('t-dialog-content').innerHTML = '<div class="t-dialog-grid">' + portrait(t)
      + '<div class="t-dialog-body">'
      + '<h2 id="t-dialog-name">' + esc(t.name) + '</h2>'
      + (has(t.headline) ? '<p class="t-headline">' + esc(t.headline) + '</p>' : '')
      + (has(t.levels) ? levelRow(t.levels) : '')
      + (has(t.approach) ? '<div class="approach"><strong>Teaching approach</strong>' + esc(t.approach) + '</div>' : '')
      + '<dl class="profile-dl">'
      + row('Experience', t.experience)
      + row('German proficiency', t.proficiency)
      // a certificate listed under both shows once, under Goethe certificates
      + row('Qualifications', (t.qualifications || []).filter(function (x) { return (t.goethe || []).indexOf(x) < 0; }))
      + row('Goethe certificates', t.goethe)
      + row('Levels taught', (t.levels || []).join(', '))
      + row('Teaches in', (t.teachesIn || []).join(', '))
      + row('Specialisms', t.specialisms)
      + row('Exam preparation', t.examPrep)
      + row('Formats', (t.formats || []).join(', '))
      + row('Availability', t.availability)
      + row('Live courses', teaches)
      + '</dl>'
      + '<a href="#book" class="btn btn-live" data-book-teacher="' + esc(t.id) + '">Request a consultation with ' + esc(t.draft ? 'this teacher' : t.name.split(' ')[0]) + ' ' + ARROW + '</a>'
      + '</div></div>';
    lastProfileId = id;
    dlgOpener = opener || 'deeplink';
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
    document.body.style.overflow = 'hidden';
    if (history.replaceState) history.replaceState(null, '', '#teacher-' + id);
  }

  function initDialog() {
    if (!dlg) return;
    document.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('[data-profile]');
      if (b) openProfile(b.getAttribute('data-profile'), b);
    });
    /* Cleanup runs synchronously from our own close paths; the native
       'close' event (Escape key) calls the same idempotent function. */
    function cleanup() {
      if (!dlgOpener && document.body.style.overflow !== 'hidden') return;
      document.body.style.overflow = '';
      if (location.hash.indexOf('#teacher-') === 0 && history.replaceState) history.replaceState(null, '', location.pathname + location.search + '#teachers');
      var o = dlgOpener; dlgOpener = null;
      if (o && o.nodeType === 1 && document.contains(o)) o.focus();
      else if (o === 'deeplink' && lastProfileId) {
        var btn = document.querySelector('[data-profile="' + lastProfileId + '"]');
        if (btn) btn.focus();
      }
    }
    closeProfile = function () { if (dlg.open) dlg.close(); cleanup(); };
    $('t-dialog-close').addEventListener('click', closeProfile);
    /* Backdrop click: the dialog element itself is the target only
       when the click lands outside its content box. */
    dlg.addEventListener('click', function (e) {
      if (e.target !== dlg) return;
      var r = dlg.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) closeProfile();
    });
    dlg.addEventListener('close', cleanup);
    var m = location.hash.match(/^#teacher-(.+)$/);
    if (m && teacherById[m[1]]) openProfile(m[1], null);
    else if (m && history.replaceState) history.replaceState(null, '', location.pathname + location.search + '#teachers');
  }

  /* ---------- course catalogue ---------- */
  var cGroup = '';

  /* Known facts render as a definition list; required-but-unknown
     ones collapse into a single "still to be announced" line so a
     not-yet-scheduled course stays readable. f[3] marks a value that is
     already escaped HTML (the teacher profile links). */
  function facts(list) {
    var known = list.filter(function (f) { return has(f[1]); });
    var tba = list.filter(function (f) { return !has(f[1]) && f[2]; }).map(function (f) { return f[0].toLowerCase(); });
    return '<dl class="c-facts">'
      + known.map(function (f) { return '<div><dt>' + esc(f[0]) + '</dt><dd>' + (f[3] ? f[1] : esc(f[1])) + '</dd></div>'; }).join('')
      + (tba.length ? '<div class="c-tba"><dt>Still to be announced</dt><dd class="tba">' + esc(tba.join(' · ')) + '</dd></div>' : '')
      + '</dl>';
  }

  function courseCard(c) {
    var st = STATUS[c.enrolment] || STATUS['not-open'];
    var tLinks = (c.teacherIds || []).map(function (id) { return teacherById[id]; }).filter(Boolean).map(function (t) {
      return '<button type="button" class="t-link" data-profile="' + esc(t.id) + '">' + esc(teacherLabel(t)) + '</button>';
    });
    var schedule = [c.frequency, c.sessionLength].filter(has).join(' · ');
    return '<article class="c-card" aria-labelledby="cn-' + esc(c.id) + '">'
      + '<div class="c-top">'
      + (c.levels || []).map(function (l) { return '<span class="lvl on">' + esc(l) + '</span>'; }).join('')
      + '<span class="pill">' + esc(GROUP_LABEL[c.group] || '') + '</span>'
      + draftFlag(c)
      + '<span class="status c-status ' + st.cls + '">' + esc(st.label) + '</span>'
      + '</div>'
      + '<h3 id="cn-' + esc(c.id) + '">' + esc(c.title) + '</h3>'
      + (has(c.objectives) ? '<ul class="c-obj" aria-label="Learning objectives">' + c.objectives.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') + '</ul>' : '')
      + facts([
        [tLinks.length > 1 ? 'Teachers' : 'Teacher', tLinks.join(', '), true, true],
        ['Format', c.format, true],
        ['Batch size', c.batchSize, c.format !== 'One-to-one'],
        ['Classes', schedule, true],
        ['Course length', c.totalDuration, true],
        ['Next batch', c.nextBatch, true],
        ['Materials', c.materials, true],
        ['Exam preparation', c.examPrep, c.group === 'exam']
      ])
      + '<div class="c-price"><span class="c-price-label">Course fee</span>'
      + (has(c.priceLabel) ? '<span class="c-price-val">' + esc(c.priceLabel) + '</span>' : '<span class="c-price-val tba">To be announced</span>')
      + (has(c.paymentTerms) ? '<span class="c-price-terms">' + esc(c.paymentTerms) + '</span>' : '')
      + '</div>'
      + '<a href="#book" class="btn ' + (c.enrolment === 'open' ? 'btn-live' : 'btn-secondary') + '" data-book-course="' + esc(c.id) + '">' + esc(st.cta) + ' ' + ARROW + '</a>'
      + '</article>';
  }

  function renderCourses() {
    var grid = $('course-grid');
    if (!grid) return;
    if (!courses.length) {
      grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><h3>The first live courses are being scheduled</h3>'
        + '<p>Dates, batch sizes and fees will appear here as soon as they are confirmed. Book a consultation or tell us what you need, and we’ll let you know when a suitable course opens.</p>'
        + '<a href="#book" class="btn btn-live" data-request="interest">Register interest ' + ARROW + '</a></div>';
      document.querySelectorAll('#courses .filters').forEach(function (f) { f.hidden = true; });
      return;
    }
    var list = courses.filter(function (c) { return !cGroup || c.group === cGroup; });
    $('c-count').textContent = list.length + (list.length === 1 ? ' course' : ' courses') + (cGroup ? ' in ' + GROUP_LABEL[cGroup] : '');
    grid.innerHTML = list.length ? list.map(courseCard).join('')
      : '<div class="empty-state" style="grid-column:1/-1"><h3>No ' + esc(GROUP_LABEL[cGroup] || '') + ' course yet</h3>'
        + '<p>We don’t run this course yet. Tell us you’re interested and we’ll let you know if it opens.</p>'
        + '<a href="#book" class="btn btn-secondary" data-request="interest">Register interest</a></div>';
  }

  function initCourseFilters() {
    var btns = document.querySelectorAll('[data-cgroup]');
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        cGroup = b.getAttribute('data-cgroup');
        btns.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        renderCourses();
      });
    });
  }

  /* ---------- consultation form ---------- */
  var form = $('consult-form');
  var done = $('consult-done');
  var lastBody = '';

  function fillSelects() {
    var ts = $('bf-teacher'), cs = $('bf-course');
    if (ts) ts.insertAdjacentHTML('beforeend', teachers.map(function (t) { return '<option value="' + esc(t.id) + '">' + esc(teacherLabel(t)) + '</option>'; }).join(''));
    if (cs) cs.insertAdjacentHTML('beforeend', courses.map(function (c) { return '<option value="' + esc(c.id) + '">' + esc(c.title + (c.draft ? ' (draft)' : '')) + '</option>'; }).join(''));
  }

  /* Any CTA carrying data-book-teacher / data-book-course pre-selects
     the form; the anchor itself scrolls to #book. */
  function initPrefill() {
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('[data-book-teacher],[data-book-course],[data-request]');
      if (!a) return;
      var tid = a.getAttribute('data-book-teacher'), cid = a.getAttribute('data-book-course');
      if (dlg && dlg.open) { dlgOpener = null; closeProfile(); }
      showForm();
      /* A course that is not open yet asks for interest, not a paid consultation. */
      var course = cid && courses.filter(function (x) { return x.id === cid; })[0];
      setRequestType(a.getAttribute('data-request') || (course && course.enrolment !== 'open' ? 'interest' : 'consult'));
      if (tid && $('bf-teacher')) $('bf-teacher').value = tid;
      if (cid && $('bf-course')) {
        $('bf-course').value = cid;
        var c = courses.filter(function (x) { return x.id === cid; })[0];
        if (c && c.teacherIds && c.teacherIds.length === 1 && $('bf-teacher')) $('bf-teacher').value = c.teacherIds[0];
      }
      e.preventDefault();
      var target = $('book-form');
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      setTimeout(function () { $('bf-name').focus({ preventScroll: true }); }, reduce ? 0 : 450);
    });
  }

  function requestType() {
    var r = form && form.querySelector('input[name="rtype"]:checked');
    return r ? r.value : 'consult';
  }
  function setRequestType(v) {
    var r = form && form.querySelector('input[name="rtype"][value="' + v + '"]');
    if (r) { r.checked = true; syncRequestType(); }
  }
  function syncRequestType() {
    if ($('form-title')) $('form-title').textContent = requestType() === 'interest' ? 'Register your interest' : 'Request a consultation';
  }

  function setErr(input, errEl, msg) {
    if (msg) {
      input.setAttribute('aria-invalid', 'true');
      errEl.textContent = msg; errEl.hidden = false;
    } else {
      input.removeAttribute('aria-invalid');
      errEl.textContent = ''; errEl.hidden = true;
    }
    return !msg;
  }

  function validate(focusFirst) {
    var checks = [
      [$('bf-name'), $('bf-name-err'), $('bf-name').value.trim().length < 2 ? 'Please enter your name.' : ''],
      [$('bf-email'), $('bf-email-err'), !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test($('bf-email').value.trim()) ? 'Please enter a valid email address, like name@example.com.' : ''],
      [$('bf-level'), $('bf-level-err'), !$('bf-level').value ? 'Please choose your current level, or “Not sure”.' : ''],
      [$('bf-goal'), $('bf-goal-err'), !$('bf-goal').value ? 'Please choose your main goal.' : ''],
      [$('bf-consent'), $('bf-consent-err'), !$('bf-consent').checked ? 'Please agree so we can use your details to respond to your request.' : '']
    ];
    var bad = checks.filter(function (c) { return !setErr(c[0], c[1], c[2]); });
    var sum = $('err-summary');
    if (bad.length) {
      sum.innerHTML = 'Please fix ' + (bad.length === 1 ? 'one field' : bad.length + ' fields') + ' before continuing.';
      sum.hidden = false;
      if (focusFirst) bad[0][0].focus();
      return false;
    }
    sum.hidden = true;
    return true;
  }

  function buildBody() {
    var tSel = $('bf-teacher'), cSel = $('bf-course');
    var times = Array.prototype.slice.call(form.querySelectorAll('input[name="times"]:checked')).map(function (i) { return i.value; });
    return [
      requestType() === 'interest'
        ? 'Live course interest (no consultation requested, nothing to pay)'
        : 'Live class consultation request (' + D.consultation.feeLabel + ')',
      '',
      'Name: ' + $('bf-name').value.trim(),
      'Email: ' + $('bf-email').value.trim(),
      'WhatsApp / phone: ' + ($('bf-phone').value.trim() || '—'),
      'Current level: ' + $('bf-level').value,
      'Main goal: ' + $('bf-goal').value,
      'Preferred teacher: ' + tSel.options[tSel.selectedIndex].text,
      'Course of interest: ' + cSel.options[cSel.selectedIndex].text,
      'Preferred times (IST): ' + (times.length ? times.join(', ') : 'Flexible'),
      '',
      'Message:',
      $('bf-msg').value.trim() || '—'
    ].join('\n');
  }

  function showForm() {
    if (!done || done.hidden) return;
    done.hidden = true; form.hidden = false;
  }

  function initForm() {
    if (!form) return;
    Array.prototype.forEach.call(form.querySelectorAll('input[name="rtype"]'), function (r) { r.addEventListener('change', syncRequestType); });
    ['bf-name', 'bf-email', 'bf-level', 'bf-goal', 'bf-consent'].forEach(function (id) {
      var el = $(id);
      el.addEventListener('change', function () {
        if (el.getAttribute('aria-invalid') === 'true') validate(false);
      });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validate(true)) return;
      lastBody = buildBody();
      var interest = requestType() === 'interest';
      var subject = 'Klarweg — ' + (interest ? 'Live course interest' : 'Live class consultation request') + ' (' + $('bf-name').value.trim() + ')';
      var note = $('done-notice');
      if (note) {
        if (!note.hasAttribute('data-consult-html')) note.setAttribute('data-consult-html', note.innerHTML);
        note.innerHTML = note.getAttribute(interest ? 'data-interest-html' : 'data-consult-html');
      }
      $('consult-preview').textContent = lastBody;
      form.hidden = true; done.hidden = false;
      $('copy-status').textContent = '';
      done.focus();
      window.location.href = 'mailto:' + D.contact.email
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(lastBody);
    });
    $('edit-request').addEventListener('click', function () { showForm(); $('bf-name').focus(); });
    $('copy-request').addEventListener('click', function () {
      var status = $('copy-status');
      function fallback() {
        var r = document.createRange(); r.selectNodeContents($('consult-preview'));
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        status.textContent = 'Text selected. Press Ctrl+C (or ⌘C) to copy it.';
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText('To: ' + D.contact.email + '\n\n' + lastBody)
          .then(function () { status.textContent = 'Copied. Paste it into an email to ' + D.contact.email + '.'; }, fallback);
      } else fallback();
    });
  }

  /* ---------- testimonials (real ones only) ---------- */
  function renderQuotes() {
    var box = $('quotes');
    if (!box) return;
    if (!quotes.length) {
      box.innerHTML = SHOW_DRAFTS
        ? '<div class="empty-state" style="grid-column:1/-1"><span class="draft-flag">Draft slot</span><h3 style="margin-top:12px">Student testimonials go here</h3><p>Add real, permission-given quotes in live-classes-data.js. This slot disappears when there are none and drafts are off.</p></div>'
        : '';
      if (!SHOW_DRAFTS) box.hidden = true;
      return;
    }
    box.innerHTML = quotes.map(function (q) {
      return '<figure class="card quote">' + draftFlag(q) + '<blockquote>“' + esc(q.quote) + '”</blockquote>'
        + '<figcaption><strong>' + esc(q.name) + '</strong>' + (has(q.detail) ? ' · ' + esc(q.detail) : '') + '</figcaption></figure>';
    }).join('');
  }

  /* ---------- structured data ----------
     Built after the copy is final, from what the page actually shows:
     the FAQ exactly as rendered (so the markup always matches the visible
     answers), and a Course entry for each PUBLISHED course only. Drafts
     never enter it, even in a local preview. No price or date is added
     here: a course card is the only place those appear. */
  function initStructuredData() {
    var norm = function (t) { return String(t || '').replace(/\s+/g, ' ').trim(); };
    var graph = [];
    var faq = Array.prototype.slice.call(document.querySelectorAll('.faq-item')).map(function (it) {
      var q = it.querySelector('.faq-q'), a = it.querySelector('.faq-a-inner');
      return q && a ? { '@type': 'Question', name: norm(q.textContent), acceptedAnswer: { '@type': 'Answer', text: norm(a.textContent) } } : null;
    }).filter(function (x) { return x && x.name && x.acceptedAnswer.text; });
    if (faq.length) graph.push({ '@type': 'FAQPage', mainEntity: faq });
    var home = new URL('index.html', location.href).href;
    courses.filter(function (c) { return !c.draft; }).forEach(function (c) {
      var course = {
        '@type': 'Course', name: c.title,
        description: (c.objectives || []).join(' '),
        educationalLevel: (c.levels || []).join(', '),
        provider: { '@type': 'Organization', name: 'Klarweg', url: home }
      };
      var who = (c.teacherIds || []).map(function (id) { return teacherById[id]; }).filter(function (t) { return t && !t.draft; });
      if (who.length) course.instructor = who.map(function (t) { return { '@type': 'Person', name: t.name }; });
      graph.push(course);
    });
    if (!graph.length) return;
    var el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = 'live-jsonld';
    el.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
    document.head.appendChild(el);
  }

  /* ---------- mobile sticky CTA: after the hero, hidden over #book ---------- */
  function initSticky() {
    var bar = $('sticky-book');
    var hero = document.querySelector('.live-hero');
    var book = $('book');
    if (!bar || !hero || !book || !('IntersectionObserver' in window)) return;
    var pastHero = false, atBook = false, atFooter = false;
    function sync() {
      var show = pastHero && !atBook && !atFooter;
      bar.classList.toggle('show', show);
      bar.setAttribute('aria-hidden', show ? 'false' : 'true');
      bar.querySelector('a').tabIndex = show ? 0 : -1;
    }
    new IntersectionObserver(function (en) { pastHero = !en[0].isIntersecting && en[0].boundingClientRect.top < 0; sync(); }).observe(hero);
    new IntersectionObserver(function (en) { atBook = en[0].isIntersecting; sync(); }, { threshold: 0.05 }).observe(book);
    var footer = document.querySelector('footer');
    if (footer) new IntersectionObserver(function (en) { atFooter = en[0].isIntersecting; sync(); }).observe(footer);
  }

  function init() {
    initCopy();
    initEmptyCopy();
    initTeacherFilters();
    renderTeachers();
    initDialog();
    initCourseFilters();
    renderCourses();
    fillSelects();
    initPrefill();
    initForm();
    renderQuotes();
    initStructuredData();
    initSticky();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
