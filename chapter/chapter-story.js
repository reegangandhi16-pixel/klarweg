/* ============================================================
   KLARWEG STORY SCROLL — FlowArt / FlowSection engine
   Built on GSAP + ScrollTrigger (loaded via CDN in the page).
   The original FlowArt component was never provided, so this is
   a faithful, Klarweg-styled equivalent: a pinned stage that
   cross-fades 6 cinematic FlowSections as the user scrolls,
   with parallax FlowArt behind each. Honours the OS motion rules
   (soft settle, no bounce, reduced-motion safe).
============================================================ */
(function () {
  const stage = document.getElementById('story-stage');
  if (!stage) return;

  const sections = Array.from(stage.querySelectorAll('.flow-section'));
  const rail = document.getElementById('story-rail');
  const railDots = rail ? Array.from(rail.querySelectorAll('.story-rail-dot')) : [];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const N = sections.length;

  function setActiveDot(i) {
    railDots.forEach((d, k) => d.classList.toggle('is-active', k === i));
  }

  // -------- Reduced motion / single slide / no-GSAP fallback: static reveal --------
  if (reduce || N < 2 || !window.gsap || !window.ScrollTrigger) {
    stage.style.height = 'auto';
    sections.forEach((s) => {
      s.style.position = 'relative';
      s.style.opacity = '1';
      s.style.minHeight = '100vh';
    });
    if (rail) rail.classList.add('is-visible');
    // Gentle one-shot reveal of the hero content even without scroll.
    if (window.gsap && !reduce) {
      const items = stage.querySelectorAll('[data-fade]');
      gsap.fromTo(items, { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power2.out', delay: 0.15,
          onComplete: () => items.forEach(i => { i.style.opacity = ''; i.style.transform = ''; }) });
    } else {
      stage.querySelectorAll('[data-fade]').forEach(i => { i.style.opacity = '1'; i.style.transform = 'none'; });
    }
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // First slide visible immediately
  gsap.set(sections[0], { opacity: 1, y: 0 });
  gsap.set(sections.slice(1), { opacity: 0, y: 40 });

  // Reveal inner content of slide 0 on load
  requestAnimationFrame(() => revealInner(sections[0]));

  if (rail) requestAnimationFrame(() => rail.classList.add('is-visible'));

  // -------- Master pinned timeline: cross-fade slides --------
  const SEG = 1;                    // scroll units per slide
  const total = (N - 1) * SEG;      // transitions count

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: stage,
      start: 'top top',
      end: () => '+=' + (window.innerHeight * (N)) ,
      pin: true,
      scrub: 0.6,
      anticipatePin: 1,
      onUpdate: (self) => {
        const idx = Math.round(self.progress * (N - 1));
        setActiveDot(idx);
      }
    }
  });

  for (let i = 0; i < N - 1; i++) {
    const cur = sections[i];
    const nxt = sections[i + 1];
    const curInner = cur.querySelector('.flow-inner');
    const nxtInner = nxt.querySelector('.flow-inner');
    const curArt = cur.querySelectorAll('.fa-blob, .fa-chip, .fa-dot');
    const nxtArt = nxt.querySelectorAll('.fa-blob, .fa-chip, .fa-dot');

    const pos = i * SEG;
    // current out
    tl.to(cur, { opacity: 0, y: -50, duration: 0.5, ease: 'power2.in' }, pos);
    if (curInner) tl.to(curInner, { y: -30, duration: 0.5, ease: 'power2.in' }, pos);
    if (curArt.length) tl.to(curArt, { y: -60, opacity: 0, duration: 0.5, ease: 'power1.in' }, pos);
    // next in
    tl.fromTo(nxt, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, pos + 0.5);
    if (nxtInner) tl.fromTo(nxtInner, { y: 40 }, { y: 0, duration: 0.5, ease: 'power2.out' }, pos + 0.5);
    if (nxtArt.length) tl.fromTo(nxtArt, { y: 50, opacity: 0 }, { y: 0, opacity: (k, t) => artOpacity(t), duration: 0.6, ease: 'power1.out' }, pos + 0.45);
  }

  function artOpacity(el) {
    if (el.classList.contains('fa-blob')) return 0.18;
    if (el.classList.contains('fa-chip')) return 0.10;
    return 1;
  }

  // Continuous gentle parallax drift on FlowArt within each slide
  sections.forEach((s) => {
    const blobs = s.querySelectorAll('.fa-blob');
    blobs.forEach((b, k) => {
      gsap.to(b, {
        x: k % 2 === 0 ? 40 : -40,
        y: k % 2 === 0 ? -30 : 30,
        duration: 8 + k * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });
  });

  function revealInner(section) {
    const items = section.querySelectorAll('[data-fade]');
    if (!items.length) return;
    gsap.killTweensOf(items);
    gsap.set(items, { opacity: 0, y: 24 });
    gsap.to(items, {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power2.out', delay: 0.15,
      onComplete: () => items.forEach(i => { i.style.opacity = ''; i.style.transform = ''; })
    });
    // Failsafe: never leave intro content hidden, even if the tween is interrupted.
    setTimeout(() => items.forEach(i => {
      if (parseFloat(getComputedStyle(i).opacity) < 0.95) { i.style.opacity = '1'; i.style.transform = 'none'; }
    }), 1500);
  }

  // -------- Skip / Start-learning → jump to dashboard --------
  const dash = document.getElementById('dashboard');
  function jumpToDashboard() {
    const st = ScrollTrigger.getById ? null : null;
    const y = dash.offsetTop;
    gsap.to(window, { duration: reduce ? 0 : 0.9, scrollTo: { y: dash, autoKill: true }, ease: 'power2.inOut' });
  }
  // scrollTo plugin may be absent — fall back to native
  function safeJump() {
    if (window.gsap && gsap.plugins && gsap.plugins.scrollTo) { jumpToDashboard(); return; }
    // compute end of pinned region: stage height + pin distance
    const pinEnd = stage.offsetTop + window.innerHeight * N;
    window.scrollTo({ top: pinEnd + 20, behavior: reduce ? 'auto' : 'smooth' });
  }

  document.querySelectorAll('[data-jump="dashboard"]').forEach((btn) => {
    btn.addEventListener('click', (e) => { e.preventDefault(); safeJump(); });
  });

  // Recalculate on resize
  let rt;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => ScrollTrigger.refresh(), 200);
  });
})();
