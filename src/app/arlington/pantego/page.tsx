import type { Metadata } from 'next';
import PantegoPage from '@/components/neighborhoods/PantegoPage';

export const metadata: Metadata = {
  title: 'Pantego Services | Arlington',
  description: 'Professional services in Pantego, Arlington.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/arlington/pantego',
  },
};

export default function PantegoArlingtonPage() {
  return <PantegoPage />;
}