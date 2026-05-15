/* ============================================
   GLOBAL CINEMATIC ATMOSPHERIC MOTION SYSTEM
   JavaScript - Parallax & Interactive Effects
   ============================================ */

// ============================================
// PARALLAX INTERACTION SYSTEM
// ============================================

class AtmosphericParallaxSystem {
    constructor() {
        this.mouseX = 0;
        this.mouseY = 0;
        this.parallaxElement = null;
        this.isInitialized = false;
        
        this.init();
    }

    init() {
        // Create parallax layer if it doesn't exist
        if (!document.querySelector('.parallax-layer')) {
            this.createParallaxLayer();
        }

        this.parallaxElement = document.querySelector('.parallax-element');
        
        // Add event listeners
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        window.addEventListener('resize', () => this.handleResize());
        
        this.isInitialized = true;
    }

    createParallaxLayer() {
        const parallaxLayer = document.createElement('div');
        parallaxLayer.className = 'parallax-layer';
        
        const parallaxElement = document.createElement('div');
        parallaxElement.className = 'parallax-element';
        
        parallaxLayer.appendChild(parallaxElement);
        document.body.insertBefore(parallaxLayer, document.body.firstChild);
    }

    handleMouseMove(e) {
        if (!this.parallaxElement) return;

        // Calculate mouse position as percentage
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;

        // Update CSS variables for smooth parallax
        this.parallaxElement.style.setProperty('--mouse-x', `${x}%`);
        this.parallaxElement.style.setProperty('--mouse-y', `${y}%`);

        // Subtle parallax movement on atmospheric layers
        this.updateAtmosphericParallax(e.clientX, e.clientY);
    }

    updateAtmosphericParallax(x, y) {
        // Calculate subtle offset (very restrained)
        const offsetX = (x - window.innerWidth / 2) * 0.0005;
        const offsetY = (y - window.innerHeight / 2) * 0.0005;

        // Apply to atmospheric layers
        const atmosphericLayers = document.querySelectorAll(
            '.neural-silk-flow, .cinematic-fog, .data-flow-mesh, .ambient-depth-layer'
        );

        atmosphericLayers.forEach((layer) => {
            layer.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    }

    handleResize() {
        // Recalculate on resize if needed
        // Currently no specific resize logic needed
    }
}

// ============================================
// SCROLL-BASED ATMOSPHERIC ENHANCEMENT
// ============================================

class ScrollAtmosphericSystem {
    constructor() {
        this.scrollY = 0;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        this.scrollY = window.scrollY;

        // Subtle parallax on atmospheric layers based on scroll
        const parallaxFactor = this.scrollY * 0.0002;
        
        const atmosphericLayers = document.querySelectorAll(
            '.neural-silk-flow, .cinematic-fog, .data-flow-mesh'
        );

        atmosphericLayers.forEach((layer, index) => {
            const offset = parallaxFactor * (index + 1);
            layer.style.transform = `translateY(${offset}px)`;
        });

        // Update section atmospheres based on scroll position
        this.updateSectionAtmospheres();
    }

    updateSectionAtmospheres() {
        const sections = document.querySelectorAll('section');

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;

            if (isInView) {
                // Enhance atmospheric intensity when section is in view
                const intensity = 1 - Math.abs(rect.top) / window.innerHeight;
                const atmosphereElement = section.querySelector('::before');
                
                if (atmosphereElement) {
                    section.style.setProperty('--atmosphere-intensity', Math.max(0, intensity));
                }
            }
        });
    }
}

// ============================================
// PERFORMANCE MONITORING
// ============================================

class PerformanceMonitor {
    constructor() {
        this.frameCount = 0;
        this.lastTime = performance.now();
        this.fps = 60;
        this.init();
    }

    init() {
        // Monitor FPS and adjust animations if needed
        this.monitorPerformance();
    }

    monitorPerformance() {
        const now = performance.now();
        const delta = now - this.lastTime;

        if (delta >= 1000) {
            this.fps = this.frameCount;
            this.frameCount = 0;
            this.lastTime = now;

            // If FPS drops below 50, reduce atmospheric intensity
            if (this.fps < 50) {
                this.reduceAtmosphericIntensity();
            } else {
                this.restoreAtmosphericIntensity();
            }
        }

        this.frameCount++;
        requestAnimationFrame(() => this.monitorPerformance());
    }

    reduceAtmosphericIntensity() {
        const root = document.documentElement;
        root.style.setProperty('--atmosphere-opacity-subtle', '0.01');
        root.style.setProperty('--atmosphere-opacity-light', '0.03');
        root.style.setProperty('--atmosphere-opacity-medium', '0.04');
    }

    restoreAtmosphericIntensity() {
        const root = document.documentElement;
        root.style.setProperty('--atmosphere-opacity-subtle', '0.03');
        root.style.setProperty('--atmosphere-opacity-light', '0.06');
        root.style.setProperty('--atmosphere-opacity-medium', '0.08');
    }
}

