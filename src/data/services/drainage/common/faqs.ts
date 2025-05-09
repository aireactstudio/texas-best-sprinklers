import { FAQ } from '../../../types/serviceTypes';

/**
 * Get common FAQs for drainage services with location-specific customization
 */
export const getCommonFAQs = (location: string): FAQ[] => {
  return [
    {
      question: `How do I know if I need a drainage system for my ${location} property?`,
      answer: `Signs you need drainage solutions include: standing water in your yard 24+ hours after rain, water pooling near your foundation, basement or crawl space moisture, landscape erosion, or soggy areas in your lawn. ${location}'s soil conditions often exacerbate drainage issues, making proper water management crucial.`
    },
    {
      question: 'How long does drainage system installation take?',
      answer: `Most residential drainage system installations in ${location} are completed within 1-3 days, depending on the complexity and size of the system. Larger properties or more extensive systems may take 3-5 days.`
    },
    {
      question: 'Will a drainage system damage my landscape?',
      answer: 'While some disruption is inevitable during installation, our team minimizes impact and restores affected areas. We carefully plan pipe routes, use specialized equipment to reduce damage, and restore landscaping after installation. The long-term benefits far outweigh the temporary disruption.'
    },
    {
      question: 'How long will my drainage system last?',
      answer: `With proper installation and materials, a professional drainage system typically lasts 25-50 years in the ${location} climate. We use commercial-grade materials and proper installation techniques to ensure longevity.`
    },
    {
      question: 'Do drainage systems require maintenance?',
      answer: 'Yes, periodic maintenance ensures optimal performance. This includes clearing debris from drain grates, occasional flushing of pipes, and inspection of discharge points. We offer maintenance plans to keep your system functioning properly year after year.'
    }
  ];
};