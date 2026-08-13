import type { Metadata } from 'next';
import HighlandOaksPage from '@/components/neighborhoods/HighlandOaksPage';

export const metadata: Metadata = {
  title: 'Highland Oaks Sprinkler Services | Keller, TX | Texas Best Sprinklers',
  description:
    'Sprinkler repair, irrigation tune-ups, and drainage planning for Highland Oaks homes in Keller, TX. Licensed local service. Call (817) 304-7896.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/keller/highland-oaks'
  }
};

export default function HighlandOaksKellerPage() {
  return <HighlandOaksPage />;
}
