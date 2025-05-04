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
            link.href = 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/b96197d9-8f69-4145-7b7b-0b5a7ba70900/public';
            link.fetchPriority = 'high';
            link.type = 'image/webp'; // Cloudflare will auto-deliver in best format
            document.head.appendChild(link);
            
            // Also start loading the image immediately to ensure browser prioritizes it
            var img = new Image();
            img.fetchPriority = 'high';
            img.src = 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/b96197d9-8f69-4145-7b7b-0b5a7ba70900/public';
          })();
        `,
      }}
    />
  );
};

export default HeroPreloadScript;
