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
        href="/assets/images/hero-background.png" 
        as="image" 
        type="image/png" 
        fetchPriority="high"
      />
    </>
  );
}
