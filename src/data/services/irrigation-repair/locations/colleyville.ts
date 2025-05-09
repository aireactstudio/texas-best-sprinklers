import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';
import { commonBenefits, commonServices, getLocationFAQs, getLocationProcess } from '../common';

const colleyvilleData: ServiceContent = {
  title: 'Professional Irrigation Repair in Colleyville, Texas',
  metaDescription: 'Expert sprinkler system repair services in Colleyville. Fix leaks, broken heads, controller issues, and more with our prompt, professional irrigation repair service.',
  heroImage: '/assets/images/optimized/Irrigation-Repair.png',
  serviceType: ServiceType.IRRIGATION_REPAIR,
  intro: "Texas Best Sprinklers provides Colleyville homeowners with reliable irrigation repair services to quickly identify and fix problems with your sprinkler system. Our experienced technicians can diagnose and repair any issue, from simple sprinkler head replacements to complex valve and controller repairs.",
  benefits: commonBenefits,
  services: commonServices,
  process: getLocationProcess('Colleyville'),
  faqs: getLocationFAQs('Colleyville'),
  testimonial: {
    quote: "My sprinkler system was having issues with several zones not working properly. Texas Best Sprinklers came out, diagnosed the electrical problems, and had everything working perfectly in just one visit. Their attention to detail and expertise is impressive!",
    author: "Elizabeth H.",
    location: "Colleyville, TX",
    rating: 5
  }
};

export default colleyvilleData;
