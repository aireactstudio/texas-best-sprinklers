import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Irrigation & Sprinkler Blog | Texas Best Sprinklers',
  description: "Expert tips, advice, and guidance on irrigation systems, water conservation, lawn care, and more from Texas Best Sprinklers professionals.",
  path: '/blog',
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
