import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import OakmontPage from '@/components/neighborhoods/OakmontPage';

export const metadata: Metadata = pageMetadata({
  title: 'Oakmont Sprinkler Repair & Drainage | Keller, TX | Texas Best Sprinklers',
  description: "Oakmont neighborhood irrigation repair, drip improvements, and drainage solutions in Keller, TX. Fast scheduling and licensed local technicians.",
  path: '/keller/oakmont',
  image: 'sprinkler',
});

export default function OakmontKellerPage() {
  return <OakmontPage />;
}
