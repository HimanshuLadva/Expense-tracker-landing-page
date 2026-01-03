# Project Memory: Expense Tracker Landing Page

> This file contains architectural decisions, coding patterns, and project context for AI assistants working on this codebase.

## Project Overview

**Type:** Marketing Landing Page for Expense Tracker Web Application
**Framework:** Angular 19.2.0 (Standalone Components)
**Styling:** Tailwind CSS 3.x (utility-first, minimal custom SCSS)
**Purpose:** Showcase 8 features of the expense tracker app with screenshots, drive user signups

---

## Tech Stack & Versions

### Core Framework
- **Angular:** 19.2.0 (Latest stable, using standalone components)
- **TypeScript:** 5.7.2 (strict mode enabled)
- **RxJS:** 7.8.0 (minimal usage)
- **Zone.js:** 0.15.0

### Styling & UI
- **Tailwind CSS:** 3.4.19 (primary styling framework)
- **Tailwind Plugins:**
  - `@tailwindcss/forms` v0.5.11
  - `@tailwindcss/typography` v0.5.19
- **Fonts:** Inter (body), Poppins (display) - loaded from Google Fonts
- **PostCSS:** 8.5.6 + Autoprefixer 10.4.23

### Build & Dev Tools
- **Angular CLI:** 19.2.16
- **Build System:** Angular application builder with Vite integration
- **Dev Server Port:** 4201 (configured in package.json)

---

## Architecture Patterns

### Component Architecture
```
✓ Standalone Components (Angular 14+ pattern, no NgModules)
✓ Lazy-loaded routes for code splitting
✓ Component-scoped state (no centralized store)
✓ Reactive Forms for validation
✓ Dependency injection for services
```

### Project Structure
```
src/
├── app/
│   ├── landing-page/              # Main feature component
│   │   ├── landing-page.component.ts    (252 lines - logic)
│   │   ├── landing-page.component.html  (459 lines - template)
│   │   └── landing-page.component.scss  (14 lines - minimal)
│   ├── app.component.ts           # Root component (router-outlet only)
│   ├── app.routes.ts              # Lazy-loaded route config
│   └── app.config.ts              # Standalone app config
├── assets/
│   └── images/                    # 8 PNG screenshots (accounts, budget, etc.)
└── styles.scss                    # Global Tailwind imports + custom utilities
```

### Routing Configuration
```typescript
// app.routes.ts pattern
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landing-page/landing-page.component')
      .then(m => m.LandingPageComponent)
  },
  { path: '**', redirectTo: '' }  // Fallback to home
];
```

---

## Coding Style & Conventions

### TypeScript Standards
- **Strict Mode:** Fully enabled (all strict flags true)
- **Access Modifiers:** Explicit public/private in classes
- **Naming Conventions:**
  - Components: PascalCase (`LandingPageComponent`)
  - Properties/Methods: camelCase (`isDarkMode`, `toggleDarkMode()`)
  - Interfaces: PascalCase (`Feature`, `Screenshot`)
  - Boolean flags: `is-` prefix (`isScrolled`, `isMobileMenuOpen`)
  - Component selectors: `app-[feature-name]` (e.g., `app-landing-page`)

### File Organization
```typescript
// Component file structure:
1. Imports
2. Interface definitions (Feature, Step, Statistic, Screenshot)
3. @Component decorator
4. Class properties (state variables)
5. Data arrays (features, steps, statistics, screenshots)
6. Constructor (with DI)
7. Lifecycle hooks (ngOnInit, ngAfterViewInit)
8. Event handlers (@HostListener)
9. Public methods (toggleDarkMode, smoothScrollTo, etc.)
10. Private methods (initScrollAnimations)
```

### Code Formatting
```
Indent: 2 spaces
Charset: UTF-8
Quotes: Single quotes for TypeScript
Line endings: LF
Trim trailing whitespace: Yes
Insert final newline: Yes
```

---

## Styling Approach

### Tailwind-First Strategy
- **99% Tailwind utility classes** in templates
- **1% custom SCSS** (only for scroll reveal animations)
- **Dark mode:** Class-based (`dark:` prefix), toggled via JS
- **Responsive:** Mobile-first (sm:, md:, lg:, xl:, 2xl: breakpoints)

