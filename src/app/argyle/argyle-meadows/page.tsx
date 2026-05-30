import type { Metadata } from 'next';
import ArgyleMeadowsPage from '@/components/neighborhoods/ArgyleMeadowsPage';

export const metadata: Metadata = {
  title: 'Argyle Meadows Sprinkler Services | Argyle, TX | Texas Best Sprinklers',
  description: 'Sprinkler repair, irrigation tune-ups, drainage planning, and outdoor lighting support for Argyle Meadows homeowners in Argyle, TX.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/argyle/argyle-meadows'
  }
};

export default function ArgyleMeadowsArgylePage() {
  return <ArgyleMeadowsPage />;
}