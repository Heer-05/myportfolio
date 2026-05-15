# Quick Reference Guide
## Premium Dark Luxury Design System

Fast lookup for colors, typography, spacing, and components.

---

## 🎨 COLOR PALETTE

| Color | Hex | Usage |
|-------|-----|-------|
| Crushed Cacao | #0F0807 | Primary background |
| Mulberry Night | #432430 | Secondary surfaces |
| Indigo Tart | #2A3548 | Tertiary backgrounds |
| Champagne Silk | #CEB3AB | Primary accent |
| Glace Apricot | #E8AC97 | Secondary accent |
| Text Primary | #F5F3F0 | Main text |
| Text Secondary | #D4CECA | Secondary text |
| Text Tertiary | #A89E96 | Tertiary text |
| Border Light | #3D3238 | Subtle borders |
| Border Medium | #5A4D52 | Standard borders |

---

## 📝 TYPOGRAPHY

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Display (H1) | Cormorant Garamond | 4rem | 400 |
| Heading 1 (H2) | Cormorant Garamond | 3rem | 400 |
| Heading 2 (H3) | Cormorant Garamond | 2rem | 400 |
| Heading 3 (H4) | Montserrat | 1.25rem | 600 |
| Body | Inter | 1rem | 400 |
| Caption | Inter | 0.75rem | 400 |

---

## 📐 SPACING SCALE

| Token | Value |
|-------|-------|
| xs | 0.5rem (8px) |
| sm | 1rem (16px) |
| md | 1.5rem (24px) |
| lg | 2rem (32px) |
| xl | 3rem (48px) |
| 2xl | 4rem (64px) |
| 3xl | 6rem (96px) |

---

## 🎯 BUTTONS

### Primary
```html
<button class="btn btn-primary">Action</button>
```
Background: Champagne Silk | Text: Crushed Cacao

### Secondary
```html
<button class="btn btn-secondary">Action</button>
```
Background: Transparent | Text: Champagne Silk

### Tertiary
```html
<button class="btn btn-tertiary">Action</button>
```
Background: Mulberry Night | Text: Champagne Silk

---

## 🎴 CARDS

### Standard
```html
<div class="card">Content</div>
```

### Elevated
```html
<div class="card-elevated">Content</div>
```

---

## 🏷️ TAGS & BADGES

### Tag
```html
<span class="tag">Label</span>
```

### Badge
```html
<span class="badge">Label</span>
```

---

## 🌑 SHADOWS

- **Small**: 0 2px 8px rgba(0, 0, 0, 0.3)
- **Medium**: 0 8px 24px rgba(0, 0, 0, 0.4)
- **Large**: 0 16px 48px rgba(0, 0, 0, 0.5)
- **Accent**: 0 4px 16px rgba(206, 179, 171, 0.1)

---

## ⚡ TRANSITIONS

- **Smooth**: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- **Slow**: 0.6s cubic-bezier(0.4, 0, 0.2, 1)
- **Quick**: 0.15s cubic-bezier(0.4, 0, 0.2, 1)

---

## 📱 RESPONSIVE BREAKPOINTS

- **Desktop**: 1200px+ (4 columns)
- **Tablet**: 768-1199px (2 columns)
- **Mobile**: 480-767px (1 column)
- **Small Mobile**: <480px (1 column)

---

## 🔤 FONT FAMILIES

- **Cormorant Garamond**: Headings (H1-H3)
- **Montserrat**: Subheadings (H4-H5), UI
- **Inter**: Body text, descriptions

---

## 📋 UTILITY CLASSES

### Text Colors
- `.text-primary` → Text Primary
- `.text-secondary` → Text Secondary
- `.text-accent` → Champagne Silk

### Spacing
- `.p-xs` to `.p-3xl` → Padding
- `.m-xs` to `.m-3xl` → Margin
- `.gap-xs` to `.gap-3xl` → Gap

### Shadows
- `.shadow-sm` → Small
- `.shadow-md` → Medium
- `.shadow-lg` → Large

### Transitions
- `.transition-smooth` → 0.3s
- `.transition-slow` → 0.6s
- `.transition-quick` → 0.15s

### Layout
- `.flex` → Flexbox
- `.grid` → Grid
- `.flex-center` → Centered

---

## 🎓 DESIGN PRINCIPLES

1. Luxury First
2. Typography Hierarchy
3. Generous Spacing
4. Subtle Motion
5. Minimal Clutter
6. Accessibility (WCAG AA)
7. Consistency
8. Refinement

---

**Design System Version**: 1.0
**Status**: Production Ready
