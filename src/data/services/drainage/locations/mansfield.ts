import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const mansfieldData: ServiceContent = {
  title: 'Professional Drainage Solutions in Mansfield, TX',
  metaDescription: 'Expert drainage system installation and repair services in Mansfield. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-mansfield.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Mansfield homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Mansfield'),
  testimonial: {
    quote: "Texas Best Sprinklers installed a comprehensive drainage system that solved our persistent water issues. Their team was knowledgeable and efficient.",
    author: "Michelle P.",
    location: "Mansfield",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
