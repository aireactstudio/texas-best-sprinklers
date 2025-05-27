import { ServiceType } from '@/data/serviceTypes';

/**
 * Dynamically imports article data for a specific service and location
 * @param serviceType The type of service (irrigation-repair, drainage-solutions, etc.)
 * @param location The location slug (fort-worth, arlington, etc.)
 * @returns The article content or null if not found
 */
export async function getArticleContent(serviceType: string, location: string): Promise<string | null> {
  // Format the service type to match directory structure
  const formattedServiceType = formatServiceTypeForPath(serviceType);
  
  // Format the location to match file naming (remove service name from location if present)
  const formattedLocation = formatLocationForPath(location);
  
  try {
    // Define the supported service types
    const supportedServiceTypes = [
      'irrigation-repair',
      'drainage-solutions',
      'maintenance',
      'lighting',
      'outdoor-lighting',
      'sprinkler-installation',
      'sprinkler-repair'
    ];
    
    // Check if the service type is supported
    if (supportedServiceTypes.includes(formattedServiceType)) {
      try {
        // Dynamic import for articles based on service type
        const articleModule = await import(`@/data/articles/${formattedServiceType}/${formattedLocation}`);
        
        // Check for different export patterns - some may use default, others direct or named exports
        if (articleModule.default) {
          return articleModule.default;
        } else if (typeof articleModule === 'string') {
          return articleModule;
        } else if (articleModule[`${formattedLocation}ArticleHtml`]) {
          // For files that export a variable like bedfordArticleHtml
          return articleModule[`${formattedLocation}ArticleHtml`];
        } else {
          // Try to find any export that ends with ArticleHtml
          const htmlExport = Object.keys(articleModule)
            .find(key => key.endsWith('ArticleHtml'));
          
          if (htmlExport) {
            return articleModule[htmlExport];
          }
        }
        
        console.log(`Article found for ${formattedServiceType}/${formattedLocation} but couldn't extract content`);
        return null;
      } catch (error) {
        // This is expected for locations that don't have articles yet
        console.log(`No article found for ${formattedServiceType}/${formattedLocation}`);
        return null;
      }
    }
    
    return null;
  } catch (error) {
    console.error(`Error importing article for ${formattedServiceType}/${formattedLocation}:`, error);
    return null;
  }
}

/**
 * Formats the service type to match directory structure
 */
function formatServiceTypeForPath(serviceType: string | ServiceType): string {
  if (typeof serviceType === 'string') {
    // Convert any service type format to the expected directory structure
    const serviceTypeStr = serviceType.toLowerCase();
    
    if (serviceTypeStr === 'irrigation_repair' || serviceTypeStr === 'irrigation-repair') {
      return 'irrigation-repair';
    }
    
    // Add more mappings as needed
    
    return serviceTypeStr;
  }
  
  // Handle enum values
  switch (serviceType) {
    case ServiceType.IRRIGATION_REPAIR:
      return 'irrigation-repair';
    case ServiceType.DRAINAGE:
      return 'drainage-solutions';
    case ServiceType.MAINTENANCE:
      return 'maintenance';
    // LIGHTING was replaced with OUTDOOR_LIGHTING
    case ServiceType.OUTDOOR_LIGHTING:
      return 'outdoor-lighting';
    default:
      return String(serviceType).toLowerCase();
  }
}

/**
 * Formats the location to match file naming
 */
function formatLocationForPath(location: string): string {
  // Remove service name from location if present
  // e.g., "fort-worth-irrigation-repair" -> "fort-worth"
  const parts = location.split('-');
  
  // Check if location includes service name at the end
  const commonServiceSuffixes = [
    'irrigation-repair', 'irrigation', 'repair',
    'drainage-solutions', 'drainage',
    'maintenance',
    'lighting',
    'installation'
  ];
  
  // Filter out service suffixes
  const locationParts = parts.filter(part => !commonServiceSuffixes.includes(part));
  
  // If location contains multiple parts, join them with hyphens
  if (locationParts.length > 1) {
    return locationParts.join('-');
  }
  
  // Otherwise just return the location
  return location;
}
