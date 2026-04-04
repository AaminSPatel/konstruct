# SteelForge Construction - Customization Guide

This guide explains how to customize the website for your specific needs without touching code.

## Quick Updates via site-content.json

The file `/lib/site-content.json` is your centralized hub for all content updates. Changes here automatically propagate throughout the site.

### 1. Update Company Branding

Edit the `branding` section:

```json
{
  "branding": {
    "companyName": "Your Company Name",
    "tagline": "Your Company Tagline",
    "description": "Your company description",
    "logo": "YC"
  }
}
```

### 2. Update Contact Information

Edit the `contact` section:

```json
{
  "contact": {
    "email": "your-email@company.com",
    "phone": "+1 (xxx) xxx-xxxx",
    "address": "Your Street Address, City, State ZIP",
    "hours": "Mon-Fri: 9:00 AM - 5:00 PM\nSat: Closed\nSun: Closed",
    "socialLinks": {
      "linkedin": "https://linkedin.com/company/yourcompany",
      "twitter": "https://twitter.com/yourcompany",
      "facebook": "https://facebook.com/yourcompany"
    }
  }
}
```

### 3. Update Page Content

Each page has its own content object. Example for the home page:

```json
{
  "pages": {
    "home": {
      "title": "Your Page Title | Company Name",
      "description": "Your meta description for search engines",
      "ogImage": "https://images.unsplash.com/photo-xxx?w=1200&h=630&fit=crop",
      "heroTitle": "Your Hero Title",
      "heroSubtitle": "Your Hero Subtitle",
      "heroDescription": "Your longer description text here...",
      "ctaText": "Your CTA Button Text"
    }
  }
}
```

### 4. Update Services

Edit the `servicesList` array to add, remove, or modify services:

```json
{
  "servicesList": [
    {
      "id": "unique-id",
      "name": "Service Name",
      "icon": "FaCubes",
      "description": "Short description",
      "longDescription": "Longer description...",
      "benefits": ["Benefit 1", "Benefit 2", "Benefit 3"]
    }
  ]
}
```

**Available icons** from react-icons/fa:
- FaCubes - boxes/cubes
- FaHammer - tools/construction
- FaTree - structure/framework
- FaWrench - tools/support
- FaBox - containers/storage
- FaLightbulb - ideas/consulting

## Color Customization

Edit `/app/globals.css` to change the color scheme:

```css
:root {
  /* Primary Colors */
  --color-steel-900: #1a1f2e;      /* Dark text */
  --color-steel-800: #2d3541;
  --color-steel-700: #3d4556;
  
  /* Secondary Colors */
  --color-concrete-900: #5a5f69;   /* Medium text */
  --color-concrete-800: #71767f;
  --color-concrete-700: #888d98;
  --color-concrete-600: #9fa6b3;
  --color-concrete-400: #d4d8e0;   /* Light borders */
  
  /* Accent Color */
  --color-safety-orange: #ff6b35;  /* Buttons/Highlights */
  --color-safety-orange-dark: #e85a2a;
  --color-safety-orange-light: #ff8557;
  
  /* Neutral Colors */
  --color-white: #ffffff;
  --color-off-white: #f8f9fa;
  --color-black: #0a0e17;
}
```

### Color Recommendations

- **Primary (steel-900)**: Use for main text and headers
- **Secondary (concrete shades)**: Use for secondary text and borders
- **Accent (safety-orange)**: Use for CTAs, highlights, and important elements
- **Neutral**: Use for backgrounds and spacing

## Image Customization

Replace placeholder images with your own:

1. **Hero Images**: Update image URLs in site-content.json
2. **Section Images**: Replace image URLs in page components
3. **Backgrounds**: Modify CSS background images in globals.css

Example image sources:
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Your own domain: /public/images/...

## Component Customization

### Modify Header

File: `/components/Header.js`

```javascript
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  // Add more links here
];
```

### Modify Footer Links

File: `/components/Footer.js`

Update the `navLinks` array to match your site structure.

### Customize Animation Timing

File: `/components/ScrollReveal.js`

```javascript
transition={{
  duration: 0.6,  // Change animation duration (in seconds)
  delay,
  ease: 'easeOut',
}}
```

## Adding New Pages