### Custom Tailwind Configuration

**Color Palette:**
```javascript
primary: {      // Blue gradient (Tailwind default blue)
  50-900: Standard Tailwind blue shades
}
accent: {       // Purple/Violet
  400: #a78bfa
  500: #8b5cf6
  600: #7c3aed
  700: #6d28d9
}
```

**Custom Animations:**
```javascript
animate-fade-in       // 0.6s fade in
animate-slide-up      // 0.8s slide up with fade
animate-slide-down    // 0.8s slide down with fade
animate-float         // 3s infinite floating motion
animate-gradient      // 15s infinite gradient shift
animate-pulse-slow    // 3s infinite pulse
```

**Font Families:**
```javascript
font-sans: ['Inter', 'system-ui', 'sans-serif']      // Body text
font-display: ['Poppins', 'Inter', 'sans-serif']      // Headings
```

### Global Styles Pattern
```scss
// src/styles.scss
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .custom-utility { }  // Custom utilities here
}

// Custom scrollbar, smooth scroll, accessibility utilities
```

---

## Component Data Patterns

### Landing Page Component State

**Main Data Collections:**
```typescript
features: Feature[]        // 8 feature cards with icon, title, description, gradient
steps: Step[]              // 3-step "How It Works" timeline
statistics: Statistic[]    // 4 key stats (income, expenses, categories, security)
screenshots: Screenshot[]  // 8 app screenshots (dashboard, accounts, etc.)
```

**Interface Definitions:**
```typescript
interface Feature {
  icon: string;           // Icon name (matches getIconSvg() lookup)
  title: string;
  description: string;
  gradient: string;       // Tailwind gradient classes (e.g., 'from-blue-500 to-cyan-500')
}

interface Screenshot {
  id: number;
  title: string;
  image: string;          // Path: '/assets/images/[name].png'
  thumbnail: string;      // Same as image (no separate thumbs)
}
```

**Screenshot Assets:**
```
/assets/images/dashboard.png      (Analytics dashboard - Hero image)
/assets/images/accounts.png       (Accounts management)
/assets/images/categories.png     (Categories list)
/assets/images/transactions.png   (Transactions table)
/assets/images/budget.png         (Budget management)
/assets/images/reminders.png      (Reminders page)
/assets/images/users.png          (User management)
/assets/images/profile.png        (User profile)
```

---

## Key Features & Implementation

### 1. Dark Mode
```typescript
// Class-based dark mode with localStorage persistence
toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode;
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
}

// Auto-detect system preference on init
ngOnInit() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  this.isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
}
```

### 2. Scroll Animations
```typescript
// Intersection Observer for scroll-triggered animations
ngAfterViewInit() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up');
        observer.unobserve(entry.target);  // Animate once only
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
```

### 3. Responsive Navigation
```typescript
// Sticky header with scroll detection
@HostListener('window:scroll')
onScroll() {
  this.isScrolled = window.scrollY > 50;  // Triggers navbar style change
}

// Mobile menu toggle
toggleMobileMenu() {
  this.isMobileMenuOpen = !this.isMobileMenuOpen;
}
```

### 4. Smooth Scroll Navigation
```typescript
smoothScrollTo(elementId: string) {
  document.getElementById(elementId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
  this.closeMobileMenu();
}
```

### 5. Form Handling
```typescript
// Reactive Forms with validation
signupForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email])
});

onSignup() {
  if (this.signupForm.valid) {
    const email = this.signupForm.value.email;
    this.router.navigate(['/register']);
  }
}
```

---

## Template Structure (459 lines)

### Section Breakdown:
1. **Skip-to-content link** (accessibility)
2. **Navigation Bar** (sticky, responsive, dark mode toggle)
3. **Hero Section** (animated background, CTA buttons, dashboard preview)
4. **Features Section** (8-card grid, hover effects, gradient icons)
5. **How It Works** (3-step timeline, alternating layout)
6. **Statistics** (4 stats with gradient background)
7. **Screenshots Gallery** (8 thumbnails, main viewer, carousel)
8. **CTA & Signup** (email form with validation)
9. **Footer** (4-column layout, social links)

