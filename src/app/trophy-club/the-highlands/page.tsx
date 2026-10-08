import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import TheHighlandsPage from '@/components/neighborhoods/TheHighlandsPage';

export const metadata: Metadata = pageMetadata({
  title: 'The Highlands Sprinkler Repair & Drainage | Trophy Club, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Trophy Club’s Highlands PID lots on TCMUD water in ZIP 76262. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/trophy-club/the-highlands',
  image: 'sprinkler',
});

export default function TheHighlandsTrophyClubPage() {
  return <TheHighlandsPage />;
}
