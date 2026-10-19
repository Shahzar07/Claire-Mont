/* ==========================================================================
   Claremont Cooling — site behaviour (vanilla JS, no dependencies)
   Each feature initialises only if its markup is present, so this file can
   be shared by every page. Runs in the browser only: components/SiteBehaviour
   calls initSite() once React has hydrated the server-rendered markup.
   ========================================================================== */

var reducedMotion;
var desktopNav;
var finePointer;

function $(selector, scope) { return (scope || document).querySelector(selector); }
function $$(selector, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(selector)); }

/* ------------------------------------------------------------------------
   Header shadow once the top bar scrolls out of view
   ------------------------------------------------------------------------ */
function initHeader() {
  var header = $('[data-header]');
  var topbar = $('[data-topbar]');
  if (!header) return;

  if (topbar && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      header.classList.toggle('is-scrolled', !entries[0].isIntersecting);
    }).observe(topbar);
  } else {
    var update = function () { header.classList.toggle('is-scrolled', window.scrollY > 40); };
    update();
    window.addEventListener('scroll', update, { passive: true });
  }
}

/* ------------------------------------------------------------------------
   Navigation: desktop dropdowns + mobile drawer
   ------------------------------------------------------------------------ */
function initNav() {
  var nav = $('[data-nav]');
  if (!nav) return;

  var toggle = $('[data-nav-toggle]');
  var closeBtn = $('[data-nav-close]', nav);
  var backdrop = $('[data-nav-backdrop]');
  var items = $$('.has-dropdown', nav);
  var hoverTimer = null;
  var backdropTimer = null;

  function setOpen(item, open) {
    item.classList.toggle('is-open', open);
    $('.nav-link--toggle', item).setAttribute('aria-expanded', String(open));
    if (!open) item.removeAttribute('data-hover-open');
  }

  function closeAll(except) {
    items.forEach(function (item) {
      if (item !== except) setOpen(item, false);
    });
  }

  function usesHover() { return desktopNav.matches && finePointer.matches; }

  items.forEach(function (item) {
    var button = $('.nav-link--toggle', item);
    var links = function () { return $$('.dropdown a', item); };

    button.addEventListener('click', function () {
      // A click while the menu is already open from hovering keeps it open
      // instead of immediately closing it under the pointer.
      if (item.hasAttribute('data-hover-open')) {
        item.removeAttribute('data-hover-open');
        return;
      }
      var open = !item.classList.contains('is-open');
      if (desktopNav.matches) closeAll(item);
      setOpen(item, open);
    });

    item.addEventListener('mouseenter', function () {
      if (!usesHover()) return;
      clearTimeout(hoverTimer);
      closeAll(item);
      if (!item.classList.contains('is-open')) item.setAttribute('data-hover-open', '');
      setOpen(item, true);
    });

    item.addEventListener('mouseleave', function () {
      if (!usesHover()) return;
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(function () { setOpen(item, false); }, 180);
    });

    // Close when keyboard focus leaves the menu (desktop only)
    item.addEventListener('focusout', function (event) {
      if (desktopNav.matches && !item.contains(event.relatedTarget)) setOpen(item, false);
    });

    item.addEventListener('keydown', function (event) {
      var list = links();
      var index = list.indexOf(document.activeElement);

      if (event.key === 'Escape' && item.classList.contains('is-open')) {
        event.stopPropagation();
        setOpen(item, false);
        button.focus();
        return;
      }

      if (!desktopNav.matches) return;

      if (event.target === button && event.key === 'ArrowDown') {
        event.preventDefault();
        closeAll(item);
        setOpen(item, true);
        if (list[0]) list[0].focus();
      } else if (index > -1 && event.key === 'ArrowDown') {
        event.preventDefault();
        list[(index + 1) % list.length].focus();
      } else if (index > -1 && event.key === 'ArrowUp') {
        event.preventDefault();
        if (index === 0) button.focus(); else list[index - 1].focus();
      } else if (index > -1 && event.key === 'Home') {
        event.preventDefault();
        list[0].focus();
      } else if (index > -1 && event.key === 'End') {
        event.preventDefault();
        list[list.length - 1].focus();
      }
    });
  });

  // Click outside closes any open desktop dropdown
  document.addEventListener('click', function (event) {
    if (desktopNav.matches && !nav.contains(event.target)) closeAll();
  });

  /* --- Mobile drawer --- */
  function isDrawerOpen() { return nav.classList.contains('is-open'); }

  function openDrawer() {
    clearTimeout(backdropTimer);
    nav.classList.add('is-open');
    if (backdrop) {
      backdrop.hidden = false;
      requestAnimationFrame(function () { backdrop.classList.add('is-visible'); });
    }
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
    (closeBtn || $('a, button', nav)).focus();
  }

  function closeDrawer(restoreFocus) {
    if (!isDrawerOpen()) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
    closeAll();
    if (backdrop) {
      backdrop.classList.remove('is-visible');
      backdropTimer = setTimeout(function () { backdrop.hidden = true; }, 320);
    }
    if (restoreFocus !== false) toggle.focus();
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      if (isDrawerOpen()) closeDrawer(); else openDrawer();
    });
  }
  if (closeBtn) closeBtn.addEventListener('click', function () { closeDrawer(); });
  if (backdrop) backdrop.addEventListener('click', function () { closeDrawer(); });

  // Following a link from the drawer closes it
  nav.addEventListener('click', function (event) {
    if (event.target.closest('a') && isDrawerOpen()) closeDrawer(false);
  });

  // Keep keyboard focus inside the open drawer
  nav.addEventListener('keydown', function (event) {
    if (event.key !== 'Tab' || !isDrawerOpen()) return;
    var focusable = $$('a[href], button:not([disabled])', nav).filter(function (el) {
      return el.offsetParent !== null && getComputedStyle(el).visibility !== 'hidden';
    });
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    if (isDrawerOpen()) closeDrawer();
    else closeAll();
  });

  // Switching between layouts resets menu state
  var onLayoutChange = function () {
    closeDrawer(false);
    closeAll();
  };
  if (desktopNav.addEventListener) desktopNav.addEventListener('change', onLayoutChange);
  else if (desktopNav.addListener) desktopNav.addListener(onLayoutChange);
}

