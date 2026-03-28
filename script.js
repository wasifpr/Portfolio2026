/* ============================================
   WASIF FAROOQUI — PORTFOLIO
   script.js
   ============================================

   WHAT THIS FILE DOES
   -------------------
   1. Hero reveal     — cursor-tracked radial B&W → colour reveal
   2. Gallery slider  — arrow + drag/swipe carousel
   3. Scroll reveal   — IntersectionObserver fade-up
   4. Circular text   — CSS-only rotation (no JS needed)
   5. Dark/light mode — toggle with localStorage persistence
   6. Contact form    — AJAX submit to Formspree (no redirect)
   7. Sticky header   — show/hide on scroll direction

   HOW TO MODIFY
   -------------
   • Reveal size    — change REVEAL_RADIUS (line ~51)
   • Fade speed     — change FADE_SPEED     (line ~52)
   • Slider gap     — change `gap` in updateSlider() & CSS
   • Scroll trigger — change `threshold` in the Observer opts
   • Formspree ID   — update <form action> in index.html
   • Sticky trigger — change SCROLL_DELTA (line ~384)

   ============================================ */

(function () {
  'use strict';

  /* ------------------------------------------
     1. HERO — Cursor-tracked radial colour reveal
     ------------------------------------------
     Two identical images are stacked:
       • bottom  = grayscale  (always visible)
       • top     = full colour (masked via CSS mask-image)
     A <canvas> draws a soft radial gradient at the
     cursor position. That canvas is converted to a
     data-URL and fed into `mask-image` on the colour
     layer, producing an elegant brush-like reveal.
  ------------------------------------------ */

  const portrait   = document.getElementById('heroPortrait');
  const colorImg   = document.getElementById('heroColorImg');
  const canvas     = document.getElementById('heroRevealCanvas');

  if (portrait && colorImg && canvas) {
    const ctx = canvas.getContext('2d');

    // Soft reveal parameters
    const REVEAL_RADIUS = 150;          // px — radius of the reveal circle
    const FADE_SPEED    = 0.045;        // how fast the mask fades on mouse-leave
    let isHovering      = false;
    let currentX        = 0;
    let currentY        = 0;
    let targetX         = 0;
    let targetY         = 0;
    let maskOpacity     = 0;            // 0 → 1

    // Resize canvas to match portrait
    function resizeCanvas () {
      const rect = portrait.getBoundingClientRect();
      canvas.width  = rect.width;
      canvas.height = rect.height;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Draw the radial mask
    function drawMask () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = ctx.createRadialGradient(
        currentX, currentY, 0,
        currentX, currentY, REVEAL_RADIUS
      );
      gradient.addColorStop(0, `rgba(255,255,255,${maskOpacity})`);
      gradient.addColorStop(0.6, `rgba(255,255,255,${maskOpacity * 0.5})`);
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Convert canvas → mask-image on the colour layer
    function applyMask () {
      const dataURL = canvas.toDataURL();
      colorImg.style.webkitMaskImage = `url(${dataURL})`;
      colorImg.style.maskImage       = `url(${dataURL})`;
      colorImg.style.webkitMaskSize  = '100% 100%';
      colorImg.style.maskSize        = '100% 100%';
    }

    // Animation loop
    let rafId;
    function animate () {
      // Smooth lerp towards target
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      // Fade opacity in / out
      if (isHovering) {
        maskOpacity = Math.min(1, maskOpacity + FADE_SPEED * 1.5);
      } else {
        maskOpacity = Math.max(0, maskOpacity - FADE_SPEED);
      }

      // Show / hide colour layer
      if (maskOpacity > 0.01) {
        colorImg.classList.add('is-active');
        drawMask();
        applyMask();
      } else {
        colorImg.classList.remove('is-active');
        colorImg.style.webkitMaskImage = 'none';
        colorImg.style.maskImage       = 'none';
      }

      rafId = requestAnimationFrame(animate);
    }
    rafId = requestAnimationFrame(animate);

    // Pointer events
    portrait.addEventListener('pointerenter', () => { isHovering = true; });
    portrait.addEventListener('pointerleave', () => { isHovering = false; });

    portrait.addEventListener('pointermove', (e) => {
      const rect = portrait.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    });

    // For touch: reveal full image on tap
    portrait.addEventListener('touchstart', () => {
      isHovering = true;
      const rect = portrait.getBoundingClientRect();
      targetX = rect.width / 2;
      targetY = rect.height / 2;
    }, { passive: true });

    portrait.addEventListener('touchend', () => {
      isHovering = false;
    }, { passive: true });
  }


  /* ------------------------------------------
     2. GALLERY SLIDER — arrow & drag
  ------------------------------------------ */

  const track    = document.getElementById('creationsTrack');
  const prevBtn  = document.getElementById('sliderPrev');
  const nextBtn  = document.getElementById('sliderNext');

  if (track && prevBtn && nextBtn) {
    let sliderIndex = 0;

    function getVisibleCards () {
      const vw = window.innerWidth;
      if (vw <= 640)  return 1;
      if (vw <= 1024) return 2;
      return 3;
    }

    function getTotalCards () {
      return track.children.length;
    }

    function getMaxIndex () {
      return Math.max(0, getTotalCards() - getVisibleCards());
    }

    function updateSlider () {
      const card = track.children[0];
      if (!card) return;
      const gap = 24;
      const cardWidth = card.getBoundingClientRect().width + gap;
      track.style.transform = `translateX(-${sliderIndex * cardWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
      sliderIndex = Math.max(0, sliderIndex - 1);
      updateSlider();
    });

    nextBtn.addEventListener('click', () => {
      sliderIndex = Math.min(getMaxIndex(), sliderIndex + 1);
      updateSlider();
    });

    // Drag / swipe support
    let dragStart = null;
    let dragging  = false;

    track.addEventListener('pointerdown', (e) => {
      dragStart = e.clientX;
      dragging  = true;
      track.style.transition = 'none';
      track.setPointerCapture(e.pointerId);
    });

    track.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const diff = e.clientX - dragStart;
      const card = track.children[0];
      if (!card) return;
      const gap = 24;
      const cardWidth = card.getBoundingClientRect().width + gap;
      const base = -(sliderIndex * cardWidth);
      track.style.transform = `translateX(${base + diff}px)`;
    });

    const endDrag = (e) => {
      if (!dragging) return;
      dragging = false;
      track.style.transition = '';
      const diff = e.clientX - dragStart;
      const threshold = 60;
      if (diff < -threshold) {
        sliderIndex = Math.min(getMaxIndex(), sliderIndex + 1);
      } else if (diff > threshold) {
        sliderIndex = Math.max(0, sliderIndex - 1);
      }
      updateSlider();
    };

    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);

    // Recalculate on resize
    window.addEventListener('resize', () => {
      sliderIndex = Math.min(sliderIndex, getMaxIndex());
      updateSlider();
    });
  }


  /* ------------------------------------------
     3. SCROLL REVEAL — Intersection Observer
  ------------------------------------------ */

  const revealEls = document.querySelectorAll('.reveal-on-scroll');

  if (revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);  // fire once
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));
  }


  /* ------------------------------------------
     4. CIRCULAR TEXT — continuous rotation
     (handled via CSS animation; nothing extra
      needed in JS unless we want scroll-linked
      speed, which we skip for simplicity)
  ------------------------------------------ */


  /* ------------------------------------------
     5. DARK / LIGHT MODE TOGGLE
     Persists choice in localStorage.
     Both the hero toggle AND the sticky toggle
     are kept in sync.
     Icon: ☾ (moon) = click to go dark
            ☉ (sun)  = click to go light
  ------------------------------------------ */

  // Collect all toggle buttons & icons
  const toggleBtns = [
    { btn: document.getElementById('themeToggle'),       icon: document.getElementById('themeIcon') },
    { btn: document.getElementById('stickyThemeToggle'), icon: document.getElementById('stickyThemeIcon') }
  ].filter(t => t.btn && t.icon);

  function syncIcons (isDark) {
    toggleBtns.forEach(t => {
      t.icon.textContent = isDark ? '\u2609' : '\u263E';
    });
  }

  // Read saved preference on load
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    syncIcons(true);
  }

  toggleBtns.forEach(t => {
    t.btn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-mode');
      syncIcons(isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  });


  /* ------------------------------------------
     6. CONTACT FORM — AJAX submit
     Submits via fetch() so the user stays on
     the page (no Formspree redirect).
     Falls back to mailto: if no Formspree ID.

     TO CHANGE FORMSPREE ID: update the <form
     action> URL in index.html.
     TO SWITCH PROVIDER: change the fetch URL
     and adjust the FormData / headers below.
     TO REMOVE FORM: delete this block, the
     <section id="contact"> in HTML, and the
     .contact styles in CSS.
  ------------------------------------------ */

  const contactForm   = document.getElementById('contactForm');
  const contactStatus = document.getElementById('contactStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const action = contactForm.getAttribute('action') || '';

      // Fallback: mailto if Formspree not configured
      if (action.includes('YOUR_FORM_ID')) {
        const name    = contactForm.querySelector('#name').value;
        const email   = contactForm.querySelector('#email').value;
        const message = contactForm.querySelector('#message').value;
        const subject = encodeURIComponent('Portfolio enquiry from ' + name);
        const body    = encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message);
        window.location.href = 'mailto:wasiffrd@gmail.com?subject=' + subject + '&body=' + body;
        return;
      }

      // AJAX submit to Formspree (no redirect)
      const submitBtn = contactForm.querySelector('.contact__submit');
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;

      try {
        const res = await fetch(action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          contactForm.reset();
          contactStatus.textContent = 'Message sent — I\u2019ll get back to you soon!';
          contactStatus.className = 'contact__status contact__status--ok';
        } else {
          throw new Error('Server responded with ' + res.status);
        }
      } catch (err) {
        contactStatus.textContent = 'Something went wrong. Please email me directly.';
        contactStatus.className = 'contact__status contact__status--err';
      }

      submitBtn.textContent = 'Send Message \u2192';
      submitBtn.disabled = false;
    });
  }


  /* ------------------------------------------
     7. STICKY HEADER
     ─────────────────────────────────────────
     Shows after scrolling past the hero.
     Hides on scroll-down, reappears on scroll-up.

     TO REMOVE: delete this entire block and
     the <header id="stickyHeader"> in HTML and
     the .sticky-header styles in CSS.
  ------------------------------------------ */

  const stickyHeader = document.getElementById('stickyHeader');
  const heroSection  = document.getElementById('hero');

  if (stickyHeader && heroSection) {
    let lastScrollY   = 0;
    let heroBottom     = 0;
    const SCROLL_DELTA = 5;   // minimum px to count as intentional scroll

    function updateHeroBottom () {
      heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    }
    updateHeroBottom();
    window.addEventListener('resize', updateHeroBottom);

    window.addEventListener('scroll', () => {
      const currentY = window.scrollY;

      // Only show after hero
      if (currentY < heroBottom - 100) {
        stickyHeader.classList.remove('is-visible');
        lastScrollY = currentY;
        return;
      }

      // Scrolling down → hide
      if (currentY > lastScrollY + SCROLL_DELTA) {
        stickyHeader.classList.add('is-hidden');
        stickyHeader.classList.remove('is-visible');
      }
      // Scrolling up → show
      else if (currentY < lastScrollY - SCROLL_DELTA) {
        stickyHeader.classList.remove('is-hidden');
        stickyHeader.classList.add('is-visible');
      }

      lastScrollY = currentY;
    }, { passive: true });
  }

})();
