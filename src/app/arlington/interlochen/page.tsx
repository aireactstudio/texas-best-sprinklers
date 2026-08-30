import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import InterlochenPage from '@/components/neighborhoods/InterlochenPage';

export const metadata: Metadata = pageMetadata({
  title: 'Interlochen Services | Arlington',
  description: "Professional services in Interlochen, Arlington.",
  path: '/arlington/interlochen',
  image: 'sprinkler',
});

export default function InterlochenArlingtonPage() {
  return <InterlochenPage />;
}