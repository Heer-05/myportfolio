# Customization Guide

Complete guide to personalizing your premium dark luxury portfolio.

## 🎨 Color Customization

### Primary Colors
Edit the CSS variables in `styles.css` (lines 8-18):

```css
:root {
    /* Background Colors */
    --color-bg: #0a0a0a;              /* Main background */
    --color-bg-secondary: #121212;    /* Secondary background */
    --color-bg-tertiary: #1a1a1a;     /* Tertiary background */
    
    /* Text Colors */
    --color-text: #e8e8e8;            /* Primary text */
    --color-text-secondary: #a8a8a8;  /* Secondary text */
    --color-text-tertiary: #808080;   /* Tertiary text */
    
    /* Accent Colors */
    --color-accent: #d4af37;          /* Gold accent */
    --color-accent-light: #e8c547;    /* Light gold */
    
    /* Border Colors */
    --color-border: #2a2a2a;          /* Primary border */
    --color-border-light: #3a3a3a;    /* Light border */
}
```

### Alternative Color Schemes

#### Platinum Luxury
```css
--color-accent: #c0c0c0;
--color-accent-light: #e8e8e8;
```

#### Rose Gold
```css
--color-accent: #b76e79;
--color-accent-light: #d4a5a5;
```

#### Emerald Luxury
```css
--color-accent: #2d5a4a;
--color-accent-light: #3d7a5a;
```

#### Sapphire
```css
--color-accent: #0f3460;
--color-accent-light: #1f5a90;
```

## 📝 Content Updates

### Hero Section
**File**: `index.html` (lines 30-50)

```html
<!-- Update name -->
<h1 class="hero-title">
    <span class="title-line">Your Full Name</span>
</h1>

<!-- Update professional title -->
<p class="hero-subtitle">Your Professional Title</p>

<!-- Update description -->
<p class="hero-description">
    Your compelling professional summary. 
    Highlight your unique value proposition.
</p>
```

### Work Projects
**File**: `index.html` (lines 65-120)

Each project card follows this structure:
```html
<article class="work-card">
    <div class="work-card-header">
        <h3>Project Title</h3>
        <span class="work-tag">Category</span>
    </div>
    <p class="work-description">
        Detailed project description highlighting impact and methodology.
    </p>
    <div class="work-tech">
        <span class="tech-badge">Technology</span>
        <span class="tech-badge">Technology</span>
    </div>
    <a href="project-url" class="work-link">View Project →</a>
</article>
```

**Tips for compelling project descriptions:**
- Start with the problem solved
- Highlight technical approach
- Mention measurable results
- Keep to 2-3 sentences

### Skills & Expertise
**File**: `index.html` (lines 125-160)

```html
<div class="skill-category">
    <h4>Category Name</h4>
    <ul class="skill-list">
        <li>Skill or Technology</li>
        <li>Skill or Technology</li>
        <li>Skill or Technology</li>
    </ul>
</div>
```

**Suggested categories for AI/ML:**
- Machine Learning & Deep Learning
- Data Analysis & Visualization
- Cloud & Infrastructure
- Programming Languages
- Tools & Frameworks

### About Section
**File**: `index.html` (lines 165-195)

```html
<p>
    Your professional narrative. 
    Share your journey, philosophy, and what drives you.
</p>
```

**Statistics to highlight:**
```html
<div class="stat">
    <div class="stat-number">50+</div>
    <div class="stat-label">Projects Completed</div>
</div>
```

### Contact Information
**File**: `index.html` (lines 200-220)

```html
<a href="mailto:your.email@example.com" class="contact-link">
    <span class="contact-label">Email</span>
    <span class="contact-value">your.email@example.com</span>
</a>

<a href="https://linkedin.com/in/yourprofile" class="contact-link" target="_blank">
    <span class="contact-label">LinkedIn</span>
    <span class="contact-value">linkedin.com/in/yourprofile</span>
</a>

<a href="https://github.com/yourprofile" class="contact-link" target="_blank">
    <span class="contact-label">GitHub</span>
    <span class="contact-value">github.com/yourprofile</span>
</a>
```

## 🎬 Animation Customization

### Transition Speed
In `styles.css`, modify these variables:

```css
--transition-smooth: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
```

