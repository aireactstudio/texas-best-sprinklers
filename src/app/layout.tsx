import '../styles/globals.css';
import '../styles/critical.css';
import { Inter, Montserrat } from 'next/font/google';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import SchemaOrgData from '@/components/SchemaOrgData';
import GoogleMapsProviderWrapper from '@/components/GoogleMapsProvider';
import { SITE_CONFIG } from '@/config/site';

// Critical CSS for above-the-fold content
const criticalCSS = `
  .hero-image { backface-visibility: hidden; transform: translateZ(0); }
`;

// Dynamically import components that aren't needed for initial render
const AppHeader = dynamic(() => import('@/components/AppHeader'), { ssr: true });
const ResourcePreloader = dynamic(() => import('@/components/ResourcePreloader'), { ssr: false });
const StyleManager = dynamic(() => import('@/components/StyleManager'), { ssr: false });
const NavigationObserver = dynamic(() => import('@/components/NavigationObserver'), { ssr: false });
const ModulePreloader = dynamic(() => import('@/components/ModulePreloader'), { ssr: false });
const GoogleAnalytics = dynamic(() => import('@/components/GoogleAnalytics'), { ssr: false, loading: () => null });
const PostHogScript = dynamic(() => import('@/components/PostHogScript'), { ssr: false, loading: () => null });

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
  preload: false,
  variable: '--font-montserrat',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

// Define metadata using generateMetadata function instead of static export
// This resolves the conflicting exports issue
export function generateMetadata(): Metadata {
  return {
    title: SITE_CONFIG.shortName,
    metadataBase: new URL('https://sprinkleranddrains.com'),
    // Meta description (~150-160 chars)
    description: 'Fort Worth sprinkler & drainage experts. Repairs, installs, lighting, maintenance. Fast scheduling in surrounding areas. Call 817-304-7896 for a free estimate.',
    keywords: 'sprinklers, irrigation, drainage, outdoor lighting, lawn care, Fort Worth, Weatherford, Texas, lawn sprinklers, sprinkler repair, sprinkler installation',
    icons: {
      icon: '/favicon.ico',
    },
    // Open Graph / Facebook
    openGraph: {
      type: 'website',
      siteName: SITE_CONFIG.shortName,
      // Social title with brand + CTA
      title: 'Fort Worth Sprinkler & Drainage — Free Estimates | Texas Best Sprinklers',
      description: 'Fort Worth sprinkler & drainage experts. Repairs, installs, lighting, maintenance. Fast scheduling in surrounding areas. Call 817-304-7896 for a free estimate.',
      images: [
        {
          url: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/b96197d9-8f69-4145-7b7b-0b5a7ba70900/public',
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.shortName,
        },
      ],
    },
    // Twitter
    twitter: {
      card: 'summary_large_image',
      // Match Open Graph
      title: 'Fort Worth Sprinkler & Drainage — Free Estimates | Texas Best Sprinklers',
      description: 'Fort Worth sprinkler & drainage experts. Repairs, installs, lighting, maintenance. Fast scheduling in surrounding areas. Call 817-304-7896 for a free estimate.',
      images: ['https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/b96197d9-8f69-4145-7b7b-0b5a7ba70900/public'],
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <SchemaOrgData />
        {/* Inline critical CSS to reduce render blocking */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      </head>
      <body className={`${inter.className} font-sans`}>
        <ResourcePreloader />
        <StyleManager />
        <NavigationObserver />
        <ModulePreloader />
        {/* Analytics tracking scripts */}
        <GoogleAnalytics />
        <PostHogScript />
        <GoogleMapsProviderWrapper>
          <AppHeader />
          <main>{children}</main>
          <Footer />
        </GoogleMapsProviderWrapper>
      </body>
    </html>
  );
}
