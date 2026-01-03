import { Component, OnInit, AfterViewInit, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

interface Feature {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

interface Step {
  number: number;
  title: string;
  description: string;
}

interface Statistic {
  value: string;
  label: string;
  prefix?: string;
}

interface Screenshot {
  id: number;
  title: string;
  image: string;
  thumbnail: string;
}

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  isDarkMode = false;
  isScrolled = false;
  isMobileMenuOpen = false;
  signupForm!: FormGroup;
  activeScreenshot = 0;

  features: Feature[] = [
    {
      icon: 'chart',
      title: 'Analytics Dashboard',
      description: 'Visual charts and insights with real-time financial overview to track your money',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'bank',
      title: 'Multi-Account Management',
      description: 'Track multiple bank accounts and wallets with unified balance view',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'tag',
      title: 'Smart Categorization',
      description: '18+ pre-built categories for income & expense tracking made simple',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: 'list',
      title: 'Transaction History',
      description: 'Complete transaction logs with advanced filtering and search options',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: 'target',
      title: 'Budget Planning',
      description: 'Set category budgets with visual progress tracking and alerts',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: 'bell',
      title: 'Financial Reminders',
      description: 'Never miss bill payments with custom notification system',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: 'users',
      title: 'User Management',
      description: 'Role-based access control with multi-user support for families',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: 'shield',
      title: 'Secure & Private',
      description: 'Encrypted data storage - your data, your control, always protected',
      gradient: 'from-emerald-500 to-green-500'
    }
  ];

  steps: Step[] = [
    {
      number: 1,
      title: 'Create Account',
      description: 'Sign up in 30 seconds with just your email and password. No credit card required.'
    },
    {
      number: 2,
      title: 'Add Transactions',
      description: 'Track income & expenses easily with smart categorization and quick entry.'
    },
    {
      number: 3,
      title: 'Get Insights',
      description: 'View analytics & make better financial decisions with powerful visualizations.'
    }
  ];

  statistics: Statistic[] = [
    { value: '73.4K+', label: 'Tracked in Income', prefix: '₹' },
    { value: '72.2K+', label: 'Managed in Expenses', prefix: '₹' },
    { value: '18+', label: 'Categories Available' },
    { value: '100%', label: 'Data Security' }
  ];

  screenshots: Screenshot[] = [
    { id: 0, title: 'Analytics Dashboard', image: '/assets/images/dashboard.png', thumbnail: '/assets/images/dashboard.png' },
    { id: 1, title: 'Accounts', image: '/assets/images/accounts.png', thumbnail: '/assets/images/accounts.png' },
    { id: 2, title: 'Categories', image: '/assets/images/categories.png', thumbnail: '/assets/images/categories.png' },
    { id: 3, title: 'Transactions', image: '/assets/images/transactions.png', thumbnail: '/assets/images/transactions.png' },
    { id: 4, title: 'Budget Management', image: '/assets/images/budget.png', thumbnail: '/assets/images/budget.png' },
    { id: 5, title: 'Reminders', image: '/assets/images/reminders.png', thumbnail: '/assets/images/reminders.png' },
    { id: 6, title: 'User Management', image: '/assets/images/users.png', thumbnail: '/assets/images/users.png' },
    { id: 7, title: 'My Profile', image: '/assets/images/profile.png', thumbnail: '/assets/images/profile.png' }
  ];

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });

    if (isPlatformBrowser(this.platformId)) {
      // Check for saved theme preference or system preference
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      this.isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
      this.applyTheme();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimations();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 50;
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  applyTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  smoothScrollTo(elementId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(elementId);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.closeMobileMenu();
    }
  }

  selectScreenshot(index: number): void {
    this.activeScreenshot = index;
  }

  onSignup(): void {
    if (this.signupForm.valid) {
      const email = this.signupForm.value.email;
      console.log('Signup email:', email);
      // Navigate to register page
      this.router.navigate(['/register']);
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

  getIconSvg(iconName: string): string {
    const icons: { [key: string]: string } = {
      chart: '<path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />',
      bank: '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />',
      tag: '<path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />',
      list: '<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />',
      target: '<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />',
      bell: '<path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />',
      users: '<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />',
      shield: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />'
    };
    return icons[iconName] || '';
  }

  private initScrollAnimations(): void {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-slide-up');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }
  }
}
