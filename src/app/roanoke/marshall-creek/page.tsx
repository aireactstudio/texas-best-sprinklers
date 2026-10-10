import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import MarshallCreekPage from '@/components/neighborhoods/MarshallCreekPage';

export const metadata: Metadata = pageMetadata({
  title: 'Marshall Creek Sprinkler Repair & Drainage | Roanoke, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Marshall Creek lots on City of Roanoke water in ZIP 76262. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/roanoke/marshall-creek',
  image: 'sprinkler',
});

export default function MarshallCreekRoanokePage() {
  return <MarshallCreekPage />;
}
