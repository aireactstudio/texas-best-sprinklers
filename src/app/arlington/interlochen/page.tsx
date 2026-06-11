import type { Metadata } from 'next';
import InterlochenPage from '@/components/neighborhoods/InterlochenPage';

export const metadata: Metadata = {
  title: 'Interlochen Services | Arlington',
  description: 'Professional services in Interlochen, Arlington.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/arlington/interlochen',
  },
};

export default function InterlochenArlingtonPage() {
  return <InterlochenPage />;
}