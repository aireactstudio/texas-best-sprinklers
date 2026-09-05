import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import StonegatePage from '@/components/neighborhoods/StonegatePage';

export const metadata: Metadata = pageMetadata({
  title: 'Stonegate Sprinkler Repair & Drainage | Bedford, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Stonegate Addition homes in Bedford, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/bedford/stonegate',
  image: 'sprinkler',
});

export default function StonegateBedfordPage() {
  return <StonegatePage />;
}
