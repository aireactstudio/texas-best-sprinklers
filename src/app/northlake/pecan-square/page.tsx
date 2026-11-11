import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PecanSquarePage from '@/components/neighborhoods/PecanSquarePage';

export const metadata: Metadata = pageMetadata({
  title: 'Pecan Square Sprinkler Repair & Drainage | Northlake, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip, and drainage for Pecan Square homes off FM 407 in Northlake, TX, set for the Town even Wednesday/Saturday, odd Thursday/Sunday schedule. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/northlake/pecan-square',
  image: 'sprinkler',
});

export default function PecanSquareNorthlakePage() {
  return <PecanSquarePage />;
}
