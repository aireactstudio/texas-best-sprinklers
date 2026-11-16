import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import CaldwellCreekPage from '@/components/neighborhoods/CaldwellCreekPage';

export const metadata: Metadata = pageMetadata({
  title: 'Caldwell Creek Sprinkler Repair & Drainage | Colleyville, TX | Texas Best Sprinklers',
  description:
    'Irrigation repair, drip, and drainage for Caldwell\'s Creek Addition homes in northwest Colleyville, TX 76034, on Bellefonte Lane, Shepherds Glen, Whippoorwill Court, Lismore Court, and Caldwell Creek Drive. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/colleyville/caldwell-creek',
  image: 'sprinkler',
});

export default function CaldwellCreekColleyvillePage() {
  return <CaldwellCreekPage />;
}
