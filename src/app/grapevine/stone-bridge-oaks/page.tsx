import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import StoneBridgeOaksPage from '@/components/neighborhoods/StoneBridgeOaksPage';

export const metadata: Metadata = pageMetadata({
  title: 'Stone Bridge Oaks Sprinkler Repair & Drainage | Grapevine, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Stone Bridge Oaks in Grapevine, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/grapevine/stone-bridge-oaks',
  image: 'sprinkler',
});

export default function StoneBridgeOaksGrapevinePage() {
  return <StoneBridgeOaksPage />;
}
