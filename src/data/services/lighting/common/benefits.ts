import { ServiceBenefit } from '@/data/types/serviceTypes';

/**
 * Common benefits for outdoor lighting services across all locations
 */
export const commonBenefits: ServiceBenefit[] = [
  {
    title: 'Enhanced Security',
    description: 'Strategic outdoor lighting deters potential intruders by eliminating dark areas around your property where someone could hide undetected.',
    icon: 'shield'
  },
  {
    title: 'Improved Safety',
    description: 'Properly illuminated walkways, steps, and entryways prevent accidents and falls, especially for guests unfamiliar with your property.',
    icon: 'alert-triangle'
  },
  {
    title: 'Increased Property Value',
    description: 'Professional landscape lighting can increase your home\'s value by up to 20% by enhancing curb appeal and architectural features.',
    icon: 'home'
  },
  {
    title: 'Extended Outdoor Living',
    description: 'Enjoy your outdoor spaces well into the evening with properly designed lighting that creates a warm, inviting atmosphere.',
    icon: 'sunset'
  },
  {
    title: 'Energy Efficiency',
    description: 'Our LED lighting systems use up to 80% less energy than traditional lighting while providing superior illumination and longer lifespans.',
    icon: 'zap'
  }
];

export default commonBenefits;
