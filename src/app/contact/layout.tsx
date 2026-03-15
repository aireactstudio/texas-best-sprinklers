import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Texas Best Sprinklers | Free Estimates',
  description:
    'Contact Texas Best Sprinklers for irrigation, drainage, and lighting services in Fort Worth and surrounding areas.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
