import { ServiceProcess } from '@/data/types/serviceTypes';

/**
 * Common process steps for outdoor lighting services
 */
export const commonProcess: ServiceProcess[] = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'We meet with you to discuss your lighting goals, assess your property, and understand your aesthetic preferences and functional needs.'
  },
  {
    step: 2,
    title: 'Custom Design',
    description: 'Our lighting designers create a tailored lighting plan for your property, considering architectural features, landscape elements, and your specific requirements.'
  },
  {
    step: 3,
    title: 'Proposal & Approval',
    description: 'We present a comprehensive proposal with lighting design concepts, fixture selections, installation details, and pricing for your review and approval.'
  },
  {
    step: 4,
    title: 'Professional Installation',
    description: 'Our experienced technicians install your lighting system with minimal disruption to your landscape, ensuring proper placement, wiring, and connections.'
  },
  {
    step: 5,
    title: 'System Testing & Adjustments',
    description: 'We test all components, make fine adjustments to light positioning and brightness, and ensure everything is working perfectly before final approval.'
  },
  {
    step: 6,
    title: 'Client Walkthrough & Training',
    description: 'We demonstrate how to operate your new lighting system, explain maintenance requirements, and provide guidance on seasonal adjustments and special features.'
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
    locationProcess[0].description = `We meet with you at your ${cityName} property to discuss your lighting goals, assess your landscape, and understand your aesthetic preferences and functional needs.`;
  }
  
  // Customize the description of the fourth step to include the city name
  if (locationProcess[3]) {
    locationProcess[3].description = `Our experienced technicians install your lighting system in ${cityName} with minimal disruption to your landscape, ensuring proper placement, wiring, and connections.`;
  }
  
  return locationProcess;
};

export default commonProcess;
