import type { Metadata } from 'next';
import RidgewoodPage from '@/components/neighborhoods/RidgewoodPage';

export const metadata: Metadata = {
  title: 'Ridgewood Sprinkler Services | Keller, TX | Texas Best Sprinklers',
  description:
    'Sprinkler repair, irrigation tune-ups, and drainage planning for Ridgewood homes in Keller, TX. Licensed local service. Call (817) 304-7896.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/keller/ridgewood'
  }
};

export default function RidgewoodKellerPage() {
  return <RidgewoodPage />;
}