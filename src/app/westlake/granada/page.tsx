import type { Metadata } from 'next';
import GranadaPage from '@/components/neighborhoods/GranadaPage';

export const metadata: Metadata = {
  title: 'Granada Sprinkler Services | Westlake, TX | Texas Best Sprinklers',
  description:
    'Sprinkler repair, irrigation tuning, drainage planning, and lighting support for Granada homes in Westlake, TX. Licensed local service. Call (817) 304-7896.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/westlake/granada'
  }
};

export default function GranadaWestlakePage() {
  return <GranadaPage />;
}
