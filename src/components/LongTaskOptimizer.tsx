'use client';

import { useEffect } from 'react';

// Define interface for PerformanceEntry with attribution
interface PerformanceLongTaskEntry extends PerformanceEntry {
  attribution?: Array<{
    name: string;
    entryType: string;
    startTime: number;
    duration: number;
  }>;
}

/**
 * LongTaskOptimizer - Component to help identify and optimize long tasks
 * This component can be added to layout.tsx to monitor and help reduce long tasks
 */
const LongTaskOptimizer: React.FC = () => {
  useEffect(() => {
    // Only run in production and in the browser
    if (process.env.NODE_ENV !== 'production' || typeof window === 'undefined') {
      return;
    }

    // Monitor long tasks (tasks that block the main thread for more than 50ms)
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            // Cast entry to our extended type
            const longTaskEntry = entry as PerformanceLongTaskEntry;
            
            // Log long tasks to help identify optimization opportunities
            console.log('Long task detected:', 
              longTaskEntry.name, 
              'Duration:', longTaskEntry.duration.toFixed(2) + 'ms',
              longTaskEntry.attribution && longTaskEntry.attribution.length 
                ? `Source: ${longTaskEntry.attribution[0].name}` 
                : '');
          }
        });
        
        // Start observing long task events
        observer.observe({ type: 'longtask', buffered: true });
        
        return () => {
          observer.disconnect();
        };
      } catch (e) {
        console.warn('Long task monitoring not supported in this browser');
      }
    }
  }, []);

  // Implement main thread optimization techniques
  useEffect(() => {
    // Break up long tasks using setTimeout to yield to the browser
    function yieldToMain() {
      return new Promise(resolve => {
        setTimeout(resolve, 0);
      });
    }

    // Add this to the window for use in other components
    if (typeof window !== 'undefined') {
      (window as any).yieldToMain = yieldToMain;
    }

    // Pre-connect to critical domains
    const preconnectDomains = [
      'https://imagedelivery.net',
      'https://maps.googleapis.com',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

  }, []);

  return null; // This component doesn't render anything
};

export default LongTaskOptimizer;
