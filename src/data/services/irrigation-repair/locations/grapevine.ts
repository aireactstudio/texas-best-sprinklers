import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';
import { commonBenefits, commonServices, getLocationFAQs, getLocationProcess } from '../common';

const grapevineData: ServiceContent = {
  title: 'Professional Irrigation Repair in Grapevine, Texas',
  metaDescription: 'Expert sprinkler system repair services in Grapevine. Fix leaks, broken heads, controller issues, and more with our prompt, professional irrigation repair service.',
  heroImage: '/assets/images/optimized/Irrigation-Repair.png',
  serviceType: ServiceType.IRRIGATION_REPAIR,
  intro: "Texas Best Sprinklers provides Grapevine homeowners with reliable irrigation repair services to quickly identify and fix problems with your sprinkler system. Our experienced technicians can diagnose and repair any issue, from simple sprinkler head replacements to complex valve and controller repairs.",
  benefits: commonBenefits,
  services: commonServices,
  process: getLocationProcess('Grapevine'),
  faqs: getLocationFAQs('Grapevine'),
  testimonial: {
    quote: "I had multiple zones not working in my sprinkler system, and Texas Best Sprinklers diagnosed and fixed the electrical issues quickly. They were thorough, professional, and their pricing was transparent. My system is now working better than ever!",
    author: "Sarah K.",
    location: "Grapevine, TX",
    rating: 5
  }
};

export default grapevineData;
