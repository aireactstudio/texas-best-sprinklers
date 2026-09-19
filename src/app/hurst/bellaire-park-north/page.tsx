import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import BellaireParkNorthPage from '@/components/neighborhoods/BellaireParkNorthPage';

export const metadata: Metadata = pageMetadata({
  title: 'Bellaire Park North Sprinkler Repair & Drainage | Hurst, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Bellaire Park North in Hurst, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/hurst/bellaire-park-north',
  image: 'sprinkler',
});

export default function BellaireParkNorthHurstPage() {
  return <BellaireParkNorthPage />;
}
