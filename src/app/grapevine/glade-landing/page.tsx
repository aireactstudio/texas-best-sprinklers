import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import GladeLandingPage from '@/components/neighborhoods/GladeLandingPage';

export const metadata: Metadata = pageMetadata({
  title: 'Glade Landing Sprinkler Repair & Drainage | Grapevine, TX | Texas Best Sprinklers',
  description:
    'Sprinkler repair, drip, and drainage for Glade Landing Addition homes on Brettenmeadow Drive, Haydenbend Circle, and Altacrest Court in Grapevine, TX 76051. Licensed irrigator LI22462. Call (817) 304-7896.',
  path: '/grapevine/glade-landing',
  image: 'sprinkler',
});

export default function GladeLandingGrapevinePage() {
  return <GladeLandingPage />;
}
