import { ServiceBenefit } from '@/data/types/serviceTypes';

/**
 * Common benefits for irrigation repair services across all locations
 */
export const commonBenefits: ServiceBenefit[] = [
  {
    title: 'Fast Response Time',
    description: 'We typically respond to repair requests within 24-48 hours to minimize water waste and landscape damage.',
    icon: 'clock'
  },
  {
    title: 'Experienced Technicians',
    description: 'Our licensed irrigation specialists have extensive experience repairing all types and brands of sprinkler systems.',
    icon: 'tool'
  },
  {
    title: 'Comprehensive Diagnostics',
    description: 'We thoroughly inspect your entire system to identify all issues, not just the obvious symptoms.',
    icon: 'search'
  },
  {
    title: 'Guaranteed Repairs',
    description: 'All our repair work is backed by a satisfaction guarantee for your peace of mind.',
    icon: 'check-circle'
  }
];

export default commonBenefits;
