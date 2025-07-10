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

export default async function LocationSpecificSumpPumpsPage({ params }: { params: { location: string } }) {
  const { location } = params;
  const serviceType = ServiceType.DRAINAGE;
  const serviceConfig = getServiceConfig(serviceType);
  const serviceTypeSlug = 'sump-pumps'; // Custom slug for this service
  
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
    serviceName: "Sump Pump Installation",
    serviceType: "Drainage Solution",
    serviceSlug: serviceTypeSlug,
    city: cityName,
    locationSlug: location,
    description: `Expert sump pump installation and maintenance services in ${cityName} to protect your property from water damage and flooding.`,
    price: "1195", // Default price for structured data
    ratingValue: "4.9",
    reviewCount: "53",
    testimonial: {
      author: "Michael T.",
      text: "Texas Best Sprinklers installed a sump pump system that has kept our basement dry through several heavy storms. Excellent service and quality work.",
      rating: 5
    }
  };

  // Features and benefits for this specific service
  const features = [
    "Basement flood prevention",
    "Foundation protection",
    "Battery backup options",
    "Proper sizing and installation",
    "Alarm system integration",
    "Regular maintenance",
    "Emergency repair service"
  ];

  const benefitSections = [
    {
      title: `Flood Prevention in ${cityName}`,
      content: `Our professionally installed sump pump systems protect ${cityName} homes and businesses from flooding during heavy rainfall, preventing costly water damage to your property and belongings.`
    },
    {
      title: 'Foundation Protection',
      content: `By controlling groundwater levels around your ${cityName} property, our sump pump solutions help prevent foundation damage caused by hydrostatic pressure and soil erosion.`
    },
    {
      title: 'Reliable Operation',
      content: `We offer battery backup options and smart monitoring systems for your ${cityName} sump pump, ensuring continuous operation during power outages and alerting you to any performance issues.`
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
      serviceTitle="Sump Pump Installation"
      backButtonText="Back to Sump Pump Services"
      usingFallbackContent={usingFallbackContent}
      structuredDataProps={structuredDataProps}
      serviceAreaText={`We provide professional sump pump installation throughout ${cityName} and surrounding areas.`}
      ctaTitle={`Professional Sump Pump Installation in ${cityName}`}
      ctaSubtitle="Contact us today to schedule your service or get a free quote."
      themeColor="drainage-green"
    />
  );
}
