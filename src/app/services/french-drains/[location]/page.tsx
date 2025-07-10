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

export default async function LocationSpecificFrenchDrainsPage({ params }: { params: { location: string } }) {
  const { location } = params;
  const serviceType = ServiceType.DRAINAGE;
  const serviceConfig = getServiceConfig(serviceType);
  const serviceTypeSlug = 'french-drains'; // Custom slug for this service
  
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
    serviceName: "French Drain Installation",
    serviceType: "Drainage Solution",
    serviceSlug: serviceTypeSlug,
    city: cityName,
    locationSlug: location,
    description: `Expert French drain installation services in ${cityName} to effectively manage excess groundwater and protect your property from water damage.`,
    price: "975", // Default price for structured data
    ratingValue: "4.8",
    reviewCount: "92",
    testimonial: {
      author: "David W.",
      text: "After Texas Best Sprinklers installed French drains in my yard, I no longer have standing water issues even during heavy rain. Excellent work!",
      rating: 5
    }
  };

  // Features and benefits for this specific service
  const features = [
    "Proper water redirection",
    "Foundation protection",
    "Prevent soil erosion",
    "Reduce standing water",
    "Prevent basement flooding",
    "Custom drainage solutions",
    "Professional installation"
  ];

  const benefitSections = [
    {
      title: `Foundation Protection in ${cityName}`,
      content: `Our French drain systems protect ${cityName} homes and businesses from foundation damage by effectively redirecting groundwater away from your property's foundation.`
    },
    {
      title: 'Yard Drainage',
      content: `Eliminate standing water in your ${cityName} yard with our properly designed and installed French drains, ensuring your outdoor spaces remain usable and beautiful even after heavy rainfall.`
    },
    {
      title: 'Custom Solutions',
      content: `We design French drain systems specifically for your ${cityName} property's unique landscape, soil conditions, and water management challenges to provide long-lasting, effective drainage.`
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
      serviceTitle="French Drain Installation"
      backButtonText="Back to French Drain Services"
      usingFallbackContent={usingFallbackContent}
      structuredDataProps={structuredDataProps}
      serviceAreaText={`We provide professional French drain installation throughout ${cityName} and surrounding areas.`}
      ctaTitle={`Professional French Drain Installation in ${cityName}`}
      ctaSubtitle="Contact us today to schedule your service or get a free quote."
      themeColor="drainage-green"
    />
  );
}
