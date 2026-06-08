import type { Metadata } from 'next';
import ViridianPage from '@/components/neighborhoods/ViridianPage';

export const metadata: Metadata = {
  title: 'Viridian Services | Arlington',
  description: 'Professional services in Viridian, Arlington.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/arlington/viridian',
  },
};

export default function ViridianArlingtonPage() {
  return <ViridianPage />;
}