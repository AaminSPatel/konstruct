# SteelForge Construction - Architecture & File Structure

## Project Directory Tree

```
steelforge-construction/
├── app/
│   ├── layout.tsx                    # Root layout with SiteProvider & Schema
│   ├── globals.css                   # Global styles, animations, theme colors
│   ├── page.js                       # Home page (/)
│   ├── about/
│   │   └── page.js                   # About page (/about)
│   ├── services/
│   │   └── page.js                   # Services page (/services)
│   └── contact/
│       └── page.js                   # Contact page (/contact)
│
├── components/
│   ├── Header.js                     # Navigation header with mobile menu
│   ├── Footer.js                     # Footer with links and contact
│   ├── HeroSection.js                # Reusable hero component
│   ├── ServiceGrid.js                # Service cards grid
│   ├── FeatureSection.js             # Feature highlights
│   ├── TestimonialSection.js         # Client testimonials
│   ├── CTASection.js                 # Call-to-action banner
│   ├── ContactForm.js                # Contact form with validation
│   ├── ScrollReveal.js               # Animation wrapper component
│   └── ui/                           # shadcn/ui components (pre-installed)
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ... (other UI components)
│
├── lib/
│   ├── SiteContext.js                # React Context provider
│   ├── site-content.json             # Centralized content database
│   └── utils.ts                      # Utility functions (cn, etc.)
│
├── public/
│   ├── icon.svg
│   ├── icon-light-32x32.png
│   ├── icon-dark-32x32.png
│   ├── apple-icon.png
│   └── (other static assets)
│
├── package.json                      # Dependencies & scripts
├── tsconfig.json                     # TypeScript configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── next.config.mjs                  # Next.js configuration
│
├── README.md                         # Complete documentation
├── CUSTOMIZATION_GUIDE.md           # How-to guide for updates
├── PROJECT_SUMMARY.md               # Project overview
└── ARCHITECTURE.md                  # This file

```

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Root Layout (layout.tsx)                  │
│  - Initializes SiteProvider                                  │
│  - Loads site-content.json via context                       │
│  - Adds Schema markup                                        │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   ├─ Headers (Navigation)
                   ├─ Pages (Home, About, Services, Contact)
                   └─ Footers (Global Footer)

┌──────────────────────────────────────────────────────────────┐
│              SiteContext (lib/SiteContext.js)                 │
│  ┌─ Branding Info                                            │
│  ├─ Contact Details                                          │
│  └─ Pages Content                                            │
└──────────────────┬───────────────────────────────────────────┘
                   │
┌──────────────────▼───────────────────────────────────────────┐
│         site-content.json (Content Management)               │
│  ┌─ branding                                                 │
│  ├─ contact                                                  │
│  └─ pages                                                    │
│     ├─ home                                                  │
│     ├─ about                                                 │
│     ├─ services (with 6 service definitions)                │
│     └─ contact (with form field definitions)                │
└────────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
RootLayout
├── Header
│   ├── Navigation Links
│   └── Mobile Menu
│
├── Main Content (varies by page)
│   ├── HeroSection
│   │   ├── Text Content
│   │   └── Image with Hover Effect
│   │
│   ├── FeatureSection (Home & About)
│   │   └── Feature Cards (Scroll Reveal)
│   │
│   ├── ServiceGrid (Services page)
│   │   └── Service Cards (with Icons & Benefits)
│   │
│   ├── TestimonialSection (Home page)
│   │   └── Testimonial Cards (Staggered Animation)
│   │
│   ├── ContactForm (Contact page)
│   │   ├── Form Fields (Text, Email, Select, Textarea)
│   │   ├── Validation Errors
│   │   └── Success Message
│   │
│   └── CTASection (All pages)
│       ├── CTA Text
│       ├── Primary Button
│       └── Secondary Button
│
└── Footer
    ├── Brand Info
    ├── Quick Links
    ├── Services Links
    ├── Contact Info
    └── Social Links
```

## Page Structure

### Home Page (/)
```
Header
├── HeroSection
│   ├── Hero Title
│   ├── Hero Subtitle
│   ├── Hero Description
│   ├── CTA Buttons
│   └── Hero Image
├── FeatureSection
│   └── 8 Feature Cards (Grid)
├── ServiceGrid Section
│   ├── Section Title
│   ├── 3 Featured Services
│   └── "View All Services" Link
├── TestimonialSection
│   └── 3 Testimonial Cards
├── CTASection
└── Footer
```

### About Page (/about)
```
Header
├── HeroSection
├── Our Journey Section
│   ├── Text Content
│   └── Image
├── Stats Section (4 stats)
├── Core Values Section (4 values)
├── Industry Recognition (3 items)
├── Team Section
├── CTASection
└── Footer
```

### Services Page (/services)
```
Header
├── HeroSection
├── Introduction Section
├── ServiceGrid (6 services)
├── Detailed Services Section
│   ├── Modular Shuttering (Text + Image)
│   ├── Custom Fabrication (Text + Image)
│   ├── Industrial Scaffolding (Text + Image)
│   └── Installation Support (Text + Image)
├── Why Choose SteelForge (6 items)
├── CTASection
└── Footer
```

### Contact Page (/contact)
```
Header
├── HeroSection
├── Contact Information (4 cards)
├── Contact Form Section
│   └── ContactForm Component
│       ├── Text Fields (name, email, phone, company)
│       ├── Select Fields (project type, scope, timeline)
│       ├── Textarea (message)
│       └── Submit Button
├── Map Section (Placeholder)
├── FAQ Section (6 items)
├── CTASection (optional)
└── Footer
```

## State Management Strategy

### Context API (SiteContext)
- Provides site-wide data to all components
- Loads content from site-content.json
- No Redux or external state management needed
- Sufficient for current needs

### Component State (React Hooks)
- `Header`: Mobile menu open/closed
- `ContactForm`: Form data, errors, loading, submitted
- Managed with `useState` for simplicity

### No Prop Drilling
- Deep nesting handled via Context
- Components access data independently
- Clean, maintainable component structure

## Animation Architecture

### Framer Motion Integration
```
Component Wrapper
├── motion.div (root element)
├── Variants Definition
│   ├── initial (hidden state)
│   ├── animate (visible state)
│   └── exit (cleanup state)
├── Transition Config
│   ├── duration (seconds)
│   ├── delay (stagger effect)
│   └── ease (easing function)
└── Gesture Handlers
    ├── whileHover
    └── whileTap
