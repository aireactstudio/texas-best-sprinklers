import { ServiceBenefit } from '@/data/types/serviceTypes';

/**
 * Common benefits for sprinkler maintenance services across all locations
 */
export const commonBenefits: ServiceBenefit[] = [
  {
    title: 'Water Conservation',
    description: 'Regular maintenance ensures your system operates efficiently, reducing water waste by up to 30% compared to poorly maintained systems.',
    icon: 'droplet'
  },
  {
    title: 'Cost Savings',
    description: 'Preventative maintenance helps avoid costly emergency repairs and extends the lifespan of your irrigation system components.',
    icon: 'dollar-sign'
  },
  {
    title: 'Healthier Landscape',
    description: 'Properly maintained sprinkler systems provide consistent, even coverage that promotes healthier plants and a more vibrant lawn.',
    icon: 'leaf'
  },
  {
    title: 'Seasonal Optimization',
    description: 'Our maintenance programs include seasonal adjustments to ensure your system is optimized for changing weather conditions throughout the year.',
    icon: 'sun'
  },
  {
    title: 'Peace of Mind',
    description: 'With professional maintenance, you can rest assured that your irrigation system is operating correctly and efficiently at all times.',
    icon: 'shield'
  }
];

export default commonBenefits;