### Common Template Patterns:
```html
<!-- Responsive visibility -->
<div class="hidden md:flex"></div>

<!-- State-driven classes -->
<nav [class.scrolled]="isScrolled"></nav>

<!-- Conditional rendering -->
<div *ngIf="isMobileMenuOpen"></div>

<!-- Data iteration -->
<div *ngFor="let feature of features; let i = index">
  <div [style.animation-delay]="i * 100 + 'ms'"></div>
</div>

<!-- Dark mode classes -->
<div class="bg-white dark:bg-gray-900"></div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"></div>
```

---

## Performance Optimizations

### Image Loading Strategy
```html
<!-- Hero image: eager loading -->
<img src="/assets/images/dashboard.png" loading="eager" />

<!-- Gallery images: lazy loading -->
<img src="/assets/images/accounts.png" loading="lazy" />
```

### SSR/Browser Detection
```typescript
constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

// Only run in browser (not during SSR)
if (isPlatformBrowser(this.platformId)) {
  localStorage.setItem('theme', 'dark');
  document.getElementById('element');
}
```

### Build Configuration
```json
// Production budgets (angular.json)
"budgets": [
  {
    "type": "initial",
    "maximumWarning": "500kB",
    "maximumError": "1MB"
  },
  {
    "type": "anyComponentStyle",
    "maximumWarning": "4kB",
    "maximumError": "8kB"
  }
]
```

---

## Development Workflow

### Commands
```bash
npm start              # Dev server on http://localhost:4201
npm run build          # Production build → dist/
npm run watch          # Build with watch mode
npm test               # Run Karma tests
```

### File Watching
- Angular CLI watches all .ts, .html, .scss files
- Tailwind JIT watches content files (src/**/*.{html,ts})
- Auto-recompiles on save

### Build Output
```
dist/expense-tracker-landing/
├── browser/           # Client-side bundles
│   ├── main.[hash].js
│   ├── polyfills.[hash].js
│   ├── styles.[hash].css
│   └── assets/        # Copied from src/assets
└── server/            # SSR bundles (if configured)
```

---

## Asset Configuration

### Angular.json Assets Setup
```json
"assets": [
  {
    "glob": "**/*",
    "input": "public"     // Static files (favicon, etc.)
  },
  {
    "glob": "**/*",
    "input": "src/assets",
    "output": "/assets"   // Serves src/assets at /assets URL
  }
]
```

### Image Path Pattern
```typescript
// In TypeScript:
screenshots = [
  { image: '/assets/images/dashboard.png' }  // Leading slash required
];

// In template:
<img src="/assets/images/dashboard.png" />  // Leading slash required
```

---

## Accessibility Features

### Implemented Patterns
```html
<!-- Skip navigation -->
<a href="#main-content" class="sr-only focus:not-sr-only">Skip to content</a>

<!-- Semantic HTML -->
<nav aria-label="Main navigation">
<main id="main-content">
<section aria-labelledby="features-heading">
  <h2 id="features-heading">Features</h2>
</section>

<!-- ARIA labels -->
<button aria-label="Toggle dark mode"></button>
<button aria-label="Toggle mobile menu"></button>

<!-- Focus management -->
class="focus:ring-2 focus:ring-blue-500 focus:outline-none"

<!-- Screen reader only -->
class="sr-only"                    // Hidden from view
class="focus:not-sr-only"          // Visible on focus
```

---

## Known Patterns & Conventions

### When to Use Custom SCSS
- ✅ Scroll reveal animations (`.reveal` class)
- ✅ Custom scrollbar styling (`::-webkit-scrollbar`)
- ✅ Global resets (smooth scroll, body margins)
- ❌ Component styling (use Tailwind instead)
- ❌ Layout (use Tailwind grid/flex)
- ❌ Colors/spacing (use Tailwind utilities)

