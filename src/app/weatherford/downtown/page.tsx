import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import DowntownWeatherfordPage from '@/components/neighborhoods/DowntownWeatherfordPage';

export const metadata: Metadata = pageMetadata({
  title: 'Downtown Weatherford Sprinkler Repair & Drainage | Weatherford, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Downtown Weatherford in Weatherford, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/weatherford/downtown',
  image: 'sprinkler',
});

export default function DowntownWeatherfordCityPage() {
  return <DowntownWeatherfordPage />;
}
