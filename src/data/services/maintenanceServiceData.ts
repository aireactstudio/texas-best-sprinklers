// import { ServiceContent, ServiceType } from '../types/serviceTypes';

// /**
//  * Maintenance service data for each location
//  */
// export const maintenanceServiceData: Record<string, ServiceContent> = {
//   'fort-worth': {
//     title: 'Professional Irrigation Maintenance in Fort Worth, TX',
//     metaDescription: 'Expert irrigation maintenance services in Fort Worth. Keep your sprinkler system operating efficiently year-round.',
//     heroImage: '/images/services/maintenance/fort-worth-irrigation-maintenance.jpg',
//     serviceType: ServiceType.MAINTENANCE,
//     intro: 'Texas Best Sprinklers provides professional irrigation maintenance in Fort Worth to keep your sprinkler system operating at peak efficiency.',
//     benefits: [],
//     services: [],
//     faqs: [],
//     testimonial: {
//       quote: "Their regular maintenance service has kept our sprinkler system running flawlessly for years.",
//       author: "James W.",
//       location: "Fort Worth, TX",
//       rating: 5
//     },
//     updatedAt: '2025-04-15'
//   },
//   'north-richland-hills': {
//     title: 'Professional Irrigation Maintenance in North Richland Hills, TX',
//     metaDescription: 'Expert irrigation maintenance services in North Richland Hills. Keep your sprinkler system operating efficiently year-round.',
//     heroImage: '/images/services/maintenance/north-richland-hills-irrigation-maintenance.jpg',
//     serviceType: ServiceType.MAINTENANCE,
//     intro: 'Texas Best Sprinklers provides professional irrigation maintenance in North Richland Hills to keep your sprinkler system operating at peak efficiency.',
//     benefits: [],
//     services: [],
//     faqs: [],
//     testimonial: {
//       quote: "Their regular maintenance service has kept our sprinkler system running flawlessly for years.",
//       author: "Amy N.",
//       location: "North Richland Hills, TX",
//       rating: 5
//     },
//     updatedAt: '2025-04-15'
//   },
//   'bedford': {
//     title: 'Professional Irrigation Maintenance in Bedford, TX',
//     metaDescription: 'Expert irrigation maintenance services in Bedford. Keep your sprinkler system operating efficiently year-round.',
//     heroImage: '/images/services/maintenance/bedford-irrigation-maintenance.jpg',
//     serviceType: ServiceType.MAINTENANCE,
//     intro: 'Texas Best Sprinklers provides professional irrigation maintenance in Bedford to keep your sprinkler system operating at peak efficiency.',
//     benefits: [],
//     services: [],
//     faqs: [],
//     testimonial: {
//       quote: "Their regular maintenance service has kept our sprinkler system running flawlessly for years.",
//       author: "Tim B.",
//       location: "Bedford, TX",
//       rating: 5
//     },
//     updatedAt: '2025-04-15'
//   },
//   'euless': {
//     title: 'Professional Irrigation Maintenance in Euless, TX',
//     metaDescription: 'Expert irrigation maintenance services in Euless. Keep your sprinkler system operating efficiently year-round.',
//     heroImage: '/images/services/maintenance/euless-irrigation-maintenance.jpg',
//     serviceType: ServiceType.MAINTENANCE,
//     intro: 'Texas Best Sprinklers provides professional irrigation maintenance in Euless to keep your sprinkler system operating at peak efficiency.',
//     benefits: [],
//     services: [],
//     faqs: [],
//     testimonial: {
//       quote: "Their regular maintenance service has kept our sprinkler system running flawlessly for years.",
//       author: "Linda E.",
//       location: "Euless, TX",
//       rating: 5
//     },
//     updatedAt: '2025-04-15'
//   },
//   'hurst': {
//     title: 'Professional Irrigation Maintenance in Hurst, TX',
//     metaDescription: 'Expert irrigation maintenance services in Hurst. Keep your sprinkler system operating efficiently year-round.',
//     heroImage: '/images/services/maintenance/hurst-irrigation-maintenance.jpg',
//     serviceType: ServiceType.MAINTENANCE,
//     intro: 'Texas Best Sprinklers provides professional irrigation maintenance in Hurst to keep your sprinkler system operating at peak efficiency.',
//     benefits: [],
//     services: [],
//     faqs: [],
//     testimonial: {
//       quote: "Their regular maintenance service has kept our sprinkler system running flawlessly for years.",
//       author: "Susan H.",
//       location: "Hurst, TX",
//       rating: 5
//     },
//     updatedAt: '2025-04-15'
//   },
//   'mansfield': {
//     title: 'Professional Irrigation Maintenance in Mansfield, TX',
//     metaDescription: 'Expert irrigation maintenance services in Mansfield. Keep your sprinkler system operating efficiently year-round.',
//     heroImage: '/images/services/maintenance/mansfield-irrigation-maintenance.jpg',
//     serviceType: ServiceType.MAINTENANCE,
//     intro: 'Texas Best Sprinklers provides professional irrigation maintenance in Mansfield to keep your sprinkler system operating at peak efficiency.',
//     benefits: [],
//     services: [],
//     faqs: [],
//     testimonial: {
//       quote: "Their regular maintenance service has kept our sprinkler system running flawlessly for years.",
//       author: "Mark M.",
//       location: "Mansfield, TX",
//       rating: 5
//     },
//     updatedAt: '2025-04-15'
//   },
//   'grand-prairie': {
//     title: 'Professional Irrigation Maintenance in Grand Prairie, TX',
//     metaDescription: 'Expert irrigation maintenance services in Grand Prairie. Keep your sprinkler system operating efficiently year-round.',
//     heroImage: '/images/services/maintenance/grand-prairie-irrigation-maintenance.jpg',
//     serviceType: ServiceType.MAINTENANCE,
//     intro: 'Texas Best Sprinklers provides professional irrigation maintenance in Grand Prairie to keep your sprinkler system operating at peak efficiency.',
//     benefits: [],
//     services: [],
//     faqs: [],
//     testimonial: {
//       quote: "Their regular maintenance service has kept our sprinkler system running flawlessly for years.",
//       author: "Andrew G.",
//       location: "Grand Prairie, TX",
//       rating: 5
//     },
//     updatedAt: '2025-04-15'
//   },
//   'haltom-city': {
//     title: 'Professional Irrigation Maintenance in Haltom City, TX',
//     metaDescription: 'Expert irrigation maintenance services in Haltom City. Keep your sprinkler system operating efficiently year-round.',
//     heroImage: '/images/services/maintenance/haltom-city-irrigation-maintenance.jpg',
//     serviceType: ServiceType.MAINTENANCE,
//     intro: 'Texas Best Sprinklers provides professional irrigation maintenance in Haltom City to keep your sprinkler system operating at peak efficiency.',
//     benefits: [],
//     services: [],
//     faqs: [],
//     testimonial: {
//       quote: "Their regular maintenance service has kept our sprinkler system running flawlessly for years.",
//       author: "Rebecca H.",
//       location: "Haltom City, TX",
//       rating: 5
//     },
//     updatedAt: '2025-04-15'
//   },
//   'watauga': {
//     title: 'Professional Irrigation Maintenance in Watauga, TX',
//     metaDescription: 'Expert irrigation maintenance services in Watauga. Keep your sprinkler system operating efficiently year-round.',
//     heroImage: '/images/services/maintenance/watauga-irrigation-maintenance.jpg',
//     serviceType: ServiceType.MAINTENANCE,
//     intro: 'Texas Best Sprinklers provides professional irrigation maintenance in Watauga to keep your sprinkler system operating at peak efficiency.',
//     benefits: [],
//     services: [],
//     faqs: [],
//     testimonial: {
//       quote: "Their regular maintenance service has kept our sprinkler system running flawlessly for years.",
//       author: "Chris W.",
//       location: "Watauga, TX",
//       rating: 5
//     },
//     updatedAt: '2025-04-15'
//   },
//   'benbrook': {
//     title: 'Professional Irrigation Maintenance in Benbrook, TX',
//     metaDescription: 'Expert irrigation maintenance services in Benbrook. Keep your sprinkler system operating efficiently year-round.',
//     heroImage: '/images/services/maintenance/benbrook-irrigation-maintenance.jpg',
//     serviceType: ServiceType.MAINTENANCE,
//     intro: 'Texas Best Sprinklers provides professional irrigation maintenance in Benbrook to keep your sprinkler system operating at peak efficiency.',
//     benefits: [],
//     services: [],
//     faqs: [],
//     testimonial: {
//       quote: "Their regular maintenance service has kept our sprinkler system running flawlessly for years.",
//       author: "Daniel B.",
//       location: "Benbrook, TX",
//       rating: 5
//     },
//     updatedAt: '2025-04-15'
//   },
//   'flower-mound': {
//     title: 'Professional Irrigation Maintenance in Flower Mound, TX',
//     metaDescription: 'Expert irrigation maintenance services in Flower Mound. Keep your sprinkler system operating efficiently year-round.',
//     heroImage: '/images/services/maintenance/flower-mound-irrigation-maintenance.jpg',
//     serviceType: ServiceType.MAINTENANCE,
//     intro: 'Texas Best Sprinklers provides professional irrigation maintenance in Flower Mound to keep your sprinkler system operating at peak efficiency.',
//     benefits: [],
//     services: [],
//     faqs: [],
//     testimonial: {
//       quote: "Their regular maintenance service has kept our sprinkler system running flawlessly for years.",
//       author: "Laura F.",
//       location: "Flower Mound, TX",
//       rating: 5
//     },
//     updatedAt: '2025-04-15'
//   },
//   'lewisville': {
//     title: 'Professional Irrigation Maintenance in Lewisville, TX',
//     metaDescription: 'Expert irrigation maintenance services in Lewisville. Keep your sprinkler system operating efficiently year-round.',
//     heroImage: '/images/services/maintenance/lewisville-irrigation-maintenance.jpg',
//     serviceType: ServiceType.MAINTENANCE,
//     intro: 'Texas Best Sprinklers provides professional irrigation maintenance in Lewisville to keep your sprinkler system operating at peak efficiency.',
//     benefits: [],
//     services: [],
//     faqs: [],
//     testimonial: {
//       quote: "Their regular maintenance service has kept our sprinkler system running flawlessly for years.",
//       author: "Eric L.",
//       location: "Lewisville, TX",
//       rating: 5
//     },
//     updatedAt: '2025-04-15'
//   },
//   'coppell': {
//     title: 'Professional Irrigation Maintenance in Coppell, TX',
//     metaDescription: 'Expert irrigation maintenance services in Coppell. Keep your sprinkler system operating efficiently year-round.',
//     heroImage: '/images/services/maintenance/coppell-irrigation-maintenance.jpg',
//     serviceType: ServiceType.MAINTENANCE,
//     intro: 'Texas Best Sprinklers provides professional irrigation maintenance in Coppell to keep your sprinkler system operating at peak efficiency.',
//     benefits: [],
//     services: [],
//     faqs: [],
//     testimonial: {
//       quote: "Their regular maintenance service has kept our sprinkler system running flawlessly for years.",
//       author: "Karen C.",
//       location: "Coppell, TX",
//       rating: 5
//     },
//     updatedAt: '2025-04-15'
//   }
//   'irving': {
//     title: 'Professional Irrigation Maintenance in Irving', Texas',   
//   'trophy-club': {
//     title: 'Professional Irrigation Maintenance in Trophy Club', Texas',
//   'roanoke': {
//     title: 'Professional Irrigation Maintenance in Roanoke', Texas',
//   'westlake': {
//     title: 'Professional Irrigation Maintenance in Westlake', Texas',
//   'azle': {
//     title: 'Professional Irrigation Maintenance in Azle', Texas',
//   'mineral-wells': {
//     title: 'Professional Irrigation Maintenance in Mineral Wells', Texas',
//   'annetta': {
//     title: 'Professional Irrigation Maintenance in Annetta', Texas',
//   'millsap': {
//     title: 'Professional Irrigation Maintenance in Millsap', Texas',
//   'peaster': {
//     title: 'Professional Irrigation Maintenance in Peaster', Texas',
//   'hudson-oaks': {
//     title: 'Professional Irrigation Maintenance in Hudson Oaks', Texas',
//   'willow-park': {
//     title: 'Professional Irrigation Maintenance in Willow Park', Texas',
//   'springtown': {
//     title: 'Professional Irrigation Maintenance in Springtown', Texas',
//   'cool': {
//     title: 'Professional Irrigation Maintenance in Cool', Texas',
  
