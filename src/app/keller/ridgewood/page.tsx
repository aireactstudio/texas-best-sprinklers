import type { Metadata } from 'next';
import RidgewoodPage from '@/components/neighborhoods/RidgewoodPage';

export const metadata: Metadata = {
  title: 'Ridgewood Sprinkler Services | Keller, TX | Texas Best Sprinklers',
  description:
    'Sprinkler repair, irrigation tune-ups, and drainage solutions for Ridgewood homes in Keller, TX. Licensed local service with free estimates.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/keller/ridgewood'
  }
};

export default function RidgewoodKellerPage() {
  return <RidgewoodPage />;
}