// ============================================
// REDUCED MOTION DETECTION
// ============================================

class AccessibilitySystem {
    constructor() {
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.init();
    }

    init() {
        if (this.prefersReducedMotion) {
            this.disableAnimations();
        }

        // Listen for changes in motion preference
        window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
            if (e.matches) {
                this.disableAnimations();
            } else {
                this.enableAnimations();
            }
        });
    }

    disableAnimations() {
        const root = document.documentElement;
        root.style.setProperty('--atmosphere-opacity-subtle', '0');
        root.style.setProperty('--atmosphere-opacity-light', '0');
        root.style.setProperty('--atmosphere-opacity-medium', '0');
        root.style.setProperty('--atmosphere-opacity-visible', '0');
    }

    enableAnimations() {
        const root = document.documentElement;
        root.style.setProperty('--atmosphere-opacity-subtle', '0.03');
        root.style.setProperty('--atmosphere-opacity-light', '0.06');
        root.style.setProperty('--atmosphere-opacity-medium', '0.08');
        root.style.setProperty('--atmosphere-opacity-visible', '0.12');
    }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all atmospheric systems
    const parallaxSystem = new AtmosphericParallaxSystem();
    const scrollSystem = new ScrollAtmosphericSystem();
    const performanceMonitor = new PerformanceMonitor();
    const accessibilitySystem = new AccessibilitySystem();

    console.log('✅ Global Cinematic Atmospheric Motion System initialized');
});

// ============================================
// SMOOTH SCROLL ENHANCEMENT
// ============================================

// Enhance smooth scrolling with easing
function smoothScroll(target, duration = 1000) {
    const start = window.scrollY;
    const distance = target - start;
    let startTime = null;

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, start + distance * easeInOutCubic(progress));

        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// ============================================
// ATMOSPHERIC INTENSITY CONTROL
// ============================================

class AtmosphericIntensityController {
    constructor() {
        this.intensity = 1;
        this.targetIntensity = 1;
        this.init();
    }

    init() {
        // Listen for user interactions to adjust intensity
        document.addEventListener('click', () => this.resetIntensity());
        document.addEventListener('keydown', () => this.resetIntensity());
    }

    setIntensity(value) {
        this.targetIntensity = Math.max(0, Math.min(1, value));
        this.updateIntensity();
    }

    updateIntensity() {
        // Smooth transition to target intensity
        this.intensity += (this.targetIntensity - this.intensity) * 0.1;

        const root = document.documentElement;
        const baseOpacity = 0.06;

        root.style.setProperty(
            '--atmosphere-opacity-light',
            `${baseOpacity * this.intensity}`
        );
    }

    resetIntensity() {
        this.targetIntensity = 1;
    }
}

// Initialize intensity controller
const intensityController = new AtmosphericIntensityController();

// ============================================
// SECTION-SPECIFIC ATMOSPHERIC TRIGGERS
// ============================================

class SectionAtmosphericTriggers {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.activateSectionAtmosphere(entry.target);
                }
            });
        }, { threshold: 0.3 });

        this.sections.forEach((section) => {
            observer.observe(section);
        });
    }

    activateSectionAtmosphere(section) {
        const sectionId = section.id;

        // Subtle intensity boost for current section
        section.style.setProperty('--section-atmosphere-intensity', '1.1');

        // Reset other sections
        this.sections.forEach((s) => {
            if (s !== section) {
                s.style.setProperty('--section-atmosphere-intensity', '1');
            }
        });
    }
}

// Initialize section triggers
const sectionTriggers = new SectionAtmosphericTriggers();

// ============================================
// CINEMATIC DEPTH EFFECT
// ============================================

class CinematicDepthEffect {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.updateDepth());
    }

    updateDepth() {
        const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        
        // Subtle depth shift based on scroll
        const depthShift = scrollProgress * 0.02;
        
        const depthLayer = document.querySelector('.shadow-depth-layer');
        if (depthLayer) {
            depthLayer.style.opacity = `${0.3 + depthShift}`;
        }
    }
}

// Initialize cinematic depth
const cinematicDepth = new CinematicDepthEffect();

// ============================================
// EXPORT FOR EXTERNAL USE
// ============================================

window.AtmosphericSystem = {
    parallax: null,
    scroll: null,
    performance: null,
    accessibility: null,
    intensity: null,
    sections: null,
    depth: null,

    init() {
        this.parallax = new AtmosphericParallaxSystem();
        this.scroll = new ScrollAtmosphericSystem();
        this.performance = new PerformanceMonitor();
        this.accessibility = new AccessibilitySystem();
        this.intensity = intensityController;
        this.sections = sectionTriggers;
        this.depth = cinematicDepth;
    }
};
