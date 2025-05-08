// Import ServiceType enum from existing file
import { ServiceType } from '../serviceTypes';
export { ServiceType };

/**
 * Main interface for service-specific content
 * Contains all data needed to render a complete service page for a specific location
 */
export interface ServiceContent {
  // SEO and page metadata
  title: string;                // Page title (includes location name)
  metaDescription: string;      // SEO meta description
  heroImage: string;            // URL for the hero banner image
  serviceType: ServiceType;     // Type of service this content represents
  
  // Core content
  intro: string;                // Introductory paragraph(s)
  benefits: ServiceBenefit[];   // List of service benefits/features
  services: ServiceOffering[];  // Detailed service offerings
  
  // Optional content sections
  complianceInfo?: string;      // Regulatory/compliance information
  process?: ServiceProcess[];   // Step-by-step service process
  pricing?: PricingInfo;        // Pricing information
  
  // Customer-focused content
  faqs: FAQ[];                  // Frequently asked questions
  testimonial: Testimonial;     // Customer testimonial
  
  // Additional metadata
  updatedAt?: string;           // ISO date when content was last updated
  canonical?: string;           // Optional canonical URL if different from default
}

/**
 * Service benefit/feature that highlights value to customers
 */
export interface ServiceBenefit {
  title: string;       // Short, attention-grabbing title
  description: string; // Detailed explanation of the benefit
  icon?: string;       // Optional icon identifier (e.g., 'leaf', 'clock', etc.)
}

/**
 * Detailed service offering within a service category
 */
export interface ServiceOffering {
  title: string;       // Name of the service
  description: string; // Detailed description of the service
  image?: string;      // Optional image URL
  features?: string[]; // List of key features or inclusions
}

/**
 * Step in the service process or implementation
 */
export interface ServiceProcess {
  step: number;        // Order in the sequence
  title: string;       // Name of the step
  description: string; // Detailed explanation
  image?: string;      // Optional image URL
}

/**
 * Pricing information for the service
 */
export interface PricingInfo {
  startingAt: string;       // Base price (formatted)
  factors: string[];        // Factors that influence pricing
  packages?: ServicePackage[]; // Optional service tiers/packages
}

/**
 * Specific pricing package or tier
 */
export interface ServicePackage {
  name: string;        // Package name
  price: string;       // Price (formatted)
  features: string[];  // What's included
  isPopular?: boolean; // Highlight as most popular option
}

/**
 * Frequently asked question with answer
 */
export interface FAQ {
  question: string;
  answer: string;
}

/**
 * Customer testimonial
 */
export interface Testimonial {
  quote: string;   // What the customer said
  author: string;  // Customer name
  location: string; // Where they're from
  rating: number;  // Star rating (typically 1-5)
}
