import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import WintergreenAcresPage from '@/components/neighborhoods/WintergreenAcresPage';

export const metadata: Metadata = pageMetadata({
  title: 'Wintergreen Acres Sprinkler Repair & Drainage | Hurst, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Wintergreen Acres in Hurst, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/hurst/wintergreen-acres',
  image: 'sprinkler',
});

export default function WintergreenAcresHurstPage() {
  return <WintergreenAcresPage />;
}
