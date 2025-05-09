import { ServiceOffering } from '@/data/types/serviceTypes';

/**
 * Common services for irrigation repair across all locations
 */
export const commonServices: ServiceOffering[] = [
  {
    title: 'Sprinkler Head Repair & Replacement',
    description: 'We repair or replace damaged, misaligned, or clogged sprinkler heads to ensure proper coverage and efficient water distribution throughout your landscape.',
    image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/6242f42c-1e47-419d-2b96-2d9bd1bf8f00/public',
    features: [
      'Head replacement for all major brands',
      'Nozzle cleaning and replacement',
      'Head alignment and adjustment',
      'Coverage pattern optimization',
      'Water pressure regulation'
    ]
  },
  {
    title: 'Leak Detection & Repair',
    description: 'Using specialized equipment and techniques, we locate and repair underground leaks in your irrigation system quickly and efficiently, minimizing disruption to your landscape.',
    image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/da1f8c2c-59db-4ba8-9ff5-e85387442a00/public',
    features: [
      'Electronic leak detection',
      'Pressure testing',
      'Pipe repair and replacement',
      'Valve box leak repairs',
      'Manifold and fitting repairs'
    ]
  },
  {
    title: 'Controller & Electrical Repairs',
    description: 'We diagnose and repair problems with your irrigation controller, wiring, and electrical components to ensure your system operates correctly and on schedule.',
    image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/7ae3f27e-87ce-4d6d-c566-eb9de45f0000/public',
    features: [
      'Controller programming & troubleshooting',
      'Wire fault detection',
      'Solenoid replacement',
      'Smart controller upgrades',
      'Rain sensor installation & repair'
    ]
  },
  {
    title: 'Valve Repair & Replacement',
    description: 'Our technicians repair or replace faulty valves that control water flow to different zones in your irrigation system.',
    image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/b2953775-7d38-4f08-9532-b0af3dcccb00/public',
    features: [
      'Valve diagnostics',
      'Diaphragm replacement',
      'Valve box relocation',
      'Master valve installation',
      'Zone valve replacement'
    ]
  }
];

export default commonServices;
