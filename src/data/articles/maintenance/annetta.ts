import { generateMaintenanceArticle, MaintenanceArticleData } from '../templates/maintenanceTemplate';

// Annetta specific article data
const annettaArticleData: MaintenanceArticleData = {
  location: 'Annetta',
  introduction: "Ensure your Annetta irrigation system performs at its best year-round with professional maintenance services from Texas Best Sprinklers. Annetta's rural character and spacious properties feature diverse landscapes that require specialized maintenance approaches to keep sprinkler systems operating efficiently throughout all seasons. Our comprehensive maintenance programs are designed to optimize water usage, prevent costly repairs, and extend the life of your irrigation system. With increasing focus on water conservation in Parker County, properly maintained systems are essential for both regulatory compliance and environmental responsibility. Our experienced technicians understand Annetta's specific soil conditions, water quality factors, and common system challenges, allowing us to provide targeted maintenance solutions for residential properties throughout the area.",
  
  maintenanceServices: [
    {
      title: 'Seasonal System Inspection',
      content: "Our comprehensive inspection service evaluates all components of your Annetta irrigation system to identify potential issues before they become costly problems. We thoroughly examine controllers, valves, sprinkler heads, and water pressure to ensure optimal performance.",
      benefits: [
        'Complete evaluation of all system components',
        'Early identification of potential failures',
        'Adjustment of coverage patterns for optimal efficiency',
        'Controller programming verification and updates',
        'Detailed report of system condition and recommendations'
      ]
    },
    {
      title: 'Spring System Activation',
      content: "Prepare your irrigation system for Annetta's growing season with our professional spring startup service. We carefully pressurize your system, inspect for winter damage, and make necessary adjustments to ensure proper operation throughout the watering season.",
      benefits: [
        'Gradual system pressurization to prevent pipe damage',
        'Inspection for leaks and winter damage',
        'Cleaning and adjustment of sprinkler heads',
        'Controller programming for spring watering needs',
        'Verification of proper zone coverage and operation'
      ]
    },
    {
      title: 'Mid-Season Performance Tuning',
      content: "Keep your system operating at peak efficiency during Annetta's hot summer months with our mid-season adjustment service. We fine-tune your system to address changing landscape needs and maximize water conservation during peak demand periods.",
      benefits: [
        'Adjustment of sprinkler heads for optimal coverage',
        'Nozzle cleaning and replacement as needed',
        'Controller programming updates for summer conditions',
        'System pressure optimization',
        'Water conservation recommendations'
      ]
    },
    {
      title: 'Fall Winterization Service',
      content: "Protect your irrigation investment from Annetta's winter freezes with our thorough winterization service. We properly remove water from all system components to prevent freeze damage and prepare your system for its dormant period.",
      benefits: [
        'Complete system water removal using compressed air',
        'Controller programming for winter mode',
        'Insulation recommendations for exposed components',
        'Backflow prevention device protection',
        'Main water shut-off verification'
      ]
    },
    {
      title: 'Preventative Maintenance Plans',
      content: "Ensure year-round performance with our comprehensive maintenance plans designed specifically for Annetta properties. Our scheduled service visits throughout the year keep your system operating efficiently while preventing costly emergency repairs.",
      benefits: [
        'Priority scheduling for all service visits',
        'Discounted repair services when needed',
        'Automatic scheduling of seasonal services',
        'Detailed documentation of all maintenance performed',
        'Personalized recommendations for system improvements'
      ]
    }
  ],
  
  applicationAreas: [
    {
      title: 'Rural Residential Properties',
      icon: 'home',
      content: "Annetta's spacious residential properties often have extensive landscaping and multiple irrigation zones that benefit from comprehensive maintenance approaches."
    },
    {
      title: 'Large Acreage Properties',
      icon: 'map',
      content: "Many Annetta properties feature larger lots that require zone-specific maintenance approaches to address varying landscape needs across expansive areas."
    },
    {
      title: 'Well Water Systems',
      icon: 'droplet',
      content: "Properties using well water for irrigation require specialized maintenance to address mineral content issues and ensure proper filtration and pressure regulation."
    },
    {
      title: 'Estate Properties',
      icon: 'layout',
      content: "Annetta's estate properties often feature sophisticated irrigation systems with multiple controllers and specialized components that benefit from expert maintenance."
    },
    {
      title: 'New Construction Homes',
      icon: 'tool',
      content: "Newer Annetta properties with recently installed irrigation systems require proper maintenance to ensure warranty compliance and establish optimal performance patterns."
    }
  ],
  
  maintenanceProcess: [
    {
      title: 'Initial System Assessment',
      content: "We begin with a thorough evaluation of your Annetta property's irrigation system, documenting current condition, identifying existing issues, and understanding your specific landscape requirements and watering goals."
    },
    {
      title: 'Customized Maintenance Plan',
      content: "Based on our assessment, we develop a maintenance plan tailored to your Annetta property's specific needs, considering local soil conditions, plant materials, exposure factors, and seasonal requirements."
    },
    {
      title: 'Scheduled Service Implementation',
      content: "Our technicians perform all scheduled maintenance services according to your plan, with careful attention to detail and thorough documentation of all work performed and system conditions observed."
    },
    {
      title: 'System Optimization',
      content: "During each visit, we make necessary adjustments to improve system performance, including head alignment, pressure regulation, controller programming, and coverage pattern refinement."
    },
    {
      title: 'Ongoing Monitoring & Recommendations',
      content: "We continuously evaluate your system's performance and provide recommendations for improvements, upgrades, or modifications that could enhance efficiency or address changing landscape needs."
    }
  ],
  
  benefits: [
    {
      title: 'Significant Water Savings',
      icon: 'droplet',
      content: "Professional maintenance ensures your Annetta irrigation system uses water efficiently, eliminating waste from leaks, overspray, and improper scheduling. This conservation is particularly important for properties with larger landscapes and multiple irrigation zones.",
      stat: '20-50%',
      statLabel: 'Potential water savings'
    },
    {
      title: 'Extended System Lifespan',
      icon: 'clock',
      content: "Regular professional maintenance significantly extends the useful life of your irrigation system components. Preventative care helps avoid the premature replacement of controllers, valves, pipes, and sprinkler heads.",
      stat: '5-10 yrs',
      statLabel: 'Additional system lifespan'
    },
    {
      title: 'Healthier Landscape',
      icon: 'sun',
      content: "Properly maintained irrigation systems provide optimal watering for Annetta landscapes, promoting deeper root growth, reducing plant stress, and creating more drought-resistant turf and plantings.",
      stat: '85%',
      statLabel: 'Improvement in plant health'
    },
    {
      title: 'Reduced Repair Costs',
      icon: 'dollar-sign',
      content: "Regular maintenance identifies and addresses minor issues before they develop into major system failures, significantly reducing emergency repair costs and preventing landscape damage from irrigation malfunctions.",
      stat: '70%',
      statLabel: 'Reduction in emergency repairs'
    }
  ],
  
  seasonalTips: [
    {
      title: 'Spring Maintenance (March-April)',
      content: "As Annetta emerges from winter, have your system professionally activated to prevent damage. Check for pipes or heads damaged during freeze events, clean nozzles of debris, and adjust your controller for spring watering requirements while following seasonal watering guidelines."
    },
    {
      title: 'Summer Maintenance (May-August)',
      content: "During Annetta's hot summer months, inspect your system monthly for clogged nozzles and misaligned heads. Adjust run times based on rainfall and temperature, and consider adding a smart controller to automatically adjust to weather conditions and conserve water during peak demand periods."
    },
    {
      title: 'Fall Maintenance (September-October)',
      content: "As temperatures moderate, reduce watering frequency and duration. Check for any summer damage to components, address drainage issues before winter, and adjust sprinkler heads that may have shifted during the growing season."
    },
    {
      title: 'Winter Preparation (November)',
      content: "Before Annetta's first freeze, have your system professionally winterized. Ensure all water is blown from pipes and components, insulate exposed elements, and set controllers to winter mode or rain shutdown to prevent accidental activation during freezing temperatures."
    },
    {
      title: 'Off-Season Monitoring (December-February)',
      content: "Even during dormant periods, periodically check system components for damage, particularly after extreme weather events. Keep controller backup batteries fresh, and plan for any system upgrades before the next watering season begins."
    }
  ],
  
  testimonial: {
    name: "Johnson Family",
    location: "Annetta",
    quote: "We've used Texas Best Sprinklers for our seasonal maintenance for two years now, and the difference in our landscape is remarkable. Their technicians are always professional, thorough, and knowledgeable about our specific system. The water savings alone have more than paid for the maintenance plan, and we haven't had a single system failure since starting their service.",
    stars: 5
  },
  
  conclusion: "Texas Best Sprinklers brings specialized expertise in Annetta's diverse irrigation needs to every maintenance service we provide. Our technicians understand the unique challenges of maintaining systems in Annetta's varied soil conditions and water sources, allowing us to optimize your system for both performance and efficiency. We use professional-grade tools and techniques to ensure your system operates at peak efficiency throughout all seasons. Our maintenance programs are designed to provide worry-free operation while maximizing water conservation and system longevity. From spring activation through winterization, we provide comprehensive care that protects your irrigation investment and keeps your landscape healthy and beautiful. Our Annetta clients appreciate our attention to detail, consistent communication, and proactive approach to system care. Let us help you maintain your irrigation system with professional service that ensures reliable performance season after season."
};

// Generate the article HTML
const annettaArticleHtml = generateMaintenanceArticle(annettaArticleData);

// Export only the HTML content string, not the whole object
export default annettaArticleHtml.content;
