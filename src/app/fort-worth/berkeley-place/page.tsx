import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import BerkeleyPlacePage from '@/components/neighborhoods/BerkeleyPlacePage';

export const metadata: Metadata = pageMetadata({
  title: 'Berkeley Place Sprinkler Repair & Drainage | Fort Worth, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip, and drainage for Berkeley Place and Cheltenham lots next to Forest Park in Fort Worth, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/fort-worth/berkeley-place',
  image: 'sprinkler',
});

export default function BerkeleyPlaceFortWorthPage() {
  return <BerkeleyPlacePage />;
}
