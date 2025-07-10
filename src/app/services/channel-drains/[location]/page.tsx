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

export default async function LocationSpecificChannelDrainsPage({ params }: { params: { location: string } }) {
  const { location } = params;
  const serviceType = ServiceType.DRAINAGE;
  const serviceConfig = getServiceConfig(serviceType);
  const serviceTypeSlug = 'channel-drains'; // Custom slug for this service
  
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
    serviceName: "Channel Drain Installation",
    serviceType: "Drainage Solution",
    serviceSlug: serviceTypeSlug,
    city: cityName,
    locationSlug: location,
    description: `Expert channel drain installation services in ${cityName} for effective surface water management and protection from water damage.`,
    price: "850", // Default price for structured data
    ratingValue: "4.7",
    reviewCount: "78",
    testimonial: {
      author: "Michael T.",
      text: "Texas Best Sprinklers installed channel drains that completely solved our driveway flooding issues. Great work at a fair price.",
      rating: 5
    }
  };

  // Features and benefits for this specific service
  const features = [
    "Custom channel drain design",
    "Professional installation",
    "Surface water management",
    "Property protection",
    "Erosion prevention",
    "Durable materials",
    "Seamless integration"
  ];

  const benefitSections = [
    {
      title: `Effective Water Management in ${cityName}`,
      content: `Our channel drain solutions are designed specifically for ${cityName}'s climate and soil conditions, effectively managing heavy rainfall and preventing water accumulation around your property.`
    },
    {
      title: 'Property Protection',
      content: `Channel drains protect your ${cityName} property from water damage by efficiently collecting and redirecting surface water away from foundations, driveways, and landscaped areas.`
    },
    {
      title: 'Custom Solutions',
      content: `Each channel drain we install in ${cityName} is customized to your specific property layout, ensuring optimal water management and seamless integration with your existing landscape.`
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
      serviceTitle="Channel Drain Installation"
      backButtonText="Back to Channel Drain Services"
      usingFallbackContent={usingFallbackContent}
      structuredDataProps={structuredDataProps}
      serviceAreaText={`We provide professional channel drain installation throughout ${cityName} and surrounding areas.`}
      ctaTitle={`Professional Channel Drain Installation in ${cityName}`}
      ctaSubtitle="Contact us today to schedule your service or get a free quote."
      themeColor="drainage-green"
    />
  );
}
