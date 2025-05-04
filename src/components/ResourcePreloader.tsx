'use client';

import React, { useEffect } from 'react';

/**
 * Component for preloading critical resources for LCP optimization
 * This handles resource preloading in a client-side manner for Next.js
 */
export default function ResourcePreloader() {
  useEffect(() => {
    // Critical resources to preload
    const resourcesToPreload = [
      {
        rel: 'preload',
        href: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/b96197d9-8f69-4145-7b7b-0b5a7ba70900/public',
        as: 'image',
        fetchPriority: 'high'
      }
    ];
    
    // Critical domains to preconnect to
    const domainsToPreconnect = [
      'https://images.unsplash.com'
    ];
    
    // Add preload links
    resourcesToPreload.forEach(resource => {
      const link = document.createElement('link');
      link.rel = resource.rel;
      link.href = resource.href;
      link.as = resource.as;
      if (resource.fetchPriority) {
        link.setAttribute('fetchpriority', resource.fetchPriority);
      }
      document.head.appendChild(link);
    });
    
    // Add preconnect links
    domainsToPreconnect.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
    
    // Mark document for JavaScript-enabled features
    document.documentElement.classList.add('js-loaded');
    
    // Listen for LCP completion
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          // Log LCP time for debugging
          console.log('LCP completed in:', lastEntry.startTime, 'ms');
          
          // Enable animations and non-critical features after LCP
          if (lastEntry.startTime > 0) {
            document.documentElement.classList.add('lcp-complete');
          }
          
          // Disconnect observer after LCP is recorded
          lcpObserver.disconnect();
        });
        
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {
        console.error('LCP observer error:', e);
      }
    }
    
    return () => {
      // Cleanup not strictly necessary for most of these operations
    };
  }, []);
  
  return null;
}
