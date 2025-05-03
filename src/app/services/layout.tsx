import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Irrigation Services | Texas Best Sprinklers",
  description: "Explore our comprehensive sprinkler and irrigation services. Expert installation, repair, and maintenance for residential and commercial properties throughout Fort Worth and Weatherford.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
