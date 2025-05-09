import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';
import { commonBenefits, commonServices, getLocationFAQs, getLocationProcess } from '../common';

const weatherfordData: ServiceContent = {
  title: 'Professional Irrigation Repair in Weatherford, Texas',
  metaDescription: 'Expert sprinkler system repair services in Weatherford. Fix leaks, broken heads, controller issues, and more with our prompt, professional irrigation repair service.',
  heroImage: '/assets/images/optimized/Irrigation-Repair.png',
  serviceType: ServiceType.IRRIGATION_REPAIR,
  intro: "Texas Best Sprinklers provides Weatherford homeowners with reliable irrigation repair services to quickly identify and fix problems with your sprinkler system. Our experienced technicians can diagnose and repair any issue, from simple sprinkler head replacements to complex valve and controller repairs.",
  benefits: commonBenefits,
  services: commonServices,
  process: getLocationProcess('Weatherford'),
  faqs: getLocationFAQs('Weatherford'),
  testimonial: {
    quote: "I've been using Texas Best Sprinklers for all my irrigation needs for years. Their repair service is always prompt and professional. When my controller stopped working, they came out the next day and had it replaced and programmed in no time. Highly recommend!",
    author: "Thomas W.",
    location: "Weatherford, TX",
    rating: 5
  }
};

export default weatherfordData;
