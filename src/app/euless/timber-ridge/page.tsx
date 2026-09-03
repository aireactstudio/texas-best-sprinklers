import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import TimberRidgePage from '@/components/neighborhoods/TimberRidgePage';

export const metadata: Metadata = pageMetadata({
  title: 'Timber Ridge Services | Euless',
  description: 'Professional sprinkler, irrigation, drainage, and lighting services for Timber Ridge in Euless, TX.',
  path: '/euless/timber-ridge',
  image: 'sprinkler',
});

export default function TimberRidgeEulessPage() {
  return <TimberRidgePage />;
}

