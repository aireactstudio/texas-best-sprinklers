/**
 * Type declarations for the locationData module
 */

// Define the location data structure
export interface LocationData {
  name: string;
  nearestOffice: string;
  distanceFromOffice: number;
  landmarks: string[];
  neighborhoods?: string[];
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  isOfficeLocation?: boolean;
  serviceRadius?: number; // in miles
  [key: string]: any;
}

// Declare the exported types and values
export const MAIN_LOCATIONS: string[];
export const LOCATION_MAPPING: Record<string, string>;
export const CORE_LOCATIONS: string[];
export function isValidLocation(location: string): boolean;
export const locationData: Record<string, LocationData>;
export function getLocationData(location: string): LocationData | null;

// Default export
declare const locationModule: {
  MAIN_LOCATIONS: string[];
  LOCATION_MAPPING: Record<string, string>;
  CORE_LOCATIONS: string[];
  isValidLocation: (location: string) => boolean;
  locationData: Record<string, LocationData>;
  getLocationData: (location: string) => LocationData | null;
};

export default locationModule;
