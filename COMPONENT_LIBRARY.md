# Component Library
## Premium Dark Luxury Design System

Complete documentation of all reusable components and their usage patterns.

---

## 📦 BUTTONS

### Button Variants

#### Primary Button
```html
<button class="btn btn-primary">
    Explore Work
</button>
```

**Specifications:**
- Background: Champagne Silk (#CEB3AB)
- Text: Crushed Cacao (#0F0807)
- Padding: 1rem 2rem
- Font: Montserrat 600
- Min Height: 48px
- Hover: Glace Apricot background, elevated shadow

**Usage:** Main call-to-action, primary actions

#### Secondary Button
```html
<button class="btn btn-secondary">
    Get in Touch
</button>
```

**Specifications:**
- Background: Transparent
- Text: Champagne Silk (#CEB3AB)
- Border: 1px solid Border Medium
- Padding: 1rem 2rem
- Font: Montserrat 600
- Hover: Mulberry Night background

**Usage:** Secondary actions, alternative CTAs

#### Tertiary Button
```html
<button class="btn btn-tertiary">
    Learn More
</button>
```

**Specifications:**
- Background: Mulberry Night (#432430)
- Text: Champagne Silk (#CEB3AB)
- Border: 1px solid Border Light
- Padding: 1rem 2rem
- Font: Montserrat 600
- Hover: Indigo Tart background

**Usage:** Tertiary actions, less prominent CTAs

### Button States

#### Disabled Button
```html
<button class="btn btn-primary" disabled>
    Disabled Action
</button>
```

**Specifications:**
- Opacity: 50%
- Cursor: not-allowed
- No hover effects

#### Button with Icon
```html
<button class="btn btn-primary">
    <span>Explore Work</span>
    <span class="icon">→</span>
</button>
```

---

## 🎴 CARDS

### Standard Card
```html
<div class="card">
    <h3>Card Title</h3>
    <p>Card description and content goes here.</p>
</div>
```

**Specifications:**
- Background: Mulberry Night (#432430)
- Border: 1px solid Border Light
- Padding: 2rem
- Shadow: Shadow Small
- Hover: Border Medium, Shadow Medium, translateY(-2px)

**Usage:** Project cards, content containers

### Elevated Card
```html
<div class="card-elevated">
    <h3>Featured Card</h3>
    <p>More prominent card with elevated shadow.</p>
</div>
```

**Specifications:**
- Background: Mulberry Night (#432430)
- Border: 1px solid Border Medium
- Padding: 2rem
- Shadow: Shadow Medium
- Hover: Shadow Large, translateY(-4px)

**Usage:** Featured content, highlighted sections

### Work Card (Custom)
```html
<article class="work-card">
    <div class="work-card-header">
        <h3>Project Title</h3>
        <span class="work-tag">Category</span>
    </div>
    <p class="work-description">Project description...</p>
    <div class="work-tech">
        <span class="tech-badge">Technology</span>
        <span class="tech-badge">Technology</span>
    </div>
    <a href="#" class="work-link">View Project →</a>
</article>
```

**Specifications:**
- Background: Mulberry Night (#432430)
- Border: 1px solid Border Light
- Padding: 2rem
- Shadow: Shadow Small
- Hover: Indigo Tart background, Champagne Silk border

**Usage:** Portfolio projects, case studies

---

## 📝 FORM ELEMENTS

### Text Input
```html
<input type="text" class="input" placeholder="Enter text...">
```

**Specifications:**
- Background: Crushed Cacao (#0F0807)
- Border: 1px solid Border Light
- Text: Text Primary (#F5F3F0)
- Placeholder: Text Tertiary (#A89E96)
- Padding: 1rem
- Min Height: 44px
- Focus: Border Medium, Shadow Accent

**Usage:** Text input fields, search boxes

### Textarea
```html
<textarea class="input" placeholder="Enter message..."></textarea>
```

**Specifications:**
- Background: Crushed Cacao (#0F0807)
- Border: 1px solid Border Light
- Text: Text Primary (#F5F3F0)
- Padding: 1rem
- Min Height: 120px
- Focus: Border Medium, Shadow Accent

**Usage:** Message forms, long-form input

### Form Group
```html
<div class="form-group">
    <label for="email" class="form-label">Email Address</label>
    <input type="email" id="email" class="input" placeholder="your@email.com">
</div>
```

**Specifications:**
- Label: Montserrat 600, uppercase
- Spacing: 0.5rem between label and input
- Margin Bottom: 1.5rem

**Usage:** Organized form layouts

---

## 🏷️ TAGS & BADGES

### Tag
```html
<span class="tag">Machine Learning</span>
```

**Specifications:**
- Background: Mulberry Night at 50% opacity
- Border: 1px solid Champagne Silk
- Text: Champagne Silk (#CEB3AB)
- Padding: 0.5rem 1rem
- Font: Montserrat 500, 0.75rem
- Radius: 0px

**Usage:** Category labels, skill tags, metadata

### Badge
```html
<span class="badge">Featured</span>
```

**Specifications:**
- Background: Champagne Silk (#CEB3AB)
- Text: Crushed Cacao (#0F0807)
- Padding: 0.25rem 0.75rem
- Font: Montserrat 600, 0.75rem
- Radius: 0px

**Usage:** Status indicators, highlights, badges

### Tech Badge (Custom)
```html
<span class="tech-badge">Python</span>
```

**Specifications:**
- Background: Champagne Silk at 8% opacity
- Border: 1px solid Champagne Silk at 20% opacity
- Text: Champagne Silk (#CEB3AB)
- Padding: 0.5rem 1rem
- Font: Montserrat 500, 0.8rem

**Usage:** Technology stacks, skill indicators

---

## 🔤 TYPOGRAPHY COMPONENTS

### Display Heading
```html
<h1 class="font-display">Harshita Singh</h1>
```

**Specifications:**
- Font: Cormorant Garamond 400
- Size: 4rem
- Line Height: 1.1
- Letter Spacing: -0.02em

**Usage:** Hero titles, main headings

### Heading 1
```html
<h2 class="font-h1">Selected Work</h2>
```

**Specifications:**
- Font: Cormorant Garamond 400
- Size: 3rem
- Line Height: 1.2
- Letter Spacing: -0.01em

**Usage:** Section titles

### Heading 2
```html
<h3 class="font-h2">Project Title</h3>
```

**Specifications:**
- Font: Cormorant Garamond 400
- Size: 2rem
- Line Height: 1.3
- Letter Spacing: 0em

**Usage:** Card titles, subsections

### Heading 3
```html
<h4 class="font-h3">Expertise</h4>
```

**Specifications:**
- Font: Montserrat 600
- Size: 1.25rem
- Line Height: 1.4
- Letter Spacing: 0.05em
- Text Transform: uppercase

**Usage:** Labels, small headings

### Body Text
```html
<p class="font-body">Your body text content...</p>
```

**Specifications:**
- Font: Inter 400
- Size: 1rem
- Line Height: 1.6
- Letter Spacing: 0em

**Usage:** Paragraphs, descriptions

### Body Small
```html
<p class="font-body-small">Secondary text...</p>
```

**Specifications:**
- Font: Inter 400
- Size: 0.875rem
- Line Height: 1.6
- Letter Spacing: 0em

**Usage:** Secondary descriptions, metadata

### Caption
```html
<p class="font-caption">Caption text</p>
```

**Specifications:**
- Font: Inter 400
- Size: 0.75rem
- Line Height: 1.5
- Letter Spacing: 0.02em

**Usage:** Captions, timestamps, metadata

---

## 🎨 COLOR UTILITIES

### Text Colors
```html
<p class="text-primary">Primary text</p>
<p class="text-secondary">Secondary text</p>
<p class="text-tertiary">Tertiary text</p>
<p class="text-accent">Accent text</p>
<p class="text-accent-secondary">Secondary accent</p>
```

### Background Colors
```html
<div class="bg-primary">Primary background</div>
<div class="bg-secondary">Secondary background</div>
<div class="bg-tertiary">Tertiary background</div>
```

---

## 📐 SPACING UTILITIES

### Padding
```html
<div class="p-xs">Extra small padding</div>
<div class="p-sm">Small padding</div>
<div class="p-md">Medium padding</div>
<div class="p-lg">Large padding</div>
<div class="p-xl">Extra large padding</div>
<div class="p-2xl">2x large padding</div>
<div class="p-3xl">3x large padding</div>
```

### Margin
```html
<div class="m-xs">Extra small margin</div>
<div class="m-sm">Small margin</div>
<div class="m-md">Medium margin</div>
<div class="m-lg">Large margin</div>
<div class="m-xl">Extra large margin</div>
<div class="m-2xl">2x large margin</div>
<div class="m-3xl">3x large margin</div>
```

### Gap (Flexbox/Grid)
```html
<div class="flex gap-md">
    <div>Item 1</div>
    <div>Item 2</div>
</div>
```

---

## 🌑 SHADOW UTILITIES

### Shadow Small
```html
<div class="shadow-sm">Small shadow</div>
```

### Shadow Medium
```html
<div class="shadow-md">Medium shadow</div>
```

### Shadow Large
```html
<div class="shadow-lg">Large shadow</div>
```

### Shadow Accent
```html
<div class="shadow-accent">Accent shadow</div>
```

---

## ⚡ TRANSITION UTILITIES

### Smooth Transition
```html
<div class="transition-smooth">Smooth transition</div>
```

**Duration:** 0.3s
**Easing:** cubic-bezier(0.4, 0, 0.2, 1)

### Slow Transition
```html
<div class="transition-slow">Slow transition</div>
```

**Duration:** 0.6s
**Easing:** cubic-bezier(0.4, 0, 0.2, 1)

### Quick Transition
```html
<div class="transition-quick">Quick transition</div>
```

**Duration:** 0.15s
**Easing:** cubic-bezier(0.4, 0, 0.2, 1)

---

## 🎯 LAYOUT UTILITIES

### Flexbox
```html
<div class="flex">Flex container</div>
<div class="flex-center">Centered flex</div>
<div class="flex-between">Space between flex</div>
```

### Grid
```html
<div class="grid">Grid container</div>
```

### Display
```html
<div class="hidden">Hidden element</div>
<div class="visible">Visible element</div>
<div class="invisible">Invisible element</div>
```

---

## 📱 RESPONSIVE UTILITIES

### Width
```html
<div class="w-full">Full width</div>
<div class="w-screen">Screen width</div>
```

### Height
```html
<div class="h-full">Full height</div>
<div class="h-screen">Screen height</div>
```

### Max Width
```html
<div class="max-w-sm">Small max width</div>
<div class="max-w-md">Medium max width</div>
<div class="max-w-lg">Large max width</div>
<div class="max-w-xl">Extra large max width</div>
<div class="max-w-2xl">2x large max width</div>
<div class="max-w-3xl">3x large max width</div>
<div class="max-w-4xl">4x large max width</div>
<div class="max-w-5xl">5x large max width</div>
<div class="max-w-6xl">6x large max width</div>
<div class="max-w-7xl">7x large max width</div>
```

---

## 🔗 BORDER UTILITIES

### Border Light
```html
<div class="border-light">Light border</div>
```

### Border Medium
```html
<div class="border-medium">Medium border</div>
```

### Border Accent
```html
<div class="border-accent">Accent border</div>
```

---

## 🎬 ANIMATION EXAMPLES

### Fade In Up
```html
<div style="animation: fadeInUp 0.8s ease-out;">
    Fading in from bottom
</div>
```

### Float Animation
```html
<div style="animation: float 6s ease-in-out infinite;">
    Floating element
</div>
```

---

## ♿ ACCESSIBILITY FEATURES

### Focus Visible
All interactive elements have a visible focus indicator:
```css
*:focus-visible {
    outline: 2px solid var(--color-champagne-silk);
    outline-offset: 2px;
}
```

### Keyboard Navigation
- Tab: Navigate through interactive elements
- Enter: Activate buttons and links
- Escape: Close modals (when implemented)

### Screen Reader Support
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels where needed
- Alt text for images

### Color Contrast
All text meets WCAG AA standards:
- Text Primary on Crushed Cacao: 15.2:1
- Text Secondary on Crushed Cacao: 8.1:1
- Champagne Silk on Crushed Cacao: 5.8:1

---

## 🎓 USAGE BEST PRACTICES

### Do's
✓ Use semantic HTML elements
✓ Maintain consistent spacing
✓ Follow the typography hierarchy
✓ Use design tokens for consistency
✓ Test on multiple devices
✓ Ensure keyboard accessibility
✓ Provide focus indicators

### Don'ts
✗ Don't mix color schemes randomly
✗ Don't use arbitrary spacing values
✗ Don't skip heading hierarchy
✗ Don't remove focus indicators
✗ Don't use placeholder text as labels
✗ Don't rely on color alone for meaning
✗ Don't use auto-playing animations

---

## 📋 COMPONENT CHECKLIST

When creating new components, ensure:

- [ ] Uses design tokens (colors, spacing, typography)
- [ ] Follows naming conventions
- [ ] Includes hover/active states
- [ ] Supports keyboard navigation
- [ ] Has proper focus indicators
- [ ] Meets WCAG AA contrast requirements
- [ ] Works on mobile devices
- [ ] Includes documentation
- [ ] Has clear usage examples
- [ ] Follows the design system

---

**Component Library Version**: 1.0
**Last Updated**: May 2024
**Status**: Production Ready
