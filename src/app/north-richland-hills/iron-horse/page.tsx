import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import IronHorsePage from '@/components/neighborhoods/IronHorsePage';

export const metadata: Metadata = pageMetadata({
  title: 'Iron Horse Sprinkler Repair & Drainage | North Richland Hills, TX | Texas Best Sprinklers',
  description:
    'Sprinkler repair, drip, and drainage for Iron Horse Addition Phase II homes on Valhalla Drive, Pinehurst Drive, and Sawgrass Court in North Richland Hills, TX 76180, set to the NRH even Wednesday/Saturday and odd Thursday/Sunday schedule. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/north-richland-hills/iron-horse',
  image: 'sprinkler',
});

export default function IronHorseNorthRichlandHillsPage() {
  return <IronHorsePage />;
}
