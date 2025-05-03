import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Expert Sprinkler & Irrigation Services in Fort Worth, TX | Texas Best Sprinklers",
  description: "Fort Worth's trusted irrigation specialists. Professional sprinkler installation, repair & maintenance. Serving Fort Worth residents with quality service since 2010.",
  keywords: "sprinkler installation Fort Worth, irrigation company Fort Worth, sprinkler repair Fort Worth, lawn irrigation Fort Worth, sprinkler system Fort Worth",
};

export default function FortWorthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
