import { generateLightingArticle, LightingArticleData } from '../templates/lightingTemplate';

// Colleyville specific article data
const colleyvilleArticleData: LightingArticleData = {
  location: 'Colleyville',
  introduction: "Elevate your Colleyville property with professional landscape lighting that showcases your home's refined architectural details while enhancing security and outdoor living enjoyment. Colleyville's prestigious homes in neighborhoods like Westmont, Whittington, and Clairemont deserve sophisticated lighting solutions that complement their elegant designs. Texas Best Sprinklers creates custom lighting systems that accentuate your property's distinctive features, extend your outdoor living possibilities, and provide essential security throughout Colleyville's upscale communities. Our premium, energy-efficient lighting solutions are specifically engineered for North Texas conditions and professionally installed to provide years of reliable performance while meeting Colleyville's exacting aesthetic standards.",
  
  lightingTypes: [
    {
      title: 'Architectural Accent Lighting',
      content: "Showcase your Colleyville home's distinctive features with strategically placed uplighting and spotlighting. Our architectural lighting enhances stone facades, columns, entryways, and custom details that define Colleyville's elegant residences.",
      benefits: [
        "Highlights signature architectural elements and premium materials",
        "Creates dramatic shadows and dimension on facades",
        "Enhances your home's most distinctive design features",
        "Establishes an impressive evening presence",
        "Custom-designed for your specific architectural style"
      ]
    },
    {
      title: 'Estate Path & Walkway Lighting',
      content: "Guide visitors elegantly through your Colleyville property with refined fixtures that illuminate walkways, garden paths, and steps. Our path lighting solutions use premium fixtures positioned to create balanced illumination that enhances both safety and landscape aesthetics.",
      benefits: [
        'Creates safe navigation through expansive landscapes',
        'Prevents accidents on steps and elevation changes',
        'Defines garden rooms and landscape transitions',
        'Available in luxury styles to complement Colleyville estates',
        'Energy-efficient LEDs minimize operating costs'
      ]
    },
    {
      title: 'Landscape Feature Lighting',
      content: "Showcase your property's mature trees, designer gardens, water features, and specimen plantings with professional illumination. Our strategic placement creates dramatic nighttime landscapes that extend the visual enjoyment of Colleyville's premium outdoor spaces.",
      benefits: [
        'Transforms manicured landscapes into nighttime showpieces',
        'Highlights specimen trees and premium plantings',
        'Creates artistic shadows and natural focal points',
        'Showcases fountains and garden structures',
        'Extends enjoyment of outdoor spaces into evening hours'
      ]
    },
    {
      title: 'Entertainment Area Lighting',
      content: "Enhance your lifestyle with sophisticated lighting for outdoor living areas, including patios, outdoor kitchens, pools, and conversation areas. Our entertainment area lighting creates inviting spaces for elegant evening gatherings throughout Colleyville's outdoor living season.",
      benefits: [
        'Creates perfect atmosphere for luxury outdoor entertaining',
        'Extends usability of premium outdoor living spaces',
        'Enhances safety around pools and water features',
        'Provides task lighting for outdoor cooking areas',
        'Multiple control options for different entertainment scenarios'
      ]
    },
    {
      title: 'Refined Security Lighting',
      content: "Protect your Colleyville investment with discreet security lighting that enhances safety without compromising aesthetics. Our security solutions eliminate vulnerable areas while preserving the elegant character of your property's evening appearance.",
      benefits: [
        'Eliminates dark areas that compromise security',
        'Protects entries and vulnerable access points',
        'Creates a welcoming approach while enhancing safety',
        'Smart controls allow programming for various security scenarios',
        'Integrates with home automation and security systems'
      ]
    }
  ],
  
  applicationAreas: [
    {
      title: 'Luxury Estate Illumination',
      icon: 'home',
      content: "Colleyville's signature estates in communities like Whittington and Old Grove feature imposing facades and architectural complexity that require comprehensive lighting plans. Our designs create balanced illumination that reveals architectural elegance while establishing a sophisticated evening presence."
    },
    {
      title: 'Traditional & European-Inspired Homes',
      icon: 'sun',
      content: "Many Colleyville residences showcase traditional or European-inspired architecture with distinctive stone facades, arched features, and sophisticated detailing that transform dramatically with our specialized lighting techniques designed for these elegant styles."
    },
    {
      title: 'Transitional Luxury Homes',
      icon: 'layers',
      content: "Colleyville's newer luxury homes often feature transitional designs with clean lines, mixed materials, and sophisticated details that benefit from our modern lighting approaches designed to accentuate these refined architectural elements."
    },
    {
      title: 'Resort-Style Outdoor Living',
      icon: 'umbrella',
      content: "Colleyville properties frequently include comprehensive outdoor living environments with multiple entertainment zones, pools, and landscape features that require integrated lighting plans to create cohesive evening ambiance across these complex spaces."
    },
    {
      title: 'Mature Tree Canopy Properties',
      icon: 'tree',
      content: "Colleyville's distinctive tree canopy and mature landscaping create unique lighting opportunities where strategic illumination can showcase these natural assets to create dramatic overhead effects and impressive natural focal points throughout the property."
    }
  ],
  
  installationProcess: [
    {
      title: 'Comprehensive Design Consultation',
      content: "We begin with an in-depth discussion of your Colleyville property's unique architectural style, your aesthetic preferences, and how you use your outdoor spaces. This consultation includes a thorough evaluation of architectural features, landscape elements, and existing electrical infrastructure."
    },
    {
      title: 'Custom Lighting Plan Development',
      content: "Based on our consultation, we create a detailed lighting design specifically for your Colleyville property, identifying key elements to highlight, optimal fixture placement, and technical specifications. This customized plan addresses both aesthetic goals and practical considerations."
    },
    {
      title: 'Premium Fixture Selection',
      content: "We help you select professional-grade fixtures appropriate for your Colleyville home's architectural style and North Texas climate. Our recommendations prioritize both performance and appearance, with premium options that complement your property's level of quality."
    },
    {
      title: 'Expert Installation',
      content: "Our experienced technicians install your lighting system with meticulous attention to detail. From proper wiring and connection methods to precise fixture positioning, we follow industry best practices while respecting your landscape and property investment."
    },
    {
      title: 'System Programming & Orientation',
      content: "After installation, we program your control systems, adjust lighting angles for optimal effect, and provide a complete orientation on system operation. This ensures you can easily manage your new lighting system and make adjustments for different occasions and seasons."
    }
  ],
  
  benefits: [
    {
      title: 'Enhanced Property Investment',
      icon: 'trending-up',
      content: "Professional landscape lighting significantly increases your Colleyville home's curb appeal and perceived value. In Colleyville's premium real estate market, sophisticated lighting sets distinguished properties apart and is considered an essential element of luxury homes.",
      stat: '20-25%',
      statLabel: 'Potential ROI on lighting investment'
    },
    {
      title: 'Discreet Security',
      icon: 'shield',
      content: "Strategic illumination eliminates vulnerable areas around your property while maintaining aesthetic elegance. This balanced approach is particularly valuable in Colleyville's residential communities, enhancing safety without compromising beauty.",
      stat: '60%',
      statLabel: 'Potential security incident reduction'
    },
    {
      title: 'Extended Outdoor Lifestyle',
      icon: 'sun',
      content: "Colleyville's climate and outdoor-focused lifestyle benefit from lighting that extends your usable hours well after sunset. This effectively expands your living space and enhances your enjoyment of premium outdoor environments throughout the evening.",
      stat: '4-6 hrs',
      statLabel: 'Additional outdoor use daily'
    },
    {
      title: 'Refined Aesthetic Presentation',
      icon: 'eye',
      content: "Professional lighting reveals your Colleyville home's architectural excellence and landscape design in ways daylight cannot, creating dramatic shadows, highlighting textures, and establishing a sophisticated evening presence worthy of your property investment.",
      stat: '100%',
      statLabel: 'Enhancement of nighttime curb appeal'
    }
  ],
  
  maintenanceTips: [
    {
      title: 'Seasonal Lighting Adjustment',
      content: "As plants grow and seasons change, periodically adjust lighting fixtures to maintain optimal illumination patterns. This is particularly important for Colleyville's established landscapes where growth can quickly alter lighting effects."
    },
    {
      title: 'Premium Fixture Maintenance',
      content: "Clean fixture lenses quarterly to remove dust, pollen, and debris that accumulate in Colleyville's environment. This simple maintenance step preserves fixture appearance and maintains maximum illumination quality."
    },
    {
      title: 'Comprehensive System Inspection',
      content: "Schedule annual professional inspection of your entire lighting system to verify optimal performance of transformers, wiring, connections, and fixtures. This preventive approach maintains system integrity and identifies issues before they affect performance."
    },
    {
      title: 'Seasonal Programming Updates',
      content: "Adjust timer settings quarterly to match seasonal sunset times, ensuring your lighting activates at the optimal time throughout the year. Many Colleyville homeowners also program special settings for holidays and entertainment seasons."
    },
    {
      title: 'Technology Upgrades',
      content: "Periodically review new lighting technology options with your lighting professional to incorporate advancements that enhance control options, energy efficiency, or lighting effects throughout your Colleyville property."
    }
  ],
  
  testimonial: {
    name: "Morrison Family",
    location: "Westmont",
    quote: "The lighting design Texas Best Sprinklers created for our Colleyville home has transformed both the appearance and functionality of our property. The system highlights our home's architectural features beautifully while making our outdoor spaces more usable and secure. The quality of their work and materials is exceptional.",
    stars: 5
  },
  
  conclusion: "Texas Best Sprinklers brings specialized expertise in Colleyville's distinctive architectural styles and premium landscape characteristics to every lighting project we undertake. Our design approach considers your specific neighborhood context—whether you're in Westmont, Whittington, Clairemont, or another of Colleyville's fine communities—to create lighting that enhances your property's unique features. We use professional-grade fixtures selected for both performance and aesthetic quality, ensuring they complement your home's architectural excellence while providing reliable performance in North Texas conditions. Our installation teams work with meticulous attention to detail, respecting your property investment with careful installation practices and clean, professional wiring techniques. From initial consultation through final programming, we provide attentive service focused on creating lighting worthy of Colleyville's finest properties. Let us illuminate your Colleyville home with lighting that enhances its architectural beauty, security, and functionality throughout the evening hours."
};

// Generate the article HTML
const colleyvilleArticleHtml = generateLightingArticle(colleyvilleArticleData);

// Export only the HTML content string, not the whole object
export default colleyvilleArticleHtml.content;
