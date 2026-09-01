import type { Metadata } from 'next';
import OldTownPage from '@/components/neighborhoods/OldTownPage';

export const metadata: Metadata = {
  title: 'Old Town Services | Trophy Club',
  description: 'Professional services in Old Town, Trophy Club.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/trophy-club/old-town',
  },
};

export default function OldTownTrophyClubPage() {
  return <OldTownPage />;
}