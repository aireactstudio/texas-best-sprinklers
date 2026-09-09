import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import ArlingtonHeightsPage from '@/components/neighborhoods/ArlingtonHeightsPage';

export const metadata: Metadata = pageMetadata({
  title: 'Arlington Heights Sprinkler Repair & Drainage | Fort Worth, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Arlington Heights in Fort Worth, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/fort-worth/arlington-heights',
  image: 'sprinkler',
});

export default function ArlingtonHeightsFortWorthPage() {
  return <ArlingtonHeightsPage />;
}
