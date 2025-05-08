import { ServiceType } from './serviceTypes';

/**
 * This defines the structure for location-specific FAQs 
 * organized by service type and location
 */

// Simple FAQ structure used in the locationFaqs.ts files
export interface SimpleFAQ {
  question: string;
  answer: string;
}

// Location FAQs structure used in locationFaqs.ts files
export interface LocationFAQ {
  location: string;
  displayName?: string;
  faqs: SimpleFAQ[];
}

// List of location FAQs
export type LocationFAQList = LocationFAQ[];

// Define the main FAQ item structure (similar to existing FAQ but with location info)
export interface LocationSpecificFAQ {
  id: string;           // Unique identifier for the FAQ
  question: string;     // The frequently asked question
  answer: string;       // The detailed answer
  serviceType: ServiceType; // Which service this FAQ belongs to
  locations: string[];  // Array of locations where this FAQ is relevant
  tags?: string[];      // Optional tags for categorizing or filtering FAQs
  priority?: number;    // Optional priority value (higher = shown first)
  lastUpdated?: string; // Optional timestamp for when the FAQ was last updated
}

// Service-Location FAQ collection
export interface ServiceLocationFAQs {
  serviceType: ServiceType;
  faqs: {
    // Common FAQs that apply to all locations for this service
    common: LocationSpecificFAQ[];
    
    // Location-specific FAQs organized by location name
    byLocation: {
      [location: string]: LocationSpecificFAQ[];
    };
  };
}

// The main data structure that holds all FAQs organized by service
export interface FAQDatabase {
  // Organized by service type
  [serviceType: string]: {
    // Common FAQs for this service type (shown for all locations)
    common: LocationSpecificFAQ[];
    
    // Location-specific FAQs
    byLocation: {
      [location: string]: LocationSpecificFAQ[];
    };
  };
}
