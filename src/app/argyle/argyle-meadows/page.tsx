import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import ArgyleMeadowsPage from '@/components/neighborhoods/ArgyleMeadowsPage';

export const metadata: Metadata = pageMetadata({
  title: 'Argyle Meadows Sprinkler Services | Argyle, TX | Texas Best Sprinklers',
  description: "Sprinkler repair, irrigation tune-ups, drainage planning, and outdoor lighting support for Argyle Meadows homeowners in Argyle, TX.",
  path: '/argyle/argyle-meadows',
  image: 'sprinkler',
});

export default function ArgyleMeadowsArgylePage() {
  return <ArgyleMeadowsPage />;
}