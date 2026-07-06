import type { Metadata } from 'next';
import BedfordHeightsPage from '@/components/neighborhoods/BedfordHeightsPage';

export const metadata: Metadata = {
  title: 'Bedford Heights Services | Bedford',
  description: 'Professional services in Bedford Heights, Bedford.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/bedford/bedford-heights',
  },
};

export default function BedfordHeightsBedfordPage() {
  return <BedfordHeightsPage />;
}