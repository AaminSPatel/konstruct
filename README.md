# SteelForge Construction - Premium Steel Shuttering & Industrial Formwork Solutions

A high-performance, SEO-optimized Next.js 15 website for a premium steel shuttering and construction agency. Built with Tailwind CSS, Framer Motion, and React Icons.

## Project Overview

This is a professional website for SteelForge Construction, showcasing premium steel shuttering systems, industrial formwork solutions, and construction frameworks. The site features:

- **Multi-page Architecture**: Home, About, Services, and Contact pages
- **SEO Optimization**: Comprehensive metadata, schema markup, and semantic HTML
- **Dynamic Content Management**: Centralized SiteContext for easy site-wide updates
- **Smooth Animations**: Framer Motion scroll-triggered animations and transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Professional Color Palette**: Steel gray, concrete gray, and safety orange theme
- **Contact Forms**: Fully functional contact form with validation

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **State Management**: React Context API
- **Form Handling**: React Hook Form with validation
- **Image Optimization**: Next.js Image component
- **Type Safety**: JavaScript (plain, no TypeScript)

## Project Structure

```
/app
  ├── layout.tsx                 # Root layout with SiteProvider
  ├── globals.css               # Global styles with custom animations
  ├── page.js                   # Home page
  ├── about/
  │   └── page.js               # About page
  ├── services/
  │   └── page.js               # Services page
  └── contact/
      └── page.js               # Contact page

/components
  ├── Header.js                 # Navigation header with mobile menu
  ├── Footer.js                 # Footer with contact info and links
  ├── HeroSection.js            # Reusable hero section component
  ├── ServiceGrid.js            # Service cards grid
  ├── ScrollReveal.js           # Scroll-triggered animation wrapper
  ├── FeatureSection.js         # Features showcase section
  ├── TestimonialSection.js     # Client testimonials
  ├── CTASection.js             # Call-to-action banner
  └── ContactForm.js            # Contact form with validation

/lib
  ├── SiteContext.js            # React Context for site-wide data
  └── site-content.json         # Centralized content management

/public
  └── (static assets)

package.json                     # Dependencies configuration
tailwind.config.ts              # Tailwind configuration
```

## Content Management

All site content is managed through `/lib/site-content.json`. This includes:

### Branding Information
```json
{
  "branding": {
    "companyName": "SteelForge Construction",
    "tagline": "Premium Steel Shuttering & Industrial Formwork Solutions",
    "description": "...",
    "logo": "SF"
  }
}
```

### Contact Details
```json
{
  "contact": {
    "email": "info@steelforge.com",
    "phone": "+1 (800) 555-0123",
    "address": "2847 Industrial Boulevard, Construction Park, IL 60601",
    "socialLinks": { /* ... */ }
  }
}
```

### Page Content
Each page has its own content object with title, description, OpenGraph metadata, and body content.

### Service Definitions
Services are defined with icons, descriptions, long-form content, and benefit tags.

## Key Components

### Header Component
- Sticky navigation with mobile hamburger menu
- Logo with animated hover effects
- Navigation links to all pages
- "Get Quote" CTA button

### HeroSection Component
- Responsive grid layout with content and image
- Animated title, subtitle, and description
- Dual CTA buttons (primary and secondary)
- Decorative background elements

### ServiceGrid Component
- Responsive grid (1 column mobile, 2 columns tablet, 3 columns desktop)
- Hover effects with scale and shadow animations
- Icon display with background
- Benefit tags for each service

### ScrollReveal Component
- Intersection Observer-based scroll animations
- Multiple animation variants (fadeInUp, fadeInLeft, scaleIn, etc.)
- Configurable delay and duration
- Optional trigger-once behavior

### ContactForm Component
- Multi-field form with validation
- Support for text, email, tel, textarea, and select inputs
- Real-time error display
- Success/error messaging
- Loading state with spinner

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Steel Gray 900 | #1a1f2e | Primary text and headers |
| Steel Gray 500 | #5d657f | Secondary text |
| Concrete Gray 700 | #888d98 | Muted text |
| Concrete Gray 400 | #d4d8e0 | Borders |
| Safety Orange | #ff6b35 | Accents and CTAs |
| White | #ffffff | Background |
| Off-white | #f8f9fa | Section backgrounds |

## Animation Features

### Framer Motion Animations
- Scroll-triggered reveal animations on page sections
- Hover effects on interactive elements (scale, color, shadow)
- Staggered animations for lists and grids
- Page transition animations
- Button interaction feedback (whileHover, whileTap)

### Custom CSS Animations
- fadeInUp, fadeInDown, fadeInLeft, fadeInRight
- scaleIn, fadeIn
- slideInLeft, slideInRight
- pulse-slow (continuous breathing animation)

## SEO Features

### Page-Level SEO
- Unique title tags for each page
- Meta descriptions with target keywords
- OpenGraph tags with images
- Robots meta tags

### Schema Markup
- Organization schema on all pages
- LocalBusiness schema with contact information
- ContactPoint schema on contact page
- Service schema on services page

### Semantic HTML
- Proper heading hierarchy (H1, H2, H3)
- Semantic elements (header, nav, main, article, footer, section)
- Alt text on all images
- Proper link structure with href attributes

### Content Optimization
- 500+ words per page with industry-focused keywords
- Internal linking strategy across pages
- Keyword-rich headings and subheadings
- Mobile-responsive design for Core Web Vitals

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
# or
pnpm build
pnpm start
```

## Customization

### Updating Site Content

Edit `/lib/site-content.json` to update:
- Company information and branding
- Contact details
- Page titles, descriptions, and body content
- Service descriptions and offerings
- Contact form fields

### Modifying Colors

Update the CSS variables in `/app/globals.css` under `:root`:

```css
:root {
  --color-steel-900: #1a1f2e;
  --color-safety-orange: #ff6b35;
  /* ... */
}
```

### Adding New Pages

1. Create new directory under `/app`
2. Add `page.js` file
3. Use existing components (Header, Footer, HeroSection, etc.)
4. Add page to navigation in Header component
5. Update site-content.json with page data

### Customizing Components

All components are modular and accept props for flexibility:

```jsx
<HeroSection
  title="Custom Title"
  subtitle="Custom Subtitle"
  description="Custom description text"
  ctaText="Custom Button Text"
  ctaLink="/custom-link"
  imageUrl="https://example.com/image.jpg"
/>
```

## Performance Optimizations

- Image optimization with Next.js Image component
- CSS utility classes minimize bundle size
- Client-side components use 'use client' directive
- Lazy loading for intersection observer animations
- Optimized animations with CSS transforms
- Static generation where possible

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

### Production
- next: 16.2.0
- react: 19.2.4
- react-dom: 19.2.4
- framer-motion: ^10.16.0
- react-icons: ^4.11.0
- react-intersection-observer: ^9.5.2
- tailwindcss: ^4.2.0
- react-hook-form: ^7.54.1
- zod: ^3.24.1

### Development
- @types/node: ^22
- @types/react: 19.2.14
- @types/react-dom: 19.2.3
- typescript: 5.7.3

## Future Enhancements

- Blog/Resources section
- Project gallery with filters
- Team member bios
- Certification badges
- Multi-language support
- Testimonial video section
- Live chat integration
- Analytics dashboard

## License

This project is proprietary and confidential for SteelForge Construction.

## Support

For technical support or inquiries, contact the development team.

---

**Last Updated**: March 2024
**Framework Version**: Next.js 15
**Status**: Production Ready
