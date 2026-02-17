// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Validate form
        if (!name || !email || !subject || !message) {
            showNotification('Lütfen tüm alanları doldurunuz!', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Lütfen geçerli bir email adresi giriniz!', 'error');
            return;
        }

        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Gönderiliyor...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            showNotification('Mesajınız başarıyla gönderildi! Teşekkür ederiz.', 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    const style = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        animation: slideInRight 0.5s ease-out;
        font-weight: 600;
        max-width: 300px;
    `;

    notification.setAttribute('style', style);
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out forwards';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

// Add keyframe animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }

    .nav-menu a.active {
        color: #6366f1;
    }
`;
document.head.appendChild(style);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards and skill items
document.querySelectorAll('.project-card, .skill-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add fade-in animation
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(fadeInStyle);

// Counter Animation for stats
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const originalText = element.textContent;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + originalText.replace(/\d+/, '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + originalText.replace(/\d+/, '');
        }
    }, 16);
}

// Animate stats when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stat = entry.target.querySelector('h3');
            if (stat && !stat.classList.contains('animated')) {
                const text = stat.textContent;
                const number = parseInt(text);
                animateCounter(stat, number);
                stat.classList.add('animated');
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollY = window.pageYOffset;
        hero.style.backgroundPosition = `0 ${scrollY * 0.5}px`;
    }
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add scroll-to-top button functionality
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const navbar = document.querySelector('.navbar');

    if (scrollPosition > 100) {
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Mobile menu close on outside click
document.addEventListener('click', (e) => {
    const navbar = document.querySelector('.navbar');
    const isClickInsideNav = navbar && navbar.contains(e.target);
    if (!isClickInsideNav && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============= Creative Animations & Interactions =============

// Floating elements interaction
const floatingElements = document.querySelectorAll('.hero > div[style*="animation"]');
floatingElements.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        // Add glitch effect on click
        element.classList.add('glitch-text');
        element.style.transform = 'scale(1.2)';

        setTimeout(() => {
            element.classList.remove('glitch-text');
            element.style.transform = 'scale(1)';
        }, 300);

        // Create shockwave effect
        createShockwave(e);
    });

    // Random emoji reactions on hover
    element.addEventListener('mouseenter', () => {
        const reactions = ['🔥', '⚡', '💪', '🎯', '🚀'];
        const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];

        const tooltip = document.createElement('div');
        tooltip.textContent = randomReaction;
        tooltip.style.position = 'absolute';
        tooltip.style.fontSize = '1.5rem';
        tooltip.style.animation = 'float 0.8s ease-out forwards';
        tooltip.style.pointerEvents = 'none';
        document.body.appendChild(tooltip);

        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + 'px';
        tooltip.style.top = rect.top + 'px';

        setTimeout(() => tooltip.remove(), 800);
    });
});

// Create shockwave effect
function createShockwave(e) {
    const shockwave = document.createElement('div');
    shockwave.className = 'shockwave';

    const rect = e.target.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    shockwave.style.left = x + 'px';
    shockwave.style.top = y + 'px';
    document.body.appendChild(shockwave);

    setTimeout(() => shockwave.remove(), 1500);
}

// Creative badges interaction
const creativeBadges = document.querySelectorAll('.creative-badge');
creativeBadges.forEach((badge, index) => {
    badge.addEventListener('mouseenter', () => {
        badge.style.transform = 'scale(1.1) rotateZ(5deg)';
        badge.style.boxShadow = '0 10px 30px rgba(249, 115, 22, 0.4)';
    });

    badge.addEventListener('mouseleave', () => {
        badge.style.transform = 'scale(1) rotateZ(0deg)';
        badge.style.boxShadow = '';
    });

    badge.addEventListener('click', () => {
        // Glitch effect on click
        const oldText = badge.textContent;
        const emoji = badge.querySelector('span:first-child').textContent;
        const titles = ['🤖 Yazılım Savaşçısı', '⚙️ Mühendis', '💻 Kodcu'];

        let currentIndex = index % 3;
        let clickCount = 0;

        const glitchInterval = setInterval(() => {
            clickCount++;
            currentIndex = (currentIndex + 1) % 3;
            badge.textContent = titles[currentIndex];

            if (clickCount > 8) {
                clearInterval(glitchInterval);
                badge.textContent = oldText;
            }
        }, 100);
    });
});

