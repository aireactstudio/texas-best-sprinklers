import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import GranadaPage from '@/components/neighborhoods/GranadaPage';

export const metadata: Metadata = pageMetadata({
  title: 'Granada Sprinkler Services | Westlake, TX | Texas Best Sprinklers',
  description: "Sprinkler repair, irrigation tuning, drainage planning, and lighting support for Granada homes in Westlake, TX. Licensed local service. Call (817) 304-7896.",
  path: '/westlake/granada',
  image: 'sprinkler',
});

export default function GranadaWestlakePage() {
  return <GranadaPage />;
}
