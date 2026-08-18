import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import TerraBellaPage from '@/components/neighborhoods/TerraBellaPage';

export const metadata: Metadata = pageMetadata({
  title: 'Terra Bella Sprinkler Services | Westlake, TX | Texas Best Sprinklers',
  description: "Sprinkler repair, irrigation tuning, drainage planning, and lighting support for Terra Bella estate homes in Westlake, TX. Licensed local service. Call (817) 304-7896.",
  path: '/westlake/terra-bella',
  image: 'sprinkler',
});

export default function TerraBellaWestlakePage() {
  return <TerraBellaPage />;
}
