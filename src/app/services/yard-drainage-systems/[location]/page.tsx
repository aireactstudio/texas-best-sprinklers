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

export default async function LocationSpecificYardDrainageSystemsPage({ params }: { params: { location: string } }) {
  const { location } = params;
  const serviceType = ServiceType.DRAINAGE;
  const serviceConfig = getServiceConfig(serviceType);
  const serviceTypeSlug = 'yard-drainage-systems'; // Custom slug for this service
  
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
    serviceName: "Yard Drainage Systems",
    serviceType: "Drainage Solution",
    serviceSlug: serviceTypeSlug,
    city: cityName,
    locationSlug: location,
    description: `Expert yard drainage solutions in ${cityName} to prevent water pooling, erosion, and landscape damage while preserving your property's beauty.`,
    price: "1295", // Default price for structured data
    ratingValue: "4.9",
    reviewCount: "87",
    testimonial: {
      author: "Sarah M.",
      text: "Texas Best Sprinklers transformed our backyard from a soggy mess into a beautiful, usable space. Their yard drainage system works perfectly even during heavy rain!",
      rating: 5
    }
  };

  // Features and benefits for this specific service
  const features = [
    "Comprehensive yard assessment",
    "Custom drainage design",
    "Water flow management",
    "Erosion control",
    "Surface water redirection",
    "Landscape integration",
    "Sustainable solutions"
  ];

  const benefitSections = [
    {
      title: `Complete Water Management in ${cityName}`,
      content: `Our yard drainage systems provide comprehensive water management for ${cityName} properties, addressing surface water, soil saturation, and runoff concerns with integrated solutions.`
    },
    {
      title: 'Landscape Preservation',
      content: `Properly designed drainage prevents erosion and landscape damage in ${cityName}'s climate, preserving your property's beauty and protecting your landscaping investment.`
    },
    {
      title: 'Custom Solutions',
      content: `We design yard drainage systems specifically for your ${cityName} property's unique topography, soil conditions, and water management challenges to ensure effective, long-lasting performance.`
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
      serviceTitle="Yard Drainage Systems"
      backButtonText="Back to Yard Drainage Services"
      usingFallbackContent={usingFallbackContent}
      structuredDataProps={structuredDataProps}
      serviceAreaText={`We provide professional yard drainage solutions throughout ${cityName} and surrounding areas.`}
      ctaTitle={`Professional Yard Drainage Systems in ${cityName}`}
      ctaSubtitle="Contact us today to schedule your service or get a free quote."
      themeColor="drainage-green"
    />
  );
}
