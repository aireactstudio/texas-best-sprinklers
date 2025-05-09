import { ServiceBenefit } from '../../../types/serviceTypes';

/**
 * Common benefits for drainage services across all locations
 */
export const commonBenefits: ServiceBenefit[] = [
  {
    title: 'Foundation Protection',
    description: 'Prevent costly foundation damage by directing water away from your home.',
    icon: 'home'
  },
  {
    title: 'Landscape Preservation',
    description: 'Eliminate standing water and prevent soil erosion that damages your landscape.',
    icon: 'tree'
  },
  {
    title: 'Mosquito Prevention',
    description: 'Reduce breeding grounds for mosquitoes by eliminating standing water on your property.',
    icon: 'shield'
  },
  {
    title: 'Increased Property Value',
    description: 'A properly drained property adds value and appeals to future buyers.',
    icon: 'trending-up'
  }
];

/**
 * Function to get location-specific benefits with customized descriptions
 */
export const getLocationBenefits = (location: string, customizations?: Record<string, string>): ServiceBenefit[] => {
  if (!customizations) return commonBenefits;
  
  // Return benefits with any location-specific customizations
  return commonBenefits.map(benefit => {
    if (customizations[benefit.title]) {
      return {
        ...benefit,
        description: customizations[benefit.title]
      };
    }
    return benefit;
  });
};