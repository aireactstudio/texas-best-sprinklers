import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import WellingtonPage from '@/components/neighborhoods/WellingtonPage';

export const metadata: Metadata = pageMetadata({
  title: 'Wellington Sprinkler Repair & Drainage | Flower Mound, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Wellington of Flower Mound lots on Town water in ZIP 75022. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/flower-mound/wellington',
  image: 'sprinkler',
});

export default function WellingtonFlowerMoundPage() {
  return <WellingtonPage />;
}
