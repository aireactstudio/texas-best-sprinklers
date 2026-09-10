import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import WedgwoodPage from '@/components/neighborhoods/WedgwoodPage';

export const metadata: Metadata = pageMetadata({
  title: 'Wedgwood Sprinkler Repair & Drainage | Fort Worth, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Wedgwood in Fort Worth, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/fort-worth/wedgwood',
  image: 'sprinkler',
});

export default function WedgwoodFortWorthPage() {
  return <WedgwoodPage />;
}