/* ------------------------------------------------------------------------
   Accordions (FAQ, process steps)
   data-accordion-single: only one item open at a time
   data-accordion-keep:   one item always stays open
   ------------------------------------------------------------------------ */
function initAccordions() {
  $$('[data-accordion]').forEach(function (group) {
    var single = group.hasAttribute('data-accordion-single');
    var keep = group.hasAttribute('data-accordion-keep');
    var triggers = $$('[data-accordion-trigger]', group);

    function setItem(trigger, open) {
      trigger.setAttribute('aria-expanded', String(open));
      trigger.closest('[data-accordion-item]').classList.toggle('is-open', open);
    }

    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var open = trigger.getAttribute('aria-expanded') !== 'true';
        if (!open && keep) return;
        if (single && open) {
          triggers.forEach(function (other) { if (other !== trigger) setItem(other, false); });
        }
        setItem(trigger, open);
      });
    });
  });
}

/* ------------------------------------------------------------------------
   Scroll reveal (IntersectionObserver)
   ------------------------------------------------------------------------ */
function initReveal() {
  var elements = $$('[data-reveal]');

  $$('[data-reveal-group]').forEach(function (group) {
    $$('[data-reveal]', group).forEach(function (el, i) {
      el.style.setProperty('--reveal-delay', Math.min(i * 90, 450) + 'ms');
    });
  });

  window.__revealReady = true;

  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    elements.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  elements.forEach(function (el) { observer.observe(el); });
}

/* ------------------------------------------------------------------------
   Smooth in-page scrolling
   Handles "#id" and "index.html#id" links when the target is on this page.
   ------------------------------------------------------------------------ */
function normalisePath(path) {
  return path.replace(/index\.html?$/i, '').replace(/\/+$/, '/');
}

function initSmoothScroll() {
  document.addEventListener('click', function (event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    var link = event.target.closest('a[href*="#"]');
    if (!link) return;

    var url = new URL(link.getAttribute('href'), window.location.href);
    if (url.origin !== window.location.origin || normalisePath(url.pathname) !== normalisePath(window.location.pathname)) return;

    var id = decodeURIComponent(url.hash.slice(1));
    var target = id ? document.getElementById(id) : null;
    if (!target) return;

    event.preventDefault();
    var behavior = reducedMotion.matches ? 'auto' : 'smooth';
    if (id === 'top') window.scrollTo({ top: 0, behavior: behavior });
    else target.scrollIntoView({ behavior: behavior, block: 'start' });

    // Move focus for keyboard and screen-reader users without a second jump
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });

    if (window.history && history.pushState) history.pushState(null, '', '#' + id);
  });
}

