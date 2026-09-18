import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import ShadyOaksPage from '@/components/neighborhoods/ShadyOaksPage';

export const metadata: Metadata = pageMetadata({
  title: 'Shady Oaks Sprinkler Repair & Drainage | Hurst, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Shady Oaks in Hurst, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/hurst/shady-oaks',
  image: 'sprinkler',
});

export default function ShadyOaksHurstPage() {
  return <ShadyOaksPage />;
}
