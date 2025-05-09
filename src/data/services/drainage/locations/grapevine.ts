import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const grapevineData: ServiceContent = {
  title: 'Professional Drainage Solutions in Grapevine, TX',
  metaDescription: 'Expert drainage system installation and repair services in Grapevine. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-grapevine.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Grapevine homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Grapevine'),
  testimonial: {
    quote: "The drainage solution from Texas Best Sprinklers has completely transformed our yard. No more standing water after rain, and their team was excellent to work with.",
    author: "William H.",
    location: "Grapevine",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
