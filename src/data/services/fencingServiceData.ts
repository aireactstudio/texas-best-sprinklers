import { ServiceContent, ServiceType } from '../types/serviceTypes';

/**
 * Fencing service data for each location
 */
export const fencingServiceData: Record<string, ServiceContent> = {
  'fort-worth': {
    title: 'Professional Fencing Services in Fort Worth, Texas',
    metaDescription: 'Expert fence installation, repair, and design services in Fort Worth. Choose from vinyl, wood, aluminum, chain link, or composite materials for your residential or commercial property.',
    heroImage: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/d03ac5c4-6c52-4aa9-33a4-f81f5ebe8400/public',
    serviceType: ServiceType.FENCING,
    intro: "Texas Best Sprinklers provides Fort Worth homeowners with professional fencing solutions designed to enhance your property's security, privacy, and curb appeal. Our custom fence designs and quality installations add value to your home while meeting your specific needs.",
    benefits: [
      {
        title: 'Enhanced Property Security',
        description: 'A quality fence provides a secure boundary for your property, keeping children and pets safe while deterring unwanted visitors.',
        icon: 'shield'
      },
      {
        title: 'Increased Privacy',
        description: 'Create a private sanctuary in your yard with fencing solutions that shield your outdoor living areas from neighbors and passersby.',
        icon: 'eye-off'
      },
      {
        title: 'Added Property Value',
        description: 'A professionally installed fence can increase your Fort Worth property value by up to 15% and improve curb appeal.',
        icon: 'trending-up'
      },
      {
        title: 'Weather Resistance',
        description: 'Our fences are built to withstand Texas heat, storms, and seasonal changes with minimal maintenance requirements.',
        icon: 'cloud'
      }
    ],
    services: [
      {
        title: 'Wood Fencing',
        description: 'Classic and versatile wood fencing solutions that combine natural beauty with durability. We offer cedar, pine, and other wood varieties in multiple styles.',
        image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/d9f93cf8-ecf7-449c-2ece-cfa62e9c3000/public',
        features: [
          'Cedar and pressure-treated pine options',
          'Custom height and picket styles',
          'Decorative post caps and finials',
          'Staining and sealing services',
          'Gates and hardware options'
        ]
      },
      {
        title: 'Vinyl & Composite Fencing',
        description: 'Low-maintenance, long-lasting vinyl and composite fencing solutions that resist fading, cracking, and warping while maintaining their appearance year after year.',
        image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/b2953775-7d38-4f08-9532-b0af3dcccb00/public',
        features: [
          'Lifetime material warranties',
          'Never needs painting or staining',
          'Resistant to insects and rot',
          'Multiple colors and styles',
          'Recyclable and eco-friendly options'
        ]
      },
      {
        title: 'Ornamental & Aluminum Fencing',
        description: 'Elegant ornamental and aluminum fencing that provides security without sacrificing visibility or style. Perfect for creating a sophisticated boundary.',
        image: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/b2953775-7d38-4f08-9532-b0af3dcccb00/public',
        features: [
          'Powder-coated for durability',
          'Multiple styles and height options',
          'Compatible with automatic gates',
          'Minimal maintenance requirements',
          'Custom decorative elements available'
        ]
      }
    ],
    pricing: {
      startingAt: '$25 per linear foot for basic wood fencing',
      factors: ['Material selection', 'Height and style', 'Gate requirements', 'Property terrain', 'Removal of existing fencing'],
      packages: [
        {
          name: 'Standard Wood',
          price: '$25-$35 per foot',
          features: [
            '6-foot cedar picket fence',
            'Standard post spacing',
            'One walk gate',
            'Basic post caps',
            'Natural finish'
          ]
        },
        {
          name: 'Premium Vinyl',
          price: '$45-$65 per foot',
          features: [
            '6-foot privacy vinyl fence',
            'Reinforced posts',
            'Decorative post caps',
            'One walk gate with hardware',
            'Lifetime warranty'
          ],
          isPopular: true
        },
        {
          name: 'Ornamental Aluminum',
          price: '$75-$95 per foot',
          features: [
            '4-foot ornamental fence',
            'Powder-coated finish',
            'Decorative finials',
            'Custom gate with keypad access',
            '20-year warranty'
          ]
        }
      ]
    },
    faqs: [
      {
        question: 'How long does fence installation take in Fort Worth?',
        answer: 'Most residential fence installations in Fort Worth are completed within 1-3 days, depending on the size and complexity of the project. Commercial projects may take 3-7 days. Weather conditions unique to Fort Worth can occasionally impact scheduling.'
      },
      {
        question: 'Do I need a permit to install a fence in Fort Worth?',
        answer: 'Yes, Fort Worth typically requires permits for new fence installations or significant replacements. Our team handles all permitting requirements as part of our service, ensuring your fence meets local codes and HOA regulations if applicable.'
      },
      {
        question: 'What type of fence is best for the Texas climate?',
        answer: 'For the Fort Worth climate, we often recommend cedar, vinyl, or aluminum fencing. Cedar offers natural resistance to our climate when properly sealed. Vinyl and aluminum require virtually no maintenance and withstand sun exposure and temperature fluctuations extremely well.'
      },
      {
        question: 'How long will my new fence last?',
        answer: 'With proper maintenance, wood fences typically last 15-20 years in the Fort Worth climate. Vinyl fencing can last 30+ years, while aluminum can last 50+ years with minimal maintenance. We offer material warranties ranging from 15 years to lifetime depending on the product.'
      },
      {
        question: 'Can you match my neighbor\'s existing fence?',
        answer: 'Yes, we can typically match the style, height, and finish of existing fences in your neighborhood. During our consultation, we\'ll take measurements and photos to ensure a seamless transition between your new fence and existing structures.'
      }
    ],
    testimonial: {
      quote: "Texas Best Sprinklers installed our beautiful cedar fence and we couldn't be happier. Their team was professional, completed the work ahead of schedule, and left our property spotless. The fence has significantly increased our backyard privacy.",
      author: "James M.",
      location: "Fort Worth",
      rating: 5
    },
    updatedAt: '2024-12-15'
  }
  // Additional locations can be added here following the same pattern
};

export default fencingServiceData;
