import { ServiceBenefit } from '@/data/types/serviceTypes';

/**
 * Common benefits for sprinkler installation services across all locations
 */
export const commonBenefits: ServiceBenefit[] = [
  {
    title: 'Water Conservation',
    description: 'Our professionally designed systems use water-efficient components and smart technology to reduce water usage by up to 40% compared to manual watering.',
    icon: 'droplet'
  },
  {
    title: 'Increased Property Value',
    description: 'A professionally installed irrigation system can increase your property value and curb appeal, making it a wise investment for homeowners.',
    icon: 'home'
  },
  {
    title: 'Customized Design',
    description: 'We create a tailored irrigation system design based on your specific landscape, soil conditions, and plant requirements for optimal coverage.',
    icon: 'layout'
  },
  {
    title: 'Professional Installation',
    description: 'Our experienced technicians ensure proper installation with minimal disruption to your landscape, using high-quality components for long-lasting performance.',
    icon: 'tool'
  },
  {
    title: 'Smart Technology Integration',
    description: 'We incorporate the latest smart controllers and weather sensors to automatically adjust watering schedules based on local conditions.',
    icon: 'smartphone'
  }
];

export default commonBenefits;
