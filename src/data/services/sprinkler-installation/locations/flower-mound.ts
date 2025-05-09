import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';
import { commonBenefits, commonServices, getLocationFAQs, getLocationProcess } from '../common';

const flowerMoundData: ServiceContent = {
  title: 'Professional Sprinkler Installation in Flower Mound, Texas',
  metaDescription: 'Expert sprinkler system installation services in Flower Mound. Get efficient, reliable irrigation with smart technology and professional design for your lawn and landscape.',
  heroImage: '/assets/images/optimized/Sprinkler-Installation.png',
  serviceType: ServiceType.SPRINKLER_INSTALLATION,
  intro: "Texas Best Sprinklers provides Flower Mound homeowners with professional irrigation system installation services to keep your lawn and landscape healthy and vibrant. Our custom-designed systems maximize water efficiency while ensuring complete coverage for your specific landscape needs.",
  benefits: commonBenefits,
  services: commonServices,
  process: getLocationProcess('Flower Mound'),
  faqs: getLocationFAQs('Flower Mound'),
  testimonial: {
    quote: "The team at Texas Best Sprinklers designed and installed a fantastic irrigation system for our property. They were professional, knowledgeable, and completed the work on schedule. Our lawn has never looked better!",
    author: "Jennifer L.",
    location: "Flower Mound, TX",
    rating: 5
  }
};

export default flowerMoundData;
export { flowerMoundData };
