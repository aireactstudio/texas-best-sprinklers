import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import StoneLakesPage from '@/components/neighborhoods/StoneLakesPage';

export const metadata: Metadata = pageMetadata({
  title: 'Stone Lakes Sprinkler Repair & Drainage | Southlake, TX | Texas Best Sprinklers',
  description:
    'Sprinkler repair, drip conversion, and drainage for Stone Lakes homes in Southlake, TX 76092, set for the City of Southlake watering schedule. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/southlake/stone-lakes',
  image: 'sprinkler',
});

export default function StoneLakesSouthlakePage() {
  return <StoneLakesPage />;
}
