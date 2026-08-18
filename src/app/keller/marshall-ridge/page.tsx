import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import MarshallRidgePage from '@/components/neighborhoods/MarshallRidgePage';

export const metadata: Metadata = pageMetadata({
  title: 'Marshall Ridge Irrigation Services | Keller, TX | Texas Best Sprinklers',
  description: "Trusted sprinkler and irrigation service for Marshall Ridge in Keller, TX. Smart-controller tuning, repairs, and drainage support for local homes.",
  path: '/keller/marshall-ridge',
  image: 'sprinkler',
});

export default function MarshallRidgeKellerPage() {
  return <MarshallRidgePage />;
}
