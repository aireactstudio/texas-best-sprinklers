import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Professional Irrigation Services in Weatherford, TX | Texas Best Sprinklers",
  description: "Weatherford's premier irrigation specialists. Expert sprinkler installation, repair & maintenance for residential and commercial properties throughout Parker County.",
  keywords: "sprinkler installation Weatherford, irrigation company Weatherford, sprinkler repair Weatherford, lawn irrigation Weatherford, sprinkler system Weatherford",
};

export default function WeatherfordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
