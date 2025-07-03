import '../styles/globals.css';
import '../styles/critical.css';
import { Inter, Montserrat } from 'next/font/google';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroImagePreload from '@/components/HeroImagePreload';
import HeadPreload from './head-preload';
import HeroPreloadScript from '@/components/HeroPreloadScript';
import GoogleMapsProviderWrapper from '@/components/GoogleMapsProvider';

// Critical CSS for above-the-fold content
const criticalCSS = `
  .hero-section { content-visibility: auto; contain: content; }
  .hero-image { backface-visibility: hidden; transform: translateZ(0); }
`;

// Dynamically import components that aren't needed for initial render
const AppHeader = dynamic(() => import('@/components/AppHeader'), { ssr: true });
const ResourcePreloader = dynamic(() => import('@/components/ResourcePreloader'), { ssr: false });
const StyleManager = dynamic(() => import('@/components/StyleManager'), { ssr: false });
const NavigationObserver = dynamic(() => import('@/components/NavigationObserver'), { ssr: false });
const PerformanceMonitor = dynamic(() => import('@/components/PerformanceMonitor'), { ssr: false });
const ModulePreloader = dynamic(() => import('@/components/ModulePreloader'), { ssr: false });
const LongTaskOptimizer = dynamic(() => import('@/components/LongTaskOptimizer'), { ssr: false });
const GoogleAnalytics = dynamic(() => import('@/components/GoogleAnalytics'), { ssr: false, loading: () => null });
const CallRailScript = dynamic(() => import('@/components/CallRailScript'), { ssr: false, loading: () => null });
const SmartlookScript = dynamic(() => import('@/components/SmartlookScript'), { ssr: false, loading: () => null });

// Dynamically import non-critical components
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <footer className="h-[300px] bg-gray-100 animate-pulse"></footer>,
  ssr: true
});

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-montserrat',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

// Define metadata using generateMetadata function instead of static export
// This resolves the conflicting exports issue
export function generateMetadata(): Metadata {
  return {
    title: {
      template: '%s | Texas Best Sprinkler, Drainage and Lighting LLC',
      default: 'Texas Best Sprinkler, Drainage and Lighting LLC | Fort Worth & Weatherford Irrigation Experts',
    },
    description: 'Professional sprinkler, drainage, and lighting services in Fort Worth and Weatherford, TX. Expert installation, repair, and maintenance for residential and commercial properties.',
    keywords: 'sprinklers, irrigation, drainage, outdoor lighting, lawn care, Fort Worth, Weatherford, Texas, lawn sprinklers, sprinkler repair, sprinkler installation',
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadPreload />
        {/* Critical init function for Google Maps */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.initMap = function() {
              // This empty function prevents Maps API from blocking the main thread
              // Actual map initialization happens in the components that need it
              console.log('Maps API loaded');
            };
          `
          }}
        />
        {/* Inline critical CSS to reduce render blocking */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        {/* Preload critical assets */}
        <link 
          rel="preload" 
          href="/assets/images/optimized/hero-background.webp" 
          as="image" 
          fetchPriority="high" 
          type="image/webp"
        />
      </head>
      <body className="font-sans">
        {/* Ultra-high priority hero image preload script - runs first */}
        <HeroPreloadScript />
        <ResourcePreloader />
        <StyleManager />
        <NavigationObserver />
        <PerformanceMonitor />
        <LongTaskOptimizer />
        <ModulePreloader />
        {/* Preload hero image to fix LCP issues */}
        <HeroImagePreload imagePath="/assets/images/optimized/hero-background.webp" />
        {/* Analytics tracking scripts */}
        <GoogleAnalytics />
        <CallRailScript />
        <SmartlookScript />
        <GoogleMapsProviderWrapper>
          <AppHeader />
          <main>{children}</main>
          <Footer />
        </GoogleMapsProviderWrapper>
      </body>
    </html>
  );
}
