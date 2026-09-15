import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import HurstHillsPage from '@/components/neighborhoods/HurstHillsPage';

export const metadata: Metadata = pageMetadata({
  title: 'Hurst Hills Sprinkler Repair & Drainage | Hurst, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Hurst Hills in Hurst, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/hurst/hurst-hills',
  image: 'sprinkler',
});

export default function HurstHillsHurstPage() {
  return <HurstHillsPage />;
}
