import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';
import { commonBenefits, commonServices, getLocationFAQs, getLocationProcess } from '../common';

const bedfordData: ServiceContent = {
  title: 'Professional Irrigation Repair in Bedford, Texas',
  metaDescription: 'Expert sprinkler system repair services in Bedford. Fix leaks, broken heads, controller issues, and more with our prompt, professional irrigation repair service.',
  heroImage: '/assets/images/optimized/Irrigation-Repair.png',
  serviceType: ServiceType.IRRIGATION_REPAIR,
  intro: "Texas Best Sprinklers provides Bedford homeowners with reliable irrigation repair services to quickly identify and fix problems with your sprinkler system. Our experienced technicians can diagnose and repair any issue, from simple sprinkler head replacements to complex valve and controller repairs.",
  benefits: commonBenefits,
  services: commonServices,
  process: getLocationProcess('Bedford'),
  faqs: getLocationFAQs('Bedford'),
  testimonial: {
    quote: "I called Texas Best Sprinklers when my system started leaking and causing my water bill to skyrocket. They found and fixed the underground leak quickly without tearing up my yard. Their technician was knowledgeable and professional. Excellent service!",
    author: "Patricia L.",
    location: "Bedford, TX",
    rating: 5
  }
};

export default bedfordData;
