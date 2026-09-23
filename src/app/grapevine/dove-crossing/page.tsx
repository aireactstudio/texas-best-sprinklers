import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import DoveCrossingPage from '@/components/neighborhoods/DoveCrossingPage';

export const metadata: Metadata = pageMetadata({
  title: 'Dove Crossing Sprinkler Repair & Drainage | Grapevine, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Dove Crossing in Grapevine, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/grapevine/dove-crossing',
  image: 'sprinkler',
});

export default function DoveCrossingGrapevinePage() {
  return <DoveCrossingPage />;
}
