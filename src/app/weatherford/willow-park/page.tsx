import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import WillowParkPage from '@/components/neighborhoods/WillowParkPage';

export const metadata: Metadata = pageMetadata({
  title: 'Willow Park Sprinkler Repair & Drainage | Weatherford, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Willow Park lots along I-20 east of Weatherford. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/weatherford/willow-park',
  image: 'sprinkler',
});

export default function WillowParkWeatherfordPage() {
  return <WillowParkPage />;
}
