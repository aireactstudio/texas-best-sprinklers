'use client';

import { useEffect } from 'react';

/**
 * Adds the CSS gate classes (js-loaded / lcp-complete) that critical.css
 * relies on to enable animations after load. The hero image preload itself
 * lives in the <head> (see layout.tsx / head-preload.tsx).
 */
export default function ResourcePreloader() {
  useEffect(() => {
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
