import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import ViridianPage from '@/components/neighborhoods/ViridianPage';

export const metadata: Metadata = pageMetadata({
  title: 'Viridian Services | Arlington',
  description: "Professional services in Viridian, Arlington.",
  path: '/arlington/viridian',
  image: 'sprinkler',
});

export default function ViridianArlingtonPage() {
  return <ViridianPage />;
}