export interface NeighborhoodPageData {
  slug: string;
  citySlug: string;
  cityName: string;
  neighborhoodName: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  highlights: string[];
  serviceFocus: string[];
  localTips: string[];
}

export const KELLER_NEIGHBORHOODS: NeighborhoodPageData[] = [
  {
    slug: 'hidden-lakes',
    citySlug: 'keller',
    cityName: 'Keller',
    neighborhoodName: 'Hidden Lakes',
    heroTitle: 'Sprinkler, Irrigation, and Drainage Services in Hidden Lakes',
    heroDescription:
      'Reliable irrigation repairs, smart-controller upgrades, and drainage improvements tailored for Hidden Lakes properties.',
    intro:
      'Hidden Lakes homes often combine mature trees, varied sun exposure, and larger turf areas. Our team designs and repairs systems to keep coverage even, reduce waste, and protect landscaping investments.',
    highlights: [
      'Zone balancing for mixed sun and shade areas',
      'Leak detection and valve repair with same-visit fixes when possible',
      'Drainage planning for low spots near patios and rear yard slopes'
    ],
    serviceFocus: [
      'Sprinkler repair and nozzle optimization',
      'Wi-Fi controller setup and seasonal programming',
      'French drains, channel drains, and runoff management'
    ],
    localTips: [
      'Run short cycle-and-soak schedules in summer to help clay soil absorb water.',
      'Check spray alignment monthly where tree roots and growth can shift head angles.',
      'Inspect drainage after heavy storms to prevent standing water near foundations.'
    ]
  },
  {
    slug: 'marshall-ridge',
    citySlug: 'keller',
    cityName: 'Keller',
    neighborhoodName: 'Marshall Ridge',
    heroTitle: 'Neighborhood Irrigation Experts for Marshall Ridge',
    heroDescription:
      'Professional sprinkler and drainage support built for HOA standards, North Texas heat, and efficient water use.',
    intro:
      'Marshall Ridge landscapes demand consistent curb appeal and efficient irrigation performance. We provide fast diagnostics, clean repairs, and smart upgrades that keep systems reliable through long summer heat.',
    highlights: [
      'Pressure and coverage corrections to reduce misting and overspray',
      'Controller schedule tuning for seasonal weather shifts',
      'Preventive checkups to avoid peak-season failures'
    ],
    serviceFocus: [
      'Sprinkler system check-ups and tune-ups',
      'Irrigation wiring and valve troubleshooting',
      'Drainage enhancements for pooling and runoff'
    ],
    localTips: [
      'Adjust runtimes by season instead of using one schedule all year.',
      'Test each zone after landscaping updates to confirm full coverage.',
      'Keep heads clear of turf overgrowth to avoid blocked spray patterns.'
    ]
  },
  {
    slug: 'oakmont',
    citySlug: 'keller',
    cityName: 'Keller',
    neighborhoodName: 'Oakmont',
    heroTitle: 'Oakmont Sprinkler Repair and Drainage Services',
    heroDescription:
      'Targeted irrigation repairs and drainage solutions designed for Oakmont lawns, beds, and foundation watering needs.',
    intro:
      'Oakmont properties frequently deal with clay-soil movement and uneven moisture retention. We tune systems to protect turf health, reduce runoff, and keep watering compliant with local restrictions.',
    highlights: [
      'Root-zone focused watering strategy for trees and foundation areas',
      'Durable repair materials for long-term reliability',
      'Smart upgrades that improve efficiency and lower waste'
    ],
    serviceFocus: [
      'Irrigation repair and manifold updates',
      'Drip irrigation and foundation-zone improvements',
      'Drainage and grading recommendations for problem areas'
    ],
    localTips: [
      'Use rain/freeze sensors to avoid unnecessary watering events.',
      'Watch for early signs of pressure issues, including misting and dry bands.',
      'Combine drainage fixes with irrigation calibration for better overall results.'
    ]
  }
];

export const KELLER_NEIGHBORHOOD_BY_SLUG: Record<string, NeighborhoodPageData> =
  KELLER_NEIGHBORHOODS.reduce((acc, neighborhood) => {
    acc[neighborhood.slug] = neighborhood;
    return acc;
  }, {} as Record<string, NeighborhoodPageData>);
