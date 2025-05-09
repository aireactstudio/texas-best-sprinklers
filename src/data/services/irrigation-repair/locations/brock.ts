import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';
import { commonBenefits, commonServices, getLocationFAQs, getLocationProcess } from '../common';

const brockData: ServiceContent = {
  title: 'Professional Irrigation Repair in Brock, Texas',
  metaDescription: 'Expert sprinkler system repair services in Brock. Fix leaks, broken heads, controller issues, and more with our prompt, professional irrigation repair service.',
  heroImage: '/assets/images/optimized/Irrigation-Repair.png',
  serviceType: ServiceType.IRRIGATION_REPAIR,
  intro: "Texas Best Sprinklers provides Brock homeowners with reliable irrigation repair services to quickly identify and fix problems with your sprinkler system. Our experienced technicians can diagnose and repair any issue, from simple sprinkler head replacements to complex valve and controller repairs.",
  benefits: commonBenefits,
  services: commonServices,
  process: getLocationProcess('Brock'),
  faqs: getLocationFAQs('Brock'),
  testimonial: {
    quote: "Texas Best Sprinklers did an excellent job repairing our irrigation system. They were prompt, professional, and fixed issues that other companies couldn't solve. Our lawn has never looked better!",
    author: "Satisfied Customer",
    location: "Brock, TX",
    rating: 5
  }
};

export default brockData;