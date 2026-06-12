import type { Metadata } from 'next';
import TierneyRoadPage from '@/components/neighborhoods/TierneyRoadPage';

export const metadata: Metadata = {
  title: 'Tierney Road Services | Arlington',
  description: 'Professional services in Tierney Road, Arlington.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/service-areas/arlington/tierney-road',
  },
};

export default function TierneyRoadArlingtonPage() {
  return <TierneyRoadPage />;
}