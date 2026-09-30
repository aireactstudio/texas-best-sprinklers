import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import SmithfieldPage from '@/components/neighborhoods/SmithfieldPage';

export const metadata: Metadata = pageMetadata({
  title: 'Smithfield Sprinkler Repair & Drainage | North Richland Hills, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Smithfield in North Richland Hills, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/north-richland-hills/smithfield',
  image: 'sprinkler',
});

export default function SmithfieldNorthRichlandHillsPage() {
  return <SmithfieldPage />;
}
