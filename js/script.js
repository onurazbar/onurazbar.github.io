/**
 * Interactivity for the portfolio.
 *
 * Loaded at the end of <body>, so the DOM is already parsed and top-level
 * queries are safe. Order matters: projects.js renders the cards and i18n.js
 * defines `translations` before this file runs.
 */
(function () {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ============================================================
     * Starfield backdrop
     * ============================================================ */
    (function starfield() {
        const canvas = document.getElementById('starfield');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Three parallax layers: far stars are small, dim and slow.
        const LAYERS = [
            { count: 90, speed: 0.012, size: [0.4, 0.9], alpha: [0.25, 0.55] },
            { count: 45, speed: 0.028, size: [0.7, 1.4], alpha: [0.4, 0.8] },
            { count: 18, speed: 0.055, size: [1.0, 1.9], alpha: [0.6, 1.0] }
        ];

        let stars = [];
        let shootingStar = null;
        let nextShootingStar = 3000;
        let width = 0;
        let height = 0;
        let rafId = null;
        let lastTime = 0;

        const rand = (min, max) => min + Math.random() * (max - min);

        function build() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            // Scale the star count with the viewport so phones do less work.
            const density = Math.min(1, (width * height) / (1440 * 900));

            stars = [];
            LAYERS.forEach(layer => {
                const count = Math.round(layer.count * Math.max(0.35, density));
                for (let i = 0; i < count; i++) {
                    stars.push({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        r: rand(layer.size[0], layer.size[1]),
                        alpha: rand(layer.alpha[0], layer.alpha[1]),
                        speed: layer.speed,
                        twinkle: rand(0.6, 1.8),
                        phase: Math.random() * Math.PI * 2,
                        // A small minority of stars pick up the lime accent.
                        lime: Math.random() < 0.06
                    });
                }
            });
        }

        function spawnShootingStar() {
            const fromLeft = Math.random() < 0.5;
            shootingStar = {
                x: fromLeft ? rand(-0.1, 0.3) * width : rand(0.7, 1.1) * width,
                y: rand(0, 0.45) * height,
                vx: (fromLeft ? 1 : -1) * rand(320, 520),
                vy: rand(120, 220),
                life: 0,
                ttl: rand(0.7, 1.1)
            };
        }

        function draw(elapsed) {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < stars.length; i++) {
                const s = stars[i];
                const flicker = 0.75 + 0.25 * Math.sin(elapsed * s.twinkle + s.phase);
                ctx.globalAlpha = s.alpha * flicker;
                ctx.fillStyle = s.lime ? '#8bdc00' : '#dee2ec';
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fill();
            }

            if (shootingStar) {
                const s = shootingStar;
                const fade = 1 - s.life / s.ttl;
                const tailX = s.x - s.vx * 0.06;
                const tailY = s.y - s.vy * 0.06;

                const gradient = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
                gradient.addColorStop(0, 'rgba(139, 220, 0, 0)');
                gradient.addColorStop(1, 'rgba(190, 255, 120, ' + fade.toFixed(3) + ')');

                ctx.globalAlpha = 1;
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1.6;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(tailX, tailY);
                ctx.lineTo(s.x, s.y);
                ctx.stroke();
            }

            ctx.globalAlpha = 1;
        }

        function frame(time) {
            const dt = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0;
            lastTime = time;

            for (let i = 0; i < stars.length; i++) {
                const s = stars[i];
                s.y += s.speed * 60 * dt * 2;
                if (s.y > height + 2) {
                    s.y = -2;
                    s.x = Math.random() * width;
                }
            }

            nextShootingStar -= dt * 1000;
            if (!shootingStar && nextShootingStar <= 0) {
                spawnShootingStar();
                nextShootingStar = rand(6000, 14000);
            }
            if (shootingStar) {
                shootingStar.x += shootingStar.vx * dt;
                shootingStar.y += shootingStar.vy * dt;
                shootingStar.life += dt;
                if (shootingStar.life >= shootingStar.ttl) shootingStar = null;
            }

            draw(time / 1000);
            rafId = requestAnimationFrame(frame);
        }

        function start() {
            if (rafId !== null) return;
            lastTime = 0;
            rafId = requestAnimationFrame(frame);
        }

        function stop() {
            if (rafId === null) return;
            cancelAnimationFrame(rafId);
            rafId = null;
        }

        build();

        if (prefersReducedMotion) {
            draw(0);
        } else {
            start();
            // Don't burn cycles animating a backdrop nobody is looking at.
            document.addEventListener('visibilitychange', () => {
                document.hidden ? stop() : start();
            });
        }

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                build();
                if (prefersReducedMotion) draw(0);
            }, 180);
        });
    })();

    /* ============================================================
     * Navigation
     * ============================================================ */
    (function navigation() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        const hudBar = document.getElementById('hudBar');
        if (!hamburger || !navMenu) return;

        const closeMenu = () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        };

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navMenu.classList.toggle('active');
            hamburger.classList.toggle('active', isOpen);
            hamburger.setAttribute('aria-expanded', String(isOpen));
        });

        navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && !e.target.closest('.hud-bar')) closeMenu();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMenu();
        });

        // Condense the HUD bar once the page scrolls away from the hero.
        if (hudBar) {
            const onScroll = () => hudBar.classList.toggle('scrolled', window.scrollY > 60);
            window.addEventListener('scroll', onScroll, { passive: true });
            onScroll();
        }

        // Highlight the section currently occupying the middle of the viewport.
        const links = Array.from(navMenu.querySelectorAll('a[href^="#"]'));
        const sections = links
            .map(link => document.querySelector(link.getAttribute('href')))
            .filter(Boolean);

        if (sections.length && 'IntersectionObserver' in window) {
            const spy = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    const id = entry.target.id;
                    links.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                    });
                });
            }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

            sections.forEach(section => spy.observe(section));
        }
    })();

    /* ============================================================
     * Scroll reveals, skill gauges, counters
     * ============================================================ */
    (function reveals() {
        const revealTargets = document.querySelectorAll(
            '.section-head, .log-entry, .project-card, .skill-category, .hud-panel, ' +
            '.contact-method, .status-panel, .terminal, .portrait-frame, .eva-frame, .sat-frame'
        );

        const fillGauge = (item) => {
            const fill = item.querySelector('.gauge-fill');
            if (fill) fill.style.width = (item.dataset.level || 0) + '%';
        };

        const runCounter = (el) => {
            const target = parseInt(el.dataset.target, 10);
            if (isNaN(target)) return;

            if (prefersReducedMotion) {
                el.textContent = String(target);
                return;
            }

            const duration = 1400;
            const start = performance.now();
            const step = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                // Ease-out so the number settles rather than stopping dead.
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = String(Math.round(target * eased));
                if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        };

        if (!('IntersectionObserver' in window) || prefersReducedMotion) {
            revealTargets.forEach(el => el.classList.add('is-visible'));
            document.querySelectorAll('.skill-item').forEach(fillGauge);
            document.querySelectorAll('.counter').forEach(runCounter);
            return;
        }

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

        revealTargets.forEach(el => revealObserver.observe(el));

        const gaugeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                fillGauge(entry.target);
                gaugeObserver.unobserve(entry.target);
            });
        }, { threshold: 0.4 });

        document.querySelectorAll('.skill-item').forEach(el => gaugeObserver.observe(el));

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                runCounter(entry.target);
                counterObserver.unobserve(entry.target);
            });
        }, { threshold: 0.6 });

        document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));
    })();

    /* ============================================================
     * Hero typewriter
     * ============================================================ */
    (function typewriter() {
        const el = document.getElementById('typewriter');
        if (!el) return;

        const TYPE_MS = 55;
        const DELETE_MS = 28;
        const HOLD_MS = 1600;

        let phrases = [];
        let phraseIndex = 0;
        let charIndex = 0;
        let deleting = false;
        let timer = null;

        function currentPhrases() {
            const lang = document.body.getAttribute('data-lang') || 'tr';
            const list = translations[lang] && translations[lang].hero.typewriter;
            return Array.isArray(list) && list.length ? list : [''];
        }

        function tick() {
            const phrase = phrases[phraseIndex];

            if (!deleting) {
                charIndex++;
                el.textContent = phrase.slice(0, charIndex);
                if (charIndex >= phrase.length) {
                    deleting = true;
                    timer = setTimeout(tick, HOLD_MS);
                    return;
                }
                timer = setTimeout(tick, TYPE_MS);
                return;
            }

            charIndex--;
            el.textContent = phrase.slice(0, charIndex);
            if (charIndex <= 0) {
                deleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
            timer = setTimeout(tick, DELETE_MS);
        }

        function restart() {
            clearTimeout(timer);
            phrases = currentPhrases();
            phraseIndex = 0;
            charIndex = 0;
            deleting = false;

            if (prefersReducedMotion) {
                // Show the final state instead of animating toward it.
                el.textContent = phrases[phrases.length - 1];
                return;
            }
            timer = setTimeout(tick, 400);
        }

        // setLanguage() fires this on first paint too, which seeds the effect.
        document.addEventListener('languagechange', restart);
    })();

    /* ============================================================
     * Contact form (EmailJS)
     * ============================================================ */
    (function contactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        // Publishable client-side identifiers, not secrets.
        const EMAILJS_PUBLIC_KEY = 'HdMzC0ioZwDg9uok2';
        const EMAILJS_SERVICE_ID = 'service_s4dmrad';
        const EMAILJS_TEMPLATE_ID = 'template_wb9lis4';

        const emailjsReady = typeof emailjs !== 'undefined';
        if (emailjsReady) emailjs.init(EMAILJS_PUBLIC_KEY);

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const lang = document.body.getAttribute('data-lang') || 'tr';
            const messages = translations[lang].notifications;

            // Read through `elements` — `form.name` would resolve to the form's
            // own name property rather than the field.
            const fields = form.elements;
            const payload = {
                name: fields.name.value.trim(),
                email: fields.email.value.trim(),
                subject: fields.subject.value.trim(),
                message: fields.message.value.trim()
            };

            if (!payload.name || !payload.email || !payload.subject || !payload.message) {
                showNotification(messages.fillAll, 'error');
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
                showNotification(messages.invalidEmail, 'error');
                return;
            }

            if (!emailjsReady) {
                showNotification(messages.error, 'error');
                return;
            }

            const submitBtn = form.querySelector('button[type="submit"]');
            const label = submitBtn.querySelector('[data-i18n]') || submitBtn;
            const originalText = label.textContent;

            label.textContent = messages.sending;
            submitBtn.disabled = true;

            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload)
                .then(() => {
                    showNotification(messages.success, 'success');
                    form.reset();
                })
                .catch(() => showNotification(messages.error, 'error'))
                .finally(() => {
                    label.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    })();

    /* ============================================================
     * Notifications
     * ============================================================ */
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = 'notification notification-' + (type || 'success');
        notification.setAttribute('role', type === 'error' ? 'alert' : 'status');

        const icon = document.createElement('i');
        icon.className = type === 'error'
            ? 'fa-solid fa-triangle-exclamation'
            : 'fa-solid fa-circle-check';

        const text = document.createElement('span');
        text.textContent = message;

        notification.append(icon, text);
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('leaving');
            setTimeout(() => notification.remove(), 400);
        }, 3600);
    }
})();
