import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';
import { commonBenefits, commonServices, getLocationFAQs, getLocationProcess } from '../common';

const arlingtonData: ServiceContent = {
  title: 'Professional Outdoor Lighting in Arlington, Texas',
  metaDescription: 'Expert outdoor lighting design and installation in Arlington. Enhance your home\'s security, safety, and curb appeal with custom landscape and architectural lighting.',
  heroImage: '/assets/images/optimized/Outdoor-Lighting.png',
  serviceType: ServiceType.OUTDOOR_LIGHTING,
  intro: "Texas Best Sprinklers provides Arlington homeowners with professional outdoor lighting services that enhance your property\'s beauty, security, and functionality. Our custom lighting designs highlight your home\'s best features while providing safety and security after dark.",
  benefits: commonBenefits,
  services: commonServices,
  process: getLocationProcess('Arlington'),
  faqs: getLocationFAQs('Arlington'),
  testimonial: {
    quote: "The lighting system Texas Best Sprinklers installed transformed our home\'s exterior. Not only does our house look stunning at night, but we feel much safer with the improved visibility around our property.",
    author: "Robert K.",
    location: "Arlington, TX",
    rating: 5
  }
};

export default arlingtonData;
export { arlingtonData };
