import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';
import { commonBenefits, commonServices, getLocationFAQs, getLocationProcess } from '../common';

const hudsonOaksData: ServiceContent = {
  title: 'Professional Sprinkler Maintenance in Hudson Oaks, Texas',
  metaDescription: 'Expert sprinkler system maintenance services in Hudson Oaks. Keep your irrigation system running efficiently with seasonal tune-ups, repairs, and winterization.',
  heroImage: '/assets/images/optimized/Sprinkler-Maintenance.png',
  serviceType: ServiceType.MAINTENANCE,
  intro: "Texas Best Sprinklers provides Hudson Oaks property owners with comprehensive irrigation system maintenance services to keep your sprinkler system operating at peak efficiency year-round. Our professional maintenance programs prevent costly repairs and extend the life of your system while conserving water.",
  benefits: commonBenefits,
  services: commonServices,
  process: getLocationProcess('Hudson Oaks'),
  faqs: getLocationFAQs('Hudson Oaks'),
  testimonial: {
    quote: "I've been using Texas Best Sprinklers for seasonal maintenance for three years now. Their technicians are always thorough and professional, and my system runs flawlessly. The water savings alone have more than paid for the maintenance plan.",
    author: "Michael T.",
    location: "Hudson Oaks, TX",
    rating: 5
  }
};

export default hudsonOaksData;
export { hudsonOaksData };
