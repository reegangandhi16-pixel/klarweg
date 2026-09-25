/* ============================================================
   KLARWEG · site.js — shared behaviour for non-roadmap pages.
   Reveal-on-scroll, FAQ accordion, footer year. No dependencies.
   ============================================================ */
(function () {
  'use strict';

  // ---- reveal on scroll (IntersectionObserver @ ~8%) ----
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  // ---- FAQ accordion ----
  function initFaq() {
    document.querySelectorAll('.faq-q').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.faq-item');
        var ans = item.querySelector('.faq-a');
        var open = item.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        ans.style.maxHeight = open ? (ans.scrollHeight + 'px') : '';
      });
    });
  }

  // ---- footer year ----
  function initYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  // ---- contact form (no backend yet — hands off to a pre-filled mailto:
  //      rather than claiming a delivery that never happens) ----
  function initContact() {
    var form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#cf-name');
      var email = form.querySelector('#cf-email');
      var topic = form.querySelector('#cf-topic');
      var msg = form.querySelector('#cf-msg');
      var subject = 'Klarweg — ' + (topic && topic.value ? topic.value : 'Website enquiry');
      var body = 'From: ' + (name ? name.value : '') + '\n' +
        'Email: ' + (email ? email.value : '') + '\n\n' +
        (msg ? msg.value : '');
      window.location.href = 'mailto:hallo@klarweg.app'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);
      var ok = form.querySelector('[data-form-ok]');
      form.querySelectorAll('input,textarea,select,button').forEach(function (el) { el.disabled = true; });
      if (ok) ok.hidden = false;
    });
  }

  function init() { initReveal(); initFaq(); initYear(); initContact(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
