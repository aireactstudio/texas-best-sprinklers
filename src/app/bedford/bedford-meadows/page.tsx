import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import BedfordMeadowsPage from '@/components/neighborhoods/BedfordMeadowsPage';

export const metadata: Metadata = pageMetadata({
  title: 'Bedford Meadows Sprinkler Repair & Drainage | Bedford, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Bedford Meadows in Bedford, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/bedford/bedford-meadows',
  image: 'sprinkler',
});

export default function BedfordMeadowsBedfordPage() {
  return <BedfordMeadowsPage />;
}
