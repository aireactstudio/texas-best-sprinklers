import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import HarvestPage from '@/components/neighborhoods/HarvestPage';

export const metadata: Metadata = pageMetadata({
  title: 'Harvest Sprinkler Repair & Drainage | Argyle, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Harvest in Argyle and Northlake, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/argyle/harvest',
  image: 'sprinkler',
});

export default function HarvestArgylePage() {
  return <HarvestPage />;
}
