import { ServiceContent, ServiceType } from '../types/serviceTypes';
import { getSprinklerInstallationFAQs } from '../utils/faqUtils';

/**
 * Service content for sprinkler installation pages
 * This data populates location-specific service pages
 */
export const sprinklerInstallationServiceData: Record<string, ServiceContent> = {
  'fort-worth': {
    title: 'Professional Sprinkler Installation in Fort Worth, TX',
    metaDescription: 'Expert sprinkler system installation in Fort Worth. Custom irrigation solutions designed for Texas conditions with professional installation and support.',
    heroImage: '/images/services/sprinkler-installation/fort-worth-sprinkler-installation.jpg',
    serviceType: ServiceType.SPRINKLER_INSTALLATION,
    
    intro: 'Texas Best Sprinklers provides professional sprinkler system installation in Fort Worth, designed specifically for your property\'s unique needs. Our irrigation experts design and install efficient, reliable systems that keep your lawn and landscape thriving despite Texas\' challenging climate. From initial consultation through final testing, we deliver precision installations that maximize coverage while minimizing water usage.',
    
    benefits: [
      {
        title: 'Custom Designed Systems',
        description: 'Every sprinkler system we install is custom-designed for your specific property, accounting for your landscape layout, soil conditions, and plant material water requirements.',
        icon: 'design'
      },
      {
        title: 'Water Conservation Technology',
        description: 'Our installations incorporate smart controllers, high-efficiency nozzles, and rain sensors that reduce water consumption while maintaining landscape health.',
        icon: 'water'
      },
      {
        title: 'Professional Installation',
        description: 'Our experienced technicians install your system with minimal disruption to your landscape, ensuring proper depth, secure connections, and clean restoration.',
        icon: 'tools'
      },
      {
        title: 'Comprehensive Support',
        description: 'All installations include thorough system training, detailed documentation, and ongoing support to ensure your new irrigation system performs optimally.',
        icon: 'support'
      }
    ],
    
    services: [
      {
        title: 'Complete Irrigation System Installation',
        description: 'Professional installation of complete residential and commercial irrigation systems, including mainline, valves, wiring, controller, and all necessary components for reliable operation. Our installations are designed for Texas climate conditions and include smart technology that reduces water usage while maintaining landscape health.',
        features: [
          'Custom system design based on your property\'s specific needs',
          'Professional installation with minimal landscape disruption',
          'Quality components from leading manufacturers with full warranties',
          'Comprehensive system testing and adjustment'
        ]
      },
      {
        title: 'Smart Controller Integration',
        description: 'Installation of advanced smart controllers that automatically adjust watering schedules based on weather conditions, soil moisture, and seasonal needs. These systems can reduce water usage by up to 30% compared to conventional controllers while improving landscape health through more precise irrigation.',
        features: [
          'Weather-based or soil moisture-based smart controllers',
          'Mobile app control and monitoring capabilities',
          'Custom programming for your specific landscape zones',
          'Integration with existing home automation systems'
        ]
      },
      {
        title: 'Drip Irrigation Installation',
        description: 'Specialized installation of water-efficient drip irrigation systems for flowerbeds, gardens, and container plants. These systems deliver water directly to plant root zones, reducing waste through evaporation and runoff while improving plant health through consistent hydration.',
        features: [
          'Custom design for your specific planting areas',
          'Professional grade components for longevity',
          'Integration with main sprinkler system',
          'Adjustable flow emitters for different plant needs'
        ]
      },
      {
        title: 'System Upgrades & Retrofits',
        description: 'Professional upgrading of existing irrigation systems with modern, water-efficient components. We can transform older, inefficient systems into state-of-the-art irrigation networks that reduce water consumption while improving performance and reliability.',
        features: [
          'High-efficiency nozzle retrofits',
          'Smart controller upgrades',
          'Pressure regulation installation',
          'Zone reconfiguration for improved coverage'
        ]
      },
      {
        title: 'Seasonal Maintenance Programs',
        description: 'Comprehensive maintenance packages designed to keep your sprinkler system operating at peak efficiency throughout the year. Our seasonal programs include spring startups, mid-season checkups, and winterization to protect your investment and extend system lifespan.',
        features: [
          'Spring system startup and pressure testing',
          'Mid-season efficiency adjustments and coverage optimization',
          'Fall system inspection and winterization',
          'Year-round technical support and priority scheduling'
        ]
      }
    ],
    
    pricing: {
      startingAt: '$2,500',
      factors: [
        'Property size and layout complexity',
        'Number of zones required',
        'Controller and component selection',
        'Soil conditions and installation challenges',
        'Additional features (drip zones, smart controllers, etc.)'
      ]
    },
    
    process: [
      {
        step: 1,
        title: 'Consultation & Design',
        description: 'We begin with a comprehensive on-site assessment of your property, discussing your landscape needs, water conservation goals, and budget considerations. Our irrigation experts then create a custom system design tailored to your specific requirements.'
      },
      {
        step: 2,
        title: 'Proposal & Planning',
        description: 'You\'ll receive a detailed proposal outlining recommended system components, installation specifications, and complete pricing. We\'ll address any questions and make adjustments as needed before scheduling your installation.'
      },
      {
        step: 3,
        title: 'Professional Installation',
        description: 'Our experienced technicians install your system with precision and care, minimizing disruption to your landscape. Installation typically takes 1-3 days depending on system complexity and property size.'
      },
      {
        step: 4,
        title: 'Testing & Adjustment',
        description: 'After installation, we thoroughly test every component and make precise adjustments to ensure optimal coverage, pressure, and distribution throughout your property.'
      },
      {
        step: 5,
        title: 'Orientation & Support',
        description: 'We provide comprehensive training on your new system, including controller operation, seasonal adjustments, and maintenance requirements. All installations include detailed documentation and ongoing support.'
      }
    ],
    
    faqs: getSprinklerInstallationFAQs('fort-worth'),
    
    testimonial: {
      quote: "Texas Best Sprinklers installed our irrigation system with incredible attention to detail. The crew was professional, the installation was surprisingly quick with minimal disruption to our yard, and the system has performed flawlessly.",
      author: "Michael S.",
      location: "Fort Worth, TX",
      rating: 5
    },
    
    updatedAt: '2025-04-15'
  },
  
  'arlington': {
    title: 'Professional Sprinkler Installation in Arlington, TX',
    metaDescription: 'Expert sprinkler system installation in Arlington. Custom irrigation solutions designed for Texas conditions with professional installation and support.',
    heroImage: '/images/services/sprinkler-installation/arlington-sprinkler-installation.jpg',
    serviceType: ServiceType.SPRINKLER_INSTALLATION,
    
    intro: 'Texas Best Sprinklers provides professional sprinkler system installation in Arlington, designed specifically for your property\'s unique needs. Our irrigation experts design and install efficient, reliable systems that keep your lawn and landscape thriving despite Texas\' challenging climate. From initial consultation through final testing, we deliver precision installations that maximize coverage while minimizing water usage.',
    
    benefits: [
      {
        title: 'Custom Designed Systems',
        description: 'Every sprinkler system we install is custom-designed for your specific property, accounting for your landscape layout, soil conditions, and plant material water requirements.',
        icon: 'design'
      },
      {
        title: 'Water Conservation Technology',
        description: 'Our installations incorporate smart controllers, high-efficiency nozzles, and rain sensors that reduce water consumption while maintaining landscape health.',
        icon: 'water'
      },
      {
        title: 'Professional Installation',
        description: 'Our experienced technicians install your system with minimal disruption to your landscape, ensuring proper depth, secure connections, and clean restoration.',
        icon: 'tools'
      },
      {
        title: 'Comprehensive Support',
        description: 'All installations include thorough system training, detailed documentation, and ongoing support to ensure your new irrigation system performs optimally.',
        icon: 'support'
      }
    ],
    
    services: [
      {
        title: 'Complete Irrigation System Installation',
        description: 'Professional installation of complete residential and commercial irrigation systems, including mainline, valves, wiring, controller, and all necessary components for reliable operation. Our installations are designed for Texas climate conditions and include smart technology that reduces water usage while maintaining landscape health.',
        features: [
          'Custom system design based on your property\'s specific needs',
          'Professional installation with minimal landscape disruption',
          'Quality components from leading manufacturers with full warranties',
          'Comprehensive system testing and adjustment'
        ]
      },
      {
        title: 'Smart Controller Integration',
        description: 'Installation of advanced smart controllers that automatically adjust watering schedules based on weather conditions, soil moisture, and seasonal needs. These systems can reduce water usage by up to 30% compared to conventional controllers while improving landscape health through more precise irrigation.',
        features: [
          'Weather-based or soil moisture-based smart controllers',
          'Mobile app control and monitoring capabilities',
          'Custom programming for your specific landscape zones',
          'Integration with existing home automation systems'
        ]
      },
      {
        title: 'Drip Irrigation Installation',
        description: 'Specialized installation of water-efficient drip irrigation systems for flowerbeds, gardens, and container plants. These systems deliver water directly to plant root zones, reducing waste through evaporation and runoff while improving plant health through consistent hydration.',
        features: [
          'Custom design for your specific planting areas',
          'Professional grade components for longevity',
          'Integration with main sprinkler system',
          'Adjustable flow emitters for different plant needs'
        ]
      },
      {
        title: 'System Upgrades & Retrofits',
        description: 'Professional upgrading of existing irrigation systems with modern, water-efficient components. We can transform older, inefficient systems into state-of-the-art irrigation networks that reduce water consumption while improving performance and reliability.',
        features: [
          'High-efficiency nozzle retrofits',
          'Smart controller upgrades',
          'Pressure regulation installation',
          'Zone reconfiguration for improved coverage'
        ]
      },
      {
        title: 'Seasonal Maintenance Programs',
        description: 'Comprehensive maintenance packages designed to keep your sprinkler system operating at peak efficiency throughout the year. Our seasonal programs include spring startups, mid-season checkups, and winterization to protect your investment and extend system lifespan.',
        features: [
          'Spring system startup and pressure testing',
          'Mid-season efficiency adjustments and coverage optimization',
          'Fall system inspection and winterization',
          'Year-round technical support and priority scheduling'
        ]
      }
    ],
    
    pricing: {
      startingAt: '$2,500',
      factors: [
        'Property size and layout complexity',
        'Number of zones required',
        'Controller and component selection',
        'Soil conditions and installation challenges',
        'Additional features (drip zones, smart controllers, etc.)'
      ]
    },
    
    process: [
      {
        step: 1,
        title: 'Consultation & Design',
        description: 'We begin with a comprehensive on-site assessment of your property, discussing your landscape needs, water conservation goals, and budget considerations. Our irrigation experts then create a custom system design tailored to your specific requirements.'
      },
      {
        step: 2,
        title: 'Proposal & Planning',
        description: 'You\'ll receive a detailed proposal outlining recommended system components, installation specifications, and complete pricing. We\'ll address any questions and make adjustments as needed before scheduling your installation.'
      },
      {
        step: 3,
        title: 'Professional Installation',
        description: 'Our experienced technicians install your system with precision and care, minimizing disruption to your landscape. Installation typically takes 1-3 days depending on system complexity and property size.'
      },
      {
        step: 4,
        title: 'Testing & Adjustment',
        description: 'After installation, we thoroughly test every component and make precise adjustments to ensure optimal coverage, pressure, and distribution throughout your property.'
      },
      {
        step: 5,
        title: 'Orientation & Support',
        description: 'We provide comprehensive training on your new system, including controller operation, seasonal adjustments, and maintenance requirements. All installations include detailed documentation and ongoing support.'
      }
    ],
    
    faqs: getSprinklerInstallationFAQs('arlington'),
    
    testimonial: {
      quote: "Texas Best Sprinklers installed our irrigation system with incredible attention to detail. The crew was professional, the installation was surprisingly quick with minimal disruption to our yard, and the system has performed flawlessly.",
      author: "Sarah J.",
      location: "Arlington, TX",
      rating: 5
    },
    
    updatedAt: '2025-04-15'
  },
  
  'dallas': {
    title: 'Professional Sprinkler Installation in Dallas, TX',
    metaDescription: 'Expert sprinkler system installation in Dallas. Custom irrigation solutions designed for Texas conditions with professional installation and support.',
    heroImage: '/images/services/sprinkler-installation/dallas-sprinkler-installation.jpg',
    serviceType: ServiceType.SPRINKLER_INSTALLATION,
    
    intro: 'Texas Best Sprinklers provides professional sprinkler system installation in Dallas, designed specifically for your property\'s unique needs. Our irrigation experts design and install efficient, reliable systems that keep your lawn and landscape thriving despite Texas\' challenging climate. From initial consultation through final testing, we deliver precision installations that maximize coverage while minimizing water usage.',
    
    benefits: [
      {
        title: 'Custom Designed Systems',
        description: 'Every sprinkler system we install is custom-designed for your specific property, accounting for your landscape layout, soil conditions, and plant material water requirements.',
        icon: 'design'
      },
      {
        title: 'Water Conservation Technology',
        description: 'Our installations incorporate smart controllers, high-efficiency nozzles, and rain sensors that reduce water consumption while maintaining landscape health.',
        icon: 'water'
      },
      {
        title: 'Professional Installation',
        description: 'Our experienced technicians install your system with minimal disruption to your landscape, ensuring proper depth, secure connections, and clean restoration.',
        icon: 'tools'
      },
      {
        title: 'Comprehensive Support',
        description: 'All installations include thorough system training, detailed documentation, and ongoing support to ensure your new irrigation system performs optimally.',
        icon: 'support'
      }
    ],
    
    services: [
      {
        title: 'Complete Irrigation System Installation',
        description: 'Professional installation of complete residential and commercial irrigation systems, including mainline, valves, wiring, controller, and all necessary components for reliable operation. Our installations are designed for Texas climate conditions and include smart technology that reduces water usage while maintaining landscape health.',
        features: [
          'Custom system design based on your property\'s specific needs',
          'Professional installation with minimal landscape disruption',
          'Quality components from leading manufacturers with full warranties',
          'Comprehensive system testing and adjustment'
        ]
      },
      {
        title: 'Smart Controller Integration',
        description: 'Installation of advanced smart controllers that automatically adjust watering schedules based on weather conditions, soil moisture, and seasonal needs. These systems can reduce water usage by up to 30% compared to conventional controllers while improving landscape health through more precise irrigation.',
        features: [
          'Weather-based or soil moisture-based smart controllers',
          'Mobile app control and monitoring capabilities',
          'Custom programming for your specific landscape zones',
          'Integration with existing home automation systems'
        ]
      },
      {
        title: 'Drip Irrigation Installation',
        description: 'Specialized installation of water-efficient drip irrigation systems for flowerbeds, gardens, and container plants. These systems deliver water directly to plant root zones, reducing waste through evaporation and runoff while improving plant health through consistent hydration.',
        features: [
          'Custom design for your specific planting areas',
          'Professional grade components for longevity',
          'Integration with main sprinkler system',
          'Adjustable flow emitters for different plant needs'
        ]
      },
      {
        title: 'System Upgrades & Retrofits',
        description: 'Professional upgrading of existing irrigation systems with modern, water-efficient components. We can transform older, inefficient systems into state-of-the-art irrigation networks that reduce water consumption while improving performance and reliability.',
        features: [
          'High-efficiency nozzle retrofits',
          'Smart controller upgrades',
          'Pressure regulation installation',
          'Zone reconfiguration for improved coverage'
        ]
      },
      {
        title: 'Seasonal Maintenance Programs',
        description: 'Comprehensive maintenance packages designed to keep your sprinkler system operating at peak efficiency throughout the year. Our seasonal programs include spring startups, mid-season checkups, and winterization to protect your investment and extend system lifespan.',
        features: [
          'Spring system startup and pressure testing',
          'Mid-season efficiency adjustments and coverage optimization',
          'Fall system inspection and winterization',
          'Year-round technical support and priority scheduling'
        ]
      }
    ],
    
    pricing: {
      startingAt: '$2,500',
      factors: [
        'Property size and layout complexity',
        'Number of zones required',
        'Controller and component selection',
        'Soil conditions and installation challenges',
        'Additional features (drip zones, smart controllers, etc.)'
      ]
    },
    
    process: [
      {
        step: 1,
        title: 'Consultation & Design',
        description: 'We begin with a comprehensive on-site assessment of your property, discussing your landscape needs, water conservation goals, and budget considerations. Our irrigation experts then create a custom system design tailored to your specific requirements.'
      },
      {
        step: 2,
        title: 'Proposal & Planning',
        description: 'You\'ll receive a detailed proposal outlining recommended system components, installation specifications, and complete pricing. We\'ll address any questions and make adjustments as needed before scheduling your installation.'
      },
      {
        step: 3,
        title: 'Professional Installation',
        description: 'Our experienced technicians install your system with precision and care, minimizing disruption to your landscape. Installation typically takes 1-3 days depending on system complexity and property size.'
      },
      {
        step: 4,
        title: 'Testing & Adjustment',
        description: 'After installation, we thoroughly test every component and make precise adjustments to ensure optimal coverage, pressure, and distribution throughout your property.'
      },
      {
        step: 5,
        title: 'Orientation & Support',
        description: 'We provide comprehensive training on your new system, including controller operation, seasonal adjustments, and maintenance requirements. All installations include detailed documentation and ongoing support.'
      }
    ],
    
    faqs: getSprinklerInstallationFAQs('dallas'),
    
    testimonial: {
      quote: "Texas Best Sprinklers installed our irrigation system with incredible attention to detail. The crew was professional, the installation was surprisingly quick with minimal disruption to our yard, and the system has performed flawlessly.",
      author: "Robert M.",
      location: "Dallas, TX",
      rating: 5
    },
    
    updatedAt: '2025-04-15'
  },

  'keller': {
    title: 'Professional Sprinkler Installation in Keller, TX',
    metaDescription: 'Expert sprinkler system installation in Keller. Custom irrigation solutions designed for Texas conditions with professional installation and support.',
    heroImage: '/images/services/sprinkler-installation/keller-sprinkler-installation.jpg',
    serviceType: ServiceType.SPRINKLER_INSTALLATION,
    
    intro: 'Texas Best Sprinklers provides professional sprinkler system installation in Keller, designed specifically for your property\'s unique needs. Our irrigation experts design and install efficient, reliable systems that keep your lawn and landscape thriving despite Texas\' challenging climate.',
    
    benefits: [
      {
        title: 'Custom Designed Systems',
        description: 'Every sprinkler system we install is custom-designed for your specific property, accounting for your landscape layout, soil conditions, and plant material water requirements.',
        icon: 'design'
      },
      {
        title: 'Water Conservation Technology',
        description: 'Our installations incorporate smart controllers, high-efficiency nozzles, and rain sensors that reduce water consumption while maintaining landscape health.',
        icon: 'water'
      },
      {
        title: 'Professional Installation',
        description: 'Our experienced technicians install your system with minimal disruption to your landscape, ensuring proper depth, secure connections, and clean restoration.',
        icon: 'tools'
      },
      {
        title: 'Comprehensive Support',
        description: 'All installations include thorough system training, detailed documentation, and ongoing support to ensure your new irrigation system performs optimally.',
        icon: 'support'
      }
    ],
    
    services: [
      {
        title: 'Complete Irrigation System Installation',
        description: 'Professional installation of complete residential and commercial irrigation systems, including mainline, valves, wiring, controller, and all necessary components for reliable operation.',
        features: [
          'Custom system design based on your property\'s specific needs',
          'Professional installation with minimal landscape disruption',
          'Quality components from leading manufacturers with full warranties',
          'Comprehensive system testing and adjustment'
        ]
      },
      {
        title: 'Smart Controller Integration',
        description: 'Installation of advanced smart controllers that automatically adjust watering schedules based on weather conditions, soil moisture, and seasonal needs.',
        features: [
          'Weather-based or soil moisture-based smart controllers',
          'Mobile app control and monitoring capabilities',
          'Custom programming for your specific landscape zones',
          'Integration with existing home automation systems'
        ]
      },
      {
        title: 'Seasonal Maintenance Programs',
        description: 'Comprehensive maintenance packages designed to keep your sprinkler system operating at peak efficiency throughout the year. Our seasonal programs include spring startups, mid-season checkups, and winterization to protect your investment and extend system lifespan.',
        features: [
          'Spring system startup and pressure testing',
          'Mid-season efficiency adjustments and coverage optimization',
          'Fall system inspection and winterization',
          'Year-round technical support and priority scheduling'
        ]
      }
    ],
    
    faqs: getSprinklerInstallationFAQs('keller'),
    
    testimonial: {
      quote: "Texas Best Sprinklers installed our irrigation system with incredible attention to detail. The crew was professional and the system has performed flawlessly.",
      author: "Jennifer K.",
      location: "Keller, TX",
      rating: 5
    },
    
    updatedAt: '2025-04-15'
  },

  'southlake': {
    title: 'Professional Sprinkler Installation in Southlake, TX',
    metaDescription: 'Expert sprinkler system installation in Southlake. Custom irrigation solutions designed for Texas conditions with professional installation and support.',
    heroImage: '/images/services/sprinkler-installation/southlake-sprinkler-installation.jpg',
    serviceType: ServiceType.SPRINKLER_INSTALLATION,
    
    intro: 'Texas Best Sprinklers provides professional sprinkler system installation in Southlake, designed specifically for your property\'s unique needs. Our irrigation experts design and install efficient, reliable systems that keep your lawn and landscape thriving despite Texas\' challenging climate.',
    
    benefits: [
      {
        title: 'Custom Designed Systems',
        description: 'Every sprinkler system we install is custom-designed for your specific property, accounting for your landscape layout, soil conditions, and plant material water requirements.',
        icon: 'design'
      },
      {
        title: 'Water Conservation Technology',
        description: 'Our installations incorporate smart controllers, high-efficiency nozzles, and rain sensors that reduce water consumption while maintaining landscape health.',
        icon: 'water'
      },
      {
        title: 'Professional Installation',
        description: 'Our experienced technicians install your system with minimal disruption to your landscape, ensuring proper depth, secure connections, and clean restoration.',
        icon: 'tools'
      },
      {
        title: 'Comprehensive Support',
        description: 'All installations include thorough system training, detailed documentation, and ongoing support to ensure your new irrigation system performs optimally.',
        icon: 'support'
      }
    ],
    
    services: [
      {
        title: 'Complete Irrigation System Installation',
        description: 'Professional installation of complete residential and commercial irrigation systems, including mainline, valves, wiring, controller, and all necessary components for reliable operation.',
        features: [
          'Custom system design based on your property\'s specific needs',
          'Professional installation with minimal landscape disruption',
          'Quality components from leading manufacturers with full warranties',
          'Comprehensive system testing and adjustment'
        ]
      },
      {
        title: 'Smart Controller Integration',
        description: 'Installation of advanced smart controllers that automatically adjust watering schedules based on weather conditions, soil moisture, and seasonal needs.',
        features: [
          'Weather-based or soil moisture-based smart controllers',
          'Mobile app control and monitoring capabilities',
          'Custom programming for your specific landscape zones',
          'Integration with existing home automation systems'
        ]
      },
      {
        title: 'Seasonal Maintenance Programs',
        description: 'Comprehensive maintenance packages designed to keep your sprinkler system operating at peak efficiency throughout the year. Our seasonal programs include spring startups, mid-season checkups, and winterization to protect your investment and extend system lifespan.',
        features: [
          'Spring system startup and pressure testing',
          'Mid-season efficiency adjustments and coverage optimization',
          'Fall system inspection and winterization',
          'Year-round technical support and priority scheduling'
        ]
      }
    ],
    
    faqs: getSprinklerInstallationFAQs('southlake'),
    
    testimonial: {
      quote: "Texas Best Sprinklers installed our irrigation system with incredible attention to detail. The crew was professional and the system has performed flawlessly.",
      author: "David S.",
      location: "Southlake, TX",
      rating: 5
    },
    
    updatedAt: '2025-04-15'
  },

  'colleyville': {
    title: 'Professional Sprinkler Installation in Colleyville, TX',
    metaDescription: 'Expert sprinkler system installation in Colleyville. Custom irrigation solutions designed for Texas conditions with professional installation and support.',
    heroImage: '/images/services/sprinkler-installation/colleyville-sprinkler-installation.jpg',
    serviceType: ServiceType.SPRINKLER_INSTALLATION,
    
    intro: 'Texas Best Sprinklers provides professional sprinkler system installation in Colleyville, designed specifically for your property\'s unique needs. Our irrigation experts design and install efficient, reliable systems that keep your lawn and landscape thriving despite Texas\' challenging climate.',
    
    benefits: [
      {
        title: 'Custom Designed Systems',
        description: 'Every sprinkler system we install is custom-designed for your specific property, accounting for your landscape layout, soil conditions, and plant material water requirements.',
        icon: 'design'
      },
      {
        title: 'Water Conservation Technology',
        description: 'Our installations incorporate smart controllers, high-efficiency nozzles, and rain sensors that reduce water consumption while maintaining landscape health.',
        icon: 'water'
      },
      {
        title: 'Professional Installation',
        description: 'Our experienced technicians install your system with minimal disruption to your landscape, ensuring proper depth, secure connections, and clean restoration.',
        icon: 'tools'
      },
      {
        title: 'Comprehensive Support',
        description: 'All installations include thorough system training, detailed documentation, and ongoing support to ensure your new irrigation system performs optimally.',
        icon: 'support'
      }
    ],
    
    services: [
      {
        title: 'Complete Irrigation System Installation',
        description: 'Professional installation of complete residential and commercial irrigation systems, including mainline, valves, wiring, controller, and all necessary components for reliable operation.',
        features: [
          'Custom system design based on your property\'s specific needs',
          'Professional installation with minimal landscape disruption',
          'Quality components from leading manufacturers with full warranties',
          'Comprehensive system testing and adjustment'
        ]
      },
      {
        title: 'Smart Controller Integration',
        description: 'Installation of advanced smart controllers that automatically adjust watering schedules based on weather conditions, soil moisture, and seasonal needs.',
        features: [
          'Weather-based or soil moisture-based smart controllers',
          'Mobile app control and monitoring capabilities',
          'Custom programming for your specific landscape zones',
          'Integration with existing home automation systems'
        ]
      },
      {
        title: 'Seasonal Maintenance Programs',
        description: 'Comprehensive maintenance packages designed to keep your sprinkler system operating at peak efficiency throughout the year. Our seasonal programs include spring startups, mid-season checkups, and winterization to protect your investment and extend system lifespan.',
        features: [
          'Spring system startup and pressure testing',
          'Mid-season efficiency adjustments and coverage optimization',
          'Fall system inspection and winterization',
          'Year-round technical support and priority scheduling'
        ]
      }
    ],
    
    faqs: getSprinklerInstallationFAQs('colleyville'),
    
    testimonial: {
      quote: "Texas Best Sprinklers installed our irrigation system with incredible attention to detail. The crew was professional and the system has performed flawlessly.",
      author: "Patricia C.",
      location: "Colleyville, TX",
      rating: 5
    },
    
    updatedAt: '2025-04-15'
  },

  'flower-mound': {
    title: 'Professional Sprinkler Installation in Flower Mound, TX',
    metaDescription: 'Expert sprinkler system installation in Flower Mound. Custom irrigation solutions designed for Texas conditions with professional installation and support.',
    heroImage: '/images/services/sprinkler-installation/flower-mound-sprinkler-installation.jpg',
    serviceType: ServiceType.SPRINKLER_INSTALLATION,
    
    intro: 'Texas Best Sprinklers provides professional sprinkler system installation in Flower Mound, designed specifically for your property\'s unique needs. Our irrigation experts design and install efficient, reliable systems that keep your lawn and landscape thriving despite Texas\' challenging climate.',
    
    benefits: [
      {
        title: 'Custom Designed Systems',
        description: 'Every sprinkler system we install is custom-designed for your specific property, accounting for your landscape layout, soil conditions, and plant material water requirements.',
        icon: 'design'
      },
      {
        title: 'Water Conservation Technology',
        description: 'Our installations incorporate smart controllers, high-efficiency nozzles, and rain sensors that reduce water consumption while maintaining landscape health.',
        icon: 'water'
      },
      {
        title: 'Professional Installation',
        description: 'Our experienced technicians install your system with minimal disruption to your landscape, ensuring proper depth, secure connections, and clean restoration.',
        icon: 'tools'
      },
      {
        title: 'Comprehensive Support',
        description: 'All installations include thorough system training, detailed documentation, and ongoing support to ensure your new irrigation system performs optimally.',
        icon: 'support'
      }
    ],
    
    services: [
      {
        title: 'Complete Irrigation System Installation',
        description: 'Professional installation of complete residential and commercial irrigation systems, including mainline, valves, wiring, controller, and all necessary components for reliable operation.',
        features: [
          'Custom system design based on your property\'s specific needs',
          'Professional installation with minimal landscape disruption',
          'Quality components from leading manufacturers with full warranties',
          'Comprehensive system testing and adjustment'
        ]
      },
      {
        title: 'Smart Controller Integration',
        description: 'Installation of advanced smart controllers that automatically adjust watering schedules based on weather conditions, soil moisture, and seasonal needs.',
        features: [
          'Weather-based or soil moisture-based smart controllers',
          'Mobile app control and monitoring capabilities',
          'Custom programming for your specific landscape zones',
          'Integration with existing home automation systems'
        ]
      },
      {
        title: 'Seasonal Maintenance Programs',
        description: 'Comprehensive maintenance packages designed to keep your sprinkler system operating at peak efficiency throughout the year. Our seasonal programs include spring startups, mid-season checkups, and winterization to protect your investment and extend system lifespan.',
        features: [
          'Spring system startup and pressure testing',
          'Mid-season efficiency adjustments and coverage optimization',
          'Fall system inspection and winterization',
          'Year-round technical support and priority scheduling'
        ]
      }
    ],
    
    faqs: getSprinklerInstallationFAQs('flower-mound'),
    
    testimonial: {
      quote: "Texas Best Sprinklers installed our irrigation system with incredible attention to detail. The crew was professional and the system has performed flawlessly.",
      author: "Michelle F.",
      location: "Flower Mound, TX",
      rating: 5
    },
    
    updatedAt: '2025-04-15'
  },

  'grapevine': {
    title: 'Professional Sprinkler Installation in Grapevine, TX',
    metaDescription: 'Expert sprinkler system installation in Grapevine. Custom irrigation solutions designed for Texas conditions with professional installation and support.',
    heroImage: '/images/services/sprinkler-installation/grapevine-sprinkler-installation.jpg',
    serviceType: ServiceType.SPRINKLER_INSTALLATION,
    
    intro: 'Texas Best Sprinklers provides professional sprinkler system installation in Grapevine, designed specifically for your property\'s unique needs. Our irrigation experts design and install efficient, reliable systems that keep your lawn and landscape thriving despite Texas\' challenging climate.',
    
    benefits: [
      {
        title: 'Custom Designed Systems',
        description: 'Every sprinkler system we install is custom-designed for your specific property, accounting for your landscape layout, soil conditions, and plant material water requirements.',
        icon: 'design'
      },
      {
        title: 'Water Conservation Technology',
        description: 'Our installations incorporate smart controllers, high-efficiency nozzles, and rain sensors that reduce water consumption while maintaining landscape health.',
        icon: 'water'
      },
      {
        title: 'Professional Installation',
        description: 'Our experienced technicians install your system with minimal disruption to your landscape, ensuring proper depth, secure connections, and clean restoration.',
        icon: 'tools'
      },
      {
        title: 'Comprehensive Support',
        description: 'All installations include thorough system training, detailed documentation, and ongoing support to ensure your new irrigation system performs optimally.',
        icon: 'support'
      }
    ],
    
    services: [
      {
        title: 'Complete Irrigation System Installation',
        description: 'Professional installation of complete residential and commercial irrigation systems, including mainline, valves, wiring, controller, and all necessary components for reliable operation.',
        features: [
          'Custom system design based on your property\'s specific needs',
          'Professional installation with minimal landscape disruption',
          'Quality components from leading manufacturers with full warranties',
          'Comprehensive system testing and adjustment'
        ]
      },
      {
        title: 'Smart Controller Integration',
        description: 'Installation of advanced smart controllers that automatically adjust watering schedules based on weather conditions, soil moisture, and seasonal needs.',
        features: [
          'Weather-based or soil moisture-based smart controllers',
          'Mobile app control and monitoring capabilities',
          'Custom programming for your specific landscape zones',
          'Integration with existing home automation systems'
        ]
      },
      {
        title: 'Seasonal Maintenance Programs',
        description: 'Comprehensive maintenance packages designed to keep your sprinkler system operating at peak efficiency throughout the year. Our seasonal programs include spring startups, mid-season checkups, and winterization to protect your investment and extend system lifespan.',
        features: [
          'Spring system startup and pressure testing',
          'Mid-season efficiency adjustments and coverage optimization',
          'Fall system inspection and winterization',
          'Year-round technical support and priority scheduling'
        ]
      }
    ],
    
    faqs: getSprinklerInstallationFAQs('grapevine'),
    
    testimonial: {
      quote: "Texas Best Sprinklers installed our irrigation system with incredible attention to detail. The crew was professional and the system has performed flawlessly.",
      author: "Thomas G.",
      location: "Grapevine, TX",
      rating: 5
    },
    
    updatedAt: '2025-04-15'
  },

  'coppell': {
    title: 'Professional Sprinkler Installation in Coppell, TX',
    metaDescription: 'Expert sprinkler system installation in Coppell. Custom irrigation solutions designed for Texas conditions with professional installation and support.',
    heroImage: '/images/services/sprinkler-installation/coppell-sprinkler-installation.jpg',
    serviceType: ServiceType.SPRINKLER_INSTALLATION,
    
    intro: 'Texas Best Sprinklers provides professional sprinkler system installation in Coppell, designed specifically for your property\'s unique needs. Our irrigation experts design and install efficient, reliable systems that keep your lawn and landscape thriving despite Texas\' challenging climate.',
    
    benefits: [
      {
        title: 'Custom Designed Systems',
        description: 'Every sprinkler system we install is custom-designed for your specific property, accounting for your landscape layout, soil conditions, and plant material water requirements.',
        icon: 'design'
      },
      {
        title: 'Water Conservation Technology',
        description: 'Our installations incorporate smart controllers, high-efficiency nozzles, and rain sensors that reduce water consumption while maintaining landscape health.',
        icon: 'water'
      },
      {
        title: 'Professional Installation',
        description: 'Our experienced technicians install your system with minimal disruption to your landscape, ensuring proper depth, secure connections, and clean restoration.',
        icon: 'tools'
      },
      {
        title: 'Comprehensive Support',
        description: 'All installations include thorough system training, detailed documentation, and ongoing support to ensure your new irrigation system performs optimally.',
        icon: 'support'
      }
    ],
    
    services: [
      {
        title: 'Complete Irrigation System Installation',
        description: 'Professional installation of complete residential and commercial irrigation systems, including mainline, valves, wiring, controller, and all necessary components for reliable operation.',
        features: [
          'Custom system design based on your property\'s specific needs',
          'Professional installation with minimal landscape disruption',
          'Quality components from leading manufacturers with full warranties',
          'Comprehensive system testing and adjustment'
        ]
      },
      {
        title: 'Smart Controller Integration',
        description: 'Installation of advanced smart controllers that automatically adjust watering schedules based on weather conditions, soil moisture, and seasonal needs.',
        features: [
          'Weather-based or soil moisture-based smart controllers',
          'Mobile app control and monitoring capabilities',
          'Custom programming for your specific landscape zones',
          'Integration with existing home automation systems'
        ]
      },
      {
        title: 'Seasonal Maintenance Programs',
        description: 'Comprehensive maintenance packages designed to keep your sprinkler system operating at peak efficiency throughout the year. Our seasonal programs include spring startups, mid-season checkups, and winterization to protect your investment and extend system lifespan.',
        features: [
          'Spring system startup and pressure testing',
          'Mid-season efficiency adjustments and coverage optimization',
          'Fall system inspection and winterization',
          'Year-round technical support and priority scheduling'
        ]
      }
    ],
    
    faqs: getSprinklerInstallationFAQs('coppell'),
    
    testimonial: {
      quote: "Texas Best Sprinklers installed our irrigation system with incredible attention to detail. The crew was professional and the system has performed flawlessly.",
      author: "Karen C.",
      location: "Coppell, TX",
      rating: 5
    },
    
    updatedAt: '2025-04-15'
  },

  'irving': {
    title: 'Professional Sprinkler Installation in Irving, TX',
    metaDescription: 'Expert sprinkler system installation in Irving. Custom irrigation solutions designed for Texas conditions with professional installation and support.',
    heroImage: '/images/services/sprinkler-installation/irving-sprinkler-installation.jpg',
    serviceType: ServiceType.SPRINKLER_INSTALLATION,
    
    intro: 'Texas Best Sprinklers provides professional sprinkler system installation in Irving, designed specifically for your property\'s unique needs. Our irrigation experts design and install efficient, reliable systems that keep your lawn and landscape thriving despite Texas\' challenging climate.',
    
    benefits: [
      {
        title: 'Custom Designed Systems',
        description: 'Every sprinkler system we install is custom-designed for your specific property, accounting for your landscape layout, soil conditions, and plant material water requirements.',
        icon: 'design'
      },
      {
        title: 'Water Conservation Technology',
        description: 'Our installations incorporate smart controllers, high-efficiency nozzles, and rain sensors that reduce water consumption while maintaining landscape health.',
        icon: 'water'
      },
      {
        title: 'Professional Installation',
        description: 'Our experienced technicians install your system with minimal disruption to your landscape, ensuring proper depth, secure connections, and clean restoration.',
        icon: 'tools'
      },
      {
        title: 'Comprehensive Support',
        description: 'All installations include thorough system training, detailed documentation, and ongoing support to ensure your new irrigation system performs optimally.',
        icon: 'support'
      }
    ],
    
    services: [
      {
        title: 'Complete Irrigation System Installation',
        description: 'Professional installation of complete residential and commercial irrigation systems, including mainline, valves, wiring, controller, and all necessary components for reliable operation.',
        features: [
          'Custom system design based on your property\'s specific needs',
          'Professional installation with minimal landscape disruption',
          'Quality components from leading manufacturers with full warranties',
          'Comprehensive system testing and adjustment'
        ]
      },
      {
        title: 'Smart Controller Integration',
        description: 'Installation of advanced smart controllers that automatically adjust watering schedules based on weather conditions, soil moisture, and seasonal needs.',
        features: [
          'Weather-based or soil moisture-based smart controllers',
          'Mobile app control and monitoring capabilities',
          'Custom programming for your specific landscape zones',
          'Integration with existing home automation systems'
        ]
      },
      {
        title: 'Seasonal Maintenance Programs',
        description: 'Comprehensive maintenance packages designed to keep your sprinkler system operating at peak efficiency throughout the year. Our seasonal programs include spring startups, mid-season checkups, and winterization to protect your investment and extend system lifespan.',
        features: [
          'Spring system startup and pressure testing',
          'Mid-season efficiency adjustments and coverage optimization',
          'Fall system inspection and winterization',
          'Year-round technical support and priority scheduling'
        ]
      }
    ],
    
    faqs: getSprinklerInstallationFAQs('irving'),
    
    testimonial: {
      quote: "Texas Best Sprinklers installed our irrigation system with incredible attention to detail. The crew was professional and the system has performed flawlessly.",
      author: "Richard I.",
      location: "Irving, TX",
      rating: 5
    },
    
    updatedAt: '2025-04-15'
  }
};

export default sprinklerInstallationServiceData;