### Icon System
```typescript
// SVG icons stored as strings in component method
getIconSvg(iconName: string): string {
  const icons: { [key: string]: string } = {
    'chart': '<path d="M3 13.125C3 12.504...">',
    'bank': '<path d="M2.25 21h19.5...">',
    // ... 8 total icons
  };
  return icons[iconName] || '';
}

// Usage in template:
<svg>
  <path [attr.d]="getIconSvg('chart')" />
</svg>
```

### Gradient Pattern
```typescript
// Feature cards use Tailwind gradient classes
gradient: 'from-blue-500 to-cyan-500'

// Applied in template:
<div [ngClass]="'bg-gradient-to-br ' + feature.gradient"></div>
```

---

## Future Development Notes

### Placeholder Routes
```typescript
// These routes currently redirect to landing page:
'/login'    // TODO: Create LoginComponent
'/register' // TODO: Create RegisterComponent
```

### Form Integration
```typescript
// Signup form currently logs to console and navigates to /register
// TODO: Integrate with backend API
onSignup() {
  const email = this.signupForm.value.email;
  // await this.apiService.signup(email);
  this.router.navigate(['/register']);
}
```

### Potential Enhancements
- Add actual screenshot carousel navigation (prev/next buttons)
- Implement number counter animation for statistics
- Add email collection backend service
- Create login/register pages
- Add meta tags for SEO
- Implement lazy loading for off-screen images
- Add analytics tracking

---

## Common Tasks

### Adding a New Screenshot
1. Save image to `src/assets/images/[name].png`
2. Add to `screenshots` array in component:
   ```typescript
   { id: 8, title: 'New Feature',
     image: '/assets/images/new-feature.png',
     thumbnail: '/assets/images/new-feature.png' }
   ```
3. Image will auto-appear in gallery

### Adding a New Feature Card
```typescript
features = [
  // ... existing features
  {
    icon: 'new-icon',  // Add to getIconSvg() method
    title: 'New Feature',
    description: 'Feature description',
    gradient: 'from-green-500 to-teal-500'
  }
];
```

### Customizing Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: { /* custom blue shades */ },
      accent: { /* custom purple shades */ }
    }
  }
}
```

### Adding Custom Animation
1. Add to `tailwind.config.js`:
   ```javascript
   animation: {
     'new-anim': 'newAnim 1s ease-in-out'
   },
   keyframes: {
     newAnim: {
       '0%': { /* start state */ },
       '100%': { /* end state */ }
     }
   }
   ```
2. Use in template: `class="animate-new-anim"`

---

## Testing & Quality

### Test Files
- `app.component.spec.ts` - Root component tests (Jasmine + Karma)
- No tests yet for landing-page component (add if needed)

### Linting & Formatting
- EditorConfig defined (.editorconfig)
- TypeScript strict mode enforced
- No ESLint config (add if needed)

### Browser Support
- Modern browsers (ES2022 target)
- Flexbox & Grid support required
- CSS custom properties required
- IntersectionObserver API required

---

## Documentation Files

- **README.md** - Basic project info (Angular CLI template)
- **SETUP.md** - Comprehensive setup and usage guide
- **SCREENSHOTS-GUIDE.md** - How to add/manage screenshots
- **SCREENSHOTS-INTEGRATION-SUMMARY.md** - Screenshot integration docs
- **CLAUDE.md** - This file (project memory for AI)

---

## Key Takeaways for AI Assistants

1. **This is a Tailwind-first project** - Use utility classes, avoid custom CSS
2. **Standalone components pattern** - No NgModules, import dependencies directly
3. **Images must use `/assets/images/` path** with leading slash
4. **Dark mode is class-based** - Toggle via `document.documentElement.classList`
5. **TypeScript is strict** - All types must be explicit, no `any`
6. **Mobile-first responsive** - Start with mobile, add breakpoints (md:, lg:)
7. **Accessibility is important** - Use semantic HTML, ARIA labels, focus states
8. **State is component-scoped** - No global store, state in component properties
9. **Forms use Reactive Forms** - Import ReactiveFormsModule, use FormGroup/FormControl
10. **Dev server runs on port 4201** - Not default 4200

---

**Last Updated:** 2026-01-03
**Angular Version:** 19.2.0
**Tailwind Version:** 3.4.19
**Node Version:** 22.14.0
