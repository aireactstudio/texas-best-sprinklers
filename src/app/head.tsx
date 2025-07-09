'use client';

import React from 'react';

/**
 * Custom head component for preloading critical assets
 */
export default function Head() {
  return (
    <>
      {/* Preload the hero image for faster LCP */}
      <link 
        rel="preload" 
        href="https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/b96197d9-8f69-4145-7b7b-0b5a7ba70900/public" 
        as="image" 
        type="image/webp" 
        fetchPriority="high"
      />
      {/* Ensure mobile devices use the full screen including the notch area */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      {/* Match the browser chrome color with the hero background */}
      <meta name="theme-color" content="#1A3E68" />
      {/* Allow content to extend into the iOS status bar area */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </>
  );
}
