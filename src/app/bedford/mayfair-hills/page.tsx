import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import MayfairHillsPage from '@/components/neighborhoods/MayfairHillsPage';

export const metadata: Metadata = pageMetadata({
  title: 'Mayfair Hills Sprinkler Repair & Drainage | Bedford, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Mayfair Hills in Bedford, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/bedford/mayfair-hills',
  image: 'sprinkler',
});

export default function MayfairHillsBedfordPage() {
  return <MayfairHillsPage />;
}
