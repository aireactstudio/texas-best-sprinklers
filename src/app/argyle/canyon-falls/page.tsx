import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import CanyonFallsPage from '@/components/neighborhoods/CanyonFallsPage';

export const metadata: Metadata = pageMetadata({
  title: 'Canyon Falls Sprinkler Repair & Drainage | Argyle, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Canyon Falls in Argyle, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/argyle/canyon-falls',
  image: 'sprinkler',
});

export default function CanyonFallsArgylePage() {
  return <CanyonFallsPage />;
}
