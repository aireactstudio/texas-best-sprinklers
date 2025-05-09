import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';
import { commonBenefits, commonServices, getLocationFAQs, getLocationProcess } from '../common';

const azleData: ServiceContent = {
  title: 'Professional Sprinkler Installation in Azle, Texas',
  metaDescription: 'Expert sprinkler system installation services in Azle. Get efficient, reliable irrigation with smart technology and professional design for your lawn and landscape.',
  heroImage: '/assets/images/optimized/Sprinkler-Installation.png',
  serviceType: ServiceType.SPRINKLER_INSTALLATION,
  intro: "Texas Best Sprinklers provides Azle homeowners with professional irrigation system installation services to keep your lawn and landscape healthy and vibrant. Our custom-designed systems maximize water efficiency while ensuring complete coverage for your specific landscape needs.",
  benefits: commonBenefits,
  services: commonServices,
  process: getLocationProcess('Azle'),
  faqs: getLocationFAQs('Azle'),
  testimonial: {
    quote: "The team at Texas Best Sprinklers designed and installed a fantastic irrigation system for our property. They were professional, knowledgeable, and completed the work on schedule. Our lawn has never looked better!",
    author: "Jennifer L.",
    location: "Azle, TX",
    rating: 5
  }
};

export default azleData;
export { azleData };
