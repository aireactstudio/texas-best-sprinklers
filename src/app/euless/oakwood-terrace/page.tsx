import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import OakwoodTerracePage from '@/components/neighborhoods/OakwoodTerracePage';

export const metadata: Metadata = pageMetadata({
  title: 'Oakwood Terrace Sprinkler Repair & Drainage | Euless, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Oakwood Terrace in Euless, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/euless/oakwood-terrace',
  image: 'sprinkler',
});

export default function OakwoodTerraceEulessPage() {
  return <OakwoodTerracePage />;
}
