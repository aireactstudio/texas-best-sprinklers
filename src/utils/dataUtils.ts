/**
 * Data Utilities
 * Helper functions for accessing service and location data
 */

import { locationData, isValidLocation, CORE_LOCATIONS } from '../data/locationData';
import { ServiceContent, ServiceType } from '../data/types/serviceTypes';
import { getServiceLocationData } from '../data/utils/serviceUtils';
import fencingServiceData from '../data/services/fencingServiceData';

/**
 * Get detailed information for a specific location
 * @param location - Location slug (e.g., 'denver', 'boulder')
 * @returns Location data object or null if location is not found
 */
export function getLocationDetails(location: string) {
  if (!location) return null;
  
  const locationKey = location.toLowerCase();
  
  // Check if it's a valid location
  if (!isValidLocation(locationKey)) return null;
  
  // Return the location data
  return locationData[locationKey] || null;
}

/**
 * Get all supported service types
 * @returns Array of service type values
 */
export function getAllServiceTypes(): string[] {
  return Object.values(ServiceType);
}

/**
 * Get all available locations
 * @returns Array of location slugs
 */
export function getAllLocations(): string[] {
  return CORE_LOCATIONS;
}

/**
 * Get content for a specific service at a specific location
 * @param location - Location slug (e.g., 'denver', 'boulder')
 * @param serviceType - Service type (as string or enum)
 * @returns Service content for the specified location and service, or null if not found
 */
export function getServiceContent(location: string, serviceType: string | ServiceType): ServiceContent | null {
  return getServiceLocationData(location, serviceType);
}

/**
 * Check if a service is available in a specific location
 * @param location - Location slug (e.g., 'denver', 'boulder')
 * @param serviceType - Service type (as string or enum)
 * @returns Boolean indicating if the service is available at the location
 */
export function isServiceAvailableAtLocation(location: string, serviceType: string | ServiceType): boolean {
  return getServiceContent(location, serviceType) !== null;
}

/**
 * Get all available services for a specific location
 * @param location - Location slug (e.g., 'denver', 'boulder')
 * @returns Array of service types available at the location
 */
export function getServicesForLocation(location: string): ServiceType[] {
  if (!location) return [];
  
  const locationKey = location.toLowerCase();
  const availableServices: ServiceType[] = [];
  
  // Check each service type for availability at this location
  Object.values(ServiceType).forEach(serviceType => {
    if (isServiceAvailableAtLocation(locationKey, serviceType)) {
      availableServices.push(serviceType as ServiceType);
    }
  });
  
  return availableServices;
}

/**
 * Get all locations where a specific service is available
 * @param serviceType - Service type to check
 * @returns Array of location slugs where the service is available
 */
export function getLocationsForService(serviceType: string | ServiceType): string[] {
  const availableLocations: string[] = [];
  
  // Check each location for service availability
  CORE_LOCATIONS.forEach(location => {
    if (isServiceAvailableAtLocation(location, serviceType)) {
      availableLocations.push(location);
    }
  });
  
  return availableLocations;
}
