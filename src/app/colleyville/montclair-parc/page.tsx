import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import MontclairParcPage from '@/components/neighborhoods/MontclairParcPage';

export const metadata: Metadata = pageMetadata({
  title: 'Montclair Parc Sprinkler Repair & Drainage | Colleyville, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip, and drainage for Montclair Parc Addition homes in Colleyville, TX 76034, on Miramar Lane, Normandy Drive, Morlaix Court, Reims Court, Clermont Court, St. Emilion Court, and Burgandy Court. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/colleyville/montclair-parc',
  image: 'sprinkler',
});

export default function MontclairParcColleyvillePage() {
  return <MontclairParcPage />;
}