//   // Brock city
//   'brock': {
//     title: 'Professional Irrigation Maintenance in Brock', Texas',
//     metaDescription: 'Expert sprinkler system maintenance services in Brock. Keep your irrigation system running efficiently year-round with our comprehensive maintenance plans.',
//     heroImage: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/e47a3d9b-1f15-4fc0-3f9c-a1ccd23d3400/public',
//     serviceType: ServiceType.MAINTENANCE',
//     intro: 'Texas Best Sprinklers provides Brock homeowners with comprehensive irrigation maintenance services designed to keep your sprinkler system running optimally throughout the year. Our preventative maintenance programs help you avoid costly repairs and ensure water efficiency.',
//     benefits: [
//       {
//         title: 'Prevent Costly Repairs',
//         description: 'Regular maintenance catches small issues before they become expensive problems.',
//         icon: 'shield'
//       }',
//       {
//         title: 'Water Conservation',
//         description: 'Properly maintained systems use up to 30% less water than neglected systems.',
//         icon: 'droplet'
//       }',
//       {
//         title: 'Extended System Life',
//         description: 'Regular maintenance can double the lifespan of your irrigation components.',
//         icon: 'clock'
//       }',
//       {
//         title: 'Healthier Landscape',
//         description: 'Consistent', even watering ensures your lawn and plants remain vibrant and healthy.',
//         icon: 'leaf'
//       }
//     ]',
//     services: [
//       {
//         title: 'Seasonal Maintenance',
//         description: 'Comprehensive maintenance services tailored for each season to keep your system operating at peak efficiency.',
//         image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/e47a3d9b-1f15-4fc0-3f9c-a1ccd23d3400/public',
//         features: [
//           'Spring system startup and inspection',
//           'Summer performance tune-ups',
//           'Fall winterization to prevent freeze damage',
//           'System efficiency analysis',
//           'Controller programming updates'
//         ]
//       }',
//       {
//         title: 'Preventative Maintenance',
//         description: 'Regular check-ups designed to identify and resolve small issues before they become major problems.',
//         image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/e47a3d9b-1f15-4fc0-3f9c-a1ccd23d3400/public',
//         features: [
//           'Complete system inspection',
//           'Sprinkler head cleaning and adjustment',
//           'Leak detection and repair',
//           'Valve inspection and maintenance',
//           'Pressure testing'
//         ]
//       }
//     ],
//     faqs: [
//       {
//         question: "How often should I have my irrigation system professionally maintained in Brock?",
//         answer: "In the Brock climate, we recommend at minimum a spring startup and fall winterization. For optimal performance, quarterly maintenance is ideal to address seasonal changes and ensure water conservation."
//       }',
//       {
//         question: "What's included in your Brock irrigation maintenance service?",
//         answer: "Our comprehensive maintenance includes adjusting sprinkler heads, checking for leaks, testing valve function, inspecting electrical connections, programming your controller for the season, and making recommendations for system improvements."
//       },
//       {
//         question: "Do you offer maintenance plans for Brock residents?",
//         answer: "Yes, we offer several maintenance plan options for Brock properties. Our most popular is the quarterly plan which includes four visits throughout the year to ensure optimal system performance through all seasons."
//       }
//     ]',
//     testimonial: {
//       quote: "Texas Best Sprinklers has maintained our irrigation system for years. They're always thorough, professional, and responsive. Our lawn has never looked better!",
//       author: "James K.",
//       location: "Brock",
//       rating: 5
//     }',
//     updatedAt: '2025-05-07'
//   }',

