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

export default async function LocationSpecificSprinklerCheckUpPage({ params }: { params: { location: string } }) {
  const { location } = params;
  const serviceType = ServiceType.MAINTENANCE;
  const serviceConfig = getServiceConfig(serviceType);
  const serviceTypeSlug = 'sprinkler-system-check-up'; // Custom slug for this service
  
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
    serviceName: "Sprinkler System Check-Up",
    serviceType: "Irrigation System Maintenance",
    serviceSlug: serviceTypeSlug,
    city: cityName,
    locationSlug: location,
    description: `Expert sprinkler system check-up services in ${cityName} to identify and prevent problems before they cause damage or waste water.`,
    price: "99", // Default price for structured data
    ratingValue: "4.9",
    reviewCount: "95",
    testimonial: {
      author: "Sarah M.",
      text: "Texas Best Sprinklers does a thorough job with their check-ups. They found several issues I didn't know about and fixed them on the spot. Highly recommend!",
      rating: 5
    }
  };

  // Features and benefits for this specific service
  const features = [
    "Complete system inspection",
    "Pressure testing",
    "Controller programming check",
    "Head adjustment and cleaning",
    "Minor repairs included",
    "Efficiency assessment",
    "Seasonal recommendations"
  ];

  const benefitSections = [
    {
      title: `Preventative Maintenance in ${cityName}`,
      content: `Our comprehensive check-up prevents costly damage to your ${cityName} property by identifying small issues before they become major problems, saving you money on repairs and wasted water.`
    },
    {
      title: 'Water Conservation',
      content: `Regular check-ups ensure your ${cityName} irrigation system runs at optimal efficiency, using precisely the right amount of water for your landscape needs while respecting local water conservation guidelines.`
    },
    {
      title: 'System Longevity',
      content: `Professional maintenance extends the life of your irrigation components in ${cityName}'s challenging climate, protecting your landscape investment for years to come.`
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
      serviceTitle="Sprinkler System Check-Up"
      backButtonText="Back to Sprinkler System Check-Up Services"
      usingFallbackContent={usingFallbackContent}
      structuredDataProps={structuredDataProps}
      serviceAreaText={`We provide professional sprinkler system check-up services throughout ${cityName} and surrounding areas.`}
      ctaTitle={`Professional Sprinkler System Check-Ups in ${cityName}`}
      ctaSubtitle="Contact us today to schedule your service or get a free quote."
      themeColor="irrigation-blue"
    />
  );
}
