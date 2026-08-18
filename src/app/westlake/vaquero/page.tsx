import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import VaqueroPage from '@/components/neighborhoods/VaqueroPage';

export const metadata: Metadata = pageMetadata({
  title: 'Vaquero Sprinkler Services | Westlake, TX | Texas Best Sprinklers',
  description: "Sprinkler repair, irrigation tuning, drainage planning, and lighting support for Vaquero estate homes in Westlake, TX. Licensed local service. Call (817) 304-7896.",
  path: '/westlake/vaquero',
  image: 'sprinkler',
});

export default function VaqueroWestlakePage() {
  return <VaqueroPage />;
}
