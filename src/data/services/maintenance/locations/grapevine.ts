import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';
import { commonBenefits, commonServices, getLocationFAQs, getLocationProcess } from '../common';

const grapevineData: ServiceContent = {
  title: 'Professional Sprinkler Maintenance in Grapevine, Texas',
  metaDescription: 'Expert sprinkler system maintenance services in Grapevine. Keep your irrigation system running efficiently with seasonal tune-ups, repairs, and winterization.',
  heroImage: '/assets/images/optimized/Sprinkler-Maintenance.png',
  serviceType: ServiceType.MAINTENANCE,
  intro: "Texas Best Sprinklers provides Grapevine property owners with comprehensive irrigation system maintenance services to keep your sprinkler system operating at peak efficiency year-round. Our professional maintenance programs prevent costly repairs and extend the life of your system while conserving water.",
  benefits: commonBenefits,
  services: commonServices,
  process: getLocationProcess('Grapevine'),
  faqs: getLocationFAQs('Grapevine'),
  testimonial: {
    quote: "I've been using Texas Best Sprinklers for seasonal maintenance for three years now. Their technicians are always thorough and professional, and my system runs flawlessly. The water savings alone have more than paid for the maintenance plan.",
    author: "Michael T.",
    location: "Grapevine, TX",
    rating: 5
  }
};

export default grapevineData;
export { grapevineData };
