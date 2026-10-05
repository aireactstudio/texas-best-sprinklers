import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import HogansGlenPage from '@/components/neighborhoods/HogansGlenPage';

export const metadata: Metadata = pageMetadata({
  title: "Hogan's Glen Sprinkler Repair & Drainage | Trophy Club, TX | Texas Best Sprinklers",
  description:
    'Irrigation repair, drip upgrades, and drainage for gated Hogan’s Glen lots on Trophy Club MUD water in ZIP 76262. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/trophy-club/hogans-glen',
  image: 'sprinkler',
});

export default function HogansGlenTrophyClubPage() {
  return <HogansGlenPage />;
}
