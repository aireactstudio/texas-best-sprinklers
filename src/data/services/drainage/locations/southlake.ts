import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const southlakeData: ServiceContent = {
  title: 'Professional Drainage Solutions in Southlake, TX',
  metaDescription: 'Expert drainage system installation and repair services in Southlake. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-southlake.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Southlake homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Southlake'),
  testimonial: {
    quote: "The drainage solution from Texas Best Sprinklers has completely transformed our property. Their expertise and attention to detail were impressive.",
    author: "Robert S.",
    location: "Southlake",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
