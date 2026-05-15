/* ============================================
   PREMIUM DARK LUXURY PORTFOLIO
   Interactive Elements & Cinematic Scroll
   ============================================ */

// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            const mobileMenu = document.getElementById('navLinks');
            const toggle = document.getElementById('mobileMenuToggle');
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                toggle.classList.remove('active');
            }
        }
    });
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Navbar background on scroll with cinematic effect
const navbar = document.getElementById('navbar');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollY = scrollY;
});

// Active nav link highlighting with smooth transitions
const navLinksElements = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinksElements.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe animated elements
document.querySelectorAll('.project-card, .skill-category, .stat, .contact-link, .certification-card, .achievement-item, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Parallax effect for hero section
const heroVisual = document.querySelector('.hero-visual');
if (heroVisual) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition < window.innerHeight) {
            heroVisual.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    });
}

// Mouse tracking for gradient orb
const gradientOrb = document.querySelector('.gradient-orb');
if (gradientOrb) {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        gradientOrb.style.background = `radial-gradient(circle at ${30 + x * 20}% ${30 + y * 20}%, rgba(206, 179, 171, 0.15), transparent 70%)`;
    });
}

// Project card hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Skill list item hover animation
const skillItems = document.querySelectorAll('.skill-list li');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.paddingLeft = 'var(--spacing-lg)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.paddingLeft = 'var(--spacing-md)';
    });
});

// Contact link hover effect
const contactLinks = document.querySelectorAll('.contact-link');
contactLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Stat counter animation
const stats = document.querySelectorAll('.stat-number');
const animateCounters = () => {
    stats.forEach(stat => {
        const text = stat.textContent;
        const target = parseInt(text);
        const isPercentage = text.includes('%');
        const isPlus = text.includes('+');
        const increment = target / 50;
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                let displayValue = Math.floor(current);
                if (isPercentage) {
                    stat.textContent = displayValue + '%';
                } else if (isPlus) {
                    stat.textContent = displayValue + '+';
                } else {
                    stat.textContent = displayValue + 'M+';
                }
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = text;
            }
        };

        // Trigger animation when stat comes into view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.unobserve(stat);
            }
        }, { threshold: 0.5 });

        observer.observe(stat);
    });
};

animateCounters();

// Smooth page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Prevent layout shift on scroll
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.style.scrollbarGutter = 'stable';
});

// Add subtle cursor effect
const cursorDot = document.createElement('div');
cursorDot.style.cssText = `
    position: fixed;
    width: 8px;
    height: 8px;
    background: rgba(206, 179, 171, 0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    display: none;
`;
document.body.appendChild(cursorDot);

document.addEventListener('mousemove', (e) => {
    cursorDot.style.left = (e.clientX - 4) + 'px';
    cursorDot.style.top = (e.clientY - 4) + 'px';
    cursorDot.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
    cursorDot.style.display = 'none';
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        const mobileMenu = document.getElementById('navLinks');
        const toggle = document.getElementById('mobileMenuToggle');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            toggle.classList.remove('active');
        }
    }
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Testimonials Carousel
const carouselDots = document.querySelectorAll('.carousel-dot');
const testimonialCards = document.querySelectorAll('.testimonial-card');
let currentSlide = 0;

const showSlide = (index) => {
    // Hide all cards
    testimonialCards.forEach(card => {
        card.style.display = 'none';
        card.style.opacity = '0';
    });
    
    // Show current card
    if (testimonialCards[index]) {
        testimonialCards[index].style.display = 'block';
        setTimeout(() => {
            testimonialCards[index].style.opacity = '1';
        }, 10);
    }
    
    // Update dots
    carouselDots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    currentSlide = index;
};

