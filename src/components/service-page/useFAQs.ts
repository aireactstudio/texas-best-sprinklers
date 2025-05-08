import { useState, useEffect } from 'react';
import { ServiceContent, ServiceType, FAQ } from '@/data/types/serviceTypes';
import { getLocationSpecificFAQs } from '@/data/faqData';

/**
 * Custom hook to get FAQs specific to a service and location
 * Combines standard service FAQs with location-specific FAQs
 * 
 * @param serviceContent - The current service content
 * @param location - The location name
 * @returns An array of FAQs combined from both sources
 */
export function useFAQs(serviceContent: ServiceContent, location: string): FAQ[] {
  const [combinedFAQs, setCombinedFAQs] = useState<FAQ[]>(serviceContent.faqs || []);
  
  useEffect(() => {
    // Get the basic FAQs from the service content
    const baseFAQs = serviceContent.faqs || [];
    
    // Get location-specific FAQs
    const locationFAQs = getLocationSpecificFAQs(
      serviceContent.serviceType as ServiceType,
      location
    );
    
    // Create a Set of existing question text to avoid duplicates
    const existingQuestions = new Set(baseFAQs.map(faq => faq.question));
    
    // Filter out any location FAQs that have the same question as base FAQs
    const uniqueLocationFAQs = locationFAQs.filter(
      faq => !existingQuestions.has(faq.question)
    );
    
    // Combine the base FAQs with unique location FAQs
    setCombinedFAQs([...baseFAQs, ...uniqueLocationFAQs]);
  }, [serviceContent, location]);
  
  return combinedFAQs;
}

export default useFAQs;
