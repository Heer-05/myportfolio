# Harshita Singh — Premium Dark Luxury Portfolio

A sophisticated, cinematic portfolio website for an AI/ML Engineer and Data Analyst. Built with premium dark luxury aesthetics, minimal design, and emotionally impactful interactions.

## 🎨 Design Philosophy

This portfolio embodies:
- **Dark Luxury**: Deep blacks with gold accents for refined elegance
- **Cinematic**: Smooth animations and thoughtful motion design
- **Editorial**: Typography-driven hierarchy and composition
- **Minimal**: Negative space and purposeful design
- **Intelligent**: Precision in every detail, reflecting technical expertise

## 📁 File Structure

```
.
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and animations
├── script.js           # Interactive elements and animations
└── README.md           # This file
```

## 🚀 Getting Started

### Quick Start
1. Open `index.html` in your web browser
2. No build process or dependencies required
3. Works on all modern browsers

### Local Development
```bash
# Using Python (if available)
python -m http.server 8000

# Using Node.js (if available)
npx http-server

# Then visit: http://localhost:8000
```

## 🎯 Key Features

### Visual Design
- **Color Palette**: Deep blacks (#0a0a0a) with gold accents (#d4af37)
- **Typography**: Georgia serif for headings, clean sans-serif for body
- **Spacing**: Generous negative space for premium feel
- **Animations**: Smooth, purposeful transitions (no excessive effects)

### Sections

#### Hero Section
- Gradient text title with floating animation
- Compelling subtitle and description
- Dual CTA buttons (primary and secondary)
- Animated gradient orb with mouse tracking

#### Work Section
- 4 project cards with hover effects
- Project descriptions and tech stacks
- Category tags and project links
- Staggered fade-in animations

#### Skills Section
- 4 expertise categories
- Interactive skill lists with arrow indicators
- Smooth hover animations
- Professional organization

#### About Section
- Personal narrative
- Key statistics with counter animations
- Professional positioning
- Grid-based layout

#### Contact Section
- Multiple contact methods
- Email, LinkedIn, GitHub links
- Hover elevation effects
- Professional presentation

## 🎨 Customization Guide

### Update Personal Information

**In `index.html`:**
```html
<!-- Update name -->
<h1 class="hero-title">
    <span class="title-line">Your Name</span>
</h1>

<!-- Update subtitle -->
<p class="hero-subtitle">Your Professional Title</p>

<!-- Update description -->
<p class="hero-description">Your professional summary...</p>

<!-- Update contact info -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a>
<a href="https://github.com/yourprofile">github.com/yourprofile</a>
```

### Modify Projects

Replace the project cards in the Work section:
```html
<article class="work-card">
    <div class="work-card-header">
        <h3>Your Project Title</h3>
        <span class="work-tag">Category</span>
    </div>
    <p class="work-description">Project description...</p>
    <div class="work-tech">
        <span class="tech-badge">Technology 1</span>
        <span class="tech-badge">Technology 2</span>
    </div>
    <a href="#" class="work-link">View Project →</a>
</article>
```

### Update Skills

Modify the expertise categories:
```html
<div class="skill-category">
    <h4>Your Category</h4>
    <ul class="skill-list">
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
    </ul>
</div>
```

### Change Color Scheme

In `styles.css`, modify the CSS variables:
```css
:root {
    --color-accent: #d4af37;        /* Gold */
    --color-accent-light: #e8c547;  /* Light gold */
    --color-bg: #0a0a0a;            /* Deep black */
    --color-text: #e8e8e8;          /* Off-white */
}
```

### Adjust Statistics

Update the about section stats:
```html
<div class="stat">
    <div class="stat-number">50+</div>
    <div class="stat-label">Your Metric</div>
</div>
```

## 📱 Responsive Design

The portfolio is fully responsive:
- **Desktop**: Full multi-column layouts
- **Tablet**: Optimized grid adjustments
- **Mobile**: Single-column layouts with adjusted typography

Breakpoints:
- `768px`: Tablet adjustments
- `480px`: Mobile optimizations

## ⚡ Performance

- **No external dependencies**: Pure HTML, CSS, JavaScript
- **Optimized animations**: GPU-accelerated transforms
- **Smooth scrolling**: Native browser behavior
- **Lightweight**: ~50KB total (uncompressed)

## 🎬 Animation Details

### Entrance Animations
- Fade-in-up on page load
- Staggered card animations
- Intersection observer for scroll-triggered effects

### Interactive Animations
- Hover effects on cards and links
- Smooth color transitions
- Parallax scrolling on hero section
- Mouse-tracking gradient orb

### Micro-interactions
- Navigation underline on hover
- Skill list arrow indicators
- Button state changes
- Smooth transitions throughout

## 🔧 Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## 📝 SEO Optimization

The portfolio includes:
- Semantic HTML structure
- Proper heading hierarchy
- Meta tags for social sharing
- Accessible color contrast
- Mobile-friendly viewport

## 🎓 Best Practices Implemented

- **Accessibility**: Semantic HTML, proper contrast ratios
- **Performance**: Minimal repaints, efficient animations
- **Maintainability**: Well-organized CSS with variables
- **Scalability**: Easy to customize and extend
- **User Experience**: Smooth interactions, clear navigation

## 📄 License

This portfolio template is provided as-is for personal use.

## 💡 Tips for Maximum Impact

1. **Add Project Images**: Include screenshots in work cards
2. **Link to Live Projects**: Update project links to actual work
3. **Customize Copy**: Make descriptions specific and compelling
4. **Add More Sections**: Extend with testimonials, blog, etc.
5. **Deploy**: Use GitHub Pages, Netlify, or Vercel for free hosting

## 🚀 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push files to main branch
3. Enable GitHub Pages in settings
4. Access at `username.github.io/repo-name`

### Netlify
1. Connect your GitHub repository
2. Set build command: (leave empty)
3. Set publish directory: (leave empty)
4. Deploy

### Vercel
1. Import project from GitHub
2. Click Deploy
3. Access your live portfolio

## 📞 Support

For customization help or questions, refer to the inline comments in the code files.

---

**Created with precision and elegance for Harshita Singh**
