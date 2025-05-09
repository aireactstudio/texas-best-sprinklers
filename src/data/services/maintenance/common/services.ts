import { ServiceOffering } from '@/data/types/serviceTypes';

/**
 * Common services for sprinkler maintenance across all locations
 */
export const commonServices: ServiceOffering[] = [
  {
    title: 'Seasonal Maintenance Programs',
    description: 'Comprehensive maintenance packages that include regular system checks, seasonal adjustments, and preventative care to keep your irrigation system operating at peak efficiency year-round.',
    image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/8p9q0r1s-2t3u-4v5w-6x7y-8z9a0b1c2d00/public',
    features: [
      'Spring system activation',
      'Mid-season performance check',
      'Fall winterization',
      'Controller programming updates',
      'Priority scheduling for repairs'
    ]
  },
  {
    title: 'System Inspections & Tune-ups',
    description: 'Thorough evaluation of your entire irrigation system to identify and address minor issues before they become major problems, ensuring optimal performance and water efficiency.',
    image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q00/public',
    features: [
      'Complete zone-by-zone inspection',
      'Sprinkler head cleaning and adjustment',
      'Leak detection and repair',
      'Pressure testing',
      'Controller diagnostics'
    ]
  },
  {
    title: 'Winterization Services',
    description: 'Protect your irrigation system from freeze damage with our professional winterization service that removes all water from pipes, valves, and sprinkler heads before the first freeze.',
    image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/7r8s9t0u-1v2w-3x4y-5z6a-7b8c9d0e1f00/public',
    features: [
      'Complete system blow-out',
      'Controller winter settings',
      'Backflow protection',
      'Main valve inspection',
      'Spring reactivation scheduling'
    ]
  },
  {
    title: 'Smart Controller Programming',
    description: 'Optimize your water usage with expert programming of your smart irrigation controller, including seasonal adjustments, rain sensor integration, and custom watering schedules.',
    image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/2g3h4i5j-6k7l-8m9n-0o1p-2q3r4s5t6u00/public',
    features: [
      'Weather-based programming',
      'Zone-specific scheduling',
      'Water conservation settings',
      'Smart device integration',
      'Remote access setup'
    ]
  },
  {
    title: 'System Efficiency Upgrades',
    description: 'Improve your irrigation system\'s efficiency with targeted upgrades to key components, reducing water usage while maintaining or improving landscape health.',
    image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/6v7w8x9y-0z1a-2b3c-4d5e-6f7g8h9i0j00/public',
    features: [
      'High-efficiency nozzle installation',
      'Pressure-regulating components',
      'Smart sensor integration',
      'Zone optimization',
      'Controller upgrades'
    ]
  }
];

export default commonServices;
