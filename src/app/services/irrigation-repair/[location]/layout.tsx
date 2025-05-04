import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Location data defined directly to avoid import issues
const locationData = {
  "fort-worth-irrigation-repair": {
    city: "Fort Worth",
    title: "Fort Worth Irrigation Repair",
    metaDescription: "Expert irrigation repair services in Fort Worth, TX. Fast, reliable sprinkler system repairs with same-day service available.",
    heroImage: "https://images.unsplash.com/photo-1580133748682-73cc17ee9907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  "arlington-irrigation-repair": {
    city: "Arlington",
    title: "Arlington Irrigation Repair",
    metaDescription: "Expert irrigation repair services in Arlington, TX. Fast, reliable sprinkler system repairs with same-day service available.",
    heroImage: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  "keller-irrigation-repair": {
    city: "Keller",
    title: "Keller Irrigation Repair",
    metaDescription: "Expert irrigation repair services in Keller, TX. Fast, reliable sprinkler system repairs with same-day service available.",
    heroImage: "https://images.unsplash.com/photo-1560693225-b8507d6f3aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
};

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
  return (
    <>
      {children}
    </>
  );
}
