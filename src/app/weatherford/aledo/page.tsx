import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import AledoPage from '@/components/neighborhoods/AledoPage';

export const metadata: Metadata = pageMetadata({
  title: 'Aledo Sprinkler Repair & Drainage | Weatherford, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Aledo Original Town lots and Parks of Aledo clay in ZIP 76008. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/weatherford/aledo',
  image: 'sprinkler',
});

export default function AledoWeatherfordPage() {
  return <AledoPage />;
}
