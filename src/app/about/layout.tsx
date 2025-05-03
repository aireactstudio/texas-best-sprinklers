import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Texas Best Sprinklers - Expert Irrigation Contractors",
  description: "Learn about Texas Best Sprinklers' expertise, commitment to water conservation, and how our professional irrigation contractors can transform your landscape.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
