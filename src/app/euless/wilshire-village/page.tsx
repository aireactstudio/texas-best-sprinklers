import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import WilshireVillagePage from '@/components/neighborhoods/WilshireVillagePage';

export const metadata: Metadata = pageMetadata({
  title: 'Wilshire Village Services | Euless',
  description: "Professional services in Wilshire Village, Euless.",
  path: '/euless/wilshire-village',
  image: 'sprinkler',
});

export default function WilshireVillageEulessPage() {
  return <WilshireVillagePage />;
}