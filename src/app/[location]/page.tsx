import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationHomepage from '@/components/location-homepages/LocationHomepage';
import { getLocationData, isValidLocation } from '@/data/locationData';

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

  const { name: locationName, landmarks, nearestOffice, distanceFromOffice } = locationData;

  return {
    title: `${locationName} Sprinkler & Irrigation Services | Texas Best Sprinklers`,
    description: `Professional sprinkler installation, repair & maintenance in ${locationName}, TX. Texas Best Sprinklers provides expert irrigation services for ${locationName} homes and businesses. Licensed & insured with 15+ years experience.`,
    keywords: `sprinkler installation ${locationName}, irrigation repair ${locationName}, sprinkler system ${locationName}, lawn sprinklers ${locationName}, Texas Best Sprinklers`,
    alternates: {
      canonical: `https://sprinkleranddrains.com/${location}`
    },
    openGraph: {
      title: `${locationName} Sprinkler & Irrigation Services | Texas Best Sprinklers`,
      description: `Professional sprinkler installation, repair & maintenance in ${locationName}, TX. Licensed & insured with 15+ years experience.`,
      url: `https://sprinkleranddrains.com/${location}`,
      siteName: 'Texas Best Sprinklers',
      images: [
        {
          url: 'https://sprinkleranddrains.com/assets/images/optimized/hero-background.webp',
          width: 1200,
          height: 630,
          alt: `${locationName} Sprinkler Services`
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${locationName} Sprinkler & Irrigation Services | Texas Best Sprinklers`,
      description: `Professional sprinkler installation, repair & maintenance in ${locationName}, TX. Licensed & insured.`,
      images: ['https://sprinkleranddrains.com/assets/images/optimized/hero-background.webp'],
    },
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
