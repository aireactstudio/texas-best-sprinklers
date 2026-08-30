import React from 'react';
import { Metadata } from 'next';
import { getServiceLocationData } from '@/data/utils/serviceUtils';
import { ServiceType } from '@/data/serviceTypes';
import { imageKeyForPath, pageMetadata } from '@/lib/seo';

// Helper function to generate metadata for location-specific service pages
export async function generateServiceLocationMetadata(
  location: string, 
  serviceType: ServiceType
): Promise<Metadata> {
  // Get service content for this location using our centralized data structure
  const serviceContent = getServiceLocationData(location, serviceType);
  
  // If service not found for this location, return default metadata
  if (!serviceContent) {
    return {
      title: 'Service Not Available',
      description: 'This service is not available in the requested location.'
    };
  }
  
  return pageMetadata({
    title: serviceContent.title,
    description: serviceContent.metaDescription,
    path: `/${location}/${serviceType}`,
    image: imageKeyForPath(`/${location}/${serviceType}`),
  });
}

// Simple layout component that just renders children
export default function ServiceLocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
