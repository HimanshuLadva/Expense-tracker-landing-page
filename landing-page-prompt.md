# OBJECTIVE
Create a professional, conversion-focused landing page for an Expense Tracker web application inspired by Runway.com's modern design aesthetic, showcasing features, demonstrating value, and driving user sign-ups.

# DESIGN INSPIRATION
**Reference Website:** https://runway.com/
- Modern, clean aesthetic with bold typography
- Smooth animations and transitions
- Premium feel with ample whitespace
- Interactive elements and micro-interactions
- Dark/light theme flexibility
- Video/animation integration style
- Card-based layouts with depth
- Gradient accents and modern color usage

# DELIVERABLES
1. Complete Angular 19 component with TypeScript logic
2. Responsive Tailwind CSS styling with modern design
3. Reusable UI components (Hero, Features, CTA sections)
4. Smooth scroll animations and interactions (AOS or custom)
5. Mobile-first responsive design
6. SEO-optimized structure
7. Runway-inspired visual elements and animations

# TECHNICAL SPECIFICATIONS

## Framework & Tools
- Angular 19 with standalone components
- TypeScript (strict mode)
- **Tailwind CSS 3.x** (primary styling framework)
- Tailwind plugins: @tailwindcss/forms, @tailwindcss/typography
- Angular Router integration
- Reactive Forms for sign-up/contact
- Optional: AOS (Animate On Scroll) library for animations

## Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        accent: {
          500: '#8b5cf6',
          600: '#7c3aed',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

## Component Structure
```
landing-page/
├── landing-page.component.ts
├── landing-page.component.html
├── landing-page.component.css (Tailwind classes)
└── sections/
    ├── hero/
    ├── features/
    ├── how-it-works/
    ├── screenshots/
    ├── statistics/
    └── cta/
```

## Required Sections

### 1. HERO SECTION (Runway-Inspired)
**Design Style:**
- Full viewport height background with gradient
- Large, bold headline with gradient text effect
- Animated background particles or subtle gradient animation
- Floating dashboard preview (3D tilt effect on hover)
- Glass-morphism effect on elements

**Content:**
- **Headline:** "Take Control of Your Finances" 
  - Use `text-6xl md:text-7xl lg:text-8xl font-bold`
  - Gradient text: `bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`
- **Subheadline:** "Track expenses, manage budgets, and gain financial insights with powerful analytics - all in one beautiful platform"
  - `text-xl md:text-2xl text-gray-600 dark:text-gray-300`
- **CTA Buttons:**
  - Primary: "Get Started Free" 
    - `bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1`
  - Secondary: "Watch Demo" 
    - `border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300`
- **Hero Visual:** 
  - Dashboard screenshot with floating cards effect
  - 3D perspective transform on scroll
  - Animated chart elements

**Tailwind Classes Example:**
```html
<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
  <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
  <div class="container mx-auto px-6 relative z-10">
    <!-- Content here -->
  </div>
</section>
```

### 2. FEATURES SHOWCASE (Card Grid - Runway Style)
**Design Style:**
- Bento-box grid layout (asymmetric cards like Runway)
- Cards with glass-morphism effect
- Hover animations with scale and shadow
- Icon animations on hover
- Gradient borders on cards

Display these 8 core features:

1. **Analytics Dashboard**
   - Icon: Chart/Graph (animated on hover)
   - Visual charts and insights
   - Real-time financial overview

2. **Multi-Account Management**
   - Icon: Bank building (pulse animation)
   - Track multiple bank accounts, wallets
   - Unified balance view

3. **Smart Categorization**
   - Icon: Tags/Folder
   - 18+ pre-built categories
   - Income & expense tracking

4. **Transaction History**
   - Icon: List/Receipt
   - Complete transaction logs
   - Advanced filtering options

5. **Budget Planning**
   - Icon: Target/Goal
   - Set category budgets
   - Visual progress tracking

6. **Financial Reminders**
   - Icon: Bell/Notification
   - Never miss bill payments
   - Custom notification system

