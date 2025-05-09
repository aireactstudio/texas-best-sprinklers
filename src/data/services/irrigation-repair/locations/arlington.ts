import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';
import { commonBenefits, commonServices, getLocationFAQs, getLocationProcess } from '../common';

const arlingtonData: ServiceContent = {
  title: 'Professional Irrigation Repair in Arlington, Texas',
  metaDescription: 'Expert sprinkler system repair services in Arlington. Fix leaks, broken heads, controller issues, and more with our prompt, professional irrigation repair service.',
  heroImage: '/assets/images/optimized/Irrigation-Repair.png',
  serviceType: ServiceType.IRRIGATION_REPAIR,
  intro: "Texas Best Sprinklers provides Arlington homeowners with reliable irrigation repair services to quickly identify and fix problems with your sprinkler system. Our experienced technicians can diagnose and repair any issue, from simple sprinkler head replacements to complex valve and controller repairs.",
  benefits: commonBenefits,
  services: commonServices,
  process: getLocationProcess('Arlington'),
  faqs: getLocationFAQs('Arlington'),
  testimonial: {
    quote: "After a recent storm damaged several sprinkler heads in my yard, Texas Best Sprinklers came out promptly and replaced them all. They were professional, efficient, and even helped me adjust my watering schedule for better coverage. Excellent service!",
    author: "Robert J.",
    location: "Arlington, TX",
    rating: 5
  }
};

export default arlingtonData;
