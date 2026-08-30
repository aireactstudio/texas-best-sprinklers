import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import GlenwyckFarmsPage from '@/components/neighborhoods/GlenwyckFarmsPage';

export const metadata: Metadata = pageMetadata({
  title: 'Glenwyck Farms Services | Westlake',
  description: "Professional services in Glenwyck Farms, Westlake.",
  path: '/westlake/glenwyck-farms',
  image: 'sprinkler',
});

export default function GlenwyckFarmsWestlakePage() {
  return <GlenwyckFarmsPage />;
}