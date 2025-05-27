import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';

// Default service data for Sprinkler Repair
const sprinklerRepairData: ServiceContent = {
  title: 'Professional Sprinkler Repair Services in Texas',
  metaDescription: 'Expert sprinkler repair services in Fort Worth and surrounding areas. Fast response times, skilled technicians, and competitive rates for all sprinkler system issues.',
  heroImage: '/assets/images/optimized/Sprinkler-Repair.png',
  serviceType: ServiceType.SPRINKLER_REPAIR,
  intro: 'Texas Best Sprinklers provides expert sprinkler repair services for residential and commercial properties throughout the Fort Worth area. Our skilled technicians diagnose and fix all types of sprinkler system issues, from broken heads and leaks to valve problems and controller malfunctions.',
  benefits: [
    {
      title: 'Fast Response',
      description: 'Our technicians respond quickly to repair requests, often providing same-day service for urgent repairs.',
      icon: 'clock'
    },
    {
      title: 'Skilled Technicians',
      description: 'Our repair team has extensive training and experience with all major sprinkler system brands and components.',
      icon: 'user'
    },
    {
      title: 'Quality Parts',
      description: 'We use only premium replacement parts that ensure reliable performance and longer system life.',
      icon: 'shield'
    },
    {
      title: 'Comprehensive Service',
      description: 'We diagnose and repair all sprinkler system issues, from simple fixes to complex problems.',
      icon: 'check'
    },
    {
      title: 'Warranty Protection',
      description: 'All our repair work is backed by a satisfaction guarantee and warranty on parts and labor.',
      icon: 'star'
    }
  ],
  services: [
    {
      title: 'Broken Sprinkler Head Repair',
      description: 'Our technicians quickly repair or replace broken, leaking, or clogged sprinkler heads to ensure proper water distribution across your lawn.',
      features: [
        'Pop-up head replacement',
        'Nozzle cleaning and adjustment',
        'Spray pattern optimization',
        'Impact and rotor head repair',
        'Head height adjustments'
      ]
    },
    {
      title: 'Leak Detection & Repair',
      description: 'We use specialized equipment to locate and repair underground leaks that waste water and can damage your landscape.',
      features: [
        'Line break repairs',
        'Fitting replacement',
        'Pipe crack detection',
        'Pressure testing',
        'Trenchless repair methods'
      ]
    },
    {
      title: 'Valve & Controller Issues',
      description: 'We diagnose and fix valve and controller problems that prevent your system from operating correctly.',
      features: [
        'Solenoid replacement',
        'Valve diaphragm repair',
        'Controller programming',
        'Wire troubleshooting',
        'Smart controller upgrades'
      ]
    }
  ],
  pricing: {
    startingAt: 'From $85',
    factors: [
      'Type and complexity of the repair needed',
      'Number of components requiring repair',
      'Accessibility of the problem area',
      'Parts required for the repair'
    ],
    packages: [
      {
        name: 'Basic Repair',
        price: 'From $85',
        features: [
          'Up to 2 head replacements',
          'Minor leak repair',
          'Zone adjustment',
          'Basic system inspection',
          '30-day repair warranty'
        ]
      },
      {
        name: 'Standard Repair',
        price: 'From $150',
        features: [
          'Up to 5 head replacements',
          'Valve repair/replacement',
          'Controller programming',
          'System pressure adjustment',
          '90-day repair warranty'
        ],
        isPopular: true
      },
      {
        name: 'Comprehensive Repair',
        price: 'Custom Quote',
        features: [
          'Complete system diagnostics',
          'Multiple zone repairs',
          'Pipe and line repairs',
          'Controller replacement',
          '1-year repair warranty'
        ]
      }
    ]
  },
  faqs: [
    {
      question: 'How quickly can you repair my sprinkler system?',
      answer: 'We prioritize rapid response to service calls and can often provide same-day service for urgent repairs. For most standard repairs, we can typically schedule service within 1-2 business days.'
    },
    {
      question: 'What are the most common sprinkler problems you repair?',
      answer: 'The most common issues we repair include broken or clogged sprinkler heads, leaking pipes, malfunctioning valves, controller programming problems, and water pressure issues. Our technicians are equipped to handle all types of sprinkler system repairs.'
    },
    {
      question: 'Do you provide warranties on sprinkler repairs?',
      answer: 'Yes, all our repair work comes with a warranty. Basic repairs have a 30-day warranty, while more comprehensive repairs can include warranties of up to one year. We stand behind our work and use quality parts for all repairs.'
    },
    {
      question: 'How much does it cost to repair a sprinkler system?',
      answer: 'Repair costs vary depending on the specific issue and the extent of the repair needed. Simple fixes like replacing a sprinkler head start around $85, while more complex repairs involving valves or pipes will cost more. We always provide upfront pricing before beginning any work.'
    },
    {
      question: 'How do I know if my sprinkler system needs repair?',
      answer: 'Signs that your system needs repair include dry spots in your lawn, water pooling in certain areas, sprinkler heads that don\'t pop up or spray properly, zones that don\'t turn on, unusually high water bills, or visible leaks. If you notice any of these issues, it\'s best to call for professional repair.'
    }
  ],
  testimonial: {
    quote: "The technician from Texas Best Sprinklers arrived promptly and quickly identified the problem with our system. He fixed our broken sprinkler heads and a leaking valve, and even reprogrammed our controller at no extra charge. Excellent service at a fair price.",
    author: "Michael R.",
    location: "Fort Worth",
    rating: 5
  }
};

export default sprinklerRepairData;
