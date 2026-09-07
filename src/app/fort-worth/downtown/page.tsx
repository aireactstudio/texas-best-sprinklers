import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import DowntownPage from '@/components/neighborhoods/DowntownPage';

export const metadata: Metadata = pageMetadata({
  title: 'Downtown Sprinkler Repair & Drainage | Fort Worth, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Downtown Fort Worth courtyards, planters, and amenity lawns. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/fort-worth/downtown',
  image: 'sprinkler',
});

export default function DowntownFortWorthPage() {
  return <DowntownPage />;
}