/* ------------------------------------------------------------------------
   Planned pages: contact options instead of a 404
   ------------------------------------------------------------------------ */
function initPlannedLinks() {
  var toast = $('[data-toast]');
  if (!toast) return;

  var title = $('[data-toast-title]', toast);
  var live = $('[data-toast-live]');
  var closeBtn = $('[data-toast-close]', toast);
  var hideTimer = null;
  var removeTimer = null;

  function hide() {
    clearTimeout(hideTimer);
    toast.classList.remove('is-visible');
    removeTimer = setTimeout(function () { toast.hidden = true; }, 300);
  }

  function scheduleHide() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hide, 7000);
  }

  function show(label) {
    clearTimeout(removeTimer);
    title.textContent = label + ' — speak to our team';
    toast.hidden = false;
    requestAnimationFrame(function () { toast.classList.add('is-visible'); });
    if (live) {
      live.textContent = '';
      setTimeout(function () {
        live.textContent = label + ': for details, call +44 7764 936622 or email Lax@hotmail.co.uk.';
      }, 50);
    }
    scheduleHide();
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[data-planned]');
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey) return;
    event.preventDefault();
    var label = (link.getAttribute('data-label') || link.textContent).replace(/\s+/g, ' ').trim();
    show(label);
  });

  closeBtn.addEventListener('click', hide);

  // Pause auto-hide while the notice is being read or used
  ['mouseenter', 'focusin'].forEach(function (type) {
    toast.addEventListener(type, function () { clearTimeout(hideTimer); });
  });
  ['mouseleave', 'focusout'].forEach(function (type) {
    toast.addEventListener(type, function (event) {
      if (!toast.contains(event.relatedTarget)) scheduleHide();
    });
  });
}

/* ------------------------------------------------------------------------
   Mobile quick-action bar: appears once the hero is out of view
   ------------------------------------------------------------------------ */
function initMobileCta() {
  var bar = $('[data-mobile-cta]');
  var hero = $('[data-hero]');
  if (!bar) return;

  if (!hero || !('IntersectionObserver' in window)) {
    bar.classList.add('is-visible');
    return;
  }

  new IntersectionObserver(function (entries) {
    bar.classList.toggle('is-visible', !entries[0].isIntersecting);
  }, { rootMargin: '0px 0px -40% 0px' }).observe(hero);
}

/* ------------------------------------------------------------------------
   Survey enquiry form (multi-step)
   Steps are fieldsets with data-survey-step="n"; data-survey-when limits a
   step to the chosen "Home" / "Business" branch. With no backend yet, the
   final step opens the visitor's email app with their answers — nothing is
   sent or booked until they press send.
   Phase 2: replace handOff() with a POST to the booking system.
   ------------------------------------------------------------------------ */
