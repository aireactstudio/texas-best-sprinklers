import type { Metadata } from 'next';
import HiddenLakesPage from '@/components/neighborhoods/HiddenLakesPage';

export const metadata: Metadata = {
  title: 'Hidden Lakes Sprinkler Services | Keller, TX | Texas Best Sprinklers',
  description:
    'Sprinkler repair, irrigation upgrades, and drainage solutions for Hidden Lakes homes in Keller, TX. Licensed local service with free estimates.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/keller/hidden-lakes'
  }
};

export default function HiddenLakesKellerPage() {
  return <HiddenLakesPage />;
}
