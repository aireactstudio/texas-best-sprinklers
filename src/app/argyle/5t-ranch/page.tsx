import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import FiveTRanchPage from '@/components/neighborhoods/FiveTRanchPage';

export const metadata: Metadata = pageMetadata({
  title: '5T Ranch Sprinkler Repair & Drainage | Argyle, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for 5T Ranch in Argyle, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/argyle/5t-ranch',
  image: 'sprinkler',
});

export default function FiveTRanchArgylePage() {
  return <FiveTRanchPage />;
}
