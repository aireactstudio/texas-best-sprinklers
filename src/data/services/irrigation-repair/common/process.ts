import { ServiceProcess } from '@/data/types/serviceTypes';

/**
 * Common process steps for irrigation repair services
 */
export const commonProcess: ServiceProcess[] = [
  {
    step: 1,
    title: 'Initial Contact',
    description: 'Contact us by phone or online to describe your irrigation system issues. We\'ll ask diagnostic questions to prepare for your service visit.'
  },
  {
    step: 2,
    title: 'On-Site Diagnosis',
    description: 'Our technician will arrive at your property, inspect your irrigation system, and identify all issues that need to be addressed.'
  },
  {
    step: 3,
    title: 'Repair Recommendation',
    description: 'We\'ll provide a clear explanation of the issues found and recommend the most effective and cost-efficient repairs.'
  },
  {
    step: 4,
    title: 'Repair Service',
    description: 'Upon your approval, we complete the necessary repairs using quality parts and materials that match or exceed your original system components.'
  },
  {
    step: 5,
    title: 'System Testing',
    description: 'After repairs are complete, we thoroughly test your system to ensure everything is working properly and make any necessary adjustments.'
  },
  {
    step: 6,
    title: 'Final Walkthrough',
    description: 'We\'ll walk you through the repairs made and provide recommendations for ongoing maintenance to prevent future issues.'
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
    locationProcess[0].description = `Contact us by phone or online to describe your irrigation system issues in ${cityName}. We'll ask diagnostic questions to prepare for your service visit.`;
  }
  
  return locationProcess;
};

export default getLocationProcess;