### Step 1: Create Page Directory

```
/app/new-page/
  └── page.js
```

### Step 2: Create Page Component

```javascript
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

export const metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
};

export default function NewPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection /* ... */ />
      <Footer />
    </main>
  );
}
```

### Step 3: Add to Navigation

Edit `/components/Header.js`:

```javascript
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'New Page', href: '/new-page' },  // Add this
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];
```

## Modify Contact Form Fields

File: `/app/contact/page.js`

Edit the `formFields` array:

```javascript
const formFields = [
  { name: 'name', label: 'Full Name', type: 'text', required: true },
  { name: 'email', label: 'Email Address', type: 'email', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
  // Add custom fields here
  {
    name: 'customField',
    label: 'Custom Field Label',
    type: 'select',  // or 'text', 'email', 'tel', 'textarea'
    required: true,
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
];
```

**Field Types:**
- `text` - Standard text input
- `email` - Email input with validation
- `tel` - Telephone input
- `textarea` - Multi-line text area
- `select` - Dropdown menu (requires `options` array)

## Typography Customization

The site uses Geist font family. To change fonts:

File: `/app/layout.tsx`

```javascript
import { [YourFont], [YourFontMono] } from 'next/font/google'

const _yourFont = [YourFont]({ subsets: ["latin"] });
const _yourFontMono = [YourFontMono]({ subsets: ["latin"] });
```

Popular Google Fonts:
- Inter
- Poppins
- Roboto
- Playfair Display (elegant)
- Montserrat (modern)

## Common Customizations

### Change CTA Button Color

Edit `/app/globals.css`:

```css
--color-safety-orange: #your-color-hex;
--color-safety-orange-dark: #your-darker-color-hex;
```

### Adjust Animation Speed

Edit `/components/ScrollReveal.js`:

```javascript
transition={{
  duration: 0.6,  // Slower: 1.0, Faster: 0.3
}}
```

### Change Border Radius

Edit `/app/globals.css`:

```css
--radius: 0.625rem;  /* 0 for sharp, 1.5rem for very rounded */
```

### Modify Spacing

Tailwind spacing is controlled by margin and padding utilities in components:

```jsx
<div className="p-8">      {/* padding: 2rem */}
<div className="mb-12">    {/* margin-bottom: 3rem */}
<div className="gap-6">    {/* gap: 1.5rem */}
```

## SEO Updates

### Meta Tags

Edit each page's metadata:

```javascript
export const metadata = {
  title: 'Your Page Title | Company Name',
  description: 'Your meta description (160 chars max)',
  keywords: 'keyword1, keyword2, keyword3',
  openGraph: {
    title: 'Your OG Title',
    description: 'Your OG description',
    images: ['https://example.com/image.jpg'],
  },
};
```

### Schema Markup

Edit the schema script at the bottom of each page:

```javascript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Your Company Name',
      // ... more schema properties
    }),
  }}
/>
```

## Performance Tips

1. **Image Optimization**
   - Use Next.js Image component
   - Compress images before uploading
   - Use WebP format where possible

2. **Code Splitting**
   - Use lazy loading for below-the-fold content
   - Dynamic imports for heavy components

3. **Caching**
   - Set appropriate cache headers
   - Use Next.js revalidation

4. **Bundle Size**
   - Keep unused dependencies removed
   - Monitor bundle size with `npm run build`

## Troubleshooting

### Page Not Showing Content

Check that:
1. Page is added to navigation in Header
2. Page file exists at correct path
3. Content is in site-content.json (if using context)

### Styling Not Applied

Check that:
1. Class names are correct Tailwind classes
2. CSS variables are properly defined
3. Component is wrapped in correct layout

### Animations Not Working

Check that:
1. Component is wrapped in `<ScrollReveal>`
2. Component is client-side (`'use client'` at top)
3. Framer Motion is installed

### Form Not Submitting

Check that:
1. All required fields are filled
2. Email format is valid
3. Form handler is properly configured

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push
4. Set environment variables in settings

### Other Platforms

Ensure Node.js 18+ is available and run:

```bash
npm run build
npm start
```

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **React Icons**: https://react-icons.github.io/react-icons/

---

**Last Updated**: March 2024
**Questions?** Contact your development team for assistance.
