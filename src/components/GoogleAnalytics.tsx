'use client';

import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-YK85HJGEXC';

/**
 * Loads gtag.js on the first user interaction (or after an 8s fallback)
 * so analytics never competes with page load / main-thread work.
 */
export default function GoogleAnalytics() {
  useEffect(() => {
    let loaded = false;
    const events = ['pointerdown', 'scroll', 'keydown', 'touchstart'] as const;

    const load = () => {
      if (loaded) return;
      loaded = true;
      events.forEach((e) => window.removeEventListener(e, load));

      const w = window as any;
      w.dataLayer = w.dataLayer || [];
      w.gtag =
        w.gtag ||
        function gtag() {
          w.dataLayer.push(arguments);
        };
      w.gtag('js', new Date());
      w.gtag('config', GA_MEASUREMENT_ID);

      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);
    };

    events.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }));
    const fallback = setTimeout(load, 8000);

    return () => {
      clearTimeout(fallback);
      events.forEach((e) => window.removeEventListener(e, load));
    };
  }, []);

  return null;
}
