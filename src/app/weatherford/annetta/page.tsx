import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import AnnettaPage from '@/components/neighborhoods/AnnettaPage';

export const metadata: Metadata = pageMetadata({
  title: 'Annetta Sprinkler Repair & Drainage | Weatherford, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Town of Annetta groundwater lots in ZIP 76008. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/weatherford/annetta',
  image: 'sprinkler',
});

export default function AnnettaWeatherfordPage() {
  return <AnnettaPage />;
}
