import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'About Texas Best Sprinklers - Expert Irrigation Contractors',
  description: "Learn about Texas Best Sprinklers' expertise, commitment to water conservation, and how our professional irrigation contractors can transform your landscape.",
  path: '/about',
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
