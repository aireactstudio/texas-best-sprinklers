/**
 * Validation Utilities
 * Functions for validating data integrity in service and location data
 */

import { ServiceContent, ServiceType } from '../data/types/serviceTypes';
import { isValidLocation } from '../data/locationData';

/**
 * Validates a service content object to ensure it meets all requirements
 * @param content - The service content to validate
 * @returns Object with validation result and any error messages
 */
export function validateServiceContent(content: ServiceContent): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  
  // Required string fields
  const requiredStringFields = [
    'title',
    'metaDescription',
    'heroImage',
    'intro'
  ];
  
  // Check required string fields
  requiredStringFields.forEach(field => {
    if (!content[field as keyof ServiceContent] || 
        typeof content[field as keyof ServiceContent] !== 'string' || 
        (content[field as keyof ServiceContent] as string).trim() === '') {
      errors.push(`Missing or empty required field: ${field}`);
    }
  });
  
  // Validate serviceType
  if (!content.serviceType || !Object.values(ServiceType).includes(content.serviceType)) {
    errors.push(`Invalid or missing serviceType: ${content.serviceType}`);
  }
  
  // Check for benefits array
  if (!Array.isArray(content.benefits) || content.benefits.length === 0) {
    errors.push('Benefits array is required and must contain at least one item');
  } else {
    // Validate each benefit
    content.benefits.forEach((benefit, index) => {
      if (!benefit.title || !benefit.description) {
        errors.push(`Benefit at index ${index} is missing required fields (title and/or description)`);
      }
    });
  }
  
  // Check for services array
  if (!Array.isArray(content.services) || content.services.length === 0) {
    errors.push('Services array is required and must contain at least one item');
  } else {
    // Validate each service
    content.services.forEach((service, index) => {
      if (!service.title || !service.description) {
        errors.push(`Service offering at index ${index} is missing required fields (title and/or description)`);
      }
    });
  }
  
  // Check for FAQs array
  if (!Array.isArray(content.faqs) || content.faqs.length === 0) {
    errors.push('FAQs array is required and must contain at least one item');
  } else {
    // Validate each FAQ
    content.faqs.forEach((faq, index) => {
      if (!faq.question || !faq.answer) {
        errors.push(`FAQ at index ${index} is missing required fields (question and/or answer)`);
      }
    });
  }
  
  // Check testimonial
  if (!content.testimonial || !content.testimonial.quote || 
      !content.testimonial.author || !content.testimonial.location || 
      typeof content.testimonial.rating !== 'number') {
    errors.push('Testimonial is missing required fields');
  }
  
  // Validate process array if present
  if (content.process) {
    if (!Array.isArray(content.process)) {
      errors.push('Process must be an array if provided');
    } else {
      content.process.forEach((step, index) => {
        if (typeof step.step !== 'number' || !step.title || !step.description) {
          errors.push(`Process step at index ${index} is missing required fields`);
        }
      });
    }
  }
  
  // Validate pricing if present
  if (content.pricing) {
    if (!content.pricing.startingAt || !Array.isArray(content.pricing.factors) || content.pricing.factors.length === 0) {
      errors.push('Pricing is missing required fields (startingAt and/or factors)');
    }
    
    // Validate packages if present
    if (content.pricing.packages && Array.isArray(content.pricing.packages)) {
      content.pricing.packages.forEach((pkg, index) => {
        if (!pkg.name || !pkg.price || !Array.isArray(pkg.features) || pkg.features.length === 0) {
          errors.push(`Pricing package at index ${index} is missing required fields`);
        }
      });
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Validates a location-service pair to ensure it exists and is properly formatted
 * @param location - Location slug to validate
 * @param serviceType - Service type to validate
 * @returns Object with validation result and any error messages
 */
export function validateLocationService(location: string, serviceType: string | ServiceType): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  
  // Check location
  if (!location || typeof location !== 'string') {
    errors.push('Location is required and must be a string');
  } else if (!isValidLocation(location)) {
    errors.push(`Invalid location: ${location}`);
  }
  
  // Check service type
  let serviceTypeStr: string;
  if (typeof serviceType === 'string') {
    serviceTypeStr = serviceType.toLowerCase();
  } else {
    serviceTypeStr = serviceType;
  }
  
  if (!Object.values(ServiceType).includes(serviceTypeStr as ServiceType)) {
    errors.push(`Invalid service type: ${serviceType}`);
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Checks if a service content object meets minimum requirements for display
 * Less strict than full validation for draft content
 * @param content - The service content to validate
 * @returns Boolean indicating if content is displayable
 */
export function isServiceContentDisplayable(content: ServiceContent): boolean {
  // Check for bare minimum required fields to display a page
  return !!(
    content &&
    content.title &&
    content.metaDescription &&
    content.heroImage &&
    content.intro &&
    content.serviceType &&
    Array.isArray(content.benefits) && content.benefits.length > 0 &&
    Array.isArray(content.services) && content.services.length > 0
  );
}
