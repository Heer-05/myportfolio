# Motion Design System — Quick Reference
## Premium Animation Framework

Fast lookup for animations, timings, and effects.

---

## ⏱️ TIMING REFERENCE

| Duration | Value | Usage |
|----------|-------|-------|
| Quick | 150ms | Micro-interactions |
| Smooth | 300ms | Hover effects |
| Standard | 400ms | Card animations |
| Slow | 600ms | Section transitions |
| Cinematic | 800ms | Page load |
| Epic | 1000ms | Hero animations |

---

## 🎨 EASING FUNCTIONS

| Easing | Curve | Usage |
|--------|-------|-------|
| Smooth | 0.4, 0, 0.2, 1 | Primary animations |
| Elegant | 0.25, 0.46, 0.45, 0.94 | Emphasis effects |
| Refined | 0.33, 0.66, 0.66, 1 | Transitions |

---

## 🎬 ANIMATION TYPES

### Fade Animations
- `fadeIn` — Simple opacity
- `fadeInUp` — Fade + up movement
- `fadeInDown` — Fade + down movement
- `fadeInLeft` — Fade + left movement
- `fadeInRight` — Fade + right movement

### Scale Animations
- `scaleIn` — 95% → 100%
- `scaleInSmall` — 98% → 100%

### Slide Animations
- `slideInUp` — 30px up
- `slideInLeft` — 30px left
- `slideInRight` — 30px right

### Parallax Animations
- `parallaxFloat` — 20px range, 6s
- `parallaxFloatSlow` — 10px range, 8s

### Pulse Animations
- `pulse` — Opacity oscillation
- `pulseScale` — Scale + opacity

---

## 🎯 UTILITY CLASSES

### Animation Classes
```css
.animate-fade-in
.animate-fade-in-up
.animate-fade-in-down
.animate-fade-in-left
.animate-fade-in-right
.animate-scale-in
.animate-scale-in-small
.animate-slide-in-up
.animate-slide-in-left
.animate-slide-in-right
.animate-parallax-float
.animate-parallax-float-slow
.animate-pulse
.animate-pulse-scale
```

### Stagger Classes
```css
.stagger-1 through .stagger-5 (50ms increments)
.stagger-sm-1 through .stagger-sm-4 (100ms increments)
.stagger-md-1 through .stagger-md-3 (150ms increments)
.stagger-lg-1 through .stagger-lg-3 (200ms increments)
```

### Transition Classes
```css
.transition-smooth
.transition-standard
.transition-slow
.transition-color
.transition-background
.transition-border
.transition-shadow
.transition-transform
.transition-opacity
```

### Hover Effect Classes
```css
.hover-elevate-sm (4px lift)
.hover-elevate-md (8px lift)
.hover-elevate-lg (12px lift)
.hover-color-accent
.hover-bg-accent
.hover-border-accent
.hover-scale-sm (1.02x)
.hover-scale-md (1.05x)
.hover-scale-lg (1.08x)
```

### Focus Classes
```css
.focus-glow
.focus-border
```

### Scroll-Triggered Classes
```css
.scroll-fade-in
.scroll-slide-in-left
.scroll-slide-in-right
.scroll-scale-in
```

---

## 🎯 STAGGER DELAYS

| Class | Delay |
|-------|-------|
| stagger-1 | 50ms |
| stagger-2 | 100ms |
| stagger-3 | 150ms |
| stagger-4 | 200ms |
| stagger-5 | 250ms |
| stagger-sm-1 | 100ms |
| stagger-sm-2 | 200ms |
| stagger-sm-3 | 300ms |
| stagger-sm-4 | 400ms |
| stagger-md-1 | 150ms |
| stagger-md-2 | 300ms |
| stagger-md-3 | 450ms |
| stagger-lg-1 | 200ms |
| stagger-lg-2 | 400ms |
| stagger-lg-3 | 600ms |

---

## 💡 USAGE EXAMPLES

### Hero Section
```html
<h1 class="animate-fade-in-up">Title</h1>
<p class="animate-fade-in-up stagger-md-1">Subtitle</p>
<div class="animate-parallax-float">Visual</div>
```

### Card Grid
```html
<div class="animate-fade-in-up card-animate stagger-sm-1">Card 1</div>
<div class="animate-fade-in-up card-animate stagger-sm-2">Card 2</div>
<div class="animate-fade-in-up card-animate stagger-sm-3">Card 3</div>
<div class="animate-fade-in-up card-animate stagger-sm-4">Card 4</div>
```

### Hover Effects
```html
<button class="hover-elevate-md hover-color-accent">Button</button>
<a class="underline-animate">Link</a>
<div class="hover-scale-sm">Element</div>
```

### Scroll Animations
```html
<div class="scroll-fade-in">Content</div>
<div class="scroll-slide-in-left">Left Content</div>
<div class="scroll-slide-in-right">Right Content</div>
```

---

## 🎬 ANIMATION COMBINATIONS

### Fade + Scale
```css
.animate-fade-scale {
    animation: fadeInUp 800ms, scaleIn 800ms;
}
```

### Elevate + Color
```css
.hover-elevate-color:hover {
    transform: translateY(-4px);
    color: var(--color-champagne-silk);
}
```

### Scale + Border
```css
.hover-scale-border:hover {
    transform: scale(1.02);
    border-color: var(--color-champagne-silk);
}
```

---

## ⚡ PERFORMANCE TIPS

### GPU Acceleration
```css
.will-animate {
    will-change: transform, opacity;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
    /* Animations disabled */
}
```

### Mobile Optimization
- Faster animations on mobile
- Reduced parallax effect
- Maintained responsiveness

---

## 🎯 ANIMATION CHECKLIST

### DO
✓ Fade reveals
✓ Staggered animations
✓ Subtle parallax
✓ Hover elevation
✓ Smooth transitions
✓ Scroll-triggered reveals

### DON'T
✗ Bouncing animations
✗ Flashy motion
✗ Rotating elements
✗ Excessive particles
✗ Gaming-style interactions
✗ Neon motion effects

---

## 📊 COMMON PATTERNS

### Page Load Sequence
1. Hero title (0ms)
2. Hero subtitle (150ms delay)
3. Hero description (300ms delay)
4. CTA buttons (450ms delay)
5. Hero visual (parallel)

### Card Grid
1. Card 1 (100ms delay)
2. Card 2 (200ms delay)
3. Card 3 (300ms delay)
4. Card 4 (400ms delay)

### Timeline
1. Item 1 (150ms delay)
2. Item 2 (300ms delay)
3. Item 3 (450ms delay)

---

## 🔧 CUSTOMIZATION

### Change Duration
```css
:root {
    --duration-cinematic: 600ms; /* Default: 800ms */
}
```

### Change Easing
```css
:root {
    --ease-smooth: cubic-bezier(0.3, 0, 0.3, 1); /* Custom */
}
```

### Change Stagger
```css
:root {
    --stagger-sm: 80ms; /* Default: 100ms */
}
```

---

## 📚 RELATED FILES

- **motion-system.css** — Complete animation framework
- **MOTION_DESIGN_SYSTEM.md** — Full documentation
- **styles.css** — Component styling with animations

---

**Motion Design System Version**: 1.0
**Status**: Production Ready
