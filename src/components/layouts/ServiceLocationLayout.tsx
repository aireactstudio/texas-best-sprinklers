import React from 'react';
import { Metadata } from 'next';
import { getServiceLocationData } from '@/data/utils/serviceUtils';
import { getLocationData } from '@/data/locationData';
import { ServiceType } from '@/data/serviceTypes';

// Helper function to generate metadata for location-specific service pages
export async function generateServiceLocationMetadata(
  location: string, 
  serviceType: ServiceType
): Promise<Metadata> {
  // Get service content for this location using our centralized data structure
  const serviceContent = getServiceLocationData(location, serviceType);
  
  // Get location data
  const locationInfo = getLocationData(location);
  
  // Format the city name from the location slug
  const cityName = locationInfo?.name || location
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // If service not found for this location, return default metadata
  if (!serviceContent) {
    return {
      title: 'Service Not Available',
      description: 'This service is not available in the requested location.'
    };
  }
  
  return {
    title: serviceContent.title,
    description: serviceContent.metaDescription,
    openGraph: {
      title: serviceContent.title,
      description: serviceContent.metaDescription,
      images: serviceContent.heroImage ? [
        {
          url: serviceContent.heroImage,
          width: 1200,
          height: 630,
          alt: serviceContent.title
        }
      ] : []
    },
    twitter: {
      card: 'summary_large_image',
      title: serviceContent.title,
      description: serviceContent.metaDescription,
      images: serviceContent.heroImage ? [serviceContent.heroImage] : []
    }
  };
}

// Simple layout component that just renders children
export default function ServiceLocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
