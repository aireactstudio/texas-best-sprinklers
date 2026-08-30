import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import HighlandOaksPage from '@/components/neighborhoods/HighlandOaksPage';

export const metadata: Metadata = pageMetadata({
  title: 'Highland Oaks Sprinkler Services | Keller, TX | Texas Best Sprinklers',
  description: "Sprinkler repair, irrigation tune-ups, and drainage planning for Highland Oaks homes in Keller, TX. Licensed local service. Call (817) 304-7896.",
  path: '/keller/highland-oaks',
  image: 'sprinkler',
});

export default function HighlandOaksKellerPage() {
  return <HighlandOaksPage />;
}