7. **User Management**
   - Icon: Users/Team
   - Role-based access control
   - Multi-user support

8. **Secure & Private**
   - Icon: Shield/Lock
   - Encrypted data storage
   - Your data, your control

**Tailwind Card Structure:**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div class="group relative p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
    <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <!-- Icon SVG -->
    </div>
    <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Feature Title</h3>
    <p class="text-gray-600 dark:text-gray-400">Feature description</p>
  </div>
</div>
```

### 3. HOW IT WORKS (Animated Timeline - Runway Style)
**Design Style:**
- Vertical timeline with connecting line
- Animated progression on scroll
- Number badges with gradient
- Step cards slide in from alternating sides

**3 Steps:**
1. **Create Account** - Sign up in 30 seconds
2. **Add Transactions** - Track income & expenses
3. **Get Insights** - View analytics & make better decisions

**Tailwind Structure:**
```html
<div class="relative">
  <!-- Vertical line -->
  <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>
  
  <!-- Steps -->
  <div class="space-y-24">
    <div class="flex items-center justify-start md:justify-end md:pr-16">
      <div class="w-full md:w-5/12 p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl">
        <div class="flex items-center gap-4 mb-4">
          <span class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">1</span>
          <h3 class="text-2xl font-bold">Create Account</h3>
        </div>
        <p class="text-gray-600 dark:text-gray-400">Sign up in 30 seconds</p>
      </div>
    </div>
  </div>
</div>
```

### 4. STATISTICS/TRUST SECTION (Animated Counters)
**Design Style:**
- Large animated numbers (count-up effect)
- Grid layout with gradient backgrounds
- Icon + Number + Label format
- Parallax effect on scroll

**Stats:**
- "₹73.4K+ Tracked in Income"
- "₹72.2K+ Managed in Expenses"
- "18+ Categories Available"
- "100% Data Security"

**Tailwind Classes:**
```html
<div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
  <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm">
    <div class="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
      ₹73.4K+
    </div>
    <p class="text-gray-600 dark:text-gray-400">Tracked in Income</p>
  </div>
</div>
```

### 5. SCREENSHOTS/DEMO SECTION (Interactive Gallery)
**Design Style:**
- Tabbed interface showing different app screens
- Large preview with smaller thumbnails
- 3D tilt effect on hover (like Runway's product showcases)
- Smooth transitions between screens
- Browser mockup frame

**Content:**
- Dashboard view
- Transactions view
- Budget management
- Analytics charts
- Mobile responsive preview

**Tailwind Structure:**
```html
<div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 shadow-2xl">
  <div class="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
    <img src="dashboard-screenshot.png" class="w-full h-auto" alt="Dashboard" />
  </div>
  
  <!-- Thumbnails -->
  <div class="flex gap-4 mt-8 justify-center">
    <button class="w-20 h-20 rounded-lg overflow-hidden border-2 border-blue-500 opacity-100 transition-all">
      <img src="thumb1.png" />
    </button>
    <!-- More thumbnails -->
  </div>
</div>
```

### 6. CTA SECTION (Bottom - Runway Style)
**Design Style:**
- Full-width gradient background
- Large centered text
- Glass-morphism card for form
- Subtle animation on background

**Content:**
- "Start Managing Your Money Today"
- Sign-up form or button to /register route
- "Join thousands of users taking control of their finances"

**Tailwind Classes:**
```html
<section class="relative py-24 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
  <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
  
  <div class="container mx-auto px-6 relative z-10 text-center">
    <h2 class="text-5xl md:text-6xl font-bold text-white mb-6">
      Start Managing Your Money Today
    </h2>
    <p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
      Join thousands of users taking control of their finances
    </p>
    
    <!-- Form or CTA button -->
    <div class="max-w-md mx-auto backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20">
      <input type="email" placeholder="Enter your email" 
        class="w-full px-6 py-4 rounded-xl bg-white/90 text-gray-900 placeholder-gray-500 mb-4" />
      <button class="w-full bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl">
        Get Started Free
      </button>
    </div>
  </div>
