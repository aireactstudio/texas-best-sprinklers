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

export default async function LocationSpecificLandscapeLightingRepairPage({ params }: { params: { location: string } }) {
  const { location } = params;
  const serviceType = ServiceType.OUTDOOR_LIGHTING;
  const serviceConfig = getServiceConfig(serviceType);
  const serviceTypeSlug = 'landscape-lighting-repair'; // Custom slug for this service
  
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
    serviceName: "Landscape Lighting Repair",
    serviceType: "Outdoor Lighting Maintenance",
    serviceSlug: serviceTypeSlug,
    city: cityName,
    locationSlug: location,
    description: `Expert landscape lighting repair services in ${cityName} to restore beauty, safety, and security to your outdoor lighting system.`,
    price: "175", // Default price for structured data
    ratingValue: "4.8",
    reviewCount: "72",
    testimonial: {
      author: "Jennifer P.",
      text: "Texas Best Sprinklers quickly diagnosed and repaired our landscape lighting issues. They were professional and thorough. Our yard looks beautiful at night again!",
      rating: 5
    }
  };

  // Features and benefits for this specific service
  const features = [
    "Fixture replacement",
    "Wire troubleshooting",
    "LED upgrades",
    "Controller repairs",
    "Transformer issues",
    "Timer programming",
    "Damage assessment"
  ];

  const benefitSections = [
    {
      title: `Fast Diagnosis in ${cityName}`,
      content: `Our ${cityName} technicians quickly identify the source of your lighting issues using advanced diagnostic methods, allowing for efficient repairs with minimal disruption to your property.`
    },
    {
      title: 'Energy-Efficient Solutions',
      content: `When repairing your landscape lighting in ${cityName}, we look for opportunities to improve energy efficiency with LED upgrades and modern components that reduce power consumption.`
    },
    {
      title: 'Long-Term Reliability',
      content: `We use only high-quality replacement parts and proven repair techniques to ensure your ${cityName} landscape lighting system provides reliable, beautiful illumination for years to come.`
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
      serviceTitle="Landscape Lighting Repair"
      backButtonText="Back to Landscape Lighting Repair Services"
      usingFallbackContent={usingFallbackContent}
      structuredDataProps={structuredDataProps}
      serviceAreaText={`We provide professional landscape lighting repair throughout ${cityName} and surrounding areas.`}
      ctaTitle={`Professional Landscape Lighting Repair in ${cityName}`}
      ctaSubtitle="Contact us today to schedule your service or get a free quote."
      themeColor="lighting-amber"
    />
  );
}
