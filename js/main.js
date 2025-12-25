/**
 * Modern Portfolio - Interactive JavaScript
 * Author: Your Name
 */

// ============================================
// Utilities
// ============================================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// ============================================
// Navigation
// ============================================

class Navigation {
    constructor() {
        this.navbar = $('#navbar');
        this.navLinks = $$('.nav-link');
        this.mobileMenuToggle = $('#mobileMenuToggle');
        this.navMenu = $('#navMenu');
        this.sections = $$('section[id]');

        this.init();
    }

    init() {
        this.handleScroll();
        this.setupSmoothScroll();
        this.setupMobileMenu();
        this.setupActiveLink();

        window.addEventListener('scroll', throttle(() => {
            this.handleScroll();
            this.updateActiveLink();
        }, 100));
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }

    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');

                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const target = $(`#${targetId}`);

                    if (target) {
                        const offset = 80;
                        const targetPosition = target.offsetTop - offset;

                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });

                        // Close mobile menu if open
                        this.navMenu.classList.remove('active');
                    }
                }
            });
        });
    }

    setupMobileMenu() {
        if (this.mobileMenuToggle) {
            this.mobileMenuToggle.addEventListener('click', () => {
                this.navMenu.classList.toggle('active');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!this.navMenu.contains(e.target) &&
                    !this.mobileMenuToggle.contains(e.target) &&
                    this.navMenu.classList.contains('active')) {
                    this.navMenu.classList.remove('active');
                }
            });
        }
    }

    setupActiveLink() {
        this.updateActiveLink();
    }

    updateActiveLink() {
        let current = '';
        const scrollPosition = window.scrollY + 100;

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        this.navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
}

// ============================================
// Scroll Reveal Animations
// ============================================

class ScrollReveal {
    constructor() {
        this.elements = [];
        this.init();
    }

    init() {
        this.observeElements();
        window.addEventListener('scroll', throttle(() => this.reveal(), 100));
        this.reveal();
    }

    observeElements() {
        const targets = [
            '.section-header',
            '.about-text',
            '.about-image',
            '.skill-category',
            '.project-card',
            '.info-card',
            '.contact-form'
        ];

        targets.forEach(selector => {
            const elements = $$(selector);
            elements.forEach(el => {
                if (!el.classList.contains('reveal')) {
                    el.classList.add('reveal');
                    this.elements.push(el);
                }
            });
        });
    }

    reveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        this.elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }
}

// ============================================
// Contact Form
// ============================================

class ContactForm {
    constructor() {
        this.form = $('#contactForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        // Validate form
        if (!this.validate(data)) {
            return;
        }

        // In a real application, you would send this to a server
        console.log('Form submitted:', data);

        // Show success message
        this.showMessage('success', 'Thank you! Your message has been sent successfully.');

        // Reset form
        this.form.reset();
    }

    validate(data) {
        const { name, email, subject, message } = data;

        if (!name || name.trim().length < 2) {
            this.showMessage('error', 'Please enter a valid name.');
            return false;
        }

        if (!this.isValidEmail(email)) {
            this.showMessage('error', 'Please enter a valid email address.');
            return false;
        }

        if (!subject || subject.trim().length < 3) {
            this.showMessage('error', 'Please enter a subject.');
            return false;
        }

        if (!message || message.trim().length < 10) {
            this.showMessage('error', 'Please enter a message (at least 10 characters).');
            return false;
        }

        return true;
    }

    isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    showMessage(type, message) {
        // Remove existing message if any
        const existingMessage = $('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message form-message-${type}`;
        messageDiv.textContent = message;

        // Add styles
        messageDiv.style.cssText = `
            padding: 1rem;
            margin-bottom: 1rem;
            border-radius: 0.5rem;
            font-weight: 500;
            animation: fadeInUp 0.3s ease-out;
            ${type === 'success' ?
                'background: #d1fae5; color: #065f46; border: 1px solid #6ee7b7;' :
                'background: #fee2e2; color: #991b1b; border: 1px solid #fca5a5;'
            }
        `;

        // Insert at the beginning of the form
        this.form.insertBefore(messageDiv, this.form.firstChild);

        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => messageDiv.remove(), 300);
        }, 5000);
    }
}

// ============================================
// Typing Effect for Hero Subtitle
// ============================================

class TypingEffect {
    constructor(element, texts, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) {
        this.element = element;
        this.texts = texts;
        this.typingSpeed = typingSpeed;
        this.deletingSpeed = deletingSpeed;
        this.pauseDuration = pauseDuration;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.init();
    }

    init() {
        if (this.element && this.texts.length > 0) {
            this.type();
        }
    }

