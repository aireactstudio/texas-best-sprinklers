import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import RossDownsPage from '@/components/neighborhoods/RossDownsPage';

export const metadata: Metadata = pageMetadata({
  title: 'Ross Downs Sprinkler Repair & Drainage | Colleyville, TX | Texas Best Sprinklers',
  description:
    'Sprinkler repair, drip, and drainage for Ross Downs Estates homes in Colleyville, TX 76034, on Twelve Oaks Lane, Melanie Drive, Reynolds Drive, Atlanta Drive, and McMakin Court. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/colleyville/ross-downs',
  image: 'sprinkler',
});

export default function RossDownsColleyvillePage() {
  return <RossDownsPage />;
}
