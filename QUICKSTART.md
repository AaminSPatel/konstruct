# Quick Start Guide - SteelForge Construction Website

Get your website up and running in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager
- A code editor (VS Code recommended)

## 1. Installation (1 minute)

```bash
# Navigate to project directory
cd steelforge-construction

# Install dependencies
npm install
# or
pnpm install
```

## 2. Start Development Server (30 seconds)

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the home page!

## 3. Key Files to Know

| File | Purpose | Frequency |
|------|---------|-----------|
| `/lib/site-content.json` | All website copy and content | Edit Often |
| `/app/globals.css` | Colors, fonts, animations | Edit Occasionally |
| `/components/Header.js` | Navigation menu | Edit if adding pages |
| `/components/Footer.js` | Footer links and contact | Edit if changing contact |
| `/app/*/page.js` | Page content and structure | Edit if restructuring |

## 4. Make Your First Change (2 minutes)

### Update Company Name

1. Open `/lib/site-content.json`
2. Find line 3: `"companyName": "SteelForge Construction"`
3. Change to: `"companyName": "Your Company Name"`
4. Save file
5. Watch browser refresh automatically!

### Update Contact Email

1. Open `/lib/site-content.json`
2. Find line 8: `"email": "info@steelforge.com"`
3. Change to: `"email": "your-email@company.com"`
4. Save and see changes live

### Change Primary Color

1. Open `/app/globals.css`
2. Find line 12: `--color-safety-orange: #ff6b35;`
3. Change hex code to your color (use [htmlcolorcodes.com](https://www.htmlcolorcodes.com))
4. Save and see buttons/accents change instantly

## 5. Common Quick Tasks

### Add a Service

1. Open `/lib/site-content.json`
2. Go to `pages.services.servicesList` array
3. Copy an existing service object
4. Paste and modify:
   ```json
   {
     "id": "your-service-id",
     "name": "Your Service Name",
     "icon": "FaHammer",
     "description": "Short description",
     "longDescription": "Longer description...",
     "benefits": ["Benefit 1", "Benefit 2"]
   }
   ```
5. Save and refresh

### Update Hero Image

1. Open `/lib/site-content.json`
2. Find `"heroImage"` field in any page
3. Replace URL with new image URL from Unsplash, Pexels, or your server
4. Save and refresh

### Modify Contact Form Fields

1. Open `/app/contact/page.js`
2. Find the `formFields` array (around line 17)
3. Add new field:
   ```javascript
   {
     name: 'fieldName',
     label: 'Field Label',
     type: 'text',  // or 'email', 'tel', 'textarea', 'select'
     required: true,
     options: ['Option 1', 'Option 2']  // only for 'select' type
   }
   ```
4. Save and test form

### Change Header Navigation

1. Open `/components/Header.js`
2. Find `navItems` array (around line 10)
3. Add or modify links:
   ```javascript
   { name: 'Blog', href: '/blog' }
   ```
4. Create corresponding page in `/app/blog/page.js`

## 6. Understand the File Structure

### Quick Map

```
Files You'll Edit Most:
├── /lib/site-content.json          ← Content (copy, services, form)
├── /app/globals.css                ← Colors & animations
├── /components/Header.js           ← Navigation
└── /components/Footer.js           ← Footer links

Files You'll Edit Sometimes:
├── /app/page.js                    ← Home page structure
├── /app/about/page.js              ← About page
├── /app/services/page.js           ← Services page
└── /app/contact/page.js            ← Contact page

Files You'll Edit Rarely:
├── /app/layout.tsx                 ← Root layout
├── /components/*.js                ← Other components
├── /package.json                   ← Dependencies
└── tailwind.config.ts              ← Tailwind config
```

## 7. Testing Your Changes

### View on Mobile
1. Open browser DevTools (F12)
2. Click mobile icon (or Ctrl+Shift+M)
3. Test responsiveness

### Test Form
1. Go to Contact page
2. Try submitting empty form (should show errors)
3. Fill in form completely
4. Submit (should show success message)

### Check Links
1. Click all navigation links
2. Verify CTAs go to contact page
3. Test footer social links

## 8. Before Going Live

### Checklist
- [ ] Company name updated
- [ ] Contact email/phone correct
- [ ] All links working
- [ ] Images loading properly
- [ ] Form submitting successfully
- [ ] Mobile layout looks good
- [ ] No console errors (F12)

### SEO Check
- [ ] Page titles are unique and descriptive
- [ ] Meta descriptions present
- [ ] All images have alt text
- [ ] Internal links working
- [ ] No broken links

## 9. Deploy Your Site

### Option A: Vercel (Easiest)

1. Create GitHub account (if needed)
2. Push code to GitHub
3. Go to [vercel.com](https://vercel.com)
4. Click "New Project"
5. Import your GitHub repository
6. Click "Deploy"
7. Done! Your site is live

### Option B: Other Hosting

```bash
# Build for production
npm run build

# Start production server
npm start
```

Host on: Netlify, AWS, DigitalOcean, or any Node.js host

### Option C: Local Development Only

```bash
npm run dev
```

Keep running locally for testing.

## 10. Documentation

For more detailed help:

- **README.md** - Complete technical docs
- **CUSTOMIZATION_GUIDE.md** - How-to for common changes
- **ARCHITECTURE.md** - How the project is structured
- **PROJECT_SUMMARY.md** - Project overview

## Troubleshooting

### Page won't load
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Changes not showing
- Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R)
- Clear browser cache
- Restart dev server

### Form not working
1. Check all field names match form fields
2. Verify validation rules in ContactForm.js
3. Open DevTools Console for error messages

### Styling looks broken
1. Check tailwind.config.ts exists
2. Verify globals.css is imported in layout.tsx
3. Restart dev server

### Images not loading
1. Check image URL is valid and public
2. Use Unsplash/Pexels for placeholder images
3. Verify CORS is not blocking the image

## Next Steps

1. ✅ Get site running locally
2. ✅ Make a few content changes
3. ✅ Test on mobile
4. ✅ Deploy to Vercel
5. ✅ Share with team!

## Video Walkthrough (Recommended)

See CUSTOMIZATION_GUIDE.md for detailed step-by-step instructions with examples.

## Questions?

1. Check the docs (README.md, CUSTOMIZATION_GUIDE.md)
2. Look for comments in the code
3. Check browser console for errors (F12)
4. Visit Next.js docs: https://nextjs.org/docs

---

## TL;DR Quick Command Reference

```bash
# Install & Run
npm install && npm run dev

# Build for Production
npm run build && npm start

# Key Files to Edit
/lib/site-content.json    # Content
/app/globals.css          # Colors
/components/Header.js     # Navigation
/app/page.js              # Home page

# Quick Edits
- Change company name: site-content.json line 3
- Change colors: globals.css lines 12-20
- Add service: site-content.json services array
- Update contact email: site-content.json line 8
```

---

**Happy building! 🚀**

Last Updated: March 26, 2024
Version: 1.0.0