    type() {
        const currentText = this.texts[this.textIndex];

        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

        if (!this.isDeleting && this.charIndex === currentText.length) {
            speed = this.pauseDuration;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
        }

        setTimeout(() => this.type(), speed);
    }
}

// ============================================
// Cursor Effect
// ============================================

class CursorEffect {
    constructor() {
        this.cursor = this.createCursor();
        this.cursorFollower = this.createCursorFollower();
        this.init();
    }

    createCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            width: 10px;
            height: 10px;
            border: 2px solid #667eea;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            display: none;
        `;
        document.body.appendChild(cursor);
        return cursor;
    }

    createCursorFollower() {
        const follower = document.createElement('div');
        follower.className = 'custom-cursor-follower';
        follower.style.cssText = `
            width: 40px;
            height: 40px;
            border: 1px solid rgba(102, 126, 234, 0.3);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9998;
            transition: transform 0.3s ease;
            display: none;
        `;
        document.body.appendChild(follower);
        return follower;
    }

    init() {
        // Only show custom cursor on larger screens
        if (window.innerWidth > 768) {
            this.cursor.style.display = 'block';
            this.cursorFollower.style.display = 'block';

            document.addEventListener('mousemove', (e) => {
                this.cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
                this.cursorFollower.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
            });

            // Add hover effects
            const interactiveElements = $$('a, button, .btn, .project-card, .skill-tag');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    this.cursor.style.transform += ' scale(1.5)';
                    this.cursorFollower.style.transform += ' scale(1.5)';
                });

                el.addEventListener('mouseleave', () => {
                    this.cursor.style.transform = this.cursor.style.transform.replace(' scale(1.5)', '');
                    this.cursorFollower.style.transform = this.cursorFollower.style.transform.replace(' scale(1.5)', '');
                });
            });
        }
    }
}

// ============================================
// Particle Background (Optional Enhancement)
// ============================================

class ParticleBackground {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.particleCount = 50;
        this.init();
    }

    init() {
        if (!this.container) return;

        // Create canvas
        this.canvas = document.createElement('canvas');
        this.canvas.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        `;
        this.container.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.resize();
        this.createParticles();
        this.animate();

        window.addEventListener('resize', debounce(() => this.resize(), 250));
    }

    resize() {
        this.canvas.width = this.container.offsetWidth;
        this.canvas.height = this.container.offsetHeight;
    }

    createParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(102, 126, 234, 0.3)';
            this.ctx.fill();
        });

        // Draw connections
        this.particles.forEach((p1, i) => {
            this.particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = `rgba(102, 126, 234, ${0.2 * (1 - distance / 100)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            });
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// Project Card Tilt Effect
// ============================================

class TiltEffect {
    constructor() {
        this.cards = $$('.project-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => this.handleMouseMove(e, card));
            card.addEventListener('mouseleave', () => this.handleMouseLeave(card));
        });
    }

    handleMouseMove(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    }

    handleMouseLeave(card) {
        card.style.transform = '';
    }
}

// ============================================
// Stats Counter Animation
// ============================================

class StatsCounter {
    constructor() {
        this.counters = $$('.stat-number');
        this.animated = new Set();
        this.init();
    }

    init() {
        window.addEventListener('scroll', throttle(() => this.checkCounters(), 100));
        this.checkCounters();
    }

    checkCounters() {
        this.counters.forEach(counter => {
            if (this.animated.has(counter)) return;

            const rect = counter.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                this.animateCounter(counter);
                this.animated.add(counter);
            }
        });
    }

    animateCounter(counter) {
        const target = parseInt(counter.textContent);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };

        updateCounter();
    }
}

// ============================================
// Initialize Everything
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    new Navigation();
    new ScrollReveal();
    new ContactForm();
    new StatsCounter();
    new TiltEffect();

    // Optional enhancements
    if (window.innerWidth > 768) {
        new CursorEffect();
    }

    // Typing effect for hero subtitle
    const heroSubtitle = $('.hero-subtitle');
    if (heroSubtitle) {
        new TypingEffect(heroSubtitle, [
            'Creative Developer & Designer',
            'Frontend Specialist',
            'UI/UX Enthusiast',
            'Problem Solver'
        ]);
    }

    // Optional: Add particle background to hero
    const heroBackground = $('.hero-background');
    if (heroBackground && window.innerWidth > 768) {
        // new ParticleBackground(heroBackground);
    }

    // Log to console
    console.log('%c🚀 Portfolio Loaded Successfully!', 'color: #667eea; font-size: 16px; font-weight: bold;');
    console.log('%cMade with ❤️ and modern web technologies', 'color: #718096; font-size: 12px;');
});

// Performance optimization: Lazy load images when they come into view
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    $$('img[data-src]').forEach(img => imageObserver.observe(img));
}
