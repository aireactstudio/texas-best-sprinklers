import type { Metadata } from 'next';
import GlenwyckFarmsPage from '@/components/neighborhoods/GlenwyckFarmsPage';

export const metadata: Metadata = {
  title: 'Glenwyck Farms Sprinkler Services | Westlake, TX | Texas Best Sprinklers',
  description: 'Licensed sprinkler repair, irrigation tune-ups, drainage, and outdoor lighting service for Glenwyck Farms in Westlake, TX. Call Texas Best at (817) 304-7896.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/service-areas/westlake/glenwyck-farms'
  }
};

export default function GlenwyckFarmsWestlakePage() {
  return <GlenwyckFarmsPage />;
}