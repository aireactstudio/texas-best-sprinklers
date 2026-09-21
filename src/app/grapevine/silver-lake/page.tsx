import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import SilverLakePage from '@/components/neighborhoods/SilverLakePage';

export const metadata: Metadata = pageMetadata({
  title: 'Silver Lake Sprinkler Repair & Drainage | Grapevine, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Silver Lake in Grapevine, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/grapevine/silver-lake',
  image: 'sprinkler',
});

export default function SilverLakeGrapevinePage() {
  return <SilverLakePage />;
}
