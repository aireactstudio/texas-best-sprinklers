/**
 * Utilities for enhancing location-specific content without modifying base data structures
 */
import { ServiceContent, ServiceBenefit } from '@/data/types/serviceTypes';

/**
 * Enhances benefits for specific locations with more detailed, location-specific content
 * @param location - The location slug
 * @param serviceType - The service type
 * @param benefits - The original benefits array
 * @returns Enhanced benefits for specific locations, or the original benefits if no enhancements exist
 */
export function getEnhancedBenefits(
  location: string,
  serviceType: string,
  benefits: ServiceBenefit[]
): ServiceBenefit[] {
  // Only enhance content for specific location-service combinations
  if (location === 'azle' && serviceType.includes('outdoor-lighting')) {
    return [
      {
        title: 'Enhanced Home Security',
        description: 'Strategic lighting placement creates a powerful deterrent against potential intruders by eliminating dark hiding spots and illuminating entry points around your Azle property.',
        icon: 'shield'
      },
      {
        title: 'Improved Property Value',
        description: 'Professional landscape lighting can increase your Azle home\'s value by 15-20%. In Azle\'s competitive real estate market, homes with custom lighting attract more buyers.',
        icon: 'trending-up'
      },
      {
        title: 'Extended Outdoor Living',
        description: 'Azle\'s pleasant evening climate is perfect for outdoor entertaining. Our custom lighting solutions allow you to enjoy your outdoor spaces well into the evening hours.',
        icon: 'sun'
      },
      {
        title: 'Energy Efficiency',
        description: 'Our advanced LED lighting systems use 80% less energy than traditional lighting options while lasting up to 10 times longer. This means significant energy savings for your Azle home.',
        icon: 'zap'
      }
    ];
  }

  // Return original benefits for all other location-service combinations
  return benefits;
}
