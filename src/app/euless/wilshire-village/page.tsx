import type { Metadata } from 'next';
import WilshireVillagePage from '@/components/neighborhoods/WilshireVillagePage';

export const metadata: Metadata = {
  title: 'Wilshire Village Services | Euless',
  description: 'Professional services in Wilshire Village, Euless.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/euless/wilshire-village',
  },
};

export default function WilshireVillageEulessPage() {
  return <WilshireVillagePage />;
}