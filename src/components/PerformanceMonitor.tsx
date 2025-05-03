'use client';

import { useEffect } from 'react';
import { performanceMetrics } from '@/utils/performance';

/**
 * Silent performance monitoring component
 * Tracks key performance metrics without affecting the UI
 */
export default function PerformanceMonitor() {
  useEffect(() => {
    const { mark, measure, reportWebVitals } = performanceMetrics();
    
    // Mark initial load
    mark('app-init');
    
    // Mark when component mounts (hydration complete)
    mark('hydration-complete');
    
    // Report initial render time
    measure('initial-render', 'app-init', 'hydration-complete');
    
    // Setup Web Vitals monitoring
    reportWebVitals();
    
    // Handle page visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // When page becomes visible again
        mark('visibility-visible');
      } else {
        // When page is hidden
        mark('visibility-hidden');
      }
    };
    
    // Watch for page visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Mark fully loaded
    window.addEventListener('load', () => {
      mark('fully-loaded');
      measure('total-load-time', 'app-init', 'fully-loaded');
    });
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  
  return null;
}
