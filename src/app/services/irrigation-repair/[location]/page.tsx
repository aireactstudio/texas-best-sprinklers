import { notFound } from 'next/navigation';
import { getServiceLocationData } from '@/data/utils/serviceUtils';
import { ServiceType } from '@/data/serviceTypes';
import { getLocationData, LOCATION_MAPPING } from '@/data/locationData';
import { isServiceAvailableAtLocation } from '@/utils/dataUtils';
import { getArticleContent } from '@/utils/articleUtils';
import { getServiceConfig, getServiceTypeSlug } from '@/utils/serviceUtils';
import LocationServicePageTemplate from '@/components/templates/LocationServicePageTemplate';

// Generate static parameters for all locations
export function generateStaticParams() {
  // Get all locations from the LOCATION_MAPPING
  const locations = Object.keys(LOCATION_MAPPING);
  
  // Return array of objects with location parameter
  return locations.map(location => ({
    location: location
  }));
}

export default async function LocationSpecificIrrigationRepairPage({ params }: { params: { location: string } }) {
  const { location } = params;
  const serviceType = ServiceType.IRRIGATION_REPAIR;
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
    serviceName: serviceConfig.title,
    serviceType: "Sprinkler Repair Service",
    serviceSlug: serviceTypeSlug,
    city: cityName,
    locationSlug: location,
    description: serviceContent.metaDescription,
    price: serviceContent.pricing?.startingAt?.replace(/[^0-9]/g, '') || "95",
    ratingValue: "4.9",
    reviewCount: "85",
    testimonial: {
      author: serviceContent.testimonial.author,
      text: serviceContent.testimonial.quote,
      rating: serviceContent.testimonial.rating
    }
  };

  return (
    <LocationServicePageTemplate
      location={location}
      cityName={cityName}
      serviceContent={serviceContent}
      articleContent={articleContent}
      serviceTypeSlug={serviceTypeSlug}
      serviceTitle={serviceConfig.title}
      backButtonText={serviceConfig.backButtonText}
      structuredDataProps={structuredDataProps}
      themeColor={serviceConfig.themeColor}
      serviceAreaText={`We provide professional irrigation repair services throughout ${cityName} and surrounding areas.`}
      ctaTitle={`Professional Irrigation Repair in ${cityName}`}
      ctaSubtitle="Get your sprinkler system back to peak performance with our expert repair services."
    />
  );
}
