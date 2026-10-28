import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import LakesidePage from '@/components/neighborhoods/LakesidePage';

export const metadata: Metadata = pageMetadata({
  title: 'Lakeside Sprinkler Repair & Drainage | Flower Mound, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Lakeside DFW lots on Town of Flower Mound water in ZIP 75022. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/flower-mound/lakeside',
  image: 'sprinkler',
});

export default function LakesideFlowerMoundPage() {
  return <LakesidePage />;
}
