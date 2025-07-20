/**
 * Centralized site configuration
 * This ensures consistent branding across all pages and components
 */
export const SITE_CONFIG = {
  /**
   * Full company name used for all site metadata, SEO, and branding
   */
  fullName: 'Texas Best Sprinklers, Drainage and Lighting',
  
  /**
   * Legal entity name for business documents and structured data
   */
  legalName: 'Texas Best Sprinklers, Drainage and Lighting LLC',
  
  /**
   * Short name for space-constrained areas
   */
  shortName: 'Texas Best Sprinklers'
} as const;

/**
 * Default site name to use throughout the application
 * Uses fullName for consistency
 */
export const DEFAULT_SITE_NAME = SITE_CONFIG.fullName;
