import { FAQ } from '@/data/types/serviceTypes';

/**
 * Common FAQs for sprinkler installation services
 */
export const commonFAQs: FAQ[] = [
  {
    question: 'How long does it take to install a sprinkler system?',
    answer: 'The installation time depends on the size and complexity of your property. A typical residential installation usually takes 1-3 days. Larger properties or those with complex landscaping may take longer. We\'ll provide you with a specific timeline during the consultation process.'
  },
  {
    question: 'Do I need any permits to install a sprinkler system?',
    answer: 'In most Texas cities, you\'ll need a permit and possibly a backflow prevention device inspection. As licensed professionals, we handle all necessary permitting as part of our installation service, ensuring your system meets all local codes and requirements.'
  },
  {
    question: 'How much does a sprinkler system installation cost?',
    answer: 'The cost varies based on property size, system complexity, component quality, and additional features like smart controllers. We provide detailed, transparent quotes after our initial consultation. Most residential systems range from $2,500-$5,000, with larger or more complex systems costing more.'
  },
  {
    question: 'Will my yard be damaged during installation?',
    answer: 'We use minimally invasive installation techniques to protect your landscape. While some disruption is unavoidable, our experienced technicians take great care to minimize impact. We use specialized equipment to install pipes with minimal digging, and we carefully restore any affected areas after installation.'
  },
  {
    question: 'What type of maintenance will my new sprinkler system need?',
    answer: 'Regular maintenance includes seasonal adjustments, occasional head cleaning or replacement, and annual system checks. We recommend a professional inspection at least once a year. We offer maintenance plans to keep your system operating efficiently and extend its lifespan.'
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
  
  // Add a location-specific FAQ about water restrictions
  locationFAQs.push({
    question: `Are there specific water restrictions in ${cityName} that will affect my sprinkler system?`,
    answer: `Yes, ${cityName} has specific watering restrictions that vary by season. We design your system to comply with these local regulations and program your controller accordingly. Our smart controller options can automatically adjust to any changes in local water restrictions.`
  });
  
  // Add a location-specific FAQ about local rebates
  locationFAQs.push({
    question: `Are there any rebates available in ${cityName} for installing water-efficient irrigation systems?`,
    answer: `${cityName} occasionally offers rebate programs for water-efficient irrigation equipment. During our consultation, we'll inform you about any current rebate programs you may qualify for and help you with the necessary documentation to apply for these incentives.`
  });
  
  // Add a location-specific FAQ about service area
  locationFAQs.push({
    question: `Do you service all areas of ${cityName} for sprinkler installation?`,
    answer: `Yes, Texas Best Sprinklers provides complete sprinkler installation services throughout ${cityName} and surrounding areas. We're familiar with the specific soil conditions, landscaping trends, and water regulations in ${cityName}, allowing us to design systems perfectly suited to local conditions.`
  });
  
  return locationFAQs;
};

export default commonFAQs;
