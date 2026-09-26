import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import HudsonOaksPage from '@/components/neighborhoods/HudsonOaksPage';

export const metadata: Metadata = pageMetadata({
  title: 'Hudson Oaks Sprinkler Repair & Drainage | Weatherford, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Hudson Oaks lots along I-20 east of Weatherford. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/weatherford/hudson-oaks',
  image: 'sprinkler',
});

export default function HudsonOaksWeatherfordPage() {
  return <HudsonOaksPage />;
}
