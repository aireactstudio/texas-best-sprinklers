import { notFound } from 'next/navigation';
import { getServiceLocationData } from '@/data/utils/serviceUtils';
import { ServiceType } from '@/data/serviceTypes';
import { getLocationData, LOCATION_MAPPING } from '@/data/locationData';
import { isServiceAvailableAtLocation } from '@/utils/dataUtils';
import { getArticleContent } from '@/utils/articleUtils';
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

export default async function LocationSpecificMaintenancePage({ params }: { params: { location: string } }) {
  const { location } = params;
  
  // Get service content for this location using our centralized data structure
  const serviceContent = getServiceLocationData(location, ServiceType.MAINTENANCE);
  
  // Try to get article content for this location
  const articleContent = await getArticleContent('maintenance', location);
  
  // Check if service is available at this location
  if (!serviceContent || !isServiceAvailableAtLocation(location, ServiceType.MAINTENANCE)) {
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
    serviceName: "Irrigation Maintenance",
    serviceType: "Sprinkler Maintenance Service",
    serviceSlug: "maintenance",
    city: cityName,
    locationSlug: location,
    description: serviceContent.metaDescription,
    price: "195", // Default price for structured data
    ratingValue: "4.9",
    reviewCount: "96",
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
      serviceTypeSlug="maintenance"
      serviceTitle="Irrigation Maintenance"
      backButtonText="Back to Main Maintenance Services"
      structuredDataProps={structuredDataProps}
      serviceAreaText={`We provide professional irrigation maintenance services throughout ${cityName} and surrounding areas.`}
      ctaTitle={`Professional Irrigation Maintenance in ${cityName}`}
      ctaSubtitle="Keep your sprinkler system running efficiently year-round with our expert maintenance services."
      articleTitle={`Additional Information About Irrigation Maintenance in ${cityName}`}
      themeColor="irrigation-darkGreen"
    />
  );
}
