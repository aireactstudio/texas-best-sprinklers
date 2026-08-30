import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import TierneyRoadPage from '@/components/neighborhoods/TierneyRoadPage';

export const metadata: Metadata = pageMetadata({
  title: 'Tierney Road Services | Arlington',
  description: "Professional services in Tierney Road, Arlington.",
  path: '/arlington/tierney-road',
  image: 'sprinkler',
});

export default function TierneyRoadArlingtonPage() {
  return <TierneyRoadPage />;
}