import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';
import { commonBenefits, commonServices, getLocationFAQs, getLocationProcess } from '../common';

const northrichlandhillsData: ServiceContent = {
  title: 'Professional Irrigation Repair in North Richland Hills, Texas',
  metaDescription: 'Expert sprinkler system repair services in North Richland Hills. Fix leaks, broken heads, controller issues, and more with our prompt, professional irrigation repair service.',
  heroImage: '/assets/images/optimized/Irrigation-Repair.png',
  serviceType: ServiceType.IRRIGATION_REPAIR,
  intro: "Texas Best Sprinklers provides North Richland Hills homeowners with reliable irrigation repair services to quickly identify and fix problems with your sprinkler system. Our experienced technicians can diagnose and repair any issue, from simple sprinkler head replacements to complex valve and controller repairs.",
  benefits: commonBenefits,
  services: commonServices,
  process: getLocationProcess('North Richland Hills'),
  faqs: getLocationFAQs('North Richland Hills'),
  testimonial: {
    quote: "Texas Best Sprinklers did an excellent job repairing our irrigation system. They were prompt, professional, and fixed issues that other companies couldn't solve. Our lawn has never looked better!",
    author: "Satisfied Customer",
    location: "North Richland Hills, TX",
    rating: 5
  }
};

export default northrichlandhillsData;