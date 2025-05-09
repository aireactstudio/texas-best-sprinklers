import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const peasterData: ServiceContent = {
  title: 'Professional Drainage Solutions in Peaster, TX',
  metaDescription: 'Expert drainage system installation and repair services in Peaster. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-peaster.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Peaster homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Peaster'),
  testimonial: {
    quote: "The drainage solution from Texas Best Sprinklers has completely eliminated the standing water issues in our yard. Their team was knowledgeable and efficient.",
    author: "Brian K.",
    location: "Peaster",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
