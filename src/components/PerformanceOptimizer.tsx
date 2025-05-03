'use client';

import { useEffect } from 'react';

/**
 * PerformanceOptimizer component
 * Implements LCP optimizations and marks when JavaScript is loaded
 */
export default function PerformanceOptimizer() {
  useEffect(() => {
    // Mark document as JavaScript-loaded to enable animations
    document.documentElement.classList.add('js-loaded');
    
    // Register performance observer for LCP monitoring
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        // Log LCP time for debugging
        console.log('LCP:', lastEntry.startTime);
        
        // Once LCP is complete, enable animations and non-critical features
        if (lastEntry.startTime > 0) {
          document.documentElement.classList.add('lcp-complete');
        }
      });
      
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    }
    
    // Preconnect to any domains used for assets
    const preconnectDomains = [
      'https://images.unsplash.com'
    ];
    
    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
    
    return () => {
      // Clean up if needed
    };
  }, []);
  
  return null;
}
