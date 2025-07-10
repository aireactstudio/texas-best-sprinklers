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

export default async function LocationSpecificDripIrrigationPage({ params }: { params: { location: string } }) {
  const { location } = params;
  const serviceType = ServiceType.SPRINKLER_INSTALLATION;
  const serviceConfig = getServiceConfig(serviceType);
  const serviceTypeSlug = 'drip-irrigation'; // Custom slug for this service
  
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
  const cityName = locationInfo.name;
  
  // Prepare structured data for the page
  const structuredDataProps = {
    serviceName: "Drip Irrigation Systems",
    serviceType: "Irrigation Installation",
    serviceSlug: serviceTypeSlug,
    city: cityName,
    locationSlug: location,
    description: `Water-efficient drip irrigation installation and maintenance services in ${cityName} for gardens, flower beds, and landscaping areas.`,
    price: "895", // Default price for structured data
    ratingValue: "4.9",
    reviewCount: "64",
    testimonial: {
      author: "Rebecca L.",
      text: "The drip irrigation system installed by Texas Best Sprinklers has transformed my garden. My plants are thriving and my water bill is much lower!",
      rating: 5
    }
  };

  // Features and benefits for this specific service
  const features = [
    "Precision water delivery",
    "Water conservation",
    "Reduced runoff",
    "Healthier plants",
    "Minimized weed growth",
    "Efficient nutrient delivery",
    "Custom system design"
  ];

  const benefitSections = [
    {
      title: `Water Conservation in ${cityName}`,
      content: `Our drip irrigation systems deliver water directly to plant roots in ${cityName} landscapes, reducing water usage by up to 60% compared to traditional sprinkler systems while maintaining lush, healthy plants.`
    },
    {
      title: 'Healthier Landscapes',
      content: `By providing consistent moisture levels directly to the root zone, drip irrigation promotes healthier plant growth in ${cityName}'s unique soil and climate conditions while minimizing disease and fungal problems.`
    },
    {
      title: 'Custom Design',
      content: `We custom design each drip irrigation system to meet the specific needs of your ${cityName} property, taking into account your plant types, soil composition, sun exposure, and local watering restrictions.`
    }
  ];
  
  // Check for fallback content usage
  const usingFallbackContent = false;
  
  return (
    <LocationServicePageTemplate
      location={location}
      cityName={cityName}
      serviceContent={serviceContent}
      articleContent={articleContent}
      serviceTypeSlug={serviceTypeSlug}
      serviceTitle="Drip Irrigation Systems"
      backButtonText="Back to Drip Irrigation Services"
      usingFallbackContent={usingFallbackContent}
      structuredDataProps={structuredDataProps}
      serviceAreaText={`We provide professional drip irrigation installation throughout ${cityName} and surrounding areas.`}
      ctaTitle={`Professional Drip Irrigation Systems in ${cityName}`}
      ctaSubtitle="Contact us today to schedule your service or get a free quote."
      themeColor="irrigation-blue"
    />
  );
}
