import type { Metadata } from 'next';
import EntradaPage from '@/components/neighborhoods/EntradaPage';

export const metadata: Metadata = {
  title: 'Entrada Services | Westlake',
  description: 'Professional services in Entrada, Westlake.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/westlake/entrada',
  },
};

export default function EntradaWestlakePage() {
  return <EntradaPage />;
}