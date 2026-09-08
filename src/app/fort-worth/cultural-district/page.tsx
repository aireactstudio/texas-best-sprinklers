import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import CulturalDistrictPage from '@/components/neighborhoods/CulturalDistrictPage';

export const metadata: Metadata = pageMetadata({
  title: 'Cultural District Sprinkler Repair & Drainage | Fort Worth, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Fort Worth’s Cultural District in ZIP 76107. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/fort-worth/cultural-district',
  image: 'sprinkler',
});

export default function CulturalDistrictFortWorthPage() {
  return <CulturalDistrictPage />;
}