function initSurveyForm() {
  var form = $('[data-survey-form]');
  if (!form) return;

  var steps = $$('[data-survey-step]', form);
  var total = steps.reduce(function (max, s) { return Math.max(max, +s.getAttribute('data-survey-step')); }, 1);
  var count = $('[data-survey-count]', form);
  var bar = $('[data-survey-bar]', form);
  var back = $('[data-survey-back]', form);
  var next = $('[data-survey-next]', form);
  var done = $('[data-survey-done]', form);
  var summaryField = $('[data-survey-summary]', form);
  var copyBtn = $('[data-survey-copy]', form);
  var copyLabel = $('[data-survey-copy-label]', form);
  var editBtn = $('[data-survey-edit]', form);
  var email = form.getAttribute('data-survey-email');
  var current = 1;
  var branch = '';

  function stepEl(n) {
    return steps.filter(function (s) {
      var when = s.getAttribute('data-survey-when');
      return +s.getAttribute('data-survey-step') === n && (!when || when === branch);
    })[0];
  }

  // Disable the unused branch so its inputs are neither validated nor sent
  function syncBranch() {
    var checked = $('[data-survey-branch]:checked', form);
    branch = checked ? checked.value : '';
    steps.forEach(function (s) {
      var when = s.getAttribute('data-survey-when');
      s.disabled = !!when && when !== branch;
    });
  }

  function show(n, moveFocus) {
    var target = stepEl(n);
    if (!target) return;
    current = n;
    steps.forEach(function (s) { s.classList.toggle('is-active', s === target); });
    count.textContent = 'Step ' + n + ' of ' + total;
    bar.style.width = (n / total * 100) + '%';
    form.classList.toggle('is-first', n === 1);
    form.classList.toggle('is-last', n === total);
    if (moveFocus) {
      $('.survey-step__title', target).focus({ preventScroll: true });
      var top = form.getBoundingClientRect().top;
      if (top < 90) window.scrollBy({ top: top - 110, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    }
  }

  function clearError(field) {
    if (!field) return;
    field.removeAttribute('aria-invalid');
    var error = $('.field__error', field);
    if (error) error.remove();
    $$('[aria-invalid]', field).forEach(function (input) { input.removeAttribute('aria-invalid'); });
  }

  function setError(field, input, message) {
    var error = document.createElement('p');
    error.className = 'field__error';
    error.id = 'err-' + Math.random().toString(36).slice(2, 8);
    error.textContent = message;
    field.appendChild(error);
    field.setAttribute('aria-invalid', 'true');
    if (input.type !== 'radio' && input.type !== 'checkbox') {
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', ((input.getAttribute('aria-describedby') || '') + ' ' + error.id).trim());
    } else {
      field.setAttribute('aria-describedby', error.id);
    }
  }

  function messageFor(input) {
    var v = input.validity;
    if (v.valueMissing) return 'Please fill in this field.';
    if (v.typeMismatch && input.type === 'email') return 'Please enter a valid email address.';
    return input.getAttribute('data-error') || 'Please check this field.';
  }

  // Returns the first invalid control in the step, or null
  function validate(step) {
    var firstInvalid = null;
    $$('.field', step).forEach(function (field) {
      clearError(field);
      var radios = $$('input[type="radio"]', field);
      var boxes = $$('input[type="checkbox"]', field);
      var problem = null;

      if (radios.length && radios.some(function (r) { return r.required; }) && !radios.some(function (r) { return r.checked; })) {
        problem = [radios[0], 'Please choose an option.'];
      } else if (boxes.length && field.hasAttribute('data-min-checked') &&
        boxes.filter(function (b) { return b.checked; }).length < +field.getAttribute('data-min-checked')) {
        problem = [boxes[0], 'Please choose at least one option.'];
      } else {
        $$('input:not([type="radio"]):not([type="checkbox"]), textarea, select', field).some(function (input) {
          if (input.checkValidity()) return false;
          problem = [input, messageFor(input)];
          return true;
        });
      }

      if (problem) {
        setError(field, problem[0], problem[1]);
        if (!firstInvalid) firstInvalid = problem[0];
      }
    });
    return firstInvalid;
  }

  function goNext() {
    var invalid = validate(stepEl(current));
    if (invalid) { invalid.focus(); return; }
    if (current < total) show(current + 1, true);
  }

  function summary() {
    var answers = {};
    var order = [];
    new FormData(form).forEach(function (value, key) {
      value = String(value).trim();
      if (!value) return;
      if (!answers[key]) { answers[key] = []; order.push(key); }
      answers[key].push(value);
    });
    return order.map(function (key) { return key + ': ' + answers[key].join(', '); }).join('\r\n');
  }

  function handOff() {
    var text = summary();
    var postcode = (form.elements['Postcode'] && form.elements['Postcode'].value.trim().toUpperCase()) || '';
    var subject = 'E-Survey request' + (postcode ? ' – ' + postcode : '');
    var body = 'Hello Claremont Cooling,\r\n\r\nI\'d like to book an E-Survey. My answers:\r\n\r\n' + text + '\r\n\r\nThank you';
    summaryField.value = text;
    form.classList.add('is-done');
    done.hidden = false;
    $('.survey-done__title', done).focus({ preventScroll: true });
    window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  form.addEventListener('change', function (event) {
    if (event.target.matches('[data-survey-branch]')) syncBranch();
    if (event.target.matches('[data-uppercase]')) event.target.value = event.target.value.trim().toUpperCase();
    clearError(event.target.closest('.field'));
  });
  form.addEventListener('input', function (event) {
    if (event.target.matches('.field__input')) clearError(event.target.closest('.field'));
  });

  next.addEventListener('click', goNext);
  back.addEventListener('click', function () { if (current > 1) show(current - 1, true); });

  // Enter in a text field moves forward instead of submitting early
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (current < total) { goNext(); return; }
    var invalid = validate(stepEl(current));
    if (invalid) { invalid.focus(); return; }
    handOff();
  });

  copyBtn.addEventListener('click', function () {
    var confirm = function () {
      copyLabel.textContent = 'Copied';
      setTimeout(function () { copyLabel.textContent = 'Copy Answers'; }, 2000);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(summaryField.value).then(confirm, function () { summaryField.select(); });
    } else {
      summaryField.select();
      try { if (document.execCommand('copy')) confirm(); } catch (e) { /* text stays selected for manual copy */ }
    }
  });

  editBtn.addEventListener('click', function () {
    form.classList.remove('is-done');
    done.hidden = true;
    show(total, true);
  });

  syncBranch();
  show(1, false);
}

/* ------------------------------------------------------------------------
   Video cards: activate only when data-video-src holds a real source
   (YouTube URL/ID or a video file). Otherwise they display their photos.
   ------------------------------------------------------------------------ */
function youTubeId(src) {
  var match = src.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([\w-]{11})/);
  if (match) return match[1];
  return /^[\w-]{11}$/.test(src) ? src : null;
}

