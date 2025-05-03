import '../styles/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import AppHeader from '@/components/AppHeader';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Texas Best Sprinkler, Drainage and Lighting LLC',
    default: 'Texas Best Sprinkler, Drainage and Lighting LLC | Fort Worth & Weatherford Irrigation Experts',
  },
  description: 'Professional sprinkler, drainage, and lighting services in Fort Worth and Weatherford, TX. Expert installation, repair, and maintenance for residential and commercial properties.',
  keywords: 'sprinklers, irrigation, drainage, outdoor lighting, lawn care, Fort Worth, Weatherford, Texas, lawn sprinklers, sprinkler repair, sprinkler installation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
