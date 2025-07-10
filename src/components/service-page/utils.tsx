import React from 'react';
import { FaLeaf, FaTint, FaBolt, FaShieldAlt, FaSun, FaTools, FaClock, FaChartLine, FaMapMarkerAlt, FaSearch, FaEye, FaCheck, FaUsers, FaMap, FaFile } from 'react-icons/fa';

// Map of icon names to components
const ICON_MAP: Record<string, React.ReactNode> = {
  'leaf': <FaLeaf className="text-green-600 text-xl" />,
  'clock': <FaClock className="text-green-600 text-xl" />,
  'map-marker': <FaMap className="text-green-600 text-xl" />,
  'users': <FaUsers className="text-green-600 text-xl" />,
  'mountain': <FaMap className="text-green-600 text-xl" />,
  'shield': <FaShieldAlt className="text-green-600 text-xl" />,
  'check': <FaCheck className="text-green-600 text-xl" />,
  'document-check': <FaFile className="text-green-600 text-xl" />,
};

/**
 * Renders an icon based on its name
 * @param iconName The name of the icon to render
 * @returns React component for the icon
 */
export const renderServiceIcon = (iconName?: string) => {
  if (!iconName) return null;
  return ICON_MAP[iconName.toLowerCase()] || null;
};

/**
 * Helper function to capitalize and format a service type
 * @param serviceType The service type string to format
 * @returns The formatted service type
 */
export const formatServiceType = (serviceType?: string): string => {
  if (!serviceType) return 'Service';
  return serviceType.charAt(0).toUpperCase() + serviceType.slice(1).replace('-', ' ');
};

/**
 * Helper to determine the appropriate image based on service type
 * @param serviceType The type of service
 * @param index Optional index for alternating images
 * @returns Path to the appropriate image
 */
export const getServiceTypeImage = (serviceType: string, index: number = 0): string => {
  let fallbackImage = '/assets/images/optimized/hero-background.webp';
  
  if (serviceType.includes('irrigation') || serviceType.includes('sprinkler')) {
    fallbackImage = '/assets/images/optimized/Irrigation-Repair.png';
  } else if (serviceType.includes('drainage')) {
    fallbackImage = '/assets/images/optimized/drainage-weatherford.png';
  } else if (serviceType.includes('lighting')) {
    // Alternate between lighting images for variety
    const lightingImages = [
      '/assets/images/optimized/outdoor_lighting.png',
      '/assets/images/optimized/outdoor_lighting_2.webp',
      '/assets/images/optimized/texas-best-lighting-2.png',
      '/assets/images/optimized/texas-best-lighting.jpg'
    ];
    fallbackImage = lightingImages[index % lightingImages.length];
  }
  
  return fallbackImage;
};
