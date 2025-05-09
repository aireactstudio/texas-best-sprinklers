import { ServiceProcess } from '@/data/types/serviceTypes';

/**
 * Common process steps for sprinkler installation services
 */
export const commonProcess: ServiceProcess[] = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'We meet with you to discuss your irrigation needs, assess your landscape, and understand your water conservation goals.'
  },
  {
    step: 2,
    title: 'Custom System Design',
    description: 'Our irrigation specialists create a detailed design plan customized for your property, including zone layout, component selection, and water efficiency considerations.'
  },
  {
    step: 3,
    title: 'Proposal & Approval',
    description: 'We provide a comprehensive proposal with system details, component specifications, installation timeline, and pricing for your review and approval.'
  },
  {
    step: 4,
    title: 'Professional Installation',
    description: 'Our experienced technicians install your irrigation system with minimal disruption to your landscape, following industry best practices and local codes.'
  },
  {
    step: 5,
    title: 'System Testing & Calibration',
    description: 'We thoroughly test all components, adjust sprinkler heads for optimal coverage, and fine-tune the controller settings to ensure efficient operation.'
  },
  {
    step: 6,
    title: 'Client Walkthrough & Training',
    description: 'We demonstrate how to operate your new irrigation system, explain maintenance requirements, and provide tips for maximizing water efficiency.'
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
    locationProcess[0].description = `We meet with you at your ${cityName} property to discuss your irrigation needs, assess your landscape, and understand your water conservation goals.`;
  }
  
  // Customize the description of the fourth step to include the city name
  if (locationProcess[3]) {
    locationProcess[3].description = `Our experienced technicians install your irrigation system in ${cityName} with minimal disruption to your landscape, following industry best practices and local codes.`;
  }
  
  return locationProcess;
};

export default commonProcess;
