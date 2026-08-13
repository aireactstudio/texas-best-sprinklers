import type { Metadata } from 'next';
import TerraBellaPage from '@/components/neighborhoods/TerraBellaPage';

export const metadata: Metadata = {
  title: 'Terra Bella Sprinkler Services | Westlake, TX | Texas Best Sprinklers',
  description:
    'Sprinkler repair, irrigation tuning, drainage planning, and lighting support for Terra Bella estate homes in Westlake, TX. Licensed local service. Call (817) 304-7896.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/westlake/terra-bella'
  }
};

export default function TerraBellaWestlakePage() {
  return <TerraBellaPage />;
}
