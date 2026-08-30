import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import TimberLakePage from '@/components/neighborhoods/TimberLakePage';

export const metadata: Metadata = pageMetadata({
  title: 'Timber Lake Sprinkler Repair & Drainage | Southlake, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Timber Lake in Southlake, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/southlake/timber-lake',
  image: 'sprinkler',
});

export default function TimberLakeSouthlakePage() {
  return <TimberLakePage />;
}
