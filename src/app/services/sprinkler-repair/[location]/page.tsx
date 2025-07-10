import { notFound } from 'next/navigation';
import { getServiceLocationData } from '@/data/utils/serviceUtils';
import { ServiceType } from '@/data/serviceTypes';
import { getLocationData, LOCATIONS } from '@/data/locationData';
import { isServiceAvailableAtLocation } from '@/utils/dataUtils';
import { getArticleContent } from '@/utils/articleUtils';
import { getServiceConfig, getServiceTypeSlug } from '@/utils/serviceUtils';
import LocationServicePageTemplate from '@/components/templates/LocationServicePageTemplate';

// Generate static parameters for all locations
export function generateStaticParams() {
  // Get all locations from the LOCATIONS array
  const locations = LOCATIONS;
  
  // Return array of objects with location parameter
  return locations.map(location => ({
    location: location
  }));
}

export default async function LocationSpecificSprinklerRepairPage({ params }: { params: { location: string } }) {
  const { location } = params;
  const serviceType = ServiceType.SPRINKLER_REPAIR;
  const serviceConfig = getServiceConfig(serviceType);
  const serviceTypeSlug = getServiceTypeSlug(serviceType);
  
  // Get service content for this location using our centralized data structure
  const serviceContent = getServiceLocationData(location, serviceType);
  
  // Try to get article content for this location
  const articleContent = await getArticleContent(serviceTypeSlug, location);
  
  // Check if service is available at this location
  if (!serviceContent || !isServiceAvailableAtLocation(location, serviceType)) {
    return notFound();
  }
  
  // Get general location data
  const locationInfo = getLocationData(location);
  
  // Format the city name from the location slug
  const cityName = locationInfo?.name || location
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Prepare structured data for the page
  const structuredDataProps = {
    serviceName: serviceConfig?.title || 'Sprinkler Repair',
    serviceType: "Sprinkler Repair Service",
    serviceSlug: serviceTypeSlug,
    city: cityName,
    locationSlug: location,
    description: serviceContent.metaDescription,
    price: 'Starting at $85',
    ratingValue: '4.9',
    reviewCount: '27',
    testimonial: {
      text: "The technician from Texas Best Sprinklers arrived promptly and fixed our broken sprinkler heads and leaking valve. Excellent service at a fair price.",
      author: "Michael R.",
      rating: 5
    }
  };
  
  return (
    <LocationServicePageTemplate
      serviceContent={serviceContent}
      cityName={cityName}
      location={location}
      serviceTypeSlug={serviceTypeSlug}
      serviceTitle={serviceConfig?.title || 'Sprinkler Repair'}
      backButtonText="Back to Sprinkler Repair"
      articleContent={articleContent}
      structuredDataProps={structuredDataProps}
    />
  );
}
