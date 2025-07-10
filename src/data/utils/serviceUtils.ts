// Import location data and types
import locationModule from '../locationData';
import { ServiceType } from '../serviceTypes';
import type { ServiceContent } from '../types/serviceTypes';

// Import default service data generator
import { generateDefaultServiceContent } from './defaultServiceData';

// Extract location data helpers
const { isValidLocation, LOCATION_MAPPING } = locationModule;

/**
 * Get service content for a specific location and service type
 * 
 * @param location - URL slug for the location
 * @param serviceType - Type of service (maintenance, irrigation-repair, drainage, etc)
 * @returns Service content for the specified location and service, or null if not found
 */
export const getServiceLocationData = (location: string, serviceType: string | ServiceType): ServiceContent | null => {
  // Validate that location is a valid slug
  if (!isValidLocation(location)) return null;

  // Determine service type string consistently
  let serviceTypeStr: string;
  if (typeof serviceType === 'string') {
    serviceTypeStr = serviceType;
  } else if (typeof serviceType === 'object') {
    // Handle the enum case explicitly
    serviceTypeStr = String(serviceType);
  } else {
    // Fallback case
    serviceTypeStr = 'maintenance';
  }

  try {
    // Generate default content based on location and service type
    // Since we don't have the actual service data files anymore, we'll use the default generator for all services
    const serviceEnum = (typeof serviceType === 'string') ? 
      Object.values(ServiceType).find(st => st.toString().toLowerCase() === serviceType.toLowerCase()) : 
      serviceType;
    
    if (serviceEnum) {
      // Generate default content based on location and service type
      return generateDefaultServiceContent(location, serviceEnum);
    }
    
    // If we couldn't determine a service enum, return null
    return null;
    
  } catch (error) {
    console.error('Error fetching service location data:', error);
    // Generate default content in case of error
    const serviceEnum = (typeof serviceType === 'string') ? 
      Object.values(ServiceType).find(st => st.toString().toLowerCase() === serviceType.toLowerCase()) : 
      serviceType;
    
    if (serviceEnum) {
      return generateDefaultServiceContent(location, serviceEnum);
    }
    return null;
  }
};

/**
 * Check if service data exists for a specific location and service type
 */
export function hasServiceLocationData(location: string, serviceType: string | ServiceType): boolean {
  return getServiceLocationData(location, serviceType) !== null;
}
