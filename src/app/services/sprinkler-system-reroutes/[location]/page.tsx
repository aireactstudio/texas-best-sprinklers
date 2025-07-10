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

export default async function LocationSpecificSprinklerReroutesPage({ params }: { params: { location: string } }) {
  const { location } = params;
  const serviceType = ServiceType.SPRINKLER_REPAIR;
  const serviceConfig = getServiceConfig(serviceType);
  const serviceTypeSlug = 'sprinkler-system-reroutes'; // Custom slug for this service
  
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
    serviceName: "Sprinkler System Reroutes",
    serviceType: "Irrigation System Modification",
    serviceSlug: serviceTypeSlug,
    city: cityName,
    locationSlug: location,
    description: `Expert sprinkler system rerouting services in ${cityName} for homeowners dealing with construction conflicts, landscape changes, or system improvements.`,
    price: "750", // Default price for structured data
    ratingValue: "4.8",
    reviewCount: "87",
    testimonial: {
      author: "John D.",
      text: "Texas Best Sprinklers did an excellent job rerouting my irrigation system around our new patio. Professional work and minimal disruption to my yard.",
      rating: 5
    }
  };

  // Features and benefits for this specific service
  const features = [
    "Conflict resolution with new construction",
    "System redesign for landscape changes",
    "Improved coverage planning",
    "Efficient water distribution",
    "Updated zoning strategies",
    "Minimize trenching disruption",
    "Professional installation"
  ];

  const benefitSections = [
    {
      title: `Expert System Redesign in ${cityName}`,
      content: `Our ${cityName} technicians specialize in rerouting sprinkler systems to accommodate new construction, hardscaping projects, or landscape renovations with minimal disruption to your property.`
    },
    {
      title: 'Enhanced Coverage',
      content: `When we reroute your system in ${cityName}, we evaluate your current irrigation needs and improve coverage to ensure your landscape receives optimal watering.`
    },
    {
      title: 'Updated Technology',
      content: `System reroutes provide the perfect opportunity to integrate modern water-saving components that work efficiently with ${cityName}'s specific climate conditions and water restrictions.`
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
      serviceTitle="Sprinkler System Reroutes"
      backButtonText="Back to Sprinkler System Reroute Services"
      usingFallbackContent={usingFallbackContent}
      structuredDataProps={structuredDataProps}
      serviceAreaText={`We provide professional sprinkler system rerouting services throughout ${cityName} and surrounding areas.`}
      ctaTitle={`Professional Sprinkler System Reroutes in ${cityName}`}
      ctaSubtitle="Contact us today to schedule your service or get a free quote."
      themeColor="irrigation-blue"
    />
  );
}
