import { FAQ } from '@/data/types/serviceTypes';

/**
 * Common FAQs for outdoor lighting services
 */
export const commonFAQs: FAQ[] = [
  {
    question: 'How much does outdoor lighting installation cost?',
    answer: 'The cost varies based on the size of your property, system complexity, fixture quality, and additional features. A basic landscape lighting system typically starts around $2,000, while more comprehensive systems with smart controls and premium fixtures can range from $3,500 to $10,000+. We provide detailed, transparent quotes after our initial consultation.'
  },
  {
    question: 'What type of lighting fixtures do you use?',
    answer: 'We use professional-grade, solid brass and copper LED fixtures that are built to withstand harsh weather conditions. Our fixtures come with long warranties (typically 10-25 years on the housing) and are designed for energy efficiency, durability, and aesthetic appeal. We select fixtures based on your specific needs and the design requirements of your property.'
  },
  {
    question: 'How long does installation take?',
    answer: 'Most residential lighting installations can be completed in 1-2 days, depending on the system\'s complexity and size. Larger properties or more intricate designs may take 3-5 days. We work efficiently to minimize disruption to your property and schedule installations at your convenience.'
  },
  {
    question: 'How much maintenance do outdoor lighting systems require?',
    answer: 'LED lighting systems require minimal maintenance compared to traditional systems. Routine maintenance includes occasional cleaning of fixtures, checking connections, and repositioning lights that may have shifted. We recommend a professional check-up once a year. We offer maintenance plans that include regular inspections, bulb replacements, and system adjustments.'
  },
  {
    question: 'Will my landscaping be damaged during installation?',
    answer: 'We use minimally invasive installation techniques to protect your landscape. Our technicians are trained to work carefully around existing plants and hardscaping. We use specialized equipment for wire burial that minimizes disruption to your lawn and garden beds. Any minor disturbances are restored before we complete the job.'
  }
];

/**
 * Creates location-specific FAQs by customizing the common FAQs
 * @param cityName The name of the city to customize FAQs for
 * @returns An array of FAQs customized for the specified location
 */
export const getLocationFAQs = (cityName: string): FAQ[] => {
  // Create a copy of the common FAQs
  const locationFAQs: FAQ[] = JSON.parse(JSON.stringify(commonFAQs));
  
  // Add a location-specific FAQ about permits
  locationFAQs.push({
    question: `Do I need permits for outdoor lighting installation in ${cityName}?`,
    answer: `In ${cityName}, most residential landscape lighting installations don't require permits as they use low-voltage systems. However, certain commercial installations or extensive electrical work may require permits. As licensed professionals, we handle all necessary permitting as part of our service, ensuring your installation complies with ${cityName}'s local codes and requirements.`
  });
  
  // Add a location-specific FAQ about local service
  locationFAQs.push({
    question: `How soon can you start an outdoor lighting project in ${cityName}?`,
    answer: `As a local company serving ${cityName} and surrounding areas, we typically schedule consultations within 3-5 business days. After design approval, most installations can begin within 2-3 weeks, depending on the current schedule and season. We prioritize responsive service for our ${cityName} customers and can sometimes accommodate rush installations when needed.`
  });
  
  // Add a location-specific FAQ about dark sky compliance
  locationFAQs.push({
    question: `Are your lighting systems dark sky compliant for ${cityName} regulations?`,
    answer: `Yes, we design all our lighting systems in ${cityName} to comply with local dark sky ordinances. Our fixtures use directional lighting techniques to minimize light pollution and light trespass. We carefully select fixtures with appropriate shields and positioning to ensure the light is directed exactly where needed without creating unwanted glare or sky glow, while still providing the security and aesthetic benefits you desire.`
  });
  
  return locationFAQs;
};

export default commonFAQs;
