'use client';

import React, { useEffect } from 'react';

/**
 * Preloads the same hero asset used by LocationHeroSection so LCP isn't
 * competing with a mismatched Cloudflare URL.
 */
export default function ResourcePreloader() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '/assets/images/optimized/hero-background.webp';
    link.as = 'image';
    link.type = 'image/webp';
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);

    document.documentElement.classList.add('js-loaded');

    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];

          if (lastEntry.startTime > 0) {
            document.documentElement.classList.add('lcp-complete');
          }

          lcpObserver.disconnect();
        });

        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch {
        // LCP observer not supported
      }
    }
  }, []);

  return null;
}
