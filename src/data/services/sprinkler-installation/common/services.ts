import { ServiceOffering } from '@/data/types/serviceTypes';

/**
 * Common services for sprinkler installation across all locations
 */
export const commonServices: ServiceOffering[] = [
  {
    title: 'Residential Sprinkler Systems',
    description: 'Complete irrigation system design and installation for residential properties, customized to your landscape needs and water conservation goals.',
    image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/5a9b5b1c-f2e7-4d9b-8f3e-c8a0c5d7e900/public',
    features: [
      'Custom system design',
      'High-efficiency sprinkler heads',
      'Drip irrigation options',
      'Smart controller installation',
      'Zone-specific programming'
    ]
  },
  {
    title: 'Smart Irrigation Controllers',
    description: 'Upgrade your irrigation system with smart controllers that automatically adjust watering schedules based on weather conditions, saving water and money.',
    image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/7c8d9e0f-a1b2-4c3d-9e8f-7a6b5c4d3e00/public',
    features: [
      'Weather-based adjustments',
      'Smartphone control',
      'EPA WaterSense certified',
      'Multiple program capability',
      'Flow sensing technology'
    ]
  },
  {
    title: 'Drip Irrigation Systems',
    description: 'Water-efficient drip irrigation installation for gardens, flower beds, and container plants, delivering water directly to plant roots with minimal waste.',
    image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/2a3b4c5d-6e7f-8g9h-0i1j-2k3l4m5n6o00/public',
    features: [
      'Precise water delivery',
      'Reduced water evaporation',
      'Minimized runoff',
      'Decreased weed growth',
      'Customizable for any plant area'
    ]
  },
  {
    title: 'Retrofit & System Upgrades',
    description: 'Transform your existing irrigation system with modern, water-efficient components and smart technology to improve performance and reduce water usage.',
    image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/7p8q9r0s-1t2u-3v4w-5x6y-7z8a9b0c1d00/public',
    features: [
      'High-efficiency nozzle upgrades',
      'Smart controller installation',
      'Pressure regulation',
      'Rain/freeze sensor addition',
      'Zone reconfiguration'
    ]
  }
];

export default commonServices;