</section>
```

### 7. FOOTER (Minimal - Runway Style)
**Design Style:**
- Clean, minimal layout
- Subtle divider line
- Hover effects on links
- Social icons with gradient on hover

**Content:**
- Quick links: Features, Pricing, Contact, Privacy, Terms
- Social media icons
- Copyright © 2025 Expense Tracker

**Tailwind Classes:**
```html
<footer class="border-t border-gray-200 dark:border-gray-800 py-12">
  <div class="container mx-auto px-6">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
      <div>
        <h4 class="font-semibold mb-4">Product</h4>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-600 hover:text-blue-600 transition-colors">Features</a></li>
        </ul>
      </div>
    </div>
    
    <div class="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
      <p class="text-gray-600 dark:text-gray-400">© 2025 Expense Tracker. All rights reserved.</p>
      <div class="flex gap-4 mt-4 md:mt-0">
        <!-- Social icons -->
      </div>
    </div>
  </div>
</footer>
```

## DESIGN REQUIREMENTS (Runway-Inspired)

### Color Scheme (Tailwind Config)
- **Primary:** Blue shades (blue-500 to blue-700)
- **Secondary:** Purple/Violet (purple-500 to purple-700)
- **Accent:** Pink gradients for CTAs
- **Success:** Green (emerald-500)
- **Danger:** Red (red-500)
- **Neutral:** Gray scale (gray-50 to gray-900)
- **Dark Mode:** Full dark theme support

### Typography (Tailwind)
- **Font Family:** 
  - Display: 'Poppins' or 'Inter' (font-display)
  - Body: 'Inter' (font-sans)
- **Sizes (Tailwind classes):**
  - H1: `text-6xl md:text-7xl lg:text-8xl`
  - H2: `text-4xl md:text-5xl lg:text-6xl`
  - H3: `text-2xl md:text-3xl lg:text-4xl`
  - Body: `text-base md:text-lg`
  - Small: `text-sm`

### Spacing & Layout (Tailwind)
- **Container:** `container mx-auto px-6`
- **Max width:** `max-w-7xl`
- **Section padding:** `py-20 md:py-32`
- **Card gaps:** `gap-6 md:gap-8`
- **Grid:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### Animations (Tailwind + Custom)
- **Hover effects:** `hover:scale-105 hover:-translate-y-2 transition-all duration-300`
- **Fade in:** `animate-fade-in`
- **Slide up:** `animate-slide-up`
- **Float effect:** `animate-float`
- **Gradient animation:** Custom keyframes for background gradients
- **AOS Integration:** 
```html
  data-aos="fade-up" 
  data-aos-duration="800"
  data-aos-delay="200"
```

### Glass-morphism Effect (Runway Style)
```html
<div class="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl">
  <!-- Content -->
</div>
```

### Gradient Backgrounds
```html
<!-- Hero gradient -->
<div class="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

<!-- Card gradient border -->
<div class="bg-gradient-to-r from-blue-500 to-purple-600 p-[2px] rounded-2xl">
  <div class="bg-white dark:bg-gray-900 rounded-2xl p-8">
    <!-- Content -->
  </div>
</div>
```

## FUNCTIONALITY REQUIREMENTS

### Navigation (Sticky Header)
```html
<nav class="fixed top-0 w-full z-50 transition-all duration-300 
  [&.scrolled]:bg-white/80 [&.scrolled]:backdrop-blur-lg 
  [&.scrolled]:shadow-lg dark:[&.scrolled]:bg-gray-900/80">
  <div class="container mx-auto px-6 py-4 flex items-center justify-between">
    <div class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Expense Tracker
    </div>
    
    <!-- Desktop menu -->
    <div class="hidden md:flex items-center gap-8">
      <a href="#features" class="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
      <a href="#how-it-works" class="text-gray-700 hover:text-blue-600 transition-colors">How it Works</a>
      <a href="/login" class="text-gray-700 hover:text-blue-600 transition-colors">Login</a>
      <a href="/register" class="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all">
        Sign Up
      </a>
    </div>
    
    <!-- Mobile menu button -->
    <button class="md:hidden">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</nav>
