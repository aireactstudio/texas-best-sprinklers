import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locationData } from './locationData';

export async function generateMetadata({ params }: { params: { location: string } }): Promise<Metadata> {
  const { location } = params;
  
  // Get location data from our object
  const cityInfo = locationData[location as keyof typeof locationData];
  
  // If location not found, return default metadata
  if (!cityInfo) {
    return {
      title: 'Location Not Found',
      description: 'The requested location page could not be found.'
    };
  }
  
  return {
    title: cityInfo.title,
    description: cityInfo.metaDescription,
    openGraph: {
      title: cityInfo.title,
      description: cityInfo.metaDescription,
      images: [
        {
          url: cityInfo.heroImage,
          width: 1200,
          height: 630,
          alt: cityInfo.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: cityInfo.title,
      description: cityInfo.metaDescription,
      images: [cityInfo.heroImage]
    }
  };
}

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
