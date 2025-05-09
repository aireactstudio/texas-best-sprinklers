import { FAQ } from '@/data/types/serviceTypes';

/**
 * Common FAQs for sprinkler maintenance services
 */
export const commonFAQs: FAQ[] = [
  {
    question: 'How often should I have my sprinkler system professionally maintained?',
    answer: 'For optimal performance, we recommend professional maintenance at least twice a year—once in spring for system activation and once in fall for winterization. However, systems in areas with extreme weather conditions or those watering large or complex landscapes may benefit from quarterly maintenance visits to ensure peak efficiency year-round.'
  },
  {
    question: 'What does a typical maintenance visit include?',
    answer: 'Our standard maintenance visit includes a complete system inspection, checking for leaks and broken components, cleaning and adjusting sprinkler heads, verifying proper coverage, testing the controller and sensors, adjusting seasonal watering schedules, and making minor repairs as needed. We also provide recommendations for any necessary upgrades or major repairs.'
  },
  {
    question: 'Why is winterization necessary for my sprinkler system?',
    answer: 'Winterization is crucial in Texas because even though our winters are relatively mild, we do experience occasional freezes. Water left in your irrigation system can freeze, expand, and cause pipes, valves, and sprinkler heads to crack or burst, resulting in costly repairs. Our winterization process removes all water from the system to prevent freeze damage.'
  },
  {
    question: 'How much does a maintenance plan cost?',
    answer: 'Our maintenance plans start at $249 per year for basic residential systems with up to 6 zones. Larger systems or those requiring more frequent service will have customized pricing based on your specific needs. All plans include priority scheduling for any necessary repairs throughout the year, which can save you money in the long run by preventing major system failures.'
  },
  {
    question: 'Can maintenance really save water and money?',
    answer: 'Absolutely. A properly maintained irrigation system can use 20-40% less water than a neglected one. Even small issues like misaligned heads or minor leaks can waste thousands of gallons of water annually. Regular maintenance ensures your system operates at peak efficiency, reducing water bills while maintaining a healthy landscape. Many customers find that their maintenance plan pays for itself in water savings alone.'
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
  
  // Add a location-specific FAQ about watering restrictions
  locationFAQs.push({
    question: `How do ${cityName}'s watering restrictions affect my sprinkler maintenance?`,
    answer: `${cityName} has specific watering restrictions that vary seasonally. Our maintenance program includes updating your controller programming to comply with these local regulations while still ensuring your landscape receives adequate water. We stay current with ${cityName}'s water conservation policies and adjust your system accordingly during each maintenance visit.`
  });
  
  // Add a location-specific FAQ about service timing
  locationFAQs.push({
    question: `When is the best time for sprinkler maintenance in ${cityName}?`,
    answer: `In ${cityName}, we recommend spring maintenance in March or early April before temperatures consistently rise above 80°F. Fall winterization is best scheduled in late November or early December, before the first freeze typically occurs in the area. For customers on quarterly plans, we'll schedule additional visits in summer and mid-fall to address seasonal challenges specific to ${cityName}'s climate.`
  });
  
  // Add a location-specific FAQ about common issues
  locationFAQs.push({
    question: `What are the most common sprinkler system issues in ${cityName}?`,
    answer: `In ${cityName}, we frequently encounter calcium buildup in sprinkler heads due to the hard water in the area, pressure fluctuations that affect system performance, and damage to components from the region's clay soil expansion and contraction. Our maintenance program specifically addresses these local challenges with targeted cleaning, pressure regulation, and flexible pipe installation where needed.`
  });
  
  return locationFAQs;
};

export default commonFAQs;
