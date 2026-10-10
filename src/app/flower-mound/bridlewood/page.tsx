import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import BridlewoodPage from '@/components/neighborhoods/BridlewoodPage';

export const metadata: Metadata = pageMetadata({
  title: 'Bridlewood Sprinkler Repair & Drainage | Flower Mound, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Bridlewood golf-community lots on Town of Flower Mound water in ZIP 75028. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/flower-mound/bridlewood',
  image: 'sprinkler',
});

export default function BridlewoodFlowerMoundPage() {
  return <BridlewoodPage />;
}
