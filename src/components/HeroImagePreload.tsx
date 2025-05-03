'use client';

import { useEffect } from 'react';

/**
 * HeroImagePreload - Prioritizes the hero image with link preload
 * This explicitly tells the browser to preload the hero image with highest priority
 * to fix LCP issues
 */
const HeroImagePreload = ({ imagePath }: { imagePath: string }) => {
  useEffect(() => {
    // Create a preload link element for the hero image
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    // Use Next.js image optimization but respect original format (will auto-convert to WebP when possible)
    const optimizedPath = `/_next/image?url=${encodeURIComponent(imagePath)}&w=1920&q=75`;
    preloadLink.href = optimizedPath;
    
    // Set appropriate content type based on image extension
    const imageType = imagePath.toLowerCase().endsWith('.webp') ? 'image/webp' : 
                     imagePath.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg';
    preloadLink.type = imageType;
    preloadLink.fetchPriority = 'high';
    
    // Add it to the document head for immediate loading
    document.head.appendChild(preloadLink);
    
    // Clean up on component unmount
    return () => {
      document.head.removeChild(preloadLink);
    };
  }, [imagePath]);

  return null; // This component doesn't render anything
};

export default HeroImagePreload;
