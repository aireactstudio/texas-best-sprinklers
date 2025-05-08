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

export default async function LocationSpecificInstallationPage({ params }: { params: { location: string } }) {
  const { location } = params;
  
  // Get service content for this location using our centralized data structure
  const serviceContent = getServiceLocationData(location, ServiceType.SPRINKLER_INSTALLATION);
  
  // Try to get article content for this location
  const articleContent = await getArticleContent('sprinkler-installation', location);
  
  // Check if service is available at this location
  if (!serviceContent || !isServiceAvailableAtLocation(location, ServiceType.SPRINKLER_INSTALLATION)) {
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
    serviceName: "Sprinkler Installation",
    serviceType: "Irrigation System Installation",
    serviceSlug: "sprinkler-installation",
    city: cityName,
    locationSlug: location,
    description: serviceContent.metaDescription,
    price: "1500", // Default price for structured data
    ratingValue: "4.9",
    reviewCount: "112",
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
      serviceTypeSlug="sprinkler-installation"
      serviceTitle="Sprinkler Installation"
      backButtonText="Back to Main Sprinkler Installation Services"
      structuredDataProps={structuredDataProps}
      serviceAreaText={`We provide professional sprinkler installation services throughout ${cityName} and surrounding areas.`}
      ctaTitle={`Professional Sprinkler Installation in ${cityName}`}
      ctaSubtitle="Get a custom irrigation system designed for your property with our expert installation services."
      articleTitle={`Additional Information About Sprinkler Installation in ${cityName}`}
      themeColor="irrigation-blue"
    />
  );
}
