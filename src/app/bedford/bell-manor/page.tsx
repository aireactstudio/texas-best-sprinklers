import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import BellManorPage from '@/components/neighborhoods/BellManorPage';

export const metadata: Metadata = pageMetadata({
  title: 'Bell Manor Sprinkler Repair & Drainage | Bedford, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Bell Manor in Bedford, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/bedford/bell-manor',
  image: 'sprinkler',
});

export default function BellManorBedfordPage() {
  return <BellManorPage />;
}
