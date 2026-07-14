'use client';

import { useEffect } from 'react';

/**
 * Ensures the hero image is prioritized for LCP.
 * imagePath must match LocationHeroSection.
 */
interface HeroImagePreloadProps {
  imagePath: string;
}

const HeroImagePreload = ({ imagePath }: HeroImagePreloadProps) => {
  useEffect(() => {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = imagePath;
    preloadLink.type = imagePath.toLowerCase().endsWith('.webp')
      ? 'image/webp'
      : imagePath.toLowerCase().endsWith('.png')
        ? 'image/png'
        : 'image/jpeg';
    preloadLink.fetchPriority = 'high';
    document.head.appendChild(preloadLink);

    const img = new Image();
    img.fetchPriority = 'high';
    img.src = imagePath;

    return () => {
      if (preloadLink.parentNode === document.head) {
        document.head.removeChild(preloadLink);
      }
    };
  }, [imagePath]);

  return null;
};

export default HeroImagePreload;