```

### Scroll-Triggered Animations (ScrollReveal)
```
ScrollReveal Component
├── useInView Hook (Intersection Observer)
├── Variant Selection
│   ├── fadeInUp
│   ├── fadeInLeft
│   ├── fadeInRight
│   ├── scaleIn
│   └── fadeIn
└── Trigger Behavior
    ├── once: true (animate only once)
    └── threshold: 0.1 (visibility %)
```

## CSS Architecture

### Global Styles (globals.css)
```
:root (Light Theme)
├── Color Variables
│   ├── Steel grays (primary)
│   ├── Concrete grays (secondary)
│   ├── Safety orange (accent)
│   └── Neutral whites/blacks
├── Design Tokens
│   ├── --radius (border radius)
│   ├── Font families
│   └── Spacing scale
└── Animations
    ├── @keyframes fadeInUp
    ├── @keyframes scaleIn
    └── Utility classes

.dark (Dark Theme)
└── Color overrides for dark mode
```

### Tailwind Utilities
- Spacing: `p-`, `m-`, `gap-`
- Typography: `text-`, `font-`, `leading-`
- Colors: Using CSS variables
- Responsive: `md:`, `lg:` prefixes
- Flex/Grid: Layout utilities

## Form Architecture

### ContactForm Component
```
Form State
├── formData (user input)
├── errors (validation errors)
├── submitted (success state)
└── loading (submission state)

Validation
├── Required field checks
├── Email format validation
└── Real-time error display

Submission
├── Form validation
├── Loading animation
├── Success message
└── Reset on completion
```

## SEO Architecture

### Metadata
- Per-page metadata in page components
- Root metadata in layout.tsx
- OpenGraph tags for social sharing
- Robots meta tags

### Schema Markup
```
Schema Types Used
├── Organization (all pages)
├── LocalBusiness (home page)
├── ContactPoint (contact page)
└── Service (services page)
```

### Content Optimization
- Semantic HTML (header, nav, main, article, footer)
- Heading hierarchy (H1, H2, H3 properly used)
- Internal linking strategy
- Alt text on images
- Mobile responsive design

## Performance Optimization

### Code Splitting
- Pages loaded on-demand
- Components lazy-loaded where appropriate
- CSS utility-first minimizes overhead

### Image Optimization
- Next.js Image component
- Automatic format selection
- Lazy loading on scroll
- Responsive sizes

### Bundle Analysis
- Next.js built-in optimization
- CSS purging via Tailwind
- Tree-shaking enabled
- No unused dependencies

## Development Workflow

### Local Development
```
npm run dev
├── Hot Module Replacement (HMR)
├── Fast Refresh
└── Instant feedback on changes
```

### Building
```
npm run build
├── Optimization passes
├── Code splitting
├── Static generation
└── Production bundle
```

### Deployment
```
npm start (or Vercel deploy)
├── Server startup
├── Request handling
└── Static file serving
```

## Configuration Files

### next.config.mjs
- Image optimization
- Redirects and rewrites
- Headers configuration
- Environment variables

### tailwind.config.ts
- Color theme customization
- Spacing scale
- Font family definitions
- Plugin configuration

### tsconfig.json
- Path aliases (@/)
- Compiler options
- Module resolution

### package.json
- Dependencies (production)
- DevDependencies
- Scripts (dev, build, start, lint)
- Metadata

## Best Practices Implemented

1. **Component Structure**
   - Single responsibility principle
   - Reusable and composable
   - Clear prop interfaces
   - Meaningful file names

2. **Code Quality**
   - Consistent naming conventions
   - Comments for complex logic
   - No code duplication
   - Clean imports organization

3. **Performance**
   - Optimized images
   - CSS utilities over custom CSS
   - Efficient animations
   - Proper caching strategies

4. **Accessibility**
   - Semantic HTML
   - ARIA attributes
   - Color contrast
   - Keyboard navigation
   - Screen reader friendly

5. **SEO**
   - Meta tags optimization
   - Schema markup
   - Internal linking
   - Mobile responsive
   - Fast load times

6. **Maintainability**
   - Centralized content management
   - Modular components
   - Clear documentation
   - Easy customization

## Scalability Considerations

### For Growth
- Current architecture supports 50+ pages
- Add new services without code changes
- Blog section ready for implementation
- E-commerce integration possible

### For Performance
- Static generation for most pages
- Incremental Static Regeneration (ISR) ready
- Cache strategies implemented
- CDN-ready for images

### For Internationalization
- Context structure supports multiple languages
- Locale routing prepared
- No hard-coded strings in components
- Ready for i18n library integration

---

**Architecture Version**: 1.0.0
**Last Updated**: March 26, 2024
**Status**: Production Ready
