'use client';

/**
 * Direct script injection for hero image preloading
 * This is the most efficient way to force immediate preloading of critical images
 */
const HeroPreloadScript = () => {
  return (
    <script
      id="hero-preload-script"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Create image preload link directly in the DOM for immediate loading
            var link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = '/assets/images/optimized/hero-background.webp';
            link.fetchPriority = 'high';
            link.type = 'image/webp';
            document.head.appendChild(link);
            
            // Also start loading the image immediately to ensure browser prioritizes it
            var img = new Image();
            img.fetchPriority = 'high';
            img.src = '/assets/images/optimized/hero-background.webp';
          })();
        `,
      }}
    />
  );
};

export default HeroPreloadScript;
