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
    </>
  );
}
