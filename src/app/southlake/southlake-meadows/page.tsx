import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import SouthlakeMeadowsPage from '@/components/neighborhoods/SouthlakeMeadowsPage';

export const metadata: Metadata = pageMetadata({
  title: 'Southlake Meadows Sprinkler Repair & Drainage | Southlake, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Southlake Meadows in Southlake, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/southlake/southlake-meadows',
  image: 'sprinkler',
});

export default function SouthlakeMeadowsSouthlakePage() {
  return <SouthlakeMeadowsPage />;
}
