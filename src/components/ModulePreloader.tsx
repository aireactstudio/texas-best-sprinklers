'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * ModulePreloader - Intelligently preloads JavaScript modules based on the current route
 * This helps reduce JavaScript execution time by preparing modules before they're needed
 */
const ModulePreloader: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Only run in production and in the browser
    if (process.env.NODE_ENV !== 'production' || typeof window === 'undefined') {
      return;
    }

    // Wait until browser is idle
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        preloadModulesForRoute(pathname);
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        preloadModulesForRoute(pathname);
      }, 200);
    }
  }, [pathname]);

  /**
   * Preload modules based on the current route
   */
  const preloadModulesForRoute = (path: string) => {
    // Home page preloads
    if (path === '/') {
      import('./ServicesSection').catch(() => {});
      import('./TestimonialsSection').catch(() => {});
    }
    
    // Location pages preloads (e.g., /fort-worth)
    else if (/^\/(fort-worth|arlington|keller|southlake|colleyville)/.test(path)) {
      import('./location-homepages/LocationHeroSection').catch(() => {});
      import('./ServicesSection').catch(() => {});
      import('./location-homepages/LocationLocalInfo').catch(() => {});
    }
    
    // Service pages preloads (e.g., /services/sprinkler-repair)
    else if (/^\/services\//.test(path)) {
      import('./ServicesSection').catch(() => {});
      import('./TestimonialsSection').catch(() => {});
    }
    
    // Contact page preloads
    else if (path === '/contact') {
      import('./Footer').catch(() => {});
      import('./TestimonialsSection').catch(() => {});
    }

    // Global components that might be needed soon
    import('../components/Footer').catch(() => {});
  };

  return null; // This component doesn't render anything
};

export default ModulePreloader;
