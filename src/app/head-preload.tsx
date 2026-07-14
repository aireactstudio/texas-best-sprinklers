'use client';

/**
 * Head component with critical preloads for the hero image
 * Must match LocationHeroSection / layout preload paths exactly.
 */
const HeadPreload = () => {
  return (
    <>
      <link 
        rel="preload" 
        href="/assets/images/optimized/hero-background.webp" 
        as="image" 
        fetchPriority="high"
        type="image/webp"
      />
    </>
  );
};

export default HeadPreload;