```

### TypeScript for Scroll Effects
```typescript
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }
  
  features = [
    {
      icon: 'chart-icon',
      title: 'Analytics Dashboard',
      description: 'Visual charts and real-time financial overview',
      gradient: 'from-blue-500 to-cyan-500'
    },
    // ... more features
  ];
  
  statistics = [
    { value: '73.4K+', label: 'Tracked in Income', prefix: '₹' },
    { value: '72.2K+', label: 'Managed in Expenses', prefix: '₹' },
    { value: '18+', label: 'Categories Available' },
    { value: '100%', label: 'Data Security' }
  ];
  
  signupForm: FormGroup;
  
  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }
  
  ngAfterViewInit() {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }
  
  onSignup() {
    if (this.signupForm.valid) {
      // Handle signup
      console.log('Email:', this.signupForm.value.email);
      // Navigate to register or show success message
    }
  }
  
  smoothScrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
```

### Forms with Tailwind
```html
<form [formGroup]="signupForm" (ngSubmit)="onSignup()" 
  class="max-w-md mx-auto backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20">
  <input 
    type="email" 
    formControlName="email"
    placeholder="Enter your email" 
    class="w-full px-6 py-4 rounded-xl bg-white/90 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" 
  />
  <div *ngIf="signupForm.get('email')?.invalid && signupForm.get('email')?.touched" 
    class="text-red-500 text-sm mb-4">
    Please enter a valid email
  </div>
  <button 
    type="submit"
    [disabled]="signupForm.invalid"
    class="w-full bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed">
    Get Started Free
  </button>
</form>
```

### Responsive Breakpoints (Tailwind Default)
- **Mobile:** Default (0px+)
- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

### Performance Optimizations
```html
<!-- Lazy load images -->
<img loading="lazy" src="screenshot.png" alt="Dashboard" />

<!-- Optimize images with Next-gen formats -->
<picture>
  <source srcset="dashboard.webp" type="image/webp">
  <img src="dashboard.png" alt="Dashboard" />
</picture>

<!-- Defer non-critical resources -->
<link rel="preconnect" href="https://fonts.googleapis.com">
```

## ADDITIONAL RUNWAY-INSPIRED FEATURES

### 1. Animated Background Gradient
```typescript
// In component
animateGradient() {
  // Smooth gradient animation logic
}
```
```html
<div class="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-gradient"></div>
```

### 2. Particle Effect Background
```html
<div class="absolute inset-0 overflow-hidden">
  <div class="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
  <div class="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style="animation-delay: 2s;"></div>
</div>
```

### 3. Interactive Feature Cards
```typescript
hoveredFeature: number | null = null;

onFeatureHover(index: number) {
  this.hoveredFeature = index;
}
```

### 4. Smooth Scroll Reveal
```typescript
ngAfterViewInit() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up');
      }
    });
  });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
```

## ASSETS NEEDED
- **Icons:** Heroicons or Lucide React (SVG icons)
- **Illustrations:** unDraw, Storyset, or custom illustrations
- **App Screenshots:** Use provided images (Dashboard, Transactions, Budget, etc.)
- **Logo:** Create gradient logo matching brand
- **Favicon:** Multi-resolution favicon set

## INTEGRATION POINTS
```typescript
// Router navigation
constructor(private router: Router) {}

navigateToLogin() {
  this.router.navigate(['/login']);
}

navigateToRegister() {
  this.router.navigate(['/register']);
}

navigateToDashboard() {
  this.router.navigate(['/dashboard']);
}

// API placeholder
async submitSignup(email: string) {
  try {
    // const response = await this.apiService.signup(email);
    console.log('Signup successful');
    this.router.navigate(['/register']);
  } catch (error) {
    console.error('Signup failed', error);
  }
}
```

## ACCESSIBILITY (WCAG 2.1 AA)
```html
<!-- Semantic HTML -->
<nav aria-label="Main navigation">
<main>
<section aria-labelledby="features-heading">
  <h2 id="features-heading">Features</h2>
