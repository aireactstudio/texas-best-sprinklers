import type { Metadata } from 'next';
import MarshallRidgePage from '@/components/neighborhoods/MarshallRidgePage';

export const metadata: Metadata = {
  title: 'Marshall Ridge Irrigation Services | Keller, TX | Texas Best Sprinklers',
  description:
    'Trusted sprinkler and irrigation service for Marshall Ridge in Keller, TX. Smart-controller tuning, repairs, and drainage support for local homes.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/keller/marshall-ridge'
  }
};

export default function MarshallRidgeKellerPage() {
  return <MarshallRidgePage />;
}
