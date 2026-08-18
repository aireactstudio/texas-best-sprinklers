import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import BedfordHeightsPage from '@/components/neighborhoods/BedfordHeightsPage';

export const metadata: Metadata = pageMetadata({
  title: 'Bedford Heights Services | Bedford',
  description: "Professional services in Bedford Heights, Bedford.",
  path: '/bedford/bedford-heights',
  image: 'sprinkler',
});

export default function BedfordHeightsBedfordPage() {
  return <BedfordHeightsPage />;
}