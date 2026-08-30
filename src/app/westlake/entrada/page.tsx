import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import EntradaPage from '@/components/neighborhoods/EntradaPage';

export const metadata: Metadata = pageMetadata({
  title: 'Entrada Sprinkler Services | Westlake, TX | Texas Best Sprinklers',
  description: "Sprinkler repair, irrigation tuning, drainage planning, and lighting support for Entrada homes in Westlake, TX. Licensed local service. Call (817) 304-7896.",
  path: '/westlake/entrada',
  image: 'sprinkler',
});

export default function EntradaWestlakePage() {
  return <EntradaPage />;
}
