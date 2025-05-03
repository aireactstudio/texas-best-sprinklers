import '../styles/globals.css';
import '../styles/critical.css';
import { Inter, Montserrat } from 'next/font/google';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import AppHeader from '@/components/AppHeader';
import ResourcePreloader from '@/components/ResourcePreloader';
import StyleManager from '@/components/StyleManager';
import NavigationObserver from '@/components/NavigationObserver';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import HeroImagePreload from '@/components/HeroImagePreload';
import HeadPreload from './head-preload';
import HeroPreloadScript from '@/components/HeroPreloadScript';

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

export const metadata: Metadata = {
  title: {
    template: '%s | Texas Best Sprinkler, Drainage and Lighting LLC',
    default: 'Texas Best Sprinkler, Drainage and Lighting LLC | Fort Worth & Weatherford Irrigation Experts',
  },
  description: 'Professional sprinkler, drainage, and lighting services in Fort Worth and Weatherford, TX. Expert installation, repair, and maintenance for residential and commercial properties.',
  keywords: 'sprinklers, irrigation, drainage, outdoor lighting, lawn care, Fort Worth, Weatherford, Texas, lawn sprinklers, sprinkler repair, sprinkler installation',
};

// Define head tags that will be added to the <head> section
// This is the correct way to add preload links in Next.js 14
export function generateMetadata(): Metadata {
  return {
    ...metadata,
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
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <HeadPreload />
      </head>
      <body className="font-sans">
        {/* Ultra-high priority hero image preload script - runs first */}
        <HeroPreloadScript />
        <ResourcePreloader />
        <StyleManager />
        <NavigationObserver />
        <PerformanceMonitor />
        {/* Preload hero image to fix LCP issues */}
        <HeroImagePreload imagePath="/assets/images/hero-background.png" />
        <AppHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
