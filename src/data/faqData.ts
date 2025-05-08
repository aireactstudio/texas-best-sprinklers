import { ServiceType } from './types/serviceTypes';
import { FAQDatabase } from './types/faqTypes';

/**
 * Location-specific FAQs for all service types
 * Organized hierarchically by service type and location
 */

// Empty data structure to prevent build errors
const faqData: Record<string, { common: any[], byLocation: Record<string, any[]> }> = {};

/**
 * Helper function to get FAQs specific to a service type and location
 * 
 * @param serviceType - The type of service
 * @param location - The specific location
 * @returns An array of FAQs relevant to the specified service and location
 */
export const getLocationSpecificFAQs = (
  serviceType: ServiceType,
  location: string
): { question: string; answer: string }[] => {
  // Initialize with common FAQs for this service type
  const serviceData = faqData[serviceType] || { common: [], byLocation: {} };
  let result = [...serviceData.common];
  
  // Add location-specific FAQs if available
  if (serviceData.byLocation[location]) {
    result = [...result, ...serviceData.byLocation[location]];
  }
  
  // Format for the component (only question and answer)
  return result.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));
};

export default faqData;
