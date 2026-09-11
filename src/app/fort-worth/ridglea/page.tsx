import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import RidgleaPage from '@/components/neighborhoods/RidgleaPage';

export const metadata: Metadata = pageMetadata({
  title: 'Ridglea Sprinkler Repair & Drainage | Fort Worth, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Ridglea in Fort Worth, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/fort-worth/ridglea',
  image: 'sprinkler',
});

export default function RidgleaFortWorthPage() {
  return <RidgleaPage />;
}
