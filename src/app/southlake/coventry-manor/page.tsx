import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import CoventryManorPage from '@/components/neighborhoods/CoventryManorPage';

export const metadata: Metadata = pageMetadata({
  title: 'Coventry Manor Sprinkler Repair & Drainage | Southlake, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Coventry Manor in Southlake, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/southlake/coventry-manor',
  image: 'sprinkler',
});

export default function CoventryManorSouthlakePage() {
  return <CoventryManorPage />;
}
