'use client';

import { useEffect } from 'react';

/**
 * Loads the Smartlook recorder on first user interaction (or after an 8s
 * fallback) so session-recording JS never competes with page load.
 */
export default function SmartlookScript() {
  useEffect(() => {
    let loaded = false;
    const events = ['pointerdown', 'scroll', 'keydown', 'touchstart'] as const;

    const load = () => {
      if (loaded) return;
      loaded = true;
      events.forEach((e) => window.removeEventListener(e, load));

      const w = window as any;
      if (w.smartlook) return;
      w.smartlook = function () {
        w.smartlook.api.push(arguments);
      };
      w.smartlook.api = [];

      const script = document.createElement('script');
      script.async = true;
      script.charset = 'utf-8';
      script.src = 'https://web-sdk.smartlook.com/recorder.js';
      document.head.appendChild(script);

      w.smartlook('init', '16b1c25bc4080c8f07797dac32f4074aa0ec00c5', { region: 'eu' });
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
