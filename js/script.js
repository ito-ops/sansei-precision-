/* SANSEI PRECISION - interactions */

(function(){
  // ===== Header shadow on scroll =====
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 6) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive:true });
    onScroll();
  }

  // ===== Mobile nav toggle =====
  const toggle = document.getElementById('navToggle');
  const nav    = document.getElementById('globalNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('is-open'));
    nav.addEventListener('click', e => {
      if (e.target.tagName === 'A') nav.classList.remove('is-open');
    });
  }

  // ===== Works marquee: clone items so translateX(-50%) loops seamlessly =====
  const marqueeTrack = document.getElementById('marqueeTrack');
  if (marqueeTrack) {
    Array.from(marqueeTrack.children).forEach(el => {
      const clone = el.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      marqueeTrack.appendChild(clone);
    });
  }

  // ===== Particles background (ABOUT left side) =====
  const initParticles = () => {
    if (typeof window.particlesJS !== 'function') return false;
    if (!document.getElementById('particles-js')) return true;
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 70, density: { enable: true, value_area: 800 } },
        color:  { value: '#1AAFB0' },
        shape:  { type: 'circle', stroke: { width: 0.5, color: '#0E7E7E' } },
        opacity:{ value: 0.55, random: true, anim: { enable: true, speed: 1, opacity_min: 0.15 } },
        size:   { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.8 } },
        line_linked: { enable: true, distance: 150, color: '#1AAFB0', opacity: 0.35, width: 1 },
        move:   { enable: true, speed: 1.6, random: true, out_mode: 'bounce' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize:  true
        },
        modes: {
          grab:    { distance: 180, line_linked: { opacity: 0.7 } },
          push:    { particles_nb: 3 },
          repulse: { distance: 160, duration: 0.4 }
        }
      },
      retina_detect: true
    });
    return true;
  };
  if (!initParticles()) {
    let tries = 0;
    const t = setInterval(() => {
      if (initParticles() || ++tries > 40) clearInterval(t);
    }, 120);
  }

  // ============================================================
  //  REVEAL ON SCROLL — apply reveal classes + observe
  // ============================================================
  const addReveal = (el, variant, delayClass) => {
    if (!el || el.classList.contains('reveal')) return;
    el.classList.add('reveal');
    if (variant)    el.classList.add(variant);
    if (delayClass) el.classList.add(delayClass);
  };

  // ---- ABOUT text block (single fade-up) ----
  addReveal(document.querySelector('.about-text'), 'up');

  // ---- SERVICE cards (stagger only) ----
  document.querySelectorAll('.service-grid .service-card').forEach((el,i) => {
    addReveal(el, 'up', ['d1','d2','d3'][i] || 'd3');
  });

  // ---- Observer ----
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('is-visible');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

})();
