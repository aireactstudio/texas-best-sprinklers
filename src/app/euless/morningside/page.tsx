import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import MorningsidePage from '@/components/neighborhoods/MorningsidePage';

export const metadata: Metadata = pageMetadata({
  title: 'Morningside Sprinkler Repair & Drainage | Euless, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Morningside in Euless, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/euless/morningside',
  image: 'sprinkler',
});

export default function MorningsideEulessPage() {
  return <MorningsidePage />;
}
