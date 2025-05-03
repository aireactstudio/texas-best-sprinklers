'use client';

/**
 * Head component with critical preloads for the hero image
 * This forces the browser to prioritize loading the hero image
 * before any other resources, dramatically improving LCP
 */
const HeadPreload = () => {
  return (
    <>
      {/* Preload hero image with highest priority */}
      <link 
        rel="preload" 
        href="/assets/images/hero-background.png" 
        as="image" 
        fetchPriority="high"
      />
      
      {/* Also preload the optimized version that Next.js will generate */}
      <link 
        rel="preload" 
        href="/_next/image?url=%2Fassets%2Fimages%2Fhero-background.png&w=1920&q=75" 
        as="image" 
        fetchPriority="high"
        type="image/webp"
      />
    </>
  );
};

export default HeadPreload;
