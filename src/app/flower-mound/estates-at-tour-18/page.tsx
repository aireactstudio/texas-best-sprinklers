import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import EstatesAtTour18Page from '@/components/neighborhoods/EstatesAtTour18Page';

export const metadata: Metadata = pageMetadata({
  title: 'The Estates at Tour 18 Sprinkler Repair & Drainage | Flower Mound, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip, and drainage for gated Estates at Tour 18 homes in Flower Mound, TX, set for the Town even Tuesday/Friday, odd Wednesday/Saturday schedule. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/flower-mound/estates-at-tour-18',
  image: 'sprinkler',
});

export default function EstatesAtTour18FlowerMoundPage() {
  return <EstatesAtTour18Page />;
}
