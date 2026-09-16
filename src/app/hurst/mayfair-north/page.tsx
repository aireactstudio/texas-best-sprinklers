import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import MayfairNorthPage from '@/components/neighborhoods/MayfairNorthPage';

export const metadata: Metadata = pageMetadata({
  title: 'Mayfair North Sprinkler Repair & Drainage | Hurst, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Mayfair North in Hurst, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/hurst/mayfair-north',
  image: 'sprinkler',
});

export default function MayfairNorthHurstPage() {
  return <MayfairNorthPage />;
}
