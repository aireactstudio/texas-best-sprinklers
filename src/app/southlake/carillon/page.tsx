import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import CarillonPage from '@/components/neighborhoods/CarillonPage';

export const metadata: Metadata = pageMetadata({
  title: 'Carillon Sprinkler Repair & Drainage | Southlake, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Carillon in Southlake, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/southlake/carillon',
  image: 'sprinkler',
});

export default function CarillonSouthlakePage() {
  return <CarillonPage />;
}
