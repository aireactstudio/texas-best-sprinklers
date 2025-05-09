import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const weatherfordData: ServiceContent = {
  title: 'Professional Drainage Solutions in Weatherford, TX',
  metaDescription: 'Expert drainage system installation and repair services in Weatherford. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-weatherford.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Weatherford homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Weatherford'),
  testimonial: {
    quote: "After heavy rains caused flooding in our yard for years, Texas Best installed a drainage system that completely solved the problem. Their team was knowledgeable and efficient.",
    author: "Jennifer T.",
    location: "Weatherford",
    rating: 5
  },
  updatedAt: '2025-05-08'
};