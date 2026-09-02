import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import BearCreekPage from '@/components/neighborhoods/BearCreekPage';

export const metadata: Metadata = pageMetadata({
  title: 'Bear Creek Sprinkler Repair & Drainage | Euless, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Bear Creek in Euless, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/euless/bear-creek',
  image: 'sprinkler',
});

export default function BearCreekEulessPage() {
  return <BearCreekPage />;
}