</section>

<!-- ARIA labels -->
<button aria-label="Open mobile menu">
<img alt="Dashboard screenshot showing analytics" />

<!-- Keyboard navigation -->
<a href="#main-content" class="sr-only focus:not-sr-only">Skip to content</a>

<!-- Focus styles -->
class="focus:ring-2 focus:ring-blue-500 focus:outline-none"

<!-- Color contrast -->
<!-- Ensure all text meets 4.5:1 contrast ratio -->
```

## DARK MODE IMPLEMENTATION
```html
<!-- Toggle button -->
<button (click)="toggleDarkMode()" 
  class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
  <svg *ngIf="!isDarkMode" class="w-6 h-6" fill="none" stroke="currentColor">
    <!-- Moon icon -->
  </svg>
  <svg *ngIf="isDarkMode" class="w-6 h-6" fill="none" stroke="currentColor">
    <!-- Sun icon -->
  </svg>
</button>
```
```typescript
isDarkMode = false;

ngOnInit() {
  // Check system preference or localStorage
  this.isDarkMode = localStorage.getItem('theme') === 'dark' || 
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  this.applyTheme();
}

toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode;
  this.applyTheme();
}

applyTheme() {
  if (this.isDarkMode) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}
```

## SUCCESS CRITERIA
✅ Runway.com-inspired modern, premium design aesthetic
✅ Fully responsive using Tailwind CSS classes across all devices
✅ Smooth animations and micro-interactions
✅ Glass-morphism and gradient effects throughout
✅ All sections implemented with Tailwind utilities
✅ Dark mode fully functional
✅ Interactive hover states and transitions
✅ Clean, maintainable Tailwind classes (no custom CSS unless necessary)
✅ SEO-friendly HTML structure
✅ Accessible (ARIA labels, keyboard navigation, focus states)
✅ Performance optimized (lazy loading, optimized images)
✅ Ready for production deployment
✅ Mobile-first responsive design
✅ Smooth scroll behavior and section reveals

## ADDITIONAL NOTES
- **Tailwind JIT:** Use Just-In-Time mode for optimal performance
- **PurgeCSS:** Configure to remove unused Tailwind classes in production
- **Custom utilities:** Add to `tailwind.config.js` if needed
- **Component extraction:** Use `@apply` sparingly, prefer inline classes
- **Plugins:** 
  - Install: `npm install -D tailwindcss @tailwindcss/forms @tailwindcss/typography`
  - Optional: `@tailwindcss/aspect-ratio`, `@tailwindcss/line-clamp`
- **AOS Library:** 
  - Install: `npm install aos`
  - Import in component: `import AOS from 'aos'; import 'aos/dist/aos.css';`
- Follow Angular + Tailwind best practices
- Keep Tailwind config minimal and organized
- Use Tailwind's arbitrary values when needed: `w-[37.5rem]`
- Leverage Tailwind's group and peer modifiers for complex interactions

## OUTPUT FORMAT
Provide complete code files with:
1. ✅ Component TypeScript file (`landing-page.component.ts`)
2. ✅ Template HTML file with Tailwind classes (`landing-page.component.html`)
3. ✅ Tailwind configuration file (`tailwind.config.js`)
4. ✅ Any required sub-components with Tailwind styling
5. ✅ Custom CSS file (only if absolutely necessary - prefer Tailwind)
6. ✅ Package.json dependencies (Tailwind, AOS, etc.)
7. ✅ Brief setup/usage instructions
8. ✅ Angular configuration for Tailwind (`angular.json` updates)

## TAILWIND SETUP INSTRUCTIONS TO INCLUDE
```bash
# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# Install optional plugins
npm install -D @tailwindcss/forms @tailwindcss/typography

# Install AOS for animations
npm install aos
npm install --save-dev @types/aos

# Configure angular.json
# Add to styles array: "node_modules/aos/dist/aos.css"
```
```css
/* src/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom animations if needed */
@layer utilities {
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 15s ease infinite;
  }
  
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
}
```