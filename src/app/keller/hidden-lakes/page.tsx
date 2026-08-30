import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import HiddenLakesPage from '@/components/neighborhoods/HiddenLakesPage';

export const metadata: Metadata = pageMetadata({
  title: 'Hidden Lakes Sprinkler Services | Keller, TX | Texas Best Sprinklers',
  description: "Sprinkler repair, irrigation upgrades, and drainage solutions for Hidden Lakes homes in Keller, TX. Licensed local service with free estimates.",
  path: '/keller/hidden-lakes',
  image: 'sprinkler',
});

export default function HiddenLakesKellerPage() {
  return <HiddenLakesPage />;
}