function initVideos() {
  $$('[data-video]').forEach(function (card) {
    var src = (card.getAttribute('data-video-src') || '').trim();
    var button = $('[data-video-play]', card);
    if (!src || !button) {
      card.classList.add('is-pending');
      return;
    }

    card.classList.add('is-ready');
    button.hidden = false;
    button.addEventListener('click', function () {
      var title = card.getAttribute('data-video-title') || 'Video';
      var id = youTubeId(src);
      var media;

      if (id) {
        media = document.createElement('iframe');
        media.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
        media.title = title;
        media.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        media.allowFullscreen = true;
      } else {
        media = document.createElement('video');
        media.src = src;
        media.controls = true;
        media.autoplay = true;
        media.playsInline = true;
        media.setAttribute('aria-label', title);
      }

      media.className = 'video-card__media';
      card.classList.add('is-playing');
      card.appendChild(media);
      media.focus();
    });
  });
}

/* ------------------------------------------------------------------------
   Carousels: scroll-snap track + prev/next + generated dots
   ------------------------------------------------------------------------ */
function initCarousels() {
  $$('[data-carousel]').forEach(function (carousel) {
    var track = $('[data-carousel-track]', carousel);
    if (!track) return;
    var slides = $$('.carousel__slide', track);
    var prev = $('[data-carousel-prev]', carousel);
    var next = $('[data-carousel-next]', carousel);
    var dotsWrap = $('[data-carousel-dots]', carousel);
    var dots = [];
    var ticking = false;
    var behavior = function () { return reducedMotion.matches ? 'auto' : 'smooth'; };

    function gap() { return parseFloat(getComputedStyle(track).columnGap) || 0; }
    function stepSize() { return slides.length ? slides[0].getBoundingClientRect().width + gap() : track.clientWidth; }

    function positions() {
      var visible = Math.max(1, Math.round((track.clientWidth + gap()) / stepSize()));
      return Math.max(1, slides.length - visible + 1);
    }

    function buildDots() {
      if (!dotsWrap) return;
      var countNeeded = positions();
      if (dots.length === countNeeded) return;
      dotsWrap.textContent = '';
      dots = [];
      for (var i = 0; i < countNeeded; i++) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel__dot';
        dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        dot.addEventListener('click', goTo.bind(null, i));
        dotsWrap.appendChild(dot);
        dots.push(dot);
      }
    }

    function goTo(index) { track.scrollTo({ left: index * stepSize(), behavior: behavior() }); }

    function update() {
      var max = track.scrollWidth - track.clientWidth;
      var index = Math.min(Math.round(track.scrollLeft / stepSize()), dots.length - 1);
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= max - 2;
      dots.forEach(function (dot, i) { dot.setAttribute('aria-current', String(i === index)); });
      carousel.classList.toggle('is-static', max <= 2);
    }

    function refresh() { buildDots(); update(); }

    if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -stepSize(), behavior: behavior() }); });
    if (next) next.addEventListener('click', function () { track.scrollBy({ left: stepSize(), behavior: behavior() }); });

    track.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { ticking = false; update(); });
    }, { passive: true });

    if ('ResizeObserver' in window) new ResizeObserver(refresh).observe(track);
    else window.addEventListener('resize', refresh);
    refresh();
  });
}

/* ------------------------------------------------------------------------
   Testimonials: one featured review at a time. Autoplay is driven by the
   progress bar's CSS animation (its animationend advances the slide), so
   pausing on hover/focus/off-screen just pauses the animation. No autoplay
   when the visitor prefers reduced motion.
   ------------------------------------------------------------------------ */
