import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import TimarronPage from '@/components/neighborhoods/TimarronPage';

export const metadata: Metadata = pageMetadata({
  title: 'Timarron Sprinkler Repair & Drainage | Southlake, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Timarron homes in Southlake, TX 76092, set for the City of Southlake watering schedule. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/southlake/timarron',
  image: 'sprinkler',
});

export default function TimarronSouthlakePage() {
  return <TimarronPage />;
}
