import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import StoneGlenPage from '@/components/neighborhoods/StoneGlenPage';

export const metadata: Metadata = pageMetadata({
  title: 'Stone Glen Sprinkler Repair & Drainage | Keller, TX | Texas Best Sprinklers',
  description:
    'Sprinkler repair, drip conversion, and drainage for Villas of Stone Glen condominium homes in Keller, TX 76248, checked against the City of Keller watering schedule. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/keller/stone-glen',
  image: 'sprinkler',
});

export default function StoneGlenKellerPage() {
  return <StoneGlenPage />;
}