//   // Weatherford & Surrounding Cities
//   'weatherford': {
//     title: 'Professional Irrigation Maintenance in Weatherford', Texas',
//     metaDescription: 'Expert sprinkler system maintenance services in Weatherford. Keep your irrigation system running efficiently year-round with our comprehensive maintenance plans.',
//     heroImage: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/e47a3d9b-1f15-4fc0-3f9c-a1ccd23d3400/public',
//     serviceType: ServiceType.MAINTENANCE',
//     intro: 'Texas Best Sprinklers provides Weatherford homeowners with comprehensive irrigation maintenance services designed to keep your sprinkler system running optimally throughout the year. Our preventative maintenance programs help you avoid costly repairs and ensure water efficiency.',
//     benefits: [
//       {
//         title: 'Prevent Costly Repairs',
//         description: 'Regular maintenance catches small issues before they become expensive problems.',
//         icon: 'shield'
//       }',
//       {
//         title: 'Water Conservation',
//         description: 'Properly maintained systems use up to 30% less water than neglected systems.',
//         icon: 'droplet'
//       }',
//       {
//         title: 'Extended System Life',
//         description: 'Regular maintenance can double the lifespan of your irrigation components.',
//         icon: 'clock'
//       }',
//       {
//         title: 'Healthier Landscape',
//         description: 'Consistent', even watering ensures your lawn and plants remain vibrant and healthy.',
//         icon: 'leaf'
//       }
//     ]',
//     services: [
//       // Service details would go here
//     ]',
//     faqs: [
//       {
//         question: "How often should I have my irrigation system professionally maintained in Weatherford?",
//         answer: "In the Weatherford climate, we recommend at minimum a spring startup and fall winterization. For optimal performance, quarterly maintenance is ideal to address seasonal changes and ensure water conservation."
//       }
//     ]',
//     testimonial: {
//       quote: "Texas Best Sprinklers has maintained our irrigation system for years. They're always thorough, professional, and responsive. Our lawn has never looked better!",
//       author: "Sarah M.",
//       location: "Weatherford",
//       rating: 5
//     }',
//     updatedAt: '2025-04-22'
//   }',
//   'arlington': {
//     title: 'Professional Irrigation Maintenance in Arlington', Texas',
//     metaDescription: 'Expert sprinkler system maintenance services in Arlington. Keep your irrigation system running efficiently year-round with our comprehensive maintenance plans.',
//     heroImage: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/e47a3d9b-1f15-4fc0-3f9c-a1ccd23d3400/public',
//     serviceType: ServiceType.MAINTENANCE',
//     intro: 'Texas Best Sprinklers provides Arlington homeowners with comprehensive irrigation maintenance services designed to keep your sprinkler system running optimally throughout the year. Our preventative maintenance programs help you avoid costly repairs and ensure water efficiency.',
//     benefits: [
//       {
//         title: 'Prevent Costly Repairs',
//         description: 'Regular maintenance catches small issues before they become expensive problems.',
//         icon: 'shield'
//       }',
//       {
//         title: 'Water Conservation',
//         description: 'Properly maintained systems use up to 30% less water than neglected systems.',
//         icon: 'droplet'
//       }',
//       {
//         title: 'Extended System Life',
//         description: 'Regular maintenance can double the lifespan of your irrigation components.',
//         icon: 'clock'
//       }',
//       {
//         title: 'Healthier Landscape',
//         description: 'Consistent', even watering ensures your lawn and plants remain vibrant and healthy.',
//         icon: 'leaf'
//       }
//     ]',
//     services: [
//       // Service details would go here
//     ]',
//     faqs: [
//       {
//         question: 'How often should I have my irrigation system professionally maintained in Arlington?',
//         answer: 'In the Arlington climate, we recommend at minimum a spring startup and fall winterization. For optimal performance', quarterly maintenance is ideal to address seasonal changes and ensure water conservation.'
//       }
//     ]',
//     testimonial: {
//       quote: 'Very impressed with Texas Best Sprinklers maintenance service. They identified several issues with our older system and fixed them on the spot. Great service!',
//       author: 'David K.',
//       location: 'Arlington',
//       rating: 5
//     }',
//     updatedAt: '2025-04-22'
//   }',
//   'keller': {
//     title: 'Professional Irrigation Maintenance in Keller', Texas',
//     metaDescription: 'Expert sprinkler system maintenance services in Keller. Keep your irrigation system running efficiently year-round with our comprehensive maintenance plans.',
//     heroImage: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/e47a3d9b-1f15-4fc0-3f9c-a1ccd23d3400/public',
//     serviceType: ServiceType.MAINTENANCE',
//     intro: 'Texas Best Sprinklers provides Keller homeowners with comprehensive irrigation maintenance services designed to keep your sprinkler system running optimally throughout the year. Our preventative maintenance programs help you avoid costly repairs and ensure water efficiency.',
//     benefits: [
//       {
//         title: 'Prevent Costly Repairs',
//         description: 'Regular maintenance catches small issues before they become expensive problems.',
//         icon: 'shield'
//       }',
//       {
//         title: 'Water Conservation',
//         description: 'Properly maintained systems use up to 30% less water than neglected systems.',
//         icon: 'droplet'
//       }',
//       {
//         title: 'Extended System Life',
//         description: 'Regular maintenance can double the lifespan of your irrigation components.',
//         icon: 'clock'
//       }',
//       {
//         title: 'Healthier Landscape',
//         description: 'Consistent', even watering ensures your lawn and plants remain vibrant and healthy.',
//         icon: 'leaf'
//       }
//     ]',
//     services: [
//       // Service details would go here
//     ]',
//     faqs: [
//       {
//         question: 'How often should I have my irrigation system professionally maintained in Keller?',
//         answer: 'In the Keller climate, we recommend at minimum a spring startup and fall winterization. For optimal performance', quarterly maintenance is ideal to address seasonal changes and ensure water conservation.'
//       }
//     ],
//     testimonial: {
//       quote: "I've had Texas Best Sprinklers maintain my system for years. Their technicians are always on time, knowledgeable, and efficient. My lawn looks better than ever with proper irrigation.",
//       author: "Robert J.",
//       location: "Keller",
//       rating: 5
//     }',
//     updatedAt: '2025-04-22'
//   }',
//   'southlake': {
//     title: 'Professional Irrigation Maintenance in Southlake', Texas',
//     metaDescription: 'Expert sprinkler system maintenance services in Southlake. Keep your irrigation system running efficiently year-round with our comprehensive maintenance plans.',
//     heroImage: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/e47a3d9b-1f15-4fc0-3f9c-a1ccd23d3400/public',
//     serviceType: ServiceType.MAINTENANCE',
//     intro: 'Texas Best Sprinklers provides Southlake homeowners with comprehensive irrigation maintenance services designed to keep your sprinkler system running optimally throughout the year. Our preventative maintenance programs help you avoid costly repairs and ensure water efficiency.',
//     benefits: [
//       {
//         title: 'Prevent Costly Repairs',
//         description: 'Regular maintenance catches small issues before they become expensive problems.',
//         icon: 'shield'
//       }',
//       {
//         title: 'Water Conservation',
//         description: 'Properly maintained systems use up to 30% less water than neglected systems.',
//         icon: 'droplet'
//       }',
//       {
//         title: 'Extended System Life',
//         description: 'Regular maintenance can double the lifespan of your irrigation components.',
//         icon: 'clock'
//       }',
//       {
//         title: 'Healthier Landscape',
//         description: 'Consistent', even watering ensures your lawn and plants remain vibrant and healthy.',
//         icon: 'leaf'
//       }
//     ],
//     services: [
//       // Service details would go here
//     ]',
//     faqs: [
//       {
//         question: 'How often should I have my irrigation system professionally maintained in Southlake?',
//         answer: 'In the Southlake climate, we recommend at minimum a spring startup and fall winterization. For optimal performance', quarterly maintenance is ideal to address seasonal changes and ensure water conservation.'
//       }
//     ],
//     testimonial: {
//       quote: "Texas Best Sprinklers provides exceptional service. Their maintenance program has kept our irrigation system running perfectly, and their technicians always go above and beyond.",
//       author: "Jennifer L.",
//       location: "Southlake",
//       rating: 5
//     }',
//     updatedAt: '2025-04-22'
//   }',
//   'colleyville': {
//     title: 'Professional Irrigation Maintenance in Colleyville', Texas',
//     metaDescription: 'Expert sprinkler system maintenance services in Colleyville. Keep your irrigation system running efficiently year-round with our comprehensive maintenance plans.',
//     heroImage: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/e47a3d9b-1f15-4fc0-3f9c-a1ccd23d3400/public',
//     serviceType: ServiceType.MAINTENANCE',
//     intro: 'Texas Best Sprinklers provides Colleyville homeowners with comprehensive irrigation maintenance services designed to keep your sprinkler system running optimally throughout the year. Our preventative maintenance programs help you avoid costly repairs and ensure water efficiency.',
//     benefits: [
//       {
//         title: 'Prevent Costly Repairs',
//         description: 'Regular maintenance catches small issues before they become expensive problems.',
//         icon: 'shield'
//       }',
//       {
//         title: 'Water Conservation',
//         description: 'Properly maintained systems use up to 30% less water than neglected systems.',
//         icon: 'droplet'
//       }',
//       {
//         title: 'Extended System Life',
//         description: 'Regular maintenance can double the lifespan of your irrigation components.',
//         icon: 'clock'
//       }',
//       {
//         title: 'Healthier Landscape',
//         description: 'Consistent', even watering ensures your lawn and plants remain vibrant and healthy.',
//         icon: 'leaf'
//       }
//     ],
//     services: [
//       // Service details would go here
//     ]',
//     faqs: [
//       {
//         question: 'How often should I have my irrigation system professionally maintained in Colleyville?',
//         answer: 'In the Colleyville climate, we recommend at minimum a spring startup and fall winterization. For optimal performance', quarterly maintenance is ideal to address seasonal changes and ensure water conservation.'
//       }
//     ],
//     testimonial: {
//       quote: "I've been using Texas Best Sprinklers for over 5 years now, and they are consistently excellent. Their maintenance program keeps my system running perfectly year-round.",
//       author: "Michael P.",
//       location: "Colleyville",
//       rating: 5
//     }',
//     updatedAt: '2025-04-22'
//   }',
//   'grapevine': {
//     title: 'Professional Irrigation Maintenance in Grapevine', Texas',
//     metaDescription: 'Expert sprinkler system maintenance services in Grapevine. Keep your irrigation system running efficiently year-round with our comprehensive maintenance plans.',
//     heroImage: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/e47a3d9b-1f15-4fc0-3f9c-a1ccd23d3400/public',
//     serviceType: ServiceType.MAINTENANCE',
//     intro: 'Texas Best Sprinklers provides Grapevine homeowners with comprehensive irrigation maintenance services designed to keep your sprinkler system running optimally throughout the year. Our preventative maintenance programs help you avoid costly repairs and ensure water efficiency.',
//     benefits: [
//       {
//         title: 'Prevent Costly Repairs',
//         description: 'Regular maintenance catches small issues before they become expensive problems.',
//         icon: 'shield'
//       }',
//       {
//         title: 'Water Conservation',
//         description: 'Properly maintained systems use up to 30% less water than neglected systems.',
//         icon: 'droplet'
//       }',
//       {
//         title: 'Extended System Life',
//         description: 'Regular maintenance can double the lifespan of your irrigation components.',
//         icon: 'clock'
//       }',
//       {
//         title: 'Healthier Landscape',
//         description: 'Consistent', even watering ensures your lawn and plants remain vibrant and healthy.',
//         icon: 'leaf'
//       }
//     ],
//     services: [
//       // Service details would go here
//     ]',
//     faqs: [
//       {
//         question: 'How often should I have my irrigation system professionally maintained in Grapevine?',
//         answer: 'In the Grapevine climate, we recommend at minimum a spring startup and fall winterization. For optimal performance', quarterly maintenance is ideal to address seasonal changes and ensure water conservation.'
//       }
//     ],
//     testimonial: {
//       quote: "Texas Best Sprinklers has been maintaining our irrigation system for the past three years. Their service is always prompt, professional, and thorough. Highly recommended!",
//       author: "Jennifer K.",
//       location: "Grapevine",
//       rating: 5
//     }',
//     updatedAt: '2025-05-05'
//   }',
//   'aledo': {
//     title: 'Professional Irrigation Maintenance in Aledo', Texas',
//     metaDescription: 'Expert sprinkler system maintenance services in Aledo. Keep your irrigation system running efficiently year-round with our comprehensive maintenance plans.',
//     heroImage: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/e47a3d9b-1f15-4fc0-3f9c-a1ccd23d3400/public',
//     serviceType: ServiceType.MAINTENANCE',
//     intro: 'Texas Best Sprinklers provides Aledo homeowners with comprehensive irrigation maintenance services designed to keep your sprinkler system running optimally throughout the year. Our preventative maintenance programs help you avoid costly repairs and ensure water efficiency.',
//     benefits: [
//       {
//         title: 'Prevent Costly Repairs',
//         description: 'Regular maintenance catches small issues before they become expensive problems.',
//         icon: 'shield'
//       }',
//       {
//         title: 'Water Conservation',
//         description: 'Properly maintained systems use up to 30% less water than neglected systems.',
//         icon: 'droplet'
//       }',
//       {
//         title: 'Extended System Life',
//         description: 'Regular maintenance can double the lifespan of your irrigation components.',
//         icon: 'clock'
//       }',
//       {
//         title: 'Healthier Landscape',
//         description: 'Consistent', even watering ensures your lawn and plants remain vibrant and healthy.',
//         icon: 'leaf'
//       }
//     ],
//     services: [
//       // Service details would go here
//     ],
//     faqs: [
//       {
//         question: 'How often should I have my irrigation system professionally maintained in Aledo?',
//         answer: 'In the Aledo climate, we recommend at minimum a spring startup and fall winterization. For optimal performance', quarterly maintenance is ideal to address seasonal changes and ensure water conservation.'
//       }
//     ],
//     testimonial: {
//       quote: "We're extremely happy with Texas Best Sprinklers' maintenance services. They've kept our irrigation system running perfectly through every season.",
//       author: "Emily R.",
//       location: "Aledo",
//       rating: 5
//     }',
//     updatedAt: '2025-04-22'
//   }
// };

// export default maintenanceServiceData;
