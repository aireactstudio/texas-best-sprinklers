import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import MeadowRidgePage from '@/components/neighborhoods/MeadowRidgePage';

export const metadata: Metadata = pageMetadata({
  title: 'Meadow Ridge Sprinkler Repair & Drainage | North Richland Hills, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip, and drainage for Meadow Ridge Estates homes off Rufe Snow Drive in North Richland Hills, TX, set for the NRH even Wednesday/Saturday, odd Thursday/Sunday schedule. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/north-richland-hills/meadow-ridge',
  image: 'sprinkler',
});

export default function MeadowRidgeNorthRichlandHillsPage() {
  return <MeadowRidgePage />;
}
