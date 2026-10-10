import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import FairwayRanchPage from '@/components/neighborhoods/FairwayRanchPage';

export const metadata: Metadata = pageMetadata({
  title: 'Fairway Ranch Sprinkler Repair & Drainage | Roanoke, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Fairway Ranch lots on City of Roanoke water in ZIP 76262. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/roanoke/fairway-ranch',
  image: 'sprinkler',
});

export default function FairwayRanchRoanokePage() {
  return <FairwayRanchPage />;
}
