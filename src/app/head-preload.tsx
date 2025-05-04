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
        href="https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/b96197d9-8f69-4145-7b7b-0b5a7ba70900/public" 
        as="image" 
        fetchPriority="high"
        type="image/webp"
      />
    </>
  );
};

export default HeadPreload;
