'use client';

import { useEffect } from 'react';
import Head from 'next/head';

/**
 * HeroImagePreload - Prioritizes the hero image with link preload
 * This explicitly tells the browser to preload the hero image with highest priority
 * to fix LCP issues
 */
interface HeroImagePreloadProps {
  imagePath: string;
}

const HeroImagePreload = ({ imagePath }: HeroImagePreloadProps) => {
  useEffect(() => {
    // Create a preload link element for the hero image
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = imagePath;
    
    // Set appropriate content type based on image extension
    const imageType = imagePath.toLowerCase().endsWith('.webp') ? 'image/webp' : 
                     imagePath.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg';
    preloadLink.type = imageType;
    preloadLink.fetchPriority = 'high';
    
    // Add it to the document head for immediate loading
    document.head.appendChild(preloadLink);
    
    // Programmatically preload the image as well
    const img = new Image();
    img.src = imagePath;
    
    // Clean up on component unmount
    return () => {
      if (preloadLink.parentNode === document.head) {
        document.head.removeChild(preloadLink);
      }
    };
  }, [imagePath]);

  return (
    <Head>
      <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      <link rel="preload" href={imagePath} as="image" fetchPriority="high" />
    </Head>
  )
};

export default HeroImagePreload;
