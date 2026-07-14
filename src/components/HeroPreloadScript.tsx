'use client';

/**
 * Earliest possible hero preload — must match LocationHeroSection src.
 */
const HeroPreloadScript = () => {
  return (
    <script
      id="hero-preload-script"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var href = '/assets/images/optimized/hero-background.webp';
            var link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = href;
            link.fetchPriority = 'high';
            link.type = 'image/webp';
            document.head.appendChild(link);
            var img = new Image();
            img.fetchPriority = 'high';
            img.src = href;
          })();
        `,
      }}
    />
  );
};

export default HeroPreloadScript;
