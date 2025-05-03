'use client';

import React, { useEffect } from 'react';

/**
 * StyleManager component
 * Handles optimized loading of non-critical CSS
 */
export default function StyleManager() {
  useEffect(() => {
    // Load non-critical CSS asynchronously after page load
    const loadNonCriticalCSS = () => {
      const links = [
        { rel: 'stylesheet', href: '/styles/pages.css' }
      ];
      
      links.forEach(({ rel, href }) => {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        document.head.appendChild(link);
      });
    };
    
    // Use requestIdleCallback for best performance (with fallback)
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => loadNonCriticalCSS());
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(loadNonCriticalCSS, 2000);
    }
    
    return () => {
      // Cleanup if needed
    };
  }, []);
  
  return null;
}
