import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import BrockPage from '@/components/neighborhoods/BrockPage';

export const metadata: Metadata = pageMetadata({
  title: 'Brock Sprinkler Repair & Drainage | Weatherford, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Town of Brock acreage and newer plats on Parker County SUD water in ZIP 76087. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/weatherford/brock',
  image: 'sprinkler',
});

export default function BrockWeatherfordPage() {
  return <BrockPage />;
}
