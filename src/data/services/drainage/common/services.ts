import { ServiceOffering } from '../../../types/serviceTypes';

/**
 * Common service offerings for drainage services across all locations
 */
export const commonServices: ServiceOffering[] = [
  {
    title: 'French Drains',
    description: 'Our French drain systems redirect subsurface water away from problem areas using gravel-filled trenches with perforated pipes that collect and channel water away from your property.',
    image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/d9f93cf8-ecf7-449c-2ece-cfa62e9c3000/public',
    features: [
      'Subsurface water management',
      'Foundation protection',
      'Yard drainage improvement',
      'Custom designed for your property',
      'Durable construction'
    ]
  },
  {
    title: 'Surface Drains',
    description: 'Surface drains capture water from paved surfaces, patios, and other areas where water collects, channeling it away from your home and landscape to prevent flooding and erosion.',
    image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/b2953775-7d38-4f08-9532-b0af3dcccb00/public',
    features: [
      'Grate-covered drains',
      'Custom placement for optimal collection',
      'Connected to underground drainage system',
      'Prevents water pooling on hardscapes',
      'Reduces slippery surfaces'
    ]
  },
  {
    title: 'Channel Drains',
    description: 'Linear channel drains are ideal for driveways, patios, and other hardscaped areas where water needs to be collected along a line rather than at a single point.',
    image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/b2953775-7d38-4f08-9532-b0af3dcccb00/public',
    features: [
      'Linear water collection',
      'Various grate options',
      'Custom lengths available',
      'Professional installation',
      'Connects to larger drainage system'
    ]
  }
];