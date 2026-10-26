import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import TheLakesPage from '@/components/neighborhoods/TheLakesPage';

export const metadata: Metadata = pageMetadata({
  title: 'The Lakes of Trophy Club Sprinkler Repair & Drainage | Trophy Club, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for The Lakes of Trophy Club lots on Trophy Club MUD water in ZIP 76262. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/trophy-club/the-lakes',
  image: 'sprinkler',
});

export default function TheLakesTrophyClubPage() {
  return <TheLakesPage />;
}
