import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import HistoricTownshipPage from '@/components/neighborhoods/HistoricTownshipPage';

export const metadata: Metadata = pageMetadata({
  title: 'Historic Township Sprinkler Repair & Drainage | Grapevine, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Historic Township in Grapevine, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/grapevine/historic-township',
  image: 'sprinkler',
});

export default function HistoricTownshipGrapevinePage() {
  return <HistoricTownshipPage />;
}
