import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Irrigation & Sprinkler Blog | Texas Best Sprinklers",
  description: "Expert tips, advice, and guidance on irrigation systems, water conservation, lawn care, and more from Texas Best Sprinklers professionals.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
