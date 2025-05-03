import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Irrigation Projects | Texas Best Sprinklers",
  description: "Explore our portfolio of completed irrigation, drainage, and outdoor lighting projects in Fort Worth and Weatherford. See how we transform properties with water-efficient solutions.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