// Carousel dot click handlers
carouselDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Initialize carousel - show all cards on desktop, single on mobile
const initCarousel = () => {
    if (window.innerWidth >= 768) {
        // Desktop: show all cards
        testimonialCards.forEach(card => {
            card.style.display = 'block';
            card.style.opacity = '1';
        });
        document.querySelector('.carousel-nav').style.display = 'none';
    } else {
        // Mobile: show single card with carousel
        showSlide(0);
        document.querySelector('.carousel-nav').style.display = 'flex';
    }
};

// Initialize on load and on resize
window.addEventListener('load', initCarousel);
window.addEventListener('resize', initCarousel);

// Keyboard navigation for carousel
document.addEventListener('keydown', (e) => {
    if (window.innerWidth < 768) {
        if (e.key === 'ArrowRight') {
            showSlide((currentSlide + 1) % testimonialCards.length);
        } else if (e.key === 'ArrowLeft') {
            showSlide((currentSlide - 1 + testimonialCards.length) % testimonialCards.length);
        }
    }
});

// ============================================
// SKILLS SECTION - CINEMATIC MOTION DESIGN
// ============================================

// Subtle parallax effect for expertise blocks on scroll
const skillsSection = document.querySelector('.skills');
const expertiseBlocks = document.querySelectorAll('.expertise-block');
const expertiseAtmospheres = document.querySelectorAll('.expertise-atmosphere');

if (skillsSection) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const skillsRect = skillsSection.getBoundingClientRect();
        const skillsTop = skillsRect.top + scrollY;
        const skillsBottom = skillsTop + skillsSection.offsetHeight;
        
        // Only apply parallax when section is in view
        if (scrollY + window.innerHeight > skillsTop && scrollY < skillsBottom) {
            const relativeScroll = scrollY - skillsTop + window.innerHeight;
            const parallaxAmount = relativeScroll * 0.02;
            
            expertiseAtmospheres.forEach((atmosphere, index) => {
                // Subtle parallax movement for atmospheric layers
                const offset = parallaxAmount * (index % 2 === 0 ? 1 : -1);
                atmosphere.style.transform = `translateY(${offset}px)`;
            });
        }
    });
}

// Sophisticated tag hover interaction with neighboring effects
const expertiseTags = document.querySelectorAll('.expertise-tag');

expertiseTags.forEach((tag, index) => {
    tag.addEventListener('mouseenter', function() {
        // Subtle glow effect on hover
        this.style.boxShadow = '0 8px 20px rgba(206, 179, 171, 0.15)';
        
        // Slightly dim neighboring tags
        expertiseTags.forEach((otherTag, otherIndex) => {
            if (otherIndex !== index) {
                otherTag.style.opacity = '0.6';
                otherTag.style.filter = 'blur(0.5px)';
            }
        });
    });
    
    tag.addEventListener('mouseleave', function() {
        // Reset glow
        this.style.boxShadow = '0 4px 12px rgba(206, 179, 171, 0.1)';
        
        // Restore neighboring tags
        expertiseTags.forEach((otherTag) => {
            otherTag.style.opacity = '1';
            otherTag.style.filter = 'blur(0px)';
        });
    });
});

// Subtle mouse parallax for expertise blocks
document.addEventListener('mousemove', (e) => {
    expertiseBlocks.forEach((block) => {
        const rect = block.getBoundingClientRect();
        const blockCenterX = rect.left + rect.width / 2;
        const blockCenterY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Calculate subtle parallax offset (very restrained)
        const offsetX = (mouseX - blockCenterX) * 0.01;
        const offsetY = (mouseY - blockCenterY) * 0.01;
        
        // Apply subtle transform
        block.style.transform = `perspective(1000px) rotateX(${offsetY}deg) rotateY(${offsetX}deg)`;
    });
});

// Reset parallax on mouse leave
document.addEventListener('mouseleave', () => {
    expertiseBlocks.forEach((block) => {
        block.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
});

// Atmospheric breathing effect for block overlays
const blockOverlays = document.querySelectorAll('.expertise-block::before');
// Note: CSS animations handle this, but we can enhance with JS if needed

console.log('Portfolio loaded successfully with cinematic motion design');
