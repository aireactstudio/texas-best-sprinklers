import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const brockData: ServiceContent = {
  title: 'Professional Drainage Solutions in Brock, TX',
  metaDescription: 'Expert drainage system installation and repair services in Brock. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-brock.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Brock homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Brock'),
  testimonial: {
    quote: "After heavy rains caused flooding in our yard for years, Texas Best installed a drainage system that completely solved the problem. Excellent service and results!",
    author: "Steven G.",
    location: "Brock",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
