import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';
import { commonBenefits, commonServices, getLocationFAQs, getLocationProcess } from '../common';

const kellerData: ServiceContent = {
  title: 'Professional Irrigation Repair in Keller, Texas',
  metaDescription: 'Expert sprinkler system repair services in Keller. Fix leaks, broken heads, controller issues, and more with our prompt, professional irrigation repair service.',
  heroImage: '/assets/images/optimized/Irrigation-Repair.png',
  serviceType: ServiceType.IRRIGATION_REPAIR,
  intro: "Texas Best Sprinklers provides Keller homeowners with reliable irrigation repair services to quickly identify and fix problems with your sprinkler system. Our experienced technicians can diagnose and repair any issue, from simple sprinkler head replacements to complex valve and controller repairs.",
  benefits: commonBenefits,
  services: commonServices,
  process: getLocationProcess('Keller'),
  faqs: getLocationFAQs('Keller'),
  testimonial: {
    quote: "I've used Texas Best Sprinklers for several years now for all my irrigation needs in Keller. Their repair service is always prompt, professional, and they take the time to explain what they're doing. Highly recommend!",
    author: "Jennifer T.",
    location: "Keller, TX",
    rating: 5
  }
};

export default kellerData;
