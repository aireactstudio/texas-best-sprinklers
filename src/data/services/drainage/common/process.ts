import { ServiceProcess } from '@/data/types/serviceTypes';

/**
 * Common process steps for drainage services
 */
export const commonProcess: ServiceProcess[] = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'We meet with you to assess your property\'s drainage issues and discuss your concerns.'
  },
  {
    step: 2,
    title: 'Site Assessment',
    description: 'Our team conducts a thorough evaluation of your property to identify water flow patterns, problem areas, and potential solutions.'
  },
  {
    step: 3,
    title: 'Custom Solution Design',
    description: 'We develop a tailored drainage solution plan specific to your property\'s needs and your budget.'
  },
  {
    step: 4,
    title: 'Proposal & Approval',
    description: 'We present our recommended solutions with transparent pricing, and once approved, we schedule the installation.'
  },
  {
    step: 5,
    title: 'Professional Installation',
    description: 'Our experienced team installs your drainage system with minimal disruption to your landscape.'
  },
  {
    step: 6,
    title: 'Final Inspection',
    description: 'We conduct a thorough inspection to ensure everything is working properly and explain how to maintain your new drainage system.'
  }
];

/**
 * Creates location-specific process steps by customizing the common process
 * @param cityName The name of the city to customize process steps for
 * @returns An array of process steps customized for the specified location
 */
export const getLocationProcess = (cityName: string): ServiceProcess[] => {
  // Create a copy of the common process steps
  const locationProcess: ServiceProcess[] = JSON.parse(JSON.stringify(commonProcess));
  
  // Customize the description of the first step to include the city name
  if (locationProcess[0]) {
    locationProcess[0].description = `We meet with you at your ${cityName} property to assess your drainage issues and discuss your concerns.`;
  }
  
  return locationProcess;
};

export default getLocationProcess;
