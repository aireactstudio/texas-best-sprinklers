import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import FairmountPage from '@/components/neighborhoods/FairmountPage';

export const metadata: Metadata = pageMetadata({
  title: 'Fairmount Sprinkler Repair & Drainage | Fort Worth, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip upgrades, and drainage for Fairmount in Fort Worth, TX. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/fort-worth/fairmount',
  image: 'sprinkler',
});

export default function FairmountFortWorthPage() {
  return <FairmountPage />;
}
