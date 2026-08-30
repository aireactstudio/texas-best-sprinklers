import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import DalworthingtonGardensPage from '@/components/neighborhoods/DalworthingtonGardensPage';

export const metadata: Metadata = pageMetadata({
  title: 'Dalworthington Gardens Services | Arlington',
  description: "Professional services in Dalworthington Gardens, Arlington.",
  path: '/arlington/dalworthington-gardens',
  image: 'sprinkler',
});

export default function DalworthingtonGardensArlingtonPage() {
  return <DalworthingtonGardensPage />;
}