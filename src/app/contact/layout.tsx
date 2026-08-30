import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Texas Best Sprinklers | Free Estimates',
  description: "Contact Texas Best Sprinklers for irrigation, drainage, and lighting services in Fort Worth and surrounding areas.",
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
