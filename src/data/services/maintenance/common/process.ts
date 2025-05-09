import { ServiceProcess } from '@/data/types/serviceTypes';

/**
 * Common process steps for sprinkler maintenance services
 */
export const commonProcess: ServiceProcess[] = [
  {
    step: 1,
    title: 'Initial System Assessment',
    description: 'We conduct a comprehensive evaluation of your irrigation system to identify its current condition, efficiency, and any existing or potential issues.'
  },
  {
    step: 2,
    title: 'Maintenance Plan Development',
    description: 'Based on the assessment, we create a customized maintenance plan tailored to your specific system, landscape needs, and local climate conditions.'
  },
  {
    step: 3,
    title: 'Regular Service Visits',
    description: 'Our technicians perform scheduled maintenance visits according to your plan, including seasonal adjustments, inspections, and preventative care.'
  },
  {
    step: 4,
    title: 'System Optimization',
    description: 'During each visit, we optimize your system for current conditions, adjusting sprinkler heads, fine-tuning controller settings, and checking for maximum efficiency.'
  },
  {
    step: 5,
    title: 'Issue Resolution',
    description: 'We promptly address any problems discovered during maintenance visits, from minor adjustments to necessary repairs, keeping your system in optimal condition.'
  },
  {
    step: 6,
    title: 'Ongoing Communication',
    description: 'We provide detailed reports after each service visit and offer recommendations for system improvements or upgrades to enhance performance and water conservation.'
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
    locationProcess[0].description = `We conduct a comprehensive evaluation of your ${cityName} property's irrigation system to identify its current condition, efficiency, and any existing or potential issues.`;
  }
  
  // Customize the description of the second step to include the city name
  if (locationProcess[1]) {
    locationProcess[1].description = `Based on the assessment, we create a customized maintenance plan tailored to your specific system, landscape needs, and ${cityName}'s local climate conditions.`;
  }
  
  return locationProcess;
};

export default commonProcess;
