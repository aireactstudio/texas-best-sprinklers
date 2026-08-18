import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Our Irrigation Projects | Texas Best Sprinklers',
  description: "Explore our portfolio of completed irrigation, drainage, and outdoor lighting projects in Fort Worth and Weatherford. See how we transform properties with water-efficient solutions.",
  path: '/projects',
  image: 'lighting',
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