function initTestimonials() {
  $$('[data-testimonials]').forEach(function (stage) {
    var slides = $$('[data-tm-slide]', stage);
    if (slides.length < 2) return;
    var people = $$('[data-tm-go]', stage);
    var count = $('[data-tm-count]', stage);
    var bar = $('[data-tm-progress]', stage);
    var toggle = $('[data-tm-toggle]', stage);
    var live = $('[data-tm-slides]', stage);
    var index = 0;
    var stopped = reducedMotion.matches;
    var holds = {};
    var touchX = null;

    function pad(n) { return (n < 10 ? '0' : '') + n; }

    function setHold(reason, on) {
      if (on) holds[reason] = true; else delete holds[reason];
      stage.classList.toggle('is-paused', Object.keys(holds).length > 0);
    }

    function restartBar() {
      if (!bar) return;
      bar.classList.remove('is-running');
      if (stopped) return;
      void bar.offsetWidth; // restart the CSS animation
      bar.classList.add('is-running');
    }

    function go(i, fromUser) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (slide, n) { slide.classList.toggle('is-active', n === index); });
      people.forEach(function (btn, n) {
        btn.classList.toggle('is-active', n === index);
        if (n === index) btn.setAttribute('aria-current', 'true'); else btn.removeAttribute('aria-current');
      });
      if (count) count.textContent = pad(index + 1) + ' / ' + pad(slides.length);
      // Announce only changes the visitor asked for, not autoplay ticks
      if (live) live.setAttribute('aria-live', fromUser ? 'polite' : 'off');
      restartBar();
    }

    function setStopped(value) {
      stopped = value;
      if (toggle) {
        toggle.setAttribute('aria-label', stopped ? 'Play automatic slideshow' : 'Pause automatic slideshow');
        $('use', toggle).setAttribute('href', stopped ? '#i-play' : '#i-pause');
      }
      restartBar();
    }

    if (bar) bar.addEventListener('animationend', function () { go(index + 1, false); });

    $('[data-tm-prev]', stage).addEventListener('click', function () { go(index - 1, true); });
    $('[data-tm-next]', stage).addEventListener('click', function () { go(index + 1, true); });
    people.forEach(function (btn) {
      btn.addEventListener('click', function () { go(+btn.getAttribute('data-tm-go'), true); });
    });
    // Reduced motion: no autoplay at all, so the play/pause control is not needed
    if (toggle && reducedMotion.matches) toggle.hidden = true;
    else if (toggle) toggle.addEventListener('click', function () { setStopped(!stopped); });

    stage.addEventListener('mouseenter', function () { setHold('hover', true); });
    stage.addEventListener('mouseleave', function () { setHold('hover', false); });
    stage.addEventListener('focusin', function () { setHold('focus', true); });
    stage.addEventListener('focusout', function (event) {
      if (!stage.contains(event.relatedTarget)) setHold('focus', false);
    });

    stage.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') { event.preventDefault(); go(index - 1, true); }
      else if (event.key === 'ArrowRight') { event.preventDefault(); go(index + 1, true); }
    });

    // Swipe on touch screens
    stage.addEventListener('touchstart', function (event) { touchX = event.touches[0].clientX; }, { passive: true });
    stage.addEventListener('touchend', function (event) {
      if (touchX === null) return;
      var dx = event.changedTouches[0].clientX - touchX;
      touchX = null;
      if (Math.abs(dx) > 45) go(index + (dx < 0 ? 1 : -1), true);
    }, { passive: true });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        setHold('offscreen', !entries[0].isIntersecting);
      }, { threshold: 0.3 }).observe(stage);
    }
    document.addEventListener('visibilitychange', function () { setHold('hidden', document.hidden); });

    setStopped(stopped);
    go(0, false);
  });
}

/* ------------------------------------------------------------------------
   Footer year
   ------------------------------------------------------------------------ */
function initYear() {
  $$('[data-year]').forEach(function (el) { el.textContent = String(new Date().getFullYear()); });
}

function init() {
  initReveal();
  initHeader();
  initNav();
  initAccordions();
  initSurveyForm();
  initVideos();
  initCarousels();
  initTestimonials();
  initPlannedLinks();
  initSmoothScroll();
  initMobileCta();
  initYear();
}

/* Safe to call more than once (React Strict Mode runs effects twice in dev). */
export function initSite() {
  if (window.__siteInit) return;
  window.__siteInit = true;

  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  desktopNav = window.matchMedia('(min-width: 75em)');
  finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

  // If the no-JS fallback kicked in while the page was still loading,
  // hand control back to the scripted behaviour now that it's running.
  document.documentElement.classList.remove('js-fallback');

  init();
}
