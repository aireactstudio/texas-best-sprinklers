/**
 * Lazily loaded component exports
 * This centralized file provides optimized imports for larger components
 * that don't need to be loaded immediately
 */
import { createLazyComponent } from '@/components/LazyComponent';

// Below-the-fold components that can be lazy loaded
export const LazyTestimonialsSection = createLazyComponent(
  () => import('@/components/TestimonialsSection'),
  { id: 'testimonials-section', ssr: false }
);

export const LazyHowItWorksSection = createLazyComponent(
  () => import('@/components/HowItWorksSection'),
  { id: 'how-it-works-section', ssr: false }
);

export const LazyContactForm = createLazyComponent(
  () => import('@/components/ContactForm'),
  { id: 'contact-form', ssr: false }
);

export const LazyLocalFAQ = createLazyComponent(
  () => import('@/components/LocalFAQ'),
  { id: 'local-faq', ssr: false }
);

export const LazyLocalProjects = createLazyComponent(
  () => import('@/components/LocalProjects'),
  { id: 'local-projects', ssr: false }
);

export const LazyBlogPreview = createLazyComponent(
  () => import('@/components/BlogPreview'),
  { id: 'blog-preview', ssr: false }
);

// We still SSR the StatsSection as it might be important for SEO
export const LazyStatsSection = createLazyComponent(
  () => import('@/components/StatsSection'),
  { 
    id: 'stats-section', 
    ssr: true
    // Cannot use JSX in .ts files, we'll set fallback in the component itself
  }
);
