import { ServiceType } from '@/data/serviceTypes';

/**
 * Service configuration for consistent styling and properties across the application
 */
interface ServiceConfig {
  themeColor: string;      // TailwindCSS color class name without the prefix
  title: string;           // Human-readable title 
  backButtonText: string;  // Text for back button
}

/**
 * Maps service types to their configuration
 */
export const SERVICE_CONFIG: Record<string, ServiceConfig> = {
  [ServiceType.SPRINKLER_INSTALLATION]: {
    themeColor: 'irrigation-blue',
    title: 'Sprinkler Installation',
    backButtonText: 'Back to Main Sprinkler Installation Services'
  },
  [ServiceType.IRRIGATION_REPAIR]: {
    themeColor: 'irrigation-blue',
    title: 'Irrigation Repair',
    backButtonText: 'Back to Main Irrigation Repair Services'
  },
  [ServiceType.SPRINKLER_REPAIR]: {
    themeColor: 'irrigation-blue',
    title: 'Sprinkler Repair',
    backButtonText: 'Back to Main Sprinkler Repair Services'
  },
  [ServiceType.DRAINAGE]: {
    themeColor: 'irrigation-green',
    title: 'Drainage Solutions',
    backButtonText: 'Back to Main Drainage Solutions'
  },
  [ServiceType.MAINTENANCE]: {
    themeColor: 'irrigation-darkGreen',
    title: 'Irrigation Maintenance',
    backButtonText: 'Back to Main Maintenance Services'
  },
  // LIGHTING was replaced with OUTDOOR_LIGHTING
  [ServiceType.OUTDOOR_LIGHTING]: {
    themeColor: 'amber-600',
    title: 'Outdoor Lighting',
    backButtonText: 'Back to Main Outdoor Lighting Services'
  }
};

/**
 * Convert a ServiceType enum to its URL slug
 */
export function getServiceTypeSlug(serviceType: ServiceType): string {
  return serviceType.toLowerCase().replace(/_/g, '-');
}

/**
 * Get full service configuration by type
 */
export function getServiceConfig(serviceType: ServiceType): ServiceConfig {
  return SERVICE_CONFIG[serviceType] || {
    themeColor: 'irrigation-blue',
    title: serviceType.replace(/_/g, ' '),
    backButtonText: `Back to Main ${serviceType.replace(/_/g, ' ')} Services`
  };
}
