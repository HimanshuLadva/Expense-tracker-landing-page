# Expense Tracker Landing Page - Setup Guide

## Overview
A modern, Runway-inspired landing page built with Angular 19 and Tailwind CSS featuring:
- 🎨 Runway.com-inspired modern design
- 🌓 Dark mode support
- 📱 Fully responsive (mobile-first)
- ⚡ Smooth animations and transitions
- 🎯 8 feature showcases
- 📊 Statistics section
- 🖼️ Interactive screenshot gallery
- 📝 Email signup form

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI 19

## Installation Steps

### 1. Install Dependencies

First, install Tailwind CSS and its required plugins:

```bash
npm install -D tailwindcss postcss autoprefixer
npm install -D @tailwindcss/forms @tailwindcss/typography
```

### 2. Verify Configuration Files

The following files have already been created:

- ✅ `tailwind.config.js` - Tailwind configuration with custom theme
- ✅ `src/styles.scss` - Global styles with Tailwind imports
- ✅ `src/app/landing-page/` - Landing page component

### 3. Run the Development Server

```bash
npm start
```

The app will run on `http://localhost:4201` (as configured in package.json)

### 4. Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── landing-page/
│   │   ├── landing-page.component.ts      # Component logic
│   │   ├── landing-page.component.html    # Template with all sections
│   │   ├── landing-page.component.scss    # Component-specific styles
│   ├── app.component.ts
│   ├── app.component.html                 # Router outlet only
│   ├── app.routes.ts                      # Route configuration
│   └── app.config.ts
├── styles.scss                            # Global styles + Tailwind
└── index.html
```

## Features Implemented

### 1. Navigation
- Sticky header with scroll effects
- Dark mode toggle
- Mobile responsive menu
- Smooth scroll to sections

### 2. Hero Section
- Gradient background with animated blobs
- Responsive typography
- CTA buttons (Get Started, Watch Demo)
- Floating dashboard preview

### 3. Features Section (8 Cards)
- Analytics Dashboard
- Multi-Account Management
- Smart Categorization
- Transaction History
- Budget Planning
- Financial Reminders
- User Management
- Secure & Private

### 4. How It Works (Timeline)
- 3-step process
- Alternating card layout
- Gradient connecting line
- Scroll animations

### 5. Statistics Section
- 4 animated stats
- Gradient background
- Glass-morphism effects
- ₹73.4K+ Tracked Income
- ₹72.2K+ Managed Expenses
- 18+ Categories
- 100% Data Security

### 6. Screenshots Gallery
- Interactive thumbnail selection
- Smooth transitions
- Placeholder images (ready for real screenshots)

### 7. CTA Section
- Email signup form with validation
- Gradient background
- Glass-morphism card

### 8. Footer
- 4-column layout
- Quick links
- Social media icons
- Responsive design

## Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: { ... },  // Blue shades
  accent: { ... }    // Purple shades
}
```

### Content
Edit `src/app/landing-page/landing-page.component.ts`:

- `features[]` - Update feature cards
- `steps[]` - Modify how-it-works steps
- `statistics[]` - Change statistics
- `screenshots[]` - Update gallery items

### Styling
Most styling is done via Tailwind utility classes in the HTML template.
For custom animations, edit `src/styles.scss`.

## Dark Mode
Dark mode is implemented with:
- Automatic system preference detection
- Manual toggle button
- LocalStorage persistence
- Tailwind's `dark:` variant classes

## Responsive Breakpoints (Tailwind)
- Mobile: 0px+ (default)
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## Adding Screenshots

**IMPORTANT:** The landing page is configured to display your 8 application screenshots.

### Required Screenshots:
1. `public/screenshots/dashboard.png` - Analytics Dashboard
2. `public/screenshots/accounts.png` - Accounts Page
3. `public/screenshots/categories.png` - Categories Page
4. `public/screenshots/transactions.png` - Transactions Page
5. `public/screenshots/budget.png` - Budget Management
6. `public/screenshots/reminders.png` - Reminders Page
7. `public/screenshots/users.png` - User Management
8. `public/screenshots/profile.png` - My Profile

**📖 See [SCREENSHOTS-GUIDE.md](./SCREENSHOTS-GUIDE.md) for detailed instructions on saving your screenshots.**

The component is already configured with all 8 screenshots and will display them in:
- Hero section (dashboard preview)
- Interactive gallery with thumbnails (all 8 screenshots)

## Route Configuration
Current routes (in `app.routes.ts`):
- `/` - Landing page
- `/login` - Placeholder (currently shows landing page)
- `/register` - Placeholder (currently shows landing page)

To create actual login/register pages:
1. Generate new components: `ng g c login` and `ng g c register`
2. Update the routes to point to the new components

## Performance Optimizations
- Lazy-loaded images (add `loading="lazy"` to img tags)
- Standalone components (tree-shakeable)
- Tailwind CSS purging (automatic in production)
- Smooth scroll animations with IntersectionObserver

## Accessibility Features
- Semantic HTML (nav, main, section, footer)
- ARIA labels on interactive elements
- Keyboard navigation support
- Skip to content link
- Focus visible states
- Color contrast compliance

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Tailwind styles not applying
1. Ensure `src/styles.scss` imports Tailwind directives
2. Check `tailwind.config.js` content paths
3. Restart dev server: `npm start`

### Dark mode not working
1. Check if `darkMode: 'class'` is in tailwind.config.js
2. Verify localStorage is enabled in browser
3. Check console for errors

### Animations not smooth
1. Enable hardware acceleration in browser
2. Reduce motion for accessibility: use `prefers-reduced-motion`
3. Check browser performance

## Next Steps
1. Add real screenshot images to `public/` folder
2. Create actual login/register components
3. Integrate with backend API
4. Add more interactive elements
5. Implement email signup functionality
6. Add Google Analytics or tracking
7. SEO optimization (meta tags, sitemap)

## Support
For issues or questions, refer to:
- [Angular Documentation](https://angular.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Runway.com](https://runway.com) - Design inspiration

## License
This project is part of the Expense Tracker application.

---

Built with ❤️ using Angular 19 and Tailwind CSS
