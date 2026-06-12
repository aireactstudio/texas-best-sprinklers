import type { Metadata } from 'next';
import DalworthingtonGardensPage from '@/components/neighborhoods/DalworthingtonGardensPage';

export const metadata: Metadata = {
  title: 'Dalworthington Gardens Services | Arlington',
  description: 'Professional services in Dalworthington Gardens, Arlington.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/arlington/dalworthington-gardens',
  },
};

export default function DalworthingtonGardensArlingtonPage() {
  return <DalworthingtonGardensPage />;
}