**Faster animations:**
```css
--transition-smooth: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

**Slower animations:**
```css
--transition-smooth: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 1s cubic-bezier(0.4, 0, 0.2, 1);
```

### Disable Animations
Add to `styles.css`:
```css
* {
    animation: none !important;
    transition: none !important;
}
```

### Modify Hover Effects
In `styles.css`, find `.work-card:hover` and adjust:
```css
.work-card:hover {
    transform: translateY(-8px);  /* Increase/decrease lift */
    box-shadow: 0 8px 32px rgba(212, 175, 55, 0.1);  /* Adjust shadow */
}
```

## 📐 Typography Customization

### Font Families
In `styles.css`:

```css
--font-family-primary: 'Segoe UI', Trebuchet MS, sans-serif;
--font-family-display: 'Georgia', serif;
```

**Alternative combinations:**

**Modern:**
```css
--font-family-primary: 'Inter', 'Helvetica Neue', sans-serif;
--font-family-display: 'Poppins', sans-serif;
```

**Classic:**
```css
--font-family-primary: 'Garamond', serif;
--font-family-display: 'Playfair Display', serif;
```

**Tech-forward:**
```css
--font-family-primary: 'IBM Plex Mono', monospace;
--font-family-display: 'IBM Plex Sans', sans-serif;
```

### Font Sizes
Adjust in `styles.css`:

```css
h1 { font-size: 3.5rem; }    /* Hero title */
h2 { font-size: 2.5rem; }    /* Section titles */
h3 { font-size: 1.5rem; }    /* Card titles */
p { font-size: 1rem; }       /* Body text */
```

## 🎯 Layout Customization

### Hero Section Layout
Change from 2-column to full-width:

In `styles.css`, find `.hero-content`:
```css
.hero-content {
    grid-template-columns: 1fr;  /* Change from 1fr 1fr */
    gap: var(--spacing-3xl);
}
```

### Work Grid Columns
In `styles.css`, find `.work-grid`:
```css
.work-grid {
    grid-template-columns: repeat(2, 1fr);  /* 2 columns instead of auto-fit */
    gap: var(--spacing-2xl);
}
```

### Skills Grid Layout
In `styles.css`, find `.skills-grid`:
```css
.skills-grid {
    grid-template-columns: repeat(2, 1fr);  /* 2 columns instead of auto-fit */
    gap: var(--spacing-2xl);
}
```

## 🔧 Advanced Customization

### Add Custom Sections

1. Add HTML in `index.html`:
```html
<section id="testimonials" class="testimonials">
    <div class="section-header">
        <h2>Testimonials</h2>
    </div>
    <!-- Your content -->
</section>
```

2. Add CSS in `styles.css`:
```css
.testimonials {
    background: var(--color-bg-secondary);
    padding: var(--spacing-3xl) var(--spacing-lg);
}
```

3. Update navigation in `index.html`:
```html
<li><a href="#testimonials" class="nav-link">Testimonials</a></li>
```

### Add Blog Section

```html
<section id="blog" class="blog">
    <div class="section-header">
        <h2>Latest Articles</h2>
    </div>
    <div class="blog-grid">
        <article class="blog-card">
            <h3>Article Title</h3>
            <p class="blog-date">May 15, 2024</p>
            <p class="blog-excerpt">Article summary...</p>
            <a href="#" class="blog-link">Read More →</a>
        </article>
    </div>
</section>
```

### Add Image Gallery

```html
<section id="gallery" class="gallery">
    <div class="section-header">
        <h2>Visual Work</h2>
    </div>
    <div class="gallery-grid">
        <img src="image1.jpg" alt="Project image" class="gallery-image">
        <img src="image2.jpg" alt="Project image" class="gallery-image">
    </div>
</section>
```

## 📱 Mobile Optimization

### Adjust Mobile Breakpoints
In `styles.css`, modify media queries:

```css
@media (max-width: 1024px) {
    /* Tablet adjustments */
}

@media (max-width: 768px) {
    /* Mobile adjustments */
}

@media (max-width: 480px) {
    /* Small mobile adjustments */
}
```

### Test Responsiveness
1. Open DevTools (F12)
2. Click device toolbar icon
3. Test on various screen sizes
4. Adjust CSS as needed

## 🚀 Performance Optimization

### Reduce Animation Load
In `script.js`, comment out animations you don't need:

```javascript
// Disable parallax effect
// window.addEventListener('scroll', () => { ... });

// Disable mouse tracking
// document.addEventListener('mousemove', (e) => { ... });
```

### Optimize Images
- Use WebP format when possible
- Compress images before uploading
- Use appropriate image sizes

### Minify Code
For production, minify CSS and JavaScript:
- Use online minifiers
- Or use build tools like Webpack

## 🎓 Best Practices

1. **Keep it Updated**: Regularly update projects and skills
2. **Use High-Quality Content**: Professional descriptions and images
3. **Test Thoroughly**: Check on multiple devices and browsers
4. **Maintain Consistency**: Follow the design system
5. **Optimize Performance**: Monitor load times
6. **Backup Original**: Keep a copy before major changes

## 📊 Analytics Integration

Add Google Analytics:
```html
<!-- Add before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🔐 Security Notes

- Keep contact information current
- Use HTTPS when deployed
- Validate any forms before submission
- Protect sensitive information

---

**Need help? Refer to the inline comments in the code files.**
