import type { Metadata } from 'next';
import OakmontPage from '@/components/neighborhoods/OakmontPage';

export const metadata: Metadata = {
  title: 'Oakmont Sprinkler Repair & Drainage | Keller, TX | Texas Best Sprinklers',
  description:
    'Oakmont neighborhood irrigation repair, drip improvements, and drainage solutions in Keller, TX. Fast scheduling and licensed local technicians.',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/keller/oakmont'
  }
};

export default function OakmontKellerPage() {
  return <OakmontPage />;
}
