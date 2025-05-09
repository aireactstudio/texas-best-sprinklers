import { FAQ } from '@/data/types/serviceTypes';

/**
 * Common FAQs for irrigation repair services
 * These can be customized per location by replacing [LOCATION] with the specific city name
 */
export const commonFAQs: FAQ[] = [
  {
    question: 'How do I know if my sprinkler system needs repair?',
    answer: 'Common signs include dry spots in your lawn, unusually high water bills, visibly damaged sprinkler heads, water pooling in certain areas, reduced water pressure, zones not activating, or controller malfunctions. If you notice any of these issues, it\'s best to schedule a repair service.'
  },
  {
    question: 'Can you repair any brand of sprinkler system?',
    answer: 'Yes, our technicians are trained to repair all major brands of irrigation equipment including Rainbird, Hunter, Toro, Weathermatic, Irritrol, and others. We carry a wide range of replacement parts on our service vehicles to complete most repairs in a single visit.'
  },
  {
    question: 'How long does a typical irrigation repair take?',
    answer: 'Most repairs can be completed in 1-2 hours, though more complex issues like main line leaks or controller replacements may take 2-4 hours. We aim to complete all repairs in a single visit whenever possible.'
  },
  {
    question: 'Do you offer warranties on irrigation repairs?',
    answer: 'Yes, we provide a 90-day warranty on most repair work and replacement parts. For certain major components, manufacturer warranties may extend coverage up to 2-5 years.'
  },
  {
    question: 'How can I prevent future irrigation system problems?',
    answer: 'Regular maintenance is key to preventing irrigation issues. We recommend a professional system check-up twice a year (spring and fall), adjusting your watering schedule seasonally, promptly addressing minor issues before they become major problems, and winterizing your system before freezing temperatures arrive.'
  }
];

/**
 * Creates location-specific FAQs by replacing placeholders with the city name
 * @param cityName The name of the city to customize FAQs for
 * @returns An array of FAQs customized for the specified location
 */
export const getLocationFAQs = (cityName: string): FAQ[] => {
  // Create a copy of the common FAQs
  const locationFAQs: FAQ[] = JSON.parse(JSON.stringify(commonFAQs));
  
  // Add a location-specific FAQ about response time
  locationFAQs.unshift({
    question: `How quickly can you repair my irrigation system in ${cityName}?`,
    answer: `We typically respond to ${cityName} repair requests within 24-48 hours. For emergency repairs involving major leaks or water loss, we offer same-day service when available. Most repairs can be completed in a single visit.`
  });
  
  // Add a location-specific FAQ about service fees
  locationFAQs.push({
    question: `What is your service call fee in ${cityName}?`,
    answer: `Our standard service call fee for ${cityName} is $95, which includes system diagnostics and up to 30 minutes of labor. If additional repairs are needed, we provide a detailed estimate before proceeding with any work.`
  });
  
  return locationFAQs;
};

export default getLocationFAQs;
