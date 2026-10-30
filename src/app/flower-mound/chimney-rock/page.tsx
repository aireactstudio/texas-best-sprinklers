import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import ChimneyRockPage from '@/components/neighborhoods/ChimneyRockPage';

export const metadata: Metadata = pageMetadata({
  title: 'Chimney Rock Sprinkler Repair & Drainage | Flower Mound, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip, and drainage for Chimney Rock acre-lot homes in Flower Mound, TX, set for the Town even Tuesday/Friday, odd Wednesday/Saturday schedule. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/flower-mound/chimney-rock',
  image: 'sprinkler',
});

export default function ChimneyRockFlowerMoundPage() {
  return <ChimneyRockPage />;
}
