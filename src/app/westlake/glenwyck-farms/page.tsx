import type { Metadata } from 'next';
import GlenwyckFarmsPage from '@/components/neighborhoods/GlenwyckFarmsPage';

export const metadata: Metadata = {
  title: 'Glenwyck Farms Services | Westlake',
  description: 'Professional services in Glenwyck Farms, Westlake.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/westlake/glenwyck-farms',
  },
};

export default function GlenwyckFarmsWestlakePage() {
  return <GlenwyckFarmsPage />;
}