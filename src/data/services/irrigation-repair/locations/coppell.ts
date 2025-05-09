import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';
import { commonBenefits, commonServices, getLocationFAQs, getLocationProcess } from '../common';

const coppellData: ServiceContent = {
  title: 'Professional Irrigation Repair in Coppell, Texas',
  metaDescription: 'Expert sprinkler system repair services in Coppell. Fix leaks, broken heads, controller issues, and more with our prompt, professional irrigation repair service.',
  heroImage: '/assets/images/optimized/Irrigation-Repair.png',
  serviceType: ServiceType.IRRIGATION_REPAIR,
  intro: "Texas Best Sprinklers provides Coppell homeowners with reliable irrigation repair services to quickly identify and fix problems with your sprinkler system. Our experienced technicians can diagnose and repair any issue, from simple sprinkler head replacements to complex valve and controller repairs.",
  benefits: commonBenefits,
  services: commonServices,
  process: getLocationProcess('Coppell'),
  faqs: getLocationFAQs('Coppell'),
  testimonial: {
    quote: "Texas Best Sprinklers did an excellent job repairing our irrigation system. They were prompt, professional, and fixed issues that other companies couldn't solve. Our lawn has never looked better!",
    author: "Satisfied Customer",
    location: "Coppell, TX",
    rating: 5
  }
};

export default coppellData;