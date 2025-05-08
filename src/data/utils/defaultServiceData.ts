import { ServiceType } from '../serviceTypes';
import type { ServiceContent, ServiceBenefit, FAQ, Testimonial } from '../types/serviceTypes';
import { getLocationData } from '../locationData';

/**
 * Generates default service content for locations that don't have specific data defined yet
 * This prevents build warnings while maintaining proper SEO structure
 */
export function generateDefaultServiceContent(location: string, serviceType: ServiceType): ServiceContent {
  // Get location data for proper naming
  const locationData = getLocationData(location);
  const locationName = locationData?.name || location.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
  
  // Create readable service type name for display
  const serviceTypeStr = serviceType.toString();
  const readableServiceType = serviceTypeStr
    .replace(/_/g, ' ')
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace('Sprinkler-installation', 'Sprinkler Installation')
    .replace('Irrigation-repair', 'Irrigation Repair');

  // Image mapping for different service types
  const serviceImages = {
    [ServiceType.DRAINAGE]: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/d03ac5c4-6c52-4aa9-33a4-f81f5ebe8400/public',
    [ServiceType.IRRIGATION_REPAIR]: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/6aaff00e-da3c-47cd-6e44-66ea7a7ff800/public',
    [ServiceType.OUTDOOR_LIGHTING]: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/465a2e86-e26e-4db8-8f1c-50bb1caa4000/public',
    [ServiceType.MAINTENANCE]: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/e47a3d9b-1f15-4fc0-3f9c-a1ccd23d3400/public',
    [ServiceType.SPRINKLER_INSTALLATION]: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/e47a3d9b-1f15-4fc0-3f9c-a1ccd23d3400/public',
    [ServiceType.FENCING]: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/d03ac5c4-6c52-4aa9-33a4-f81f5ebe8400/public',
  };

  // Default content aligned with established pattern
  return {
    title: `Professional ${readableServiceType} in ${locationName}, Texas`,
    metaDescription: `Expert ${readableServiceType.toLowerCase()} services in ${locationName}. Reliable, professional service for your home or business from Texas Best Sprinklers.`,
    heroImage: serviceImages[serviceType] || serviceImages[ServiceType.SPRINKLER_INSTALLATION],
    serviceType: serviceType,
    intro: `Texas Best Sprinklers provides ${locationName} homeowners with professional ${readableServiceType.toLowerCase()} services. Our experienced technicians use quality materials and industry best practices to ensure your property receives the best care possible.`,
    benefits: [
      {
        title: 'Professional Service',
        description: 'Fully licensed and insured technicians with years of experience.',
        icon: 'shield'
      },
      {
        title: 'Quality Workmanship',
        description: 'We use only top-quality materials and equipment for lasting results.',
        icon: 'tool'
      },
      {
        title: 'Reliable Service',
        description: 'Prompt, dependable service with clear communication throughout the process.',
        icon: 'clock'
      },
      {
        title: 'Local Expertise',
        description: `We understand ${locationName}'s unique requirements and provide tailored solutions.`,
        icon: 'map-pin'
      }
    ],
    services: [
      {
        title: `${readableServiceType} Services`,
        description: `Professional ${readableServiceType.toLowerCase()} services for ${locationName} homes and businesses. Our team delivers reliable, high-quality solutions with attention to detail.`,
        image: serviceImages[serviceType] || serviceImages[ServiceType.SPRINKLER_INSTALLATION],
        features: [
          'Experienced, licensed technicians',
          'Quality materials and workmanship',
          'Transparent pricing and estimates',
          'Prompt, reliable scheduling',
          'Satisfaction guaranteed'
        ]
      }
    ],
    faqs: [
      {
        question: `How soon can you provide ${readableServiceType.toLowerCase()} services in ${locationName}?`,
        answer: `We typically schedule ${locationName} appointments within 2-3 business days. For emergency services, we offer expedited scheduling options when available.`
      },
      {
        question: `Do you offer free estimates for ${readableServiceType.toLowerCase()} in ${locationName}?`,
        answer: `Yes, we provide free on-site estimates for all ${readableServiceType.toLowerCase()} services in ${locationName}. Contact us to schedule a convenient time for one of our technicians to assess your needs.`
      },
      {
        question: `What areas of ${locationName} do you serve?`,
        answer: `We serve all neighborhoods and surrounding areas of ${locationName}, including residential, commercial, and municipal properties.`
      }
    ],
    testimonial: {
      quote: `Texas Best Sprinklers provided excellent service for our ${locationName} property. The technicians were professional, knowledgeable, and completed the job promptly.`,
      author: `${locationName} Customer`,
      location: locationName,
      rating: 5
    },
    updatedAt: new Date().toISOString().split('T')[0]
  };
}

export default generateDefaultServiceContent;
