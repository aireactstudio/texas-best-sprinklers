import type { Metadata } from 'next';
import WilshireVillagePage from '@/components/neighborhoods/WilshireVillagePage';

export const metadata: Metadata = {
  title: 'Wilshire Village Sprinkler Services | Euless, TX | Texas Best Sprinklers',
  description: 'Sprinkler repair, irrigation tuning, drainage planning, and outdoor lighting support for Wilshire Village homeowners in Euless, TX.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/euless/wilshire-village'
  }
};

export default function WilshireVillageEulessPage() {
  return <WilshireVillagePage />;
}