import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import KirkwoodHollowPage from '@/components/neighborhoods/KirkwoodHollowPage';

export const metadata: Metadata = pageMetadata({
  title: 'Kirkwood Hollow Sprinkler Repair & Drainage | Southlake, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Kirkwood Hollow in Southlake, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/southlake/kirkwood-hollow',
  image: 'sprinkler',
});

export default function KirkwoodHollowSouthlakePage() {
  return <KirkwoodHollowPage />;
}
