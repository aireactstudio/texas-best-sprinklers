import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';
import { commonBenefits, commonServices, getLocationFAQs, getLocationProcess } from '../common';

const southlakeData: ServiceContent = {
  title: 'Professional Irrigation Repair in Southlake, Texas',
  metaDescription: 'Expert sprinkler system repair services in Southlake. Fix leaks, broken heads, controller issues, and more with our prompt, professional irrigation repair service.',
  heroImage: '/assets/images/optimized/Irrigation-Repair.png',
  serviceType: ServiceType.IRRIGATION_REPAIR,
  intro: "Texas Best Sprinklers provides Southlake homeowners with reliable irrigation repair services to quickly identify and fix problems with your sprinkler system. Our experienced technicians can diagnose and repair any issue, from simple sprinkler head replacements to complex valve and controller repairs.",
  benefits: commonBenefits,
  services: commonServices,
  process: getLocationProcess('Southlake'),
  faqs: getLocationFAQs('Southlake'),
  testimonial: {
    quote: "When my sprinkler system started leaking and causing water to pool in my yard, Texas Best Sprinklers came out the next day and fixed the issue. Their technician was knowledgeable, efficient, and left my yard looking pristine. Great service!",
    author: "David M.",
    location: "Southlake, TX",
    rating: 5
  }
};

export default southlakeData;
