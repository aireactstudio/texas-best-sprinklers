import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PantegoPage from '@/components/neighborhoods/PantegoPage';

export const metadata: Metadata = pageMetadata({
  title: 'Pantego Services | Arlington',
  description: "Professional services in Pantego, Arlington.",
  path: '/arlington/pantego',
  image: 'sprinkler',
});

export default function PantegoArlingtonPage() {
  return <PantegoPage />;
}