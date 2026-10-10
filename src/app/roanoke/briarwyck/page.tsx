import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import BriarwyckPage from '@/components/neighborhoods/BriarwyckPage';

export const metadata: Metadata = pageMetadata({
  title: 'Briarwyck Sprinkler Repair & Drainage | Roanoke, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Briarwyck 114 lots on City of Roanoke water in ZIP 76262. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/roanoke/briarwyck',
  image: 'sprinkler',
});

export default function BriarwyckRoanokePage() {
  return <BriarwyckPage />;
}
