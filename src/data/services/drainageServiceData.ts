import { ServiceContent, ServiceType } from '../types/serviceTypes';

/**
 * Drainage Solutions service data for each location
 */
export const drainageServiceData: Record<string, ServiceContent> = {
  'weatherford': {
    title: 'Professional Drainage Solutions in Weatherford, Texas',
    metaDescription: 'Expert drainage system installation and repair services in Weatherford. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
    heroImage: '/assets/images/optimized/drainage-weatherford.png',
    serviceType: ServiceType.DRAINAGE,
    intro: "Texas Best Sprinklers provides Weatherford homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
    benefits: [
      {
        title: 'Foundation Protection',
        description: 'Prevent costly foundation damage by directing water away from your home.',
        icon: 'home'
      },
      {
        title: 'Landscape Preservation',
        description: 'Eliminate standing water and prevent soil erosion that damages your landscape.',
        icon: 'tree'
      },
      {
        title: 'Mosquito Prevention',
        description: 'Reduce breeding grounds for mosquitoes by eliminating standing water on your property.',
        icon: 'shield'
      },
      {
        title: 'Increased Property Value',
        description: 'A properly drained property adds value and appeals to future buyers.',
        icon: 'trending-up'
      }
    ],
    services: [
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
    ],

    faqs: [
      {
        question: 'How do I know if I need a drainage system for my Weatherford property?',
        answer: "Signs you need drainage solutions include: standing water in your yard 24+ hours after rain, water pooling near your foundation, basement or crawl space moisture, landscape erosion, or soggy areas in your lawn. Weatherford's clay soils often exacerbate drainage issues, making proper water management crucial."
      },
      {
        question: 'How long does drainage system installation take?',
        answer: 'Most residential drainage system installations in Weatherford are completed within 1-3 days, depending on the complexity and size of the system. Larger properties or more extensive systems may take 3-5 days.'
      },
      {
        question: 'Will a drainage system damage my landscape?',
        answer: 'While some disruption is inevitable during installation, our team minimizes impact and restores affected areas. We carefully plan pipe routes, use specialized equipment to reduce damage, and restore landscaping after installation. The long-term benefits far outweigh the temporary disruption.'
      },
      {
        question: 'How long will my drainage system last?',
        answer: 'With proper installation and materials, a professional drainage system typically lasts 25-50 years in the Weatherford climate. We use commercial-grade materials and proper installation techniques to ensure longevity.'
      },
      {
        question: 'Do drainage systems require maintenance?',
        answer: 'Yes, periodic maintenance ensures optimal performance. This includes clearing debris from drain grates, occasional flushing of pipes, and inspection of discharge points. We offer maintenance plans to keep your system functioning properly year after year.'
      }
    ],
    testimonial: {
      quote: "After years of water pooling around our foundation after every rain, Texas Best Sprinklers installed a comprehensive drainage system that solved the problem completely. We wish we'd done it years ago.",
      author: "Richard L.",
      location: "Weatherford",
      rating: 5
    },
    updatedAt: '2024-12-10'
  },
  'arlington': {
    title: 'Professional Drainage Solutions in Arlington, Texas',
    metaDescription: 'Expert drainage system installation and repair services in Arlington, TX. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions for Arlington homes.',
    heroImage: '/assets/images/drainage-hero.jpg',
    serviceType: ServiceType.DRAINAGE,
    intro: "Texas Best Sprinklers provides Arlington homeowners with professional drainage solutions tailored to the unique soil and climate conditions of the DFW metroplex. Arlington properties often face challenges with poor drainage due to the region's clay soils and seasonal downpours. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage. We serve all Arlington neighborhoods including Dalworthington Gardens, Pantego, East Arlington, North Arlington, South Arlington, Arlington Heights, The Parks at Arlington, Viridian, Entertainment District, and West Arlington.",
    benefits: [
      {
        title: 'Foundation Protection',
        description: 'Arlington homes are particularly vulnerable to foundation issues due to expansive clay soils. Our drainage solutions prevent costly foundation damage by directing water away from your home.',
        icon: 'home'
      },
      {
        title: 'Landscape Preservation',
        description: 'Eliminate standing water and prevent soil erosion that damages your landscape, particularly important during Arlington\'s intense summer storms.',
        icon: 'tree'
      },
      {
        title: 'Mosquito Prevention',
        description: 'Arlington\'s warm climate can lead to mosquito problems. Our drainage systems reduce breeding grounds by eliminating standing water on your property.',
        icon: 'shield'
      },
      {
        title: 'Increased Property Value',
        description: 'A properly drained property adds significant value in Arlington\'s competitive real estate market and appeals to future buyers.',
        icon: 'trending-up'
      }
    ],
    services: [
      {
        title: 'French Drains',
        description: 'Our French drain systems redirect subsurface water away from problem areas using gravel-filled trenches with perforated pipes that collect and channel water away from your property. Particularly effective for Arlington\'s clay soil conditions.',
        image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/d9f93cf8-ecf7-449c-2ece-cfa62e9c3000/public',
        features: [
          'Subsurface water management tailored for Arlington soil conditions',
          'Foundation protection for Arlington\'s expansive clay soil challenges',
          'Yard drainage improvement for sloped Arlington properties',
          'Custom designed for your specific Arlington neighborhood',
          'Durable construction to withstand Texas heat and storms'
        ]
      },
      {
        title: 'Surface Drains',
        description: 'Surface drains capture water from paved surfaces, patios, and other areas where water collects, channeling it away from your home and landscape to prevent flooding and erosion. Essential for many Arlington properties, especially in low-lying areas near Johnson Creek and other waterways.',
        image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/b2953775-7d38-4f08-9532-b0af3dcccb00/public',
        features: [
          'Heavy-duty grate-covered drains for Arlington\'s intense rainfall events',
          'Custom placement for optimal collection based on your property\'s topography',
          'Connected to underground drainage system with appropriate municipal connections',
          'Prevents water pooling on hardscapes common in Arlington\'s newer developments',
          'Reduces slippery surfaces around pools and entertainment areas'
        ]
      },
      {
        title: 'Channel Drains',
        description: 'Linear channel drains are ideal for Arlington driveways, patios, and other hardscaped areas where water needs to be collected along a line rather than at a single point. Perfect for properties near Lake Arlington or in flood-prone areas.',
        image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/b2953775-7d38-4f08-9532-b0af3dcccb00/public',
        features: [
          'Linear water collection for Arlington\'s intense summer thunderstorms',
          'Various grate options to match your property\'s aesthetic',
          'Custom lengths available for any size Arlington property',
          'Professional installation by Arlington\'s drainage experts',
          'Connects to larger drainage system for complete water management'
        ]
      },
      {
        title: 'Detention & Retention Systems',
        description: 'Specifically designed for Arlington properties with significant drainage issues, these systems temporarily hold water during heavy rainfall events and slowly release it, preventing flooding and erosion while meeting local stormwater management regulations.',
        image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/d03ac5c4-6c52-4aa9-33a4-f81f5ebe8400/public',
        features: [
          'Complies with Arlington municipal stormwater regulations',
          'Prevents downstream flooding and erosion',
          'Can be integrated with existing landscape features',
          'Environmentally friendly water management',
          'Reduces burden on Arlington\'s municipal storm system'
        ]
      }
    ],
    pricing: {
      startingAt: '$1,800 for basic systems',
      factors: [
        'Arlington property size and unique topography',
        'Drainage system type and complexity needed for your situation',
        'Amount of pipe and drainage points needed based on water flow analysis',
        'Soil conditions specific to your Arlington neighborhood',
        'Discharge location options and municipal requirements'
      ]
    },
    process: [
      {
        step: 1,
        title: 'On-Site Assessment',
        description: 'We\'ll visit your Arlington property to evaluate drainage patterns, soil conditions, and identify problem areas.'
      },
      {
        step: 2,
        title: 'Custom Solution Design',
        description: 'Our team creates a tailored drainage plan specifically for your Arlington home, considering the unique challenges of your property.'
      },
      {
        step: 3,
        title: 'Written Proposal',
        description: 'You\'ll receive a detailed proposal with transparent pricing, system specifications, and expected outcomes.'
      },
      {
        step: 4,
        title: 'Professional Installation',
        description: 'Our experienced Arlington-based crews install your drainage system with minimal disruption to your property.'
      },
      {
        step: 5,
        title: 'System Testing',
        description: 'We test all components to ensure proper function before finalizing the installation.'
      },
      {
        step: 6,
        title: 'Final Walkthrough',
        description: 'We\'ll explain how your new drainage system works and provide maintenance recommendations.'
      }
    ],
    faqs: [
      {
        question: 'How do I know if I need a drainage system for my Arlington property?',
        answer: "Signs you need drainage solutions include: standing water in your yard 24+ hours after rain, water pooling near your foundation, basement or crawl space moisture, landscape erosion, or soggy areas in your lawn. Arlington's clay soils and varied topography often exacerbate drainage issues, particularly in neighborhoods like East Arlington and parts of South Arlington where the terrain is flatter and water tends to collect. Proper water management is crucial for protecting your investment in this competitive real estate market."
      },
      {
        question: 'How long does drainage system installation take?',
        answer: 'Most residential drainage system installations in Arlington are completed within 1-3 days, depending on the complexity and size of the system. Larger properties or more extensive systems, particularly those in areas near Lake Arlington or with significant grade changes, may take 3-5 days. We schedule our work to minimize disruption to your daily activities and coordinate with any necessary city permits.'
      },
      {
        question: 'Will a drainage system damage my landscape?',
        answer: 'While some disruption is inevitable during installation, our team minimizes impact and restores affected areas. We carefully plan pipe routes around valuable landscaping features common in Arlington yards, use specialized equipment to reduce damage, and restore landscaping after installation. The long-term benefits of protecting your property from water damage far outweigh the temporary disruption.'
      },
      {
        question: 'Are there any Arlington-specific regulations regarding drainage installation?',
        answer: 'Yes, Arlington has specific regulations regarding stormwater management and drainage systems. Our team is familiar with all local codes and permit requirements. We handle all necessary permissions as part of our service, ensuring your drainage solution is compliant with Arlington municipal regulations, particularly important for properties near flood-prone areas or that direct water to city stormwater systems.'
      },
      {
        question: 'How long will my drainage system last?',
        answer: 'With proper installation and materials, a professional drainage system typically lasts 25-50 years in the Arlington climate. We use commercial-grade materials and proper installation techniques to ensure longevity.'
      },
      {
        question: 'Do drainage systems require maintenance?',
        answer: 'Yes, periodic maintenance ensures optimal performance. This includes clearing debris from drain grates, occasional flushing of pipes, and inspection of discharge points. We offer maintenance plans to keep your system functioning properly year after year.'
      }
    ],
    testimonial: {
      quote: "Texas Best Sprinklers installed a comprehensive drainage system around our Arlington home that has completely eliminated our ongoing water issues. Excellent service from start to finish.",
      author: "Jennifer K.",
      location: "Arlington",
      rating: 5
    },
    updatedAt: '2024-12-10'
  },
  'southlake': {
    title: 'Professional Drainage Solutions in Southlake, Texas',
    metaDescription: 'Expert drainage system installation and repair services in Southlake. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
    heroImage: '/assets/images/drainage-hero.jpg',
    serviceType: ServiceType.DRAINAGE,
    intro: "Texas Best Sprinklers provides Southlake homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
    benefits: [
      {
        title: 'Foundation Protection',
        description: 'Prevent costly foundation damage by directing water away from your home.',
        icon: 'home'
      },
      {
        title: 'Landscape Preservation',
        description: 'Eliminate standing water and prevent soil erosion that damages your landscape.',
        icon: 'tree'
      },
      {
        title: 'Mosquito Prevention',
        description: 'Reduce breeding grounds for mosquitoes by eliminating standing water on your property.',
        icon: 'shield'
      },
      {
        title: 'Increased Property Value',
        description: 'A properly drained property adds value and appeals to future buyers in Southlake\'s premium real estate market.',
        icon: 'trending-up'
      }
    ],
    services: [
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
    ],
    pricing: {
      startingAt: '$2,000 for basic systems',
      factors: [
        'Property size and topography',
        'Drainage system type and complexity',
        'Amount of pipe and drainage points needed',
        'Soil conditions and obstacles',
        'Discharge location options'
      ]
    },
    faqs: [
      {
        question: 'How do I know if I need a drainage system for my Southlake property?',
        answer: "Signs you need drainage solutions include: standing water in your yard 24+ hours after rain, water pooling near your foundation, basement or crawl space moisture, landscape erosion, or soggy areas in your lawn. Southlake's soil conditions often exacerbate drainage issues, making proper water management crucial."
      },
      {
        question: 'How long does drainage system installation take?',
        answer: 'Most residential drainage system installations in Southlake are completed within 1-3 days, depending on the complexity and size of the system. Larger properties or more extensive systems may take 3-5 days.'
      },
      {
        question: 'Will a drainage system damage my landscape?',
        answer: 'While some disruption is inevitable during installation, our team minimizes impact and restores affected areas. We carefully plan pipe routes, use specialized equipment to reduce damage, and restore landscaping after installation. The long-term benefits far outweigh the temporary disruption.'
      },
      {
        question: 'How long will my drainage system last?',
        answer: 'With proper installation and materials, a professional drainage system typically lasts 25-50 years in the Southlake climate. We use commercial-grade materials and proper installation techniques to ensure longevity.'
      },
      {
        question: 'Do drainage systems require maintenance?',
        answer: 'Yes, periodic maintenance ensures optimal performance. This includes clearing debris from drain grates, occasional flushing of pipes, and inspection of discharge points. We offer maintenance plans to keep your system functioning properly year after year.'
      }
    ],
    testimonial: {
      quote: "Texas Best Sprinklers resolved our drainage issues that had been plaguing our property for years. Their professional approach and quality workmanship made all the difference.",
      author: "Jennifer M.",
      location: "Southlake",
      rating: 5
    },
    updatedAt: '2025-05-05'
  },
  'colleyville': {
    title: 'Professional Drainage Solutions in Colleyville, Texas',
    metaDescription: 'Expert drainage system installation and repair services in Colleyville. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
    heroImage: '/assets/images/drainage-hero.jpg',
    serviceType: ServiceType.DRAINAGE,
    intro: "Texas Best Sprinklers provides Colleyville homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
    benefits: [
      {
        title: 'Foundation Protection',
        description: 'Prevent costly foundation damage by directing water away from your home.',
        icon: 'home'
      },
      {
        title: 'Landscape Preservation',
        description: 'Eliminate standing water and prevent soil erosion that damages your landscape.',
        icon: 'tree'
      },
      {
        title: 'Mosquito Prevention',
        description: 'Reduce breeding grounds for mosquitoes by eliminating standing water on your property.',
        icon: 'shield'
      },
      {
        title: 'Increased Property Value',
        description: 'A properly drained property adds value and appeals to future buyers in Colleyville\'s residential market.',
        icon: 'trending-up'
      }
    ],
    services: [
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
    ],
    pricing: {
      startingAt: '$1,900 for basic systems',
      factors: [
        'Property size and topography',
        'Drainage system type and complexity',
        'Amount of pipe and drainage points needed',
        'Soil conditions and obstacles',
        'Discharge location options'
      ]
    },
    faqs: [
      {
        question: 'How do I know if I need a drainage system for my Colleyville property?',
        answer: "Signs you need drainage solutions include: standing water in your yard 24+ hours after rain, water pooling near your foundation, basement or crawl space moisture, landscape erosion, or soggy areas in your lawn. Colleyville's soil conditions often exacerbate drainage issues, making proper water management crucial."
      },
      {
        question: 'How long does drainage system installation take?',
        answer: 'Most residential drainage system installations in Colleyville are completed within 1-3 days, depending on the complexity and size of the system. Larger properties or more extensive systems may take 3-5 days.'
      },
      {
        question: 'Will a drainage system damage my landscape?',
        answer: 'While some disruption is inevitable during installation, our team minimizes impact and restores affected areas. We carefully plan pipe routes, use specialized equipment to reduce damage, and restore landscaping after installation. The long-term benefits far outweigh the temporary disruption.'
      },
      {
        question: 'How long will my drainage system last?',
        answer: 'With proper installation and materials, a professional drainage system typically lasts 25-50 years in the Colleyville climate. We use commercial-grade materials and proper installation techniques to ensure longevity.'
      },
      {
        question: 'Do drainage systems require maintenance?',
        answer: 'Yes, periodic maintenance ensures optimal performance. This includes clearing debris from drain grates, occasional flushing of pipes, and inspection of discharge points. We offer maintenance plans to keep your system functioning properly year after year.'
      }
    ],
    testimonial: {
      quote: "Our backyard used to flood every time it rained heavily. Texas Best Sprinklers designed a drainage system that solved our problems completely. Great service and results!",
      author: "Michael K.",
      location: "Colleyville",
      rating: 5
    },
    updatedAt: '2025-05-05'
  },
  'grapevine': {
    title: 'Professional Drainage Solutions in Grapevine, Texas',
    metaDescription: 'Expert drainage system installation and repair services in Grapevine. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
    heroImage: '/assets/images/drainage-hero.jpg',
    serviceType: ServiceType.DRAINAGE,
    intro: "Texas Best Sprinklers provides Grapevine homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
    benefits: [
      {
        title: 'Foundation Protection',
        description: 'Prevent costly foundation damage by directing water away from your home.',
        icon: 'home'
      },
      {
        title: 'Landscape Preservation',
        description: 'Eliminate standing water and prevent soil erosion that damages your landscape.',
        icon: 'tree'
      },
      {
        title: 'Mosquito Prevention',
        description: 'Reduce breeding grounds for mosquitoes by eliminating standing water on your property.',
        icon: 'shield'
      },
      {
        title: 'Increased Property Value',
        description: 'A properly drained property adds value and appeals to future buyers in Grapevine\'s competitive real estate market.',
        icon: 'trending-up'
      }
    ],
    services: [
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
    ],
    pricing: {
      startingAt: '$1,850 for basic systems',
      factors: [
        'Property size and topography',
        'Drainage system type and complexity',
        'Amount of pipe and drainage points needed',
        'Soil conditions and obstacles',
        'Discharge location options'
      ]
    },
    faqs: [
      {
        question: 'How do I know if I need a drainage system for my Grapevine property?',
        answer: "Signs you need drainage solutions include: standing water in your yard 24+ hours after rain, water pooling near your foundation, basement or crawl space moisture, landscape erosion, or soggy areas in your lawn. Grapevine's soil conditions often exacerbate drainage issues, making proper water management crucial."
      },
      {
        question: 'How long does drainage system installation take?',
        answer: 'Most residential drainage system installations in Grapevine are completed within 1-3 days, depending on the complexity and size of the system. Larger properties or more extensive systems may take 3-5 days.'
      },
      {
        question: 'Will a drainage system damage my landscape?',
        answer: 'While some disruption is inevitable during installation, our team minimizes impact and restores affected areas. We carefully plan pipe routes, use specialized equipment to reduce damage, and restore landscaping after installation. The long-term benefits far outweigh the temporary disruption.'
      },
      {
        question: 'How long will my drainage system last?',
        answer: 'With proper installation and materials, a professional drainage system typically lasts 25-50 years in the Grapevine climate. We use commercial-grade materials and proper installation techniques to ensure longevity.'
      },
      {
        question: 'Do drainage systems require maintenance?',
        answer: 'Yes, periodic maintenance ensures optimal performance. This includes clearing debris from drain grates, occasional flushing of pipes, and inspection of discharge points. We offer maintenance plans to keep your system functioning properly year after year.'
      }
    ],
    testimonial: {
      quote: "Texas Best Sprinklers installed a comprehensive drainage system that has completely eliminated the water pooling issues we had in our backyard. Great investment for our home!",
      author: "Lisa P.",
      location: "Grapevine",
      rating: 5
    },
    updatedAt: '2025-05-05'
  },
  'keller': {
    title: 'Professional Drainage Solutions in Keller, Texas',
    metaDescription: 'Expert drainage system installation and repair services in Keller. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
    heroImage: '/assets/images/drainage-hero.jpg',
    serviceType: ServiceType.DRAINAGE,
    intro: "Texas Best Sprinklers provides Keller homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
    benefits: [
      {
        title: 'Foundation Protection',
        description: 'Prevent costly foundation damage by directing water away from your home.',
        icon: 'home'
      },
      {
        title: 'Landscape Preservation',
        description: 'Eliminate standing water and prevent soil erosion that damages your landscape.',
        icon: 'tree'
      },
      {
        title: 'Mosquito Prevention',
        description: 'Reduce breeding grounds for mosquitoes by eliminating standing water on your property.',
        icon: 'shield'
      },
      {
        title: 'Increased Property Value',
        description: 'A properly drained property adds value and appeals to future buyers.',
        icon: 'trending-up'
      }
    ],
    services: [
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
    ],

    faqs: [
      {
        question: 'How do I know if I need a drainage system for my Keller property?',
        answer: "Signs you need drainage solutions include: standing water in your yard 24+ hours after rain, water pooling near your foundation, basement or crawl space moisture, landscape erosion, or soggy areas in your lawn. Keller's varied topography and clay soils often exacerbate drainage issues, making proper water management crucial."
      },
      {
        question: 'How long does drainage system installation take?',
        answer: 'Most residential drainage system installations in Keller are completed within 1-3 days, depending on the complexity and size of the system. Larger properties or more extensive systems may take 3-5 days.'
      },
      {
        question: 'Will a drainage system damage my landscape?',
        answer: 'While some disruption is inevitable during installation, our team minimizes impact and restores affected areas. We carefully plan pipe routes, use specialized equipment to reduce damage, and restore landscaping after installation. The long-term benefits far outweigh the temporary disruption.'
      },
      {
        question: 'How long will my drainage system last?',
        answer: 'With proper installation and materials, a professional drainage system typically lasts 25-50 years in the Keller climate. We use commercial-grade materials and proper installation techniques to ensure longevity.'
      },
      {
        question: 'Do drainage systems require maintenance?',
        answer: 'Yes, periodic maintenance ensures optimal performance. This includes clearing debris from drain grates, occasional flushing of pipes, and inspection of discharge points. We offer maintenance plans to keep your system functioning properly year after year.'
      }
    ],
    testimonial: {
      quote: "After a major storm flooded our backyard and threatened our foundation, Texas Best Sprinklers designed a custom drainage solution that has kept our property dry through multiple heavy rains since installation.",
      author: "Steven M.",
      location: "Keller",
      rating: 5
    },
    updatedAt: '2024-12-10'
  },
  'north-richland-hills': {
    title: 'Professional Drainage Solutions in North Richland Hills, Texas',
    metaDescription: 'Expert drainage system installation and repair services in North Richland Hills. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
    heroImage: '/assets/images/drainage-hero.jpg',
    serviceType: ServiceType.DRAINAGE,
    intro: "Texas Best Sprinklers provides North Richland Hills homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
    benefits: [
      {
        title: 'Foundation Protection',
        description: 'Prevent costly foundation damage by directing water away from your home.',
        icon: 'home'
      },
      {
        title: 'Landscape Preservation',
        description: 'Eliminate standing water and prevent soil erosion that damages your landscape.',
        icon: 'tree'
      },
      {
        title: 'Mosquito Prevention',
        description: 'Reduce breeding grounds for mosquitoes by eliminating standing water on your property.',
        icon: 'shield'
      },
      {
        title: 'Increased Property Value',
        description: 'A properly drained property adds value and appeals to future buyers in North Richland Hills.',
        icon: 'trending-up'
      }
    ],
    services: [
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
    ],
    faqs: [
      {
        question: 'How do I know if I need a drainage system for my North Richland Hills property?',
        answer: "Signs you need drainage solutions include: standing water in your yard 24+ hours after rain, water pooling near your foundation, basement or crawl space moisture, landscape erosion, or soggy areas in your lawn. North Richland Hills' soil conditions often exacerbate drainage issues, making proper water management crucial."
      },
      {
        question: 'How long does drainage system installation take?',
        answer: 'Most residential drainage system installations in North Richland Hills are completed within 1-3 days, depending on the complexity and size of the system. Larger properties or more extensive systems may take 3-5 days.'
      },
      {
        question: 'Will a drainage system damage my landscape?',
        answer: 'While some disruption is inevitable during installation, our team minimizes impact and restores affected areas. We carefully plan pipe routes, use specialized equipment to reduce damage, and restore landscaping after installation. The long-term benefits far outweigh the temporary disruption.'
      },
      {
        question: 'How long will my drainage system last?',
        answer: 'With proper installation and materials, a professional drainage system typically lasts 25-50 years in the North Richland Hills climate. We use commercial-grade materials and proper installation techniques to ensure longevity.'
      },
      {
        question: 'Do drainage systems require maintenance?',
        answer: 'Yes, periodic maintenance ensures optimal performance. This includes clearing debris from drain grates, occasional flushing of pipes, and inspection of discharge points. We offer maintenance plans to keep your system functioning properly year after year.'
      }
    ],
    testimonial: {
      quote: "Texas Best Sprinklers transformed our backyard with a proper drainage system that eliminated standing water issues. Their expertise and professionalism were outstanding.",
      author: "Thomas R.",
      location: "North Richland Hills",
      rating: 5
    },
    updatedAt: '2025-05-05'
  },
  'azle': {
    title: 'Professional Drainage Solutions in Azle, Texas',
    metaDescription: 'Expert drainage system installation and repair services in Azle. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
    heroImage: '/assets/images/drainage-hero.jpg',
    serviceType: ServiceType.DRAINAGE,
    intro: "Texas Best Sprinklers provides Azle homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
    benefits: [
      {
        title: 'Foundation Protection',
        description: 'Prevent costly foundation damage by directing water away from your home.',
        icon: 'home'
      },
      {
        title: 'Landscape Preservation',
        description: 'Eliminate standing water and prevent soil erosion that damages your landscape.',
        icon: 'tree'
      },
      {
        title: 'Mosquito Prevention',
        description: 'Reduce breeding grounds for mosquitoes by eliminating standing water on your property.',
        icon: 'shield'
      },
      {
        title: 'Increased Property Value',
        description: 'A properly drained property adds value and appeals to future buyers.',
        icon: 'trending-up'
      }
    ],
    services: [
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
    ],
    faqs: [
      {
        question: 'How do I know if I need a drainage system for my Azle property?',
        answer: "Signs you need drainage solutions include: standing water in your yard 24+ hours after rain, water pooling near your foundation, basement or crawl space moisture, landscape erosion, or soggy areas in your lawn. Azle's varied topography and proximity to Eagle Mountain Lake can exacerbate drainage issues, making proper water management crucial."
      },
      {
        question: 'How long does drainage system installation take?',
        answer: 'Most residential drainage system installations in Azle are completed within 1-3 days, depending on the complexity and size of the system. Larger properties or more extensive systems may take 3-5 days.'
      },
      {
        question: 'Will a drainage system damage my landscape?',
        answer: 'While some disruption is inevitable during installation, our team minimizes impact and restores affected areas. We carefully plan pipe routes, use specialized equipment to reduce damage, and restore landscaping after installation. The long-term benefits far outweigh the temporary disruption.'
      },
      {
        question: 'How long will my drainage system last?',
        answer: 'With proper installation and materials, a professional drainage system typically lasts 25-50 years in the North Texas climate. We use commercial-grade materials and proper installation techniques to ensure longevity.'
      },
      {
        question: 'Do drainage systems require maintenance?',
        answer: 'Yes, periodic maintenance ensures optimal performance. This includes clearing debris from drain grates, occasional flushing of pipes, and inspection of discharge points. We offer maintenance plans to keep your system functioning properly year after year.'
      }
    ],
    testimonial: {
      quote: "After years of water pooling around our foundation near Eagle Mountain Lake, Texas Best Sprinklers installed a comprehensive drainage system that solved the problem completely. We wish we'd done it years ago.",
      author: "Sullivan Family",
      location: "Azle",
      rating: 5
    },
    process: [
      {
        step: 1,
        title: 'On-Site Assessment',
        description: 'We\'ll visit your Azle property to evaluate drainage patterns, soil conditions, and identify problem areas.'
      },
      {
        step: 2,
        title: 'Custom Solution Design',
        description: 'Based on our assessment, we\'ll design a drainage solution tailored specifically for your Azle property, addressing your unique drainage challenges.'
      },
      {
        step: 3,
        title: 'Professional Installation',
        description: 'Our experienced team will install your drainage system with minimal disruption to your landscape, using quality materials for lasting performance.'
      },
      {
        step: 4,
        title: 'System Testing',
        description: 'We thoroughly test every installation to ensure optimal water flow and proper drainage throughout the system.'
      },
      {
        step: 5,
        title: 'Final Walkthrough & Maintenance Plan',
        description: 'We\'ll explain how your new drainage system works and provide maintenance recommendations to keep it functioning optimally for years to come.'
      }
    ],
    updatedAt: '2024-12-10'
  },
  'mineral-wells': {
    title: 'Professional Drainage Solutions in Mineral Wells, Texas',
    metaDescription: 'Expert drainage system installation and repair services in Mineral Wells. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
    heroImage: '/assets/images/drainage-hero.jpg',
    serviceType: ServiceType.DRAINAGE,
    intro: "Texas Best Sprinklers provides Mineral Wells homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
    benefits: [
      {
        title: 'Foundation Protection',
        description: 'Prevent costly foundation damage by directing water away from your home.',
        icon: 'home'
      },
      {
        title: 'Landscape Preservation',
        description: 'Eliminate standing water and prevent soil erosion that damages your landscape.',
        icon: 'tree'
      },
      {
        title: 'Mosquito Prevention',
        description: 'Reduce breeding grounds for mosquitoes by eliminating standing water on your property.',
        icon: 'shield'
      },
      {
        title: 'Increased Property Value',
        description: 'A properly drained property adds value and appeals to future buyers.',
        icon: 'trending-up'
      }
    ],
    services: [
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
    ],
    faqs: [
      {
        question: 'How do I know if I need a drainage system for my Mineral Wells property?',
        answer: "Signs you need drainage solutions include: standing water in your yard 24+ hours after rain, water pooling near your foundation, basement or crawl space moisture, landscape erosion, or soggy areas in your lawn. Mineral Wells' soil conditions and topography can exacerbate drainage issues, making proper water management crucial."
      },
      {
        question: 'How long does drainage system installation take?',
        answer: 'Most residential drainage system installations in Mineral Wells are completed within 1-3 days, depending on the complexity and size of the system. Larger properties or more extensive systems may take 3-5 days.'
      },
      {
        question: 'Will a drainage system damage my landscape?',
        answer: 'While some disruption is inevitable during installation, our team minimizes impact and restores affected areas. We carefully plan pipe routes, use specialized equipment to reduce damage, and restore landscaping after installation. The long-term benefits far outweigh the temporary disruption.'
      },
      {
        question: 'How long will my drainage system last?',
        answer: 'With proper installation and materials, a professional drainage system typically lasts 25-50 years in the North Texas climate. We use commercial-grade materials and proper installation techniques to ensure longevity.'
      },
      {
        question: 'Do drainage systems require maintenance?',
        answer: 'Yes, periodic maintenance ensures optimal performance. This includes clearing debris from drain grates, occasional flushing of pipes, and inspection of discharge points. We offer maintenance plans to keep your system functioning properly year after year.'
      }
    ],
    testimonial: {
      quote: "Texas Best Sprinklers solved our persistent drainage problems that were damaging our foundation. Their knowledge of Mineral Wells' unique conditions made all the difference.",
      author: "Melissa J.",
      location: "Mineral Wells",
      rating: 5
    },
    process: [
      {
        step: 1,
        title: 'On-Site Assessment',
        description: 'We\'ll visit your Mineral Wells property to evaluate drainage patterns, soil conditions, and identify problem areas.'
      },
      {
        step: 2,
        title: 'Custom Solution Design',
        description: 'Based on our assessment, we\'ll design a drainage solution tailored specifically for your Mineral Wells property, addressing your unique drainage challenges.'
      },
      {
        step: 3,
        title: 'Professional Installation',
        description: 'Our experienced team will install your drainage system with minimal disruption to your landscape, using quality materials for lasting performance.'
      },
      {
        step: 4,
        title: 'System Testing',
        description: 'We thoroughly test every installation to ensure optimal water flow and proper drainage throughout the system.'
      },
      {
        step: 5,
        title: 'Final Walkthrough & Maintenance Plan',
        description: 'We\'ll explain how your new drainage system works and provide maintenance recommendations to keep it functioning optimally for years to come.'
      }
    ],
    updatedAt: '2024-12-10'
  }
};

export default drainageServiceData;
