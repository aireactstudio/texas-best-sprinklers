import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';
import { commonBenefits, commonServices, getLocationFAQs, getLocationProcess } from '../common';

const fortWorthData: ServiceContent = {
  title: 'Professional Irrigation Repair in Fort Worth, Texas',
  metaDescription: 'Expert sprinkler system repair services in Fort Worth. Fix leaks, broken heads, controller issues, and more with our prompt, professional irrigation repair service.',
  heroImage: '/assets/images/optimized/Irrigation-Repair.png',
  serviceType: ServiceType.IRRIGATION_REPAIR,
  intro: "Texas Best Sprinklers provides Fort Worth homeowners with reliable irrigation repair services to quickly identify and fix problems with your sprinkler system. Our experienced technicians can diagnose and repair any issue, from simple sprinkler head replacements to complex valve and controller repairs.",
  benefits: commonBenefits,
  services: commonServices,
  process: getLocationProcess('Fort Worth'),
  faqs: getLocationFAQs('Fort Worth'),
  testimonial: {
    quote: "After struggling with a faulty zone valve for weeks, I called Texas Best Sprinklers. Their technician arrived promptly, diagnosed the issue quickly, and had my system working perfectly in less than an hour. Excellent service at a fair price!",
    author: "Michael R.",
    location: "Fort Worth, TX",
    rating: 5
  }
};

export default fortWorthData;
