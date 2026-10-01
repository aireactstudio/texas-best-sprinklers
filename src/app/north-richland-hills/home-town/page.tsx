import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import HomeTownPage from '@/components/neighborhoods/HomeTownPage';

export const metadata: Metadata = pageMetadata({
  title: 'Home Town Sprinkler Repair & Drainage | North Richland Hills, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Home Town in North Richland Hills, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/north-richland-hills/home-town',
  image: 'sprinkler',
});

export default function HomeTownNorthRichlandHillsPage() {
  return <HomeTownPage />;
}
