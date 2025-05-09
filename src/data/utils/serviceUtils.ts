// Import location data and types
import locationModule from '../locationData';
import { ServiceType } from '../serviceTypes';
import type { ServiceContent } from '../types/serviceTypes';

// Import service-specific data
import maintenanceServiceData from '../../data/services/maintenance';
import irrigationRepairServiceData from '../../data/services/irrigation-repair';
import drainageServiceData from '../../data/services/drainage';
import lightingServiceData from '../../data/services/lighting';
// import { fencingServiceData } from '../../data/services/fencingServiceData'; // File doesn't exist yet
import sprinklerInstallationServiceData from '../../data/services/sprinkler-installation';

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
    // Determine which dataset to use based on service type
    let serviceData: Record<string, ServiceContent>;
    
    switch (serviceTypeStr.toLowerCase()) {

      case 'maintenance':
      case ServiceType.MAINTENANCE.toString().toLowerCase():
        serviceData = maintenanceServiceData;
        break;
      
      case 'irrigation-repair':
      case 'irrigation_repair':
      case ServiceType.IRRIGATION_REPAIR.toString().toLowerCase():
        serviceData = irrigationRepairServiceData;
        break;
      
      case 'drainage-solutions':
      case 'drainage':
      case ServiceType.DRAINAGE.toString().toLowerCase():
        serviceData = drainageServiceData;
        break;
      

      case 'outdoor-lighting':
      case ServiceType.OUTDOOR_LIGHTING.toString().toLowerCase():
        serviceData = lightingServiceData;
        break;
      

      case 'fencing':
      case ServiceType.FENCING.toString().toLowerCase():
        // Fencing service data not available yet
        console.warn('Fencing service data not available yet');
        return null;
        // serviceData = fencingServiceData;
        break;
      
      case 'sprinkler-installation':
      case ServiceType.SPRINKLER_INSTALLATION.toString().toLowerCase():
        serviceData = sprinklerInstallationServiceData;
        break;
      
      default:
        // Service type not recognized
        console.warn(`Service type not recognized: ${serviceTypeStr}`);
        return null;
    }
    
    // Try to find an exact match for the location
    if (serviceData[location]) {
      return serviceData[location];
    }
    
    // Check if there's a mapping for this location slug
    const mappedLocation = LOCATION_MAPPING[location];
    if (mappedLocation && serviceData[mappedLocation]) {
      return serviceData[mappedLocation];
    }
    
    // Fall back to the main city if we have data for the parent city
    // Extract parent city using heuristics (e.g., north-dallas → dallas)
    const parentCity = location.split('-').pop();
    if (parentCity && parentCity !== location && serviceData[parentCity]) {
      return {
        ...serviceData[parentCity],
        title: serviceData[parentCity].title.replace(
          parentCity.charAt(0).toUpperCase() + parentCity.slice(1),
          location.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')
        )
      };
    }
    
    // Get the location service data if it exists
    const serviceLocationData = serviceData[location];
    
    // If location-specific service data not found, debug and generate default content
    if (!serviceLocationData) {
      console.log(`No service data found for location: ${location} and service: ${serviceTypeStr}`);
      // Instead of returning null, generate default content
      const serviceEnum = (typeof serviceType === 'string') ? 
        Object.values(ServiceType).find(st => st.toString().toLowerCase() === serviceTypeStr.toLowerCase()) : 
        serviceType;
      
      if (serviceEnum) {
        // Generate default content based on location and service type
        return generateDefaultServiceContent(location, serviceEnum);
      }
      
      return null;
    }
    
    return serviceLocationData;
    
  } catch (error) {
    console.error('Error fetching service location data:', error);
    return null;
  }
};

/**
 * Check if service data exists for a specific location and service type
 */
export const hasServiceLocationData = (location: string, serviceType: string | ServiceType): boolean => {
  return getServiceLocationData(location, serviceType) !== null;
};
