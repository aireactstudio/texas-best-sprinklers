import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import TanglewoodPage from '@/components/neighborhoods/TanglewoodPage';

export const metadata: Metadata = pageMetadata({
  title: 'Tanglewood Sprinkler Repair & Drainage | Fort Worth, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip, and drainage for Tanglewood Addition homes on Bellaire Drive South, Shady Creek Drive, and Overton Park Drive East in Fort Worth, TX 76109. Controllers set to the city even/odd schedule. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/fort-worth/tanglewood',
  image: 'sprinkler',
});

export default function TanglewoodFortWorthPage() {
  return <TanglewoodPage />;
}