// ============= Moving Vehicles Interaction =============
const movingVehicles = document.querySelectorAll('.moving-vehicle');
movingVehicles.forEach((vehicle, index) => {
    vehicle.addEventListener('click', (e) => {
        // Explosion effect
        createExplosion(e);

        // Flash effect on vehicle
        vehicle.style.filter = 'brightness(2) drop-shadow(0 0 30px #f97316)';
        setTimeout(() => {
            vehicle.style.filter = 'drop-shadow(0 0 10px rgba(37, 99, 235, 0.4))';
        }, 300);
    });

    vehicle.addEventListener('mouseenter', () => {
        vehicle.style.fontSize = '3.5rem';
        vehicle.style.filter = 'drop-shadow(0 0 25px rgba(249, 115, 22, 0.9)) brightness(1.3)';
    });

    vehicle.addEventListener('mouseleave', () => {
        vehicle.style.fontSize = '3rem';
        vehicle.style.filter = 'drop-shadow(0 0 10px rgba(37, 99, 235, 0.4))';
    });
});

function createExplosion(e) {
    const explosions = ['💥', '🔥', '⚡', '✨', '🌟'];
    const randomExplosion = explosions[Math.floor(Math.random() * explosions.length)];

    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.textContent = randomExplosion;
        particle.style.position = 'fixed';
        particle.style.fontSize = '2rem';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';

        const rect = e.target.getBoundingClientRect();
        particle.style.left = rect.left + 'px';
        particle.style.top = rect.top + 'px';

        document.body.appendChild(particle);

        // Random direction explosion
        const angle = (Math.PI * 2 * i) / 5;
        const velocity = 200;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        let x = rect.left;
        let y = rect.top;
        let time = 0;
        const duration = 1000;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = elapsed / duration;

            if (progress < 1) {
                x += vx * 0.016;
                y += vy * 0.016;

                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.opacity = 1 - progress;

                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };

        animate();
    }
}

// Buttons animation on hover
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(1.1) drop-shadow(0 0 15px rgba(249, 115, 22, 0.6))';
    });

    button.addEventListener('mouseleave', function() {
        this.style.filter = '';
    });

    // Sword slash effect on click
    button.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-primary')) {
            createSwordSlash(e);
        }
    });
});

// Create sword slash effect
function createSwordSlash(e) {
    const rect = e.target.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const slash = document.createElement('div');
    slash.style.position = 'fixed';
    slash.style.fontSize = '2rem';
    slash.style.left = x + 'px';
    slash.style.top = y + 'px';
    slash.textContent = '🗡️';
    slash.className = 'sword-effect';
    document.body.appendChild(slash);

    setTimeout(() => slash.remove(), 1000);
}

// Engineer hammer effect on certain elements
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.addEventListener('click', function() {
        const hammer = document.createElement('div');
        hammer.style.position = 'fixed';
        hammer.style.fontSize = '2rem';
        hammer.style.pointerEvents = 'none';
        hammer.textContent = '🔨';
        hammer.className = 'hammer-icon';
        document.body.appendChild(hammer);

        // Random position around card
        const rect = this.getBoundingClientRect();
        const randomX = rect.left + Math.random() * rect.width;
        const randomY = rect.top + Math.random() * rect.height;

        hammer.style.left = randomX + 'px';
        hammer.style.top = randomY + 'px';

        setTimeout(() => hammer.remove(), 1000);
    });
});

// Terminator eyes effect on hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    heroTitle.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 30px #dc2626, 0 0 50px #f97316';
        this.style.filter = 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.8))';
    });

    heroTitle.addEventListener('mouseleave', function() {
        this.style.textShadow = '';
        this.style.filter = '';
    });
}

// Random "warrior code" messages in console
const messages = [
    '🤖 Welcome, Code Warrior!',
    '⚙️ Engineering mode: ACTIVATED',
    '💻 Compile, fight, conquer!',
    '⚡ May the code be with you!',
    '🗡️ Ready for battle? Deploy!',
    '🔧 Building the future, one line at a time'
];

const randomMessage = messages[Math.floor(Math.random() * messages.length)];
console.log(`%c${randomMessage}`, 'color: #f97316; font-weight: bold; font-size: 14px;');
console.log('%c⚡ Portfolio loaded with creative animations! ⚡', 'color: #2563eb; font-weight: bold; font-size: 12px;');

console.log('Portfolio website with multi-language support loaded successfully!');

