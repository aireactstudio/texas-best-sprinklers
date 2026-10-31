import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import OldTownPage from '@/components/neighborhoods/OldTownPage';

export const metadata: Metadata = pageMetadata({
  title: 'Old Town Sprinkler Repair & Drainage | Trophy Club, TX | Texas Best Sprinklers',
  description:
    'Sprinkler repair, irrigation tuning, and drainage for Old Town homes in Trophy Club, TX on Trophy Club MUD water. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/trophy-club/old-town',
  image: 'sprinkler',
});

export default function OldTownTrophyClubPage() {
  return <OldTownPage />;
}
