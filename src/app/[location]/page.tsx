import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationHomepage from '@/components/location-homepages/LocationHomepage';
import { getLocationData, isValidLocation } from '@/data/locationData';
import { pageMetadata } from '@/lib/seo';
import type { OgImageKey } from '@/lib/ogCard';

interface LocationPageProps {
  params: { location: string };
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { location } = params;
  
  if (!isValidLocation(location)) {
    return {
      title: 'Location Not Found',
      description: 'The requested location is not in our service area.'
    };
  }

  const locationData = getLocationData(location);
  if (!locationData) {
    return {
      title: 'Location Not Found',
      description: 'The requested location is not in our service area.'
    };
  }

  const { name: locationName } = locationData;
  const title = `${locationName} Sprinkler & Irrigation Services | Texas Best Sprinklers`;
  const description = `Professional sprinkler installation, repair & maintenance in ${locationName}, TX. Texas Best Sprinklers provides expert irrigation services for ${locationName} homes and businesses. Licensed & insured with 15+ years experience.`;
  const image: OgImageKey = location === 'southlake' ? 'lighting' : 'sprinkler';

  return {
    ...pageMetadata({
      title,
      description,
      path: `/${location}`,
      image,
    }),
    keywords: `sprinkler installation ${locationName}, irrigation repair ${locationName}, sprinkler system ${locationName}, lawn sprinklers ${locationName}, Texas Best Sprinklers`,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const { location } = params;
  
  if (!isValidLocation(location)) {
    notFound();
  }

  return <LocationHomepage locationSlug={location} />;
}

// Generate static paths for all valid locations
export async function generateStaticParams() {
  const locations = [
    'fort-worth', 'arlington', 'keller', 'southlake', 'colleyville', 
    'grapevine', 'north-richland-hills', 'bedford', 'euless', 'hurst',
    'flower-mound', 'coppell', 'irving', 'dallas', 'weatherford'
  ];

  return locations.map((location) => ({
    location: location,
  }));
}
