# Projects Section - 2×2 Cinematic Editorial Grid

## Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    PROJECTS SECTION                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Section Label: "Featured Work"                            │
│  Heading: "Intelligent systems designed for real-world     │
│           impact and measurable outcomes."                 │
│  Subtext: "A selection of AI/ML projects spanning mental   │
│           health prediction, energy analytics, fintech     │
│           automation, and intelligent guidance systems."   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                    2×2 GRID LAYOUT                          │
├──────────────────────┬──────────────────────┤
│                      │                      │
│   COGNIFIT           │   MARGDARSHAK        │
│   (Research)         │   (AI System)        │
│                      │                      │
│   520px height       │   520px height       │
│   Cinematic video    │   Cinematic video    │
│   Mental Health      │   Intelligent        │
│   Prediction         │   Guidance           │
│                      │                      │
├──────────────────────┼──────────────────────┤
│                      │                      │
│   ENERGY             │   MSME LOAN          │
│   CONSUMPTION        │   APPROVAL           │
│   (Analytics)        │   (FinTech)          │
│                      │                      │
│   520px height       │   520px height       │
│   Cinematic video    │   Cinematic video    │
│   Predictive         │   Enterprise         │
│   Analytics          │   Automation         │
│                      │                      │
└──────────────────────┴──────────────────────┘
```

## Card Specifications

### Dimensions
- **Desktop**: 520px height, equal width (50% each)
- **Tablet**: 480px height, 2 columns
- **Mobile**: 420px height, 1 column (full width)
- **Aspect Ratio**: ~1:1.15 (cinematic rectangular)

### Card Layers (Z-Index)
```
Layer 5: Content (text, tags)
Layer 4: Ambient breathing animation
Layer 3: Radial gradient overlay
Layer 2: Dark overlay gradient
Layer 1: Video background
```

### Content Structure
```
┌─────────────────────────────────┐
│ [Video Background]              │
│ [Dark Overlay]                  │
│ [Gradient Effects]              │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ RESEARCH PROJECT            │ │
│ │ (Label - 0.7rem)            │ │
│ │                             │ │
│ │ CogniFit                    │ │
│ │ (Title - 2rem)              │ │
│ │                             │ │
│ │ Mental Health Prediction    │ │
│ │ (Subtitle - 1.1rem)         │ │
│ │                             │ │
│ │ Behavioral analysis and     │ │
│ │ machine learning for...     │ │
│ │ (Description - 0.95rem)     │ │
│ │                             │ │
│ │ [TensorFlow] [Behavioral]   │ │
│ │ [Python]                    │ │
│ │ (Tech Pills)                │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

## Typography Hierarchy

| Element | Size | Weight | Color | Font |
|---------|------|--------|-------|------|
| Label | 0.7rem | 700 | Champagne Silk | Montserrat |
| Title | 2rem | 400 | Primary Text | Cormorant |
| Subtitle | 1.1rem | 500 | Champagne Silk | Montserrat |
| Description | 0.95rem | 400 | Secondary Text | Inter |
| Tech Pill | 0.75rem | 400 | Champagne Silk | Inter |

## Color Palette

| Element | Color | Opacity |
|---------|-------|---------|
| Background | Crushed Cacao | 100% |
| Video | Mulberry Night | 100% |
| Video Opacity | - | 12% (base), 18% (hover) |
| Overlay | Dark gradient | 65% |
| Gradient | Champagne Silk | 6% |
| Ambient | Champagne Silk | 2-3% |
| Text Primary | Champagne Silk | 100% |
| Text Secondary | Text Secondary | 100% |
| Border | Champagne Silk | 12% |

## Spacing System

| Element | Spacing |
|---------|---------|
| Grid Gap | var(--spacing-2xl) |
| Card Padding | var(--spacing-2xl) |
| Content Gap | var(--spacing-lg) |
| Label to Title | 0 (stacked) |
| Title to Subtitle | 0 (stacked) |
| Subtitle to Description | 0 (stacked) |
| Description to Tech | var(--spacing-sm) |

## Animation Details

### Entrance Animation
- **Type**: Fade In Up
- **Duration**: 0.8s
- **Easing**: ease-out
- **Stagger**: 0.05s between cards

### Hover Animation
- **Lift**: translateY(-4px)
- **Shadow**: 0 25px 70px rgba(206, 179, 171, 0.12)
- **Video Opacity**: 12% → 18%
- **Duration**: 0.3s (smooth)

### Ambient Animation
- **Type**: Breathing pulse
- **Duration**: 8s
- **Easing**: ease-in-out
- **Opacity**: 0.5 → 0.8 → 0.5

## Responsive Breakpoints

### Desktop (1024px+)
- 2×2 grid
- 520px card height
- Full typography sizes
- All effects enabled

### Tablet (768px - 1023px)
- 2×2 grid maintained
- 480px card height
- Slightly reduced typography
- All effects enabled

### Mobile (480px - 767px)
- 1 column layout
- 420px card height
- Reduced typography
- Optimized for touch

### Small Mobile (<480px)
- 1 column layout
- 420px card height
- Minimal typography
- Essential effects only

## Project Cards

### Card 1: CogniFit
- **Label**: Research Project
- **Title**: CogniFit
- **Subtitle**: Mental Health Prediction
- **Description**: Behavioral analysis and machine learning for psychological pattern identification and early intervention insights.
- **Tech**: TensorFlow, Behavioral ML, Python
- **Video**: cognifit_v.mp4

### Card 2: Margdarshak
- **Label**: AI System
- **Title**: Margdarshak
- **Subtitle**: Intelligent Guidance System
- **Description**: NLP-powered semantic understanding for structured assistance and intelligent recommendation delivery.
- **Tech**: NLP, Transformers, FastAPI
- **Video**: margdarshak_v.mp4

### Card 3: Energy Consumption
- **Label**: Analytics
- **Title**: Energy Consumption
- **Subtitle**: Predictive Analytics
- **Description**: CNN-LSTM time-series forecasting for intelligent infrastructure optimization and predictive insights.
- **Tech**: CNN-LSTM, PyTorch, Research
- **Video**: energy_v.mp4

### Card 4: MSME Loan Approval
- **Label**: FinTech
- **Title**: MSME Loan Approval
- **Subtitle**: Enterprise Automation
- **Description**: Machine learning classification and risk assessment for intelligent enterprise automation and decision support.
- **Tech**: Scikit-learn, Flask API, Enterprise
- **Video**: loan_v.mp4

## Design Principles

✨ **Cinematic Editorial Luxury**
- Equal visual weight across all projects
- Balanced, symmetrical composition
- Spacious, breathing layout
- Sophisticated dark luxury aesthetic
- Refined, restrained motion design
- Premium AI research showcase feel

🎬 **Visual Storytelling**
- Each card tells a complete project story
- Atmospheric video backgrounds support narrative
- Typography hierarchy guides reading flow
- Tech tags provide technical context
- Hover interactions reveal depth

💎 **Luxury Refinement**
- Soft, matte appearance
- Reduced contrast for elegance
- Generous spacing throughout
- Smooth, premium transitions
- Subtle, sophisticated effects

## Performance Considerations

- Videos autoplay silently (muted attribute)
- Low opacity (12-18%) reduces visual load
- Smooth rendering with GPU acceleration
- Efficient z-index layering
- Mobile-optimized video handling
- Minimal animation overhead

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Color contrast maintained
- Keyboard navigation support
- Reduced motion support available
- Alt text for images (if added)
