import { ServiceType } from '../types/serviceTypes';
import irrigationRepairFaqs from '../irrigation-repair-faqs/locationFaqs';
import outdoorLightingFaqs from '../outdoor-lighting-faqs/locationFaqs';
import drainageSolutionsFaqs from '../drainage-solutions-faqs/locationFaqs';
import sprinklerInstallationFaqs from '../sprinkler-installation-faqs/locationFaqs';

/**
 * Gets location-specific FAQs for irrigation repair service
 *
 * @param location The location slug (e.g., 'fort-worth', 'arlington')
 * @returns Array of FAQs with question and answer properties, or empty array if none found
 */
export const getIrrigationRepairFAQs = (location: string) => {
  // Find the FAQ object for this location
  const locationFaqs = irrigationRepairFaqs.find(
    (faq) => faq.location === location
  );

  // Return the FAQs if found, otherwise empty array
  return locationFaqs ? locationFaqs.faqs : [];
};

/**
 * Gets location-specific FAQs for outdoor lighting service
 *
 * @param location The location slug (e.g., 'fort-worth', 'arlington')
 * @returns Array of FAQs with question and answer properties, or empty array if none found
 */
export const getOutdoorLightingFAQs = (location: string) => {
  // Find the FAQ object for this location
  const locationFaqs = outdoorLightingFaqs.find(
    (faq) => faq.location === location
  );

  // Return the FAQs if found, otherwise empty array
  return locationFaqs ? locationFaqs.faqs : [];
};

/**
 * Gets location-specific FAQs for drainage solutions service
 *
 * @param location The location slug (e.g., 'fort-worth', 'arlington')
 * @returns Array of FAQs with question and answer properties, or empty array if none found
 */
export const getDrainageSolutionsFAQs = (location: string) => {
  // Find the FAQ object for this location
  const locationFaqs = drainageSolutionsFaqs.find(
    (faq) => faq.location === location
  );

  // Return the FAQs if found, otherwise empty array
  return locationFaqs ? locationFaqs.faqs : [];
};

/**
 * Gets location-specific FAQs for sprinkler installation service
 *
 * @param location The location slug (e.g., 'fort-worth', 'arlington')
 * @returns Array of FAQs with question and answer properties, or empty array if none found
 */
export const getSprinklerInstallationFAQs = (location: string) => {
  // Find the FAQ object for this location
  const locationFaqs = sprinklerInstallationFaqs.find(
    (faq) => faq.location === location
  );

  // Return the FAQs if found, otherwise empty array
  return locationFaqs ? locationFaqs.faqs : [];
};

/**
 * Gets location-specific FAQs for any service type
 *
 * @param serviceType The service type (e.g., 'irrigation-repair', 'outdoor-lighting', 'drainage-solutions', 'sprinkler-installation')
 * @param location The location slug (e.g., 'fort-worth', 'arlington')
 * @returns Array of FAQs with question and answer properties, or empty array if none found
 */
export const getServiceSpecificFAQs = (serviceType: string, location: string) => {
  // Use the appropriate function based on service type
  switch (serviceType) {
    case 'irrigation-repair':
      return getIrrigationRepairFAQs(location);
    case 'outdoor-lighting':
      return getOutdoorLightingFAQs(location);
    case 'drainage-solutions':
      return getDrainageSolutionsFAQs(location);
    case 'sprinkler-installation':
      return getSprinklerInstallationFAQs(location);
    default:
      return [];
  }
};
